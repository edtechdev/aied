---
title: "Come possono gli agenti di IA sostenere studenti e docenti?"
created: "2026-10-14T21:55:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Una demo di un fornitore dura quaranta minuti. L'agente legge il programma del corso, abbozza il quiz della settimana prossima, segnala tre studenti che non hanno aperto la lettura e si offre di scrivere loro. Il tuo prorettore vuole una decisione sulla licenza entro la fine del mese.

Un [[agentic-ai|agente]] pianifica, chiama strumenti, mantiene il contesto, divide il lavoro in sotto-compiti e si adatta tra i turni, che è più di quanto faccia un [[conversational-ai|chatbot]]. I ruoli lato studente e lato insegnante che questo apre sono reali. L'evidenza non mostra che più autonomia produca più apprendimento: nell'unico studio di confronto diretto qui presente, un agente e un chatbot sono finiti alla pari. Metti l'autonomia dove una persona controlla l'output, lascia la pianificazione allo studente e valuta la qualità dell'insegnamento con la tua rubrica.

## La versione breve

**1.** Dai un nome al compito prima del prodotto.

**2.** Parti dal lato dell'insegnante, dove un insegnante ispeziona già il lavoro.

**3.** Tratta l'autonomia aggiunta come un costo finché l'evidenza non dice il contrario.

**4.** Tieni la pianificazione e il giudizio allo studente, perché sono ciò che il compito esiste per costruire.

**5.** Valuta l'agente con la tua rubrica, e programma un controllo senza assistenza prima che lo studio pilota finisca.

## Scegli il compito prima di scegliere l'agente

[[agentic-workflows-education|Agentic Workflows in Education]] nomina quattro capacità ricorrenti: riflessione, pianificazione, uso di strumenti e collaborazione multi-agente. Ognuna aggiunge un costo accanto alla possibilità: in [[explainable-ai|interpretabilità]], coordinamento, [[trust-calibration|fiducia]], latenza e supervisione.

I ruoli lato studente vanno dal tutoraggio [[adaptive-learning|adattivo]] e dalla pianificazione dello studio al feedback [[formative-assessment|formativo]], alla [[problem-solving|risoluzione guidata dei problemi]] e alla generazione di esercizi, fino alle raccomandazioni sui prerequisiti e alla [[metacognition|riflessione metacognitiva]] e al [[prompt-engineering|prompting]] riflessivo. I ruoli lato insegnante coprono lo sviluppo di materiali, la [[automated-question-generation|generazione e validazione delle domande]], la selezione del feedback, le [[learning-analytics|analitiche]] del corso, la progettazione didattica, il recupero di risorse e l'orchestrazione di sotto-agenti specializzati.

Due di questi sono più sicuri in una fase iniziale, perché entrambi producono un artefatto che una persona legge prima degli studenti: un generatore di domande affiancato a un validatore, e una bozza che un insegnante modifica.

## Parti da dove una persona controlla già il lavoro

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], il primo [[rct|studio controllato randomizzato]] di un sistema uomo-IA nel tutoraggio dal vivo, ha dato a tutor novizi una guida in tempo reale tratta dal ragionamento di tutor esperti, su 900 tutor e circa 1.800 studenti. Gli studenti dei tutor con accesso avevano 4 punti percentuali in più di probabilità di padroneggiare gli argomenti, che salivano a 9 punti tra i tutor con la valutazione più bassa, i cui studenti raggiungevano quelli dei tutor meglio valutati nel gruppo di controllo. È costato circa \$20 per tutor all'anno, e l'analisi di oltre 550.000 messaggi di tutoraggio ha mostrato tutor che passavano dal dare risposte al porre domande guida. Questa è l'IA che aumenta l'[[teacher-role|insegnante]].

L'agente non ha insegnato allo studente. Ha alimentato una persona a metà conversazione, e la persona ha deciso cosa dire. Una persona nel circuito e un esito vicino al lavoro sono ciò che rende il risultato trasferibile a un altro corso.

## Non dare per scontato che più autonomia compri più apprendimento

[[ilieva-agentic-genai-higher-education-2026|Uno studio su 130 studenti in un corso di e-commerce]] ha trovato che sia i chatbot sia gli agenti di [[generative-ai|IA generativa]] erano valutati sopra l'[[online-teaching-and-learning|e-learning]] tradizionale su apprendimento e [[personalized-learning|personalizzazione]], senza differenze significative tra chatbot e agente. Più autonomia, nessun valore aggiunto su quelle misure.

Il quadro di quello studio tratta gli agenti come partner di apprendimento delimitati e supervisionati da persone, con obiettivi, punti di controllo e decisioni finali lasciati alle persone. [[beyond-agent-label-agentic-ai-governance-2026|Beyond the Agent Label]] ne fa una regola di [[governance|governo]]: l'autonomia non dovrebbe superare la maturità dell'evidenza o la solidità di un controllo umano responsabile, e l'evidenza è più forte sugli esiti a livello di artefatto, più debole sull'[[learning-gains|apprendimento]] durevole e sull'[[equity-in-ai-education|equità]].

Il rischio lato studente va nella stessa direzione. Un agente che pianifica e monitora per uno studente rimuove la pratica che costruisce l'[[self-regulated-learning|autoregolazione]] e invita allo [[cognitive-offloading|scaricamento cognitivo]]. La [[agentic-ai-pedagogical-best-practice-2026|guida alle buone pratiche]] chiede attrito intenzionale, [[scaffolding]] che svanisce e [[human-in-the-loop-ai|supervisione umana]]. Le [[desirable-difficulties|difficoltà produttive]] hanno esempi funzionanti. Gli agenti di conflitto costruttivo che discutono con una progettazione debole hanno migliorato gli esiti di progettazione nella ricerca esaminata. I [[simulating-students|pari simulati]] sostengono l'[[collaborative-learning|apprendimento collaborativo]] e il sondaggio [[socratic-method|socratico]], e la [[medical-education|didattica clinica]] basata su [[simulation|simulazioni]] permette agli studenti di esercitarsi dove un errore costa poco.

Il test per ognuno di loro: dopo la sessione, cosa sa fare lo studente che prima faceva l'agente? Consegnare il giudizio costa allo studente la [[agency|pratica]] di usarlo.

## Verifica l'agente contro il tuo giudizio

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Otto agenti didattici IA distribuiti in un curriculum di medicina]] sono stati classificati in modo diverso dai punteggi generati dalla piattaforma e da una rubrica esperta indipendente. L'agente terzo in classifica per la piattaforma è finito ultimo sulla qualità dell'insegnamento. I punteggi della piattaforma indicizzano la prestazione degli studenti, che si muove per ragioni che non hanno nulla a che vedere con l'insegnamento.

Chiedi cosa conta un numero di un cruscotto, chi ha scritto la rubrica che ci sta dietro e come apparirebbe un punteggio basso nel lavoro di uno studente. La [[pedagogical-safety|sicurezza pedagogica]] appartiene alla stessa revisione, dato che una catena di [[pedagogical-agent|agenti]] rende difficile dire quale componente sia responsabile quando una risposta è sbagliata.

## Pianifica lo spegnimento

Gli studi randomizzati mostrano che un'assistenza IA breve può deprimere la prestazione non assistita successiva, e l'intervallo dopo il ritiro, il [[cognitive-washout-ai-skill-decay-2026|washout cognitivo]], è quasi del tutto non misurato. La sintesi dietro questa pagina si basa su una [[meta-analysis-systematic-review|rassegna esplorativa]] di 474 studi e trova il lavoro concentrato nell'[[higher-ed|istruzione superiore]], nello [[stem-education|STEM]], in disegni a breve termine e nel tutoraggio testuale, con solo una minoranza radicata esplicitamente nella teoria educativa. Uno studio pilota che finisce quando finisce la licenza ha misurato la finestra sbagliata.

## Cosa sbagliano gli amministratori su questo

Un agente è un chatbot potenziato, quindi il potenziamento dovrebbe vedersi negli esiti. Nel confronto su 130 studenti entrambe le condizioni IA battevano l'e-learning e nessuna batteva l'altra.

Il cruscotto classifica la qualità dell'insegnamento. Classifica la prestazione degli studenti, e otto agenti hanno prodotto una classifica che invertiva il terzo e l'ultimo posto rispetto a una rubrica esperta.

L'autonomia è la funzionalità da comprare. La regola di proporzionalità va nel senso opposto, e l'evidenza è più sottile proprio dove l'autonomia è maggiore.

L'accesso chiude il divario di equità. Un accesso diseguale a sistemi agentici capaci può allargarlo, e un agente riproduce su larga scala la distorsione dei dati di addestramento.

## Cosa ti tornerà indietro

**«Gli studenti lo lasceranno fare il lavoro.»** Alcuni lo faranno, e l'architettura decide con quanta facilità. Gli agenti che pianificano e abbozzano per lo studente lo invitano. Gli agenti che richiedono un tentativo e poi pongono una domanda no.

**«La valutazione del fornitore dice che funziona.»** Chiedi cosa conta il numero. Se è la prestazione degli studenti misurata dalla piattaforma, misura gli studenti tanto quanto l'agente.

**«Nessuno può dire quale agente sia responsabile in una catena.»** Vero per la maggior parte delle implementazioni attuali. Nomina un responsabile della catena, registra quale componente ha prodotto quale output e mantieni un punto di controllo umano prima che qualcosa arrivi a un fascicolo dello studente.

## Cosa fare questa settimana

**1.** Scrivi il compito e l'esito con cui lo giudicherai, una frase ciascuno, prima della prossima chiamata con il fornitore.

**2.** Valuta l'output di un agente con la tua rubrica su dieci lavori reali di studenti, e conserva i punteggi.

**3.** Aggiungi al piano dello studio pilota un compito senza assistenza, con data e responsabile.

## Dove andare dopo

[[developing-ai-tutor]] copre la costruzione lato studente, dall'obiettivo alla scala dell'aiuto, e [[evaluating-ai-interventions-methods]] copre se la cosa ha funzionato. [[intelligent-tutoring]] e [[ai-literacy]] forniscono il vocabolario di progettazione che questa pagina dà per scontato.
