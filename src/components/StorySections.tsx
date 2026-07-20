'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
  Inbox,
  Check,
  Clock,
  Plus,
} from 'lucide-react';
import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

export default function StorySections({ dict }: { dict: Dict }) {
  return (
    <>
      <ProblemSection dict={dict} />
      <ChannelsSection dict={dict} />
    </>
  );
}

/* ---------- Section A: the problem (text left, visual right) ---------- */

function ProblemSection({ dict }: { dict: Dict }) {
  const s = dict.story.problem;
  const [open, setOpen] = useState(0);

  return (
    <section className="section-y px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-4">{s.eyebrow}</p>
          <h2 className="type-h2 font-bold font-heading text-white mb-5 text-balance">{s.title}</h2>
          <p className="type-lead text-secondary mb-8">{s.body}</p>

          <div className="flex flex-col gap-2.5">
            {s.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.title}
                  className={cn(
                    'rounded-card border transition-colors',
                    isOpen ? 'border-primary/40 bg-surface' : 'border-surface-border bg-surface/50'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="type-body font-semibold text-white">{item.title}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-primary shrink-0"
                      aria-hidden
                    >
                      <Plus className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 type-small text-secondary">{item.text}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ProblemVisual />
        </Reveal>
      </div>
    </section>
  );
}

function ProblemVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 bg-section-glow blur-2xl opacity-70 pointer-events-none" aria-hidden />
      <div className="relative glass-strong rounded-xl3 p-5 shadow-elevated space-y-5">
        {/* unanswered */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="type-small text-tertiary">Pa asistent</span>
            <span className="inline-flex items-center gap-1 text-xs text-error">
              <Clock className="w-3.5 h-3.5" /> 21:04
            </span>
          </div>
          <div className="rounded-lg bg-[#202C33] text-white/90 text-[13px] px-3 py-2 rounded-bl-none max-w-[85%]">
            A jeni hapur të dielën?
          </div>
          <p className="mt-2 text-xs text-error/90">Pa përgjigje · klienti iku te tjetri</p>
        </div>

        <div className="h-px bg-surface-border" />

        {/* handled */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="type-small text-tertiary">Me Codrix</span>
            <span className="inline-flex items-center gap-1 text-xs text-success">
              <Check className="w-3.5 h-3.5" /> 2 sek
            </span>
          </div>
          <div className="space-y-2">
            <div className="rounded-lg bg-[#202C33] text-white/90 text-[13px] px-3 py-2 rounded-bl-none max-w-[85%]">
              A jeni hapur të dielën?
            </div>
            <div className="flex justify-end">
              <div className="rounded-lg bg-[#005C4B] text-white text-[13px] px-3 py-2 rounded-br-none max-w-[85%]">
                Po! Të dielën jemi hapur 10:00–14:00. Doni t&apos;ju rezervoj një orar? 😊
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Section B: unified inbox (visual left, text right) ---------- */

const CHANNEL_ICONS: Record<string, React.ReactNode> = {
  WhatsApp: <MessageCircle className="w-5 h-5" />,
  Instagram: <Instagram className="w-5 h-5" />,
  'Facebook Messenger': <Facebook className="w-5 h-5" />,
  'Web chat': <Globe className="w-5 h-5" />,
};

function ChannelsSection({ dict }: { dict: Dict }) {
  const s = dict.story.channels;

  return (
    <section className="section-y px-4 sm:px-6 bg-section-glow">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* visual first on desktop, text below on mobile via order */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto w-full max-w-md glass-strong rounded-xl3 p-6 shadow-elevated">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {s.list.map((ch) => (
                <div
                  key={ch.name}
                  className="flex items-center gap-3 rounded-xl border border-surface-border bg-surface/60 px-3 py-3"
                >
                  <span className="w-9 h-9 rounded-lg bg-primary-dim text-primary flex items-center justify-center shrink-0">
                    {CHANNEL_ICONS[ch.name] ?? <MessageCircle className="w-5 h-5" />}
                  </span>
                  <span className="type-small font-medium text-white leading-tight">
                    {ch.name}
                    {ch.soon && (
                      <span className="block text-[10px] text-warning">{s.soonLabel}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-4">
              <div className="flex flex-col items-center gap-1 text-tertiary">
                <span className="w-px h-5 bg-surface-border" />
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl2 border border-primary/40 bg-primary-dim px-4 py-4">
              <span className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                <Inbox className="w-5 h-5" />
              </span>
              <div>
                <p className="type-body font-semibold text-white">{s.inboxLabel}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <p className="text-xs font-bold tracking-[0.2em] text-primary mb-4">{s.eyebrow}</p>
          <h2 className="type-h2 font-bold font-heading text-white mb-5 text-balance">{s.title}</h2>
          <p className="type-lead text-secondary">{s.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
