import OmnichannelFeatures from '@/components/OmnichannelFeatures';
import ProblemOverload from '@/components/ProblemOverload';
import ArcadeTourEmbed from '@/components/ArcadeTourEmbed';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import DemoLive from '@/components/DemoLive';
import TrustedByLogos from '@/components/TrustedByLogos';
import AboutUs from '@/components/AboutUs';
import { RobotHero } from '@/components/ui/robot-hero';
import Reveal from '@/components/ui/Reveal';
import type { Dict } from '@/i18n';

/**
 * Landing page, stripped back to a wireframe (2026-08-27).
 *
 * Arbri is rebuilding the page from scratch, so only two sections are real
 * here — the robot hero and OmnichannelFeatures ("Një Panel. Çdo Kanal.").
 * Both are untouched: same components, same copy, same animations.
 *
 * As of 2026-09-01 every planned slot is filled — this was the last
 * <SectionSkeleton>. Nothing else was deleted along the way — ProductIntro,
 * LogosStrip, StorySections, ActionShowcase, KnowledgeFlow, InboxShowcase,
 * ProofResults and MobileStickyBar/FloatingWhatsApp are still in
 * src/components, just unmounted.
 *
 * Anchor ids (#si-funksionon, #cmimet, #pyetje, #demo) match what the navbar,
 * hero CTAs and footer already link to. The testimonials/results slot (step
 * 06, `#rezultate`, ProofResults) was dropped outright on 2026-09-01 — not
 * wanted — and its nav/footer links were removed with it.
 */
export default function HomeSections({ dict }: { dict: Dict }) {
  const h = dict.hero;

  return (
    <>
      {/* 01 — Hero. 3D robot hero (ROBOT-HERO-INTEGRATION.md). Site nav already
          renders globally from layout.tsx, so the component's own AntennaNavbar
          is switched off here. The upstream template shipped this hero with no
          headline slot at all — just the 3D figure and a faint wordmark — so
          the actual value-prop copy (dict.hero) is supplied as children,
          reusing the same strings and button styling as the previous Hero.tsx. */}
      <RobotHero showNavbar={false} pantallaColor="#6D35F2">
        <Reveal className="max-w-2xl pointer-events-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.12] tracking-tight">
            <span className="block text-ink-muted font-medium">{h.title.light1}</span>
            <span className="block text-ink">{h.title.strong}</span>
            <span className="block text-ink-muted font-medium">{h.title.light2}</span>
          </h1>
          <p className="text-secondary text-lg leading-relaxed max-w-md mt-6">
            {h.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(109,53,242,0.25)] hover:bg-primary-hover transition-colors"
            >
              {h.ctaPrimary}
            </a>
            <a
              href="#si-funksionon"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-white px-6 py-3 text-[15px] font-medium text-ink hover:border-ink/30 transition-colors"
            >
              {h.ctaSecondary} <span aria-hidden>→</span>
            </a>
          </div>
          <p className="text-sm text-ink-muted mt-6">{h.credibility}</p>
        </Reveal>
      </RobotHero>

      {/* 02 — Problem. The notification bell: press it and the flood of
          messages from every app arrives at once. */}
      <ProblemOverload dict={dict} />

      {/* 03 — Interaction demo. The Arcade product-tour embed — "watch it
          happen" before anything else. No longer adjacent to the 3-step
          "how you start" text (now at 06); that pairing was reordered away
          on 2026-09-01, so it stands on its own here. */}
      <ArcadeTourEmbed dict={dict} />

      {/* 04 — What it does: one panel, every channel. KEPT AS IS. */}
      <OmnichannelFeatures dict={dict} />

      {/* 05 — Try it live. The strongest differentiator: a real Claude call
          behind /api/demo, editable knowledge box, live lead capture. Already
          built (2026-07-19, hardened 2026-07-20) — just unmounted since the
          08-27 rebuild. Mounted as-is, no changes. */}
      <DemoLive dict={dict} />

      {/* 06 — How you start. 3-step onboarding; answers "is this hard for me"
          for non-technical owners. */}
      <Process dict={dict} />

      {/* 07 — Trusted-by. The five real client logos, auto-scrolling. */}
      <TrustedByLogos dict={dict} id="besimi" />

      {/* 08 — Founder story. */}
      <AboutUs dict={dict} />

      {/* 09 — Pricing. */}
      <Pricing dict={dict} />

      {/* 10 — FAQ. */}
      <FAQ dict={dict} />

      {/* 11 — Final CTA. Vertical marquee of business verticals (desktop) next
          to the one WhatsApp action. The footer itself renders globally from
          layout.tsx, right below. */}
      <FinalCTA dict={dict} />
    </>
  );
}
