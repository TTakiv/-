import { GEMINI_WORKER_URL, APP_SHARED_SECRET } from './geminiConfig';

export class GeminiOcrError extends Error {
  kind: 'quota' | 'network' | 'server' | 'config';
  constructor(kind: GeminiOcrError['kind'], message: string) {
    super(message);
    this.kind = kind;
  }
}

/** Downscale/compress a photo before upload, to keep requests fast on mobile networks. */
async function prepareImage(img: HTMLImageElement, maxDimension = 1600): Promise<{ base64: string; mimeType: string }> {
  const scale = Math.min(1, maxDimension / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, w, h);

  const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
  const base64 = dataUrl.split(',')[1];
  return { base64, mimeType: 'image/jpeg' };
}

/**
 * Send a photo to the Gemini-backed Worker and get back the card names it
 * found, in the order they appear in the photo. Throws GeminiOcrError with
 * a `kind` the caller can show a sensible message for:
 *   'quota'   - free-tier rate limit hit (never a charge, billing is off)
 *   'network' - couldn't reach the Worker at all
 *   'server'  - Worker or Gemini returned something unexpected
 *   'config'  - Worker URL not set up yet
 */
export async function recognizeCardsWithGemini(img: HTMLImageElement): Promise<string[]> {
  if (!GEMINI_WORKER_URL) {
    throw new GeminiOcrError('config', 'Geminiの中継サーバーがまだ設定されていません。');
  }

  const { base64, mimeType } = await prepareImage(img);

  let res: Response;
  try {
    res = await fetch(GEMINI_WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-App-Secret': APP_SHARED_SECRET,
      },
      body: JSON.stringify({ imageBase64: base64, mimeType }),
    });
  } catch {
    throw new GeminiOcrError('network', 'サーバーに接続できませんでした。通信環境をご確認ください。');
  }

  if (res.status === 429) {
    throw new GeminiOcrError('quota', '本日の無料利用枠の上限に達した可能性があります。しばらくしてから再度お試しください。');
  }
  if (!res.ok) {
    throw new GeminiOcrError('server', `読み取りに失敗しました (status ${res.status})`);
  }

  let data: { names?: unknown };
  try {
    data = await res.json();
  } catch {
    throw new GeminiOcrError('server', '読み取り結果を解析できませんでした。');
  }

  if (!Array.isArray(data.names)) {
    throw new GeminiOcrError('server', '読み取り結果の形式が不正です。');
  }

  return data.names.filter((n): n is string => typeof n === 'string' && n.trim().length > 0);
}
