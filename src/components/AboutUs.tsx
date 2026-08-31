'use client';

import Image from 'next/image';
import { Check, MessageCircle } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

export default function AboutUs({ dict }: { dict: Dict }) {
  const f = dict.founder;

  return (
    <section id="themeluesi" className="section-y px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="border border-border rounded-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-0">
              {/* portrait */}
              <div className="relative min-h-[280px] md:min-h-full">
                <Image
                  src="/arbri-hamzallari.jpg"
                  alt="Arbri Hamzallari, themelues i Biseda AI"
                  fill
                  className="object-cover object-center grayscale"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>

              {/* content */}
              <div className="p-8 md:p-12">
                <span className="type-label font-medium uppercase text-primary mb-5 block">
                  {f.badge}
                </span>
                <h2 className="type-h3 font-heading text-ink mb-6 text-balance">{f.heading}</h2>
                <div className="space-y-4 mb-7">
                  {f.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)} className="type-body text-ink-muted">
                      {p}
                    </p>
                  ))}
                </div>
                <ul className="space-y-2.5 mb-8">
                  {f.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="type-body text-ink">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="type-small text-ink-muted italic mb-7">{f.signature}</p>
                <a
                  href={whatsappUrl(dict.nav.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-6 py-3 text-sm font-medium text-white hover:brightness-110 transition-all shadow-cta"
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
