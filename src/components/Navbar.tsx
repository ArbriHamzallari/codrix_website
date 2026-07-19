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
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en') ?? false;
  const dict = getDict(isEn ? 'en' : 'sq');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const waHref = whatsappUrl(dict.nav.whatsappMessage);

  return (
    <nav className="fixed top-3 inset-x-3 sm:inset-x-6 z-50">
      <div className="max-w-7xl mx-auto rounded-2xl border border-surface-border bg-surface/85 backdrop-blur-xl px-4 sm:px-6 py-3 shadow-card">
        <div className="flex items-center justify-between">
          <Link href={isEn ? '/en' : '/'} className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 overflow-hidden rounded-lg">
              <Image src="/logo.png" alt="Codrix" fill className="object-cover object-center" />
            </div>
            <span className="text-lg font-bold font-heading tracking-tight text-white">
              Codrix
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {dict.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={isEn ? '/' : '/en'}
              className="text-sm font-medium text-muted hover:text-white transition-colors"
              aria-label={isEn ? 'Shqip' : 'English'}
            >
              {isEn ? 'SQ' : 'EN'}
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors shadow-cta"
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
              className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition-colors"
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
