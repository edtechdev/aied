/**
 * Copy della pagina 404 (`/aied/404.html`). La pagina è altrimenti la pagina
 * di ricerca, quindi le uniche stringhe che aggiunge sono l’intestazione e le
 * due vie d’uscita.
 */
import type { NotFoundStrings } from './notFound.en';

const it: NotFoundStrings = {
  title: 'Pagina non trovata',
  h1: 'Pagina non trovata',
  messageHtml:
    'Non abbiamo trovato la pagina che hai richiesto. Il link che ti ha portato qui potrebbe essere obsoleto, o la pagina potrebbe essere stata rinominata. Puoi ricominciare dalla <a href="/aied/">home page</a>.',
  searchHtml:
    'Oppure cerca in tutta la base di conoscenze qui sotto. Ogni articolo, concetto, FAQ e risorsa è indicizzato, e i filtri restringono la ricerca per disciplina, livello, pubblico o metodo di ricerca.',
};

export default it;
