import type { PlayerCard } from '../domain/types';

interface Props {
  cards: PlayerCard[];
  onRemove: (index: number) => void;
  showTypeBadge?: boolean;
}

export default function CardList({ cards, onRemove, showTypeBadge = true }: Props) {
  if (cards.length === 0) {
    return <p className="empty-hint">まだカードがありません。</p>;
  }
  return (
    <ul className="card-list">
      {cards.map((c, i) => (
        <li key={i} className="card-list-item">
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
        </li>
      ))}
    </ul>
  );
}
