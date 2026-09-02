import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';
import { intercomComparison } from '@/data/comparisons/intercom';

const data = intercomComparison.en;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/en/vs/intercom',
    languages: { sq: '/vs/intercom', en: '/en/vs/intercom', 'x-default': '/vs/intercom' },
  },
};

export default function IntercomComparisonEn() {
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
