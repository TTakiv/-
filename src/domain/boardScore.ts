import type { BoardInputs } from './types';

/**
 * Official Agricola end-game scoresheet tiers.
 * Each tier list is [minCount, points] ascending; count 0 is always -1
 * unless noted otherwise (unused spaces / fenced stables / rooms scale linearly).
 */
type Tier = [min: number, points: number];

function tierLookup(count: number, tiers: Tier[]): number {
  if (count <= 0) return -1;
  let points = tiers[0][1];
  for (const [min, pts] of tiers) {
    if (count >= min) points = pts;
  }
  return points;
}

const FIELDS_PASTURES: Tier[] = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
];

const GRAIN_SHEEP: Tier[] = [
  [1, 1],
  [4, 2],
  [6, 3],
  [8, 4],
];

const VEGETABLES: Tier[] = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
];

const BOAR_CATTLE: Tier[] = [
  [1, 1],
  [3, 2],
  [5, 3],
  [7, 4],
];

const ROOM_POINTS: Record<BoardInputs['roomType'], number> = {
  wood: 0,
  clay: 1,
  stone: 2,
};

export interface BoardScoreBreakdown {
  fields: number;
  pastures: number;
  grain: number;
  vegetables: number;
  sheep: number;
  wildBoar: number;
  cattle: number;
  unusedSpaces: number;
  fencedStables: number;
  rooms: number;
  familyMembers: number;
  beggingTokens: number;
  total: number;
}

export function calcBoardScore(input: BoardInputs): BoardScoreBreakdown {
  const fields = tierLookup(input.fields, FIELDS_PASTURES);
  const pastures = tierLookup(input.pastures, FIELDS_PASTURES);
  const grain = tierLookup(input.grain, GRAIN_SHEEP);
  const vegetables = tierLookup(input.vegetables, VEGETABLES);
  const sheep = tierLookup(input.sheep, GRAIN_SHEEP);
  const wildBoar = tierLookup(input.wildBoar, BOAR_CATTLE);
  const cattle = tierLookup(input.cattle, BOAR_CATTLE);
  const unusedSpaces = -Math.max(0, input.unusedSpaces);
  const fencedStables = Math.max(0, input.fencedStables) * 1;
  const rooms = Math.max(0, input.rooms) * ROOM_POINTS[input.roomType];
  const familyMembers = Math.max(0, input.familyMembers) * 3;
  const beggingTokens = -Math.max(0, input.beggingTokens) * 3;

  const total =
    fields +
    pastures +
    grain +
    vegetables +
    sheep +
    wildBoar +
    cattle +
    unusedSpaces +
    fencedStables +
    rooms +
    familyMembers +
    beggingTokens;

  return {
    fields,
    pastures,
    grain,
    vegetables,
    sheep,
    wildBoar,
    cattle,
    unusedSpaces,
    fencedStables,
    rooms,
    familyMembers,
    beggingTokens,
    total,
  };
}
