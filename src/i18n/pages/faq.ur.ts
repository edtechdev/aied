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

const ur: FaqStrings = {
  title: 'عمومی سوالات',
  h1: 'اکثر پوچھے گئے سوالات',
  introHtml:
    'یہ حصہ <strong>تعلیم میں AI</strong> کے بارے میں عام سوالات کے جواب دیتا ہے — تحقیق AI کا پڑھانے اور سیکھنے پر کیا اثر ہوتا ہے یہ کہتی ہے، اور اساتذہ، مدرّسین اور تعلیمی ڈیزائنر وہ شواہد عملی جامہ کیسے پہنا سکتے ہیں۔ ہر جواب اس علمی ذخیرے میں خلاصہ کی گئی تحقیق سے نتائج کو سمیٹتا ہے، گہری قراءت کے لیے سوال کو متعلقہ تصورات اور مضامین سے جوڑتا ہے۔',
  assistantHtml:
    'کوئی سوال جس کا جواب یہاں نہیں؟ اپنے AI معاون سے <a href=\"/aied/ai\">اس علمی ذخیرے کو اپنے AI معاون کے ساتھ استعمال کریں</a> صفحے کے ذریعے پوچھیں، جو دکھاتا ہے کہ زمینی، حوالہ دار جوابات کے لیے کسی ایجنٹ کو مکمل فہرست کی طرف کیسے اشارہ کریں۔',
  empty: 'ابھی کوئی عمومی سوال موجود نہیں۔',
  sectionHeadings: {
    "Start here": "یہاں سے شروع کریں",
    "Course and institutional policy": "کورس اور ادارہ جاتی پالیسی",
    "Designing courses and activities": "کورس اور سرگرمیوں کا ڈیزائن",
    "Assessment, feedback and integrity": "جائزہ، فیڈبیک اور سالمیت",
    "How students learn and use AI": "طلبہ کا سیکھنا اور AI کا استعمال",
    "Particular learners, access and wellbeing": "خاص طلبہ، رسائی اور بہبود",
    "Careers and AI literacy": "کیریئر اور AI لیٹریسی",
    "Building and evaluating educational AI": "تعلیمی AI: تعمیر اور جانچ",
    "Research practice": "تحقیقی عمل",
  },
  sectionBlurbs: {
    "Start here": "دو وسیع سوالات جو مخصوص سوالات سے پہلے پڑھنے کے قابل ہیں، چاہے آپ کسی بھی کردار میں ہوں۔",
    "Course and institutional policy": "اُن اساتذہ کے لیے جو وہ قواعد لکھتے ہیں جو طلبہ پڑھیں گے، اور اُن منتظمین اور اساتذہ کی ترقی کے ماہرین کے لیے جو انھیں پروگرام کی سطح پر طے کرتے ہیں۔",
    "Designing courses and activities": "ہر اُس شخص کے لیے جو فیصلہ کرتا ہے کہ AI کسی کام، سمسٹر یا آن لائن کورس میں کہاں داخل ہو، اور اُن اساتذہ کے لیے جو وہ وقت واپس چاہتے ہیں جو AI کو اُنھیں دینا تھا۔",
    "Assessment, feedback and integrity": "سب سے بڑا گروہ، کیونکہ یہیں شواہد سب سے واضح ہیں اور یہیں نتائج طالب علم کے ریکارڈ پر پڑتے ہیں۔",
    "How students learn and use AI": "اُن سوالات کے لیے کہ طلبہ واقعی کیا حاصل کرتے ہیں، کیا کھونے کا خطرہ رکھتے ہیں، اور سیکھنے کو اُن کے پاس کیسے رکھا جائے۔",
    "Particular learners, access and wellbeing": "اُن اساتذہ اور معاون عملے کے لیے جو ڈیزائن کو اُس کے مطابق ڈھالتے ہیں جو واقعی کلاس میں موجود ہے، اور اُن منتظمین کے لیے جو سوچتے ہیں کہ کون موجود نہیں۔",
    "Careers and AI literacy": "نصاب ڈیزائنرز اور پروگرام سربراہوں کے لیے جو اُن طلبہ کا جواب دیتے ہیں جو پوچھتے ہیں کہ یہ سب کس لیے ہے۔",
    "Building and evaluating educational AI": "اُن ڈویلپرز، تدریسی ڈیزائنرز اور محققین کے لیے جو کوئی ٹیوٹر، سمیولیٹر یا پلیٹ فارم کسی حقیقی کورس میں اتارتے ہیں۔",
    "Research practice": "اُن محققین کے لیے جو اس شعبے میں کام کی رپورٹنگ، جانچ یا منصوبہ بندی کرتے ہیں۔",
  },
};

export default ur;
