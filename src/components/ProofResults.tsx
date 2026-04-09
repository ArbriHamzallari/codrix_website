'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Calendar, ArrowRight, Building2 } from 'lucide-react';
import CountUp from './ui/CountUp';
import ClientLogosRow from './ClientLogosRow';

/*
  TODO: Replace placeholder case studies with real documented results.
  Each case study must include: real business name or first name, photo or logo,
  before/after numbers in €, and a genuine quote from the client.
*/

const caseStudies = [
  {
    industry: 'Dental Clinic',
    city: 'Tirana, AL',
    before: ['Missed ~15 calls/week', '2h daily manual replies', 'No after-hours support'],
    after: ['Auto-booked 12 appts', '0 missed inquiries', '24/7 instant response'],
    impactValue: 4.5,
    impactPrefix: '+€',
    impactSuffix: 'k monthly revenue',
    impactDecimals: 1,
    impactType: 'revenue' as const,
    quote: 'It pays for itself in 3 days.',
  },
  {
    industry: 'Real Estate Agency',
    city: 'Pristina, KS',
    before: ['Slow lead qualification', 'Lost leads to competitors', 'Manual scheduling chaos'],
    after: ['Instant lead qualifying', '3x faster engagement', 'Auto-syncs with CRM'],
    impactValue: 18,
    impactPrefix: '+',
    impactSuffix: ' hrs saved / week',
    impactDecimals: 0,
    impactType: 'time' as const,
    quote: 'My agents just close deals now.',
  },
  {
    industry: 'Esthetic Center',
    city: 'Durrës, AL',
    before: ['High no-show rate', 'Chaotic WhatsApp chat', 'Forgot follow-ups'],
    after: ['-40% no-show rate', 'Centralized dashboard', 'Auto-confirmations'],
    impactValue: 25,
    impactPrefix: '+',
    impactSuffix: '% bookings increase',
    impactDecimals: 0,
    impactType: 'bookings' as const,
    quote: null as string | null,
  },
  {
    industry: 'Legal Consultancy',
    city: 'Tirana, AL',
    before: ['Endless FAQ emails', 'Unqualified meetings', 'Slow client onboarding'],
    after: ['90% FAQs automated', 'Pre-vetted consultations', 'Instant doc collection'],
    impactValue: 3.2,
    impactPrefix: '+€',
    impactSuffix: 'k billable hours saved',
    impactDecimals: 1,
    impactType: 'revenue' as const,
    quote: 'Freed up my senior lawyers.',
  },
];

export default function ProofResults() {
  return (
    <section id="results" className="py-24 bg-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ClientLogosRow />

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white"
          >
            Real Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Performance after implementing automated responses. Measurable outcomes, not just opinions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <ResultCard key={index} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Study = (typeof caseStudies)[number];

function ResultCard({ study, index }: { study: Study; index: number }) {
  const isRevenue = study.impactType === 'revenue';
  const isTime = study.impactType === 'time';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      <div className="px-6 py-4 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 text-slate-300">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide">{study.industry}</h3>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">{study.city}</span>
          </div>
        </div>
        <div className="text-xs font-mono text-slate-600">ID: #{400 + index}</div>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
        <div className="space-y-3">
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
            Before
          </div>
          <ul className="space-y-3">
            {study.before.map((item, i) => (
              <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-700 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 relative">
          <div className="hidden sm:block absolute -left-4 top-8 text-slate-700/50">
            <ArrowRight className="w-4 h-4" />
          </div>

          <div className="text-xs text-primary uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
            After 30 Days
          </div>
          <ul className="space-y-3">
            {study.after.map((item, i) => (
              <li
                key={i}
                className="text-sm text-white font-medium flex items-start gap-2 group-hover:text-primary/90 transition-colors duration-300"
              >
                <div className="mt-0.5 text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 py-5 bg-gradient-to-r from-primary/5 to-transparent border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-full ${isRevenue ? 'bg-emerald-500/10 text-emerald-400' : isTime ? 'bg-blue-500/10 text-blue-400' : 'bg-primary/10 text-primary'}`}
          >
            {isRevenue ? (
              <TrendingUp className="w-5 h-5" />
            ) : isTime ? (
              <Clock className="w-5 h-5" />
            ) : (
              <Calendar className="w-5 h-5" />
            )}
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Impact</div>
            <div
              className={`text-lg font-bold ${isRevenue ? 'text-emerald-400' : isTime ? 'text-blue-400' : 'text-primary'}`}
            >
              <CountUp
                value={study.impactValue}
                prefix={study.impactPrefix}
                suffix={study.impactSuffix}
                decimals={study.impactDecimals}
                duration={0.8}
              />
            </div>
          </div>
        </div>

        {study.quote && (
          <div className="text-right sm:max-w-[200px]">
            <p className="text-sm text-slate-400 italic">&quot;{study.quote}&quot;</p>
          </div>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}
