'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import TimelineScenario from '@/components/TimelineScenario';
import SystemArchitecture from '@/components/SystemArchitecture';


import ProofResults from '@/components/ProofResults';
import Process from '@/components/Process';
import ProfitabilitySimulator from '@/components/ProfitabilitySimulator';
import DiagnosticPanel from '@/components/DiagnosticPanel';
import LossCalculatorModal, { CalculatorData } from '@/components/LossCalculatorModal';

export default function Home() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    businessType: 'Restaurant',
    dailyMessages: 15,
    avgValue: 50,
    responseTime: '1_3'
  });

  const handleCalculatorComplete = () => {
    setIsCalculatorOpen(false);
    setHasCalculated(true);
  };

  return (
    <>
      <Hero />
      <TimelineScenario
        isCalculatorOpen={isCalculatorOpen}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onCloseCalculator={() => setIsCalculatorOpen(false)}
        calculatorData={calculatorData}
        onCalculatorDataChange={setCalculatorData}
        onCalculatorComplete={handleCalculatorComplete}
      />
      <SystemArchitecture />


      <ProofResults />
      <ProfitabilitySimulator
        initialData={calculatorData}
        onOpenBooking={() => setIsCalculatorOpen(true)} // Reusing the modal generic open for now, arguably could target booking step directly if improved later
      />
      <Process />

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
