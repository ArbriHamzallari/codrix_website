'use client';

// ... imports
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle2, MoreHorizontal, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Industry, Message } from '@/data/industries';

// Helper: Random integer between min and max
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Helper: Calculate typing duration based on text length
const getTypingDuration = (text: string) => {
    const charDelay = randomInt(30, 60); // Slightly faster for responsiveness
    // Clamp between 300ms and 1500ms
    return Math.max(300, Math.min(1500, text.length * charDelay));
};

type Props = {
    industry: Industry;
};

export default function ChatSimulation({ industry }: Props) {
    const [scenario, setScenario] = useState<'lost' | 'won'>('lost');
    const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
    const [showRevenue, setShowRevenue] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [isSimulating, setIsSimulating] = useState(true); // New loading state for industry validation
    const containerRef = useRef<HTMLDivElement>(null);
    const componentRef = useRef<HTMLDivElement>(null);

    // Helper to wait
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // Visibility Trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.55 }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    // Main Simulation Loop
    useEffect(() => {
        if (!hasStarted) return;

        let isCancelled = false;

        const processMessage = async (msg: Message) => {
            if (isCancelled) return;

            // 1. Determine "Think" or "Gap" delay
            let gapDelay = 0;
            if (msg.sender === 'user') {
                gapDelay = randomInt(800, 1500);
            } else if (msg.sender === 'business') {
                gapDelay = randomInt(4000, 8000); // reduced slightly for demo pace
            } else if (msg.sender === 'ai') {
                gapDelay = randomInt(400, 800);
            }

            await wait(gapDelay);
            if (isCancelled) return;

            // 2. Typing Indicator (Only for Business or AI)
            if (msg.sender !== 'user') {
                setIsTyping(true);
                const typingDuration = getTypingDuration(msg.text);
                await wait(typingDuration);
                setIsTyping(false);
            }

            if (isCancelled) return;
            setVisibleMessages(prev => [...prev, msg]);
        };

        const runSimulation = async () => {
            // Initial "Connecting to Industry" delay
            setIsSimulating(true);
            setVisibleMessages([]);
            setShowRevenue(false);

            await wait(randomInt(400, 900)); // The "generating" delay requested
            if (isCancelled) return;

            setIsSimulating(false);

            // Start loop
            while (!isCancelled) {
                // --- CYCLE START: MANUAL / LOST ---
                setScenario('lost');
                setVisibleMessages([]);
                setShowRevenue(false);
                setIsTyping(false);

                const lostMessages = industry.chatScenarios.lost;
                for (let i = 0; i < lostMessages.length; i++) {
                    if (isCancelled) return;
                    await processMessage(lostMessages[i]);
                }

                await wait(2500);

                // --- RESET ---
                if (isCancelled) return;
                setVisibleMessages([]);
                setIsTyping(false);
                await wait(600);

                // --- CYCLE START: AI / WON ---
                setScenario('won');
                setShowRevenue(false);

                const wonMessages = industry.chatScenarios.won;
                for (let i = 0; i < wonMessages.length; i++) {
                    if (isCancelled) return;
                    await processMessage(wonMessages[i]);
                }

                // --- SHOW REVENUE EVENT ---
                if (isCancelled) return;
                await wait(500);
                setShowRevenue(true);

                await wait(4000); // linger a bit longer on success

                // --- HIDE REVENUE EVENT ---
                if (isCancelled) return;
                setShowRevenue(false);

                await wait(1000);
            }
        };

        runSimulation();

        return () => { isCancelled = true; };
    }, [hasStarted, industry]); // Re-run when industry changes


    // Auto-scroll
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [visibleMessages, isTyping]);

    return (
        <div ref={componentRef} className="w-full max-w-md mx-auto bg-surface border border-surface-border rounded-xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-surface-hover px-4 py-3 border-b border-surface-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={cn(
                        "w-2.5 h-2.5 rounded-full animate-pulse transition-colors duration-500",
                        scenario === 'lost' ? "bg-red-500" : "bg-emerald-500"
                    )} />
                    <div>
                        <div className="text-sm font-medium text-white transition-all duration-300">
                            {scenario === 'lost' ? 'Manual Response' : `${industry.label} AI Agent`}
                        </div>
                        <div className="text-xs text-slate-400 flex items-center gap-1">
                            {scenario === 'lost' ? <Clock size={10} /> : <CheckCircle2 size={10} />}
                            <span className="transition-all duration-300">
                                {scenario === 'lost' ? 'Avg response: 8h 12m' : 'Instant response'}
                            </span>
                        </div>
                    </div>
                </div>
                <MoreHorizontal size={16} className="text-slate-500" />
            </div>

            {/* Chat Container */}
            <div className="relative h-[320px] bg-[#0A0C10] overflow-hidden">

                {/* Loading State Overlay */}
                <AnimatePresence>
                    {isSimulating && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-30 bg-[#0A0C10]/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3"
                        >
                            <Loader2 className="w-8 h-8 text-primary animate-spin" />
                            <p className="text-xs text-slate-400 font-mono animate-pulse">
                                Simulating messages for {industry.label}...
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Messages Layer */}
                <div
                    ref={containerRef}
                    className="absolute inset-0 p-4 flex flex-col gap-3 overflow-y-auto scrollbar-hide scroll-smooth"
                >
                    <AnimatePresence initial={false}>
                        {visibleMessages.map((msg) => (
                            <ChatMessage key={msg.id} message={msg} />
                        ))}
                    </AnimatePresence>

                    {/* Typing Indicator Bubble */}
                    <AnimatePresence>
                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: -10 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-surface text-slate-400 self-start p-3 rounded-xl rounded-tl-none border border-surface-border w-12 flex items-center justify-center gap-1"
                            >
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* System Event Layer */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-20 flex justify-center">
                    <AnimatePresence>
                        {showRevenue && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shadow-2xl shadow-emerald-500/10 backdrop-blur-md"
                            >
                                ✅ REVENUE SECURED
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Fail State Indicator (Only for lost scenario manual logic, or could be part of messages. 
                    User asked strictly for Revenue Event logic. I will leave the FAIL state as part of the message thread variant 'error' visual 
                    or add a small specific overlay if needed, but the Revenue Event is the key request.) 
                */}
            </div>
        </div>
    );
}

function ChatMessage({ message }: { message: Message }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: message.sender === 'user' ? -10 : 10, y: 5 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            className={cn(
                "max-w-[85%] p-3 rounded-xl text-sm leading-snug shadow-sm",
                message.sender === 'user'
                    ? "bg-surface-hover text-slate-200 self-start rounded-tl-none border border-surface-border"
                    : message.variant === 'error'
                        ? "bg-red-950/20 text-red-200 self-end rounded-tr-none border border-red-500/20"
                        : message.variant === 'success'
                            ? "bg-primary/10 text-primary-foreground self-end rounded-tr-none border border-primary/20"
                            : "bg-surface text-slate-300 self-end rounded-tr-none border border-surface-border"
            )}
        >
            <div className="mb-1">{message.text}</div>
            <div className="text-[10px] opacity-50 text-right">{message.time}</div>
        </motion.div>
    );
}
