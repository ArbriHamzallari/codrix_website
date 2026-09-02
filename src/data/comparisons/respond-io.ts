/**
 * Comparison data for /vs/respond-io. Per claude.md §16, every claim about
 * respond.io here was checked against their live pricing/feature pages
 * (respond.io/pricing) on 2026-09-02 — re-verify before republishing, since
 * competitor pricing and plan gating change.
 *
 * Real finding from that check: respond.io's current Starter/Growth/Advanced
 * prices ($79/$159/$279) are numerically identical to Biseda's own tiers, so
 * this page does NOT claim to be cheaper — the honest differentiator is flat
 * pricing (no Monthly-Active-Contact overage, no per-seat add-ons) and a
 * managed setup, not a lower number.
 */

export interface ComparisonRow {
  feature: string;
  biseda: boolean;
  competitor: boolean;
  note?: string;
}

export interface ComparisonGroup {
  category: string;
  rows: ComparisonRow[];
}

export interface ComparisonCopy {
  headline: string;
  subheadline: string;
  pillars: { title: string; description: string }[];
  tableTitle: string;
  chooseUsTitle: string;
  chooseUs: string[];
  chooseThemTitle: string;
  chooseThem: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaLabel: string;
  metaTitle: string;
  metaDescription: string;
}

const table: ComparisonGroup[] = [
  {
    category: 'Kanalet / Channels',
    rows: [
      { feature: 'WhatsApp', biseda: true, competitor: true },
      { feature: 'Instagram', biseda: true, competitor: true },
      { feature: 'Web chat', biseda: true, competitor: true },
      { feature: 'Facebook Messenger', biseda: true, competitor: true },
      {
        feature: 'Telegram, SMS, Email, TikTok, thirrje (VoIP)',
        biseda: false,
        competitor: true,
      },
    ],
  },
  {
    category: 'AI & Automatizim / AI & Automation',
    rows: [
      { feature: 'Agjent AI që përgjigjet nga info e biznesit tuaj', biseda: true, competitor: true },
      { feature: 'Kapje automatike e klientëve (lead capture)', biseda: true, competitor: true },
      { feature: 'Rezervim automatik i takimeve', biseda: true, competitor: true },
      {
        feature: 'Ndërtues vizual automatizimesh (workflow builder)',
        biseda: false,
        competitor: true,
        note: 'Respond.io: kërkon planin Growth ($159) e sipër',
      },
      { feature: 'Fushata broadcast dalëse', biseda: false, competitor: true },
    ],
  },
  {
    category: 'Konfigurimi & Ekipi / Setup & Team',
    rows: [
      {
        feature: 'Konfigurimi bëhet për ju',
        biseda: true,
        competitor: false,
        note: 'Respond.io: konfigurim vetë-shërbim',
      },
      { feature: 'Integrime CRM (HubSpot, Salesforce)', biseda: false, competitor: true },
      { feature: 'Aplikacion mobil nativ', biseda: false, competitor: true },
      {
        feature: 'Panel raportesh me shumë module',
        biseda: false,
        competitor: true,
        note: 'Biseda: numër bisedash dhe klientësh bazë',
      },
    ],
  },
  {
    category: 'Çmimi & Mbështetja / Pricing & Support',
    rows: [
      {
        feature: 'Çmim fiks, pa shkallëzim sipas kontakteve',
        biseda: true,
        competitor: false,
        note: 'Respond.io: kufi kontaktesh mujor (MAC) + tarifë shtesë mbi kufirin',
      },
      { feature: 'Pa kosto shtesë për çdo anëtar ekipi', biseda: true, competitor: false, note: 'Respond.io: $12-24/muaj për çdo përdorues shtesë' },
      { feature: 'Pa kontratë afatgjatë', biseda: true, competitor: true },
      { feature: 'Akses i drejtpërdrejtë te ekipi që e ndërton produktin', biseda: true, competitor: false },
    ],
  },
];

export const respondIoComparison: {
  slug: string;
  competitorName: string;
  table: ComparisonGroup[];
  copy: Record<'sq' | 'en', ComparisonCopy>;
} = {
  slug: 'respond-io',
  competitorName: 'respond.io',
  table,
  copy: {
    sq: {
      metaTitle: 'Biseda AI vs respond.io — cila zgjidhje ju përshtatet',
      metaDescription:
        'Krahasim i ndershëm mes Biseda AI dhe respond.io për klinika, salone dhe biznese lokale: kanale, automatizim AI, çmime dhe konfigurim.',
      headline: 'Një alternativë më e thjeshtë ndaj Respond.io, për biznese të vogla lokale',
      subheadline:
        'Respond.io është ndërtuar për ekipe mesatare/të mëdha me volum të lartë bisedash në shumë kanale, ku dikush ndërton dhe mirëmban automatizimin vetë. Nëse jeni një klinikë, sallon apo restorant që thjesht dëshiron t\'u përgjigjet klientëve dhe të rezervojë takime — pa e ndërtuar vetë automatizimin — kjo është puna që bën Biseda.',
      pillars: [
        {
          title: 'Konfigurim i bërë për ju',
          description:
            'Respond.io ju jep një ndërtues automatizimesh dhe pret që ta dizajnoni vetë. Ekipi i Biseda e ndërton asistentin tuaj AI rreth biznesit tuaj përpara se të hyni fare.',
        },
        {
          title: 'Çmim fiks, pa u shqetësuar për kontaktet',
          description:
            'Respond.io kufizon kontaktet aktive mujore (MAC) dhe faturon shtesë mbi kufirin, plus çdo anëtar ekipi shtesë. Biseda është një tarifë fikse mujore — €79, €159 ose €279 — pa llogaritje shtesë.',
        },
        {
          title: 'Akses direkt te njerëzit që e ndërtojnë',
          description: 'Nuk hapni një bilet në një radhë mbështetjeje. Flisni me personin që e ndërtoi produktin.',
        },
        {
          title: 'Ndërtuar për biznese lokale, jo për ekipe shitjesh',
          description:
            'Fazat e ciklit të jetës, tabelat e shitjeve dhe raportet e shumta të respond.io janë për ekipe që menaxhojnë pipeline. Biseda është ndërtuar që një klinikë t\'i përgjigjet saktë pyetjes "jeni hapur të shtunën?" — çdo herë.',
        },
      ],
      tableTitle: 'Biseda AI vs respond.io: veçori për veçori',
      chooseUsTitle: 'Zgjidhni Biseda nëse…',
      chooseUs: [
        'Jeni klinikë, sallon, restorant, palestër ose biznes lokal shërbimesh',
        'Doni WhatsApp, Instagram dhe web chat t\'u përgjigjen automatikisht',
        'Nuk doni ta ndërtoni apo mirëmbani vetë automatizimin',
        'Doni një faturë fikse dhe të parashikueshme çdo muaj',
      ],
      chooseThemTitle: 'Zgjidhni respond.io nëse…',
      chooseThem: [
        'Keni një ekip B2C mesatar/të madh me volum të lartë bisedash',
        'Ju duhet një ndërtues vizual automatizimesh dhe integrime të thella CRM/Zapier',
        'Ju duhen fushata broadcast, faza ciklesh jete dhe raporte të shumta',
        'Keni dikë të dedikuar për të ndërtuar dhe mirëmbajtur automatizimin',
      ],
      faqTitle: 'Pyetje të shpeshta',
      faq: [
        {
          q: 'A është Biseda më e lirë se respond.io?',
          a: 'Për biznesin tuaj, jo domosdoshmërisht sipas numrave bazë — planet e respond.io fillojnë tek $79/$159/$279, njësoj si tarifat e Biseda. Ndryshimi real: respond.io kufizon kontaktet aktive mujore dhe faturon shtesë mbi kufirin, plus $12-24/muaj për çdo anëtar ekipi shtesë. Tarifa e Biseda mbetet fikse pavarësisht sa kontakte apo sa anëtarë ekipi keni.',
        },
        {
          q: 'A mbulon Biseda të njëjtat kanale si respond.io?',
          a: 'Biseda mbulon WhatsApp, Instagram, web chat dhe Facebook Messenger. Respond.io mbulon më shumë kanale gjithsej, përfshirë Telegram, SMS, email, TikTok dhe thirrje VoIP — nëse ju duhen pikërisht ato, respond.io është zgjidhja më e mirë sot.',
        },
        {
          q: 'A duhet ta ndërtoj vetë chatbot-in me Biseda?',
          a: 'Jo. Ekipi i Biseda e konfiguron asistentin tuaj AI rreth biznesit tuaj real — orari, shërbimet, çmimet, politikat — përpara se të shkoni live. Respond.io ju jep një ndërtues automatizimesh dhe pret që ekipi juaj ta dizajnojë vetë.',
        },
        {
          q: 'Cila është më e mirë për një biznes të vogël lokal?',
          a: 'Për një klinikë, sallon apo restorant që kryesisht ka nevojë t\'u përgjigjet klientëve dhe të rezervojë takime, Biseda është ndërtuar posaçërisht për këtë punë me çmim fiks. Respond.io është ndërtuar për ekipe B2C më të mëdha që kanë nevojë për automatizim të thellë dhe shkallë shumëkanalëshe.',
        },
      ],
      ctaLabel: 'Na shkruani në WhatsApp',
    },
    en: {
      metaTitle: 'Biseda AI vs respond.io — which fits your business',
      metaDescription:
        'An honest comparison between Biseda AI and respond.io for clinics, salons and local service businesses: channels, AI automation, pricing and setup.',
      headline: 'A Simpler Respond.io Alternative for Small, Local Businesses',
      subheadline:
        'Respond.io is built for mid-market teams running high-volume conversations across a dozen channels, where someone builds and maintains the automation themselves. If you\'re a clinic, salon, or restaurant that just needs customers answered and appointments booked — without building your own automation — that\'s the job Biseda is built for.',
      pillars: [
        {
          title: 'Managed setup',
          description:
            'Respond.io gives you a workflow builder and expects you to design the automation yourself. Biseda\'s team builds your AI assistant around your business before you ever log in.',
        },
        {
          title: 'Flat pricing, no contact math',
          description:
            'Respond.io caps Monthly Active Contacts and bills overage past that limit, plus a per-seat charge for every extra team member. Biseda is a flat monthly fee — €79, €159, or €279 — with nothing extra to track.',
        },
        {
          title: 'Direct access to the people who built it',
          description: 'You\'re not opening a ticket into a support queue. You\'re talking to the person who built the product.',
        },
        {
          title: 'Built for local service businesses, not sales-ops teams',
          description:
            'Respond.io\'s lifecycle stages, sales dashboards and multiple report types are built for teams managing a pipeline. Biseda is built for a clinic answering "are you open Saturday?" correctly, every time.',
        },
      ],
      tableTitle: 'Biseda AI vs respond.io: feature by feature',
      chooseUsTitle: "Choose Biseda if…",
      chooseUs: [
        'You\'re a clinic, salon, restaurant, gym, or local service business',
        'You want WhatsApp, Instagram, and web chat answered automatically',
        'You don\'t want to build or maintain automation yourself',
        'You want one flat, predictable monthly bill',
      ],
      chooseThemTitle: 'Choose respond.io if…',
      chooseThem: [
        'You run a mid-market B2C team with high conversation volume',
        'You need a visual workflow builder and deep CRM/Zapier integrations',
        'You need broadcast campaigns, lifecycle stages, and multiple report types',
        'You have someone dedicated to building and maintaining automation',
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Is Biseda cheaper than respond.io?',
          a: 'Not on the headline numbers alone — respond.io\'s Starter/Growth/Advanced plans start at $79/$159/$279, the same figures as Biseda\'s own tiers. The real difference: respond.io caps Monthly Active Contacts and bills overage past that limit, plus $12-24/month for every extra team seat. Biseda stays flat no matter how many contacts or team members you have.',
        },
        {
          q: 'Does Biseda support the same channels as respond.io?',
          a: 'Biseda covers WhatsApp, Instagram, web chat, and Facebook Messenger. Respond.io supports more channels overall, including Telegram, SMS, email, TikTok, and VoIP calling — if you need those specifically, respond.io is the better fit today.',
        },
        {
          q: 'Do I need to build my own chatbot with Biseda?',
          a: 'No. Biseda\'s team configures your AI assistant around your actual business — hours, services, prices, policies — before you go live. Respond.io gives you a workflow builder and expects your team to design the automation.',
        },
        {
          q: 'Which is better for a small local business?',
          a: 'For a clinic, salon, or restaurant that mainly needs customers answered and appointments booked, Biseda is built specifically for that job at a flat price. Respond.io is built for larger B2C teams that need deep automation and multi-channel scale.',
        },
      ],
      ctaLabel: 'Na shkruani në WhatsApp',
    },
  },
};
