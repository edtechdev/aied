/**
 * Copy della pagina indice delle risorse (`/aied/resources`). La lista è
 * costruita dalla collezione `resources`, che resta in inglese finché quelle
 * pagine non sono tradotte; le etichette qui sono ciò che il lettore vede
 * sopra di essa.
 */
import type { ResourcesStrings } from './resources.en';

const it: ResourcesStrings = {
  title: 'Risorse',
  h1: 'Strumenti e risorse gratuiti',
  introHtml: [
    'Una selezione curata di <strong>strumenti, raccolte, strumenti di misura e formati gratuiti</strong> per l’IA nell’educazione — cose da usare subito invece di ricerca da leggere prima. Sono realizzati per lo più da educatori, progettisti didattici, bibliotecari e ricercatori, e molti sono stati costruiti con l’assistenza dell’IA da persone che non sono sviluppatori professionisti.',
    'Non tutto qui è interattivo. Accanto a strumenti per browser e tutor IA troverai librerie di prompt già pronti e "gem", raccolte di attività in classe, documenti di briefing e di politica, strumenti di valutazione e formati di file aperti. Ogni voce è una breve sintesi che linka a una pagina che dice chi l’ha realizzata, che tipo di cosa è, se il codice sorgente è disponibile, quanto costa usarla e quando il suo link è stato verificato l’ultima volta.',
    'Ogni voce linka a un sito esterno che questa base di conoscenze non controlla, e i link sono riverificati periodicamente — ogni pagina mostra la data dell’ultima conferma del link. Se uno strumento si è trasferito, è diventato inaccessibile, o merita di essere qui e manca, la via più rapida è aprire una issue sul repository.',
  ],
  empty: 'Ancora nessuna risorsa.',
  groupLabels: {
    software: 'Software',
    'ai tutor': 'Tutor IA',
    'agent skill': 'Competenze per agenti',
    'prompt or gem library': 'Librerie di prompt e gem',
    'collection of tools': 'Raccolte di strumenti',
    'collection of activities': 'Raccolte di attività',
    'assessment instrument': 'Strumenti di valutazione',
    'open format or specification': 'Formati aperti e specifiche',
    'ebook or guide': 'Ebook e guide',
    'case study collection': 'Raccolte di casi di studio',
    'dataset or benchmark': 'Dataset e benchmark',
  },
};

export default it;
