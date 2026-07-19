import Hero from '@/components/Hero';
import LogosStrip from '@/components/LogosStrip';
import DemoLive from '@/components/DemoLive';
import Process from '@/components/Process';
import ProofResults from '@/components/ProofResults';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import MobileStickyBar from '@/components/MobileStickyBar';
import type { Dict } from '@/i18n';

export default function HomeSections({ dict }: { dict: Dict }) {
  return (
    <>
      <Hero dict={dict} />
      <LogosStrip dict={dict} />
      <DemoLive dict={dict} />
      <Process dict={dict} />
      <ProofResults dict={dict} />
      <Pricing dict={dict} />
      <FAQ dict={dict} />
      <FinalCTA dict={dict} />
      <MobileStickyBar dict={dict} />
      {/* Reserve space above footer when mobile sticky CTA is present */}
      <div className="h-16 sm:hidden shrink-0" aria-hidden />
    </>
  );
}
