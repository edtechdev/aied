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
  introHtml: `<strong>تعلیم میں AI کے علمی ذخیرے</strong> میں خوش آمدید — یہ ایک مفت، عوامی ملکیت کا ذریعہ ہے جو <a href=\"/aied/concepts/ai-education/\">تعلیم میں مصنوعی ذہانت</a> کے بارے میں ہے، اُن لوگوں کے لیے جو اسے پڑھاتے، سیکھتے، ڈیزائن کرتے یا چلاتے ہیں۔ یہ حالیہ آزادانہ دستیاب تحقیق کو مختصر، منظم صفحات میں سمیٹتا ہے جنہیں آپ پڑھ سکتے اور پر عمل آوَر ہو سکتے ہیں۔ بنانے کے طریقے پر ایک نوٹ: صفحات ایک AI ایجنٹ کے ذریعے تیار اور اپ ڈیٹ کیے جاتے ہیں، سائٹ کے بنانے والے کی تحریری رہنمائی کے ساتھ۔ ہر دعویٰ اپنے پیچھے کا مقالہ نامزد کرتا ہے، تاکہ ذرائع کو خود جانچا جا سکے۔`,
  navHeading: 'سائٹ پر گشت',
  navHtml: `بائیں بغلی پٹی میں موضوع وار انڈیکس دیکھیں تاکہ معلوم ہو کہ یہ میدان کیسے ترتیب دیا گیا ہے، یا اگر آپ کے ذہن میں کوئی موضوع پہلے سے ہو تو <a href=\"/aied/search\">پورے علمی ذخیرے میں تلاش</a> کریں۔ مضامین کے صفحات ایک مقالے کو اس کے مقصد، طریقوں اور نتائج میں سمیٹتے ہیں، مکمل حوالے اور متعلقہ کام کے روابط کے ساتھ؛ تصورات کے صفحات ایک خیال کے بارے میں تحقیق کیا کہتی ہے جمع کرتے ہیں اور اُن کے پیچھے کی تحقیقات سے جوڑتے ہیں۔ اگر آپ کسی سوال سے آغاز کرنا چاہیں تو <a href=\"/aied/faq\">عمومی سوالات کا انڈیکس</a> وہ سوال جمع کرتا ہے جو مہمان پہلے پوچھتے ہیں، کورس کی AI پالیسی سے لے کر AI ڈیٹکٹر چلانے تک؛ اور اگر آپ کسی اوزار سے آغاز کرنا چاہیں تو <a href=\"/aied/resources\">وسائل کا صفحہ</a> مفت اوزار، مجموعے اور آلات درج کرتا ہے جنہیں آپ جا کر استعمال کر سکتے ہیں، ہر ایک بتاتا ہے کہ کس نے بنایا اور اُس پر کیا لاگت آتی ہے۔ اوپر تصورات کا نقشہ دکھاتا ہے کہ کیا کس سے جڑا ہے؛ <a href=\"/aied/concepts/ai-education/\">تعلیم میں AI</a> اُس کے پیچھے کا نقشہ صفحہ ہے، جو تصورات کو تقریباً بارہ وسیع موضوعی خاندانوں میں تقسیم کرتا ہے۔`,
  chatHeading: 'علمی ذخیرے سے بات کریں',
  chatHtml: `یہاں کی ہر چیز مشین کے قابلِ مطالعہ فائلوں میں بھی شائع ہے، تاکہ آپ اپنے پسندیدہ AI چیٹ بوٹ یا ایجنٹ کو علمی ذخیرے کی طرف اشارہ کر سکیں اور ایسے جواب پائیں جو اُس سے حوالے دیں بجائے اندازے لگانے کے — <a href=\"/aied/ai\">پرامپٹس یہاں ہیں</a>۔ نئے صفحات <a href=\"/aied/journal\">جریدے</a> میں آتے ہیں، جس میں اگر آپ ساتھ چلنا چاہیں تو <a href=\"/aied/rss.xml\">RSS فیڈ</a> بھی ہے۔ آف لائن مطالعے کے لیے <a href=\"/aied/aied.epub\">EPUB</a> یا <a href=\"/aied/aied.pdf\">PDF</a> لیں۔`,
  startingHeading: 'سامعین کے حساب سے تجویز کردہ آغاز',
  startingIntro: 'نیچے اس علمی ذخیرے میں آغاز کے لیے کچھ تجویز کردہ تصورات دیے گئے ہیں۔',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'بنیادی تصورات',
      html: `<a href=\"/aied/concepts/ai-literacy/\">AI سے آگاہی</a>، <a href=\"/aied/concepts/misconceptions/\">AI کے بارے میں غلط فہمیاں</a>، <a href=\"/aied/concepts/agentic-ai/\">ایجینٹک AI</a>، <a href=\"/aied/concepts/cognitive-offloading/\">علمی بوجھ اتارنا</a>، اور <a href=\"/aied/concepts/interpreting-and-applying-aied-research/\">اس تحقیق کو کیسے سمجھیں اور لاگو کریں</a>: نتائج کیا کہہ سکتے ہیں اور کیا نہیں، اور ایک واحد مطالعہ اکثر کسی سوال کو فیصلہ کن کیوں نہیں کرتا۔`,
    },
    {
      id: 'instructors',
      heading: 'اساتذہ',
      html: `<a href=\"/aied/concepts/teacher-role/\">تبدیل ہوتا پڑھانے کا کردار</a>، <a href=\"/aied/concepts/learning-design/\">سیکھنے کا ڈیزائن</a>، <a href=\"/aied/concepts/assessment/\">جانچ</a>، <a href=\"/aied/concepts/feedback/\">تغذیہِ راجعہ</a>، <a href=\"/aied/concepts/academic-integrity/\">تعلیمی دیانتداری</a>، <a href=\"/aied/concepts/framing-ai-use-for-students/\">AI کے استعمال کو فریم کرنا</a> اور <a href=\"/aied/concepts/reducing-ai-misuse/\">بداستعمالی کم کرنا</a>۔ اپنے شعبے کے اوزار، شواہد اور مثالیں دیکھنے کے لیے <a href=\"/aied/concepts/discipline-specific-aied/\">اپنے شعبے میں AI</a>۔`,
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
    'یہاں ہر صفحہ تاریخ شدہ ہے، اور علمی ذخیرہ تب بڑھتا ہے جب نئی آزادانہ دستیاب تحقیقی تحریریں شائع اور جانچی جاتی ہیں۔ نیچے دیے گئے شمار موجودہ مواد سے پڑھے جاتے ہیں؛ تاریخ حالیہ ترین صفحے کی اپ ڈیٹ ہے۔',
  conceptMap: {
    title: 'تعلیم میں AI کا تصوراتی نقشہ',
    desc:
      'ایک شعاعی نقشہ جس کے مرکز میں تعلیم میں AI ہے، بارہ اعلیٰ تصورات سے جڑا ہوا: ' +
      'نمائندگی، سیکھنا، مساوات، تغذیہِ راجعہ، AI سے آگاہی، جانچ، شعبے، تدریسیات، ' +
      'اخلاق، ٹیکنالوجیز، جائزہ، اور تحقیق۔ کسی بھی نوڈ کو منتخب کریں تاکہ اُس کا صفحہ کھل جائے۔',
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
