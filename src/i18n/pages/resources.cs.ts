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

const cs: ResourcesStrings = {
  title: 'Zdroje',
  h1: 'Bezplatné nástroje a zdroje',
  introHtml: [
    'Pečlivě vybraná sada <strong>bezplatných nástrojů, sbírek, instrumentů a formátů</strong> pro AI ve vzdělávání — věcí, které můžete hned použít, místo výzkumu, který musíte nejprve číst. Většinou je vytvářejí pedagogové, návrháři výuky, knihovníci a badatelé a mnohé vznikly za pomoci AI z rukou lidí, kteří nejsou profesionálními vývojáři.',
    'Ne všechno tu je interaktivní. Vedle nástrojů prohlížečů a AI tutorů najdete knihovny hotových výzev a „gemů", sbírky učebních aktivit, dokumenty pro informování a politiku, nástroje hodnocení a otevřené formáty souborů. Každá položka je krátké shrnutí, které odkazuje na stránku uvádějící, kdo ji vytvořil, o jaký typ věci jde, zda je dostupný zdrojový kód, kolik její používání stojí a kdy byl její odkaz naposledy zkontrolován.',
    'Každá položka odkazuje na externí web, který tato znalostní báze neovládá, a odkazy jsou pravidelně překontrolovány — každá stránka zobrazuje datum, kdy byl její odkaz naposledy potvrzen. Pokud se nástroj přestěhoval, zmizel nebo by tu zaslouženě měl být a chybí, nejrychlejší cesta je otevřít issue v repozitáři.',
  ],
  empty: 'Zatím žádné zdroje.',
  groupLabels: {
    software: 'Software',
    'ai tutor': 'AI tutoři',
    'agent skill': 'Dovednosti agentů',
    'prompt or gem library': 'Knihovny výzev a gemů',
    'collection of tools': 'Sbírky nástrojů',
    'collection of activities': 'Sbírky aktivit',
    'assessment instrument': 'Nástroje hodnocení',
    'open format or specification': 'Otevřené formáty a specifikace',
    'ebook or guide': 'E-knihy a příručky',
    'case study collection': 'Sbírky případových studií',
    'dataset or benchmark': 'Datové sady a benchmarky',
  },
};

export default cs;
