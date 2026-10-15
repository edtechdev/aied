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

const ro: ResourcesStrings = {
  title: 'Resurse',
  h1: 'Instrumente și resurse gratuite',
  introHtml: [
    'Un set selectat de <strong>instrumente, colecții, instrumente de măsurare și formate gratuite</strong> pentru inteligența artificială în educație — lucruri pe care le poți folosi imediat, în loc să fie cercetare pe care trebuie s-o citești mai întâi. Sunt realizate în mare parte de educatori, designeri instrucționali, bibliotecari și cercetători, iar multe au fost construite cu ajutorul AI de către persoane care nu sunt dezvoltatori profesioniști.',
    'Nu tot ce se află aici este interactiv. Alături de instrumente pentru browser și tutorii AI vei găsi biblioteci de prompturi gata făcute și „gems", colecții de activități de clasă, documente de informare și de politică, instrumente de evaluare și formate de fișiere deschise. Fiecare intrare este un scurt rezumat care leagă o pagină care spune cine a realizat-o, ce fel de lucru este, dacă codul sursă este disponibil, ce costă folosirea ei și când a fost verificat ultima dată linkul.',
    'Fiecare intrare leagă un site extern pe care această bază de cunoștințe nu îl controlează, iar linkurile sunt reverificate periodic — fiecare pagină arată data la care linkul său a fost confirmat ultima dată. Dacă un instrument s-a mutat, a fost închis sau merită să fie aici și lipsește, cea mai rapidă cale este să deschizi o problemă în depozitul de cod.',
  ],
  empty: 'Nicio resursă încă.',
  groupLabels: {
    software: 'Software',
    'ai tutor': 'Tutorii AI',
    'agent skill': 'Competențe pentru agenți',
    'prompt or gem library': 'Biblioteci de prompturi și gem-uri',
    'collection of tools': 'Colecții de instrumente',
    'collection of activities': 'Colecții de activități',
    'assessment instrument': 'Instrumente de evaluare',
    'open format or specification': 'Formate deschise și specificații',
    'ebook or guide': 'Cărți electronice și ghiduri',
    'case study collection': 'Colecții de studii de caz',
    'dataset or benchmark': 'Seturi de date și benchmark-uri',
  },
};

export default ro;
