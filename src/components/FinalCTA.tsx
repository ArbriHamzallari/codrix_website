'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';

export default function FinalCTA({ dict }: { dict: Dict }) {
  const c = dict.finalCta;

  return (
    <section id="kontakt" className="relative py-28 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(59, 107, 255, 0.25) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-5"
        >
          {c.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-muted text-lg leading-relaxed mb-10"
        >
          {c.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <a
            href={whatsappUrl(dict.nav.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-8 py-4 text-lg font-semibold text-white hover:brightness-110 transition-all shadow-cta"
          >
            <MessageCircle className="w-5 h-5" />
            {c.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
