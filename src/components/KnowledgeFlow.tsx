'use client';

import { BookOpen, Sparkles, User, ArrowRight } from 'lucide-react';
import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

const ICONS = [BookOpen, Sparkles, User];

export default function KnowledgeFlow({ dict }: { dict: Dict }) {
  const k = dict.knowledge;

  return (
    <section className="section-y px-8 lg:px-16 bg-section-glow">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="type-label font-medium uppercase text-primary mb-4">{k.eyebrow}</p>
          <h2 className="type-h2 font-heading text-ink mb-5 text-balance">{k.title}</h2>
          <p className="type-lead text-ink-muted">{k.body}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 max-w-3xl mx-auto">
            {k.steps.map((step, i) => {
              const Icon = ICONS[i] ?? BookOpen;
              const isCenter = i === 1;
              return (
                <div key={step.label} className="flex items-center md:flex-1">
                  <div className="flex flex-col items-center gap-3 text-center md:flex-1">
                    <span
                      className={
                        isCenter
                          ? 'w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center'
                          : 'w-14 h-14 rounded-full border border-border bg-white text-ink-muted flex items-center justify-center'
                      }
                    >
                      <Icon className={isCenter ? 'w-7 h-7' : 'w-5 h-5'} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="type-body font-medium text-ink">{step.label}</p>
                      <p className="type-small text-ink-muted mt-1 max-w-[180px]">{step.caption}</p>
                    </div>
                  </div>
                  {i < k.steps.length - 1 && (
                    <ArrowRight className="hidden md:block w-5 h-5 text-ink-muted/40 mx-4 shrink-0" aria-hidden />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
