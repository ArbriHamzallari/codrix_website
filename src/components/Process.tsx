'use client';

import { MessageCircle, Settings2, Zap } from 'lucide-react';
import { HowItWorks } from '@/components/ui/how-it-works';
import type { Dict } from '@/i18n';

// `Zap` is deliberately the same icon `OmnichannelFeatures` uses for "AI
// Përgjigjet Brenda Sekondave" — Zap means speed/instant reply site-wide, so
// reusing it here for "starts replying to customers" keeps that consistent
// rather than introducing a second icon for the same idea.
const ICONS = [MessageCircle, Settings2, Zap];

export default function Process({ dict }: { dict: Dict }) {
  const p = dict.process;

  return (
    <HowItWorks
      id="si-funksionon"
      title={p.title}
      subtitle={p.subtitle}
      steps={p.steps.map((step, i) => ({
        icon: ICONS[i],
        title: step.title,
        description: step.text,
        benefits: step.benefits,
      }))}
    />
  );
}
