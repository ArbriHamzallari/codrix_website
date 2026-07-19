'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Linkedin, Instagram } from 'lucide-react';
import { getDict } from '@/i18n';

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en') ?? false;
  const dict = getDict(isEn ? 'en' : 'sq');

  return (
    <footer className="border-t border-surface-border py-14 px-4 sm:px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <Link href={isEn ? '/en' : '/'} className="flex items-center gap-2 mb-5">
          <div className="relative w-9 h-9 overflow-hidden rounded-lg">
            <Image src="/logo.png" alt="Codrix" fill className="object-cover" />
          </div>
          <span className="text-2xl font-bold font-heading tracking-tight text-white">Codrix</span>
        </Link>
        <p className="text-muted text-sm leading-relaxed mb-8 max-w-md">{dict.footer.tagline}</p>
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/codrix.al/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.linkedin.com/company/codrix-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>
        <p className="text-sm text-muted/70">
          © {new Date().getFullYear()} Codrix. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
