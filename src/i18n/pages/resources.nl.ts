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

const nl: ResourcesStrings = {
  title: 'Bronnen',
  h1: 'Gratis tools en bronnen',
  introHtml: [
    'Een samengestelde verzameling gratis tools, collecties, instrumenten en formaten voor AI in het onderwijs: dingen die je vandaag kunt gebruiken, in plaats van onderzoek dat je eerst moet lezen. Ze zijn grotendeels gemaakt door docenten, ontwerpers van onderwijs, bibliothecarissen en onderzoekers, en veel ervan zijn met hulp van AI gebouwd door mensen die geen professionele ontwikkelaars zijn.',
    'Niet alles hier is interactief. Naast browsertools en AI-tutoren vind je hier bibliotheken met kant-en-klare prompts, collecties met klasactiviteiten, briefing- en beleidsdocumenten, toetsinstrumenten en open bestandsformaten. Elk item linkt naar een pagina over de tool: wie het heeft gemaakt, wat voor soort ding het is, of de broncode open is, wat het kost, en wanneer de link voor het laatst is gecontroleerd.',
    'Elk item linkt naar een externe site die deze kennisbank niet beheert, en de links worden periodiek gecontroleerd; elke pagina toont de datum waarop de link voor het laatst is bevestigd. Als een tool is verhuisd, offline is gegaan, of hier thuishoort maar ontbreekt, <a href="https://github.com/edtechdev/aied/issues" target="_blank" rel="noopener">open dan een issue</a> in de repository.',
  ],
  empty: 'Nog geen bronnen.',
  groupLabels: {
    software: 'Software',
    'ai tutor': 'AI-tutoren',
    'agent skill': 'Agentvaardigheden',
    'prompt or gem library': 'Prompt- en gem-bibliotheken',
    'collection of tools': 'Collecties met tools',
    'collection of activities': 'Collecties met activiteiten',
    'assessment instrument': 'Toetsinstrumenten',
    'open format or specification': 'Open formaten en specificaties',
    'ebook or guide': 'E-books en gidsen',
    'case study collection': 'Collecties met casestudy\'s',
    'dataset or benchmark': 'Datasets en benchmarks',
  },
};

export default nl;
