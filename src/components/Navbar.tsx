'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

    const navLinks = [
        { name: 'Services', href: '/#services' },
        { name: 'Work', href: '/#work' },
        { name: 'Process', href: '/#process' },
        { name: 'Contact', href: '/contact', primary: true },
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
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-white',
                                    link.primary
                                        ? 'px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30'
                                        : 'text-slate-300'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-300 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    'fixed inset-x-0 top-[70px] bg-dark/95 backdrop-blur-xl border-b border-white/5 md:hidden transition-all duration-300 ease-in-out overflow-hidden',
                    isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                )}
            >
                <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                'text-lg font-medium transition-colors w-full text-center py-2',
                                link.primary
                                    ? 'text-primary'
                                    : 'text-slate-300 hover:text-white'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
