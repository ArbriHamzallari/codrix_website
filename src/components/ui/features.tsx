"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface FeaturesProps {
  id?: string;
  eyebrow: string;
  title: string;
  features: {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    // Optional on purpose — real product screenshots for this section
    // aren't ready yet (see OMNICHANNEL-SECTION.md §3). Until a path is
    // supplied, the right-hand panel falls back to `visual`, then to a
    // neutral icon placeholder, rather than inventing or fetching a fake
    // dashboard image.
    image?: string;
    // A custom illustrative panel (not a product screenshot) for this
    // feature — used when there's no real `image` yet but a plain icon
    // placeholder is too thin. Rendered at the same frame size/position an
    // `image` would use, inside the same crossfade transition.
    visual?: React.ReactNode;
  }[];
  primaryColor?: string; // hex value, e.g. "#5B2CFF"
  progressGradientLight?: string;
  progressGradientDark?: string;
}

export function Features({
  id,
  eyebrow,
  title,
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

  const activeImage = features[currentFeature].image;
  const activeVisual = features[currentFeature].visual;
  const ActiveIcon = features[currentFeature].icon;

  return (
    <section
      id={id}
      className="section-y px-8 lg:px-16"
      style={{ ["--feature-primary" as string]: primaryColor }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--feature-primary)] font-semibold text-sm uppercase tracking-wider">
            {eyebrow}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink mt-4 mb-6 text-balance">
            {title}
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
                    ${isActive ? "bg-white shadow-xl rounded-xl border border-border" : ""}
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
                        ${isActive ? "text-ink" : "text-ink-muted"}
                      `}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`
                        transition-colors duration-300 text-sm
                        ${isActive ? "text-secondary" : "text-ink-muted"}
                      `}
                      >
                        {feature.description}
                      </p>
                      <div className="mt-4 bg-black/5 rounded-sm h-1 overflow-hidden">
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
          <div className="relative order-1 w-full max-w-lg mx-auto lg:order-2">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {activeImage ? (
                <div className="relative w-full aspect-[3/2] rounded-2xl border border-border shadow-lg overflow-hidden bg-white">
                  <Image
                    src={activeImage}
                    alt={features[currentFeature].title}
                    fill
                    sizes="(min-width: 1024px) 500px, 90vw"
                    className="object-contain"
                  />
                </div>
              ) : activeVisual ? (
                <div className="w-full aspect-[3/2] rounded-2xl border border-border bg-white shadow-lg overflow-hidden">
                  {activeVisual}
                </div>
              ) : (
                <div
                  className="w-full aspect-[3/2] rounded-2xl border border-border bg-cream flex items-center justify-center"
                  role="img"
                  aria-label={features[currentFeature].title}
                >
                  <ActiveIcon size={40} className="text-ink-muted/40" />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
