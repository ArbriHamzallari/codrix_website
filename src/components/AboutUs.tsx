'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center sm:text-left sm:items-start sm:flex-row gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto sm:mx-0 h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] shrink-0 rounded-full overflow-hidden border border-white/10 shadow-lg ring-2 ring-white/5 bg-white/5"
          >
            <Image
              src="/arbri-hamzallari.jpg"
              alt="Arbri Hamzallari, founder of Codrix"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 140px, 160px"
              priority={false}
            />
          </motion.div>
          <div className="flex-1 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight"
            >
              Built by a Founder Who Saw the Problem Firsthand
            </motion.h2>
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                I&apos;m Arbri Hamzallari, the founder of Codrix. I started this as a solo founder after watching
                local businesses — clinics, dental practices, restaurants — lose customers every single day simply
                because nobody replied fast enough. A message comes in at 10pm. The business opens at 9am. The client
                already booked somewhere else.
              </p>
              <p>
                Codrix exists to fix that. We install AI response systems that handle the first conversation —
                instantly, 24/7 — so business owners can focus on delivering great service instead of managing their
                inbox.
              </p>
              <p>
                We started in Albania. We now work with clinics and service businesses across Europe. We&apos;re a
                small team moving fast — and every client we take on, we treat like it&apos;s our own business.
              </p>
            </div>
            <p className="text-lg md:text-xl font-medium text-primary leading-snug pt-2">
              We don&apos;t just set up bots. We make sure your clients feel heard — before you even pick up the phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
