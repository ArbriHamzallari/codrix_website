import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';
import { intercomComparison } from '@/data/comparisons/intercom';

const copy = intercomComparison.copy.sq;

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  alternates: {
    canonical: '/vs/intercom',
    languages: { sq: '/vs/intercom', en: '/en/vs/intercom', 'x-default': '/vs/intercom' },
  },
};

export default function IntercomComparisonSq() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ComparisonPage
        competitorName={intercomComparison.competitorName}
        copy={copy}
        table={intercomComparison.table}
      />
    </>
  );
}
