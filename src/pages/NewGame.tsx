import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameDraft } from '../store/useGameDraft';

export default function NewGame() {
  const navigate = useNavigate();
  const { startGame } = useGameDraft();
  const [title, setTitle] = useState('');
  const [names, setNames] = useState<string[]>(['プレイヤー1', 'プレイヤー2']);

  function updateName(i: number, value: string) {
    setNames((prev) => prev.map((n, idx) => (idx === i ? value : n)));
  }

  function addPlayer() {
    if (names.length >= 5) return;
    setNames((prev) => [...prev, `プレイヤー${prev.length + 1}`]);
  }

  function removePlayer(i: number) {
    if (names.length <= 1) return;
    setNames((prev) => prev.filter((_, idx) => idx !== i));
  }

  function handleStart() {
    const cleaned = names.map((n) => n.trim()).filter(Boolean);
    if (cleaned.length === 0) return;
    const defaultTitle = new Date().toLocaleDateString('ja-JP');
    startGame(title.trim() || defaultTitle, cleaned);
    navigate('/play');
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>新しいゲーム</h1>
      </header>

      <label className="field">
        <span>タイトル (任意)</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={new Date().toLocaleDateString('ja-JP')}
        />
      </label>

      <div className="field">
        <span>プレイヤー</span>
        {names.map((n, i) => (
          <div className="player-row" key={i}>
            <input type="text" value={n} onChange={(e) => updateName(i, e.target.value)} />
            {names.length > 1 && (
              <button className="btn btn-danger-ghost" onClick={() => removePlayer(i)}>
                削除
              </button>
            )}
          </div>
        ))}
        {names.length < 5 && (
          <button className="btn btn-ghost" onClick={addPlayer}>
            + プレイヤーを追加
          </button>
        )}
      </div>

      <button className="btn btn-primary btn-block" onClick={handleStart}>
        スコア入力を始める
      </button>
    </div>
  );
}
