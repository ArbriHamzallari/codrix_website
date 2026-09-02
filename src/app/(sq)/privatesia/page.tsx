import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { getDict } from '@/i18n';

export const metadata: Metadata = {
  title: 'Politika e privatësisë — Codrix',
  robots: { index: false },
};

export default function Privatesia() {
  return <LegalPage doc={getDict('sq').legal.privacy} />;
}
