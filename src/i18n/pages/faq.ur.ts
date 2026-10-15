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

const ur: FaqStrings = {
  title: 'عمومی سوالات',
  h1: 'اکثر پوچھے گئے سوالات',
  introHtml:
    'یہ حصہ <strong>تعلیم میں AI</strong> کے بارے میں عام سوالات کے جواب دیتا ہے — تحقیق AI کا پڑھانے اور سیکھنے پر کیا اثر ہوتا ہے یہ کہتی ہے، اور اساتذہ، مدرّسین اور تعلیمی ڈیزائنر وہ شواہد عملی جامہ کیسے پہنا سکتے ہیں۔ ہر جواب اس علمی ذخیرے میں خلاصہ کی گئی تحقیق سے نتائج کو سمیٹتا ہے، گہری قراءت کے لیے سوال کو متعلقہ تصورات اور مضامین سے جوڑتا ہے۔',
  assistantHtml:
    'کوئی سوال جس کا جواب یہاں نہیں؟ اپنے AI معاون سے <a href=\"/aied/ai\">اس علمی ذخیرے کو اپنے AI معاون کے ساتھ استعمال کریں</a> صفحے کے ذریعے پوچھیں، جو دکھاتا ہے کہ زمینی، حوالہ دار جوابات کے لیے کسی ایجنٹ کو مکمل فہرست کی طرف کیسے اشارہ کریں۔',
  empty: 'ابھی کوئی عمومی سوال موجود نہیں۔',
};

export default ur;
