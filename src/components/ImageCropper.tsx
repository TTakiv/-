import { useEffect, useRef, useState } from 'react';
import type { CropRect } from '../ocr/preprocess';
import { loadImage, rotateImageBlob } from '../ocr/preprocess';

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
  const [currentImg, setCurrentImg] = useState<HTMLImageElement | null>(null);
  const [box, setBox] = useState<Box | null>(null);
  const dragStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadImage(imageUrl).then((img) => {
      if (!cancelled) setCurrentImg(img);
    });
    return () => {
      cancelled = true;
    };
  }, [imageUrl]);

  async function handleRotate() {
    if (!currentImg) return;
    const blob = await rotateImageBlob(currentImg, 90);
    const rotated = await loadImage(URL.createObjectURL(blob));
    setCurrentImg(rotated);
    setBox(null);
  }

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
    const img = currentImg;
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
    if (!rect || !currentImg) return;
    onConfirm(rect, currentImg);
  }

  return (
    <div className="cropper">
      <p className="hint-text">
        カード名の文字から少し余白を残して囲むと読み取り精度が上がります(文字ギリギリだと欠けることがあります)。複数枚のカード名が並んでいる場合は、まとめて囲んでもOKです。カードが横向き・逆さまに写っている場合は「回転」でまっすぐにしてください。
      </p>
      <div className="cropper-rotate-row">
        <button type="button" className="btn btn-ghost" onClick={handleRotate} disabled={!currentImg}>
          🔄 90度回転
        </button>
      </div>
      <div
        className="cropper-stage"
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {currentImg && (
          <img src={currentImg.src} alt="カード" className="cropper-image" draggable={false} />
        )}
        {box && <div className="cropper-box" style={{ left: box.x, top: box.y, width: box.w, height: box.h }} />}
      </div>
      <div className="cropper-actions">
        <button className="btn btn-ghost" onClick={() => currentImg && onSkip(currentImg)} disabled={!currentImg}>
          囲まず全体で読み取る
        </button>
        <button className="btn btn-primary" onClick={handleConfirm} disabled={!box || box.w < 12 || box.h < 12}>
          この範囲で読み取る
        </button>
      </div>
    </div>
  );
}
