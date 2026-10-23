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

const no: ResourcesStrings = {
  title: 'Ressurser',
  h1: 'Gratis verktøy og ressurser',
  introHtml: [
    'Et kuratert utvalg gratis verktøy, samlinger, instrumenter og formater for AI i utdanning: ting du kan ta i bruk i dag, i stedet for forskning du må lese først. De er laget stort sett av lærere, instruksjonsdesignere, bibliotekarer og forskere, og mange er bygd med hjelp av AI av personer som ikke er profesjonelle utviklere.',
    'Ikke alt her er interaktivt. Ved siden av nettleserverktøy og AI-veiledere finner du biblioteker med ferdige instruksjoner, samlinger av klasseromsaktiviteter, orienterings- og policydokumenter, vurderingsinstrumenter og åpne filformater. Hvert innlegg lenker til en side om verktøyet: hvem som har laget det, hva slags ting det er, om kildekoden er åpen, hva det koster, og når lenken sist ble kontrollert.',
    'Alle innlegg lenker til et eksternt nettsted som denne kunnskapsbasen ikke kontrollerer, og lenkene kontrolleres med jevne mellomrom; hver side viser datoen lenken sist ble bekreftet. Hvis et verktøy har flyttet, lagt ned, eller bør være med her men mangler, <a href="https://github.com/edtechdev/aied/issues" target="_blank" rel="noopener">opprett en sak</a> i repositoryet.',
  ],
  empty: 'Ingen ressurser ennå.',
  groupLabels: {
    software: 'Programvare',
    'ai tutor': 'AI-veiledere',
    'agent skill': 'Agentferdigheter',
    'prompt or gem library': 'Biblioteker med instruksjoner og gems',
    'collection of tools': 'Verktøysamlinger',
    'collection of activities': 'Aktivitetssamlinger',
    'assessment instrument': 'Vurderingsinstrumenter',
    'open format or specification': 'Åpne formater og spesifikasjoner',
    'ebook or guide': 'E-bøker og guider',
    'case study collection': 'Samlinger av casestudier',
    'dataset or benchmark': 'Datasett og benchmarker',
  },
};

export default no;
