'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10" />
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 blur-[150px] rounded-full" />

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">
                    Ready to <span className="text-white">Transform</span> Your Online Presence?
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                    Let&apos;s build something extraordinary together. Schedule a free consultation today.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-slate-100 transition-colors shadow-lg hover:shadow-white/20"
                >
                    Let's Build Together <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
}
