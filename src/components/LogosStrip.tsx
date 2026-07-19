'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Dict } from '@/i18n';

const clients = [
  { name: 'Dental Med Austria', logo: '/clients/dental-med-austria.png' },
  { name: 'Dodo Dent', logo: '/clients/dodo-dent.png' },
  { name: 'SMartderm', logo: '/clients/SMARTDERM_page-0001-scaled.png' },
  { name: 'Ayana Clinic', logo: '/clients/aiyana-clinic.png' },
  { name: 'Trio Dental Center', logo: '/clients/trio-dental-center.png' },
];

export default function LogosStrip({ dict }: { dict: Dict }) {
  return (
    <section className="py-16 px-4 sm:px-6 border-y border-surface-border/60 bg-surface/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-white mb-1">
          {dict.logos.title}
        </h2>
        <p className="text-sm text-muted mb-10">{dict.logos.subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="relative h-12 w-20 rounded-md bg-white overflow-hidden">
                <Image
                  src={c.logo}
                  alt={`${c.name} logo`}
                  fill
                  className="object-contain p-1.5"
                  sizes="80px"
                />
              </div>
              <p className="text-sm font-medium text-muted whitespace-nowrap">{c.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
