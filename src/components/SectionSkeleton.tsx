/**
 * Temporary wireframe placeholder for a section that is being rebuilt.
 *
 * The landing page was stripped back (2026-08-27) to just the two sections
 * Arbri is keeping — the robot hero and OmnichannelFeatures — and every other
 * slot now renders one of these frames so the page still reads as the planned
 * structure while the real sections get rewritten one at a time. Each frame
 * keeps the anchor id the old section used, so the navbar's #si-funksionon /
 * #rezultate / #cmimet / #pyetje links keep resolving.
 *
 * The old components are all still in src/components — nothing was deleted,
 * only unmounted from HomeSections.tsx.
 *
 * To replace one: swap the <SectionSkeleton> for the real section, keeping the
 * same `id`. When the last one is gone, delete this file and the
 * `.skeleton-bar` block in globals.css.
 */

type Variant = 'media' | 'logos' | 'grid' | 'steps' | 'split' | 'list' | 'cta';

interface SectionSkeletonProps {
  /** Anchor id — reuse the id the real section will ship with. */
  id: string;
  /** Order in the planned page structure, e.g. "02". */
  step: string;
  /** What goes in this slot. */
  label: string;
  /** One line on the job this section has to do. */
  note: string;
  variant: Variant;
  /** Subtle purple wash, for the slots meant to carry visual weight. */
  glow?: boolean;
}

function Bar({ className = '' }: { className?: string }) {
  return <span className={`skeleton-bar block rounded-full ${className}`} aria-hidden />;
}

function Frame({ className = '', children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div
      className={`rounded-card border border-dashed border-ink/15 bg-white/40 ${className}`}
      aria-hidden
    >
      {children}
    </div>
  );
}

function Body({ variant }: { variant: Variant }) {
  switch (variant) {
    case 'media':
      return <Frame className="w-full aspect-[16/9] max-h-[520px]" />;

    case 'logos':
      return (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {[...Array(6)].map((_, i) => (
            <Bar key={i} className="h-8 w-28 rounded-md" />
          ))}
        </div>
      );

    case 'grid':
      return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <Frame key={i} className="p-6 flex flex-col gap-3 min-h-[220px]">
              <Bar className="h-9 w-9 rounded-lg" />
              <Bar className="h-4 w-2/3 mt-2" />
              <Bar className="h-3 w-full" />
              <Bar className="h-3 w-5/6" />
              <Bar className="h-3 w-3/5" />
            </Frame>
          ))}
        </div>
      );

    case 'steps':
      return (
        <div className="grid gap-8 sm:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span
                className="w-9 h-9 rounded-full border border-dashed border-ink/20 flex items-center justify-center font-mono text-[13px] text-ink-muted"
                aria-hidden
              >
                {i + 1}
              </span>
              <Bar className="h-4 w-3/5 mt-1" />
              <Bar className="h-3 w-full" />
              <Bar className="h-3 w-4/5" />
            </div>
          ))}
        </div>
      );

    case 'split':
      return (
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center">
          <Frame className="w-full aspect-[4/5] max-w-[360px] max-h-[440px]" />
          <div className="flex flex-col gap-3">
            <Bar className="h-3 w-full" />
            <Bar className="h-3 w-full" />
            <Bar className="h-3 w-11/12" />
            <Bar className="h-3 w-4/5" />
            <Bar className="h-3 w-2/3" />
            <Bar className="h-4 w-40 mt-4 rounded-md" />
          </div>
        </div>
      );

    case 'list':
      return (
        <div className="max-w-2xl mx-auto flex flex-col">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-6 py-5 border-b border-border"
            >
              <Bar className="h-3.5 flex-1 max-w-[70%]" />
              <Bar className="h-3.5 w-3.5 rounded-full shrink-0" />
            </div>
          ))}
        </div>
      );

    case 'cta':
      return (
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Bar className="h-12 w-44 rounded-lg" />
          <Bar className="h-12 w-36 rounded-lg" />
        </div>
      );
  }
}

export default function SectionSkeleton({
  id,
  step,
  label,
  note,
  variant,
  glow = false,
}: SectionSkeletonProps) {
  const centered = variant === 'logos' || variant === 'list' || variant === 'cta';

  return (
    <section
      id={id}
      className={`section-y px-8 lg:px-16 border-t border-border ${glow ? 'bg-section-glow' : ''}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <header className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
          <div
            className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}
          >
            <span className="font-mono text-[12px] text-ink-muted tabular-nums">{step}</span>
            <span className="h-px w-6 bg-border" aria-hidden />
            <span className="type-label uppercase font-medium text-ink-muted">{label}</span>
          </div>

          {/* Placeholder headline + deck, sized like the real thing */}
          <div className={`flex flex-col gap-3 ${centered ? 'items-center' : ''}`}>
            <Bar className="h-8 md:h-11 w-full max-w-[620px] rounded-lg" />
            <Bar className="h-8 md:h-11 w-full max-w-[420px] rounded-lg" />
            <Bar className="h-3.5 w-full max-w-[520px] mt-3" />
          </div>

          <p
            className={`type-small text-ink-muted/70 mt-6 max-w-[560px] ${centered ? 'mx-auto' : ''}`}
          >
            {note}
          </p>
        </header>

        <Body variant={variant} />
      </div>
    </section>
  );
}
