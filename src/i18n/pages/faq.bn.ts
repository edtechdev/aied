/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const bn: FaqStrings = {
  title: 'প্রশ্নোত্তর',
  h1: 'সাধারণত জিজ্ঞাসিত প্রশ্নাবলি',
  introHtml:
    'এই অংশে <strong>শিক্ষায় কৃত্রিম বুদ্ধিমত্তা</strong> নিয়ে সাধারণ প্রশ্নের উত্তর আছে — গবেষণায় AI পড়ানো-শেখাকে কীভাবে প্রভাবিত করে সে সম্পর্কে কী বলা হয়েছে, এবং শিক্ষক, প্রশিক্ষক ও ইনস্ট্রাকশনাল ডিজাইনাররা সেই প্রমাণ কীভাবে প্রয়োগে আনতে পারেন। প্রতিটি উত্তর এই নলেজ বেসের গবেষণার সংশ্লেষণ থেকে সারসংক্ষেপ করে, গভীর পড়ার জন্য প্রশ্নটিকে প্রাসঙ্গিক ধারণা ও নিবন্ধের সঙ্গে যুক্ত করে।',
  assistantHtml:
    'এখানে উত্তর নেই এমন কোনো প্রশ্ন আছে? <a href=\"/aied/ai\">এই নলেজ বেস আপনার নিজের AI সহকারীর সঙ্গে ব্যবহার করুন</a> পৃষ্ঠাটি দেখে আপনার নিজের AI সহকারীকে ব্যবহার করুন, যা দেখায় কীভাবে একটি এজেন্টকে সম্পূর্ণ তালিকার দিকে নির্দেশ করলে ভিত্তিবদ্ধ, উদ্ধৃতিসহ উত্তর পাওয়া যায়।',
  empty: 'এখনও কোনো প্রশ্নোত্তর নেই।',
  sectionHeadings: {
    "Start here": "এখান থেকে শুরু করুন",
    "Course and institutional policy": "কোর্স ও প্রাতিষ্ঠানিক নীতি",
    "Designing courses and activities": "কোর্স ও কার্যকলাপ ডিজাইন করা",
    "Assessment, feedback and integrity": "মূল্যায়ন, ফিডব্যাক ও একাডেমিক সততা",
    "How students learn and use AI": "শিক্ষার্থীরা AI কীভাবে শেখে ও ব্যবহার করে",
    "Particular learners, access and wellbeing": "বিভিন্ন শিক্ষার্থী, প্রবেশাধিকার ও সুস্থতা",
    "Careers and AI literacy": "কর্মজীবন ও AI সাক্ষরতা",
    "Building and evaluating educational AI": "শিক্ষামূলক AI তৈরি ও মূল্যায়ন",
    "Research practice": "গবেষণা চর্চা",
  },
  sectionBlurbs: {
    "Start here": "নির্দিষ্ট প্রশ্নগুলোর আগে পড়ার মতো দুটি বিস্তৃত প্রশ্ন, আপনার ভূমিকা যাই হোক।",
    "Course and institutional policy": "যে প্রশিক্ষকরা শিক্ষার্থীদের পড়ার নিয়ম লেখেন এবং যে প্রশাসক ও অনুষদ উন্নয়নকর্মীরা সেগুলো কর্মসূচির পর্যায়ে নির্ধারণ করেন, তাদের জন্য।",
    "Designing courses and activities": "যে কেউ ঠিক করেন AI কোন কাজে, কোন সেমিস্টারে বা কোন অনলাইন কোর্সে ঢুকবে, এবং যে প্রশিক্ষকরা AI যে সময় দেওয়ার কথা ছিল সেই সময় ফেরত চান, তাদের জন্য।",
    "Assessment, feedback and integrity": "এটি সবচেয়ে বড় গুচ্ছ, কারণ এখানেই প্রমাণ সবচেয়ে স্পষ্ট এবং এখানেই পরিণতি শিক্ষার্থীর রেকর্ডে গিয়ে পড়ে।",
    "How students learn and use AI": "শিক্ষার্থীরা আসলে কী পায়, কী হারানোর ঝুঁকি নেয়, এবং শেখাটা কীভাবে তাদের সঙ্গে রাখা যায়, সে নিয়ে প্রশ্নের জন্য।",
    "Particular learners, access and wellbeing": "যে প্রশিক্ষক ও সহায়ক কর্মীরা শ্রেণিকক্ষে আসলে কে আছে তার সঙ্গে মিলিয়ে নকশা বদলান, এবং যে প্রশাসকরা ভাবেন কে নেই, তাদের জন্য।",
    "Careers and AI literacy": "যে পাঠ্যক্রম ডিজাইনার ও কর্মসূচি প্রধানরা এমন শিক্ষার্থীদের উত্তর দেন যারা জিজ্ঞেস করে এ সব কীসের জন্য।",
    "Building and evaluating educational AI": "যে ডেভেলপার, ইনস্ট্রাকশনাল ডিজাইনার ও গবেষকরা একটি টিউটর, সিমুলেশন বা প্ল্যাটফর্ম বাস্তব কোর্সে নামান, তাদের জন্য।",
    "Research practice": "এই ক্ষেত্রে কাজের প্রতিবেদন, পর্যালোচনা বা পরিকল্পনা করা গবেষকদের জন্য।",
  },
};

export default bn;
