"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface StatItem {
  target: number;
  prefix: string;
  suffix: string;
  decimals: number;
  label: string;
}

const stats: StatItem[] = [
  { target: 25, prefix: "", suffix: "+", decimals: 0, label: "Years Exp." },
  { target: 12, prefix: "", suffix: "K+", decimals: 0, label: "Clients" },
  { target: 3, prefix: "$", suffix: "B+", decimals: 0, label: "Funded" },
  { target: 4.9, prefix: "", suffix: "", decimals: 1, label: "Rating" },
];

function StatCounter({ stat, shouldAnimate }: { stat: StatItem; shouldAnimate: boolean }) {
  const [value, setValue] = useState(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!shouldAnimate || animatedRef.current) return;
    animatedRef.current = true;

    const duration = 1500;
    const interval = 35;
    const steps = Math.ceil(duration / interval);
    const increment = stat.target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setValue(stat.target);
        clearInterval(timer);
      } else {
        setValue(current);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [shouldAnimate, stat.target]);

  const display = stat.decimals > 0 ? value.toFixed(stat.decimals) : Math.floor(value).toString();

  return (
    <div className="text-center">
      <div
        style={{
          fontWeight: 800,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "white",
          marginBottom: 4,
        }}
      >
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <div
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.875rem",
          fontWeight: 500,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative z-[1]"
      style={{ padding: "24px 24px 80px" }}
    >
      <div
        className="stats-card mx-auto max-w-[1120px] grid grid-cols-2 md:grid-cols-4 text-center"
        style={{ padding: "52px 48px", gap: "32px 24px" }}
      >
        {stats.map((stat) => (
          <StatCounter key={stat.label} stat={stat} shouldAnimate={animated} />
        ))}
      </div>
    </section>
  );
}
