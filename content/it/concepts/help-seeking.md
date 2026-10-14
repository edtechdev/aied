---
title: Ricerca di aiuto
created: "2026-10-14T22:25:00-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [help-seeking, metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring, llm]
connected_faqs: [reducing-over-reliance, study-with-ai]
audience: [learners]
level: [higher ed, k 12]
confidence: high
reviewed_by: [editor]
translation_of: "concepts/help-seeking"
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

> **Ricerca di aiuto** — il processo con cui lo studente riconosce un bisogno di assistenza e la richiede strategicamente, e come tale processo si svolge negli ambienti di apprendimento supportati dall'IA. Nell'[[ai-education|IA nell'educazione]], la ricerca di aiuto è centrale rispetto al fatto che gli strumenti di IA sostengano o minino l'apprendimento: la *qualità* della ricerca di aiuto (quando, come e per cosa gli studenti chiedono) plasma fortemente i risultati, e i tutor di IA, gli indizi e gli agenti [[pedagogy|pedagogici]] sono progettati proprio per elicitare una ricerca di aiuto produttiva piuttosto che una ricerca di risposte.([[lak2026-hint-button-unproductive-use]])([[ai-fallibility-warning-help-seeking]])

Un contatto proattivo può aumentare la ricerca di aiuto senza alcuna modifica ai materiali di apprendimento. Un esperimento pre-registrato in corsi universitari con iscrizioni numerose ha inviato messaggi agli studenti tramite un chatbot accademico e ha riscontrato una maggiore fruizione del tutoraggio e dell'insegnamento supplementare; l'analisi di mediazione ha attribuito il 17,8% dell'effetto sul voto a quell'aumento della ricerca di aiuto (p = 0,041) ([[chatbot-outreach-course-performance-2026]]).

## Domande da considerare

- Quando ti blocchi, tendi a chiedere una risposta diretta o una guida che ti aiuti a capire da solo? Cosa credi che ciascuna scelta faccia a ciò che trattieni realmente?
- La ricerca mostra che gli studenti spesso intendono imparare con l'IA ma per default chiedono la risposta — un "divario tra intenzione e comportamento" associato a prestazioni peggiori. Perché le buone intenzioni possono crollare così facilmente nella ricerca di risposte?
- Un "pulsante degli indizi" persistente può trasformare un compito di apprendimento in un esercizio di copiatura segnalando che l'aiuto è sempre disponibile. Riesci a ricordare un momento in cui avere l'aiuto troppo facilmente disponibile ti ha fatto saltare il pensiero che dovevi fare?
- Uno studio ha rilevato che il semplice avvertire gli studenti che un'IA può commettere errori ha effettivamente aumentato la loro ricerca di aiuto. In che modo uno scetticismo salutare può cambiare il modo in cui gli studenti si rapportano a un tutor rispetto alla fiducia cieca?
- Gli studenti in difficoltà sono spesso i meno propensi a cercare aiuto senza essere sollecitati. Se gli studenti che hanno più bisogno di supporto non si fanno avanti, come dovrebbero rispondere gli strumenti di IA e gli insegnanti?
- La pagina propone di ritardare gli indizi e di spostare la domanda progettuale dal "se" al "come" fornire aiuto. Come apparirebbe un'esperienza di aiuto ben progettata per i tuoi studenti — e cosa li indurrebbe effettivamente a usarla?

## Introduzione

La ricerca di aiuto è un costrutto ben consolidato nella ricerca sull'apprendimento, strettamente legato all'[[self-regulated-learning]] e alla [[metacognition]]: richiede agli studenti di monitorare la propria comprensione, riconoscere una lacuna, decidere che è necessario un aiuto e formulare una richiesta efficace. Con l'ascesa dei tutor di [[generative-ai|IA generativa]], la ricerca di aiuto ha assunto nuova importanza — e nuove modalità di fallimento. Gli studenti spesso *intendono* usare l'IA per imparare ma per default chiedono risposte dirette, un divario che la ricerca in questa base di conoscenza documenta attraverso domini e fasce d'età. Il modello classico assume che una richiesta riguardi una conoscenza che chi chiede non possiede. La domanda di supporto operativo complica quell'assunto: su 4.093 query, almeno il 20,4% chiedeva lo stato di una consegna in attesa piuttosto che una conoscenza, una classe servita solo l'1,3% delle volte da un assistente vincolato al recupero [[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]].([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

## Ricerca di aiuto produttiva e improduttiva

La distinzione centrale nella letteratura è tra la ricerca di aiuto che sostiene l'apprendimento e la ricerca di aiuto che lo aggira.

### Comportamenti di ricerca di aiuto improduttivi

La ricerca in questa base di conoscenza identifica pattern concreti e osservabili di ricerca di aiuto improduttiva, specialmente negli [[intelligent-tutoring|intelligent tutoring systems]]:

- **Richieste premature di indizi** — chiedere aiuto prima di aver tentato alcuna soluzione. Anche gli studenti incerti imparano di più tentando prima.([[lak2026-hint-button-unproductive-use]])
- **Lettura superficiale degli indizi** — avanzare tra gli indizi troppo rapidamente per leggerli (segnalata a una soglia di ~4 parole/secondo), saltando spesso direttamente all'indizio finale che rivela la risposta.([[lak2026-hint-button-unproductive-use]])
- **Ricerca di risposte anziché di apprendimento** — chiedere all'IA di produrre la risposta anziché di spiegare o guidare. In uno studio su 98 studenti di terza media che usavano un tutor GenAI, le interazioni erano dominate da richieste strumentali con quasi nessun monitoraggio o valutazione del proprio apprendimento — nonostante gli studenti avessero scelto in precedenza un supporto a impalcatura. Questo **divario tra intenzione e comportamento** era associato a una prestazione *inferiore* nel post-test e a un carico cognitivo estraneo più alto.([[regulating-ai-tutor-adolescent-srl]])
- **Consultare l'IA prima di qualsiasi tentativo indipendente o fonte umana.** [[uneven-impact-generative-ai-student-learning-2026|Manikonda et al. (2026)]] misurano direttamente questo ordinamento come **affidamento precoce** — consultare la GenAI prima del pensiero indipendente, di una ricerca tradizionale o di rivolgersi a un docente — e lo associano a un impatto negativo maggiore (β = ,402, p = ,004) oltre che a un beneficio accademico (β = ,301, p < ,001) tra 118 studenti in corsi relativi all'IA. L'associazione con il danno era assente a bassa [[ai-literacy|alfabetizzazione valutativa]] e più forte ad alta alfabetizzazione valutativa (b = ,688 a +1 DS, p < ,001), così che gli studenti più capaci di giudicare l'output dell'IA riportavano il costo maggiore dal consultarlo per primo: la scelta di *chi chiedere per primo* comporta uno svantaggio che l'abilità nel valutare la risposta non compensa. Lo studio mostra anche che usare l'IA per organizzare, valutare e scomporre i problemi — uso **cognitivo** anziché affidamento precoce — è il pattern associato all'impatto positivo, così che la modalità di fallimento della ricerca di aiuto è una questione di sequenziamento piuttosto che di chiedere del tutto.
- **Richiedere in modo prolungato senza recupero** — chiedere è produttivo all'inizio ma non indefinitamente: le richieste di aiuto sono il tipo di impasse più recuperabile all'insorgenza (47,0%) ma cadono più in basso una volta che l'assistenza fallisce (12,5% a profondità sei o superiore), così che la persistenza, non la richiesta stessa, è il segnale che vale la pena tracciare [[guided-ai-tutor-impasse-resolution-2026|Ahtisham et al. (2026)]].
- **Gli studenti in difficoltà sono i meno propensi a cercare aiuto senza essere sollecitati** — il lato del coinvolgimento della ricerca di aiuto. In [[one-click-away-khanmigo-two-year-school-experiment-2026|un RCT biennale su Khanmigo (Oreopoulos & Low 2026)]], anche con accesso gratuito e tempo di pratica obbligatorio, lo studente in difficoltà mediano scriveva al tutor di IA solo nel ~17% delle sessioni con errori, perlopiù con risposte scarne o clic — coerentemente con il risultato dell'economia dell'educazione secondo cui gli interventi dipendenti dall'iniziativa raggiungono il numero minore degli studenti che ne trarrebbero maggior beneficio. [[virtual-tutoring-computer-assisted-learning-takeup-2026|TWiK (Oreopoulos et al. 2026)]] mostra che la fruizione è altamente sensibile alla riduzione dell'attrito (la fruizione della prima sessione è salita dal 45% all'83% dopo la semplificazione dell'iscrizione), ma l'ingresso ≠ partecipazione sostenuta (la frequenza è rimasta intermittente).

### Perché la ricerca di aiuto improduttiva danneggia l'apprendimento

La **prospettiva delle affordance** spiega un meccanismo chiave: quando un'interfaccia rende l'aiuto costantemente e salientemente disponibile (ad esempio un "pulsante degli indizi" persistente), segnala agli studenti che l'aiuto c'è sempre, creando un'affordance non intenzionale che può far collassare il compito in un esercizio di copiatura. Accedere rapidamente agli indizi finali elude la costruzione attiva di schemi che l'apprendimento richiede.([[lak2026-hint-button-unproductive-use]])

### La qualità della ricerca di aiuto è misurabile

Due indicatori semplici e interpretabili — le richieste premature di indizi e la lettura superficiale degli indizi — sono calcolabili dai log standard dei tutor e sono costantemente associati a una riduzione dei [[learning-gains|guadagni di apprendimento]] tra semestri, anche controllando per la [[prior-knowledge|conoscenza pregressa]]. Questo li rende pratici per le [[learning-analytics]] [[visualization|dashboard]] e per l'intervento in tempo reale, a differenza dei complessi rilevatori di "gaming the system" appresi automaticamente.([[lak2026-hint-button-unproductive-use]])

## Progettare sistemi di IA che promuovano la ricerca di aiuto produttiva

### Impalcare il modo in cui gli studenti chiedono

Un addestramento esplicito nella **ricerca di aiuto focalizzata sul ragionamento** — richiedere indizi graduali e verifiche anziché risposte finali — produce risultati migliori dell'affidamento acritico. In uno studio quasi-sperimentale di statistica universitaria, l'accesso guidato agli LLM (con addestramento sulla ricerca di aiuto orientata al ragionamento) ha portato a una prestazione indipendente più forte e a una migliore calibrazione dell'autovalutazione rispetto all'accesso illimitato agli LLM. La lezione: **l'accesso agli LLM da solo è un intervento incompleto**; la sfida progettuale è impalcare *come* gli studenti usano l'IA affinché funzioni come partner di ragionamento anziché come strumento per ottenere risposte.([[guided-llm-scaffolding-independent-learning]])

Il costo dell'interazione fa parte della stessa questione. [[penquiry-pen-based-llm-qa-2026|Rhee et al. (2026)]] identificano una **barriera referenziale** e una **barriera espressiva** che impediscono a chi apprende con la penna di chiedere qualsiasi cosa a un [[llm|LLM]]: indicare una regione di un diagramma o un termine di un'equazione non può essere espresso in prosa digitata, e lo sforzo di formulazione cade esattamente nel momento in cui una domanda è più fragile. Il loro sistema Penquiry risolve il riferimento ancorando i tratti d'inchiostro agli elementi del documento ed espande le parole chiave scarne dell'inchiostro in query complete attraverso l'autocompletamento; due studi iterativi con 16 partecipanti ciascuno hanno rilevato che il sovraccarico cognitivo e fisico dell'indagine è diminuito significativamente. Se un costo di richiesta più basso produca una ricerca di aiuto *migliore* o semplicemente più ricerca di aiuto resta aperto, e gli autori propongono un autocompletamento temporalmente adattivo — verifica fondamentale all'inizio di una sessione, prompt di livello superiore più tardi — come via dalla riduzione dell'attrito al [[scaffolding|supporto in dissolvenza]] anziché a una stampella permanente.

L'impalcatura può essere erogata anche all'interno del compito anziché prima di esso. [[helpcoach-ai-help-seeking-scaffolding-2026|Jin et al. (2026)]] hanno costruito HelpCoach, un add-on per le interfacce di chat che valuta quanto specificamente uno studente chiede aiuto e sollecita una revisione quando una domanda è troppo vaga, rendendo espliciti la componente di conoscenza e il tipo di impalcatura. In uno studio between-subjects con 40 studenti universitari che imparavano la programmazione web, i partecipanti a HelpCoach hanno scritto una proporzione significativamente più alta di domande specifiche nelle loro prime bozze rispetto a una baseline di addestramento pre-compito (57,3% contro 40,5%) e hanno trattenuto significativamente più conoscenza una settimana dopo (d = 1,100), mentre la differenza di specificità nel terzo compito non era più significativa (43,7% contro 32,1%). Gli autori avvertono che il guadagno di ritenzione non può ancora essere attribuito a risposte più mirate del chatbot.

Una terza leva sul costo del chiedere è *da dove* proviene l'aiuto. [[course-specific-rag-help-seeking-higher-ed-2026|Gray e Hobbs (2026)]] hanno costruito Beacon, un assistente [[rag|con recupero aumentato]] specifico per il corso e fondato sui materiali approvati di un modulo di programmazione, valutandolo con 15 studenti di informatica e quattro accademici. L'89% dei partecipanti ha giudicato le sue risposte fortemente allineate ai materiali del corso e il 66,7% ha detto che supportava anziché sostituire il loro apprendimento, sebbene solo tra la metà e il 60% abbia riportato guadagni in comprensione o fiducia. La motivazione è la barriera che questa sezione documenta: il 62,5% di quegli studenti ha detto di evitare a volte di chiedere aiuto quando ne avevano bisogno e il 75% ha riportato ansia quando un argomento non risultava chiaro, così che un canale privato e fondato sul modulo è offerto come primo gradino prima di rivolgersi a un docente. Gli accademici intervistati hanno tenuto viva la contro-argomentazione — apprezzavano che Beacon trattenesse le soluzioni complete e temevano che gli strumenti non vincolati lasciassero agli studenti saltare una fase dello sviluppo — ed è per questo che la progettazione si guadagna il proprio posto rifiutando di completare il lavoro.

### Calibrare la fiducia attraverso la trasparenza

Un esperimento in classe con 252 studenti ha rilevato che **avvertire gli studenti sulla fallibilità dell'IA aumentava la ricerca di aiuto** in un sistema di tutoraggio matematico. La trasparenza sui potenziali errori del sistema migliorava il coinvolgimento degli studenti con il sistema — collegando la ricerca di aiuto alla [[trust-calibration]] e al [[hallucination-risk]].([[ai-fallibility-warning-help-seeking]])

### Ripensare la consegna di indizi e impalcature

Anziché rimuovere l'aiuto, la ricerca raccomanda di riprogettare il modo in cui esso è consegnato:

- **Disponibilità ritardata degli indizi** — richiedere un tempo minimo di coinvolgimento o tentativi di soluzione prima che gli indizi (specialmente quelli finali) siano accessibili.([[lak2026-hint-button-unproductive-use]])
- **Passare dal *se* al *come*** — la domanda progettuale chiave è come strutturare la consegna degli indizi in linea con i principi della lotta produttiva, non se fornire indizi del tutto.([[lak2026-hint-button-unproductive-use]])
### Il problema della fruizione nei tutor LLM

Gli studenti reali aggirano frequentemente lo [[scaffolding]] di un [[conversational-ai|chatbot]] — non necessariamente in modo dannoso, ma spesso perché c'è un disallineamento tra l'inquadratura pedagogica del chatbot e gli obiettivi di apprendimento propri dello studente. Le pipeline di valutazione devono quindi misurare non solo se un tutor impalca, ma se gli studenti *fruiscono* di quell'impalcatura, anziché assumere che lo faranno.([[rethinking-scaffolding-llm-tutors]])

## Ricerca di aiuto e apprendimento autoregolato

La ricerca di aiuto è parte integrante dell'[[self-regulated-learning]]: la ricerca di aiuto produttiva richiede agli studenti di monitorare la comprensione, giudicare quando è necessario un aiuto e selezionare fonti appropriate. Nei contesti GenAI questo diventa ancora più esigente, poiché gli studenti devono anche esercitare [[agency]] sull'IA e mantenere vigilanza epistemica anziché deferire ad essa. La ricerca in questa base di conoscenza sostiene la necessità di [[scaffolding|impalcature]] che promuovano un uso dell'IA più [[agentic-ai|agentico]] ed epistemicamente proattivo, e mette in evidenza il rischio di [[cognitive-offloading|affidamento eccessivo]] e [[cognitive-offloading]] quando la ricerca di aiuto degenera in una ricerca incondizionata di risposte.([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

### La ricerca di aiuto mediata dagli LLM come processo in quattro stadi

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et al. (2026)]] mostrano che, nello studio STEM quotidiano, la ricerca di aiuto tramite LLM non è un atto singolo ma un processo stratificato e dipendente dal contesto con quattro stadi: (1) *decidere se è necessario un aiuto* — gli studenti provano prima i compiti in modo indipendente per preservare il valore di apprendimento; (2) *scegliere a chi chiedere* — ChatGPT come primo passo a bassa barriera, poi i pari per la negoziazione concettuale, poi i docenti per questioni complesse o ad alto rischio; (3) *determinare il tipo di aiuto* — da indizi e spiegazioni all'impalcatura del [[problem-solving]], alla razionalizzazione del lavoro di routine, fino all'estensione dell'apprendimento; e (4) *giudicare l'aiuto ricevuto* — esercitare fiducia selettiva e verificare gli output dell'IA rispetto ai materiali del corso o con degli umani. Crucialmente, gli studenti privilegiavano la **ricerca di aiuto strumentale** (migliorare la comprensione) rispetto alla **ricerca di aiuto esecutiva** (ottenere soluzioni), una distinzione che gli autori propongono di adattare in nuovi item di misurazione dell'SRL per gli LLM.

Nella [[english-education|composizione]] interamente online, la disponibilità dello strumento non è il collo di bottiglia. [[reed-resource-literacy-genai-composition-2026|Reed (2026)]] ha osservato che gli studenti in difficoltà non erano quelli privi di supporto ma quelli che non riconoscevano quando era necessario un aiuto, quale risorsa si adattava al compito, o come giudicare il feedback una volta arrivato — e l'output fluido della [[generative-ai]] è facilmente scambiato per un supporto autorevole. La sua risposta è stata rendere la ricerca di aiuto *strutturata* anziché semplicemente disponibile: punti di contatto obbligatori che decodificano le richieste del compito, mappano le risorse con giustificazione, confrontano le fonti di feedback e chiudono il ciclo con la riflessione.

### Rendere visibile il contesto comportamentale: TutorTrace

[[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]] affrontano il precursore comportamentale della ricerca di aiuto nella [[cs-education|programmazione assistita dall'IA]]: i tutor umani si adattano al comportamento osservabile degli studenti, non solo alle loro richieste esplicite, ma i tutor di IA mancano di quel contesto. **TutorTrace** è un dataset e una pipeline che rendono il contesto comportamentale degli studenti computabile in tempo reale a partire da telemetria di basso livello dell'IDE (quattro deployment, N=480; ~180K eventi, 13.633 segmenti comportamentali, 27 metriche), derivando una tassonomia dell'attività dello studente *prima* della prima query all'IA, *tra* query consecutive e *lungo* la sessione. Questo consente ai sistemi di classificare se una query riflette una ricerca di aiuto **guidata** (preceduta da lavoro indipendente) o **dipendente** (nessun lavoro indipendente) — AUROC=,717 nella predizione held-out — e di prevedere query imminenti (AUROC=,726). Una valutazione preliminare in classe ha rilevato che i prompt sensibili al comportamento riducevano gli intervalli tra query senza lavoro indipendente dal 50,0% al 20,7%. Questo collega la telemetria delle [[learning-analytics]] al [[intelligent-tutoring|tutoraggio adattivo]], mostrando che il contesto comportamentale può essere operazionalizzato su larga scala per impalcare *come* gli studenti cercano aiuto anziché rispondere semplicemente alle loro domande esplicite.

## Implicazioni per la progettazione e la ricerca

1. **Progetta deliberatamente le affordance della ricerca di aiuto.** Pulsanti di aiuto persistenti e salienti possono abilitare strategie di aggiramento; ritarda l'accesso e struttura la consegna per sostenere le [[desirable-difficulties|lotte produttive]].([[lak2026-hint-button-unproductive-use]])
2. **Impalca la ricerca di aiuto stessa.** Addestra gli studenti a richieste focalizzate sul ragionamento (indizi graduali, verifiche) anziché assumere che l'accesso equivalga a un buon uso.([[guided-llm-scaffolding-independent-learning]])
3. **Usa la trasparenza per calibrare la fiducia.** Avvertire sulla fallibilità dell'IA può aumentare la ricerca di aiuto appropriata e il coinvolgimento.([[ai-fallibility-warning-help-seeking]])
4. **Misura la fruizione, non solo l'impalcatura.** Valuta se gli studenti si impegnano effettivamente con l'inquadratura pedagogica, non solo se il tutor la fornisce.([[rethinking-scaffolding-llm-tutors]])
5. **Sostieni il monitoraggio e l'agentività.** Le impalcature della ricerca di aiuto dovrebbero rafforzare la [[metacognition]] e l'[[self-regulated-learning]], proteggendo dall'[[cognitive-offloading|affidamento eccessivo]].

## Concetti collegati

- [[learners]] — Studenti: il concetto ombrello per i concetti del lato studente
- [[self-regulated-learning]]
- [[metacognition]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[student-experience]]
- [[cognitive-offloading]]
- [[learning-analytics]]
- [[k-12]]
- [[higher-ed]]
- [[socratic-method]]
- [[pedagogical-agent]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[affective-tutoring]]
- [[feedback]]
- [[active-learning]]
- [[agentic-ai]]
- [[student-support-and-success]] — contatto istituzionale e allocazione del supporto, oltre la ricerca di aiuto interna al corso

## Articoli collegati

- [[penquiry-pen-based-llm-qa-2026]] — Penquiry: A Pen-based Interactive In-situ Q&A System Leveraging LLMs
- [[tutortrace-learner-behavioral-states-2026]]
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — LLM-mediated help-seeking in STEM: layered, instrumental, and verified
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: an experiment in take-up and learning
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[lak2026-hint-button-unproductive-use]] — Premature hint requests and superficial hint reading predict lower learning gains in an ITS
- [[ai-fallibility-warning-help-seeking]] — Warning about AI fallibility increases help-seeking in a math tutoring system
- [[regulating-ai-tutor-adolescent-srl]] — The intention-behavior gap in adolescent GenAI help-seeking and self-regulated learning
- [[guided-llm-scaffolding-independent-learning]] — Guided LLM scaffolding improves reasoning-focused help-seeking and independent learning
- [[rethinking-scaffolding-llm-tutors]] — The scaffolding/student-uptake mismatch in real-world LLM tutor deployments
- [[uneven-impact-generative-ai-student-learning-2026]] — Early reliance: consulting GenAI before independent thought, search, or an instructor predicts both benefit and harm (Manikonda et al. 2026)
- [[reed-resource-literacy-genai-composition-2026]] — Resource literacy in online composition: the bottleneck is recognizing when help is needed (Reed 2026)
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Reducing Barriers to Academic Support: Evaluating a Course-Specific RAG System for Addressing Help-Seeking Disparities in Higher Education
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — Adaptive Scaffolding Needs Contingency: An AI Tutor That Escalates and Fades on What the Learner Does
- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach: Scaffolding Targeted AI Help-Seeking During Problem-Solving
- [[guided-ai-tutor-impasse-resolution-2026]] — Examining Variation in How Guided AI Tutors Resolve Student Impasses
- [[student-query-demand-hybrid-ai-support-2026]] — What Students Actually Ask: Demand Structure and Automation Potential in a Hybrid Support System
