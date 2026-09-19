import type { CardType, GameRecord } from '../domain/types';
import { normalizeCardName } from './normalize';

export interface CardRank {
  displayName: string;
  count: number;
}

export interface PlayerCountAverage {
  playerCount: number;
  average: number | null;
  gameCount: number;
}

export interface DashboardStats {
  gameCount: number;
  averageScore: number | null;
  byPlayerCount: PlayerCountAverage[];
  topOccupations: CardRank[];
  topImprovements: CardRank[];
}

/** Player counts broken out on the dashboard. */
const PLAYER_COUNTS = [2, 3, 4, 5];

const RANKING_SIZE = 3;

/**
 * Staple improvements that nearly every game includes. They would otherwise fill
 * the ranking, so they are left out of it. Matching is on the normalized full name,
 * never a substring, so distinct cards that merely share a word — 東洋かまど,
 * つるべ井戸, 大製陶所, 石の調理場 — still count.
 */
export const EXCLUDED_IMPROVEMENTS = [
  'かまど',
  '調理場',
  '井戸',
  'レンガ窯',
  '石窯',
  '家具製作所',
  '製陶所',
  'カゴ製作所',
];

const EXCLUDED_IMPROVEMENT_KEYS = new Set(EXCLUDED_IMPROVEMENTS.map(normalizeCardName));

function average(values: number[]): number | null {
  if (values.length === 0) return null;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

/**
 * One score per game: the first player registered for it. Identifying that player
 * by position rather than by the default "プレイヤー1" name keeps renamed games counted.
 */
function scoresOf(games: GameRecord[]): number[] {
  return games.flatMap((g) => (g.players.length > 0 ? [g.players[0].totalScore] : []));
}

/** Most-used cards of one type, most frequent first, ties broken by name so the order is stable. */
function topCards(games: GameRecord[], type: CardType, excludedKeys?: Set<string>): CardRank[] {
  const counts = new Map<string, number>();
  for (const game of games) {
    for (const player of game.players) {
      for (const card of player.cards) {
        if (card.type !== type) continue;
        if (excludedKeys?.has(normalizeCardName(card.displayName))) continue;
        counts.set(card.displayName, (counts.get(card.displayName) ?? 0) + 1);
      }
    }
  }
  return [...counts.entries()]
    .map(([displayName, count]) => ({ displayName, count }))
    .sort((a, b) => b.count - a.count || a.displayName.localeCompare(b.displayName, 'ja'))
    .slice(0, RANKING_SIZE);
}

/** Averages cover only the first player of each game; card rankings cover every player. */
export function calcDashboardStats(games: GameRecord[]): DashboardStats {
  return {
    gameCount: games.length,
    averageScore: average(scoresOf(games)),
    byPlayerCount: PLAYER_COUNTS.map((playerCount) => {
      const matching = games.filter((g) => g.players.length === playerCount);
      return { playerCount, average: average(scoresOf(matching)), gameCount: matching.length };
    }),
    topOccupations: topCards(games, 'occupation'),
    topImprovements: topCards(games, 'improvement', EXCLUDED_IMPROVEMENT_KEYS),
  };
}
