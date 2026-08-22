import Dexie, { type Table } from 'dexie';
import type { CardEntry, GameRecord } from '../domain/types';
import { seedCards } from '../data/seedCards';
import { normalizeCardName } from '../lib/normalize';

export class AgricolaDB extends Dexie {
  games!: Table<GameRecord, number>;
  cards!: Table<CardEntry, number>;

  constructor() {
    super('agricola-score-db');
    this.version(1).stores({
      games: '++id, date',
      cards: '++id, &matchKey, type',
    });
  }
}

export const db = new AgricolaDB();

let seeded = false;
/**
 * Adds any seedCards not yet present (by matchKey) without touching existing
 * entries, so re-running after seedCards.ts grows (e.g. a bigger import from
 * db.agricolajp.dev) fills in the new cards on an existing install instead of
 * only ever seeding once on a completely empty database.
 */
export async function ensureSeeded() {
  if (seeded) return;
  seeded = true;
  const existingKeys = new Set(await db.cards.orderBy('matchKey').keys());
  const now = Date.now();
  const missing = seedCards.filter((c) => !existingKeys.has(normalizeCardName(c.displayName)));
  if (missing.length === 0) return;
  await db.cards.bulkAdd(
    missing.map((c) => ({
      matchKey: normalizeCardName(c.displayName),
      displayName: c.displayName,
      type: c.type,
      points: c.points,
      note: c.note,
      createdAt: now,
      updatedAt: now,
    })),
  );
}

export async function findCardByName(rawName: string): Promise<CardEntry | undefined> {
  const key = normalizeCardName(rawName);
  if (!key) return undefined;
  return db.cards.where('matchKey').equals(key).first();
}

export async function upsertCard(entry: {
  displayName: string;
  type: CardEntry['type'];
  points: number;
  note?: string;
}): Promise<CardEntry> {
  const matchKey = normalizeCardName(entry.displayName);
  const existing = await db.cards.where('matchKey').equals(matchKey).first();
  const now = Date.now();
  if (existing) {
    const updated: CardEntry = {
      ...existing,
      displayName: entry.displayName,
      type: entry.type,
      points: entry.points,
      note: entry.note,
      updatedAt: now,
    };
    await db.cards.put(updated);
    return updated;
  }
  const id = await db.cards.add({
    matchKey,
    displayName: entry.displayName,
    type: entry.type,
    points: entry.points,
    note: entry.note,
    createdAt: now,
    updatedAt: now,
  });
  return { ...entry, matchKey, id, createdAt: now, updatedAt: now };
}

export async function allCards(): Promise<CardEntry[]> {
  return db.cards.toArray();
}

export async function saveGame(game: GameRecord): Promise<number> {
  if (game.id) {
    await db.games.put(game);
    return game.id;
  }
  const id = await db.games.add(game);
  return id;
}

export async function listGames(): Promise<GameRecord[]> {
  return db.games.orderBy('date').reverse().toArray();
}

export async function getGame(id: number): Promise<GameRecord | undefined> {
  return db.games.get(id);
}

export async function deleteGame(id: number): Promise<void> {
  await db.games.delete(id);
}
