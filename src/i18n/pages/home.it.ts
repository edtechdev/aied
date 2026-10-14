/**
 * Copy della home page, per lingua. Ogni modulo locale esporta le stesse chiavi,
 * così il componente (`src/components/pages/HomePage.astro`) renderizza
 * qualsiasi lingua senza diramazioni.
 */
import type { HomeStrings } from './home.en';

const it: HomeStrings = {
  title: 'Home',
  h1: 'Base di conoscenze sull’IA nell’educazione',
  introHtml: `Benvenuti nella <strong>Base di conoscenze sull’IA nell’educazione</strong> — una risorsa gratuita di pubblico dominio su <a href="/aied/concepts/ai-education/">intelligenza artificiale nell’educazione</a>, per chi insegna, studia, progetta o amministra. Distilla la ricerca recente ad accesso aperto in pagine brevi e strutturate che si possono leggere e mettere in pratica. Una nota su come è fatta: le pagine sono generate e aggiornate da un agente IA, con la guida editoriale dello sviluppatore del sito. Ogni affermazione cita l’articolo che la sostiene, così le fonti sono verificabili.`,
  navHeading: 'Navigare il sito',
  navHtml: `Sfoglia l’indice per area tematica nella barra laterale sinistra per vedere com’è organizzato il campo, o <a href="/aied/search">cerca</a> in tutta la base di conoscenze se hai già un argomento in mente. Le pagine articolo condensano un solo articolo nel suo scopo, metodi e risultati, con citazione completa e link ai lavori correlati; le pagine concetto raccolgono ciò che la ricerca dice su un’idea e collegano gli studi che la sostengono. Se preferisci partire da una domanda, l’<a href="/aied/faq">indice delle FAQ</a> raccoglie quelle che i visitatori pongono per prime, dalla politica IA del corso ai rilevatori di IA; se preferisci partire da uno strumento, la <a href="/aied/resources">pagina delle risorse</a> elenca strumenti gratuiti, raccolte e strumenti di misura da usare subito, ciascuno con chi l’ha realizzato e quanto costa. La mappa concettuale sopra mostra che cosa si collega a che cosa; <a href="/aied/concepts/ai-education/">IA nell’educazione</a> è la pagina mappa dietro di essa, che raggruppa i concetti in una dozzina di aree tematiche.`,
  chatHeading: 'Chatta con la base di conoscenze',
  chatHtml: `Tutto ciò che trovi qui è pubblicato anche come file leggibili dalle macchine, così puoi puntare il tuo chatbot o agente IA preferito sulla base di conoscenze e ottenere risposte che la citano invece di indovinare — <a href="/aied/ai">i prompt sono qui</a>. Le nuove pagine compaiono nel <a href="/aied/journal">diario</a>, che ha un <a href="/aied/rss.xml">feed RSS</a> se vuoi seguire gli aggiornamenti. Per leggere offline, prendi l’<a href="/aied/aied.epub">EPUB</a> o il <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Punti di partenza consigliati per pubblico',
  startingIntro: 'Di seguito alcuni concetti consigliati con cui iniziare in questa base di conoscenze.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Concetti essenziali',
      html: `<a href="/aied/concepts/ai-literacy/">Alfabetizzazione sull’IA</a>, <a href="/aied/concepts/misconceptions/">idee sbagliate sull’IA</a>, <a href="/aied/concepts/agentic-ai/">IA agentica</a>, <a href="/aied/concepts/cognitive-offloading/">scaricamento cognitivo</a> e <a href="/aied/concepts/interpreting-and-applying-aied-research/">come interpretare e applicare questa ricerca</a>: che cosa i risultati possono e non possono sostenere, e perché un singolo studio raramente chiude una questione.`,
    },
    {
      id: 'instructors',
      heading: 'Docenti',
      html: `<a href="/aied/concepts/teacher-role/">Il ruolo docente in evoluzione</a>, <a href="/aied/concepts/learning-design/">progettazione dell’apprendimento</a>, <a href="/aied/concepts/assessment/">valutazione</a>, <a href="/aied/concepts/feedback/">feedback</a>, <a href="/aied/concepts/academic-integrity/">integrità accademica</a>, <a href="/aied/concepts/framing-ai-use-for-students/">inquadrare l’uso dell’IA</a> e <a href="/aied/concepts/reducing-ai-misuse/">ridurre gli usi impropri</a>. Per strumenti, evidenze ed esempi nella tua disciplina, vedi <a href="/aied/concepts/discipline-specific-aied/">IA nella tua disciplina</a>.`,
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
    'Ogni pagina qui è datata, e la base di conoscenze cresce man mano che nuova ricerca ad accesso aperto viene pubblicata e recensita. I conteggi qui sotto sono letti dai contenuti attuali; la data è l’aggiornamento di pagina più recente.',
  conceptMap: {
    title: 'Mappa concettuale dell’IA nell’educazione',
    desc:
      'Una mappa radiale con IA nell’educazione al centro, collegata a dodici concetti di primo livello: ' +
      'modellazione, apprendimento, equità, feedback, alfabetizzazione sull’IA, valutazione, discipline, ' +
      'pedagogia, etica, tecnologie, valutazione e ricerca. Seleziona un nodo per aprire la sua pagina.',
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
