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
    'Una selezione curata di strumenti, raccolte, strumenti di misura e formati gratuiti per l’IA nell’educazione: cose da usare subito invece di ricerca da leggere prima. Sono realizzati per lo più da educatori, progettisti didattici, bibliotecari e ricercatori, e molti sono stati costruiti con l’aiuto dell’IA da persone che non sono sviluppatori professionisti.',
    'Non tutto qui è interattivo. Accanto a strumenti per browser e tutor IA troverai librerie di prompt già pronti, raccolte di attività in classe, documenti di briefing e di politica, strumenti di valutazione e formati di file aperti. Ogni voce linka a una pagina sullo strumento: chi l’ha realizzato, che tipo di cosa è, se il codice sorgente è aperto, quanto costa e quando il suo link è stato verificato l’ultima volta.',
    'Ogni voce linka a un sito esterno che questa base di conoscenze non controlla, e i link sono verificati periodicamente; ogni pagina mostra la data dell’ultima conferma del link. Se uno strumento si è trasferito, ha chiuso, o manca e dovrebbe essere qui, <a href="https://github.com/edtechdev/aied/issues" target="_blank" rel="noopener">apri una issue</a> sul repository.',
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
