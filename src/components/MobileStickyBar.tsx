'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';

export default function MobileStickyBar({ dict }: { dict: Dict }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] sm:hidden bg-cream/95 backdrop-blur-md border-t border-border px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <a
        href={whatsappUrl(dict.nav.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-medium py-3 rounded-sm text-sm"
      >
        <MessageCircle className="w-4 h-4" />
        {dict.sticky.label}
      </a>
    </div>
  );
}
