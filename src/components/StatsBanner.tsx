'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

function CountUpInt({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [target, active]);
  if (!active) return <span>0{suffix}</span>;
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function CountUpDecimal({ active }: { active: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let f = 0;
    const t = setInterval(() => {
      f += 0.045;
      if (f >= 1.8) {
        setV(1.8);
        clearInterval(t);
      } else {
        setV(Math.round(f * 10) / 10);
      }
    }, 30);
    return () => clearInterval(t);
  }, [active]);
  if (!active) return <span>0s</span>;
  return <span>{v.toFixed(1)}s</span>;
}

function Count247({ active }: { active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = 24 / 35;
    const timer = setInterval(() => {
      start += step;
      if (start >= 24) {
        setCount(24);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 28);
    return () => clearInterval(timer);
  }, [active]);
  if (!active) return <span>0/7</span>;
  return (
    <span>
      {count}/7
    </span>
  );
}

const stats = [
  { id: 'biz', label: 'Businesses Live' },
  { id: 'time', label: 'Avg AI Response Time' },
  { id: '247', label: 'Always On, No Manual Effort' },
] as const;

export default function StatsBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-y border-white/10 bg-white/[0.02] py-8"
    >
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
        {stats.map((s) => (
          <div key={s.id}>
            <p className="text-3xl font-bold text-white tabular-nums">
              {s.id === 'biz' && <CountUpInt target={5} suffix="+" active={isInView} />}
              {s.id === 'time' && <CountUpDecimal active={isInView} />}
              {s.id === '247' && <Count247 active={isInView} />}
            </p>
            <p className="text-sm text-white/50 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
