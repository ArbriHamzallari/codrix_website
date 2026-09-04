import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';
import { dentalGuide } from '@/data/guides/dental';

const data = dentalGuide.en;

export const metadata: Metadata = {
  title: 'AI Receptionist for Dental Clinics | Biseda AI',
  description:
    'Biseda is the digital receptionist for your dental clinic. Answer patients 24/7, collect enquiries, and capture appointment requests.',
  alternates: {
    canonical: '/en/for/dental-clinic',
    languages: {
      sq: '/for/klinike-dentare',
      en: '/en/for/dental-clinic',
      'x-default': '/for/klinike-dentare',
    },
  },
};

export default function DentalGuideEn() {
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
      <GuidePage data={data} locale="en" />
    </>
  );
}
