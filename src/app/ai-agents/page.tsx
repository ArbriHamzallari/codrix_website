'use client';

import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, TrendingUp, DollarSign, Users, Zap, ArrowRight, Clock, Globe, Headphones } from 'lucide-react';
import CategoryPopup from '@/components/CategoryPopup';

export default function AIAgents() {
    const whatsappNumber = '+3550689007252';
    const phoneNumber = '+3550689007252';
    
    const handleContactClick = () => {
        const whatsappMessage = encodeURIComponent('I\'d like to discuss how AI Agents can reduce costs and increase revenue for my business.');
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    const handlePhoneClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`, '_self');
    };

    const agentCapabilities = [
        {
            icon: Clock,
            title: 'Instant 24/7 Response',
            description: 'The AI Agent responds instantly to customers 24/7 on WhatsApp, phone, and website, ensuring no inquiry is missed and no potential client is lost due to delayed replies.'
        },
        {
            icon: Globe,
            title: 'Multilingual Communication',
            description: 'It communicates with international clients in foreign languages, allowing businesses to serve tourists and international customers without hiring multilingual staff.'
        },
        {
            icon: CheckCircle2,
            title: 'Automated Booking Confirmation',
            description: 'It automatically confirms bookings and reservations, reducing manual coordination, errors, and staff workload.'
        },
        {
            icon: Headphones,
            title: 'Instant Question Resolution',
            description: 'It answers repetitive questions instantly, freeing staff from answering the same inquiries hundreds of times per month.'
        },
        {
            icon: TrendingUp,
            title: 'Proactive Client Nurturing',
            description: 'It proactively informs customers about offers, services, and availability, helping convert interest into paid bookings.'
        },
        {
            icon: Users,
            title: 'Smart Lead Routing',
            description: 'It organizes and routes conversations so only serious or qualified clients reach your team.'
        }
    ];

    const financialBenefits = [
        'Hiring and managing staff is expensive and scales poorly. The AI Agent replaces a large portion of front-desk and customer support work.',
        'Businesses typically reduce staff workload by up to 60%, allowing existing employees to focus on higher-value work that drives revenue.',
        'The cost of the AI Agent is significantly lower than hiring even a single employee. No overhead, training, or management complexity.',
        'There are no sick days, no vacations, no night shifts, and no human error. The AI Agent operates consistently, every hour of every day.',
        'A predictable monthly operating cost that replaces unpredictable staffing expenses. Better control over your bottom line.'
    ];

    const revenueDrivers = [
        {
            benefit: 'Faster responses',
            outcome: 'higher conversion rates',
            explanation: 'When customers get immediate answers, they\'re more likely to book. Delayed responses often mean lost sales.'
        },
        {
            benefit: '24/7 availability',
            outcome: 'captures clients outside working hours',
            explanation: 'International clients in different time zones can book at their convenience, not yours. This captures revenue that would otherwise be missed.'
        },
        {
            benefit: 'Automated follow-ups',
            outcome: 'reduces lost leads',
            explanation: 'The AI Agent never forgets to follow up. Every lead is nurtured systematically until it converts or is explicitly declined.'
        },
        {
            benefit: 'Consistent communication',
            outcome: 'improves customer trust and professionalism',
            explanation: 'Professional, accurate responses every time build confidence in your brand and increase booking likelihood.'
        },
        {
            benefit: 'International client support',
            outcome: 'increases booking likelihood',
            explanation: 'When international clients feel understood and supported immediately, they\'re more likely to commit to bookings and reservations.'
        }
    ];

    const targetBusinesses = [
        'Clinics working with international clients',
        'Hotels and hospitality businesses',
        'Restaurants handling high inquiry volume',
        'Service businesses relying on bookings and reservations',
        'Businesses looking to grow without hiring more staff'
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
                    className="mb-20 text-center"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading mb-8 tracking-tight leading-tight">
                        AI Agents That Reduce Costs<br />
                        <span className="text-gradient">and Increase Revenue</span>
                    </h1>
                    <p className="text-slate-300 text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
                        AI Agents handle customer communication, bookings, and follow-ups automatically. Businesses grow without increasing staff.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <button
                            onClick={handleContactClick}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 text-lg"
                        >
                            <MessageCircle size={22} />
                            Talk to Us
                        </button>
                    </motion.div>
                </motion.div>

                {/* What The AI Agent Does */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 text-white">
                        What Our AI Agents Handle
                    </h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-2xl leading-relaxed">
                        Digital front desk and sales assistant. Works 24/7. Handles repetitive communication tasks.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {agentCapabilities.map((capability, index) => {
                            const IconComponent = capability.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="p-6 bg-dark-lighter rounded-xl border border-white/5 hover:border-primary/20 transition-colors"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                            <IconComponent className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-2 text-lg">{capability.title}</h3>
                                            <p className="text-slate-300 leading-relaxed">{capability.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* The Financial Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-10 rounded-2xl border border-primary/20">
                        <div className="flex items-center gap-3 mb-6">
                            <DollarSign className="w-8 h-8 text-primary" />
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white">
                                Why This <span className="text-gradient">Saves You Money</span>
                            </h2>
                        </div>
                        <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                            <span className="font-semibold text-white">Predictable monthly cost</span> that replaces unpredictable staffing expenses.
                        </p>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                            Replaces multiple manual roles. Lower cost than hiring. Systems scale better than staff.
                        </p>
                        <div className="space-y-4">
                            {financialBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <p className="text-slate-300 leading-relaxed">{benefit}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* How It Makes You More Money */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white">
                            How This <span className="text-gradient">Increases Revenue</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-lg mb-12 max-w-2xl leading-relaxed">
                        The AI Agent doesn't just save money. It helps close more deals.
                    </p>
                    <div className="space-y-6">
                        {revenueDrivers.map((driver, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                className="p-6 bg-dark-lighter rounded-xl border border-white/5"
                            >
                                <div className="flex items-start gap-4">
                                    <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-white font-semibold mb-2 text-lg">
                                            <span className="text-primary">{driver.benefit}</span> = <span className="text-gradient">{driver.outcome}</span>
                                        </p>
                                        <p className="text-slate-300 leading-relaxed">{driver.explanation}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Who This Is For */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Users className="w-8 h-8 text-primary" />
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white">
                            Who This <span className="text-gradient">Is For</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {targetBusinesses.map((business, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5"
                            >
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                <p className="text-slate-300">{business}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="text-center p-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20"
                >
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 text-white leading-tight">
                        Replace manual work with an AI Agent<br />
                        <span className="text-gradient">that pays for itself</span>
                    </h3>
                    <p className="text-slate-400 text-sm mb-12 max-w-2xl mx-auto">
                        Replaces multiple manual roles. Lower cost than hiring. Systems scale better than staff.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                        <button
                            onClick={handleContactClick}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 text-lg"
                        >
                            <MessageCircle size={22} />
                            Contact Us
                        </button>
                        <button
                            onClick={handlePhoneClick}
                            className="inline-flex items-center gap-3 px-10 py-5 text-white font-medium hover:text-primary transition-colors border border-white/20 hover:border-primary/50 rounded-full text-lg"
                        >
                            {phoneNumber}
                        </button>
                    </div>
                    <p className="text-slate-500 text-xs">
                        Limited onboarding slots. Current intake closing soon.
                    </p>
                </motion.div>
            </div>

            <CategoryPopup
                pageKey="ai-agents"
                title="Still paying staff to answer the same questions?"
                body="Our AI Agents handle conversations, bookings, and follow-ups automatically. Most businesses save significant costs within the first months."
                ctaText="See If AI Makes Sense For Me"
                whatsappNumber="+3550689007252"
                whatsappMessage="I'd like to discuss how AI Agents can reduce costs and increase revenue for my business."
                triggerType="timer-or-exit"
                timerDelay={8000}
            />
        </section>
    );
}
