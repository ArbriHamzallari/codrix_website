'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { whatsappUrl } from '@/i18n';
import { cn } from '@/lib/utils';
import Reveal from '@/components/ui/Reveal';
import type { Dict } from '@/i18n';

/**
 * Volume-based pricing: one contact-volume selector drives all three paid
 * tiers at once, plus a monthly/yearly toggle.
 *
 * PLACEHOLDER NUMBERS — the brackets and the per-bracket prices below were
 * scaled down from an enterprise-oriented reference, not researched. The
 * lowest bracket deliberately matches the prices fixed in CLAUDE.md §5
 * (€79/€159/€279); everything above it is a guess. Change freely.
 */
const PRICING_MATRIX: Record<string, number[]> = {
  Starter: [79, 99, 129],
  Growth: [159, 199, 259],
  Advanced: [279, 349, 449],
};

/** Arbitrary, matching a common SaaS convention. Set to 0 to drop the toggle. */
const YEARLY_DISCOUNT = 0.2;

export default function Pricing({ dict }: { dict: Dict }) {
  const p = dict.pricing;
  const [volumeIndex, setVolumeIndex] = useState(0);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [volumeOpen, setVolumeOpen] = useState(false);
  const volumeRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  // The source shipped this dropdown with no way to dismiss it except picking
  // an option — it stayed open on outside clicks and swallowed Escape.
  useEffect(() => {
    if (!volumeOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (!volumeRef.current?.contains(e.target as Node)) setVolumeOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVolumeOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [volumeOpen]);

  // Deterministic grouping rather than `toLocaleString` — ICU can disagree
  // between Node and the browser on the separator, and this component is
  // server-rendered, so that difference would surface as a hydration mismatch
  // the moment a figure crosses 1,000 (it does: €449 × 12 = €5,388).
  const sep = dict.locale === 'en' ? ',' : '.';
  const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);

  const savePct = `${Math.round(YEARLY_DISCOUNT * 100)}`;
  const waHref = whatsappUrl(dict.nav.whatsappMessage);

  return (
    <section id="cmimet" className="section-y border-t border-border px-6 sm:px-8 lg:px-16">
      <Reveal className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="font-heading text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
          {p.title}
        </h2>
        <p className="type-lead mt-4 text-secondary">{p.subtitle}</p>
      </Reveal>

      {/* Billing toggle */}
      <div className="mx-auto mb-6 flex w-fit rounded-full border border-border bg-cream p-1">
        {(['monthly', 'yearly'] as const).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => setBilling(mode)}
            aria-pressed={billing === mode}
            className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              billing === mode ? 'bg-white text-ink shadow-soft' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {mode === 'monthly'
              ? p.billingMonthly
              : `${p.billingYearly} — ${p.yearlySave.replace('{pct}', savePct)}`}
          </button>
        ))}
      </div>

      {/* Volume selector — drives all three paid tiers together */}
      <div className="mx-auto mb-12 w-fit">
        <p className="mb-2 text-center type-small text-ink-muted">{p.volumeQuestion}</p>
        <div className="relative" ref={volumeRef}>
          <button
            type="button"
            onClick={() => setVolumeOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={volumeOpen}
            aria-controls={listboxId}
            className="flex w-64 cursor-pointer items-center justify-between rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-soft hover:border-ink/25"
          >
            {p.volumeTiers[volumeIndex]}
            <ChevronDown
              size={16}
              className={`text-ink-muted transition-transform ${volumeOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {volumeOpen && (
            <div
              id={listboxId}
              role="listbox"
              className="absolute z-20 mt-1 w-64 overflow-hidden rounded-lg border border-border bg-white shadow-elevated"
            >
              {p.volumeTiers.map((label, index) => (
                <button
                  key={label}
                  type="button"
                  role="option"
                  aria-selected={index === volumeIndex}
                  onClick={() => {
                    setVolumeIndex(index);
                    setVolumeOpen(false);
                  }}
                  className={`flex w-full cursor-pointer items-center justify-between px-4 py-2.5 text-left text-sm hover:bg-cream ${
                    index === volumeIndex ? 'bg-primary/5 text-primary' : 'text-ink'
                  }`}
                >
                  {label}
                  {index === volumeIndex && <Check size={14} />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Plan cards */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {p.tiers.map((tier) => {
          // A tier that ships its own price string is quoted, not priced — it
          // reads that string and is untouched by the volume and billing
          // controls. That's what keeps Enterprise static, structurally,
          // rather than by name-checking it.
          const monthlyAtVolume = PRICING_MATRIX[tier.name]?.[volumeIndex];
          const priced = tier.price === undefined && monthlyAtVolume !== undefined;

          const displayPrice = priced
            ? billing === 'yearly'
              ? Math.round(monthlyAtVolume * (1 - YEARLY_DISCOUNT))
              : monthlyAtVolume
            : 0;
          const yearlyTotal = priced
            ? Math.round(monthlyAtVolume * (1 - YEARLY_DISCOUNT) * 12)
            : 0;
          const undiscountedYear = priced ? monthlyAtVolume * 12 : 0;

          return (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-card bg-white p-6 ${
                tier.highlighted
                  ? 'border-2 border-primary shadow-elevated'
                  : 'border border-border shadow-soft'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {p.popular}
                </span>
              )}

              <h3 className="text-sm font-medium text-ink-muted">{tier.name}</h3>

              {priced ? (
                <>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-ink">
                      €{fmt(displayPrice)}
                    </span>
                    <span className="text-sm text-ink-muted">{p.perMonth}</span>
                  </div>
                  {billing === 'yearly' && (
                    <p className="mt-1 text-xs text-ink-muted">
                      <span className="line-through">€{fmt(undiscountedYear)}</span>{' '}
                      €{fmt(yearlyTotal)}
                      {p.billedYearly}
                    </p>
                  )}
                </>
              ) : (
                <div className="mt-2 font-heading text-4xl font-bold text-ink">{tier.price}</div>
              )}

              <p className="mt-4 type-small text-ink-muted">{tier.tagline}</p>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-secondary">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* §11 CTA rule: green iff the button opens wa.me — which every
                  one of these does. */}
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                // `cn` rather than a template string: `mt-6` and `mt-auto` are
                // the same property, and which one wins would otherwise depend
                // on Tailwind's CSS ordering, not the order written here.
                className={cn(
                  'mt-6 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors',
                  tier.highlighted
                    ? 'bg-whatsapp text-white shadow-cta hover:brightness-110'
                    : 'border border-border text-ink hover:border-ink/30',
                  'mt-auto'
                )}
              >
                {tier.cta}
              </a>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center type-small text-ink-muted">
        {p.demoPrompt}{' '}
        <a href="#demo" className="font-medium text-primary underline">
          {p.demoCta}
        </a>
      </p>
      <p className="mt-2 text-center type-small text-ink-muted/70">{p.footnote}</p>
    </section>
  );
}
