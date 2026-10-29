---
title: "Tracciamento delle conoscenze"
created: "2026-10-14T21:55:00-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
audience: [learners]
confidence: medium
translation_of: concepts/knowledge-tracing
source_updated: "2026-10-14T11:15:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Knowledge tracing** — modellazione di ciò che gli studenti sanno nel tempo tracciando la loro prestazione sugli esercizi e prevedendo la padronanza futura. È il filone di modellazione più ricco della knowledge base, che abbraccia approcci bayesiani, di deep learning e potenziati dagli [[llm|LLM]] per tracciare la conoscenza dello studente mentre evolve.

## Domande da considerare

- Il knowledge tracing modella ciò che sai nel tempo a partire dalla tua prestazione sugli esercizi, tracciando quando la conoscenza viene acquisita e quando decade. Cosa possono rivelare le tue risposte sul fatto che tu sappia davvero qualcosa rispetto all'averla azzeccata questa volta?
- La pagina avverte che "la padronanza non è correttezza" — uno studente può apparire padroneggiato e tuttavia applicare sistematicamente in modo errato un'abilità quando una condizione nascosta viene violata. Quando hai visto qualcuno (o te stesso) sembrare che avesse capito qualcosa senza che in realtà lo avesse fatto?
- Se il knowledge tracing alimenta sistemi adattivi che decidono cosa insegnare dopo, cosa va storto quando il modello scambia le risposte corrette per una vera padronanza e fa avanzare uno studente troppo presto?
- Il knowledge tracing assume molte forme — bayesiano, neurale, ipergrafico, basato sul dialogo, potenziato da LLM. Quali compromessi ti aspetteresti tra un modello trasparente che puoi spiegare e uno potente ma opaco?
- La pagina collega il knowledge tracing agli studenti simulati — generazione degli stati di conoscenza che il tracing normalmente inferisce dai dati reali. Come potrebbe la simulazione degli studenti aiutare a testare un tutor prima che incontri studenti reali?
- Poiché la conoscenza decade nel tempo, cosa dovrebbe fare un sistema adattivo con la "padronanza" passata di uno studente una volta che l'ha dimenticata? Come progetteresti per la dimenticanza anziché presumere che la conoscenza persista?

## Introduzione

Il knowledge tracing trasforma le risposte grezze agli esercizi in stime di ciò che uno studente ha padroneggiato e di ciò che deve ancora imparare. A differenza del semplice tracciamento della correttezza, il knowledge tracing modella la dinamica temporale dell'apprendimento — quando la conoscenza viene acquisita, quando decade e come i concetti si relazionano tra loro.

### Approcci rappresentati nella knowledge base

- **Approcci bayesiani:** [[stanbkt-bayesian-knowledge-tracing]] standardizza le implementazioni BKT, mentre [[mbp-kt-meta-behavioral-knowledge-tracing]] incorpora segnali meta-comportamentali
- **BKT a evidenza morbida con una funzione di osservazione LLM:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] mantiene la struttura BKT ma sostituisce l'osservazione binaria corretto/errato — l'input del BKT standard — con una continua: un [[llm|giudice LLM]] emette evidenza di padronanza graduata più un peso di confidenza, miscelata in una verosimiglianza a posteriori contratta per confidenza e regolata da un gate così che una risposta chiaramente errata non possa innalzare la stima, il che rende l'aggiornamento una variante che generalizza il BKT standard anziché una sua riduzione stretta. Che quella funzione di osservazione sia affidabile dipende dallo studente: l'evidenza media separava nettamente le fasce di abilità (0,25 debole / 0,67 mista / 0,77 forte) mentre la correlazione entro la fascia con la padronanza reale era solo r ≈ 0,15 / 0,48 / 0,41, lasciando lo stato tracciato come la credenza di un agente sullo studente piuttosto che una misura calibrata.
- **Modelli neurali e ibridi:** [[neural-symbolic-knowledge-tracing]] combina ragionamento simbolico con [[machine-learning|reti neurali]]; [[explainable-probabilistic-kt]] fa avanzare i modelli probabilistici interpretabili
- **Reti di memoria a ipergrafo:** [[thymen-temporal-hypergraph-knowledge-tracing-2026|THyMeN]] arricchisce il tracing basato sulla memoria (DKVMN) con ragionamento a ipergrafo temporale, modellando interazioni dinamiche di ordine superiore tra concetti che co-occorrono entro domande multi-abilità
- **KT basato sul dialogo:** [[huang-interpretable-knowledge-tracing-2026]] adatta il knowledge tracing al tutoraggio conversazionale
- **Potenziato da LLM:** [[xie-hillm-cd-2026|HiLLM-CD]] usa gli LLM per la costruzione automatica di alberi di concetti e l'inferenza gerarchica della competenza
- **KT semantico e orientato alla raccomandazione:** [[exrec-exercise-recommendation-knowledge-tracing-2025|ExRec (Ozyurt, Almaci, Feuerriegel and Sachan, 2025)]] fonda l'*input* anziché l'architettura: un LLM annota ogni domanda con passaggi di soluzione e concetti di conoscenza allineati ai Common Core State Standards for Mathematics, l'apprendimento contrastivo allinea gli embedding di domanda, passaggio di soluzione e concetto (con i falsi negativi rimossi tramite pre-clustering di varianti di concetto come "interpretare un grafico a barre" e "leggere informazioni da un grafico a barre"), e una perdita di calibrazione delle KC consente al tracciatore di prevedere direttamente uno stato di conoscenza a livello di concetto anziché inferirne uno eseguendo il modello su ogni domanda di quel concetto. Il tracciatore calibrato serve quindi da ambiente di reinforcement learning per la raccomandazione di esercizi, dove una stima di valore model-based inizializza il critico a partire dal tracciatore stesso. Su quattro compiti su XES3G5M mediati su 2.048 studenti di test, le baseline non-RL hanno dato guadagni di conoscenza marginali o negativi, i metodi continui basati sul valore hanno battuto quelli basati sulla politica, e la stima di valore model-based li ha migliorati in modo coerente — più nettamente sul compito del concetto più debole, dove il bersaglio cambia a ogni passo. I guadagni riportati sono percentuale di miglioramento massimo della conoscenza, non outcome di apprendimento, e la pipeline dipende da passaggi di soluzione generati di cui il tracciatore eredita la qualità.
- **Knowledge tracing basato sugli outcome (OKT):** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] tracciano la conoscenza degli studenti all'interno di sistemi di Outcome-Based Education trattando **gli outcome dei corsi come i concetti di conoscenza stessi**, e sostituiscono le "mappature di affinità" OBE validate da esperti tra outcome di corso e di programma alle relazioni tra concetti derivate dall'attenzione o dal grafo. Una Memory Augmented Neural Network (MANN) modella come il raggiungimento di ogni outcome influenza gli altri, e il fine-tuning domain-adaptive di BERT arricchisce gli embedding degli outcome (con una spina dorsale GRU che batte LSTM). Su dati LMS reali di programmi di [[engineering-education|ingegneria]] (2.416 studenti, 966 outcome) l'OKT ha raggiunto l'89,81% di AUC — superando DKT, DKVMN, EKT e SimpleKT — dando solo risultati competitivi su ASSISTments, a conferma che il vantaggio è legato alla struttura del [[curriculum-design|curriculum]] specifica dell'OBE.

- **Un singolo scalare di recenza cattura la maggior parte di ciò che un modello di sequenza compra.** Su 1.927.265 risposte di matematica di 8.996 studenti finlandesi, la sola identità dell'item ha raggiunto AUC .8362; aggiungere una singola misura di recenza relativa alla difficoltà dell'item l'ha innalzata a .8669, recuperando il 93,5% del guadagno .8690 di un transformer condizionato sulla query, mentre un riassunto a 128 dimensioni della storia ha raggiunto solo .8687 ([[knowledge-tracing-compression-math-2026|Lahtinen & McMullen (2026)]]).
- **Tracing solo su snapshot.** [[skill-acquisition-without-temporal-info|Nagai et al. (2026)]] inducono uno pseudo-ordine temporale dalle relazioni di inclusione tra gli insiemi di abilità degli studenti, trattando gli insiemi di abilità in espansione come progressione di apprendimento così che gli snapshot a istante singolo restino tracciabili — ma la formulazione presume che le abilità non siano mai perse, quindi i dispiegamenti per studenti che regrediscono necessitano prima di un meccanismo esplicito di dimenticanza.

### Relazione con altri concetti

Il knowledge tracing è strettamente correlato alla [[student-modeling|modellazione dello studente]] — mentre il knowledge tracing modella specificamente la conoscenza cognitiva nel tempo, la modellazione dello studente è la pratica più ampia di rappresentare tutti gli aspetti di uno studente (stato [[affective-computing|affettivo]], [[student-engagement|coinvolgimento]], preferenze). Il knowledge tracing alimenta i sistemi di [[adaptive-learning|apprendimento adattivo]] e di [[personalized-learning|apprendimento personalizzato]] che devono sapere cosa insegnare dopo, e le piattaforme di [[intelligent-tutoring|tutoraggio intelligente]] che usano le stime di padronanza per selezionare i problemi appropriati. Si collega ai [[learning-analytics|learning analytics]] per la progettazione di dashboard e interventi, e alla [[cognitive-diagnosis|diagnosi cognitiva]] per la [[assessment|valutazione]] fine delle abilità. I costrutti del knowledge tracing informano anche gli [[simulating-students|studenti simulati]] — lo stato cognitivo di uno studente simulato è spesso formalizzato con le stesse dinamiche di padronanza/decadenza che i modelli di knowledge tracing modellano, quindi la [[simulation]] è un modo di *generare* gli stati di conoscenza che i metodi di tracing normalmente *inferiscono* dai dati reali di risposta.

**Un avvertimento di ambito: il tracing stima la padronanza di dominio, non la cognizione di ordine superiore.** Una revisione di 15 anni di 127 studi sul tutoraggio intelligente rileva che il tracing bayesiano e a deep learning è migliorato nel periodo eppure resta incapace di modellare i processi cognitivi di ordine superiore, la metacognizione o la motivazione — gli stati che un sistema adattivo avrebbe più bisogno di bersagliare ([[zerkouk-comprehensive-review-its-2025|Zerkouk et al. (2025)]]).

**Un avvertimento: la padronanza non è correttezza.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren e Stamper (2026)]] mostrano che l'assunzione a due stati (appreso/non appreso) del BKT può essere violata dalla *sovrageneralizzazione ingannevole* — gli studenti possono apparire padroni e tuttavia applicare sistematicamente in modo errato un'abilità quando un vincolo applicativo nascosto viene violato. Questo argomenta a favore del tracciamento della comprensione condizionale (sapere *quando trattenere* un'azione), e non solo della correttezza dell'azione, quando le stime di padronanza guidano le regole di arresto [[adaptive-learning|adattive]].

**Un avvertimento collegato riguarda *come* i modelli di tracing sono validati rispetto a come sono dispiegati.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan e Carvalho (2025)]] adattano BKT, BKT-with-Forgetting e l'Additive Factors Model a un dataset multi-sessione di riapprendimento successivo e rilevano che riproducono le tendenze di apprendimento quando adattati retrospettivamente a tutte le sessioni (AUC accettabile ≈ 0,74–0,79); ma sotto **validazione incrociata basata sul tempo** — addestramento su una sessione per prevedere la successiva, il contesto applicato realistico — tutti e tre sovrastimano la prestazione futura di circa il 47–58%, non riescono a catturare l'[[desirable-difficulties|effetto di spaziatura]] e possono persino prevedere l'ordinamento ordinale errato tra condizioni di pratica. Significativamente, i modelli *senza* un meccanismo esplicito di dimenticanza hanno performato all'incirca bene quanto le versioni aumentate con la dimenticanza man mano che le sessioni si accumulavano, suggerendo che la dimenticanza fosse in parte assorbita in altri parametri (per es., le intercette per studente nell'AFM) anziché genuinamente modellata. Gli autori collegano questo alla distinzione apprendimento-prestazione: i modelli popolari confondono l'alta prestazione nel momento con l'alta probabilità di ritenzione a lungo termine. L'implicazione pratica è che un tracciatore che appare buono sull'adattamento retrospettivo può ingannare i sistemi adattivi che consumano le sue stime di padronanza, argomentando a favore della valutazione walk-forward e di modelli che tengano conto dell'intervallo di ritenzione, della spaziatura e della dimenticanza tra sessioni.

**Un ulteriore avvertimento riguarda la regola di evidenza che alimenta l'aggiornamento.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] ha eseguito quattro regole di aggiornamento su sequenze di eventi ASSISTments 2012–13 identiche, diverse solo nel modo in cui valutano le righe completate con aiuto, su una metà di conferma di 12.716 studenti e 985.813 eventi valutati. Leggere una riga con suggerimento o ritentata come un primo tentativo fallito prevedeva al meglio la prestazione non assistita successiva (AUC aggregato 0,658); accreditare qualsiasi completamento la prevedeva peggio (0,604), a malapena sopra una costante che conosce solo la difficoltà dell'abilità (0,595). La stessa scelta governa il conteggio della padronanza: accreditare i completamenti dichiarava padroneggiati il 93,9% di 113.428 coppie studente-abilità contro il 72,8% con la regola rigorosa, e le coppie che la regola indulgente dichiarava avanti rispetto alla rigorosa sono arrivate al 70,9% di accuratezza non assistita contro l'85,7% dove le due concordavano, sotto il tasso di base dello 0,744. Uno stato tracciato è quindi in parte funzione della convenzione di valutazione piuttosto che del solo studente, quindi una stima di padronanza consumata da un gate [[adaptive-learning|adattivo]] dovrebbe portare con sé la regola che l'ha prodotta.

**Un avvertimento di capacità: i modelli linguistici generali tracciano la conoscenza a malapena sopra una linea di base triviale.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden et al. (2026)]] hanno rilasciato FoundationalASSIST, che ripristina il testo completo delle domande, le risposte che gli studenti hanno effettivamente dato e le loro scelte di distrattore che i precedenti dataset di tracing avevano scartato, e hanno testato quattro [[llm|LLM]] di frontiera come tracciatori zero-shot. Il migliore, GPT-OSS-120B, ha raggiunto il 56,2% contro il 51,3% che una regola che prevede sempre "corretto" già ottiene (AUC-ROC 0,559), senza miglioramenti da storie più lunghe, e Llama-3.3-70B ha avuto ragione l'85,4% delle volte che uno studente rispondeva correttamente ma solo il 12,6% quando sbagliava — evidenza che un modello preconfezionato traccia l'ottimismo anziché la comprensione, quindi l'apparente abilità di un tracciatore va letta contro la linea di base triviale che il suo compito consente.

- **Un LLM a passaggio singolo può tracciare la conoscenza prima che qualsiasi studente sia registrato.** Interrogato come una sola domanda tipizzata senza dati della piattaforma bersaglio, Jev ha raggiunto un'AUC media di .706, al di sopra del migliore di 28 modelli di tracing profondi addestrati su 8 studenti (.689) e in testa finché il tracing supervisionato non lo raggiunge a 64-128 studenti ([[system-one-llm-knowledge-tracing-2026|Lee & Park, 2026]]).

## Concetti collegati

- [[learners]] — Learners: the umbrella for the learner-side concepts
- [[student-modeling]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[multimodal]]
- [[teacher-role]]
- [[cognitive-offloading]]
- [[llm]]
- [[simulating-students]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — fine-grained mastery estimation feeding support decisions

## Articoli collegati
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Deceptive overgeneralization: adaptive mastery can stop practice before learners know when to withhold an action (An, McLaren & Stamper 2026)
- [[huang-interpretable-knowledge-tracing-2026]]
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]]
- [[skill-acquisition-without-temporal-info]]
- [[xie-hillm-cd-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — semantically grounded tracing with KC-calibrated states, used as an RL environment for recommendation
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[crediting-assisted-work-inflates-mastery-2026]] — Which evidence rule decides a mastery claim (Srivastava 2026)
- [[system-one-llm-knowledge-tracing-2026]] — A single-pass LLM traces knowledge above deep models trained on 8 learners, at a fraction of the cost (Lee & Park 2026)
- [[knowledge-tracing-compression-math-2026]] — Compressing student history in mathematics knowledge tracing
