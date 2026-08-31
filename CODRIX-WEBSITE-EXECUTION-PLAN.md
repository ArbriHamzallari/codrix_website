# CODRIX-WEBSITE-EXECUTION-PLAN.md — sequenced build, decisions already made

> All strategic decisions are final — see `CODRIX-BISEDA-CONSOLIDATION.md`
> (audit, six sign-offs, design addendum). This document does not re-open any
> of that. It sequences the actual build into phases, same pattern as
> `BISEDA-FULL-REDESIGN.md` used for the panel. Each phase gets its own
> plan-then-execute pass; later phases build on earlier ones.

**Before Phase 1**: put both `CODRIX-BISEDA-CONSOLIDATION.md` and the Intercom
reference screenshots into the `codrix_website` repo (a `/docs` folder or
wherever Claude Code sessions look for context in this repo) so every phase
below can read them directly.

---

## Guardrails — apply to every phase, not repeated per-prompt

- Every decision in `CODRIX-BISEDA-CONSOLIDATION.md` is final. Don't re-ask
  about pricing model, hosting, demo architecture, or the redirect plan.
- Reference Intercom's visual **craft**, never its **claims** — no invented
  stats, logos, or testimonials. Real content only, per the design addendum.
- Reuse the locked Biseda brand assets (mark, ramp, wordmark, tagline) from
  `codrix-panel/public/brand/` — don't reinterpret them.
- New marketing copy stays Albanian-first, matching this site's own existing
  convention (already confirmed in the original audit).
- Any testimonial photo needs individual consent, separate from the business
  testimonial itself — default to text-only cards where that's unconfirmed.
- Don't touch the demo architecture (`/api/demo`, `DemoLive.tsx`) — approved
  to stay as-is this pass.

---

## PHASE 1 — Brand foundation

```
Read CODRIX-BISEDA-CONSOLIDATION.md in full before starting. This is the
foundational brand swap — later phases handle content sections.

Scope:
- Navbar.tsx, Footer.tsx: swap the Codrix wordmark/logo for the Biseda AI
  lockup. Copy logo-mark.svg and icon-full-bleed.svg from
  codrix-panel/public/brand/ into codrix_website/public/brand/ (direct copy,
  per the approved decision). "Codrix Solutions Albania" moves to Footer
  only, as a small secondary line — remove entirely from Navbar.
- layout.tsx: update JSON-LD name, OpenGraph metadata, site title to Biseda AI.
- opengraph-image.tsx: regenerate using the Biseda mark/wordmark.
- tailwind.config.mjs: replace primary/accent tokens with the locked ramp
  (#5B2CFF → #7C3AED → #A855F7 → #D6B4FE → #F3E8FF). Leave
  whatsapp/success/warning/error tokens untouched.
- Current background is dark (#05060E). The Intercom-inspired direction is
  warm cream/off-white. Report this explicitly before proceeding — flipping
  the entire site from dark to light theme is a bigger structural change
  than a token swap, and deserves an explicit yes before you do it, not an
  assumption.

Investigate first, briefly: grep every reference to the old Codrix logo
files (public/logo.png, public/new-logo.jpeg) so none are missed after
deletion. Report findings, then implement — this phase is lower-ambiguity
than later ones, a brief check is enough before proceeding.

Verify: every page loads with consistent new branding, no broken image
references, tsc/eslint clean, screenshots at desktop + mobile.
```

---

## PHASE 2 — Hero section

```
Read CODRIX-BISEDA-CONSOLIDATION.md's design addendum. Builds on Phase 1's
tokens.

Scope:
- Redesign Hero.tsx: Intercom-style mixed-weight headline (a lighter
  secondary phrase + bold emphasis phrase within one headline — reference
  the addendum's description of the technique, not Intercom's literal
  words), and a clear video slot for the demonstration video Arbri will
  supply later. Build the layout to degrade gracefully with no video
  present yet (a designed placeholder state, not a broken empty box).
- Fold in LANDING-PAGE-SIMPLIFY.md's T1 (demo CTA into the hero) and T2
  (demo auto-play on scroll-into-view) — this repo's own already-approved
  backlog, not new scope.
- Copy stays Albanian-first. Keep the existing headline's core message per
  LANDING-PAGE-SIMPLIFY's "it's good, don't touch the substance" guidance —
  report if the Biseda rebrand genuinely requires new headline copy rather
  than assuming it does.

Verify: mobile 50ms glance test on this section specifically (LANDING-PAGE-
SIMPLIFY T5), video slot renders cleanly empty, screenshots at desktop +
mobile.
```

---

## PHASE 3 — Case studies / testimonials (most content-sensitive, its own pass)

```
Read CODRIX-BISEDA-CONSOLIDATION.md in full — this implements the most
carefully-decided part of the whole plan. Do not deviate from the approved
framing.

CRITICAL: reframe ProofResults.tsx and LogosStrip.tsx to historical/
Codrix-era attribution — "the same team, the same track record, now built
as its own platform," never present-tense platform claims near these 5
logos. Real testimonials from the 5 clients are confirmed to exist — check
whether the actual text has been supplied (in this doc or a linked file)
before starting. If it hasn't arrived yet, stop and flag rather than
proceeding with placeholder text.

Per-testimonial: confirm photo consent status. Default to text-only cards
(name, role, business, quote) wherever a photo isn't explicitly cleared —
never substitute a stock photo for a real named person.

Card format: borrow Intercom's structure (name/role/company, a highlighted
key phrase within the quote, clean card layout) — not Intercom's companies
or numbers.

Retire dead code confirmed unused in the original audit: ClientLogosRow.tsx,
StatsBanner.tsx, TrustedBy.tsx, PlatformStrip.tsx.

Verify: every displayed claim traces to real, approved content — zero
placeholder or invented text anywhere in this section. Screenshots at
desktop + mobile.
```

---

## PHASE 4 — Founders section (new)

```
New section, not present on the current site. Read the design addendum.

Content needed from Arbri before this can ship with real content — flag and
request explicitly if not yet supplied: a founder photo (if wanted), and a
short founder story anchored to the same approved framing used in case
studies ("the same team, the same track record, now built as its own
platform").

Propose placement (likely after the proof/case-studies section, before
pricing — report if the actual page flow from Phases 1-3 suggests
otherwise) and a visual treatment consistent with the established system —
clean typography, generous whitespace, editorial photography if a founder
photo is supplied.

Verify: if real content hasn't arrived by execution time, render with
clearly-marked placeholder content, never publish-ready invented biography
details.
```

---

## PHASE 5 — Feature/product sections

```
Read CODRIX-BISEDA-CONSOLIDATION.md and PRODUCT-CONTEXT.md before starting —
this section must honestly represent what Biseda AI does today, not
aspirational functionality.

Scope: sections showing real capabilities — grounded WhatsApp/Instagram/
web-chat conversations, KB-grounded answers, automatic lead capture,
appointment booking, human handoff — using the Intercom-inspired tabbed/
two-column comparison pattern and product-screenshot-card treatment.

Investigate: what real product screenshots exist or can be captured from
the redesigned codrix-panel (BISEDA-FULL-REDESIGN.md's shipped phases) for
use here, rather than building new mockups from scratch — reuse real
interface imagery for authenticity over inventing new visuals.

Verify: every capability described is something the product genuinely does
today — cross-check against PRODUCT-CONTEXT.md and this project's actual
shipped features, no aspirational claims.
```

---

## PHASE 6 — Pricing section

```
Scope: rebuild pricing using Intercom's clean centered-card format, with
Biseda's approved figures (€79/€159/€279/custom, tiered by channel count).
Arbri has flagged the specific numbers may still change — isolate them
clearly in copy/i18n files rather than scattering them inline, so a future
price change is a small edit, not a hunt through component code.

Verify: matches the currently-approved figures exactly unless updated
numbers have been supplied by execution time — check before implementing,
don't assume the original figures still stand if time has passed.
```

---

## PHASE 7 — Legacy cleanup and backlog completion

```
Scope:
- Retire the 5 legacy pages confirmed superseded in the original audit:
  src/app/{crm,systems,ai-agents,portfolio,contact}/ — route to homepage or
  404.
- Complete remaining LANDING-PAGE-SIMPLIFY.md items not covered in Phases
  2-3: T3 (copy trim ~50%, applied to the new Biseda copy), T4
  (one-idea-per-section audit given all the new content), T6 (WhatsApp-CTA
  source-tagging).
- Fix the stale pricing-frozen language in GROWTH-PRINCIPLES.md and
  ONBOARDING-MAGIC-MOMENT.md per the already-approved pricing resolution.
- Delete confirmed-dead code: InteractiveDemo.tsx (already unmounted).

Verify: grep confirms no remaining references anywhere to retired pages or
deleted components, full internal-link crawl finds nothing broken.
```

---

## PHASE 8 — Final consistency pass and cutover prep

```
After Phases 1-7 are merged.

Part A — consistency audit: walk every page/section built in Phases 1-7,
compare against the design system established in Phases 1-2 (spacing,
typography, cards, color). Report every inconsistency found, without fixing
yet, then propose a final pass.

Part B — cutover checklist (documentation only, not code): confirm
readiness for the approved codrix.al → biseda.app 301 redirect. Explicitly
list Arbri's own non-code follow-ups: updating the Instagram bio link and
LinkedIn company-page URL (both currently point to codrix.al). This phase
produces the checklist — the actual domain/DNS switch happens outside this
repo, on Arbri's go-ahead.

Verify: full screenshot pass at desktop + mobile for every page, console
error check, written checklist handed back for sign-off before the domain
switch.
```

---

## Sequencing notes

Phases 1-2 are foundational — everything else builds on them. Phase 3 is
deliberately isolated as its own pass given how much careful decision-making
went into it. Phases 4-6 can run in whatever order suits you once 1-3 are
done. Don't skip Phase 8 — same reasoning as the panel redesign's own final
phase: a site that looks right page-by-page but inconsistent across pages
undermines the whole effort.