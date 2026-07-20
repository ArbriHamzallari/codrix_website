import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const SITE_URL = 'https://codrixwebsite.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Codrix — Asistentë që u përgjigjen klientëve në WhatsApp, 24/7',
  description:
    'Ndërtojmë asistentë që u përgjigjen klientëve tuaj në WhatsApp dhe Instagram në 2 sekonda — 24 orë në ditë. Klinika dhe biznese reale na besojnë.',
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  alternates: {
    canonical: '/',
    languages: { sq: '/', en: '/en', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'sq_AL',
    url: SITE_URL,
    siteName: 'Codrix',
    title: 'Sa klientë humbisni sepse s\'keni kohë t\'u përgjigjeni?',
    description:
      'Asistentë që u përgjigjen klientëve tuaj në WhatsApp dhe Instagram në 2 sekonda — 24 orë në ditë.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codrix — Asistentë që u përgjigjen klientëve në WhatsApp, 24/7',
    description:
      'Asistentë që u përgjigjen klientëve tuaj në WhatsApp dhe Instagram në 2 sekonda — 24 orë në ditë.',
  },
};

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Codrix',
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
    <html lang="sq" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-foreground bg-background selection:bg-primary selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
