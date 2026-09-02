import type { ComparisonSet } from './types';

/**
 * Comparison data for /vs/respond-io. Per claude.md §16, checked live against
 * respond.io/pricing on 2026-09-02 — re-verify before republishing, since
 * competitor pricing and plan gating change.
 *
 * Real finding from that check: respond.io's current Starter/Growth/Advanced
 * prices ($79/$159/$279) are numerically identical to Biseda's own tiers, so
 * this page does NOT claim to be cheaper on the headline number — the honest
 * differentiator is flat pricing (no Monthly-Active-Contact overage, no
 * per-seat add-ons) and a managed setup.
 *
 * Channel claims corrected 2026-09-02 from a direct screenshot of the actual
 * Chatwoot channel picker (confirmed with Arbri): Telegram, SMS and Email are
 * real, live channels — shown unqualified. Voice calling is a genuine
 * "Beta"-tagged feature ("WhatsApp Call — Beta"), rendered as the 'soon'
 * status, not a dash. TikTok remains unsupported.
 */

const en: ComparisonSet['en'] = {
  slug: 'respond-io',
  competitorName: 'respond.io',
  metaTitle: 'Biseda AI vs respond.io — which fits your business',
  metaDescription:
    'An honest comparison between Biseda AI and respond.io for clinics, salons and local service businesses: channels, AI automation, pricing and setup.',
  headline: 'A Simpler Respond.io Alternative for Small, Local Businesses',
  subheadline:
    "Respond.io is built for mid-market teams running high-volume conversations across a dozen channels, where someone builds and maintains the automation themselves. If you're a clinic, salon, or restaurant that just needs customers answered and appointments booked — without building your own automation — that's the job Biseda is built for.",
  pillars: [
    {
      title: 'Managed setup',
      description:
        "Respond.io gives you a Flow Builder and expects you to design the automation yourself. Biseda's team builds your AI assistant around your business before you ever log in.",
    },
    {
      title: 'Flat pricing, no contact math',
      description:
        'Respond.io caps Monthly Active Contacts and bills overage past that limit, plus a per-seat charge for every extra team member. Biseda is a flat monthly fee — €79, €159, or €279 — with nothing extra to track.',
    },
    {
      title: 'Direct access to the people who built it',
      description: "You're not opening a ticket into a support queue. You're talking to the person who built the product.",
    },
    {
      title: 'Built for local service businesses, not sales-ops teams',
      description:
        'Respond.io\'s lifecycle stages, sales dashboards and multiple report types are built for teams managing a pipeline. Biseda is built for a clinic answering "are you open Saturday?" correctly, every time.',
    },
  ],
  tableTitle: 'Biseda AI vs respond.io: feature by feature',
  comparisonTable: [
    {
      category: 'Channels',
      rows: [
        { feature: 'WhatsApp', biseda: true, competitor: true },
        { feature: 'Instagram', biseda: true, competitor: true },
        { feature: 'Web chat', biseda: true, competitor: true },
        { feature: 'Facebook Messenger', biseda: true, competitor: true },
        { feature: 'Telegram, SMS, Email', biseda: true, competitor: true },
        { feature: 'Voice calling', biseda: 'soon', competitor: true, note: 'Biseda: in beta' },
        { feature: 'TikTok', biseda: false, competitor: true },
      ],
    },
    {
      category: 'AI & Automation',
      rows: [
        { feature: 'AI agent answering from your business info', biseda: true, competitor: true },
        { feature: 'Automatic lead capture', biseda: true, competitor: true },
        { feature: 'Automatic appointment booking', biseda: true, competitor: true },
        { feature: 'Visual workflow builder', biseda: false, competitor: true },
        { feature: 'Outbound broadcast campaigns', biseda: false, competitor: true },
      ],
    },
    {
      category: 'Setup & Team',
      rows: [
        { feature: 'Setup configured for you', biseda: true, competitor: false, note: 'Respond.io: self-guided setup' },
        { feature: 'CRM integrations (HubSpot, Salesforce)', biseda: false, competitor: true },
        { feature: 'Native mobile app', biseda: false, competitor: true },
        { feature: '12+ report types / analytics dashboard', biseda: false, competitor: true, note: 'Biseda: basic conversation & lead counts' },
      ],
    },
    {
      category: 'Pricing & Support',
      rows: [
        { feature: 'Flat monthly price, no usage-based scaling', biseda: true, competitor: false },
        { feature: 'No long-term contract', biseda: true, competitor: true },
        { feature: 'Direct access to the founder/builder', biseda: true, competitor: false },
        { feature: '24/7 dedicated support team', biseda: false, competitor: true, note: 'Biseda: founder-direct support' },
      ],
    },
  ],
  chooseUs: {
    title: 'Choose Biseda if…',
    points: [
      "You're a clinic, salon, restaurant, gym, or local service business",
      'You want WhatsApp, Instagram, and web chat answered automatically',
      "You don't want to build or maintain automation yourself",
      'You want one predictable monthly bill',
    ],
  },
  chooseThem: {
    title: 'Choose respond.io if…',
    points: [
      'You run a mid-market B2C team with high conversation volume',
      'You need a visual workflow builder and deep CRM/Zapier integrations',
      'You need broadcast campaigns, lifecycle stages, and 12+ report types',
      'You have someone dedicated to building and maintaining automation',
    ],
  },
  faqTitle: 'Frequently asked questions',
  faq: [
    {
      q: 'Is Biseda cheaper than respond.io?',
      a: "Respond.io's Starter plan is $99/month for 5 users with limited automation, and their AI/workflow features only unlock on the $199/month Growth plan and up, priced by Monthly Active Contacts. Biseda is a flat €79–279/month with AI included from the first tier.",
    },
    {
      q: 'Does Biseda support the same channels as respond.io?',
      a: 'Biseda covers WhatsApp, Instagram, web chat, Facebook Messenger, Telegram, SMS, and email. Voice calling is currently in beta. Respond.io additionally supports TikTok and has voice calling fully live today — if you specifically need those right now, respond.io is the better fit.',
    },
    {
      q: 'Do I need to build my own chatbot with Biseda?',
      a: "No. Biseda's team configures your AI assistant around your actual business — hours, services, prices, policies — before you go live. Respond.io gives you a Flow Builder and expects your team to design the automation.",
    },
    {
      q: 'Which is better for a small local business?',
      a: "For a clinic, salon, or restaurant that mainly needs customers answered and appointments booked, Biseda is built specifically for that job at a lower, flatter price. Respond.io is built for larger, revenue-driven B2C teams that need deep automation and multi-channel scale.",
    },
  ],
  ctaLabel: 'Na shkruani në WhatsApp',
  soonLabel: 'Soon',
};

const sq: ComparisonSet['sq'] = {
  slug: 'respond-io',
  competitorName: 'respond.io',
  metaTitle: 'Biseda AI vs respond.io — cila zgjidhje ju përshtatet',
  metaDescription:
    'Krahasim i ndershëm mes Biseda AI dhe respond.io për klinika, salone dhe biznese lokale: kanale, automatizim AI, çmime dhe konfigurim.',
  headline: 'Një Alternativë më e Thjeshtë ndaj Respond.io për Bizneset e Vogla dhe Lokale',
  subheadline:
    "Respond.io është krijuar për ekipe që menaxhojnë një numër të madh bisedash në shumë kanale dhe kanë nevojë për automatizime të avancuara. Nëse jeni një klinikë, sallon, restorant apo biznes lokal që thjesht dëshiron t'u përgjigjet klientëve, të kapë kërkesat dhe të rezervojë takime — pa ndërtuar vetë sisteme komplekse automatizimi — Biseda është krijuar pikërisht për këtë.",
  pillars: [
    {
      title: 'Konfigurohet për ju',
      description:
        'Respond.io ju ofron mjetet për të ndërtuar vetë rrjedhat e automatizimit. Me Biseda, ekipi ynë e konfiguron asistentin tuaj AI sipas biznesit tuaj, përpara se të filloni ta përdorni.',
    },
    {
      title: 'Çmim fiks dhe i parashikueshëm',
      description:
        'Respond.io përdor një model çmimi të bazuar në Kontaktet Aktive Mujore, me kosto shtesë për anëtarët e ekipit. Biseda ofron një tarifë mujore fikse — 79€, 159€ ose 279€ — pa rritje të çmimit sipas numrit të kontakteve.',
    },
    {
      title: 'Flisni drejtpërdrejt me ndërtuesin',
      description: 'Nuk do të humbisni kohë duke kaluar nga një nivel mbështetjeje te tjetri. Me Biseda, keni akses të drejtpërdrejtë te personi që e ka ndërtuar produktin.',
    },
    {
      title: 'Krijuar për bizneset lokale të shërbimeve',
      description:
        'Respond.io ofron mjete të fuqishme për ekipe që menaxhojnë procese komplekse shitjesh dhe komunikimi. Biseda është krijuar për nevojat e përditshme të një biznesi lokal — nga pyetjet si "A jeni hapur të shtunën?" deri te rezervimi automatik i një takimi.',
    },
  ],
  tableTitle: 'Biseda AI vs Respond.io: krahasim veçori për veçori',
  comparisonTable: [
    {
      category: 'Kanalet',
      rows: [
        { feature: 'WhatsApp', biseda: true, competitor: true },
        { feature: 'Instagram', biseda: true, competitor: true },
        { feature: 'Chat në faqen e internetit', biseda: true, competitor: true },
        { feature: 'Facebook Messenger', biseda: true, competitor: true },
        { feature: 'Telegram, SMS, Email', biseda: true, competitor: true },
        { feature: 'Telefonata zanore', biseda: 'soon', competitor: true, note: 'Biseda: në beta' },
        { feature: 'TikTok', biseda: false, competitor: true },
      ],
    },
    {
      category: 'AI dhe automatizimi',
      rows: [
        { feature: 'Agjent AI që përgjigjet bazuar në informacionin e biznesit tuaj', biseda: true, competitor: true },
        { feature: 'Kapje automatike e klientëve potencialë', biseda: true, competitor: true },
        { feature: 'Rezervim automatik i takimeve', biseda: true, competitor: true },
        { feature: 'Ndërtues i rrjedhave të automatizimit', biseda: false, competitor: true },
        { feature: 'Fushata masive', biseda: false, competitor: true },
      ],
    },
    {
      category: 'Konfigurimi dhe ekipi',
      rows: [
        { feature: 'Konfigurohet për ju', biseda: true, competitor: false, note: 'Respond.io: vetë-konfigurim' },
        { feature: 'Integrime CRM (HubSpot, Salesforce)', biseda: false, competitor: true },
        { feature: 'Aplikacion mobil vendas', biseda: false, competitor: true },
        { feature: '12+ lloje raportesh / panel analitikash', biseda: false, competitor: true, note: 'Biseda: statistika bazë për bisedat dhe klientët potencialë' },
      ],
    },
    {
      category: 'Çmimi dhe mbështetja',
      rows: [
        { feature: 'Tarifë mujore fikse, pa rritje sipas përdorimit', biseda: true, competitor: false },
        { feature: 'Pa kontratë afatgjatë', biseda: true, competitor: true },
        { feature: 'Akses i drejtpërdrejtë te themeluesi/ndërtuesi', biseda: true, competitor: false },
        { feature: 'Ekip i dedikuar mbështetjeje 24/7', biseda: false, competitor: true, note: 'Biseda: mbështetje e drejtpërdrejtë nga themeluesi' },
      ],
    },
  ],
  chooseUs: {
    title: 'Zgjidhni Biseda nëse…',
    points: [
      'Jeni klinikë, sallon bukurie, restorant, palestër ose biznes lokal shërbimesh',
      "Dëshironi që WhatsApp, Instagram dhe chat-i i faqes t'u përgjigjen klientëve automatikisht",
      'Nuk dëshironi të ndërtoni vetë automatizimet',
      'Dëshironi një faturë mujore të vetme dhe të parashikueshme',
    ],
  },
  chooseThem: {
    title: 'Zgjidhni Respond.io nëse…',
    points: [
      'Keni një ekip B2C me volum të lartë bisedash',
      'Ju nevojiten rrjedha të avancuara automatizimi dhe integrime të thella me CRM/Zapier',
      'Ju nevojiten fushata masive, menaxhim i ciklit të klientit dhe raporte të avancuara',
      'Keni staf të dedikuar për ndërtimin dhe mirëmbajtjen e automatizimeve',
    ],
  },
  faqTitle: 'Pyetje të shpeshta',
  faq: [
    {
      q: 'A është Biseda më e lirë se Respond.io?',
      a: 'Plani Starter i Respond.io fillon nga 99$/muaj për 5 përdorues, ndërsa veçoritë më të avancuara të AI dhe automatizimit janë të disponueshme në planet më të larta. Çmimi varet gjithashtu nga numri i Kontakteve Aktive Mujore. Biseda ofron plane fikse nga 79€ deri në 279€/muaj, me AI të përfshirë që nga plani i parë.',
    },
    {
      q: 'A i mbulon Biseda të njëjtat kanale si Respond.io?',
      a: 'Biseda mbështet WhatsApp, Instagram, chat në faqen e internetit, Facebook Messenger, Telegram, SMS dhe email. Telefonatat zanore janë aktualisht në beta. Respond.io ofron gjithashtu TikTok dhe telefonata zanore të plota. Nëse këto dy kanale janë thelbësore për biznesin tuaj sot, Respond.io mund të jetë zgjedhja më e përshtatshme.',
    },
    {
      q: 'A duhet ta ndërtoj vetë chatbot-in me Biseda?',
      a: 'Jo. Ekipi i Biseda e konfiguron asistentin tuaj AI sipas biznesit tuaj — oraret, shërbimet, çmimet, politikat dhe mënyrën se si dëshironi t\'u përgjigjeni klientëve — përpara se të filloni.',
    },
    {
      q: 'Cila është më e mira për një biznes të vogël lokal?',
      a: 'Për një klinikë, sallon, restorant ose biznes shërbimesh që ka nevojë kryesisht për përgjigje automatike, kapje të klientëve dhe rezervim takimesh, Biseda është krijuar posaçërisht për këtë. Respond.io është më i përshtatshëm për ekipe më të mëdha që kanë nevojë për automatizime dhe procese shumëkanalëshe më komplekse.',
    },
  ],
  ctaLabel: 'Na shkruani në WhatsApp',
  soonLabel: 'Së shpejti',
};

export const respondIoComparison: ComparisonSet = { en, sq };
