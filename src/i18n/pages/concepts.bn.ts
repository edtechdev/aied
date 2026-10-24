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
  empty: 'এখনও কোনো ধারণা পৃষ্ঠা নেই।',
};

export default bn;
