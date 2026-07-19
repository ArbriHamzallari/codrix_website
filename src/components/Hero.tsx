'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';

export default function Hero({ dict }: { dict: Dict }) {
  const h = dict.hero;

  return (
    <section className="relative pt-36 pb-20 px-4 sm:px-6 bg-hero-glow overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface/70 px-4 py-1.5 text-sm text-muted mb-8"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-success" />
          {h.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.05] tracking-tight mb-6"
        >
          {h.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-10"
        >
          {h.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-7 py-3.5 text-base font-semibold text-white hover:bg-surface-hover transition-colors w-full sm:w-auto justify-center"
          >
            {h.ctaDemo}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={whatsappUrl(dict.nav.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white hover:bg-primary-hover transition-colors shadow-cta w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            {h.ctaWhatsapp}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {h.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold font-heading text-white">{s.value}</p>
              <p className="text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
