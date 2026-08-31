import OmnichannelFeatures from '@/components/OmnichannelFeatures';
import ProblemOverload from '@/components/ProblemOverload';
import ArcadeTourEmbed from '@/components/ArcadeTourEmbed';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import SectionSkeleton from '@/components/SectionSkeleton';
import TrustedByLogos from '@/components/TrustedByLogos';
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
 * Every other slot renders a <SectionSkeleton> in the agreed page order, so
 * the structure is visible while the real sections are written one at a time.
 * Nothing was deleted — ProductIntro, LogosStrip, StorySections, DemoLive,
 * ActionShowcase, KnowledgeFlow, InboxShowcase, Process, ProofResults,
 * AboutUs, Pricing, FAQ, FinalCTA, MobileStickyBar and FloatingWhatsApp are
 * all still in src/components, just unmounted.
 *
 * Skeletons keep the anchor ids the old sections used (#si-funksionon,
 * #rezultate, #cmimet, #pyetje, #demo, #kontakt) so the navbar links, the
 * hero CTAs and the footer links all still resolve.
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
              {h.ctaPrimary} <span aria-hidden>→</span>
            </a>
            <a
              href="#omnichannel"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-6 py-3 text-[15px] font-medium text-ink hover:border-ink/30 transition-colors"
            >
              {h.ctaSecondary}
            </a>
          </div>
          <p className="text-sm text-ink-muted mt-6">{h.credibility}</p>
        </Reveal>
      </RobotHero>

      {/* 02a — Problem. The notification bell: press it and the flood of
          messages from every app arrives at once. */}
      <ProblemOverload dict={dict} />

      {/* 02b — Trusted-by. The five real client logos, auto-scrolling. */}
      <TrustedByLogos dict={dict} id="besimi" />

      {/* 03 — What it does: one panel, every channel. KEPT AS IS. */}
      <OmnichannelFeatures dict={dict} />

      {/* 04 — Try it live. The interactive demo, the strongest differentiator.
          Reuse: DemoLive / InteractiveDemo / ChatSimulation. */}
      <SectionSkeleton
        id="demo"
        step="04"
        label="Provoje live"
        note="Demoja interaktive — vizitori i shkruan asistentit vetë dhe merr përgjigje reale. Diferencuesi më i fortë i faqes."
        variant="media"
        glow
      />

      {/* 05 — How you start. 3-step onboarding; answers "is this hard for me"
          for non-technical owners. The Arcade walkthrough sits directly above
          the text steps — "watch it happen" before "read the 3 steps",
          adjacent since that's where a visitor asking "how does this work"
          already is. */}
      <ArcadeTourEmbed dict={dict} />
      <Process dict={dict} />

      {/* 06 — Testimonials / results. Reuse: ProofResults. */}
      <SectionSkeleton
        id="rezultate"
        step="06"
        label="Dëshmi & rezultate"
        note="Rezultate me numra dhe dëshmi nga biznese realë — jo premtime, por çfarë ndryshoi konkretisht."
        variant="grid"
      />

      {/* 07 — Founder story. Reuse: AboutUs. */}
      <SectionSkeleton
        id="themeluesi"
        step="07"
        label="Historia e themeluesit"
        note="Kush e ndërton këtë dhe pse — fytyra dhe besueshmëria pas produktit."
        variant="split"
      />

      {/* 08 — Pricing. */}
      <Pricing dict={dict} />

      {/* 09 — FAQ. */}
      <FAQ dict={dict} />

      {/* 10 — Final CTA. The footer itself renders globally from layout.tsx.
          Reuse: FinalCTA. */}
      <SectionSkeleton
        id="kontakt"
        step="10"
        label="Thirrja finale"
        note="Një veprim i vetëm, i qartë. Footer-i vjen menjëherë poshtë, nga layout.tsx."
        variant="cta"
        glow
      />
    </>
  );
}
