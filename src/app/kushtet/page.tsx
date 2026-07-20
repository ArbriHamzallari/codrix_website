import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { getDict } from '@/i18n';

export const metadata: Metadata = {
  title: 'Kushtet e shërbimit — Codrix',
  robots: { index: false },
};

export default function Kushtet() {
  return <LegalPage doc={getDict('sq').legal.terms} />;
}
