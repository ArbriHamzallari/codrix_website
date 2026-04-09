'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

const MESSAGES = [
  { from: 'customer' as const, text: 'Hi, do you have availability tomorrow at 3pm?', delay: 0 },
  { from: 'ai' as const, text: '✅ Yes! I have a slot at 3:00 PM tomorrow. Shall I book it for you?', delay: 1800 },
  { from: 'customer' as const, text: 'Yes please, for a dental cleaning', delay: 3200 },
  { from: 'ai' as const, text: "📅 Booked! You'll receive a confirmation shortly. See you tomorrow!", delay: 4600 },
];

const LOOP_MS = 7000;

export default function HeroChatDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [cycle, setCycle] = useState(0);

  const startCycle = useCallback(() => {
    setVisibleCount(0);
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    MESSAGES.forEach((msg, i) => {
      timeouts.push(
        setTimeout(() => setVisibleCount(i + 1), msg.delay)
      );
    });
    return timeouts;
  }, []);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    let intervalId: ReturnType<typeof setInterval>;
    const raf = requestAnimationFrame(() => {
      timeouts = startCycle();
      intervalId = setInterval(() => {
        timeouts.forEach(clearTimeout);
        setCycle((c) => c + 1);
        timeouts = startCycle();
      }, LOOP_MS);
    });
    return () => {
      cancelAnimationFrame(raf);
      if (intervalId) clearInterval(intervalId);
      timeouts.forEach(clearTimeout);
    };
  }, [startCycle]);

  const visible = MESSAGES.slice(0, visibleCount);

  return (
    <div className="relative w-full max-w-sm mx-auto rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 shadow-2xl">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-black">
          AI
        </div>
        <div>
          <p className="text-white text-sm font-semibold">Codrix AI Agent</p>
          <p className="text-emerald-400 text-xs">● Online — replies instantly</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 min-h-[160px]">
        <AnimatePresence mode="popLayout">
          {visible.map((msg, i) => (
            <motion.div
              key={`${cycle}-${i}-${msg.delay}`}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={
                msg.from === 'customer'
                  ? 'max-w-[85%] self-end px-3 py-2 rounded-xl text-sm bg-white/10 text-white/90'
                  : 'max-w-[85%] self-start px-3 py-2 rounded-xl text-sm bg-secondary text-white'
              }
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-3 pt-3 border-t border-white/10 text-center">
        <span className="text-xs text-emerald-400 font-medium">
          ⚡ Average response: 1.8 seconds
        </span>
      </div>
    </div>
  );
}
