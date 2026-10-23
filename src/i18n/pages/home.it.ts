/**
 * Copy della home page, per lingua. Ogni modulo locale esporta le stesse chiavi,
 * così il componente (`src/components/pages/HomePage.astro`) renderizza
 * qualsiasi lingua senza diramazioni.
 */
import type { HomeStrings } from './home.en';

const it: HomeStrings = {
  title: 'Home',
  h1: 'Base di conoscenze sull’IA nell’educazione',
  introHtml: `Benvenuti nella Base di conoscenze sull’IA nell’educazione, una risorsa gratuita di pubblico dominio su <a href="/aied/concepts/ai-education/">intelligenza artificiale nell’educazione</a> per chi insegna, studia, progetta o amministra. Riassume e sintetizza la ricerca educativa recente ad accesso aperto. Le pagine sono scritte e aggiornate da un agente IA, con la guida editoriale dello sviluppatore del sito.`,
  navHeading: 'Navigare il sito',
  navHtml: `Sfoglia l’indice nella barra laterale sinistra, organizzato per area tematica, o <a href="/aied/search">cerca</a> un argomento. Le pagine articolo condensano un solo articolo nel suo scopo, metodi e risultati; le pagine concetto raccolgono ciò che la ricerca dice su un’idea e collegano gli studi che la sostengono. Per partire da una domanda, le <a href="/aied/faq">FAQ</a> coprono ciò che i visitatori chiedono per primo, come la politica IA del corso o se usare i rilevatori di IA. Per partire da uno strumento, la <a href="/aied/resources">pagina delle risorse</a> elenca strumenti e raccolte gratuiti, con chi ha realizzato ciascuno e quanto costa. La mappa sopra raggruppa il campo in dodici aree, con <a href="/aied/concepts/ai-education/">IA nell’educazione</a> come nodo centrale.`,
  chatHeading: 'Chatta con la base di conoscenze',
  chatHtml: `L’intera base di conoscenze è pubblicata anche come file leggibili dalle macchine, così puoi puntare un chatbot o un agente IA su di essa e ottenere risposte che citano le pagine. <a href="/aied/ai">I prompt sono qui</a>. Le nuove pagine finiscono nel <a href="/aied/journal">diario</a>, che ha un <a href="/aied/rss.xml">feed RSS</a>. Per leggere offline, scarica l’<a href="/aied/aied.epub">EPUB</a> o il <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Punti di partenza consigliati per pubblico',
  startingIntro: 'Inizia dal gruppo che corrisponde al tuo ruolo.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Concetti essenziali',
      html: `<a href="/aied/concepts/ai-literacy/">Alfabetizzazione sull’IA</a>, <a href="/aied/concepts/misconceptions/">idee sbagliate sull’IA</a>, <a href="/aied/concepts/agentic-ai/">IA agentica</a>, <a href="/aied/concepts/cognitive-offloading/">scaricamento cognitivo</a> e <a href="/aied/concepts/interpreting-and-applying-aied-research/">come interpretare e applicare questa ricerca</a>, compreso perché un singolo studio raramente chiude una questione.`,
    },
    {
      id: 'instructors',
      heading: 'Docenti',
      html: `<a href="/aied/concepts/teacher-role/">Il ruolo docente in evoluzione</a>, <a href="/aied/concepts/learning-design/">progettazione dell’apprendimento</a>, <a href="/aied/concepts/assessment/">valutazione</a>, <a href="/aied/concepts/feedback/">feedback</a>, <a href="/aied/concepts/academic-integrity/">integrità accademica</a>, <a href="/aied/concepts/framing-ai-use-for-students/">inquadrare l’uso dell’IA</a> e <a href="/aied/concepts/reducing-ai-misuse/">ridurre gli usi impropri</a>. Per strumenti ed esempi specifici della disciplina, vedi <a href="/aied/concepts/discipline-specific-aied/">IA nella tua disciplina</a>.`,
    },
    {
      id: 'developers',
      heading: 'Sviluppatori',
      html: `<a href="/aied/concepts/educational-technology-developers/">Sviluppare per l’educazione</a>, <a href="/aied/concepts/ai-technologies/">le tecnologie sottostanti</a>, <a href="/aied/concepts/intelligent-tutoring/">tutoraggio intelligente</a>, <a href="/aied/concepts/multimodal/">IA multimodale</a>, <a href="/aied/concepts/student-modeling/">modellazione dello studente</a> e <a href="/aied/concepts/llm-training-and-fine-tuning/">addestrare e adattare un modello per l’insegnamento</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Amministratori',
      html: `<a href="/aied/concepts/administrator/">Il ruolo dell’amministratore</a>, <a href="/aied/concepts/governance/">governance dell’IA</a>, <a href="/aied/concepts/educational-policy-ai/">politica istituzionale</a>, <a href="/aied/concepts/legal-issues-and-risks/">questioni legali e rischi</a> e <a href="/aied/concepts/change-management/">gestione del cambiamento</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Ricercatori',
      html: `<a href="/aied/concepts/research-methods-aied/">Metodi di ricerca in AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">teorie e framework</a>, <a href="/aied/concepts/ai-ed-evaluation/">valutare un intervento di IA nell’educazione</a>, <a href="/aied/concepts/educational-measurement/">misurazione educativa</a>, <a href="/aied/concepts/learning-gains/">misurare i guadagni di apprendimento</a> e i <a href="/aied/concepts/limitations-in-aied-research/">limiti trasversali di questa base di evidenze</a>.`,
    },
  ],
  statsHeading: 'Che cosa contiene la base di conoscenze',
  statsIntro:
    'Ogni pagina è datata, e i conteggi qui sotto riflettono ciò che è pubblicato in questo momento; la data «ultimo aggiornamento» in fondo all’elenco è la modifica più recente.',
  conceptMap: {
    title: 'Mappa concettuale dell’IA nell’educazione',
    desc:
      'Una mappa radiale con IA nell’educazione al centro, collegata a dodici concetti di primo livello: ' +
      'modellazione, apprendimento, equità, feedback, alfabetizzazione sull’IA, valutazione, discipline, ' +
      'pedagogia, etica, tecnologie, valutazione e ricerca.',
    navLabel: 'Concetti di IA nell’educazione',
    center: 'IA nell’educazione',
    nodes: {
      'student-modeling': 'Modellazione',
      'learning-theories': 'Apprendimento',
      'equity-in-ai-education': 'Equità',
      feedback: 'Feedback',
      'ai-literacy': 'Alfabetizzazione IA',
      assessment: 'Valutazione',
      'discipline-specific-aied': 'Discipline',
      pedagogy: 'Pedagogia',
      ethics: 'Etica',
      'ai-technologies': 'Tecnologie',
      'ai-ed-evaluation': 'Valutazione',
      'research-methods-aied': 'Ricerca',
    },
  },
  toc: [
    { text: 'Navigare il sito', slug: 'navigating-the-site', depth: 2 },
    { text: 'Chatta con la base di conoscenze', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Punti di partenza consigliati per pubblico', slug: 'starting-points', depth: 2 },
    { text: 'Concetti essenziali', slug: 'essential-concepts', depth: 3 },
    { text: 'Docenti', slug: 'instructors', depth: 3 },
    { text: 'Sviluppatori', slug: 'developers', depth: 3 },
    { text: 'Amministratori', slug: 'administrators', depth: 3 },
    { text: 'Ricercatori', slug: 'researchers', depth: 3 },
    { text: 'Che cosa contiene la base di conoscenze', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default it;
