'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Inbox, MessageSquare, BarChart3, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const TOTAL_STEPS = 5;

const slideVariants = {
  initial: (dir: number) => ({
    x: dir > 0 ? 48 : -48,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -48 : 48,
    opacity: 0,
  }),
};

function Sidebar({ activeHint }: { activeHint: 'inbox' | 'stats' }) {
  const items = [
    { id: 'inbox' as const, label: 'Inbox', icon: Inbox },
    { id: 'conversations' as const, label: 'Conversations', icon: MessageSquare },
    { id: 'stats' as const, label: 'Stats', icon: BarChart3 },
  ];

  return (
    <aside
      className="w-48 shrink-0 border-r border-white/[0.08] bg-black/40 p-4 flex flex-col gap-1"
      aria-hidden
    >
      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-3 px-2">
        Workspace
      </p>
      {items.map(({ id, label, icon: Icon }) => {
        const highlighted = activeHint === 'stats' ? id === 'stats' : id === 'inbox';
        return (
          <div
            key={id}
            className={cn(
              'flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm select-none',
              highlighted
                ? 'bg-primary/10 text-primary border border-primary/20'
                : 'text-slate-400 border border-transparent'
            )}
          >
            <Icon className="size-4 shrink-0 opacity-80" />
            <span className="font-medium">{label}</span>
          </div>
        );
      })}
    </aside>
  );
}

function WhatsBubble({
  incoming,
  children,
  meta,
}: {
  incoming: boolean;
  children: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <div className={cn('flex flex-col gap-1 max-w-[92%]', incoming ? 'items-start' : 'items-end')}>
      <div
        className={cn(
          'rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-lg',
          incoming
            ? 'bg-[#1f2c33] text-slate-100 rounded-tl-md border border-white/[0.06]'
            : 'bg-[#005c4b] text-white rounded-tr-md border border-emerald-500/20'
        )}
      >
        {children}
      </div>
      {meta}
    </div>
  );
}

function Step1Content() {
  return (
    <div className="flex flex-col h-full min-h-[360px] p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white tracking-tight">Inbox</h3>
        <span className="rounded-full bg-primary/15 text-primary text-xs font-semibold px-2.5 py-1 border border-primary/25">
          1 new message
        </span>
      </div>
      <p className="text-[11px] text-slate-500 mb-4">10:47 PM — outside business hours</p>
      <div className="flex-1 flex flex-col justify-end gap-3">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-3"
        >
          <p className="text-xs text-emerald-400/90 font-medium mb-2">New WhatsApp</p>
          <WhatsBubble incoming meta={<span className="text-[10px] text-slate-500">10:47 PM</span>}>
            <p className="text-xs text-slate-400 mb-1 font-medium">Maria K. — Dental Med Austria patient</p>
            <p>Hi, do you have availability for a cleaning next week?</p>
          </WhatsBubble>
        </motion.div>
      </div>
    </div>
  );
}

function Step2Content({ progress }: { progress: number }) {
  return (
    <div className="flex flex-col h-full min-h-[360px] p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white tracking-tight">Inbox</h3>
        <span className="rounded-full bg-primary/15 text-primary text-xs font-semibold px-2.5 py-1 border border-primary/25">
          1 new message
        </span>
      </div>
      <p className="text-[11px] text-slate-500 mb-4">10:47 PM — outside business hours</p>
      <div className="space-y-4 flex-1 flex flex-col">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <p className="text-xs text-slate-400 font-medium">Maria K. — Dental Med Austria patient</p>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[10px] font-bold tracking-wide bg-secondary/20 text-secondary px-2 py-0.5 rounded border border-secondary/30"
            >
              APPOINTMENT REQUEST
            </motion.span>
          </div>
          <WhatsBubble incoming>
            <p>Hi, do you have availability for a cleaning next week?</p>
          </WhatsBubble>
        </div>
        <div className="mt-auto rounded-xl border border-primary/20 bg-primary/5 p-4">
          <p className="text-xs text-primary font-medium mb-3">AI is processing… 1.8 seconds</p>
          <div className="h-2 rounded-full bg-black/50 overflow-hidden border border-white/[0.06]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.15 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3Content() {
  return (
    <div className="flex flex-col h-full min-h-[360px] p-5 md:p-6">
      <h3 className="text-sm font-semibold text-white tracking-tight mb-4">Conversation</h3>
      <div className="flex-1 flex flex-col gap-4 justify-end">
        <div className="space-y-2">
          <WhatsBubble incoming meta={<span className="text-[10px] text-slate-500">10:47 PM</span>}>
            <p className="text-xs text-slate-400 mb-1 font-medium">Maria K.</p>
            <p>Hi, do you have availability for a cleaning next week?</p>
          </WhatsBubble>
        </div>
        <div className="space-y-1">
          <WhatsBubble incoming={false} meta={<span className="text-[10px] text-slate-500">10:47 PM</span>}>
            <p>
              Hi Maria! We have Tuesday at 10am or Thursday at 3pm available. Which works for you?
            </p>
          </WhatsBubble>
          <p className="text-[10px] text-primary/90 text-right pr-1">Sent automatically by Codrix AI</p>
        </div>
      </div>
    </div>
  );
}

function Step4Content() {
  return (
    <div className="flex flex-col h-full min-h-[360px] p-5 md:p-6">
      <h3 className="text-sm font-semibold text-white tracking-tight mb-4">Conversation</h3>
      <div className="flex-1 flex flex-col gap-3 justify-end overflow-y-auto">
        <WhatsBubble incoming meta={<span className="text-[10px] text-slate-500">10:47 PM</span>}>
          <p className="text-xs text-slate-400 mb-1 font-medium">Maria K.</p>
          <p>Hi, do you have availability for a cleaning next week?</p>
        </WhatsBubble>
        <WhatsBubble incoming={false} meta={<span className="text-[10px] text-slate-500">10:47 PM</span>}>
          <p>Hi Maria! We have Tuesday at 10am or Thursday at 3pm available. Which works for you?</p>
        </WhatsBubble>
        <WhatsBubble incoming meta={<span className="text-[10px] text-slate-500">10:47 PM</span>}>
          <p className="text-xs text-slate-400 mb-1 font-medium">Maria K.</p>
          <p>Thursday please</p>
        </WhatsBubble>
        <WhatsBubble incoming={false} meta={<span className="text-[10px] text-slate-500">10:47 PM</span>}>
          <p>
            Perfect! Booked for Thursday at 3pm. We&apos;ll send you a reminder the morning before. See
            you then! 😊
          </p>
        </WhatsBubble>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-lg border border-success/25 bg-success/10 px-3 py-2 text-success text-xs font-medium"
        >
          <Calendar className="size-4 shrink-0" />
          Appointment logged
        </motion.div>
      </div>
    </div>
  );
}

function Step5Content() {
  return (
    <div className="flex flex-col h-full min-h-[360px] p-5 md:p-6">
      <h3 className="text-sm font-semibold text-white tracking-tight mb-5">Today&apos;s overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        {[
          { label: 'Messages Handled', value: '1' },
          { label: 'Response Time', value: '1.8s' },
          { label: 'Missed Messages', value: '0' },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center"
          >
            <p className="text-2xl font-bold font-heading text-white mb-1">{card.value}</p>
            <p className="text-[11px] text-slate-400 uppercase tracking-wide">{card.label}</p>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl bg-success/15 border border-success/30 px-4 py-3 text-center text-sm font-medium text-success"
      >
        Your business never goes offline.
      </motion.div>
    </div>
  );
}

export default function InteractiveDemo() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [aiProgress, setAiProgress] = useState(0);

  const handleNextClick = () => {
    if (step >= TOTAL_STEPS) return;
    setDirection(1);
    setStep((s) => s + 1);
  };

  const handleBackClick = () => {
    if (step <= 1) return;
    setDirection(-1);
    setStep((s) => s - 1);
  };

  useEffect(() => {
    if (step !== 2) {
      setAiProgress(0);
      return;
    }
    setAiProgress(0);
    const start = performance.now();
    const duration = 1800;
    let cancelled = false;
    const tick = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - start) / duration);
      setAiProgress(Math.round(t * 100));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    return () => {
      cancelled = true;
    };
  }, [step]);

  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeHint: 'inbox' | 'stats' = step === 5 ? 'stats' : 'inbox';

  return (
    <section id="demo" className="py-24 bg-background relative border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-glow-subtle pointer-events-none opacity-60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-3">
            See It In Action
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A real conversation, handled automatically. Watch how Codrix works.
          </p>
        </div>

        <div
          className="flex justify-center gap-2 mb-8"
          aria-label={`Demo progress, step ${step} of ${TOTAL_STEPS}`}
        >
          {Array.from({ length: TOTAL_STEPS }, (_, i) => (
            <span
              key={i}
              className={cn(
                'size-2.5 rounded-full transition-all duration-300',
                step === i + 1 ? 'bg-primary scale-110 shadow-[0_0_12px_rgba(0,240,255,0.5)]' : 'bg-white/20'
              )}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl border border-white/[0.08] bg-surface shadow-sharp overflow-hidden">
          <div className="flex min-h-[380px]">
            <Sidebar activeHint={activeHint} />
            <div className="flex-1 flex flex-col min-w-0 bg-black/20">
              <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    {step === 1 && <Step1Content />}
                    {step === 2 && <Step2Content progress={aiProgress} />}
                    {step === 3 && <Step3Content />}
                    {step === 4 && <Step4Content />}
                    {step === 5 && <Step5Content />}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-4 border-t border-white/[0.06] bg-black/30">
                <button
                  type="button"
                  onClick={handleBackClick}
                  disabled={step <= 1}
                  className={cn(
                    'text-sm font-medium transition-colors px-2 py-1 rounded-lg',
                    step <= 1
                      ? 'text-slate-600 cursor-not-allowed'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  ← Back
                </button>
                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={handleNextClick}
                    className="text-sm font-semibold text-black bg-primary hover:brightness-110 transition-all px-5 py-2.5 rounded-full"
                  >
                    Next Step →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={scrollToBook}
                    className="text-sm font-semibold text-black bg-primary hover:brightness-110 transition-all px-5 py-2.5 rounded-full"
                  >
                    Apply for Your Free Audit →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
