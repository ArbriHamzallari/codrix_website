import type { ComparisonSet } from './types';

/**
 * Comparison data for /vs/intercom. Per claude.md §16, checked live against
 * intercom.com/pricing and trust.intercom.com on 2026-09-02 — re-verify
 * before republishing, since pricing/plan gating change.
 *
 * Verified: Essential $29/seat/mo, Advanced $85/seat/mo, Expert $132/seat/mo.
 * Fin AI billed at $0.99 per resolved outcome, on top of seat fees. WhatsApp
 * and SMS/phone/email-campaigns are usage-based across all plans (not a
 * higher-tier gate); Instagram is a supported channel per Intercom's own
 * help docs. Workflow automation builder is Advanced-tier+. HIPAA support is
 * Expert-tier; SOC 2 Type II / ISO 27001 / ISO 27018 / ISO 27701 are
 * certified org-wide per trust.intercom.com, not tier-gated.
 *
 * Rebuilt 2026-09-02 into the proper Record<'sq'|'en', ComparisonData> shape
 * — the previous version kept a single Albanian-only `table` reused by both
 * locale copies, which is why the table stayed in Albanian on /en/vs/intercom
 * regardless of locale. Also corrected per Arbri's direct screenshot of the
 * Chatwoot channel picker: phone/voice calling is a real "Beta"-tagged
 * feature for Biseda, not absent — rendered as 'soon', not a dash.
 */

const en: ComparisonSet['en'] = {
  slug: 'intercom',
  competitorName: 'Intercom (Fin)',
  metaTitle: 'Biseda AI vs Intercom — which fits your business',
  metaDescription:
    'An honest comparison between Biseda AI and Intercom (Fin) for clinics, salons and local service businesses: pricing, per-resolution AI billing, and setup.',
  headline: "An Intercom Alternative for Businesses That Don't Want to Build Their Own Bot",
  subheadline:
    "Intercom's Fin is a genuinely capable AI agent, built for product-led SaaS teams with the technical staff to train and maintain it. If you're a clinic or salon that just wants customers answered — without hiring help to configure a bot — that's a different job.",
  pillars: [
    {
      title: 'Configured for you, not by you',
      description:
        "Intercom's Fin is self-serve — several small teams report needing to hire outside help just to get it set up properly. Biseda's team builds your assistant around your business before you ever log in.",
    },
    {
      title: 'No per-resolution meter',
      description:
        'Intercom charges $0.99 for every AI-resolved conversation, on top of per-seat fees ($29-132/seat/month) — cost scales with both team size and volume. Biseda is a flat monthly fee with AI included.',
    },
    {
      title: 'Built for local service businesses',
      description:
        "Intercom's strongest fit is product-led SaaS companies with dedicated support staff and budget for its complexity. Biseda is built for a dental clinic answering 'are you open Saturday?' correctly.",
    },
    {
      title: 'Direct access to the builder',
      description: 'Not a support ticket queue — the person who built the product.',
    },
  ],
  tableTitle: 'Biseda AI vs Intercom: feature by feature',
  comparisonTable: [
    {
      category: 'Channels',
      rows: [
        { feature: 'Web chat & email', biseda: true, competitor: true },
        { feature: 'WhatsApp', biseda: true, competitor: true, note: 'Intercom: usage-based, on every plan' },
        { feature: 'Instagram / Facebook Messenger', biseda: true, competitor: true },
        { feature: 'Phone calling', biseda: 'soon', competitor: true, note: 'Intercom: paid add-on. Biseda: in beta' },
      ],
    },
    {
      category: 'AI & Automation',
      rows: [
        { feature: 'AI agent answering from your business info', biseda: true, competitor: true },
        { feature: 'AI billed per resolution on top of seat fees', biseda: false, competitor: true, note: 'Biseda: flat, no per-resolution charge' },
        { feature: 'Visual workflow builder', biseda: false, competitor: true, note: 'Intercom: Advanced tier and up' },
        { feature: 'Automatic lead capture & appointment booking', biseda: true, competitor: false },
      ],
    },
    {
      category: 'Setup & Team',
      rows: [
        { feature: 'Setup configured for you', biseda: true, competitor: false, note: 'Intercom: self-serve; some teams hire outside help' },
        { feature: '2,500+ integration marketplace', biseda: false, competitor: true },
        { feature: 'SOC 2 / ISO 27001 / HIPAA certification', biseda: false, competitor: true, note: 'HIPAA: Expert tier only; SOC 2/ISO org-wide' },
      ],
    },
    {
      category: 'Pricing & Support',
      rows: [
        { feature: 'Flat monthly price, no per-resolution billing', biseda: true, competitor: false },
        { feature: 'No long-term contract', biseda: true, competitor: true },
        { feature: 'Direct access to the builder', biseda: true, competitor: false },
      ],
    },
  ],
  chooseUs: {
    title: 'Choose Biseda if…',
    points: [
      "You're a clinic, salon, restaurant, or local service business",
      "You don't want to train or maintain a bot yourself",
      'You want one flat monthly bill, no per-resolution surprises',
      'You want direct access to the person who built it',
    ],
  },
  chooseThem: {
    title: 'Choose Intercom if…',
    points: [
      "You're a product-led SaaS company with a dedicated support team",
      'You need in-app product tours, proactive campaigns, and deep CRM integrations',
      'You need audited enterprise compliance (SOC 2, HIPAA)',
      'You have technical staff to configure and train Fin',
    ],
  },
  faqTitle: 'Frequently asked questions',
  faq: [
    {
      q: 'Is Biseda cheaper than Intercom?',
      a: "Intercom's Essential plan starts around $29 per seat per month, plus $0.99 for every AI-resolved conversation with no included allowance — cost grows with both team size and volume. Biseda is a flat €79-279/month with AI included and no per-resolution charge.",
    },
    {
      q: "Do I need technical help to set up Intercom's Fin agent?",
      a: "Often, yes — Intercom's setup is self-serve, and smaller teams commonly report needing outside help to configure and train it properly. Biseda's team configures your assistant around your business before you start.",
    },
    {
      q: "Does Biseda have Intercom's compliance certifications?",
      a: 'No — if you need audited SOC 2, ISO 27001, or HIPAA compliance, Intercom is the more mature choice. Biseda focuses on EU data residency appropriate for the small service businesses it\'s built for.',
    },
    {
      q: 'Which is better for a small, non-technical business owner?',
      a: 'For a clinic, salon, or restaurant owner without a support team, Biseda is built specifically for that — configured for you, flat price, no bot-training required. Intercom is the stronger choice for a SaaS company with staff and budget to run it.',
    },
  ],
  ctaLabel: 'Na shkruani në WhatsApp',
  soonLabel: 'Soon',
};

const sq: ComparisonSet['sq'] = {
  slug: 'intercom',
  competitorName: 'Intercom (Fin)',
  metaTitle: 'Biseda AI vs Intercom — cila zgjidhje ju përshtatet',
  metaDescription:
    'Krahasim i ndershëm mes Biseda AI dhe Intercom (Fin) për klinika, salone dhe biznese lokale: çmime, faturimi për rezultat AI dhe konfigurim.',
  headline: 'Një Alternativë ndaj Intercom, për Biznese që Nuk Duan të Ndërtojnë Vetë Bot-in e Tyre',
  subheadline:
    "Fin i Intercom është një agjent AI vërtet i aftë, ndërtuar për ekipe SaaS me staf teknik për ta trajnuar dhe mirëmbajtur. Nëse jeni klinikë apo sallon që thjesht dëshiron t'u përgjigjet klientëve — pa punësuar dikë për ta konfiguruar — kjo është punë tjetër.",
  pillars: [
    {
      title: 'Konfiguruar për ju, jo nga ju',
      description:
        'Fin i Intercom është vetë-shërbim — disa ekipe të vogla raportojnë se u është dashur ndihmë e jashtme vetëm për ta vendosur si duhet. Ekipi i Biseda-s e ndërton asistentin tuaj përpara se të hyni fare.',
    },
    {
      title: 'Pa faturim për çdo rezultat',
      description:
        'Intercom faturon $0.99 për çdo bisedë të zgjidhur nga AI, mbi tarifën për vend pune ($29-132/vend/muaj) — kostoja rritet me ekipin dhe me volumin. Biseda është një tarifë fikse mujore me AI të përfshirë.',
    },
    {
      title: 'Ndërtuar për biznese lokale shërbimesh',
      description:
        'Përshtatja më e fortë e Intercom janë kompanitë SaaS me staf të dedikuar mbështetjeje dhe buxhet për kompleksitetin e saj. Biseda është ndërtuar për një klinikë dentare që i përgjigjet saktë "jeni hapur të shtunën?".',
    },
    {
      title: 'Akses direkt te ndërtuesi',
      description: 'Jo një radhë biletash mbështetjeje — personi që e ndërtoi produktin.',
    },
  ],
  tableTitle: 'Biseda AI vs Intercom: veçori për veçori',
  comparisonTable: [
    {
      category: 'Kanalet',
      rows: [
        { feature: 'Chat në faqen e internetit & email', biseda: true, competitor: true },
        { feature: 'WhatsApp', biseda: true, competitor: true, note: 'Intercom: me pagesë sipas përdorimit, në çdo plan' },
        { feature: 'Instagram / Facebook Messenger', biseda: true, competitor: true },
        { feature: 'Telefonata', biseda: 'soon', competitor: true, note: 'Intercom: shtesë me pagesë. Biseda: në beta' },
      ],
    },
    {
      category: 'AI & Automatizimi',
      rows: [
        { feature: 'Agjent AI që përgjigjet nga informacioni i biznesit tuaj', biseda: true, competitor: true },
        {
          feature: 'AI faturohet për çdo rezultat, mbi tarifën për vend pune',
          biseda: false,
          competitor: true,
          note: 'Biseda: fikse, pa tarifë shtesë për çdo rezultat AI',
        },
        { feature: 'Ndërtues vizual automatizimesh (workflow builder)', biseda: false, competitor: true, note: 'Intercom: vetëm plani Advanced e sipër' },
        { feature: 'Kapje automatike e klientëve dhe rezervim takimesh', biseda: true, competitor: false },
      ],
    },
    {
      category: 'Instalimi & Ekipi',
      rows: [
        { feature: 'Instalimi bëhet për ju', biseda: true, competitor: false, note: 'Intercom: vetë-shërbim' },
        { feature: 'Panel integrimesh të gjera (2500+)', biseda: false, competitor: true },
        { feature: 'Certifikime SOC 2 / ISO 27001 / HIPAA', biseda: false, competitor: true, note: 'HIPAA: vetëm plani Expert; SOC 2/ISO për të gjithë kompaninë' },
      ],
    },
    {
      category: 'Çmimi & Suporti',
      rows: [
        { feature: 'Çmim fiks, pa faturim për çdo rezultat AI', biseda: true, competitor: false },
        { feature: 'Pa kontratë afatgjatë', biseda: true, competitor: true },
        { feature: 'Akses direkt te ndërtuesi', biseda: true, competitor: false },
      ],
    },
  ],
  chooseUs: {
    title: 'Zgjidhni Biseda nëse…',
    points: [
      'Jeni klinikë, sallon, restorant ose biznes lokal shërbimesh',
      'Nuk doni ta trajnoni apo mirëmbani vetë një bot',
      'Doni një faturë fikse mujore, pa surpriza për çdo rezultat',
      'Doni akses direkt te personi që e ndërtoi',
    ],
  },
  chooseThem: {
    title: 'Zgjidhni Intercom nëse…',
    points: [
      'Jeni kompani SaaS me ekip mbështetjeje të dedikuar',
      'Ju duhen turne produkti brenda aplikacionit, fushata proaktive dhe integrime të thella CRM',
      'Ju duhet përputhshmëri e audituar enterprise (SOC 2, HIPAA)',
      'Keni staf teknik për të konfiguruar dhe trajnuar Fin',
    ],
  },
  faqTitle: 'Pyetje të shpeshta',
  faq: [
    {
      q: 'A është Biseda më e lirë se Intercom?',
      a: 'Plani Essential i Intercom fillon rreth $29/vend pune/muaj, plus $0.99 për çdo bisedë të zgjidhur nga AI, pa asnjë alokim të përfshirë — kostoja rritet me ekipin dhe volumin. Biseda është një tarifë fikse €79-279/muaj me AI të përfshirë, pa faturim për çdo rezultat.',
    },
    {
      q: 'A më duhet ndihmë teknike për të konfiguruar Fin të Intercom?',
      a: 'Shpesh po — konfigurimi i Intercom është vetë-shërbim, dhe ekipet e vogla raportojnë shpesh që u është dashur ndihmë e jashtme për ta konfiguruar dhe trajnuar si duhet. Ekipi i Biseda-s e konfiguron asistentin tuaj rreth biznesit tuaj përpara se të filloni.',
    },
    {
      q: 'A i ka Biseda certifikimet e Intercom?',
      a: 'Jo — nëse ju duhet përputhshmëri e audituar SOC 2, ISO 27001 apo HIPAA, Intercom është zgjidhja më e pjekur. Biseda fokusohet te vendndodhja e të dhënave në BE, e përshtatshme për bizneset e vogla shërbimesh që synon.',
    },
    {
      q: 'Cila është më e mirë për një pronar biznesi jo-teknik?',
      a: 'Për një klinikë, sallon apo restorant pa ekip mbështetjeje, Biseda është ndërtuar posaçërisht për këtë — konfigurim i bërë për ju, çmim fiks, pa trajnim boti. Intercom është zgjidhja më e fortë për një kompani SaaS me staf dhe buxhet për ta drejtuar.',
    },
  ],
  ctaLabel: 'Na shkruani në WhatsApp',
  soonLabel: 'Së shpejti',
};

export const intercomComparison: ComparisonSet = { en, sq };
