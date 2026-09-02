import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';
import { crispComparison } from '@/data/comparisons/crisp';

const copy = crispComparison.copy.sq;

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  alternates: {
    canonical: '/vs/crisp',
    languages: { sq: '/vs/crisp', en: '/en/vs/crisp', 'x-default': '/vs/crisp' },
  },
};

export default function CrispComparisonSq() {
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
        competitorName={crispComparison.competitorName}
        copy={copy}
        table={crispComparison.table}
      />
    </>
  );
}
