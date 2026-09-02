import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';
import { respondIoComparison } from '@/data/comparisons/respond-io';

const data = respondIoComparison.en;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/en/vs/respond-io',
    languages: { sq: '/vs/respond-io', en: '/en/vs/respond-io', 'x-default': '/vs/respond-io' },
  },
};

export default function RespondIoComparisonEn() {
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
