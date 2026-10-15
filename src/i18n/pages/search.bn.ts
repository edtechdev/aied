/**
 * Search page copy, per locale. The filter-bar labels are translated; the facet
 * values that come from the content (disciplines, levels, concept slugs) are
 * content, not chrome, so they stay as authored on the (English) page they
 * describe — the convention for untranslated content.
 */
export interface SearchStrings {
  title: string;
  h1: string;
  intro: string;
  corpusIntro: string;
  placeholder: string;
  filterLabels: {
    page_type: string;
    discipline: string;
    level: string;
    audience: string;
    research_method: string;
    page_kind: string;
  };
}

const bn: SearchStrings = {
  title: 'খোঁজ',
  h1: 'খোঁজ',
  intro: 'নিবন্ধ ও ধারণায় খুঁজুন। ফলাফল সংকুচিত করতে ফিল্টার ব্যবহার করুন।',
  corpusIntro:
    'নলেজ বেসের সবকিছুই খোঁজযোগ্য — প্রশ্নোত্তর এবং বিনামূল্যের টুল ও রিসোর্স পৃষ্ঠাসহ। এতে এখন আছে:',
  placeholder: 'নিবন্ধ, ধারণা ও প্রশ্নোত্তর খুঁজুন...',
  filterLabels: {
    page_type: 'ধরন',
    discipline: 'বিষয়',
    level: 'স্তর',
    audience: 'উদ্দিষ্ট পাঠক',
    research_method: 'গবেষণার নকশা',
    page_kind: 'পৃষ্ঠার ধরন',
  },
};

export default bn;
