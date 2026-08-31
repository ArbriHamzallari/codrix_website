import type { Metadata } from 'next';
import { Inter, DM_Mono, Instrument_Sans, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-instrument-sans',
  display: 'swap',
});
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-source-serif',
  display: 'swap',
});

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

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Biseda AI',
  description:
    'Asistentë me AI që u përgjigjen klientëve në WhatsApp dhe Instagram 24/7, të ndërtuar në Shqipëri.',
  url: SITE_URL,
  email: 'info@codrix.org',
  telephone: '+355689007252',
  areaServed: ['AL', 'XK', 'EU'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tiranë',
    addressCountry: 'AL',
  },
  sameAs: [
    'https://www.instagram.com/codrix.al/',
    'https://www.linkedin.com/company/codrix-solutions/',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="sq"
      className={`${inter.variable} ${dmMono.variable} ${instrumentSans.variable} ${sourceSerif.variable}`}
    >
      <body className="font-sans antialiased text-foreground bg-background selection:bg-primary/20 selection:text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <AnnouncementBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
