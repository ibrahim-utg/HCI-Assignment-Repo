export default function ProgressBar({ raised, target }) {
  const pct = Math.min(100, Math.round((raised / target) * 100));

  return (
    <div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-forest/10">
        <div
          className="h-full rounded-full bg-leaf transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 flex items-baseline justify-between font-mono text-xs text-ink/70">
        <span>
          <span className="font-bold text-forest-dark">
            D{raised.toLocaleString()}
          </span>{" "}
          raised
        </span>
        <span>
          {pct}% of D{target.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
