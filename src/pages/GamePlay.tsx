import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameDraft } from '../store/useGameDraft';
import BoardScoreForm from '../components/BoardScoreForm';
import CardList from '../components/CardList';
import CardCapture from '../components/CardCapture';
import { saveGame } from '../db/db';

export default function GamePlay() {
  const navigate = useNavigate();
  const { draft, updateBoard, addCard, removeCard, clearDraft } = useGameDraft();
  const [activePlayer, setActivePlayer] = useState(0);
  const [showCapture, setShowCapture] = useState(false);

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

  async function handleFinish() {
    const id = await saveGame({
      date: Date.now(),
      title: draft!.title,
      players: draft!.players,
    });
    clearDraft();
    navigate(`/history/${id}`);
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>{draft.title}</h1>
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

      <section className="section">
        <h2>ボード得点</h2>
        <BoardScoreForm board={player.board} onChange={(b) => updateBoard(activePlayer, b)} />
      </section>

      <section className="section">
        <div className="section-header">
          <h2>カード ({player.cardsScore}点)</h2>
          <button className="btn btn-primary" onClick={() => setShowCapture(true)}>
            + カード追加
          </button>
        </div>
        <CardList cards={player.cards} onRemove={(i) => removeCard(activePlayer, i)} />
      </section>

      <div className="total-summary">
        <span>{player.name} 合計</span>
        <strong>{player.totalScore}点</strong>
      </div>

      <button className="btn btn-primary btn-block btn-large" onClick={handleFinish}>
        ゲームを保存する
      </button>

      {showCapture && (
        <CardCapture
          onAdd={(card) => {
            addCard(activePlayer, card);
            setShowCapture(false);
          }}
          onClose={() => setShowCapture(false)}
        />
      )}
    </div>
  );
}
