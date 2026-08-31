'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Instagram, Facebook, Globe, Plus, ArrowRight } from 'lucide-react';
import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';
import { ProblemMessageEvidence } from '@/components/ProblemMessageEvidence';
import TrustedByLogos from '@/components/TrustedByLogos';

/* ---------- "Klientët nuk presin." — quiet trust strip above, copy left, incoming-message stack right ---------- */

export function ProblemSection({ dict }: { dict: Dict }) {
  const s = dict.story.problem;
  const [open, setOpen] = useState(0);

  return (
    <section className="section-y px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto mb-4">
        <TrustedByLogos dict={dict} />
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-start">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="type-label font-medium uppercase text-primary mb-4">{s.eyebrow}</p>
            <h2 className="type-h2 font-heading text-ink mb-6 text-balance">{s.title}</h2>
            <p className="type-lead text-ink-muted max-w-lg mb-9">{s.body}</p>
          </Reveal>

          <div className="flex flex-col gap-0 border-t border-border">
            {s.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.title} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-3 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="type-body font-medium text-ink">{item.title}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-primary shrink-0"
                      aria-hidden
                    >
                      <Plus className="w-4 h-4" />
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
                        <p className="pb-5 type-small text-ink-muted max-w-md">{item.text}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-8">
          <ProblemMessageEvidence />
        </div>
      </div>
    </section>
  );
}

/* ---------- "Çdo kanal. Një bisedë." — centered statement, full-width channel flow ---------- */

const CHANNEL_ICONS: Record<string, React.ReactNode> = {
  WhatsApp: <MessageCircle className="w-5 h-5" />,
  Instagram: <Instagram className="w-5 h-5" />,
  'Facebook Messenger': <Facebook className="w-5 h-5" />,
  'Web chat': <Globe className="w-5 h-5" />,
};

export function ChannelsSection({ dict }: { dict: Dict }) {
  const s = dict.story.channels;

  return (
    <section className="section-y px-8 lg:px-16 bg-section-glow">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="type-label font-medium uppercase text-primary mb-4">{s.eyebrow}</p>
          <h2 className="type-h2 font-heading text-ink mb-5 text-balance">{s.title}</h2>
          <p className="type-lead text-ink-muted">{s.body}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-0">
            {s.list.map((ch, i) => (
              <div key={ch.name} className="flex items-center">
                <div className="flex flex-col items-center gap-2.5">
                  <span className="w-12 h-12 rounded-full border border-border bg-white text-ink-muted flex items-center justify-center">
                    {CHANNEL_ICONS[ch.name] ?? <MessageCircle className="w-5 h-5" />}
                  </span>
                  <span className="type-small text-ink-muted text-center leading-tight">
                    {ch.name}
                    {ch.soon && <span className="block text-[11px] text-warning">{s.soonLabel}</span>}
                  </span>
                </div>
                {i < s.list.length - 1 && (
                  <span className="hidden sm:block w-10 md:w-16 h-px bg-border mx-2 md:mx-4 mb-7" aria-hidden />
                )}
              </div>
            ))}

            <span className="hidden sm:block w-10 md:w-16 h-px bg-border mx-2 md:mx-4 mb-7" aria-hidden />

            <div className="flex flex-col items-center gap-2.5">
              <span className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </span>
              <span className="type-small font-medium text-ink text-center leading-tight">{s.inboxLabel}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
