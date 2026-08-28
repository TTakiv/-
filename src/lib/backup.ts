import { db } from '../db/db';
import type { GameRecord, CardEntry } from '../domain/types';

interface BackupFile {
  version: 1;
  exportedAt: number;
  games: GameRecord[];
  cards: CardEntry[];
}

export async function exportBackup(): Promise<void> {
  const [games, cards] = await Promise.all([db.games.toArray(), db.cards.toArray()]);
  const backup: BackupFile = { version: 1, exportedAt: Date.now(), games, cards };
  const blob = new Blob([JSON.stringify(backup)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `agricola-backup-${stamp}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export interface ImportSummary {
  addedGames: number;
  addedCards: number;
}

/**
 * Adds games and cards from a backup file without touching existing data:
 * games are always appended as new records, cards are added only when their
 * matchKey isn't already present (so a device's own newer card edits win).
 */
export async function importBackup(file: File): Promise<ImportSummary> {
  const text = await file.text();
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('バックアップファイルの形式が正しくありません。');
  }
  if (
    !parsed ||
    typeof parsed !== 'object' ||
    !Array.isArray((parsed as BackupFile).games) ||
    !Array.isArray((parsed as BackupFile).cards)
  ) {
    throw new Error('バックアップファイルの形式が正しくありません。');
  }
  const backup = parsed as BackupFile;

  const existingKeys = new Set(await db.cards.orderBy('matchKey').keys());
  const newCards = backup.cards.filter((c) => !existingKeys.has(c.matchKey)).map(({ id, ...rest }) => rest);
  if (newCards.length > 0) {
    await db.cards.bulkAdd(newCards);
  }

  const newGames = backup.games.map(({ id, ...rest }) => rest);
  if (newGames.length > 0) {
    await db.games.bulkAdd(newGames);
  }

  return { addedGames: newGames.length, addedCards: newCards.length };
}
