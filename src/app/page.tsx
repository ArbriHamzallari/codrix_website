'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import StatsBanner from '@/components/StatsBanner';
import Process from '@/components/Process';
import WhatsAppNudge from '@/components/WhatsAppNudge';
import TimelineScenario from '@/components/TimelineScenario';
import ProofResults from '@/components/ProofResults';
import AboutUs from '@/components/AboutUs';
import ProfitabilitySimulator from '@/components/ProfitabilitySimulator';
import DiagnosticPanel from '@/components/DiagnosticPanel';
import LossCalculatorModal, { CalculatorData } from '@/components/LossCalculatorModal';

export default function Home() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    businessType: 'Restaurant',
    dailyMessages: 15,
    avgValue: 50,
    responseTime: '1_3',
  });

  const handleCalculatorComplete = () => {
    setIsCalculatorOpen(false);
  };

  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      <StatsBanner />
      <Process />
      <WhatsAppNudge />
      <TimelineScenario
        isCalculatorOpen={isCalculatorOpen}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onCloseCalculator={() => setIsCalculatorOpen(false)}
        calculatorData={calculatorData}
        onCalculatorDataChange={setCalculatorData}
        onCalculatorComplete={handleCalculatorComplete}
      />
      <ProofResults />
      <AboutUs />
      <ProfitabilitySimulator initialData={calculatorData} onOpenBooking={scrollToBook} />
      <WhatsAppNudge />
      <DiagnosticPanel />
      <LossCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        initialData={calculatorData}
        onDataChange={setCalculatorData}
        onComplete={handleCalculatorComplete}
      />
    </>
  );
}
