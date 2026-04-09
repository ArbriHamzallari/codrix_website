'use client';

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

export default function DiagnosticPanel() {
  const [state, handleSubmit] = useForm('xkopagyr');

  return (
    <section
      id="book"
      className="py-24 bg-dark relative overflow-hidden min-h-[480px] flex items-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Apply for Your Free AI Audit
          </h2>
          <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
            We review your current response setup and show you exactly how many leads you&apos;re losing — free, no
            commitment.
          </p>
          <p className="text-xs text-slate-500 mt-3 italic">
            We only take on a limited number of new clients each month.
          </p>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            We work with clinics, dental practices, salons, and service businesses globally. Tell us about yours.
          </p>
        </div>

        <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl p-6 sm:p-10">
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8 px-2"
            >
              <p className="text-xl font-semibold text-white mb-3">
                ✅ Request received. We&apos;ll reach out on WhatsApp within 24 hours.
              </p>
              <p className="text-slate-400 text-sm">Thank you — we&apos;ll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="audit-name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  id="audit-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-slate-600"
                  placeholder="Your full name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="audit-business" className="block text-sm font-medium text-slate-300 mb-2">
                  Type of Business
                </label>
                <input
                  id="audit-business"
                  type="text"
                  name="businessType"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-slate-600"
                  placeholder="e.g. Dental clinic, Salon, Restaurant..."
                />
                <ValidationError
                  prefix="Business"
                  field="businessType"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="audit-whatsapp" className="block text-sm font-medium text-slate-300 mb-2">
                  WhatsApp Number
                </label>
                <input
                  id="audit-whatsapp"
                  type="tel"
                  name="whatsapp"
                  required
                  autoComplete="tel"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-slate-600"
                  placeholder="+355 ..."
                />
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-slate-500">
                  <Lock className="w-3.5 h-3.5 shrink-0" aria-hidden />
                  <span>Never shared.</span>
                </div>
                <ValidationError
                  prefix="WhatsApp"
                  field="whatsapp"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <ValidationError errors={state.errors} className="text-red-400 text-sm" />

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative w-full py-4 rounded-lg font-bold text-sm bg-primary text-black hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden group"
              >
                <span className="absolute inset-0 rounded-lg bg-blue-500/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                Request My Free Audit
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
