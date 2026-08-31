'use client';

import { Inbox, Zap, Users, Instagram, Globe, MessageCircle, Bot, ArrowRight } from 'lucide-react';
import { Features } from '@/components/ui/features';
import type { Dict } from '@/i18n';

// TODO(Arbri): real screenshots would still upgrade this section, in order —
//   1. the unified Chatwoot inbox (ops.biseda.app) showing WhatsApp,
//      Instagram and web-chat conversations together in one view
//   2. the AI bot answering a customer using the business's knowledge base
//   3. a human agent taking over a conversation the AI handed off
// Until then, each feature gets a custom illustrative panel below instead of
// a fake or fetched stock dashboard image — these are deliberately stylized
// (chip/bubble/avatar mockups, same visual language as ChannelsSection and
// ProductConversation elsewhere on this site), never presented as real UI.

function ChannelsVisual() {
  const channels = [
    { icon: MessageCircle, label: 'WhatsApp', tint: 'bg-whatsapp' },
    { icon: Instagram, label: 'Instagram', tint: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]' },
    { icon: Globe, label: 'Web Chat', tint: 'bg-secondary' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-8 py-10">
      <div className="flex items-center gap-6 sm:gap-10">
        {channels.map((c) => (
          <div key={c.label} className="flex flex-col items-center gap-2">
            <span className={`w-11 h-11 rounded-full ${c.tint} text-white flex items-center justify-center shadow-sm`}>
              <c.icon size={18} />
            </span>
            <span className="type-small text-ink-muted">{c.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center" aria-hidden>
        <span className="w-px h-8 bg-border" />
        <span className="w-2 h-2 rounded-full bg-border -mt-1" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_8px_24px_rgba(109,53,242,0.25)]">
          <Inbox size={24} />
        </span>
        <span className="type-small font-medium text-ink">Biseda Inbox</span>
      </div>
    </div>
  );
}

function AIReplyVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-3 px-8 py-10">
      <div className="self-start max-w-[80%] rounded-2xl rounded-bl-sm bg-cream border border-border px-4 py-2.5">
        <p className="type-small text-ink">A jeni hapur sot?</p>
      </div>
      <div className="self-end max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5">
        <p className="type-small text-white">Po! Jemi hapur deri në 20:00 😊</p>
      </div>
      <div className="self-end inline-flex items-center gap-1.5 mt-1 rounded-full border border-border bg-white px-3 py-1">
        <Zap size={12} className="text-primary" />
        <span className="text-[11px] font-medium text-ink-muted">~2 sekonda</span>
      </div>
    </div>
  );
}

function HandoffVisual() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 px-8 py-10">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex flex-col items-center gap-2">
          <span className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Bot size={26} />
          </span>
          <span className="type-small text-ink-muted">Roboti AI</span>
        </div>

        <ArrowRight size={20} className="text-ink-muted/50 shrink-0" aria-hidden />

        <div className="flex flex-col items-center gap-2">
          <span className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_8px_24px_rgba(109,53,242,0.25)]">
            <Users size={24} />
          </span>
          <span className="type-small font-medium text-ink">Ekipi juaj</span>
        </div>
      </div>

      <div className="w-full max-w-[280px] flex flex-col gap-1.5" aria-hidden>
        <span className="h-1.5 rounded-full bg-border w-full" />
        <span className="h-1.5 rounded-full bg-border w-4/5" />
        <span className="h-1.5 rounded-full bg-primary/30 w-2/3" />
      </div>
    </div>
  );
}

const ICONS = [Inbox, Zap, Users];
const VISUALS = [<ChannelsVisual key="channels" />, <AIReplyVisual key="ai" />, <HandoffVisual key="handoff" />];

export default function OmnichannelFeatures({ dict }: { dict: Dict }) {
  const o = dict.omnichannel;
  const features = o.items.map((item, i) => ({
    id: i + 1,
    icon: ICONS[i],
    title: item.title,
    description: item.description,
    visual: VISUALS[i],
    // Licensed 21st.dev asset (Arbri's premium plan), self-hosted locally.
    image: i === 2 ? '/features/team-handoff.jpg' : undefined,
  }));

  return (
    <Features
      id="omnichannel"
      eyebrow={o.eyebrow}
      title={o.title}
      primaryColor="#6D35F2"
      features={features}
    />
  );
}
