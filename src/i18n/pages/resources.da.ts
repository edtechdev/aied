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

const da: ResourcesStrings = {
  title: 'Ressourcer',
  h1: 'Gratis værktøjer og ressourcer',
  introHtml: [
    'En kurateret samling af <strong>gratis værktøjer, samlinger, instrumenter og formater</strong> til AI i uddannelse — ting, du kan gå i gang med at bruge i dag, frem for forskning, du skal læse først. De er lavet mest af pædagoger, instruktionsdesignere, bibliotekarer og forskere, og mange er bygget med hjælp fra AI af mennesker, der ikke er professionelle udviklere.',
    'Ikke alt her er interaktivt. Side om side med browsertools og AI-vejledere finder du biblioteker af færdige prompter og »gems«, samlinger af klasseværelsesaktiviteter, briefing- og policydokumenter, vurderingsinstrumenter og åbne filformater. Hvert punkt er et kort resumé, der linker til en side, der angiver, hvem der har lavet det, hvilken slags ting det er, om kildekoden er tilgængelig, hvad det koster at bruge, og hvornår linket sidst blev kontrolleret.',
    'Hvert punkt linker videre til et eksternt site, som denne vidensbase ikke kontrollerer, og linksene bliver kontrolleret igen med jævne mellemrum — hver side viser datoen for, hvornår linket sidst blev bekræftet. Er et værktøj flyttet, lukket eller fortjener det at stå her og mangler, er den hurtigste vej at oprette en sag på repositoryet.',
  ],
  empty: 'Ingen ressourcer endnu.',
  groupLabels: {
    software: 'Software',
    'ai tutor': 'AI-vejledere',
    'agent skill': 'Agentfærdigheder',
    'prompt or gem library': 'Prompt- og gem-biblioteker',
    'collection of tools': 'Værktøjssamlinger',
    'collection of activities': 'Aktivitetssamlinger',
    'assessment instrument': 'Vurderingsinstrumenter',
    'open format or specification': 'Åbne formater og specifikationer',
    'ebook or guide': 'E-bøger og guider',
    'case study collection': 'Case-samlinger',
    'dataset or benchmark': 'Datasæt og benchmarks',
  },
};

export default da;
