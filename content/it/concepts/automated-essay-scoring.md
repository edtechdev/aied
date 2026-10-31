---
title: Valutazione automatizzata dei saggi
created: "2026-10-14T21:55:00-04:00"
updated: "2026-10-31T06:30:00-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, llm, prompt-engineering]
assessment: [assessment, automated-assessment]
discipline: [writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/automated-essay-scoring
source_updated: "2026-10-26T10:25:00-04:00"
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

> **Valutazione automatizzata dei saggi (AES, Automated Essay Scoring)** — l'uso dell'IA per valutare e assegnare punteggi ai saggi scritti, abbracciando approcci statistici tradizionali, modelli linguistici fine-tuned e strategie di prompting basate sugli [[llm|LLM]] sempre più accessibili. La [[research-methods-aied|ricerca]] sull'AES in questa base di conoscenza copre accuratezza di punteggio, equità e bias, validità psicometrica e [[accessibility|accessibilità]] pratica per gli educatori.

## Domande da considerare

- La Valutazione Automatizzata dei Saggi si è spostata dai modelli statistici tradizionali al prompting basato su LLM. Una tensione chiave in questa pagina è tra accuratezza e accessibilità — i modelli fine-tuned ottengono buoni punteggi ma sono impraticabili per la maggior parte degli educatori. Cosa daresti la priorità nel tuo contesto, e perché?
- Un risultato importante è che il semplice inserimento di saggi esemplari nel prompt porta la concordanza LLM–umano vicino all'affidabilità umano–umano — e un modello più economico può eguagliarne uno più costoso. Cosa suggerisce questo su quanta parte della qualità dell'AES sia il modello rispetto a come viene fatto il prompting?
- La pagina avverte che la correzione tramite IA può sottostimare sistematicamente gli studenti provenienti da background linguistici diversi. Prima di leggere, se vedeste un'IA assegnare un punteggio più basso al saggio di chi non è madrelingua, avreste assunto che fosse un "problema di bias" o semplicemente "il punteggio"? Cosa cambierebbe il vostro modo di rispondere?
- Un approccio auto-referenziale valuta gli scrittori L2 confrontando la loro scrittura con il loro lavoro precedente anziché con le norme dei madrelingua. In che modo la scelta della baseline di confronto cambia ciò che un punteggio significa — e quali studenti potrebbe trattare più equamente?
- L'AES si interseca con la valutazione formativa quando è usata per il feedback anziché per il voto. Quando il feedback di una macchina su un saggio sarebbe genuinamente utile a uno scrittore in sviluppo, e quando potrebbe appiattire i tipi di feedback [[qualitative-research|qualitativo]] che un editor umano darebbe?

## Introduzione

La Valutazione Automatizzata dei Saggi ha una lunga storia nella tecnologia educativa, dai primi modelli statistici agli approcci moderni basati su LLM che possono valutare i saggi in modo olistico senza grandi dataset pre-corretti. La tensione chiave nella ricerca sull'AES è tra accuratezza e accessibilità — mentre i modelli fine-tuned ottengono risultati forti, sono ad alta intensità di risorse e impraticabili per la maggior parte degli educatori.

- **[[zhang-races-consistent-essay-scoring-llms-2026|Zhang et al.]]** RACES usa l'allineamento della ricompensa per rendere la correzione dei saggi tramite LLM sia accurata sia consistente, affrontando una preoccupazione centrale di validità dell'AES.

[[xu-recentering-humans-ai-assisted-writing-scoring-2026|Xu, Lu e Abdi (2026)]] passano in rassegna dodici studi che confrontano la correzione tramite IA e quella umana di testi accademici in inglese come lingua straniera e riportano un allineamento moderato nel complesso, massimo sulle caratteristiche linguistiche superficiali e minimo su organizzazione, coerenza e sviluppo dell'argomentazione, con l'equità raramente esaminata.

In un compito di scrittura in risposta a un testo della scuola elementare superiore, [[correnti-erevise-validity-argument-formative-assessment-2026|Correnti et al. (2026)]] rilevano che il feedback automatizzato sull'uso delle evidenze migliorava i punteggi delle caratteristiche, e che la qualità della revisione dipendeva dalla ripresa del feedback nella discussione da parte degli insegnanti, non dal sistema da solo.

## Temi di ricerca chiave

**L'AES basata su prompting** è emersa come l'approccio più accessibile. Lo **[[choi-anchor-aes-prompting-2025|studio del paper su ancore di Choi et al.]]** mostra che includere saggi esemplari nei prompt porta la concordanza LLM–umano vicino all'affidabilità umano–umano, con GPT-4o mini che ottiene risultati comparabili a GPT-4o a costo inferiore. Questo si collega alla più ampia ricerca sul [[prompt-engineering|prompt engineering]] e rende l'AES fattibile per l'uso da parte degli [[teacher-role|insegnanti]].

**Punteggio psicometrico e a livello di tratti** va oltre i punteggi olistici. **[[psyscore-essay-scoring-zpd-feedback|PsyScore]]** fornisce un framework psicometricamente consapevole per la correzione adattiva ai tratti con feedback fondato sulla [[sociocultural-learning|ZPD]]. **[[icle-plus-plus-essay-scoring|ICLE++]]** modella tratti a grana fine per la correzione olistica dei saggi, facendo avanzare la precisione della valutazione automatizzata.
- **La correzione dei tratti a livello di dimensione è limitata dai dati dietro ogni dimensione.** [[automated-essay-scoring-critical-thinking-physics-2026|Firdausi et al. (2026)]] hanno addestrato un classificatore per dimensione del framework di pensiero critico FRISCO di Ennis su 106 saggi di fisica di studenti indonesiani di undicesima classe (83 per l'addestramento, 23 per il test, con tre valutatori insegnanti concordanti a kappa 0,78–0,84 su ogni dimensione). La concordanza si concentrava sull'espressione anziché sul ragionamento: il kappa quadratico ponderato raggiungeva 0,763 per Clarity e 0,728 per Situation ma solo 0,374 per Focus, 0,332 per Reason e 0,227 per Inference. Il segnale ordinale era fabbricato anziché osservato — saggi sintetici di livello 1 (generazione da template, degradazione al 20–40% della lunghezza originale, rimozione delle parole chiave) più parafrasi tramite LLM alzavano Focus di +0,346 kappa a partire da una baseline di 0,028 — e una configurazione raggiungeva 0,652 di accuratezza con kappa quasi nullo o negativo, quindi l'accuratezza non è un criterio di selezione utilizzabile nell'AES ordinale.

**Bias ed equità** è una preoccupazione critica. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** hanno trovato che la correzione tramite IA sottostima sistematicamente gli studenti provenienti da background linguistici diversi, evidenziando la necessità di considerazioni di [[bias-mitigation|mitigazione del bias]] e [[equity-in-ai-education|equità]] nel dispiegamento dell'AES.

**Il disaccordo con i valutatori umani è sistematico, non casuale.** I modelli GPT e Llama out-of-the-box concordavano solo debolmente con i punteggi umani (QWK ≈ 0,17–0,28 contro 0,72 tra due valutatori umani) e deviavano in una direzione dipendente dalla qualità — più alto per i saggi brevi e poco sviluppati e più basso per quelli lunghi e forti recanti errori superficiali minori ([[llms-do-not-grade-essays-like-humans-2026|Mathew et al. (2026)]]).

**La valutazione L2 e auto-referenziale** esplora i contesti di scrittura non nativi. La **[[self-referential-l2-writing-llm-assessment|valutazione L2 basata sul profilo]]** usa un approccio auto-referenziale che confronta la scrittura dello studente con il proprio lavoro precedente anziché con le norme dei madrelingua.

**[[explainable-ai|Interpretabilità]] e ponderazione delle caratteristiche** apre la scatola nera di come gli LLM correggono effettivamente. **[[llm-essay-scoring-feature-weighting-2026|Wang et al. (2026)]]** hanno confrontato tre LLM (Qwen, GPT, Gemini) con valutatori umani su saggi di inglese non nativo attraverso sedici caratteristiche testuali, trovando un forte allineamento complessivo ma una ponderazione distinta: gli LLM enfatizzavano accuratezza grammaticale, sofisticazione lessicale e complessità sintattica, mentre i valutatori umani davano priorità alla completezza dei contenuti e alla presentazione visiva. Fondamentalmente, gli LLM spostavano la loro ponderazione per livello di competenza — ponendo più peso sugli errori linguistici per gli studenti a bassa competenza e premiando sempre più la sofisticazione linguistica per quelli ad alta competenza — mentre i valutatori umani mantenevano un framework più stabile. **[[llm-essay-assessment-framework-reliability-2026|Liu, Ye e Yan (2026)]]** estendono questo con un framework di valutazione a cinque modelli (GPT-4.1, Llama 4 Maverick, Gemini 2.5 Flash, Claude Sonnet 4, DeepSeek R1) su 60 saggi lunghi, usando la scoperta causale per rivelare euristiche valutative distinte: la maggior parte dei modelli dava priorità alla precisione lessicale e alla scioltezza, mentre altri enfatizzavano la complessità sintattica o l'integrazione cross-dominio, e alcuni mostravano inconsistenza, compressione dei punteggi o sottostima sistematica. Insieme questi studi stabiliscono che la validità dell'AES dipende non solo dalla concordanza complessiva ma da *come* i modelli ponderano le caratteristiche e se quella ponderazione è stabile tra i sottogruppi di discenti — informando direttamente l'auditing della [[assessment-validity|validità della valutazione]] e della [[bias-mitigation|mitigazione del bias]].

**I confini tra tipi di item e i limiti della correzione dei saggi.** In un esame universitario a formato misto, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik & Thambi (2026)]] hanno trovato che la concordanza di ChatGPT-5 con i docenti era da sostanziale a quasi perfetta sugli item oggettivi (CCC 0,935–1,000) ma crollava nettamente sulle risposte aperte — da quasi nulla a negativa per le risposte brevi e solo 0,341–0,854 per le domande a saggio — e una rubrica strutturata non migliorava coerentemente la concordanza sui saggi. Questo limita la validità dell'AES: la scioltezza del modello aiuta sugli item ben specificati ma non si trasferisce alla correzione olistica dei saggi, dove l'interpretazione contestuale delle risposte a credito parziale favorisce ancora il [[human-in-the-loop-ai|giudizio umano]].

**Confini tra tipi di problema nella concordanza diagnostica.** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao e Fan (2026)]] hanno usato DeepSeek-R1 per etichettare problemi di scrittura specifici prima della revisione e confrontato le sue etichette con la diagnosi del docente attraverso tre cicli (F1 medio = 0,768, DS = 0,037). La concordanza era massima sui problemi a cues locale come la scelta delle parole di vocabolario (F1 = 0,824) e minima laddove il problema verte su una relazione affermazione–evidenza (uso delle fonti ed evidenza, 0,579), quindi la concordanza in un ruolo diagnostico dipende dal tipo di problema, non solo dal modello o dal prompt.
**Una distribuzione di rubrica sbilanciata può far fuorviare le metriche aggregate di punteggio.** La valutazione automatizzata di una dimensione di rubrica può essere un compito di classificazione con una distribuzione delle etichette squilibrata anziché un punteggio continuo: correggendo il livello di riflessione 0–3 in 1.954 saggi di studenti ungheresi, il 68% dei saggi si collocava al livello 3 e l'1,8% al livello 0, e la migliore configurazione shallow (SMOTEBoost con embedding Qwen3) raggiungeva un punteggio complessivo di 0,7176 mediato su accuratezza, F1 e ROC-AUC contro 0,6872 per il miglior transformer fine-tuned — eppure una configurazione di RidgeClassifier otteneva 0,7131 di ROC-AUC a sola 0,5162 di accuratezza, e il bilanciamento delle classi abbassava ogni metrica (l'accuratezza scendendo da 0,6672 senza a 0,6408 con), quindi gli autori leggono la scelta del modello come questione di quale metrica conti, con i transformer che si guadagnano il loro posto attraverso la sensibilità alle classi minoritarie anziché la concordanza aggregata ([[reflection-level-classification-hungarian-essays-2026|Csibi et al., 2026]]).

**Evidenza di dispiegamento ad alto impatto.** L'evidenza sul campo da un dispiegamento reale ad alto impatto ([[human-in-the-loop-ai-scoring-national-assessment-2026|*Acredita EB* dell'Uruguay, 2024–2025; Curi et al.]]) mostra che GPT-5 con prompt engineering raggiungeva il 60–80% di concordanza con valutatori umani addestrati su una rubrica analitica spagnola di 15 item, circa cinque punti percentuali sotto la concordanza inter-valutatore umana per la maggior parte degli item e mai più di 15 punti sotto, con consistenza run-to-run sopra il 90% per quasi tutti gli item. Vocabolario, sintassi e ortografia erano le dimensioni più deboli, e l'item di ortografia doveva essere affidato a un correttore grammaticale deterministico (LanguageTool, 68% di accuratezza, 100% di consistenza) perché l'ortografia a livello di token è dove il modello è meno stabile. I prompt costruiti per un'edizione dell'esame si trasferivano alla successiva con solo modifiche specifiche dell'argomento, e l'IA era sistematicamente più severa degli umani — sotto-valutava anziché sovrastimare. Per la progettazione dell'AES, la lezione è che la correzione basata su prompting può avvicinarsi alla concordanza umana anche in un esame nazionale, mentre la sua debolezza residua si colloca al livello delle convenzioni linguistiche di basso livello anziché della qualità olistica della [[writing-education|scrittura]].

La confidenza a livello di token, la correzione ponderata per probabilità e l'ensembling miglioravano ciascuna la concordanza sulla correzione del pensiero divergente — le tecniche impilate raggiungevano r = 0,846 (RMSE = 0,4848), e l'instradamento solo del 20% di risposte meno fiduciose alla revisione umana tagliava lo sforzo manuale di circa l'80% ([[know-when-to-trust-ai-scoring-reliability-2026|Organisciak & Acar (2026)]]).

**Il [[benchmark|benchmark]] umano, e ciò che può e non può autorizzare.** [[opraise-automated-marking-ai-assessment-2026|Lo studio OpRaise]] è il test più forte in questa base di conoscenza sul fatto che la correzione tramite LLM sia pronta per l'uso di routine, e la sua risposta verte sul benchmark anziché sul modello. Confrontava tre sistemi di frontiera (Claude Opus 4.6, GPT-5.4, Gemini 3 Flash), ciascuno in 27 configurazioni di prompt incrociando specificità della rubrica, calibrazione e strategia di punteggio, rispetto ai voti moderati di 761 saggi autentici di Psicologia di 125 studenti in tre [[higher-ed|università]] britanniche. I voti umani erano adottati come ground truth perché il giudizio accademico è lo standard socialmente accettato, e gli autori notano che i valutatori umani concordano tra loro solo moderatamente — il che limita quanto forte la concordanza IA–umano si potrebbe ragionevolmente richiedere di essere. Rispetto a quel benchmark, la concordanza sulla fascia di laurea britannica andava dal **35 al 65% per istituzione** (63% a Cambridge, 53% a Nottingham, 35% alla Manchester Metropolitan) e non si trasferiva tra di esse, quindi la raccomandazione centrale del report è la validazione locale sui materiali di [[assessment|valutazione]] propri dell'istituzione. Due risultati si generalizzano oltre questo corpus. Primo, affidabilità e concordanza si separano: ogni modello ricorregggeva in modo quasi identico (ICC 1,00, 1,00, 0,97) e i modelli concordavano tra loro più strettamente che con gli umani (ICC a tre modelli 0,91), eppure tutti e tre concordavano sulla fascia di laurea solo per il **56%** delle consegne — l'autoconsistenza non è validità. Secondo, i voti dell'IA si comprimevano verso il centro della scala (un punteggio di compressione di 0,47–0,82, con il punto di incrocio dove IA e umano concordano in media che si collocava tra la metà alta degli anni 50 e l'inizio degli anni 60), rendendo l'IA meno accurata proprio ai confini di voto che separano le First dalle Upper Seconds e i promossi dai bocciati. L'ampiezza del vocabolario, i connettivi, la complessità delle frasi e la lunghezza del testo predicevano i voti dell'IA con effetti piccoli ma significativi mentre la loro relazione con i voti umani era ampiamente trascurabile — una dimostrazione diretta della preoccupazione di [[ai-scoring-language-bias-physics|bias linguistico]], e una che nessuna strategia di prompting testata rimuoveva.

**L'AES come segnale di addestramento anziché come giudice.** I modelli di correzione sono di solito studiati come valutatori, ma SWIM ne usa uno come funzione di ricompensa: [[swim-student-writing-simulation-2026|Do, Kontak e Sachan (2026)]] congelano un verificatore AES multi-tratto e lo valutano contro saggi studenteschi generati, trasformando il profilo dei tratti predetto in una ricompensa densa per saggio (la distanza media normalizzata per tratti dal profilo bersaglio) per GRPO, deliberatamente non la metrica Quadratic Weighted Kappa stessa, perché il QWK è definito su un batch di coppie bersaglio-predizione e non è un segnale per campione, mentre le ricompense a corrispondenza esatta sono troppo sparse nell'impostazione multi-tratto. I guadagni sono stati riverificati contro un correttore DeBERTa e un verificatore solo di valutazione contro cui la policy non si è mai addestrata (0,598 versus 0,479 per SFT, e 0,647 versus 0,501), che è la verifica che separa il controllo genuino della competenza dall'adattamento al modello di ricompensa. Per la ricerca sull'AES questa è una seconda richiesta di validità: un correttore usato come bersaglio di addestramento viene ottimizzato contro, quindi la sua ponderazione dei tratti e i suoi bias linguistici si propagano in tutto ciò che il generatore apprende — le stesse asimmetrie di ponderazione delle caratteristiche (accuratezza grammaticale, sofisticazione lessicale e complessità sintattica ponderate più pesantemente dai modelli che dai valutatori umani) documentate altrove in questa pagina, che ora plasmano l'addestramento anziché solo i voti.
**Correzione e feedback vogliono metodi diversi, quindi un sistema dovrebbe separarli.** [[wraft-automated-writing-evaluation-argumentative-2026|Labib et al. (2026)]] hanno costruito un sistema di saggi argomentativi TOEFL come tre moduli — correzione, feedback a livello superficiale su grammatica e meccanica, e feedback a livello profondo su organizzazione, coerenza e argomentazione — anziché un singolo modello che fa tutti e tre i lavori, e hanno trovato che ciò che vince su un modulo perde su un altro: il supervised fine-tuning di GPT-4o su 120 di un insieme proprietario di 480 saggi corrette secondo benchmark, testato sui restanti 360, raggiungeva un kappa quadratico ponderato di 0,84 e un RMSE di 0,44 sulla scala 0–5, davanti alla baseline di Wang e Gayed (2024) (QWK 0,78, RMSE 0,57), eppure lo stesso fine-tuning produceva output inutilizzabile per i moduli di feedback, dove era il prompting diretto di Claude 3.7 a generare commenti approvati dai docenti.

### Collegamenti ai concetti correlati

L'AES si colloca all'intersezione tra [[automated-assessment|valutazione automatizzata]], [[writing-education|educazione alla scrittura]] e [[generative-ai|IA generativa]]. Si collega alla [[formative-assessment|valutazione formativa]] quando è usata per il feedback anziché per il voto, al [[feedback|ciclo di feedback]] quando è integrata nei processi iterativi di scrittura, e all'[[ai-literacy|alfabetizzazione all'IA]] quando gli educatori comprendono e calibrano gli strumenti di AES. I concetti di [[assessment-validity|validità della valutazione]] e [[educational-measurement|misurazione educativa]] sono essenziali per garantire che i punteggi AES siano significativi ed equi.
- **Concordanza, errore e ciò che aggiunge un correttore ibrido.** In un piccolo corpus di scrittura di marketing a risposta aperta l'LLM superava sia le regole deterministiche sia un ibrido a pari peso sulla concordanza assoluta con i valutatori umani (ICC(2,1) 0,435 versus 0,266 e 0,091), con l'ibrido significativamente peggiore del solo LLM, mentre la dispersione dei punteggi e una singola risposta quasi vuota mostravano quanto fortemente tali stime dipendano dalla composizione del corpus ([[automated-scoring-marketing-posts-agreement-2026]]).

Anche i sistemi aperti fanno parte di questo quadro: AiAWE valuta saggi argomentativi con una Gemma-3-27B-it adattata tramite LoRA, raggiungendo QWK 0,828 e concordanza entro ±0,5 dal punteggio umano sul 90,56% di 360 saggi di valutazione — e riporta che la scala del modello non prediceva in modo affidabile la prestazione a valle sotto adattamento LoRA ([[aiawe-automated-writing-evaluation]]).

## Idee sbagliate comuni

- **"I risultati della correzione automatizzata riflettono la scrittura degli studenti."** Il segnale ordinale può essere **fabbricato anziché osservato** — saggi sintetici di livello 1 costruiti con generazione da template, degradazione al **20-40% della lunghezza originale** e rimozione delle parole chiave. Un sistema validato su estremi costruiti può non essere mai stato testato sulla distribuzione che incontrerà.
- **"L'accuratezza aggregata è la metrica da riportare."** **Una distribuzione di rubrica sbilanciata può rendere fuorvianti le metriche aggregate di punteggio**: la valutazione automatizzata di una dimensione di rubrica è spesso un compito di classificazione con una distribuzione delle etichette sbilanciata, dove alta accuratezza e discriminazione utile si separano.
- **"I dispiegamenti sul campo non sono stati valutati."** Esistono evidenze sul campo da un dispiegamento reale ad alto impatto (**Acredita EB dell'Uruguay, 2024**), che è la forma di evidenza più forte in questa letteratura e quella che la maggior parte degli studi sull'accuratezza della correzione non fornisce mai.

## Concetti collegati

- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[language-learning]]
- [[educational-measurement]]
- [[k-12]]
- [[prompt-engineering]]
- [[writing-education]]
- [[ai-literacy]]
- [[assessment-validity]]

## Articoli collegati

- [[reflection-level-classification-hungarian-essays-2026]] — Automatic Reflection Level Classification in Hungarian Student Essays
- [[wraft-automated-writing-evaluation-argumentative-2026]] — WrAFT: a Modularized Automated Writing Evaluation System for Argumentative Essays
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Educational Innovation through Automated Essay Scoring: A Multidimensional Framework for Evaluating Critical Thinking in High School Physics Essays
- [[opraise-automated-marking-ai-assessment-2026]] — OpRaise report: AI marking of 761 university essays across three UK universities
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[zhang-races-consistent-essay-scoring-llms-2026]] — RACES: reward-aligned consistent essay scoring with LLMs
- [[ai-scoring-language-bias-physics]]
- [[choi-anchor-aes-prompting-2025]]
- [[icle-plus-plus-essay-scoring]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[psyscore-essay-scoring-zpd-feedback]]
- [[self-referential-l2-writing-llm-assessment]]
- [[aiawe-automated-writing-evaluation]]
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — From automated scoring to learning diagnosis: a mechanism study of AI-supported formative assessment in English writing
- [[llm-essay-scoring-feature-weighting-2026]] — Feature weighting patterns in LLM-based essay scoring (Wang et al. 2026)
- [[llm-essay-assessment-framework-reliability-2026]] — Framework for evaluating LLMs in essay assessment (Liu, Ye & Yan 2026)
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Know When to Trust: self-confidence, weighted probabilistic scoring and ensembling improve LLM scoring agreement
- [[swim-student-writing-simulation-2026]] — a frozen AES verifier used as a dense training reward for a writing generator
