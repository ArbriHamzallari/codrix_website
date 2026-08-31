'use client';

import { MessageCircle } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

export default function FinalCTA({ dict }: { dict: Dict }) {
  const c = dict.finalCta;

  return (
    <section id="kontakt" className="section-y px-8 lg:px-16 border-t border-border">
      <Reveal className="max-w-2xl mx-auto text-center">
        <h2 className="type-h2 font-heading text-ink mb-5 text-balance">{c.title}</h2>
        <p className="type-lead text-ink-muted mb-10">{c.subtitle}</p>
        <a
          href={whatsappUrl(dict.nav.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-sm bg-whatsapp px-8 py-4 text-lg font-medium text-white hover:brightness-110 transition-all shadow-cta"
        >
          <MessageCircle className="w-5 h-5" />
          {c.cta}
        </a>
      </Reveal>
    </section>
  );
}
