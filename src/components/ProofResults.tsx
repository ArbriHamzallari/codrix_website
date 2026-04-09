'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';
import ClientLogosRow from './ClientLogosRow';

const caseStudies = [
  {
    id: '#001',
    client: 'Dental Med Austria',
    type: 'Dental Clinic',
    location: 'Austria, EU',
    logo: '/clients/dental-med-austria.png',
    before: [
      'Missed patient inquiries outside office hours',
      'Staff spending 2+ hours/day on WhatsApp replies',
      'No after-hours appointment booking',
    ],
    after: [
      'AI handles all first-contact inquiries 24/7',
      'Zero missed messages during off hours',
      '24/7 instant response to new patients',
    ],
    impact: 'Appointment inquiries handled automatically',
    impactPrefix: '',
    impactValue: '24/7',
    quote: 'Patients now get answers even at midnight.',
  },
  {
    id: '#002',
    client: 'Dodo Dent',
    type: 'Dental Practice',
    location: 'Albania',
    logo: '/clients/dodo-dent.png',
    before: [
      'High volume of repetitive FAQ messages',
      'Manual scheduling via WhatsApp',
      'Leads going cold before follow-up',
    ],
    after: [
      'FAQs answered instantly by AI',
      'Appointment requests captured automatically',
      'Follow-up triggered within seconds',
    ],
    impact: 'Reduction in manual inbox time',
    impactPrefix: '-',
    impactValue: '80%',
    quote: 'It pays for itself in the first week.',
  },
  {
    id: '#003',
    client: 'SMartderm',
    type: 'Dermatology Clinic',
    location: 'Albania',
    logo: '/clients/SMARTDERM_page-0001-scaled.png',
    before: [
      'Patients messaging on Instagram with no reply',
      'Consultation bookings done manually',
      'No system to qualify inquiries',
    ],
    after: [
      'Instagram DMs answered instantly by AI',
      'Consultation requests captured and qualified',
      'Staff only handles confirmed appointments',
    ],
    impact: 'Instagram inquiries now converted automatically',
    impactPrefix: '',
    impactValue: '100%',
    quote: 'We stopped losing patients to faster competitors.',
  },
  {
    id: '#004',
    client: 'Ayana Clinic',
    type: 'Medical Clinic',
    location: 'Albania',
    logo: '/clients/aiyana-clinic.png',
    before: [
      'Chaotic multi-channel inbox (WhatsApp + Instagram)',
      'Patients waiting hours for basic answers',
      'Receptionist overwhelmed during peak hours',
    ],
    after: [
      'Unified AI response across all channels',
      'Patients get answers in under 2 seconds',
      'Receptionist freed for in-clinic tasks',
    ],
    impact: 'Average response time',
    impactPrefix: '',
    impactValue: '< 2s',
    quote: 'Our patients feel taken care of before they even walk in.',
  },
  {
    id: '#005',
    client: 'Trio Dental Center',
    type: 'Dental Group',
    location: 'Albania',
    logo: '/clients/trio-dental-center.png',
    before: [
      'Three locations, inconsistent reply times',
      'Leads lost between location handoffs',
      'No central view of incoming patient messages',
    ],
    after: [
      'Consistent AI response across all 3 locations',
      'Every lead captured and routed correctly',
      'Centralized visibility into all conversations',
    ],
    impact: 'Leads captured across all locations',
    impactPrefix: '',
    impactValue: '3x Locations Covered',
    quote: 'Codrix made us feel like a bigger operation overnight.',
  },
] as const;

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
            <ResultCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Study = (typeof caseStudies)[number];

function ResultCard({ study, index }: { study: Study; index: number }) {
  const impactLine = `${study.impactPrefix}${study.impactValue}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      <div className="px-5 sm:px-6 py-4 flex gap-3 items-start border-b border-white/5 bg-white/[0.02]">
        <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-lg bg-white overflow-hidden ring-1 ring-white/10 mt-0.5">
          <Image
            src={study.logo}
            alt={`${study.client} logo`}
            fill
            className="object-contain p-1.5"
            sizes="56px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight">{study.client}</h3>
          <p className="text-sm text-slate-400 mt-0.5">{study.type}</p>
          <p className="text-xs text-slate-500 mt-1">{study.location}</p>
        </div>
        <span className="text-[10px] sm:text-xs font-mono text-slate-500 shrink-0 pt-1">{study.id}</span>
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
            After
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
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold leading-tight">
              {study.impact}
            </div>
            <div className="text-base sm:text-lg font-bold text-emerald-400 mt-1 break-words">{impactLine}</div>
          </div>
        </div>

        <div className="text-left sm:text-right sm:max-w-[220px]">
          <p className="text-sm text-slate-400 italic">&quot;{study.quote}&quot;</p>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}
