import type { Metadata } from 'next';
import HomeSections from '@/components/HomeSections';
import { getDict } from '@/i18n';

export const metadata: Metadata = {
  title: 'Recepsion Dixhital me AI për Biznese | Biseda AI',
  description:
    'Biseda është recepsioni juaj dixhital 24/7 — përgjigjet pyetjeve të klientëve, kupton çfarë kërkojnë, mbledh të dhënat e tyre dhe i kalon bisedat stafit kur duhet.',
  alternates: {
    canonical: '/',
    languages: { sq: '/', en: '/en', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'sq_AL',
    url: 'https://codrixwebsite.vercel.app',
    siteName: 'Biseda AI',
    title: 'Biseda flet me klientët tuaj edhe kur ju nuk mundeni.',
    description:
      'Biseda është recepsioni juaj dixhital 24/7 — përgjigjet klientëve, kupton kërkesat e tyre dhe i kalon bisedat stafit kur duhet.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recepsion Dixhital me AI për Biznese | Biseda AI',
    description:
      'Biseda është recepsioni juaj dixhital 24/7 — përgjigjet pyetjeve të klientëve dhe i kalon bisedat stafit kur duhet.',
  },
};

export default function Home() {
  return <HomeSections dict={getDict('sq')} />;
}
