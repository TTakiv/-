import { useRef, useState } from 'react';
import type { CardType, PlayerCard } from '../domain/types';
import { recognizeImage } from '../ocr/ocr';
import { matchCardLines, type CardMatch } from '../ocr/cardMatch';
import { allCards, upsertCard } from '../db/db';
import { cropAndEnhance, fullImageRect, type CropRect } from '../ocr/preprocess';
import ImageCropper from './ImageCropper';

interface Props {
  onAdd: (card: PlayerCard) => void;
  onClose: () => void;
}

type Stage = 'capture' | 'cropping' | 'processing' | 'candidates' | 'manual';

export default function CardCapture({ onAdd, onClose }: Props) {
  const [stage, setStage] = useState<Stage>('capture');
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [processedPreview, setProcessedPreview] = useState<string | null>(null);
  const [ocrLines, setOcrLines] = useState<string[]>([]);
  const [candidates, setCandidates] = useState<CardMatch[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [manualName, setManualName] = useState('');
  const [manualType, setManualType] = useState<CardType>('occupation');
  const [manualPoints, setManualPoints] = useState(0);

  const fileRef = useRef<HTMLInputElement>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoUrl(URL.createObjectURL(file));
    setError(null);
    setStage('cropping');
  }

  async function runOcr(rect: CropRect, img: HTMLImageElement) {
    setStage('processing');
    try {
      const blob = await cropAndEnhance(img, rect);
      setProcessedPreview(URL.createObjectURL(blob));
      const { lines } = await recognizeImage(blob, 'jpn');
      setOcrLines(lines);
      const cards = await allCards();
      const matches = matchCardLines(lines, cards);
      setCandidates(matches);
      if (matches.length === 0) {
        setManualName(lines[0] ?? '');
        setStage('manual');
      } else {
        setStage('candidates');
      }
    } catch (err) {
      console.error(err);
      setError('文字認識に失敗しました。手動で入力してください。');
      setManualName('');
      setStage('manual');
    }
  }

  function handleCropConfirm(rect: CropRect, img: HTMLImageElement) {
    runOcr(rect, img);
  }

  function handleCropSkip(img: HTMLImageElement) {
    runOcr(fullImageRect(img), img);
  }

  function pickCandidate(m: CardMatch) {
    onAdd({
      cardId: m.card.id,
      displayName: m.card.displayName,
      type: m.card.type,
      points: m.card.points,
    });
  }

  function goManualFromCandidates() {
    setManualName(ocrLines[0] ?? '');
    setStage('manual');
  }

  function retryCrop() {
    setError(null);
    setStage('cropping');
  }

  async function saveManual() {
    const name = manualName.trim();
    if (!name) return;
    const saved = await upsertCard({ displayName: name, type: manualType, points: manualPoints });
    onAdd({ cardId: saved.id, displayName: saved.displayName, type: saved.type, points: saved.points });
  }

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
            <button className="btn btn-primary btn-block" onClick={() => fileRef.current?.click()}>
              📷 カードを撮影
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              capture="environment"
              hidden
              onChange={handleFile}
            />
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

        {(stage === 'processing' || stage === 'candidates' || stage === 'manual') && processedPreview && (
          <img className="card-photo-preview" src={processedPreview} alt="読み取り範囲" />
        )}

        {stage === 'processing' && <p className="hint-text">文字を読み取っています...</p>}

        {stage === 'candidates' && (
          <div className="candidates-stage">
            {error && <p className="error-text">{error}</p>}
            <p className="hint-text">読み取り結果と近いカードです。選んでください。</p>
            <ul className="candidate-list">
              {candidates.map((m) => (
                <li key={m.card.id}>
                  <button className="candidate-btn" onClick={() => pickCandidate(m)}>
                    <span>{m.card.displayName}</span>
                    <span className="candidate-points">{m.card.points}点</span>
                  </button>
                </li>
              ))}
            </ul>
            <button className="btn btn-ghost btn-block" onClick={retryCrop}>
              うまく読み取れない・範囲を選び直す
            </button>
            <button className="btn btn-ghost btn-block" onClick={goManualFromCandidates}>
              該当なし・手動で入力する
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
                      <button className="link-btn" onClick={() => setManualName(l)}>
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
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
