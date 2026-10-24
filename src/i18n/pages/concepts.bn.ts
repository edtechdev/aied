/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the section headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const bn: ConceptsStrings = {
  title: 'ধারণা',
  h1: 'ধারণা',
  introHtml:
    'সাইটের সব ধারণা পৃষ্ঠা, বাম দিকের সাইডবারের মতো একই ছত্রাকে। প্রতিটি পৃষ্ঠা বলে AI ও শিক্ষায় একটি ধারণার অর্থ কী, গবেষণায় তা নিয়ে কী পাওয়া গেছে এবং এটি কোন গবেষণার উপর নির্ভর করে। <a href="/aied/concepts/ai-education/">শিক্ষায় AI</a> হলো সেই ছাতা যা এগুলোকে একসঙ্গে বাঁধে।',
  browseHtml:
    'ধারণা পৃষ্ঠাগুলো অফলাইনে পড়ার জন্য <a href="/aied/aied.epub">EPUB</a> বা <a href="/aied/aied.pdf">PDF</a> হিসেবেও পাওয়া যায়। প্রশ্ন, গবেষণাপত্র, টুল, খোঁজ বা নিজের সহকারী থেকে শুরু করতে চাইলে দেখুন <a href="/aied/faq">প্রশ্নোত্তর</a>, <a href="/aied/journal">জার্নাল</a>, <a href="/aied/resources">রিসোর্স</a>, <a href="/aied/search">খোঁজ</a>, বা <a href="/aied/ai">AI পৃষ্ঠা</a>।',
  countTemplate: '{count}টি ধারণা পৃষ্ঠা, {strands}টি ছত্রাকে সাজানো।',
  strandBlurbs: {
    'Foundations of AI in education':
      'ক্ষেত্রটির সামগ্রিক দৃশ্য: শিক্ষায় AI কী, এটি কীভাবে বিকশিত হয়েছে, এবং কোন সর্বত্র ছড়ানো থিমগুলো (AI সাক্ষরতা, মানুষ ও AI-এর সহযোগিতা, এজেন্সি) অন্য প্রতিটি ছত্রাক গড়ে তোলে।',
    'Learning and instruction':
      'AI কীভাবে শেখা ও পাঠদানকে সহায়তা করে, শিক্ষাদানের পদ্ধতি, শেখার তত্ত্ব এবং শিক্ষার্থীর দিকে মুখ করা প্রক্রিয়াগুলোর মাধ্যমে যেগুলোর ভেতরে AI কাজ করে।',
    'Technologies and techniques':
      'প্রযুক্তিগত স্তর: যে AI মডেল ও পদ্ধতিগুলো শিক্ষা প্রযুক্তিকে চালায়, এবং সেগুলোর উপর দাঁড়ানো শিক্ষার্থী মডেলিং ও টিউটরিং সিস্টেম।',
    'AI in the disciplines':
      'কীভাবে AI একাডেমিক বিষয় ও শিক্ষার স্তরজুড়ে প্রয়োগ হয়: ক্ষেত্রটির বিষয়ভিত্তিক ক্ষেত্রের পরিধি।',
    'Assessment and measurement':
      'AI কীভাবে শিক্ষার্থীদের মূল্যায়ন করে এবং একইসঙ্গে আমরা কীভাবে AI সিস্টেম ও তাদের প্রভাব মূল্যায়ন করি তা বদলে দেয়।',
    'Equity, ethics, and responsible use':
      'ন্যায়বিচার, প্রবেশাধিকার ও দায়িত্ব শিক্ষায় AI-এর কেন্দ্রে।',
  },
  empty: 'এখনও কোনো ধারণা পৃষ্ঠা নেই।',
};

export default bn;
