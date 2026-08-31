'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

/**
 * A real WhatsApp-style conversation, not a decorative mockup. Reuses the
 * exact chat-bubble visual language already shipped in DemoLive.tsx (dark
 * WhatsApp surface, customer bubble right/green, agent bubble left/dark) so
 * this reads as the same product, not an invented illustration.
 *
 * The staged reveal (customer message -> typing -> reply -> action) is driven
 * by mount state via `animate`, not nested `whileInView` — nested viewport-
 * triggered Reveal components inside an already-Reveal-wrapped parent do not
 * reliably fire their own IntersectionObserver check, which left this
 * permanently blank in an earlier version. This sequence only needs to run
 * once the section is on screen, so it doesn't need its own viewport
 * detection.
 */
export default function ProductConversation({ dict }: { dict: Dict }) {
  const c = dict.hero.conversation;
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<'customer' | 'typing' | 'reply'>(
    reduce ? 'reply' : 'customer'
  );

  useEffect(() => {
    if (reduce) return;
    const t1 = setTimeout(() => setStage('typing'), 500);
    const t2 = setTimeout(() => setStage('reply'), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const step = reduce
    ? { initial: false as const, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35, ease: 'easeOut' as const } };

  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      <Reveal>
        <div className="rounded-card border border-ink/10 bg-[#0B141A] overflow-hidden">
          {/* header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#075E54]">
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white text-sm font-medium shrink-0">
              {c.businessLabel.charAt(0)}
            </div>
            <div className="leading-tight min-w-0">
              <p className="text-white text-sm font-medium truncate">{c.businessLabel}</p>
              <p className="text-white/60 text-xs">{c.online}</p>
            </div>
          </div>

          {/* thread */}
          <div className="px-3.5 py-5 space-y-2.5 min-h-[170px]">
            <motion.div {...step} className="flex justify-end">
              <div className="max-w-[80%] rounded-lg rounded-br-none bg-[#005C4B] px-3 py-2 text-[13px] leading-relaxed text-white">
                {c.customer}
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              {stage === 'typing' && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-start"
                >
                  <div className="rounded-lg rounded-bl-none bg-[#202C33] px-3 py-2.5 flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {stage === 'reply' && (
                <motion.div
                  key="reply"
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] rounded-lg rounded-bl-none bg-[#202C33] px-3 py-2 text-[13px] leading-relaxed text-white/90">
                    {c.agent}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Reveal>

      {/* action outcome — the "not just a reply" beat */}
      <Reveal delay={1.3} className="mt-3">
        <div className="flex items-center gap-3 rounded-card border border-ink/10 bg-white px-4 py-3">
          <span className="w-7 h-7 rounded-full bg-success/10 text-success flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </span>
          <div className="min-w-0">
            <p className="type-small font-medium text-ink leading-tight">{c.actionLabel}</p>
            <p className="font-mono text-[11px] text-ink-muted mt-0.5 tracking-tight">{c.actionValue}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
