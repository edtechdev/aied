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

const ur: HomeStrings = {
  title: 'ابتدائی صفحہ',
  h1: 'تعلیم میں AI کا علمی ذخیرہ',
  introHtml: `تعلیم میں AI کے علمی ذخیرے میں خوش آمدید، یہ ایک مفت، عوامی ملکیت کا ذریعہ ہے جو <a href=\"/aied/concepts/ai-education/\">تعلیم میں مصنوعی ذہانت</a> کے بارے میں ہے، اُن لوگوں کے لیے جو اسے پڑھاتے، سیکھتے، ڈیزائن کرتے یا چلاتے ہیں۔ یہ حالیہ آزادانہ دستیاب تعلیمی تحقیق کا خلاصہ اور ترکیب پیش کرتا ہے۔ صفحات ایک AI ایجنٹ لکھتا اور اپ ڈیٹ کرتا ہے، سائٹ کے بنانے والے کی تحریری رہنمائی کے ساتھ۔`,
  navHeading: 'سائٹ پر گشت',
  navHtml: `بائیں بغلی پٹی میں انڈیکس دیکھیں، جو موضوع وار ترتیب دیا گیا ہے، یا کسی موضوع کے لیے <a href=\"/aied/search\">تلاش</a> کریں۔ مضامین کے صفحات ایک مقالے کو اس کے مقصد، طریقوں اور نتائج میں سمیٹتے ہیں؛ تصورات کے صفحات ایک خیال کے بارے میں تحقیق کیا کہتی ہے جمع کرتے ہیں اور اُن کے پیچھے کی تحقیقات سے جوڑتے ہیں۔ سوال سے آغاز کے لیے <a href=\"/aied/faq\">عمومی سوالات</a> وہ پہلے پوچھے جانے والے سوالات سمیٹتے ہیں، جیسے کورس کی AI پالیسی یا یہ کہ AI ڈیٹکٹر چلانا چاہیے یا نہیں۔ اوزار سے آغاز کے لیے <a href=\"/aied/resources\">وسائل کا صفحہ</a> مفت اوزار اور مجموعے درج کرتا ہے، ہر ایک کے بنانے والے اور لاگت کے ساتھ۔ اوپر کا نقشہ اس میدان کو بارہ موضوعی خاندانوں میں تقسیم کرتا ہے، جس کا مرکزی نوڈ <a href=\"/aied/concepts/ai-education/\">تعلیم میں AI</a> ہے۔`,
  chatHeading: 'علمی ذخیرے سے بات کریں',
  chatHtml: `پورا علمی ذخیرہ مشین کے قابلِ مطالعہ فائلوں میں بھی شائع ہے، تاکہ آپ کوئی AI چیٹ بوٹ یا ایجنٹ اُس کی طرف اشارہ کر سکیں اور ایسے جواب پائیں جو صفحات کا حوالہ دیں۔ <a href=\"/aied/ai\">پرامپٹس یہاں ہیں</a>۔ نئے صفحات <a href=\"/aied/journal\">جریدے</a> میں جاتے ہیں، جس میں <a href=\"/aied/rss.xml\">RSS فیڈ</a> ہے۔ آف لائن پڑھنے کے لیے <a href=\"/aied/aied.epub\">EPUB</a> یا <a href=\"/aied/aied.pdf\">PDF</a> ڈاؤن لوڈ کریں۔`,
  startingHeading: 'سامعین کے حساب سے تجویز کردہ آغاز',
  startingIntro: 'اُس گروپ سے شروع کریں جو آپ کے کردار سے مطابقت رکھتا ہے۔',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'بنیادی تصورات',
      html: `<a href=\"/aied/concepts/ai-literacy/\">AI سے آگاہی</a>، <a href=\"/aied/concepts/misconceptions/\">AI کے بارے میں غلط فہمیاں</a>، <a href=\"/aied/concepts/agentic-ai/\">ایجینٹک AI</a>، <a href=\"/aied/concepts/cognitive-offloading/\">علمی بوجھ اتارنا</a>، اور <a href=\"/aied/concepts/interpreting-and-applying-aied-research/\">اس تحقیق کو کیسے سمجھیں اور لاگو کریں</a>، بشمول یہ کہ ایک واحد مطالعہ اکثر کسی سوال کا فیصلہ کیوں نہیں کرتا۔`,
    },
    {
      id: 'instructors',
      heading: 'اساتذہ',
      html: `<a href=\"/aied/concepts/teacher-role/\">تبدیل ہوتا پڑھانے کا کردار</a>، <a href=\"/aied/concepts/learning-design/\">سیکھنے کا ڈیزائن</a>، <a href=\"/aied/concepts/assessment/\">جانچ</a>، <a href=\"/aied/concepts/feedback/\">تغذیہِ راجعہ</a>، <a href=\"/aied/concepts/academic-integrity/\">تعلیمی دیانتداری</a>، <a href=\"/aied/concepts/framing-ai-use-for-students/\">AI کے استعمال کو فریم کرنا</a> اور <a href=\"/aied/concepts/reducing-ai-misuse/\">بداستعمالی کم کرنا</a>۔ اپنے مضمون کے مخصوص اوزار اور مثالوں کے لیے <a href=\"/aied/concepts/discipline-specific-aied/\">اپنے شعبے میں AI</a> دیکھیں۔`,
    },
    {
      id: 'developers',
      heading: 'تیار کنندگان',
      html: `<a href=\"/aied/concepts/educational-technology-developers/\">تعلیم کے لیے بنانا</a>، <a href=\"/aied/concepts/ai-technologies/\">اُن کے نیچے کی ٹیکنالوجیز</a>، <a href=\"/aied/concepts/intelligent-tutoring/\">ذہین استاد</a>، <a href=\"/aied/concepts/multimodal/\">ملٹی ماڈل AI</a>، <a href=\"/aied/concepts/student-modeling/\">سیکھنے والوں کی نمائندگی</a>، اور <a href=\"/aied/concepts/llm-training-and-fine-tuning/\">پڑھانے کے لیے ماڈل کی تربیت اور موافقت</a>۔`,
    },
    {
      id: 'administrators',
      heading: 'منتظمین',
      html: `<a href=\"/aied/concepts/administrator/\">منتظم کا کردار</a>، <a href=\"/aied/concepts/governance/\">AI کا گورننس</a>، <a href=\"/aied/concepts/educational-policy-ai/\">ادارتی پالیسی</a>، <a href=\"/aied/concepts/legal-issues-and-risks/\">قانونی مسائل اور خطرات</a>، اور <a href=\"/aied/concepts/change-management/\">تبدیلی کا انتظام</a>۔`,
    },
    {
      id: 'researchers',
      heading: 'محققین',
      html: `<a href=\"/aied/concepts/research-methods-aied/\">AIED میں تحقیقی طریقے</a>، <a href=\"/aied/concepts/theories-and-frameworks/\">نظریات اور فریم ورک</a>، <a href=\"/aied/concepts/ai-ed-evaluation/\">تعلیمی AI مداخلت کا جائزہ</a>، <a href=\"/aied/concepts/educational-measurement/\">تعلیمی پیمائش</a>، <a href=\"/aied/concepts/learning-gains/\">سیکھنے کی افزودگی کی پیمائش</a>، اور <a href=\"/aied/concepts/limitations-in-aied-research/\">اس شواہد کی بنیاد کی جامع حدود</a>۔`,
    },
  ],
  statsHeading: 'علمی ذخیرے میں کیا ہے',
  statsIntro:
    'ہر صفحہ تاریخ شدہ ہے، اور نیچے دیے گئے شمار بتاتے ہیں کہ ابھی کیا شائع ہے؛ فہرست کے آخر میں ”آخری اپ ڈیٹ“ کی تاریخ حالیہ ترین ترمیم ہے۔',
  conceptMap: {
    title: 'تعلیم میں AI کا تصوراتی نقشہ',
    desc:
      'ایک شعاعی نقشہ جس کے مرکز میں تعلیم میں AI ہے، بارہ اعلیٰ تصورات سے جڑا ہوا: ' +
      'نمائندگی، سیکھنا، مساوات، تغذیہِ راجعہ، AI سے آگاہی، جانچ، شعبے، تدریسیات، ' +
      'اخلاق، ٹیکنالوجیز، جائزہ، اور تحقیق۔',
    navLabel: 'تعلیم میں AI کے تصورات',
    center: 'تعلیم میں AI',
    nodes: {
      'student-modeling': 'نمائندگی',
      'learning-theories': 'سیکھنا',
      'equity-in-ai-education': 'مساوات',
      feedback: 'تغذیہِ راجعہ',
      'ai-literacy': 'AI سے آگاہی',
      assessment: 'جانچ',
      'discipline-specific-aied': 'شعبے',
      pedagogy: 'تدریسیات',
      ethics: 'اخلاق',
      'ai-technologies': 'ٹیکنالوجیز',
      'ai-ed-evaluation': 'جائزہ',
      'research-methods-aied': 'تحقیق',
    },
  },
  toc: [
    { text: 'سائٹ پر گشت', slug: 'navigating-the-site', depth: 2 },
    { text: 'علمی ذخیرے سے بات کریں', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'سامعین کے حساب سے تجویز کردہ آغاز', slug: 'starting-points', depth: 2 },
    { text: 'بنیادی تصورات', slug: 'essential-concepts', depth: 3 },
    { text: 'اساتذہ', slug: 'instructors', depth: 3 },
    { text: 'تیار کنندگان', slug: 'developers', depth: 3 },
    { text: 'منتظمین', slug: 'administrators', depth: 3 },
    { text: 'محققین', slug: 'researchers', depth: 3 },
    { text: 'علمی ذخیرے میں کیا ہے', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default ur;
