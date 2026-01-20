'use client';

import { motion } from 'framer-motion';
import { Database, Zap, Bot, TrendingUp, Users, Globe, UserCheck, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const systems = [
    {
        icon: <Database className="w-10 h-10 text-primary" />,
        title: 'CRM Systems',
        description: 'Complete customer relationship management systems that track, nurture, and convert leads automatically. Built for scale, designed for results.',
        leverage: 'Automated lead management & conversion',
        href: '/crm',
    },
    {
        icon: <Zap className="w-10 h-10 text-secondary" />,
        title: 'Automation',
        description: 'Replace manual processes with intelligent workflows. Systems that handle operations, reduce costs, and create leverage—no human input required.',
        leverage: '60-80% operational cost reduction',
    },
    {
        icon: <Bot className="w-10 h-10 text-purple-400" />,
        title: 'AI Agents',
        description: 'Intelligent AI agents that handle customer inquiries, qualify leads, schedule appointments, and manage operations 24/7. Your business never sleeps.',
        leverage: '24/7 automated operations',
        href: '/ai-agents',
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-green-400" />,
        title: 'Marketing Systems',
        description: 'End-to-end marketing systems that generate, nurture, and convert leads. From awareness to revenue—fully automated and optimized for performance.',
        leverage: '2-4x increase in qualified leads',
        href: '/marketing',
    },
    {
        icon: <Users className="w-10 h-10 text-orange-400" />,
        title: 'Lead Generation',
        description: 'Systems that consistently deliver high-quality leads. We build the infrastructure, you close the deals. Predictable pipeline, scalable growth.',
        leverage: 'Predictable lead flow',
    },
    {
        icon: <Globe className="w-10 h-10 text-blue-400" />,
        title: 'Website Development',
        description: 'High-converting websites that turn traffic into revenue. Not just design—complete revenue systems optimized for conversion and growth.',
        leverage: 'Revenue-focused platforms',
        href: '/websites',
    },
    {
        icon: <UserCheck className="w-10 h-10 text-red-400" />,
        title: 'Shadow Operator',
        description: 'Long-term partnership where we operate as your technical co-founder. We build systems, manage operations, and drive growth—you focus on what you do best.',
        leverage: 'Operator-level leverage',
        href: '/shadow-operator',
        className: 'md:col-span-3'
    },
];

export default function Systems() {
    const whatsappNumber = '+355682061862';
    const whatsappMessage = encodeURIComponent('I\'d like to discuss installing a revenue system for my business.');

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    return (
        <section className="min-h-screen pt-32 pb-20 bg-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
                        Systems We <span className="text-gradient">Install</span>
                    </h1>
                    <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
                        We don&apos;t sell services. We install revenue systems and create leverage for serious businesses.
                    </p>
                    <button
                        onClick={handleWhatsAppClick}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 text-lg"
                    >
                        <MessageCircle size={22} />
                        Discuss System Installation
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {systems.map((system, index) => {
                        const contentClassName = cn(
                            "group p-10 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:bg-white/10 block",
                            system.className
                        );

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {system.href ? (
                                    <Link
                                        href={system.href}
                                        className={contentClassName}
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
                                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                                                {system.leverage}
                                            </span>
                                            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </Link>
                                ) : (
                                    <div className={contentClassName}>
                                        <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                                            {system.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-primary transition-colors">
                                            {system.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                                            {system.description}
                                        </p>
                                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                                                {system.leverage}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
