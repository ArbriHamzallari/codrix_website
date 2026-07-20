import type { Metadata } from 'next';
import HomeSections from '@/components/HomeSections';
import { getDict } from '@/i18n';

export const metadata: Metadata = {
  title: 'Codrix — Assistants that reply to your customers on WhatsApp, 24/7',
  description:
    'We build assistants that reply to your customers on WhatsApp and Instagram in 2 seconds — 24/7. Trusted by real clinics across Albania and the EU.',
  alternates: {
    canonical: '/en',
    languages: { sq: '/', en: '/en', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://codrixwebsite.vercel.app/en',
    siteName: 'Codrix',
    title: "How many customers do you lose because you can't reply in time?",
    description:
      'Assistants that reply to your customers on WhatsApp and Instagram in 2 seconds — 24 hours a day.',
  },
};

export default function HomeEn() {
  return <HomeSections dict={getDict('en')} />;
}
