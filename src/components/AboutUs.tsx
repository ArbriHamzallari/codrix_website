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
                I&apos;m Arbri Hamzallari, and I built Codrix because I kept seeing the same problem everywhere. A
                patient messages a clinic at 10pm. A customer DMs a restaurant on Instagram. Nobody replies until
                morning, and by then they&apos;ve already gone somewhere else.
              </p>
              <p>
                That&apos;s not a technology problem. That&apos;s lost revenue, every single day, for businesses that
                are actually great at what they do.
              </p>
              <p>
                Codrix is an AI automation startup. We build and install intelligent response agents that handle the
                first conversation with your customers instantly, on the channels they already use. WhatsApp, Instagram,
                web chat. No delays, no missed messages, no hiring someone to sit on their phone all night.
              </p>
              <p>
                I started this in Albania because this is where I saw the gap first. Local clinics, dental practices,
                service businesses, they all had the same blind spot. The service was excellent but the response time
                was killing them. So I built something that fixes it.
              </p>
              <p>
                We are now working with businesses across Europe, and we&apos;re growing fast. But the mindset
                hasn&apos;t changed. Every client we onboard, we treat like a partner. We don&apos;t hand you a chatbot
                and disappear. We make sure your customers feel like they&apos;re talking to someone who cares, before
                you even see the notification.
              </p>
            </div>
            <p className="text-lg md:text-xl font-medium text-primary leading-snug pt-2">
              Albania is where we started. It&apos;s not where we stop. The opportunity for AI-powered business
              automation is massive, and we&apos;re building Codrix to lead that wave, starting from the ground up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
