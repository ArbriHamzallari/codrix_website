'use client';

import { motion } from 'framer-motion';
import { Building2, UtensilsCrossed, Heart, Users } from 'lucide-react';

const clientCategories = [
    {
        icon: <Heart className="w-6 h-6 text-primary" />,
        label: 'Clinics'
    },
    {
        icon: <Building2 className="w-6 h-6 text-secondary" />,
        label: 'Hotels'
    },
    {
        icon: <UtensilsCrossed className="w-6 h-6 text-purple-400" />,
        label: 'Restaurants'
    },
    {
        icon: <Users className="w-6 h-6 text-green-400" />,
        label: 'Creators'
    }
];

export default function TrustedBy() {
    return (
        <section className="py-16 bg-dark-lighter relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-slate-300 text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed font-light">
                        Revenue systems for serious businesses who want leverage.
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-8">
                        {clientCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
                            >
                                {category.icon}
                                <span className="text-slate-300 text-sm md:text-base font-medium">
                                    {category.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
