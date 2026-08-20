import { useRef, useState } from 'react';
import type { CropRect } from '../ocr/preprocess';

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Props {
  imageUrl: string;
  onConfirm: (rect: CropRect, img: HTMLImageElement) => void;
  onSkip: (img: HTMLImageElement) => void;
}

export default function ImageCropper({ imageUrl, onConfirm, onSkip }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [box, setBox] = useState<Box | null>(null);
  const dragStart = useRef<{ x: number; y: number } | null>(null);

  function relativePos(e: React.PointerEvent): { x: number; y: number } {
    const rect = containerRef.current!.getBoundingClientRect();
    return {
      x: Math.min(Math.max(e.clientX - rect.left, 0), rect.width),
      y: Math.min(Math.max(e.clientY - rect.top, 0), rect.height),
    };
  }

  function handlePointerDown(e: React.PointerEvent) {
    e.preventDefault();
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    const pos = relativePos(e);
    dragStart.current = pos;
    setBox({ x: pos.x, y: pos.y, w: 0, h: 0 });
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!dragStart.current) return;
    e.preventDefault();
    const pos = relativePos(e);
    const x = Math.min(dragStart.current.x, pos.x);
    const y = Math.min(dragStart.current.y, pos.y);
    setBox({ x, y, w: Math.abs(pos.x - dragStart.current.x), h: Math.abs(pos.y - dragStart.current.y) });
  }

  function handlePointerUp() {
    dragStart.current = null;
  }

  function toRect(): CropRect | null {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container || !box || box.w < 12 || box.h < 12) return null;
    const scaleX = img.naturalWidth / container.clientWidth;
    const scaleY = img.naturalHeight / container.clientHeight;
    return {
      x: box.x * scaleX,
      y: box.y * scaleY,
      width: box.w * scaleX,
      height: box.h * scaleY,
    };
  }

  function handleConfirm() {
    const rect = toRect();
    if (!rect || !imgRef.current) return;
    onConfirm(rect, imgRef.current);
  }

  return (
    <div className="cropper">
      <p className="hint-text">
        カード名の部分だけを指でなぞって囲むと読み取り精度が上がります。
      </p>
      <div
        className="cropper-stage"
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <img ref={imgRef} src={imageUrl} alt="カード" className="cropper-image" draggable={false} />
        {box && <div className="cropper-box" style={{ left: box.x, top: box.y, width: box.w, height: box.h }} />}
      </div>
      <div className="cropper-actions">
        <button className="btn btn-ghost" onClick={() => imgRef.current && onSkip(imgRef.current)}>
          囲まず全体で読み取る
        </button>
        <button className="btn btn-primary" onClick={handleConfirm} disabled={!box || box.w < 12 || box.h < 12}>
          この範囲で読み取る
        </button>
      </div>
    </div>
  );
}
