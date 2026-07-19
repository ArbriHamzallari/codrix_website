'use client';

import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';
import { cn } from '@/lib/utils';

export default function Pricing({ dict }: { dict: Dict }) {
  const p = dict.pricing;

  return (
    <section id="cmimet" className="py-24 px-4 sm:px-6 bg-section-glow">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            {p.title}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{p.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
          {p.tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className={cn(
                'relative rounded-2xl border p-6 flex flex-col',
                tier.highlighted
                  ? 'bg-white text-background border-white shadow-cta'
                  : 'bg-surface border-surface-border shadow-card'
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-accent to-primary px-3 py-1 text-xs font-bold text-white">
                  {p.popular}
                </span>
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
                  'text-sm leading-relaxed mb-6',
                  tier.highlighted ? 'text-background/70' : 'text-muted'
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
                  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors',
                  tier.highlighted
                    ? 'bg-primary text-white hover:bg-primary-hover'
                    : 'border border-surface-border text-white hover:bg-surface-hover'
                )}
              >
                <MessageCircle className="w-4 h-4" />
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-8">{p.footnote}</p>
      </div>
    </section>
  );
}
