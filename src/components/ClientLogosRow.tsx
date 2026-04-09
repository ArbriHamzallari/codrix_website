'use client';

import { motion } from 'framer-motion';

const clients = [
  { name: 'Dental Med Austria', type: 'Dental Clinic' },
  { name: 'Dodo Dent', type: 'Dental Practice' },
  { name: 'SMartderm', type: 'Dermatology Clinic' },
  { name: 'Ayana Clinic', type: 'Medical Clinic' },
  { name: 'Trio Dental Center', type: 'Dental Group' },
];

export default function ClientLogosRow() {
  return (
    <div className="mb-14">
      <h3 className="text-center text-xl md:text-2xl font-bold font-heading text-white mb-2">
        Trusted by clinics and practices across Europe
      </h3>
      <p className="text-center text-sm text-slate-500 mb-8">
        Real businesses. Real installations. Real results.
      </p>
      <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 overflow-x-auto pb-2 sm:pb-0 -mx-1 px-1 sm:mx-0 sm:px-0 scrollbar-thin">
        {clients.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" aria-hidden />
            <div className="text-left min-w-0">
              <p className="text-sm font-semibold text-white whitespace-nowrap">{c.name}</p>
              <p className="text-xs text-slate-500 whitespace-nowrap">{c.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
