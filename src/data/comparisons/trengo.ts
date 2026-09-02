import type { ComparisonGroup, ComparisonCopy } from './respond-io';

/**
 * Comparison data for /vs/trengo. Per claude.md §16, checked live against
 * trengo.com/pricing on 2026-09-02 — re-verify before republishing.
 *
 * The brief supplying this page sourced its first draft from respond.io's
 * own marketing page ABOUT Trengo, which has an obvious incentive to frame
 * a competitor unfavorably — so every figure below was re-pulled directly
 * from Trengo's own pricing page rather than trusted from that source.
 *
 * Verified: Boost €299/mo (annual) / €349/mo (month-to-month), Pro €499/mo
 * (annual) / €599/mo (month-to-month), Enterprise custom. Boost = 500
 * conversations/month included, overage ~€15-18/100; Pro = 1,500/month,
 * same overage structure. Voice/calling is an add-on on Boost and Pro, full
 * integration only on Enterprise. Personalised onboarding is included on
 * every plan (not tier-gated). 24/7 and phone support are NOT on Boost
 * (email/messaging only) — Pro adds live chat + phone support. AI Agent
 * (HelpMate) and AI Journeys are included on all tiers including Boost (AI
 * Journeys is in beta); a per-conversation AI surcharge (~€0.25-0.30) applies
 * as an add-on beyond what's bundled.
 *
 * 2026-09-02 re-check: a follow-up draft of this page claimed no Trengo tier
 * offers live chat or 24/7 support. Re-verified directly against
 * trengo.com/pricing and that claim is false — Pro does include live chat
 * and phone support (Boost is the tier limited to email/messaging), matching
 * what was already recorded here. Not changed. One genuinely new, confirmed
 * fact from that pass folded in: Trengo ships mobile access as a Progressive
 * Web App, not a native iOS/Android app (help.trengo.com, trengo.com/apps).
 */

const table: ComparisonGroup[] = [
  {
    category: 'Kanalet / Channels',
    rows: [
      { feature: 'WhatsApp, Instagram, web chat', biseda: true, competitor: true },
      { feature: 'Facebook Messenger', biseda: true, competitor: true },
      { feature: 'Thirrje telefonike (voice)', biseda: false, competitor: true, note: 'Trengo: shtesë me pagesë te Boost/Pro; e përfshirë vetëm te Enterprise' },
    ],
  },
  {
    category: 'AI & Automatizim / AI & Automation',
    rows: [
      { feature: 'Agjent AI që përgjigjet nga info e biznesit tuaj', biseda: true, competitor: true },
      { feature: 'Kapje automatike e klientëve dhe rezervim takimesh', biseda: true, competitor: false, note: 'Trengo: AI Agent i tyre fokusohet te biseda mbështetëse, jo posaçërisht te kapja e klientëve' },
      { feature: 'AI e kufizuar në biseda, me tarifë shtesë mbi limitin', biseda: false, competitor: true, note: 'Biseda: pa kufi bisedash; Trengo: ~500/muaj (Boost) ose ~1.500/muaj (Pro), pastaj €15-18/100 shtesë' },
    ],
  },
  {
    category: 'Konfigurimi & Ekipi / Setup & Team',
    rows: [
      { feature: 'Konfigurimi bëhet për ju', biseda: true, competitor: false },
      { feature: 'Onboarding i personalizuar në çdo plan', biseda: true, competitor: true },
    ],
  },
  {
    category: 'Çmimi & Mbështetja / Pricing & Support',
    rows: [
      { feature: 'Çmim fiks, pa kufi bisedash mujore', biseda: true, competitor: false, note: 'Trengo Boost fillon nga €299-349/muaj, me kufi 500 bisedash' },
      { feature: 'Mbështetje 24/7 / telefonike në çdo plan', biseda: true, competitor: false, note: 'Trengo: Boost ka vetëm email/mesazhe; telefon + live chat shtohen te Pro' },
    ],
  },
];

export const trengoComparison: {
  slug: string;
  competitorName: string;
  table: ComparisonGroup[];
  copy: Record<'sq' | 'en', ComparisonCopy>;
} = {
  slug: 'trengo',
  competitorName: 'Trengo',
  table,
  copy: {
    sq: {
      metaTitle: 'Biseda AI vs Trengo — cila zgjidhje ju përshtatet',
      metaDescription:
        'Krahasim i ndershëm mes Biseda AI dhe Trengo për klinika, salone dhe biznese lokale: çmime, kufij bisedash dhe konfigurim.',
      headline: 'Një alternativë ndaj Trengo, ndërtuar për biznese, jo për ekipe mbështetjeje',
      subheadline:
        'Trengo është një inbox solid omnichannel për ekipe mbështetjeje evropiane, me çmime që fillojnë nga €299-349/muaj dhe kufij mujorë bisedash. Nëse doni një asistent AI që kap edhe klientë dhe rezervon takime — i konfiguruar për ju, me çmim fiks — kjo është produkt tjetër.',
      pillars: [
        {
          title: 'Ndërtuar për të gjithë udhëtimin e klientit, jo vetëm biletat e mbështetjes',
          description:
            'Mjetet e automatizimit dhe AI të Trengo janë dizajnuar rreth bisedave mbështetëse. Biseda është ndërtuar posaçërisht për të kapur klientë dhe rezervuar takime, jo vetëm për t\'u përgjigjur pyetjeve.',
        },
        {
          title: 'Konfiguruar për ju',
          description: 'Asnjë ndërtues automatizimesh për t\'u mësuar — ekipi i Biseda e vendos asistentin tuaj rreth biznesit tuaj.',
        },
        {
          title: 'Çmim fiks, pa kufij bisedash',
          description: 'Trengo kufizon bisedat (500/muaj te Boost, 1.500/muaj te Pro) me tarifa shtesë mbi kufirin. Biseda është një tarifë e vetme mujore, pa numërim bisedash.',
        },
        {
          title: 'Akses direkt te ndërtuesi',
          description: 'Flisni me personin që e ndërtoi produktin, jo me një nivel mbështetjeje.',
        },
      ],
      tableTitle: 'Biseda AI vs Trengo: veçori për veçori',
      chooseUsTitle: 'Zgjidhni Biseda nëse…',
      chooseUs: [
        'Doni klientë dhe takime të kapura automatikisht, jo vetëm mbështetje të trajtuar',
        'Jeni klinikë, sallon, restorant ose biznes lokal shërbimesh',
        'Nuk doni t\'i ndërtoni vetë automatizimet',
        'Doni çmim fiks dhe të parashikueshëm',
      ],
      chooseThemTitle: 'Zgjidhni Trengo nëse…',
      chooseThem: [
        'Jeni ekip mbështetjeje evropian me volum bisedash mesatar',
        'Ju duhet një ndërtues i pjekur automatizimesh që do ta konfiguroni vetë',
        'Mbështetja, jo kapja e klientëve, është përdorimi juaj kryesor',
      ],
      faqTitle: 'Pyetje të shpeshta',
      faq: [
        {
          q: 'A është Biseda më e lirë se Trengo?',
          a: 'Po, dukshëm — plani hyrës i Trengo (Boost) fillon nga €299/muaj (faturim vjetor) ose €349/muaj (muaj-për-muaj), me kufi 500 bisedash mujore dhe tarifa shtesë (~€15-18/100 biseda) mbi atë kufi. Biseda fillon nga €79/muaj, fiks, pa kufi bisedash.',
        },
        {
          q: 'A bën Biseda atë që bën Trengo?',
          a: 'Trengo është ndërtuar kryesisht për biseda mbështetjeje në ekip. Biseda është ndërtuar posaçërisht për të kapur klientë dhe rezervuar takime automatikisht, e konfiguruar rreth biznesit tuaj në vend të një automatizimi që e ndërtoni vetë.',
        },
        {
          q: 'A ka Trengo aplikacion mobil?',
          a: 'Jo si aplikacion nativ — Trengo ofron akses mobil si Progressive Web App (PWA), që shtohet në ekranin kryesor të telefonit nga shfletuesi, në vend të një shkarkimi nga App Store apo Play Store.',
        },
      ],
      ctaLabel: 'Na shkruani në WhatsApp',
    },
    en: {
      metaTitle: 'Biseda AI vs Trengo — which fits your business',
      metaDescription:
        'An honest comparison between Biseda AI and Trengo for clinics, salons and local service businesses: pricing, conversation caps, and setup.',
      headline: 'A Trengo Alternative Built for Businesses, Not Support Teams',
      subheadline:
        "Trengo is a solid omnichannel inbox for European support teams, priced from €299-349/month with monthly conversation caps. If you want an AI assistant that also captures leads and books appointments — configured for you, at a flat price — that's a different product.",
      pillars: [
        {
          title: 'Built for the whole customer journey, not just support tickets',
          description:
            "Trengo's automation and AI tools are designed around support conversations. Biseda is built specifically to capture leads and book appointments, not just answer questions.",
        },
        {
          title: 'Configured for you',
          description: "No workflow builder to learn — Biseda's team sets up your assistant around your business.",
        },
        {
          title: 'Flat pricing, no conversation caps',
          description: 'Trengo caps conversations (500/month on Boost, 1,500/month on Pro) with overage fees past that limit. Biseda is one flat monthly fee, no conversation counting.',
        },
        {
          title: 'Direct access to the builder',
          description: 'Talk to the person who built the product, not a support tier.',
        },
      ],
      tableTitle: 'Biseda AI vs Trengo: feature by feature',
      chooseUsTitle: 'Choose Biseda if…',
      chooseUs: [
        "You want leads and appointments captured automatically, not just support handled",
        "You're a clinic, salon, restaurant, or local service business",
        "You don't want to build workflows yourself",
        'You want flat, predictable pricing',
      ],
      chooseThemTitle: 'Choose Trengo if…',
      chooseThem: [
        "You're a European support team with moderate conversation volume",
        "You need a mature workflow/automation builder you'll configure yourself",
        'Support, not lead capture, is your primary use case',
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Is Biseda cheaper than Trengo?',
          a: "Yes, notably — Trengo's entry Boost plan starts at €299/month (billed annually) or €349/month (month-to-month), capped at 500 conversations a month with overage fees (~€15-18 per 100) past that. Biseda starts at €79/month, flat, with no conversation cap.",
        },
        {
          q: 'Does Biseda do what Trengo does?',
          a: "Trengo is built primarily for team-based support conversations. Biseda is built specifically for capturing leads and booking appointments automatically, configured around your business rather than a workflow you build yourself.",
        },
        {
          q: 'Does Trengo have a mobile app?',
          a: "Not a native one — Trengo offers mobile access as a Progressive Web App (PWA), added to your phone's home screen through the browser rather than downloaded from the App Store or Play Store.",
        },
      ],
      ctaLabel: 'Na shkruani në WhatsApp',
    },
  },
};
