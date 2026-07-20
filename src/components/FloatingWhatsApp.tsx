'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';
import { cn } from '@/lib/utils';

/**
 * Persistent WhatsApp entry point on the bottom-right, desktop only.
 * Mobile uses MobileStickyBar instead, so this is hidden below `sm`.
 */
export default function FloatingWhatsApp({ dict }: { dict: Dict }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl(dict.nav.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.sticky.label}
      className={cn(
        'hidden sm:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-cta transition-all duration-300 hover:brightness-110 hover:scale-105',
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
