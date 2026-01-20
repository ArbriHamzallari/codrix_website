'use client';

import { motion } from 'framer-motion';
import { Globe, MessageCircle, CheckCircle2, X, Layout, Zap, TrendingUp, Target, DollarSign, Phone } from 'lucide-react';
import CategoryPopup from '@/components/CategoryPopup';

export default function Websites() {
    const whatsappNumber = '+3550689007252';
    const phoneNumber = '+3550689007252';
    
    const handleContactClick = () => {
        const whatsappMessage = encodeURIComponent('I want to discuss building a website that works as revenue infrastructure for my business.');
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    const handlePhoneClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`, '_self');
    };

    const problemPoints = [
        'Visitors arrive and leave',
        'No clear direction',
        'No system behind the site',
        'No follow-up',
        'No data'
    ];

    const whatWeBuild = [
        {
            icon: Layout,
            title: 'Conversion Architecture',
            description: 'Page structure designed to guide decisions'
        },
        {
            icon: Zap,
            title: 'CRM and AI Integration',
            description: 'Every visitor becomes a tracked opportunity'
        },
        {
            icon: TrendingUp,
            title: 'Automation Ready',
            description: 'Bookings, forms, and follow-ups work automatically'
        },
        {
            icon: Target,
            title: 'Premium Brand Positioning',
            description: 'Your business looks established, credible, and serious'
        }
    ];

    const businessImpact = [
        'More leads captured',
        'Higher conversion rates',
        'Fewer missed opportunities',
        'Less manual follow-up',
        'Stronger first impressions',
        'Higher trust from clients'
    ];

    const howWeWork = [
        'We do not sell cheap websites',
        'We do not build standalone pages',
        'We only build when a system is required',
        'Our websites are designed to support long-term growth'
    ];

    const whoIsFor = [
        'Clinics and service businesses',
        'Hotels and hospitality brands',
        'Founders building serious brands',
        'Creators monetizing attention'
    ];

    const whoIsNotFor = [
        'One-page brochure sites',
        'Low-budget projects',
        'Businesses without growth intent',
        'Anyone looking for quick fixes'
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
                        Websites Built as<br />
                        <span className="text-gradient">Revenue Infrastructure</span>
                    </h1>
                    <p className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-16">
                        Systems engineered to convert attention into clients.
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
                            Discuss My Website
                        </button>
                    </motion.div>
                </motion.div>

                {/* The Real Problem */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-24"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-16 text-white text-center leading-tight">
                        Most Websites<br />
                        <span className="text-primary">Lose Money</span>
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-8 mt-12">
                        {problemPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-slate-300 text-2xl md:text-3xl font-light">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-white text-3xl md:text-4xl font-semibold">
                            Wasted opportunity.
                        </p>
                    </div>
                </motion.div>

                {/* Our Philosophy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-24"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        How We <span className="text-gradient">Approach</span> Websites
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8 text-center">
                        <p className="text-slate-300 text-xl md:text-2xl font-light leading-relaxed">
                            We build websites as part of a larger operating system.
                        </p>
                        <div className="pt-8 space-y-6">
                            <p className="text-white text-3xl md:text-4xl font-semibold">
                                Every page moves visitors closer to a <span className="text-gradient">business outcome</span>.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* What We Build */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-24"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        What a <span className="text-gradient">Codrix Website</span> Includes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whatWeBuild.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                    className="p-10 bg-dark-lighter rounded-2xl border-2 border-white/10 hover:border-primary/50 transition-all"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 bg-primary/20 rounded-xl flex-shrink-0">
                                            <IconComponent className="w-8 h-8 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-300 text-xl leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Business Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-24"
                >
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-12 rounded-3xl border-2 border-primary/30">
                        <div className="flex items-center gap-4 mb-8 justify-center">
                            <DollarSign className="w-10 h-10 text-primary" />
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white text-center leading-tight">
                                How This <span className="text-gradient">Pays for Itself</span>
                            </h2>
                        </div>
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            {businessImpact.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                    <p className="text-white text-xl md:text-2xl font-semibold">
                                        {point}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-white text-3xl md:text-4xl font-bold leading-tight">
                                The website as a <span className="text-gradient">compounding asset</span>.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Pricing Psychology */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="mb-24"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        How We <span className="text-gradient">Work</span>
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {howWeWork.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-slate-300 text-2xl md:text-3xl font-light">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Who This Is For */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mb-24"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        Who This <span className="text-gradient">Is For</span>
                    </h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whoIsFor.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                                className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10"
                            >
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <p className="text-slate-300 text-xl">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Who This Is Not For */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="mb-24"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        Who This <span className="text-primary">Is Not For</span>
                    </h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whoIsNotFor.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                                className="flex items-center gap-4 p-6 bg-red-500/5 rounded-xl border border-red-500/20"
                            >
                                <X className="w-6 h-6 text-red-400 flex-shrink-0" />
                                <p className="text-slate-300 text-xl">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="text-center p-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border-2 border-primary/20"
                >
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-12 text-white leading-tight">
                        Build a Website<br />
                        That <span className="text-gradient">Actually Works</span>
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <button
                            onClick={handleContactClick}
                            className="inline-flex items-center gap-3 px-12 py-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 text-xl"
                        >
                            <Globe size={24} />
                            Apply for a Website System
                        </button>
                        <button
                            onClick={handlePhoneClick}
                            className="inline-flex items-center gap-3 px-12 py-6 text-white font-semibold hover:text-primary transition-colors border-2 border-white/20 hover:border-primary/50 rounded-full text-xl"
                        >
                            <Phone size={24} />
                            {phoneNumber}
                        </button>
                    </div>
                </motion.div>
            </div>

            <CategoryPopup
                pageKey="websites"
                title="Is your website actually making you money?"
                body="A premium website should convert visitors into leads automatically. Most sites never do."
                ctaText="Turn My Website Into an Asset"
                whatsappNumber="+3550689007252"
                whatsappMessage="I want to discuss building a website that works as revenue infrastructure for my business."
                triggerType="scroll-or-exit"
                scrollThreshold={60}
            />
        </section>
    );
}
