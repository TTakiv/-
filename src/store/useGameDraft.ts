import { useCallback, useEffect, useState } from 'react';
import { emptyBoardInputs, type GameRecord, type PlayerCard, type PlayerResult } from '../domain/types';
import { calcBoardScore } from '../domain/boardScore';

const STORAGE_KEY = 'agricola-draft-v1';

export interface GameDraft {
  id?: number;
  date?: number;
  title: string;
  players: PlayerResult[];
}

function recompute(player: PlayerResult): PlayerResult {
  const boardScore = calcBoardScore(player.board).total;
  const cardsScore = player.cards.reduce((sum, c) => sum + c.points + (c.bonusPoints ?? 0), 0);
  return { ...player, boardScore, cardsScore, totalScore: boardScore + cardsScore };
}

function load(): GameDraft | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as GameDraft;
  } catch {
    return null;
  }
}

function persist(draft: GameDraft | null) {
  if (!draft) {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  }
}

export function useGameDraft() {
  const [draft, setDraft] = useState<GameDraft | null>(() => load());

  useEffect(() => {
    persist(draft);
  }, [draft]);

  const startGame = useCallback((title: string, playerNames: string[]) => {
    const players: PlayerResult[] = playerNames.map((name) =>
      recompute({
        name,
        board: { ...emptyBoardInputs },
        boardScore: 0,
        cards: [],
        cardsScore: 0,
        totalScore: 0,
      }),
    );
    setDraft({ title, players });
  }, []);

  const loadGame = useCallback((game: GameRecord) => {
    setDraft({ id: game.id, date: game.date, title: game.title, players: game.players.map(recompute) });
  }, []);

  const updateBoard = useCallback((playerIndex: number, board: PlayerResult['board']) => {
    setDraft((prev) => {
      if (!prev) return prev;
      const players = prev.players.map((p, i) =>
        i === playerIndex ? recompute({ ...p, board }) : p,
      );
      return { ...prev, players };
    });
  }, []);

  const updateBoardPhoto = useCallback((playerIndex: number, boardPhoto: string | undefined) => {
    setDraft((prev) => {
      if (!prev) return prev;
      const players = prev.players.map((p, i) => (i === playerIndex ? { ...p, boardPhoto } : p));
      return { ...prev, players };
    });
  }, []);

  const addCard = useCallback((playerIndex: number, card: PlayerCard) => {
    setDraft((prev) => {
      if (!prev) return prev;
      const players = prev.players.map((p, i) =>
        i === playerIndex ? recompute({ ...p, cards: [...p.cards, card] }) : p,
      );
      return { ...prev, players };
    });
  }, []);

  const updateCardBonus = useCallback((playerIndex: number, cardIndex: number, bonusPoints: number) => {
    setDraft((prev) => {
      if (!prev) return prev;
      const players = prev.players.map((p, i) =>
        i === playerIndex
          ? recompute({ ...p, cards: p.cards.map((c, ci) => (ci === cardIndex ? { ...c, bonusPoints } : c)) })
          : p,
      );
      return { ...prev, players };
    });
  }, []);

  const removeCard = useCallback((playerIndex: number, cardIndex: number) => {
    setDraft((prev) => {
      if (!prev) return prev;
      const players = prev.players.map((p, i) =>
        i === playerIndex
          ? recompute({ ...p, cards: p.cards.filter((_, ci) => ci !== cardIndex) })
          : p,
      );
      return { ...prev, players };
    });
  }, []);

  const clearDraft = useCallback(() => setDraft(null), []);

  return { draft, startGame, loadGame, updateBoard, updateBoardPhoto, addCard, updateCardBonus, removeCard, clearDraft };
}
