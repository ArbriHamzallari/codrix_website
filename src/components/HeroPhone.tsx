'use client';

import { Check, CheckCheck, Sparkles } from 'lucide-react';
import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

/**
 * Hero product visual: a WhatsApp-style phone showing the agent handling a
 * booking end-to-end, with a floating "lead captured" card. Purely
 * presentational; the real thing is the live demo below.
 */
export default function HeroPhone({ dict }: { dict: Dict }) {
  const p = dict.hero.phone;

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* soft glow behind the phone */}
      <div className="absolute -inset-8 bg-hero-glow blur-2xl opacity-60 pointer-events-none" aria-hidden />

      <Reveal className="relative">
        <div className="relative rounded-[2.5rem] border border-white/12 bg-[#0B141A] p-2.5 shadow-elevated">
          {/* notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-5 w-28 rounded-b-2xl bg-black/60 z-20" />
          <div className="overflow-hidden rounded-[2rem]">
            {/* chat header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#075E54]">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">
                {p.header.charAt(0)}
              </div>
              <div className="leading-tight">
                <p className="text-white text-sm font-semibold">{p.header}</p>
                <p className="text-white/70 text-xs">{p.online}</p>
              </div>
            </div>

            {/* messages */}
            <div className="bg-[#0B141A] px-3 py-4 space-y-2 min-h-[360px]">
              <Reveal delay={0.1}>
                <Bubble side="right">{p.customer}</Bubble>
              </Reveal>
              <Reveal delay={0.35}>
                <Bubble side="left">{p.agent}</Bubble>
              </Reveal>
              <Reveal delay={0.6}>
                <Bubble side="right">{p.customer2}</Bubble>
              </Reveal>
              <Reveal delay={0.85}>
                <Bubble side="left">{p.agent2}</Bubble>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>

      {/* floating "lead captured" card */}
      <Reveal delay={1.1} className="absolute -bottom-5 -left-4 sm:-left-8 z-30">
        <div className="glass-strong rounded-xl2 px-4 py-3 shadow-elevated flex items-center gap-3 max-w-[230px]">
          <div className="w-9 h-9 rounded-full bg-success/15 text-success flex items-center justify-center shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <p className="text-white text-sm font-semibold">{p.capturedBadge}</p>
          </div>
        </div>
      </Reveal>

      {/* AI sparkle accent */}
      <Reveal delay={1} className="absolute -top-3 -right-2 z-30">
        <div className="glass rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-soft">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-medium text-white">AI</span>
        </div>
      </Reveal>
    </div>
  );
}

function Bubble({ side, children }: { side: 'left' | 'right'; children: React.ReactNode }) {
  const isRight = side === 'right';
  return (
    <div className={`flex ${isRight ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[82%] rounded-lg px-3 py-2 text-[13px] leading-relaxed ${
          isRight
            ? 'bg-[#005C4B] text-white rounded-br-none'
            : 'bg-[#202C33] text-white/90 rounded-bl-none'
        }`}
      >
        {children}
        <span className="ml-2 inline-flex items-center align-bottom text-[10px] text-white/50">
          {isRight ? <CheckCheck className="w-3 h-3 text-sky-300" /> : null}
        </span>
      </div>
    </div>
  );
}
