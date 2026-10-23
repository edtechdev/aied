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

const bg: ResourcesStrings = {
  title: 'Ресурси',
  h1: 'Безплатни инструменти и ресурси',
  introHtml: [
    'Подбрана съвкупност от безплатни инструменти, колекции, инструментариуми и формати за AI в образованието: неща, които можете да използвате още днес, а не изследвания, които първо трябва да прочетете. Създадени са предимно от преподаватели, дизайнери на обучение, библиотекари и изследователи, а мнозина са построени с помощта на AI от хора, които не са професионални разработчици.',
    'Не всичко тук е интерактивно. Заедно с браузърни инструменти и AI тутори има библиотеки с готови подкани, колекции от дейности за класната стая, информационни и политически документи, инструменти за оценяване и отворени файлови формати. Всяка позиция води към страница за инструмента, която посочва кой го е направил, какъв вид е, дали изходният код е отворен, какво струва използването му и кога последно е проверена връзката му.',
    'Всяка позиция води към външен сайт, който тази база знания не контролира, и връзките се проверяват периодично; всяка страница показва датата, на която връзката ѝ е потвърдена за последно. Ако даден инструмент се е преместил, е затворен, или го няма, а би трябвало да е тук, <a href="https://github.com/edtechdev/aied/issues" target="_blank" rel="noopener">отворете issue</a> в хранилището.',
  ],
  empty: 'Все още няма ресурси.',
  groupLabels: {
    software: 'Софтуер',
    'ai tutor': 'AI тутори',
    'agent skill': 'Умения за агенти',
    'prompt or gem library': 'Библиотеки с подкани и скъпоценни материали',
    'collection of tools': 'Колекции от инструменти',
    'collection of activities': 'Колекции от дейности',
    'assessment instrument': 'Инструменти за оценяване',
    'open format or specification': 'Отворени формати и спецификации',
    'ebook or guide': 'Електронни книги и ръководства',
    'case study collection': 'Колекции от казуси',
    'dataset or benchmark': 'Набори от данни и еталони',
  },
};

export default bg;
