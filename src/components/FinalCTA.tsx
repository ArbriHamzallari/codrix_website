'use client';

import { MessageCircle } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

export default function FinalCTA({ dict }: { dict: Dict }) {
  const c = dict.finalCta;

  return (
    <section id="kontakt" className="relative section-y px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(59, 107, 255, 0.22) 0%, transparent 70%)',
        }}
      />
      <Reveal className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="type-h2 font-bold font-heading text-white mb-5">{c.title}</h2>
        <p className="type-lead text-secondary mb-10">{c.subtitle}</p>
        <a
          href={whatsappUrl(dict.nav.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-8 py-4 text-lg font-semibold text-white hover:brightness-110 transition-all shadow-cta lift press"
        >
          <MessageCircle className="w-5 h-5" />
          {c.cta}
        </a>
      </Reveal>
    </section>
  );
}
