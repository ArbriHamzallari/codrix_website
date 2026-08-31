'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import type { Dict } from '@/i18n';

/**
 * Interactive Arcade product walkthrough, lazy-loaded.
 *
 * An Arcade embed pulls its own player JS and assets — that shouldn't cost
 * every visitor regardless of whether they scroll this far. Uses
 * `useInView` (framer-motion, already a dependency, and the same primitive
 * `CountUp`/`TimelineScenario` use for their own scroll-gated work) rather
 * than a hand-rolled `IntersectionObserver`, with a `200px` margin so the
 * iframe starts fetching slightly before it's actually on screen instead of
 * popping in empty.
 *
 * The embed markup itself — src, params, flow id, aspect-ratio padding — is
 * copied verbatim from Arcade's own Share → Embed panel for this flow and is
 * not something to regenerate or guess at.
 */
export default function ArcadeTourEmbed({ dict }: { dict: Dict }) {
  const t = dict.arcadeTour;
  const containerRef = useRef<HTMLDivElement>(null);
  // `once: true` makes this latch permanently true the first time it fires —
  // no extra state needed to remember that past the observer disconnecting.
  const shouldLoad = useInView(containerRef, { once: true, margin: '200px' });

  return (
    <section className="section-y border-t border-border px-6 sm:px-8 lg:px-16">
      <Reveal className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="font-heading text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
          {t.title}
        </h2>
        <p className="type-lead mt-4 text-secondary">{t.subtitle}</p>
      </Reveal>

      {/* Width constraint and the aspect-ratio box are deliberately two
          elements, not one. `padding-bottom` percentages resolve against the
          *containing block's* width — i.e. the parent's — never against this
          element's own `max-width`. Merging them measured 788px tall instead
          of the intended ~550px, because the percentage was resolving against
          the full-width `<section>` (1312px at 1440px viewport) instead of
          the 896px `max-w-4xl` box visually constraining it. */}
      <div className="mx-auto max-w-4xl">
        <div
          ref={containerRef}
          style={{ position: 'relative', paddingBottom: 'calc(56.8027% + 41px)', height: 0, width: '100%' }}
          className="overflow-hidden rounded-card border border-border shadow-elevated"
        >
          {shouldLoad ? (
            <iframe
              src="https://demo.arcade.software/P6erDUd7LvzC5n0OqmKv?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
              title="Menaxho bisedat dhe shërbimet për klientët"
              loading="lazy"
              allowFullScreen
              allow="clipboard-write; autoplay"
              // The two vendor-prefixed fullscreen attributes aren't in React's
              // DOM attribute typings, so they're passed through this way
              // rather than as bare JSX props (which fails `tsc`).
              {...{ webkitallowfullscreen: 'true', mozallowfullscreen: 'true' }}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-cream text-sm text-ink-muted">
              {t.loading}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
