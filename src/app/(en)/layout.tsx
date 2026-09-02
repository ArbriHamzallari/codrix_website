import type { Metadata } from 'next';
import '../globals.css';
import { fontVariables } from '../fonts';
import SiteShell from '@/components/SiteShell';

const SITE_URL = 'https://codrixwebsite.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Biseda AI — Assistants that reply to your customers on WhatsApp, 24/7',
  description:
    'We build assistants that reply to your customers on WhatsApp and Instagram in 2 seconds — 24/7. Trusted by real clinics in Albania.',
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="font-sans antialiased text-foreground bg-background selection:bg-primary/20 selection:text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
