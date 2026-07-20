'use client';

import { MessageCircle, Wrench, Rocket } from 'lucide-react';
import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

const icons = [
  <MessageCircle key="0" className="w-6 h-6" />,
  <Wrench key="1" className="w-6 h-6" />,
  <Rocket key="2" className="w-6 h-6" />,
];

export default function Process({ dict }: { dict: Dict }) {
  const p = dict.process;

  return (
    <section id="si-funksionon" className="section-y px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="type-h2 font-bold font-heading text-white mb-4">{p.title}</h2>
          <p className="type-lead text-secondary max-w-2xl mx-auto">{p.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {p.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="group h-full bg-surface p-8 rounded-card border border-surface-border hover:border-primary/40 transition-colors shadow-card lift">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-primary-dim text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {icons[i]}
                </div>
                <h3 className="type-h3 font-bold font-heading mb-3 text-white">{step.title}</h3>
                <p className="text-secondary type-small leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
