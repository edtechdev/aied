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
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
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
  strandBlurbs: {
    'Foundations of AI in education':
      'Цялостният поглед към самата област: какво е AI в образованието, как се разви и междинните теми (AI грамотност, сътрудничество между човека и AI, агентност), които оформят всяко друго направление.',
    'Learning and instruction':
      'Как AI подпомага ученето и преподаването чрез педагогическите подходи, теориите на обучението и процесите, насочени към учащите се, в които AI действа.',
    'Technologies and techniques':
      'Техническият слой: моделите и методите на AI, които захранват образователните технологии, и изградените върху тях системи за моделиране на учащите се и за индивидуално обучение.',
    'AI in the disciplines':
      'Как AI се прилага в академичните дисциплини и на различните образователни нива: обхватът на предметните области, които полето покрива.',
    'Assessment and measurement':
      'Как AI едновременно оценява учащите се и преобразува начина, по който оценяваме AI системите и тяхното въздействие.',
    'Equity, ethics, and responsible use':
      'Равнопоставието, достъпът и отговорността са в центъра на AI в образованието.',
  },
  empty: 'Все още няма страници с понятия.',
};

export default bg;
