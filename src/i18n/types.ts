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
  /** Set only on tiers quoted rather than priced (Enterprise). When present the
   *  card shows this verbatim and ignores the volume/billing controls. */
  price?: string;
  period?: string;
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
  announcement: {
    text: string;
    cta: string;
    href: string;
  };
  nav: {
    links: { label: string; href: string }[];
    cta: string;
    whatsappMessage: string;
  };
  hero: {
    title: { light1: string; strong: string; light2: string };
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    credibility: string;
    conversation: {
      businessLabel: string;
      online: string;
      customer: string;
      typing: string;
      agent: string;
      actionLabel: string;
      actionValue: string;
    };
  };
  productIntro: {
    title: string;
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
  arcadeTour: {
    title: string;
    subtitle: string;
    loading: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; text: string; benefits: string[] }[];
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
    inboxShowcase: {
      title: string;
      tabs: { key: string; label: string; available: boolean }[];
      comingSoon: string;
      imageAlt: string;
    };
  };
  problemOverload: {
    eyebrow: string;
    /** Headline, split so the leading figure on each line can be weighted. */
    title: { line1: string; line2Number: string; line2Rest: string };
    bellLabel: string;
    /** Card header while the messages are piling up. */
    floodTitle: string;
    /** Suffix on the live "N të reja" counter. */
    floodCountLabel: string;
    /** Card header once Biseda AI has taken over. */
    handledTitle: string;
    handledCaption: string;
    /** Per-row status once handled. */
    statusReplied: string;
    replayLabel: string;
    /** Relative-time suffixes for the notification stamps. */
    timeNow: string;
    timeMinutes: string;
    timeHours: string;
    notifications: {
      channel: string;
      from: string;
      message: string;
      minutesAgo: number;
      /** Team the conversation gets routed to once handled. */
      assignee: string;
    }[];
  };
  omnichannel: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  action: {
    eyebrow: string;
    title: string;
    body: string;
    items: { label: string; value: string }[];
  };
  knowledge: {
    eyebrow: string;
    title: string;
    body: string;
    steps: { label: string; caption: string }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    popular: string;
    tiers: PricingTier[];
    footnote: string;
    volumeQuestion: string;
    volumeTiers: string[];
    billingMonthly: string;
    billingYearly: string;
    /** `{pct}` is replaced with the yearly discount percentage. */
    yearlySave: string;
    perMonth: string;
    billedYearly: string;
    demoPrompt: string;
    demoCta: string;
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
