import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Codrix Solutions | Revenue Systems That Scale',
  description: 'Operator-led development agency. We build revenue systems, not websites. Transform your business with systems that generate revenue and create competitive advantages.',
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
      <body className="font-sans antialiased text-white bg-dark selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ConversionPopup />
      </body>
    </html>
  );
}
