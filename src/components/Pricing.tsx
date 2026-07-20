'use client';

import { Check, MessageCircle } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

export default function Pricing({ dict }: { dict: Dict }) {
  const p = dict.pricing;

  return (
    <section id="cmimet" className="section-y px-4 sm:px-6 bg-section-glow">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="type-h2 font-bold font-heading text-white mb-4">{p.title}</h2>
          <p className="type-lead text-secondary max-w-2xl mx-auto">{p.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
          {p.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.06} className="h-full">
              <div
                className={cn(
                  'relative h-full rounded-xl2 border p-7 flex flex-col lift',
                  tier.highlighted
                    ? 'bg-white text-background border-white shadow-elevated ring-1 ring-primary/30'
                    : 'bg-surface border-surface-border shadow-card hover:border-white/15'
                )}
              >
                {tier.highlighted && (
                  <>
                    <span
                      className="absolute -inset-px rounded-xl2 -z-10 opacity-60 blur-md bg-gradient-to-b from-accent/40 to-primary/40"
                      aria-hidden
                    />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-primary px-3 py-1 text-xs font-bold text-white shadow-soft">
                      {p.popular}
                    </span>
                  </>
                )}
                <p
                  className={cn(
                    'text-sm font-semibold mb-3',
                    tier.highlighted ? 'text-background/70' : 'text-muted'
                  )}
                >
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={cn(
                      'font-bold font-heading',
                      tier.period ? 'text-4xl' : 'text-3xl',
                      tier.highlighted ? 'text-background' : 'text-white'
                    )}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={tier.highlighted ? 'text-background/60' : 'text-muted'}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    'type-small leading-relaxed mb-6',
                    tier.highlighted ? 'text-background/70' : 'text-secondary'
                  )}
                >
                  {tier.tagline}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          'w-4 h-4 mt-0.5 shrink-0',
                          tier.highlighted ? 'text-primary' : 'text-success'
                        )}
                      />
                      <span className={tier.highlighted ? 'text-background/90' : 'text-white/85'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(dict.nav.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all press',
                    tier.highlighted
                      ? 'bg-whatsapp text-white hover:brightness-110 shadow-cta'
                      : 'border border-surface-border text-white hover:bg-surface-hover hover:border-white/20'
                  )}
                >
                  <MessageCircle className="w-4 h-4" />
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center type-small text-tertiary mt-8">{p.footnote}</p>
      </div>
    </section>
  );
}
