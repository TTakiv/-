import type { CardType, GameRecord } from '../domain/types';

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

function average(values: number[]): number | null {
  if (values.length === 0) return null;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

function scoresOf(games: GameRecord[]): number[] {
  return games.flatMap((g) => g.players.map((p) => p.totalScore));
}

/** Most-used cards of one type, most frequent first, ties broken by name so the order is stable. */
function topCards(games: GameRecord[], type: CardType): CardRank[] {
  const counts = new Map<string, number>();
  for (const game of games) {
    for (const player of game.players) {
      for (const card of player.cards) {
        if (card.type !== type) continue;
        counts.set(card.displayName, (counts.get(card.displayName) ?? 0) + 1);
      }
    }
  }
  return [...counts.entries()]
    .map(([displayName, count]) => ({ displayName, count }))
    .sort((a, b) => b.count - a.count || a.displayName.localeCompare(b.displayName, 'ja'))
    .slice(0, RANKING_SIZE);
}

/** Averages are per player result, not per game, so a 4-player game contributes 4 scores. */
export function calcDashboardStats(games: GameRecord[]): DashboardStats {
  return {
    gameCount: games.length,
    averageScore: average(scoresOf(games)),
    byPlayerCount: PLAYER_COUNTS.map((playerCount) => {
      const matching = games.filter((g) => g.players.length === playerCount);
      return { playerCount, average: average(scoresOf(matching)), gameCount: matching.length };
    }),
    topOccupations: topCards(games, 'occupation'),
    topImprovements: topCards(games, 'improvement'),
  };
}
