interface Props {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  points?: number;
  onPhotoCount?: () => void;
}

export default function NumberStepper({ label, value, onChange, min = 0, points, onPhotoCount }: Props) {
  return (
    <div className="stepper-row">
      <div className="stepper-label">
        <span>{label}</span>
        {points !== undefined && (
          <span className={`stepper-points ${points < 0 ? 'negative' : ''}`}>
            {points >= 0 ? `+${points}` : points}点
          </span>
        )}
      </div>
      <div className="stepper-controls">
        {onPhotoCount && (
          <button
            type="button"
            className="stepper-btn stepper-photo-btn"
            onClick={onPhotoCount}
            aria-label={`${label}を写真から数える`}
          >
            📷
          </button>
        )}
        <button
          type="button"
          className="stepper-btn"
          onClick={() => onChange(Math.max(min, value - 1))}
          aria-label={`${label}を減らす`}
        >
          −
        </button>
        <input
          type="number"
          value={value}
          min={min}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
        />
        <button
          type="button"
          className="stepper-btn"
          onClick={() => onChange(value + 1)}
          aria-label={`${label}を増やす`}
        >
          +
        </button>
      </div>
    </div>
  );
}
