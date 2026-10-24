/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so an Urdu visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
import type { NewsStrings } from './news.en';

const ur: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'تعلیم میں AI کے علمی ذخیرے کا ہفتہ وار نیوز لیٹر: نئی تحقیق کا اساتذہ، ڈویلپرز، محققین اور منتظمین کے لیے کیا مطلب ہے۔',
  introHtml:
    'تعلیم میں AI کے <a href="/aied/">علمی ذخیرے</a> کی جانب سے ہفتہ وار خلاصہ، اس بارے میں کہ ہفتے کے دوران شائع ہونے والی نئی تحقیق کا اساتذہ، ڈویلپرز، محققین اور منتظمین کے لیے کیا مطلب ہے۔ ہر شمارہ ہر دعوے کے پیچھے موجود مقالے کا ربط دیتا ہے، اور نیچے اندرونی کام یہ دکھاتا ہے کہ خود سائٹ پر کیا بدلا۔',
  feedsHtml:
    'اسے دو RSS فیڈز پہنچاتی ہیں۔ <a href="/aied/news/rss.xml">نیوز لیٹر فیڈ</a> میں صرف شمارے ہوتے ہیں، ہفتے میں ایک اندراج۔ <a href="/aied/rss.xml">علمی ذخیرے کی فیڈ</a> میں ہر نیا مقالہ خلاصہ شامل ہوتے ہی آتا ہے، یعنی وہی مواد جس سے شمارے تیار ہوتے ہیں، مگر کہیں زیادہ رفتار سے۔',
  empty: 'ابھی کوئی شمارہ شائع نہیں ہوا۔',
  allIssues: 'تمام شمارے',
  otherIssuesAria: 'دیگر شمارے',
  issueLabel: 'شمارہ {issue}',
};

export default ur;
