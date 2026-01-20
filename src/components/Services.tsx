'use client';

import { motion } from 'framer-motion';
import { Database, Zap, Bot, TrendingUp, Users, Globe, UserCheck, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const systems = [
    {
        icon: <Database className="w-8 h-8 text-primary" />,
        title: 'CRM Systems',
        description: 'Complete systems that track, nurture, and convert leads automatically. Built for scale.',
        leverage: 'Automated lead management & conversion',
    },
    {
        icon: <Zap className="w-8 h-8 text-secondary" />,
        title: 'Automation',
        description: 'Replace manual processes with intelligent workflows. Reduce costs. Create leverage.',
        leverage: '60-80% operational cost reduction',
    },
    {
        icon: <Bot className="w-8 h-8 text-purple-400" />,
        title: 'AI Agents',
        description: 'Intelligent agents that handle inquiries, qualify leads, and schedule appointments 24/7.',
        leverage: '24/7 automated operations',
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-green-400" />,
        title: 'Marketing Systems',
        description: 'End-to-end systems that generate, nurture, and convert leads. Fully automated.',
        leverage: '2-4x increase in qualified leads',
    },
    {
        icon: <Users className="w-8 h-8 text-orange-400" />,
        title: 'Lead Generation',
        description: 'Systems that consistently deliver high-quality leads. Predictable pipeline. Scalable growth.',
        leverage: 'Predictable lead flow',
    },
    {
        icon: <Globe className="w-8 h-8 text-blue-400" />,
        title: 'Website Development',
        description: 'High-converting websites that turn traffic into revenue. Complete revenue systems optimized for conversion and growth.',
        leverage: 'Revenue-focused platforms',
    },
    {
        icon: <UserCheck className="w-8 h-8 text-red-400" />,
        title: 'Shadow Operator',
        description: 'Long-term partnership. We operate as your technical co-founder. We build systems, manage operations, and drive growth.',
        leverage: 'Operator-level leverage',
        className: 'md:col-span-3'
    },
];

export default function Services() {
    const whatsappNumber = '+355682061862';
    const whatsappMessage = encodeURIComponent('I\'d like to discuss installing a revenue system for my business.');

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    return (
        <section id="services" className="py-32 bg-dark-lighter relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 tracking-tight">
                        Systems We <span className="text-gradient">Install</span>
                    </h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        We install revenue systems and create leverage for serious businesses.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {systems.map((system, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:bg-white/10",
                                system.className
                            )}
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                                {system.icon}
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-primary transition-colors">
                                {system.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                                {system.description}
                            </p>
                            <div className="pt-6 border-t border-white/5">
                                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                                    {system.leverage}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center"
                >
                    <button
                        onClick={handleWhatsAppClick}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 text-lg"
                    >
                        <MessageCircle size={22} />
                        Discuss System Installation
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
