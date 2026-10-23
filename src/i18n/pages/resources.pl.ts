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

const pl: ResourcesStrings = {
  title: 'Zasoby',
  h1: 'Bezpłatne narzędzia i zasoby',
  introHtml: [
    'Starannie wybrany zestaw bezpłatnych narzędzi, zbiorów, instrumentów i formatów do AI w edukacji: rzeczy, z których możesz korzystać od razu, a nie badań, które musisz najpierw przeczytać. Większość z nich tworzą nauczyciele, projektanci dydaktyczni, bibliotekarze i badacze, a wiele z nich powstało z pomocą AI w rękach osób, które nie są profesjonalnymi programistami.',
    'Nie wszystko tu jest interaktywne. Obok narzędzi przeglądarkowych i tutorów AI są biblioteki gotowych poleceń, zbiory zajęć klasowych, dokumenty informacyjne i polityczne, instrumenty oceny oraz otwarte formaty plików. Każda pozycja linkuje do strony o narzędziu, która podaje, kto je stworzył, czym ono jest, czy kod źródłowy jest otwarty, ile kosztuje korzystanie i kiedy jej link sprawdzono ostatnio.',
    'Każda pozycja linkuje do zewnętrznej witryny, której ta baza wiedzy nie kontroluje, a linki są okresowo sprawdzane; każda strona pokazuje datę, w której jej link potwierdzono ostatnio. Jeśli narzędzie się przesunęło, zamknęło lub go tu brakuje, a powinno tu być, <a href="https://github.com/edtechdev/aied/issues" target="_blank" rel="noopener">zgłoś problem</a> w repozytorium.',
  ],
  empty: 'Brak jeszcze zasobów.',
  groupLabels: {
    software: 'Oprogramowanie',
    'ai tutor': 'Tutorzy AI',
    'agent skill': 'Umiejętności agentów',
    'prompt or gem library': 'Biblioteki poleceń i gemów',
    'collection of tools': 'Zbiory narzędzi',
    'collection of activities': 'Zbiory zajęć',
    'assessment instrument': 'Instrumenty oceny',
    'open format or specification': 'Otwarte formaty i specyfikacje',
    'ebook or guide': 'Ebooki i przewodniki',
    'case study collection': 'Zbiory studiów przypadku',
    'dataset or benchmark': 'Zbiory danych i benchmarki',
  },
};

export default pl;
