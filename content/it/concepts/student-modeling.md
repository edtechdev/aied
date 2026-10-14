---
title: "Modellamento dello studente e istruzione adattiva"
created: "2026-10-14T21:55:00-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, simulating-students, student-modeling]
confidence: high
reviewed_by: [editor]
translation_of: concepts/student-modeling
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

> **Modellamento dello studente e istruzione adattiva** — l'ombrello che raccoglie i modi in cui l'IA rappresenta gli studenti (che cosa sanno, provano e di che cosa hanno bisogno) e il modo in cui essa usa tali rappresentazioni per adattare l'[[teacher-role|insegnamento]]. La famiglia comprende lo strato di *modellamento* — lo **student modeling**, il [[knowledge-tracing]], la [[cognitive-diagnosis]] e la [[simulating-students|simulazione degli studenti]] — e i *sistemi adattivi* che consumano tali modelli — l'[[intelligent-tutoring]], l'[[adaptive-learning]] e il [[personalized-learning]]. La domanda condivisa: *come fa un sistema a sapere ciò che uno studente sa, e che cosa dovrebbe insegnare dopo?*

## Domande da considerare

- La domanda a ombrello che questa pagina pone è: come fa un sistema a sapere ciò che uno studente sa, e che cosa dovrebbe insegnare dopo? Prima di continuare la lettura, da dove cominceresti a rappresentare «ciò che uno studente sa» in una macchina?
- Il modellamento dello studente abbraccia il tracciamento della conoscenza (seguire la conoscenza nel tempo), la diagnosi cognitiva (mappare le competenze padroneggiate) e la simulazione degli studenti (studenti sintetici). Secondo te, in che cosa ciascun approccio è bravo — e che cosa rischia ciascuno di sbagliare?
- Ogni IA adattiva dipende da un qualche modello dello studente. Se un modello vale quanto l'evidenza che lo alimenta, quali prove pensi che i sistemi di IA abbiano realmente su uno studente, e quali cose importanti su di lui restano invisibili?
- Un modello potrebbe cogliere ciò che uno studente indovina e ciò che sbaglia, ma non il perché, né come si sente. In che modo un modello dello studente potrebbe indurre in errore un sistema adattivo in modi che danneggiano anziché aiutare lo studente?
- Se dovessi progettare un tutor adattivo, che cosa vorresti che il suo modello di te includesse — e che cosa vorresti che fosse esplicitamente vietato assumere?

## Introduzione

Il modellamento dello studente è la rappresentazione computazionale degli studenti; l'istruzione adattiva è ciò che i sistemi fanno di tale rappresentazione. Ogni IA adattiva nell'istruzione dipende da un qualche modello dello studente — anche uno snello — e ogni modello dello studente esiste per informare una qualche decisione didattica. Questa pagina è l'ombrello di quella filiera: i metodi di modellamento, i sistemi che agiscono sui modelli, e il modo in cui essi si relazionano.

## Lo strato di modellamento

Questi concetti rispondono alla domanda «che cosa questo studente sa, prova e di che cosa ha bisogno?» — il lato della rappresentazione della famiglia.

- Lo **student modeling** — la pratica generale di rappresentare le caratteristiche dello studente (conoscenza, competenze, stati [[affective-computing|affettivi]], [[student-engagement|coinvolgimento]], preferenze) in forma computazionale. È il termine a ombrello all'interno di questo strato, e abbraccia tutti i modi di rappresentare uno studente.
- Il **[[knowledge-tracing]]** — la pratica specifica di modellare la conoscenza cognitiva *nel tempo*, seguendo la prestazione sugli esercizi e prevedendo il livello di padronanza futuro. Esso formalizza la dinamica temporale dell'apprendimento — quando la conoscenza si acquisisce, decade e come i concetti si relazionano.
- La **[[cognitive-diagnosis]]** — la [[assessment|valutazione]] fine di quali specifiche competenze o componenti di conoscenza uno studente abbia padroneggiato, producendo un profilo di padronanza che sostiene un recupero mirato.
- La **[[simulating-students|simulazione degli studenti]]** — generare studenti *sintetici* su richiesta, anziché rappresentarne uno reale, di modo che la [[pedagogy|pedagogia]] e i sistemi di IA possano essere testati o addestrati offline.
- **Un formalismo causale per i modelli dello studente.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] sostituiscono le reti bayesiane a cancelli rumorosi con modelli causali strutturali elicitati da esperti, rendendo i suggerimenti variabili endogene esplicite, così che il modello possa chiedere che cosa uno studente avrebbe risposto senza l'aiuto che ha utilizzato — leggermente meno predittivo, ma capace di controfattuali che i modelli associativi non possono esprimere.

Lo studio di [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] illustra che una rappresentazione fedele non richiede la famiglia di modelli più complessa: un modello dello studente basato su un albero decisionale snello e intrinsecamente interpretabile — costruito a partire da caratteristiche di interazione con il contenuto del corso anziché da una telemetria ricca — prevede il progresso a livello di modulo in corsi di [[cs-education|programmazione]] online su larga scala (accuratezza dell'85–91%) e separa i profili di [[student-engagement|coinvolgimento]] corrispondenti allo studente a rischio disimpegnato, allo studente disimpegnato ma di successo e allo studente ad alte prestazioni coinvolto, sostenendo l'allerta precoce dell'[[learning-analytics|analisi dell'apprendimento]] su larga scala.

Un modello predittivo dello studente può poggiare sulla struttura delle iscrizioni anziché sui dati di traccia: TRACE codifica ogni semestre come un insieme non ordinato di corsi e prevede congiuntamente l'insieme dei corsi e i voti, riducendo l'errore di previsione dei voti a un MAE di 0,1339 — inferiore del 46,4% a quello di un modello basato soltanto sui voti — su 5.326 studenti e dieci anni ([[trace-course-grade-prediction-2026|Savala (2026)]]).

I modelli dello studente possono essere costruiti anche unicamente a partire da tracce comportamentali e sostenere comunque l'adattamento. [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] hanno derivato tre profili di coinvolgimento — Observation, Construction ed Exploration — dai clickstream di 315 studenti online che costruivano 822 modelli ecologici in VERA, senza alcun dato demografico o contestuale, e hanno mostrato che tali profili prevedono la qualità dei modelli (Exploration produce i modelli più complessi e diversificati, mentre Observation è dominata da modelli copiati anziché originali). Caratterizzazioni a livello di coinvolgimento di questo tipo sono i modelli dello studente a grana grossa che lo strato di [[adaptive-learning|istruzione adattiva]] può consumare per indirizzare il riscontro.

Il modellamento affettivo dello studente è un'ulteriore dimensione: un tutor di matematica inferiva l'emozione dal testo conversazionale e dall'espressione facciale e mappava lo stato aggregato sulle strategie di tutorato, ma la fusione multimodale raggiungeva soltanto un'accuratezza del 60% rispetto alle annotazioni dei partecipanti stessi, rendendo la lettura dell'affetto l'anello più debole della filiera ([[kar-mathbuddy-affective-math-tutoring-2025|Kar et al. (2025)]]).

[[cross-subject-validity-delayed-start|Gutterman et al. (2026)]] hanno rilevato che un segnale di avvio ritardato registrato durante la pratica matematica prevedeva gli esiti in inglese, con i ritardatari cronici (oltre 13 minuti) che mostravano guadagni inferiori (ELA β = −0,11 DS) anche dopo aver controllato per la [[prior-knowledge|conoscenza pregressa]] e per il tempo sul compito — sicché i modelli comportamentali dello studente possono trasferirsi tra discipline senza riaddestramento per singolo corso, benché i loro punti di taglio debbano essere nuovamente derivati.

## Lo strato di istruzione adattiva

Questi concetti rispondono alla domanda «che cosa dovrebbe essere insegnato dopo?» — il lato applicativo che consuma i modelli dello studente.

- L'**[[intelligent-tutoring]]** — sistemi che usano i modelli dello studente e le stime di padronanza per selezionare i problemi e fornire una guida passo per passo, l'applicazione classica del modellamento dello studente.
- L'**[[adaptive-learning]]** — sistemi che adeguano contenuto, ritmo o difficoltà in risposta al modello dello studente.
- L'**[[personalized-learning]]** — l'adattamento più ampio di istruzione, contenuto e percorsi alle caratteristiche e alle preferenze del singolo studente.

## Come i membri si relazionano

I concetti formano una filiera anziché essere concorrenti: lo **student modeling** è la rappresentazione a ombrello; il [[knowledge-tracing]] e la [[cognitive-diagnosis]] sono metodi di modellamento specifici che la popolano; la [[simulating-students|simulazione]] *genera* studenti anziché rappresentarne di reali; e l'[[intelligent-tutoring]], l'[[adaptive-learning]] e il [[personalized-learning]] sono i sistemi che consumano questi modelli per adattare l'istruzione.

**Student modeling e simulazione degli studenti** è la distinzione fondamentale da tenere ben presente. Lo student modeling riguarda il **rappresentare uno studente reale** — costruire un modello *a partire dai* dati di uno studente effettivo, così che un sistema adattivo possa agire su quell'individuo. La simulazione degli studenti, al contrario, **genera uno studente sintetico** su richiesta che sostituisca studenti reali, di modo che la pedagogia e l'IA possano essere valutate o addestrate offline. I due concetti sono strettamente correlati anziché intercambiabili: gli studenti simulati tipicamente *incorporano* un modello dello studente (uno stato epistemico, un insieme di [[misconceptions|fraintendimenti]] o un profilo di coinvolgimento) e attingono ai medesimi costrutti che il [[knowledge-tracing]] e la [[cognitive-diagnosis]] formalizzano. I loro scopi divergono — lo student modeling serve l'adattamento in tempo reale informando decisioni su una persona reale, mentre la [[simulation|simulazione]] fabbrica studenti per testare i sistemi (e sempre più per verificarne l'IA, ad es. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]]) anziché per agire su un individuo reale.

**Il tracciamento della conoscenza e lo student modeling** è l'altra confusione frequente. Il tracciamento della conoscenza modella specificamente la conoscenza cognitiva nel tempo; lo student modeling è la pratica più ampia che copre tutti gli aspetti di uno studente (stato affettivo, coinvolgimento, preferenze). Il tracciamento della conoscenza è un *tipo di* student modeling focalizzato sulla dimensione cognitivo-temporale. I costrutti del tracciamento della conoscenza informano anche gli [[simulating-students|studenti simulati]] — lo stato cognitivo di uno studente simulato viene spesso formalizzato con le medesime dinamiche di padronanza e decadimento che il tracciamento della conoscenza modella, sicché la simulazione è un modo di *generare* gli stati di conoscenza che i metodi di tracciamento normalmente *inferiscono* dai dati di risposta reali.

**Ancorare il tracciamento al [[curriculum-design|curriculum]] rafforza il modello.** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] mostrano che un modello dello studente acquista fedeltà quando il tracciamento è legato a una struttura curricolare esplicita anziché essere appreso puramente dai dati: il loro Outcome-Based Knowledge Tracing (OKT) tratta i risultati di corso dell'Outcome-Based Education come i concetti di conoscenza da tracciare, fornisce le relazioni tra concetti attraverso «mappature di affinità» OBE validate da esperti tra risultati di corso e risultati di programma (un'alternativa esplicita all'attenzione implicita o al passaggio di messaggi su grafo), e usa un modulo con memoria aumentata per modellare come il conseguimento di un risultato influisce sugli altri. Su dati reali di un programma di ingegneria ha superato le baseline DKT, DKVMN, EKT e SimpleKT (89,81% AUC), il che illustra come lo strato di modellamento possa sfruttare la struttura propria del curriculum per rappresentare gli studenti in modo più fedele.

**L'intelligent tutoring e l'apprendimento adattivo/personalizzato** si collocano sul lato applicativo: l'intelligent tutoring è il sistema che seleziona i problemi e fornisce una guida passo per passo; l'apprendimento adattivo accorda contenuto e ritmo; l'apprendimento personalizzato è l'adattamento più ampio dell'intera esperienza di apprendimento. Tutti e tre sono i «consumatori» dello strato di modellamento.

## La sfida di validità condivisa

Attraverso l'intera famiglia, la sfida di validità che la definisce è la stessa: la rappresentazione dello studente deve **riflettere fedelmente lo stato reale dello studente** anziché le assunzioni predefinite del sistema. Per lo **student modeling** e per il [[knowledge-tracing]], ciò significa che il modello deve cogliere genuinamente ciò che uno studente sa ([[ai-ed-evaluation|valutazione]] e [[assessment-validity|validità della misurazione]]). Per la [[simulating-students|simulazione]], significa che lo studente sintetico deve esibire un'imperfezione realistica anziché la piena competenza del modello o il suo accordo [[ai-sycophancy|untuoso]]. I sistemi adattivi che consumano modelli difettosi ereditano e propagano quell'errore.

I modelli che inferiscono lo stato dello studente dal gioco hanno raggiunto AUC comprese tra 0,848 e 0,913, eppure solo due dei 55 studi esaminati li hanno verificati rispetto ai pregiudizi demografici e uno soltanto ha esaminato gli esiti differenziati per capacità dello studente ([[ai-game-based-learning-systematic-review-2026|Kaşarcı and Yurt (2026)]]).

Alcuni segnali previsti potrebbero non essere affatto recuperabili dal dialogo: il pilota del framework Learning Context ha recuperato i fraintendimenti al 91,4% e l'ansia al 100%, ma la coscienziosità soltanto al 68,6% e la competenza linguistica al 60%, sicché un modello sensibile al contesto dovrebbe cogliere le caratteristiche che emergono lentamente anziché attendere che il dialogo le esponga ([[learning-context-framework-context-aware-ai-education-2026|Liu et al. (2026)]]).

[[edumirror-educational-social-dynamics|Lin et al. (2026)]] mettono in luce una circolarità nel modo in cui tali studenti sintetici vengono validati: i loro agenti EduMirror somministrano questionari psicometrici a posteriori e leggono la concordanza con la rappresentazione interna dei valori dell'agente come validità psicologica, ma poiché il Surveyor misura dimensioni già codificate in quel sistema di valori, la verifica è un controllo di coerenza anziché una validazione indipendente.

**La correttezza non è sempre un segnale fedele.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, and Stamper (2026)]] mostrano che un modello dello studente che inferisce la padronanza dalle azioni corrette può travisare lo stato reale dello studente: gli studenti che manifestano una *sovrageneralizzazione ingannevole* appaiono come padroni della competenza eppure omettono un vincolo applicativo critico, sicché i sistemi adattivi possono interrompere la pratica prematuramente. I modelli dello studente dovrebbero valutare la comprensione condizionale — incluso se lo studente sappia quando trattenere un'azione — e non soltanto la correttezza delle azioni.

I fraintendimenti nascosti mostrano lo stesso fallimento dal lato opposto: [[correct-answer-trap-misconceptions|Imran and Bulathwela (2026)]] hanno rilevato che un classificatore messo a punto catturava il 57,4% delle risposte corrette raggiunte attraverso un ragionamento fallace, e che a una prevalenza dell'1,6% anche un modello di ragionamento accurato all'83,6% lasciava 8 falsi allarmi per ciascun rilevamento — sicché i segnali di padronanza basati sulla correttezza sono sia incompleti sia costosi da correggere.

**Il modo in cui un modello viene validato è a sua volta una questione di validità.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan, and Carvalho (2025)]] mostrano che i modelli dello studente più diffusi (BKT, BKT-with-Forgetting, AFM) sembrano cogliere l'apprendimento umano solo quando vengono adattati retrospettivamente a un insieme di dati multi-sessione completo; sotto una convalida incrociata temporale (walk-forward) — prevedere una sessione futura a partire da quelle precedenti, che è il modo in cui tali modelli vengono effettivamente impiegati — essi sovrastimano la prestazione, non colgono l'[[retrieval-spacing-interleaving|effetto di spaziatura]] e ordinano male le condizioni di pratica. Poiché i modelli con e senza decadimento hanno performato in modo all'incirca uguale tra le sessioni, gli autori concludono che il decadimento viene spesso assorbito nei parametri dello studente anziché essere genuinamente rappresentato. La lezione per la famiglia è che una rappresentazione fedele dello studente deve essere validata nel modo in cui viene usata — e che confondere la prestazione nel momento con la ritenzione a lungo termine produce modelli che sembrano accurati eppure travisano gli studenti.

## Il modellamento nell'era degli LLM

Progressi recenti usano gli [[llm|LLM]] per un modellamento più ricco. Il [[xie-hillm-cd-2026|framework HiLLM-CD]] rappresenta gli studenti come alberi di competenza; gli [[multimodal-knowledge-graph-educational-reasoning|approcci multimodali]] costruiscono rappresentazioni della conoscenza fondate sull'evidenza a partire da fonti di dati diverse; gli [[inside-llm-student-simulator-reasoning-2026|LLM simulano ora gli studenti con ragionamento]]. Gli LLM consentono la costruzione automatizzata di modelli a partire da testo educativo e una [[simulating-students|simulazione degli studenti]] a più alta fedeltà, riducendo la dipendenza dall'annotazione di esperti — e acuendo al contempo le preoccupazioni di fedeltà sopra esposte. I segnali dei modelli dello studente fondano anche il ragionamento degli LLM: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] hanno rilevato che fornire a GPT-4 la stima bayesiana di [[knowledge-tracing|tracciamento della conoscenza]] delle competenze di uno studente insieme alla struttura dell'interfaccia del tutor migliorava nettamente la sua diagnosi degli errori (l'identificazione degli errori logici saliva dal 40% all'81% nella scomposizione in fattori; circa l'87,8% nel complesso), mentre i problemi a più passaggi e le risposte contenenti diversi errori restavano i casi più deboli — prova che accoppiare un modello formale dello studente a un LLM rafforza, ma non garantisce, un'inferenza corretta su uno studente reale. [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] mostra che aspetto ha una versione persistente di quell'accoppiamento: la padronanza e i fraintendimenti estratti vengono memorizzati per (studente, materia) anziché come registri per singola sessione, così che l'evidenza si accumuli tra le sessioni, e la memoria viene scritta da una funzione di osservazione valutata da un LLM restando ispezionabile da parte dello studente attraverso barre di padronanza e un'etichetta che indica che cosa ciascuna domanda generata era stata scelta per sondare. I controlli rendono esplicito il passaggio di scrittura — con la memoria letta ma non più aggiornata, la quota di item mirati a una competenza genuinamente debole scendeva da 0,72 a 0,57 — e il lavoro mantiene intatta la qualificazione di questa pagina: la padronanza memorizzata è la credenza dell'agente sullo studente, non una misurazione della sua conoscenza.

Il linguaggio può sostituire gli embedding di ID come rappresentazione: PLCD costruisce schemi di concetti derivati da LLM e grafi del processo di esercizio come priori, raggiungendo un'accuratezza dell'83,51% su XES3G5M, con i guadagni maggiori nel cold start — 4,60 punti di ACC rispetto a KCD per i nuovi concetti e 4,00 per i nuovi esercizi — là dove i modelli basati su ID non hanno alcuna storia ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).

La qualità del simulatore si separa in due assi: una filiera pool-then-specialize che addestra pattern comportamentali condivisi prima di un adattatore per singolo studente ha raggiunto una fedeltà comportamentale di 0,51 e una reattività alla guida di 0,91 negli scacchi, contro 0,23 e 0,72 di una baseline di riferimento basata sul role-play, il che mostra che un simulatore deve sia corrispondere a uno studente sia essere governabile ([[studentsim-llm-student-simulators|Yang et al. (2026)]]).

I punteggi di rischio possono essere accurati e tuttavia privi di supporto: [[at-risk-students-ml-prediction|Gheisari and Salarian (2026)]] hanno raggiunto un'accuratezza del 99% nel prevedere il ritiro a partire da registri di iscrizione e di rendimento, ma su 1.027 registri ripuliti di una singola istituzione, senza validazione esterna, senza alcun intervento testato e con le verifiche di equità indicate come lavoro futuro — il punteggio supporta un'ordinamento per urgenza, non un verdetto su uno studente.

Un modello dello studente che prevede soltanto il rischio non è sufficiente come supporto alle decisioni: accoppiare un modello calibrato di studenti a rischio con un ricorso basato sulla programmazione intera su azioni discrete — validato rispetto ai vincoli di tempistica, bilancio, immutabilità e disponibilità — ha prodotto piani di intervento compatti là dove la sola ottimizzazione ne accettava di inattuabili ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel & Laforge (2026)]]).

Uno stimatore a scatola nera può anche essere distillato in un piccolo modello che si spiega da sé: una filiera a due stadi trasforma uno stimatore adattato e la sua interpretazione a posteriori in un «mentee» da 2 miliardi di parametri che restituisce una stima accompagnata da una narrazione, verificato per fedeltà anziché per scioltezza ([[distilling-self-explaining-lm-learning-analytics-2026]]).

## Connessioni con altri concetti

Il modellamento dello studente e l'istruzione adattiva alimentano l'[[learning-analytics|analisi dell'apprendimento]] ([[visualization|dashboard]] e interventi), la [[formative-assessment|valutazione formativa]] (valutazione guidata dall'analisi) e il [[feedback|riscontro]] (ciò che il sistema comunica allo studente). Si collega all'[[ai-education|IA nell'istruzione]] come filone centrale dell'IA per l'istruzione.

## Concetti collegati

- [[learners]] — Studenti: l'ombrello dei concetti relativi al lato dello studente
- [[explainable-ai]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[formative-assessment]]
- [[k-12]]
- [[affective-tutoring]]
- [[llm]]
- [[higher-ed]]
- [[ai-education]]
- [[simulating-students]]
- [[cognitive-diagnosis]]
- [[feedback]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — i modelli sottostanti alla previsione del rischio e all'individuazione dei destinatari del sostegno

## Articoli collegati
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Deceptive overgeneralization: adaptive mastery can stop practice before learners know when to withhold an action (An, McLaren & Stamper 2026)
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know (Stanford SCALE/NSSA brief)
- [[learning-context-framework-context-aware-ai-education-2026]]
- [[yasir-llm-tutoring-agents-2026]] — LLM tutors over-reject valid-alternative, over-validate incorrect (Yasir et al. 2026)
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[at-risk-students-ml-prediction]]
- [[correct-answer-trap-misconceptions]]
- [[cross-subject-validity-delayed-start]]
- [[edumirror-educational-social-dynamics]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[multimodal-knowledge-graph-educational-reasoning]]
- [[xie-hillm-cd-2026]]
- [[inside-llm-student-simulator-reasoning-2026]]
- [[trace-course-grade-prediction-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — From Student Risk Prediction to SC2R: Counterfactual Recourse
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[studentsim-llm-student-simulators]] — StudentSim: Training LLM-based Student Simulators
- [[predicting-attrition-competitive-programming]] — Predicting Student Attrition in Competitive Programming
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[an-goel-self-directed-modeling-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Beyond ID Embeddings: Process-Grounded Language Modeling for Cognitive Diagnosis
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — compact learner state plus a calibrated tracer as a recommender environment
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop

- [[ai-game-based-learning-systematic-review-2026]] — Stealth assessment reached AUCs of 0.848–0.913, but bias audits were near-absent across 55 studies
