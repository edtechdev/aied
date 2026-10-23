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

const sv: ResourcesStrings = {
  title: 'Resurser',
  h1: 'Kostnadsfria verktyg och resurser',
  introHtml: [
    'Ett utvalt set av kostnadsfria verktyg, samlingar, instrument och format för AI i utbildningen: saker du kan använda redan i dag, snarare än forskning du måste läsa först. De är tillverkade mest av lärare, utbildningsdesigners, bibliotekarier och forskare, och många byggdes med AI-stöd av personer som inte är professionella utvecklare.',
    'Inte allt här är interaktivt. Vid sidan av webbläsarverktyg och AI-handledare finns bibliotek av färdiga prompter, samlingar av klassrumsaktiviteter, underlag och policydokument, bedömningsinstrument och öppna filformat. Varje post länkar till en sida om verktyget: vem som gjort det, vad det är för något, om källkoden är öppen, vad det kostar och när dess länk senast kontrollerades.',
    'Varje post länkar till en extern webbplats som den här kunskapsbasen inte kontrollerar, och länkarna kontrolleras med jämna mellanrum; varje sida visar datumet då dess länk senast bekräftades. Om ett verktyg har flyttat, lagts ner eller saknas och borde finnas här, <a href=\"https://github.com/edtechdev/aied/issues\" target=\"_blank\" rel=\"noopener\">öppna ett ärende</a> i förvaret.',
  ],
  empty: 'Inga resurser ännu.',
  groupLabels: {
    software: 'Programvara',
    'ai tutor': 'AI-handledare',
    'agent skill': 'Agentfärdigheter',
    'prompt or gem library': 'Bibliotek med prompter och gems',
    'collection of tools': 'Samlingar av verktyg',
    'collection of activities': 'Samlingar av aktiviteter',
    'assessment instrument': 'Bedömningsinstrument',
    'open format or specification': 'Öppna format och specifikationer',
    'ebook or guide': 'E-böcker och guider',
    'case study collection': 'Samlingar av fallstudier',
    'dataset or benchmark': 'Datamängder och riktmärken',
  },
};

export default sv;
