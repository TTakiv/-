import { useRef, useState } from 'react';
import type { CardType, PlayerCard } from '../domain/types';
import { recognizeCardsWithGemini, GeminiOcrError } from '../ocr/gemini';
import { matchEachLine } from '../ocr/cardMatch';
import { allCards, upsertCard } from '../db/db';
import { loadImage, cropPlain, fullImageRect, blobToDataUrl } from '../ocr/preprocess';

const CARD_PHOTO_MAX_DIMENSION = 1000;

interface Props {
  defaultType: CardType;
  onAddMany: (cards: PlayerCard[]) => void;
  onClose: () => void;
}

const TYPE_LABEL: Record<CardType, string> = {
  occupation: '職業カード',
  improvement: '進歩カード',
};

type Stage = 'capture' | 'processing' | 'batch' | 'manual';

interface BatchRow {
  key: string;
  originalText: string;
  name: string;
  points: number;
  bonusPoints: number;
  matched: boolean;
  include: boolean;
}

export default function CardCapture({ defaultType, onAddMany, onClose }: Props) {
  const [stage, setStage] = useState<Stage>('capture');
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [batchRows, setBatchRows] = useState<BatchRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [manualName, setManualName] = useState('');
  const [manualPoints, setManualPoints] = useState(0);
  const [manualBonusPoints, setManualBonusPoints] = useState(0);

  const cameraFileRef = useRef<HTMLInputElement>(null);
  const libraryFileRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
    setPhotoDataUrl(null);
    setError(null);
    setStage('processing');

    try {
      const img = await loadImage(url);
      const blob = await cropPlain(img, fullImageRect(img), CARD_PHOTO_MAX_DIMENSION);
      setPhotoDataUrl(await blobToDataUrl(blob));
      const names = await recognizeCardsWithGemini(img);

      if (names.length === 0) {
        setError('カード名を読み取れませんでした。手動で入力してください。');
        setManualName('');
        setManualBonusPoints(0);
        setStage('manual');
        return;
      }

      const cards = await allCards();
      const lineMatches = matchEachLine(names, cards);
      setBatchRows(
        lineMatches.map((lm, i) => ({
          key: String(i),
          originalText: lm.line,
          name: lm.match ? lm.match.card.displayName : lm.line,
          points: lm.match ? lm.match.card.points : 0,
          bonusPoints: 0,
          matched: Boolean(lm.match),
          include: true,
        })),
      );
      setStage('batch');
    } catch (err) {
      console.error(err);
      const message = err instanceof GeminiOcrError ? err.message : '読み取りに失敗しました。手動で入力してください。';
      setError(message);
      setManualName('');
      setManualBonusPoints(0);
      setStage('manual');
    }
  }

  function retryPhoto() {
    setError(null);
    setPhotoUrl(null);
    setPhotoDataUrl(null);
    setStage('capture');
  }

  function updateRow(key: string, patch: Partial<BatchRow>) {
    setBatchRows((prev) => prev.map((r) => (r.key === key ? { ...r, ...patch } : r)));
  }

  function removeRow(key: string) {
    setBatchRows((prev) => prev.filter((r) => r.key !== key));
  }

  async function confirmBatch() {
    const included = batchRows.filter((r) => r.include && r.name.trim());
    if (included.length === 0) return;
    const saved = await Promise.all(
      included.map((r) => upsertCard({ displayName: r.name.trim(), type: defaultType, points: r.points })),
    );
    onAddMany(
      saved.map((s, i) => ({
        cardId: s.id,
        displayName: s.displayName,
        type: s.type,
        points: s.points,
        bonusPoints: included[i].bonusPoints || undefined,
        photo: photoDataUrl ?? undefined,
      })),
    );
  }

  async function saveManual() {
    const name = manualName.trim();
    if (!name) return;
    const saved = await upsertCard({ displayName: name, type: defaultType, points: manualPoints });
    onAddMany([
      {
        cardId: saved.id,
        displayName: saved.displayName,
        type: saved.type,
        points: saved.points,
        bonusPoints: manualBonusPoints || undefined,
        photo: photoDataUrl ?? undefined,
      },
    ]);
  }

  const includedCount = batchRows.filter((r) => r.include).length;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{TYPE_LABEL[defaultType]}を追加</h2>
          <button className="btn btn-ghost" onClick={onClose}>
            閉じる
          </button>
        </div>

        {stage === 'capture' && (
          <div className="capture-stage">
            <button className="btn btn-primary btn-block" onClick={() => cameraFileRef.current?.click()}>
              📷 カードを撮影
            </button>
            <button className="btn btn-ghost btn-block" onClick={() => libraryFileRef.current?.click()}>
              🖼️ アルバムから選択
            </button>
            <p className="hint-text">
              複数枚のカードを並べて写しても、まとめて1枚の写真で読み取れます。AI (Gemini) がカード名を読み取るため、インターネット接続が必要です。
            </p>
            <input
              ref={cameraFileRef}
              type="file"
              accept="image/*"
              capture="environment"
              hidden
              onChange={handleFile}
            />
            <input ref={libraryFileRef} type="file" accept="image/*" hidden onChange={handleFile} />
            <button
              className="btn btn-ghost btn-block"
              onClick={() => {
                setManualName('');
                setManualBonusPoints(0);
                setStage('manual');
              }}
            >
              手入力で追加
            </button>
          </div>
        )}

        {(stage === 'processing' || stage === 'batch') && photoUrl && (
          <img className="card-photo-preview" src={photoUrl} alt="撮影したカード" />
        )}

        {stage === 'processing' && <p className="hint-text">AIがカード名を読み取っています...</p>}

        {stage === 'batch' && (
          <div className="batch-stage">
            {error && <p className="error-text">{error}</p>}
            <p className="hint-text">
              読み取れたカードごとに一覧表示しています。名前・得点を確認し、不要な行はチェックを外してください。
            </p>
            <ul className="batch-list">
              {batchRows.map((row) => (
                <li key={row.key} className={`batch-row ${row.include ? '' : 'excluded'}`}>
                  <div className="batch-row-top">
                    <label className="batch-checkbox">
                      <input
                        type="checkbox"
                        checked={row.include}
                        onChange={(e) => updateRow(row.key, { include: e.target.checked })}
                      />
                      {row.matched && <span className="batch-matched-badge">DB一致</span>}
                      <span className="batch-original-text">読取: 「{row.originalText}」</span>
                    </label>
                    <button className="btn btn-danger-ghost" onClick={() => removeRow(row.key)}>
                      行を削除
                    </button>
                  </div>
                  <div className="batch-row-fields">
                    <input
                      className="batch-name-input"
                      value={row.name}
                      onChange={(e) => updateRow(row.key, { name: e.target.value })}
                      disabled={!row.include}
                    />
                    <div className="batch-field-group">
                      <span className="batch-field-label">素点</span>
                      <input
                        type="number"
                        className="batch-points-input"
                        value={row.points === 0 ? '' : row.points}
                        onChange={(e) => updateRow(row.key, { points: Number(e.target.value) || 0 })}
                        disabled={!row.include}
                      />
                    </div>
                    <div className="batch-field-group">
                      <span className="batch-field-label">ボーナス</span>
                      <input
                        type="number"
                        className="batch-points-input"
                        value={row.bonusPoints === 0 ? '' : row.bonusPoints}
                        onChange={(e) => updateRow(row.key, { bonusPoints: Number(e.target.value) || 0 })}
                        disabled={!row.include}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="btn btn-ghost btn-block" onClick={retryPhoto}>
              うまく読み取れない・撮り直す
            </button>
            <button
              className="btn btn-primary btn-block btn-large"
              onClick={confirmBatch}
              disabled={includedCount === 0}
            >
              チェックした{includedCount}件をまとめて追加
            </button>
          </div>
        )}

        {stage === 'manual' && (
          <div className="manual-stage">
            {error && <p className="error-text">{error}</p>}
            {photoUrl && (
              <button className="btn btn-ghost btn-block" onClick={retryPhoto}>
                撮り直す
              </button>
            )}
            <label className="field">
              <span>カード名</span>
              <input value={manualName} onChange={(e) => setManualName(e.target.value)} />
            </label>
            <label className="field">
              <span>素点</span>
              <input
                type="number"
                value={manualPoints === 0 ? '' : manualPoints}
                onChange={(e) => setManualPoints(Number(e.target.value) || 0)}
              />
            </label>
            <label className="field">
              <span>状況によるボーナス点数(あれば)</span>
              <input
                type="number"
                value={manualBonusPoints === 0 ? '' : manualBonusPoints}
                onChange={(e) => setManualBonusPoints(Number(e.target.value) || 0)}
              />
            </label>
            <p className="hint-text">
              素点はカード名と一緒に保存され、次回から自動で読み込まれます。ボーナス点数はこのカードだけに適用され、カード一覧からいつでも変更できます。
            </p>
            <button className="btn btn-primary btn-block" onClick={saveManual} disabled={!manualName.trim()}>
              追加して記憶する
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
