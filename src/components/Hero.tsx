'use client';

import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

/**
 * Editorial, center-aligned hero. The collage blocks below are placeholder
 * slots, not photography — no licensed/real photography was available to
 * fill the image collage this design calls for (checked the two existing
 * hospitality photos in /public; both are screenshots of other companies'
 * actual websites with their own branding, not usable here). Swap the
 * `Collage` block's flat tone fills for real crops when photography exists;
 * the positions/sizes are already composed for it.
 */
export default function Hero({ dict }: { dict: Dict }) {
  const h = dict.hero;

  return (
    <section className="relative overflow-hidden bg-background">
      <Collage />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h1 className="type-h1 font-heading text-balance">
              <span className="font-normal text-ink-muted">{h.title.light1} </span>
              <span className="font-medium text-ink">{h.title.strong} </span>
              <span className="font-normal text-ink-muted">{h.title.light2}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="font-serif text-[19px] md:text-xl leading-[1.5] text-[#55525A] max-w-[680px] mx-auto mt-9">
              {h.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="flex items-center justify-center gap-3 mt-8">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-sm bg-ink px-6 h-12 text-[15px] font-medium text-white hover:bg-ink/85 transition-colors"
              >
                {h.ctaPrimary}
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-sm border border-ink px-6 h-12 text-[15px] font-medium text-ink bg-white hover:bg-ink/[0.03] transition-colors"
              >
                {h.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-mono text-[12px] text-ink-muted mt-6 tracking-tight">{h.credibility}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Collage() {
  return (
    <div className="hidden lg:block pointer-events-none" aria-hidden>
      <div className="absolute left-[6%] top-[14%] w-[150px] h-[190px] rounded-img bg-primary-soft" />
      <div className="absolute left-[13%] top-[62%] w-[120px] h-[120px] rounded-img bg-[#E8E3DC]" />
      <div className="absolute right-[7%] top-[10%] w-[170px] h-[130px] rounded-img bg-ink/[0.06]" />
      <div className="absolute right-[14%] top-[58%] w-[130px] h-[170px] rounded-img bg-primary/10" />
    </div>
  );
}
