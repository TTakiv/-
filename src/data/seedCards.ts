import type { CardType } from '../domain/types';

export interface SeedCard {
  displayName: string;
  type: CardType;
  points: number;
  note?: string;
}

/**
 * Intentionally small seed. Agricola has hundreds of occupation and
 * improvement cards whose end-game bonus depends on printed, edition
 * specific text (many are conditional, not a flat number), so we do not
 * hard-code values we aren't certain of. Instead the app "learns": the
 * first time a card is photographed and not found here, the user enters
 * its point value once (reading it off the card) and it is saved to the
 * local card database for automatic lookup afterwards.
 *
 * Only the very small number of majors with a well known, unconditional,
 * flat end-game bonus are pre-seeded below.
 */
export const seedCards: SeedCard[] = [
  {
    displayName: '井戸',
    type: 'improvement',
    points: 4,
    note: 'Well / 井戸: 固定4点 (要確認)',
  },
  {
    displayName: 'Well',
    type: 'improvement',
    points: 4,
    note: 'Fixed +4 points at game end (verify against your edition).',
  },
];
