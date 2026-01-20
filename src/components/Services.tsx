'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Zap, Shield, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
    {
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        title: 'Revenue Systems',
        description: 'We build conversion-optimized platforms that turn traffic into revenue. Not just a website—a complete sales system designed to scale your business.',
        outcome: '2-4x increase in online revenue',
        className: 'md:col-span-2'
    },
    {
        icon: <Zap className="w-8 h-8 text-secondary" />,
        title: 'Operational Automation',
        description: 'Replace manual processes with intelligent systems. We create platforms that handle operations, reduce costs, and free your team to focus on growth.',
        outcome: '60-80% reduction in manual work',
    },
    {
        icon: <Shield className="w-8 h-8 text-purple-400" />,
        title: 'Competitive Advantages',
        description: 'Build technology that your competitors can&apos;t replicate. Custom solutions that create moats and position you as the market leader.',
        outcome: 'Sustainable market differentiation',
    },
];

export default function Services() {
    const whatsappNumber = '+355682061862';
    const whatsappMessage = encodeURIComponent('I\'d like to discuss how Codrix can help grow my business.');

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    return (
        <section id="services" className="py-24 bg-dark-lighter relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        What We <span className="text-gradient">Deliver</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We don&apos;t sell services. We deliver systems that create measurable business outcomes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:bg-white/10",
                                service.className
                            )}
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                {service.description}
                            </p>
                            <div className="pt-4 border-t border-white/5">
                                <span className="text-sm font-semibold text-primary">
                                    {service.outcome}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <button
                        onClick={handleWhatsAppClick}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20"
                    >
                        <MessageCircle size={20} />
                        Discuss Your Project on WhatsApp
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
