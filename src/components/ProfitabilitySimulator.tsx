'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store, Building2, Activity, Dumbbell, Scissors, ShoppingBag, HelpCircle, AlertTriangle, ArrowRight, CheckCircle2, TrendingUp, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CalculatorData } from './LossCalculatorModal';
import CountUp from './ui/CountUp';

// Shared types and constants
const businessTypes = [
    { id: 'Restaurant', icon: <Store className="w-4 h-4" />, defaultValue: 50 },
    { id: 'Real Estate', icon: <Building2 className="w-4 h-4" />, defaultValue: 5000 },
    { id: 'Clinic', icon: <Activity className="w-4 h-4" />, defaultValue: 150 },
    { id: 'Gym', icon: <Dumbbell className="w-4 h-4" />, defaultValue: 60 },
    { id: 'Salon', icon: <Scissors className="w-4 h-4" />, defaultValue: 80 },
    { id: 'Ecommerce', icon: <ShoppingBag className="w-4 h-4" />, defaultValue: 120 },
    { id: 'Other', icon: <HelpCircle className="w-4 h-4" />, defaultValue: 100 },
];

const responseTimes = [
    { id: 'under_5', label: '< 5 min', lossPct: 0.05 },
    { id: '5_30', label: '5–30 min', lossPct: 0.18 },
    { id: '1_3', label: '1–3 hours', lossPct: 0.35 },
    { id: 'after_hours', label: 'After hours', lossPct: 0.55 },
    { id: 'next_day', label: 'Next day', lossPct: 0.72 },
];

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        price: 199,
        recoveryRate: 0.60,
        features: ['AI Responses (Email/SMS)', 'Basic Scheduling', 'Business Hours Only'],
        maxVolume: 20
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 349,
        recoveryRate: 0.70,
        features: ['Multichannel AI (Insta/FB)', 'CRM Integration', '24/7 Response'],
        maxVolume: 60
    },
    {
        id: 'advanced',
        name: 'Advanced',
        price: 599,
        recoveryRate: 0.80,
        features: ['Custom Workflows', 'Priority Support', 'Full Dashboard Access'],
        maxVolume: 9999
    }
];

type Props = {
    initialData: CalculatorData;
    onOpenBooking: () => void;
};

export default function ProfitabilitySimulator({ initialData, onOpenBooking }: Props) {
    const [data, setData] = useState<CalculatorData>(initialData);

    // Derived Calculations
    const currentResponseTime = responseTimes.find(rt => rt.id === data.responseTime) || responseTimes[2];
    const missedPercentage = currentResponseTime.lossPct;
    const dailyLostLeads = Math.round(data.dailyMessages * missedPercentage);
    const monthlyLostRevenue = dailyLostLeads * data.avgValue * 30;

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
    };

    // Determine recommended plan based on volume
    const recommendedPlanId = data.dailyMessages < 20 ? 'starter' : data.dailyMessages < 60 ? 'pro' : 'advanced';

    return (
        <section className="py-24 bg-dark-lighter relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-primary/5 blur-[150px] pointer-events-none rounded-full opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Estimate Your <span className="text-emerald-400">Monthly Gain</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        See how much revenue an automated response system could recover for your business.
                    </p>
                </div>

                {/* Main Simulator Container */}
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">

                    {/* Input Panel */}
                    <div className="p-6 md:p-8 border-b border-white/10 bg-white/[0.02]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">

                            {/* Business Type */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Business Type</label>
                                <div className="relative">
                                    <select
                                        value={data.businessType}
                                        onChange={(e) => {
                                            const type = businessTypes.find(t => t.id === e.target.value);
                                            setData(prev => ({ ...prev, businessType: e.target.value, avgValue: type?.defaultValue || prev.avgValue }));
                                        }}
                                        className="w-full bg-dark border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-primary/50 focus:outline-none appearance-none cursor-pointer"
                                    >
                                        {businessTypes.map(t => (
                                            <option key={t.id} value={t.id} className="bg-slate-900 text-white">{t.id}</option>
                                        ))}
                                    </select>
                                    <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                </div>
                            </div>

                            {/* Daily Inquiries */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex justify-between">
                                    Daily Inquiries
                                    <span className="text-white font-mono">{data.dailyMessages}</span>
                                </label>
                                <input
                                    type="range"
                                    min="5"
                                    max="150"
                                    step="5"
                                    value={data.dailyMessages}
                                    onChange={(e) => setData({ ...data, dailyMessages: parseInt(e.target.value) })}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary-light"
                                />
                            </div>

                            {/* Avg Value */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Avg Customer Value (€)</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">€</span>
                                    <input
                                        type="number"
                                        value={data.avgValue}
                                        onChange={(e) => setData({ ...data, avgValue: parseInt(e.target.value) || 0 })}
                                        className="w-full bg-dark border border-white/10 rounded-lg px-3 pl-7 py-2.5 text-white focus:border-primary/50 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Response Speed */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Speed</label>
                                <div className="relative">
                                    <select
                                        value={data.responseTime}
                                        onChange={(e) => setData({ ...data, responseTime: e.target.value })}
                                        className="w-full bg-dark border border-white/10 rounded-lg px-3 py-2.5 text-white focus:border-primary/50 focus:outline-none appearance-none cursor-pointer"
                                    >
                                        {responseTimes.map(rt => (
                                            <option key={rt.id} value={rt.id} className="bg-slate-900 text-white">{rt.label}</option>
                                        ))}
                                    </select>
                                    <Activity className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Plans Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                        {plans.map((plan) => {
                            const isRecommended = plan.id === recommendedPlanId;

                            // Realism & Logic
                            // Base potential recovered revenue for this plan
                            const baseRecovered = monthlyLostRevenue * plan.recoveryRate;

                            // Apply realism factors
                            const minRecovery = baseRecovered * 0.55;
                            const maxRecovery = baseRecovered * 0.75;
                            const typicalRecovery = baseRecovered * 0.65;

                            // Net Gains
                            const minProfit = minRecovery - plan.price;
                            const maxProfit = maxRecovery - plan.price;
                            const typicalProfit = typicalRecovery - plan.price;

                            const isLowRoi = typicalProfit < 300;

                            return (
                                <div key={plan.id} className={cn(
                                    "p-6 md:p-8 relative flex flex-col transition-all duration-300",
                                    isRecommended ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                                )}>
                                    {isRecommended && (
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />
                                    )}

                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                                            <div className="text-sm text-slate-400 font-mono">€{plan.price}/mo</div>
                                        </div>
                                        {isRecommended && (
                                            <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">
                                                Best Fit
                                            </span>
                                        )}
                                    </div>

                                    {/* Financial Outcome */}
                                    <div className="mb-8 p-4 rounded-xl bg-black/20 border border-white/5 relative overflow-hidden group">
                                        {/* Background Glow */}
                                        {isRecommended && !isLowRoi && (
                                            <div className="absolute -inset-1 bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        )}

                                        {isLowRoi ? (
                                            <div className="text-center py-2">
                                                <div className="text-amber-400 mb-2 flex justify-center"><Info className="w-5 h-5" /></div>
                                                <p className="text-sm text-slate-300 leading-relaxed">
                                                    You might not need a full system yet — but a short audit will confirm and prevent missed opportunities.
                                                </p>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Estimated Monthly Profit</div>
                                                <div className="text-3xl font-bold text-white mb-1 tracking-tight text-emerald-400">
                                                    <CountUp value={typicalProfit} prefix="~€" duration={0.5} />
                                                </div>
                                                <div className="text-[10px] text-slate-500 leading-tight">
                                                    Usually between <span className="text-slate-400"><CountUp value={minProfit} prefix="€" duration={0.5} /></span> and <span className="text-slate-400"><CountUp value={maxProfit} prefix="€" duration={0.5} /></span> depending on season and demand.
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500/50 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Recommendation Justification */}
                                    {isRecommended && (
                                        <div className="mb-6 text-xs text-slate-500 italic border-t border-white/5 pt-4">
                                            "{plan.id === 'starter' ? "Best for growing businesses with manageable volume." :
                                                plan.id === 'pro' ? "Ideal for established businesses needing faster processing." :
                                                    "Maximum power for high-volume operations."}"
                                        </div>
                                    )}

                                    {/* Action */}
                                    <button
                                        onClick={onOpenBooking}
                                        className={cn(
                                            "w-full py-3 rounded-lg font-bold text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group",
                                            isRecommended
                                                ? "bg-primary text-black hover:brightness-110 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                                : "bg-white/5 text-white hover:bg-white/10"
                                        )}
                                    >
                                        Validate these numbers live
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-slate-500">
                        *Estimates are based on industry averages for {data.businessType.toLowerCase()} businesses. Actual results may vary.
                    </p>
                </div>

            </div>
        </section>
    );
}
