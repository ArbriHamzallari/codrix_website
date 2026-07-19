import type { Dict } from './types';

export const en: Dict = {
  locale: 'en',
  nav: {
    links: [
      { label: 'How it works', href: '/en#si-funksionon' },
      { label: 'Try it', href: '/en#demo' },
      { label: 'Results', href: '/en#rezultate' },
      { label: 'Pricing', href: '/en#cmimet' },
      { label: 'FAQ', href: '/en#pyetje' },
    ],
    cta: 'Message us on WhatsApp',
    whatsappMessage:
      "Hi! I'd like to learn more about the assistant that replies to customers.",
  },
  hero: {
    badge: 'Engineered in Albania, serving clinics across Europe',
    title: "How many customers do you lose because you can't reply in time?",
    subtitle:
      'We build an assistant that replies to your customers on WhatsApp and Instagram in 2 seconds — 24 hours a day, even while you sleep.',
    ctaDemo: 'Try it now, free',
    ctaWhatsapp: 'Message us on WhatsApp',
    stats: [
      { value: '2 sec', label: 'Average reply time' },
      { value: '24/7', label: 'Always on' },
      { value: '9+', label: 'Real businesses trust us' },
    ],
  },
  logos: {
    title: 'Trusted by real clinics and businesses',
    subtitle: 'Real installations. Real results.',
  },
  demo: {
    badge: 'Live demo',
    title: 'Try it yourself — chat with the assistant now',
    subtitle:
      'Pick your business type, edit what the assistant knows, and chat with it like a customer would. Watch it capture the lead details on the right.',
    pickBusiness: 'Pick your business',
    knowledgeLabel: 'What the assistant knows',
    knowledgeHint: 'Edit it with your own hours and prices — the assistant learns instantly.',
    chatPlaceholder: 'Type as a customer...',
    chatHeader: 'Business assistant',
    online: 'online',
    leadTitle: 'Captured lead',
    leadHint: 'The assistant saves these details for you automatically',
    leadName: 'Name',
    leadPhone: 'Phone',
    leadRequest: 'Request',
    leadSlot: 'Time slot',
    leadEmpty: 'As soon as the customer shares details, they appear here.',
    capTitle: 'Like what you see?',
    capText: "Let's connect it to your business WhatsApp — free trial.",
    capCta: 'Message us on WhatsApp',
    errorText: 'Something went wrong. Please try again in a moment.',
    typing: 'typing...',
    businesses: [
      {
        id: 'klinike',
        label: 'Dental clinic',
        knowledge:
          'Smile Dental Clinic, Vienna. Hours: Monday - Saturday, 09:00 - 19:00. Services: cleaning €60, filling €90, whitening €250, implants from €900. First visit and consultation free. Accepting new patients.',
        starterQuestions: ['How much is whitening?', 'Do you have a free slot tomorrow?'],
      },
      {
        id: 'restorant',
        label: 'Restaurant',
        knowledge:
          'Seaside Restaurant. Hours: daily 12:00 - 23:00. Mediterranean cuisine and fresh fish. Menu: catch of the day €18, seafood risotto €14, salads €6-9. Table reservations by phone or message. Terrace with sea view.',
        starterQuestions: ['Do you have a table for 4 tonight at 8?', "What's on the menu?"],
      },
      {
        id: 'sallon',
        label: 'Beauty salon',
        knowledge:
          'Ana Beauty Salon. Hours: Tuesday - Saturday, 09:00 - 20:00. Services: haircut €15, coloring from €40, manicure €12, pedicure €15, makeup €30. Appointments by message.',
        starterQuestions: ['How much is hair coloring?', 'Any openings on Saturday?'],
      },
      {
        id: 'palester',
        label: 'Gym',
        knowledge:
          'FitZone Gym. Hours: Monday - Saturday 06:00 - 22:00, Sunday 08:00 - 14:00. Memberships: monthly €30, 3-month €80, yearly €280. Personal trainer €15 per session. First day free trial.',
        starterQuestions: ['How much is the monthly membership?', 'Do you have personal trainers?'],
      },
      {
        id: 'imobiliare',
        label: 'Real estate',
        knowledge:
          'Casa Real Estate Agency. Hours: Monday - Saturday, 09:00 - 18:00. We sell and rent apartments. 1-bedroom from €70,000, 2-bedroom from €95,000. Rentals from €350/month. Viewings arranged same day.',
        starterQuestions: ["I'm looking for a 2-bedroom apartment", 'How much is rent for a 1-bedroom?'],
      },
      {
        id: 'ecommerce',
        label: 'Online shop',
        knowledge:
          'Trendy online shop, delivery nationwide. Order by message. Delivery €2 in the capital, €3 elsewhere. Delivery time 1-3 business days. Cash on delivery. Free returns within 7 days.',
        starterQuestions: ['How long does delivery take?', 'Can I return my order?'],
      },
    ],
  },
  process: {
    title: 'How it works — 3 simple steps',
    subtitle: "From first message to installation in 48-72 hours. You don't need any technical knowledge.",
    steps: [
      {
        title: '1. Message us on WhatsApp',
        text: 'Tell us what business you run and how you talk to customers. We prepare a free trial with your own business details.',
      },
      {
        title: '2. We build it for you',
        text: 'We train the assistant with your hours, prices, and services, so it talks to customers the way you would — not like a robot.',
      },
      {
        title: '3. We install it and it goes to work',
        text: 'Within 48-72 hours the assistant replies on your WhatsApp and Instagram. You get a notification for every new customer.',
      },
    ],
  },
  proof: {
    title: 'Real results from real businesses',
    subtitle: 'These are our clients, with real names and logos — no anonymous testimonials.',
    beforeLabel: 'Before',
    afterLabel: 'After',
    caseStudies: [
      {
        client: 'Dental Med Austria',
        type: 'Dental clinic',
        location: 'Austria, EU',
        logo: '/clients/dental-med-austria.png',
        before: [
          'Patient messages outside office hours went unanswered',
          'Staff spent 2+ hours a day replying on WhatsApp',
          'No appointment requests possible after hours',
        ],
        after: [
          'The assistant answers all first-contact questions 24/7',
          'Zero missed messages outside office hours',
          'New patients get an instant reply at any hour',
        ],
        impactLabel: 'Appointment inquiries handled automatically',
        impactValue: '24/7',
        quote: 'Patients now get answers even at midnight.',
      },
      {
        client: 'Dodo Dent',
        type: 'Dental practice',
        location: 'Albania',
        logo: '/clients/dodo-dent.png',
        before: [
          'High volume of repetitive questions every day',
          'Appointments scheduled manually over WhatsApp',
          'Leads went cold before anyone replied',
        ],
        after: [
          'Common questions answered instantly',
          'Appointment requests captured automatically',
          'Follow-up starts within seconds',
        ],
        impactLabel: 'Less time spent in the inbox',
        impactValue: '-80%',
        quote: 'It pays for itself in the first week.',
      },
      {
        client: 'SMartderm',
        type: 'Dermatology clinic',
        location: 'Albania',
        logo: '/clients/SMARTDERM_page-0001-scaled.png',
        before: [
          'Patients messaged on Instagram and got no reply',
          'Consultations were booked manually',
          'No way to tell serious inquiries apart',
        ],
        after: [
          'Instagram DMs answered instantly',
          'Consultation requests captured and qualified automatically',
          'Staff only handles confirmed appointments',
        ],
        impactLabel: 'Instagram inquiries handled automatically',
        impactValue: '100%',
        quote: 'We stopped losing patients to faster competitors.',
      },
      {
        client: 'Ayana Clinic',
        type: 'Medical clinic',
        location: 'Albania',
        logo: '/clients/aiyana-clinic.png',
        before: [
          'Chaos across WhatsApp and Instagram',
          'Patients waited hours for basic answers',
          'Receptionist overwhelmed during peak hours',
        ],
        after: [
          'One assistant replies across all channels',
          'Patients get answers in under 2 seconds',
          'Receptionist focuses on patients in the clinic',
        ],
        impactLabel: 'Average response time',
        impactValue: '< 2 sec',
        quote: 'Our patients feel taken care of before they even walk in.',
      },
      {
        client: 'Trio Dental Center',
        type: 'Dental group',
        location: 'Albania',
        logo: '/clients/trio-dental-center.png',
        before: [
          'Three locations, inconsistent reply times',
          'Leads lost between location handoffs',
          'No shared view of incoming messages',
        ],
        after: [
          'Consistent, fast replies across all 3 clinics',
          'Every lead captured and routed to the right clinic',
          'All conversations in one place',
        ],
        impactLabel: 'Leads captured across all locations',
        impactValue: '3 clinics',
        quote: 'Codrix made us feel like a bigger operation overnight.',
      },
    ],
  },
  pricing: {
    title: 'Clear pricing, no surprises',
    subtitle: 'No long-term contract. Cancel anytime. WhatsApp included in every plan.',
    popular: 'Most popular',
    tiers: [
      {
        name: 'Starter',
        price: '€79',
        period: '/month',
        tagline: 'For small businesses that want to stop losing customers on WhatsApp.',
        features: [
          'WhatsApp assistant, 24/7',
          'Replies in 2 seconds',
          'Trained on your hours and prices',
          "Captures every new customer's name and number",
          'Full installation done by us',
        ],
        cta: 'Message us on WhatsApp',
        highlighted: false,
      },
      {
        name: 'Growth',
        price: '€159',
        period: '/month',
        tagline: 'For businesses that get customers from Instagram too.',
        features: [
          'Everything in Starter',
          'Instagram DM included',
          'Chat on your website',
          'Booking requests captured automatically',
          'Monthly report of captured leads',
        ],
        cta: 'Message us on WhatsApp',
        highlighted: true,
      },
      {
        name: 'Advanced',
        price: '€279',
        period: '/month',
        tagline: 'For clinics and businesses with multiple locations and high volume.',
        features: [
          'Everything in Growth',
          'Facebook Messenger included',
          'Multiple locations or numbers',
          'Replies in multiple languages',
          'Priority support and updates',
        ],
        cta: 'Message us on WhatsApp',
        highlighted: false,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        tagline: 'For clinic groups and businesses with special requirements.',
        features: [
          'A solution built for you',
          'Integrations as needed',
          'Dedicated support',
          'Volume-based agreement',
        ],
        cta: 'Contact us',
        highlighted: false,
      },
    ],
    footnote: 'All prices are monthly. Free trial with your own business details before you pay.',
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'Everything you need to know before getting started.',
    items: [
      {
        q: 'How long does it take to set up?',
        a: 'Usually 48-72 hours. We handle everything — you just give us access to your WhatsApp Business and Instagram. No technical knowledge required on your side.',
      },
      {
        q: 'Will it sound robotic to my customers?',
        a: "No. We train the assistant with your business name, your tone, and your own answers. It replies the way you would — just faster. Many customers assume they're talking to a real person.",
      },
      {
        q: 'What happens when a question is too complex?',
        a: 'The assistant knows its limits. When a question falls outside its knowledge, it tells the customer a team member will follow up shortly — and you get an instant notification so you can step in.',
      },
      {
        q: 'Do I need a long-term contract?',
        a: "No. All plans are monthly and you can cancel anytime. We're confident enough in the results that we don't need to lock you in.",
      },
      {
        q: 'Does it work outside Albania and Kosovo?',
        a: 'Yes. We work with businesses across Europe. The assistant works in any language and with any WhatsApp Business or Instagram account, regardless of country.',
      },
      {
        q: "Is my customers' data safe?",
        a: "Yes. We don't store conversations beyond what the assistant needs to work. We comply with GDPR and never share your data or your customers' data with third parties.",
      },
      {
        q: 'Which plan is right for me?',
        a: "If your customers mostly write on WhatsApp, start with Starter. If you also get a lot of Instagram messages, Growth is the better choice. For multiple locations or high volume, Advanced. Not sure? Message us — we'll advise you for free.",
      },
    ],
  },
  finalCta: {
    title: "Don't lose another customer",
    subtitle: "Message us on WhatsApp and within minutes we'll show you how it would work for your business — free trial.",
    cta: 'Message us on WhatsApp',
  },
  footer: {
    tagline: 'Assistants that reply to your customers on WhatsApp and Instagram — 24/7. Technology engineered in Albania.',
    rights: 'All rights reserved.',
  },
  sticky: {
    label: 'Message us on WhatsApp',
  },
};
