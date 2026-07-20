'use client';

import Image from 'next/image';
import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

// NOTE: all client logos are opaque (white-background PNGs, mixed aspect
// ratios), so we render them in uniform white chips rather than directly on the
// dark background — a box-free grayscale row would show mismatched white
// rectangles. To go fully box-free (respond.io style), supply transparent-PNG
// or SVG versions of each logo.
const clients = [
  { name: 'Dental Med Austria', logo: '/clients/dental-med-austria.png' },
  { name: 'Dodo Dent', logo: '/clients/dodo-dent.png' },
  { name: 'SMartderm', logo: '/clients/SMARTDERM_page-0001-scaled.png' },
  { name: 'Ayana Clinic', logo: '/clients/aiyana-clinic.png' },
  { name: 'Trio Dental Center', logo: '/clients/trio-dental-center.png' },
];

function Chip({ name, logo }: { name: string; logo: string }) {
  return (
    <div
      title={name}
      className="relative h-14 w-32 shrink-0 rounded-xl bg-white/95 overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
    >
      <Image src={logo} alt={`${name} logo`} fill className="object-contain p-2.5" sizes="128px" />
    </div>
  );
}

export default function LogosStrip({ dict }: { dict: Dict }) {
  return (
    <section className="py-16 px-4 sm:px-6 border-y border-surface-border/60 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-10">
          <h2 className="type-h3 font-bold font-heading text-white mb-1">{dict.logos.title}</h2>
          <p className="type-small text-tertiary">{dict.logos.subtitle}</p>
        </Reveal>

        {/* desktop / tablet: uniform centered row */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {clients.map((c) => (
            <Chip key={c.name} {...c} />
          ))}
        </div>

        {/* mobile: seamless marquee (two copies for the loop) */}
        <div className="sm:hidden overflow-hidden -mx-4">
          <div className="marquee-track flex w-max gap-5">
            {[...clients, ...clients].map((c, i) => (
              <Chip key={`${c.name}-${i}`} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
