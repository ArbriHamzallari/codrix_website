'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Wrench, Rocket } from 'lucide-react';
import type { Dict } from '@/i18n';

const icons = [
  <MessageCircle key="0" className="w-6 h-6" />,
  <Wrench key="1" className="w-6 h-6" />,
  <Rocket key="2" className="w-6 h-6" />,
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Process({ dict }: { dict: Dict }) {
  const p = dict.process;

  return (
    <section id="si-funksionon" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            {p.title}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">{p.subtitle}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {p.steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={item}
              className="group bg-surface p-8 rounded-2xl border border-surface-border hover:border-primary/40 transition-colors shadow-card"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-primary-dim text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {icons[i]}
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
