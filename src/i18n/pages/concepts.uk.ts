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

const uk: ConceptsStrings = {
  title: 'Концепції',
  h1: 'Концепції',
  introHtml:
    "Усі сторінки концепцій на сайті, у тих самих розділах, що й ліва бічна панель. Кожна з них розповідає, що означає певна ідея в ШІ та освіті, що про неї встановили дослідження і на які дослідження вона спирається. <a href=\"/aied/concepts/ai-education/\">ШІ в освіті</a> — це парасолькове поняття, яке об'єднує їх усі.",
  browseHtml:
    "Сторінки концепцій також виходять як <a href=\"/aied/aied.epub\">EPUB</a> або <a href=\"/aied/aied.pdf\">PDF</a> для читання офлайн. Щоб натомість почати з питання, статті, інструменту, пошуку чи власного помічника, дивіться <a href=\"/aied/faq\">поширені питання</a>, <a href=\"/aied/journal\">журнал</a>, <a href=\"/aied/resources\">ресурси</a>, <a href=\"/aied/search\">пошук</a> або <a href=\"/aied/ai\">сторінку про ШІ</a>.",
  countTemplate: '{count} сторінок концепцій, згрупованих у {strands} напрямів.',
  empty: 'Сторінок концепцій ще немає.',
};

export default uk;
