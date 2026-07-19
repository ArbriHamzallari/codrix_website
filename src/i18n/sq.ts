import type { Dict } from './types';

export const sq: Dict = {
  locale: 'sq',
  nav: {
    links: [
      { label: 'Si fillojmë', href: '/#si-funksionon' },
      { label: 'Provoje vetë', href: '/#demo' },
      { label: 'Rezultate', href: '/#rezultate' },
      { label: 'Çmimet', href: '/#cmimet' },
      { label: 'Pyetje', href: '/#pyetje' },
    ],
    cta: 'Na shkruani në WhatsApp',
    whatsappMessage:
      'Përshëndetje! Pashë faqen tuaj dhe dua të di si mund të funksionojë asistenti për biznesin tim.',
  },
  hero: {
    badge: 'Ndërtuar në Shqipëri për bizneset shqiptare',
    title: 'Sa klientë humbisni sepse s\'keni kohë t\'u përgjigjeni?',
    subtitle:
      'Klientët marrin përgjigje në WhatsApp dhe Instagram brenda 2 sekondash, në çdo orë të ditës. Edhe kur ju jeni të zënë ose duke fjetur.',
    ctaDemo: 'Provoje falas',
    ctaWhatsapp: 'Na shkruani në WhatsApp',
    stats: [
      { value: '2 sek', label: 'Përgjigje mesatare' },
      { value: '24/7', label: 'Gjithmonë aktiv' },
      { value: '9+', label: 'Biznese reale na besojnë' },
    ],
  },
  logos: {
    title: 'Klinika dhe biznese reale që na besojnë',
    subtitle: 'Biznese që e përdorin çdo ditë.',
  },
  demo: {
    badge: 'Demo live',
    title: 'Provoje vetë',
    subtitle:
      'Zgjidhni një biznes, bëjini pyetje si klient dhe shihni si përgjigjet. Kur klienti lë emrin ose numrin e telefonit, do t\'i shihni menjëherë.',
    pickBusiness: 'Zgjidhni biznesin tuaj',
    knowledgeLabel: 'Çfarë di asistenti',
    knowledgeHint: 'Ndryshoni oraret, çmimet ose shërbimet. Përgjigjet ndryshojnë menjëherë.',
    chatPlaceholder: 'Shkruani si klient...',
    chatHeader: 'Asistenti i biznesit',
    online: 'online',
    leadTitle: 'Kontakti i klientit',
    leadHint: 'Kur klienti lë të dhënat, ato ruhen automatikisht.',
    leadName: 'Emri',
    leadPhone: 'Telefoni',
    leadRequest: 'Kërkesa',
    leadSlot: 'Orari',
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
  process: {
    title: 'Si fillojmë — 3 hapa të thjeshtë',
    subtitle: 'Nga biseda e parë deri te instalimi, brenda 48-72 orëve. Nuk keni nevojë të dini asgjë teknike.',
    steps: [
      {
        title: '1. Na shkruani në WhatsApp',
        text: 'Na tregoni çfarë biznesi keni. Ne përgatisim një provë falas me informacionet tuaja.',
      },
      {
        title: '2. Ne e ndërtojmë për ju',
        text: 'Asistenti mëson oraret, shërbimet dhe mënyrën si komunikon biznesi juaj — që të flasë natyrshëm, jo si robot.',
      },
      {
        title: '3. Fillon t\'u përgjigjet klientëve',
        text: 'Brenda 48-72 orëve asistenti përgjigjet në WhatsApp dhe Instagram në vendin tuaj. Ju merrni njoftim për çdo klient të ri.',
      },
    ],
  },
  proof: {
    title: 'Rezultate reale nga biznese reale',
    subtitle: 'Këto janë klientët tanë, me emra dhe logo reale — jo dëshmi anonime.',
    beforeLabel: 'Para',
    afterLabel: 'Pas',
    caseStudies: [
      {
        client: 'Dental Med Austria',
        type: 'Klinikë dentare',
        location: 'Austri, BE',
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
  pricing: {
    title: 'Çmime të qarta, pa surpriza',
    subtitle: 'Paguani nga muaji në muaj dhe e ndaloni kur të doni. WhatsApp i përfshirë në çdo plan.',
    popular: 'Më i zgjedhuri',
    tiers: [
      {
        name: 'Starter',
        price: '€79',
        period: '/muaj',
        tagline: 'Për biznese të vogla që duan të mos humbin asnjë klient në WhatsApp.',
        features: [
          'Asistent në WhatsApp 24/7',
          'Përgjigje në 2 sekonda',
          'Trajnuar me oraret dhe çmimet tuaja',
          'Kap emrin dhe numrin e çdo klienti të ri',
          'Instalim i plotë nga ne',
        ],
        cta: 'Na shkruani në WhatsApp',
        highlighted: false,
      },
      {
        name: 'Growth',
        price: '€159',
        period: '/muaj',
        tagline: 'Për biznese që marrin klientë edhe nga Instagrami.',
        features: [
          'Gjithçka nga Starter',
          'Instagram DM i përfshirë',
          'Chat në faqen tuaj të internetit',
          'Kërkesat për rezervime kapen automatikisht',
          'Raport mujor i klientëve të kapur',
        ],
        cta: 'Na shkruani në WhatsApp',
        highlighted: true,
      },
      {
        name: 'Advanced',
        price: '€279',
        period: '/muaj',
        tagline: 'Për klinika e biznese me shumë lokacione dhe volum të lartë.',
        features: [
          'Gjithçka nga Growth',
          'Facebook Messenger i përfshirë',
          'Disa lokacione ose numra',
          'Përgjigje në disa gjuhë',
          'Përparësi në suport dhe përditësime',
        ],
        cta: 'Na shkruani në WhatsApp',
        highlighted: false,
      },
      {
        name: 'Enterprise',
        price: 'Me marrëveshje',
        period: '',
        tagline: 'Për grupe klinikash dhe biznese me kërkesa të veçanta.',
        features: [
          'Zgjidhje e ndërtuar për ju',
          'Integrime sipas nevojës',
          'Suport i dedikuar',
          'Marrëveshje sipas volumit',
        ],
        cta: 'Na kontaktoni',
        highlighted: false,
      },
    ],
    footnote: 'E provoni me informacionet e biznesit tuaj para se të paguani.',
  },
  faq: {
    title: 'Pyetjet që na bëjnë më shpesh',
    subtitle: 'Gjithçka që duhet të dini para se të filloni.',
    items: [
      {
        q: 'Sa kohë duhet për ta instaluar?',
        a: 'Zakonisht 48-72 orë. Ne bëjmë gjithçka — ju duhet vetëm të na jepni akses në WhatsApp Business dhe Instagram. Nuk keni nevojë për asnjë njohuri teknike.',
      },
      {
        q: 'A do të duket si robot para klientëve të mi?',
        a: 'Jo. Asistentin e trajnojmë me emrin e biznesit tuaj, mënyrën si flisni ju, dhe përgjigjet tuaja. U përgjigjet klientëve ashtu siç do t\'u përgjigjeshit ju — thjesht më shpejt. Shumë klientë mendojnë se po flasin me një person real.',
      },
      {
        q: 'Po kur pyetja është shumë e ndërlikuar?',
        a: 'Asistenti e di kufirin e vet. Kur një pyetje del jashtë njohurive të tij, i thotë klientit se dikush nga stafi do t\'i kthehet shpejt — dhe ju merrni njoftim në çast që të ndërhyni.',
      },
      {
        q: 'A më duhet kontratë afatgjatë?',
        a: 'Jo. Të gjitha planet janë mujore dhe mund t\'i anuloni kur të doni. Jemi aq të sigurt te rezultatet sa s\'kemi nevojë t\'ju lidhim me kontratë.',
      },
      {
        q: 'A funksionon edhe jashtë Shqipërisë dhe Kosovës?',
        a: 'Po. Punojmë me biznese në gjithë Evropën. Asistenti punon në çdo gjuhë dhe me çdo llogari WhatsApp Business apo Instagram, pavarësisht vendit.',
      },
      {
        q: 'A janë të sigurta të dhënat e klientëve të mi?',
        a: 'Po. Nuk ruajmë biseda më shumë se ç\'duhet për të funksionuar asistenti. Respektojmë GDPR-në dhe nuk i ndajmë kurrë të dhënat tuaja apo të klientëve tuaj me palë të treta.',
      },
      {
        q: 'Cili plan është për mua?',
        a: 'Nëse klientët ju shkruajnë kryesisht në WhatsApp, nisni me Starter. Nëse merrni shumë mesazhe edhe në Instagram, Growth është zgjedhja më e mirë. Për disa lokacione ose volum të lartë, Advanced. Nëse s\'jeni të sigurt, na shkruani — ju këshillojmë falas.',
      },
    ],
  },
  finalCta: {
    title: 'Mos humbni asnjë klient tjetër',
    subtitle: 'Na shkruani në WhatsApp dhe brenda pak minutash ju tregojmë si do të dukej asistenti për biznesin tuaj.',
    cta: 'Na shkruani në WhatsApp',
  },
  footer: {
    tagline: 'Asistentë për WhatsApp dhe Instagram që u përgjigjen klientëve 24 orë në ditë. Teknologji e ndërtuar në Shqipëri.',
    rights: 'Të gjitha të drejtat e rezervuara.',
  },
  sticky: {
    label: 'Na shkruani në WhatsApp',
  },
};
