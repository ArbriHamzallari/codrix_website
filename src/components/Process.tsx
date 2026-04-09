'use client';

import { motion } from 'framer-motion';
import { Search, Wrench, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: 'audit',
    icon: <Search className="w-6 h-6" />,
    title: 'We Audit',
    description:
      'We analyse your current response setup and find where leads are slipping through.',
  },
  {
    id: 'build',
    icon: <Wrench className="w-6 h-6" />,
    title: 'We Build',
    description: 'We configure your AI response agent tailored to your business, tone, and FAQ.',
  },
  {
    id: 'install',
    icon: <Rocket className="w-6 h-6" />,
    title: 'We Install',
    description: 'We go live on your WhatsApp and Instagram. Your leads get instant replies from day one.',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Process() {
  return (
    <section id="how-it-works" className="py-24 bg-dark-lighter relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">How It Works</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Audit, build, install — then your leads get answers while you sleep.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={item}
              className="relative group bg-dark p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-colors"
            >
              <div
                className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors',
                  'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black'
                )}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
