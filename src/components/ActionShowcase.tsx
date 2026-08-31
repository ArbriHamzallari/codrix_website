'use client';

import { UserCheck, Filter, CalendarCheck, MessageCircleQuestion, Headset } from 'lucide-react';
import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

const ICONS = [UserCheck, Filter, CalendarCheck, MessageCircleQuestion, Headset];

export default function ActionShowcase({ dict }: { dict: Dict }) {
  const a = dict.action;

  return (
    <section className="section-y px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="max-w-2xl mb-14">
          <p className="type-label font-medium uppercase text-primary mb-4">{a.eyebrow}</p>
          <h2 className="type-h2 font-heading text-ink mb-5 text-balance">{a.title}</h2>
          <p className="type-lead text-ink-muted">{a.body}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
          {a.items.map((item, i) => {
            const Icon = ICONS[i] ?? UserCheck;
            return (
              <Reveal key={item.label} delay={i * 0.06} className="bg-cream">
                <div className="h-full px-6 py-8">
                  <Icon className="w-5 h-5 text-primary mb-5" strokeWidth={1.75} />
                  <p className="type-body font-medium text-ink mb-2">{item.label}</p>
                  <p className="type-small text-ink-muted leading-relaxed">{item.value}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
