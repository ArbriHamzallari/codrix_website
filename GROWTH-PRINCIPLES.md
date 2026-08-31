# GROWTH-PRINCIPLES.md — Codrix Product Doctrine

> Place a copy in `codrix-panel/`, `codrix-agent/`, and `codrix_website/`.
> Reference it from each repo's CLAUDE.md with: "All UX and onboarding decisions must comply with GROWTH-PRINCIPLES.md."
> These rules override aesthetic preferences. They do NOT override SECURITY.md or tenant isolation rules.

Source thinking: *Hacking Growth* (Sean Ellis), plus the Duolingo / Apple / Tinder onboarding patterns.

---

## Principle 1 — The Magic Moment comes first

**Definition for Codrix:** the business owner watches the AI answer a customer question
using *their own business facts*, and then sees a structured lead (or appointment)
appear in the dashboard that nobody typed in.

**Hard rule:** a brand-new tenant must be able to *feel* this within **3 minutes of
first login**, before any Chatwoot, WhatsApp, or Meta setup exists.

Consequences:
- The panel must contain a "Test your agent" chat that runs the REAL pipeline
  (KB → Claude → extraction → Supabase write), not a scripted fake.
- If the real channel can't be live on day one (it can't — WhatsApp approval takes days),
  we simulate it. Simulated ≠ fake: same engine, same extraction, flagged `is_demo`.
- Every step between "user opens the app" and "user feels the payoff" is a candidate
  for deletion. When adding any screen, ask: does this delay the magic moment?

## Principle 2 — Visual-first, one-tap, minimal words

Brains judge in ~50ms and bounce when things look like effort. Duolingo onboards with
almost no words. Apple sells AirPods with one photo and three words. Tinder collapsed
dating into one tap.

Hard rules:
- **Tap, don't type.** Wherever a choice can be a button/card/icon grid, it must not
  be a text field. Business type = icon cards. Facts = pre-filled templates the user
  *edits*, never a blank textarea.
- **One primary action per screen.** One highlighted button. Everything else is
  secondary-styled or removed.
- **Show, don't explain.** No paragraph of instructions where a picture, progress bar,
  or live preview can do the job. If a screen needs a tooltip essay, the screen is wrong.
- **Progress must be visible.** A wizard shows a filling progress bar. Empty states show
  the next action as a button, never just gray text.

## Principle 3 — Attribution gets its own page

"How did you hear about us?" buried under other questions → ~21% answer rate.
On its own dedicated page → ~89%. It costs a few points of onboarding completion.
**We accept that trade** — attribution data decides where Arbri spends outreach time
(Instagram DM vs Google vs referrals vs AI/ChatGPT discovery).

Hard rules:
- Own full-screen step, near the END of onboarding (after the magic moment, so the
  user is already invested).
- Tappable single-select options, no free text required:
  `Instagram · Google · Rekomandim / Referral · ChatGPT ose AI · TikTok · Tjetër`
- Skippable, but the skip link is visually quiet.
- Stored per tenant (see schema note below). Reviewed weekly.

---

## Non-negotiable constraints these principles must respect

- **Tenant isolation is untouchable.** Demo/test data carries `tenant_id` like
  everything else and every query keeps its explicit `.eq("tenant_id", ...)` filter.
  The structural grep guard and both isolation test layers must stay green.
- **Demo data is flagged.** `is_demo boolean default false` on `leads`, `appointments`,
  `contacts`. Demo rows are visually badged in the panel and excluded from real
  metrics/exports by default.
- **Pricing is frozen** until the CLAUDE.md (€199/€349) vs live site (€79/€159/€279)
  discrepancy is resolved by Arbri. No file in this doctrine authorizes pricing changes.
- **Albanian-first** copy everywhere the buyer sees it; English mirrors follow.

## Metrics that tell us if this worked

Track (simple events table or PostHog later):
1. `time_to_first_test_message` — login → first message sent in Test chat. Target < 3 min.
2. `wizard_completion_rate` — started vs finished. Target > 70%.
3. `attribution_answer_rate` — target > 80% (the whole point of Principle 3).
4. `demo_lead_seen` — did the user open the Leads page after the demo lead was created?
