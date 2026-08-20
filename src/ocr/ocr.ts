import { createWorker, type Worker } from 'tesseract.js';

export type OcrLang = 'jpn' | 'eng' | 'jpn+eng';

let workerPromise: Promise<Worker> | null = null;
let workerLang: OcrLang | null = null;

async function getWorker(lang: OcrLang): Promise<Worker> {
  if (workerPromise && workerLang === lang) return workerPromise;
  if (workerPromise) {
    const prev = await workerPromise;
    await prev.terminate();
  }
  workerLang = lang;
  workerPromise = createWorker(lang);
  return workerPromise;
}

export interface OcrResult {
  text: string;
  lines: string[];
}

/**
 * Run OCR on an image (File/Blob/dataURL) and return raw text plus
 * non-empty trimmed lines, ordered as detected (longest lines are usually
 * the printed card title on Agricola cards).
 */
export async function recognizeImage(
  image: File | Blob | string,
  lang: OcrLang = 'jpn+eng',
): Promise<OcrResult> {
  const worker = await getWorker(lang);
  const { data } = await worker.recognize(image);
  const lines = data.text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  return { text: data.text, lines };
}

export async function terminateOcr(): Promise<void> {
  if (workerPromise) {
    const w = await workerPromise;
    await w.terminate();
    workerPromise = null;
    workerLang = null;
  }
}
