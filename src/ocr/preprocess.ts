export interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export async function loadImage(source: File | Blob | string): Promise<HTMLImageElement> {
  const url = typeof source === 'string' ? source : URL.createObjectURL(source);
  const img = new Image();
  img.decoding = 'async';
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error('画像の読み込みに失敗しました'));
    img.src = url;
  });
  return img;
}

function clampInt(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

/** Separable box blur, used to smooth fine paper/print texture before thresholding. */
function boxBlur(src: Uint8ClampedArray, w: number, h: number, radius: number): Uint8ClampedArray {
  if (radius <= 0) return src;
  const size = radius * 2 + 1;
  const tmp = new Float32Array(w * h);
  const out = new Uint8ClampedArray(w * h);

  for (let y = 0; y < h; y++) {
    const rowOff = y * w;
    let sum = 0;
    for (let x = -radius; x <= radius; x++) sum += src[rowOff + clampInt(x, 0, w - 1)];
    for (let x = 0; x < w; x++) {
      tmp[rowOff + x] = sum / size;
      sum += src[rowOff + clampInt(x + radius + 1, 0, w - 1)] - src[rowOff + clampInt(x - radius, 0, w - 1)];
    }
  }
  for (let x = 0; x < w; x++) {
    let sum = 0;
    for (let y = -radius; y <= radius; y++) sum += tmp[clampInt(y, 0, h - 1) * w + x];
    for (let y = 0; y < h; y++) {
      out[y * w + x] = sum / size;
      sum += tmp[clampInt(y + radius + 1, 0, h - 1) * w + x] - tmp[clampInt(y - radius, 0, h - 1) * w + x];
    }
  }
  return out;
}

/**
 * Clear any "text" pixel reachable from the crop's outer border without
 * leaving the text mask (4-connected flood fill), turning it back to
 * background. Agricola name banners are trapezoid-shaped, so a rectangular
 * crop around one almost always catches slivers of the darker card
 * background in its corners; after thresholding those slivers are large
 * blobs touching the image edge, which this removes, while the actual
 * name glyphs (which don't reach the crop border, given a little margin)
 * are left untouched.
 */
function clearBorderConnected(isText: Uint8Array, w: number, h: number): void {
  const visited = new Uint8Array(w * h);
  const stack: number[] = [];

  function seed(idx: number) {
    if (isText[idx] && !visited[idx]) {
      visited[idx] = 1;
      stack.push(idx);
    }
  }
  for (let x = 0; x < w; x++) {
    seed(x);
    seed((h - 1) * w + x);
  }
  for (let y = 0; y < h; y++) {
    seed(y * w);
    seed(y * w + w - 1);
  }

  while (stack.length > 0) {
    const idx = stack.pop()!;
    isText[idx] = 0;
    const x = idx % w;
    const y = (idx / w) | 0;
    if (x > 0) seed(idx - 1);
    if (x < w - 1) seed(idx + 1);
    if (y > 0) seed(idx - w);
    if (y < h - 1) seed(idx + w);
  }
}

/** Otsu's method: pick the gray threshold that best splits the histogram into two classes. */
function otsuThreshold(hist: Float64Array, total: number): number {
  let sum = 0;
  for (let t = 0; t < 256; t++) sum += t * hist[t];

  let sumB = 0;
  let weightB = 0;
  let maxVariance = 0;
  let threshold = 127;

  for (let t = 0; t < 256; t++) {
    weightB += hist[t];
    if (weightB === 0) continue;
    const weightF = total - weightB;
    if (weightF === 0) break;

    sumB += t * hist[t];
    const meanB = sumB / weightB;
    const meanF = (sum - sumB) / weightF;
    const variance = weightB * weightF * (meanB - meanF) * (meanB - meanF);
    if (variance > maxVariance) {
      maxVariance = variance;
      threshold = t;
    }
  }
  return threshold;
}

/**
 * Crop to the given rectangle (in the image's natural pixel coordinates),
 * upscale for legibility, blur slightly to smooth fine print texture, then
 * binarize to clean black-text-on-white using Otsu's method. Agricola card
 * names print as bold text on a solid-color banner, so a hard black/white
 * split removes the banner color and card art entirely, which helps
 * Tesseract far more than a grayscale/contrast pass alone. Whichever class
 * (light or dark) covers less of the crop is assumed to be the text and is
 * normalized to black, so this works for both dark-text-on-light and
 * light-text-on-dark banners. Finally, any binarized "text" blob still
 * touching the crop's outer edge is cleared — those are darker card
 * background bleeding into the corners of a rectangular crop around a
 * trapezoid-shaped name banner, not text, and left in place they turn into
 * large black regions that badly confuse Tesseract's layout analysis.
 */
export function cropAndEnhance(
  img: HTMLImageElement,
  rect: CropRect,
  minOutputWidth = 1400,
  minOutputHeight = 220,
): Promise<Blob> {
  const scale = Math.max(
    1,
    minOutputWidth / Math.max(1, rect.width),
    minOutputHeight / Math.max(1, rect.height),
  );
  const outW = Math.max(1, Math.round(rect.width * scale));
  const outH = Math.max(1, Math.round(rect.height * scale));

  const canvas = document.createElement('canvas');
  canvas.width = outW;
  canvas.height = outH;
  const ctx = canvas.getContext('2d')!;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, rect.x, rect.y, rect.width, rect.height, 0, 0, outW, outH);

  const imageData = ctx.getImageData(0, 0, outW, outH);
  const data = imageData.data;
  const pixelCount = outW * outH;
  const rawGray = new Uint8ClampedArray(pixelCount);
  for (let i = 0, p = 0; i < data.length; i += 4, p++) {
    rawGray[p] = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
  }
  const gray = boxBlur(rawGray, outW, outH, 1);

  const hist = new Float64Array(256);
  for (let p = 0; p < pixelCount; p++) hist[gray[p]]++;

  const threshold = otsuThreshold(hist, pixelCount);
  let darkCount = 0;
  for (let t = 0; t < threshold; t++) darkCount += hist[t];
  const darkIsText = darkCount <= pixelCount - darkCount;

  const isText = new Uint8Array(pixelCount);
  for (let p = 0; p < pixelCount; p++) {
    const isDark = gray[p] < threshold;
    isText[p] = (darkIsText ? isDark : !isDark) ? 1 : 0;
  }
  clearBorderConnected(isText, outW, outH);

  for (let p = 0, i = 0; p < pixelCount; p++, i += 4) {
    const v = isText[p] ? 0 : 255;
    data[i] = data[i + 1] = data[i + 2] = v;
  }
  ctx.putImageData(imageData, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('画像処理に失敗しました'))),
      'image/png',
    );
  });
}

export function fullImageRect(img: HTMLImageElement): CropRect {
  return { x: 0, y: 0, width: img.naturalWidth, height: img.naturalHeight };
}

/**
 * Rotate an image by a multiple of 90 degrees, returning a new image blob.
 * Photos of cards laid flat are often captured sideways (or the cards
 * themselves are turned 90 degrees to fan several out in one frame), and
 * Tesseract cannot read sideways text — it needs to be turned upright
 * before cropping/OCR.
 */
export function rotateImageBlob(img: HTMLImageElement, degrees: 90 | 180 | 270): Promise<Blob> {
  const swap = degrees === 90 || degrees === 270;
  const w = img.naturalWidth;
  const h = img.naturalHeight;
  const canvas = document.createElement('canvas');
  canvas.width = swap ? h : w;
  canvas.height = swap ? w : h;
  const ctx = canvas.getContext('2d')!;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((degrees * Math.PI) / 180);
  ctx.drawImage(img, -w / 2, -h / 2);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('回転処理に失敗しました'))),
      'image/png',
    );
  });
}
