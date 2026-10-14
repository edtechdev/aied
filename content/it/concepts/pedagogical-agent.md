---
title: Agente pedagogico
created: "2026-10-14T22:01:00-04:00"
connected_faqs: [ai-agents-support-students-instructors]
type: concept
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
reviewed_by: [editor]
translation_of: concepts/pedagogical-agent
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Sintesi**: gli agenti [[pedagogy|pedagogici]] sono interfacce conversazionali guidate dall'IA, integrate negli ambienti di apprendimento, che usano strategie pedagogiche (elicitazione, spiegazione, scaffolding) per sostenere il [[student-engagement|coinvolgimento di chi apprende]], la riflessione e la metacognizione. I progetti variano da semplici fornitori di informazioni a partner di dialogo interattivi che si adattano agli stati di chi apprende.

## Domande da considerare

- Pensa a una volta in cui un chatbot o un tutor ti ha dato una risposta perfetta che non ti ha lasciato più sapiente. Cosa fa sì che un'IA "insegni" anziché semplicemente "risolva" — e perché un punteggio in un benchmark potrebbe non cogliere quella differenza?
- La pagina rileva che i punteggi di "risoluzione" e quelli di "pedagogia" nei sistemi di tutoring correlano solo debolmente tra i modelli. Cosa dovrebbe dirti questo sulla valutazione di un tutor di IA in base alla sua capacità di rispondere alle domande?
- Alcuni progetti assegnano all'IA ruoli distinti — Insegnante, Compagno di classe, Mentore — e mantengono persino un genitore centralmente coinvolto (come in ParaTutor). Nella tua esperienza, dare a un agente un ruolo chiaro cambia il modo in cui [[learners|chi apprende]] interagisce con esso?
- Gli studenti reali spesso "aggirano" l'inquadramento pedagogico di un chatbot quando gli obiettivi dell'agente confliggono con i propri. Perché chi apprende potrebbe razionalmente ignorare un buon scaffolding, e cosa implica per l'assunto del "se lo costruiamo, si impegneranno"?
- Preferiresti imparare da un'IA che ti dice le cose, una che ti fa domande, o una che media una discussione di gruppo? Come plasma la tua preferenza ciò che pensi dovrebbe essere un "agente pedagogico"?
- Da un semplice fornitore di informazioni a una flotta di agenti specializzati che orchestra un intero corso — dove pensi che risiedano il valore (e il rischio) del tutoring conversazionale con l'IA?

## Introduzione

Un agente pedagogico è un componente di IA interattivo all'interno di un sistema di apprendimento che coinvolge chi apprende attraverso dialogo, domande o prompt per sostenere i processi cognitivi e [[metacognition|metacognitivi]]. A differenza delle [[visualization|dashboard]] passive o del feedback statico, gli agenti pedagogici impiegano strategie di tutoring basate su evidenze — come elicitare le [[assessment|autovalutazioni]] di chi apprende prima di fornire [[feedback]], o fare [[scaffolding|da scaffold]] alla [[problem-solving|risoluzione di problemi]] attraverso il dialogo socratico. L'ombrello copre ora tutto, da un singolo [[intelligent-tutoring|tutor intelligente]] conversazionale a flotte di [[agentic-ai|agenti]] specializzati per ruolo che tengono lezioni, fanno da mentori, facilitano la collaborazione e persino orchestrano la generazione di corsi, tutti ancorati a decenni di [[research-methods-aied|ricerca]] sui sistemi di tutoring intelligente.

## Come gli agenti pedagogici sono studiati nella base di conoscenza

**Progettazione e architettura degli agenti conversazionali.** Un filo ricorrente è come gli agenti sono strutturati, non solo quali modelli li alimentano. Il [[conversational-ai-tutors-framework|framework dei tutor conversazionali di IA]] sostiene che le [[ai-technologies|tecnologie]] ITS collaudate — [[knowledge-tracing|knowledge tracing]], rilevamento dell'affetto, [[student-modeling|modellazione dello studente]] — dovrebbero ancorare i tutor generativi, mantenendo la spina dorsale diagnostica mentre la [[generative-ai|IA generativa]] fornisce un dialogo flessibile. I progetti multi-agente spingono questo oltre: [[mooc-to-maic|MAIC]] sostituisce l'"un video per N studenti" del [[online-teaching-and-learning|MOOC]] con un'aula guidata da [[llm|LLM]] di agenti Insegnante, Assistente, Compagno di classe e Analizzatore per erogare [[personalized-learning|apprendimento personalizzato]] su larga scala, mentre [[lecturaagents-multi-agent-teaching|LecturaAgents]] aggiunge un ProfessorAgent [[embodied-learning|incarnato]] il cui algoritmo TASA allinea le azioni di [[teacher-role|insegnamento]] visibili (scrittura a mano, evidenziazione) ai profili di chi apprende. Persino il tutoring genitore–figlio diventa un problema a due agenti in [[paratutor-parent-child-tutoring|ParaTutor]], dove lo scaffolding a ruoli separati mantiene il genitore centralmente coinvolto anziché lasciare che un chatbot generico lo scavalchi. La stessa logica basata sui ruoli compare in [[instructional-agents-multi-agent-course-gen|Instructional Agents]], dove agenti Corpo docente, Progettista, TA e Presidente del corso di laurea collaborano lungo l'ADDIE per generare i materiali del corso.

Un uso complementare degli agenti basati sui ruoli prende di mira la pratica del [[teacher-education|docente]] anziché l'apprendimento dello studente: [[educasim-cs1-instructional-practice|Mohne et al. (2026)]] combinano persona studentesche pedagogiche, memoria ancorata al materiale effettivo del corso e un oracolo-ascoltatore LLM-as-a-judge, così che i docenti novizi provino una sezione in piccolo gruppo — 254 sessioni facoltative della durata media di circa 16 minuti ciascuna, a circa \\$0.05–\\$0.10 per sessione.

**Comportamento di insegnamento versus di risoluzione.** Un risultato empirico centrale è che la produzione di risposte non è supporto all'apprendimento. [[measuring-llm-tutors-teach-vs-solve|Misurare se i tutor LLM insegnano o risolvono]] mostra che i punteggi di risoluzione e di pedagogia sui benchmark di tutoring correlano solo debolmente (r = 0,421 su otto modelli), sostenendo che i benchmark devono riportare separatamente criteri orientati alla pedagogia — domande guida, suggerimenti calibrati, scaffolding non rivelatore. Ciò si allinea con l'evidenza [[stanford-evidence-base-ai-k12-2026|IA per il tutoring versus IA generale]]: i tutor progettati pedagogicamente con [[guardrails|guardrail]] mitigano i cali nei punteggi d'esame e la soppressione del ragionamento che i chatbot generalisti grezzi producono, preservando le [[desirable-difficulties|difficoltà desiderabili]] e la lotta produttiva anziché aggirarle. Eppure i benchmark possono sovrastimare quanto bene funzionino nel mondo reale persino i tutor con scaffold. [[rethinking-scaffolding-llm-tutors|Ripensare lo scaffolding nei tutor LLM]] rileva che gli studenti reali aggirano frequentemente l'inquadramento pedagogico di un chatbot, una risposta razionale a una discrepanza tra gli obiettivi dell'agente e quelli di chi apprende — quindi l'adozione deve essere valutata, non presunta.

**Ruolo nel tutoring e nella collaborazione.** Gli agenti sono sempre più posizionati non come fornitori di risposte ma come facilitatori e mediatori. Il [[niari-ai-pedagogical-mediator-collaborative-learning|framework del mediatore pedagogico di Niari]] riconsidera l'IA nell'[[collaborative-learning|apprendimento collaborativo]] come un mediatore interazionale, epistemico e regolativo — che fa da scaffold alla partecipazione e alla [[regulation|regolazione]] condivisa senza scavalcare l'[[agency|agentività]] del docente o di chi apprende. Concretamente, [[golrang-propact-pair-programming-2026|il tutoring collaborativo con l'IA (ProPACT)]] tratta la collaborazione stessa come oggetto dell'istruzione, prevedendo i cedimenti delle diadi fino a 30 secondi prima ed erogando scaffold minimamente intrusivi che preservano la [[metacognition|metacognizione]]. [[embodied-inquiry-ai-facilitator-physics-2026|L'indagine incarnata con l'IA come facilitatore]] mostra che un'IA può completare la costruzione manuale di modelli facilitando l'applicazione di un modello costruito, mentre la [[robot-assisted-language-learning-meta-analysis-2026|meta-analisi sull'apprendimento delle lingue assistito da robot]] rileva che i risultati dipendono dal modo in cui un agente robotico è posizionato nell'istruzione (interazione basata sul gruppo) più che dalla sua sofisticazione tecnica. Se il *ruolo* che un agente ricopre sia sufficiente, o se debba anche *adattare il proprio comportamento*, è messo in discussione da [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]]: uno [[k-12|scolastico]] di "conversazione sul libro" ha trovato che un compagno fisso con ruolo di "compagno studente" sosteneva interazioni più lunghe eppure sopprimeva l'agentività degli studenti e sbatteva su un "soffitto [[affective-computing|affettivo]]" (debole riflessione emotiva e orientata al futuro), sostenendo che l'*etichettatura* del ruolo deve essere abbinata a una logica di interazione adattiva al ruolo anziché a un progetto monolitico a ruolo singolo.

[[ethics-training-agents-group-ethics-discussion-2026|Ethics Training Agents (Seo et al., 2026)]] mostra cosa accade quando a un agente pedagogico si chiede di moderare anziché di insegnare: un facilitatore LLM che gestisce l'alternanza dei turni (coda con finestre di alzata di mano di 15 secondi), la gestione del tempo (avanzamento automatico di una fase alla conclusione dopo 9 minuti) e la sintesi incrementale a lotti ha ridotto il carico cognitivo dei partecipanti e ha dato loro la sensazione che la discussione fosse "in carreggiata" — un partecipante l'ha contrapposta favorevolmente a ChatGPT, che "spesso può sembrare disorganizzato o rendere difficile vedere il progresso delle idee". Lo stesso studio espone il soffitto degli agenti basati sulle persona: i tre agenti a orientamento [[ethics|etico]] distinti sono stati valutati significativamente al di sotto dei pari umani su contributo, diversità e influenza (Kruskal-Wallis p < ,001), e i partecipanti hanno chiesto output orientati al processo ("come l'agente ragiona") anziché orientati alla conclusione.

**Dove gli agenti conversazionali sono (e non sono) usati — il quadro dell'umbrella review.** L'[[conversational-ai-agents-umbrella-review-2026|umbrella review sugli agenti conversazionali di IA]] (Ganguly et al. 2025, 34 rassegne) quantifica l'utilizzo dell'IA conversazionale: supporto all'insegnamento e all'apprendimento (97,1% delle rassegne), supporto psicologico e [[motivation|motivazionale]] (91,2%), e sviluppo metacognitivo e personale (88,2%) guidano, mentre il supporto amministrativo (50%), la gestione di ricerca e informazioni (52,9%) e il supporto sanitario/medico (41,2%) restano indietro. Segnala inoltre che la ricerca sull'[[conversational-ai|IA conversazionale]] manca di indicazioni progettuali end-to-end, di metodi di [[usability-research|usabilità]] specifici per l'IA conversazionale e di strategie concrete di orchestrazione in classe per il ruolo del docente — rafforzando che la progettazione degli agenti pedagogici deve essere fondata sull'HCI, basata su evidenze e attenta all'[[ai-literacy|alfabetizzazione all'IA]]. ([[conversational-ai-agents-umbrella-review-2026]])

**L'orientamento di ruolo è una variabile progettuale, non una scelta stilistica.** Il [[wang-teacher-student-centered-agents-physics-2026|confronto tra agenti di fisica]] (Wang et al. 2026, 59 apprendenti) isola il ruolo specificato dal prompt mantenendo fissi modello, piattaforma e temperatura: un agente centrato sul docente, ancorato a una fonte testuale delimitata e rispondente dalla prospettiva dell'insegnante, contro un agente centrato sullo studente, configurato con la conoscenza della comprensione degli studenti e programmato per diagnosticare i misconcepiti, nominare il concetto e [[transfer-of-learning|trasferirlo]] a un caso analogo. Il ruolo centrato sullo studente ha vinto su ogni risultato misurato — performance post-test, carico cognitivo estraneo inferiore e carico cognitivo germanico superiore, esperienza di flow ed empatia percepita — anche se l'agente centrato sul docente era quello ottimizzato per accuratezza e fedeltà al testo. Questo rende *il ruolo e lo schema di interazione* un parametro progettuale di prima classe accanto a [[prompt-engineering|prompt]] e scelta del modello, e mostra che l'empatia può essere ingegnerizzata dalla struttura conversazionale anziché da un modello diversamente addestrato ([[affective-computing]]).

**L'intento di authoring non garantisce la pedagogia attuata.** Quando 27 insegnanti della scuola media hanno configurato uno strumento di authoring di chatbot rivolto ai docenti, una valutazione di 108 valutazioni di criteri a livello di bot ha trovato che le risposte generate si allineavano molto meglio con la reattività (88,9%) e la persona (81,5%) che con le regole (70,4%) o lo scopo dichiarato (59,3%), cosa che gli autori inquadrano attraverso le forme pedagogiche del Golfo dell'Esecuzione e del Golfo della Valutazione di Norman — i soli controlli configurabili non rendevano visibile nel comportamento del bot l'intento didattico dell'insegnante ([[teachers-configure-educational-chatbots-2026|Riahi et al. (2026)]]).

**Agenti in contesti immersi e di realtà estesa.** [[aclime-pedagogical-agents-extended-reality-2026|Ross e Kaspar (2026)]] estendono il concetto nella [[virtual-and-augmented-reality|realtà estesa]] (AR, virtualità aumentata e VR) con ACLIME, un framework concettuale che — a differenza di CAMIL, CATLM-VR e TICOL — mantiene l'agente dentro il modello. Nomina due modalità di interazione tratte dalla letteratura: il tutor, che offre guida, incoraggiamento, interrogazione riflessiva e spiegazioni, e il partner di gioco di ruolo, che occupa un ruolo definito dentro uno scenario come un abitante del luogo in una gita sul campo sui cambiamenti climatici o una controparte in trattativa nella formazione aziendale. Il corpo dell'agente (dalla sola testa al corpo intero) e il suo comportamento sono trattati come superfici progettuali: realismo visivo versus comportamentale, controllo flessibile dell'IA versus script fisso basato su regole, parlato sintetizzato versus preregistrato, e canali non verbali tra cui sguardo, gesto e prossemica. L'immersione e l'interattività corporea sono ritenute moltiplicare gli indizi sociali dietro la [[community-of-inquiry|presenza sociale]] — il realismo comportamentale, non quello visivo, è proposto come predittore decisivo — mentre il corpo virtuale di chi apprende aggiunge una dimensione di [[embodied-learning|incarnazione]] (proprietà del corpo, agentività del corpo virtuale proprio, auto-localizzazione) e l'effetto proteus. Il trade-off esplicito del framework è cognitivo: l'immersione e la mera presenza dell'agente possono aumentare il carico cognitivo anche mentre l'interazione sociale con l'agente lo riduce attraverso l'effetto di memoria di lavoro collettiva, e uno strato temporale (familiarizzazione, maturazione delle relazioni umano-agente, declino della novità, sviluppo del mal di cyberspazio) è aggiunto alle consuete variabili progettuali. Il suo status è deliberatamente provvisorio: quasi nessun lavoro empirico testa ancora gli agenti pedagogici nei media immersivi, e i [[learning-gains|risultati di apprendimento]] a lungo termine come pure le caratteristiche di chi apprende restano fuori dal modello.

**Valutazione e benchmark.** Misurare un agente pedagogico richiede di testare la pedagogia, non i contenuti. [[teaching-monster-pck-benchmark-2026|Il Teaching Monster Challenge]] mette a benchmark la Conoscenza Pedagogica dei Contenuti chiedendo agli agenti di adattare una lezione a una persona specificata di chi apprende, trovando i sistemi forti sui contenuti ma deboli nel loro adattamento — e rivelando che i giudici LLM classificano male i sistemi forti. [[chen-teacharena-language-agents-realistic-teaching-2026|EduAgentBench]] valuta gli agenti sul giudizio pedagogico professionale, sul tutoring multi-turno [[situated-learning|situato]] e sul completamento di flussi di lavoro in stile canvas, mostrando che i modelli non raggiungono gli standard professionali dell'insegnamento. La [[ai-generated-interactive-fiction-education-2026|finzione interattiva generata dall'IA]] aggiunge un'angolazione di valutazione progettuale: la coerenza e l'integrazione dei quiz, non la capacità di generazione, limitano l'utilità per l'[[student-experience|esperienza dello studente]].
**Stress-test della robustezza della persona su più turni.** [[adversarial-stress-testing-role-playing-agents|Shouqi et al. (2026)]] hanno condotto sei attacchi crescenti contro agenti di gioco di ruolo con un Giudice automatizzato: il testing multi-strategia ha ridotto la robustezza di 0,17–0,20 rispetto a una baseline a strategia singola, e i fallimenti critici si sono concentrati dopo il turno 5–6, così che valutazioni brevi o a turno singolo sovrastimano la stabilità della persona e l'adesione etica.

## Orientamenti pratici

Progettare per l'agentività di chi apprende, non per la comodità del modello. Favorire i guardrail specifici del tutoring — [[scaffolding|scaffolding]], suggerimenti, [[socratic-method|interrogazione socratica]], targeting dei [[misconceptions|misconcepiti]] — rispetto alla generazione grezza di risposte, poiché risolvere e insegnare divergono. Distribuire il supporto per ruolo d'uso (genitore versus figlio, pari versus pari) anziché attraverso un'unica interfaccia generica, e trattare la collaborazione come un bersaglio valido per lo scaffolding. Non presumere che gli studenti adottino lo scaffolding; valutare l'adozione in contesti reali. Costruire la [[human-in-the-loop-ai|supervisione umana]] nell'authoring — come fa [[ai-tutor-authoring-promptdecipher|PromptDecipher]] rendendo il controllo di qualità delle risposte del bot da parte dell'insegnante un'attività di prima classe — e scegliere backend più economici dove la qualità regge. Riportare separatamente i punteggi di insegnamento e di risoluzione, e validare i contenuti generati con gli utenti anziché presumere che generazione significhi utilità.

La preferenza di chi apprende è un cattivo surrogato della qualità dello scaffolding: gli studenti nella modellizzazione matematica supportata dall'IA hanno performato meglio con i ruoli Pari e Assistente del docente, eppure hanno valutato più in alto su utilità e auto-efficacia i ruoli più direttivi Tutor e Studente eccellente ([[preferred-scaffolding-ai-mathematical-modeling|Zhu, Yang e Yang (2026)]]).
Una rassegna di 46 studi sugli agenti di IA nell'apprendimento collaborativo supportato dal computer distingue scaffolding cognitivo, facilitazione sociale e orchestrazione didattica, e trova i guadagni cognitivi consistenti mentre i risultati comportamentali, sociali ed emotivi dipendono dal contesto — quindi la funzione dell'agente dovrebbe essere scelta per il risultato che è destinata a produrre ([[ba-ai-agents-cscl-review-2026|Ba et al. (2026)]]).

## Collegamenti con i concetti correlati

Gli agenti pedagogici si collocano all'intersezione tra [[intelligent-tutoring|tutoraggio intelligente]] (la loro spina dorsale diagnostica di [[knowledge-tracing|knowledge tracing]] e modellazione dello studente) e [[generative-ai|IA generativa]]/[[llm|LLM]] (il loro motore di erogazione). Essi operazionalizzano [[scaffolding|scaffolding]] e [[feedback]], mirano alla [[metacognition|metacognizione]] e all'[[self-regulated-learning|auto-regolazione dell'apprendimento]], e prendono sempre più di mira l'[[collaborative-learning|apprendimento collaborativo]]. Le preoccupazioni per la sicurezza ricorrono attraverso [[pedagogical-safety|sicurezza]], qualità dell'authoring, e il rischio che gli agenti [[cognitive-offloading|scolleghino]] l'apprendimento anziché sostenerlo. Tutto ciò è valutato attraverso [[ai-ed-evaluation|valutazione]] e [[benchmark|benchmark]] che devono misurare l'insegnamento, non solo la risoluzione.

Fondamentalmente, gli agenti pedagogici sono giudicati dai loro [[learning-gains|guadagni di apprendimento]], non da quanto rispondano fluentemente. L'evidenza della base di conoscenza è che gli agenti producono guadagni durevoli quando sono progettati come coach specifici del tutoring con guardrail — [[stanford-evidence-base-ai-k12-2026|l'IA specifica del tutoring supera costantemente i chatbot generalisti]] — e possono nuocere all'apprendimento quando si sostituiscono allo sforzo di chi apprende ([[generative-ai-guardrails-harm-learning|l'RCT sui guardrail]], [[jost-llm-programming-education-learning-outcomes|dipendenza dagli LLM e voti]]). Misurare i [[learning-gains|guadagni di apprendimento]] di un agente richiede quindi misure di risultato senza assistenza e trasferibili, non la performance dentro lo strumento.

Un feedback migliore non equivale a un apprendimento migliore: personalizzare un agente con basi di conoscenza e un flusso di lavoro ha aumentato l'accuratezza e la specificità del feedback ma ha lasciato immutati i comportamenti auto-regolativi, le esperienze di apprendimento e i risultati, e il suo vantaggio di guadagno è comparso solo sotto feedback direttivo ([[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]).

## Concetti collegati

- [[learning-gains]]
- [[pedagogical-safety]]
- [[agentic-ai]]
- [[ai-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[metacognition]]
- [[feedback]]
- [[collaborative-learning]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[knowledge-tracing]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[socratic-method]]
- [[teacher-role]]

## Articoli collegati
- [[wang-teacher-student-centered-agents-physics-2026]] — Il ruolo di agente centrato sullo studente supera il ruolo centrato sul docente su performance, carico, flow ed empatia (Wang et al. 2026)
- [[aclime-pedagogical-agents-extended-reality-2026]] — ACLIME: conceptual framework for pedagogical agents in AR/VR — tutor vs role-playing partner, realism, presence, cognitive load (Ross & Kaspar 2026)
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-generated-interactive-fiction-education-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[adversarial-stress-testing-role-playing-agents]]
- [[teaching-monster-pck-benchmark-2026]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[mooc-to-maic]]
- [[rethinking-scaffolding-llm-tutors]]
- [[lecturaagents-multi-agent-teaching]]
- [[robot-assisted-language-learning-meta-analysis-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[golrang-propact-pair-programming-2026]]
- [[conversational-ai-tutors-framework]]
- [[instructional-agents-multi-agent-course-gen]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[paratutor-parent-child-tutoring]]
- [[agents-that-teach-incidental-learning]]
- [[ai-tutor-authoring-promptdecipher]]
- [[educasim-cs1-instructional-practice]] — EducaSim: generative student agents for instructional practice
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents in education
- [[conversational-agents-novice-programmers-scoping-2025]] — Scoping review of conversational agents for novice programmers
- [[ba-ai-agents-cscl-review-2026]] — AI agents in computer-supported collaborative learning review
- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems to Support Productive-Failure-Based Learning
- [[preferred-scaffolding-ai-mathematical-modeling]] — Preferred scaffolding in AI-supported mathematical modeling
- [[llm-adaptive-programming-error-explanations-2026]] — LLM adaptive explanations of programming errors
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — Role-adaptive AI companion for elementary book talk; affective ceiling of fixed-role agents (Liao 2026)
- [[ethics-training-agents-group-ethics-discussion-2026]] — Ethics Training Agents: Facilitating Group-Based Ethics Education with Role-Playing and Discussion for Ethical Reflection and Exploration

- [[teachers-configure-educational-chatbots-2026]] — Will It Teach as Intended? How Teachers Configure Educational AI Chatbots

- [[agent-type-feedback-style-self-directed-learning-2026]] — Customized agent raised feedback quality but not self-regulation or outcomes; gain edge only under directive feedback
