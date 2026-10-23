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

const ur: ResourcesStrings = {
  title: 'وسائل',
  h1: 'مفت اوزار اور وسائل',
  introHtml: [
    'تعلیم میں AI کے لیے مفت اوزار، مجموعے، آلات اور فارمیٹ کا ایک منتخب مجموعہ: ایسی چیزیں جو آپ آج استعمال کر سکتے ہیں، نہ کہ ایسی تحقیق جو پہلے پڑھنی پڑے۔ یہ زیادہ تر اساتذہ، تعلیمی ڈیزائنرز، لائبریرینز اور محققین نے بنائی ہیں، اور بہت سی اُن لوگوں نے AI کی مدد سے بنائی ہیں جو پیشہ ور تیار کنندگان نہیں ہیں۔',
    'یہاں کی ہر چیز تفاعلی نہیں ہے۔ براؤزر اوزار اور AI اساتذہ کے ساتھ تیار پرامپٹس کے کتب خانے، کلاس روم سرگرمیوں کے مجموعے، مختصر اور پالیسی دستاویزات، جانچ کے آلات، اور کھلے فائل فارمیٹ موجود ہیں۔ ہر اندراج اُس اوزار کے بارے میں ایک صفحے سے جڑتا ہے: اُسے کس نے بنایا، یہ کس قسم کی چیز ہے، کیا سورس کوڈ کھلا ہے، اُس پر کتنی لاگت آتی ہے، اور اُس کے لنک کی آخری تصدیق کب ہوئی۔',
    'ہر اندراج کسی بیرونی سائٹ سے جڑتا ہے جس پر اس علمی ذخیرے کا کنٹرول نہیں، اور لنکس معیاری وقفوں پر جانچے جاتے ہیں؛ ہر صفحہ وہ تاریخ دکھاتا ہے جب اُس کے لنک کی آخری بار تصدیق ہوئی۔ اگر کوئی اوزار منتقل ہو گیا، بند ہو گیا، یا یہاں ہونا چاہیے اور موجود نہیں، تو ذخیرے پر <a href="https://github.com/edtechdev/aied/issues" target="_blank" rel="noopener">ایک ایشو کھولیں</a>۔',
  ],
  empty: 'ابھی کوئی وسیلہ موجود نہیں۔',
  groupLabels: {
    software: 'سافٹ ویئر',
    'ai tutor': 'AI اساتذہ',
    'agent skill': 'ایجنٹ مہارتیں',
    'prompt or gem library': 'پرامپٹ اور Gem کے کتب خانے',
    'collection of tools': 'اوزار کے مجموعے',
    'collection of activities': 'سرگرمیوں کے مجموعے',
    'assessment instrument': 'جانچ کے آلات',
    'open format or specification': 'کھلے فارمیٹ اور تعیناتی',
    'ebook or guide': 'ای کتابیں اور رہنما تحریریں',
    'case study collection': 'مطالعے کے مجموعے',
    'dataset or benchmark': 'ڈیٹا سیٹ اور بینچ مارک',
  },
};

export default ur;
