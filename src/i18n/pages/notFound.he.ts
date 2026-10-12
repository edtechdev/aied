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

const he: NotFoundStrings = {
  title: 'העמוד לא נמצא',
  h1: 'העמוד לא נמצא',
  messageHtml:
    'לא הצלחנו למצוא את העמוד שביקשתם. ייתכן שהקישור שממנו הגעתם אינו עדכני, או שהעמוד קיבל שם חדש. אפשר להתחיל מחדש מ<a href="/aied/">העמוד הראשי</a>.',
  searchHtml:
    'או לחפש בכל מאגר הידע להלן. כל מאמר, מושג, שאלה נפוצה ומשאב כלולים באינדקס, ומסנני החיפוש מצרים חיפוש לפי מקצוע, שלב, קהל או שיטת מחקר.',
};

export default he;
