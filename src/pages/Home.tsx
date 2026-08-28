import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { listGames, deleteGame } from '../db/db';
import type { GameRecord } from '../domain/types';
import { exportBackup, importBackup } from '../lib/backup';

function formatDate(ts: number): string {
  const d = new Date(ts);
  return d.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

export default function Home() {
  const [games, setGames] = useState<GameRecord[] | null>(null);
  const [importing, setImporting] = useState(false);
  const importFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listGames().then(setGames);
  }, []);

  async function handleDelete(id?: number) {
    if (!id) return;
    if (!confirm('この記録を削除しますか?')) return;
    await deleteGame(id);
    setGames(await listGames());
  }

  async function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setImporting(true);
    try {
      const { addedGames, addedCards } = await importBackup(file);
      alert(`ゲーム記録${addedGames}件、カード${addedCards}件を追加しました。`);
      setGames(await listGames());
    } catch (err) {
      alert(err instanceof Error ? err.message : '読み込みに失敗しました。');
    } finally {
      setImporting(false);
    }
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>アグリコラ スコア記録</h1>
        <Link className="btn btn-primary" to="/new">
          + 新しいゲーム
        </Link>
      </header>

      <div className="backup-actions">
        <button className="btn btn-ghost" onClick={() => exportBackup()}>
          バックアップを書き出す
        </button>
        <button className="btn btn-ghost" onClick={() => importFileRef.current?.click()} disabled={importing}>
          バックアップから復元する
        </button>
        <input
          ref={importFileRef}
          type="file"
          accept="application/json"
          hidden
          onChange={handleImportFile}
        />
      </div>

      {games === null && <p>読み込み中...</p>}
      {games !== null && games.length === 0 && (
        <p className="empty-hint">まだ記録がありません。「新しいゲーム」から始めましょう。</p>
      )}

      <ul className="game-list">
        {games?.map((g) => {
          const winner = [...g.players].sort((a, b) => b.totalScore - a.totalScore)[0];
          return (
            <li key={g.id} className="game-list-item">
              <Link to={`/history/${g.id}`} className="game-list-link">
                <div className="game-list-main">
                  <span className="game-title">{g.title || formatDate(g.date)}</span>
                  <span className="game-date">{formatDate(g.date)}</span>
                </div>
                <div className="game-list-players">
                  {g.players.map((p) => (
                    <span key={p.name} className={p.name === winner?.name ? 'winner' : ''}>
                      {p.name} {p.totalScore}点
                    </span>
                  ))}
                </div>
              </Link>
              <button className="btn btn-danger-ghost" onClick={() => handleDelete(g.id)}>
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
