import { useEffect, useRef, useState } from "react";

/**
 * A simple, static display of the foundation's flagship number.
 * It gently pops into view once, the moment it scrolls onto screen
 * (no counting animation — just a clean reveal).
 */
export default function TreeCounter({
  target = 100000,
  label = "Trees planted each year",
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`inline-block transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-2 scale-95 opacity-0"
      }`}
    >
      <p className="font-mono text-5xl font-bold text-forest-dark sm:text-6xl">
        {target.toLocaleString()}
        <span className="text-leaf">+</span>
      </p>
      <p className="mt-1 text-sm font-semibold text-ink/70">{label}</p>
    </div>
  );
}
