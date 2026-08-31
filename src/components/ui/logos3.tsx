// This template requires the Embla Auto Scroll plugin:
//   npm install embla-carousel-auto-scroll   (already installed here)

"use client";

import Image from "next/image";
import { useMemo } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useReducedMotion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  /** Anchor id for the section, same convention as `ui/features.tsx`. */
  id?: string;
  heading?: string;
  /** Optional line under the heading. Additive — the source had heading only. */
  description?: string;
  logos: Logo[];
  className?: string;
}

/**
 * Auto-scrolling logo strip.
 *
 * Two deliberate departures from the upstream source, both forced by the real
 * assets in `public/clients/` rather than by taste:
 *
 * 1. **Uniform tiles instead of `h-7 w-auto` on a bare `<img>`.** These five
 *    logos span aspect ratios 0.80 (Dodo Dent, portrait) to 1.98 (Trio, wide) —
 *    a 2.5x spread. Sizing by height alone would render Trio two-and-a-half
 *    times wider than Dodo Dent, so no single class makes them all read as the
 *    same size. Each logo gets an identically-sized tile and `object-contain`.
 *
 * 2. **Each tile has a white background.** Three of the five PNGs carry their
 *    own background — Aiyana Med and Dental Med Austria are black, Dodo Dent is
 *    a teal gradient. Dropped bare onto this page's cream `bg-background` they
 *    would read as two black rectangles and a teal one floating unframed. The
 *    tile turns each into a proper logo card instead.
 *
 * Rendered with `next/image` rather than `<img>`, matching the rest of the repo.
 */
const Logos3 = ({ id, heading, description, logos, className }: Logos3Props) => {
  const reduce = useReducedMotion();

  // Embla drives the marquee with JS transforms, so the global CSS
  // reduced-motion kill-switch in globals.css can't reach it — the strip has to
  // be told not to play. Plugin options only; the rendered markup is identical
  // either way, so this never diverges between the server and the client.
  const plugins = useMemo(
    () =>
      reduce
        ? []
        : [
            AutoScroll({
              playOnInit: true,
              speed: 0.7,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ],
    [reduce]
  );

  return (
    <section
      id={id}
      className={cn("section-y px-6 sm:px-8 lg:px-16 border-t border-border", className)}
    >
      {(heading || description) && (
        <div className="mx-auto max-w-[680px] flex flex-col items-center text-center">
          {heading && (
            <h2 className="font-heading font-bold text-ink text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-[-0.02em] text-pretty">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-secondary type-body mt-4">{description}</p>
          )}
        </div>
      )}

      <div className="pt-10 md:pt-14">
        <div className="relative mx-auto flex items-center justify-center max-w-6xl">
          {/* `w-full min-w-0` is load-bearing. The carousel root is a flex
              item here, and flex items default to `min-width: auto`, so it
              refuses to shrink below its ~3900px track and blows straight past
              the parent's `max-w-6xl` — 1320px of horizontal page overflow.
              (The upstream source never hit this because its `basis-1/6`
              fractions sized the track to the container.) Pinning the root to
              the container width lets the inner `overflow-hidden` clip. */}
          <Carousel
            className="w-full min-w-0"
            opts={{ loop: true, align: "start" }}
            plugins={plugins}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                // `basis-auto`, not the source's `basis-1/3 … lg:basis-1/6`:
                // those fractions size each slot to a share of the container,
                // which is narrower than these fixed tiles at every breakpoint,
                // so the tiles would overflow their slots and overlap. Letting
                // the tile define the slot width keeps the spacing exact.
                <CarouselItem
                  key={logo.id}
                  className="flex basis-auto justify-center pl-0"
                >
                  <div className="mx-2.5 sm:mx-4 flex h-28 w-44 sm:h-32 sm:w-52 lg:h-36 lg:w-60 shrink-0 items-center justify-center overflow-hidden rounded-card border border-border bg-white shadow-soft transition-shadow duration-200 hover:shadow-elevated">
                    <div className="relative h-full w-full">
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        fill
                        sizes="(min-width: 1024px) 240px, (min-width: 640px) 208px, 160px"
                        className={cn("object-contain p-4 sm:p-5", logo.className)}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* `from-background`, not `from-white` — this section sits on the warm
              cream `#F7F5F0`, so a white fade would leave a visible seam. */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
