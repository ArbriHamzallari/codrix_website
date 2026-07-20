# CLAUDE.md — Codrix Website

**Read this file in full before proposing or writing any code, copy, or design change in this repository.**
If a request in chat contradicts a decision recorded here, say so and ask before proceeding.
Decisions in this file were made deliberately. Do not silently reverse them.

---

## 1. What this repository is

The public marketing website for **Codrix** — an AI automation company that builds and installs
AI response agents for local businesses. The agents answer customer messages on WhatsApp,
Instagram and web chat instantly, 24/7, so the business stops losing leads to slow replies.

This repo is **the website only**. The AI agent product itself lives elsewhere.

- Live: `codrixwebsite.vercel.app` (temporary — must move to the real domain)
- Owner/founder: Arbri Hamzallari, solo founder, Tirana, Albania
- Company email in code: `info@codrix.org`
- WhatsApp CTA number: `+355 68 900 7252`

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

**Secondary buyer:** clinics in Austria and the wider EU (one existing client: Dental Med
Austria). These are reached in English/German and are a later concern.

**Write every word on this site for a 45-year-old dentist in Tirana who is good at dentistry
and has never heard the word "webhook".**

---

## 3. Current clients (real, verifiable — this is the main trust asset)

Clinics: Dental Med Austria (AT), Dodo Dent (AL), SMartderm (AL), Ayana Clinic (AL),
Trio Dental Center (AL, 3 locations).
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

**Behavioural rule:** never mention, name, attack or compare against a competitor anywhere on
the site or in copy. No "unlike other providers". We win on clarity and proof, not on
attacking anyone. Do not publish anything about how a competitor builds their product.

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
- `<html lang>` — root layout is `lang="sq"`; `/en` still inherits it (needs route-group or a
  per-locale `<html lang>` — tracked in §13 SEO work).
- Metadata: Albanian on `/`, English on `/en` — done; OG image + hreflang + LocalBusiness pending.
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
  locale; add a second competing CTA; mention or compare against a competitor.
- Prefer editing an existing component over creating a near-duplicate.
- Keep changes small and reviewable. One section per pass.
- When a request conflicts with this file, say which section conflicts and ask.
- Business reality: the founder is solo and needs revenue. Prefer the change that helps close a
  client this week over the architecturally elegant refactor.

---

## 15. Changelog

Append an entry for every meaningful decision. Newest first.

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