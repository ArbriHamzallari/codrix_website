'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { User, Clock, Building2, TrendingDown, ArrowRight, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CalculatorData } from './LossCalculatorModal';

type Props = {
    isCalculatorOpen: boolean;
    onOpenCalculator: () => void;
    onCloseCalculator: () => void;
    calculatorData: CalculatorData;
    onCalculatorDataChange: (data: CalculatorData) => void;
    onCalculatorComplete: () => void;
};

export default function TimelineScenario({
    isCalculatorOpen,
    onOpenCalculator,
    onCloseCalculator,
    calculatorData,
    onCalculatorDataChange,
    onCalculatorComplete
}: Props) {
    // Calculate initial estimated loss for the "teaser" based on default data if desired, 
    // or keep the dramatic default ($12,400) until they calculate. 
    // Let's use the calculator logic to drive the teaser number DYNAMICALLY if they've interacted, 
    // otherwise default to a high-impact number for the narrative.

    // Logic mirror:
    // 1-3h (0.35) * 15 * 30 * 50 = 7875. 
    // Let's stick to a narrative default for the "Cost of Delay" section initially, 
    // but update it if they use the calculator.

    // Standard Narrative Default:
    // 5 leads/week (approx 1/day? No, wait text says "5 missed leads/week")
    // Let's just use the calculator state to drive the display. It's more honest.
    // Default state: 15/day, 50 avg, 35% loss = 7875.

    // Let's calculate the value to display
    const responseTimes = [
        { id: 'under_5', lossPct: 0.05 },
        { id: '5_30', lossPct: 0.18 },
        { id: '1_3', lossPct: 0.35 },
        { id: 'after_hours', lossPct: 0.55 },
        { id: 'next_day', lossPct: 0.72 },
    ];
    const currentRate = responseTimes.find(r => r.id === calculatorData.responseTime)?.lossPct || 0.35;
    const monthlyLoss = Math.round(calculatorData.dailyMessages * currentRate * 30 * calculatorData.avgValue);

    return (
        <section className="py-24 bg-dark-lighter relative border-b border-white/5 overflow-hidden">
            {/* Ambient Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-sm font-mono text-red-400 uppercase tracking-widest mb-3">
                        The Cost of Delay
                    </h2>
                    <p className="text-3xl md:text-5xl font-bold font-heading text-white">
                        Every missed call is a <span className="text-red-500">lost deal.</span>
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative mb-24">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-white/5 overflow-hidden">
                        <motion.div
                            initial={{ x: '-100%' }}
                            whileInView={{ x: '0%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "linear" }}
                            className="w-full h-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative">
                        <TimelineStep
                            icon={<User className="w-6 h-6 text-white" />}
                            title="Customer Inquiry"
                            time="10:00 AM"
                            description="Lead sends a high-intent message asking for pricing."
                            delay={0}
                        />
                        <TimelineStep
                            icon={<Clock className="w-6 h-6 text-orange-400" />}
                            title="Waiting..."
                            time="10:05 AM"
                            description="5 minutes pass. No response. Interest begins to fade."
                            highlight="animate-pulse text-orange-400"
                            delay={0.5}
                        />
                        <TimelineStep
                            icon={<Building2 className="w-6 h-6 text-blue-400" />}
                            title="Competitor Replies"
                            time="10:12 AM"
                            description="They get an instant answer from a competitor's system."
                            delay={1.0}
                        />
                        <TimelineStep
                            icon={<TrendingDown className="w-6 h-6 text-red-500" />}
                            title="Sale Lost"
                            time="10:15 AM"
                            description="Customer books with them. You lose the revenue forever."
                            isNegative
                            delay={1.5}
                        />
                    </div>
                </div>

                {/* Impact Counter */}
                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="text-center md:text-left">
                            <h3 className="text-slate-400 font-mono text-sm uppercase tracking-wider mb-2">
                                Estimated Monthly Lost Revenue
                            </h3>
                            <div className="flex items-baseline gap-1 justify-center md:justify-start">
                                <span className="text-4xl md:text-6xl font-bold text-white tracking-tight">€</span>
                                <Counter value={monthlyLoss} />
                            </div>
                            <p className="text-slate-500 text-sm mt-2">
                                Based on typical industry response rates.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <button
                                onClick={onOpenCalculator}
                                className="flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg shadow-red-900/20 group"
                            >
                                <Calculator className="w-5 h-5" />
                                <span>CALCULATE YOUR LOSS</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineStep({ icon, title, time, description, highlight, isNegative, delay }: { icon: React.ReactNode, title: string, time: string, description: string, highlight?: string, isNegative?: boolean, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center text-center relative"
        >
            <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 border transition-all duration-300 shadow-xl",
                isNegative
                    ? "bg-red-950/30 border-red-500/30 text-red-500 shadow-red-900/20"
                    : "bg-dark border-white/10 text-slate-300"
            )}>
                {icon}
                {/* Dot on line */}
                <div className={cn(
                    "absolute -top-[34px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-dark hidden md:block",
                    isNegative ? "bg-red-500" : "bg-slate-600"
                )} />
            </div>

            <span className="text-xs font-mono text-slate-500 mb-2">{time}</span>
            <h3 className={cn("text-lg font-bold mb-3", highlight || "text-white")}>
                {title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">
                {description}
            </p>
        </motion.div>
    );
}

function Counter({ value }: { value: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    return (
        <motion.span ref={ref} className="text-4xl md:text-6xl font-bold text-white tracking-tight tabular-nums">
            {display}
        </motion.span>
    );
}
