import type { CropRect } from './preprocess';

export interface BlobCountResult {
  count: number;
  previewBlob: Blob;
}

interface Component {
  size: number;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

/**
 * Best-effort piece counter for a cropped photo region: classifies each
 * pixel as "background" (the table/board surface, assumed to be whichever
 * color covers most of the crop) or "piece" (anything different enough in
 * color), then counts connected blobs of piece-colored pixels.
 *
 * This is plain client-side color-distance segmentation, not a trained
 * object detector — there is no free general-purpose model that recognizes
 * Agricola-specific components, and the farmyard layout is different for
 * every player so a fixed template isn't possible either. Accuracy
 * depends heavily on lighting, angle, and how much pieces overlap or cast
 * shadows onto each other, so this is meant as a starting guess the user
 * reviews (and the overlay preview highlights exactly what was counted)
 * rather than a precise result.
 */
export function countBlobs(img: HTMLImageElement, rect: CropRect): Promise<BlobCountResult> {
  const minOutputWidth = 900;
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
  const pixelCount = outW * outH;

  // Find the dominant color (coarse-quantized histogram mode) and treat it
  // as "background" — for a farmyard-region crop that's the board/table.
  const hist = new Map<number, number>();
  for (let i = 0; i < data.length; i += 4) {
    const key = (data[i] >> 4) << 8 | (data[i + 1] >> 4) << 4 | (data[i + 2] >> 4);
    hist.set(key, (hist.get(key) ?? 0) + 1);
  }
  let bgKey = 0;
  let bgCount = -1;
  for (const [key, count] of hist) {
    if (count > bgCount) {
      bgCount = count;
      bgKey = key;
    }
  }
  const bgR = ((bgKey >> 8) & 0xf) * 16 + 8;
  const bgG = ((bgKey >> 4) & 0xf) * 16 + 8;
  const bgB = (bgKey & 0xf) * 16 + 8;

  const COLOR_DISTANCE_THRESHOLD = 55;
  const isForeground = new Uint8Array(pixelCount);
  for (let p = 0, i = 0; p < pixelCount; p++, i += 4) {
    const dr = data[i] - bgR;
    const dg = data[i + 1] - bgG;
    const db = data[i + 2] - bgB;
    isForeground[p] = Math.sqrt(dr * dr + dg * dg + db * db) > COLOR_DISTANCE_THRESHOLD ? 1 : 0;
  }

  const visited = new Uint8Array(pixelCount);
  const stack: number[] = [];
  const components: Component[] = [];

  for (let start = 0; start < pixelCount; start++) {
    if (!isForeground[start] || visited[start]) continue;
    visited[start] = 1;
    stack.push(start);
    let size = 0;
    let minX = outW;
    let maxX = 0;
    let minY = outH;
    let maxY = 0;

    while (stack.length > 0) {
      const idx = stack.pop()!;
      size++;
      const x = idx % outW;
      const y = (idx / outW) | 0;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;

      if (x > 0 && !visited[idx - 1] && isForeground[idx - 1]) {
        visited[idx - 1] = 1;
        stack.push(idx - 1);
      }
      if (x < outW - 1 && !visited[idx + 1] && isForeground[idx + 1]) {
        visited[idx + 1] = 1;
        stack.push(idx + 1);
      }
      if (y > 0 && !visited[idx - outW] && isForeground[idx - outW]) {
        visited[idx - outW] = 1;
        stack.push(idx - outW);
      }
      if (y < outH - 1 && !visited[idx + outW] && isForeground[idx + outW]) {
        visited[idx + outW] = 1;
        stack.push(idx + outW);
      }
    }

    components.push({ size, minX, maxX, minY, maxY });
  }

  const minArea = pixelCount * 0.0015;
  const maxArea = pixelCount * 0.35;
  const pieces = components.filter((c) => c.size >= minArea && c.size <= maxArea);

  ctx.lineWidth = Math.max(2, outW * 0.004);
  ctx.strokeStyle = '#ff3b30';
  ctx.font = `${Math.max(16, Math.round(outW * 0.03))}px system-ui, sans-serif`;
  ctx.fillStyle = '#ff3b30';
  pieces.forEach((c, i) => {
    const w = c.maxX - c.minX + 1;
    const h = c.maxY - c.minY + 1;
    ctx.strokeRect(c.minX - 2, c.minY - 2, w + 4, h + 4);
    ctx.fillText(String(i + 1), c.minX, Math.max(12, c.minY - 4));
  });

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('画像処理に失敗しました'));
        return;
      }
      resolve({ count: pieces.length, previewBlob: blob });
    }, 'image/png');
  });
}
