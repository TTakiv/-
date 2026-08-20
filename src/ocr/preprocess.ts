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

/**
 * Crop to the given rectangle (in the image's natural pixel coordinates),
 * then convert to grayscale and stretch contrast so faint printed text
 * separates from busy card-art backgrounds. Also upscales small crops,
 * since Tesseract reads higher-resolution text far more reliably.
 */
export function cropAndEnhance(
  img: HTMLImageElement,
  rect: CropRect,
  minOutputWidth = 900,
): Promise<Blob> {
  const scale = Math.max(1, minOutputWidth / Math.max(1, rect.width));
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
  const gray = new Float32Array(outW * outH);
  let min = 255;
  let max = 0;
  for (let i = 0, p = 0; i < data.length; i += 4, p++) {
    const g = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    gray[p] = g;
    if (g < min) min = g;
    if (g > max) max = g;
  }
  const range = Math.max(1, max - min);
  for (let p = 0, i = 0; p < gray.length; p++, i += 4) {
    const v = ((gray[p] - min) / range) * 255;
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
