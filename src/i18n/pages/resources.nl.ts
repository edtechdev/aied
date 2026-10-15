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
    'Een samengestelde verzameling <strong>gratis tools, collecties, instrumenten en formaten</strong> voor AI in het onderwijs — dingen die je vandaag kunt gebruiken, in plaats van onderzoek dat je eerst moet lezen. Ze zijn grotendeels gemaakt door docenten, ontwerpers van onderwijs, bibliothecarissen en onderzoekers, en velen zijn met hulp van AI gebouwd door mensen die geen professionele ontwikkelaars zijn.',
    'Niet alles hier is interactief. Naast browsertools en AI-tutoren vind je hier bibliotheken met kant-en-klare prompts en „gems", collecties met klasactiviteiten, briefing- en beleidsdocumenten, toetsinstrumenten en open bestandsformaten. Elk item is een korte samenvatting die linkt naar een pagina met wie het heeft gemaakt, wat voor soort ding het is, of de broncode beschikbaar is, wat het kost om te gebruiken, en wanneer de link voor het laatst is gecontroleerd.',
    'Elk item linkt naar een externe site die deze kennisbank niet beheert, en de links worden periodiek opnieuw gecontroleerd — elke pagina toont de datum waarop de link voor het laatst is bevestigd. Als een tool is verhuisd, offline is gegaan, of hier thuishoort maar ontbreekt, is de snelste weg om een issue te openen in de repository.',
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
