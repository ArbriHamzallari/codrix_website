'use client';

import { motion } from 'framer-motion';
import { UserCheck, MessageCircle, CheckCircle2, X, Settings, DollarSign, Zap, Users, Target, Lock } from 'lucide-react';

export default function ShadowOperator() {
    const whatsappNumber = '+3550689007252';
    const phoneNumber = '+3550689007252';
    
    const handleApplyClick = () => {
        const whatsappMessage = encodeURIComponent('I am interested in applying for the Shadow Operator Program. I have an existing audience and am serious about building something real.');
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    const whatWeHandle = [
        {
            icon: Settings,
            title: 'Business Infrastructure',
            description: 'Websites, funnels, payments, and client systems'
        },
        {
            icon: DollarSign,
            title: 'Monetization Strategy',
            description: 'Offers, pricing logic, and conversion flows'
        },
        {
            icon: Zap,
            title: 'AI and Automation',
            description: 'AI agents, CRM systems, follow-ups, and scaling logic'
        },
        {
            icon: Users,
            title: 'Operations',
            description: 'Client handling, onboarding, delivery systems'
        }
    ];

    const partnershipPoints = [
        'You bring the audience and authority',
        'We build and operate the system',
        'Revenue is shared',
        'Incentives are aligned',
        'Both sides win only when revenue is generated'
    ];

    const structurePoints = [
        'We do not charge setup fees',
        'We do not sell packages',
        'We only partner when upside exists',
        'We invest time, systems, and capital into the partnership'
    ];

    const whoIsFor = [
        'Creators with an existing audience',
        'Experts with trust and authority',
        'Founders with distribution but no systems',
        'Operators who want leverage instead of workload'
    ];

    const whoIsNotFor = [
        'Beginners with no audience',
        'People looking for quick wins',
        'Anyone expecting guaranteed results',
        'Anyone unwilling to collaborate long-term'
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
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading mb-8 tracking-tight leading-tight">
                        Shadow Operator<br />
                        <span className="text-gradient">Program</span>
                    </h1>
                    <p className="text-slate-300 text-2xl md:text-3xl max-w-4xl mx-auto font-light leading-relaxed mb-6">
                        You build the audience. We build and operate the business.
                    </p>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-light mb-12">
                        This is a private partnership for creators and operators who want leverage, not more work.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <button
                            onClick={handleApplyClick}
                            className="inline-flex items-center gap-3 px-12 py-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 text-xl"
                        >
                            <UserCheck size={24} />
                            Apply for Consideration
                        </button>
                    </motion.div>
                </motion.div>

                {/* What This Is */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        What a <span className="text-gradient">Shadow Operator</span> Is
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-8 text-center">
                        <p className="text-slate-300 text-2xl md:text-3xl font-light leading-relaxed">
                            A Shadow Operator builds and runs the systems behind a personal brand or audience.
                        </p>
                        <p className="text-slate-300 text-2xl md:text-3xl font-light leading-relaxed">
                            We handle monetization, infrastructure, automation, and operations.
                        </p>
                        <div className="pt-8 space-y-6">
                            <p className="text-white text-3xl md:text-4xl font-semibold">
                                You focus on <span className="text-gradient">visibility</span>.
                            </p>
                            <p className="text-white text-3xl md:text-4xl font-semibold">
                                We focus on turning <span className="text-primary">attention into revenue</span>.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* What We Handle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        What We Operate<br />
                        <span className="text-gradient">Behind the Scenes</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {whatWeHandle.map((item, index) => {
                            const IconComponent = item.icon;
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
                    <p className="text-center text-white text-3xl md:text-4xl font-semibold">
                        Everything required to turn an audience into a business.
                    </p>
                </motion.div>

                {/* How the Partnership Works */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        How the <span className="text-gradient">Partnership</span> Works
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {partnershipPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-slate-300 text-2xl md:text-3xl font-light">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Pricing Psychology */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-24"
                >
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-12 rounded-3xl border-2 border-primary/30">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-12 text-white text-center leading-tight">
                            How This Is <span className="text-gradient">Structured</span>
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-8">
                            {structurePoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <p className="text-white text-2xl md:text-3xl font-semibold">
                                        {point}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-12 text-center space-y-6">
                            <p className="text-white text-3xl md:text-4xl font-bold leading-tight">
                                This model only makes sense when revenue potential is high.
                            </p>
                            <p className="text-white text-3xl md:text-4xl font-bold leading-tight">
                                That is why <span className="text-gradient">access is limited</span>.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Who This Is For */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        Who This <span className="text-gradient">Is For</span>
                    </h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whoIsFor.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
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
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-12 text-white text-center leading-tight">
                        Who This <span className="text-primary">Is Not For</span>
                    </h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whoIsNotFor.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                                className="flex items-center gap-4 p-6 bg-red-500/5 rounded-xl border border-red-500/20"
                            >
                                <X className="w-6 h-6 text-red-400 flex-shrink-0" />
                                <p className="text-slate-300 text-xl">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Exclusivity Signal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="mb-24"
                >
                    <div className="bg-dark-lighter p-12 rounded-3xl border-2 border-white/10">
                        <div className="flex items-center gap-4 mb-8 justify-center">
                            <Lock className="w-10 h-10 text-primary" />
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white text-center leading-tight">
                                <span className="text-gradient">Limited Capacity</span>
                            </h2>
                        </div>
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <p className="text-slate-300 text-2xl md:text-3xl font-light leading-relaxed">
                                We only accept a small number of partners at a time.
                            </p>
                            <p className="text-slate-300 text-2xl md:text-3xl font-light leading-relaxed">
                                Each partnership requires deep involvement and long-term thinking.
                            </p>
                            <p className="text-white text-3xl md:text-4xl font-semibold leading-tight mt-8">
                                If you are accepted, it is because we believe the upside justifies the investment.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="text-center p-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border-2 border-primary/20"
                >
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-12 text-white leading-tight">
                        Apply Only If You Are<br />
                        <span className="text-gradient">Serious About Building</span><br />
                        Something Real.
                    </h3>
                    <button
                        onClick={handleApplyClick}
                        className="inline-flex items-center gap-3 px-12 py-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 text-xl"
                    >
                        <UserCheck size={24} />
                        Apply for Consideration
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
