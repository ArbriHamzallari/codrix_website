# Omnichannel Features Section — Prompt for Claude Code

Paste into Claude Code inside the `codrix_website` repo.

## Context

- Same conventions as the last two components: no shadcn CLI in this repo, but `src/components/ui/` is the established folder for standalone UI pieces.
- **No new npm installs needed.** `next` and `framer-motion` are already dependencies, and `lucide-react` is already used elsewhere (`src/components/Hero.tsx` imports `Building2` from it).
- This component has a real bug: it accepts a `primaryColor` prop but never uses it — every accent is hardcoded to `sky-500`. That's fixed below via a CSS variable so the prop actually works, since Tailwind can't dynamically build class names like `bg-${primaryColor}` at runtime.
- Content below is written in Albanian to match the rest of the site's copy (hero, nav). Adjust if any of it should be split into an i18n file instead of hardcoded.

## What this section is for

Biseda already runs Chatwoot at `ops.biseda.app`, which natively unifies WhatsApp, Instagram DMs, and the website chat widget into one shared dashboard where multiple staff members can see and respond to any conversation. This section isn't inventing a new feature — it's showing an existing one. Frame it that way: confident, factual, not aspirational.

## 1. Create the component (animation/interaction logic unchanged from the source)

Create `src/components/ui/features.tsx`. Keep the auto-advancing progress bar, the click-to-jump behavior, the scroll-into-view logic, and the image crossfade exactly as they are — only the color wiring changes:

```tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeaturesProps {
  features: {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
    image: string;
  }[];
  primaryColor?: string; // hex value, e.g. "#5B2CFF"
  progressGradientLight?: string;
  progressGradientDark?: string;
}

export function Features({
  features,
  primaryColor = "#5B2CFF",
  progressGradientLight = "bg-[var(--feature-primary)]",
  progressGradientDark = "bg-[var(--feature-primary)]",
}: FeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
    }
  }, [progress]);

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;

    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();

      container.scrollTo({
        left:
          activeFeatureElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{ ["--feature-primary" as string]: primaryColor }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--feature-primary)] font-semibold text-sm uppercase tracking-wider">
            Një Panel. Çdo Kanal.
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Ekipi Juaj Përgjigjet Kudo Që Janë Klientët
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
          {/* Left Side - Features with Progress Lines */}
          <div
            ref={containerRef}
            className="lg:space-y-8 md:space-x-6 lg:space-x-0 overflow-x-auto overflow-hidden no-scrollbar lg:overflow-visible flex lg:flex lg:flex-col flex-row order-1 pb-4 scroll-smooth"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = currentFeature === index;

              return (
                <div
                  key={feature.id}
                  ref={(el) => {
                    featureRefs.current[index] = el;
                  }}
                  className="relative cursor-pointer flex-shrink-0"
                  onClick={() => handleFeatureClick(index)}
                >
                  <div
                    className={`
                    flex lg:flex-row flex-col items-start space-x-4 p-3 max-w-sm md:max-w-sm lg:max-w-2xl transition-all duration-300
                    ${isActive ? "bg-white shadow-xl rounded-xl border border-gray-200" : ""}
                  `}
                  >
                    <div
                      className={`
                      p-3 hidden md:block rounded-full transition-all duration-300
                      ${isActive ? "bg-[var(--feature-primary)] text-white" : "bg-[var(--feature-primary)]/10 text-[var(--feature-primary)]"}
                    `}
                    >
                      <Icon size={24} />
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`
                        text-lg md:mt-4 lg:mt-0 font-semibold mb-2 transition-colors duration-300
                        ${isActive ? "text-gray-900" : "text-gray-700"}
                      `}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`
                        transition-colors duration-300 text-sm
                        ${isActive ? "text-gray-600" : "text-gray-500"}
                      `}
                      >
                        {feature.description}
                      </p>
                      <div className="mt-4 bg-gray-100 rounded-sm h-1 overflow-hidden">
                        {isActive && (
                          <motion.div
                            className={`h-full ${progressGradientLight}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Image Display */}
          <div className="relative order-1 max-w-lg mx-auto lg:order-2">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <Image
                className="rounded-2xl border border-gray-100 shadow-lg"
                src={features[currentFeature].image}
                alt={features[currentFeature].title}
                width={600}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

Note: dark-mode classes (`dark:...`) from the original were dropped — the site is moving toward the bright/off-white direction from the hero refinement, not a dark/light toggle. If the site does add a real dark mode later, they can be reintroduced then.

## 2. Create the Biseda content/usage file

Create `src/components/OmnichannelFeatures.tsx` (or wherever the homepage assembles its sections):

```tsx
import { Features } from "@/components/ui/features";
import { Inbox, Zap, Users } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Inbox,
    title: "Të Gjitha Kanalet, Një Panel i Vetëm",
    description:
      "WhatsApp, Instagram dhe chat-i i faqes suaj bashkohen automatikisht në një panel të vetëm — stafi juaj nuk hap kurrë disa aplikacione për të mos humbur asnjë mesazh.",
    image: "/images/features/omnichannel-inbox.png",
  },
  {
    id: 2,
    icon: Zap,
    title: "AI Përgjigjet Brenda Sekondave",
    description:
      "Roboti AI i Biseda-s lexon bazën e njohurive të biznesit tuaj dhe u përgjigjet klientëve menjëherë, 24 orë në ditë — para se një anëtar i stafit të mund të reagojë.",
    image: "/images/features/ai-instant-reply.png",
  },
  {
    id: 3,
    icon: Users,
    title: "Stafi Merr Përsipër Pa Humbur Kontekstin",
    description:
      "Kur një bisedë kërkon një person, çdo anëtar i ekipit sheh të gjithë historikun dhe mund ta marrë përsipër menjëherë — pa i kërkuar klientit të përsërisë veten.",
    image: "/images/features/team-handoff.png",
  },
];

export default function OmnichannelFeatures() {
  return <Features primaryColor="#5B2CFF" features={features} />;
}
```

## 3. Images — action needed from Arbri, not Claude Code

The three `image` paths above (`/public/images/features/*.png`) don't exist yet — the original demo pointed at a 21st.dev CDN with someone else's product screenshots, which obviously can't ship on Biseda's site. Claude Code should **not** invent or fetch placeholder images from the internet for this. Instead:

- Add a checklist item / TODO comment noting these three images need real screenshots: (1) the unified Chatwoot inbox showing WhatsApp + Instagram + web chat conversations together, (2) an example of the AI bot answering a customer using the knowledge base, (3) an example of a human agent taking over a handed-off conversation.
- If real screenshots aren't ready yet, use a plain neutral placeholder (e.g. a solid rounded rectangle with a subtle icon) rather than a stock/fake dashboard image — a fake screenshot risks misrepresenting the product.

## 4. Mount it on the homepage

The navbar already links to `#how-it-works` ("Si funksionon"). Check whether that anchor currently exists on the homepage — if it's missing or pointing at placeholder content, this section is a good fit to become it:

```tsx
<section id="how-it-works">
  <OmnichannelFeatures />
</section>
```

If `#how-it-works` already has different content, mount this as its own section instead and confirm placement with Arbri rather than guessing.

## Verification

- Confirm the active feature's purple accent (`--feature-primary`) actually renders — this is the bug fix, so it's worth double-checking rather than assuming.
- Confirm the auto-advance timing, click-to-jump, and image crossfade all behave identically to the original component — none of that logic should have changed.
- Confirm `next/image` doesn't error on the local `/images/features/*.png` paths once they're added (no `remotePatterns` config needed since these are local, not external URLs).