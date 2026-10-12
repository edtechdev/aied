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

const ar: NotFoundStrings = {
  title: 'الصفحة غير موجودة',
  h1: 'الصفحة غير موجودة',
  messageHtml:
    'لم نتمكن من العثور على الصفحة التي طلبتها. قد يكون الرابط الذي أتيت منه قديمًا، أو قد تكون الصفحة أُعيد تسميتها. يمكنك البدء من جديد من <a href="/aied/">الصفحة الرئيسية</a>.',
  searchHtml:
    'أو ابحث في قاعدة المعارف كاملة أدناه. فهرس البحث يشمل كل مقال ومفهوم وسؤال شائع ومورد، وتتيح عوامل التصفية تضييق البحث حسب التخصص أو المرحلة أو الفئة المستهدفة أو منهج البحث.',
};

export default ar;
