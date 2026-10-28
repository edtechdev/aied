---
title: Apprendimento adattivo
created: "2026-10-14T21:55:00-04:00"
type: concept
pedagogy: [scaffolding]
technology: [cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
confidence: high
reviewed_by: [editor]
translation_of: concepts/adaptive-learning
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **L'apprendimento adattivo** — sistemi educativi basati sull'IA che regolano contenuti, ritmo e strategie didattiche in base alle caratteristiche e alle prestazioni del singolo discente. L'apprendimento adattivo è l'obiettivo operativo di gran parte della [[research-methods-aied|ricerca]] sull'[[ai-education|IA in educazione]]: usare [[student-modeling|modelli dello studente]] per personalizzare l'insegnamento.

## Domande da considerare

- I termini "adattivo", "personalizzato", "individualizzato" e "su misura" sono spesso usati come sinonimi — ma la ricerca suggerisce che non significhino la stessa cosa. Che cosa dai per scontato il significato di ciascuna parola, e dove potrebbero essere sbagliate queste supposizioni?
- Un sistema adattivo regola contenuti e difficoltà in base a un modello di ciò che sai. Che cosa può andare storto se quel modello si fonda su segnali superficiali o inaffidabili sul tuo apprendimento?
- Un risultato chiave è che i sistemi che inferiscono la padronanza dalle risposte corrette possono interrompere la pratica troppo presto — prima che tu impari quando trattenere un'azione. Riesci a pensare a un'abilità in cui essere "corretto" ripetutamente ti ha comunque lasciato impreparato per una situazione reale?
- L'iper-adattamento può eliminare la lotta produttiva di cui gli studenti hanno bisogno per apprendere in profondità. Se l'IA rende tutto più facile nel momento in cui ti trovi in difficoltà, che cosa perde esattamente chi apprende?
- Una meta-analisi suggerisce che è il meccanismo di adattamento — non la generazione specifica dello strumento — a determinare i [[learning-gains|guadagni di apprendimento]]. Se il "come" conta più del "quale strumento", che cosa dovresti cercare quando scegli un software adattivo?
- I tutor basati su LLM possono ora adattare il linguaggio e lo stile di spiegazione, non solo la difficoltà. Quando personalizzare il modo in cui qualcosa viene spiegato aiuta l'apprendimento, e quando potrebbe minare silenziosamente l'autonomia di chi apprende?

## Introduzione

### Meccanismi fondamentali

- **Ciclo misura-modella-adatta:** [[knowledge-tracing]] stima ciò che lo studente sa, [[student-modeling]] rappresenta il discente, e il sistema adatta di conseguenza difficoltà, contenuti e [[feedback]].
- **Personalizzazione su larga scala:** i sistemi di [[personalized-learning|apprendimento personalizzato]] usano algoritmi adattivi per offrire percorsi di apprendimento unici per ciascuno studente. [[deeptutor]] e i [[ai-powered-personalized-learning-elementary-fractions-2026|tutor sulle frazioni per la scuola elementare]] dimostrano la personalizzazione adattiva nella pratica.
- **Sequenziamento dei contenuti:** [[adaptive-pretesting-retention|il pretest adattivo]] e i [[adapt-adaptive-lesson-plan-transformer|trasformatori di piani di lezione]] ottimizzano l'ordine e il tipo di contenuti presentati.
- **Integrazione con gli ITS:** gli [[intelligent-tutoring|intelligent tutoring system]] sono la piattaforma canonica per l'apprendimento adattivo, in quanto combinano diagnosi e adattamento.
- **Profilazione e diagnosi guidate da AutoML:** I modelli educativi tradizionali faticano a elaborare dati eterogenei e multi-sorgente sul comportamento di apprendimento, il che limita la profilazione del discente e lo sviluppo di modelli diagnostici. Un framework personalizzato di ricerca architetturale neurale e cognitiva guidato dal [[machine-learning|machine learning]] automatizzato integra dati educativi [[multimodal|multi-modali]] con metodi eterogenei, generando modelli diagnostici su misura per profili di discenti eterogenei e supportando un'analisi dinamica anziché statica dei processi di apprendimento.

### Evidenze di efficacia

La knowledge base documenta evidenze contrastanti: i sistemi adattivi migliorano i risultati quando l'adattamento si fonda su [[student-modeling|modelli dello studente]] affidabili, ma un adattamento mal calibrato può danneggiare l'apprendimento. La [[personalized-learning|ricerca sulla personalizzazione]] distingue l'adattamento efficace dalla personalizzazione superficiale. [[khalifeh-redefining-personalized-learning-ai-2026|Le revisioni sistematiche]] rilevano che "adattivo", "personalizzato", "individualizzato" e "su misura" vengono usati in modo incoerente — quindi le dimensioni dell'effetto dipendono fortemente da come viene operazionalizzato l'adattamento, e il campo chiede un framework unificato.

Una revisione PRISMA 2020 che ha vagliato 959 record fino a 22 interventi nell'istruzione superiore annovera i percorsi adattivi e i sistemi di raccomandazione tra le principali applicazioni dell'IA, ma la maggior parte degli studi ha migliorato la pratica esistente anziché trasformarla ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al. (2026)]]).

**È il fondamento pedagogico, non la capacità tecnica, a guidare l'adattamento.** Una revisione di 15 anni su 127 studi di intelligent tutoring rileva che la maggior parte dei sistemi è costruita attorno a ciò che la tecnologia può fare piuttosto che a un principio pedagogico dichiarato, e stima il guadagno medio degli ITS a circa il 20% contro fino al 98% per il tutoraggio umano ([[zerkouk-comprehensive-review-its-2025|Zerkouk et al. (2025)]]).

In un RCT distrettuale di due anni, il vincolo stringente era l'adozione, non il meccanismo di adattamento: ridurre l'iscrizione a un solo passaggio ha portato l'adozione alla prima sessione da circa il 45% all'83% sulla base delle sole modifiche progettuali, e i guadagni in intent-to-treat sono cresciuti con l'aumento dell'adozione ([[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos et al. (2026)]]).

Una revisione allineata a PRISMA su 44 studi rileva che la letteratura sull'engagement è sbilanciata verso l'engagement comportamentale e più carente su quello agentico, e riporta un effetto novità — l'engagement che diminuisce nel tempo negli studi longitudinali su ALEKS e W-Pal una volta affievolitasi la novità dello strumento ([[simon-student-engagement-adaptive-learning-2026|Simon, Zeng & Fryer (2026)]]).

### L'era dell'IA: l'adattamento basato su LLM e i suoi rischi

[[generative-ai|L'IA generativa]] ha ampliato ciò che i sistemi adattivi possono fare — tutor [[agentic-ai|agentici]] conversazionali, contenuti ancorati a [[rag|RAG]] e [[intelligent-tutoring|tutoraggio]] guidato da [[llm|LLM]] adattano non solo la difficoltà dei problemi ma il linguaggio e lo stile di spiegazione (ad es. [[learnmate2-llm-adaptive-learning|LearnMate-2]], [[deeptutor]], [[chudziak-ai-math-tutoring-platform|tutoraggio adattivo multi-agente]]). Tuttavia, l'adattamento basato su LLM introduce nuovi rischi: senza [[student-modeling|modelli dello studente]] affidabili, l'adattamento può fondarsi su segnali superficiali; l'iper-adattamento può ridurre la lotta produttiva di cui gli studenti hanno bisogno (vedi [[desirable-difficulties|difficoltà desiderabili]], [[cognitive-offloading|scaricamento cognitivo]]); e l'equilibrio tra personalizzazione e preservazione dell'[[agency|agency]] di chi apprende è una questione progettuale aperta (vedi [[agentic-ai|IA agentica]]). Una variante dell'adattamento richiesta dal discente funziona senza alcun [[student-modeling|modello dello studente]]: in un corso di livello avanzato condotto da Sidorkin (2026) le letture venivano adattate solo quando gli studenti ponevano domande di approfondimento per riformularle, approfondirle, semplificarle o localizzarle, e le richieste orientate alla comprensione producevano in modo affidabile uno scaffolding più denso (da 3,4x a 8,7x più marcatori definitori rispetto al testo di base), ed è per questo che richiedere almeno tre domande di approfondimento per lettura trasformava il materiale in un'interazione. Questo sposta inoltre l'onere dell'adattamento sul discente: qui l'adattamento avviene solo se lo studente sa cosa chiedere.

### Rapporto con l'apprendimento personalizzato e l'intelligent tutoring

L'apprendimento adattivo è spesso confuso con l'[[personalized-learning|apprendimento personalizzato]], ma i due concetti differiscono. **L'apprendimento adattivo** è il *meccanismo* — la regolazione in tempo reale di contenuti, ritmo e difficoltà sulla base di un modello del discente. **L'apprendimento personalizzato** è l'*obiettivo più ampio* di adattare al singolo l'intera esperienza di apprendimento, di cui l'adattamento in tempo reale è una realizzazione. I sistemi adattivi sono il *mezzo* canonico verso la personalizzazione. L'[[intelligent-tutoring|intelligent tutoring]] è la classica *piattaforma*: gli ITS combinano la diagnosi (modellazione dello studente, knowledge tracing) con l'adattamento, e i tutor basati su LLM adattano in modo conversazionale. Insieme all'[[personalized-learning|apprendimento personalizzato]], l'apprendimento adattivo è un membro applicativo della famiglia [[student-modeling|modellazione del discente e istruzione adattiva]] — che consuma le rappresentazioni del discente prodotte dalla [[student-modeling|modellazione dello studente]], dal [[knowledge-tracing|knowledge tracing]] e dalla [[cognitive-diagnosis|diagnosi cognitiva]].

### Evidenze di ricerca

- **Evidenze [[meta-analysis-systematic-review|meta-analitiche]] su strumenti adattivi + IA.** [[burneo-can-edtech-close-learning-gaps-2026|Una meta-analisi della Banca Mondiale]] su 14 [[rct|RCT]] mette in comune apprendimento assistito dal computer adattivo, intelligent tutoring e IA generativa su una scala comune, stimando un guadagno medio di apprendimento di ~0,125 sd senza differenze significative tra le due generazioni tecnologiche — evidenza che è il meccanismo di adattamento, non la generazione specifica dello strumento, a determinare i guadagni.
- **Algoritmi adattivi confrontati in domini dinamici.** La [[graph-its-adaptive-algorithms-2026|ricerca sugli ITS basati su grafi]] confronta molteplici algoritmi di apprendimento adattivo (inclusa la propagazione bayesiana della conoscenza e la logica fuzzy intuizionistica) in un framework di rappresentazione della conoscenza basato su grafi per curricoli dinamici.

- **Il reinforcement learning come meccanismo di adattamento, mappato empiricamente.** [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper & Lugrin (2025)]] sintetizzano 89 studi sul RL in educazione e rilevano che l'adattamento si divide in meccanismi relativi ai contenuti (sequenziamento didattico/pianificazione dei contenuti, n = 53) e relativi alla guida (suggerimenti, [[feedback]], selezione delle attività, n = 36) — con il RL che mostra superiorità statisticamente significativa sui baseline più spesso per l'adattamento relativo alla guida che per la pianificazione dei contenuti. Raccomandano il RL model-free per l'apprendimento adattivo e avvertono che il RL classico ha superato il Deep RL negli studi esaminati.

- **L'adattività basata sulla correttezza può interrompere la pratica troppo presto.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren e Stamper (2026)]] hanno rilevato che i sistemi adattivi che inferiscono la padronanza dalla correttezza rischiano di terminare la pratica prima che i discenti incontrino contesti in cui l'azione appresa andrebbe trattenuta — lasciando la sovrageneralizzazione ingannevole non rilevata. Raccomandano di includere compiti di rilevamento del "non agire" prima che si attivino le regole di stop per padronanza, così che l'adattamento verifichi la comprensione condizionale (sapere quando trattenere un'azione), non solo la correttezza.

- **Una serie di risposte corrette non è apprendimento durevole.** In un esperimento sul campo con 6.000 studenti della scuola media, una regola di padronanza supportata dall'IA basata su tre risposte corrette consecutive ha aumentato il raggiungimento definito dalla piattaforma di circa 28,7 punti percentuali senza migliorare un test differito una settimana dopo, quindi le metriche di padronanza devono essere validate rispetto all'apprendimento differito anziché sostituirlo ([[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos et al. (2026)]]).
- **Adattare il *tipo* di engagement cognitivo, non solo la difficoltà.** [[adaptive-scaffolding-cognitive-engagement-its|Tithi et al. (2026)]] hanno rilevato che le politiche BKT e deep-RL che assegnavano esempi svolti guidati (attivi) o con errori (costruttivi) hanno superato entrambe l'assegnazione casuale in un tutor di logica con 113 studenti (posttest 72,3 e 72,5 contro 65,7), con BKT più efficace per gli studenti con conoscenze pregresse basse e DRL per quelli con conoscenze alte.

- **Più feedback non è feedback migliore.** In un corso adattivo di stocastica di otto settimane (194 studenti), il feedback direttivo, informativo e trasformativo veniva recepito in modo diverso, e il feedback trasformativo era associato a sovraccarico cognitivo anziché a una migliore regolazione — l'adattività deve corrispondere alla fase e al bisogno di chi apprende, non massimizzare la densità di feedback ([[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh & Fromm (2026)]]).

- **Profili di engagement come bersagli dell'adattamento.** [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] hanno tracciato 315 discenti online che costruivano 822 modelli in VERA e ne hanno classificato l'engagement in profili di Osservazione, Costruzione ed Esplorazione, rilevando che chi apprende tende a progredire da un comportamento incentrato sulla costruzione verso un'Esplorazione più completa e guidata dalle ipotesi, mentre l'Osservazione persiste attraverso le fasi. Sostengono che la progettazione adattiva e personalizzata debba riconoscere questi profili e indirizzare il feedback (ad es. raccomandando modelli simili o supportando una comprensione concettuale più profonda) per spostare gli osservatori di superficie verso una modellazione più integrativa e a ciclo completo.

- **Una memoria che viene letta ma non scritta non è adattamento.** Il controllo a memoria congelata di CoLearn forniva elementi fissi pur continuando a leggere il profilo del discente, e la quota di elementi mirati a un'abilità genuinamente debole è scesa da 0,72 a 0,57, con l'errore finale di padronanza che è salito al di sopra della condizione adattiva ([[colearn-agentic-tutor-co-learning-loop-2026|He et al. (2026)]]).

- **Il guadagno è arrivato dal sequenziamento, non da un tutor più intelligente.** [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|Chung et al. (2026)]] hanno addestrato un tutor personalizzato con reinforcement learning guidato da LLM e lo hanno distribuito in un corso di Python di cinque mesi in dieci [[k-12|scuole superiori]] di Taipei, randomizzando 770 studenti tra sequenze di problemi adattive e sequenze fisse dal facile al difficile. Il sequenziamento adattivo ha aumentato il punteggio dell'[[summative-assessment|esame finale]] in presenza e senza assistenza di 0,156 SD (0,150 SD con le variabili di controllo) — mentre l'analisi di mediazione attribuiva l'effetto quasi interamente all'engagement (0,185 SD tramite il tempo sul compito, 0,149 SD tramite i tentativi) anziché a materiale più facile o più difficile, e i guadagni erano maggiori per i principianti e per le scuole di fascia più bassa. La leva adattiva era l'ordine della pratica, non la qualità della chat.

- **Mantenere le decisioni di padronanza basate su regole e confinare il machine learning al monitoraggio.** Un programma STEM adattivo di otto settimane per 30 studenti di sesta classe governava i percorsi con una padronanza basata su regole mentre il machine learning tracciava le prestazioni, mantenendo l'adattamento verificabile, ma in assenza di pretest e con una sola classe per condizione i suoi guadagni sono un modello pilota da validare localmente ([[bin-bakheet-adaptive-ai-stem-deep-learning-2026|Bin Bakheet et al., 2026]]).

- **Adattare l'attributo collo di bottiglia, non la media debole.** La modellazione delle transizioni degli stati di conoscenza ha classificato il pensiero analitico come il più difficile da acquisire e il più facile da perdere — probabilità di transizione in avanti più bassa 0,31 e più alta all'indietro 0,22-0,23 — rendendo la ripetizione dell'attributo segnalato un bersaglio di adattamento più preciso della padronanza complessiva ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).

- **Adattamento a partire da sequenze di processo, non da punteggi aggregati.** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela & Cukurova (2026)]] hanno derivato regole di scaffolding analizzando l'*ordine* dei turni di dialogo di 65 studenti in triadi, spostando l'apprendimento adattivo da misure comportamentali o di prestazione aggregate verso sequenze di processo individuali; lo scaffolding massimale aumentava il comportamento on-task ma anche la rigidità degli script, e il design è non testato.

## Concetti collegati

- [[online-teaching-and-learning]] — Insegnamento e apprendimento online
- [[knowledge-tracing]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[student-modeling]]
- [[scaffolding]]
- [[cognitive-diagnosis]]
- [[llm]]
- [[learning-analytics]]
- [[higher-ed]]
- [[k-12]]
- [[formative-assessment]]
- [[behaviorism]]
- [[ai-technologies]] — Ombrello: tecnologie e tecniche di IA (modelli, addestramento LLM, robotica, RAG, agenticità)
- [[recommender-systems-and-learning-paths]]
## Articoli collegati
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Deceptive overgeneralization: adaptive mastery can stop practice before learners know when to withhold an action (An, McLaren & Stamper 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know (Stanford SCALE/NSSA brief)
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[simon-student-engagement-adaptive-learning-2026]] — Systematic review of student engagement in adaptive learning platforms
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: an experiment in take-up and learning
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[chudziak-ai-math-tutoring-platform]] — Adaptive/personalized multi-agent math tutoring (Chudziak & Kostka 2025)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Redefining personalized learning: systematic review
- [[deeptutor]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[adaptive-pretesting-retention]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[stanford-evidence-base-ai-k12-2026]] — Tutoring-specific AI calibrated to learner readiness vs. general chatbots
- [[context-based-ai-secondary-chemistry-2026]] — Context-based 7E + AI instruction in secondary chemistry
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — Adaptive AI-based STEM program for deep learning
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[burneo-can-edtech-close-learning-gaps-2026]] — Meta-analysis pooling adaptive + AI-enabled tools across 14 RCTs
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Systematic review: adaptive pathways among the leading higher-ed AI integration use cases
- [[an-goel-self-directed-modeling-2026]]
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — Adaptive problem sequencing beats fixed sequencing: +0.156 SD on an unassisted exam, mediated by engagement rather than difficulty (Chung et al. 2026)
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
