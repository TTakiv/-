import type { GameRecord } from '../domain/types';
import { playerPhotos } from './playerPhotos';

export function buildShareText(game: GameRecord): string {
  const ranked = [...game.players].sort((a, b) => b.totalScore - a.totalScore);
  const top = ranked[0];
  return `${game.players.length}人戦 ${top.totalScore}点で`;
}

export function shareToX(text: string): void {
  const url = `https://x.com/intent/post?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/** All photos (board + every card) of the first player that has any, highest-scoring player first. */
function pickRepresentativePhotos(game: GameRecord): string[] {
  const ranked = [...game.players].sort((a, b) => b.totalScore - a.totalScore);
  for (const p of ranked) {
    const photos = playerPhotos(p);
    if (photos.length > 0) return photos;
  }
  return [];
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

/** Share via the OS share sheet, including all of a representative player's photos (board + cards) when available. */
export async function sharePhoto(game: GameRecord, text: string): Promise<void> {
  const photos = pickRepresentativePhotos(game);
  const shareData: ShareData = { text };
  if (photos.length > 0) {
    const files = await Promise.all(photos.map((p, i) => dataUrlToFile(p, `agricola-${i + 1}.jpg`)));
    // Some share targets only accept a single file; fall back to just the first one.
    shareData.files = navigator.canShare({ files }) ? files : [files[0]];
  }
  await navigator.share(shareData);
}
