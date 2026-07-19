'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';
import type { CaseStudy, Dict } from '@/i18n';

export default function ProofResults({ dict }: { dict: Dict }) {
  const p = dict.proof;

  return (
    <section id="rezultate" className="py-24 px-4 sm:px-6 bg-section-glow">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-4"
          >
            {p.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            {p.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {p.caseStudies.map((study, index) => (
            <ResultCard
              key={study.client}
              study={study}
              index={index}
              beforeLabel={p.beforeLabel}
              afterLabel={p.afterLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultCard({
  study,
  index,
  beforeLabel,
  afterLabel,
}: {
  study: CaseStudy;
  index: number;
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group bg-surface border border-surface-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors shadow-card"
    >
      <div className="px-6 py-4 flex gap-3 items-center border-b border-surface-border bg-surface-hover/40">
        <div className="relative h-12 w-12 shrink-0 rounded-lg bg-white overflow-hidden">
          <Image
            src={study.logo}
            alt={`${study.client} logo`}
            fill
            className="object-contain p-1.5"
            sizes="48px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug">{study.client}</h3>
          <p className="text-sm text-muted">
            {study.type} · {study.location}
          </p>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
        <div>
          <div className="text-xs text-muted uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-error/60" />
            {beforeLabel}
          </div>
          <ul className="space-y-2.5">
            {study.before.map((line) => (
              <li key={line} className="text-sm text-muted flex items-start gap-2">
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
            {afterLabel}
          </div>
          <ul className="space-y-2.5">
            {study.after.map((line) => (
              <li key={line} className="text-sm text-white/90 font-medium flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-success shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 py-5 bg-gradient-to-r from-primary-dim/60 to-transparent border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-success/10 text-success shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] text-muted uppercase tracking-wider font-bold leading-tight">
              {study.impactLabel}
            </div>
            <div className="text-lg font-bold text-success mt-1">{study.impactValue}</div>
          </div>
        </div>
        <p className="text-sm text-muted italic text-left sm:text-right sm:max-w-[220px]">
          &quot;{study.quote}&quot;
        </p>
      </div>
    </motion.div>
  );
}
