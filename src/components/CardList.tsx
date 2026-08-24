import type { PlayerCard } from '../domain/types';

interface Props {
  cards: PlayerCard[];
  onRemove: (index: number) => void;
  onBonusChange: (index: number, bonusPoints: number) => void;
  showTypeBadge?: boolean;
}

export default function CardList({ cards, onRemove, onBonusChange, showTypeBadge = true }: Props) {
  if (cards.length === 0) {
    return <p className="empty-hint">まだカードがありません。</p>;
  }
  return (
    <ul className="card-list">
      {cards.map((c, i) => (
        <li key={i} className="card-list-item">
          <div className="card-list-row">
            {showTypeBadge && (
              <span className={`card-type-badge ${c.type}`}>
                {c.type === 'occupation' ? '職業' : '進歩'}
              </span>
            )}
            <span className="card-name">{c.displayName}</span>
            <span className="card-points">{c.points}点</span>
            <button className="btn btn-danger-ghost" onClick={() => onRemove(i)}>
              削除
            </button>
          </div>
          <label className="card-bonus">
            <span className="card-bonus-label">状況によるボーナス点数</span>
            <input
              type="number"
              className="card-bonus-input"
              value={c.bonusPoints ? c.bonusPoints : ''}
              onChange={(e) => onBonusChange(i, Number(e.target.value) || 0)}
            />
            {Boolean(c.bonusPoints) && (
              <span className="card-bonus-total">合計 {c.points + (c.bonusPoints ?? 0)}点</span>
            )}
          </label>
        </li>
      ))}
    </ul>
  );
}
