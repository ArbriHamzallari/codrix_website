import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Codrix Solutions | Premium Revenue Systems & Leverage',
  description: 'Operator-led company that installs revenue systems for serious businesses. CRM systems, automation, AI agents, and Shadow Operator partnerships. We create leverage, not services.',
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
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ConversionPopup />
      </body>
    </html>
  );
}
