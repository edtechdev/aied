/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the strand headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const ur: ConceptsStrings = {
  title: 'تصورات',
  h1: 'تصورات',
  introHtml:
    'اس سائٹ کے تمام تصورات کے صفحات، اُنہی حصوں میں جو بائیں بغلی پٹی میں ہیں۔ ہر صفحہ بتاتا ہے کہ AI اور تعلیم کے میدان میں کوئی خیال کیا معنی رکھتا ہے، تحقیق نے اُس کے بارے میں کیا پایا، اور وہ کن تحقیقات پر مبنی ہے۔ <a href="/aied/concepts/ai-education/">تعلیم میں AI</a> وہ چھتری ہے جو اِن سب کو جوڑتی ہے۔',
  browseHtml:
    'تصورات کے صفحات آف لائن پڑھنے کے لیے <a href="/aied/aied.epub">EPUB</a> یا <a href="/aied/aied.pdf">PDF</a> کی صورت میں بھی دستیاب ہیں۔ اگر آپ کسی سوال، مقالے، اوزار، تلاش یا اپنے معاون سے آغاز کرنا چاہیں تو <a href="/aied/faq">عمومی سوالات</a>، <a href="/aied/journal">جریدہ</a>، <a href="/aied/resources">وسائل</a>، <a href="/aied/search">تلاش</a> یا <a href="/aied/ai">AI صفحہ</a> دیکھیں۔',
  countTemplate: '{count} تصورات کے صفحات، جو {strands} حصوں میں ترتیب دیے گئے ہیں۔',
  strandBlurbs: {
    'Foundations of AI in education':
      'خود اِس میدان کا مجموعی منظر: تعلیم میں AI کیا ہے، اِس نے کیسے ارتقا پایا، اور وہ ہمہ گیر موضوعات (AI کی خواندگی، انسان اور AI کا تعاون، فاعلیت) جو ہر دوسرے حصے کو تشکیل دیتے ہیں۔',
    'Learning and instruction':
      'AI سیکھنے اور استادی کو کیسے سہارا دیتا ہے، اُن تدریسی طریقوں، سیکھنے کے نظریات اور سیکھنے والے سے متعلق عمل کے ذریعے جن کے اندر AI کام کرتا ہے۔',
    'Technologies and techniques':
      'تکنیکی پرت: وہ AI ماڈل اور طریقے جو تعلیمی ٹیکنالوجی کو تقویت دیتے ہیں، اور اُن پر استوار سیکھنے والے کی ماڈلنگ اور ٹیوٹرنگ کے نظام۔',
    'AI in the disciplines':
      'AI مختلف تعلیمی مضامین اور تعلیمی سطحوں میں کیسے برتا جاتا ہے: اِس میدان کا موضوعاتی دائرہ کار۔',
    'Assessment and measurement':
      'AI کیسے سیکھنے والوں کی جانچ کرتا ہے اور یہ بھی بدلتا ہے کہ ہم AI کے نظاموں اور اُن کے اثرات کا جائزہ کیسے لیتے ہیں۔',
    'Equity, ethics, and responsible use':
      'مساوات، رسائی اور ذمہ داری تعلیم میں AI کے لیے مرکزی حیثیت رکھتی ہیں۔',
  },
  empty: 'ابھی کوئی تصوراتی صفحہ موجود نہیں ہے۔',
};

export default ur;
