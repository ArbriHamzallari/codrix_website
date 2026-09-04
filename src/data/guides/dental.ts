/**
 * Data for the dental-clinic vertical guide page (`/for/klinike-dentare`,
 * `/en/for/dental-clinic`). Mirrors the bilingual, self-contained-per-locale
 * shape already used by `src/data/comparisons/*` — everything a locale needs
 * to render lives inside its own `GuideData` object, no cross-locale lookups.
 *
 * `scenario` is static, hand-written copy for the "immediate scenario" +
 * "product demo" sections — distinct from the live, interactive `DemoLive`
 * widget embedded on the homepage. Per VERTICAL-GUIDE-FINAL-SPEC.md §Scope,
 * this page links out to `/#demo` rather than preloading `DemoLive` with a
 * business selection — that's a `DemoLive.tsx` behavior change, out of scope
 * here.
 */

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideEvidence {
  stat: string;
  source: string;
  sourceUrl: string;
  interpretation: string;
}

export interface GuideData {
  slug: string;
  vertical: string; // matches the demo business id, e.g. dict.demo.businesses[].id
  hero: { eyebrow: string; headline: string; subheadline: string };
  /** Heading over the scenario section — vertical-specific ("a patient" vs "a client"). */
  demoIntro: string;
  scenario: {
    messages: { role: 'customer' | 'biseda'; text: string }[];
    /** Label over the captured-fields chips — vertical-specific ("patient details" vs "customer details"). */
    capturedLabel: string;
    capturedFields: string[];
  };
  /** Heading over the capabilities list — vertical-specific ("for your clinic" vs "for your salon"). */
  capabilitiesTitle: string;
  capabilities: string[];
  /** Each body is `\n`-separated lines (a short timeline), not a single sentence — rendered with whitespace-pre-line. */
  workflow: { without: string; withBiseda: string };
  evidence: GuideEvidence[];
  planRecommendation: { plan: string; reason: string };
  faq: GuideFaq[];
  cta: string;
}

export const dentalGuide: Record<'sq' | 'en', GuideData> = {
  sq: {
    slug: 'klinike-dentare',
    vertical: 'dental',
    hero: {
      eyebrow: 'Recepsioni juaj dixhital për klinikën dentare.',
      headline: 'Pacientët tuaj marrin përgjigje edhe kur klinika është mbyllur.',
      subheadline:
        'Biseda përgjigjet për trajtimet dhe çmimet, kupton çfarë kërkon pacienti dhe mbledh të dhënat për takimin — 24/7.',
    },
    demoIntro: 'Një pacient ju shkruan. Biseda merret me pjesën tjetër.',
    scenario: {
      messages: [
        { role: 'customer', text: 'Përshëndetje, sa kushton zbardhimi?' },
        { role: 'biseda', text: 'Zbardhimi i dhëmbëve kushton 15.000 lekë. Dëshironi të rezervoni një konsultë?' },
        { role: 'customer', text: 'Po, të hënën pasdite.' },
        { role: 'biseda', text: 'Patjetër. Në çfarë emri ta regjistrojmë?' },
      ],
      capturedLabel: 'Të dhënat e pacientit',
      capturedFields: ['Emri', 'Telefoni', 'Kërkesa', 'Koha e preferuar'],
    },
    capabilitiesTitle: 'Çfarë bën Biseda për klinikën tuaj',
    capabilities: [
      'Përgjigjet për trajtimet',
      'Shpjegon shërbimet',
      'Jep çmimet tuaja',
      'Mbledh të dhënat e pacientëve',
      'Kap kërkesat për takime',
      'Ia kalon stafit kur nevojitet',
    ],
    workflow: {
      without: '21:30 — Pacienti shkruan.\nNuk merr përgjigje.\nPret deri nesër.',
      withBiseda: '21:30 — Biseda përgjigjet.\nPacienti merr informacionin.\nKërkesa për takim ruhet.\nStafi e gjen gati.',
    },
    evidence: [
      {
        stat: '~57%',
        source: 'JMIR — studim mbi kujdesin shëndetësor parësor në Emiratet e Bashkuara Arabe.',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11729783/',
        interpretation:
          'Një studim i publikuar në JMIR raportoi rreth 57% ulje të gjasave për mos-paraqitje në kontekstin e studiuar.',
      },
    ],
    planRecommendation: {
      plan: 'Starter',
      reason:
        'Për një klinikë me një lokacion që përdor kryesisht WhatsApp. Growth nëse Instagrami ose chat-i i faqes janë të rëndësishëm; Advanced për klinika me shumë lokacione.',
    },
    faq: [
      { q: 'A mund të përgjigjet për çmimet e trajtimeve?', a: 'Po, nëse çmimet janë pjesë e informacionit që na jepni për klinikën.' },
      { q: 'A mund të mbledhë kërkesa për vizita?', a: 'Po, mbledh emrin, numrin dhe kohën e preferuar, dhe ia dërgon stafit.' },
      { q: 'A punon edhe jashtë orarit?', a: 'Po, përgjigjet 24/7.' },
      { q: 'Çfarë ndodh kur pacienti kërkon të flasë me një person?', a: 'Biseda ia kalon bisedën stafit tuaj duke ruajtur historikun e bisedës.' },
      { q: 'A mund të përdorë informacionet e klinikës sime?', a: 'Po. Biseda mësohet nga oraret, çmimet dhe shërbimet që na jepni.' },
    ],
    cta: 'Shihni si do të funksiononte Biseda për klinikën tuaj dentare.',
  },
  en: {
    slug: 'dental-clinic',
    vertical: 'dental',
    hero: {
      eyebrow: 'Your digital receptionist for your dental clinic.',
      headline: 'Your patients get answers even when your clinic is closed.',
      subheadline:
        'Biseda answers questions about treatments and pricing, understands what the patient needs, and collects their details for an appointment — 24/7.',
    },
    demoIntro: 'A patient sends a message. Biseda takes care of the rest.',
    scenario: {
      messages: [
        { role: 'customer', text: 'Hi, how much does teeth whitening cost?' },
        { role: 'biseda', text: 'Teeth whitening costs 15,000 lek. Would you like to book a consultation?' },
        { role: 'customer', text: 'Yes, Monday afternoon.' },
        { role: 'biseda', text: 'Sure. What name should we book it under?' },
      ],
      capturedLabel: 'Patient details',
      capturedFields: ['Name', 'Phone', 'Request', 'Preferred time'],
    },
    capabilitiesTitle: 'What Biseda does for your clinic',
    capabilities: [
      'Answers treatment questions',
      'Explains your services',
      'Shares your pricing',
      'Collects patient details',
      'Captures appointment requests',
      'Hands conversations to staff when needed',
    ],
    workflow: {
      without: '21:30 — The patient sends a message.\nNo one replies.\nThey wait until tomorrow.',
      withBiseda:
        '21:30 — Biseda replies.\nThe patient gets the information they need.\nThe appointment request is captured.\nThe staff sees it ready when they return.',
    },
    evidence: [
      {
        stat: '~57%',
        source: 'JMIR — study in primary care in the United Arab Emirates.',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11729783/',
        interpretation:
          'A study published in JMIR reported an approximately 57% reduction in the likelihood of missed appointments in the studied setting.',
      },
    ],
    planRecommendation: {
      plan: 'Starter',
      reason:
        'For a single-location clinic that mainly uses WhatsApp. Choose Growth if Instagram or website chat are important; Advanced for multi-location clinics.',
    },
    faq: [
      { q: 'Can it answer questions about treatment prices?', a: 'Yes, as long as the prices are included in the information you provide for your clinic.' },
      { q: 'Can it capture appointment requests?', a: "Yes. It can collect the patient's name, phone number, and preferred time and pass the request to your staff." },
      { q: 'Does it work outside opening hours?', a: 'Yes. It responds 24/7.' },
      { q: 'What happens when a patient wants to speak to a person?', a: 'Biseda hands the conversation to your staff while keeping the conversation history.' },
      { q: "Can it use my clinic's information?", a: 'Yes. Biseda is configured using the hours, pricing, services, and other information you provide.' },
    ],
    cta: 'See how Biseda would work for your dental clinic.',
  },
};
