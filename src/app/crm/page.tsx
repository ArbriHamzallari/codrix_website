'use client';

import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, TrendingUp, DollarSign, Users, Zap, ArrowRight } from 'lucide-react';

export default function CRM() {
    const whatsappNumber = '+3550689007252';
    const phoneNumber = '+3550689007252';
    
    const handleContactClick = () => {
        const whatsappMessage = encodeURIComponent('I\'d like to discuss how your CRM system can help my business save money and increase revenue.');
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    const handlePhoneClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`, '_self');
    };

    const systemCapabilities = [
        {
            title: 'Never Lose a Lead',
            description: 'Every inquiry, contact, and lead is stored and tracked, so no potential customer ever slips through the cracks.'
        },
        {
            title: 'Smart Lead Prioritization',
            description: 'Lead information is automatically organized, prioritized, and segmented — helping you know who is ready to buy now vs who needs a follow-up nurture message.'
        },
        {
            title: 'Automated Follow-Up',
            description: 'Workflows trigger automated messages (email, SMS, WhatsApp) so follow-up happens instantly, every time — without manual work.'
        },
        {
            title: 'Self-Service Scheduling',
            description: 'Calendars and appointment scheduling are automated so clients can self-book without endless back-and-forth.'
        },
        {
            title: 'Complete Visibility',
            description: 'All client interactions are visible in one place, giving you a clear view of your pipeline and bottlenecks.'
        },
        {
            title: 'Intelligent Nudging',
            description: 'The system automatically nudges leads toward booking or purchase based on behavior — boosting revenue without extra staff.'
        }
    ];

    const financialBenefits = [
        'Traditional business models waste money on manual follow-up and lost opportunities. Our CRM eliminates that waste.',
        'Instead of hiring multiple staff for messaging, reminders, lead tracking, and scheduling, this system automates all of it — reducing staffing costs significantly.',
        'With automated follow-ups and multi-channel reach, more leads turn into paying clients — directly increasing revenue.',
        'You never pay for missed calls, lost texts, or human delays — the system ensures every lead is touched automatically.',
        'Manual errors, forgotten messages, and scheduling conflicts melt away, replaced with workflows that nurture clients 24/7.'
    ];

    const revenueDrivers = [
        {
            benefit: 'Faster responses',
            outcome: 'higher conversion rates',
            explanation: 'When your sales cycle is shorter and follow-up is instant, more prospects convert to paying clients.'
        },
        {
            benefit: 'Automated follow-up',
            outcome: 'more booked clients',
            explanation: 'Consistent, timely nurturing means leads never go cold — they stay engaged until they\'re ready to buy.'
        },
        {
            benefit: 'Self-service scheduling',
            outcome: 'fewer no-shows',
            explanation: 'Clients book on their own time, reducing conflicts and cancellations that cost you money.'
        },
        {
            benefit: 'Clear pipeline visibility',
            outcome: 'smarter decision making',
            explanation: 'When you see exactly where revenue is stuck, you can fix bottlenecks and accelerate sales cycles.'
        },
        {
            benefit: 'Automated scoring & segmentation',
            outcome: 'higher quality leads booked faster',
            explanation: 'Focus your attention on leads that are ready to buy now, while the system nurtures others automatically.'
        }
    ];

    const targetBusinesses = [
        'Clinics serving local & international clients',
        'Hotels & hospitality businesses',
        'Restaurants with high inquiry volume',
        'Service businesses that depend on appointments',
        'Any business tired of hiring more staff for repetitive communication'
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight leading-tight">
                        CRM That Turns Leads Into Revenue<br />— Without Manual Follow-Up
                    </h1>
                    <p className="text-slate-300 text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed mb-10">
                        A premium client management system built to reduce wasted work, automate follow-up, and increase conversions — all in one place.
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

                {/* What This CRM System Actually Does */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                        What Our CRM System Handles For You
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-3xl leading-relaxed">
                        Your business finally has an always-on, revenue-focused assistant that runs behind the scenes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {systemCapabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="p-6 bg-dark-lighter rounded-xl border border-white/5 hover:border-primary/20 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-2 text-lg">{capability.title}</h3>
                                        <p className="text-slate-300 leading-relaxed">{capability.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Financial Benefits & Cost Savings */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-10 rounded-2xl border border-primary/20">
                        <div className="flex items-center gap-3 mb-6">
                            <DollarSign className="w-8 h-8 text-primary" />
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
                                Why This System Saves Money and Increases Revenue
                            </h2>
                        </div>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            This is not an expense — it's a <span className="font-semibold text-white">predictable ROI engine</span> that pays for itself quickly.
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
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
                            How Our CRM Drives Revenue — Not Just Organizes Contacts
                        </h2>
                    </div>
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
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
                            Who Profits Most From This CRM System
                        </h2>
                    </div>
                    <p className="text-slate-400 text-lg mb-8 max-w-3xl leading-relaxed">
                        This system is designed for serious growth — not hobby projects.
                    </p>
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
                    <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white leading-tight">
                        Stop losing leads and money.<br />Upgrade to a CRM that runs your customer lifecycle automatically.
                    </h3>
                    <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                        Contact us to discuss how this system can transform your revenue and reduce your operational costs.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                </motion.div>
            </div>
        </section>
    );
}
