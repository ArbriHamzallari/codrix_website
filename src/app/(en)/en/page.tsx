import type { Metadata } from 'next';
import HomeSections from '@/components/HomeSections';
import { getDict } from '@/i18n';

export const metadata: Metadata = {
  title: 'AI Digital Receptionist for Businesses | Biseda AI',
  description:
    "Biseda is your digital receptionist, 24/7 — it answers customer questions, understands what they need, collects their details, and hands conversations to your team when needed.",
  alternates: {
    canonical: '/en',
    languages: { sq: '/', en: '/en', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://codrixwebsite.vercel.app/en',
    siteName: 'Biseda AI',
    title: "Biseda talks to your customers even when you can't.",
    description:
      'Your digital receptionist, 24/7 — answers questions, captures enquiries, and hands off to your team when needed.',
  },
};

export default function HomeEn() {
  return <HomeSections dict={getDict('en')} />;
}
