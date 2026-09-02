import type { Metadata } from 'next';
import ComparisonPage from '@/components/ComparisonPage';
import { crispComparison } from '@/data/comparisons/crisp';

const data = crispComparison.sq;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/vs/crisp',
    languages: { sq: '/vs/crisp', en: '/en/vs/crisp', 'x-default': '/vs/crisp' },
  },
};

export default function CrispComparisonSq() {
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
