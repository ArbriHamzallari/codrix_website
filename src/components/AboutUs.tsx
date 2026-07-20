'use client';

import Image from 'next/image';
import { Check, MessageCircle } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

export default function AboutUs({ dict }: { dict: Dict }) {
  const f = dict.founder;

  return (
    <section id="themeluesi" className="section-y px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="glass-strong rounded-xl3 shadow-elevated overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-0">
              {/* portrait */}
              <div className="relative min-h-[280px] md:min-h-full">
                <Image
                  src="/arbri-hamzallari.jpg"
                  alt="Arbri Hamzallari, themelues i Codrix"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/70 via-transparent to-transparent" />
              </div>

              {/* content */}
              <div className="p-8 md:p-12">
                <span className="inline-block text-xs font-bold tracking-[0.2em] text-primary mb-5">
                  {f.badge}
                </span>
                <h2 className="type-h2 font-bold font-heading text-white mb-6 text-balance">
                  {f.heading}
                </h2>
                <div className="space-y-4 mb-7">
                  {f.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)} className="type-body text-secondary">
                      {p}
                    </p>
                  ))}
                </div>
                <ul className="space-y-2.5 mb-8">
                  {f.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-success/15 text-success flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="type-body text-white/90">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="type-small text-tertiary italic mb-7">{f.signature}</p>
                <a
                  href={whatsappUrl(dict.nav.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition-all shadow-cta lift press"
                >
                  <MessageCircle className="w-4 h-4" />
                  {f.cta}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
