'use client';

import { motion } from 'framer-motion';
import { Palette, Rocket, Globe, Smartphone, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: 'Custom Website Development',
        description: 'Bespoke websites built from scratch using Next.js and React. Fast, secure, and scalable.',
        className: 'md:col-span-2'
    },
    {
        icon: <Palette className="w-8 h-8 text-secondary" />,
        title: 'UI/UX Design',
        description: 'User-centric designs that look stunning and convert visitors into customers.',
    },
    {
        icon: <Smartphone className="w-8 h-8 text-purple-400" />,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
        icon: <Search className="w-8 h-8 text-green-400" />,
        title: 'SEO Optimization',
        description: 'Rank higher on Google with technical SEO and performance optimization.',
    },
    {
        icon: <Rocket className="w-8 h-8 text-orange-400" />,
        title: 'E-Commerce Solutions',
        description: 'Full-featured online stores that drive sales and manage inventory.',
        className: 'md:col-span-2'
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-dark-lighter relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Our <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We deliver end-to-end digital solutions tailored to your business goals.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_-10px_rgba(79,110,247,0.3)]",
                                service.className
                            )}
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
