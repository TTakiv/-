import Fuse from 'fuse.js';
import type { CardEntry } from '../domain/types';
import { normalizeCardName } from '../lib/normalize';

export interface CardMatch {
  card: CardEntry;
  score: number; // 0 = perfect match, higher = worse
}

/**
 * Given OCR text lines from a photographed card, find the best matching
 * card(s) already known in the local database. Lines are tried longest
 * first since the card title is usually the most prominent text.
 */
export function matchCardLines(lines: string[], cards: CardEntry[], limit = 5): CardMatch[] {
  if (cards.length === 0) return [];
  const fuse = new Fuse(cards, {
    keys: ['matchKey'],
    includeScore: true,
    threshold: 0.45,
    ignoreLocation: true,
  });

  const candidates = [...lines].sort((a, b) => b.length - a.length).slice(0, 6);
  const seen = new Map<number, CardMatch>();

  for (const line of candidates) {
    const key = normalizeCardName(line);
    if (!key) continue;
    const results = fuse.search(key, { limit });
    for (const r of results) {
      const id = r.item.id!;
      const score = r.score ?? 1;
      const prior = seen.get(id);
      if (!prior || score < prior.score) {
        seen.set(id, { card: r.item, score });
      }
    }
  }

  return [...seen.values()].sort((a, b) => a.score - b.score).slice(0, limit);
}
