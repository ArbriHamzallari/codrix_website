'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    const whatsappNumber = '+355682061862';
    const whatsappMessage = encodeURIComponent('Hi, I\'d like to discuss how Codrix can help grow my business.');

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    const handleScrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects - More Minimal */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-heading tracking-tight mb-12 leading-tight text-white"
                >
                    Revenue Systems<br className="hidden md:block" />
                    <span className="text-gradient">That Replace Work</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
                >
                    For serious businesses who want leverage, not staff.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={handleScrollToServices}
                        className="px-10 py-5 bg-primary text-white font-semibold rounded-full transition-all hover:shadow-[0_0_40px_-10px_rgba(79,110,247,0.5)] hover:scale-105 text-lg"
                    >
                        See How It Works
                    </button>

                    <button
                        onClick={handleWhatsAppClick}
                        className="px-10 py-5 text-white font-medium hover:text-primary transition-colors flex items-center gap-2 text-lg border border-white/20 hover:border-primary/50 rounded-full"
                    >
                        <MessageCircle size={20} />
                        WhatsApp Us
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
