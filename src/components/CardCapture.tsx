import { useRef, useState } from 'react';
import type { CardType, PlayerCard } from '../domain/types';
import { recognizeImage } from '../ocr/ocr';
import { matchEachLine } from '../ocr/cardMatch';
import { allCards, upsertCard } from '../db/db';
import { cropAndEnhance, fullImageRect, loadImage, rotateImageBlob, type CropRect } from '../ocr/preprocess';
import { normalizeCardName, stripDigits } from '../lib/normalize';
import ImageCropper from './ImageCropper';

interface Props {
  onAddMany: (cards: PlayerCard[]) => void;
  onClose: () => void;
}

type Stage = 'capture' | 'cropping' | 'processing' | 'batch' | 'manual';

interface BatchRow {
  key: string;
  originalText: string;
  name: string;
  type: CardType;
  points: number;
  matched: boolean;
  include: boolean;
}

const MIN_LINE_LENGTH = 2;

export default function CardCapture({ onAddMany, onClose }: Props) {
  const [stage, setStage] = useState<Stage>('capture');
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [processedPreview, setProcessedPreview] = useState<string | null>(null);
  const [ocrLines, setOcrLines] = useState<string[]>([]);
  const [batchRows, setBatchRows] = useState<BatchRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [manualName, setManualName] = useState('');
  const [manualType, setManualType] = useState<CardType>('occupation');
  const [manualPoints, setManualPoints] = useState(0);

  const cameraFileRef = useRef<HTMLInputElement>(null);
  const libraryFileRef = useRef<HTMLInputElement>(null);
  const [lastRunArgs, setLastRunArgs] = useState<{ rect: CropRect; img: HTMLImageElement } | null>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoUrl(URL.createObjectURL(file));
    setError(null);
    setStage('cropping');
  }

  async function runOcr(rect: CropRect, img: HTMLImageElement, binarize: boolean) {
    setLastRunArgs({ rect, img });
    setStage('processing');
    try {
      const straightBlob = await cropAndEnhance(img, rect, binarize);
      let bestBlob = straightBlob;
      let lines = (await recognizeImage(straightBlob, 'jpn')).lines;
      let cleanLines = lines.filter((l) => normalizeCardName(l).length >= MIN_LINE_LENGTH);

      // Nothing usable — the crop is very likely sideways/upside down
      // (a common case when cards are fanned out at an angle). Retry the
      // same crop rotated 90/180/270 degrees and keep whichever attempt
      // actually produced readable text.
      if (cleanLines.length === 0) {
        const rotatable = await loadImage(URL.createObjectURL(straightBlob));
        for (const deg of [90, 180, 270] as const) {
          const rotatedBlob = await rotateImageBlob(rotatable, deg);
          const rotatedLines = (await recognizeImage(rotatedBlob, 'jpn')).lines;
          const rotatedClean = rotatedLines.filter((l) => normalizeCardName(l).length >= MIN_LINE_LENGTH);
          if (rotatedClean.length > cleanLines.length) {
            bestBlob = rotatedBlob;
            lines = rotatedLines;
            cleanLines = rotatedClean;
          }
          if (cleanLines.length > 0) break;
        }
      }

      setProcessedPreview(URL.createObjectURL(bestBlob));
      setOcrLines(lines);

      if (cleanLines.length === 0) {
        setManualName(stripDigits(lines[0] ?? ''));
        setStage('manual');
        return;
      }

      const cards = await allCards();
      const lineMatches = matchEachLine(cleanLines, cards);
      setBatchRows(
        lineMatches.map((lm, i) => ({
          key: String(i),
          originalText: lm.line,
          name: lm.match ? lm.match.card.displayName : stripDigits(lm.line),
          type: lm.match ? lm.match.card.type : 'occupation',
          points: lm.match ? lm.match.card.points : 0,
          matched: Boolean(lm.match),
          include: true,
        })),
      );
      setStage('batch');
    } catch (err) {
      console.error(err);
      setError('文字認識に失敗しました。手動で入力してください。');
      setManualName('');
      setStage('manual');
    }
  }

  function handleCropConfirm(rect: CropRect, img: HTMLImageElement) {
    runOcr(rect, img, true);
  }

  function handleCropSkip(img: HTMLImageElement) {
    runOcr(fullImageRect(img), img, true);
  }

  function retryCrop() {
    setError(null);
    setStage('cropping');
  }

  function retryWithoutBinarize() {
    if (!lastRunArgs) return;
    setError(null);
    runOcr(lastRunArgs.rect, lastRunArgs.img, false);
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
      included.map((r) =>
        upsertCard({ displayName: r.name.trim(), type: r.type, points: r.points }),
      ),
    );
    onAddMany(
      saved.map((s) => ({
        cardId: s.id,
        displayName: s.displayName,
        type: s.type,
        points: s.points,
      })),
    );
  }

  async function saveManual() {
    const name = manualName.trim();
    if (!name) return;
    const saved = await upsertCard({ displayName: name, type: manualType, points: manualPoints });
    onAddMany([{ cardId: saved.id, displayName: saved.displayName, type: saved.type, points: saved.points }]);
  }

  const includedCount = batchRows.filter((r) => r.include).length;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>カードを追加</h2>
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
              複数枚のカード名を並べて写しても、まとめて1枚の写真で読み取れます。
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
                setStage('manual');
              }}
            >
              手入力で追加
            </button>
          </div>
        )}

        {stage === 'cropping' && photoUrl && (
          <ImageCropper imageUrl={photoUrl} onConfirm={handleCropConfirm} onSkip={handleCropSkip} />
        )}

        {(stage === 'processing' || stage === 'batch' || stage === 'manual') && processedPreview && (
          <img className="card-photo-preview" src={processedPreview} alt="読み取り範囲" />
        )}

        {stage === 'processing' && <p className="hint-text">文字を読み取っています...</p>}

        {stage === 'batch' && (
          <div className="batch-stage">
            {error && <p className="error-text">{error}</p>}
            <p className="hint-text">
              読み取れた行ごとにカードとして表示しています。名前・種類・得点を確認し、不要な行はチェックを外してください。
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
                    <select
                      value={row.type}
                      onChange={(e) => updateRow(row.key, { type: e.target.value as CardType })}
                      disabled={!row.include}
                    >
                      <option value="occupation">職業</option>
                      <option value="improvement">進歩</option>
                    </select>
                    <input
                      type="number"
                      className="batch-points-input"
                      value={row.points}
                      onChange={(e) => updateRow(row.key, { points: Number(e.target.value) || 0 })}
                      disabled={!row.include}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <button className="btn btn-ghost btn-block" onClick={retryWithoutBinarize}>
              🔁 白黒化せずに読み取り直す
            </button>
            <button className="btn btn-ghost btn-block" onClick={retryCrop}>
              うまく読み取れない・範囲を選び直す
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
            {ocrLines.length > 0 && (
              <div className="ocr-lines">
                <span className="hint-text">読み取ったテキスト:</span>
                <ul>
                  {ocrLines.slice(0, 5).map((l, i) => (
                    <li key={i}>
                      <button className="link-btn" onClick={() => setManualName(stripDigits(l))}>
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {lastRunArgs && (
              <button className="btn btn-ghost btn-block" onClick={retryWithoutBinarize}>
                🔁 白黒化せずに読み取り直す
              </button>
            )}
            {photoUrl && (
              <button className="btn btn-ghost btn-block" onClick={retryCrop}>
                範囲を選び直して再読み取り
              </button>
            )}
            <label className="field">
              <span>カード名</span>
              <input value={manualName} onChange={(e) => setManualName(e.target.value)} />
            </label>
            <label className="field">
              <span>種類</span>
              <select value={manualType} onChange={(e) => setManualType(e.target.value as CardType)}>
                <option value="occupation">職業カード</option>
                <option value="improvement">進歩カード</option>
              </select>
            </label>
            <label className="field">
              <span>得点</span>
              <input
                type="number"
                value={manualPoints}
                onChange={(e) => setManualPoints(Number(e.target.value) || 0)}
              />
            </label>
            <p className="hint-text">
              ここで入力した得点はカード名と一緒に保存され、次回から自動で読み込まれます。
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
