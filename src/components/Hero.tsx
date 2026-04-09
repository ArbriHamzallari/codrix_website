'use client';

import { useState, useEffect, startTransition } from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import HeroChatDemo from './HeroChatDemo';
import { INDUSTRIES, getIndustry } from '@/data/industries';
import { cn } from '@/lib/utils';

export default function Hero() {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('codrix_industry');
    if (stored) {
      startTransition(() => setSelectedIndustryId(stored));
    }
  }, []);

  const handleIndustrySelect = (id: string) => {
    setSelectedIndustryId(id);
    sessionStorage.setItem('codrix_industry', id);
  };

  const activeIndustry = getIndustry(selectedIndustryId);
  const displayIndustry = selectedIndustryId ? activeIndustry : INDUSTRIES[0];

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-0 lg:min-h-[85vh] flex items-center border-b border-surface-border bg-background bg-grid overflow-hidden pb-12 lg:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-12 md:pt-24">
          <div className="flex flex-col gap-10 max-w-2xl">
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5 mb-2 w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-white/70 text-xs font-medium tracking-wide">
                    5 businesses live across Europe
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.05] tracking-tight text-white">
                  Missing calls is <span className="text-primary">burning money</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 font-light pt-4 max-w-2xl leading-relaxed">
                  We build AI agents that answer your customers on WhatsApp, Instagram, and web chat instantly, around
                  the clock, so you never lose a lead to a late reply. Clinics and local businesses across Europe already
                  trust us to handle their first conversation.
                </p>
              </div>

              <div className="py-8 border-y border-white/5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Building2 className="text-primary w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium text-white tracking-wide">
                    What type of business do you run?
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {INDUSTRIES.map((ind) => {
                    const Icon = ind.icon;
                    const isSelected = selectedIndustryId === ind.id;
                    return (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => handleIndustrySelect(ind.id)}
                        className={cn(
                          'flex items-center gap-2 px-4 py-3 rounded-full border transition-all duration-300 text-sm font-medium',
                          isSelected
                            ? 'bg-primary text-black border-primary shadow-[0_0_15px_rgba(0,240,255,0.35)] scale-105'
                            : 'bg-surface border-surface-border text-slate-400 hover:border-white/20 hover:text-white hover:bg-white/5'
                        )}
                      >
                        <Icon size={16} />
                        {ind.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.button
                type="button"
                onClick={() => scrollToId('book')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-8 py-4 bg-primary text-black font-bold text-lg rounded-sm shadow-glow overflow-hidden group"
              >
                <span className="absolute inset-0 rounded-sm bg-blue-500/25 blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                Get Your Free Audit
              </motion.button>

              <motion.button
                type="button"
                onClick={() => scrollToId('how-it-works')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border border-surface-border text-slate-300 font-medium text-lg rounded-sm hover:text-white hover:border-white/20 transition-colors flex items-center justify-center min-h-[56px]"
              >
                HOW IT WORKS
              </motion.button>
            </div>

            <div className="lg:hidden w-full max-w-sm mx-auto">
              <HeroChatDemo />
            </div>

            <div className="mt-10 pt-8 border-t border-white/[0.08] w-full">
              <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-6">
                {displayIndustry.metrics.map((metric, idx) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-row sm:flex-col gap-3 sm:gap-1 items-center sm:items-start text-left min-w-0"
                    >
                      <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider sm:truncate max-w-[140px] sm:max-w-none">
                        {metric.label}
                      </span>
                      <div className="flex items-center gap-2 text-white font-medium text-sm sm:text-base ml-auto sm:ml-0">
                        <Icon size={16} className={cn(metric.color, 'shrink-0')} />
                        <span className="break-words">{metric.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-lg mx-auto lg:max-w-none hidden lg:block">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20" />
            <div className="relative flex justify-center lg:justify-end pt-4">
              <HeroChatDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
