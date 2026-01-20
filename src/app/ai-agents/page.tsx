'use client';

import { motion } from 'framer-motion';
import { Bot, MessageCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AIAgents() {
    const whatsappNumber = '+355682061862';
    const whatsappMessage = encodeURIComponent('I\'d like to discuss installing AI agents for my business.');

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    const features = [
        '24/7 customer inquiry handling',
        'Lead qualification and routing',
        'Automated appointment scheduling',
        'Customer support automation',
        'Intelligent conversation flows',
        'Integration with your existing systems',
    ];

    return (
        <section className="min-h-screen pt-32 pb-20 bg-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Link href="/systems" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12">
                    <ArrowLeft size={18} />
                    Back to Systems
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="mb-8 p-4 rounded-xl bg-purple-400/10 w-fit">
                        <Bot className="w-12 h-12 text-purple-400" />
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
                        AI <span className="text-gradient">Agents</span>
                    </h1>
                    <p className="text-slate-400 text-xl md:text-2xl max-w-3xl font-light leading-relaxed mb-12">
                        Intelligent AI agents that handle customer inquiries, qualify leads, schedule appointments, and manage operations 24/7. Your business never sleeps.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 text-white">
                        What We Install
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/5">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <p className="text-slate-300 text-lg">{feature}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center p-10 bg-white/5 rounded-2xl border border-white/5"
                >
                    <h3 className="text-2xl font-bold font-heading mb-4 text-white">
                        Ready to Install AI Agents?
                    </h3>
                    <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">
                        Let&apos;s discuss how AI agents can automate operations and create leverage.
                    </p>
                    <button
                        onClick={handleWhatsAppClick}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 text-lg"
                    >
                        <MessageCircle size={22} />
                        Start on WhatsApp
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
