/**
 * Copy della pagina di ricerca, per lingua. Le etichette della barra filtri
 * sono tradotte; i valori delle facet che vengono dal contenuto (discipline,
 * livelli, slug di concetto) sono contenuto, non chrome, quindi restano come
 * scritti nella pagina (inglese) che descrivono.
 */
import type { SearchStrings } from './search.en';

const it: SearchStrings = {
  title: 'Cerca',
  h1: 'Cerca',
  intro: 'Cerca tra articoli e concetti. Usa i filtri per restringere i risultati.',
  corpusIntro:
    'Tutto nella base di conoscenze è ricercabile — comprese le FAQ e le pagine di strumenti e risorse gratuiti. Attualmente contiene:',
  placeholder: 'Cerca articoli, concetti e FAQ...',
  filterLabels: {
    page_type: 'Tipo',
    discipline: 'Disciplina',
    level: 'Livello',
    audience: 'Destinatari previsti',
    research_method: 'Disegno dello studio',
    page_kind: 'Tipo di pagina',
  },
};

export default it;
