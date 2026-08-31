# Problem + Trusted-By Section — Part 2: Logo Strip

Paste into Claude Code inside `codrix_website`. This is the second half of the merged "Problem + Trusted By" section — pairs with `PROBLEM_EVIDENCE_INTEGRATION.md` (the message evidence stack). This strip goes above that stack, as a quiet trust signal, not a competing headline.

## What changed from the source, and why

- **Heading downgraded from a page-level `<h1>` at `text-2xl`/`text-4xl` to a small muted caption.** The original is a standalone shadcnblocks section meant to be its own page block — here it's a supporting element sitting above the real headline ("Klientët nuk presin"), so it can't compete for visual weight.
- **`py-64` removed.** That's 16rem of padding top and bottom — correct for a full standalone section, way too much for a compact strip inside a merged section. Replaced with `py-8`.
- **`card.tsx` dependency skipped.** Nothing in `Logos3` or its demo actually renders a `Card` — it's unused boilerplate that came bundled with the export.
- **`from-background`/`to-background` gradient edges**: this relies on a `background` CSS token that shadcn projects normally define via `globals.css` + `tailwind.config`. Check whether `background` exists as a token in this repo's `tailwind.config.mjs` first. If it doesn't, use an explicit color instead (`from-white` matches the site's current off-white sections) — otherwise the fade-out edges on the carousel will silently not render.
- **Logo array duplicated 3× to avoid loop gaps.** Five real logos scrolling through a `max-w-5xl` container will show visible empty space when the loop resets. Repeating the same five logos three times (15 total) keeps the marquee visually continuous. This doesn't change which logos appear — it's a rendering fix, not new content.

## 1. Check for existing dependencies before installing

`src/components/ui/button.tsx` and the `cn` utility (`src/lib/utils.ts`) may already exist from the previous integration pass — check before creating either. `carousel.tsx` genuinely needs `Button` this time (it's a static import at the top of the file, used by `CarouselPrevious`/`CarouselNext` even though this specific usage doesn't render those controls), so unlike the notification-evidence piece, don't skip it here.

```bash
npm install embla-carousel-auto-scroll embla-carousel-react @radix-ui/react-slot class-variance-authority
```

(`lucide-react` is already in the repo.)

## 2. Create the shadcn primitives (if not already present)

`src/components/ui/carousel.tsx` — paste unchanged from the source (it's a generic shadcn primitive, no Biseda-specific edits needed):

```tsx
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    { orientation = "horizontal", opts, setApi, plugins, className, children, ...props },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
      plugins,
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext],
    )

    React.useEffect(() => {
      if (!api || !setApi) return
      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) return
      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)
      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

export { type CarouselApi, Carousel, CarouselContent, CarouselItem }
```

(`CarouselPrevious`/`CarouselNext` omitted — this usage has no arrow controls, so there's no reason to ship them.)

## 3. Create the trimmed `Logos3` component

Create `src/components/ui/logos3.tsx`:

```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  caption?: string;
  logos: Logo[];
}

const Logos3 = ({ caption = "Disa biznese që na kanë besuar", logos }: Logos3Props) => {
  return (
    <section className="py-8">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-gray-400">
        {caption}
      </p>
      <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
        <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true })]}>
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="mx-10 flex shrink-0 items-center justify-center">
                  <img src={logo.image} alt={logo.description} className={logo.className} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
};

export { Logos3 };
```

(If the section's actual background isn't plain white, swap `from-white` for whatever the real background color is — check the parent section's background class first.)

## 4. Use the real logos already in the codebase — don't create new ones

Before writing the usage file, find the existing client logo assets. They're already rendered somewhere in the case-studies/testimonials section (the one headed "Klinika dhe biznese reale që kemi shërbyer" / "Rezultate reale nga biznese reale") — that section shows the same five businesses (including Dental Med Austria, Dodo Dent, Ayana Clinic, and two others). Find them with:

```bash
grep -rn "Dental Med Austria\|Dodo Dent\|Ayana\|SMartderm\|Trio Dental" src/
```

Use the **exact same image paths/imports** already used there — do not fetch new logo images, do not recreate them, and do not guess file names. If those logos are inline SVGs or React components rather than `<img>` sources, adapt the `Logo` interface's `image` field accordingly (it may need to become a component reference instead of a string path) rather than forcing them through `<img src>`.

Create `src/components/TrustedByLogos.tsx`:

```tsx
import { Logos3 } from "@/components/ui/logos3";

// Replace these five with the real image paths found via the grep above.
// Duplicated 3x (15 total) so the auto-scroll loops without a visible gap —
// still the same five real businesses, just repeated for a seamless marquee.
const clientLogos = [
  { id: "logo-1", description: "Dental Med Austria", image: "/* real path */", className: "h-7 w-auto grayscale opacity-70" },
  { id: "logo-2", description: "Dodo Dent", image: "/* real path */", className: "h-7 w-auto grayscale opacity-70" },
  { id: "logo-3", description: "Ayana Clinic", image: "/* real path */", className: "h-7 w-auto grayscale opacity-70" },
  { id: "logo-4", description: "SMartderm", image: "/* real path */", className: "h-7 w-auto grayscale opacity-70" },
  { id: "logo-5", description: "Trio Dental", image: "/* real path */", className: "h-7 w-auto grayscale opacity-70" },
];

const repeatedLogos = [1, 2, 3].flatMap((rep) =>
  clientLogos.map((logo) => ({ ...logo, id: `${logo.id}-${rep}` }))
);

export default function TrustedByLogos() {
  return <Logos3 logos={repeatedLogos} />;
}
```

The `grayscale opacity-70` treatment is a suggestion, not a requirement — real clinic logos are usually full-color and could clash with each other in a strip; a muted grayscale pass is a common way to make five unrelated logos feel like one cohesive row. Drop it if the logos already look fine together in full color (check the existing case-studies section — if they're already desaturated there, match that).

## 5. Assemble the full merged section

Combining with Part 1, the merged section should now read top to bottom:

```tsx
<section>
  <TrustedByLogos />
  <ProblemMessageEvidence />
  {/* existing "Klientët nuk presin" headline + paragraph stay as-is */}
</section>
```

Confirm the actual JSX nesting once both pieces are in — the headline/paragraph likely need to sit beside the evidence stack (matching the current two-column layout in that section) rather than stacked above/below it. Don't restructure that layout without checking what's there first.

## Verification

- Confirm the marquee scrolls continuously with no visible jump or gap when it loops.
- Confirm the caption reads as a quiet aside, not a competing headline — if it draws the eye before "Klientët nuk presin" does, it's still too heavy.
- Confirm the five real logos render correctly and match what's already shown in the case-studies section further down the page — same businesses, same logos, no placeholders left behind.