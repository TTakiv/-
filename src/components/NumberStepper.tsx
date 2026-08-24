interface Props {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  points?: number;
}

export default function NumberStepper({ label, value, onChange, min = 0, points }: Props) {
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
          value={value === 0 ? '' : value}
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
