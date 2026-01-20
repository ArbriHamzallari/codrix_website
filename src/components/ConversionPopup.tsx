'use client';

import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConversionPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const whatsappNumber = '+355682061862';
    const whatsappMessage = encodeURIComponent('I\'d like to discuss installing a revenue system for my business.');

    useEffect(() => {
        // Show popup after 3 seconds or when user scrolls 50% down
        const timer = setTimeout(() => {
            const hasSeenPopup = localStorage.getItem('codrix_popup_seen');
            if (!hasSeenPopup) {
                setIsOpen(true);
            }
        }, 3000);

        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            const hasSeenPopup = localStorage.getItem('codrix_popup_seen');
            
            if (scrollPercent > 50 && !hasSeenPopup && !isOpen) {
                setIsOpen(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('codrix_popup_seen', 'true');
        // Allow popup to show again after 7 days
        setTimeout(() => {
            localStorage.removeItem('codrix_popup_seen');
        }, 7 * 24 * 60 * 60 * 1000);
    };

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
        handleClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />
                    
                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="relative bg-dark-lighter border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl">
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="text-center">
                                <div className="mb-6 flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                                        <MessageCircle className="w-8 h-8 text-primary" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold font-heading text-white mb-3">
                                    Ready to Install Your System?
                                </h3>
                                
                                <p className="text-slate-300 mb-6 leading-relaxed">
                                    Let&apos;s discuss installing a revenue system that creates leverage for your business.
                                </p>

                                <button
                                    onClick={handleWhatsAppClick}
                                    className="w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all hover:scale-105 flex items-center justify-center gap-3 mb-4"
                                >
                                    <MessageCircle size={20} />
                                    Start on WhatsApp
                                </button>

                                <button
                                    onClick={handleClose}
                                    className="text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Maybe later
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
