export type Locale = 'sq' | 'en';

export interface CaseStudy {
  client: string;
  type: string;
  location: string;
  logo: string;
  before: string[];
  after: string[];
  impactLabel: string;
  impactValue: string;
  quote: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface DemoBusiness {
  id: string;
  label: string;
  knowledge: string;
  starterQuestions: string[];
}

export interface Dict {
  locale: Locale;
  nav: {
    links: { label: string; href: string }[];
    cta: string;
    whatsappMessage: string;
  };
  hero: {
    badge: string;
    pill: string;
    title: string;
    subtitle: string;
    ctaDemo: string;
    ctaWhatsapp: string;
    credibility: string;
    stats: { value?: string; num?: number; suffix?: string; label: string }[];
    phone: {
      header: string;
      online: string;
      customer: string;
      agent: string;
      customer2: string;
      agent2: string;
      capturedBadge: string;
      tryLive: string;
    };
  };
  logos: {
    title: string;
    subtitle: string;
  };
  demo: {
    badge: string;
    title: string;
    subtitle: string;
    pickBusiness: string;
    knowledgeLabel: string;
    knowledgeHint: string;
    chatPlaceholder: string;
    chatHeader: string;
    online: string;
    leadTitle: string;
    leadHint: string;
    leadName: string;
    leadPhone: string;
    leadRequest: string;
    leadSlot: string;
    leadEmpty: string;
    capTitle: string;
    capText: string;
    capCta: string;
    errorText: string;
    typing: string;
    businesses: DemoBusiness[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; text: string }[];
  };
  proof: {
    title: string;
    subtitle: string;
    beforeLabel: string;
    afterLabel: string;
    detailsLabel: string;
    metrics: { num: number; suffix: string; label: string; source: string }[];
    caseStudies: CaseStudy[];
  };
  founder: {
    badge: string;
    heading: string;
    paragraphs: string[];
    points: string[];
    signature: string;
    cta: string;
  };
  story: {
    problem: {
      eyebrow: string;
      title: string;
      body: string;
      items: { title: string; text: string }[];
    };
    channels: {
      eyebrow: string;
      title: string;
      body: string;
      inboxLabel: string;
      list: { name: string; soon?: boolean }[];
      soonLabel: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    popular: string;
    tiers: PricingTier[];
    footnote: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    tagline: string;
    rights: string;
    builtIn: string;
    colServices: { title: string; items: string[] };
    colCompany: { title: string; items: { label: string; href: string }[] };
    colContact: { title: string };
    email: string;
    hours: string;
    privacy: string;
    terms: string;
  };
  legal: {
    privacy: { title: string; updated: string; body: string[] };
    terms: { title: string; updated: string; body: string[] };
  };
  sticky: {
    label: string;
  };
}
