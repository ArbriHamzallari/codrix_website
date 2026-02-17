'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, Terminal, Globe, Mail, MessageSquare, Phone, Instagram, Send, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { InlineWidget } from 'react-calendly';

type Step = 'info' | 'channels' | 'schedule';

export default function DiagnosticPanel() {
    const [step, setStep] = useState<Step>('info');
    const [formData, setFormData] = useState({
        businessName: '',
        website: '',
        channels: [] as string[]
    });

    const steps = [
        { id: 'info', label: 'Business Profile' },
        { id: 'channels', label: 'Leakage Points' },
        { id: 'schedule', label: 'System Audit' }
    ];

    const channels = [
        { id: 'email', label: 'Email Inquiries', icon: Mail },
        { id: 'phone', label: 'Missed Calls', icon: Phone },
        { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
        { id: 'instagram', label: 'Instagram DM', icon: Instagram },
        { id: 'other', label: 'Other/Manual', icon: Terminal },
    ];

    const toggleChannel = (id: string) => {
        setFormData(prev => ({
            ...prev,
            channels: prev.channels.includes(id)
                ? prev.channels.filter(c => c !== id)
                : [...prev.channels, id]
        }));
    };

    const handleNext = () => {
        if (step === 'info') setStep('channels');
        else if (step === 'channels') setStep('schedule');
    };

    // Send audit data when reaching the schedule step
    useEffect(() => {
        if (step === 'schedule') {
            const sendAuditData = async () => {
                try {
                    await fetch('/api/audit', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            businessName: formData.businessName,
                            website: formData.website,
                            channels: formData.channels,
                            date: new Date().toISOString()
                        })
                    });
                } catch (error) {
                    console.error('Failed to capture lead:', error);
                }
            };
            sendAuditData();
        }
    }, [step, formData]);

    const [sessionId, setSessionId] = useState('');

    useEffect(() => {
        setSessionId(Math.random().toString(36).substr(2, 9).toUpperCase());
    }, []);

    return (
        <section className="py-24 bg-dark relative overflow-hidden min-h-[800px] flex items-center">
            {/* Background Tech Ambience */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary mb-6">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        SYSTEM INITIALIZATION
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
                        Initialize <span className="text-gradient">System Audit</span>
                    </h2>
                    <p className="text-slate-400 max-w-lg mx-auto">
                        Identify revenue leaks and operational bottlenecks.
                    </p>
                </div>

                {/* Main Panel */}
                <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl relative">

                    {/* Top Bar / Progress */}
                    <div className="border-b border-white/10 bg-white/5 px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                            <Terminal size={14} />
                            <span>diagnostic_tool_v1.0</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {steps.map((s, i) => {
                                const isActive = s.id === step;
                                const isCompleted = steps.findIndex(st => st.id === step) > i;

                                return (
                                    <div key={s.id} className="flex items-center gap-2">
                                        <div className={cn(
                                            "w-2 h-2 rounded-full transition-all duration-300",
                                            isActive ? "bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]" :
                                                isCompleted ? "bg-emerald-500" : "bg-white/10"
                                        )} />
                                        {i < steps.length - 1 && <div className="w-4 h-[1px] bg-white/10" />}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 md:p-12 min-h-[400px] relative">
                        <AnimatePresence mode="wait">

                            {/* STEP 1: BUSINESS INFO */}
                            {step === 'info' && (
                                <motion.div
                                    key="info"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-2">
                                        <label className="text-sm font-mono text-slate-400 uppercase tracking-wider">Business Identity</label>
                                        <input
                                            type="text"
                                            placeholder="Business Name"
                                            value={formData.businessName}
                                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white text-lg focus:border-primary/50 focus:outline-none transition-all placeholder:text-slate-600"
                                            autoFocus
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-mono text-slate-400 uppercase tracking-wider">Digital Presence (Optional)</label>
                                        <div className="relative">
                                            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                            <input
                                                type="text"
                                                placeholder="website.com"
                                                value={formData.website}
                                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-4 text-white text-lg focus:border-primary/50 focus:outline-none transition-all placeholder:text-slate-600 font-mono"
                                            />
                                        </div>
                                    </div>
                                    <div className="pt-4 flex justify-end">
                                        <button
                                            onClick={handleNext}
                                            disabled={!formData.businessName}
                                            className="group flex items-center gap-3 px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Next Step
                                            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 2: CHANNELS */}
                            {step === 'channels' && (
                                <motion.div
                                    key="channels"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="text-center md:text-left mb-6">
                                        <h3 className="text-xl font-bold text-white mb-2">Communication Infrastructure</h3>
                                        <p className="text-slate-400 text-sm">Select active channels where operational drag occurs.</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {channels.map((channel) => {
                                            const isSelected = formData.channels.includes(channel.id);
                                            const Icon = channel.icon;
                                            return (
                                                <button
                                                    key={channel.id}
                                                    onClick={() => toggleChannel(channel.id)}
                                                    className={cn(
                                                        "flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left",
                                                        isSelected
                                                            ? "bg-primary/10 border-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                                                            : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:border-white/10"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                                                        isSelected ? "bg-primary text-black" : "bg-white/5 text-slate-500"
                                                    )}>
                                                        <Icon size={20} />
                                                    </div>
                                                    <span className="font-medium">{channel.label}</span>
                                                    {isSelected && <CheckCircle2 size={18} className="ml-auto text-primary" />}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="pt-6 flex justify-between items-center border-t border-white/5 mt-4">
                                        <button onClick={() => setStep('info')} className="text-slate-500 hover:text-white transition-colors text-sm">
                                            Back
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="group flex items-center gap-3 px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-all"
                                        >
                                            Start Analysis
                                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3: SCHEDULE */}
                            {step === 'schedule' && (
                                <motion.div
                                    key="schedule"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col"
                                >
                                    <div className="flex items-center gap-3 mb-6 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl text-emerald-400">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Ready for Review</p>
                                            <p className="text-xs opacity-80">Initial data captured. Schedule engineer review.</p>
                                        </div>
                                    </div>

                                    <div className="flex-1 bg-white rounded-xl overflow-hidden min-h-[500px] border border-white/10 relative">
                                        {/* Embed Calendly directly here for seamless flow */}
                                        <InlineWidget
                                            url="https://calendly.com/codrix-solutions-audit/1-1-free-audit"
                                            styles={{ height: '100%', width: '100%', minHeight: '500px' }}
                                            prefill={{
                                                name: formData.businessName,
                                                customAnswers: {
                                                    a1: `Business: ${formData.businessName}. Website: ${formData.website}. Channels: ${formData.channels.join(', ')}`
                                                }
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-12">
                    {step !== 'schedule' ? (
                        <p className="text-xs text-slate-500 font-mono">
                            SESSION ID: {sessionId || 'INITIALIZING...'} • SECURE CONNECTION
                        </p>
                    ) : (
                        <p className="text-xs text-slate-500">
                            No-obligation technical audit. 30 minutes. High impact.
                        </p>
                    )}
                </div>

            </div>
        </section>
    );
}
