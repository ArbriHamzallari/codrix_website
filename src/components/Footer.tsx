import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-lighter border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                                <Image
                                    src="/logo.jpg"
                                    alt="Codrix Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold font-heading text-white">Codrix</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Premium website development for ambitious businesses in worldwide.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 font-heading">Services</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">E-Commerce</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 font-heading">Company</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Our Work</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Process</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 font-heading">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="https://www.instagram.com/codrix.solutions/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {currentYear} Codrix Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
