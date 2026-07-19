'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Dict } from '@/i18n';

export default function FAQ({ dict }: { dict: Dict }) {
  const [open, setOpen] = useState<number | null>(null);
  const f = dict.faq;

  return (
    <section id="pyetje" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white text-center mb-4">
          {f.title}
        </h2>
        <p className="text-muted text-center mb-12">{f.subtitle}</p>
        <div className="flex flex-col gap-3">
          {f.items.map((faq, i) => (
            <div
              key={faq.q}
              className="border border-surface-border rounded-2xl overflow-hidden bg-surface shadow-card"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-hover transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-white font-medium text-sm sm:text-base pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-primary text-xl ml-4 shrink-0"
                  aria-hidden
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-surface-border pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
