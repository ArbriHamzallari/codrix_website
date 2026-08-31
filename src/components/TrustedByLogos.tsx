'use client';

import { Logos3 } from '@/components/ui/logos3';
import type { Dict } from '@/i18n';

// The five real clients from CLAUDE.md §3, using the exact paths already in
// LogosStrip.tsx — same assets, not new ones. Full colour and full opacity:
// these named logos are the site's single biggest trust asset (§3), so they are
// not greyed back the way the old strip did.
const clientLogos = [
  { id: 'logo-1', description: 'Dental Med Austria', image: '/clients/dental-med-austria.png' },
  // The only portrait asset (1080x1350) and the only one with a wide dead
  // margin baked in, so `object-contain` renders its mark visibly smaller
  // than the rest. Scaled up to match; the overspill that clips is its own
  // gradient background, never the mark.
  { id: 'logo-2', description: 'Dodo Dent', image: '/clients/dodo-dent.png', className: 'scale-125' },
  { id: 'logo-3', description: 'SMartderm', image: '/clients/SMARTDERM_page-0001-scaled.png' },
  { id: 'logo-4', description: 'Ayana Clinic', image: '/clients/aiyana-clinic.png' },
  { id: 'logo-5', description: 'Trio Dental Center', image: '/clients/trio-dental-center.png' },
];

// Repeated so the loop has no visible gap — still the same five businesses.
// Three passes covers the widest breakpoint: at 1440px roughly five tiles are
// on screen at once, so two passes could show the seam mid-scroll.
const repeatedLogos = [1, 2, 3].flatMap((rep) =>
  clientLogos.map((logo) => ({ ...logo, id: `${logo.id}-${rep}` }))
);

// `id` is a prop, not hardcoded: `StorySections.ProblemSection` (superseded and
// unmounted, but still compiled) also renders this, and two mounted copies
// would otherwise both claim the #besimi anchor.
export default function TrustedByLogos({ dict, id }: { dict: Dict; id?: string }) {
  return (
    <Logos3
      id={id}
      heading={dict.logos.title}
      description={dict.logos.subtitle}
      logos={repeatedLogos}
    />
  );
}
