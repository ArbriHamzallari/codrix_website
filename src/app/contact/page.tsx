'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    
    const whatsappNumber = '+355682061862';
    const whatsappMessage = encodeURIComponent('I\'d like to discuss installing a revenue system for my business.');

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="min-h-screen pt-32 pb-20 bg-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 tracking-tight">
                        Install <span className="text-gradient">Your System</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        We work with serious businesses who understand leverage.
                    </p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-8 flex justify-center"
                    >
                        <button
                            onClick={handleWhatsAppClick}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20"
                        >
                            <MessageCircle size={20} />
                            Start on WhatsApp (Recommended)
                        </button>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-dark-lighter p-8 rounded-2xl border border-white/5">
                            <h3 className="text-2xl font-bold font-heading mb-6 text-white">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Email Us</h4>
                                        <p className="text-slate-400">info@codrix.org</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Call Us</h4>
                                        <p className="text-slate-400">+355 68 206 1862</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Location</h4>
                                        <p className="text-slate-400">Tirana, Albania </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white">
                            <h3 className="text-2xl font-bold font-heading mb-4">Limited Capacity</h3>
                            <p className="mb-6 opacity-90 leading-relaxed">
                                Accepting new installations for Q1 2026.
                            </p>
                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={20} />
                                Start on WhatsApp
                            </button>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-dark-lighter p-8 rounded-2xl border border-white/5"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white resize-none"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3 text-green-400">
                                    <CheckCircle2 size={20} />
                                    <p>Message sent successfully! We&apos;ll get back to you shortly.</p>
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-400">
                                    <AlertCircle size={20} />
                                    <p>{errorMessage}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        Sending... <Loader2 size={20} className="animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Now <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
