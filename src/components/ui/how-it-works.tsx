"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

export interface HowItWorksStep {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

interface HowItWorksProps {
  /** Anchor id, same convention as `ui/features.tsx` and `ui/logos3.tsx`. */
  id?: string;
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
  className?: string;
}

/**
 * Connected three-step "how you start" layout: a numbered rail above, one card
 * per step below.
 *
 * The rail's geometry assumes exactly three steps in a three-column grid — the
 * circles land at 1/6, 3/6 and 5/6, so the line spans 16.667% → 83.333%. A
 * fourth step means recomputing these, not just adding a column.
 *
 * Kept copy-less like the rest of `ui/`; content comes from `Process.tsx`.
 */

function StepCard({
  step,
  index,
}: {
  step: HowItWorksStep;
  index: number;
}) {
  const Icon = step.icon;

  return (
    <div
      className={cn(
        "relative h-full rounded-card border border-border bg-white p-6 shadow-soft",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out",
        "hover:scale-105 hover:shadow-elevated hover:border-primary/30",
        // A hover jump with no transition is worse than no hover effect at all,
        // and globals.css strips the duration for reduced-motion users.
        "motion-reduce:hover:scale-100"
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        {/* The numbered rail is desktop-only (it can't line up with stacked
            cards), so below `md` each card carries its own number instead. */}
        <span className="md:hidden flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          {index + 1}
        </span>
      </div>

      <h3 className="mb-2 font-heading text-xl font-semibold text-ink">{step.title}</h3>
      <p className="mb-6 type-small leading-relaxed text-ink-muted">{step.description}</p>

      <ul className="space-y-3">
        {step.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3">
            <span
              className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/20"
              aria-hidden
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm leading-snug text-secondary">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HowItWorks({ id, title, subtitle, steps, className }: HowItWorksProps) {
  return (
    <section
      id={id}
      className={cn("section-y px-6 sm:px-8 lg:px-16 border-t border-border", className)}
    >
      <Reveal className="mx-auto mb-14 max-w-[720px] text-center">
        <h2 className="font-heading font-bold text-ink text-[2rem] leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-5xl text-balance">
          {title}
        </h2>
        <p className="mt-4 type-lead text-secondary">{subtitle}</p>
      </Reveal>

      {/* Numbered rail — `md+` only, where the cards are actually three across.
          Same `max-w` and same `gap-8` as the card grid below: with no gap here
          the columns are a different width than the cards', and the outer two
          circles land ~11px off the cards they label.

          The line therefore spans circle-1's centre to circle-3's centre, which
          with a gap is `(100% - <total gap>) / 6` in from each side — not the
          gapless 16.667%/66.667%. The `4rem` is the two `gap-8` gutters; keep
          the two in sync. All of this assumes exactly three steps — a fourth
          means recomputing, not just adding a column. */}
      <div className="relative mx-auto mb-8 hidden w-full max-w-5xl md:block">
        <div
          aria-hidden
          className="absolute top-1/2 h-0.5 -translate-y-1/2 bg-border left-[calc((100%-4rem)/6)] right-[calc((100%-4rem)/6)]"
        />
        <div className="relative grid grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              // `ring-background`, not `ring-white`: this section sits on the
              // cream page, so a white ring would halo against it.
              className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-primary font-semibold text-white ring-4 ring-background"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.1} className="h-full">
            <StepCard step={step} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
