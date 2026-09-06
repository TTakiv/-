import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getGame } from '../db/db';
import type { GameRecord } from '../domain/types';
import { calcBoardScore } from '../domain/boardScore';
import PhotoGallery from '../components/PhotoGallery';
import { playerPhotos } from '../lib/playerPhotos';
import { useGameDraft } from '../store/useGameDraft';
import { buildShareText, shareToX, canSharePhoto, sharePhoto } from '../lib/shareGame';

export default function GameDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { draft, loadGame } = useGameDraft();
  const [game, setGame] = useState<GameRecord | null | undefined>(undefined);
  const [sharingPhoto, setSharingPhoto] = useState(false);

  useEffect(() => {
    if (!id) return;
    getGame(Number(id)).then((g) => setGame(g ?? null));
  }, [id]);

  if (game === undefined) return <div className="page">読み込み中...</div>;
  if (game === null) {
    return (
      <div className="page">
        <p className="empty-hint">記録が見つかりませんでした。</p>
        <Link className="btn btn-primary" to="/">
          ホームに戻る
        </Link>
      </div>
    );
  }

  const ranked = [...game.players].sort((a, b) => b.totalScore - a.totalScore);

  function handleEdit() {
    if (draft && draft.id !== game!.id) {
      const ok = confirm('入力中の別のゲームがあります。編集を始めると、その内容は失われます。よろしいですか?');
      if (!ok) return;
    }
    loadGame(game!);
    navigate('/play');
  }

  function handleShareX() {
    shareToX(buildShareText(game!));
  }

  async function handleSharePhotoShare() {
    setSharingPhoto(true);
    try {
      await sharePhoto(game!, buildShareText(game!));
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return;
      console.error('share failed', err);
      alert('共有に失敗しました。');
    } finally {
      setSharingPhoto(false);
    }
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>{game.title}</h1>
        <div className="page-header-actions">
          <button className="btn btn-ghost" onClick={handleEdit}>
            編集する
          </button>
          <Link className="btn btn-ghost" to="/">
            ホームに戻る
          </Link>
        </div>
      </header>

      <div className="share-actions">
        <button className="btn btn-ghost" onClick={handleShareX}>
          𝕏でシェア
        </button>
        {canSharePhoto() && (
          <button className="btn btn-ghost" onClick={handleSharePhotoShare} disabled={sharingPhoto}>
            写真と一緒に共有
          </button>
        )}
      </div>

      <div className="result-list">
        {ranked.map((p, rank) => {
          const breakdown = calcBoardScore(p.board);
          return (
            <div key={p.name} className="result-card">
              <div className="result-header">
                <span className="result-rank">{rank + 1}位</span>
                <span className="result-name">{p.name}</span>
                <span className="result-total">{p.totalScore}点</span>
              </div>
              <PhotoGallery photos={playerPhotos(p)} />
              <details>
                <summary>内訳を見る</summary>
                <table className="breakdown-table">
                  <tbody>
                    <tr>
                      <td>畑</td>
                      <td>{breakdown.fields}</td>
                    </tr>
                    <tr>
                      <td>牧場</td>
                      <td>{breakdown.pastures}</td>
                    </tr>
                    <tr>
                      <td>柵付き小屋</td>
                      <td>{breakdown.fencedStables}</td>
                    </tr>
                    <tr>
                      <td>穀物</td>
                      <td>{breakdown.grain}</td>
                    </tr>
                    <tr>
                      <td>野菜</td>
                      <td>{breakdown.vegetables}</td>
                    </tr>
                    <tr>
                      <td>羊</td>
                      <td>{breakdown.sheep}</td>
                    </tr>
                    <tr>
                      <td>猪</td>
                      <td>{breakdown.wildBoar}</td>
                    </tr>
                    <tr>
                      <td>牛</td>
                      <td>{breakdown.cattle}</td>
                    </tr>
                    <tr>
                      <td>未使用スペース</td>
                      <td>{breakdown.unusedSpaces}</td>
                    </tr>
                    <tr>
                      <td>部屋</td>
                      <td>{breakdown.rooms}</td>
                    </tr>
                    <tr>
                      <td>家族の人数</td>
                      <td>{breakdown.familyMembers}</td>
                    </tr>
                    <tr>
                      <td>物乞いトークン</td>
                      <td>{breakdown.beggingTokens}</td>
                    </tr>
                    <tr className="breakdown-subtotal">
                      <td>ボード合計</td>
                      <td>{breakdown.total}</td>
                    </tr>
                    {p.cards.map((c, i) => (
                      <tr key={i}>
                        <td>
                          {c.displayName} ({c.type === 'occupation' ? '職業' : '進歩'})
                          {Boolean(c.bonusPoints) && ` [素点${c.points} + ボーナス${c.bonusPoints}]`}
                        </td>
                        <td>{c.points + (c.bonusPoints ?? 0)}</td>
                      </tr>
                    ))}
                    <tr className="breakdown-subtotal">
                      <td>カード合計</td>
                      <td>{p.cardsScore}</td>
                    </tr>
                  </tbody>
                </table>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
}
