/**
 * Copy for the journal page (`/aied/journal`): a reverse-chronological index of
 * everything added to the knowledge base. The entries come from the content
 * collections; the counts, labels and RSS line are here.
 */
import type { JournalStrings } from './journal.en';

const he: JournalStrings = {
  title: 'יומן',
  h1: 'יומן',
  introTemplate:
    'אינדקס בסדר כרונולוגי הפוך של כל המאמרים ({articles}), המושגים ({concepts}), השאלות הנפוצות ({faqs}) והמשאבים ({resources}) במאגר הידע. {rss}',
  rssLabel: 'הירשמו לפיד ה-RSS כדי לקבל את התוספות האחרונות.',
  pageSingular: 'עמוד',
  pagePlural: 'עמודים',
};

export default he;