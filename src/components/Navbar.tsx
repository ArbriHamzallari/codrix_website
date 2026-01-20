'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappNumber = '+355682061862';
    const whatsappMessage = encodeURIComponent('I\'d like to discuss installing a revenue system for my business.');

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Systems', href: '/systems' },
        { name: 'CRM', href: '/crm' },
        { name: 'AI Agents', href: '/ai-agents' },
        { name: 'Marketing', href: '/marketing' },
        { name: 'Websites', href: '/websites' },
        { name: 'Shadow Operator', href: '/shadow-operator' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                scrolled
                    ? 'bg-dark/80 backdrop-blur-md border-white/5 py-4'
                    : 'bg-transparent border-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 overflow-hidden">
                            <Image
                                src="/logo.jpg"
                                alt="Codrix Logo"
                                fill
                                className="object-cover object-center rounded-lg"
                            />
                        </div>
                        <span className="text-xl font-bold font-heading tracking-tight text-white group-hover:text-primary transition-colors">
                            Codrix
                        </span>
                    </Link>

                    {/* Desktop Nav */}
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
                            onClick={handleWhatsAppClick}
                            className="px-6 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-sm"
                        >
                            WhatsApp
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-300 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    'fixed inset-x-0 top-[70px] bg-dark/95 backdrop-blur-xl border-b border-white/5 lg:hidden transition-all duration-300 ease-in-out overflow-hidden',
                    isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
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
                        onClick={() => {
                            handleWhatsAppClick();
                            setIsOpen(false);
                        }}
                        className="mt-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors w-full flex items-center justify-center gap-2"
                    >
                        <MessageCircle size={18} />
                        WhatsApp
                    </button>
                </div>
            </div>
        </nav>
    );
}
