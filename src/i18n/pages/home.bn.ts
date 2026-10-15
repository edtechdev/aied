/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const bn: HomeStrings = {
  title: 'হোম',
  h1: 'শিক্ষায় কৃত্রিম বুদ্ধিমত্তা নলেজ বেস',
  introHtml: `স্বাগতম <strong>শিক্ষায় কৃত্রিম বুদ্ধিমত্তা নলেজ বেস</strong>-এ — <a href=\"/aied/concepts/ai-education/\">শিক্ষায় কৃত্রিম বুদ্ধিমত্তা</a> বিষয়ক একটি বিনামূল্যের, পাবলিক ডোমেইন রিসোর্স, তাদের জন্য যারা এ বিষয়ে পড়ান, পড়াশোনা করেন, ডিজাইন করেন বা প্রশাসন করেন। এটি সাম্প্রতিক মুক্ত-অ্যাক্সেস গবেষণাকে ছোট, গঠনমূলক পৃষ্ঠায় রূপ দেয় যা আপনি পড়ে ব্যবহার করতে পারেন। এটি কীভাবে তৈরি হয়েছে তার একটি কথা: পৃষ্ঠাগুলো একটি AI এজেন্ট দ্বারা তৈরি ও হালনাগাদ হয়, সাইট ডেভেলপারের সম্পাদকীয় পরামর্শ সহ। প্রতিটি দাবির পেছনের গবেষণাপত্র উল্লেখ করা থাকে, তাই সূত্র যাচাই করার সুযোগ আছে।`,
  navHeading: 'সাইটে ঘোরা',
  navHtml: `বাম দিকের সাইডবারে টুকরো-ভিত্তিক সূচক ঘুরে দেখুন ফিল্ডটি কীভাবে সাজানো, অথবা মনের মধ্যে আগেই কোনো বিষয় থাকলে পুরো নলেজ বেসে <a href=\"/aied/search\">খুঁজুন</a>। নিবন্ধ পৃষ্ঠা একটি গবেষণাপত্রকে তার উদ্দেশ্য, পদ্ধতি ও ফলাফলে রূপ দেয়, পূর্ণ উদ্ধৃতি ও সংশ্লিষ্ট কাজের লিঙ্ক সহ; ধারণা পৃষ্ঠা একটি ধারণা নিয়ে গবেষণায় যা বলেছে তা জড়ো করে এবং পেছনের গবেষণের লিঙ্ক দেয়। প্রশ্ন থেকে শুরু করতে চাইলে, <a href=\"/aied/faq\">প্রশ্নোত্তর সূচক</a>তে আগে দর্শকের জিজ্ঞাসিত প্রশ্নগুলো জড়ো করা — কোর্সের AI নীতি থেকে শুরু করে AI ডিটেক্টর চালানো উচিত কি না; টুল থেকে শুরু করতে চাইলে, <a href=\"/aied/resources\">রিসোর্স পৃষ্ঠা</a>তে বিনামূল্যের টুল, সংগ্রহ ও যন্ত্রের তালিকা থাকে যা যাওয়া ব্যবহার করা যায়, প্রতিটিতে বলা থাকে কে তৈরি করেছে এবং খরচ কী। উপরের ধারণা মানচিত্র দেখায় কী কী পরস্পরের সঙ্গে যুক্ত; <a href=\"/aied/concepts/ai-education/\">শিক্ষায় কৃত্রিম বুদ্ধিমত্তা</a> তার পেছনের মানচিত্র পৃষ্ঠা, যা ধারণাগুলোকে প্রায় এক ডজন ছত্রাক প্রবাহে ভাগ করে।`,
  chatHeading: 'নলেজ বেসের সঙ্গে চ্যাট',
  chatHtml: `এখানকার সবকিছু মেশিন-পাঠযোগ্য ফাইল হিসেবেও প্রকাশিত, তাই আপনি নিজের পছন্দের AI চ্যাটবট বা এজেন্টকে নলেজ বেসের দিকে নির্দেশ করে দিতে পারেন এবং সে অনুমান না করে উদ্ধৃতি দেওয়া উত্তর দিতে পারে — <a href=\"/aied/ai\">প্রম্পটগুলো এখানে</a>। নতুন পৃষ্ঠা <a href=\"/aied/journal\">জার্নালে</a> দেখা যায়, যার একটি <a href=\"/aied/rss.xml\">RSS ফিড</a> আছে যদি অনুসরণ করতে চান। অফলাইনে পড়তে, <a href=\"/aied/aied.epub\">EPUB</a> বা <a href=\"/aied/aied.pdf\">PDF</a> নিন।`,
  startingHeading: 'পাঠক অনুযায়ী প্রস্তাবিত শুরুর জায়গা',
  startingIntro: 'এই নলেজ বেসে শুরুর জন্য কিছু প্রস্তাবিত ধারণা নিচে দেওয়া আছে।',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'প্রয়োজনীয় ধারণা',
      html: `<a href=\"/aied/concepts/ai-literacy/\">AI সাক্ষরতা</a>, <a href=\"/aied/concepts/misconceptions/\">AI নিয়ে ভুল ধারণা</a>, <a href=\"/aied/concepts/agentic-ai/\">এজেন্টিক AI</a>, <a href=\"/aied/concepts/cognitive-offloading/\">কগনিটিভ অফলোডিং</a>, এবং <a href=\"/aied/concepts/interpreting-and-applying-aied-research/\">এই গবেষণা কীভাবে ব্যাখ্যা ও প্রয়োগ করবেন</a>: ফলাফল কী সমর্থন করে আর কী পারে না, এবং একটি গবেষণা কেন কমই কোনো প্রশ্নের নিষ্পত্তি করে।`,
    },
    {
      id: 'instructors',
      heading: 'শিক্ষক',
      html: `<a href=\"/aied/concepts/teacher-role/\">বদলে যাওয়া শিক্ষকের ভূমিকা</a>, <a href=\"/aied/concepts/learning-design/\">লার্নিং ডিজাইন</a>, <a href=\"/aied/concepts/assessment/\">মূল্যায়ন</a>, <a href=\"/aied/concepts/feedback/\">প্রতিক্রিয়া</a>, <a href=\"/aied/concepts/academic-integrity/\">একাডেমিক সততা</a>, <a href=\"/aied/concepts/framing-ai-use-for-students/\">ছাত্রদের AI-ব্যবহারের ফ্রেমিং</a> ও <a href=\"/aied/concepts/reducing-ai-misuse/\">দুর্নীতি কমানো</a>। আপনার নিজের বিষয়ের টুল, প্রমাণ ও উদাহরণের জন্য দেখুন <a href=\"/aied/concepts/discipline-specific-aied/\">আপনার নিজের বিষয়ে AI</a>।`,
    },
    {
      id: 'developers',
      heading: 'ডেভেলপার',
      html: `<a href=\"/aied/concepts/educational-technology-developers/\">শিক্ষার জন্য তৈরি করা</a>, <a href=\"/aied/concepts/ai-technologies/\">পেছনের প্রযুক্তি</a>, <a href=\"/aied/concepts/intelligent-tutoring/\">ইন্টেলিজেন্ট টিউটরিং</a>, <a href=\"/aied/concepts/multimodal/\">মাল্টিমোডাল AI</a>, <a href=\"/aied/concepts/student-modeling/\">শিক্ষার্থী মডেলিং</a>, এবং <a href=\"/aied/concepts/llm-training-and-fine-tuning/\">পাঠদানের জন্য মডেল প্রশিক্ষণ ও অভিযোজন</a>।`,
    },
    {
      id: 'administrators',
      heading: 'প্রশাসক',
      html: `<a href=\"/aied/concepts/administrator/\">প্রশাসকের ভূমিকা</a>, <a href=\"/aied/concepts/governance/\">AI গভর্ন্যান্স</a>, <a href=\"/aied/concepts/educational-policy-ai/\">প্রাতিষ্ঠানিক নীতি</a>, <a href=\"/aied/concepts/legal-issues-and-risks/\">আইনি সমস্যা ও ঝুঁকি</a>, এবং <a href=\"/aied/concepts/change-management/\">পরিবর্তন ব্যবস্থাপনা</a>।`,
    },
    {
      id: 'researchers',
      heading: 'গবেষক',
      html: `<a href=\"/aied/concepts/research-methods-aied/\">AIED-তে গবেষণা পদ্ধতি</a>, <a href=\"/aied/concepts/theories-and-frameworks/\">তত্ত্ব ও কাঠামো</a>, <a href=\"/aied/concepts/ai-ed-evaluation/\">শিক্ষায় AI-অভিযানের মূল্যায়ন</a>, <a href=\"/aied/concepts/educational-measurement/\">শিক্ষাগত পরিমাপ</a>, <a href=\"/aied/concepts/learning-gains/\">শেখার অগ্রগতি পরিমাপ</a>, এবং <a href=\"/aied/concepts/limitations-in-aied-research/\">এই প্রমাণভিত্তির সর্বত্র ছড়ানো সীমাবদ্ধতা</a>।`,
    },
  ],
  statsHeading: 'নলেজ বেসে কী আছে',
  statsIntro:
    'এখানকার প্রতিটি পৃষ্ঠা তারিখ করা, এবং নলেজ বেস বাড়ে যখন নতুন মুক্ত-অ্যাক্সেস গবেষণা প্রকাশিত ও পর্যালোচিত হয়। নিচের সংখ্যাগুলো বর্তমান কনটেন্ট থেকে পড়া হয়; তারিখ হলো সর্বশেষ পৃষ্ঠা হালনাগাদ।',
  conceptMap: {
    title: 'শিক্ষায় কৃত্রিম বুদ্ধিমত্তার ধারণা মানচিত্র',
    desc:
      'একটি ব্যাসার্ধীয় মানচিত্র, কেন্দ্রে শিক্ষায় কৃত্রিম বুদ্ধিমত্তা, বারোটি শীর্ষ-স্তরের ধারণার সঙ্গে যুক্ত: ' +
      'মডেলিং, শেখা, ন্যায়বিচার, প্রতিক্রিয়া, AI সাক্ষরতা, মূল্যায়ন, বিষয়, পাঠদান, ' +
      'নীতিশাস্ত্র, প্রযুক্তি, সিস্টেম মূল্যায়ন, ও গবেষণা। যেকোনো নোড নির্বাচন করে তার পৃষ্ঠা খুলুন।',
    navLabel: 'শিক্ষায় কৃত্রিম বুদ্ধিমত্তার ধারণা',
    center: 'শিক্ষায় কৃত্রিম বুদ্ধিমত্তা',
    nodes: {
      'student-modeling': 'মডেলিং',
      'learning-theories': 'শেখা',
      'equity-in-ai-education': 'ন্যায়বিচার',
      feedback: 'প্রতিক্রিয়া',
      'ai-literacy': 'AI সাক্ষরতা',
      assessment: 'মূল্যায়ন',
      'discipline-specific-aied': 'বিষয়',
      pedagogy: 'পাঠদান',
      ethics: 'নীতিশাস্ত্র',
      'ai-technologies': 'প্রযুক্তি',
      'ai-ed-evaluation': 'সিস্টেম মূল্যায়ন',
      'research-methods-aied': 'গবেষণা',
    },
  },
  toc: [
    { text: 'সাইটে ঘোরা', slug: 'navigating-the-site', depth: 2 },
    { text: 'নলেজ বেসের সঙ্গে চ্যাট', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'পাঠক অনুযায়ী প্রস্তাবিত শুরুর জায়গা', slug: 'starting-points', depth: 2 },
    { text: 'প্রয়োজনীয় ধারণা', slug: 'essential-concepts', depth: 3 },
    { text: 'শিক্ষক', slug: 'instructors', depth: 3 },
    { text: 'ডেভেলপার', slug: 'developers', depth: 3 },
    { text: 'প্রশাসক', slug: 'administrators', depth: 3 },
    { text: 'গবেষক', slug: 'researchers', depth: 3 },
    { text: 'নলেজ বেসে কী আছে', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default bn;
