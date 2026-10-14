/**
 * Copy della pagina indice delle FAQ (`/aied/faq`). Le domande stesse provengono
 * dalla collezione `faqs`.
 */
import type { FaqStrings } from './faq.en';

const it: FaqStrings = {
  title: 'FAQ',
  h1: 'Domande frequenti',
  introHtml:
    'Questa sezione risponde alle domande più comuni su <strong>IA nell’educazione</strong> — che cosa dice la ricerca su come l’IA influisce su insegnamento e apprendimento, e come educatori, docenti e progettisti didattici possono mettere in pratica quell’evidenza. Ogni risposta distilla i risultati della ricerca sintetizzata in questa base di conoscenze, collegando la domanda ai concetti e articoli pertinenti per approfondire.',
  assistantHtml:
    'Hai una domanda che non trova risposta qui? Chiedi al tuo assistente IA usando la pagina <a href="/aied/ai">Usa questa base di conoscenze con il tuo assistente IA</a>, che mostra come puntare un agente sul catalogo completo per risposte fondate e citate.',
  empty: 'Ancora nessuna FAQ.',
};

export default it;
