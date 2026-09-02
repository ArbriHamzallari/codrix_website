import type { ComparisonSet } from './types';

/**
 * Comparison data for /vs/trengo. Per claude.md §16, checked live against
 * trengo.com/pricing on 2026-09-02 — re-verify before republishing.
 *
 * The brief supplying this page's first draft sourced it from respond.io's
 * own marketing page ABOUT Trengo, which has an obvious incentive to frame a
 * competitor unfavorably — so every figure below was re-pulled directly from
 * Trengo's own pricing page rather than trusted from that source.
 *
 * Verified: Boost €299/mo (annual) / €349/mo (month-to-month), Pro €499/mo
 * (annual) / €599/mo (month-to-month), Enterprise custom. Boost = 500
 * conversations/month included, overage ~€15-18/100; Pro = 1,500/month, same
 * overage structure. Personalised onboarding is included on every plan.
 * Boost is limited to email/messaging support; Pro adds live chat + phone
 * support (re-verified twice — an interim draft of this page incorrectly
 * claimed no tier has live chat; that was checked directly against
 * trengo.com/pricing and is false). Trengo ships mobile access as a
 * Progressive Web App, not a native app (help.trengo.com, trengo.com/apps).
 * AI Agent (HelpMate) and AI Journeys are included on all tiers including
 * Boost (AI Journeys is in beta); a per-conversation AI surcharge
 * (~€0.25-0.30) applies beyond what's bundled.
 *
 * Rebuilt 2026-09-02 into the proper Record<'sq'|'en', ComparisonData> shape
 * — the previous version kept a single Albanian-only `table` reused by both
 * locale copies, which meant the table never localized. Also corrected per
 * Arbri's direct screenshot of the Chatwoot channel picker: voice calling is
 * a genuine "Beta"-tagged Biseda feature, rendered as 'soon', not a dash.
 */

const en: ComparisonSet['en'] = {
  slug: 'trengo',
  competitorName: 'Trengo',
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
  comparisonTable: [
    {
      category: 'Channels',
      rows: [
        { feature: 'WhatsApp, Instagram, web chat', biseda: true, competitor: true },
        { feature: 'Facebook Messenger', biseda: true, competitor: true },
        { feature: 'Voice calling', biseda: 'soon', competitor: true, note: 'Trengo: paid add-on on Boost/Pro. Biseda: in beta' },
      ],
    },
    {
      category: 'AI & Automation',
      rows: [
        { feature: 'AI agent answering from your business info', biseda: true, competitor: true },
        { feature: 'Automatic lead capture & appointment booking', biseda: true, competitor: false, note: "Trengo: possible via AI Journeys configuration, not a dedicated feature" },
        { feature: 'Conversation cap with overage fee past the limit', biseda: false, competitor: true, note: 'Biseda: no cap; Trengo: 500/mo (Boost) or 1,500/mo (Pro), then ~€15-18/100' },
      ],
    },
    {
      category: 'Setup & Team',
      rows: [
        { feature: 'Setup configured for you', biseda: true, competitor: false },
        { feature: 'Personalised onboarding on every plan', biseda: true, competitor: true },
      ],
    },
    {
      category: 'Pricing & Support',
      rows: [
        { feature: 'Flat monthly price, no conversation caps', biseda: true, competitor: false, note: 'Trengo Boost starts at €299-349/month, capped at 500 conversations' },
        { feature: 'Live chat & phone support at your starting price', biseda: true, competitor: false, note: 'Trengo: Boost is email/messaging only — live chat and phone are Pro (€499+/mo) and up' },
      ],
    },
  ],
  chooseUs: {
    title: 'Choose Biseda if…',
    points: [
      'You want leads and appointments captured automatically, not just support handled',
      "You're a clinic, salon, restaurant, or local service business",
      "You don't want to build workflows yourself",
      'You want flat, predictable pricing',
    ],
  },
  chooseThem: {
    title: 'Choose Trengo if…',
    points: [
      "You're a European support team with moderate conversation volume",
      "You need a mature workflow/automation builder you'll configure yourself",
      'Support, not lead capture, is your primary use case',
    ],
  },
  faqTitle: 'Frequently asked questions',
  faq: [
    {
      q: 'Is Biseda cheaper than Trengo?',
      a: "Yes, notably — Trengo's entry Boost plan starts at €299/month (billed annually) or €349/month (month-to-month), capped at 500 conversations a month with overage fees (~€15-18 per 100) past that. Biseda starts at €79/month, flat, with no conversation cap.",
    },
    {
      q: 'Does Biseda do what Trengo does?',
      a: 'Trengo is built primarily for team-based support conversations. Biseda is built specifically for capturing leads and booking appointments automatically, configured around your business rather than a workflow you build yourself.',
    },
    {
      q: 'Does Trengo have a mobile app?',
      a: "Not a native one — Trengo offers mobile access as a Progressive Web App (PWA), added to your phone's home screen through the browser rather than downloaded from the App Store or Play Store.",
    },
    {
      q: 'Does Trengo offer live chat or phone support?',
      a: "Only on its higher tiers. Trengo's entry-level Boost plan is limited to email and in-app messaging; live chat and phone support are included starting at the Pro plan, €499/month (€599 month-to-month) and up. Biseda includes direct access to the founder from its lowest tier.",
    },
  ],
  ctaLabel: 'Na shkruani në WhatsApp',
  soonLabel: 'Soon',
};

const sq: ComparisonSet['sq'] = {
  slug: 'trengo',
  competitorName: 'Trengo',
  metaTitle: 'Biseda AI vs Trengo — cila zgjidhje ju përshtatet',
  metaDescription:
    'Krahasim i ndershëm mes Biseda AI dhe Trengo për klinika, salone dhe biznese lokale: çmime, kufij bisedash dhe konfigurim.',
  headline: 'Një Alternativë ndaj Trengo, e Krijuar për Biznese — Jo Vetëm për Ekipe Mbështetjeje',
  subheadline:
    'Trengo është një platformë omnichannel për ekipe që menaxhojnë komunikimin me klientët në disa kanale, me çmime që fillojnë nga €299-349/muaj dhe kufij mujorë bisedash. Nëse ajo që kërkoni është një asistent AI që jo vetëm përgjigjet, por edhe kap klientë potencialë dhe rezervon takime — i konfiguruar për ju dhe me çmim fiks — Biseda ofron një qasje tjetër.',
  pillars: [
    {
      title: 'Krijuar për të gjithë udhëtimin e klientit, jo vetëm biletat e mbështetjes',
      description:
        "Mjetet e automatizimit dhe AI të Trengo janë dizajnuar rreth bisedave mbështetëse. Biseda është krijuar posaçërisht për të kapur klientë potencialë dhe për të rezervuar takime, jo vetëm për t'u përgjigjur pyetjeve.",
    },
    {
      title: 'Konfiguruar për ju',
      description: "Asnjë ndërtues automatizimesh për t'u mësuar — ekipi i Biseda e vendos asistentin tuaj rreth biznesit tuaj.",
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
  tableTitle: 'Biseda AI vs Trengo: krahasim veçori për veçori',
  comparisonTable: [
    {
      category: 'Kanalet',
      rows: [
        { feature: 'WhatsApp, Instagram, chat në faqen e internetit', biseda: true, competitor: true },
        { feature: 'Facebook Messenger', biseda: true, competitor: true },
        { feature: 'Telefonata zanore', biseda: 'soon', competitor: true, note: 'Trengo: shtesë me pagesë te Boost/Pro. Biseda: në beta' },
      ],
    },
    {
      category: 'AI dhe automatizimi',
      rows: [
        { feature: 'Agjent AI që përgjigjet bazuar në informacionin e biznesit tuaj', biseda: true, competitor: true },
        { feature: 'Kapje automatike e klientëve potencialë dhe rezervim takimesh', biseda: true, competitor: false, note: 'Trengo: e mundshme vetëm përmes konfigurimit të AI Journeys, jo si veçori e dedikuar' },
        { feature: 'Kufi bisedash mujor, me tarifë shtesë mbi limitin', biseda: false, competitor: true, note: 'Biseda: pa kufi; Trengo: 500/muaj (Boost) ose 1.500/muaj (Pro), pastaj ~€15-18/100' },
      ],
    },
    {
      category: 'Konfigurimi dhe ekipi',
      rows: [
        { feature: 'Konfigurohet për ju', biseda: true, competitor: false },
        { feature: 'Konfigurim fillestar i personalizuar në çdo plan', biseda: true, competitor: true },
      ],
    },
    {
      category: 'Çmimi dhe mbështetja',
      rows: [
        { feature: 'Çmim fiks, pa kufi bisedash mujore', biseda: true, competitor: false, note: 'Trengo Boost fillon nga €299-349/muaj, me kufi 500 bisedash' },
        { feature: 'Live chat dhe mbështetje telefonike që në çmimin fillestar', biseda: true, competitor: false, note: 'Trengo: Boost ka vetëm email/mesazhe — live chat dhe telefoni fillojnë te Pro (€499+/muaj)' },
      ],
    },
  ],
  chooseUs: {
    title: 'Zgjidhni Biseda nëse…',
    points: [
      'Dëshironi klientë potencialë dhe takime të kapura automatikisht, jo vetëm mbështetje të trajtuar',
      'Jeni klinikë, sallon, restorant ose biznes lokal shërbimesh',
      "Nuk dëshironi t'i ndërtoni vetë automatizimet",
      'Dëshironi çmim fiks dhe të parashikueshëm',
    ],
  },
  chooseThem: {
    title: 'Zgjidhni Trengo nëse…',
    points: [
      'Jeni ekip mbështetjeje evropian me volum bisedash mesatar',
      'Ju duhet një ndërtues i pjekur automatizimesh që do ta konfiguroni vetë',
      'Mbështetja, jo kapja e klientëve, është përdorimi juaj kryesor',
    ],
  },
  faqTitle: 'Pyetje të shpeshta',
  faq: [
    {
      q: 'A është Biseda më e lirë se Trengo?',
      a: 'Po, dukshëm — plani hyrës i Trengo (Boost) fillon nga €299/muaj (faturim vjetor) ose €349/muaj (muaj-për-muaj), me kufi 500 bisedash mujore dhe tarifa shtesë (~€15-18/100 biseda) mbi atë kufi. Biseda fillon nga €79/muaj, fiks, pa kufi bisedash.',
    },
    {
      q: 'A bën Biseda atë që bën Trengo?',
      a: "Trengo është ndërtuar kryesisht për biseda mbështetjeje në ekip. Biseda është ndërtuar posaçërisht për të kapur klientë dhe rezervuar takime automatikisht, e konfiguruar rreth biznesit tuaj në vend të një automatizimi që e ndërtoni vetë.",
    },
    {
      q: 'A ka Trengo aplikacion mobil?',
      a: 'Jo si aplikacion nativ — Trengo ofron akses mobil si Progressive Web App (PWA), që shtohet në ekranin kryesor të telefonit nga shfletuesi, në vend të një shkarkimi nga App Store apo Play Store.',
    },
    {
      q: 'A ofron Trengo live chat apo suport telefonik?',
      a: 'Vetëm te planet më të larta. Plani hyrës Boost i Trengo kufizohet te email dhe mesazhet brenda aplikacionit; live chat dhe suporti telefonik përfshihen duke filluar nga plani Pro, €499/muaj (€599 muaj-për-muaj) e sipër. Biseda përfshin akses direkt te themeluesi që nga plani i parë.',
    },
  ],
  ctaLabel: 'Na shkruani në WhatsApp',
  soonLabel: 'Së shpejti',
};

export const trengoComparison: ComparisonSet = { en, sq };
