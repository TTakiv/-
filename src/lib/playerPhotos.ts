import type { PlayerResult } from '../domain/types';

/** Board photo plus every distinct card photo for a player, in a stable order for the swipeable gallery. */
export function playerPhotos(p: PlayerResult): string[] {
  const cardPhotos = p.cards.map((c) => c.photo).filter((photo): photo is string => Boolean(photo));
  const all = p.boardPhoto ? [p.boardPhoto, ...cardPhotos] : cardPhotos;
  return Array.from(new Set(all));
}
