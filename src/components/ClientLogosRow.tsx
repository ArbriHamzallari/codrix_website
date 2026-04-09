'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'Dental Med Austria',
    type: 'Dental Clinic',
    logo: '/clients/dental-med-austria.png',
  },
  {
    name: 'Dodo Dent',
    type: 'Dental Practice',
    logo: '/clients/dodo-dent.png',
  },
  {
    name: 'SMartderm',
    type: 'Dermatology Clinic',
    logo: '/clients/SMARTDERM_page-0001-scaled.png',
  },
  {
    name: 'Ayana Clinic',
    type: 'Medical Clinic',
    logo: '/clients/aiyana-clinic.png',
  },
  {
    name: 'Trio Dental Center',
    type: 'Dental Group',
    logo: '/clients/trio-dental-center.png',
  },
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
            className="flex-shrink-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] pl-3 pr-4 py-2.5"
          >
            <div className="relative h-10 w-[72px] shrink-0 rounded-md bg-white overflow-hidden">
              <Image
                src={c.logo}
                alt={`${c.name} logo`}
                fill
                className="object-contain p-1"
                sizes="72px"
              />
            </div>
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
