'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { TrendingUp, ArrowRight } from 'lucide-react';
import type { CaseStudy, Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';
import CountUp from '@/components/ui/CountUp';
import { cn } from '@/lib/utils';

export default function ProofResults({ dict }: { dict: Dict }) {
  const p = dict.proof;

  return (
    <section id="rezultate" className="section-y px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="type-h2 font-heading text-ink mb-5 text-balance">{p.title}</h2>
          <p className="type-lead text-ink-muted">{p.subtitle}</p>
        </Reveal>

        {/* metrics band */}
        <Reveal delay={0.05} className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border mb-16">
          {p.metrics.map((m) => (
            <div key={m.label} className="bg-cream p-7 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-ink">
                <CountUp value={m.num} suffix={m.suffix} duration={1.4} />
              </p>
              <p className="type-body text-ink mt-2">{m.label}</p>
              <p className="type-small text-ink-muted mt-1">{m.source}</p>
            </div>
          ))}
        </Reveal>

        {/* desktop grid */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {p.caseStudies.map((study, i) => (
            <Reveal key={study.client} delay={(i % 2) * 0.08}>
              <ResultCard study={study} labels={p} />
            </Reveal>
          ))}
        </div>

        {/* mobile carousel */}
        <MobileCarousel studies={p.caseStudies} labels={p} />
      </div>
    </section>
  );
}

function MobileCarousel({
  studies,
  labels,
}: {
  studies: CaseStudy[];
  labels: Dict['proof'];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setActive(i);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    if (i !== active) setActive(i);
  };

  return (
    <div className="md:hidden">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-thin -mx-8 px-8 gap-4 pb-2"
      >
        {studies.map((study) => (
          <div key={study.client} className="snap-center shrink-0 w-[88%]">
            <ResultCard study={study} labels={labels} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {studies.map((s, i) => (
          <button
            key={s.client}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${i + 1}`}
            className={cn(
              'h-1.5 rounded-full transition-all',
              i === active ? 'w-6 bg-primary' : 'w-1.5 bg-border'
            )}
          />
        ))}
      </div>
    </div>
  );
}

function ResultCard({ study, labels }: { study: CaseStudy; labels: Dict['proof'] }) {
  return (
    <div className="h-full border border-border rounded-card overflow-hidden">
      <div className="px-6 py-4 flex gap-3 items-center border-b border-border">
        <div className="relative h-10 w-10 shrink-0 rounded-sm bg-white overflow-hidden border border-border">
          <Image
            src={study.logo}
            alt={`${study.client} logo`}
            fill
            className="object-contain p-1.5"
            sizes="40px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="type-body font-medium text-ink leading-snug">{study.client}</h3>
          <p className="type-small text-ink-muted">
            {study.type} · {study.location}
          </p>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
        <div>
          <div className="type-label font-medium uppercase text-ink-muted mb-3">
            {labels.beforeLabel}
          </div>
          <ul className="space-y-2.5">
            {study.before.slice(0, 3).map((line) => (
              <li key={line} className="type-small text-ink-muted flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-ink-muted/40 shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="hidden sm:block absolute -left-4 top-8 text-ink-muted/40">
            <ArrowRight className="w-4 h-4" />
          </div>
          <div className="type-label font-medium uppercase text-primary mb-3">{labels.afterLabel}</div>
          <ul className="space-y-2.5">
            {study.after.slice(0, 3).map((line) => (
              <li key={line} className="type-small text-ink font-medium flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-success shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 py-5 border-t border-border">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-full bg-success/10 text-success shrink-0">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="type-label font-medium uppercase text-ink-muted leading-tight">
              {study.impactLabel}
            </div>
            <div className="text-lg font-medium text-success mt-1">{study.impactValue}</div>
          </div>
        </div>
        <blockquote className="type-small text-ink-muted italic">
          &quot;{study.quote}&quot;
          <cite className="not-italic block text-ink-muted/70 mt-1">— {study.client}</cite>
        </blockquote>
      </div>
    </div>
  );
}
