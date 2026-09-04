import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';
import { dentalGuide } from '@/data/guides/dental';

const data = dentalGuide.sq;

export const metadata: Metadata = {
  title: 'Recepsion Dixhital me AI për Klinika Dentare | Biseda AI',
  description:
    'Biseda është recepsioni dixhital i klinikës suaj dentare. Përgjigjet pacientëve 24/7, mbledh kërkesat dhe ndihmon në kapjen e takimeve.',
  alternates: {
    canonical: '/for/klinike-dentare',
    languages: {
      sq: '/for/klinike-dentare',
      en: '/en/for/dental-clinic',
      'x-default': '/for/klinike-dentare',
    },
  },
};

export default function DentalGuideSq() {
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
      <GuidePage data={data} locale="sq" />
    </>
  );
}
