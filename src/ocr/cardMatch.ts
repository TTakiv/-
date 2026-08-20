import Fuse from 'fuse.js';
import type { CardEntry } from '../domain/types';
import { normalizeCardName } from '../lib/normalize';

export interface CardMatch {
  card: CardEntry;
  score: number; // 0 = perfect match, higher = worse
}

export interface LineMatch {
  line: string;
  match?: CardMatch;
}

/**
 * Match each OCR text line independently against the local card database.
 * Used when a single photo/crop contains several card names at once (e.g.
 * multiple cards fanned out so only each name strip is visible) — every
 * line is treated as a candidate card rather than picking one overall best
 * match for the whole crop.
 */
export function matchEachLine(lines: string[], cards: CardEntry[], maxScore = 0.4): LineMatch[] {
  if (cards.length === 0) return lines.map((line) => ({ line }));
  const fuse = new Fuse(cards, {
    keys: ['matchKey'],
    includeScore: true,
    threshold: 0.45,
    ignoreLocation: true,
  });

  return lines.map((line) => {
    const key = normalizeCardName(line);
    if (!key) return { line };
    const results = fuse.search(key, { limit: 1 });
    const best = results[0];
    if (!best) return { line };
    const score = best.score ?? 1;
    if (score > maxScore) return { line };
    return { line, match: { card: best.item, score } };
  });
}
