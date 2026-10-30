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
  sectionHeadings: {
    "Start here": "Inizia da qui",
    "Course and institutional policy": "Politica di corso e d'istituto",
    "Designing courses and activities": "Progettare corsi e attività",
    "Assessment, feedback and integrity": "Valutazione, feedback e integrità",
    "How students learn and use AI": "Apprendimento e uso dell'IA",
    "Particular learners, access and wellbeing": "Diversità, accesso e benessere",
    "Careers and AI literacy": "Carriere e alfabetizzazione sull'IA",
    "Building and evaluating educational AI": "Costruire e valutare l'IA educativa",
    "Research practice": "Pratica di ricerca",
  },
  sectionBlurbs: {
    "Start here": "Due domande ampie da leggere prima di quelle specifiche, qualunque sia il tuo ruolo.",
    "Course and institutional policy": "Per chi scrive le regole che le studentesse e gli studenti leggeranno, e per l'amministrazione e lo sviluppo professionale dei docenti che le fissano a livello di programma.",
    "Designing courses and activities": "Per chi decide dove entra l'IA in un compito, in un semestre o in un corso online, e per i docenti che vogliono indietro il tempo che l'IA doveva far guadagnare.",
    "Assessment, feedback and integrity": "Il gruppo più ampio, perché è qui che l'evidenza è più netta e che le conseguenze ricadono sulla carriera dello studente.",
    "How students learn and use AI": "Per le domande su che cosa gli studenti guadagnano davvero, che cosa rischiano di perdere e come tenere l'apprendimento dalla loro parte.",
    "Particular learners, access and wellbeing": "Per i docenti e il personale di supporto che adattano la progettazione a chi è davvero in aula, e per l'amministrazione che pensa a chi non c'è.",
    "Careers and AI literacy": "Per i progettisti curricolari e i coordinatori di corso di studi che rispondono agli studenti che chiedono a che cosa serve tutto questo.",
    "Building and evaluating educational AI": "Per sviluppatori, progettisti didattici e ricercatori che portano un tutor, una simulazione o una piattaforma in un corso reale.",
    "Research practice": "Per i ricercatori che in questo campo riferiscono, revisionano o pianificano il lavoro.",
  },
};

export default it;
