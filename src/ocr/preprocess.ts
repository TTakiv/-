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
 * upscale for legibility, then binarize to clean black-text-on-white using
 * Otsu's method. Agricola card names print as bold text on a solid-color
 * banner, so a hard black/white split removes the banner color and card
 * art entirely, which helps Tesseract far more than a grayscale/contrast
 * pass alone. Whichever class (light or dark) covers less of the crop is
 * assumed to be the text and is normalized to black, so this works for
 * both dark-text-on-light and light-text-on-dark banners.
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
  const gray = new Uint8ClampedArray(pixelCount);
  const hist = new Float64Array(256);
  for (let i = 0, p = 0; i < data.length; i += 4, p++) {
    const g = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    gray[p] = g;
    hist[gray[p]]++;
  }

  const threshold = otsuThreshold(hist, pixelCount);
  let darkCount = 0;
  for (let t = 0; t < threshold; t++) darkCount += hist[t];
  const darkIsText = darkCount <= pixelCount - darkCount;

  for (let p = 0, i = 0; p < pixelCount; p++, i += 4) {
    const isDark = gray[p] < threshold;
    const isText = darkIsText ? isDark : !isDark;
    const v = isText ? 0 : 255;
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
