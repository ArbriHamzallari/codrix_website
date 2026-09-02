import { Check, Minus } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { whatsappUrl } from '@/i18n';
import type { ComparisonData, FeatureStatus } from '@/data/comparisons/types';

function StatusCell({ status, tone, soonLabel }: { status: FeatureStatus; tone: 'primary' | 'muted'; soonLabel: string }) {
  if (status === 'soon') {
    return (
      <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
        {soonLabel}
      </span>
    );
  }
  if (status === true) {
    return <Check size={16} className={tone === 'primary' ? 'mt-0.5 text-primary' : 'mt-0.5 text-ink-muted'} />;
  }
  return <Minus size={16} className="mt-0.5 text-ink-muted/50" />;
}

export default function ComparisonPage({ data }: { data: ComparisonData }) {
  const waHref = whatsappUrl(data.ctaLabel);

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="section-y px-6 sm:px-8 lg:px-16 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <h1 className="font-heading text-[2.25rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            {data.headline}
          </h1>
          <p className="type-lead mt-6 text-secondary">{data.subheadline}</p>
        </Reveal>
      </section>

      {/* Pillars */}
      <section className="border-t border-border px-6 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {data.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <h3 className="font-semibold text-ink">{p.title}</h3>
              <p className="mt-1 type-small text-secondary">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-y border-t border-border px-6 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-[1.75rem] font-bold tracking-[-0.03em] text-ink text-center sm:text-4xl mb-10">
              {data.tableTitle}
            </h2>
          </Reveal>
          {data.comparisonTable.map((group) => (
            <div key={group.category} className="mb-8">
              <p className="type-label uppercase text-ink-muted mb-3">{group.category}</p>
              <div className="overflow-hidden rounded-card border border-border">
                <div className="grid grid-cols-3 bg-primary-soft/40 px-4 py-2 type-small font-medium text-ink-muted">
                  <span>&nbsp;</span>
                  <span className="text-center text-ink">Biseda</span>
                  <span className="text-center">{data.competitorName}</span>
                </div>
                {group.rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-3 items-start gap-2 border-t border-border px-4 py-3 text-sm"
                  >
                    <span className="text-ink">
                      {row.feature}
                      {row.note && <span className="block type-small text-ink-muted">{row.note}</span>}
                    </span>
                    <span className="flex justify-center">
                      <StatusCell status={row.biseda} tone="primary" soonLabel={data.soonLabel} />
                    </span>
                    <span className="flex justify-center">
                      <StatusCell status={row.competitor} tone="muted" soonLabel={data.soonLabel} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who's this for */}
      <section className="border-t border-border px-6 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
          <Reveal>
            <h3 className="font-semibold text-ink mb-4">{data.chooseUs.title}</h3>
            <ul className="space-y-2.5">
              {data.chooseUs.points.map((p) => (
                <li key={p} className="flex items-start gap-2 type-small text-secondary">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="font-semibold text-ink mb-4">{data.chooseThem.title}</h3>
            <ul className="space-y-2.5">
              {data.chooseThem.points.map((p) => (
                <li key={p} className="flex items-start gap-2 type-small text-secondary">
                  <Check size={16} className="mt-0.5 shrink-0 text-ink-muted" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y border-t border-border px-6 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-[1.75rem] font-bold tracking-[-0.03em] text-ink text-center sm:text-4xl mb-10">
              {data.faqTitle}
            </h2>
          </Reveal>
          <div className="space-y-6">
            {data.faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04}>
                <h3 className="font-semibold text-ink">{item.q}</h3>
                <p className="mt-1 type-small text-secondary">{item.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-16 text-center sm:px-8 lg:px-16">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-white shadow-cta transition-colors hover:brightness-110"
        >
          {data.ctaLabel}
        </a>
      </section>
    </main>
  );
}
