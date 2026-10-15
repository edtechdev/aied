/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const bn: ResourcesStrings = {
  title: 'রিসোর্স',
  h1: 'বিনামূল্যের টুল ও রিসোর্স',
  introHtml: [
    'শিক্ষায় কৃত্রিম বুদ্ধিমত্তার জন্য <strong>বিনামূল্যের টুল, সংগ্রহ, যন্ত্র ও ফরম্যাটের</strong> একটি নির্বাচিত সেট — যা আপনি আজই যাওয়া ব্যবহার করতে পারেন, আগে পড়তে হবে এমন গবেষণা নয়। এগুলো বেশিরভাগ শিক্ষক, ইনস্ট্রাকশনাল ডিজাইনার, লাইব্রেরিয়ান ও গবেষকদের দ্বারা তৈরি, এবং অনেকগুলি AI সহায়তায় তৈরি যারা পেশাদার ডেভেলপার নন।',
    'এখানকার সবকিছু ইন্টারঅ্যাক্টিভ নয়। ব্রাউজার টুল ও AI টিউটরের পাশাপাশি প্রস্তুত প্রম্পট ও "জেম" লাইব্রেরি, ক্লাসরুম কার্যক্রমের সংগ্রহ, ব্রিফিং ও নীতি নথি, মূল্যায়ন যন্ত্র, এবং খোলা ফাইল ফরম্যাটও পাওয়া যাবে। প্রতিটি এন্ট্রি একটি ছোট সারসংক্ষেপ যা সেই পৃষ্ঠার সঙ্গে যুক্ত যেখানে বলা থাকে কে তৈরি করেছে, এটা কী ধরনের জিনিস, সোর্স কোড আছে কি না, ব্যবহারের খরচ কী, এবং লিঙ্ক সর্বশেষ কবে যাচাই করা হয়েছে।',
    'প্রতিটি এন্ট্রি এমন একটি বাইরের সাইটে লিঙ্ক করে যা এই নলেজ বেস নিয়ন্ত্রণ করে না, আর লিঙ্কগুলো পর্যায়ক্রমে পুনরায় যাচাই করা হয় — প্রতিটি পৃষ্ঠায় দেখানো হয় কবে লিঙ্কটি সর্বশেষ নিশ্চিত করা হয়েছে। কোনো টুল সরানো হয়েছে, বন্ধ হয়ে গেছে, বা এখানে থাকার যোগ্য কিন্তু নেই, সবচেয়ে দ্রুত পথ হলো রিপোজিটরিতে একটি ইস্যু খোলা।',
  ],
  empty: 'এখনও কোনো রিসোর্স নেই।',
  groupLabels: {
    software: 'সফটওয়্যার',
    'ai tutor': 'AI টিউটর',
    'agent skill': 'এজেন্ট স্কিল',
    'prompt or gem library': 'প্রম্পট ও জেম লাইব্রেরি',
    'collection of tools': 'টুলের সংগ্রহ',
    'collection of activities': 'কার্যক্রমের সংগ্রহ',
    'assessment instrument': 'মূল্যায়ন যন্ত্র',
    'open format or specification': 'খোলা ফরম্যাট ও স্পেসিফিকেশন',
    'ebook or guide': 'ইবুক ও গাইড',
    'case study collection': 'কেস স্টাডির সংগ্রহ',
    'dataset or benchmark': 'ডেটাসেট ও বেঞ্চমার্ক',
  },
};

export default bn;
