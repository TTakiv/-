import type { GameRecord } from '../domain/types';
import { playerPhotos } from './playerPhotos';

export function buildShareText(game: GameRecord): string {
  const ranked = [...game.players].sort((a, b) => b.totalScore - a.totalScore);
  const lines = [
    `${game.title} のアグリコラの結果`,
    ...ranked.map((p, i) => `${i + 1}位: ${p.name} ${p.totalScore}点`),
    '#アグリコラ',
  ];
  return lines.join('\n');
}

export function shareToX(text: string): void {
  const url = `https://x.com/intent/post?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/** First available photo among the game's players (highest-scoring player first), if any. */
function pickRepresentativePhoto(game: GameRecord): string | undefined {
  const ranked = [...game.players].sort((a, b) => b.totalScore - a.totalScore);
  for (const p of ranked) {
    const photos = playerPhotos(p);
    if (photos.length > 0) return photos[0];
  }
  return undefined;
}

async function dataUrlToFile(dataUrl: string, filename: string): Promise<File> {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], filename, { type: blob.type || 'image/jpeg' });
}

/** Whether the browser can share an image file via the native share sheet. */
export function canSharePhoto(): boolean {
  if (typeof navigator === 'undefined' || !navigator.share || !navigator.canShare) return false;
  try {
    const probe = new File([''], 'probe.jpg', { type: 'image/jpeg' });
    return navigator.canShare({ files: [probe] });
  } catch {
    return false;
  }
}

/** Share via the OS share sheet, including a representative photo when the game has one. */
export async function sharePhoto(game: GameRecord, text: string): Promise<void> {
  const photo = pickRepresentativePhoto(game);
  const shareData: ShareData = { text };
  if (photo) {
    const file = await dataUrlToFile(photo, 'agricola.jpg');
    shareData.files = [file];
  }
  await navigator.share(shareData);
}
