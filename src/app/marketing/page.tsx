'use client';

import { motion } from 'framer-motion';
import { TrendingUp, MessageCircle, Zap, Target, ArrowRight, DollarSign, Phone } from 'lucide-react';
import CategoryPopup from '@/components/CategoryPopup';

export default function Marketing() {
    const whatsappNumber = '+3550689007252';
    const phoneNumber = '+3550689007252';
    
    const handleContactClick = () => {
        const whatsappMessage = encodeURIComponent('I want to build a marketing system that brings clients every month.');
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    const handlePhoneClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`, '_self');
    };

    const systemComponents = [
        {
            icon: Target,
            title: 'Lead Generation',
            description: 'Attract the right people consistently, not random traffic'
        },
        {
            icon: Zap,
            title: 'Automated Follow-Ups',
            description: 'Every lead is contacted instantly and repeatedly until they convert'
        },
        {
            icon: TrendingUp,
            title: 'Conversion Flows',
            description: 'Messages and offers designed to turn interest into bookings'
        },
        {
            icon: MessageCircle,
            title: 'CRM Integration',
            description: 'Marketing and sales work together in one system'
        }
    ];

    const moneyPoints = [
        'Faster replies increase conversions',
        'Automated follow-ups reduce lost leads',
        'Consistency beats campaigns',
        'Predictable systems beat guesswork'
    ];

    return (
        <section className="min-h-screen pt-32 pb-20 bg-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 text-center"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-heading mb-12 tracking-tight leading-tight">
                        Marketing That Brings<br />
                        <span className="text-gradient">Clients Every Month</span>
                    </h1>
                    <p className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-16">
                        Automated marketing systems that attract, qualify, and convert clients.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <button
                            onClick={handleContactClick}
                            className="inline-flex items-center gap-3 px-12 py-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 text-xl"
                        >
                            <MessageCircle size={24} />
                            Build My Growth System
                        </button>
                    </motion.div>
                </motion.div>

                {/* The Problem */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-24"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        Not a <span className="text-gradient">Marketing Problem</span>.<br />
                        A <span className="text-primary">System Problem</span>.
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6 mt-12">
                        <div className="text-center">
                            <p className="text-slate-400 text-2xl md:text-3xl font-light">
                                Leads come in randomly
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-slate-400 text-2xl md:text-3xl font-light">
                                Follow-ups are inconsistent
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-slate-400 text-2xl md:text-3xl font-light">
                                Money is left on the table
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Our Solution */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-24"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        How Our <span className="text-gradient">Marketing System</span> Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {systemComponents.map((component, index) => {
                            const IconComponent = component.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    className="p-10 bg-dark-lighter rounded-2xl border-2 border-white/10 hover:border-primary/50 transition-all"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 bg-primary/20 rounded-xl flex-shrink-0">
                                            <IconComponent className="w-8 h-8 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                                {component.title}
                                            </h3>
                                            <p className="text-slate-300 text-xl leading-relaxed">
                                                {component.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Money Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-24"
                >
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-12 rounded-3xl border-2 border-primary/30">
                        <div className="flex items-center gap-4 mb-8 justify-center">
                            <DollarSign className="w-10 h-10 text-primary" />
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white text-center leading-tight">
                                Why This Makes You <span className="text-gradient">More Money</span>
                            </h2>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-8 mt-12">
                            {moneyPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
                                    <p className="text-white text-2xl md:text-3xl font-semibold">
                                        {point}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
                                A <span className="text-gradient">monthly revenue engine</span>,<br />
                                not an expense.
                            </p>
                            <p className="text-slate-300 text-sm">
                                Designed to pay for itself. Most clients recover the investment through saved time and increased conversions.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center p-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border-2 border-primary/20"
                >
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 text-white leading-tight">
                        Stop relying on luck.<br />
                        <span className="text-gradient">Build a marketing system</span>
                    </h3>
                    <p className="text-slate-400 text-sm mb-12 max-w-2xl mx-auto">
                        Designed to pay for itself. Built to reduce operating costs. Avoid the cost of missed opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <button
                            onClick={handleContactClick}
                            className="inline-flex items-center gap-3 px-12 py-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 text-xl"
                        >
                            <MessageCircle size={24} />
                            Contact Codrix
                        </button>
                        <button
                            onClick={handlePhoneClick}
                            className="inline-flex items-center gap-3 px-12 py-6 text-white font-semibold hover:text-primary transition-colors border-2 border-white/20 hover:border-primary/50 rounded-full text-xl"
                        >
                            <Phone size={24} />
                            {phoneNumber}
                        </button>
                    </div>
                    <p className="text-slate-500 text-xs">
                        New partnerships evaluated monthly. Availability reviewed weekly.
                    </p>
                </motion.div>
            </div>

            <CategoryPopup
                pageKey="marketing"
                title="Marketing should not be unpredictable."
                body="We build systems that bring clients every month without relying on luck or constant campaigns."
                ctaText="Build My Marketing System"
                whatsappNumber="+3550689007252"
                whatsappMessage="I want to build a marketing system that brings clients every month."
                triggerType="timer"
                timerDelay={8000}
            />
        </section>
    );
}
