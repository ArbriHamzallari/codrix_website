'use client';

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

/**
 * Founder section — clean two-column grid. Left: eyebrow, headline,
 * subheadline, primary (WhatsApp) + secondary (anchor link) CTA. Right: a
 * framed portrait with a small trust badge, not raw beneath the headline.
 * Proof points and the closing line sit in a full-width row below.
 */
export default function AboutUs({ dict }: { dict: Dict }) {
  const f = dict.founder;

  return (
    <section id="themeluesi" className="section-y px-8 lg:px-16 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
          {/* Left column — statement, subheadline, CTAs */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="type-label font-medium uppercase text-primary block">
                {f.badge}
              </span>
              <h2 className="type-h2 font-heading text-ink mt-4 text-balance">{f.heading}</h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="type-lead text-ink-muted max-w-[46ch] mt-6">{f.paragraph}</p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-9">
                <a
                  href={whatsappUrl(dict.nav.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-6 h-12 text-[15px] font-medium text-white hover:brightness-110 transition-all shadow-cta"
                >
                  <MessageCircle className="w-4 h-4" />
                  {f.cta}
                </a>
                <a
                  href="#si-funksionon"
                  className="group inline-flex items-center gap-1.5 type-small font-medium text-ink-muted hover:text-ink transition-colors"
                >
                  {f.ctaSecondary}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right column — framed portrait with trust badge */}
          <div className="lg:col-span-6">
            <Reveal delay={0.12}>
              <div className="relative max-w-[420px] lg:ml-auto">
                <div className="relative aspect-[4/5] overflow-hidden rounded-img">
                  <Image
                    src="/Founder-photo.jpeg"
                    alt="Arbri Hamzallari, themelues i Biseda AI"
                    fill
                    className="object-cover grayscale-[18%] contrast-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-sm border border-border bg-white/95 px-3 py-2 shadow-soft backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span className="type-small font-medium text-ink">{f.trustBadge}</span>
                </div>
              </div>
              <div className="mt-4 max-w-[420px] lg:ml-auto">
                <p className="type-small font-semibold uppercase tracking-wide text-ink">
                  {f.signatureName}
                </p>
                <p className="type-small text-ink-muted mt-0.5">
                  {f.signatureRole} · {f.signatureLocation}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Proof points — full width */}
        <Reveal delay={0.2}>
          <h3 className="mt-16 lg:mt-24 type-h3 font-heading text-ink text-balance">
            {f.trustHeading}
          </h3>
          <div className="mt-6 border-t border-border divide-y divide-border">
            {f.trustPoints.map((point, i) => (
              <div key={point.title} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5">
                <span className="type-label font-mono text-ink-muted pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="type-small font-semibold uppercase tracking-wide text-ink">
                    {point.title}
                  </p>
                  <p className="type-small text-ink-muted mt-1.5">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 type-small text-ink-muted italic">{f.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
