# LANDING-PAGE-SIMPLIFY.md — codrix_website tasks

> Lower priority than ONBOARDING-MAGIC-MOMENT.md. The panel is where the gap is;
> the site is already directionally right (single repeated CTA, live demo, open pricing).
> Read GROWTH-PRINCIPLES.md first. Albanian-first. Do NOT touch pricing values (frozen).

## What already complies (keep, don't rebuild)

- One primary CTA repeated: "Na shkruani në WhatsApp". Correct — this is the Tinder
  one-action pattern. Do not add competing CTAs.
- Live demo section ("Provoje vetë") exists — this is the site's magic-moment taste test.
- Pricing shown openly, FAQ present, real-results section present.

## Tasks, in order

### T1 — Make the demo one tap from the hero
The magic moment is buried mid-page. Add a secondary hero button
**"Provoje vetë"** (outline style, next to the WhatsApp CTA) that smooth-scrolls to the
demo. Two buttons max in the hero — primary filled, demo outlined. Nothing else.

### T2 — Auto-play the demo's first exchange
When the demo section scrolls into view, auto-send one customer question for the
selected business preset so visitors SEE the agent answering before touching anything
(same zero-effort payoff as the panel wizard Screen 3). Typing indicator → reply →
the lead-capture panel fills. Respect the existing demo cost/abuse controls in
SECURITY-FIXES.md — auto-play counts against the same rate limits; if the visitor is
rate-limited, fall back to a pre-rendered (clearly non-interactive) replay.

### T3 — Word-count pass on the top 3 sections
Hero, trust bar, demo intro: cut copy by ~50%. Rule per GROWTH-PRINCIPLES: if a
sentence explains what a visual already shows, delete the sentence. Headline stays
("Sa klientë humbisni sepse s'keni kohë t'u përgjigjeni?" — it's good); trim the
paragraph under it to one line + the three stat chips (2 sek · 24/7 · 9+).

### T4 — One idea per section audit
Walk the page top to bottom. Any section containing two messages gets split or cut.
Target: every section answers exactly one visitor question
(What is it? → Does it work? → Try it → Who's it for? → Proof → Who's behind it? → Price → FAQ → CTA).
The rebrand already cut 13 → 7 sections; verify no section has crept back to double duty.

### T5 — Mobile 50ms test
On a phone, each section's message must land from the visual alone before reading.
Screenshot each section, glance for one second, ask: is the point obvious?
Fix the failures with bigger visuals / fewer words, not more text.

### T6 — Attribution on the site funnel (lightweight)
The WhatsApp CTA links already carry a pre-filled message. Append a source tag per
placement (e.g. hero vs pricing vs exit) to the pre-filled text or URL param so
Arbri can see in WhatsApp which section converted. Zero UI added.

## Out of scope
- Pricing numbers/tiers (blocked on the €199/€349 vs €79/€159/€279 resolution).
- Any redesign of sections that already pass T4/T5 — this is a trim, not a rebuild.