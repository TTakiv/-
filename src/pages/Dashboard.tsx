import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listGames } from '../db/db';
import type { GameRecord } from '../domain/types';
import { calcDashboardStats } from '../lib/dashboardStats';
import type { CardRank } from '../lib/dashboardStats';

function formatScore(value: number | null): string {
  return value === null ? '—' : value.toFixed(1);
}

function Ranking({ cards }: { cards: CardRank[] }) {
  if (cards.length === 0) {
    return <p className="empty-hint">まだカードの記録がありません。</p>;
  }
  return (
    <ol className="ranking-list">
      {cards.map((c, i) => (
        <li key={c.displayName} className="ranking-item">
          <span className="ranking-rank">{i + 1}位</span>
          <span className="ranking-name">{c.displayName}</span>
          <span className="ranking-count">{c.count}回</span>
        </li>
      ))}
    </ol>
  );
}

export default function Dashboard() {
  const [games, setGames] = useState<GameRecord[] | null>(null);

  useEffect(() => {
    listGames().then(setGames);
  }, []);

  if (games === null) return <div className="page">読み込み中...</div>;

  const stats = calcDashboardStats(games);

  return (
    <div className="page">
      <header className="page-header">
        <h1>ダッシュボード</h1>
        <Link className="btn btn-ghost" to="/">
          ホームに戻る
        </Link>
      </header>

      {stats.gameCount === 0 && (
        <p className="empty-hint">まだ記録がありません。ゲームを保存すると集計が表示されます。</p>
      )}

      <div className="stat-grid">
        <div className="stat-card">
          <span className="stat-label">今までの回数</span>
          <span className="stat-value">
            {stats.gameCount}
            <span className="stat-unit">回</span>
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-label">今までの平均点</span>
          <span className="stat-value">
            {formatScore(stats.averageScore)}
            <span className="stat-unit">点</span>
          </span>
        </div>
      </div>

      <section className="section">
        <h2>人数別の平均点</h2>
        <table className="breakdown-table">
          <tbody>
            {stats.byPlayerCount.map((row) => (
              <tr key={row.playerCount}>
                <td>
                  {row.playerCount}人戦平均点
                  {row.gameCount > 0 && <span className="stat-sub"> ({row.gameCount}回)</span>}
                </td>
                <td>{formatScore(row.average)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="hint-text">
          平均点は、各ゲームで最初に登録したプレイヤー(プレイヤー1)の点数だけを平均したものです。
        </p>
      </section>

      <section className="section">
        <h2>よく使った職業カード ベスト3</h2>
        <Ranking cards={stats.topOccupations} />
      </section>

      <section className="section">
        <h2>よく使った進歩カード ベスト3</h2>
        <Ranking cards={stats.topImprovements} />
      </section>
    </div>
  );
}
