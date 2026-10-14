---
connected_resources: [openmaic]
title: Simulazione
created: "2026-10-14T21:55:00-04:00"
type: concept
pedagogy: [active-learning, experiential-learning]
technology: [adaptive-learning, pedagogical-agent, reinforcement-learning]
confidence: high
reviewed_by: [editor]
translation_of: concepts/simulation
source_updated: "2026-10-04T15:54:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Simulazione** — uso di ambienti, agenti o scenari modellati per supportare l'apprendimento attraverso la pratica e il feedback in contesti sicuri, ripetibili e spesso altrimenti inaccessibili. Le simulazioni consentono agli studenti di agire, commettere errori e vedere le conseguenze senza costo reale, e sono sempre più spesso alimentate dall'IA e dalla modellazione basata su agenti.

## Domande da considerare

- Ripensa a una volta in cui hai imparato qualcosa facendola in un ambiente sicuro e a bassa posta in gioco — un laboratorio, un'esercitazione, un simulatore di volo o di gioco. Che cosa ha reso efficace quella pratica, e che cosa potrebbe perdersi se la simulazione fosse troppo realistica o non abbastanza realistica?
- La pagina sostiene che le simulazioni consentono agli studenti di commettere errori e vedere le conseguenze «senza costo reale». Second te che cosa si guadagna, e che cosa si può perdere, quando il costo di uno sbaglio scende quasi a zero?
- Se un'IA può simulare pazienti, studenti o partner di conversazione per la pratica, dove tracceresti il confine tra una rehearsal preziosa e una pratica che non si trasferisce all'interazione umana reale?
- Perché la consapevolezza che uno studente ha dei limiti di una simulazione — la sua [[trust|fidatezza]] — potrebbe contare quanto la fedeltà con cui essa modella la realtà?
- In che modo la stessa tecnologia di simulazione che aiuta qualcuno a imparare potrebbe anche ingannarlo, e che cosa ti servirebbe sapere per distinguere questi due esiti?

## Introduzione

La simulazione sta al cuore delle [[experiential-learning|esperienziali]] e delle [[active-learning]] [[pedagogy|pedagogie]] attive. Fornisce la pratica deliberata, il [[productive-failure|fallimento produttivo]] e i [[feedback|circoli di retroazione]] che costruiscono abilità e giudizio. L'IA ha trasformato la simulazione in due modi: alimenta ambienti simulati più realistici e adattivi, e genera [[simulating-students|studenti simulati]], pazienti o interlocutori che rendono la pratica scalabile. L'evidenza comportamentale mostra che *come* gli studenti si impegnano con una simulazione varia sistematicamente anziché uniformemente: tracciando studenti online che costruivano modelli ecologici in VERA, [[an-goel-self-directed-modeling-2026|An, Hammock e Goel (2025)]] hanno classificato il [[student-engagement|coinvolgimento]] in Osservazione (esecuzioni frequenti e aggiustamento dei parametri con poca costruzione di modelli), Costruzione (costruzione pratica con poca simulazione) ed Esplorazione (cicli completi costruire–parametrizzare–simulare), con gli Esploratori che producevano i modelli più complessi e diversificati e gli studenti pesantemente osservativi che copiavano in gran parte quelli esistenti — un argomento a favore della progettazione di ambienti di simulazione che spingano gli studenti verso un'attività a ciclo pieno.

### IA e simulazione

- **Ambienti alimentati dall'IA:** le simulazioni adattive aggiustano difficoltà e scenari allo stato dello studente, collegandosi all'[[adaptive-learning]] adattivo e al coaching basato sull'[[reinforcement-learning|apprendimento per rinforzo]].

- **Le simulazioni generate da prompt mettono un laboratorio su misura a portata di mano.** I docenti possono generare modelli eseguibili nel browser sull'argomento di cui il corso ha bisogno a partire da un template di prompt riutilizzabile (slider, animazione, grafici tempo-dipendenti), validando ciascuno due volte — tecnicamente, poi contro la soluzione analitica nota — anziché accettare la simulazione pubblicata più vicina ([[benzion-ai-physics-simulations-virtual-lab|Ben-Zion et al., 2025]]).

- **Automatizzare la controparte umana.** [[astra-atco-training-simulator|Chew et al. (2026)]] sostituiscono gli specialisti umani che interpretano ruoli nelle simulazioni di controllo del traffico aereo con sim-piloti [[llm|LLM]] autonomi, rimuovendo un collo di bottiglia nella capacità di addestramento; la loro pipeline vocale fine-tuned ha ridotto il tasso di errore sulle parole nel parlato aeronautico con accento singaporiano dal 107,80% al 23,45%, sebbene tutte le valutazioni fossero a livello di componente, senza alcuna coorte di tirocinanti.

- **Simulatori avversariali come partner di addestramento.** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]] abbina un agente di policy a simulatori di paziente LLM costruiti per comportarsi in modo avversariale su una pipeline di 57.000 scenari; l'addestramento contro di essi ha ridotto di circa un terzo i tassi di mancato riconoscimento dei red flag, e clinici in cieco hanno preferito l'agente addestrato nell'87,6% dei confronti affiancati.

- **Codificare esplicitamente gli stati di caso mancanti.** Un sistema multi-agente di pazienti standardizzati tiene separati riconoscimento dell'intenzione, generazione di risposta ancorata al caso e valutazione post-sessione, distinguendo quattro tipi di informazione mancante — clinicamente negativa, ignota al paziente, non ancora valutata, e assente dal caso — perché collassarle in «normale» inietterebbe fatti clinici non supportati ([[medeasy-ai-standardized-patients|Gao et al. (2026)]]).

- **Agenti simulati:** l'IA può simulare pazienti (per la formazione medica), studenti (per la pratica del [[teacher-role|docente]]) o partner di conversazione, rendendo la pratica interpersonale ad alto rischio accessibile e ripetibile. Nella [[teacher-education|formazione degli insegnanti]], [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang e Zhang (2025)]] hanno costruito *Student GPT*, un [[conversational-ai|chatbot]] ChatGPT personalizzato che interpretava il ruolo di uno studente della [[k-12|scuola media]] con comuni [[misconceptions|misconcezioni]] nel ragionamento sui rapporti, offrendo agli insegnanti pre-servizio di [[math-education|matematica]] una pratica conveniente e specifica per contenuto nella diagnosi del pensiero dello studente — e hanno usato un framework di codifica [[affective-computing|Affective]], Communicative, Technical (ACT) per valutare sistematicamente i punti di forza dell'interpretazione dello studente simulato (chiarezza, pertinenza, coerenza dell'errore) e le debolezze di autenticità (tono da insegnante, confusione di ruolo).

- **Rendere la storia controfattuale una caratteristica di prima classe.** Gli agenti [[llm|LLM]] multi-agente contestuali di SupplyNet generano dinamiche di catena di fornitura emergenti dalle decisioni dello studente anziché scritte a copione, e la sua linea temporale ramificata consente agli studenti di rivisitare scelte precedenti senza penalità — 13 partecipanti su 14 l'hanno valutata molto positivamente per il collegamento tra decisioni e performance, contro 3 per la baseline ([[supplynet-visual-exploratory-learning|Li et al. (2026)]]).

- **Dinamiche fondate, non una persona da prompt.** [[adaptive-virtual-patient-psychotherapy-training|Chen et al. (2026)]] hanno parametrizzato le dinamiche di rivelazione di una paziente virtuale a partire da quasi 2.000 ore di trascrizioni reali di psicoterapia, aggiornando poi il livello a ogni turno; su 1.033 turni con 20 clinici la sua rivelazione cresceva con l'empatia e l'esplorazione del terapeuta, mentre una baseline basata sul solo prompt, sullo stesso LLM, restava piatta.

- **Il gioco di ruolo mette lo studente nella parte.** Laddove gli agenti simulati forniscono la controparte, il gioco di ruolo dà quella parte allo studente. [[remind-robot-mediated-roleplay-antibullying-2026|Sanoubari e colleghi (2026)]] hanno fatto guardare a 18 bambini di 9-10 anni una scena di bullismo interpretata da robot sociali, ragionare sulla posizione di ciascun personaggio, quindi provare a difendersi manovrando un avatar robotico, e hanno riportato guadagni nell'[[self-efficacy]] autoefficacia percepita nel difendere più credenze meglio calibrate sul fatto che affrontare un bullo lo fermi effettivamente. Il loro inquadramento, il robot-mediated applied drama, mantiene un facilitatore umano nel ruolo del Forum Theatre e confina l'automazione al controllo della narrazione, il che è un promemoria utile del fatto che la parte impegnativa del gioco di ruolo è la riflessione anziché il macchinario. [[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga e Johnson (2025)]] collocano il gioco di ruolo accanto alla simulazione tra le strategie su cui si basa l'apprendimento online supportato dall'IA.

- **Studenti simulati:** i modelli del comportamento studentesco consentono ai [[research-methods-aied|ricercatori]] e ai progettisti di testare sistemi di tutoring e [[curriculum-design|curriculum]] prima della messa in esercizio effettiva, fondando lo [[student-modeling]] e il [[knowledge-tracing]].

- **Fiducia e fedeltà:** il valore di una simulazione dipende da quanto fedelmente essa modelli il contesto reale — e dalla consapevolezza che lo studente ha dei suoi limiti, collegandosi alla [[trust-calibration]].

- **La somiglianza umana è una proprietà dell'interazione, non del modello.** Una volta che entrambi i backend furono resi dietro lo stesso avatar, il vantaggio testuale nella somiglianza umana scomparve: i partecipanti definivano naturale il modello commerciale (54% contro 22%) mentre la performance comunicativa era identica; voce, latenza e alternanza dei turni rimodellavano come la stessa qualità di dialogo fosse percepita ([[sophie-clinical-communication-ai-assessment-2026|Hasan et al. (2026)]]).

- **[[generative-ai|GenAI]] nell'apprendimento basato sulla simulazione.** [[genai-scenario-based-healthcare-education-2026|Neto e colleghi (2026)]] [[meta-analysis-systematic-review|revisionano sistematicamente]] la GenAI nell'apprendimento basato su scenari, casi, problemi e simulazioni nell'educazione sanitaria, trovando esiti positivi per le abilità cognitive di ordine superiore ma risultati incoerenti altrove, con la [[human-ai-collaboration|collaborazione umano-IA]] ibrida che supera gli approcci interamente automatizzati. [[conversational-agents-business-simulation-gaming-2026|Wenzel, Geiger e Liening (2026)]] sviluppano agenti conversazionali di IA per il supporto adattivo nei giochi di simulazione aziendale, affrontando il divario comune del limitato feedback [[formative-assessment|formativo]] e della riflessione strutturata nell'apprendimento basato sulla simulazione.

- **Il «divario di autenticità» limita ciò che la simulazione di IA può sostituire.** Nella simulazione [[medical-education|clinica]], la revisione sistematica [[mixed-methods-research|a metodi misti]] di [[jiang-ai-powered-simulation-nursing-education-2026|Jiang et al. (2026)]] sulla simulazione infermieristica alimentata dall'IA (19 studi, N = 1.253) trova l'IA efficace per la conoscenza cognitiva e gli esiti affettivi ma incoerente per le abilità psicomotorie complesse. Il loro concetto di **divario di autenticità** — un deficit percepito dallo studente nella risonanza emotiva, nel riconoscimento degli indizi non verbali e nelle dimensioni tattili/esame fisico — spiega *perché* la simulazione di IA sia migliore per obiettivi altamente strutturati (comunicazione di base, raccolta dell'anamnesi) e debba collocarsi in un **continuum di simulazione a gradini** che rimanda le psicomotricità avanzate e gli scenari emotivamente complessi ai pazienti standardizzati umani e al tirocinio clinico. L'instabilità tecnica (ad es. i ritardi nel riconoscimento vocale) può anche aggiungere [[cognitive-offloading|carico cognitivo]] estraneo e ansia, così che fedeltà e stabilità sono esse stesse leve di progettazione. Questo si affianca al risultato di [[genai-scenario-based-healthcare-education-2026|Neto et al.]] secondo cui gli approcci ibridi uomo–IA superano quelli interamente automatizzati.

- **Simulazioni co-progettate da insegnante e IA.** Le simulazioni interattive che supportino sia l'apprendimento concettuale sia lo sviluppo delle competenze sono scarse nei domini pratici, e l'output della GenAI manca spesso di validità pedagogica. Nella [[stem-education|formazione STEM basata su droni]], simulazioni co-progettate da insegnante e IA incorporate in un curriculum pratico per il resto identico sono state valutate con un disegno quasi-sperimentale pretest–posttest su 30 studenti della secondaria, esaminando se l'istruzione supportata dalla simulazione produca [[learning-gains|esiti di apprendimento]] superiori ([[simulation-assisted-drone-learning-stem-2026]]). Separatamente, i [[benchmark|benchmark]] di tutoring [[agentic-ai|multi-agente]] come ASTRA usano agenti socialmente intelligenti simulati per studiare la collaborazione con partecipazione bilanciata nella [[cs-education|programmazione introduttiva]] ([[astra-multi-agent-tutoring-benchmark-2026]]).

- **Il controllo dello studente nella simulazione è agito, non concesso.** Un esperimento 2 × 2 in una simulazione di stormo ([[learner-agency-ai-simulation-2026|Su, Nair e Nagashima 2026]]) ha dato ad alcuni studenti slider dei parametri, ad altri un agente conversazionale opzionale e ad altri entrambi; ogni condizione è migliorata, ma nessuna delle due affordance ha prodotto una differenza affidabile una volta controllata la conoscenza pregressa (p = 0,849 e p = 0,108). Ciò che prediceva i [[learning-gains|guadagni]] era dove e per quanto tempo gli studenti manipolavano i parametri: l'uso sostenuto degli slider nella lezione concettualmente più complessa era associato positivamente ai guadagni, e lo stesso comportamento nella lezione più facile negativamente. Per chi costruisce simulazioni l'implicazione è che offrire controlli non è l'intervento — aiutare gli studenti a decidere che cosa cambiare, e a registrare che cosa è cambiato, lo è.

- **Un gemello digitale è una simulazione con una bolletta hardware, e la bolletta determina chi può partecipare.** Una [[meta-analysis-systematic-review|revisione sistematica]] di 11 studi sui gemelli digitali nell'[[engineering-education|ingegneria]] e nell'istruzione superiore STEM ha trovato che ogni implementazione consegnava un prototipo funzionante con sincronizzazione in tempo reale, eppure solo tre riportavano [[learning-gains|guadagni di apprendimento]] statisticamente significativi. Gli impianti fisici limitavano l'accesso a 1-3 studenti simultanei in cinque studi, e la ridotta interazione sociale era la sfida pedagogica più citata, in sei ([[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-González et al. (2026)]]).

### Connessioni

La simulazione si collega all'[[active-learning|apprendimento attivo]], all'[[adaptive-learning|apprendimento adattivo]] e al [[pedagogical-agent|agente pedagogico]]. È un meccanismo per l'apprendimento esperienziale e [[constructivist|costruttivista]] ed è amplificata dalla capacità dell'IA di generare ambienti di pratica adattivi e realistici.

## Concetti collegati

- [[active-learning]]
- [[adaptive-learning]]
- [[pedagogical-agent]]
- [[reinforcement-learning]]
- [[student-modeling]]
- [[constructivist]]
- [[trust-calibration]]
- [[professional-training]]
- [[chemistry-education]] — Chimica e IA: laboratori, valutazione formativa, limiti degli LLM, filosofia della sperimentazione
- [[biology-education]] — Biologia e IA: assistenti di laboratorio, alfabetizzazione all'IA in biologia, pensiero critico, strumenti specializzati
- [[ai-technologies]] — Ombrello: tecnologie e tecniche di IA (modelli, addestramento LLM, robotica, RAG, agentica)
- [[virtual-and-augmented-reality]] — il modello, non la modalità — gli ambienti immersivi di solito rendono una simulazione

## Articoli collegati

- [[learner-agency-ai-simulation-2026]] — Parameter control and an optional AI agent in a complex-systems simulation: gains tracked enactment, not access
- [[benzion-ai-physics-simulations-virtual-lab]]
- [[adaptive-virtual-patient-psychotherapy-training]] — Adaptive Virtual Patients for Psychotherapy Training
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[astra-atco-training-simulator]] — ASTRA: ATCO Training Simulator
- [[supplynet-visual-exploratory-learning]] — SupplyNet: Visual Exploratory Learning
- [[medeasy-ai-standardized-patients]] — MedEASY: AI Standardized Patients
- [[remind-robot-mediated-roleplay-antibullying-2026]] — Robot-mediated role-play game for bystander intervention (applied drama)
- [[residencyrl-clinical-rl-training-2026]]
- [[genai-scenario-based-healthcare-education-2026]] — Systematic review of GenAI in scenario-based healthcare education (Neto et al. 2026)
- [[conversational-agents-business-simulation-gaming-2026]] — CAIS-GBL framework for AI conversational agents in business simulation games (Wenzel et al. 2026)
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Fine-tuned participant-specific LLM agents reproducing collaborative problem solving dialogues (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA synthetic benchmark for multi-agent tutoring and participation-balanced collaboration
- [[simulation-assisted-drone-learning-stem-2026]] — Simulation-assisted drone learning with teacher-AI co-designed scaffolds
- [[an-goel-self-directed-modeling-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[jiang-ai-powered-simulation-nursing-education-2026]] — AI-powered simulation in nursing: mixed methods systematic review (authenticity gap, stepped continuum)
- [[sophie-clinical-communication-ai-assessment-2026]] — Scalable AI-based clinical communication training and automated assessment
- [[caee-digital-twins-stem-education-systematic-review-2026]] — Digital twins in STEM education: prototypes all worked, learning gains mostly did not
