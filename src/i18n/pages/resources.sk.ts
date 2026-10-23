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

const sk: ResourcesStrings = {
  title: 'Zdroje',
  h1: 'Bezplatné nástroje a zdroje',
  introHtml: [
    'Kurátorský výber bezplatných nástrojov, kolekcií, nástrojov a formátov pre AI v edukácii: veci, ktoré môžete hneď použiť, a nie výskum, ktorý by ste si najprv museli prečítať. Vytvárajú ich väčšinou pedagógovia, dizajnéri výučby, knihovníci a výskumníci a mnohé vznikli s pomocou AI od ľudí, ktorí nie sú profesionálni vývojári.',
    'Nie všetko tu je interaktívne. Popri prehliadačových nástrojoch a AI tutoroch nájdete knižnice hotových výziev, kolekcie triednych aktivít, informačné a politické dokumenty, hodnotiace nástroje a otvorené súborové formáty. Každá položka odkazuje na stránku o nástroji: kto ho vytvoril, aký druh veci to je, či je zdrojový kód otvorený, koľko stojí a kedy bol jej odkaz naposledy skontrolovaný.',
    'Každá položka odkazuje na externú stránku, ktorú táto vedecká databáza nekontroluje, a odkazy sa pravidelne kontrolujú; každá stránka zobrazuje dátum, kedy bol jej odkaz naposledy potvrdený. Ak sa nástroj presťahoval, stratil dostupnosť, alebo by sem patril a chýba, <a href=\"https://github.com/edtechdev/aied/issues\" target=\"_blank\" rel=\"noopener\">otvorte hlásenie</a> v repozitári.',
  ],
  empty: 'Zatiaľ žiadne zdroje.',
  groupLabels: {
    software: 'Softvér',
    'ai tutor': 'AI tutori',
    'agent skill': 'Zručnosti agentov',
    'prompt or gem library': 'Knižnice výziev a gemov',
    'collection of tools': 'Kolekcie nástrojov',
    'collection of activities': 'Kolekcie aktivít',
    'assessment instrument': 'Hodnotiace nástroje',
    'open format or specification': 'Otvorené formáty a špecifikácie',
    'ebook or guide': 'E-knihy a príručky',
    'case study collection': 'Kolekcie prípadových štúdií',
    'dataset or benchmark': 'Súbory údajov a benchmarky',
  },
};

export default sk;
