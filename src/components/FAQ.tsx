'use client';

import FaqSection, { type FaqRow } from '@/components/ui/faq-scroller';
import type { Dict } from '@/i18n';

// Layout only — the questions and answers live in `dict.faq.items` so both
// locales stay in sync. Row boundaries are indices into that flat list.
const ROWS: { id: string; speed: string; direction: 'left' | 'right'; slice: [number, number] }[] = [
  { id: 'row1', speed: '55s', direction: 'left', slice: [0, 3] },
  { id: 'row2', speed: '48s', direction: 'right', slice: [3, 6] },
  { id: 'row3', speed: '58s', direction: 'left', slice: [6, 8] },
];

export default function FAQ({ dict }: { dict: Dict }) {
  const f = dict.faq;

  const rows: FaqRow[] = ROWS.map((row) => ({
    id: row.id,
    speed: row.speed,
    direction: row.direction,
    faqItems: f.items.slice(row.slice[0], row.slice[1]).map((item, i) => ({
      id: `${row.id}-q${i}`,
      question: item.q,
      answer: item.a,
    })),
  }));

  return (
    <FaqSection
      id="pyetje"
      data={{ mainTitle: f.title, mainSubtitle: f.subtitle, rows }}
    />
  );
}
