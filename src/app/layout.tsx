import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Codrix — Asistentë që u përgjigjen klientëve në WhatsApp, 24/7',
  description:
    'Ndërtojmë asistentë që u përgjigjen klientëve tuaj në WhatsApp dhe Instagram në 2 sekonda — 24 orë në ditë. Klinika dhe biznese reale na besojnë.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-foreground bg-background selection:bg-primary selection:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
