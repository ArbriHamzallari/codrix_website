'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, User, Phone, ClipboardList, Clock, MessageCircle, Sparkles } from 'lucide-react';
import type { Dict } from '@/i18n';
import { whatsappUrl } from '@/i18n';
import { cn } from '@/lib/utils';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

type Lead = {
  name: string | null;
  phone: string | null;
  request: string | null;
  slot: string | null;
};

const EMPTY_LEAD: Lead = { name: null, phone: null, request: null, slot: null };
const MAX_USER_MESSAGES = 15;

export default function DemoLive({ dict }: { dict: Dict }) {
  const d = dict.demo;
  const [businessId, setBusinessId] = useState(d.businesses[0].id);
  const business = d.businesses.find((b) => b.id === businessId) ?? d.businesses[0];
  const [knowledge, setKnowledge] = useState(business.knowledge);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [lead, setLead] = useState<Lead>(EMPTY_LEAD);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [capReached, setCapReached] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAutoPlayedRef = useRef(false);
  const triggerAutoPlayRef = useRef<() => void>(() => {});

  const userCount = messages.filter((m) => m.role === 'user').length;

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  // LANDING-PAGE-SIMPLIFY.md T2: auto-send one question when the section
  // first scrolls into view, so visitors see the agent answer before
  // touching anything. Goes through the same send()/API/rate-limit path a
  // manual tap would — no separate architecture, no new endpoint. Kept
  // "latest" via a ref updated every render so the mount-only observer below
  // never closes over stale state.
  useEffect(() => {
    triggerAutoPlayRef.current = () => {
      if (hasAutoPlayedRef.current) return;
      if (messages.length > 0 || loading || capReached) return;
      hasAutoPlayedRef.current = true;
      send(business.starterQuestions[0]);
    };
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) triggerAutoPlayRef.current();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const switchBusiness = (id: string) => {
    const next = d.businesses.find((b) => b.id === id);
    if (!next) return;
    setBusinessId(id);
    setKnowledge(next.knowledge);
    setMessages([]);
    setLead(EMPTY_LEAD);
    setCapReached(false);
    setError(false);
  };

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading || capReached) return;
    setError(false);
    setInput('');

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setLoading(true);

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessLabel: business.label,
          knowledge,
          locale: dict.locale,
          messages: nextMessages,
        }),
      });

      if (res.status === 403) {
        setCapReached(true);
        return;
      }
      if (!res.ok) {
        setError(true);
        return;
      }

      const data = await res.json();
      if (typeof data.reply === 'string' && data.reply.length > 0) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      }
      if (data.lead) {
        setLead((prev) => ({
          name: data.lead.name ?? prev.name,
          phone: data.lead.phone ?? prev.phone,
          request: data.lead.request ?? prev.request,
          slot: data.lead.slot ?? prev.slot,
        }));
      }
      if (nextMessages.filter((m) => m.role === 'user').length >= MAX_USER_MESSAGES) {
        setCapReached(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const now = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  return (
    <section id="demo" ref={sectionRef} className="relative section-y px-8 lg:px-16 bg-section-glow">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-dim px-4 py-1.5 text-sm font-medium text-primary mb-5">
            <Sparkles className="w-4 h-4" />
            {d.badge}
          </span>
          <h2 className="type-h2 font-heading text-ink mb-4">{d.title}</h2>
          <p className="type-lead text-ink-muted max-w-2xl mx-auto">{d.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1fr] gap-5">
          {/* Left: business picker + knowledge editor */}
          <div className="rounded-card border border-surface-border bg-surface p-5 shadow-elevated">
            <p className="text-sm font-semibold text-white mb-3">{d.pickBusiness}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {d.businesses.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => switchBusiness(b.id)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-sm font-medium transition-colors border',
                    b.id === businessId
                      ? 'bg-primary text-white border-primary'
                      : 'bg-transparent text-muted border-surface-border hover:text-white hover:border-primary/50'
                  )}
                >
                  {b.label}
                </button>
              ))}
            </div>
            <p className="text-sm font-semibold text-white mb-1">{d.knowledgeLabel}</p>
            <p className="text-xs text-muted mb-3">{d.knowledgeHint}</p>
            <textarea
              value={knowledge}
              onChange={(e) => setKnowledge(e.target.value.slice(0, 2000))}
              rows={9}
              className="w-full rounded-xl border border-surface-border bg-background/60 p-3 text-sm text-white/90 leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-primary/60"
            />
          </div>

          {/* Middle: WhatsApp-style chat */}
          <div className="rounded-card border border-surface-border bg-surface overflow-hidden shadow-elevated flex flex-col min-h-[480px]">
            <div className="flex items-center gap-3 px-4 py-3 bg-[#075E54]">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                {business.label.charAt(0)}
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">
                  {business.label} · {d.chatHeader}
                </p>
                <p className="text-white/70 text-xs">
                  {loading ? d.typing : d.online}
                </p>
              </div>
            </div>

            <div
              ref={chatRef}
              className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin bg-[#0B141A]"
            >
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full gap-3 py-8">
                  <MessageCircle className="w-8 h-8 text-white/20" />
                  <div className="flex flex-col gap-2 w-full max-w-[260px]">
                    {business.starterQuestions.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => send(q)}
                        className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}
                  >
                    <div
                      className={cn(
                        'max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap',
                        m.role === 'user'
                          ? 'bg-[#005C4B] text-white rounded-br-none'
                          : 'bg-[#202C33] text-white/90 rounded-bl-none'
                      )}
                    >
                      {m.content}
                      <span className="ml-2 text-[10px] text-white/50 align-bottom">{now}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#202C33] rounded-lg rounded-bl-none px-4 py-3 flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-white/60"
                      />
                    ))}
                  </div>
                </div>
              )}
              {error && (
                <p className="text-center text-xs text-error/90 py-2">{d.errorText}</p>
              )}
            </div>

            {capReached ? (
              <div className="p-4 bg-surface-hover border-t border-surface-border text-center">
                <p className="text-white font-semibold mb-1">{d.capTitle}</p>
                <p className="text-muted text-sm mb-3">{d.capText}</p>
                <a
                  href={whatsappUrl(dict.nav.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  {d.capCta}
                </a>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2 p-3 bg-[#202C33]"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={d.chatPlaceholder}
                  maxLength={500}
                  className="flex-1 rounded-full bg-[#2A3942] px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-whatsapp/50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  aria-label="Send"
                  className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center text-white disabled:opacity-40 hover:brightness-110 transition-all shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right: captured lead panel */}
          <div className="rounded-card border border-surface-border bg-surface p-5 shadow-elevated">
            <p className="text-sm font-semibold text-white mb-1">{d.leadTitle}</p>
            <p className="text-xs text-muted mb-5">{d.leadHint}</p>
            <div className="space-y-3">
              <LeadField icon={<User className="w-4 h-4" />} label={d.leadName} value={lead.name} />
              <LeadField icon={<Phone className="w-4 h-4" />} label={d.leadPhone} value={lead.phone} />
              <LeadField
                icon={<ClipboardList className="w-4 h-4" />}
                label={d.leadRequest}
                value={lead.request}
              />
              <LeadField icon={<Clock className="w-4 h-4" />} label={d.leadSlot} value={lead.slot} />
            </div>
            {!lead.name && !lead.phone && !lead.request && !lead.slot && (
              <p className="text-xs text-muted mt-5 leading-relaxed">{d.leadEmpty}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadField({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | null;
}) {
  return (
    <div
      className={cn(
        'rounded-xl border px-3 py-2.5 transition-colors',
        value ? 'border-success/40 bg-success/5' : 'border-surface-border bg-background/40'
      )}
    >
      <div className="flex items-center gap-2 text-xs text-muted mb-0.5">
        {icon}
        {label}
        {value && <Check className="w-3.5 h-3.5 text-success ml-auto" />}
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={value ?? 'empty'}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn('text-sm font-medium', value ? 'text-white' : 'text-white/30')}
        >
          {value ?? '—'}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
