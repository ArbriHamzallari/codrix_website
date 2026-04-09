'use client';

import { useEffect, useState } from 'react';

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] sm:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <button
        type="button"
        onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full bg-primary text-black font-bold py-3 rounded-xl text-sm"
      >
        Get Your Free Audit →
      </button>
    </div>
  );
}
