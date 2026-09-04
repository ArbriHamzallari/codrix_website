import { Check, MessageCircle } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { getDict, whatsappUrl } from '@/i18n';
import { cn } from '@/lib/utils';
import type { GuideData } from '@/data/guides/dental';

const UI = {
  sq: {
    demoHref: '/#demo',
    demoLink: 'Provoni demon e plotë →',
    scenarioAnchor: 'skenari',
    scenarioLabel: 'Bisedë shembull',
    heroCtaSecondary: 'Shiko si funksionon',
    workflowTitle: 'Një mesazh. Dy rezultate.',
    without: 'Pa Biseda',
    withB: 'Me Biseda',
    example: 'SHEMBULL',
    evidenceTitle: 'Çfarë tregojnë të dhënat',
    source: 'Burimi:',
    planTitle: 'Plani i rekomanduar',
    pricingHref: '/#cmimet',
    pricingLink: 'Shiko çmimet e plota →',
    faqTitle: 'Pyetje të shpeshta',
  },
  en: {
    demoHref: '/en/#demo',
    demoLink: 'Try the full demo →',
    scenarioAnchor: 'skenari',
    scenarioLabel: 'Example conversation',
    heroCtaSecondary: 'See how it works',
    workflowTitle: 'One message. Two outcomes.',
    without: 'Without Biseda',
    withB: 'With Biseda',
    example: 'EXAMPLE',
    evidenceTitle: 'What the data shows',
    source: 'Source:',
    planTitle: 'Recommended plan',
    pricingHref: '/en/#cmimet',
    pricingLink: 'See full pricing →',
    faqTitle: 'Frequently asked questions',
  },
} as const;

export default function GuidePage({ data, locale }: { data: GuideData; locale: 'sq' | 'en' }) {
  const dict = getDict(locale);
  const t = UI[locale];
  const waHref = whatsappUrl(dict.nav.whatsappMessage);

  return (
    <main className="bg-background">
      {/* 1. Hero */}
      <section className="section-y px-6 sm:px-8 lg:px-16 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <p className="type-label uppercase text-primary mb-4">{data.hero.eyebrow}</p>
          <h1 className="font-heading text-[2.25rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            {data.hero.headline}
          </h1>
          <p className="type-lead mt-6 text-secondary">{data.hero.subheadline}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={t.demoHref}
              className="inline-flex items-center justify-center rounded-sm bg-ink px-6 h-12 text-[15px] font-medium text-white hover:bg-ink/85 transition-colors"
            >
              {dict.hero.ctaPrimary}
            </a>
            <a
              href={`#${t.scenarioAnchor}`}
              className="inline-flex items-center justify-center rounded-sm border border-ink px-6 h-12 text-[15px] font-medium text-ink bg-white hover:bg-ink/[0.03] transition-colors"
            >
              {t.heroCtaSecondary}
            </a>
          </div>
        </Reveal>
      </section>

      {/* 2-3. Scenario + product-demo link */}
      <section id={t.scenarioAnchor} className="border-t border-border px-6 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="type-h3 font-heading text-ink text-center mb-3">{data.demoIntro}</h2>
            <p className="type-label uppercase text-ink-muted text-center mb-4">{t.scenarioLabel}</p>
            <div className="rounded-card border border-border bg-white p-5 shadow-soft space-y-3">
              {data.scenario.messages.map((m, i) => (
                <div key={i} className={cn('flex', m.role === 'customer' ? 'justify-end' : 'justify-start')}>
                  <div
                    className={cn(
                      'max-w-[80%] rounded-lg px-4 py-2.5 text-sm leading-relaxed',
                      m.role === 'customer'
                        ? 'bg-ink text-white rounded-br-none'
                        : 'bg-primary-soft text-ink rounded-bl-none'
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-6">
            <p className="type-small font-medium text-ink-muted mb-2">{data.scenario.capturedLabel}</p>
            <div className="flex flex-wrap gap-2">
              {data.scenario.capturedFields.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full border border-success/40 bg-success/5 px-3 py-1.5 type-small text-ink"
                >
                  <Check size={14} className="text-success" />
                  {f}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14} className="mt-6 text-center">
            <a href={t.demoHref} className="type-small font-medium text-primary hover:underline link-underline">
              {t.demoLink}
            </a>
          </Reveal>
        </div>
      </section>

      {/* 4. Capabilities */}
      <section className="border-t border-border px-6 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-[1.75rem] font-bold tracking-[-0.03em] text-ink text-center sm:text-4xl mb-10">
              {data.capabilitiesTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.capabilities.map((c, i) => (
              <Reveal key={c} delay={i * 0.03} className="flex items-start gap-2.5 type-small text-secondary">
                <>
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  {c}
                </>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Workflow without/with — labeled SHEMBULL/EXAMPLE, never a real outcome */}
      <section className="section-y border-t border-border px-6 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-[1.75rem] font-bold tracking-[-0.03em] text-ink text-center sm:text-4xl mb-10">
              {t.workflowTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Reveal className="rounded-card border border-border bg-white/60 p-6">
              <span className="type-label uppercase text-ink-muted/70 border border-border rounded-full px-2 py-0.5">
                {t.example}
              </span>
              <h3 className="font-semibold text-ink-muted mt-4 mb-2">{t.without}</h3>
              <p className="type-small text-ink-muted whitespace-pre-line">{data.workflow.without}</p>
            </Reveal>
            <Reveal delay={0.06} className="rounded-card border border-primary/30 bg-primary-soft/30 p-6 shadow-elevated">
              <span className="type-label uppercase text-primary border border-primary/40 rounded-full px-2 py-0.5">
                {t.example}
              </span>
              <h3 className="font-semibold text-ink mt-4 mb-2">{t.withB}</h3>
              <p className="type-small text-ink whitespace-pre-line">{data.workflow.withBiseda}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Evidence — max what's in the data array */}
      <section className="border-t border-border px-6 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-heading text-[1.75rem] font-bold tracking-[-0.03em] text-ink text-center sm:text-4xl mb-10">
              {t.evidenceTitle}
            </h2>
          </Reveal>
          <div className="space-y-10">
            {data.evidence.map((ev, i) => (
              <Reveal key={ev.stat} delay={i * 0.06} className="text-center">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-primary">{ev.stat}</p>
                <p className="type-body text-secondary mt-4 max-w-xl mx-auto">{ev.interpretation}</p>
                <a
                  href={ev.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block type-small text-ink-muted underline decoration-dotted hover:text-ink"
                >
                  {t.source} {ev.source}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Plan recommendation */}
      <section className="border-t border-border px-6 py-16 sm:px-8 lg:px-16">
        <Reveal className="mx-auto max-w-2xl rounded-card border border-border bg-white p-8 text-center shadow-soft">
          <p className="type-label uppercase text-ink-muted mb-2">{t.planTitle}</p>
          <p className="font-heading text-2xl font-bold text-ink mb-3">{data.planRecommendation.plan}</p>
          <p className="type-small text-secondary mb-5">{data.planRecommendation.reason}</p>
          <a href={t.pricingHref} className="type-small font-medium text-primary hover:underline link-underline">
            {t.pricingLink}
          </a>
        </Reveal>
      </section>

      {/* 8. FAQ */}
      <section className="section-y border-t border-border px-6 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-[1.75rem] font-bold tracking-[-0.03em] text-ink text-center sm:text-4xl mb-10">
              {t.faqTitle}
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

      {/* 9. CTA */}
      <section className="border-t border-border px-6 py-16 text-center sm:px-8 lg:px-16">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="type-h3 font-heading text-ink mb-6">{data.cta}</h2>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-sm bg-whatsapp px-8 py-4 text-lg font-medium text-white hover:brightness-110 transition-all shadow-cta"
          >
            <MessageCircle className="w-5 h-5" />
            {dict.finalCta.cta}
          </a>
        </Reveal>
      </section>
    </main>
  );
}
