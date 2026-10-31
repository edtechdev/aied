---
title: "Scienze dell'apprendimento"
created: "2026-10-14T21:55:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
type: concept
foundations: [learning-design]
pedagogy: [cognitive-psychology, learning-theories, pedagogy]
technology: [intelligent-tutoring, learning-analytics]
discipline: [learning sciences]
audience: [researchers, instructional designers, instructors, policymakers]
level: [k 12, higher ed, adult learning]
page_kind: [framework, synthesis]
confidence: high
methods: [research-methods-aied]
translation_of: "concepts/learning-sciences"
source_updated: "2026-10-26T07:05:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Scienze dell'apprendimento** — il campo di ricerca interdisciplinare che studia come le persone apprendono e come progettare ambienti in cui l'apprendimento avviene, attingendo alla [[cognitive-psychology|psicologia cognitiva]], alla [[learning-theories|teoria dell'apprendimento]], all'informatica e alla linguistica, e giudicando le sue progettazioni con evidenza empirica anziché con la sola teoria. In questa knowledge base è il campo di ricerca attorno all'[[ai-education|IA in educazione]] anziché una delle materie scolastiche: fornisce i meccanismi che i sistemi IA operazionalizzano (componenti di conoscenza, [[mastery-learning|soglie di padronanza]], [[transfer-of-learning|trasferimento]]), gli oggetti di progettazione in cui sono immersi ([[learning-design|sequenze di corso pianificate]], [[intelligent-tutoring|tutor]], regimi di [[feedback]]) e gli standard in base ai quali sono giudicati ([[learning-gains|guadagni di apprendimento]], [[assessment-validity|validità della valutazione]], [[equity-in-ai-education|equità]]). La sua domanda organizzativa non è se uno strumento performa bene ma se chi apprende è cambiato.

## Domande da considerare

- Uno studente supera ogni item di pratica, quindi la soglia di padronanza termina la serie — poi applica male la regola nel punto in cui l'azione dovrebbe essere trattenuta. Di chi è l'errore: dello studente, del modello o della regola di arresto?
- Il sequence mining può descrivere 554 corsi come pattern senza osservare un'aula. Cosa guadagna, e cosa perde, il campo studiando intenzioni progettate anziché attività enactate?
- La sensibilità demografica nel feedback di un LLM sembra adattamento quando segue il livello di istruzione dichiarato da chi apprende e sembra pregiudizio quando sposta il sentimento. Un campo che non può separare le due cose dovrebbe continuare a usare modelli aperti per valutare?
- L'appetito delle scienze dell'apprendimento per la progettazione causale — assegnazione randomizzata, audit controfattuali, modelli eseguibili dello studente — restringe ciò che conta come evidenza nell'IA in educazione?

## Introduzione

Le scienze dell'apprendimento studiano l'apprendimento e la progettazione degli ambienti di apprendimento, e sono definite dai loro metodi tanto quanto dai loro argomenti: esperimenti, prove in classe, modellizzazione [[quantitative-research|quantitativa]] dei dati degli studenti, analisi [[qualitative-research|qualitativa]] delle progettazioni e dei contesti, e design-based research che costruisce un intervento e lo rivede nell'uso. Questa ampiezza separa questa pagina dai vicini che forniscono i framework, la pratica e gli strumenti; la sezione seguente espone ciascun confine e ciò che il campo ha stabilito dall'altra parte.

Questa pagina copre la conoscenza sostantiva che tali metodi hanno prodotto — cosa fa chi apprende con un modello generativo, quali assetti cambiano gli esiti, e dove falliscono gli strumenti propri del campo. La [[discipline-specific-aied|AIED specifica per disciplina]] fa il taglio opposto, sostenendo che la materia cambia ciò che il supporto dovrebbe fare; le scienze dell'apprendimento assumono la visione trasversale, e i meccanismi che testano sono raccolti sotto la [[cognitive-psychology|psicologia cognitiva]].

### Come appare l'IA nelle scienze dell'apprendimento

- **Il meccanismo prima, poi il modello.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren e Stamper (2026)]] hanno condotto undici esperimenti (N = 192) con sistemi di [[intelligent-tutoring|intelligent tutoring]] per il Riichi Mahjong e hanno mostrato che chi apprendeva compilava una produzione ipergeneralizzata — l'azione senza il suo vincolo di applicazione — applicandola male al primo item "non agire" nel 61,5%–100% dei casi, contro il 12% di errore atteso sotto il [[knowledge-tracing|knowledge tracing bayesiano]]. Con una soglia di padronanza al 95% il sistema arrestava la pratica prima che chi apprendesse incontrasse un caso che richiedeva di trattenere l'azione, per cui il difetto restava non rilevato. Una breve pratica "non agire" con [[feedback]] che nomina il vincolo mancante riduceva l'applicazione erronea allo 0,0%–23,1% (h di Cohen 1,70–2,44), e un'analisi secondaria di tredici dataset K-12 di *Decimal Point* ha trovato la stessa struttura nel pregiudizio sui numeri interi (84%–88% degli errori di confronto).
- **Un consenso mappa dove la GenAI aiuta e dove danneggia l'apprendimento.** Un Delphi preregistrato di 30 studiosi dell'apprendimento ha valutato 65 processi di apprendimento e ne ha concordati 42: la GenAI minaccia l'acquisizione iniziale e il [[critical-thinking|pensiero di ordine superiore]] ma potenzia il consolidamento ([[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou et al., 2026]]).
- **Lo stile del feedback, non il tipo di agente, ha mosso l'impegno autoregolativo.** In un esperimento 2 × 2 con 51 studenti post-laurea, il feedback [[socratic-method|socratico]] era associato a un monitoraggio della comprensione più forte mentre il feedback direttivo comportava un carico cognitivo più alto; i due stili si susseguivano in una sequenza fissa e non controbilanciata, quindi il contrasto è legato alla condizione anziché causale ([[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]).
- **L'ottimo dipende dal contenuto.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger e Carvalho (2025)]] trattano il rapporto esempio–problema come un'interazione contenuto–trattamento: in un esperimento 2×2 con 95 partecipanti su materiale di geometria-aree, l'addestramento con sola pratica produceva [[learning-gains|guadagni di apprendimento]] maggiori per i fatti verbatim, mentre l'addestramento con esempi integrati produceva guadagni maggiori per le abilità generalizzabili (β = 0,41, p = ,038, d = 0,38). Uno studente simulato (Apprentice Learner) riproduceva il crossover solo quando riceveva un meccanismo [[cognitive-psychology|di memoria e oblio]] in stile ACT-R. Più pratica non è uniformemente meglio: il contenuto orientato alla memoria giustifica il recupero, e le abilità orientate all'induzione giustificano esempi integrati.
- **La progettazione come oggetto analizzabile.** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec e Horvat (2026)]] hanno rivolto il [[learning-analytics|learning analytics]] sulla [[learning-design|progettazione dell'apprendimento]] stessa, codificando 29.064 attività su 554 corsi pianificati in uno strumento libero di progettazione di corsi. L'Acquisizione era il tipo di apprendimento più comune e il punto di ingresso più comune; la più forte transizione di Markov era Valutazione → Discussione (0,332) e la regola con la più alta confidenza era Acquisizione → Valutazione → Pratica → Pratica (0,743, lift 1,45). Il tipo di apprendimento seguiva il livello di esito atteso, con l'Acquisizione che scendeva da circa il 50% delle attività al livello 1 di Bloom a circa il 20% al livello 6. Gli autori sottolineano che queste sono progettazioni pre-implementazione: la somiglianza con sequenze flipped, [[inquiry-based-learning|basate sull'inchiesta]] o [[project-based-learning|basate sul progetto]] non è prova di intento.
- **Fare audit dei modelli che valutano.** [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto e Hovy (2026)]] hanno auditato sei [[llm|LLM]] su [[automated-essay-scoring|correzione di saggi]], [[formative-assessment|feedback formativo]] e domande e risposte, mantenendo fisso l'input del compito mentre variava solo il contesto demografico (192.480 chiamate). Il punteggio era stabile sotto persone esplicite, ma Llama-70B gonfiava i propri punteggi di 1,57 punti sotto una storia conversazionale implicita (p < 0,001), e un livello di istruzione superiore produceva risposte meno leggibili e più positive — un divario di sentimento di circa quattro deviazioni standard. Gli effetti di leggibilità si riducevano mentre gli effetti di lunghezza crescevano, e alcuni coefficienti cambiavano segno tra le condizioni. Gli autori la offrono come strumento di audit, non come verdetto di dispiegamento, e leggono l'intreccio di segnale demografico e topico come una minaccia alla [[assessment-validity|validità]] e all'[[equity-in-ai-education|equità]].
- **Misurare la competenza, e i suoi limiti.** [[competent-generative-ai-use-measures-review-2026|Verí (2026)]] organizza gli strumenti per l'uso competente dell'[[generative-ai|IA generativa]] in quattro domini — conoscenza e uso, supervisione epistemica, calibrazione dell'affidamento e controllo degli agenti che usano strumenti — rifiutando di collassarli in un unico continuum di competenza. Tre correlazioni sullo stesso campione tra [[ai-literacy|alfabetizzazione sull'IA]] auto-valutata e dimostrata convergevano a r = ,055 (IC al 95% [-,047, ,156], N riportato = 2.765), che l'autore legge come sufficiente a rifiutare di trattare le [[self-report-measures|auto-valutazioni]] come intercambiabili con i punteggi di prestazione, sebbene non sufficiente a fissare un cutoff. Nessuno strumento validato copriva l'insieme completo di decisioni che gli agenti che usano strumenti creano; la batteria a livelli proposta è un'ipotesi di progettazione.
- **L'auto-rapporto sull'offloading proprio di chi apprende.** [[pause-ai-cognitive-offloading-self-reflection-2026|Alam (2026)]] traduce la letteratura sull'[[cognitive-offloading|offloading cognitivo]] nel PAUSE, un'autoverifica solo-browser con quattro domini, ogni item dell'era degli LLM ancorato a una fonte, senza punteggio composito, senza memorizzazione e senza modello in produzione; le sue fasce sono descrittive anziché normate, e una lettura non deve giustificare decisioni di valutazione, ammissione o assunzione. I suoi limiti dichiarati contano: l'auto-rapporto sull'offloading è vulnerabile alla facoltà che esso riguarda, un rispondente che usa deliberatamente l'IA come [[scaffolding|scaffold]] risulta come offloading su diversi item, e resta aperta la questione se l'offloading associato all'IA sia distinto dalla dipendenza tecnologica generale.
- **Dove risiede la competenza umana.** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang et al. (2024)]] riportano la divisione del lavoro più chiara: in un [[rct|trial controllato randomizzato]] di due mesi con circa 900 tutor novizi K-12 e circa 1.800 studenti, i suggerimenti in tempo reale tratti dal ragionamento di tutor esperti innalzavano la padronanza dell'argomento di 4 punti percentuali (dal 62% al 66%, p < 0,01), e di 9 punti per i tutor con valutazione più bassa, a circa \$20 per tutor all'anno, spostando il tutoring verso domande guida. I guadagni erano prossimali — i test di fine anno non si muovevano. [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert et al. (2026)]] trovano gli insegnanti arrivare alla stessa posizione per progettazione: sei insegnanti di scuola secondaria che prototipavano chatbot specificavano un esperto limitato, mantenendo confini di autorità (la responsabilità per l'apprendimento e la sicurezza non è delegabile) e confini di competenza (il modello manca della loro conoscenza degli studenti individuali), e delegando presentazione dei contenuti, pratica e [[feedback]] correttivo mentre riservavano la definizione degli obiettivi e la [[summative-assessment|valutazione sommativa]].
- **La competenza a livello di campo.** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury e Liu (2026)]] hanno sondato 127 docenti con uno strumento [[tpack|TPACK]] adattato per l'IA generativa: forte conoscenza dei contenuti e pedagogica dei contenuti (M = 4,70–5,15) accanto a una conoscenza integrata alla tecnologia marcatamente più bassa, con il TPACK olistico più basso a 2,55, la conoscenza dei contenuti non correlata con alcun dominio integrato alla tecnologia, e i tre domini integrati che correlavano così fortemente (r = ,81–,91) da poter funzionare come un unico fattore. [[perrotta-zero-shot-governance-2026|Perrotta (2026)]] legge lo strato di governance attraverso un prototipo interrotto della pubblica amministrazione britannica il cui codebase era un prompt di sistema più una pipeline di recupero su modelli commerciali, sostenendo che la generalità dei modelli di fondazione abilita sia il rapido riutilizzo in strumenti di [[educational-policy-ai|policy]] sia il rendere l'output aberrante un rischio permanentemente solo mitigabile — una supervisione che scruta oltre il ciclo anziché risiedervi dentro.
- **Il divario di integrazione, mappato:** [[malik-bashir-reconceptualizing-learning-sciences-hybrid-intelligence-2026|Malik e Bashir (2026)]] hanno sintetizzato 32 studi (PRISMA 2020, analisi tematica) in quattro temi: frammentazione epistemologica all'interno del campo, contraddizioni teoria–tecnologia (i sistemi computazionali girano su predizione e comportamento misurabile mentre le teorie educative enfatizzano contesto e interazione sociale), la dataficazione dell'apprendimento attraverso le analytics, e l'intelligenza ibrida come paradigma emergente. Il loro Hybrid Intelligence Framework è una sintesi concettuale, non un modello validato — gli autori dichiarano che attende verifica empirica — ma la mappa a quattro temi è una lente di audit utile per il problema di traduzione teoria-computazione che questo campo continua a colpire.
- **Come gli studenti usano un modello generativo conta più del se lo fanno.** La codifica di 50 scambi universitari ha trovato che il 64% erano revisione passiva o domande transazionali e solo il 36% dialogo strategico, e un compito strutturato attorno alla riflessione ha spostato l'equilibrio verso il dialogo ([[three-pathways-student-ai-interaction-2026|Zahra, 2026]]).
- **L'affidamento intra-persona precede un calo dell'[[agency|agency]] percepita.** Su tre ondate di dati di 342 studenti universitari in 85 gruppi fissi in un corso di scrittura [[collaborative-learning|collaborativa]] [[writing-education|assistita dall'IA]], un affidamento alla GenAI più alto del solito prediceva un'agenzia umana percepita successivamente più bassa, mentre il percorso inverso era più debole e non statisticamente sostenuto ([[genai-reliance-human-agency-collaborative-learning-2026|Wu e Lu (2026)]]).

- **La distribuzione dell'uso della GenAI è una scelta istituzionale.** [[sun-student-genai-entanglement-literacy-demands-2026|Sun, Dohn e Rehm (2026)]] hanno classificato 102 studi sull'istruzione superiore in base a come il lavoro epistemico era distribuito tra studente e sistema e hanno trovato le entanglement Assistant ed Enabler dominanti al 42,16% ciascuna, leggendo lo squilibrio come legittimità istituzionale anziché capacità tecnologica.

- **L'evidenza di processo dipende dal canale.** Codificando un compito di progettazione didattica assistito dalla GenAI con 79 studenti universitari sia nei log di interazione sia nel pensiero ad alta voce concorrente, [[metacognitive-processes-genai-interaction-logs-2026|Li e Liu (2026)]] hanno trovato evidenza di monitoraggio di maggiore profondità più comune nel resoconto ad alta voce ma evidenza di [[regulation|regolazione]] di maggiore profondità più comune nei log, quindi nessuna delle due tracce è da sola il criterio per un'affermazione [[metacognition|metacognitiva]].

## Come le scienze dell'apprendimento si relazionano ai loro vicini

Il [[design-based-research|design-based research]] è il metodo che questo campo ha sviluppato anziché preso in prestito: un intervento è costruito e rivisto dentro un'aula funzionante, con la sua giustificazione teorica rivista insieme ad esso, così che uno studio produca sia un artefatto sia un principio di progettazione. È questo che lo separa da un esperimento di laboratorio, che isola una causa tenendo fermo il contesto, ed è per questo che i risultati del campo arrivano come conoscenza di progettazione anziché come dimensioni dell'effetto. La [[research-methods-aied|ricerca metodologica sull'AIED]] fa il taglio opposto: quella pagina esplora l'intero repertorio — esperimenti, sondaggi, lavoro qualitativo, benchmark, revisioni, metodi di consenso — come una scelta tra strumenti, pesati per la validità dell'affermazione che ciascuno può supportare. Questa pagina legge lo stesso corpus dal lato sostantivo, chiedendo ciò che il repertorio ha stabilito sull'apprendimento e giudicando un metodo in base a se la sua affermazione di progettazione sopravvive al contatto con chi apprende.

Le [[learning-theories|teorie dell'apprendimento]] raccolgono i framework candidati — comportamentismo, cognitivismo, costruttivismo, resoconti socioculturali, motivazione e autoregolazione — come lenti per leggere l'IA. Le scienze dell'apprendimento condividono quel vocabolario ma non quella posizione: qui una teoria è un'affermazione sul meccanismo che una progettazione deve o istanziare o confutare, e la statura del campo poggia sul lavoro empirico e di progettazione anziché sulla coerenza di un framework. La pagina della teoria è quella da aprire per ciò che un framework asserisce; questa pagina è quella per l'evidenza che un framework ha accumulato.

Il campo costruisce anche teoria anziché solo testare framework presi in prestito: la [[theory-development-aied|teoria sullo sviluppo dell'AIED]] copre il lavoro concettuale che spiega come studenti, insegnanti e sistemi IA interagiscono, ed è dove i costrutti propri del campo sono argomentati prima di essere misurati. Ciò che alle sue progettazioni è di solito chiesto di produrre è il [[transfer-of-learning|trasferimento]] — conoscenza e abilità che sopravvivono oltre il tutor, la materia o il compito in cui sono state apprese — ed è per questo che un guadagno misurato dentro uno strumento conta come un'affermazione più debole di uno misurato senza di esso. E poiché un ambiente progettato è un intervento composto, attribuire un esito a una componente è il problema di misurazione permanente del campo: la [[educational-measurement|misurazione educativa]] fornisce l'apparato psicometrico che rende l'attribuzione argomentabile del tutto, ed è per questo che le questioni di misurazione arrivano presto qui anziché a posteriori.

La [[cognitive-psychology|psicologia cognitiva]] è la disciplina a livello di meccanismo su cui il campo attinge più pesantemente, fornendo memoria di lavoro limitata, codifica e recupero, componenti di conoscenza decomponibili e il linguaggio diagnostico della modellizzazione dello studente. Le scienze dell'apprendimento usano quei meccanismi senza ridurvisi: la loro unità di analisi è un ambiente progettato che porta variabili sociali, motivazionali e contestuali che un resoconto di laboratorio della memoria non ha, e i loro test sono condotti su interventi interi anziché su effetti cognitivi isolati.

La [[pedagogy|pedagogia]] e la [[learning-design|progettazione dell'apprendimento]] coprono la pratica — quale strategia didattica usare, e come sequenziare obiettivi, attività e valutazione in un corso. Entrambe sono ciò che le scienze dell'apprendimento studiano dall'esterno, come oggetti di descrizione e valutazione; il campo non dice a un insegnante quale tattica adottare, riporta ciò che le tattiche hanno dimostrato di fare. La progettazione dell'apprendimento è la parente più stretta, poiché entrambe producono qualcosa che può essere implementato e testato, ma l'output del progettista è un corso insegnabile e l'output del campo è conoscenza sulle progettazioni in generale.

I risultati contano solo una volta che raggiungono l'insegnamento, e quel viaggio passa attraverso tre pagine. Lo [[educational-development|sviluppo educativo]] è la pratica istituzionale che li veicola — sviluppo della facoltà, standard, policy e lavoro sull'identità decidono se una progettazione validata raggiunge mai un'aula, ed è per questo che l'evidenza del campo guida regolarmente ciò che le istituzioni hanno implementato. La [[teacher-education|formazione degli insegnanti]] è dove la conoscenza deve atterrare prima che un insegnante entri in classe, e il [[teacher-role|ruolo dell'insegnante]] è dove atterra dopo, nel giudizio momento per momento su quando intervenire, quale strumento usare, e quando lasciare uno studente da solo. Nessuna delle tre produce risultati di scienze dell'apprendimento; tutte e tre decidono se quei risultati cambiano la pratica.

## Idee sbagliate comuni

- **"Una soglia di padronanza alta garantisce che chi apprende sappia discriminare."** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren e Stamper (2026)]] hanno condotto **undici esperimenti (N = 192)** con sistemi di [[intelligent-tutoring|tutoring intelligente]] e hanno trovato che a una **soglia di padronanza del 95% il sistema arrestava la pratica prima che chi apprendeva incontrasse un caso che richiedeva di trattenere l'azione**, per cui il difetto restava non rilevato. La padronanza dell'azione non includeva il sapere quando non applicarla, e la soglia certificava il costrutto sbagliato.
- **"Più esempi sono più sicuri."** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger e Carvalho (2025)]] trattano il rapporto esempio-problema come un'**interazione contenuto-trattamento**, e in un esperimento 2×2 l'ottimo **dipendeva dal contenuto**. Non esiste un rapporto globalmente corretto, quindi un template didattico fisso è una scommessa contro un'interazione.
- **"Correggere l'idea sbagliata è questione di dire agli studenti la risposta giusta."** Una breve pratica "non agire" con [[feedback]] che nomina il vincolo mancante ha ridotto l'applicazione erronea a **0,0%-23,1% (h di Cohen 1,70-2,44)**, e un'analisi secondaria di **tredici dataset K-12 di *Decimal Point*** ha trovato lo stesso schema strutturale. L'intervento efficace era la pratica discriminante con feedback mirato, non la correzione per asserzione — che è ciò che il lavoro sulla [[refutation-text|confutazione]] stabilisce in generale.
- **"Un livello di Bloom più alto significa più apprendimento attivo."** Il tipo di apprendimento seguiva il livello di esito atteso, con l'**Acquisizione che scendeva da circa il 50% delle attività al livello 1 di Bloom a circa il 20% al livello 6**. La domanda cognitiva e il tipo di attività si muovono insieme ma non sono lo stesso asse, quindi etichettare un compito per livello di Bloom non dice che cosa gli studenti ne faranno.

## Implicazioni per la pratica

**Per gli insegnanti**

- Insegnate esplicitamente il caso negativo. Il fallimento della soglia al 95% è la ragione: costruite condizioni in cui la mossa corretta è trattenere l'azione, o chi apprende la applicherà ovunque.
- Non fissate il rapporto esempio-problema lungo un corso. L'interazione contenuto-trattamento significa che il rapporto giusto per le procedure non è quello giusto per i concetti.
- Usate la pratica discriminante con un feedback che nomina il vincolo mancante anziché ripetere la regola. È l'intervento con dimensioni dell'effetto misurate qui.
- Verificate che cosa certifica davvero il vostro criterio di padronanza prima di fidarvene.

**Per gli sviluppatori**

- Non fermate la pratica sulla sola correttezza. Modellate la condizione di trattenimento come un'abilità a sé, o il sistema certificherà l'ipergeneralizzazione.
- Lasciate che il rapporto sia un parametro anziché una costante, perché l'evidenza dice che l'ottimo dipende dal contenuto.
- Riportate quale costrutto misura il vostro criterio, separatamente da quale costrutto misura la vostra validazione.

## Concetti collegati

- [[learning-theories]]
- [[cognitive-psychology]]
- [[pedagogy]]
- [[learning-design]]
- [[research-methods-aied]]
- [[theory-development-aied]]
- [[design-based-research]]
- [[teacher-education]]
- [[educational-development]]
- [[discipline-specific-aied]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[transfer-of-learning]]
- [[teacher-role]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]

## Articoli collegati

- [[competent-generative-ai-use-measures-review-2026]] — Review and exploratory meta-analysis of measures for competent generative-AI use (Verí 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Correctness masking an incomplete rule: mastery stopping rules in adaptive learning (An, McLaren & Stamper 2026)
- [[demographic-signals-llm-student-assessment-2026]] — Counterfactual audit of demographic signals in LLM student assessment (Rooein, Benedetto & Hovy 2026)
- [[learning-paths-patterns-learning-design-2026]] — Markov chains and pattern mining over 29,064 activities in 554 courses (Divjak, Svetec & Horvat 2026)
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — A privacy-preserving, non-diagnostic self-check for AI-associated offloading (Alam 2026)
- [[perrotta-zero-shot-governance-2026]] — Zero-shot governance: general-purpose AI in policy, read through the Redbox codebase (Perrotta 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Why the best example–problem ratio depends on content (Rachatasumrit, Koedinger & Carvalho 2025)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — Teachers design bounded-expert chatbots, with selective delegation of instruction (Reichert et al. 2026)
- [[sutedjo-faculty-genai-tpack-21-2026]] — Faculty GenAI TPACK: strong content knowledge, weak technology-integrated knowledge (Sutedjo, Chowdhury & Liu 2026)
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: a randomized trial of human–AI live tutoring at scale (Wang et al. 2024)
- [[genai-support-threaten-learning-k20-expert-consensus-2026]] — Un Delphi preregistrato di 30 esperti su quali processi di apprendimento la GenAI potenzia e quali minaccia
- [[three-pathways-student-ai-interaction-2026]] — Una tipologia dell'interazione studente-IA: 64% passiva o transazionale, 36% dialogo strategico
- [[agent-type-feedback-style-self-directed-learning-2026]] — Lo stile del feedback, non il tipo di agente, ha mosso l'impegno autoregolativo
- [[metacognitive-processes-genai-interaction-logs-2026]] — L'evidenza di processo dipende dal canale

- [[sun-student-genai-entanglement-literacy-demands-2026]] — La distribuzione dell'uso della GenAI è una scelta istituzionale

- [[genai-reliance-human-agency-collaborative-learning-2026]] — L'affidamento intra-persona precede un calo dell'agenzia percepita
