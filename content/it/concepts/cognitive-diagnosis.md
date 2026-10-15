---
title: Diagnosi cognitiva
created: "2026-10-14T21:55:00-04:00"
type: concept
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, student-modeling]
assessment: [assessment, educational-measurement, psychometrically-aware-ai]
confidence: high
reviewed_by: [editor]
translation_of: concepts/cognitive-diagnosis
source_updated: "2026-10-15T10:00:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> La **diagnosi cognitiva** — l'inferenza dello stato di conoscenza latente di chi apprende — i concetti, le abilità e le misconcezioni specifiche che possiede o di cui è privo — a partire dalle sue risposte o dal suo comportamento. È la controparte valutativa del [[knowledge-tracing]], incentrata sulla caratterizzazione di *cosa* uno studente sa piuttosto che sulla sola previsione della sua performance successiva.

## Domande da considerare

- La diagnosi cognitiva inferisce lo stato di conoscenza latente di chi apprende — i concetti, le abilità e le misconcezioni specifiche che possiede o di cui è privo — a partire dalle sue risposte, anziché limitarsi a prevedere il suo voto successivo. Prima di leggere, quale differenza vi aspettereste tra «prevedere il voto di uno studente» e «diagnosticare ciò che effettivamente non comprende»?
- Un'idea chiave è la «trappola della risposta corretta» — dove una risposta giusta nasconde un ragionamento fallace. Vi è mai capitato di essere certi che uno studente avesse capito qualcosa perché aveva risposto bene, per poi scoprire una misconcezione sottostante? In che modo una diagnosi potrebbe portarla alla luce laddove un voto non potrebbe?
- La pagina distingue la diagnosi cognitiva (un'istantanea statica e a grana fine di ciò che chi apprende possiede attualmente) dal knowledge tracing (le dinamiche temporali della padronanza nel tempo). Perché un tutor intelligente avrebbe bisogno di entrambi — di sapere cosa non va e di sapere cosa insegnare dopo?
- Un principio progettuale consiste nel separare la diagnosi dal feedback: i tutor basati su LLM confermano i passaggi corretti ma rifiutano eccessivamente ragionamenti validi e convalidano eccessivamente gli errori, e una diagnosi accurata non produce in modo affidabile un feedback utilizzabile. Perché sapere cosa non va può comunque non tradursi in un passo successivo utile?
- La diagnosi nell'era degli LLM si estende dal risposta multipla al lavoro a risposta aperta, scritto a mano e conversazionale. Cosa potrebbe andare storto se un'IA diagnosticasse una misconcezione a partire da un lavoro che non può comprendere appieno — e come verifichereste che la diagnosi stessa sia affidabile?

## Introduzione

Laddove il knowledge tracing stima tipicamente una padronanza scalare nel tempo, la diagnosi cognitiva produce un profilo più granulare: quali componenti di conoscenza sono padroneggiate, quali sono fragili e quali misconcezioni sono presenti. Questo profilo è il sostrato per [[personalized-learning|l'apprendimento personalizzato]], [[intelligent-tutoring|i tutor intelligenti]] e [[adaptive-learning|l'apprendimento adattivo]].

### Come funziona la diagnosi cognitiva

- **Modelli diagnostici:** i modelli psicometrici (spesso riconducibili alla [[item-response-theory|teoria della risposta all'item]] e alla [[educational-measurement|misurazione educativa]]) inferiscono stati di abilità latenti a partire da schemi di risposte corrette ed errate, talvolta tramite modelli di diagnosi cognitiva che mappano gli item su molteplici componenti di conoscenza.
- **Ricerca automatica di modelli:** poiché nessun singolo modello diagnostico si adatta a ogni studente, gli approcci guidati da [[machine-learning|AutoML]] (ad esempio la ricerca di architetture cognitive neurali personalizzate) generano modelli diagnostici per profili di studenti eterogenei — integrando dati educativi [[multimodal|multi-modali]] per consentire l'analisi dinamica dei processi di apprendimento e la diagnosi cognitiva per singolo studente, anziché affidarsi a esiti statici di [[summative-assessment|esame]] e a semplici indicatori statistici ([[personalized-neural-cognitive-architecture-search-2026]]).
- **Dati di risposta:** la diagnosi si basa sulle risposte a valutazioni, suggerimenti, [[help-seeking|richieste di aiuto]] e tempo di permanenza sul compito — segnali più ricchi dei punteggi grezzi.
- **Diagnosi basata su LLM:** gli approcci più recenti usano [[llm|i modelli linguistici di grandi dimensioni]] per diagnosticare a partire da lavori a risposta aperta o scritti a mano, e per identificare le [[misconceptions|misconcezioni]] specifiche dietro un errore (ad esempio la «trappola della risposta corretta», dove una risposta giusta nasconde un ragionamento fallace). Due risultati del 2026 delimitano fin dove arrivi tale diagnosi. [[omniedu-open-educational-foundation-models-2026|OmniEdu (Liang et al., 2026)]] ha supervisionato il ragionamento diagnostico come una delle quattro capacità di una famiglia aperta 4B/9B/27B, e la diagnosi dello stato di conoscenza è rimasta la sua capacità misurata più debole — 54,04% a 27B e 53,55% a 9B, abbastanza vicine da far sì che tre volte i parametri non colmassero il divario — mentre il correttore basato su LLM di [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] correlava con la padronanza reale a r = 0,68 sulle risposte aggregate ma solo a r ≈ 0,15 nella fascia di abilità più debole (r ≈ 0,48 mista, 0,41 forte), per cui l'affidabilità diagnostica dipende dal livello di abilità dello studente quanto dal modello.
- **Diagnosticare gli errori comuni su scala di coorte, non una risposta alla volta.** [[llm-common-modeling-mistakes-formalisms-2026|Killich et al. (2026)]] invertono la direzione consueta: anziché diagnosticare l'errore di un singolo studente, un [[llm]] propone trasformazioni candidate di correzione dei bug che mappano le formalizzazioni errate su quelle corrette attraverso un intero dataset educativo, e ogni candidata viene validata algoritmicamente prima di essere conservata. Su 6.106 coppie di formalizzazioni corrette ed errate di logica proposizionale, il flusso di lavoro ha scoperto 248 cluster di trasformazioni che spiegano 5.156 coppie (84,44%), contro 4.370 (71,57%) per gli errori selezionati a mano dello stato dell'arte precedente, e ha recuperato gli errori che un esperto di dominio aveva identificato a mano nella letteratura. Il clustering ordina i candidati in gruppi a trasformazione singola, a trasformazione equivalente e gerarchici, e il grafo di correlazione risultante può essere visualizzato per i docenti; la stessa pipeline si è trasferita alla logica modale e alle espressioni regolari, dove una sola trasformazione disgiunzione-per-congiunzione copriva il 98,80% del suo cluster di 334 coppie. È una via verso l'inventario delle misconcezioni di cui un modello diagnostico ha bisogno prima di poter essere adattato.
- **Il recupero della soluzione corretta, non la simulazione dell'errore, è il collo di bottiglia.** I modelli hanno costruito una soluzione nel 95,2% delle tracce di distrattori e simulato una specifica misconcezione di Eedi con accuratezza 0,92, eppure fornire la risposta corretta aumentava comunque la corrispondenza con i distrattori umani (0,52 → 0,56) — il fallimento sta a monte, nel recupero della soluzione ([[llm-distractor-generation-student-reasoning-2026|Zengaffinen et al. (2026)]]).
- **Diagnosi a livello di esito nei curricoli OBE:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] diagnosticano quali esiti di corso uno studente ha raggiunto nell'Outcome-Based Education trattando gli esiti come i concetti di conoscenza, fornendo le relazioni tra concetti tramite mappature di affinità OBE tra esiti di corso e di programma validate da esperti (un'alternativa esplicita alle relazioni di attenzione o ai grafi appresi implicitamente), e usando un modulo aumentato dalla memoria per stimare come il raggiungimento di un esito condizioni gli altri — superando le baseline DKT, DKVMN, EKT e SimpleKT (89,81% AUC) su dati reali di un programma di ingegneria.
- **Diagnosticare a partire da strumenti costruiti per altro.** [[mechanics-cognitive-diagnostic-physics-2026|Le et al. (2026)]] mostrano che un modello di diagnosi cognitiva può estrarre informazioni a livello di obiettivo da item mai scritti per la diagnosi. Mappando gli item FCI, FMCE e EMCS su 14 obiettivi di apprendimento a grana fine nella meccanica introduttiva e adattando DINA su 24.394 risposte post-test provenienti da 807 corsi, hanno trovato un buon adattamento per due dei tre strumenti (FCI RMSEA² = 0,033; EMCS = 0,022) e un'accuratezza di classificazione pari o superiore alla benchmark formativa a bassa posta in gioco per 19 delle 22 combinazioni obiettivo–valutazione. La struttura degli attributi, non la qualità degli item, era il vincolo vincolante: la codifica esperta è sopravvissuta allo scrutinio del modello quasi intatta — DINA proponeva di rivedere solo il 14% delle 754 codifiche item–obiettivo e i codificatori ne hanno adottate 20 (2,7%) — eppure il modello non riusciva a separare tre obiettivi di energia *concettualmente annidati* (Potential Energy 0,675, Conserve Energy 0,705, Kinetic Energy 0,745) perché due qualsiasi condividevano circa il 70% dei loro item (sovrapposizione di Jaccard 0,67–0,73), violando l'assunzione di indipendenza congiuntiva di DINA, mentre gli obiettivi sulla quantità di moto dello stesso strumento raggiungevano 0,820–0,917. Attributi più fini si adattavano meglio, non peggio: la struttura a 14 obiettivi migliorava l'adattamento del modello rispetto alla precedente struttura a quattro abilità ampie della stessa squadra su tutti e tre gli strumenti. È la sovrapposizione degli item, non l'errore di codifica, a limitare fin quanto finemente la padronanza può essere separata.
- **DINA bayesiano per percorsi di apprendimento personalizzati:** [[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng e Huang (2026)]] integrano un modello DINA bayesiano (addestrato sul dataset EdNet, N=5.000) con la teoria degli spazi di conoscenza e un algoritmo di percorso di rimedio più breve per generare percorsi di apprendimento personalizzati, e testano empiricamente il ruolo mediatore del [[cognitive-offloading|carico cognitivo]] tramite transizioni di stato di modelli di Markov nascosti (validati su 120 studenti) — affrontando sia il problema di convergenza dovuto alla scarsità dei modelli DINA tradizionali sia il meccanismo psicologico non testato dietro l'efficacia dei percorsi personalizzati.
- **Diagnosi ancorata al linguaggio al posto degli embedding degli identificatori.** [[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]] sostituiscono gli identificatori discreti di studente, esercizio e concetto con schemi di concetti costruiti tramite LLM ed evidenze ancorate al processo, calibrando lo stato posteriore di ogni studente a partire dai registri di risposta. Su tre dataset di piattaforme di [[math-education|matematica]] [[online-teaching-and-learning|online]] il framework raggiunge 83,51% ACC / 85,37% AUC su XES3G5M e 87,16% ACC su MOOC, con il guadagno concentrato esattamente dove i modelli classici di diagnosi cognitiva degradano: concetti nuovi (+4,60 ACC rispetto a KCD) e voci mancanti della Q-matrix (+4,52). Eliminare l'evidenza strutturata fa crollare l'accuratezza su MOOC da 87,16% a 78,95%, per cui il miglioramento deriva dalla struttura linguistica piuttosto che dalla scala del modello. ([[process-grounded-language-cognitive-diagnosis-2026]])
- **I compiti culturalmente contestualizzati possono precedere l'analisi dell'IA.** [[culturally-embedded-ai-diagnostic-assessment-2026|Anggara et al. (2026)]] hanno fatto completare a 178 studenti della scuola secondaria di primo grado in Indonesia compiti a risposta aperta culturalmente contestualizzati prima dell'analisi delle risposte da parte dell'IA; le diagnosi dell'IA concordavano con la valutazione degli esperti (ICC = 0,81), mentre la contestualizzazione culturale era associata alla prestazione matematica simbolica (β = 0,42) e all'engagement (β = 0,37).

## Perché è importante

Una diagnosi accurata consente all'istruzione di puntare sulle lacune reali anziché su un punteggio globale di «abilità» — abilitando [[automated-assessment|una valutazione automatizzata]] che spiega *perché* uno studente ha sbagliato e sistemi di [[feedback|Ciclo di feedback]] che rimediano specifici [[student-modeling|stati di conoscenza]]. Una diagnosi povera produce l'inverso: istruzione mirata ai concetti sbagliati. Per questo la [[psychometrically-aware-ai|consapevolezza psicometrica dell'IA]] enfatizza la validità diagnostica accanto all'accuratezza predittiva.

### Relazione con il knowledge tracing e il tutoring intelligente

La diagnosi cognitiva sta al cuore dell'architettura dell'[[intelligent-tutoring|intelligent tutoring]] ed è la controparte valutativa del [[knowledge-tracing]]:

- **Diagnosi vs. tracing — viste temporali complementari.** Il [[knowledge-tracing|knowledge tracing]] segue le *dinamiche temporali* della padronanza — stimando come uno stato di conoscenza scalare evolve attraverso gli esercizi e prevedendo la risposta successiva. La diagnosi cognitiva produce l'*istantanea statica e a grana fine* di quali componenti di conoscenza, abilità o misconcezioni uno studente possiede attualmente. Un tutor ha bisogno di entrambi: il knowledge tracing per sequenziare cosa insegnare dopo, la diagnosi cognitiva per sapere *cosa* effettivamente non va. I modelli diagnostici basati su [[item-response-theory|IRT]] e [[educational-measurement|misurazione]], e i modelli di diagnosi cognitiva che mappano gli item su molteplici componenti, istanziano il lato diagnostico.
- **Diagnosi nell'era degli LLM.** Gli [[llm|LLM]] estendono la diagnosi dalle risposte a scelta multipla al lavoro a risposta aperta, scritto a mano e conversazionale, identificando le [[misconceptions|misconcezioni]] specifiche dietro un errore (ad esempio la «trappola della risposta corretta», dove una risposta giusta nasconde un ragionamento fallace). [[xie-hillm-cd-2026|HiLLM-CD]] usa gli LLM per la costruzione automatizzata di alberi di concetti e l'inferenza gerarchica della competenza, collegando diagnosi e tracing. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] spingono oltre, federando la diagnosi attraverso molteplici API commerciali di LLM con privacy differenziale ε-locale, mostrando che una diagnosi accurata e preservante la privacy è fattibile senza che alcun modello veda i dati grezzi degli studenti.
- **Separare la diagnosi dal feedback è un principio progettuale.** I tutor basati su LLM confermano in modo affidabile i passaggi corretti ma rifiutano eccessivamente ragionamenti validi e convalidano eccessivamente gli errori — e una diagnosi accurata non produce in modo affidabile un [[feedback|feedback]] utilizzabile. La progettazione di un ITS dovrebbe quindi separare un componente diagnostico dal componente di feedback/[[scaffolding|impalcatura]] ([[yasir-llm-tutoring-agents-2026]]).

## Connessioni

La diagnosi cognitiva si collega al [[knowledge-tracing]], alla [[student-modeling|modellazione dello studente]], alla [[educational-measurement|misurazione educativa]] e alla [[assessment|valutazione]]. Le sue intuizioni alimentano l'[[intelligent-tutoring|intelligent tutoring]] e l'[[adaptive-learning|apprendimento adattivo]], e il lavoro dell'era degli LLM la collega all'identificazione delle misconcezioni nell'[[intelligent-tutoring|AI Tutoring]].

## Concetti collegati

- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[student-modeling]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[automated-assessment]]
- [[learning-analytics]]

## Articoli collegati

- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking LLMs for Diagnosing Cognitive Skills from Handwritten Math
- [[correct-answer-trap-misconceptions]] — The Correct Answer Trap
- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty
- [[llm-student-misconception-identification]] — LLM identification of student misconceptions
- [[student-math-competence-clustering]] — Clustering for Modeling Student Mathematical Competence
- [[moon-cognitive-agent-compilation-problem-solver-modeling-2026]] — Cognitive Agent Compilation for Explicit Problem Solver Modeling
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: diagnosing from simulated learners
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM concept trees + hierarchical proficiency inference
- [[yasir-llm-tutoring-agents-2026]] — Separating diagnosis from feedback in LLM tutors
- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[personalized-neural-cognitive-architecture-search-2026]] — AutoML personalized neural cognitive architecture search for learner profiles
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Privacy-preserving heterogeneous multi-LLM federated diagnosis
- [[llm-common-modeling-mistakes-formalisms-2026]] — Mining common modeling mistakes at scale with LLM-generated, algorithmically validated bug-fixing transformations (Killich et al. 2026)
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic: DINA-based diagnosis of 14 learning objectives from existing physics concept inventories (Le et al. 2026)
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — LLM knowledge-concept annotation and calibrated concept-level knowledge states
- [[llm-distractor-generation-student-reasoning-2026]] — misconception-based distractors as a diagnostic item-design task
- [[misconception-acquisition-dynamics-llms-2026]] — where the error enters the solution is the diagnostic bottleneck
- [[pivot-generative-video-tutors-stem-2026]] — From Content Generation to Learning Support: Pedagogy-Guided Generative Video Tutors for STEM Learning
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Open Foundation Models for Learning and Teaching
- [[culturally-embedded-ai-diagnostic-assessment-2026]] — Rethinking Diagnostic Assessment Through Culturally Embedded AI for Meaningful Learning
