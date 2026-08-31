import type { Metadata } from 'next';
import HomeSections from '@/components/HomeSections';
import { getDict } from '@/i18n';

export const metadata: Metadata = {
  title: 'Biseda AI — Assistants that reply to your customers on WhatsApp, 24/7',
  description:
    'We build assistants that reply to your customers on WhatsApp and Instagram in 2 seconds — 24/7. Trusted by real clinics in Albania.',
  alternates: {
    canonical: '/en',
    languages: { sq: '/', en: '/en', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://codrixwebsite.vercel.app/en',
    siteName: 'Biseda AI',
    title: "How many customers do you lose because you can't reply in time?",
    description:
      'Assistants that reply to your customers on WhatsApp and Instagram in 2 seconds — 24 hours a day.',
  },
};

export default function HomeEn() {
  return <HomeSections dict={getDict('en')} />;
}
