'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    const whatsappNumber = '+355682061862';
    const whatsappMessage = encodeURIComponent('Hi, I\'d like to discuss how Codrix can help grow my business.');

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects - More Minimal */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-slate-300 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Limited Spots Available — Q1 2026
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-8 leading-tight"
                >
                    We Build <span className="text-gradient">Revenue Systems</span> <br />
                    That Scale Your Business
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    Operator-led development agency. We don&apos;t build websites—we build systems that generate revenue, automate operations, and create competitive advantages.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <button
                        onClick={handleWhatsAppClick}
                        className="group relative px-10 py-5 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(79,110,247,0.5)] hover:scale-105"
                    >
                        <span className="relative flex items-center gap-3 text-lg">
                            <MessageCircle size={24} />
                            Start on WhatsApp
                        </span>
                    </button>

                    <a
                        href="#work"
                        className="px-10 py-5 text-slate-300 font-medium hover:text-white transition-colors flex items-center gap-2 text-lg"
                    >
                        See Results →
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                            <div className="text-3xl font-bold text-white mb-2">2-4x</div>
                            <div className="text-slate-400 text-sm">Average Revenue Increase</div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                            <div className="text-3xl font-bold text-white mb-2">30-60</div>
                            <div className="text-slate-400 text-sm">Days to Launch</div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                            <div className="text-3xl font-bold text-white mb-2">100%</div>
                            <div className="text-slate-400 text-sm">Operated by Founders</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
