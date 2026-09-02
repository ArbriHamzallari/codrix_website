import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { getDict } from '@/i18n';

export const metadata: Metadata = {
  title: 'Terms of service — Codrix',
  robots: { index: false },
};

export default function Terms() {
  return <LegalPage doc={getDict('en').legal.terms} />;
}
