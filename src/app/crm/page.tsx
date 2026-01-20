'use client';

import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, TrendingUp, DollarSign, Users, Zap, ArrowRight } from 'lucide-react';
import CategoryPopup from '@/components/CategoryPopup';

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
            description: 'Lead information is automatically organized, prioritized, and segmented. You know who is ready to buy now versus who needs nurturing.'
        },
        {
            title: 'Automated Follow-Up',
            description: 'Workflows trigger automated messages instantly. Email, SMS, WhatsApp. No manual work required.'
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
            description: 'The system automatically nudges leads toward booking or purchase based on behavior. Boosts revenue without extra staff.'
        }
    ];

    const financialBenefits = [
        'Traditional models waste money on manual follow-up and lost opportunities. Our CRM eliminates that waste.',
        'Instead of hiring staff for messaging, reminders, and scheduling, this system automates all of it. Significant cost reduction.',
        'Automated follow-ups and multi-channel reach turn more leads into paying clients. Direct revenue increase.',
        'No missed calls, lost texts, or human delays. The system ensures every lead is touched automatically.',
        'Manual errors and forgotten messages disappear. Workflows nurture clients 24/7.'
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
            explanation: 'Consistent, timely nurturing means leads never go cold. They stay engaged until they\'re ready to buy.'
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
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading mb-8 tracking-tight leading-tight">
                        CRM That Turns Leads<br />
                        <span className="text-gradient">Into Revenue</span>
                    </h1>
                    <p className="text-slate-300 text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
                        Automated client management. No manual follow-up required.
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
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 text-white">
                        What Our CRM Handles
                    </h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-2xl leading-relaxed">
                        Always-on revenue assistant that runs behind the scenes.
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
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white">
                                Why This <span className="text-gradient">Saves Money</span>
                            </h2>
                        </div>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            A <span className="font-semibold text-white">predictable ROI engine</span> that pays for itself quickly.
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
                            How This <span className="text-gradient">Drives Revenue</span>
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
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white">
                            Who This <span className="text-gradient">Is For</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-lg mb-8 max-w-2xl leading-relaxed">
                        Designed for serious growth, not hobby projects.
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
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 text-white leading-tight">
                        Stop losing leads.<br />
                        <span className="text-gradient">Automate your lifecycle.</span>
                    </h3>
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

            <CategoryPopup
                pageKey="crm"
                title="How many leads are you losing right now?"
                body="A CRM system ensures every inquiry is captured, followed up, and converted. Lost leads cost more than any system ever will."
                ctaText="Fix My Lead System"
                whatsappNumber="+3550689007252"
                whatsappMessage="I'd like to discuss how your CRM system can help my business save money and increase revenue."
                triggerType="scroll-or-exit"
                scrollThreshold={50}
            />
        </section>
    );
}
