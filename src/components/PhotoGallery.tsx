interface Props {
  photos: string[];
}

/** Horizontally swipeable photo strip (board photo + any card photos), one full-width image per slide. */
export default function PhotoGallery({ photos }: Props) {
  if (photos.length === 0) return null;
  return (
    <div className="photo-gallery">
      {photos.map((src, i) => (
        <img key={i} className="photo-gallery-item" src={src} alt={`写真 ${i + 1}`} />
      ))}
    </div>
  );
}
