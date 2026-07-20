import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { getDict } from '@/i18n';

export const metadata: Metadata = {
  title: 'Privacy policy — Codrix',
  robots: { index: false },
};

export default function Privacy() {
  return <LegalPage doc={getDict('en').legal.privacy} />;
}
