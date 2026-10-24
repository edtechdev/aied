/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the section headings and blurbs are
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

const bg: ConceptsStrings = {
  title: 'Понятия',
  h1: 'Понятия',
  introHtml:
    'Всички страници с понятия в сайта, в същите раздели като лявата странична лента. Всяка обяснява какво означава една идея в AI и образованието, какво са установили изследванията за нея и на кои проучвания се опира. <a href="/aied/concepts/ai-education/">AI в образованието</a> е чадърът, който ги свързва.',
  browseHtml:
    'Страниците с понятия излизат и като <a href="/aied/aied.epub">EPUB</a> или <a href="/aied/aied.pdf">PDF</a> за четене офлайн. За да започнете вместо това от въпрос, статия, инструмент, търсене или собствения си асистент, вижте <a href="/aied/faq">ЧЗВ</a>, <a href="/aied/journal">дневника</a>, <a href="/aied/resources">ресурсите</a>, <a href="/aied/search">търсенето</a> или <a href="/aied/ai">страницата за AI</a>.',
  countTemplate: '{count} страници с понятия, групирани в {strands} направления.',
  empty: 'Все още няма страници с понятия.',
};

export default bg;
