/**
 * Copy della pagina del diario (`/aied/journal`): un indice cronologicamente
 * inverso di tutto ciò che è stato aggiunto alla base di conoscenze. Le voci
 * provengono dalle collezioni di contenuti; i conteggi, le etichette e la riga
 * RSS sono qui.
 */
import type { JournalStrings } from './journal.en';

const it: JournalStrings = {
  title: 'Diario',
  h1: 'Diario',
  introTemplate:
    'Indice cronologicamente inverso di tutti gli {articles} articoli, {concepts} concetti, {faqs} FAQ e {resources} risorse nella base di conoscenze. {rss}',
  rssLabel: 'Iscriviti al feed RSS per le ultime novità.',
  pageSingular: 'pagina',
  pagePlural: 'pagine',
};

export default it;
