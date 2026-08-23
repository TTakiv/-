export type RoomType = 'wood' | 'clay' | 'stone';

export interface BoardInputs {
  fields: number;
  pastures: number;
  grain: number;
  vegetables: number;
  sheep: number;
  wildBoar: number;
  cattle: number;
  unusedSpaces: number;
  fencedStables: number;
  roomType: RoomType;
  rooms: number;
  familyMembers: number;
  beggingTokens: number;
}

export const emptyBoardInputs: BoardInputs = {
  fields: 0,
  pastures: 0,
  grain: 0,
  vegetables: 0,
  sheep: 0,
  wildBoar: 0,
  cattle: 0,
  unusedSpaces: 0,
  fencedStables: 0,
  roomType: 'wood',
  rooms: 2,
  familyMembers: 2,
  beggingTokens: 0,
};

export type CardType = 'occupation' | 'improvement';

export interface CardEntry {
  id?: number;
  matchKey: string;
  displayName: string;
  type: CardType;
  points: number;
  note?: string;
  createdAt: number;
  updatedAt: number;
}

export interface PlayerCard {
  cardId?: number;
  displayName: string;
  type: CardType;
  points: number;
  bonusPoints?: number;
  photo?: string;
}

export interface PlayerResult {
  name: string;
  board: BoardInputs;
  boardScore: number;
  boardPhoto?: string;
  cards: PlayerCard[];
  cardsScore: number;
  totalScore: number;
}

export interface GameRecord {
  id?: number;
  date: number;
  title: string;
  players: PlayerResult[];
}
