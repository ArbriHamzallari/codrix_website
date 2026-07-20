'use client';

import { MessageCircle, ArrowRight, ArrowDown } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';
import Reveal from '@/components/ui/Reveal';
import CountUp from '@/components/ui/CountUp';
import HeroPhone from '@/components/HeroPhone';

export default function Hero({ dict }: { dict: Dict }) {
  const h = dict.hero;

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* layered background depth */}
      <div className="absolute inset-0 -z-10 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid-faint opacity-40" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-vignette" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-noise opacity-[0.15] mix-blend-soft-light" aria-hidden />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        {/* left: copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface/70 px-4 py-1.5 text-sm text-secondary hover:text-white hover:border-primary/40 transition-colors mb-7"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-success animate-pulse" />
              {h.pill}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="type-h1 font-bold font-heading text-white mb-6 text-balance">
              {h.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="type-lead text-secondary max-w-2xl mx-auto lg:mx-0 mb-9">{h.subtitle}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3.5 mb-6">
              <a
                href={whatsappUrl(dict.nav.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-base font-semibold text-white hover:brightness-110 transition-all shadow-cta lift press w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                {h.ctaWhatsapp}
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-7 py-3.5 text-base font-semibold text-white hover:bg-surface-hover hover:border-white/20 transition-colors lift press w-full sm:w-auto justify-center"
              >
                {h.ctaDemo}
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="type-small text-tertiary mb-10">{h.credibility}</p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex items-stretch justify-center lg:justify-start gap-6 sm:gap-8">
              {h.stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && <span className="w-px h-10 bg-surface-border" aria-hidden />}
                  <div className="text-center lg:text-left">
                    <p className="text-2xl sm:text-3xl font-bold font-heading text-white">
                      {s.num !== undefined ? (
                        <CountUp value={s.num} suffix={s.suffix ?? ''} duration={1.2} />
                      ) : (
                        s.value
                      )}
                    </p>
                    <p className="type-small text-tertiary mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* right: product visual */}
        <div className="relative">
          <HeroPhone dict={dict} />
        </div>
      </div>
    </section>
  );
}
