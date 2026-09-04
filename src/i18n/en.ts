import type { Dict } from './types';

export const en: Dict = {
  locale: 'en',
  announcement: {
    text: 'Meet Biseda AI — your digital receptionist, available 24/7.',
    cta: 'Learn more',
    href: '/en#si-funksionon',
  },
  nav: {
    links: [
      { label: 'How it works', href: '/en#si-funksionon' },
      { label: 'Pricing', href: '/en#cmimet' },
      { label: 'FAQ', href: '/en#pyetje' },
    ],
    cta: 'Try it free',
    whatsappMessage:
      "Hi! I'd like to learn more about the assistant that replies to customers.",
  },
  hero: {
    title: {
      light1: 'Biseda talks to your customers',
      strong: "even when you can't.",
      light2: '',
    },
    subtitle:
      'Biseda answers questions, understands what customers need, collects their details, and captures appointment or service enquiries — day and night.',
    ctaPrimary: 'Try it free',
    ctaSecondary: 'See how it works',
    credibility: '9+ businesses · Albania · ~2 second response time',
    conversation: {
      businessLabel: 'Hotel Riviera',
      online: 'online',
      customer: 'Hi, do you have a room available for Saturday?',
      typing: 'typing…',
      agent:
        'Hi! Yes, we have a Deluxe room available on the 15th. The rate is €85/night. Would you like me to book it?',
      actionLabel: 'Booking captured automatically',
      actionValue: 'Deluxe room · Aug 15 · €85/night',
    },
  },
  productIntro: {
    title: 'An AI that talks to your customers.',
  },
  logos: {
    title: 'Businesses that have trusted our team',
    subtitle: 'Results from the Codrix era — same team, now Biseda AI.',
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
    leadSlot: 'Preferred time',
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
  arcadeTour: {
    title: 'See Biseda in action',
    subtitle: 'From the first customer message to a captured enquiry or appointment request.',
    loading: 'Loading the demo...',
  },
  process: {
    title: "You don't need to learn AI. We set it up for you.",
    subtitle: 'From the first conversation to a working digital receptionist, usually within 48–72 hours.',
    steps: [
      {
        title: 'Tell us about your business',
        text: 'Send us your hours, services, pricing, FAQs, and the information customers ask about most. A few minutes is enough to get started.',
        benefits: [
          'No complicated setup',
          'No technical knowledge required',
          'No long-term contract',
        ],
      },
      {
        title: 'We build your receptionist',
        text: 'Biseda is configured around your business, your information, and the way you want to communicate. So it sounds like your business — not a generic bot.',
        benefits: [
          'Your tone and style',
          'Your information',
          'Your communication rules',
        ],
      },
      {
        title: 'Biseda starts talking to customers',
        text: 'Once everything is ready, Biseda responds to customers on your connected channels. Your team receives the requests that need attention.',
        benefits: [
          'Answers 24/7',
          'Captures new enquiries',
          'Alerts your team when needed',
        ],
      },
    ],
  },
  proof: {
    title: 'Real results from real businesses',
    subtitle:
      'Real clients, with real names and logos — no anonymous testimonials. Results from the Codrix era, before Biseda AI.',
    beforeLabel: 'Before',
    afterLabel: 'After',
    detailsLabel: 'See details',
    metrics: [
      { num: 2, suffix: ' sec', label: 'Average reply time', source: 'Ayana Clinic' },
      { num: 80, suffix: '%', label: 'Less time in the inbox', source: 'Dodo Dent' },
      { num: 24, suffix: '/7', label: 'Non-stop replies', source: 'Dental Med Austria' },
    ],
    caseStudies: [
      {
        client: 'Dental Med Austria',
        type: 'Dental clinic',
        location: 'Albania',
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
  founder: {
    badge: 'Founder / Biseda AI',
    heading: 'AI should work for your business — not the other way around.',
    paragraph:
      "AI is changing the way businesses work. But most business owners don't need another complicated system to learn. They need something that works. Something that answers customers. Something that captures opportunities. Something that works while they're busy. Something that fits the way their business already works. That's why we built Biseda.",
    closing: 'To give businesses access to the benefits of AI without asking them to become AI experts.',
    trustHeading: 'Built for Albanian businesses.',
    trustPoints: [
      {
        title: 'It learns your business.',
        description: 'Biseda uses your hours, services, pricing, FAQs, and communication style to answer customers naturally.',
      },
      {
        title: 'It works where your customers are.',
        description: 'WhatsApp, Instagram, website chat, and the channels you connect to Biseda.',
      },
      {
        title: 'Your team is always in control.',
        description: 'When a conversation needs a person, your team takes over with the full context already there.',
      },
    ],
    signatureName: 'Built by Arbri Hamzallari',
    signatureRole: 'Founder of Biseda AI',
    signatureLocation: 'Tirana, Albania',
    trustBadge: 'Built by Arbri Hamzallari',
    cta: 'Start a conversation',
    ctaSecondary: 'See how it works',
  },
  story: {
    problem: {
      eyebrow: 'THE PROBLEM',
      title: "Customers don't wait.",
      body: "A message at 9pm. A question while you're with a client. A request on Sunday. If the reply comes late, the customer is already somewhere else — and you never even find out.",
      items: [
        { title: 'Capture', text: 'Every message gets an answer, even at midnight.' },
        { title: 'Convert', text: 'Questions become appointments, not forgotten chats.' },
        { title: 'Keep', text: 'Every contact is saved — no customer lost in the inbox.' },
      ],
    },
    channels: {
      eyebrow: 'CHANNELS',
      title: 'Every channel. One conversation.',
      body: 'Customers write wherever they like. The assistant replies the same way everywhere, and every conversation is saved in one place.',
      inboxLabel: 'One inbox',
      list: [
        { name: 'WhatsApp' },
        { name: 'Instagram' },
        { name: 'Facebook Messenger' },
        { name: 'Web chat' },
      ],
      soonLabel: 'coming soon',
    },
    inboxShowcase: {
      title: 'One inbox. Every conversation.',
      tabs: [
        { key: 'inbox', label: 'Biseda Inbox', available: true },
        { key: 'whatsapp', label: 'WhatsApp', available: false },
        { key: 'instagram', label: 'Instagram', available: false },
        { key: 'webchat', label: 'Web Chat', available: false },
      ],
      comingSoon: 'coming soon',
      imageAlt: 'Real screenshot of the Biseda AI inbox',
    },
  },
  problemOverload: {
    eyebrow: 'THE PROBLEM',
    title: { line1: '20 messages.', line2Number: 'No one', line2Rest: 'left waiting.' },
    bellLabel: 'Show notifications',
    floodTitle: 'Notifications',
    floodCountLabel: 'new',
    handledTitle: 'Biseda AI replied',
    handledCaption: 'Every conversation routed to the right team',
    statusReplied: 'Replied',
    replayLabel: 'Watch again',
    timeNow: 'now',
    timeMinutes: 'min',
    timeHours: 'h',
    notifications: [
      { channel: 'WhatsApp', from: 'Ana K.', message: 'Good evening! Do you have anything free tomorrow morning?', minutesAgo: 1, assignee: 'Reception' },
      { channel: 'Instagram', from: 'elonaa_23', message: 'Hi, how much is a dental cleaning?', minutesAgo: 4, assignee: 'Sales' },
      { channel: 'Website chat', from: 'Visitor', message: 'Are you open on Saturdays or weekdays only?', minutesAgo: 9, assignee: 'Support' },
      { channel: 'WhatsApp', from: 'Genti M.', message: 'I need to move my Thursday appointment. Is that possible?', minutesAgo: 17, assignee: 'Reception' },
      { channel: 'Messenger', from: 'Klajdi B.', message: 'Where exactly is the clinic? I cannot find the address.', minutesAgo: 26, assignee: 'Support' },
      { channel: 'Instagram', from: 'sara.hoxha', message: 'Do you accept payment in instalments?', minutesAgo: 38, assignee: 'Finance' },
      { channel: 'Email', from: 'info@', message: 'Quote request — orthodontic treatment', minutesAgo: 52, assignee: 'Sales' },
      { channel: 'WhatsApp', from: 'Unknown number', message: 'Hello? Is anyone there?', minutesAgo: 74, assignee: 'Reception' },
      { channel: 'Instagram', from: 'dritan_p', message: 'Saw your post. How long does a first visit take?', minutesAgo: 96, assignee: 'Support' },
    ],
  },
  omnichannel: {
    eyebrow: 'One Panel. Every Channel.',
    title: 'One receptionist. Every conversation.',
    items: [
      {
        title: 'All your customer conversations in one place.',
        description:
          "WhatsApp, Instagram, and website chat come together in one inbox, so your team doesn't have to switch between apps to keep up with customers.",
      },
      {
        title: 'Biseda answers in seconds.',
        description:
          'Give Biseda your business information — your hours, services, pricing, FAQs, and communication rules — and it uses that information to answer customers accurately, 24/7.',
      },
      {
        title: 'Your team steps in when needed.',
        description:
          "When a conversation needs a real person, your team takes over with the full conversation history already there. The customer doesn't have to start again.",
      },
    ],
  },
  action: {
    eyebrow: 'MORE THAN REPLIES',
    title: 'Not just replies. Action.',
    body: 'Every conversation produces something useful — not just a message sent.',
    items: [
      { label: 'Captures leads', value: 'Name, phone and request saved automatically' },
      { label: 'Qualifies', value: 'Tells a simple question apart from a ready-to-buy customer' },
      { label: 'Books appointments', value: 'Sets the time directly in the conversation, no phone calls' },
      { label: 'Answers questions', value: 'Hours, prices and services — from your knowledge base' },
      { label: 'Hands off to a human', value: 'When it matters, someone on your team takes over' },
    ],
  },
  knowledge: {
    eyebrow: 'THE ENGINE',
    title: 'An AI that learns your business.',
    body: 'You give it the facts — hours, prices, services. Biseda AI uses them to answer customers accurately, in their own language.',
    steps: [
      { label: 'Knowledge base', caption: "Your business's hours, prices, services" },
      { label: 'Biseda AI', caption: 'Understands the question and answers from your facts' },
      { label: 'Customer', caption: 'Gets an accurate answer, instantly' },
    ],
  },
  pricing: {
    title: 'Clear pricing. No surprises.',
    subtitle: 'Choose the level of customer communication your business needs.',
    popular: 'Most popular',
    tiers: [
      {
        name: 'Starter',
        tagline: 'For small businesses that want someone answering WhatsApp 24/7.',
        features: [
          'WhatsApp assistant 24/7',
          '~2 second response time',
          'Trained on your hours, services, and pricing',
          'Captures new customer names and phone numbers',
          'Full setup handled by our team',
        ],
        cta: 'Message us on WhatsApp',
        highlighted: false,
      },
      {
        name: 'Growth',
        tagline: 'For businesses that also receive customers through Instagram and their website.',
        features: [
          'Everything in Starter',
          'Instagram DMs',
          'Website chat',
          'Captures appointment and service enquiries',
          'Monthly customer report',
        ],
        cta: 'Message us on WhatsApp',
        highlighted: true,
      },
      {
        name: 'Advanced',
        tagline: 'For higher-volume businesses and businesses with multiple locations.',
        features: [
          'Everything in Growth',
          'Facebook Messenger',
          'Multiple locations or numbers',
          'Multiple languages',
          'Priority support and updates',
        ],
        cta: 'Message us on WhatsApp',
        highlighted: false,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        tagline: 'For larger groups and businesses with specific requirements.',
        features: [
          'Built around your business',
          'Custom integrations',
          'Dedicated support',
          'Pricing based on volume and requirements',
        ],
        cta: 'Contact us',
        highlighted: false,
      },
    ],
    volumeQuestion: 'How many contacts do you talk to a month?',
    volumeTiers: ['Up to 500 contacts', '500 – 1,500 contacts', '1,500+ contacts'],
    billingMonthly: 'Monthly',
    billingYearly: 'Yearly',
    yearlySave: 'save {pct}%',
    perMonth: '/month',
    billedYearly: '/yr (billed yearly)',
    demoPrompt: 'Want to see it before you decide?',
    demoCta: 'Try it free →',
    footnote: 'Try Biseda with your business information before you pay.',
  },
  faq: {
    title: "Questions we're asked most often",
    subtitle: 'Everything you need to know before getting started.',
    items: [
      {
        q: 'Will my customers know they\'re talking to AI?',
        a: 'Biseda is configured around your business, your information, and the way you communicate. The goal is to make conversations feel natural and useful — not like generic automated replies.',
      },
      {
        q: 'How long does setup take?',
        a: 'Usually 48–72 hours from the moment you give us your business information to the moment Biseda is ready to respond to customers.',
      },
      {
        q: 'Do you build Biseda yourselves?',
        a: 'Yes. Biseda is built and maintained by our team. We configure it around your business and handle updates directly.',
      },
      {
        q: 'What happens when a customer needs a real person?',
        a: "Biseda hands the conversation to your team with the conversation history intact, so the customer doesn't need to repeat everything.",
      },
      {
        q: 'Is my customer data secure?',
        a: 'Customer and business data is isolated by business and handled securely. See our Privacy Policy for the full details.',
      },
      {
        q: 'Do I need a long-term contract?',
        a: 'No. Plans are month-to-month and can be cancelled whenever you choose.',
      },
      {
        q: 'Does Biseda work outside Albania and Kosovo?',
        a: 'Yes. Biseda can be used by businesses wherever they communicate with customers online.',
      },
      {
        q: 'Which plan is right for me?',
        a: "It depends mainly on the channels you need, how many customers you communicate with, and whether you have multiple locations. Contact us and we'll help you choose.",
      },
    ],
  },
  finalCta: {
    title: "Don't let a busy day become a missed customer.",
    subtitle: 'Keep your business responsive 24/7. See what Biseda would look like for your business.',
    cta: 'Message us on WhatsApp',
    secondaryCta: 'See pricing',
  },
  footer: {
    tagline: 'Assistants for WhatsApp and Instagram that reply to your customers 24 hours a day.',
    rights: 'All rights reserved.',
    builtIn: 'Engineered in Albania 🇦🇱',
    colServices: {
      title: 'Services',
      items: ['WhatsApp assistant', 'Instagram assistant', 'Facebook Messenger', 'Website chat'],
    },
    colCompany: {
      title: 'Company',
      items: [
        { label: 'Try it', href: '/en#demo' },
        { label: 'Founder', href: '/en#themeluesi' },
        { label: 'Pricing', href: '/en#cmimet' },
      ],
    },
    colContact: { title: 'Contact & Legal' },
    email: 'info@codrix.org',
    hours: 'Tirana, Albania',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
  },
  legal: {
    privacy: {
      title: 'Privacy policy',
      updated: 'Last updated 20 July 2026',
      body: [
        'Codrix (“we”) builds and installs assistants that reply to businesses’ customers on WhatsApp, Instagram and website chat. This policy explains how we handle data.',
        'Business data. When you give us access to your WhatsApp Business or Instagram accounts, we use it only to configure and run your assistant. We do not share it with third parties.',
        'Customer conversations. The assistant processes customer messages to reply and to capture contact details (name, phone, request). We do not store conversation content beyond what the service needs to work.',
        'Website demo. Conversations in our live demo are sent to a language-model provider only to generate the reply. We do not ask for your name, email or a signup to try it.',
        'Your rights (GDPR). You have the right to request access, correction or deletion of your data. Contact us at info@codrix.org.',
        'This site uses only technical cookies required to function. We do not use advertising trackers.',
      ],
    },
    terms: {
      title: 'Terms of service',
      updated: 'Last updated 20 July 2026',
      body: [
        'By using Codrix services, you accept these terms.',
        'The service. We build, install and run an assistant that replies to your customers on the channels you choose. Reply content is configured from the information you provide.',
        'Payments. Plans are monthly and billed in advance. You can cancel anytime; the service continues until the end of the paid period.',
        'Your responsibilities. You provide accurate business information and valid access to the relevant accounts. You remain responsible for the relationship with your customers.',
        'Limitation of liability. We do our best to keep the assistant accurate, but we recommend supervising sensitive conversations. Codrix is not liable for decisions made solely on the basis of automated replies.',
        'Contact. For any questions about these terms, email us at info@codrix.org.',
      ],
    },
  },
  sticky: {
    label: 'Message us on WhatsApp',
  },
};
