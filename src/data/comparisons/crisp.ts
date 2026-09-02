import type { ComparisonSet } from './types';

/**
 * Comparison data for /vs/crisp. Per claude.md §16, checked live against
 * crisp.chat/en/pricing on 2026-09-02 — re-verify before republishing.
 *
 * Verified: Free $0, Mini $45/mo, Essentials $95/mo, Plus $295/mo, Enterprise
 * custom. WhatsApp and Instagram require Essentials ($95/mo) or higher —
 * absent on Free and Mini. AI (Hugo) is credit-metered: Mini's $5 of credits
 * covers ~90 automated conversations; Essentials ~450; Plus ~1,350. Plus
 * tier lists "100+ integrations"; Free/Mini/Essentials share a smaller,
 * named integration list. Enterprise offers a "personalized SLA" — no SLA
 * mentioned on any other tier.
 *
 * Rebuilt 2026-09-02 into the proper Record<'sq'|'en', ComparisonData> shape
 * — the previous version kept a single Albanian-only `table` reused by both
 * locale copies, which meant the table never localized. Crisp has no
 * calling/voice row, so no 'soon' status applies here — the shape change is
 * the only correction needed for this file.
 */

const en: ComparisonSet['en'] = {
  slug: 'crisp',
  competitorName: 'Crisp',
  metaTitle: 'Biseda AI vs Crisp — which fits your business',
  metaDescription:
    'An honest comparison between Biseda AI and Crisp for clinics, salons and local service businesses: channels, AI credits, pricing, and setup.',
  headline: 'A Crisp Alternative With Your AI Assistant Already Set Up',
  subheadline:
    "Crisp is a solid, affordable shared inbox for lean teams comfortable with self-serve setup. If you want WhatsApp and Instagram included from day one, with an AI trained on your actual business rather than a credit-metered FAQ bot, that's what Biseda is built for.",
  pillars: [
    {
      title: 'WhatsApp and Instagram from the start',
      description:
        "Crisp's free and Mini plans don't include WhatsApp or Instagram at all — those require the $95/month Essentials plan or higher. Biseda includes WhatsApp from its lowest tier.",
    },
    {
      title: 'No AI credit ceiling',
      description:
        "Crisp meters AI usage in credits — the Mini plan's allowance covers roughly 90 conversations before requiring a top-up. Biseda's AI is included, not metered against a shrinking credit pool.",
    },
    {
      title: 'Trained on your real business, not just uploaded FAQs',
      description:
        "Crisp's AI (Hugo) learns only from documents you upload, not live conversation history, and users report it can answer inconsistently without ongoing manual upkeep. Biseda's team builds and maintains your assistant's knowledge directly.",
    },
    {
      title: 'Direct access to the builder',
      description: 'Not a small support queue — the person who built the product.',
    },
  ],
  tableTitle: 'Biseda AI vs Crisp: feature by feature',
  comparisonTable: [
    {
      category: 'Channels',
      rows: [
        { feature: 'Web chat', biseda: true, competitor: true },
        { feature: 'WhatsApp', biseda: true, competitor: true, note: 'Crisp: requires $95/mo Essentials plan or higher' },
        { feature: 'Instagram', biseda: true, competitor: true, note: 'Crisp: requires $95/mo Essentials plan or higher' },
      ],
    },
    {
      category: 'AI & Automation',
      rows: [
        { feature: 'AI agent answering from your business info', biseda: true, competitor: true },
        { feature: 'AI usage metered by credits with overage cost', biseda: false, competitor: true, note: 'Biseda: included, not credit-limited' },
        { feature: 'Automatic lead capture & appointment booking', biseda: true, competitor: false },
      ],
    },
    {
      category: 'Setup & Team',
      rows: [
        { feature: 'Setup configured for you', biseda: true, competitor: false, note: 'Crisp: self-serve; builder has a real learning curve for complex flows' },
        { feature: '100+ integration marketplace', biseda: false, competitor: true, note: 'Crisp: Plus tier ($295/mo) only' },
        { feature: 'SOC 2 / formal SLA', biseda: false, competitor: false, note: 'Neither offers this — Crisp offers SLA only on Enterprise, by request' },
      ],
    },
    {
      category: 'Pricing & Support',
      rows: [
        { feature: 'Flat monthly price', biseda: true, competitor: true, note: 'Both are flat-priced; Crisp adds AI-credit overage fees' },
        { feature: 'No long-term contract', biseda: true, competitor: true },
        { feature: 'Direct access to the founder/builder', biseda: true, competitor: false },
      ],
    },
  ],
  chooseUs: {
    title: 'Choose Biseda if…',
    points: [
      'You want WhatsApp and Instagram included at your starting price',
      "You don't want to manage AI credits or train a chatbot yourself",
      "You're a clinic, salon, restaurant, or local service business",
      'You want your AI kept current by the people who built it',
    ],
  },
  chooseThem: {
    title: 'Choose Crisp if…',
    points: [
      "You're comfortable with self-serve setup and a visual bot builder",
      'You mainly need web chat and email at the free or Mini tier',
      'You want a large (100+) integration marketplace at the Plus tier',
      'You run a digital-first team, e-commerce, or startup',
    ],
  },
  faqTitle: 'Frequently asked questions',
  faq: [
    {
      q: 'Is Biseda cheaper than Crisp?',
      a: "Crisp's free and Mini ($45/mo) tiers don't include WhatsApp or Instagram at all — those require the $95/month Essentials plan, and AI usage is credit-metered (the Mini tier's allowance covers roughly 90 conversations before a top-up is needed). Biseda includes WhatsApp from €79/month with AI answering included, not credit-limited.",
    },
    {
      q: "Does Crisp's AI learn from my past customer conversations?",
      a: "No — per Crisp's own documentation and user reports, its AI (Hugo) learns only from documents and FAQs you upload, not from live chat history, and can answer inconsistently without regular manual upkeep. Biseda's team builds your assistant from your actual business information and keeps it current.",
    },
    {
      q: 'Which is better for a small business owner with no technical background?',
      a: "Crisp is self-serve, with a workflow builder that has a real learning curve for anything beyond simple flows. Biseda is configured entirely by Biseda's team before you start — no builder to learn.",
    },
  ],
  ctaLabel: 'Na shkruani në WhatsApp',
  soonLabel: 'Soon',
};

const sq: ComparisonSet['sq'] = {
  slug: 'crisp',
  competitorName: 'Crisp',
  metaTitle: 'Biseda AI vs Crisp — cila zgjidhje ju përshtatet',
  metaDescription:
    'Krahasim i ndershëm mes Biseda AI dhe Crisp për klinika, salone dhe biznese lokale: kanale, kredite AI, çmime dhe konfigurim.',
  headline: 'Një Alternativë ndaj Crisp, me Asistentin Tuaj AI të Konfiguruar që në Fillim',
  subheadline:
    'Crisp është një inbox i përbashkët praktik për ekipe të vogla që preferojnë të bëjnë vetë konfigurimin. Nëse dëshironi WhatsApp dhe Instagram që në fillim, së bashku me një asistent AI të përshtatur sipas biznesit tuaj, Biseda është krijuar pikërisht për këtë.',
  pillars: [
    {
      title: 'WhatsApp dhe Instagram që në fillim',
      description:
        'Planet bazë të Crisp nuk përfshijnë WhatsApp dhe Instagram; këto kanale kërkojnë plane më të larta ($95/muaj Essentials e sipër). Me Biseda, WhatsApp dhe Instagram janë pjesë e platformës që nga plani fillestar.',
    },
    {
      title: 'Pa limite kreditesh AI',
      description:
        "Crisp e mat përdorimin e AI përmes krediteve — alokimi i planit Mini mbulon rreth 90 biseda përpara se t'ju duhet të shtoni kredite. Me Biseda, AI është pjesë e planit tuaj dhe nuk varet nga një paketë kreditesh që mund të përfundojë.",
    },
    {
      title: 'AI i përshtatur sipas biznesit tuaj',
      description:
        'Asistenti i Biseda ndërtohet mbi informacionin real të biznesit tuaj — shërbimet, çmimet, oraret, politikat dhe mënyrën se si dëshironi të komunikoni me klientët. Ekipi ynë kujdeset gjithashtu që ky informacion të mbetet i përditësuar.',
    },
    {
      title: 'Akses direkt te ndërtuesi',
      description: 'Kur keni nevojë për ndihmë, flisni drejtpërdrejt me personin që e ka ndërtuar produktin.',
    },
  ],
  tableTitle: 'Biseda AI vs Crisp: krahasim veçori për veçori',
  comparisonTable: [
    {
      category: 'Kanalet',
      rows: [
        { feature: 'Chat në faqen e internetit', biseda: true, competitor: true },
        { feature: 'WhatsApp', biseda: true, competitor: true, note: 'Crisp: kërkon planin Essentials ($95/muaj) e sipër' },
        { feature: 'Instagram', biseda: true, competitor: true, note: 'Crisp: kërkon planin Essentials ($95/muaj) e sipër' },
      ],
    },
    {
      category: 'AI dhe automatizimi',
      rows: [
        { feature: 'Agjent AI që përgjigjet bazuar në informacionin e biznesit tuaj', biseda: true, competitor: true },
        {
          feature: 'AI e kufizuar në kredite, me kosto shtesë kur mbarojnë',
          biseda: false,
          competitor: true,
          note: 'Biseda: i përfshirë, pa kufi krediti',
        },
        { feature: 'Kapje automatike e klientëve potencialë dhe rezervim takimesh', biseda: true, competitor: false },
      ],
    },
    {
      category: 'Konfigurimi dhe ekipi',
      rows: [
        { feature: 'Konfigurohet për ju', biseda: true, competitor: false, note: 'Crisp: vetë-konfigurim, me kurbë mësimi për flukse komplekse' },
        { feature: 'Panel integrimesh (100+)', biseda: false, competitor: true, note: 'Crisp: vetëm plani Plus ($295/muaj)' },
        { feature: 'SLA formal', biseda: false, competitor: false, note: 'Asnjëra nuk ofron këtë — Crisp ofron SLA vetëm te Enterprise, me kërkesë' },
      ],
    },
    {
      category: 'Çmimi dhe mbështetja',
      rows: [
        { feature: 'Çmim fiks', biseda: true, competitor: true, note: 'Të dyja janë me çmim fiks; Crisp shton kosto shtesë kur kaloni kreditet AI' },
        { feature: 'Pa kontratë afatgjatë', biseda: true, competitor: true },
        { feature: 'Akses i drejtpërdrejtë te ndërtuesi', biseda: true, competitor: false },
      ],
    },
  ],
  chooseUs: {
    title: 'Zgjidhni Biseda nëse…',
    points: [
      'Dëshironi WhatsApp dhe Instagram që në planin fillestar',
      'Nuk dëshironi të menaxhoni kredite AI',
      'Jeni klinikë, sallon, restorant ose biznes lokal shërbimesh',
      'Dëshironi që asistenti AI të konfigurohet dhe mirëmbahet nga ekipi që e ka ndërtuar',
    ],
  },
  chooseThem: {
    title: 'Zgjidhni Crisp nëse…',
    points: [
      'Preferoni ta konfiguroni vetë platformën',
      'Ju nevojitet kryesisht web chat dhe email',
      'Dëshironi një panel të gjerë integrimesh',
      'Jeni startup, e-commerce ose ekip dixhital',
    ],
  },
  faqTitle: 'Pyetje të shpeshta',
  faq: [
    {
      q: 'A është Biseda më e lirë se Crisp?',
      a: "Crisp ofron plane me çmime të ndryshme, ndërsa disa veçori dhe kanale, përfshirë WhatsApp dhe Instagram, janë të disponueshme vetëm në planet më të larta ($95/muaj Essentials e sipër). Biseda i përfshin këto kanale që nga 79€/muaj, së bashku me AI.",
    },
    {
      q: 'A mëson AI i Crisp nga bisedat e mëparshme me klientët?',
      a: 'Sipas mënyrës së dokumentuar të funksionimit të Crisp, njohuritë e AI-së (Hugo) bazohen te dokumentet dhe burimet që i vihen në dispozicion, jo te historiku i bisedave. Me Biseda, asistenti konfigurohet drejtpërdrejt mbi informacionin e biznesit tuaj dhe mbahet i përditësuar nga ekipi ynë.',
    },
    {
      q: 'Cila është më e mirë për një pronar biznesi pa staf teknik?',
      a: 'Crisp është një zgjedhje e mirë nëse dëshironi ta konfiguroni vetë platformën. Biseda është më e përshtatshme nëse dëshironi që konfigurimi të bëhet për ju, pa pasur nevojë të mësoni ndërtues automatizimesh apo të menaxhoni vetë një chatbot.',
    },
  ],
  ctaLabel: 'Na shkruani në WhatsApp',
  soonLabel: 'Së shpejti',
};

export const crispComparison: ComparisonSet = { en, sq };
