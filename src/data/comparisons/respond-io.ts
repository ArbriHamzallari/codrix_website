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
  headline: 'Një Alternativë Më e Thjeshtë ndaj Respond.io për Biznese të Vogla e Lokale',
  subheadline:
    "Respond.io është ndërtuar për ekipe të mesme që menaxhojnë biseda me volum të lartë dhe kritike për të ardhurat, në një duzinë kanalesh. Nëse jeni një klinikë, sallon apo restorant që ka nevojë thjesht t'u përgjigjet klientëve dhe të rezervojë takime — pa ndërtuar vetë automatizimin — kjo është një punë tjetër, dhe është pikërisht ajo për të cilën është ndërtuar Biseda.",
  pillars: [
    {
      title: 'Instalim i menaxhuar',
      description:
        "Respond.io ju jep një ndërtues rrjedhash dhe pret që ta dizajnoni vetë automatizimin. Ekipi i Biseda-s e ndërton asistentin tuaj AI rreth biznesit tuaj përpara se të hyni fare në panel.",
    },
    {
      title: 'Çmim fiks dhe i parashikueshëm',
      description:
        'Respond.io çmimon sipas Kontakteve Aktive Mujore, me shtesa për çdo anëtar ekipi. Biseda është një tarifë fikse mujore — 79€, 159€, ose 279€ — pa shkallëzim sipas numrit të kontakteve.',
    },
    {
      title: 'Akses direkt me ndërtuesin',
      description: 'Nuk po hapni një bilet në një radhë suporti. Po flisni me personin që e ka ndërtuar produktin.',
    },
    {
      title: 'Ndërtuar për biznese të vogla shërbimi, jo ekipe operacionesh të të ardhurave',
      description:
        "Fazat e ciklit jetësor, tabelat e shitjeve dhe 12+ llojet e raporteve të Respond.io janë ndërtuar për ekipe që menaxhojnë kanale shitjesh. Biseda është ndërtuar për një klinikë që i përgjigjet saktë pyetjes 'jeni hapur të shtunën?', çdo herë.",
    },
  ],
  tableTitle: 'Biseda AI vs respond.io: veçori për veçori',
  comparisonTable: [
    {
      category: 'Kanalet',
      rows: [
        { feature: 'WhatsApp', biseda: true, competitor: true },
        { feature: 'Instagram', biseda: true, competitor: true },
        { feature: 'Chat në faqen e internetit', biseda: true, competitor: true },
        { feature: 'Facebook Messenger', biseda: true, competitor: true },
        { feature: 'Telegram, SMS, Email', biseda: true, competitor: true },
        { feature: 'Telefonata zanore (VoIP)', biseda: 'soon', competitor: true, note: 'Biseda: në beta' },
        { feature: 'TikTok', biseda: false, competitor: true },
      ],
    },
    {
      category: 'AI & Automatizimi',
      rows: [
        { feature: 'Agjent AI që përgjigjet nga informacioni i biznesit tuaj', biseda: true, competitor: true },
        { feature: 'Kapje automatike e lead-eve', biseda: true, competitor: true },
        { feature: 'Rezervim automatik i takimeve', biseda: true, competitor: true },
        { feature: 'Ndërtues vizual rrjedhash pune', biseda: false, competitor: true },
        { feature: 'Fushata dalëse (broadcast)', biseda: false, competitor: true },
      ],
    },
    {
      category: 'Instalimi & Ekipi',
      rows: [
        { feature: 'Instalimi konfigurohet për ju', biseda: true, competitor: false, note: 'Respond.io: instalim vetë-udhëhequr' },
        { feature: 'Integrime CRM (HubSpot, Salesforce)', biseda: false, competitor: true },
        { feature: 'Aplikacion mobil vendas', biseda: false, competitor: true },
        { feature: '12+ lloje raportesh / panel analitikash', biseda: false, competitor: true, note: 'Biseda: numërime bazike bisedash dhe lead-esh' },
      ],
    },
    {
      category: 'Çmimi & Suporti',
      rows: [
        { feature: 'Çmim fiks mujor, pa shkallëzim sipas përdorimit', biseda: true, competitor: false },
        { feature: 'Pa kontratë afatgjatë', biseda: true, competitor: true },
        { feature: 'Akses direkt me themeluesin/ndërtuesin', biseda: true, competitor: false },
        { feature: 'Ekip suporti 24/7 i dedikuar', biseda: false, competitor: true, note: 'Biseda: suport drejtpërdrejt nga themeluesi' },
      ],
    },
  ],
  chooseUs: {
    title: 'Zgjidhni Biseda-n nëse…',
    points: [
      'Jeni një klinikë, sallon bukurie, restorant, palestër, ose biznes lokal shërbimi',
      "Doni që WhatsApp, Instagram dhe chat-i i faqes t'u përgjigjen automatikisht",
      'Nuk doni ta ndërtoni vetë automatizimin',
      'Doni një faturë të vetme e të parashikueshme mujore',
    ],
  },
  chooseThem: {
    title: 'Zgjidhni respond.io nëse…',
    points: [
      'Keni një ekip B2C të nivelit të mesëm me volum të lartë bisedash',
      'Ju duhet një ndërtues vizual rrjedhash dhe integrime të thella CRM/Zapier',
      'Ju duhen fushata broadcast, faza ciklesh jetësore dhe 12+ lloje raportesh',
      'Keni dikë të dedikuar për të ndërtuar dhe mirëmbajtur automatizimin',
    ],
  },
  faqTitle: 'Pyetje të shpeshta',
  faq: [
    {
      q: 'A është Biseda më e lirë se respond.io?',
      a: 'Plani Starter i respond.io fillon nga 99$/muaj për 5 përdorues me automatizim të kufizuar, dhe veçoritë e tij AI/workflow hapen vetëm në planin Growth prej 199$/muaj e sipër, të çmuara sipas Kontakteve Aktive Mujore. Biseda është fikse 79–279€/muaj me AI të përfshirë që nga plani i parë.',
    },
    {
      q: 'A i mbulon Biseda të njëjtat kanale si respond.io?',
      a: 'Biseda mbulon WhatsApp, Instagram, chat në faqen e internetit, Facebook Messenger, Telegram, SMS dhe email. Telefonatat zanore janë aktualisht në beta. Respond.io mbulon shtesë TikTok-un dhe ka telefonata zanore plotësisht aktive sot — nëse ju duhen pikërisht këto tani, respond.io është zgjedhja më e mirë përkohësisht.',
    },
    {
      q: "A më duhet të ndërtoj vetë chatbot-in tim me Biseda-n?",
      a: 'Jo. Ekipi i Biseda-s e konfiguron asistentin tuaj AI rreth biznesit tuaj real — orari, shërbimet, çmimet, politikat — përpara se të filloni. Respond.io ju jep një ndërtues rrjedhash dhe pret që ekipi juaj ta dizajnojë vetë automatizimin.',
    },
    {
      q: 'Cila është më e mira për një biznes të vogël lokal?',
      a: 'Për një klinikë, sallon apo restorant që ka nevojë kryesisht t\'u përgjigjet klientëve dhe të rezervojë takime, Biseda është ndërtuar posaçërisht për këtë punë, me çmim më të ulët e fiks. Respond.io është zgjedhja më e fortë për ekipe më të mëdha B2C të orientuara nga të ardhurat që kanë nevojë për automatizim të thellë dhe shkallë shumëkanalëshe.',
    },
  ],
  ctaLabel: 'Na shkruani në WhatsApp',
  soonLabel: 'Së shpejti',
};

export const respondIoComparison: ComparisonSet = { en, sq };
