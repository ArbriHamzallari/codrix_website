'use client';

import { MessageCircle } from 'lucide-react';
import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';
import Reveal from '@/components/ui/Reveal';

function VerticalMarquee({ children, speed = 22 }: { children: ReactNode; speed?: number }) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden"
      style={{ '--duration': `${speed}s` } as CSSProperties}
    >
      <div className="flex shrink-0 flex-col animate-marquee-vertical">{children}</div>
      <div className="flex shrink-0 flex-col animate-marquee-vertical" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

export default function FinalCTA({ dict }: { dict: Dict }) {
  const c = dict.finalCta;
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Dims each business-name row as it drifts away from the marquee's
  // vertical center, so the item currently "in focus" reads as solid.
  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    let frame: number;
    const updateOpacity = () => {
      const items = container.querySelectorAll<HTMLElement>('.marquee-item');
      const rect = container.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const distance = Math.abs(centerY - (itemRect.top + itemRect.height / 2));
        const normalized = Math.min(distance / (rect.height / 2), 1);
        item.style.opacity = (1 - normalized * 0.75).toString();
      });
      frame = requestAnimationFrame(updateOpacity);
    };
    frame = requestAnimationFrame(updateOpacity);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="kontakt"
      className="section-y px-6 sm:px-8 lg:px-16 border-t border-border overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left (desktop): who it's for — the business verticals Biseda serves,
            reusing the real labels already used in the live demo picker
            (dict.demo.businesses) rather than inventing new copy. Text-heavy
            and decorative, so it's dropped on mobile in favor of the CTA. */}
        <Reveal
          delay={0.2}
          className="relative hidden lg:flex h-[520px] items-center justify-center order-2 lg:order-1"
        >
          <div ref={marqueeRef} className="relative w-full h-full">
            <VerticalMarquee>
              {dict.demo.businesses.map((b) => (
                <div
                  key={b.id}
                  className="marquee-item py-8 text-4xl xl:text-5xl font-heading font-light tracking-tight text-ink text-center"
                >
                  {b.label}
                </div>
              ))}
            </VerticalMarquee>
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/70 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>
        </Reveal>

        {/* Right: the actual close — headline, one line, one primary CTA. */}
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-2">
          <Reveal>
            <h2 className="type-h2 font-heading text-ink mb-5 text-balance">{c.title}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-lead text-ink-muted mb-10">{c.subtitle}</p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href={whatsappUrl(dict.nav.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-sm bg-whatsapp px-8 py-4 text-lg font-medium text-white hover:brightness-110 transition-all shadow-cta"
            >
              <MessageCircle className="w-5 h-5" />
              {c.cta}
            </a>
            <a
              href="#cmimet"
              className="inline-flex items-center justify-center rounded-sm border border-border bg-white px-8 py-4 text-lg font-medium text-ink hover:border-ink/30 transition-colors"
            >
              {c.secondaryCta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
