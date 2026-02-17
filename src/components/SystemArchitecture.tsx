'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, MessageCircle, Globe, Brain, Calendar, Database, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

// Node Data Definition
type NodeType = {
    id: string;
    label: string;
    icon: React.ReactNode;
    description: string;
    details: string[];
    type: 'input' | 'process' | 'output';
};

const nodes: NodeType[] = [
    // Inputs
    {
        id: 'instagram',
        label: 'Instagram',
        icon: <Instagram className="w-5 h-5" />,
        description: 'Captures DMs and comments directly from your social feed.',
        details: ['Auto-reply to DMs', 'Comment monitoring', 'Story mentions'],
        type: 'input'
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        icon: <MessageCircle className="w-5 h-5" />,
        description: 'Handles high-intent conversations on the world\'s most popular messenger.',
        details: ['Instant responses', 'Media handling', 'Voice note transcription'],
        type: 'input'
    },
    {
        id: 'website',
        label: 'Web Chat',
        icon: <Globe className="w-5 h-5" />,
        description: 'Engages website visitors the moment they land on your page.',
        details: ['Live visitor tracking', 'Proactive greeting', 'Page-specific context'],
        type: 'input'
    },
    // Brain
    {
        id: 'brain',
        label: 'AI Decision Layer',
        icon: <Brain className="w-8 h-8" />,
        description: 'The central intelligence that processes intent, qualifies leads, and directs flow.',
        details: ['Natural Language Processing', 'Intent Classification', 'Context Retention', 'Sentiment Analysis'],
        type: 'process'
    },
    // Outputs
    {
        id: 'booking',
        label: 'Booking',
        icon: <Calendar className="w-5 h-5" />,
        description: 'Automatically schedules appointments with qualified leads.',
        details: ['Calendar sync', 'Timezone handling', 'Reminders'],
        type: 'output'
    },
    {
        id: 'crm',
        label: 'CRM',
        icon: <Database className="w-5 h-5" />,
        description: 'Updates lead records and conversation history in real-time.',
        details: ['Auto-entry', 'Tagging & Scoring', 'Pipeline movement'],
        type: 'output'
    },
    {
        id: 'notify',
        label: 'Notifications',
        icon: <Bell className="w-5 h-5" />,
        description: 'Alerts your team only when human intervention is actually needed.',
        details: ['Escalation alerts', 'Daily summaries', 'Performance metrics'],
        type: 'output'
    }
];

export default function SystemArchitecture() {
    const [activeNode, setActiveNode] = useState<NodeType | null>(null);

    // Filter nodes for rendering
    const inputs = nodes.filter(n => n.type === 'input');
    const process = nodes.filter(n => n.type === 'process')[0];
    const outputs = nodes.filter(n => n.type === 'output');

    return (
        <section className="py-24 bg-background relative overflow-hidden border-b border-white/5">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-mono uppercase tracking-tighter text-white mb-4">
                        <span className="text-primary">///</span> System Architecture
                    </h2>
                    <p className="text-slate-500 font-mono text-sm max-w-xl">
                        VISUALIZING DATA FLOW: UNIFIED INGESTION → INTELLIGENT PROCESSING → ACTIONABLE OUTCOMES
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:min-h-[500px]">

                    {/* Main Diagram Area */}
                    <div className="lg:col-span-8 relative flex flex-col sm:flex-row items-center justify-between px-4 lg:px-12 py-8 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm min-h-[300px] sm:min-h-[400px] overflow-hidden">

                        {/* Connecting Lines (SVG Layer) — desktop only */}
                        <div className="absolute inset-0 pointer-events-none hidden sm:block">
                            <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" />
                                    </linearGradient>
                                </defs>

                                {/* Input -> Brain Lines */}
                                {inputs.map((input, i) => (
                                    <FlowLine
                                        key={`line-in-${i}`}
                                        startX={150} // 15%
                                        startY={100 + i * 150} // 20% + i*30% approx -> mapped to 500px height.
                                        // Wait, 3 inputs distributed:
                                        // 0: ~20% -> 100px
                                        // 1: ~50% -> 250px
                                        // 2: ~80% -> 400px
                                        endX={500} // 50%
                                        endY={250} // 50%
                                        active={activeNode?.id === input.id || activeNode?.id === 'brain'}
                                    />
                                ))}

                                {/* Brain -> Output Lines */}
                                {outputs.map((output, i) => (
                                    <FlowLine
                                        key={`line-out-${i}`}
                                        startX={500} // 50%
                                        startY={250} // 50%
                                        endX={850} // 85%
                                        endY={100 + i * 150} // Same distribution
                                        active={activeNode?.id === output.id || activeNode?.id === 'brain'}
                                    />
                                ))}
                            </svg>
                        </div>

                        {/* Mobile: vertical flow layout */}
                        <div className="flex flex-col items-center gap-0 w-full sm:hidden">
                            {/* Input Row */}
                            <div className="flex flex-row justify-center gap-4 relative z-10">
                                {inputs.map((node) => (
                                    <NodeCard
                                        key={node.id}
                                        node={node}
                                        isActive={activeNode?.id === node.id}
                                        onHover={setActiveNode}
                                    />
                                ))}
                            </div>
                            {/* Arrow down */}
                            <div className="flex flex-col items-center py-2">
                                <div className="w-px h-6 bg-primary/30" />
                                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary/30" />
                            </div>
                            {/* Brain */}
                            <div className="relative z-10">
                                <NodeCard
                                    node={process}
                                    isActive={activeNode?.id === process.id}
                                    onHover={setActiveNode}
                                    isMain
                                />
                            </div>
                            {/* Arrow down */}
                            <div className="flex flex-col items-center py-2">
                                <div className="w-px h-6 bg-primary/30" />
                                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary/30" />
                            </div>
                            {/* Output Row */}
                            <div className="flex flex-row justify-center gap-4 relative z-10">
                                {outputs.map((node) => (
                                    <NodeCard
                                        key={node.id}
                                        node={node}
                                        isActive={activeNode?.id === node.id}
                                        onHover={setActiveNode}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Desktop: horizontal layout with SVG lines */}
                        <div className="hidden sm:flex sm:flex-row items-center justify-between w-full h-full">
                            <div className="flex flex-col justify-center gap-12 relative z-10 h-full">
                                {inputs.map((node) => (
                                    <NodeCard
                                        key={node.id}
                                        node={node}
                                        isActive={activeNode?.id === node.id}
                                        onHover={setActiveNode}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col justify-center relative z-10 h-full">
                                <NodeCard
                                    node={process}
                                    isActive={activeNode?.id === process.id}
                                    onHover={setActiveNode}
                                    isMain
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-12 relative z-10 h-full">
                                {outputs.map((node) => (
                                    <NodeCard
                                        key={node.id}
                                        node={node}
                                        isActive={activeNode?.id === node.id}
                                        onHover={setActiveNode}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Detail Panel */}
                    <div className="lg:col-span-4 bg-white/5 rounded-lg border border-white/10 p-6 flex flex-col min-h-[250px] bg-grid-tiny">
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                            <div className={`w-2 h-2 rounded-full ${activeNode ? 'bg-primary animate-pulse' : 'bg-slate-700'}`} />
                            <span className="text-xs font-mono text-slate-500 uppercase">
                                {activeNode ? 'SYSTEM STATUS: NODE_ACTIVE' : 'SYSTEM STATUS: IDLE'}
                            </span>
                        </div>

                        <AnimatePresence mode="wait">
                            {activeNode ? (
                                <motion.div
                                    key={activeNode.id}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-1 flex flex-col"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                        {activeNode.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white font-mono mb-2">{activeNode.label}</h3>
                                    <p className="text-slate-400 leading-relaxed mb-8 border-l-2 border-primary/20 pl-4">
                                        {activeNode.description}
                                    </p>

                                    <div className="mt-auto">
                                        <h4 className="text-xs font-mono text-slate-500 uppercase mb-3">Capabilities</h4>
                                        <ul className="space-y-2">
                                            {activeNode.details.map((detail, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-2 rounded border border-white/5">
                                                    <div className="w-1 h-1 bg-primary rounded-full" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex-1 flex flex-col items-center justify-center text-center opacity-50"
                                >
                                    <Brain className="w-16 h-16 text-slate-700 mb-4" />
                                    <p className="text-slate-500 font-mono text-sm">
                                        HOVER OVER A NODE TO INSPECT<br />PROCESS ARCHITECTURE
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

function NodeCard({ node, isActive, onHover, isMain = false }: { node: NodeType, isActive: boolean, onHover: (n: NodeType | null) => void, isMain?: boolean }) {
    return (
        <motion.div
            onMouseEnter={() => onHover(node)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onHover(node)}
            className={cn(
                "relative group cursor-crosshair transition-all duration-300",
                isMain ? "w-32 h-32 md:w-40 md:h-40" : "w-16 h-16 md:w-20 md:h-20"
            )}
            whileHover={{ scale: 1.05 }}
        >
            <div className={cn(
                "absolute inset-0 rounded-xl border backdrop-blur-md flex items-center justify-center transition-all duration-300",
                isActive
                    ? "bg-primary/20 border-primary shadow-[0_0_30px_rgba(59,130,246,0.3)] text-primary"
                    : "bg-black/40 border-white/10 text-slate-400 group-hover:border-white/30 group-hover:text-slate-200"
            )}>
                {isMain ? (
                    <div className="relative">
                        {/* Pulse effect for Brain */}
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20" />
                        <Brain className="w-12 h-12 md:w-16 md:h-16 relative z-10" />
                    </div>
                ) : (
                    node.icon
                )}
            </div>

            {/* Label for smaller nodes (Input/Output) */}
            {!isMain && (
                <div className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap text-xs font-mono font-medium tracking-wider transition-colors uppercase",
                    isActive ? "text-primary" : "text-slate-600 group-hover:text-slate-400"
                )}>
                    {node.label}
                </div>
            )}
            {/* Label for Brain */}
            {isMain && (
                <div className={cn(
                    "absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-mono font-bold tracking-widest transition-colors uppercase",
                    isActive ? "text-primary" : "text-slate-500"
                )}>
                    AI CORE
                </div>
            )}
        </motion.div>
    );
}

function FlowLine({ startX, startY, endX, endY, active }: { startX: number, startY: number, endX: number, endY: number, active: boolean }) {
    // Control points for bezier curve
    const cp1X = startX + (endX - startX) / 2;
    const cp1Y = startY;
    const cp2X = startX + (endX - startX) / 2;
    const cp2Y = endY;

    const pathD = `M ${startX},${startY} C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${endX},${endY}`;

    return (
        <motion.path
            d={pathD}
            fill="none"
            strokeWidth="2"
            stroke={active ? "url(#line-gradient)" : "rgba(255,255,255,0.05)"}
            initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
            animate={{
                pathLength: 1,
                opacity: 1,
                strokeDashoffset: active ? [0, -20] : 0
            }}
            transition={{
                pathLength: { duration: 1 },
                opacity: { duration: 1 },
                strokeDashoffset: { duration: 0.5, repeat: Infinity, ease: "linear" }
            }}
            style={{
                strokeDasharray: active ? "10, 10" : "none",
            }}
        />
    );
}
