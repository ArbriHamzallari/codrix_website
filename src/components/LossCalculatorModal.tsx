'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, useInView } from 'framer-motion';
import { X, Trophy, AlertTriangle, ArrowRight, Building2, Store, Activity, Dumbbell, Scissors, ShoppingBag, HelpCircle, CheckCircle2, TrendingDown, Clock, ShieldCheck, FileText } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
import { cn } from '@/lib/utils';

export type CalculatorData = {
    businessType: string;
    dailyMessages: number;
    avgValue: number;
    responseTime: string;
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    initialData: CalculatorData; // We can still use this as optional seed
    initialIndustryId?: string | null;
    onDataChange: (data: CalculatorData) => void;
    onComplete: () => void;
};

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
    { id: 'under_5', label: 'Under 5 minutes', lossPct: 0.05 },
    { id: '5_30', label: '5–30 minutes', lossPct: 0.18 },
    { id: '1_3', label: '1–3 hours', lossPct: 0.35 },
    { id: 'after_hours', label: 'After business hours', lossPct: 0.55 },
    { id: 'next_day', label: 'Next day', lossPct: 0.72 },
];

// ... businessTypes array can remain or be filtered but we'll map ID to preselect

export default function LossCalculatorModal({ isOpen, onClose, initialData, initialIndustryId, onDataChange, onComplete }: Props) {
    const [data, setData] = useState<CalculatorData>(initialData); // Will initialize once
    const [step, setStep] = useState<'input' | 'result' | 'booking'>('input');
    const [scrollY, setScrollY] = useState(0);

    // Sync with external industry change if modal is re-opened or props change significantly
    useEffect(() => {
        if (isOpen && initialIndustryId) {
            // Find if this industry exists in our local list to get default value
            const industryType = businessTypes.find(t => t.id === initialIndustryId);
            if (industryType) {
                setData(prev => ({
                    ...prev,
                    businessType: initialIndustryId,
                    // Only update value if it looks like default or user hasn't heavily modified it? 
                    // For now, let's respect the prop passed in initialData which comes from Hero activeIndustry
                    avgValue: initialData.avgValue || industryType.defaultValue
                }));
            }
        }
    }, [isOpen, initialIndustryId, initialData.avgValue]);

    // Update parent when local state changes
    useEffect(() => {
        onDataChange(data);
    }, [data, onDataChange]);

    // Scroll Locking
    useEffect(() => {
        if (isOpen) {
            const scrollPos = window.scrollY;
            setScrollY(scrollPos);
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPos}px`;
            document.body.style.width = '100%';
        } else {
            const scrollPos = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollPos || '0') * -1);
            // Reset step on close
            setTimeout(() => setStep('input'), 500);
        }
    }, [isOpen]);

    // Format currency
    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
    };

    // Calculation Logic
    const currentResponseTime = responseTimes.find(rt => rt.id === data.responseTime) || responseTimes[2]; // Default 1-3h
    const missedPercentage = currentResponseTime.lossPct;
    const dailyLostLeads = Math.round(data.dailyMessages * missedPercentage);
    const monthlyLostLeads = dailyLostLeads * 30;
    const monthlyLostRevenue = monthlyLostLeads * data.avgValue;
    const automatedRecoveryLow = Math.round(monthlyLostRevenue * 0.6);
    const automatedRecoveryHigh = Math.round(monthlyLostRevenue * 0.8);

    const handleBusinessTypeChange = (typeId: string) => {
        const type = businessTypes.find(t => t.id === typeId);
        setData(prev => ({
            ...prev,
            businessType: typeId,
            avgValue: type?.defaultValue || prev.avgValue
        }));
    };

    const handleInputComplete = () => {
        setStep('result');
        // onComplete(); // Trigger any external completion logic if needed, but not scrolling anymore
    };

    const handleBookingStart = () => {
        setStep('booking');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto"
                    >
                        {/* Modal Card */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className={cn(
                                "bg-dark border border-white/10 rounded-2xl w-full shadow-2xl overflow-hidden relative transition-all duration-500 my-auto",
                                step === 'booking' ? "max-w-5xl max-h-[95vh] sm:max-h-[85vh] overflow-y-auto" : "max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
                            )}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/5 bg-white/5 sticky top-0 z-20 bg-dark/95 backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                                        step === 'booking' ? "bg-primary/10 text-primary" : "bg-red-500/10 text-red-500"
                                    )}>
                                        {step === 'booking' ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                                            {step === 'input' && "Revenue Leakage Diagnostic"}
                                            {step === 'result' && "Diagnostic Results"}
                                            {step === 'booking' && "Schedule Your Audit"}
                                        </h3>
                                        <p className="text-xs text-slate-500 font-mono">
                                            {step === 'input' && "ESTIMATOR TOOL v1.0"}
                                            {step === 'result' && "CONFIDENTIAL REPORT"}
                                            {step === 'booking' && "FINAL STEP"}
                                        </p>
                                    </div>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="relative">
                                {/* Wizard Content Switcher */}
                                {step === 'input' && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        {/* Left: Inputs */}
                                        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 border-b lg:border-b-0 lg:border-r border-white/5">
                                            {/* ... Inputs ... */}
                                            {/* Step 1: Business Type */}
                                            <div className="space-y-3">
                                                <label className="text-sm font-semibold text-slate-300 uppercase tracking-wide">1. Business Type</label>
                                                <div className="flex flex-wrap gap-2">
                                                    {businessTypes.map(type => (
                                                        <button
                                                            key={type.id}
                                                            onClick={() => handleBusinessTypeChange(type.id)}
                                                            className={cn(
                                                                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all border",
                                                                data.businessType === type.id
                                                                    ? "bg-primary text-black border-primary font-bold shadow-lg shadow-primary/20"
                                                                    : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20"
                                                            )}
                                                        >
                                                            {type.icon}
                                                            {type.id}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Step 2: Daily Messages */}
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center">
                                                    <label className="text-sm font-semibold text-slate-300 uppercase tracking-wide">2. Daily Inquiries</label>
                                                    <span className="text-2xl font-bold text-white font-mono">{data.dailyMessages}</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="5"
                                                    max="200"
                                                    step="5"
                                                    value={data.dailyMessages}
                                                    onChange={(e) => setData({ ...data, dailyMessages: parseInt(e.target.value) })}
                                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary-light transition-all"
                                                />
                                                <div className="flex justify-between text-xs text-slate-500 font-mono">
                                                    <span>5</span>
                                                    <span>100</span>
                                                    <span>200+</span>
                                                </div>
                                            </div>

                                            {/* Step 3: Average Value */}
                                            <div className="space-y-3">
                                                <label className="text-sm font-semibold text-slate-300 uppercase tracking-wide">3. Avg. Customer Value (€)</label>
                                                <div className="relative group">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">€</span>
                                                    <input
                                                        type="number"
                                                        value={data.avgValue}
                                                        onChange={(e) => setData({ ...data, avgValue: parseInt(e.target.value) || 0 })}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 pl-8 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-mono"
                                                    />
                                                </div>
                                            </div>

                                            {/* Step 4: Response Time */}
                                            <div className="space-y-3">
                                                <label className="text-sm font-semibold text-slate-300 uppercase tracking-wide">4. Typical Response Time</label>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {responseTimes.map(rt => (
                                                        <button
                                                            key={rt.id}
                                                            onClick={() => setData({ ...data, responseTime: rt.id })}
                                                            className={cn(
                                                                "px-4 py-3 rounded-xl text-sm text-left transition-all border relative overflow-hidden",
                                                                data.responseTime === rt.id
                                                                    ? "bg-red-500/10 border-red-500/50 text-white shadow-lg shadow-red-900/20"
                                                                    : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20"
                                                            )}
                                                        >
                                                            <span className="relative z-10 font-medium">{rt.label}</span>
                                                            {data.responseTime === rt.id && (
                                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right: Results Preview */}
                                        <div className="bg-black/20 p-4 sm:p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

                                            <div className="relative z-10 space-y-8">
                                                <div>
                                                    <p className="text-slate-400 mb-2 font-mono text-sm">POTENTIAL GROSS LOSS</p>
                                                    <div className="flex items-baseline gap-1 text-red-500">
                                                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                                                            <AnimatedCounter value={monthlyLostRevenue} />
                                                        </span>
                                                        <span className="text-xl font-bold opacity-60">/mo</span>
                                                    </div>
                                                </div>

                                                <div className="space-y-4 pt-8 border-t border-white/5">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-slate-400 text-sm">Missed opportunities / day</span>
                                                        <span className="text-white font-mono font-bold bg-white/5 px-2 py-1 rounded">
                                                            {dailyLostLeads} <span className="text-slate-500 text-xs font-normal">({Math.round(missedPercentage * 100)}%)</span>
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-slate-400 text-sm">Missed opportunities / month</span>
                                                        <span className="text-white font-mono font-bold bg-white/5 px-2 py-1 rounded">
                                                            {monthlyLostLeads}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4 pt-4">
                                                    <button onClick={handleInputComplete} className="flex-1 py-4 bg-primary text-black font-bold rounded-lg hover:brightness-110 transition-all text-sm md:text-base shadow-[0_0_20px_rgba(59,130,246,0.4)] animate-pulse hover:animate-none">
                                                        SEE THE SOLUTION
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 'result' && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="p-4 sm:p-8 md:p-12 text-center max-w-2xl mx-auto"
                                    >
                                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-red-500">
                                            <TrendingDown className="w-10 h-10" />
                                        </div>

                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                                            Your business may be missing approximately <span className="text-red-500">{formatCurrency(monthlyLostRevenue)}/mo</span>
                                        </h2>

                                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                            We verify this live and show exactly where the leaks are in your current process.
                                            <br />An automated system typically recovers <span className="text-green-400 font-bold">{formatCurrency(automatedRecoveryLow)} - {formatCurrency(automatedRecoveryHigh)}</span> of this.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                                                <Clock className="w-5 h-5 text-primary shrink-0" />
                                                <span className="text-sm text-slate-300">Takes 30 minutes</span>
                                            </div>
                                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                                                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                                                <span className="text-sm text-slate-300">No commitment</span>
                                            </div>
                                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                                                <FileText className="w-5 h-5 text-primary shrink-0" />
                                                <span className="text-sm text-slate-300">Written Action Plan</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleBookingStart}
                                            className="w-full md:w-auto px-12 py-5 bg-primary text-black font-bold text-lg rounded-xl hover:brightness-110 hover:scale-105 transition-all shadow-glow"
                                        >
                                            CONTINUE TO SCHEDULING
                                        </button>
                                    </motion.div>
                                )}

                                {step === 'booking' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full bg-white relative"
                                    >
                                        <div className="absolute inset-0 z-0 flex items-center justify-center text-slate-400">
                                            Loading Calendar...
                                        </div>
                                        <div className="relative z-10 h-full">
                                            <InlineWidget
                                                url="https://calendly.com/codrix-solutions-audit/1-1-free-audit"
                                                styles={{ height: '100%', width: '100%' }}
                                                prefill={{
                                                    customAnswers: {
                                                        a1: `Business: ${data.businessType}`,
                                                        a2: `Monthly Potential Loss: ${formatCurrency(monthlyLostRevenue)}`,
                                                        a3: `Daily Inquiries: ${data.dailyMessages}`,
                                                        a4: `Response Time: ${data.responseTime}`,
                                                    }
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

function AnimatedCounter({ value }: { value: number }) {
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) =>
        new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.round(current))
    );

    useEffect(() => {
        spring.set(value);
    }, [value, spring]);

    return <motion.span>{display}</motion.span>;
}
