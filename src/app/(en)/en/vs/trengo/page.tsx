import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';
import { trengoComparison } from '@/data/comparisons/trengo';

const copy = trengoComparison.copy.en;

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  alternates: {
    canonical: '/en/vs/trengo',
    languages: { sq: '/vs/trengo', en: '/en/vs/trengo', 'x-default': '/vs/trengo' },
  },
};

export default function TrengoComparisonEn() {
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
        competitorName={trengoComparison.competitorName}
        copy={copy}
        table={trengoComparison.table}
      />
    </>
  );
}
