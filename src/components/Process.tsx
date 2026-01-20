'use client';

import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: 'Strategy & Systems',
        description: 'We analyze your business model to identify revenue opportunities and build systems that create measurable outcomes. Not just features—systems that scale.',
        outcome: 'Clear roadmap to revenue',
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: 'Design for Conversion',
        description: 'Every pixel is designed to convert. We build high-converting interfaces that turn visitors into customers, not just pretty designs.',
        outcome: 'Higher conversion rates',
    },
    {
        icon: <Code2 className="w-6 h-6" />,
        title: 'Build & Automate',
        description: 'We build fast, scalable systems using proven tech stacks. Your platform handles operations, reduces costs, and frees your team.',
        outcome: 'Operational efficiency',
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: 'Launch & Optimize',
        description: 'We launch your system, track performance, and continuously optimize for better results. Your success is our metric.',
        outcome: 'Sustained growth',
    }
];

export default function Process() {
    return (
        <section id="process" className="py-24 bg-dark-lighter relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        How We <span className="text-gradient">Deliver</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A proven system to build revenue-generating platforms. Every step is designed to create measurable business outcomes.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group bg-dark p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors z-10"
                            >
                                <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors",
                                    "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                                )}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3 text-white">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    {step.description}
                                </p>
                                <div className="pt-4 border-t border-white/5">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                        {step.outcome}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
