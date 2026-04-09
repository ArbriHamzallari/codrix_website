import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Codrix — AI Response Systems for Local Businesses Worldwide',
  description:
    'Codrix — AI Response Systems for Local Businesses Worldwide. Instant WhatsApp, Instagram, and web chat replies — 24/7.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConversionPopup from '@/components/ConversionPopup';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-foreground bg-background selection:bg-primary selection:text-black">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <ConversionPopup />
      </body>
    </html>
  );
}
