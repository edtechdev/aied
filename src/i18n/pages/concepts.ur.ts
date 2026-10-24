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
  empty: 'ابھی کوئی تصوراتی صفحہ موجود نہیں ہے۔',
};

export default ur;
