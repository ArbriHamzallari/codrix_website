"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EvidenceMessage {
  id: string;
  text: string;
  time: string;
  icon: LucideIcon;
  iconColor: string;
}

const messages: EvidenceMessage[] = [
  {
    id: "1",
    text: "A jeni hapur të dielën?",
    time: "21:04",
    icon: MessageCircle,
    iconColor: "bg-whatsapp",
  },
  {
    id: "2",
    text: "Sa kushton një konsultë?",
    time: "22:17",
    icon: Instagram,
    iconColor: "bg-gradient-to-br from-pink-500 to-purple-500",
  },
  {
    id: "3",
    text: "Keni orar të lirë nesër?",
    time: "23:41",
    icon: Globe,
    iconColor: "bg-primary",
  },
];

export function ProblemMessageEvidence({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-3", className)}>
      {messages.map((message, index) => {
        const Icon = message.icon;
        return (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-3 rounded-xl bg-white border border-border shadow-sm px-4 py-3"
          >
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white",
                message.iconColor
              )}
            >
              <Icon size={16} />
            </span>
            <span className="flex-1 type-small text-ink truncate">{message.text}</span>
            <span className="font-mono text-[11px] text-ink-muted shrink-0">{message.time}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
