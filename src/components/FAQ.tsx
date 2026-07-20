'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

export default function FAQ({ dict }: { dict: Dict }) {
  const [open, setOpen] = useState<number | null>(null);
  const f = dict.faq;

  return (
    <section id="pyetje" className="section-y px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="type-h2 font-bold font-heading text-white mb-4">{f.title}</h2>
          <p className="type-lead text-secondary">{f.subtitle}</p>
        </Reveal>

        <div className="flex flex-col gap-3">
          {f.items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={Math.min(i, 4) * 0.04}>
                <div
                  className={cn(
                    'rounded-card border overflow-hidden transition-colors',
                    isOpen ? 'border-primary/40 bg-surface' : 'border-surface-border bg-surface/60 hover:border-white/15'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="type-body font-semibold text-white pr-2">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn('shrink-0', isOpen ? 'text-primary' : 'text-muted')}
                      aria-hidden
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 type-small text-secondary leading-relaxed border-t border-surface-border pt-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
