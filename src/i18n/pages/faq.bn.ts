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
}

const bn: FaqStrings = {
  title: 'প্রশ্নোত্তর',
  h1: 'সাধারণত জিজ্ঞাসিত প্রশ্নাবলি',
  introHtml:
    'এই অংশে <strong>শিক্ষায় কৃত্রিম বুদ্ধিমত্তা</strong> নিয়ে সাধারণ প্রশ্নের উত্তর আছে — গবেষণায় AI পড়ানো-শেখাকে কীভাবে প্রভাবিত করে সে সম্পর্কে কী বলা হয়েছে, এবং শিক্ষক, প্রশিক্ষক ও ইনস্ট্রাকশনাল ডিজাইনাররা সেই প্রমাণ কীভাবে প্রয়োগে আনতে পারেন। প্রতিটি উত্তর এই নলেজ বেসের গবেষণার সংশ্লেষণ থেকে সারসংক্ষেপ করে, গভীর পড়ার জন্য প্রশ্নটিকে প্রাসঙ্গিক ধারণা ও নিবন্ধের সঙ্গে যুক্ত করে।',
  assistantHtml:
    'এখানে উত্তর নেই এমন কোনো প্রশ্ন আছে? <a href=\"/aied/ai\">এই নলেজ বেস আপনার নিজের AI সহকারীর সঙ্গে ব্যবহার করুন</a> পৃষ্ঠাটি দেখে আপনার নিজের AI সহকারীকে ব্যবহার করুন, যা দেখায় কীভাবে একটি এজেন্টকে সম্পূর্ণ তালিকার দিকে নির্দেশ করলে ভিত্তিবদ্ধ, উদ্ধৃতিসহ উত্তর পাওয়া যায়।',
  empty: 'এখনও কোনো প্রশ্নোত্তর নেই।',
};

export default bn;
