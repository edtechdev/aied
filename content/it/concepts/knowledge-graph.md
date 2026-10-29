---
title: Grafo della conoscenza
created: "2026-10-14T23:00:00-04:00"
type: concept
foundations: [ai-education, curriculum-design]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, student-modeling]
confidence: high
translation_of: concepts/knowledge-graph
source_updated: "2026-10-09T09:25:11-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Grafo della conoscenza** — una rappresentazione strutturata di concetti e delle loro relazioni, usata per modellare la conoscenza di dominio, la comprensione dello studente e le dipendenze di apprendimento nei sistemi di [[ai-education|IA nell'istruzione]]. I grafi della conoscenza consentono ai sistemi di IA di ragionare su ciò che gli studenti sanno, su ciò che devono apprendere in seguito, e su come i concetti si relazionano tra loro.

## Domande da considerare

- Un grafo della conoscenza cattura non solo i concetti ma le loro relazioni — prerequisiti, somiglianza, gerarchia. Perché sapere come i concetti si relazionano potrebbe essere più utile a un sistema adattivo di un elenco piatto di abilità?
- Come sono fatte le relazioni di prerequisito in un dominio come il vostro? Sapete pensare a un argomento in cui gli studenti faticano regolarmente perché gli manca un concetto fondamentale che il grafo rivelerebbe?
- La pagina descrive l'uso dei grafi della conoscenza per individuare le lacune di conoscenza — i punti in cui chi apprende non possiede i concetti fondamentali. In che modo rendere visibile quella lacuna potrebbe cambiare ciò che un tutor con IA decide di insegnare dopo?
- I grafi della conoscenza possono essere costruiti manualmente o automaticamente dagli LLM a partire da testi educativi. Quali sono i rischi nel lasciare che un'IA costruisca la struttura dei concetti su cui un tutor dovrà poi ragionare?
- Se i grafi della conoscenza forniscono la struttura di dominio su cui ragionano gli agenti di IA, che cosa accade alla fiducia e all'accuratezza quando il grafo stesso contiene un errore o una relazione distorta?
- Un grafo della conoscenza è descritto come la spina dorsale strutturale che consente la diagnosi fine-grained e i percorsi personalizzati. Nel vostro [[teacher-role|insegnamento]] o nella vostra progettazione, che cosa dovreste far catturare a un grafo della conoscenza della vostra materia — e che cosa lascerebbe fuori?

## Introduzione

I grafi della conoscenza forniscono la spina dorsale strutturale di molti sistemi di istruzione intelligente. A differenza degli elenchi piatti di abilità o concetti, i grafi della conoscenza catturano le relazioni di prerequisito, la somiglianza e l'organizzazione gerarchica — essenziali per l'[[adaptive-learning|apprendimento adattivo]], il [[knowledge-tracing|knowledge tracing]] e la [[student-modeling|modellazione dello studente]].

## Come si usano i grafi della conoscenza nell'AIED

I grafi della conoscenza sono un meccanismo strutturale ricorrente nella [[research-methods-aied|ricerca]] AIED della base di conoscenza, e assolvono diversi ruoli distinti:

- I modelli di **[[knowledge-tracing|knowledge tracing]]** usano grafi di concetti per propagare le stime di competenza dello studente attraverso abilità correlate, migliorando l'accuratezza della predizione quando i dati sono scarsi.
- I sistemi di **[[student-modeling|modellazione dello studente]]** sfruttano i grafi della conoscenza per rappresentare ciò che chi apprende sa in modo semanticamente significativo, consentendo una diagnosi fine-grained.
- Le piattaforme di **[[adaptive-learning|apprendimento adattivo]]** usano grafi di prerequisiti per sequenziare i contenuti e raccomandare [[personalized-learning|percorsi di apprendimento personalizzati]].
- **La scelta dell'algoritmo sul grafo cambia gli esiti.** In G4L, propagare la padronanza attraverso un Evolving Knowledge Space Graph con propagazione bayesiana della conoscenza ha prodotto +24% di conoscenza misurata (da 0,717 a 0,887), contro +5% per la Knowledge Space Theory e +1% per la Weighted Distance Dependent Induction ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).
- I framework di **[[cognitive-diagnosis|diagnosi cognitiva]]** come [[xie-hillm-cd-2026|HiLLM-CD]] costruiscono alberi di concetti a partire da testi educativi usando gli LLM, eliminando l'annotazione manuale.
- **Tutoraggio aumentato con il grafo della conoscenza:** [[quantum-education-its|ITAS]] usa un grafo della conoscenza dei concetti quantistici (con relazioni di prerequisito esplicite) per guidare un sistema di tutoraggio multi-agente, attraversando il grafo per selezionare gli argomenti successivi su materiale controintuitivo.
- **Modellazione dei curricoli e dei corsi:** [[coursegraph-cs-course-comparison-2026|CourseGraph]] confronta le strutture dei corsi di informatica tra istituzioni usando rappresentazioni a grafo; i [[learnity-graphs-lifelong-learning-framework-2026|grafi Learnity]] modellano i percorsi di [[lifelong-learning|apprendimento permanente]].
- **Apprendimento delle relazioni di prerequisito:** [[proprl-prerequisite-relation-learning|ProPrL]] apprende le relazioni di prerequisito tra i concetti, formalizzando gli archi che i grafi della conoscenza codificano.
- **Individuazione delle lacune di conoscenza:** la [[knowledge-gap-detection-ai-tas|Knowledge gap detection]] usa il ragionamento basato su grafi negli assistenti didattici con IA per individuare i punti in cui chi apprende non possiede i concetti fondamentali.
- **Ragionamento [[multimodal|multimodale]] e spiegabile:** i [[multimodal-knowledge-graph-educational-reasoning|grafi della conoscenza multimodali]] estendono la struttura a grafo attraverso le modalità di contenuto; le [[fair-explainable-edu-recommendations|raccomandazioni eque e spiegabili]] combinano gli embedding dei grafi della conoscenza con la modellazione sequenziale (un framework ibrido HKG-GRU).
- **Grafi strutturati dal punto di vista didattico per la raccomandazione di risorse:** [[hybrid-cf-kg-recommendation-multimodal-teaching-2026|Liu, Sun & Song (2026)]] scompongono ogni entità-risorsa didattica in quattro dimensioni didattiche (contesto didattico, livello cognitivo, caratteristica tecnologica, adattabilità culturale), calcolano la somiglianza semantica dipendente dall'utente su quelle dimensioni, e la fondono con il collaborative filtering mediante un coefficiente sensibile all'abilità e al progresso — codificando la struttura pedagogica direttamente nel segnale di raccomandazione anziché trattare le risorse come oggetti di consumo.
- **Basi di conoscenza basate su ontologie:** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova (2026)]] propone un'architettura di base di conoscenza a strati e ibrida, fondata sulla description logic, che sostituisce i classici modelli ITS a ontologia singola con **sistemi di ontologie mappate** — aggiungendo conoscenza implicita procedurale (basata su regole), probabilistica/fuzzy ed estratta con ML — oltre che un framework di metadati per descrivere, scoprire e riusare le ontologie educative.
- **[[scaffolding|Supporto]] e scrittura:** [[veriforge-narrative-drafting-scaffolding-2026|Veriforge]] e il [[visual-query-tracer-declarative-logic-learning|tracciamento visuale delle interrogazioni]] applicano la struttura a grafo alla stesura narrativa e all'apprendimento della logica dichiarativa.
- **Grafi letterari curati dall'uomo, e che cosa rivela una verifica:** [[incipit-axiom-grounded-scaffolding-literary-creation-2026|Incipit]] mette in grafo premesse letterarie — 1.455 record di assiomi, 1.464 mappature verso 149 opere e 472 relazioni tipizzate — con [[llm|modelli linguistici]] che propongono formulazioni candidate che i curatori umani hanno selezionato e fondato. La sua verifica ricalcolata è tanto istruttiva quanto la sua struttura: ogni endpoint si risolve e non resta alcun duplicato o auto-collegamento, eppure 1.448 dei 1.455 assiomi mappano esattamente a un'opera sola (quindi il riuso tra opere è scarso), la tassonomia dei contesti non riesce a separare i suoi due tipi di contesto, e non sopravvive alcun record di provenienza, lasciando lo snapshot incapace di ricostruire la propria pipeline. La validità strutturale non è qualità interpretativa, e un grafo curato senza provenienza non può essere né verificato né aggiornato.

## Costruzione di grafi della conoscenza guidata dagli LLM

Ricerche recenti esplorano l'uso degli [[llm|LLM]] per costruire automaticamente grafi della conoscenza a partire da contenuti educativi. Il framework [[xie-hillm-cd-2026|HiLLM-CD]] usa pipeline multi-agente basate su LLM per generare collegamenti esercizio-concetto e alberi di concetti gerarchici, riducendo la dipendenza dall'annotazione degli esperti. Questo si collega alle applicazioni più ampie dell'[[generative-ai|IA generativa]] nella progettazione curricolare e nell'organizzazione automatizzata dei contenuti, e al [[rag|RAG]] (retrieval-augmented generation), dove la conoscenza strutturata a grafo può migliorare la qualità del recupero rispetto alla ricerca per somiglianza su dati piatti.

## Relazione con altri concetti

I grafi della conoscenza si collegano al [[learning-design|learning design]] (definire che cosa insegnare), alla [[curriculum-design|progettazione curricolare]] (come sequenziarlo) e ai [[learning-analytics|learning analytics]] (estrarre insight dai dati di interazione degli studenti). Sono fondamentali per i sistemi di [[intelligent-tutoring|tutoraggio intelligente]] che necessitano di rappresentazioni strutturate dei domini educativi. Man mano che gli agenti di IA diventano più comuni nell'istruzione, i grafi della conoscenza forniscono la struttura di dominio su cui ragionano i [[agentic-ai|sistemi agentici]] — uno schema osservato in [[quantum-education-its|ITAS]] e negli assistenti didattici per l'individuazione delle lacune di conoscenza.

## Concetti collegati

- [[adaptive-learning]]
- [[knowledge-tracing]]
- [[intelligent-tutoring]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[learning-analytics]]
- [[curriculum-design]]
- [[learning-design]]
- [[generative-ai]]
- [[llm]]
- [[rag]]
- [[agentic-ai]]
- [[ai-technologies]] — Ombrello: tecnologie e tecniche di IA (modelli, addestramento di LLM, robotica, RAG, agenti)
- [[recommender-systems-and-learning-paths]]
## Articoli collegati
- [[incipit-axiom-grounded-scaffolding-literary-creation-2026]] — A curator-built graph of 1,455 literary axioms with a structural audit and no provenance record (Liu & Zhao 2026)
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-based layered hybrid knowledge model for personalized e-learning
- [[learnity-graphs-lifelong-learning-framework-2026]] — Learnity graphs for lifelong learning
- [[veriforge-narrative-drafting-scaffolding-2026]] — Veriforge: narrative-drafting scaffolds
- [[quantum-education-its]] — Quantum education intelligent tutoring (ITAS)
- [[multimodal-knowledge-graph-educational-reasoning]] — Multimodal knowledge graphs for educational reasoning
- [[coursegraph-cs-course-comparison-2026]] — CourseGraph: CS course comparison
- [[proprl-prerequisite-relation-learning]] — ProPrL: prerequisite-relation learning
- [[knowledge-gap-detection-ai-tas]] — Knowledge-gap detection in AI teaching assistants
- [[visual-query-tracer-declarative-logic-learning]] — Visual query tracer for declarative logic learning
- [[fair-explainable-edu-recommendations]] — Fair and explainable educational recommendations
- [[hybrid-cf-kg-recommendation-multimodal-teaching-2026]] — Hybrid CF–KG cross-domain recommendation for multimodal teaching resources
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-driven cognitive diagnosis
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[cogevol-learning-environment-generation-2026]] — CogEvol: Learning Environment Generation
