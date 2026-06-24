import { useEffect, useRef, useState } from "react";
import { Leaf } from "lucide-react";

const LEAF_COUNT = 10;

/**
 * The site's signature element: a counter that grows toward the
 * foundation's flagship number (100,000 trees a year) the moment it
 * scrolls into view, with a row of leaves filling in alongside it.
 */
export default function TreeCounter({
  target = 100000,
  label = "Trees planted each year",
  duration = 1800,
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  const filledLeaves = Math.max(1, Math.round((count / target) * LEAF_COUNT));

  return (
    <div ref={ref} className="inline-block">
      <p className="font-mono text-5xl font-bold text-forest-dark sm:text-6xl">
        {count.toLocaleString()}
        <span className="text-leaf">+</span>
      </p>
      <p className="mt-1 text-sm font-semibold text-ink/70">{label}</p>
      <div className="mt-3 flex gap-1" aria-hidden="true">
        {Array.from({ length: LEAF_COUNT }).map((_, i) => (
          <Leaf
            key={i}
            size={16}
            strokeWidth={2}
            className={`transition-all duration-500 ${
              i < filledLeaves
                ? "scale-100 text-leaf opacity-100"
                : "scale-75 text-forest/15 opacity-60"
            }`}
            style={{ transitionDelay: `${i * 40}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
