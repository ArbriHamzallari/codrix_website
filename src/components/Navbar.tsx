'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getDict } from '@/i18n';
import { BrandLockup } from '@/components/BrandLockup';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-[72px]">
          <Link href={isEn ? '/en' : '/'} className="flex items-center">
            <BrandLockup size={30} textClassName="text-base" />
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {dict.nav.links.map((link) => {
              const id = link.href.split('#')[1];
              const isActive = id && active === id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-[15px] transition-colors',
                    isActive ? 'text-ink font-medium' : 'text-ink-muted hover:text-ink'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              href={isEn ? '/' : '/en'}
              className="text-[15px] text-ink-muted hover:text-ink transition-colors"
              aria-label={isEn ? 'Kalo në shqip' : 'Switch to English'}
            >
              {isEn ? 'SQ' : 'EN'}
            </Link>
            <Link
              href="/#demo"
              className="inline-flex items-center rounded-sm bg-primary px-5 h-11 text-[15px] font-medium text-white hover:bg-primary-hover transition-colors"
            >
              {dict.nav.cta}
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden text-ink-muted hover:text-ink transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-background border-t border-border',
          isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 border-transparent'
        )}
      >
        <div className="flex flex-col gap-1 px-8 pb-6 pt-4">
          {dict.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="type-body text-ink-muted hover:text-ink transition-colors py-2.5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={isEn ? '/' : '/en'}
            onClick={() => setIsOpen(false)}
            className="type-body text-ink-muted hover:text-ink transition-colors py-2.5"
          >
            {isEn ? 'Shqip' : 'English'}
          </Link>
          <Link
            href="/#demo"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-sm bg-primary h-11 text-[15px] font-medium text-white"
          >
            {dict.nav.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
