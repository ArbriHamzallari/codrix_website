'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getDict, whatsappUrl } from '@/i18n';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en') ?? false;
  const dict = getDict(isEn ? 'en' : 'sq');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section in view.
  useEffect(() => {
    const ids = dict.nav.links
      .map((l) => l.href.split('#')[1])
      .filter(Boolean) as string[];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [dict.nav.links]);

  const waHref = whatsappUrl(dict.nav.whatsappMessage);

  return (
    <nav className="fixed top-3 inset-x-3 sm:inset-x-6 z-50">
      <div
        className={cn(
          'max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300',
          scrolled
            ? 'border border-surface-border bg-surface/85 backdrop-blur-xl shadow-soft-lg'
            : 'border border-transparent bg-surface/40 backdrop-blur-md'
        )}
      >
        <div className="flex items-center justify-between">
          <Link href={isEn ? '/en' : '/'} className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 overflow-hidden rounded-lg">
              <Image src="/logo.png" alt="Codrix" fill className="object-cover object-center" />
            </div>
            <span className="text-lg font-bold font-heading tracking-tight text-white">Codrix</span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {dict.nav.links.map((link) => {
              const id = link.href.split('#')[1];
              const isActive = id && active === id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    isActive ? 'text-white' : 'text-muted hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={isEn ? '/' : '/en'}
              className="text-sm font-medium text-muted hover:text-white transition-colors border border-surface-border rounded-full px-2.5 py-1"
              aria-label={isEn ? 'Kalo në shqip' : 'Switch to English'}
            >
              {isEn ? 'SQ' : 'EN'}
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-whatsapp text-white text-sm font-semibold hover:brightness-110 transition-all shadow-cta lift press"
            >
              <MessageCircle className="w-4 h-4" />
              {dict.nav.cta}
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden text-muted hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-[480px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col gap-1 pb-2">
            {dict.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted hover:text-white transition-colors py-2.5 text-center rounded-lg hover:bg-surface-hover"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={isEn ? '/' : '/en'}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-muted hover:text-white transition-colors py-2.5 text-center rounded-lg hover:bg-surface-hover"
            >
              {isEn ? 'Shqip' : 'English'}
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-whatsapp text-white font-semibold hover:brightness-110 transition-colors"
            >
              <MessageCircle size={18} />
              {dict.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
