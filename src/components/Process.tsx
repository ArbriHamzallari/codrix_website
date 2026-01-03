'use client';

import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: 'Discovery',
        description: 'We dive deep into your business goals, target audience, and brand identity to define a winning strategy.',
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: 'Design',
        description: 'We craft intuitive, high-fidelity prototypes that align with your vision and user needs.',
    },
    {
        icon: <Code2 className="w-6 h-6" />,
        title: 'Development',
        description: 'We build your site using the latest tech stack (Next.js, Tailwind) ensuring speed, security, and scalability.',
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: 'Launch & Scale',
        description: 'We deploy your site, optimize for search engines, and provide ongoing support to help you grow.',
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
                        Our <span className="text-gradient">Process</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        From concept to launch, we guide you through every step of the journey.
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
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
