import AnnouncementBar from '@/components/AnnouncementBar';
import ChatWidget from '@/components/ChatWidget';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SITE_URL = 'https://codrixwebsite.vercel.app';

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Biseda AI',
  description:
    'Asistentë me AI që u përgjigjen klientëve në WhatsApp dhe Instagram 24/7, të ndërtuar në Shqipëri.',
  url: SITE_URL,
  email: 'info@codrix.org',
  telephone: '+355682061862',
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

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <AnnouncementBar />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
