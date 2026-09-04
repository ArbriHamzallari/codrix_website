import type { Dict } from './types';

export const sq: Dict = {
  locale: 'sq',
  announcement: {
    text: 'Prezantojmë Biseda AI — recepsioni juaj dixhital, 24/7.',
    cta: 'Mëso më shumë',
    href: '/#si-funksionon',
  },
  nav: {
    links: [
      { label: 'Si funksionon', href: '/#si-funksionon' },
      { label: 'Çmimet', href: '/#cmimet' },
      { label: 'FAQ', href: '/#pyetje' },
    ],
    cta: 'Provoje falas',
    whatsappMessage:
      'Përshëndetje! Pashë faqen tuaj dhe dua të di si mund të funksionojë asistenti për biznesin tim.',
  },
  hero: {
    title: {
      light1: 'Recepsioni juaj dixhital,',
      strong: '24/7.',
      light2: '',
    },
    subtitle:
      'Biseda përgjigjet pyetjeve, kupton çfarë kërkojnë klientët, mbledh të dhënat e tyre dhe kap kërkesat për takime ose shërbime — ditë e natë.',
    ctaPrimary: 'Provoje falas',
    ctaSecondary: 'Shiko si funksionon',
    credibility: '9+ biznese · Shqipëri · ~2 sekonda përgjigje',
    conversation: {
      businessLabel: 'Hotel Riviera',
      online: 'online',
      customer: 'Përshëndetje, a keni një dhomë të lirë për të shtunën?',
      typing: 'duke shkruar…',
      agent:
        'Përshëndetje! Po, kemi një dhomë Deluxe të lirë për datën 15. Çmimi është €85/natë. Dëshiron ta rezervoj?',
      actionLabel: 'Rezervim i kapur automatikisht',
      actionValue: 'Dhomë Deluxe · 15 Gusht · €85/natë',
    },
  },
  productIntro: {
    title: 'Një AI që flet me klientët tuaj.',
  },
  logos: {
    title: 'Biznese që i kanë besuar ekipit tonë',
    subtitle: '',
  },
  demo: {
    badge: '',
    title: 'Provoje vetë',
    subtitle:
      'Shiko si do të sillej Biseda me klientët e biznesit tuaj. Zgjidhni një lloj biznesi, bëjini një pyetje si klient dhe shihni si përgjigjet. Kur klienti lë emrin ose numrin e telefonit, të dhënat shfaqen menjëherë.',
    pickBusiness: 'Zgjidhni një biznes',
    knowledgeLabel: 'Çfarë di asistenti?',
    knowledgeHint: 'Ndryshoni oraret, çmimet ose shërbimet dhe shihni si ndryshon përgjigjja menjëherë.',
    chatPlaceholder: 'Shkruani si klient...',
    chatHeader: 'Asistenti i biznesit',
    online: 'online',
    leadTitle: 'Të dhënat e klientit',
    leadHint: 'Kur klienti lë të dhënat e tij, ato ruhen automatikisht.',
    leadName: 'Emri',
    leadPhone: 'Telefoni',
    leadRequest: 'Kërkesa',
    leadSlot: 'Koha e preferuar',
    leadEmpty: 'Kur klienti të shkruajë emrin ose numrin, do t\'i shihni këtu.',
    capTitle: 'Gati ta provoni në biznesin tuaj?',
    capText: 'Na shkruani në WhatsApp dhe ta përgatisim falas me të dhënat e biznesit tuaj.',
    capCta: 'Na shkruani në WhatsApp',
    errorText: 'Diçka nuk shkoi. Provoni përsëri pas pak.',
    typing: 'duke shkruar...',
    businesses: [
      {
        id: 'klinike',
        label: 'Klinikë dentare',
        knowledge:
          'Klinika Dentare Smile, Tiranë. Orari: E hënë - E shtunë, 09:00 - 19:00. Shërbimet: pastrim dhëmbësh 3.000 lekë, mbushje 4.000 lekë, zbardhim 15.000 lekë, implant nga 60.000 lekë. Vizita e parë dhe konsulta falas. Pranojmë pacientë të rinj.',
        starterQuestions: ['Sa kushton zbardhimi?', 'A keni orar të lirë nesër?'],
      },
      {
        id: 'restorant',
        label: 'Restorant',
        knowledge:
          'Restorant Deti, Durrës. Orari: çdo ditë 12:00 - 23:00. Kuzhinë mesdhetare dhe peshk i freskët. Menu: peshk i ditës 1.500 lekë, risoto me fruta deti 900 lekë, sallatat 400-600 lekë. Rezervime për tavolina bëhen me telefon ose mesazh. Kemi tarracë me pamje nga deti.',
        starterQuestions: ['A keni tavolinë për 4 sonte në 20:00?', 'Çfarë keni në menu?'],
      },
      {
        id: 'sallon',
        label: 'Sallon bukurie',
        knowledge:
          'Sallon Bukurie Ana, Tiranë. Orari: E martë - E shtunë, 09:00 - 20:00. Shërbimet: prerje flokësh 1.000 lekë, ngjyrosje nga 3.500 lekë, manikyr 800 lekë, pedikyr 1.000 lekë, makijazh 2.500 lekë. Rezervimet bëhen me mesazh.',
        starterQuestions: ['Sa kushton ngjyrosja e flokëve?', 'A keni orar të lirë të shtunën?'],
      },
      {
        id: 'palester',
        label: 'Palestër',
        knowledge:
          'Palestra FitZone, Tiranë. Orari: E hënë - E shtunë, 06:00 - 22:00, E diel 08:00 - 14:00. Abonimet: mujor 3.000 lekë, 3-mujor 8.000 lekë, vjetor 28.000 lekë. Trajner personal 1.500 lekë seanca. Dita e parë provë falas.',
        starterQuestions: ['Sa kushton abonimi mujor?', 'A keni trajner personal?'],
      },
      {
        id: 'imobiliare',
        label: 'Agjenci imobiliare',
        knowledge:
          'Agjencia Imobiliare Casa, Tiranë. Orari: E hënë - E shtunë, 09:00 - 18:00. Shesim dhe japim me qira apartamente në Tiranë dhe Durrës. Apartamente 1+1 nga 70.000 euro, 2+1 nga 95.000 euro. Qira 1+1 nga 350 euro/muaj. Vizitat në apartamente organizohen brenda ditës.',
        starterQuestions: ['Kërkoj apartament 2+1 në Tiranë', 'Sa është qiraja për 1+1?'],
      },
      {
        id: 'ecommerce',
        label: 'Dyqan online',
        knowledge:
          'Dyqani online Trendy, dërgesa në gjithë Shqipërinë dhe Kosovën. Porositni me mesazh. Dërgesa 200 lekë në Tiranë, 300 lekë në rrethe, 5 euro në Kosovë. Koha e dërgesës 1-3 ditë pune. Pagesa në dorëzim. Kthimi falas brenda 7 ditëve.',
        starterQuestions: ['Sa zgjat dërgesa në Kosovë?', 'A mund ta kthej porosinë?'],
      },
    ],
  },
  arcadeTour: {
    title: 'Shikoni Biseda AI në veprim',
    subtitle: 'Nga mesazhi i parë i klientit deri te kërkesa për takim ose shërbim.',
    loading: 'Duke ngarkuar demonstrimin...',
  },
  process: {
    title: 'Nuk keni nevojë të mësoni AI. Ne e përgatisim për ju.',
    subtitle: 'Nga biseda e parë deri te një recepsionist që funksionon për biznesin tuaj, zakonisht brenda 48–72 orëve.',
    steps: [
      {
        title: 'Na tregoni për biznesin tuaj',
        text: 'Na dërgoni oraret, shërbimet, çmimet, pyetjet e shpeshta dhe informacionet që klientët ju kërkojnë më shpesh. Mjaftojnë disa minuta për të filluar.',
        benefits: [
          'Pa konfigurime të komplikuara',
          'Pa njohuri teknike',
          'Pa kontratë afatgjatë',
        ],
      },
      {
        title: 'Ne ndërtojmë recepsionistin tuaj',
        text: 'Biseda përshtatet me biznesin tuaj, informacionet tuaja dhe mënyrën se si dëshironi të komunikoni. Që të flasë si biznesi juaj — jo si një robot gjenerik.',
        benefits: [
          'Toni dhe stili juaj',
          'Informacionet tuaja',
          'Mënyra juaj e komunikimit',
        ],
      },
      {
        title: 'Biseda fillon të flasë me klientët',
        text: 'Kur gjithçka është gati, Biseda fillon t\'u përgjigjet klientëve në kanalet tuaja. Stafi merr kërkesat që kanë nevojë për vëmendje.',
        benefits: [
          'Përgjigjet 24/7',
          'Mbledh kërkesat e reja',
          'Njofton stafin kur nevojitet',
        ],
      },
    ],
  },
  proof: {
    title: 'Rezultate reale nga biznese reale',
    subtitle:
      'Klientë realë, me emra dhe logo reale — jo dëshmi anonime. Rezultate nga era e Codrix-it, para Biseda AI.',
    beforeLabel: 'Para',
    afterLabel: 'Pas',
    detailsLabel: 'Shiko detajet',
    metrics: [
      { num: 2, suffix: ' sek', label: 'Përgjigje mesatare', source: 'Ayana Clinic' },
      { num: 80, suffix: '%', label: 'Më pak kohë në inbox', source: 'Dodo Dent' },
      { num: 24, suffix: '/7', label: 'Përgjigje pa ndërprerje', source: 'Dental Med Austria' },
    ],
    caseStudies: [
      {
        client: 'Dental Med Austria',
        type: 'Klinikë dentare',
        location: 'Shqipëri',
        logo: '/clients/dental-med-austria.png',
        before: [
          'Mesazhet e pacientëve jashtë orarit mbeteshin pa përgjigje',
          'Stafi kalonte 2+ orë në ditë duke u përgjigjur në WhatsApp',
          'Asnjë rezervim i mundshëm jashtë orarit të punës',
        ],
        after: [
          'Asistenti u përgjigjet të gjitha pyetjeve të para 24/7',
          'Zero mesazhe të humbura jashtë orarit',
          'Pacientët e rinj marrin përgjigje në çast, në çdo orë',
        ],
        impactLabel: 'Pyetjet për termine trajtohen automatikisht',
        impactValue: '24/7',
        quote: 'Pacientët marrin përgjigje edhe në mesnatë.',
      },
      {
        client: 'Dodo Dent',
        type: 'Klinikë dentare',
        location: 'Shqipëri',
        logo: '/clients/dodo-dent.png',
        before: [
          'Shumë mesazhe me të njëjtat pyetje çdo ditë',
          'Terminet caktoheshin me dorë në WhatsApp',
          'Klientët ftoheshin para se t\'u kthehej përgjigja',
        ],
        after: [
          'Pyetjet e zakonshme marrin përgjigje në çast',
          'Kërkesat për termine kapen automatikisht',
          'Ndjekja e klientit nis brenda sekondave',
        ],
        impactLabel: 'Më pak kohë në inbox',
        impactValue: '-80%',
        quote: 'E nxjerr vlerën që në javën e parë.',
      },
      {
        client: 'SMartderm',
        type: 'Klinikë dermatologjie',
        location: 'Shqipëri',
        logo: '/clients/SMARTDERM_page-0001-scaled.png',
        before: [
          'Pacientët shkruanin në Instagram dhe s\'merrnin përgjigje',
          'Konsultat rezervoheshin me dorë',
          'Asnjë mënyrë për të dalluar pyetjet serioze',
        ],
        after: [
          'Mesazhet në Instagram marrin përgjigje në çast',
          'Kërkesat për konsulta kapen dhe përzgjidhen automatikisht',
          'Stafi merret vetëm me terminet e konfirmuara',
        ],
        impactLabel: 'Pyetjet nga Instagrami trajtohen automatikisht',
        impactValue: '100%',
        quote: 'Nuk humbasim më pacientë te konkurrentët më të shpejtë.',
      },
      {
        client: 'Ayana Clinic',
        type: 'Klinikë mjekësore',
        location: 'Shqipëri',
        logo: '/clients/aiyana-clinic.png',
        before: [
          'Kaos mes WhatsApp dhe Instagram',
          'Pacientët prisnin me orë për përgjigje të thjeshta',
          'Recepsionistja e mbingarkuar në orët e pikut',
        ],
        after: [
          'Një asistent i vetëm përgjigjet në të gjitha kanalet',
          'Pacientët marrin përgjigje në më pak se 2 sekonda',
          'Recepsionistja kujdeset për pacientët në klinikë',
        ],
        impactLabel: 'Koha mesatare e përgjigjes',
        impactValue: '< 2 sek',
        quote: 'Pacientët ndihen të mirëpritur para se të hyjnë në klinikë.',
      },
      {
        client: 'Trio Dental Center',
        type: 'Grup klinikash dentare',
        location: 'Shqipëri',
        logo: '/clients/trio-dental-center.png',
        before: [
          'Tre lokacione, kohë përgjigjeje të ndryshme',
          'Klientët humbisnin mes kalimeve nga një klinikë te tjetra',
          'Asnjë pamje e përbashkët e mesazheve',
        ],
        after: [
          'Përgjigje e njëjtë dhe e shpejtë në të 3 klinikat',
          'Çdo klient kapet dhe drejtohet te klinika e duhur',
          'Të gjitha bisedat në një vend',
        ],
        impactLabel: 'Klientët kapen në të gjitha lokacionet',
        impactValue: '3 klinika',
        quote: 'Codrix na bëri të dukemi si një operacion shumë më i madh, brenda natës.',
      },
    ],
  },
  founder: {
    badge: 'Themeluesi / Biseda AI',
    heading: 'AI duhet të punojë për biznesin tuaj — jo biznesi për AI.',
    paragraph:
      'AI po ndryshon mënyrën se si funksionojnë bizneset. Por shumica e pronarëve të bizneseve nuk kanë nevojë për një tjetër sistem të komplikuar për të mësuar. Kanë nevojë për diçka që funksionon. Diçka që u përgjigjet klientëve. Diçka që kap mundësitë e reja. Diçka që punon ndërsa ata janë të zënë. Diçka që përshtatet me mënyrën si funksionon biznesi i tyre. Pikërisht për këtë ndërtuam Biseda.',
    closing: 'Që bizneset të përfitojnë nga AI pa pasur nevojë të bëhen ekspertë të AI.',
    trustHeading: 'Ndërtuar për bizneset shqiptare.',
    trustPoints: [
      {
        title: 'Mëson biznesin tuaj.',
        description: 'Biseda përdor oraret, shërbimet, çmimet, pyetjet e shpeshta dhe mënyrën e komunikimit të biznesit tuaj për t\'iu përgjigjur klientëve në mënyrë natyrale.',
      },
      {
        title: 'Punon aty ku janë klientët tuaj.',
        description: 'WhatsApp, Instagram, chat-i i faqes dhe kanalet që lidhni me Biseda.',
      },
      {
        title: 'Ju mbani gjithmonë kontrollin.',
        description: 'Kur një bisedë kërkon një person, stafi juaj e merr përsipër me gjithë kontekstin përpara.',
      },
    ],
    signatureName: 'Ndërtuar nga Arbri Hamzallari',
    signatureRole: 'Themeluesi i Biseda AI',
    signatureLocation: 'Tiranë, Shqipëri',
    trustBadge: 'Ndërtuar nga Arbri Hamzallari',
    cta: 'Fillo një bisedë',
    ctaSecondary: 'Shiko si funksionon',
  },
  story: {
    problem: {
      eyebrow: 'PROBLEMI',
      title: 'Klientët nuk presin.',
      body: 'Një mesazh në orën 21:00. Një pyetje ndërsa jeni me një klient. Një kërkesë të dielën. Nëse përgjigja vjen vonë, klienti ka shkuar diku tjetër — dhe ju as që e merrni vesh.',
      items: [
        { title: 'Kap', text: 'Çdo mesazh merr përgjigje, edhe në mesnatë.' },
        { title: 'Kthen', text: 'Pyetjet bëhen termine, jo biseda të harruara.' },
        { title: 'Mban', text: 'Çdo kontakt ruhet — asnjë klient nuk humbet në inbox.' },
      ],
    },
    channels: {
      eyebrow: 'KANALET',
      title: 'Çdo kanal. Një bisedë.',
      body: 'Klientët ju shkruajnë ku të duan. Asistenti u përgjigjet në të njëjtën mënyrë kudo, dhe çdo bisedë ruhet në një vend të vetëm.',
      inboxLabel: 'Një inbox',
      list: [
        { name: 'WhatsApp' },
        { name: 'Instagram' },
        { name: 'Facebook Messenger' },
        { name: 'Web chat' },
      ],
      soonLabel: 'së shpejti',
    },
    inboxShowcase: {
      title: 'Një inbox. Të gjitha bisedat.',
      tabs: [
        { key: 'inbox', label: 'Biseda Inbox', available: true },
        { key: 'whatsapp', label: 'WhatsApp', available: false },
        { key: 'instagram', label: 'Instagram', available: false },
        { key: 'webchat', label: 'Web Chat', available: false },
      ],
      comingSoon: 'Së shpejti',
      imageAlt: 'Pamje e vërtetë e inbox-it të Biseda AI',
    },
  },
  problemOverload: {
    eyebrow: '',
    title: { line1: '20 mesazhe.', line2Number: 'Asnjë', line2Rest: 'klient në pritje.' },
    bellLabel: 'Shfaq njoftimet',
    floodTitle: 'Njoftime',
    floodCountLabel: 'të reja',
    handledTitle: 'Biseda AI u përgjigj',
    handledCaption: 'Çdo bisedë u caktua te ekipi i duhur',
    statusReplied: 'Përgjigjur',
    replayLabel: 'Shihe përsëri',
    timeNow: 'tani',
    timeMinutes: 'min',
    timeHours: 'orë',
    notifications: [
      { channel: 'WhatsApp', from: 'Ana K.', message: 'Mirëmbrëma! A keni ndonjë vend nesër në mëngjes?', minutesAgo: 1, assignee: 'Recepsioni' },
      { channel: 'Instagram', from: 'elonaa_23', message: 'Përshëndetje, sa kushton pastrimi i dhëmbëve?', minutesAgo: 4, assignee: 'Shitjet' },
      { channel: 'Chat i faqes', from: 'Vizitor', message: 'A punoni të shtunave apo vetëm gjatë javës?', minutesAgo: 9, assignee: 'Kujdesi' },
      { channel: 'WhatsApp', from: 'Genti M.', message: 'Duhet ta shtyj terminin e së enjtes. A ka mundësi?', minutesAgo: 17, assignee: 'Recepsioni' },
      { channel: 'Messenger', from: 'Klajdi B.', message: 'Ku e keni klinikën saktësisht? S\'po e gjej adresën.', minutesAgo: 26, assignee: 'Kujdesi' },
      { channel: 'Instagram', from: 'sara.hoxha', message: 'A pranoni pagesë me këste?', minutesAgo: 38, assignee: 'Financa' },
      { channel: 'Email', from: 'info@', message: 'Kërkesë për ofertë — trajtim ortodontik', minutesAgo: 52, assignee: 'Shitjet' },
      { channel: 'WhatsApp', from: 'Numër i panjohur', message: 'Alo? Ka njeri aty?', minutesAgo: 74, assignee: 'Recepsioni' },
      { channel: 'Instagram', from: 'dritan_p', message: 'E pashë postimin. Sa zgjat një vizitë e parë?', minutesAgo: 96, assignee: 'Kujdesi' },
    ],
  },
  omnichannel: {
    eyebrow: 'Një Panel. Çdo Kanal.',
    title: 'Një recepsionist. Çdo bisedë.',
    items: [
      {
        title: 'Të gjitha bisedat me klientët në një vend.',
        description:
          'WhatsApp, Instagram dhe chat-i i faqes bashkohen në një panel të vetëm, në mënyrë që stafi juaj të mos kalojë nga një aplikacion në tjetrin.',
      },
      {
        title: 'Biseda përgjigjet brenda sekondash.',
        description:
          'I jepni Biseda-s informacionet e biznesit tuaj — oraret, shërbimet, çmimet, pyetjet e shpeshta dhe rregullat tuaja — dhe ajo i përdor për t\'iu përgjigjur klientëve saktë, 24/7.',
      },
      {
        title: 'Stafi juaj ndërhyn kur duhet.',
        description:
          'Kur një bisedë kërkon një person, stafi juaj e merr menjëherë përsipër, me gjithë historikun e bisedës përpara. Klienti nuk ka nevojë të shpjegojë gjithçka nga fillimi.',
      },
    ],
  },
  action: {
    eyebrow: 'MË SHUMË SE PËRGJIGJE',
    title: 'Jo vetëm përgjigje. Veprim.',
    body: 'Çdo bisedë nxjerr diçka të dobishme — jo vetëm një mesazh i dërguar.',
    items: [
      { label: 'Kap lead-in', value: 'Emri, telefoni dhe kërkesa ruhen automatikisht' },
      { label: 'Kualifikon', value: 'Dallon një pyetje të thjeshtë nga një klient gati për të blerë' },
      { label: 'Rezervon takime', value: 'Cakton oraret direkt në bisedë, pa telefonata' },
      { label: 'Përgjigjet pyetjeve', value: 'Oraret, çmimet dhe shërbimet — nga baza juaj e njohurive' },
      { label: 'Kalon te njeriu', value: 'Kur duhet një person, bisedën e merr dikush nga ekipi juaj' },
    ],
  },
  knowledge: {
    eyebrow: 'MOTORI',
    title: 'Një AI që mëson biznesin tuaj.',
    body: 'I jepni faktet e biznesit tuaj — oraret, çmimet, shërbimet. Biseda AI i përdor për t\'iu përgjigjur klientëve saktë, në gjuhën e tyre.',
    steps: [
      { label: 'Baza e njohurive', caption: 'Oraret, çmimet, shërbimet e biznesit tuaj' },
      { label: 'Biseda AI', caption: 'Kupton pyetjen dhe përgjigjet bazuar në faktet tuaja' },
      { label: 'Klienti', caption: 'Merr një përgjigje të saktë, në çast' },
    ],
  },
  pricing: {
    title: 'Çmime të qarta. Pa surpriza.',
    subtitle: 'Zgjidhni nivelin e komunikimit me klientët që i nevojitet biznesit tuaj.',
    popular: 'Më i preferuari',
    tiers: [
      {
        name: 'Starter',
        tagline: 'Për biznese të vogla që duan dikë t\'u përgjigjet klientëve në WhatsApp 24/7.',
        features: [
          'Asistent në WhatsApp 24/7',
          'Përgjigje në rreth 2 sekonda',
          'Trajnuar me oraret, shërbimet dhe çmimet tuaja',
          'Mbledh emrin dhe numrin e klientëve të rinj',
          'Konfigurimi i plotë nga ekipi ynë',
        ],
        cta: 'Na shkruani në WhatsApp',
        highlighted: false,
      },
      {
        name: 'Growth',
        tagline: 'Për biznese që marrin klientë edhe nga Instagrami dhe faqja e tyre.',
        features: [
          'Gjithçka nga Starter',
          'Instagram DM',
          'Chat në faqen tuaj',
          'Kap kërkesat për takime dhe shërbime',
          'Raport mujor i klientëve',
        ],
        cta: 'Na shkruani në WhatsApp',
        highlighted: true,
      },
      {
        name: 'Advanced',
        tagline: 'Për biznese me volum më të lartë ose disa lokacione.',
        features: [
          'Gjithçka nga Growth',
          'Facebook Messenger',
          'Disa lokacione ose numra',
          'Disa gjuhë',
          'Mbështetje dhe përditësime me përparësi',
        ],
        cta: 'Na shkruani në WhatsApp',
        highlighted: false,
      },
      {
        name: 'Enterprise',
        price: 'Me marrëveshje',
        period: '',
        tagline: 'Për grupe dhe biznese me kërkesa të veçanta.',
        features: [
          'Zgjidhje e ndërtuar për biznesin tuaj',
          'Integrime sipas nevojës',
          'Mbështetje e dedikuar',
          'Çmim sipas volumit dhe kërkesave',
        ],
        cta: 'Na kontaktoni',
        highlighted: false,
      },
    ],
    volumeQuestion: 'Me sa kontakte komunikoni në muaj?',
    volumeTiers: ['Deri në 500 kontakte', '500 – 1,500 kontakte', '1,500+ kontakte'],
    billingMonthly: 'Mujor',
    billingYearly: 'Vjetor',
    yearlySave: 'kurseni {pct}%',
    perMonth: '/muaj',
    billedYearly: '/vit (faturuar vjetor)',
    demoPrompt: 'Dëshironi ta shihni para se të vendosni?',
    demoCta: 'Provoje falas →',
    footnote: 'Provoni Biseda me informacionet e biznesit tuaj përpara se të paguani.',
  },
  faq: {
    title: 'Pyetjet që na bëjnë më shpesh',
    subtitle: 'Gjithçka që duhet të dini para se të filloni.',
    items: [
      {
        q: 'A do ta kuptojnë klientët që po flasin me AI?',
        a: 'Biseda përshtatet me biznesin tuaj, informacionet tuaja dhe mënyrën se si komunikoni. Qëllimi është që bisedat të duken natyrshëm dhe të jenë të dobishme — jo si përgjigje automatike gjenerike.',
      },
      {
        q: 'Sa kohë duhet për ta instaluar?',
        a: 'Zakonisht 48–72 orë nga momenti që na jepni informacionet e biznesit deri sa Biseda të jetë gati për t\'iu përgjigjur klientëve.',
      },
      {
        q: 'A e ndërtoni vetë Biseda-n?',
        a: 'Po. Biseda ndërtohet dhe mirëmbahet nga ekipi ynë. Ne e përshtatim me biznesin tuaj dhe menaxhojmë përditësimet drejtpërdrejt.',
      },
      {
        q: 'Çfarë ndodh kur klienti kërkon të flasë me një person?',
        a: 'Biseda ia kalon bisedën stafit tuaj duke ruajtur gjithë historikun, kështu klienti nuk ka nevojë të përsërisë gjithçka.',
      },
      {
        q: 'A janë të sigurta të dhënat e klientëve të mi?',
        a: 'Të dhënat e biznesit dhe klientëve ruhen dhe izolohen sipas biznesit. Për detajet e plota, shikoni Politikën tonë të Privatësisë.',
      },
      {
        q: 'A duhet të lidh kontratë afatgjatë?',
        a: 'Jo. Planet janë mujore dhe mund ta anuloni kur të dëshironi.',
      },
      {
        q: 'A funksionon Biseda edhe jashtë Shqipërisë dhe Kosovës?',
        a: 'Po. Biseda mund të përdoret nga biznese kudo ku komunikojnë me klientët online.',
      },
      {
        q: 'Cili plan më përshtatet?',
        a: 'Varet kryesisht nga kanalet që përdorni, numri i klientëve me të cilët komunikoni dhe nëse keni disa lokacione. Na shkruani dhe do t\'ju ndihmojmë të zgjidhni planin e duhur.',
      },
    ],
  },
  finalCta: {
    title: 'Mos lejoni që një ditë e ngarkuar të bëhet një klient i humbur.',
    subtitle: 'Mbajeni biznesin tuaj gjithmonë të përgjegjshëm ndaj klientëve. Shihni si do të dukej Biseda për biznesin tuaj.',
    cta: 'Na shkruani në WhatsApp',
    secondaryCta: 'Shiko çmimet',
  },
  footer: {
    tagline: 'Asistentë AI për WhatsApp, Instagram dhe faqen tuaj, që u përgjigjen klientëve 24 orë në ditë.',
    rights: 'Të gjitha të drejtat e rezervuara.',
    builtIn: 'Ndërtuar në Shqipëri 🇦🇱',
    colServices: {
      title: 'Shërbime',
      items: ['Asistent WhatsApp', 'Asistent Instagram', 'Facebook Messenger', 'Chat në faqe'],
    },
    colCompany: {
      title: 'Kompania',
      items: [
        { label: 'Provoje vetë', href: '/#demo' },
        { label: 'Themeluesi', href: '/#themeluesi' },
        { label: 'Çmimet', href: '/#cmimet' },
      ],
    },
    colContact: { title: 'Kontakt & Ligjore' },
    email: 'info@codrix.org',
    hours: 'Tiranë, Shqipëri',
    privacy: 'Politika e privatësisë',
    terms: 'Kushtet e shërbimit',
  },
  legal: {
    privacy: {
      title: 'Politika e privatësisë',
      updated: 'Përditësuar më 20 korrik 2026',
      body: [
        'Codrix (“ne”) ndërton dhe instalon asistentë që u përgjigjen klientëve të bizneseve në WhatsApp, Instagram dhe chat në faqe. Kjo politikë shpjegon si i trajtojmë të dhënat.',
        'Të dhënat e biznesit. Kur na jepni akses në llogaritë tuaja WhatsApp Business ose Instagram, i përdorim vetëm për të konfiguruar dhe mbajtur në punë asistentin tuaj. Nuk i ndajmë me palë të treta.',
        'Bisedat me klientët. Asistenti përpunon mesazhet e klientëve për t’u përgjigjur dhe për të kapur të dhëna kontakti (emër, telefon, kërkesë). Nuk ruajmë përmbajtjen e bisedave më shumë se sa duhet për të funksionuar shërbimi.',
        'Demoja në faqe. Bisedat në demon tonë live dërgohen te një ofrues modeli gjuhësor vetëm për të gjeneruar përgjigjen. Nuk ju kërkojmë emër, email apo regjistrim për ta provuar.',
        'Të drejtat tuaja (GDPR). Keni të drejtë të kërkoni akses, korrigjim ose fshirje të të dhënave tuaja. Na shkruani në info@codrix.org.',
        'Kjo faqe përdor vetëm cookie teknike të nevojshme për funksionim. Nuk përdorim gjurmim reklamash.',
      ],
    },
    terms: {
      title: 'Kushtet e shërbimit',
      updated: 'Përditësuar më 20 korrik 2026',
      body: [
        'Duke përdorur shërbimet e Codrix, pranoni këto kushte.',
        'Shërbimi. Ne ndërtojmë, instalojmë dhe mbajmë në punë një asistent që u përgjigjet klientëve tuaj në kanalet e zgjedhura. Përmbajtja e përgjigjeve konfigurohet sipas informacioneve që na jepni.',
        'Pagesat. Planet janë mujore dhe faturohen paraprakisht. Mund ta anuloni kur të doni; shërbimi vazhdon deri në fund të periudhës së paguar.',
        'Përgjegjësitë tuaja. Ju siguroni informacione të sakta për biznesin dhe akses të vlefshëm në llogaritë përkatëse. Ju mbeteni përgjegjës për marrëdhënien me klientët tuaj.',
        'Kufizimi i përgjegjësisë. Bëjmë çmos që asistenti të përgjigjet saktë, por ju rekomandojmë të mbikëqyrni bisedat e ndjeshme. Codrix nuk mban përgjegjësi për vendime të marra vetëm mbi bazën e përgjigjeve automatike.',
        'Kontakt. Për çdo pyetje mbi këto kushte, na shkruani në info@codrix.org.',
      ],
    },
  },
  sticky: {
    label: 'Na shkruani në WhatsApp',
  },
};
