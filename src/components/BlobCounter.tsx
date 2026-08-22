import { useRef, useState } from 'react';
import { fullImageRect, type CropRect } from '../ocr/preprocess';
import { countBlobs } from '../ocr/blobCount';
import ImageCropper from './ImageCropper';

interface Props {
  label: string;
  onApply: (count: number) => void;
  onClose: () => void;
}

type Stage = 'capture' | 'cropping' | 'analyzing' | 'result';

export default function BlobCounter({ label, onApply, onClose }: Props) {
  const [stage, setStage] = useState<Stage>('capture');
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [count, setCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const cameraFileRef = useRef<HTMLInputElement>(null);
  const libraryFileRef = useRef<HTMLInputElement>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoUrl(URL.createObjectURL(file));
    setError(null);
    setStage('cropping');
  }

  async function analyze(rect: CropRect, img: HTMLImageElement) {
    setStage('analyzing');
    try {
      const result = await countBlobs(img, rect);
      setPreviewUrl(URL.createObjectURL(result.previewBlob));
      setCount(result.count);
      setStage('result');
    } catch (err) {
      console.error(err);
      setError('解析に失敗しました。範囲を選び直してください。');
      setStage('cropping');
    }
  }

  function handleCropConfirm(rect: CropRect, img: HTMLImageElement) {
    analyze(rect, img);
  }

  function handleCropSkip(img: HTMLImageElement) {
    analyze(fullImageRect(img), img);
  }

  function retryCrop() {
    setError(null);
    setStage('cropping');
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{label}を写真から数える</h2>
          <button className="btn btn-ghost" onClick={onClose}>
            閉じる
          </button>
        </div>

        {stage === 'capture' && (
          <div className="capture-stage">
            <p className="hint-text">
              数えたいコマだけが写るように、周りの背景(ボードや机)とはっきり色が違う部分を撮影・選択してください。コマ同士が重なっていたり影が濃いと数がずれやすいので、あくまで目安の数として、必要ならあとで手直ししてください。
            </p>
            <button className="btn btn-primary btn-block" onClick={() => cameraFileRef.current?.click()}>
              📷 写真を撮る
            </button>
            <button className="btn btn-ghost btn-block" onClick={() => libraryFileRef.current?.click()}>
              🖼️ アルバムから選択
            </button>
            <input
              ref={cameraFileRef}
              type="file"
              accept="image/*"
              capture="environment"
              hidden
              onChange={handleFile}
            />
            <input ref={libraryFileRef} type="file" accept="image/*" hidden onChange={handleFile} />
          </div>
        )}

        {stage === 'cropping' && photoUrl && (
          <>
            {error && <p className="error-text">{error}</p>}
            <ImageCropper
              imageUrl={photoUrl}
              onConfirm={handleCropConfirm}
              onSkip={handleCropSkip}
              hintText={`${label}が写っている範囲だけを指で囲んでください。写真が横向き・逆さまなら「回転」でまっすぐにできます。`}
              confirmLabel="この範囲を数える"
              skipLabel="囲まず全体を数える"
              altText={label}
            />
          </>
        )}

        {stage === 'analyzing' && <p className="hint-text">解析しています...</p>}

        {stage === 'result' && previewUrl && (
          <div className="blob-result-stage">
            <img className="card-photo-preview" src={previewUrl} alt="検出結果" />
            <p className="hint-text">
              赤枠で囲んだ部分をコマとして数えました。写真と見比べて、違っていれば数を直してください。
            </p>
            <label className="field">
              <span>{label}の数</span>
              <input
                type="number"
                min={0}
                value={count}
                onChange={(e) => setCount(Math.max(0, Number(e.target.value) || 0))}
              />
            </label>
            <button className="btn btn-ghost btn-block" onClick={retryCrop}>
              範囲を選び直す
            </button>
            <button className="btn btn-primary btn-block btn-large" onClick={() => onApply(count)}>
              この数を使う
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
