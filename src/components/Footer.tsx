import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-white/[0.08] py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <Link href="/" className="flex items-center gap-2 mb-5">
          <div className="relative w-9 h-9 overflow-hidden rounded-lg">
            <Image src="/logo.png" alt="Codrix Logo" fill className="object-cover" />
          </div>
          <span className="text-2xl font-bold font-heading tracking-tight text-white uppercase">Codrix</span>
        </Link>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
          AI Response Systems for Local Businesses Worldwide
        </p>
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/codrix.al/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.linkedin.com/company/codrix-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>
        <p className="text-sm text-slate-500">© 2026 Codrix. All rights reserved.</p>
      </div>
    </footer>
  );
}
