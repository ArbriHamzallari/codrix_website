# CODRIX-BISEDA-CONSOLIDATION.md — investigate first, no code yet

> Confirmed decision: Codrix's existing agency business consolidates into
> Biseda AI. The 5 real clients and their story become part of Biseda's
> narrative; Codrix stops being a separate public brand and becomes secondary
> attribution only, matching the pattern already used in codrix-panel. This
> reuses `codrix_website`'s codebase (its hardened demo infra, its trim
> backlog, its design patterns) as the technical foundation — not a rebuild
> from scratch, not a literal domain redirect to somewhere else's content.

## The one question that must be answered before any copy gets written

**Are the 5 case-study clients (Dental Med Austria, Dodo Dent, SMartderm,
Ayana Clinic, Trio Dental Center) actually running on the Biseda AI platform
(Chatwoot + codrix-agent + codrix-panel, the system this whole project has
built), or an earlier/different setup?** If their results came from something
else, presenting them as Biseda AI proof would be a false technical claim
wearing a true business story — the continuity is real, the specific product
claim might not be. This has to be checked against real tenant records, not
assumed from the fact that the same founder served them.

## Task — investigate and plan, no code yet

```
Read REBRAND-BISEDA-AI.md, BISEDA-FULL-REDESIGN.md, and this repo's own
CLAUDE.md and LANDING-PAGE-SIMPLIFY.md fully before proposing anything.
Cross-reference against the codrix-panel/codrix-agent repos where needed
(they're separate repos — you may need the actual tenant/Supabase data, not
just code, to answer the question below). Plan first, no code.

PART 1 — resolve the platform-honesty question, this gates everything else:
- For each of the 5 named clients, determine whether they correspond to a
  real tenant row in Biseda's production Supabase (chatwoot_account_id set,
  real KB entries, real conversation history) — or whether they predate this
  system and ran on something else entirely.
- Report per-client, don't generalize: it's plausible some are real Biseda
  tenants and others aren't. Each case study needs its own honest answer.
- For any client that ISN'T on the current platform: propose how to handle
  it — reframe the specific numeric claim as historical/Codrix-era rather
  than a live Biseda claim, or drop that case study, or migrate them onto
  the real platform first before claiming it. Don't silently keep an
  inaccurate claim just because it's a good number.

PART 2 — investigate before proposing the rebrand plan:
- Pricing: this repo's live €79/€159/€279 vs. Biseda-side docs' stale
  €199/€349 (GROWTH-PRINCIPLES.md flags this conflict already) — now that
  consolidation is the decision, propose which becomes the real, single
  price going forward, and where every stale reference needs correcting.
  This is a product/business decision to surface for approval, not to guess.
- Business model honesty: the current copy pitches an agency installing
  custom agents. The real current state (per this project's own history) is
  founder-assisted provisioning, not true self-serve SaaS — the public
  self-serve signup work was explicitly scoped and deferred elsewhere.
  Propose positioning that's aspirational toward the SaaS platform without
  overclaiming self-serve capability that doesn't exist yet.
- Demo architecture: this site's live demo currently calls Anthropic
  directly, independent of codrix-agent, with its own separate hardening.
  Now that this becomes Biseda's actual front door, propose whether it
  should route through codrix-agent's real protected endpoint instead —
  weigh this repo's existing Upstash/cookie/origin protections against not
  maintaining two independent safety systems for the same underlying product.
- Hosting: this repo runs on Vercel today, fully working. Investigate
  whether it needs to move to Cloudflare Workers/OpenNext (like codrix-panel)
  or whether biseda.app's root can simply point at Vercel while
  app.biseda.app stays on Cloudflare — these don't have to be the same host.
  Report the real tradeoffs, don't assume consolidation requires one host.
- The 5 unmigrated legacy pages (/crm, /systems, /ai-agents, /portfolio,
  /contact) — under the old generic-agency positioning, these likely no
  longer represent anything under a single consolidated Biseda AI story.
  Propose retiring them rather than migrating, but confirm nothing there
  needs preserving first (check for any real, still-relevant content).
- codrix.al: propose what happens to it — redirect to biseda.app, or kept
  alive separately. State the real tradeoff (SEO/existing backlinks vs.
  simplicity of one domain).

PART 3 — the rebrand plan itself, informed by Parts 1-2's answers:
- Apply the locked Biseda identity (mark, ramp, wordmark, tagline) reusing
  the already-shipped assets from codrix-panel/public/brand/ rather than
  reinterpreting them.
- Reposition "Codrix Solutions Albania" to secondary attribution only
  (footer/About), matching the pattern already established in codrix-panel.
- Carry forward LANDING-PAGE-SIMPLIFY.md's T1-T6 backlog (hero-CTA
  placement, demo auto-play, copy trims, one-idea-per-section, mobile glance
  test, attribution tagging) — still good UX doctrine regardless of brand,
  apply it to the new content rather than discarding it.
- Preserve what's real and valuable as-is: whichever case studies survive
  Part 1's check, the Albanian-first convention (already correct, no change
  needed), the hardened demo's rate-limiting/origin/cookie protections
  regardless of which backend it ends up calling.

DELIVERABLE: Part 1's per-client findings, Part 2's investigated tradeoffs,
then Part 3's concrete plan with a file list — and an explicit list of
decisions needing your sign-off (pricing, demo architecture, hosting,
codrix.al's fate, and any case study needing reframing or removal) before
any code is written.
```

## What to expect back, and how to weigh it

Part 1 is the one to read most carefully — if any client's numbers don't
actually belong to the current platform, that's not a small footnote, it's a
real decision about whether to reframe, caveat, or drop that proof point
before it ever appears on a page carrying the Biseda AI name.

---

## Investigation complete — sign-offs confirmed (2026-08-13)

Part 1 came back definitive: **zero of the 5 case-study clients are real
Biseda platform tenants** (verified directly against production Supabase —
production currently holds zero real tenants of any kind, only test/fixture
rows). This matches `PRODUCT-CONTEXT.md`'s own existing statement that
Codrix's paying clients run on an older white-label platform and migrate to
Biseda last, one at a time. The 5 results are real; they're not Biseda
platform results.

**All six decisions below are confirmed — proceed to a normal plan-then-execute
pass, file by file, same discipline as every phase of BISEDA-FULL-REDESIGN.md.**

1. **Case-study reframing** — approved as proposed: historical/Codrix-era
   attribution ("the same team, the same track record, now built as its own
   platform"), never present-tense platform claims near those 5 logos.
2. **Pricing** — approved: **€79/€159/€279/custom** is the single go-forward
   Biseda AI price. Correct the stale "frozen, unresolved" language in
   `GROWTH-PRINCIPLES.md` and `ONBOARDING-MAGIC-MOMENT.md` to point at this
   resolution.
3. **Demo architecture** — approved: keep the current direct-Anthropic demo
   (existing Upstash/cookie/origin hardening) for this launch. codrix-agent
   routing is an explicit fast-follow, scoped separately later — do not block
   this launch on it.
4. **Hosting** — approved: stay on Vercel. DNS-only integration with
   Cloudflare's zone for the `biseda.app` domain — no OpenNext migration.
5. **codrix.al** — approved: 301-redirect to `biseda.app` after cutover.
   **Add to the cutover checklist explicitly**: update the Instagram bio link
   and the LinkedIn company-page URL, both currently pointing at codrix.al —
   easy to forget, would leave real traffic hitting a dead link otherwise.
6. **Brand asset sourcing** — approved: copy the SVGs from
   `codrix-panel/public/brand/` into `codrix_website/public/brand/` directly.
   No shared-location dependency between the two otherwise-independent repos.

**Suggested execution order**, given the scope (brand swap, 5 page
retirements, 3 doc corrections, dead-code cleanup) — sequence for risk, not
just file-list order:
1. Brand application first (Navbar/Footer/layout/JSON-LD/opengraph-image,
   `tailwind.config.mjs` token swap) — the foundational, lowest-ambiguity change.
2. Case-study reframing next, as its own careful pass — the most
   content-sensitive piece, deserves isolated review rather than being buried
   in a larger diff.
3. Legacy-page retirements, dead-code removal, and doc corrections last —
   lowest-risk cleanup, fine to batch together.

No code written yet. Next step: a normal plan-then-execute session per file,
starting with brand application.

---

## Design guidance addendum — Intercom-inspired visual system (2026-08-13)

Reference images provided: intercom.com, full page. **Reference the visual
craft, never copy the claims** — same principle already established in
BISEDA-FULL-REDESIGN.md's own design-language brief, which named Intercom as
one of three references with the explicit instruction not to copy any of them.

**What to genuinely borrow — visual system, fully reusable:**
- Warm cream/off-white background, dark neutral typography — already
  compatible with the locked Biseda identity's "predominantly light" rule,
  no conflict to resolve.
- Large, confident headline typography with mixed-weight lines (e.g. lighter
  gray secondary phrase + bold black emphasis phrase within one headline).
- Small tracked-caps, monospace-feel "eyebrow" labels above section
  headlines (Intercom's "FIN AI AGENT" pattern) as a section-labeling
  convention throughout the page.
- Editorial/lifestyle accent photography interspersed with clean,
  soft-bordered product-screenshot cards — adds warmth beyond pure UI
  screenshots. Flag sourcing as an open question (stock vs. custom) rather
  than assuming free imagery exists.
- Tabbed or two-column feature-comparison sections.
- Pricing card format: centered, large numbers, clear per-unit breakdown —
  reuse the FORMAT with Biseda's real €79/€159/€279/custom figures, never
  Intercom's numbers.
- Organized, categorized footer link structure.

**What must NOT be copied directly — real proof vs. fabricated proof:**
- "Trusted by 30,000+ leading brands" + real recognizable logo wall (Amazon,
  Anthropic, etc.) — this is Intercom's actual customer base. Biseda has
  zero platform tenants today. Do not invent a number or a logo wall.
  Biseda's honest equivalent is the already-approved reframed historical
  Codrix case studies (5 real clients, historical/Codrix-era attribution) —
  smaller, real, and honest beats large and fabricated.
- Named testimonial cards with real photos/attributed stats (e.g. Isabel
  Larrow, Anthropic) — **confirmed (2026-08-13): real testimonials from the
  5 historical clients exist and will be supplied.** Open sub-question:
  headshot photos require the individual's own consent, separate from the
  business's consent to be named as a client — confirm per-testimonial
  whether a photo is cleared for use, or default to a text-only card format
  (name, role, business, quote — no photo) wherever it isn't. Do not use a
  stock/placeholder photo standing in for a real named person.
- Integration-logo grid (Slack/Stripe/Salesforce/etc.) — Biseda's honest
  equivalent is its real channels (WhatsApp, Instagram, web chat), not an
  invented partner-integration list.

**New sections to add to the plan:**
- **Founders section** — real story, real name and photo, the "why" behind
  building Biseda, anchored to the same honest historical-continuity
  narrative already approved for the case studies ("the same team, the same
  track record, now built as its own platform").
- **Hero section gets a video slot** — designed now, video itself produced
  later. Nothing else blocks on the video existing.

This addendum applies to Part 3's brand-application plan and should be
incorporated into the file list/plan Claude Code produces before any code is
written — same investigate-then-propose discipline as the rest of this
document.