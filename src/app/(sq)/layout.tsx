import type { Metadata } from 'next';
import '../globals.css';
import { fontVariables } from '../fonts';
import SiteShell from '@/components/SiteShell';

const SITE_URL = 'https://codrixwebsite.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Biseda AI — Asistentë që u përgjigjen klientëve në WhatsApp, 24/7',
  description:
    'Ndërtojmë asistentë që u përgjigjen klientëve tuaj në WhatsApp dhe Instagram në 2 sekonda — 24 orë në ditë. Klinika dhe biznese reale na besojnë.',
  // Icons come from the App Router file convention now — `app/icon.svg`,
  // `app/icon.png` and `app/apple-icon.png`, all generated from the real
  // brand mark in `public/brand/`. The previous explicit `/favicon.png`
  // was the old pre-rebrand identity (dark navy chat glyph) and no longer
  // matched the logo in the navbar and footer.
  alternates: {
    canonical: '/',
    languages: { sq: '/', en: '/en', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'sq_AL',
    url: SITE_URL,
    siteName: 'Biseda AI',
    title: 'Biseda flet me klientët tuaj, edhe kur ju nuk mundeni.',
    description:
      'Asistentë që u përgjigjen klientëve tuaj në WhatsApp dhe Instagram në 2 sekonda — 24 orë në ditë.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biseda AI — Asistentë që u përgjigjen klientëve në WhatsApp, 24/7',
    description:
      'Asistentë që u përgjigjen klientëve tuaj në WhatsApp dhe Instagram në 2 sekonda — 24 orë në ditë.',
  },
};

export default function SqRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq" className={fontVariables}>
      <body className="font-sans antialiased text-foreground bg-background selection:bg-primary/20 selection:text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
