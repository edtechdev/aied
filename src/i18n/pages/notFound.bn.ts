/**
 * Copy for the 404 page (`/aied/404.html`). The page is otherwise the search
 * page, so the only strings it adds are the heading and the two ways out.
 */
export interface NotFoundStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** First paragraph. May contain inline HTML and links. */
  messageHtml: string;
  /** Second paragraph, pointing at the search form below. */
  searchHtml: string;
}

const bn: NotFoundStrings = {
  title: 'পৃষ্ঠা পাওয়া যায়নি',
  h1: 'পৃষ্ঠা পাওয়া যায়নি',
  messageHtml:
    'আপনি যে পৃষ্ঠা চেয়েছেন তা খুঁজে পাওয়া যায়নি। আপনাকে এখানে নেওয়া লিঙ্কটি পুরনো হয়ে যেতে পারে, বা পৃষ্ঠাটির নাম বদলে যেতে পারে। আপনি <a href=\"/aied/\">হোম পেজ</a> থেকে আবার শুরু করতে পারেন।',
  searchHtml:
    'অথবা নিচে পুরো নলেজ বেসে খুঁজুন। প্রতিটি নিবন্ধ, ধারণা, প্রশ্নোত্তর ও রিসোর্স ইনডেক্স করা আছে, আর ফিল্টারগুলো বিষয়, স্তর, পাঠক বা গবেষণা পদ্ধতি অনুযায়ী খোঁজ সংকুচিত করে।',
};

export default bn;
