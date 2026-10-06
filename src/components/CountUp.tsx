import { useEffect, useRef, useState } from "react";

type Props = { to: number; suffix?: string; duration?: number; className?: string };

const fmt = (n: number) => Math.round(n).toLocaleString("en-GB");

/** Counts from 0 to `to` the first time it scrolls into view. Static under reduced motion. */
export function CountUp({ to, suffix = "", duration = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setValue(to);
      return;
    }
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setValue(to * (1 - Math.pow(1 - t, 3)));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {/* Screen readers get the final figure, not the ticking one. */}
      <span aria-hidden="true">
        {fmt(value)}
        {suffix}
      </span>
      <span className="sr-only">
        {fmt(to)}
        {suffix}
      </span>
    </span>
  );
}
