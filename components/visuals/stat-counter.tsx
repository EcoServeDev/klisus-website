"use client";

/**
 * Counts a factual numeral up on first view. `value` is the number to reach;
 * `prefix`/`suffix` wrap it (e.g. suffix " m"). Reduced-motion renders the
 * final value immediately.
 */

import { useEffect, useRef } from "react";

export default function StatCounter({
  value,
  suffix = "",
  className = "",
  duration = 1100,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const final = `${value.toLocaleString("en-US", { useGrouping: false })}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${Math.round(value * eased)}${suffix}`;
          if (t < 1) raf = requestAnimationFrame(tick);
          else el.textContent = final;
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, suffix, duration, final]);

  return (
    <span ref={ref} className={className}>
      {final}
    </span>
  );
}
