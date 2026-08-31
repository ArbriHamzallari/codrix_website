# Problem + Trusted-By Section — Part 1: Message Evidence Stack

Paste into Claude Code inside `codrix_website`. This is one half of the merged "Problem + Trusted By" section — the logo strip half will follow once that component is picked from 21st.dev.

## What changed from the source component, and why

The original `notification-popover.tsx` is a click-to-open bell dropdown — correct for a real app, wrong for a marketing page where visitors are scrolling past, not hunting for a bell to click. This rebuild keeps the exact motion (blur + slide-in, staggered per item) but triggers it automatically when the section scrolls into view, once, via `whileInView`. Everything that only existed to support the click interaction — the bell button, unread badges, mark-as-read state, the popover shell — is gone, since none of it does anything here.

Because of that, **don't install `@radix-ui/react-slot` or `class-variance-authority`** — those were only needed for the shadcn `Button` that triggered the popover, which this version doesn't use. `lucide-react` and `framer-motion` are already in the repo.

## 1. Check for an existing `cn` utility first

Look for `src/lib/utils.ts`. If it already exports a `cn` helper, use it as-is. If it doesn't exist, create it:

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Only install `clsx` and `tailwind-merge` if this file doesn't already exist — check first, since a Tailwind/shadcn-style repo often already has this.

## 2. Create the component

Create `src/components/ProblemMessageEvidence.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface EvidenceMessage {
  id: string;
  text: string;
  time: string;
  icon: React.ElementType;
  iconColor: string;
}

const messages: EvidenceMessage[] = [
  {
    id: "1",
    text: "A jeni hapur të dielën?",
    time: "21:04",
    icon: MessageCircle,
    iconColor: "bg-emerald-500",
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
    iconColor: "bg-[#5B2CFF]",
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
            transition={{ duration: 0.4, delay: index * 0.25 }}
            className="flex items-center gap-3 rounded-xl bg-white border border-gray-100 shadow-sm px-4 py-3"
          >
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white",
                message.iconColor
              )}
            >
              <Icon size={16} />
            </span>
            <span className="flex-1 text-sm text-gray-800">{message.text}</span>
            <span className="text-xs text-gray-400">{message.time}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
```

The three messages and their icons match what's already on the current problem section (web chat, Instagram, website) — keep that mapping since it quietly reinforces the omnichannel story even in the pain-point section, before the reader's reached the section that explains it.

## 3. Mount it, replacing the current static cards

Find the current hardcoded version of these three message cards in the Problem section (`grep -r "A jeni hapur të dielën" src/` to locate it) and replace that block with:

```tsx
<ProblemMessageEvidence />
```

Don't touch anything else in the Problem section yet — the headline, paragraph, and the Kap/Kthen/Mban accordion below it are being handled separately (the accordion is likely getting cut entirely, since it duplicates the benefits grid elsewhere on the page — that's a decision for the full section merge, not this step).

## 4. What's still pending

The logo strip (21st.dev's "Trusted by these companies" card, top-right of the clients collection) hasn't been pasted yet. Once it is, this section gets a second pass: the logo strip goes above this evidence stack as a compact, low-visual-weight trust signal, and the whole thing becomes one section instead of two.

## Verification

- Scroll to the section and confirm the three cards blur/slide in together (staggered ~0.25s apart) the first time they enter the viewport, and don't replay on subsequent scrolls up/down past them.
- Confirm no bell icon, badge, or click target renders anywhere — this should be a purely passive visual.
- Confirm `framer-motion`'s `whileInView` doesn't fire early/late due to any parent `overflow-hidden` clipping the viewport calculation — a common gotcha if the section sits inside a clipped container.