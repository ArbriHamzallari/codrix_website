'use client';

import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CategoryPopupProps {
    pageKey: string; // Unique key for localStorage tracking
    title: string;
    body: string;
    ctaText: string;
    whatsappNumber: string;
    whatsappMessage: string;
    triggerType: 'timer' | 'scroll' | 'exit-intent' | 'timer-or-exit' | 'scroll-or-exit';
    timerDelay?: number; // in milliseconds
    scrollThreshold?: number; // percentage 0-100
}

export default function CategoryPopup({
    pageKey,
    title,
    body,
    ctaText,
    whatsappNumber,
    whatsappMessage,
    triggerType,
    timerDelay = 8000,
    scrollThreshold = 50,
}: CategoryPopupProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const storageKey = `codrix_popup_${pageKey}`;
        const hasSeenPopup = sessionStorage.getItem(storageKey);
        
        if (hasSeenPopup) {
            return; // Don't show popup if already shown this session
        }

        let timer: NodeJS.Timeout | null = null;
        let scrollHandler: (() => void) | null = null;
        let exitIntentHandler: ((e: MouseEvent) => void) | null = null;
        let mouseLeaveHandler: (() => void) | null = null;

        // Timer trigger
        if (triggerType === 'timer' || triggerType === 'timer-or-exit') {
            timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem(storageKey, 'true');
            }, timerDelay);
        }

        // Scroll trigger
        if (triggerType === 'scroll' || triggerType === 'scroll-or-exit') {
            scrollHandler = () => {
                const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                
                if (scrollPercent >= scrollThreshold && !isOpen) {
                    setIsOpen(true);
                    sessionStorage.setItem(storageKey, 'true');
                }
            };
            window.addEventListener('scroll', scrollHandler);
        }

        // Exit intent trigger
        if (triggerType === 'exit-intent' || triggerType === 'timer-or-exit' || triggerType === 'scroll-or-exit') {
            let lastY = 0;
            exitIntentHandler = (e: MouseEvent) => {
                // Exit intent: mouse moves upward toward browser chrome
                // Trigger when mouse is in top 2% of viewport and moving upward
                const currentY = e.clientY;
                const isMovingUp = currentY < lastY;
                
                if (currentY <= window.innerHeight * 0.02 && isMovingUp && !isOpen) {
                    setIsOpen(true);
                    sessionStorage.setItem(storageKey, 'true');
                }
                
                lastY = currentY;
            };
            document.addEventListener('mousemove', exitIntentHandler);
            
            // Also listen for mouseleave on document (browser-level exit)
            mouseLeaveHandler = () => {
                if (!isOpen) {
                    setIsOpen(true);
                    sessionStorage.setItem(storageKey, 'true');
                }
            };
            document.addEventListener('mouseleave', mouseLeaveHandler);
        }

        // Cleanup function
        return () => {
            if (timer) clearTimeout(timer);
            if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
            if (exitIntentHandler) document.removeEventListener('mousemove', exitIntentHandler);
            if (mouseLeaveHandler) document.removeEventListener('mouseleave', mouseLeaveHandler);
        };
    }, [pageKey, triggerType, timerDelay, scrollThreshold, isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        const storageKey = `codrix_popup_${pageKey}`;
        sessionStorage.setItem(storageKey, 'true');
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
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />
                    
                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div 
                            className="relative bg-dark-lighter border border-white/10 rounded-2xl p-10 max-w-lg w-full shadow-2xl pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={handleClose}
                                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="text-center">
                                <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 leading-tight">
                                    {title}
                                </h3>
                                
                                <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                                    {body}
                                </p>

                                <button
                                    onClick={handleWhatsAppClick}
                                    className="w-full px-8 py-5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all hover:scale-105 flex items-center justify-center gap-3 mb-4 text-lg"
                                >
                                    <MessageCircle size={22} />
                                    {ctaText}
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
