import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <CTA />
    </>
  );
}
