/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Hebrew visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
import type { NewsStrings } from './news.en';

const he: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'העלון השבועי של מאגר הידע לבינה מלאכותית בחינוך: מה משמעות המחקר החדש למלמדים, למפתחים, לחוקרים ולמנהלים.',
  introHtml:
    'סקירה שבועית מ<a href="/aied/">מאגר הידע לבינה מלאכותית בחינוך</a>, על מה שמשמעות המחקר החדש שפורסם בשבוע למלמדים, למפתחים, לחוקרים ולמנהלים. כל גיליון מקשר למאמר שעומד מאחורי כל טענה, והעבודה הפנימית בתחתית עוקבת אחרי מה שהשתנה באתר עצמו.',
  feedsHtml:
    'שני פידי RSS נושאים אותו. <a href="/aied/news/rss.xml">פיד העלון</a> מכיל רק את הגיליונות, רשומה אחת בשבוע. <a href="/aied/rss.xml">פיד מאגר הידע</a> מכיל כל תקציר מאמר חדש עם הוספתו, אותו חומר שממנו נבנים הגיליונות, בקצב גבוה בהרבה.',
  emailHtml:
    'כדי לקבל כל גיליון בדואר אלקטרוני, הדביקו את פיד העלון ב<a href="https://blogtrottr.com/">Blogtrottr</a>, שירות צד שלישי חינמי ששולח פיד לתיבת הדואר שלכם בקצב שתבחרו. ההודעות שלו כוללות פרסומות.',
  linkedinHtml:
    'אפשר גם לעקוב אחריו ב<a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928">LinkedIn</a>, שם כל גיליון מתפרסם כניוזלטר של LinkedIn בפיד שלכם.',
  empty: 'עדיין לא פורסמו גיליונות.',
  allIssues: 'כל הגיליונות',
  otherIssuesAria: 'גיליונות אחרים',
  issueLabel: 'גיליון {issue}',
};

export default he;
