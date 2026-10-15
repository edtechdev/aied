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

const ur: NotFoundStrings = {
  title: 'صفحہ نہیں ملا',
  h1: 'صفحہ نہیں ملا',
  messageHtml:
    'آپ نے جس صفحے کے لیے پوچھا وہ نہیں مل سکا۔ وہ لنک جو آپ کو یہاں لایا ممکن ہے پرانا ہو، یا صفحے کا نام بدلا گیا ہو۔ آپ <a href=\"/aied/\">ابتدائی صفحے</a> سے دوبارہ آغاز کر سکتے ہیں۔',
  searchHtml:
    'یا نیچے پورے علمی ذخیرے میں تلاش کریں۔ ہر مضمون، تصور، عمومی سوال اور وسیلہ انڈیکس شدہ ہے، اور فلٹر تلاش کو شعبے، درجے، سامعین یا تحقیقی طریقے سے محدود کرتے ہیں۔',
};

export default ur;
