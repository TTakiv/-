import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameDraft } from '../store/useGameDraft';
import type { CardType } from '../domain/types';
import BoardScoreForm from '../components/BoardScoreForm';
import CardList from '../components/CardList';
import CardCapture from '../components/CardCapture';
import PhotoGallery from '../components/PhotoGallery';
import { playerPhotos } from '../lib/playerPhotos';
import { saveGame } from '../db/db';

export default function GamePlay() {
  const navigate = useNavigate();
  const { draft, updateTitle, updateBoard, updateBoardPhoto, addCard, updateCardBonus, removeCard, clearDraft } =
    useGameDraft();
  const [activePlayer, setActivePlayer] = useState(0);
  const [captureType, setCaptureType] = useState<CardType | null>(null);

  if (!draft) {
    return (
      <div className="page">
        <p className="empty-hint">進行中のゲームがありません。</p>
        <button className="btn btn-primary" onClick={() => navigate('/new')}>
          新しいゲームを始める
        </button>
      </div>
    );
  }

  const player = draft.players[activePlayer];

  const occupationEntries = player.cards
    .map((card, index) => ({ card, index }))
    .filter((e) => e.card.type === 'occupation');
  const improvementEntries = player.cards
    .map((card, index) => ({ card, index }))
    .filter((e) => e.card.type === 'improvement');
  const occupationScore = occupationEntries.reduce((sum, e) => sum + e.card.points + (e.card.bonusPoints ?? 0), 0);
  const improvementScore = improvementEntries.reduce((sum, e) => sum + e.card.points + (e.card.bonusPoints ?? 0), 0);

  const isEditing = draft.id !== undefined;

  async function handleFinish() {
    try {
      const id = await saveGame({
        id: draft!.id,
        date: draft!.date ?? Date.now(),
        title: draft!.title,
        players: draft!.players,
      });
      clearDraft();
      navigate(`/history/${id}`);
    } catch (err) {
      console.error('saveGame failed', err);
      alert(`保存に失敗しました: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  return (
    <div className="page">
      <header className="page-header">
        <input
          className="title-input"
          value={draft.title}
          onChange={(e) => updateTitle(e.target.value)}
          aria-label="ゲームのタイトル"
        />
        {isEditing && <span className="edit-mode-badge">編集中</span>}
      </header>

      <div className="player-tabs">
        {draft.players.map((p, i) => (
          <button
            key={i}
            className={`player-tab ${i === activePlayer ? 'active' : ''}`}
            onClick={() => setActivePlayer(i)}
          >
            {p.name}
            <span className="player-tab-score">{p.totalScore}</span>
          </button>
        ))}
      </div>

      <PhotoGallery photos={playerPhotos(player)} />

      <section className="section">
        <h2>ボード得点</h2>
        <BoardScoreForm
          board={player.board}
          onChange={(b) => updateBoard(activePlayer, b)}
          photo={player.boardPhoto}
          onPhotoChange={(p) => updateBoardPhoto(activePlayer, p)}
        />
      </section>

      <section className="section">
        <div className="section-header">
          <h2>職業カード ({occupationScore}点)</h2>
          <button className="btn btn-primary" onClick={() => setCaptureType('occupation')}>
            + カード追加
          </button>
        </div>
        <CardList
          cards={occupationEntries.map((e) => e.card)}
          onRemove={(i) => removeCard(activePlayer, occupationEntries[i].index)}
          onBonusChange={(i, bonus) => updateCardBonus(activePlayer, occupationEntries[i].index, bonus)}
          showTypeBadge={false}
        />
      </section>

      <section className="section">
        <div className="section-header">
          <h2>進歩カード ({improvementScore}点)</h2>
          <button className="btn btn-primary" onClick={() => setCaptureType('improvement')}>
            + カード追加
          </button>
        </div>
        <CardList
          cards={improvementEntries.map((e) => e.card)}
          onRemove={(i) => removeCard(activePlayer, improvementEntries[i].index)}
          onBonusChange={(i, bonus) => updateCardBonus(activePlayer, improvementEntries[i].index, bonus)}
          showTypeBadge={false}
        />
      </section>

      <div className="total-summary">
        <span>{player.name} 合計</span>
        <strong>{player.totalScore}点</strong>
      </div>

      <button className="btn btn-primary btn-block btn-large" onClick={handleFinish}>
        {isEditing ? '変更を保存する' : 'ゲームを保存する'}
      </button>

      {captureType && (
        <CardCapture
          defaultType={captureType}
          onAddMany={(cards) => {
            cards.forEach((card) => addCard(activePlayer, card));
            setCaptureType(null);
          }}
          onClose={() => setCaptureType(null)}
        />
      )}
    </div>
  );
}
