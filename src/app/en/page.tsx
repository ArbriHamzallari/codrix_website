import type { Metadata } from 'next';
import HomeSections from '@/components/HomeSections';
import { getDict } from '@/i18n';

export const metadata: Metadata = {
  title: 'Codrix — Assistants that reply to your customers on WhatsApp, 24/7',
  description:
    'We build assistants that reply to your customers on WhatsApp and Instagram in 2 seconds — 24/7. Trusted by real clinics across Albania and the EU.',
};

export default function HomeEn() {
  return <HomeSections dict={getDict('en')} />;
}
