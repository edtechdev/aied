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
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
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
  strandBlurbs: {
    'Foundations of AI in education':
      "Загальний огляд самого поля: що таке ШІ в освіті, як він розвивався, і наскрізні теми (ШІ-грамотність, співпраця людини зі ШІ, суб'єктність), які формують кожен інший напрям.",
    'Learning and instruction':
      'Як ШІ підтримує навчання та викладання через педагогічні підходи, теорії навчання й орієнтовані на учня процеси, у яких він працює.',
    'Technologies and techniques':
      'Технічний рівень: моделі й методи ШІ, на яких тримається освітня технологія, та системи моделювання учня й тьюторські системи, збудовані на них.',
    'AI in the disciplines':
      'Як ШІ застосовують у навчальних предметах і на різних рівнях освіти: те, які предметні галузі охоплює це поле.',
    'Assessment and measurement':
      'Як ШІ і оцінює тих, хто навчається, і змінює те, як ми оцінюємо системи ШІ та їхній вплив.',
    'Equity, ethics, and responsible use':
      'Справедливість, доступ і відповідальність мають центральне значення для ШІ в освіті.',
  },
  empty: 'Сторінок концепцій ще немає.',
};

export default uk;
