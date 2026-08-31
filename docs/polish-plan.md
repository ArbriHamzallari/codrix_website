# Codrix — Detail & Polish Plan

Reference for structure and craft: **respond.io**. Read together with `CLAUDE.md`.

**Rules before starting**

- Copy respond.io's **structure, rhythm and level of finish** — never its words, screenshots,
  logos, customer names or claims. No borrowed assets, no invented awards, no fake funding
  badges. Everything on our site must be true about Codrix.
- Work **one task per pass**. Show the diff, get approval, move on.
- Component names below come from an earlier snapshot of the repo. **Verify against the current
  working tree before editing** — the Albanian rebuild may have renamed or replaced files.
- Do not start any task without confirming which locale files it touches (sq is default).

---

## PHASE 0 — Blockers (do these first)

### 0.1 — Pricing contradicts CLAUDE.md §5
The live site shows **€79 / €159 / €279 / Me marrëveshje**. `CLAUDE.md` §5 records
**€199 / €349** as decided, with an explicit instruction not to lower prices.

**Do not change either one automatically.** Ask the owner which is correct, then update
`CLAUDE.md` §5 and the changelog to match reality. Everything downstream (positioning,
objection handling, FAQ) depends on this being settled.

### 0.2 — Sections rendering blank / faded
In a full-page capture, "Si fillojmë — 3 hapa" shows steps 2 and 3 at very low opacity, and
there is a large empty dark band between the case studies and pricing.

Likely cause: `framer-motion` `whileInView` with `initial={{ opacity: 0 }}` where the viewport
trigger never fires (long page, fast scroll, screenshot capture, reduced-motion, or JS
failure). Content that depends on JS to become visible is a real conversion risk.

Audit every scroll animation:
- Use `viewport={{ once: true, amount: 0.15 }}`
- Never animate from `opacity: 0` on content that must be readable without JS — animate
  transform only, or start from `opacity: 0.001` with a CSS fallback that sets full opacity
  when `prefers-reduced-motion: reduce`
- Identify what occupies the empty band between case studies and pricing and either fix or
  remove it

**Acceptance:** disable JavaScript in DevTools; every section is fully readable.

### 0.3 — CTA colour is inconsistent
The navbar CTA is blue/violet, the closing CTA is WhatsApp green, and the demo badge is another
blue. Decide one rule and apply it everywhere:

- **Brand accent** (single colour) = primary buttons and links
- **WhatsApp green** = used *only* for buttons that literally open WhatsApp, always with the
  WhatsApp icon
- Everything else is neutral surface + border

Record the rule in `CLAUDE.md` §11 design tokens.

---

## PHASE 1 — Hero (highest impact)

respond.io's hero does five things in sequence: announcement pill → headline → sub → two CTAs →
credibility line → **large product visual**. Ours stops after the stats and shows no product at
all until the visitor scrolls.

### 1.1 — Add a hero product visual
Right side (desktop) or below the CTAs (mobile): a phone frame showing a real WhatsApp
conversation with the agent — customer question, instant reply, booking confirmed — plus a
small floating card overlay reading `Klienti u kap automatikisht · 2 sek`.

respond.io overlays a modal with "Start interactive tour" on its screenshot. Our equivalent
overlay is a button: **`Provoje live ↓`** that smooth-scrolls to the demo section.

This is the single biggest visual gap. Do this before anything else in Phase 1.

**Acceptance:** above the fold on a 1440×900 screen, a visitor sees the headline, one CTA, and
a picture of the product working.

### 1.2 — Hero background depth
respond.io uses a large soft radial gradient behind the hero so the section has depth. Ours is
flat `#050505`.

Add one radial gradient, centred slightly above the headline, in the brand accent at very low
alpha (start ~6–8%), fading to transparent by 60%. Keep the grid pattern but drop its opacity
so the gradient reads. No neon glow on text.

### 1.3 — Announcement pill (optional, only if true)
respond.io: "New — We just raised $62.5M in Series B". Ours must be something real, e.g.
**`E re — Demo live falas, pa regjistrim →`** linking to the demo. If there is nothing true and
newsworthy, skip this entirely rather than invent one.

### 1.4 — Credibility line under the CTAs
respond.io puts a star rating and "Top-rated on G2" immediately under its buttons. We have no
G2 presence, so use what is true and local:

`9 biznese aktive · Klinika në Shqipëri dhe Austri · Përgjigje mesatare 2 sekonda`

Small type, muted colour, one line, directly under the buttons — above the stat row.

### 1.5 — Stats row treatment
Keep `2 sek / 24-7 / 9+` but give each a one-word label underneath in a muted tone, add thin
vertical dividers, and animate the numbers with the existing `CountUp` component on first view.

---

## PHASE 2 — Trust & logos

### 2.1 — Normalise the logo wall
Currently each client logo sits in a white box at a different size with the name beside it —
visually noisy. respond.io's row is uniform, grayscale, evenly spaced, no boxes.

- Remove the white containers; render logos directly on the dark background
- Force a uniform optical height (~28–32px), `object-fit: contain`
- Default `grayscale(1) opacity(.6)`, on hover `grayscale(0) opacity(1)` with a 200ms transition
- Keep the client name as a `title`/`alt`, not as visible text beside each logo
- Single row, centred, generous horizontal gap; on mobile, a slow marquee or a 2×3 grid
- Heading stays honest: `Klinika dhe biznese reale që na besojnë`

### 2.2 — Add a compliance / credentials strip in the footer
respond.io shows Meta Business Partner, GDPR, ISO, SOC2. Ours must only show what is true —
likely: company registration (NIPT), a GDPR statement link, and "Ndërtuar në Shqipëri".
**Never display a partner badge we do not hold.**

---

## PHASE 3 — The missing middle (alternating feature sections)

respond.io's body is a rhythm of alternating two-column blocks: text left / visual right, then
visual left / text right, each with a real interface image. We jump straight from the demo to
"3 hapa" to results, so the page feels thin in the middle.

### 3.1 — Section A: "Ku ikin klientët tuaj" (text left, visual right)
Visual: a WhatsApp thread showing an unanswered message with a timestamp, then the same
conversation handled by the agent. Body copy names the loss: messages at 21:00, messages during
a procedure, messages on Sunday.

Include a three-item expandable list, first item open by default (respond.io's Capture /
Convert / Retain pattern):
1. **Kap** — çdo mesazh merr përgjigje, edhe në mesnatë
2. **Kthen** — pyetjet bëhen termine, jo biseda të harruara
3. **Mban** — çdo kontakt ruhet, asnjë klient nuk humbet në inbox

### 3.2 — Section B: "Një inbox për WhatsApp, Instagram dhe Facebook" (visual left, text right)
Show the channels genuinely supported today. If Instagram or Messenger is not live yet, label
it `së shpejti` — never imply it exists (`CLAUDE.md` §9).

### 3.3 — Spacing rhythm
respond.io keeps a consistent vertical rhythm. Standardise section padding to a single scale
(e.g. `py-24 md:py-32`), and give every section the same max width and heading treatment
(eyebrow → h2 → one-line sub). Remove ad-hoc margins.

---

## PHASE 4 — Founder section (restore, rewritten)

`AboutUs.tsx` exists in the repo. Bring it back — but treated like respond.io's dark "AI Agents"
card: a badge, a strong statement, a human face, three supporting points, one CTA.

Place it **after the results section and before pricing** — it answers "can I trust this person"
right before the money question.

### 4.1 — Layout
Dark card on a slightly lighter surface, visible border, generous padding. Left: portrait
(`public/arbri-hamzallari.jpg`), rounded, subtle border. Right: badge `THEMELUESI`, heading,
two short paragraphs, three ticked points, a signature line, one WhatsApp CTA.

If a 60–90 second video ever exists, this card is where it goes — respond.io's video block is
the closest analogue.

### 4.2 — Copy (Albanian, use as written)

> **THEMELUESI**
>
> ### Nuk është program i blerë. Është ndërtuar këtu.
>
> Jam Arbri Hamzallari, inxhinier informatike nga Tirana. Codrix nuk është agjenci që rishet një
> program të huaj — asistentin e ndërtoj vetë dhe e përshtat për çdo biznes veç e veç.
>
> Kjo do të thotë tri gjëra për ju: flet shqip ashtu si flasin klientët tuaj, ndryshon brenda
> ditës kur ju duhet diçka, dhe kur keni një problem, flisni direkt me personin që e ka ndërtuar.
>
> ✓ Ndërtuar nga zero — jo i rishitur
> ✓ Ndryshime brenda 24 orësh, direkt nga unë
> ✓ Shqip dhe anglisht, i testuar me klientë realë
>
> *Arbri Hamzallari — Themelues, Codrix*
>
> [ Na shkruani në WhatsApp ]

### 4.3 — English version
Translate natively for `/en`, keeping the same three claims. Do not machine-translate.

---

## PHASE 5 — Results section

Our four case-study cards are dense: two columns of PARA/PAS bullets each, four cards in a grid.
respond.io leads with **three big numbers**, then lets customer stories sit in a carousel.

### 5.1 — Extract a metrics band
Above the cards, three large figures pulled from existing real data, each with a one-line label
and the client it came from. Animate with `CountUp`.

### 5.2 — Simplify the cards
Cap each card at three PARA and three PAS bullets. Move the rest behind
`Shiko detajet →`. Keep the metric strip; it is the strongest element.

### 5.3 — Attribute the quotes
The quotes currently float without a name. Anonymous testimonials read as fabricated
(`CLAUDE.md` §3). Either attribute each quote to a named person and role with permission, or
remove the quote and keep the metric.

### 5.4 — Carousel on mobile
Four dense cards stacked vertically is a long scroll. Use a swipeable carousel with arrows and
dots below `md`.

---

## PHASE 6 — Typography, contrast, motion

### 6.1 — Body contrast
Sub-headings and body text are too dim against `#050505`. Raise secondary text to roughly
`rgba(255,255,255,0.72)` and tertiary to `0.55`. Verify 4.5:1 contrast for body text.

### 6.2 — Type scale
Lock a scale and apply it everywhere: h1 `clamp(2.5rem, 6vw, 4.5rem)`, h2
`clamp(1.75rem, 3.5vw, 2.75rem)`, body `1.0625rem` with `line-height: 1.6`, small `0.875rem`.
Headings tighten tracking (`-0.02em`); body does not.

### 6.3 — Heading font bug
`font-heading` is used in `src/app/contact/page.tsx` but is not defined in
`tailwind.config.mjs` (`fontFamily` defines only `sans` and `mono`). Add
`heading: ['var(--font-outfit)', 'sans-serif']` or remove the class. Then use `font-heading`
consistently on every h1/h2.

### 6.4 — Motion discipline
One entrance pattern site-wide: 12px rise + fade, 350ms, `ease-out`, `once: true`. Remove
per-section variations. Respect `prefers-reduced-motion`.

---

## PHASE 7 — Navigation & footer

### 7.1 — Navbar
- Add a subtle background blur + border that appears only after ~40px of scroll
- Highlight the active section as the visitor scrolls
- Keep the language switch (`EN`/`SQ`) visible; it currently reads only `EN`, so make the
  current locale obvious
- One CTA in the navbar

### 7.2 — Footer (currently one line — expand to four columns)
1. **Codrix** — one-sentence description, logo
2. **Shërbime** — asistent WhatsApp, Instagram, Facebook, integrime
3. **Kompania** — rreth nesh, klientët, kontakt
4. **Kontakt & Ligjore** — WhatsApp, email, orari, NIPT, privatësia, kushtet

Add: privacy policy and terms pages (required for EU/Meta anyway), a real address or at least
city, and the GDPR line. Keep social icons.

### 7.3 — Sticky WhatsApp button
respond.io keeps a persistent chat entry point down the right edge. `MobileStickyBar.tsx`
exists — restore it on mobile and add a floating WhatsApp button on desktop, bottom-right,
appearing after the hero.

---

## PHASE 8 — FAQ

Order the questions by real objection strength and add the differentiator question:

1. A do të duket si robot para klientëve të mi?
2. Sa kohë duhet për ta instaluar?
3. **A e ndërtoni vetë apo rishisni një program të huaj?** *(new — this is our advantage)*
4. Po kur pyetja është shumë e ndërlikuar?
5. A janë të sigurta të dhënat e klientëve të mi?
6. A më duhet kontratë afatgjatë?
7. A funksionon jashtë Shqipërisë dhe Kosovës?
8. Cili plan është për mua?

Answers: maximum three sentences, plain language, no technical vocabulary.

---

## PHASE 9 — Meta & SEO per locale

- Title/description per locale; drop "AI Response Systems" from user-facing metadata
- `<html lang>` must follow the active locale
- OpenGraph image showing the Albanian headline
- `hreflang` between `sq` and `en`
- Move off `vercel.app` to the real domain
- `LocalBusiness` structured data with the real city, phone and hours

---

## Priority order

1. Phase 0 (all) — blockers
2. 1.1 hero visual, 1.2 background
3. 4 founder section
4. 2.1 logo wall
5. 6.1–6.3 contrast, scale, font bug
6. 5.1–5.3 results
7. 3 alternating sections
8. 7 nav & footer
9. 8 FAQ, 9 SEO
10. 1.3–1.5 hero details