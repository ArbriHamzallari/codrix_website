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
    <section id="rezultate" className="section-y px-4 sm:px-6 bg-section-glow">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="type-h2 font-bold font-heading text-white mb-4">{p.title}</h2>
          <p className="type-lead text-secondary max-w-2xl mx-auto">{p.subtitle}</p>
        </Reveal>

        {/* metrics band */}
        <Reveal delay={0.05} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {p.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-card border border-surface-border bg-surface p-6 text-center shadow-card"
            >
              <p className="text-4xl sm:text-5xl font-bold font-heading text-white">
                <CountUp value={m.num} suffix={m.suffix} duration={1.4} />
              </p>
              <p className="type-body text-secondary mt-2">{m.label}</p>
              <p className="type-small text-tertiary mt-1">{m.source}</p>
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
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-thin -mx-4 px-4 gap-4 pb-2"
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
              'h-2 rounded-full transition-all',
              i === active ? 'w-6 bg-primary' : 'w-2 bg-surface-border'
            )}
          />
        ))}
      </div>
    </div>
  );
}

function ResultCard({ study, labels }: { study: CaseStudy; labels: Dict['proof'] }) {
  return (
    <div className="group h-full bg-surface border border-surface-border rounded-card overflow-hidden hover:border-primary/40 transition-colors shadow-card lift">
      <div className="px-6 py-4 flex gap-3 items-center border-b border-surface-border bg-surface-hover/40">
        <div className="relative h-11 w-11 shrink-0 rounded-lg bg-white overflow-hidden">
          <Image
            src={study.logo}
            alt={`${study.client} logo`}
            fill
            className="object-contain p-1.5"
            sizes="44px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="type-body font-bold text-white leading-snug">{study.client}</h3>
          <p className="type-small text-tertiary">
            {study.type} · {study.location}
          </p>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
        <div>
          <div className="text-xs text-tertiary uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-error/60" />
            {labels.beforeLabel}
          </div>
          <ul className="space-y-2.5">
            {study.before.slice(0, 3).map((line) => (
              <li key={line} className="type-small text-secondary flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-muted/40 shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="hidden sm:block absolute -left-4 top-8 text-muted/40">
            <ArrowRight className="w-4 h-4" />
          </div>
          <div className="text-xs text-primary uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {labels.afterLabel}
          </div>
          <ul className="space-y-2.5">
            {study.after.slice(0, 3).map((line) => (
              <li key={line} className="type-small text-white/90 font-medium flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-success shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 py-5 bg-gradient-to-r from-primary-dim/60 to-transparent border-t border-surface-border">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-full bg-success/10 text-success shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] text-tertiary uppercase tracking-wider font-bold leading-tight">
              {study.impactLabel}
            </div>
            <div className="text-lg font-bold text-success mt-1">{study.impactValue}</div>
          </div>
        </div>
        <blockquote className="type-small text-secondary italic">
          &quot;{study.quote}&quot;
          <cite className="not-italic block text-tertiary mt-1">— {study.client}</cite>
        </blockquote>
      </div>
    </div>
  );
}
