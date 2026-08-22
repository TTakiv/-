import { useRef, useState } from 'react';
import type { BoardInputs, RoomType } from '../domain/types';
import { calcBoardScore } from '../domain/boardScore';
import { cropPlain, blobToDataUrl, fullImageRect, type CropRect } from '../ocr/preprocess';
import NumberStepper from './NumberStepper';
import ImageCropper from './ImageCropper';

const PHOTO_MAX_DIMENSION = 1400;

interface Props {
  board: BoardInputs;
  onChange: (board: BoardInputs) => void;
  photo?: string;
  onPhotoChange: (photo: string | undefined) => void;
}

const ROOM_LABEL: Record<RoomType, string> = {
  wood: '木の家 (0点/部屋)',
  clay: '土の家 (1点/部屋)',
  stone: '石の家 (2点/部屋)',
};

export default function BoardScoreForm({ board, onChange, photo, onPhotoChange }: Props) {
  const [rawPhotoUrl, setRawPhotoUrl] = useState<string | null>(null);
  const cameraFileRef = useRef<HTMLInputElement>(null);
  const libraryFileRef = useRef<HTMLInputElement>(null);
  const score = calcBoardScore(board);

  function set<K extends keyof BoardInputs>(key: K, value: BoardInputs[K]) {
    onChange({ ...board, [key]: value });
  }

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setRawPhotoUrl(URL.createObjectURL(file));
  }

  async function handleCropConfirm(rect: CropRect, img: HTMLImageElement) {
    const blob = await cropPlain(img, rect, PHOTO_MAX_DIMENSION);
    onPhotoChange(await blobToDataUrl(blob));
    setRawPhotoUrl(null);
  }

  async function handleCropSkip(img: HTMLImageElement) {
    const blob = await cropPlain(img, fullImageRect(img), PHOTO_MAX_DIMENSION);
    onPhotoChange(await blobToDataUrl(blob));
    setRawPhotoUrl(null);
  }

  return (
    <div className="board-form">
      <div className="board-photo-section">
        {rawPhotoUrl ? (
          <ImageCropper
            imageUrl={rawPhotoUrl}
            onConfirm={handleCropConfirm}
            onSkip={handleCropSkip}
            hintText="写真が横向き・逆さまなら「回転」でまっすぐにできます。見たい範囲だけ指で囲んで切り抜くと、数えるときに見やすくなります(囲まなくてもOK)。"
            confirmLabel="この範囲で保存する"
            skipLabel="切り抜かずに保存する"
            altText="農場ボード"
          />
        ) : (
          <>
            <div className="board-photo-buttons">
              <button className="btn btn-ghost" onClick={() => cameraFileRef.current?.click()}>
                📷 写真を撮る
              </button>
              <button className="btn btn-ghost" onClick={() => libraryFileRef.current?.click()}>
                🖼️ アルバムから選択
              </button>
              {photo && (
                <button className="btn btn-ghost" onClick={() => setRawPhotoUrl(photo)}>
                  ✂️ 編集
                </button>
              )}
            </div>
            <input
              ref={cameraFileRef}
              type="file"
              accept="image/*"
              capture="environment"
              hidden
              onChange={handlePhoto}
            />
            <input ref={libraryFileRef} type="file" accept="image/*" hidden onChange={handlePhoto} />
            {photo && <img className="board-photo-preview" src={photo} alt="農場ボード" />}
          </>
        )}
        <p className="hint-text">
          農場ボードの資源・柵・部屋を数えて入力してください。数値は自動で集計されます。
        </p>
      </div>

      <NumberStepper label="畑" value={board.fields} onChange={(v) => set('fields', v)} points={score.fields} />
      <NumberStepper
        label="牧場 (柵で囲まれた区画数)"
        value={board.pastures}
        onChange={(v) => set('pastures', v)}
        points={score.pastures}
      />
      <NumberStepper
        label="柵付き小屋"
        value={board.fencedStables}
        onChange={(v) => set('fencedStables', v)}
        points={score.fencedStables}
      />
      <NumberStepper label="穀物" value={board.grain} onChange={(v) => set('grain', v)} points={score.grain} />
      <NumberStepper
        label="野菜"
        value={board.vegetables}
        onChange={(v) => set('vegetables', v)}
        points={score.vegetables}
      />
      <NumberStepper label="羊" value={board.sheep} onChange={(v) => set('sheep', v)} points={score.sheep} />
      <NumberStepper
        label="猪"
        value={board.wildBoar}
        onChange={(v) => set('wildBoar', v)}
        points={score.wildBoar}
      />
      <NumberStepper label="牛" value={board.cattle} onChange={(v) => set('cattle', v)} points={score.cattle} />
      <NumberStepper
        label="未使用スペース"
        value={board.unusedSpaces}
        onChange={(v) => set('unusedSpaces', v)}
        points={score.unusedSpaces}
      />

      <div className="field">
        <span>家の種類</span>
        <select value={board.roomType} onChange={(e) => set('roomType', e.target.value as RoomType)}>
          {(Object.keys(ROOM_LABEL) as RoomType[]).map((rt) => (
            <option key={rt} value={rt}>
              {ROOM_LABEL[rt]}
            </option>
          ))}
        </select>
      </div>
      <NumberStepper label="部屋数" value={board.rooms} onChange={(v) => set('rooms', v)} min={1} points={score.rooms} />
      <NumberStepper
        label="家族の人数"
        value={board.familyMembers}
        onChange={(v) => set('familyMembers', v)}
        min={1}
        points={score.familyMembers}
      />
      <NumberStepper
        label="物乞いトークン"
        value={board.beggingTokens}
        onChange={(v) => set('beggingTokens', v)}
        points={score.beggingTokens}
      />

      <div className="board-total">
        ボード合計: <strong>{score.total}</strong> 点
      </div>
    </div>
  );
}
