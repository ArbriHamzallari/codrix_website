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
    title: string;
    subtitle: string;
    ctaDemo: string;
    ctaWhatsapp: string;
    stats: { value: string; label: string }[];
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
    caseStudies: CaseStudy[];
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
  };
  sticky: {
    label: string;
  };
}
