'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const whatsappNumber = '+3550689007252';
  const whatsappMessage = encodeURIComponent(
    "I'd like to discuss installing a revenue system for my business."
  );

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Results', href: '/#results' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'backdrop-blur-md bg-black/60 border-b border-white/[0.06] py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden">
              <Image
                src="/logo.png"
                alt="Codrix Logo"
                fill
                className="object-cover object-center rounded-lg"
              />
            </div>
            <span className="text-xl font-bold font-heading tracking-tight text-white group-hover:text-primary transition-colors">
              Codrix
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="px-6 py-2.5 rounded-full bg-primary text-black font-medium hover:brightness-110 transition-all text-sm"
            >
              WhatsApp
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-x-0 top-[65px] bg-black/95 backdrop-blur-xl border-b border-white/[0.06] lg:hidden transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-6 space-y-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white transition-colors w-full text-center py-2"
            >
              {link.name}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              handleWhatsAppClick();
              setIsOpen(false);
            }}
            className="mt-2 px-8 py-3 rounded-full bg-primary text-black font-medium hover:brightness-110 transition-colors w-full flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>
        </div>
      </div>
    </nav>
  );
}
