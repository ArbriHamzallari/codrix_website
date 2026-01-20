'use client';

import { MessageCircle, CheckCircle2 } from 'lucide-react';

export default function CTA() {
    const whatsappNumber = '+355682061862';
    const whatsappMessage = encodeURIComponent('I\'m ready to discuss how Codrix can help grow my business.');

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    return (
        <section className="py-32 relative overflow-hidden bg-dark-lighter">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[150px] rounded-full" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 leading-tight">
                    Ready to Build <span className="text-gradient">Your System?</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                    Limited spots available. We work with businesses that are serious about growth.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <button
                        onClick={handleWhatsAppClick}
                        className="group relative px-10 py-5 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(79,110,247,0.5)] hover:scale-105 text-lg"
                    >
                        <span className="relative flex items-center gap-3">
                            <MessageCircle size={24} />
                            Start on WhatsApp
                        </span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
                    <div className="flex items-start gap-3 p-6 bg-white/5 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                            <div className="font-semibold text-white mb-1">No Commitment</div>
                            <div className="text-sm text-slate-400">Free consultation to discuss your project</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-6 bg-white/5 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                            <div className="font-semibold text-white mb-1">Fast Response</div>
                            <div className="text-sm text-slate-400">We respond within 24 hours</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-6 bg-white/5 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                            <div className="font-semibold text-white mb-1">Outcome-Focused</div>
                            <div className="text-sm text-slate-400">We build systems that drive results</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
