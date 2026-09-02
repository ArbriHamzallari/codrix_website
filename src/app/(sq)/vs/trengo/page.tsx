import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';
import { trengoComparison } from '@/data/comparisons/trengo';

const data = trengoComparison.sq;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/vs/trengo',
    languages: { sq: '/vs/trengo', en: '/en/vs/trengo', 'x-default': '/vs/trengo' },
  },
};

export default function TrengoComparisonSq() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((item) => ({
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
      <ComparisonPage data={data} />
    </>
  );
}
