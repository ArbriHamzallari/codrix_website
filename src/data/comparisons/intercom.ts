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
  headline: 'Një Alternativë ndaj Intercom për Bizneset që Nuk Duan ta Ndërtojnë Vetë Asistentin AI',
  subheadline:
    "Fin i Intercom është një agjent AI i fuqishëm, i krijuar kryesisht për kompani SaaS dhe ekipe që kanë burime teknike për ta konfiguruar dhe mirëmbajtur. Nëse jeni një klinikë, sallon, restorant apo biznes lokal që thjesht dëshiron t'u përgjigjet klientëve dhe të rezervojë takime — pa pasur nevojë të merret vetë me konfigurimin — Biseda është krijuar për këtë.",
  pillars: [
    {
      title: 'Konfigurohet për ju, jo nga ju',
      description:
        'Intercom është kryesisht një platformë vetë-konfigurimi. Me Biseda, ekipi ynë e përgatit dhe e konfiguron asistentin tuaj AI sipas biznesit tuaj, përpara se të filloni ta përdorni.',
    },
    {
      title: 'Pa pagesë për çdo bisedë të zgjidhur nga AI',
      description:
        'Intercom tarifon për çdo bisedë të zgjidhur nga AI, përveç tarifës për vendin e punës ($29-132/vend/muaj). Kjo do të thotë se kostoja mund të rritet bashkë me volumin e bisedave. Biseda ofron një tarifë mujore fikse me AI të përfshirë.',
    },
    {
      title: 'Krijuar për bizneset lokale të shërbimeve',
      description:
        'Intercom është veçanërisht i përshtatshëm për kompani SaaS me ekipe të dedikuara të mbështetjes dhe shitjeve. Biseda është krijuar për një klinikë dentare që duhet t\'i përgjigjet saktë pyetjeve si "A jeni hapur të shtunën?", të mbledhë të dhënat e klientit dhe të rezervojë takimin.',
    },
    {
      title: 'Flisni drejtpërdrejt me ndërtuesin',
      description: 'Jo një zinxhir biletash mbështetjeje — por akses direkt te personi që e ka ndërtuar produktin.',
    },
  ],
  tableTitle: 'Biseda AI vs Intercom: krahasim veçori për veçori',
  comparisonTable: [
    {
      category: 'Kanalet',
      rows: [
        { feature: 'Chat në faqen e internetit & email', biseda: true, competitor: true },
        { feature: 'WhatsApp', biseda: true, competitor: true, note: 'Intercom: me pagesë sipas përdorimit, në çdo plan' },
        { feature: 'Instagram / Facebook Messenger', biseda: true, competitor: true },
        { feature: 'Telefonata zanore', biseda: 'soon', competitor: true, note: 'Intercom: shtesë me pagesë. Biseda: në beta' },
      ],
    },
    {
      category: 'AI dhe automatizimi',
      rows: [
        { feature: 'Agjent AI që përgjigjet bazuar në informacionin e biznesit tuaj', biseda: true, competitor: true },
        {
          feature: 'AI faturohet për çdo rezultat, mbi tarifën për vend pune',
          biseda: false,
          competitor: true,
          note: 'Biseda: tarifë fikse, pa kosto shtesë për çdo rezultat AI',
        },
        { feature: 'Ndërtues i rrjedhave të automatizimit', biseda: false, competitor: true, note: 'Intercom: vetëm plani Advanced e sipër' },
        { feature: 'Kapje automatike e klientëve potencialë dhe rezervim takimesh', biseda: true, competitor: false },
      ],
    },
    {
      category: 'Konfigurimi dhe ekipi',
      rows: [
        { feature: 'Konfigurohet për ju', biseda: true, competitor: false, note: 'Intercom: vetë-konfigurim' },
        { feature: 'Panel integrimesh të gjera (2500+)', biseda: false, competitor: true },
        { feature: 'Certifikime SOC 2 / ISO 27001 / HIPAA', biseda: false, competitor: true, note: 'HIPAA: vetëm plani Expert; SOC 2/ISO për të gjithë kompaninë' },
      ],
    },
    {
      category: 'Çmimi dhe mbështetja',
      rows: [
        { feature: 'Tarifë fikse, pa kosto shtesë për çdo rezultat AI', biseda: true, competitor: false },
        { feature: 'Pa kontratë afatgjatë', biseda: true, competitor: true },
        { feature: 'Akses i drejtpërdrejtë te ndërtuesi', biseda: true, competitor: false },
      ],
    },
  ],
  chooseUs: {
    title: 'Zgjidhni Biseda nëse…',
    points: [
      'Jeni klinikë, sallon, restorant ose biznes lokal shërbimesh',
      'Nuk dëshironi të trajnoni dhe mirëmbani vetë një asistent AI',
      'Dëshironi një faturë mujore fikse pa kosto shtesë për çdo rezultat të AI',
      'Dëshironi akses direkt te personi që e ka ndërtuar produktin',
    ],
  },
  chooseThem: {
    title: 'Zgjidhni Intercom nëse…',
    points: [
      'Jeni kompani SaaS me ekip të dedikuar të mbështetjes',
      'Ju nevojiten turne produkti brenda aplikacionit, fushata proaktive dhe integrime të avancuara CRM',
      'Ju nevojiten standarde dhe certifikime të avancuara enterprise',
      'Keni staf teknik për konfigurimin dhe mirëmbajtjen e Fin',
    ],
  },
  faqTitle: 'Pyetje të shpeshta',
  faq: [
    {
      q: 'A është Biseda më e lirë se Intercom?',
      a: 'Intercom kombinon tarifën për vendin e punës me tarifimin sipas përdorimit të AI. Biseda ofron plane fikse prej 79€–279€/muaj, me AI të përfshirë dhe pa tarifë shtesë për çdo rezultat të AI.',
    },
    {
      q: 'A më duhet ndihmë teknike për të konfiguruar Fin?',
      a: 'Intercom është kryesisht një platformë vetë-konfigurimi. Me Biseda, konfigurimi bëhet nga ekipi ynë përpara se të filloni, bazuar në informacionin real të biznesit tuaj.',
    },
    {
      q: 'A i ka Biseda certifikimet e Intercom?',
      a: 'Jo. Nëse biznesi juaj kërkon standarde të audituara si SOC 2, ISO 27001 ose HIPAA, Intercom është alternativa më e pjekur. Biseda fokusohet te bizneset e vogla dhe lokale të shërbimeve.',
    },
    {
      q: 'Cila është më e mirë për një pronar biznesi jo-teknik?',
      a: 'Nëse jeni pronar i një klinike, salloni, restoranti ose biznesi lokal dhe nuk keni staf teknik, Biseda është krijuar që të funksionojë pa pasur nevojë të ndërtoni apo trajnoni vetë një bot.',
    },
  ],
  ctaLabel: 'Na shkruani në WhatsApp',
  soonLabel: 'Së shpejti',
};

export const intercomComparison: ComparisonSet = { en, sq };
