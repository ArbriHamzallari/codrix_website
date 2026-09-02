# CLAUDE.md — Codrix Website

**Read this file in full before proposing or writing any code, copy, or design change in this repository.**
If a request in chat contradicts a decision recorded here, say so and ask before proceeding.
Decisions in this file were made deliberately. Do not silently reverse them.

All UX and onboarding decisions must comply with GROWTH-PRINCIPLES.md.
---

## 1. What this repository is

The public marketing website for **Codrix** — an AI automation company that builds and installs
AI response agents for local businesses. The agents answer customer messages on WhatsApp,
Instagram and web chat instantly, 24/7, so the business stops losing leads to slow replies.

This repo is **the website only**. The AI agent product itself lives elsewhere.

- Live: `codrixwebsite.vercel.app` (temporary — must move to the real domain)
- Owner/founder: Arbri Hamzallari, solo founder, Tirana, Albania
- Company email in code: `info@codrix.org`
- WhatsApp CTA number: `+355 68 206 1862`

### The single job of this website
Take a business owner who arrived from an Instagram DM or WhatsApp message, convince them in
under two minutes that they are losing money to slow replies, let them **try the agent live**,
and get them to message on WhatsApp.

It is not a portfolio. It is not a tech showcase. It is a closer.

---

## 2. Who the buyer is — this drives everything

**Primary buyer:** owner or manager of a small local business in Albania or Kosovo.
Dental clinics and medical clinics first (4 of 5 existing clients are clinics), then beauty
salons, restaurants, gyms, real estate agencies, e-commerce.

**Critical facts about this buyer:**

- They are **not technical**. They do not know what an "AI response system", a "diagnostic
  panel", "leakage channels" or a "system audit" is. If they read those words, they leave.
- They run their business **inside Instagram DMs and WhatsApp**. Their email address is a Gmail
  nobody opens. Email outreach to them does not work — this is tested and confirmed.
- They are **price-sensitive but not price-blocked**. See §5.
- They are **skeptical of AI** and worried it will sound robotic to their customers.
- They read Albanian. English-language marketing loses them.

**Secondary buyer:** clinics elsewhere in the EU. There is **no existing client outside
Albania** — this is a market to reach later, not one already served. Reached in
English/German when it happens.

**Write every word on this site for a 45-year-old dentist in Tirana who is good at dentistry
and has never heard the word "webhook".**

---

## 3. Current clients (real, verifiable — this is the main trust asset)

Clinics: Dental Med Austria (AL), Dodo Dent (AL), SMartderm (AL), Ayana Clinic (AL),
Trio Dental Center (AL, 3 locations).

**"Austria" in "Dental Med Austria" is part of the clinic's NAME, not its location — it is an
Albanian clinic.** Every current client is in Albania. This file previously recorded it as
`(AT)` and that error propagated into the hero, the case studies, the `/en` metadata and the
FAQ before it was caught. Never infer a client's country from its name, and never write copy
implying a non-Albanian client base until one actually exists.
Other portfolio work: AutoZone Albania, Fafa Resort, Klajdi Resort, RapsMedia.

Logos live in `public/clients/`. Case studies are in `src/components/ProofResults.tsx`.

**Rules:**
- Never invent a client, testimonial, logo, metric or quote. Everything shown must be real.
- Named clients with real logos are the single biggest advantage over the competition. Keep
  them prominent.
- Do not add anonymous testimonials ("Beauty Salon, ★★★★★"). They read as fake.

---

## 4. The competitive situation

Main direct competitor: **agjenti-ai.com** (Kosovo/Albania). Sells the same category of product.

What they do better than us:
- Entire site is in **Albanian**
- Prices shown openly and confidently (249€/month social only, 499€/month omni-channel)
- Live demo widget embedded on the homepage
- Aggressive Instagram-first outreach

Where we are stronger:
- Real named clients with logos and before/after case studies (theirs are anonymous initials)
- A named, visible founder with a face and a story (theirs is a Gmail address)
- Direct WhatsApp contact instead of a signup wall
- Our own engineering (see §9)

**Behavioural rule (revised 2026-09-02 — see changelog):** the ban is on disparaging or
unfair competitor mentions, not on naming competitors at all. Factual, fair comparisons are
allowed — crediting a competitor's real strengths, no editorializing, no disparagement, no
invented or unverifiable claims about them. What's still banned everywhere in general site
copy (homepage, secondary pages, FAQ, etc.): "unlike other providers"-style jabs, attacking a
competitor, or publishing anything about how a competitor builds their product internally.
Named, factual comparisons belong on their own dedicated `/vs/<competitor>` pages (§16) —
never woven into general marketing copy.

---

## 5. Pricing — decided, do not change

- **Starter €79/month** — WhatsApp assistant
- **Growth €159/month** — + Instagram DM, web chat (most popular)
- **Advanced €279/month** — + Messenger, multi-location, multilingual
- **Enterprise — custom**

(Updated 2026-07-19 to match §8 and the Cursor rules; the earlier €199/€349 two-tier
structure is superseded.) **Do not lower prices, and do not propose lowering them.** Past low
conversion was caused by lack of outreach volume, not by price. Price objections are answered
with proof (case studies, live demo), not discounts.

Pricing must be **shown openly on the site**. Hidden pricing makes this buyer assume it is
expensive and leave. **WhatsApp is included in every tier** — fixed as of 2026-07-19.

---

## 6. Positioning and copy rules

### Never say / always say

| Do not write | Write instead |
|---|---|
| AI Response System | Asistent që u përgjigjet klientëve |
| System audit / diagnostic | Provë falas me biznesin tënd |
| Leakage channels | Sa klientë po humbisni |
| Multi-channel orchestration | WhatsApp dhe Instagram |
| Optimize / streamline / leverage | (delete the sentence and say the money outcome) |

### Copy principles
1. **Name the loss, not the technology.** Every headline is about lost customers, lost time or
   lost money — never about AI.
2. **Concrete numbers, honest ones.** "Përgjigje në 2 sekonda" is verifiable. Estimated monthly
   profit figures are not — see §7.
3. **Short sentences.** No paragraph longer than three lines.
4. **One CTA everywhere: WhatsApp.** Not audit + call + Calendly + form + popup. One.
5. Active voice, plain verbs, no filler.

### Reference hero (Albanian)
> **Sa klientë humbet sepse s'ke kohë t'u përgjigjesh?**
> Ne ndërtojmë një asistent që u përgjigjet klientëve tuaj në WhatsApp dhe Instagram në
> 2 sekonda — 24 orë në ditë, edhe kur ju jeni duke fjetur.
> [Provoje tani falas] [Shkruaj në WhatsApp]

---

## 7. Language strategy — Albanian first (highest priority work)

**Current state: the entire site is English. There is not one Albanian string in the repo.
`<html lang="en">` in `src/app/layout.tsx`. This is the single biggest problem with the site.**

Target:
- `codrix.al` → **Albanian** (default)
- `codrix.al/en` → English (for Austria / EU clients)

Implementation guidance (the site is small — keep it simple):
- Dictionary files, e.g. `src/i18n/sq.ts` and `src/i18n/en.ts`, exporting typed string objects.
  Do **not** add a heavy i18n library for ~7 sections.
- Locale segment in the App Router; `lang` attribute on `<html>` must match the locale.
- Albanian is the default and the fallback, not a translation of English.
- Albanian copy must be written natively, not translated word-for-word from the English.

---

## 8. Structure — cut the homepage to 7 sections

The homepage currently renders 13 components. That is far too much for a non-technical buyer.

**Keep:**
1. Hero (headline + one line + WhatsApp CTA)
2. **Live demo** (immediately below the hero — see §10)
3. How it works — 3 steps (Audit → Build → Install)
4. Proof — client logos + one or two real case studies
5. Pricing — €79, €159 ,€279 and custom per month. Starter , Growth , Advanced, Enterprise.
6. FAQ — plain language, answers the "will it sound robotic" fear
7. Contact — WhatsApp CTA

**Remove from the homepage:** `DiagnosticPanel`, `LossCalculatorModal`,
`ProfitabilitySimulator`, `TimelineScenario`, `StatsBanner`, the duplicate `WhatsAppNudge`,
and `ConversionPopup`.

Reasoning: a calculator that outputs "~€2,726 estimated monthly profit" reads as a sales
gimmick to a skeptical owner, and the numbers cannot be substantiated. The live demo proves
more in ten seconds than the calculator does in two minutes. Do not delete the component files
— unmount them from the page so they can be reused later if wanted.

**Honesty rule:** any revenue or profit estimate shown to a user must be visibly labelled as an
estimate with its assumptions stated, or removed. Do not present modelled numbers as results.

---

## 9. Product direction (context — affects claims, not this repo's code)

Codrix currently fulfils clients using a third-party white-label chatbot platform
(~$500/year). **Decision: build our own agent and stop reselling.** The company is migrating to
its own multi-channel agent (WhatsApp Cloud API first, then Instagram/Messenger), reusing
infrastructure already written for a sibling project (security, encryption, rate limiting,
EN/SQ language detection, conversation engine, extraction pipeline).

Implications for this website:
- "We build our own technology, engineered in Albania" is a legitimate and central claim.
- The founder section is a real differentiator. Keep it and strengthen it.
- Do not claim capabilities that are not live yet. If a feature is planned, say "së shpejti"
  or leave it out.

---

## 10. The live demo (highest-value new feature)

`src/components/InteractiveDemo.tsx` is currently a **379-line scripted animation**. Nothing
real happens. Business owners can tell, and it wastes the most valuable slot on the page.

**Replace it with a genuinely live demo:**
- Visitor picks their business type (clinic, restaurant, salon, gym, real estate, e-commerce)
- They can edit what the agent knows (hours, prices, services) in a text box
- They chat with it in a WhatsApp-style interface and get real AI replies
- A side panel shows the lead the agent captured (name, phone, request, slot) — this is what
  actually sells; it proves the agent *captures*, not just chats
- Bilingual SQ/EN, following the site locale

Technical shape:
- New route handler `src/app/api/demo/route.ts`, same pattern as the existing
  `src/app/api/audit/route.ts` and `src/app/api/contact/route.ts`
- **The AI API key stays server-side.** Never expose it to the client.
- Per-IP rate limiting and a cap of ~15 messages per session to control token spend
- On hitting the cap: "Të pëlqeu? Le ta lidhim me WhatsApp-in tënd →" + WhatsApp CTA
- No signup, no email gate, no login wall. Friction here kills the conversion.

A working single-file prototype of this demo exists (built in Claude, HTML + vanilla JS,
calls the model directly). Port it to a React component and move the model call behind
`/api/demo`.

### Demo strategy (context)
- The demo on the site is the **closer**; outreach (Instagram DM / WhatsApp) is the **engine**.
  Both link to the same asset.
- A prospect can message a Codrix demo WhatsApp number and get a real agent conversation on
  their own phone at zero cost, because replies inside the 24-hour customer-service window are
  free. That is the outreach play.
- We **cannot** install the agent on a prospect's own business number for a short trial — that
  requires migrating their number off the WhatsApp Business app plus Meta verification. Never
  promise a "2-day trial on your own WhatsApp" on the site. The honest offer is a personalised
  demo agent trained on their business.

---

## 11. Tech stack (verified against the repo)

- **Next.js 16.1.6**, App Router, TypeScript, path alias `@/*` → `src/*`
- **React 19.2.3**
- **Tailwind CSS v4** — `@import "tailwindcss"` in `globals.css` with
  `@config "../../tailwind.config.mjs"`. Theme tokens live in `tailwind.config.mjs`.
- **framer-motion 12** for animation
- **lucide-react** for icons
- **Resend** for transactional email (`RESEND_API_KEY`, sends to `info@codrix.org`)
- `@formspree/react`, `react-calendly` also present
- Deployed on Vercel

### File map
```
src/app/
  layout.tsx          Navbar + Footer + ConversionPopup, fonts, metadata
  page.tsx            homepage composition ('use client')
  globals.css         Tailwind v4 entry + tokens
  api/audit/route.ts  audit form → Resend email
  api/contact/route.ts
  crm/ systems/ ai-agents/ portfolio/ contact/   secondary pages
src/components/       ~25 components (see §8 for which stay on the homepage)
src/data/industries.tsx   industry definitions + demo message fixtures
```

### Design tokens (current — updated 2026-07-20)
```
background #05060E   foreground #FFFFFF
muted      #AEB4C7 (secondary text; ~4.5:1 on bg)
text tiers (globals.css vars): --text-secondary rgba(255,255,255,0.72), --text-tertiary 0.55
primary    #3B6BFF (trust blue)   primary.hover #2F56E6   primary.dim rgba(59,107,255,0.15)
accent     #7B5CFF (purple — hero/gradient glow only)
whatsapp   #25D366 (see CTA rule below)
surface    #0C0F1C   surface.hover #121629   surface.border #1E2438
success #22C55E   warning #FBBF24   error #EF4444
radius: card 1rem, xl2 1.25rem, xl3 1.5rem
shadow: soft / soft-lg / card / elevated (all layered — never one harsh shadow),
        cta (green glow) / cta-blue (blue glow) / glow / sharp
fonts: Outfit (--font-outfit, `font-heading`), Inter (--font-inter, `font-sans`)
type scale (globals.css): .type-h1/.type-h2/.type-h3/.type-lead/.type-body/.type-small
surfaces: .glass / .glass-strong; backgrounds: .bg-grid-faint / .bg-vignette / .bg-noise
motion: single entrance via `<Reveal>` (12px rise + fade, 350ms ease-out, once, amount 0.15);
        SSR/no-JS safe (renders visible until mounted) — do not hand-roll whileInView from opacity:0
```

### CTA colour rule (decided 2026-07-20 — apply everywhere, per polish plan §0.3)
- **WhatsApp green (`bg-whatsapp`) + WhatsApp icon** — used *only* on buttons that literally
  open `wa.me` (our one primary CTA). This is the dominant primary button on the site.
- **Brand blue (`bg-primary`)** — non-WhatsApp primary actions only (e.g. "Provoje falas" that
  scrolls to the demo) and the highlighted pricing accent/badge.
- **Neutral** (`surface` + `surface-border`) — everything else (secondary buttons, chips).
- Never mix: a button is green iff it opens WhatsApp.

### Known issues to fix
- ~~`<html lang>` — root layout is `lang="sq"`; `/en` still inherits it~~ — fixed 2026-09-02
  via route-group split into two real root layouts.
- Metadata: Albanian on `/`, English on `/en` — done; hreflang + LocalBusiness done
  (2026-09-02); OG image pending.
- Site still on `vercel.app`. Point it at the real domain.
- Secondary pages (`/crm`, `/systems`, `/ai-agents`, `/portfolio`, `/contact`) still carry the
  old cyan look + English copy; not yet migrated to the new tokens/locale.
- ~~`font-heading` undefined~~ — fixed; `heading: ['var(--font-outfit)']` is in the config.

### Conventions
- TypeScript, no `any` in new code (`src/data/industries.tsx` has `icon: any` — fine to fix)
- Tailwind utility classes, no CSS modules for new work
- Components in `src/components/`, PascalCase, one component per file
- Colours and fonts come from the theme tokens — no hardcoded hex in components
- Secrets only in `.env`, never committed, never shipped to the client bundle
- Responsive down to 360px, visible keyboard focus, respect `prefers-reduced-motion`

---

## 12. Design direction

The current aesthetic is near-black with neon cyan, glows and grid patterns — a "developer
tool" look. It is well executed but it is aimed at someone like the founder, not at a
45-year-old dentist. It reads as cold and intimidating to the actual buyer.

Direction: keep it dark and premium, but **warm it up and calm it down** — larger, plainer
type; fewer glows and grid overlays; more whitespace; a trust-leaning accent rather than
electric cyan; real screenshots over abstract visuals.

**Do not perform a full redesign in one pass.** Propose the token changes first, show them on
the hero and demo sections, and get approval before touching the rest.

---

## 13. Roadmap (in order — do not jump ahead)

1. Albanian version of the site, Albanian-first routing (§7)
2. Rewrite all copy to plain, non-technical language (§6)
3. Cut homepage to 7 sections (§8)
4. Replace the scripted demo with the live demo + `/api/demo` (§10)
5. Fix the Starter tier to include WhatsApp; show pricing openly (§5)
6. Move to the real domain; fix metadata per locale
7. Clinic-specific landing page (`/klinika`) — 4 of 5 clients are clinics; own that category
8. Design warm-up pass (§12)

---

## 14. Working agreement for AI assistants in this repo

- Read this file before answering. Cite the section you are following when it matters.
- **Ask before**: deleting files, changing pricing, changing brand colours wholesale,
  adding a dependency, adding a new page, or changing the CTA.
- **Never**: invent clients, testimonials, metrics or case studies; add tracking or third-party
  scripts without asking; expose API keys client-side; write copy in English for the Albanian
  locale; add a second competing CTA; disparage or unfairly characterize a competitor, or name
  one outside a dedicated `/vs/` page (§4, §16).
- Prefer editing an existing component over creating a near-duplicate.
- Keep changes small and reviewable. One section per pass.
- When a request conflicts with this file, say which section conflicts and ask.
- Business reality: the founder is solo and needs revenue. Prefer the change that helps close a
  client this week over the architecturally elegant refactor.

---

## 16. Comparison pages (`/vs/<competitor>`)

Added 2026-09-02, alongside the §4 revision permitting factual competitor comparisons. These
are dedicated landing pages, not something woven into general site copy.

**Rules:**
- One page per competitor, its own route, its own metadata. Not linked from the main nav —
  footer only (a "Compare" column), plus organic/search traffic.
- Every claim about the competitor must be factual and currently verifiable against their own
  public pricing/feature pages — re-check before publishing, not just at write time, since
  competitor pricing and plan gating change.
- Credit real competitor strengths. No editorializing, no "unlike other providers" framing, no
  invented claims about how they build their product internally.
- Still **one CTA: WhatsApp** (§6 rule 4 applies here too — a comparison page is still a
  closer, not a debate).
- Structure precedent: hero naming the specific gap → category-grouped feature table → 3-4
  pillar "why choose us" → honest "who's this for" (including who should pick the competitor)
  → FAQ → CTA. Shared shell: `src/components/ComparisonPage.tsx`, data files in
  `src/data/comparisons/`. Live: `respond.io`, `Intercom`, `Crisp`, `Trengo` — each at
  `/vs/<slug>` and `/en/vs/<slug>`, footer `COMPARE_LINKS` only, see changelog.

---

## 15. Changelog

Append an entry for every meaningful decision. Newest first.

### 2026-09-02 — Geo-redirect middleware: non-AL/XK human visitors on `/` → `/en`
Completed the one piece of the 2026-09-02 SEO-foundation prompt deferred at the time: the
geo-redirect for human visitors. New `src/middleware.ts`, matcher scoped to `/` only.
- **Bot user-agents are excluded and pass straight through** — a regex covering the common
  crawler UAs (Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, Facebook's link-preview
  bot, WhatsApp's link-preview bot, a generic `bot|crawl|spider|slurp` catch-all) always gets
  `NextResponse.next()` regardless of IP, so crawlers keep indexing `/` (sq) and `/en`
  independently on their own terms — this is what makes both versions indexable at all, per
  the reasoning already in §7.
- **Country comes from `x-vercel-ip-country`, not `request.geo`** — `request.geo` was removed
  from `NextRequest` in this Next.js version (16.1.6); Vercel's edge network still sets the
  header directly, which middleware reads instead.
- Redirects to `/en` only when the header is present and is neither `AL` nor `XK`; a missing
  header (e.g. local dev, or a network Vercel doesn't tag) fails open to `/` rather than
  redirecting on no information.
- **`/en` itself is untouched by the matcher** — `config.matcher: '/'` — so there is no loop
  and no way for a human already on `/en` to be bounced anywhere.
- Verified with `curl` against `next dev`, spoofing both the UA and `x-vercel-ip-country`
  header: no header → 200 on `/` (sq, fail-open); `AL`/`XK` + human UA → 200 on `/` (stays);
  `US` + human UA → 307 to `/en`; `US` + a Googlebot UA → 200 on `/` (bot exemption holds);
  `US` + human UA hitting `/en` directly → 200, no redirect. `tsc --noEmit` and `npm run build`
  green, `Proxy (Middleware)` listed in the build output.

### 2026-09-02 — SEO foundation: real per-locale `<html lang>`, sitemap, robots.txt
An external "English Locale + SEO Foundation" prompt proposed moving Albanian off bare `/` to
`/sq`, framed as the fix for "search engines can't see a distinct English version." That premise
was checked against the actual repo state and didn't hold: `/` and `/en` were already separate,
server-rendered routes with distinct per-page metadata (not a client-side dict toggle as the
prompt assumed), and §7 explicitly decided `/` = Albanian as the target, not `/sq`. Migrating the
canonical indexed URL off `/` would have been a real SEO regression for no corresponding gain, so
that part of the prompt was declined (flagged to Arbri and confirmed before proceeding) — this
pass keeps the existing URL structure and fixes the actual gaps instead.
- **Real, fixed problem: `<html lang="sq">` was hardcoded in the single root layout and `/en`
  only flipped it client-side** via `SetHtmlLang` (a `useEffect`), so any crawler or user that
  doesn't execute JS saw `lang="sq"` on the English page. Next.js can't set a different
  `<html>` per nested route under one root layout — fixed properly via Next's "multiple root
  layouts" route-group pattern: `src/app/(sq)/layout.tsx` (`<html lang="sq">`) and
  `src/app/(en)/layout.tsx` (`<html lang="en">`), each a genuine root layout. **No URL changed**
  — route groups (`(sq)`, `(en)`) don't appear in the path, so `/`, `/en`, `/crm`, `/kushtet`,
  etc. all resolve exactly as before. Verified via `curl`: `/` now serves `<html lang="sq">` and
  `/en` serves `<html lang="en">` in the raw server response, no JS required.
- Shared markup extracted so the two root layouts don't duplicate real logic: `src/app/fonts.ts`
  (the four `next/font` calls, now called once) and `src/components/SiteShell.tsx` (announcement
  bar, navbar, footer, chat widget, the `ProfessionalService` JSON-LD — byte-identical to what
  was in the old single layout). `SetHtmlLang.tsx` deleted — no longer needed now that each
  locale has its own real `<html>` tag.
- **Added `src/app/sitemap.ts` and `src/app/robots.ts`** (neither existed before). Sitemap lists
  `/` and `/en` with `alternates.languages` (sq/en/x-default, matching the hreflang already
  declared in each page's metadata — `x-default` stays Albanian, consistent with §7's Albanian-
  first decision, not the external prompt's English-default suggestion). Robots disallows the
  four `noindex` legal pages and points at the sitemap.
- Hreflang tags (`alternates.languages`) and the `ProfessionalService` JSON-LD already existed
  per-page from the 2026-07-20 polish pass — confirmed still correct and unchanged, just
  verified they render from the split layouts too.
- Not done, out of scope for this pass: OG image per locale (still one Albanian-only
  `opengraph-image.tsx`), moving off `vercel.app`, migrating the secondary pages' English copy —
  all pre-existing, tracked above.
- Verified: `tsc --noEmit`, `eslint`, `npm run build` green (all 22 routes, same URL list as
  before). `curl` confirmed per-locale `<html lang>`, `<title>`, hreflang `<link>` tags,
  `/sitemap.xml`, `/robots.txt`; homepage anchors (`#demo`, `#cmimet`, `#pyetje`) resolve
  identically on both `/` and `/en` (untouched — `HomeSections` wasn't modified).

### 2026-08-31 — Arcade product tour embedded in "Si funksionon"
New `src/components/ArcadeTourEmbed.tsx`, mounted directly above `<Process dict={dict} />` in
`HomeSections.tsx` — the "watch it happen" option sits right next to the 3-step text
explanation, where a visitor asking "how does this work" already is. Embed src/params/flow id
are copied verbatim from Arcade's Share → Embed panel, untouched.
- **`useInView` (framer-motion), not a hand-rolled `IntersectionObserver`.** framer-motion is
  already a dependency and this repo already uses `useInView` for the same
  scroll-gated-work purpose (`CountUp.tsx`, `TimelineScenario.tsx`) — reusing it instead of
  reimplementing the same primitive. `once: true` makes the returned boolean latch permanently
  once it fires, so no extra state was needed to remember that past the observer disconnecting.
- **Real bug caught by measuring, not by eye: the aspect-ratio box was rendering 788px tall
  instead of the intended ~550px.** `padding-bottom` percentages resolve against the
  *containing block's* width — i.e. the parent's — never against the element's own `max-width`.
  Putting `max-w-4xl` and the percentage padding-bottom on the same element meant the
  percentage was computed against the full-width `<section>` (1312px content width at 1440px
  viewport) instead of the 896px box visually constraining it — solved for algebraically from
  the rendered height to confirm before fixing, not guessed. Split into two elements: an outer
  `max-w-4xl` wrapper (no percentage math) and an inner `width:100%` box carrying the aspect
  ratio, matching how Arcade's own Share panel structures this by default. Verified: 552px
  rendered vs 550px expected at 1440px, and the mobile box scales correctly at 390px.
- Copy went into `dict.arcadeTour` (`types`/`sq`/`en`) rather than hardcoded, matching every
  other section — only the title/subtitle/loading-state text; the iframe's `title` attribute is
  whatever the Arcade flow itself is named and is left as given, per the brief's own note.
- Section styled with the repo's tokens/rhythm (`section-y`, `border-t border-border`,
  `rounded-card`, `shadow-elevated`, `Reveal` for the headline) rather than the brief's
  `gray-*`/`rounded-2xl`/`shadow-lg`, matching the substitution already made for the pricing
  and getting-started sections.
- The two vendor-prefixed fullscreen attributes (`webkitallowfullscreen`/`mozallowfullscreen`)
  aren't in React's DOM attribute typings and fail `tsc` as bare JSX props — passed through via
  object spread instead, keeping the exact attribute names Arcade's snippet uses.
- Verified: `tsc --noEmit`, `eslint`, `npm run build` green. Playwright confirmed, via actual
  network request logging rather than assumption: **zero** requests to `arcade.software` before
  the section is near the viewport, then loading fires once the container crosses the 200px
  margin (84 requests, including the real player JS and the embedded flow). Zero horizontal
  overflow at 1440px and 390px; section order confirmed (tour above the 3-step cards).
  **Not verified here, and can't be from this environment:** that the flow shown is Arbri's
  *rebuilt* version and not a stale cached one — the embed genuinely loads live content from
  `demo.arcade.software` under the flow id supplied, and a screenshot shows a real Biseda AI
  dashboard walkthrough, but confirming it's the current version needs Arbri clicking through
  it himself against what he actually published in Arcade.

### 2026-08-31 — Live chat widget added (ops.biseda.app), mounted globally
Arbri pasted the embed snippet directly and asked for it on the site — new
`src/components/ChatWidget.tsx`, mounted once in `layout.tsx` after `<Footer />` so it's global
across every route and locale.
- **`next/script` (`strategy="afterInteractive"`), not a raw `<script>` tag.** Same
  non-blocking load timing as the original snippet, but goes through Next's script manager
  instead of manual DOM insertion — dedupes automatically if this ever gets added twice, and
  won't compete with hydration.
- **Two explicit conflicts with this file's own rules, flagged before implementing, proceeded
  because Arbri gave the exact script directly (that's the authorization, not a standing
  license to add third-party scripts unprompted going forward):**
  - §14: "Never... mention Chatwoot... anywhere". Nothing in this site's own markup or copy
    says Chatwoot — the SDK global (`window.chatwootSDK`) and the script path (`/packs/js/
    sdk.js`) are visible to anyone who opens dev tools, which is a different exposure than
    visible page copy, but worth being aware of.
  - §6/§11: "one CTA everywhere: WhatsApp". A live chat bubble is a second contact channel.
    Not enforced against here since `FloatingWhatsApp`/`MobileStickyBar` are currently
    unmounted mid-rebuild anyway, so there's no competing floating CTA live regardless.
- **🔴 Real violation found in testing, not fixable from this repo:** opening the widget shows
  **"Powered by Chatwoot"** in the panel footer, in English — on the Albanian site, to every
  visitor. This directly contradicts the founder section's "not a bought program, built here"
  claim (§9), and it's the literal thing §14 is trying to prevent. This is rendered by the
  Chatwoot instance itself from `ops.biseda.app`, not by anything in `codrix_website` — the fix
  is an inbox/widget-branding setting on that Chatwoot instance's admin, outside this repo.
  **Needs Arbri's attention before this is fully compliant with the site's own rules.**
- Verified via Playwright: script requests 200 from `ops.biseda.app` (campaigns/messages/
  inbox_members/contact/logo), `window.chatwootSDK` defined, widget panel opens on click with
  real inbox greeting copy, zero console errors on `/` and `/en`, zero horizontal overflow at
  1440px and 390px. `tsc --noEmit`, `eslint`, `npm run build` all green.

### 2026-08-31 — Favicon now matches the actual logo
The favicon was still the pre-rebrand identity — a dark navy rounded tile with a blue
chat/infinity glyph — while `BrandLockup` (navbar, footer) renders the real mark: two
overlapping purple circles from `public/brand/logo-mark.svg`. They shared nothing.
- Switched to the App Router file convention, generated from the real brand sources:
  `app/icon.svg` (copied from `logo-mark.svg`), `app/icon.png` (96px, PNG fallback for
  browsers that don't take SVG favicons) and `app/apple-icon.png` (180px).
- **`apple-icon.png` is rasterised from `icon-full-bleed.svg`, not `logo-mark.svg`** — that
  file exists specifically for OS icons, and its own header explains why: iOS applies its own
  superellipse mask, so the pre-rounded bordered form would get double-rounded.
- **Removed `metadata.icons: { icon: '/favicon.png', apple: '/favicon.png' }`** from
  `layout.tsx`. It pointed at the old identity and, alongside the `app/icon.jpg` file
  convention that was also present, meant two different icons were being declared at once.
- **Stale files moved, not deleted** (§14): `src/app/icon.jpg` and
  `src/app/correct-favicon.jpg` → `public/brand/legacy/`. They had to leave `src/app/` because
  the file convention would keep emitting them as icons. `public/favicon.png` is now
  unreferenced but left in place — say the word to remove it.
- Verified on both locales: exactly three icon links emitted (`icon.png` 96x96, `icon.svg`
  `any`, `apple-touch-icon` 180x180), all three resolve 200 with the right content types, and
  no link still points at the old identity. Rendered PNGs visually confirmed as the two-circle
  mark. `npm run build` green.

### 2026-08-31 — Section 08 built: volume-based pricing with a billing toggle
`Pricing.tsx` rewritten in place (not a second `PricingSection.tsx` — §14 prefers editing the
existing component over a near-duplicate) and mounted at slot 08. One contact-volume selector
drives all three paid tiers together, plus monthly/yearly.
- **⚠️ Conflicts with §5, flagged not silently accepted.** §5 says pricing is decided and
  "do not lower prices". The lowest volume bracket holds §5 exactly (€79/€159/€279) and higher
  brackets only go up — but the **20% yearly discount is a genuine price reduction** (Starter
  €79 → €63/mo equivalent). Arbri supplied this spec himself and its own preamble calls the
  discount arbitrary and adjustable, so it ships; `YEARLY_DISCOUNT` is a single constant to set
  to 0 to remove it. §5 should be updated or the discount dropped — it shouldn't stay
  contradicted.
- **Volume brackets and their prices are placeholders**, marked as such in the component. Only
  the first bracket is a real decision.
- **Copy came from `dict.pricing`, which already held all four tiers** with the exact taglines
  and features the spec listed. Only the controls' labels are new (`volumeQuestion`,
  `volumeTiers`, billing labels, `demoPrompt`/`demoCta`), added to `types`/`sq`/`en`.
- **Enterprise stays static structurally, not by name-check.** `PricingTier.price` is now
  optional and set *only* on Enterprise; a tier carrying its own price string renders it
  verbatim and never consults the matrix or the billing toggle. Verified unchanged across
  every volume × billing combination.
- **No `YOUR_NUMBER` placeholder** — uses the existing `whatsappUrl()` helper, so the CTAs
  point at the real number already used site-wide.
- **`#demo`, not the spec's `#provoje-vete`** — that id doesn't exist; the live demo section is
  `#demo`. Verified the anchor resolves. Section id is `#cmimet`, the navbar's target.
- **CTA colour follows §11, not the spec.** The spec painted the highlighted CTA purple, but
  every one of these buttons opens `wa.me`, and §11's rule is "a button is green iff it opens
  WhatsApp — never mix". Kept `bg-whatsapp`, matching the previous pricing card. One-line
  change if the rule is meant to be revisited.
- **Hydration bug avoided, not in the spec:** it formatted prices with
  `toLocaleString('sq-AL')`. Node and browser ICU can disagree on the group separator, and this
  component is server-rendered, so that diverges the moment a figure passes 1,000 — which it
  does (€449 × 12 = €5,388). Replaced with deterministic grouping keyed off `dict.locale`.
- **Dropdown a11y gaps closed:** the source's menu could only be dismissed by picking an
  option — it ignored outside clicks and Escape, and carried no ARIA. Now has
  `aria-haspopup`/`aria-expanded`/`aria-controls`, `role="listbox"`/`option` with
  `aria-selected`, outside-click and Escape dismissal.
- CTA buttons use `cn()` so `mt-6` vs `mt-auto` resolves by intent rather than by Tailwind's
  CSS ordering; verified flush to the card bottom on all four cards at both widths.
- Verified: `tsc --noEmit`, `eslint`, `npm run build` green. Playwright drove the real UI —
  all three paid tiers move together across all three brackets (79/159/279 → 99/199/349 →
  129/259/449); yearly recalculates with the struck total always above the discounted one
  (€948→€758, €1.908→€1.526, €3.348→€2.678); Enterprise stable across every combination with no
  strikethrough; real wa.me href, no placeholder; Escape closes the dropdown; dropdown inside
  the viewport at 390px and 1440px; zero console errors, zero horizontal overflow, both locales.

### 2026-08-31 — Correction: "Austri" location claims removed site-wide
**"Austria" in "Dental Med Austria" is part of the clinic's name, not its location — it is an
Albanian clinic, and every current client is in Albania.** Copy implying an Austrian or EU
client base was live and false. Fixed in five places, plus this file, which was the source.
- `dict.hero.credibility` — "9+ biznese · Shqipëri & Austri" → "9+ biznese · Shqipëri"
  (and the English equivalent).
- `dict.proof.caseStudies[0].location` — "Austri, BE" → "Shqipëri" ("Austria, EU" → "Albania").
  The client **name** is untouched everywhere, as are the logo `alt` texts.
- **Two spots beyond the two the correction listed:**
  - `dict.faq.items[6]` — the FAQ's own geography answer. It said "Shqipëri dhe Austri"
    *because the previous pass changed it that way*: the doc supplying that section had
    written Albania-only, and it was "corrected" to add Austria on the strength of §3 listing
    the clinic as `(AT)`. The original was right; reverted.
  - `src/app/en/page.tsx` — the `/en` meta description claimed "Trusted by real clinics across
    Albania and the EU". This one is indexed by search engines, so it was the most exposed of
    the five and appeared in neither known spot.
- **Root cause fixed, not just the symptoms.** §2 described a "secondary buyer: clinics in
  Austria and the wider EU (one existing client: Dental Med Austria)" and §3 listed
  `Dental Med Austria (AT)`. That is what produced the bad FAQ edit. Both corrected, with an
  explicit note in §3 not to infer a client's country from its name.
- **Left alone deliberately, flagged rather than changed:** `areaServed: ['AL','XK','EU']` in
  the `ProfessionalService` JSON-LD (`layout.tsx`) is a statement of markets served, not of
  clients held, so it isn't the same false claim — but it's the next thing to revisit if the
  standard should be "Albania only" everywhere. The "international clients" phrasing on
  `/ai-agents`, `/crm` and `/portfolio` refers to *the customer's own* clients (tourists,
  guests), not Biseda's, and wasn't derived from this clinic.
- Verified: `tsc --noEmit`, `npm run build` green. Playwright swept all 11 routes in both
  locales — visible text, `meta description`, OpenGraph description and JSON-LD — for any
  "Austri"/"Austria" outside the literal business name: none. Hero line and `/en` description
  confirmed rendering corrected; all five logo `alt` names confirmed intact.

### 2026-08-31 — Section 09 built: FAQ as a horizontal auto-scroller
Accordion `FAQ.tsx` rewritten as the wrapper for a new `ui/faq-scroller.tsx`; mounted at slot
09, replacing that skeleton. Both bugs the doc identified in the source were real and are
fixed: the keyframes had no classes applying them (cards would have sat still) and
`.scroller-mask` was used but never defined. Hover-to-pause added as the doc asked.
- **Anchor `#pyetje` kept** — the navbar's FAQ link targets it in both locales. The doc's
  component renders a bare `<div>` with no id; it's a `<section id>` now.
- **Copy is dict-driven, not the doc's hardcoded Albanian.** `dict.faq` already held all eight
  questions *and* full approved answers — the doc assumed only questions existed. Its shorter,
  card-sized answers are now in `sq`/`en`; the previous longer ones are in git if preferred.
- **Factual correction to the doc's q7.** It answered "Aktualisht klientët tanë janë në
  Shqipëri" — but §3 lists Dental Med Austria (AT), the hero says "Shqipëri & Austri", and the
  logo strip two sections above literally shows that Austrian logo. Rewritten to name both
  countries, keeping the doc's more conservative framing (the copy it replaced claimed "gjithë
  Evropën", which was the real overclaim).
- **q5 drops the GDPR claim** for "EU servers + isolated per business", per the doc's own
  reasoning that compliance implies an audit status not yet verified. Worth noting this
  *removes* a claim that was previously shipped.
- **Tokens, not `gray-*`** (fifth time): `ink` / `ink-muted` / `secondary` / `border` /
  `rounded-card` / `shadow-soft`, on the cream section background so the white cards read.
- **`Reveal` instead of the source's inline `opacity: 0` + `fadeInUp`** — the repo's single
  site-wide entrance (§11), and it renders visible before hydration, so the heading can't get
  stranded invisible. That keyframe was not added.
- **Real bug the doc didn't catch: row 3 would have shown a blank gap sliding through.** A
  `translateX(-50%)` loop only reads as seamless while one half of the track is at least as
  wide as the visible row. Rows 1-2 carry three cards (1248px ≥ 1152px row) and are fine, but
  row 3 has only two questions — 832px against a 1152px row, so 320px of empty track would
  scroll past every cycle. `HorizontalScroller` now repeats its children until a half clears
  three cards; row 3 renders four per half (1664px). Measured: all three rows seamless.
- **Reduced motion handled properly.** The global kill-switch in globals.css only collapses the
  duration, which would have snapped the track to its `-50%` end state rather than stopping it.
  The animation is now cancelled outright and the row becomes a real scroll container
  (`overflow-x: auto`, duplicate half hidden) — otherwise every card past the first was
  unreachable for those users. Verified: frozen, and scrollable.
- Cards are `w-[290px]` below `sm` so a whole card fits a 390px screen, `w-96` above.
- Verified: `tsc --noEmit`, `eslint`, `npm run build` green. Playwright at 1440/390px and with
  reduced motion forced — three rows scrolling at their own speeds/directions, every row's
  half ≥ its width (seamless), hover pauses and releasing resumes, edge mask applied on all
  three, 20 cards, zero console errors, zero horizontal overflow. No third-party platform name
  in the FAQ or anywhere on the page, in either locale, asserted against a banned list.

### 2026-08-31 — Section 05 built: "Si fillojmë — 3 hapa" connected-steps cards
Implemented the how-it-works integration into slot 05. New `ui/how-it-works.tsx` (generic,
copy-less); `Process.tsx` rewritten as its content wrapper and mounted, replacing that skeleton.
- **Anchor: `#si-funksionon`, not the doc's `#how-it-works`.** `grep` confirmed `how-it-works`
  is unused, but `#si-funksionon` is the live target of the navbar's "Si funksionon" link in
  *both* locales (`sq.ts:12`, `en.ts:12`) and the scroll-spy. Using the doc's id would have
  dead-ended the nav; the doc's own fallback rule says to move the id to the real anchor.
- **Tokens, not the doc's hardcoded hex.** The doc assumed this repo lacks the tokens and
  hardcoded `#5B2CFF`/`gray-*`. It has them: `#5B2CFF` → the existing `primary` (`#6D35F2`,
  the fourth time this substitution has been needed), `gray-900/500/100/200` → `ink` /
  `ink-muted` / `secondary` / `border`. §11 conventions ban hardcoded hex in components.
- **Section is `bg-background` (cream), not the doc's `bg-white`** — and this is functional,
  not cosmetic: the cards are white with a hairline border, so on a white section they would
  have all but disappeared. Cream section + white cards is also the pattern sections 02 and
  02b already use. For the same reason the rail circles ring `ring-background`, not
  `ring-white`, which would have haloed against the cream.
- **Copy is dict-driven, as every other section is.** Headline, subtitle and all three step
  titles/descriptions already existed verbatim in `dict.process` — verified before touching
  them. The nine benefit bullets are the only new copy; added to `types`/`sq`/`en` rather than
  hardcoded Albanian, which would have left `/en` showing Albanian (§14).
- **Content rule honoured and verified, not assumed:** no engine or third-party platform name
  appears. Asserted programmatically against a banned list (Chatwoot, Intercom, Twilio,
  ManyChat, Zendesk, Freshchat, Tidio, Crisp, Botpress, Dialogflow, Landbot, respond.io) over
  the rendered text of the section *and* the whole page, in both locales — all clear.
- **Two real bugs in the doc's layout, both caught by measurement:**
  - **The rail didn't line up with the cards.** Its grid had no gap while the card grid has
    `gap-8`, so the columns are different widths and the outer two circles sat ~11px off the
    cards they label (circles 379/720/1061 vs cards 368/720/1072). The doc's fixed
    `left-[16.6667%] w-[66.6667%]` only holds for a *gapless* grid. Rail now carries the same
    `gap-8` and the line insets by `calc((100% - 4rem) / 6)` — circle centres now match card
    centres to the pixel at 1440 and 834.
  - **The rail rendered on mobile, where it can't mean anything.** It's a fixed 3-column row,
    but below `md` the cards stack to one column — three circles in a row above three stacked
    cards. Rail is now `md+` only, and each card carries its own number badge below `md`.
- `Zap` kept for step 3, matching `OmnichannelFeatures` — Zap means speed/instant reply
  site-wide, per the doc's §4 note.
- Hover `scale-105` verified not to overlap neighbours at 768/900/1024/1440px: the 32px gutter
  narrows to 24-27px at worst, never to zero. Disabled under `motion-reduce` — globals.css
  strips the transition duration for those users, and an untransitioned hover jump is worse
  than no hover effect.
- Verified: `tsc --noEmit`, `eslint`, `npm run build` green. Playwright at 1440/834/390px —
  3 cards, 9 bullets, rail aligned and centred, hidden on mobile, zero console errors, zero
  horizontal overflow, both locales.

### 2026-08-31 — Section 02b built: the trusted-by logo strip
Implemented the `logos3` integration into the `#besimi` slot, replacing that skeleton.
`ui/logos3.tsx` rewritten to the prompt's API (`heading`, `logos`, `className`, plus an
additive `id` and `description`), `TrustedByLogos.tsx` now dict-driven.
- **Nothing needed installing.** `src/components/ui/`, `cn`, Tailwind v4, TS and all five
  listed deps were already present. **`card.tsx` was skipped** — `logos3.tsx` never imports it,
  same call the 2026-08-25 session made about `button.tsx` for `carousel.tsx`. The existing
  trimmed `carousel.tsx` (no prev/next, no `Button` import) is kept for the same reason.
- **Copy is the existing text pack**, unchanged: `dict.logos.title` / `dict.logos.subtitle`. No
  new strings invented. The five logos are the real clients from §3, at the paths already in
  `LogosStrip.tsx` — same assets, repeated 3x for a seamless loop.
- **Full colour, full opacity.** The old strip greyed these back to `grayscale opacity-70`;
  per §3 these named logos are the site's biggest trust asset, so they now render at full
  strength, in tiles ~3x the old area (240x144 at lg, up from 96x40).
- **Two departures from the source, both forced by the actual assets, both measured first:**
  - The source renders bare `<img className="h-7 w-auto">`. These five span aspect ratios
    **0.80 (Dodo Dent, portrait) to 1.98 (Trio, wide)** — a 2.5x spread — so height-only
    sizing would render Trio two-and-a-half times wider than Dodo Dent, and "every logo big"
    is unreachable. Uniform tiles + `object-contain` instead.
  - **Three of the five PNGs carry their own background** (sampled, not assumed: Aiyana Med and
    Dental Med Austria are black, Dodo Dent is a teal gradient). Bare on the cream
    `bg-background` they'd be two black rectangles and a teal one floating unframed, so each
    gets a white tile — the same white-chip reasoning `LogosStrip` documented, now scaled up.
- **Real bug caught by measurement, invisible in a screenshot: 1320px of horizontal page
  overflow.** Fixed-size tiles need `basis-auto`, not the source's `basis-1/3 … lg:basis-1/6`
  (those size each slot to a share of the container, narrower than the tiles, so tiles overlap
  their slots) — but with `basis-auto` the carousel root, a flex item defaulting to
  `min-width: auto`, refused to shrink below its ~3900px track and blew past `max-w-6xl`.
  `w-full min-w-0` on the root lets the inner `overflow-hidden` clip. Now 0px at 1440/834/390.
- **Optical balance, measured not eyeballed:** painted logo areas started at 10k-19k px² with
  Dodo Dent the clear outlier (its asset has a wide dead margin baked in). Tiles made squarer
  (1.67 from 1.875) and Dodo Dent given `scale-125` — only its own gradient overspills and
  clips, never the mark. Now every logo paints at ~100px height (10k-20k px²).
- **Reduced motion respected:** embla drives the marquee with JS transforms, which the global
  CSS kill-switch in `globals.css` cannot reach, so the AutoScroll plugin is omitted entirely
  when `useReducedMotion()` is true. Plugin options only — the markup is identical either way,
  so this can't repeat the SSR/client hydration mismatch that bit `ProblemOverload`.
  Verified: strip is completely static under forced reduced motion.
- **Latent bug fixed while here:** `StorySections.ProblemSection` (superseded, unmounted, still
  compiled) also renders `TrustedByLogos`. Adding a required `dict` prop broke its build, and
  hardcoding `id="besimi"` would have given two mounted copies the same anchor. `id` is a prop
  now, passed only from `HomeSections`.
- Verified: `tsc --noEmit`, `eslint` (own files), `npm run build` green. Playwright at
  1440/834/390px — 15 tiles, uniform size per breakpoint, all images served (no failed
  requests), all five alts present, marquee confirmed moving (x 43 → -10 over 1.2s), zero
  console errors, zero horizontal overflow. The pre-existing `CategoryPopup.tsx` lint error is
  untouched and unrelated.

### 2026-08-31 — Section 02 redesigned: problem → Biseda AI, in one interaction
`ProblemOverload.tsx` rewritten as a three-phase state machine (`idle` → `flood` → `handled`)
so the section shows the answer, not just the complaint. `dict.problemOverload` restructured to
match. No other section touched; navbar untouched.
- **Copy:** headline is now `20 mesazhe. / 0 përgjigje të humbura.` (the `0` in brand purple —
  the one emphasis, and it ties the figure to the AI outcome). The explanatory paragraph is
  gone and was **not** replaced with another one; the interaction carries the argument. The
  `PROBLEMI` label stays. The old `aftermath` payoff line was dropped too — it said the replies
  never came, which now contradicts the ending.
- **The nine messages, senders, channels and timestamps are untouched.** Verified field by
  field against the approved set before committing to the rewrite, not assumed — only an
  `assignee` was added per row (Recepsioni / Shitjet / Financa / Kujdesi; role labels, not
  invented staff names, per §3). The state machine never alters message content; only the
  status around it changes.
- **The story:** press the bell → nine messages land on a stagger that *tightens* as it goes
  (`0.1i − 0.0035i²`) with a live "N të reja" counter climbing, so the pile reads as arriving
  faster than a person could answer → after a 1.5s dwell Biseda AI takes over on its own: the
  header morphs to `Biseda AI u përgjigj / Çdo bisedë u caktua te ekipi i duhur`, the unread
  dots clear, and every row gains `✓ Përgjigjur → <team>`. Bell badge goes `9` (ink) → `✓`
  (purple). "Shihe përsëri" replays it.
- **`ui/notification-popover.tsx` is no longer mounted.** Its `Notification` shape has no room
  for per-row status or a two-state header, and it holds `notifications` in state initialized
  once at mount — so it silently ignores prop changes, which is exactly what a controlled
  flood→handled transition needs. Stretching it further would have meant a ~15-prop primitive
  fighting its own API. The card's visual design is carried over unchanged (white, hairline
  border, `rounded-card`, soft shadow, divided rows). File left on disk, unmounted, like the
  other superseded components.
- **Three bugs caught in review, all invisible in a static read of the code:**
  - The bell badge never became the check. An infinitely repeating pulse sat on the element
    `AnimatePresence mode="wait"` had to swap; a repeating animation never "completes", so the
    exit never resolved and the incoming child never mounted — the badge just sat at opacity 0
    forever. The pulse now lives on a static sibling; only finite content animates.
  - "Shihe përsëri" closed the card instead of replaying, because the bell's toggle and the
    replay button shared one handler. Split into `toggle` / `play` / `replay`; replay unmounts
    first because row entrances only fire on mount.
  - **Two hydration mismatches under `prefers-reduced-motion`**, neither visible at normal
    motion: `useReducedMotion()` is false during SSR and true on the client, so (a) branching
    the pulse ring's *existence* on it changed the DOM, and (b) branching `whileHover`/
    `whileTap` on it changed whether framer added `tabIndex`. Fixed by never branching render
    output on `reduce`: the ring hides via `motion-reduce:hidden`, and a `MotionConfig
    reducedMotion="user"` wrapper lets framer drop the transforms itself.
- Verified: `tsc --noEmit`, `eslint`, `npm run build` green. Playwright at 1440 / 834 / 390px,
  both locales, and with reduced motion forced — 9 rows, 9 statuses, 9 assignees; card centre
  matches viewport centre to the pixel at every width; no scroll container; zero truncated or
  clipped text; full idle→flood→handled→replay→handled cycle exercised; zero console errors;
  zero horizontal overflow.

### 2026-08-27 — Section 02 reworked: panel dropped, the bell is the section
Arbri's call: no rectangle, no mock device, no chrome behind the bell — and nothing allowed to
be cut off when it opens. `ProblemOverload.tsx` rewritten; `notification-popover.tsx` gained
three more additive props (all defaulting to prior behaviour).
- **The framed dark panel, the ghosted channel-icon pile, and the channel icon/tint maps are
  all gone.** The section is now centred copy, a 64px white bell beneath it, and the list. The
  two-column split is gone with them.
- **Re-themed for the cream page** via the component's own colour props (white popover, `ink`
  text, `border`/`cream` tokens, `primary` unread dot) instead of its dark-glass default.
- **Nothing is clipped any more — the actual fix:** `popoverClassName` overrides `absolute`
  with `relative`, putting the list in normal flow. That drops the component's built-in
  `max-h-[400px] overflow-y-auto`, which had been cutting the list off mid-item, and means the
  list grows the section instead of floating over the one below. All nine messages now render
  in full. Verified by assertion, not by eye: `scrollHeight === clientHeight` on the popover,
  and zero elements where `scrollWidth`/`scrollHeight` exceed the client box.
- **Third fix in `notification-popover.tsx`, a genuine gap in the source:** `NotificationItem`
  accepts `dotColor` but `NotificationList` never forwarded it, so the unread dot was hard-wired
  to `bg-white` and disappeared entirely on a light popover. Now passed through. Also added
  `iconSize` (default 16, unchanged) so the bell can carry a section on its own, and
  `buttonAriaLabel` + `aria-expanded` — the trigger is icon-only and had no accessible name.
- **Two bugs caught in review, both invisible in a static read:**
  - The payoff line was wrapped in `Reveal`. It mounts far below the fold the moment the list
    opens, so its scroll trigger would never fire and the line would simply never appear.
    Now a plain element.
  - The bell sat in an `inline-block` wrapper, which handed the in-flow popover's width to
    shrink-to-fit — it resolved to whatever the longest message happened to need (332px of an
    intended 448px) and would drift with any copy edit. Wrapper is a block now, with the ping
    ring positioned rather than wrapping.
- Verified: `tsc --noEmit`, `eslint`, `npm run build` green. Playwright at 1440px and 390px —
  bell centre, popover centre and viewport centre all agree to the pixel; 9 items; no scroll
  container; no truncated text; payoff visible; zero console errors; zero horizontal overflow.

### 2026-08-27 — Section 02 built: the notification-overload bell
Implemented the notification-popover integration as slot 02's Problem section. New
`src/components/ProblemOverload.tsx` (mounted at `#problemi`, replacing that skeleton) plus
`src/components/ui/notification-popover.tsx` and `src/components/ui/button.tsx`.
- **Setup was already in place** — `src/components/ui/`, `cn` at `src/lib/utils.ts`, `@/*` →
  `src/*`, Tailwind v4, TS. Installed the two genuinely missing deps
  (`@radix-ui/react-slot`, `class-variance-authority`); `lucide-react` and `framer-motion`
  were already here. `npm audit fix --force` still banned (§15, 2026-07-20).
- **`button.tsx` added, verbatim** — the 2026-08-25 session deliberately skipped it because
  `carousel.tsx` didn't actually import it; `notification-popover.tsx` genuinely does. Its
  `destructive`/`outline`/`secondary` variants reference shadcn token names this repo doesn't
  define (`primary-foreground`, `ring`, `input`, `accent-foreground`, …) and will render
  unstyled if used — documented in a header comment. The only call sites today pass their own
  full `className`, so nothing is broken now.
- **`notification-popover.tsx` is the given source, with five additive optional props**, each
  defaulting to the exact prior behaviour so bare usage is byte-identical: `title` and
  `markAllLabel` (the header strings were hardcoded English — §14 forbids English copy in the
  Albanian locale, and this is the one section that would otherwise not localize),
  `formatTimestamp` (see below), and `open`/`onOpenChange` so the section can hide its nudge
  once the visitor has clicked. All animation, motion timing, markup, styling and default
  chrome are untouched.
- **Real hydration bug avoided, not in the source:** the shipped component stamps items with
  `toLocaleDateString()` over `new Date()` dummy data. Server and client can disagree on locale
  and timezone, which desyncs the two renders. `ProblemOverload` builds its timestamps from a
  fixed reference instant (never `Date.now()`) and passes a `formatTimestamp` that derives
  relative Albanian stamps ("tani", "17 min", "2 orë") — deterministic on both sides, and a
  better fit for the concept than a date on messages that supposedly just arrived.
- **The concept:** one bell, badge reading 9, on a dark panel labelled "Telefoni juaj, ora
  21:47". Behind it, a ghosted pile of channel rows. Press it and nine real messages fan in —
  WhatsApp, Instagram, Messenger, website chat, email — staggered, past the 400px scroll
  boundary so the list visibly continues. The component's default dark-glass chrome is used
  as-is; the panel is deliberately built on the existing `surface` token (the same dark token
  `DemoLive` keeps) so that chrome reads as a phone at night rather than a stray dark widget
  on the cream page.
- **Bug caught in review at 390px:** the popover's default background is ~60% opaque, so the
  channel-icon pile bled through the text and wrecked readability on mobile, where the popover
  covers nearly the whole panel. The pile now fades out while the popover is open — also the
  truer read, since the open popover *is* that pile spelled out.
- **Copy is real and localized** — `dict.problemOverload` added to `types`/`sq`/`en`. Names and
  messages are invented example customers, which is fine (they're illustrative message
  snippets, the same precedent `ProblemMessageEvidence` set on 2026-08-25) — no invented
  clients, metrics or testimonials, per §3.
- **Slot 02 split in two:** `#problemi` is now real; the trusted-by half became a separate
  `#besimi` skeleton (step 02b) still to be merged in. Note `ProblemMessageEvidence.tsx` and
  `StorySections.ProblemSection` — the previous take on this section — remain on disk,
  unmounted, and are now superseded by this one.
- Verified: `tsc --noEmit`, `eslint`, `npm run build` all green. Playwright at 1440px and
  390px: badge reads 9, click opens the staggered list, all nine Albanian items and their
  relative stamps render, popover stays inside the viewport (17px→337px of 390), zero console
  errors, zero horizontal overflow.

### 2026-08-27 — Homepage stripped to two real sections + skeleton wireframe
Arbri is rebuilding the landing page from scratch. Per his instruction, `HomeSections.tsx` now
mounts exactly two real sections — the `RobotHero` and `OmnichannelFeatures` ("Një Panel. Çdo
Kanal.") — both **completely untouched**: same components, same `dict` copy, same animations,
same auto-advance/click-to-jump behaviour. Every other section is unmounted, **not deleted**
(§8's standing rule): `ProductIntro`, `LogosStrip`, `StorySections`, `DemoLive`,
`ActionShowcase`, `KnowledgeFlow`, `InboxShowcase`, `Process`, `ProofResults`, `AboutUs`,
`Pricing`, `FAQ`, `FinalCTA`, `MobileStickyBar` and `FloatingWhatsApp` are all still on disk
and unchanged, along with every `dict` entry that feeds them.
- **New `src/components/SectionSkeleton.tsx`** — a temporary wireframe frame (shimmering bars +
  dashed visual frames, seven layout variants) that holds each empty slot. Each one is labelled
  with its step number, the section it's reserving and a one-line note on the job that section
  has to do, so the planned structure is legible while it's being rebuilt.
- **Page order now matches the agreed structure**: 01 Hero (real) → 02 Problem + trusted-by →
  03 One panel, every channel (real) → 04 Try it live → 05 How you start, 3 steps → 06
  Testimonials/results → 07 Founder story → 08 Pricing → 09 FAQ → 10 Final CTA. Note this
  moves the omnichannel section *up*, from after `InboxShowcase` to slot 3 — that's the
  structure Arbri specified, and it resolves the "three sections that all say every-channel-one-
  inbox" overlap flagged on 2026-08-25 by leaving only this one standing.
- **Skeletons reuse the real anchor ids** (`#demo`, `#si-funksionon`, `#rezultate`,
  `#themeluesi`, `#cmimet`, `#pyetje`, `#kontakt`) so the navbar links, scroll-spy and footer
  links keep resolving against a stripped page instead of silently dead-ending. Swap a skeleton
  for its real section keeping the same `id` and nothing else needs touching.
- **One real edit inside the hero**: its secondary CTA pointed at `#product` (`ProductIntro`),
  which is now unmounted — repointed to `#omnichannel`, the section that's actually still there.
  Primary CTA still points at `#demo`, which now exists as a skeleton.
- **`Navbar` and `Footer` left mounted.** They render globally from `layout.tsx` and are shared
  by `/crm`, `/systems`, `/ai-agents`, `/portfolio`, `/contact` and the four legal pages, so
  removing them would break seven other routes — outside the scope of "strip the homepage".
  Arbri's own structure list ends with "Final CTA + footer", so the footer stays regardless.
- `.skeleton-bar` shimmer added to `globals.css`, already covered by the file's global
  reduced-motion kill-switch and additionally disabled explicitly. Delete that block and
  `SectionSkeleton.tsx` once the last skeleton is replaced.
- Verified: `tsc --noEmit`, `eslint`, `npm run build` all green. Playwright-confirmed at 1440px
  and 390px — all ten slots render in the correct order, hero and omnichannel section render
  identically to before, zero console errors, zero horizontal overflow on mobile.

### 2026-08-26 — Evidence-stack timing corrected to match source exactly
A follow-up copy of the evidence-stack integration doc arrived claiming `ProblemMessageEvidence`
hadn't been built yet and the old static cards were still live. Checked disk state before
acting on that: the component already existed, was imported and rendered in `StorySections.tsx`,
and the old hardcoded strings existed nowhere except inside the new component itself — so
that premise was wrong, not something to redo from scratch. The one real, actionable
difference in the new doc was the animation timing: it specified `duration: 0.3, delay: index
* 0.1` as matching the original `notification-popover.tsx` source exactly, where the version
built the day before used `0.4`/`index * 0.25` (from the first doc's numbers). Updated to the
corrected values. Verified: `tsc --noEmit`, `eslint`, `npm run build` green; screenshot confirms
all three cards render fully settled with the new timing, marquee strip above still intact,
no bell/badge markup, zero console errors.

### 2026-08-25 — Trusted-by logo marquee added above the Problem section
Implemented `TRUSTED-LOGOS-INTEGRATION.md` (part 2 of the Problem+Trusted-By merge; part 1 was
`ProblemMessageEvidence`, same day). New `src/components/ui/carousel.tsx` (trimmed shadcn
primitive — `Carousel`/`CarouselContent`/`CarouselItem` only, no prev/next controls),
`src/components/ui/logos3.tsx`, and `src/components/TrustedByLogos.tsx`, mounted at the top of
`ProblemSection` in `StorySections.tsx`, inside the same `<section>` as the existing headline/
accordion/evidence-stack grid (per the doc's own diagram) — that grid, its copy, and the
accordion are untouched.
- **Real logos, not new assets.** Used the exact five paths already in `LogosStrip.tsx`
  (`/clients/dental-med-austria.png`, `dodo-dent.png`, `SMARTDERM_page-0001-scaled.png`,
  `aiyana-clinic.png`, `trio-dental-center.png`), duplicated 3x (15 items) so the auto-scroll
  loop has no visible gap, per the doc.
- **Skipped `button.tsx` and its two dependencies.** The doc's prose said `carousel.tsx`
  "genuinely needs `Button`" this time, but the actual code block it gave doesn't import
  `Button` anywhere and doesn't define `CarouselPrevious`/`CarouselNext` (the only things that
  would use it) — so installed just `embla-carousel-react` + `embla-carousel-auto-scroll` and
  left out `@radix-ui/react-slot` + `class-variance-authority` and the `button.tsx` file, since
  they'd be genuinely unused. Also dropped the `ArrowLeft`/`ArrowRight` lucide import from
  `carousel.tsx` for the same reason (dead now that prev/next controls aren't in this version).
- **`from-background`/`to-background` used, not `from-white`.** Checked `tailwind.config.mjs`
  first as the doc asked — `background` (`#F7F5F0`, warm cream) is a real token here, and this
  section sits on that background, not white. Using `from-white` would have left a visible
  seam at the fade edges.
- **Real bug caught before shipping, not in the doc:** the doc's `Logos3` renders logos as a
  bare `<img src>`. `LogosStrip.tsx`'s own top-of-file comment already explains why that breaks
  for these specific assets — they're opaque white-background PNGs, not transparent — so a
  bare `<img>` on the cream section background would show visible white rectangles per logo.
  Wrapped each one in the same small white chip (`bg-white border border-border rounded-sm`)
  `LogosStrip` already uses for this exact reason, using `next/image` (`fill`) for consistency
  with the rest of the codebase instead of a raw `<img>`.
- Caption color swapped from the doc's `text-gray-400` to the existing `text-ink-muted` token.
- Verified: `tsc --noEmit`, `eslint`, `npm run build` all green. Playwright-confirmed the
  marquee is actually moving (tracked one logo's x-position: 361px → 123px over 1.5s, no jump),
  zero console errors, caption reads as a quiet aside beneath the real "Klientët nuk presin"
  headline.
- **Flagging prominently, not deciding silently:** `LogosStrip` (the existing full section,
  with its own heading "Klinika dhe biznese reale që kemi shërbyer") sits immediately before
  `ProblemSection` on the homepage (`HomeSections.tsx` — no section in between). With this
  change, a visitor now sees the *same five logos* twice in one scroll: once as a static row
  under that heading, then again seconds later scrolling past as this new marquee. Screenshot-
  confirmed — the two logo rows are visible in the same viewport, ~50px apart. This wasn't
  something either integration doc addressed (both only discuss merging Problem + Trusted-By,
  not `LogosStrip`). Did not unmount `LogosStrip` unilaterally since neither doc asked for
  that and it's an existing, separately-styled section — but this needs a decision before
  shipping: likely candidates are unmounting `LogosStrip` now that this merged section covers
  the same trust signal, or moving/differentiating one of the two.

### 2026-08-25 — Problem section message cards: click-popover → scroll-triggered evidence
Implemented `PROBLEM-EVIDENCE-INTEGRATION.md`. New `src/components/ProblemMessageEvidence.tsx`
replaces the inline `IncomingStack` helper (and its `INCOMING` array) that used to live in
`StorySections.tsx`, mounted in the same spot inside `ProblemSection` (right column, next to
the Kap/Kthen/Mban accordion — headline, paragraph and accordion untouched, per the doc).
- `cn` already existed at `src/lib/utils.ts` exactly as the doc expected — no new file, no new
  `clsx`/`tailwind-merge` install.
- **Same three messages/icons as before, restyled + re-animated.** The doc's messages
  (WhatsApp/Instagram/Web chat, same three Albanian snippets and timestamps) are character-for
  -character what `IncomingStack`'s `INCOMING` array already hardcoded — confirmed before
  touching anything, since the doc claimed this and it mattered for whether real content would
  change. It's purely a style/motion swap: icon-tinted text row → colored icon chip, and the
  old `Reveal`-with-cascading-margin stack → this component's blur+slide-in
  (`whileInView`, staggered 0.25s, `once: true`).
  - Kept the doc's precedent of hardcoding these three example messages directly in the
    component rather than moving them to `dict` — that's what the code being replaced already
    did (no `dict.story.problem` field for them), so this isn't a new inconsistency, just an
    existing one (the example snippets stay Albanian on `/en` too, same as before).
  - Colors: swapped the doc's placeholder `bg-[#5B2CFF]` for the existing `bg-primary` token,
    and `bg-emerald-500` for the existing `bg-whatsapp` token (`#25D366`) — this repo already
    has a WhatsApp-green token specifically for this brand, so using it here instead of a
    generic Tailwind green keeps the WhatsApp chip visually consistent with every other
    WhatsApp-colored element on the site. Instagram's gradient chip and the white
    card/border/shadow treatment are unchanged from the doc.
- Removed `IncomingStack` and `INCOMING` from `StorySections.tsx` as dead code once nothing
  called them — kept the `MessageCircle`/`Instagram`/`Facebook`/`Globe` lucide imports, since
  `ChannelsSection` further down the same file still uses all four; dropped the `cn` import
  from that file since it was only ever used inside `IncomingStack`.
- Same `React.ElementType`-vs-strict-mode TS error hit twice before in this repo (`ui/features.tsx`,
  session earlier today) showed up again here on `<Icon size={16} />` — fixed the same way,
  typing the icon field as `LucideIcon` instead.
- Verified: `tsc --noEmit`, `eslint`, `npm run build` all green. Playwright-checked the actual
  scroll behavior per the doc's own checklist: screenshotted the section on first scroll-into
  -view (all three cards settled, correctly colored/staggered) and again ~100ms after
  scrolling away and back — already fully settled at that point, which is what "fires once,
  doesn't replay" looks like (a replay would still show the later cards mid-blur/offset that
  early into the stagger). Confirmed zero bell/badge/notification markup anywhere in the
  section, and confirmed the headline, body copy, and Kap/Kthen/Mban accordion are pixel-
  identical to before.
- **Still pending, per the doc itself:** the logo strip half of this merge (21st.dev's
  "trusted by" card) hasn't been picked yet — this section stays two visually separate blocks
  (client logo strip above, problem statement below) until that second pass happens.

### 2026-08-25 — Omnichannel features section added
Implemented `OMNICHANNEL-SECTION.md`. New `src/components/ui/features.tsx` (generic,
Biseda-agnostic — an auto-advancing feature list with a click-to-jump progress bar and a
crossfading image panel) plus `src/components/OmnichannelFeatures.tsx` (the Biseda content
wrapper), mounted in `HomeSections.tsx` right after `InboxShowcase`.
- **No new dependencies** — `framer-motion` and `lucide-react` already installed, as the doc
  said.
- **Bug fix delivered as specified:** `primaryColor` now actually drives every accent via a
  `--feature-primary` CSS variable, replacing the hardcoded `sky-500` in the doc's source
  component. Used the existing `primary` token value (`#6D35F2`) as the passed-in color rather
  than the doc's placeholder `#5B2CFF`, same reasoning as the two prior sessions (hero
  refinement, `RobotHero`): a brand-purple token already exists and is used everywhere else,
  so a second slightly-different purple would read as inconsistent.
- **i18n:** the doc left "split into i18n or hardcode" as an open question. Every other
  homepage section is `dict`-driven and this is the only bilingual site (`/`, `/en`), so
  hardcoding Albanian directly in the component would've been the one section on the page
  that doesn't localize. Added `dict.omnichannel` (`eyebrow`, `title`, `items[]`) to
  `src/i18n/{types,sq,en}.ts` — Albanian copy is the doc's text verbatim; English is a natural
  translation, not literal. `ui/features.tsx` itself stays fully generic/copy-less, matching
  the `src/components/ui/` convention (`CountUp.tsx`, `Reveal.tsx`) — `eyebrow`/`title` are now
  required props rather than hardcoded strings.
- **Placement:** the doc assumed the navbar's `#how-it-works` anchor was open for this section.
  This repo's real anchor is `#si-funksionon` (already `Process.tsx`, the "Si fillojmë — 3
  hapa" section) — a different anchor name and already occupied. Per the doc's own fallback
  instruction ("if `#how-it-works` already has different content, mount as its own section and
  confirm placement with Arbri rather than guessing"), gave it its own id (`#omnichannel`) and
  placed it after `InboxShowcase` (real screenshot proof) and before `Process` (the 3-step
  "how we start" — a natural narrative order: see the product → understand the mechanism → see
  how onboarding works). **Flagging, not assuming:** there's real thematic overlap with
  `InboxShowcase` and the still-unmounted `ChannelsSection` (`StorySections.tsx`) — all three
  are some version of "every channel, one inbox." Worth Arbri's eye on whether this should
  replace one of those instead of sitting alongside them.
- **Images:** none of the three `/images/features/*.png` paths exist. Per the doc's explicit
  instruction, did not invent, fetch, or reuse an existing screenshot (including the real
  Biseda/Intercom inbox image from the `InboxShowcase` session — reusing it here would've
  repeated the same "whose product is this actually a screenshot of" problem flagged then).
  `image` is now optional on each feature; when absent, the right-hand panel renders a plain
  neutral placeholder (rounded box, muted matching icon) instead. TODO left in
  `OmnichannelFeatures.tsx` listing exactly the three screenshots needed (unified inbox, AI
  auto-reply, human handoff) per the doc's §3 checklist.
- **Real bug caught during build, not in the doc:** passing the lucide icon components as
  props from `OmnichannelFeatures.tsx` (a Server Component, no directive) into `Features`
  (`'use client'`) failed the production build — "Functions cannot be passed directly to
  Client Components" — since function/component references aren't serializable across the
  RSC server→client boundary. Fixed by marking `OmnichannelFeatures.tsx` `'use client'` too,
  matching how `ProductIntro.tsx` already handles the same pattern in this repo.
- **Layout deviation from "only color wiring changes":** swapped the source component's
  `min-h-screen py-16 px-4` / `max-w-7xl` wrapper for this repo's standard `section-y px-8
  lg:px-16` / `max-w-[1400px]` rhythm (same as every other homepage section) and swapped
  `gray-*`/hardcoded borders for the existing `ink`/`ink-muted`/`text-secondary`/`border`
  tokens. `min-h-screen` on a 3-item feature list sandwiched between other sections would have
  forced at least a full viewport of height regardless of content — a correctness fix for
  fitting the actual homepage, not a restyle. Auto-advance interval, click-to-jump, scroll-into
  -view, and the image crossfade transition are untouched.
- Verified: `tsc --noEmit`, `eslint`, and `npm run build` all green (two real errors caught and
  fixed along the way — the RSC boundary bug above, and a `LucideIcon` vs `React.ElementType`
  strict-mode type error, present in the doc's own source snippet). Playwright-verified
  desktop and mobile: purple accent renders on the active card, click-to-jump and the 10s
  auto-advance both work, placeholder panel renders correctly, mobile's horizontal card-scroll
  behaves as in the original.

### 2026-08-25 — RobotHero refinement pass (background, watermark, copy layout)
Follow-up to the same day's `RobotHero` integration — visual polish only, no 3D/nav/copy-text
changes.
- **Background:** flat gray `entorno.fondo*` gradient replaced with an off-white base
  (`#FDFCFF → #F7F6FB`) plus a restrained purple radial glow. Used the existing `primary`
  token (`#6D35F2`) throughout instead of the two new hex values the refinement brief
  suggested (`#5B2CFF`/`#A855F7`) — a brand-purple token already exists and is used
  everywhere else on the site (nav CTA, logo, `InboxShowcase` active tab), so introducing a
  second, slightly different purple would have created an inconsistency the brief's own
  fallback rule ("use this pair *if no token already exists*") was written to avoid.
- **Watermark:** right-aligned behind the robot, opacity dropped from 0.13 to 0.025 (tried
  0.045 first per the brief — still legible at a glance in a screenshot check, so went lower),
  hidden below `lg`.
- **Robot glow:** added a `bg-primary/10–15` blurred circle behind the canvas.
- **Hero copy layout:** headline restructured to three stacked lines (muted/strong/muted),
  paragraph moved to the existing `.text-secondary` token, CTAs restyled to brand-purple
  primary + white/bordered secondary (replacing the black/white pair from the initial
  integration), matching this repo's CTA-color convention. Credibility line copy tightened
  in both `src/i18n/sq.ts` and `en.ts` (`9+ biznese · Shqipëri & Austri · ~2 sekonda
  përgjigje`) per the brief's exact replacement text — a real (small) copy edit, not just
  restyling.
- **Layout fix beyond the brief's literal spec:** the brief's mobile/tablet instruction was
  "stack headline → ... → robot underneath, not overlapping." Implementing the requested
  vertical-centering on desktop while keeping the canvas `absolute inset-0` full-bleed at all
  sizes caused the robot to visually collide with the CTA row and paragraph on tablet
  (834px) and mobile — confirmed by screenshot before fixing. Fix: section height goes
  `h-auto min-h-[1000px]` (`sm:960px`) below `lg`, and the canvas wrapper moves from
  full-bleed to `absolute inset-x-0 bottom-0 h-[420px]` (`sm:460px`) below `lg`, giving the
  robot its own region under the text instead of sharing space with it. Reverts to the
  original full-bleed `h-dvh` treatment at `lg+`. This only resizes the canvas's CSS box
  (R3F's `viewport.width` then adapts on its own, as intended) — it does not touch
  `RobotPrototype`/`RobotEye`/animation code.
- Verified with Playwright screenshots at 1440/834/390px and a full-height mobile capture
  (robot fully visible below the fold, no overlap); confirmed the section immediately below
  the hero (`ProductIntro`) is pixel-identical to before — this was a self-contained hero
  change. `npm run build` green throughout.

### 2026-08-25 — Homepage hero swapped to `RobotHero` (3D, React Three Fiber)
Implemented `ROBOT-HERO-INTEGRATION.md`. `src/components/HomeSections.tsx` now mounts
`RobotHero` (`src/components/ui/robot-hero.tsx`) instead of `Hero.tsx` at the top of the
homepage. `Hero.tsx` itself was **not** deleted — unmounted only, per the doc's own instruction,
in case this gets reverted or A/B'd.
- **New dependencies:** `three`, `@react-three/fiber`, `@react-three/drei`, `react-icons`.
  `@react-three/fiber` v9 was required for React 19 support; installed clean, no
  `--legacy-peer-deps` needed.
- **3D geometry/shaders/animation left byte-for-byte as specified** in the integration doc, per
  its own instruction. Two structural additions were made on top, both outside that "do not
  alter" boundary:
  - `showNavbar` prop (default `true`, passed `false` at the homepage call site) — the
    component ships its own built-in `AntennaNavbar` overlay, which would otherwise stack a
    second, English, differently-styled nav directly under the real `Navbar.tsx` that already
    renders globally from `layout.tsx`.
  - A `children` slot rendered in the hero's bottom content area, which the upstream template
    left completely empty (only the faint "BISEDA AI" watermark and the 3D figure — no
    headline, no value prop, no CTA). Shipping that as-is would have dropped the site's core
    persuasion copy from the first thing a visitor sees, against §1's "convince them in under
    two minutes" mandate. The homepage now passes the same `dict.hero` copy and button styling
    the previous `Hero.tsx` used (Albanian, sq/en via the existing dict system) into that slot.
  - Brand tie-in: `pantallaColor="#6D35F2"` (the current primary purple) on the glass-capsule
    eye/screen glow; chassis `color` left at the component's neutral default rather than also
    forced purple, so the robot doesn't read as a solid brand-colored toy — this is a judgment
    call, not a hard requirement, and easy to change.
- **Known issue, not yet fixed — needs a decision:** `<Environment preset="studio">` (part of
  the "do not alter" 3D setup) fetches an HDRI lighting file from `raw.githack.com` /
  `raw.githubusercontent.com` (the `pmndrs/drei-assets` GitHub repo) on every homepage load.
  That's an unrequested third-party runtime dependency — the exact thing §14 says to never add
  without asking — and a reliability/latency risk on the hero's critical path if that host is
  slow or blocked on a visitor's network. Not removed here because doing so means altering the
  3D setup the integration doc said to leave untouched; flagging instead. Likely fix: download
  the HDR once and serve it from `/public`, passing `files="/env/studio.hdr"` to `<Environment>`
  instead of `preset="studio"`.
- **Bundle-size note:** the three.js/R3F/drei chunk is ~1.0 MB raw / ~271 KB gzipped, added to
  the homepage's first load — this is the heaviest single addition to the site's JS to date, on
  the page a price-sensitive small-business owner sees first, often on mobile. Dev-server load
  was fine locally (~1.2s to network-idle) and no console errors, but this hasn't been measured
  on an actual throttled mobile connection — do that before treating this as final, per §10's
  "magic moment in under 2 minutes" doctrine.
- Left untouched, exactly as the integration doc flagged: the shopping-bag icon
  (`PiShoppingBagBold`) next to the CTA button inside `AntennaNavbar` is e-commerce-template
  leftover. It's currently inert either way since `showNavbar={false}` on the homepage, but
  it's still in the component for anyone who mounts it with the nav on.

### 2026-07-20 — Premium polish pass (respond.io-quality), merged from both polish plans
Implemented `docs/polish-plan.md` (structure/CRO) + `docs/polish-fix-plan.md` (visual craft)
as one deduplicated pass. Build green throughout.
- **Foundation / design system:** layered shadow tokens, radius scale, brighter `muted`;
  `globals.css` text tiers, locked type scale (`.type-*`), `.section-y` rhythm, `.glass`/
  `.glass-strong`, `.bg-grid-faint`/`.bg-vignette`/`.bg-noise`, `.lift`/`.press`/
  `.link-underline`, marquee, global reduced-motion kill-switch.
- **Motion + blocker 0.2:** new `<Reveal>` primitive (SSR/no-JS safe — renders visible until
  mounted) is the single entrance everywhere; fixes the blank/faded sections. Disable-JS test
  now passes.
- **Blocker 0.3 CTA rule:** documented in §11 and applied — WhatsApp-green+icon only on
  wa.me buttons; brand-blue for non-WhatsApp actions ("Provoje falas"); neutral elsewhere.
- **Hero:** two-column with `HeroPhone` product visual (WhatsApp booking + floating
  "lead captured" card + AI chip), layered background depth, announcement pill, credibility
  line, CountUp stats, bigger type/buttons.
- **Logos:** uniform chips (opaque assets), grayscale→color hover, mobile marquee.
- **Founder (`AboutUs`):** provided Albanian ju-copy + native English, editorial glass card,
  placed after results / before pricing.
- **Story sections (new `StorySections`):** A "Ku ikin klientët" (Kap/Kthen/Mban accordion) +
  B "Një inbox" unified-channels visual, alternating layout.
- **Results:** CountUp metrics band (3 real figures, each attributed to a named client),
  cards capped 3+3, quotes attributed (`— {client}`), mobile carousel + dots.
- **Demo + Pricing:** elevated/glass surfaces; pricing glow border, centered badge, hover lift.
- **Navbar:** scroll state, active-section highlight, SQ/EN pill, green CTA.
- **Footer:** 4 columns + "Ndërtuar në Shqipëri". **Legal:** `/privatesia`, `/kushtet`,
  `/en/privacy`, `/en/terms` (GDPR-aligned, noindex). **Sticky WhatsApp:** desktop float +
  mobile bar.
- **FAQ:** reordered by objection strength, added "A e ndërtoni vetë?" differentiator Q,
  polished accordion.
- **SEO:** per-locale metadata + OpenGraph/Twitter, hreflang (sq/en/x-default),
  `ProfessionalService` JSON-LD, generated OG image with the Albanian headline. `/en` html-lang
  flipped client-side via `SetHtmlLang` (static crawlers still see `sq` — full fix needs a
  route-group split).
- **Open items:** transparent-PNG logos for a box-free row; real NIPT not shown (no fake
  badges); translated client quotes need confirmation; secondary pages (`/crm` etc.) not yet
  migrated; domain move pending.

### 2026-07-20 — Demo hardened + moved to the official SDK; model default → Haiku
- Security fixes from `docs/SECURITY-FIXES.md` applied to the API routes: HTML-escaping of
  user input in the Resend emails (`contact`, `audit`), generic error responses, an
  `ALLOWED_ORIGINS` origin allow-list, prompt-injection bounds on `/api/demo`, and shared
  Upstash-Redis rate limiting + a cookie-bound per-session turn cap (`src/lib/security.ts`,
  `src/lib/ratelimit.ts`). Requires `ALLOWED_ORIGINS` + `UPSTASH_REDIS_REST_*` in prod; the
  limiters fail open when unset. Anthropic account spend cap set (unconditional backstop).
- `/api/demo` now calls Claude via the official `@anthropic-ai/sdk` (installed) instead of raw
  `fetch`, using structured outputs (`output_config.format`) and typed `Anthropic.APIError`
  handling.
- **Decided: demo model default is now `claude-haiku-4-5`** (fast/cheap for a public demo),
  overriding the 2026-07-19 `claude-opus-4-8` default. Fallback to `claude-sonnet-5` via
  `DEMO_MODEL` if Albanian replies feel weak. **Never Opus for the demo.**
- Note: `npm audit fix --force` is banned in this repo — it downgrades `next` to 9.3.3 and
  breaks the App Router. Ignore the transitive postcss advisory or wait for a `next` patch.

### 2026-07-19 — Albanian copy pass #1 applied (external review)
- Applied the founder-supplied copy review to `src/i18n/sq.ts`: benefit-first rewrites
  (hero subtitle no longer says "ne ndërtojmë…"), lead panel renamed "Kontakti i klientit",
  spend-cap CTA now asks for the sale ("Gati ta provoni në biznesin tuaj?"), Process retitled
  "Si fillojmë" with step 3 "Fillon t'u përgjigjet klientëve", simplified pricing
  subtitle/footnote, warmer logos subtitle, believable WhatsApp prefill message.
- **Decided: formal ju/juaj address site-wide** (audience is 40-60-year-old owners; ju conveys
  respect/trust). This included conjugating the hero headline
  ("Sa klientë humbisni sepse s'keni kohë t'u përgjigjeni?") and the final CTA
  ("Mos humbni asnjë klient tjetër") to ju — the reviewer had said to keep those two
  untouched, but keeping them in ti would have broken the site-wide consistency the same
  review demanded. Revert those two strings only if the founder prefers the ti punch.
- Primary CTA label everywhere is now "Na shkruani në WhatsApp" (was "Shkruaj në WhatsApp").
- Kept "WhatsApp i përfshirë në çdo plan" in the pricing subtitle (the review's simplified
  version dropped it, but it is a §5 requirement).

### 2026-07-19 — Full homepage rebuild (respond.io-inspired), Albanian-first, live demo
- Founder explicitly approved a one-pass redesign with a respond.io-style palette,
  overriding the §12 "no full redesign in one pass" guard for this pass.
- New design tokens: deep navy-black background `#05060E`, trust-blue primary `#3B6BFF`,
  purple accent for hero glow, WhatsApp green for chat CTAs; `font-heading` (Outfit) now
  defined in `tailwind.config.mjs` (fixes the missing-class bug).
- Albanian-first i18n shipped: typed dictionaries in `src/i18n/{types,sq,en}.ts`;
  `/` renders Albanian, `/en` renders English; `<html lang="sq">`; Albanian metadata.
  Known limitation: `/en` currently inherits `lang="sq"` from the root layout.
- Homepage cut to the 7 sections of §8, composed in `src/components/HomeSections.tsx`:
  Hero, LogosStrip, DemoLive, Process, ProofResults, Pricing, FAQ (+ FinalCTA contact,
  MobileStickyBar). Removed from the page (files kept): DiagnosticPanel, LossCalculator,
  ProfitabilitySimulator, TimelineScenario, StatsBanner, WhatsAppNudge, ConversionPopup,
  InteractiveDemo (scripted).
- Live demo (§10) implemented: `src/components/DemoLive.tsx` + `src/app/api/demo/route.ts`.
  Business-type picker, editable knowledge box, WhatsApp-style chat, live lead-capture
  panel. Claude API called server-side via fetch (no new dependency); per-IP rate limiting;
  15-user-message cap ending in a WhatsApp CTA. Requires `ANTHROPIC_API_KEY` in env;
  model overridable via `DEMO_MODEL` (default `claude-opus-4-8`).
- Pricing updated to 4 open tiers €79/€159/€279/custom, WhatsApp in every tier (§5 updated).
- All Albanian strings catalogued with context notes in `copy-review-sq.md` for founder
  review / ChatGPT refinement. Client quotes were translated from English — must be
  confirmed with clients before publishing.

### 2026-07-19 — Initial context file
- Documented buyer, positioning, pricing, competitive situation and stack.
- Decided: Albanian-first site; plain non-technical copy; homepage cut to 7 sections;
  scripted demo replaced with a live demo behind `/api/demo`; pricing stays at €199/€349 and
  is shown openly; single WhatsApp CTA; no competitor mentions; build own agent, stop
  reselling.