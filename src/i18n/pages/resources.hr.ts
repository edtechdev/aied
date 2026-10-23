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

const hr: ResourcesStrings = {
  title: 'Resursi',
  h1: 'Besplatni alati i resursi',
  introHtml: [
    'Kurirani skup besplatnih alata, zbirki, instrumenata i formata za AI u edukaciji: stvari koje možete odmah početi koristiti, umjesto istraživanja koje prvo treba pročitati. Njih su uglavnom izradili nastavnici, dizajneri nastave, knjižničari i istraživači, a mnogi su napravljeni uz pomoć AI-a od strane ljudi koji nisu profesionalni programeri.',
    'Ne možete sve ovdje interaktivno koristiti. Uz alate za preglednik i AI tutore naći ćete knjižnice gotovih prompta, zbirke aktivnosti za nastavu, dokumente s informacijama i politikama, instrumente za procjenu i otvorene formate datoteka. Svaki unos vodi na stranicu o alatu: tko ga je izradio, koje je vrste, je li izvorni kod otvoren, koliko košta i kada je njegova poveznica zadnji put provjerena.',
    'Svaki unos vodi na vanjsku stranicu koju ova baza znanja ne kontrolira, a poveznice se povremeno provjeravaju; na svakoj stranici prikazan je datum zadnjeg potvrđivanja poveznice. Ako se alat preselio, prestao postojati ili nedostaje a trebao bi biti ovdje, <a href="https://github.com/edtechdev/aied/issues" target="_blank" rel="noopener">otvorite issue</a> u repozitoriju.',
  ],
  empty: 'Još nema resursa.',
  groupLabels: {
    software: 'Softver',
    'ai tutor': 'AI tutori',
    'agent skill': 'Vještine agenta',
    'prompt or gem library': 'Knjižnice prompta i dragulja',
    'collection of tools': 'Zbirke alata',
    'collection of activities': 'Zbirke aktivnosti',
    'assessment instrument': 'Instrumenti za procjenu',
    'open format or specification': 'Otvoreni formati i specifikacije',
    'ebook or guide': 'E-knjige i vodiči',
    'case study collection': 'Zbirke studija slučaja',
    'dataset or benchmark': 'Skupovi podataka i benchmarkovi',
  },
};

export default hr;
