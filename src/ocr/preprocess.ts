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

export function fullImageRect(img: HTMLImageElement): CropRect {
  return { x: 0, y: 0, width: img.naturalWidth, height: img.naturalHeight };
}

/**
 * Crop to the given rectangle in full color, with no processing beyond the
 * crop itself. Used for the board reference photo, which the user just
 * looks at while entering counts. Downscales to maxDimension if given, to
 * keep saved-game records a reasonable size.
 */
export function cropPlain(img: HTMLImageElement, rect: CropRect, maxDimension?: number): Promise<Blob> {
  const scale = maxDimension ? Math.min(1, maxDimension / Math.max(rect.width, rect.height)) : 1;
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(rect.width * scale));
  canvas.height = Math.max(1, Math.round(rect.height * scale));
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, rect.x, rect.y, rect.width, rect.height, 0, 0, canvas.width, canvas.height);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('画像処理に失敗しました'))),
      'image/jpeg',
      0.9,
    );
  });
}

/** Converts a Blob to a base64 data URL so it can be stored in localStorage/IndexedDB as plain JSON. */
export function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('画像の変換に失敗しました'));
    reader.readAsDataURL(blob);
  });
}

/**
 * Rotate an image by a multiple of 90 degrees, returning a new image blob.
 * Used to straighten a sideways/upside-down photo before saving or sending
 * it off for recognition.
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
