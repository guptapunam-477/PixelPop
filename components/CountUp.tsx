"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CountUp — animates the numeric part of a stat string (e.g. "+148%", "4.5x",
 * "-5%", "11.3") from 0 to its target when it scrolls into view, preserving any
 * prefix/suffix and decimal precision. Honors prefers-reduced-motion by showing
 * the final value immediately. Used for the hero proof strip and case-study KPIs.
 */
export function CountUp({
  value,
  duration = 1200,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>(() => formatInitial(value));

  useEffect(() => {
    const parsed = parse(value);
    if (!parsed) {
      setDisplay(value);
      return;
    }
    const { prefix, target, suffix, decimals } = parsed;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(prefix + target.toFixed(decimals) + suffix);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        const current = target * eased;
        setDisplay(prefix + current.toFixed(decimals) + suffix);
        if (t < 1) raf = requestAnimationFrame(tick);
        else setDisplay(prefix + target.toFixed(decimals) + suffix);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          run();
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

// "+148%" -> { prefix:"+", target:148, suffix:"%", decimals:0 }
// "4.5x"  -> { prefix:"",  target:4.5, suffix:"x", decimals:1 }
function parse(value: string) {
  const m = value.match(/^(\D*?)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const [, prefix, num, suffix] = m;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num), suffix, decimals };
}

// Start visually at 0 (keeping prefix/suffix) so there's no layout jump.
function formatInitial(value: string) {
  const parsed = parse(value);
  if (!parsed) return value;
  return parsed.prefix + (0).toFixed(parsed.decimals) + parsed.suffix;
}
