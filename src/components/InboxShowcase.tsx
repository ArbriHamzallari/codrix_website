'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

const SCREENSHOT_SRC = '/products/0adeb79284538b050cc117ac87fa046ec82a01db-6400x2800.webp';
// Real screenshot's native pixel size — keeps the frame from stretching or
// squashing the actual product UI while it's still loading.
const SCREENSHOT_RATIO = '6400 / 2800';

/**
 * "Një inbox. Të gjitha bisedat." — editorial product showcase, styled after
 * Intercom's product-storytelling section. A real Biseda inbox screenshot
 * (not a recreation) is staged over a warm, subdued background. Only the
 * inbox tab has a real screenshot today; the other channels are shown as
 * present-but-inactive tabs rather than invented UI.
 */
export default function InboxShowcase({ dict }: { dict: Dict }) {
  const s = dict.story.inboxShowcase;
  const [active, setActive] = useState(s.tabs[0].key);
  const activeTab = s.tabs.find((t) => t.key === active) ?? s.tabs[0];

  return (
    <section className="section-y px-8 lg:px-16">
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <h2 className="font-heading text-ink text-[26px] md:text-[32px] font-medium tracking-tight mb-9">
            {s.title}
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex overflow-x-auto border border-border rounded-sm">
            {s.tabs.map((tab) => {
              const isActive = tab.key === active;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActive(tab.key)}
                  className={cn(
                    'relative shrink-0 min-w-[150px] px-5 py-4 text-left text-sm border-r border-border last:border-r-0 transition-colors',
                    isActive ? 'text-ink font-medium bg-white' : 'text-ink-muted hover:text-ink'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="inbox-tab-indicator"
                      className="absolute top-0 left-0 right-0 h-[2px] bg-primary"
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                  )}
                  {tab.label}
                  {!tab.available && (
                    <span className="ml-2 text-[11px] text-ink-muted">{s.comingSoon}</span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-0 md:mt-4 h-[300px] sm:h-[420px] md:h-[520px] lg:h-[650px] rounded-xl2 overflow-hidden border border-border">
            <ShowcaseBackground />

            <AnimatePresence mode="wait">
              {activeTab.available ? (
                <motion.div
                  key="inbox-screenshot"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[160%] sm:w-[120%] md:w-[85%] lg:w-[70%] lg:max-w-[1000px] rounded-card border border-border overflow-hidden shadow-soft bg-white"
                  style={{ aspectRatio: SCREENSHOT_RATIO }}
                >
                  <Image
                    src={SCREENSHOT_SRC}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 1000px, 90vw"
                    className="object-cover object-top"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="coming-soon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="inline-flex items-center rounded-sm border border-border bg-white/90 px-4 py-2 text-sm text-ink-muted whitespace-nowrap">
                    {activeTab.label} — {s.comingSoon}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ShowcaseBackground() {
  return (
    <motion.div
      aria-hidden
      className="absolute inset-0"
      initial={{ scale: 1.04, x: -6 }}
      whileInView={{ scale: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      style={{
        background:
          'radial-gradient(ellipse 65% 55% at 25% 15%, rgba(255, 244, 224, 0.9) 0%, transparent 55%), radial-gradient(ellipse 55% 50% at 82% 88%, rgba(255, 226, 189, 0.45) 0%, transparent 60%), linear-gradient(180deg, #F1EBDD 0%, #E9E1D2 100%)',
      }}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-multiply" />
    </motion.div>
  );
}
