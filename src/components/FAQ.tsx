'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'How long does it take to set up?',
    a: 'Most installations are live within 48–72 hours. We handle the entire setup — you just need to give us access to your WhatsApp Business account and Instagram. No technical knowledge required on your side.',
  },
  {
    q: 'Will the AI sound robotic to my clients?',
    a: 'No. We configure the AI with your business name, your tone, and your specific FAQ answers. It replies the way you would — just faster. Clients regularly assume they are talking to a real person.',
  },
  {
    q: 'What happens when a question is too complex for the AI?',
    a: 'The AI knows its limits. When a question falls outside its knowledge, it tells the client that a team member will follow up shortly — and sends you an instant notification so you can step in.',
  },
  {
    q: 'Do I need to sign a long-term contract?',
    a: 'No. Both plans are monthly. You can cancel anytime. We are confident enough in the results that we do not need to lock you in.',
  },
  {
    q: 'Does it work for businesses outside Albania and Kosovo?',
    a: 'Yes. We work with businesses across Europe and beyond. The AI works in any language and on any WhatsApp Business or Instagram account regardless of location.',
  },
  {
    q: 'Is my client data safe?',
    a: "Yes. We do not store conversation content beyond what is needed to run the AI. We comply with GDPR and never share your data or your clients' data with third parties.",
  },
  {
    q: 'What is the difference between Starter and Pro?',
    a: 'Starter covers AI responses via WhatsApp and email during business-configured hours. Pro adds multichannel coverage (Instagram, Facebook Messenger), CRM integration, and true 24/7 response with no time restrictions.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-dark-lighter border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-white/50 text-center mb-12">Everything you need to know before getting started.</p>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-white font-medium text-sm sm:text-base pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-primary text-xl ml-4 shrink-0"
                  aria-hidden
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/[0.06] pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
