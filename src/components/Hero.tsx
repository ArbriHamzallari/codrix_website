'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import ChatSimulation from './ChatSimulation';
import { INDUSTRIES, getIndustry } from '@/data/industries';
import { cn } from '@/lib/utils';
import LossCalculatorModal from './LossCalculatorModal';

export default function Hero() {
    const [selectedIndustryId, setSelectedIndustryId] = useState<string | null>(null);
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Initialize from session storage or default only after mount
    useEffect(() => {
        setMounted(true);
        const stored = sessionStorage.getItem('codrix_industry');
        if (stored) {
            setSelectedIndustryId(stored);
        } else {
            // Optional: Don't set a default visual selection, but chat needs one.
            // We can leave it null and let chat default to 'Restaurant' internally or set one here.
            // Requirement says "No default selected" for the cards, so we keep null.
            // But we might want the chat to start with something?
            // Let's default chat/metrics to Restaurant but keep selection visual null if desired.
            // Actually, for "The visitor must feel the site recognized their business", 
            // maybe we just start with Restaurant data but don't highlight the card?
        }
    }, []);

    const handleIndustrySelect = (id: string) => {
        setSelectedIndustryId(id);
        sessionStorage.setItem('codrix_industry', id);
    };

    const activeIndustry = getIndustry(selectedIndustryId);

    // If no selection, we show Restaurant data but don't highlight the chip
    const displayIndustry = selectedIndustryId ? activeIndustry : INDUSTRIES[0];

    const handleScrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center border-b border-surface-border bg-background bg-grid overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start pt-12 md:pt-20">

                    {/* Left: Control Panel Content */}
                    <div className="flex flex-col gap-10 max-w-2xl">

                        {/* Headline Group */}
                        <div className="flex flex-col gap-6">
                            <div className="space-y-2">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[0.9] tracking-tight text-white uppercase">
                                    MISSING CALLS<br />IS <span className="text-primary">BURNING MONEY.</span>
                                </h1>
                                <p className="text-xl text-slate-400 font-light pt-4">
                                    We install AI agents that answer instantly, 24/7.
                                </p>
                            </div>

                            {/* Industry Identity Selector */}
                            <div className="py-8 border-y border-white/5 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <Building2 className="text-primary w-5 h-5" />
                                    </div>
                                    <span className="text-lg font-medium text-white tracking-wide">
                                        What type of business do you run?
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {INDUSTRIES.map((ind) => {
                                        const Icon = ind.icon;
                                        const isSelected = selectedIndustryId === ind.id;
                                        return (
                                            <button
                                                key={ind.id}
                                                onClick={() => handleIndustrySelect(ind.id)}
                                                className={cn(
                                                    "flex items-center gap-2 px-4 py-3 rounded-full border transition-all duration-300 text-sm font-medium",
                                                    isSelected
                                                        ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(59,130,246,0.4)] scale-105"
                                                        : "bg-surface border-surface-border text-slate-400 hover:border-white/20 hover:text-white hover:bg-white/5"
                                                )}
                                            >
                                                <Icon size={16} />
                                                {ind.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={() => setIsCalculatorOpen(true)}
                                    className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-sm hover:brightness-110 hover:scale-[1.02] transition-all duration-150 shadow-glow"
                                >
                                    CALCULATE LOST REVENUE
                                </button>
                                <span className="text-xs text-slate-500 font-mono pl-1">
                                    Based on {selectedIndustryId ? selectedIndustryId : 'your'} industry data
                                </span>
                            </div>

                            <button
                                onClick={handleScrollToServices}
                                className="px-8 py-4 bg-transparent border border-surface-border text-slate-300 font-medium text-lg rounded-sm hover:text-white hover:border-white/20 hover:scale-[1.02] transition-all duration-150 flex items-center justify-center h-[60px]"
                            >
                                HOW IT WORKS
                            </button>
                        </div>

                        {/* Trust Metrics - Dynamic based on Industry */}
                        <div className="grid grid-cols-3 gap-4 mobile-grid md:flex md:gap-8">
                            {displayIndustry.metrics.map((metric, idx) => {
                                const Icon = metric.icon;
                                return (
                                    <div key={idx} className="flex flex-col gap-1 min-w-[100px]">
                                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider truncate">
                                            {metric.label}
                                        </span>
                                        <div className="flex items-center gap-2 text-white font-medium">
                                            <Icon size={16} className={metric.color} />
                                            <span>{metric.value}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Simulation */}
                    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20" />
                        <ChatSimulation industry={displayIndustry} key={displayIndustry.id} />
                    </div>

                </div>
            </div>

            <LossCalculatorModal
                isOpen={isCalculatorOpen}
                onClose={() => setIsCalculatorOpen(false)}
                initialIndustryId={selectedIndustryId || 'Restaurant'}
                // We leave initialData partial, the modal will handle merging with industry defaults
                initialData={{
                    businessType: selectedIndustryId || 'Restaurant',
                    dailyMessages: 5, // will act as seed but modal logic should prefer industry default if possible or we pass it explicitly
                    avgValue: activeIndustry.calculatorDefaults.avgValue,
                    responseTime: activeIndustry.calculatorDefaults.responseTime
                }}
                onDataChange={() => { }}
                onComplete={() => { }}
            />
        </section>
    );
}
