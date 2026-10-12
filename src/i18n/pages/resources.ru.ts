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

const ru: ResourcesStrings = {
  title: 'Ресурсы',
  h1: 'Бесплатные инструменты и ресурсы',
  introHtml: [
    'Подборка <strong>бесплатных инструментов, коллекций, измерительных инструментов и форматов</strong> для ИИ в образовании — то, чем можно воспользоваться уже сегодня, а не исследования, которые сначала нужно прочитать. Их создают в основном преподаватели, педагоги-дизайнеры, библиотекари и исследователи, и многие из них сделаны при поддержке ИИ людьми, которые не являются профессиональными разработчиками.',
    'Здесь не всё интерактивно. Наряду с инструментами, работающими в браузере, и репетиторами на базе ИИ вы найдёте библиотеки готовых промптов и \"gems\", подборки занятий для класса, информационные и политические документы, инструменты оценивания и открытые форматы файлов. Каждая запись — краткое описание, ведущее на страницу, где указано, кто её создал, к какому типу она относится, доступен ли исходный код, сколько стоит её использование и когда ссылка проверялась последний раз.',
    'Каждая запись ссылается на внешний сайт, который эта база знаний не контролирует, и ссылки периодически перепроверяются — на каждой странице указана дата последнего подтверждения ссылки. Если инструмент переехал, перестал быть доступен или заслуживает того, чтобы оказаться здесь, но его нет, самый быстрый путь — открыть issue в репозитории.',
  ],
  empty: 'Ресурсов пока нет.',
  groupLabels: {
    software: 'Программное обеспечение',
    'ai tutor': 'Репетиторы на базе ИИ',
    'agent skill': 'Навыки для агентов',
    'prompt or gem library': 'Библиотеки промптов и gems',
    'collection of tools': 'Подборки инструментов',
    'collection of activities': 'Подборки занятий',
    'assessment instrument': 'Инструменты оценивания',
    'open format or specification': 'Открытые форматы и спецификации',
    'ebook or guide': 'Электронные книги и руководства',
    'case study collection': 'Подборки кейсов',
    'dataset or benchmark': 'Наборы данных и бенчмарки',
  },
};

export default ru;