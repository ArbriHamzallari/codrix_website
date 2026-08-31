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
      className="relative h-12 w-28 shrink-0 rounded-sm bg-white border border-border overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
    >
      <Image src={logo} alt={`${name} logo`} fill className="object-contain p-2.5" sizes="112px" />
    </div>
  );
}

export default function LogosStrip({ dict }: { dict: Dict }) {
  return (
    <section className="py-14 px-8 lg:px-16 border-y border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="text-center mb-9">
          <h2 className="type-h3 font-heading text-ink mb-1">{dict.logos.title}</h2>
          <p className="type-small text-ink-muted">{dict.logos.subtitle}</p>
        </Reveal>

        {/* desktop / tablet: uniform centered row */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-5 md:gap-8">
          {clients.map((c) => (
            <Chip key={c.name} {...c} />
          ))}
        </div>

        {/* mobile: seamless marquee (two copies for the loop) */}
        <div className="sm:hidden overflow-hidden -mx-8">
          <div className="marquee-track flex w-max gap-4">
            {[...clients, ...clients].map((c, i) => (
              <Chip key={`${c.name}-${i}`} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
