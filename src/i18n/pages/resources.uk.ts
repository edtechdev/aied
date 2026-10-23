/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const uk: ResourcesStrings = {
  title: 'Ресурси',
  h1: 'Безкоштовні інструменти та ресурси',
  introHtml: [
    'Вибрана збірка безкоштовних інструментів, колекцій, інструментаріїв і форматів для ШІ в освіті: речей, якими можна скористатися вже сьогодні, а не досліджень, які спершу треба читати. Більшість із них створили педагоги, інструкційні дизайнери, бібліотекарі й дослідники, і багато з них було побудовано за допомогою ШІ людьми, які не є професійними розробниками.',
    'Не все тут інтерактивне. Поряд із браузерними інструментами та ШІ-репетиторами є бібліотеки готових підказок, збірки класних занять, інформаційні та політичні документи, інструменти оцінювання та відкриті формати файлів. Кожен запис посилається на сторінку про інструмент: хто його створив, що це за річ, чи відкритий вихідний код, скільки коштує використання і коли посилання востаннє перевіряли.',
    'Кожен запис посилається на зовнішній сайт, яким ця база знань не керує, і посилання періодично перевіряються; на кожній сторінці вказано дату останнього підтвердження посилання. Якщо інструмент переїхав, закрився або має тут бути, але відсутній, <a href="https://github.com/edtechdev/aied/issues" target="_blank" rel="noopener">відкрийте звернення</a> у репозиторії.',
  ],
  empty: 'Ще немає ресурсів.',
  groupLabels: {
    software: 'Програмне забезпечення',
    'ai tutor': 'ШІ-репетитори',
    'agent skill': 'Навички агентів',
    'prompt or gem library': 'Бібліотеки підказок і елементів gem',
    'collection of tools': 'Збірки інструментів',
    'collection of activities': 'Збірки занять',
    'assessment instrument': 'Інструменти оцінювання',
    'open format or specification': 'Відкриті формати та специфікації',
    'ebook or guide': 'Електронні книги та посібники',
    'case study collection': 'Збірки кейсів',
    'dataset or benchmark': 'Набори даних і бенчмарки',
  },
};

export default uk;
