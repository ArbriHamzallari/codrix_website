# Albanian Copy Review — for ChatGPT refinement

> **Status 2026-07-19:** The first review pass has been applied to `src/i18n/sq.ts` —
> benefit-first hero subtitle, "Kontakti i klientit" lead panel, stronger spend-cap CTA
> ("Gati ta provoni në biznesin tuaj?"), "Si fillojmë", simplified pricing subtitle/footnote,
> believable WhatsApp prefill, and a full **ti → ju/juaj** conversion site-wide (including the
> hero headline and final CTA, conjugated to ju to stay consistent). The "Current" columns
> below show the ORIGINAL first-draft strings — treat `sq.ts` as the source of truth for any
> future pass.

Every Albanian string on the new homepage lives in **`src/i18n/sq.ts`**. This document lists
them all with context so you (or ChatGPT) can rewrite them to sound more authentic, then paste
the improved versions back into that one file. Nothing else needs to change — the site reads
everything from there.

---

## Context brief (paste this into ChatGPT before the strings)

> You are rewriting website copy for **Codrix**, a small company in Tirana, Albania that
> installs AI assistants for local businesses. The assistant replies to a business's customers
> on WhatsApp and Instagram within 2 seconds, 24/7, and captures the customer's name, phone
> number and request so the owner never loses a lead to a slow reply.
>
> **The reader** is a 45-year-old owner of a dental clinic, beauty salon, restaurant, gym or
> real-estate agency in Albania or Kosovo. They are NOT technical — they have never heard words
> like "AI system", "integration" or "automation" and if they read them, they leave the page.
> They run their whole business inside WhatsApp and Instagram DMs. They are skeptical that a
> "robot" will sound fake to their clients, and they are careful with money but willing to pay
> when they see proof.
>
> **The voice** should sound like a trustworthy young Albanian professional talking to a
> business owner over coffee — direct, warm, confident, zero corporate jargon, zero
> English-isms. Short sentences. Talk about lost customers and money, never about technology.
> Use "ti/tënd" informal address consistently (that is the current choice — flag if "ju/juaj"
> would be more appropriate for this audience).
>
> **Hard rules:**
> - Never call it "AI", "bot", "sistem", "softuer" — call it "asistent".
> - Never promise results that can't be verified. "Përgjigje në 2 sekonda" is OK (measurable);
>   "do fitosh 2x më shumë klientë" is NOT.
> - One call to action everywhere: write to us on WhatsApp.
> - Keep roughly the same length as the original string — these fit a designed layout.

---

## Strings by section

Format: `key` → current text → context/vibe note.

### Hero (first thing the visitor sees, huge headline)

| Key | Current | Context |
|---|---|---|
| `hero.badge` | Ndërtuar në Shqipëri, për bizneset shqiptare | Small pill above headline. Trust signal: local company, not a foreign SaaS. |
| `hero.title` | Sa klientë humbet sepse s'ke kohë t'u përgjigjesh? | THE headline. Must sting — names the pain (lost customers), not the product. Approved reference wording from strategy doc; refine only lightly. |
| `hero.subtitle` | Ne ndërtojmë një asistent që u përgjigjet klientëve tuaj në WhatsApp dhe Instagram në 2 sekonda — 24 orë në ditë, edhe kur ju jeni duke fjetur. | One-sentence answer to the headline. Note the mixed ti/ju here ("klientëve tuaj… ju jeni") — make address form consistent. |
| `hero.ctaDemo` | Provoje tani falas | Button that scrolls to the live demo below. Low-commitment invite. |
| `hero.ctaWhatsapp` | Shkruaj në WhatsApp | Primary conversion button, appears all over the site — keep identical everywhere. |
| `hero.stats` | 2 sek / Përgjigje mesatare · 24/7 / Gjithmonë aktiv · 9+ / Biznese reale na besojnë | Three small proof numbers under the buttons. All must stay literally true. |

### Logos strip

| Key | Current | Context |
|---|---|---|
| `logos.title` | Klinika dhe biznese reale që na besojnë | Above 5 real client logos (4 dental/medical clinics + 1 dermatology). |
| `logos.subtitle` | Instalime reale. Rezultate reale. | Tiny line under the title. Anti-fake-testimonial signal. |

### Live demo (the interactive centerpiece — visitor chats with a real assistant)

| Key | Current | Context |
|---|---|---|
| `demo.badge` | Demo live | Pill above the section title. "Live" may be fine as-is in Albanian usage — your call. |
| `demo.title` | Provoje vetë — bisedo me asistentin tani | Invites them to actually try it, like a customer would. |
| `demo.subtitle` | Zgjidh llojin e biznesit tënd, ndrysho çfarë di asistenti, dhe bisedo me të si të ishe klient. Shiko si i kap të dhënat e klientit në anën e djathtë. | Explains the 3-panel layout: picker/editor left, chat middle, captured lead right. On mobile panels stack, so "në anën e djathtë" may need softening ("më poshtë"). |
| `demo.pickBusiness` | Zgjidh biznesin tënd | Label over 6 business-type buttons. |
| `demo.knowledgeLabel` | Çfarë di asistenti | Label over the editable text box of business facts. |
| `demo.knowledgeHint` | Ndryshoje me oraret dhe çmimet e tua — asistenti mëson menjëherë. | Tells them the box is editable — this is the "wow" moment. |
| `demo.chatPlaceholder` | Shkruaj si klient... | Chat input placeholder. |
| `demo.chatHeader` | Asistenti i biznesit | Chat window header, next to business name. |
| `demo.online` / `demo.typing` | online / duke shkruar... | WhatsApp-style status lines. |
| `demo.leadTitle` | Klienti i kapur | Header of right panel. "Kapur" = captured; find the most natural business word. |
| `demo.leadHint` | Asistenti i ruan këto të dhëna automatikisht për ty | Under the header. This panel is the actual selling point — it proves the assistant *collects customers*, not just chats. |
| `demo.leadName/Phone/Request/Slot` | Emri / Telefoni / Kërkesa / Orari | Four field labels. |
| `demo.leadEmpty` | Sapo klienti të japë të dhëna, do t'i shohësh këtu. | Placeholder before any data is captured. |
| `demo.capTitle` + `capText` + `capCta` | Të pëlqeu? / Le ta lidhim me WhatsApp-in e biznesit tënd — provë falas. / Shkruaj në WhatsApp | Shown after 15 messages (spend cap). Must convert the excitement into a WhatsApp message. |
| `demo.errorText` | Diçka nuk shkoi. Provo përsëri pas pak. | Generic error. |

**Demo business knowledge texts** (`demo.businesses[].knowledge`): six fictional example
businesses (Klinika Dentare Smile, Restorant Deti, Sallon Ana, Palestra FitZone, Agjencia Casa,
Dyqani Trendy) with hours/prices in lekë. These are *sample data the visitor edits*, so they
should read like notes a real owner would type — check that prices/hours feel realistic for
Tirana/Durrës in 2026, and adjust naming if these names collide with real businesses.
Also review `starterQuestions` (2 suggested first messages per business) — they should sound
like real customer texts, typos-and-all casualness is fine.

### How it works (3 steps)

| Key | Current | Context |
|---|---|---|
| `process.title` | Si funksionon — 3 hapa të thjeshtë | |
| `process.subtitle` | Nga biseda e parë deri te instalimi, brenda 48-72 orëve. Ti s'ke nevojë të dish asgjë teknike. | Removes the "is this complicated?" fear. |
| Step 1 | Na shkruaj në WhatsApp / Na trego çfarë biznesi ke dhe si komunikon me klientët. Ne përgatisim një provë falas me të dhënat e biznesit tënd. | Honest offer: a personalised demo trained on their business — NOT "we install on your number for a trial" (that's technically impossible, never promise it). |
| Step 2 | Ne e ndërtojmë për ty / E trajnojmë asistentin me oraret, çmimet dhe shërbimet e tua, që të flasë ashtu siç flet ti me klientët — jo si robot. | Addresses the #1 fear directly ("jo si robot"). |
| Step 3 | E instalojmë dhe nis puna / Brenda 48-72 orëve asistenti përgjigjet në WhatsApp dhe Instagram në vendin tënd. Ti merr njoftim për çdo klient të ri. | The notification detail matters — owner stays in control. |

### Results (real case studies — 5 real clients)

`proof.title` (Rezultate reale nga biznese reale), `proof.subtitle` (Këto janë klientët tanë,
me emra dhe logo reale — jo dëshmi anonime), `beforeLabel`/`afterLabel` (Para/Pas).

Each case study has 3 "before" bullets, 3 "after" bullets, an impact line and a quote.
⚠️ **The quotes were originally given in English and I translated them to Albanian.**
Before publishing, confirm each translated quote with the client, or keep quotes in the
language the client actually said them in:

- Dental Med Austria: "Pacientët marrin përgjigje edhe në mesnatë."
- Dodo Dent: "E nxjerr vlerën që në javën e parë."
- SMartderm: "Nuk humbasim më pacientë te konkurrentët më të shpejtë."
- Ayana Clinic: "Pacientët ndihen të mirëpritur para se të hyjnë në klinikë."
- Trio Dental Center: "Codrix na bëri të dukemi si një operacion shumë më i madh, brenda natës."

The before/after bullets are factual claims — keep them modest and verifiable.

### Pricing (4 plans, €79 / €159 / €279 / me marrëveshje)

| Key | Current | Context |
|---|---|---|
| `pricing.title` | Çmime të qarta, pa surpriza | Open pricing is a deliberate trust play — hidden pricing makes this buyer assume "expensive" and leave. |
| `pricing.subtitle` | Pa kontratë afatgjatë. Anulon kur të duash. WhatsApp i përfshirë në çdo plan. | Three objection-killers in one line. |
| `pricing.popular` | Më i zgjedhuri | Badge on the Growth (€159) card. |
| Tier taglines + features | see `sq.ts` | Starter = WhatsApp-only small business; Growth = + Instagram + web chat (most popular); Advanced = multi-location clinics; Enterprise = custom. Features must stay honest — do not add capabilities we don't ship. |
| `pricing.footnote` | Të gjitha çmimet janë mujore. Provë falas me të dhënat e biznesit tënd para se të paguash. | |

### FAQ (7 questions)

Full list in `sq.ts` under `faq.items`. Each one answers a real objection, in order of how
often we hear it: setup time → "will it sound robotic" (the big one) → complex questions →
contract → works abroad → data safety → which plan. Keep answers max 2-3 short sentences,
reassuring but concrete, no hedging.

### Final CTA + footer + misc

| Key | Current | Context |
|---|---|---|
| `finalCta.title` | Mos humb asnjë klient tjetër | Last big push before the footer. |
| `finalCta.subtitle` | Na shkruaj në WhatsApp dhe brenda pak minutash të tregojmë si do funksiononte për biznesin tënd — provë falas. | |
| `finalCta.cta` | Shkruaj në WhatsApp | Same everywhere. |
| `footer.tagline` | Asistentë që u përgjigjen klientëve të tu në WhatsApp dhe Instagram — 24/7. Teknologji e ndërtuar në Shqipëri. | "Built in Albania" is a real, deliberate differentiator — keep it. |
| `footer.rights` | Të gjitha të drejtat e rezervuara. | |
| `nav.whatsappMessage` | Përshëndetje! Dua të mësoj më shumë për asistentin që u përgjigjet klientëve. | Pre-filled text when they tap any WhatsApp button — this is the first message WE receive, so it should be natural for a business owner to send. |
| Metadata (in `src/app/layout.tsx`) | Codrix — Asistentë që u përgjigjen klientëve në WhatsApp, 24/7 (+ description) | Google result title/description. |

---

## After ChatGPT rewrites

1. Paste improved strings into `src/i18n/sq.ts` (keys must stay identical).
2. Run `npm run build` — TypeScript will catch any missing/renamed keys.
3. The `/en` page has its own file (`src/i18n/en.ts`) — English is for EU clinic clients,
   slightly more formal, and does not need to mirror the Albanian word-for-word.
