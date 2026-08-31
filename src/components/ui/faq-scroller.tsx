'use client';

import { Children, Fragment, type CSSProperties, type ReactNode } from 'react';
import Reveal from '@/components/ui/Reveal';

interface FaqCardProps {
  question: string;
  answer: string;
}

export const FaqCard = ({ question, answer }: FaqCardProps) => (
  <div className="flex w-[290px] flex-shrink-0 flex-col items-start gap-3 rounded-card border border-border bg-white p-6 shadow-soft sm:w-96">
    <h3 className="font-heading text-lg font-semibold text-ink">{question}</h3>
    <p className="type-small leading-relaxed text-ink-muted">{answer}</p>
  </div>
);

/**
 * One copy of the track has to be at least as wide as the visible row, or
 * translateX(-50%) runs past the end of the content and a blank gap slides
 * through. A row carrying only two cards is narrower than the container at
 * every breakpoint, so short rows get their children repeated until the half is
 * wide enough. Three ~384px cards clear the widest container this section uses.
 */
const MIN_CARDS_PER_HALF = 3;

interface HorizontalScrollerProps {
  children: ReactNode;
  speed?: string;
  direction?: 'left' | 'right';
}

export const HorizontalScroller = ({
  children,
  speed = '40s',
  direction = 'left',
}: HorizontalScrollerProps) => {
  const animationClass =
    direction === 'right' ? 'animate-scroll-horizontal-reverse' : 'animate-scroll-horizontal';

  const style = { '--scroll-duration': speed } as CSSProperties;

  const count = Math.max(Children.count(children), 1);
  const reps = Math.max(1, Math.ceil(MIN_CARDS_PER_HALF / count));

  const half = (hidden: boolean) => (
    <div
      className="flex flex-shrink-0 items-stretch justify-center gap-8 px-4"
      aria-hidden={hidden || undefined}
    >
      {Array.from({ length: reps }, (_, r) => (
        <Fragment key={r}>{children}</Fragment>
      ))}
    </div>
  );

  return (
    <div className="scroller-mask group relative w-full overflow-hidden">
      <div className={`flex ${animationClass}`} style={style}>
        {half(false)}
        {/* Duplicate purely so the loop point is invisible — removing it makes
            the row visibly jump. Hidden from assistive tech. */}
        {half(true)}
      </div>
    </div>
  );
};

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqRow {
  id: string;
  speed: string;
  direction: 'left' | 'right';
  faqItems: FaqItem[];
}

interface FaqSectionProps {
  /** Anchor id, same convention as the other `ui/` section components. */
  id?: string;
  data: {
    mainTitle: string;
    mainSubtitle: string;
    rows: FaqRow[];
  };
}

const FaqSection = ({ id, data }: FaqSectionProps) => (
  <section id={id} className="section-y border-t border-border px-6 sm:px-8 lg:px-16">
    <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12">
      {/* `Reveal` rather than the source's inline `opacity: 0` + `fadeInUp`:
          it's this repo's single site-wide entrance and it renders visible
          before hydration, so the heading can never get stranded invisible. */}
      <Reveal className="z-10 flex max-w-2xl flex-col items-center gap-4 text-center">
        <h2 className="font-heading text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
          {data.mainTitle}
        </h2>
        <p className="type-lead text-secondary">{data.mainSubtitle}</p>
      </Reveal>

      <div className="z-10 flex w-full flex-col gap-8">
        {data.rows.map((row) => (
          <HorizontalScroller key={row.id} speed={row.speed} direction={row.direction}>
            {row.faqItems.map((item) => (
              <FaqCard key={item.id} question={item.question} answer={item.answer} />
            ))}
          </HorizontalScroller>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
