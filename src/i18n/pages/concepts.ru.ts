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

const ru: ConceptsStrings = {
  title: 'Концепции',
  h1: 'Концепции',
  introHtml:
    'Все страницы концепций на сайте, в тех же разделах, что и в левой боковой панели. Каждая объясняет, что означает та или иная идея в ИИ и образовании, что показали исследования и на какие работы она опирается. <a href="/aied/concepts/ai-education/">ИИ в образовании</a> — общее понятие, которое их связывает.',
  browseHtml:
    'Страницы концепций также выходят в виде <a href="/aied/aied.epub">EPUB</a> или <a href="/aied/aied.pdf">PDF</a> для чтения офлайн. Чтобы начать с вопроса, статьи, инструмента, поиска или собственного ассистента, см. <a href="/aied/faq">FAQ</a>, <a href="/aied/journal">журнал</a>, <a href="/aied/resources">ресурсы</a>, <a href="/aied/search">поиск</a> или <a href="/aied/ai">страницу об ИИ</a>.',
  countTemplate: '{count} страниц концепций, разбитых на {strands} разделов.',
  empty: 'Страниц концепций пока нет.',
};

export default ru;
