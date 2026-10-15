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
    'Ett utvalt set av <strong>kostnadsfria verktyg, samlingar, instrument och format</strong> för AI i utbildningen — saker du kan ta till dig och använda redan i dag, snarare än forskning du måste läsa först. De är tillverkade mest av lärare, utbildningsdesigners, bibliotekarier och forskare, och många byggdes med AI-stöd av personer som inte är professionella utvecklare.',
    'Inte allt här är interaktivt. Vid sidan av webbläsarverktyg och AI-handledare hittar du bibliotek av färdiga prompter och "gems", samlingar av klassrumsaktiviteter, underlag och policydokument, bedömningsinstrument och öppna filformat. Varje post är en kort sammanfattning som länkar till en sida med uppgift om vem som gjort den, vad det är för något, om källkoden finns tillgänglig, vad det kostar att använda och när dess länk senast kontrollerades.',
    'Varje post länkar vidare till en extern webbplats som den här kunskapsbasen inte kontrollerar, och länkarna kontrolleras med jämna mellanrum — varje sida visar datumet då dess länk senast bekräftades. Om ett verktyg har flyttat, lagts ner eller förtjänar att finnas här men saknas, är den snabbaste vägen att öppna ett ärende i förvaret.',
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
