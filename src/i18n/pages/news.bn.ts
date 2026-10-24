/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Spanish visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
export interface NewsStrings {
  /** <title> and the page heading. The newsletter's name, printed verbatim. */
  title: string;
  /** Meta description. */
  description: string;
  /** What the newsletter is and who it is for. May contain inline HTML. */
  introHtml: string;
  /** The two feeds, and how they differ. May contain inline HTML. */
  feedsHtml: string;
  /** How to get the newsletter by email, through a feed-to-email service. */
  emailHtml: string;
  /** How to follow the newsletter on LinkedIn. May contain inline HTML. */
  linkedinHtml: string;
  /** Shown when no issue is published. */
  empty: string;
  /** Back-link on an issue page. */
  allIssues: string;
  /** Accessible name of the previous/next issue navigation. */
  otherIssuesAria: string;
  /** Previous/next issue links. `{issue}` is the issue number. */
  issueLabel: string;
}

const bn: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'শিক্ষায় কৃত্রিম বুদ্ধিমত্তা নলেজ বেসের সাপ্তাহিক নিউজলেটার: নতুন গবেষণা শিক্ষক, ডেভেলপার, গবেষক ও প্রশাসকদের জন্য কী বোঝায়।',
  introHtml:
    '<a href="/aied/">শিক্ষায় কৃত্রিম বুদ্ধিমত্তা নলেজ বেস</a> থেকে সাপ্তাহিক সংক্ষিপ্তসার, সপ্তাহে প্রকাশিত নতুন গবেষণা শিক্ষক, ডেভেলপার, গবেষক ও প্রশাসকদের জন্য কী বোঝায় তা নিয়ে। প্রতিটি সংখ্যা প্রতিটি দাবির পেছনের গবেষণাপত্রে লিঙ্ক দেয়, আর নিচের অভ্যন্তরীণ কাজ সাইটেই কী বদলেছে তা অনুসরণ করে।',
  feedsHtml:
    'এটি বহন করে দুটি RSS ফিড। <a href="/aied/news/rss.xml">নিউজলেটার ফিড</a> শুধু সংখ্যাগুলো রাখে, সপ্তাহে একটি এন্ট্রি। <a href="/aied/rss.xml">নলেজ বেস ফিড</a> প্রতিটি নতুন নিবন্ধের সারসংক্ষেপ যোগ হওয়ামাত্র রাখে, যা একই উপাদান যেখান থেকে সংখ্যাগুলো নেওয়া হয়, তবে অনেক বেশি হারে।',
  emailHtml:
    'প্রতিটি সংখ্যা ইমেইলে পেতে নিউজলেটার ফিডটি <a href="https://blogtrottr.com/">Blogtrottr</a> নামের বিনামূল্যের তৃতীয় পক্ষের পরিষেবায় পেস্ট করুন, যা আপনার বেছে নেওয়া সময়সূচি অনুযায়ী ফিডটি আপনার ইনবক্সে পাঠায়। এর বার্তাগুলোতে বিজ্ঞাপন থাকে।',
  linkedinHtml:
    'এছাড়া <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928">LinkedIn</a>-এও এটি অনুসরণ করতে পারেন, যেখানে প্রতিটি সংখ্যা আপনার ফিডে LinkedIn নিউজলেটার হিসেবে প্রকাশিত হয়।',
  empty: 'এখনো কোনো সংখ্যা প্রকাশিত হয়নি।',
  allIssues: 'সব সংখ্যা',
  otherIssuesAria: 'অন্য সংখ্যা',
  issueLabel: 'সংখ্যা {issue}',
};

export default bn;
