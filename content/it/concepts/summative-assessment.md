---
title: Valutazione sommativa
created: "2026-10-14T21:55:00-04:00"
type: concept
foundations: [academic-integrity]
assessment: [assessment, authentic-assessment, summative-assessment, educational-measurement]
level: [higher ed, k 12]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/summative-assessment
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Valutazione sommativa** — valutazione utilizzata per misurare e certificare ciò che uno studente ha appreso al termine di un'unità, di un corso o di un programma, in contrapposizione alla [[formative-assessment|valutazione formativa]], che sostiene l'apprendimento durante l'insegnamento. La valutazione sommativa assume tipicamente la forma di esami con conseguenze rilevanti — scritti, orali, sorvegliati o a libro chiuso — che assegnano voti, condizionano il proseguimento degli studi e certificano la competenza. Nell'era dell'IA, la valutazione sommativa è diventata un terreno di scontro centrale riguardo all'[[academic-integrity|integrità accademica]] e alla validità: l'[[generative-ai|IA generativa]] può gonfiare i risultati su compiti non sorvegliati o da svolgere a casa, rendendo la scelta del formato sommativo — e il modo in cui esso resiste alla sostituzione con l'IA — una decisione di progettazione cruciale.

## Domande da considerare

- La valutazione sommativa certifica ciò che uno studente ha appreso al termine di un corso, mentre la valutazione formativa sostiene l'apprendimento durante il corso stesso. Dove hai visto sfumare il confine tra le due, e perché può essere importante che esse assolvano funzioni diverse?
- La pagina inquadra l'IA generativa come qualcosa che rimodella la valutazione sommativa in due direzioni contemporaneamente: l'IA corregge gli esami e gli studenti usano l'IA per eludere la misurazione basata sugli esami. Quale di queste due pressioni ritieni sia la minaccia maggiore per la validità, e perché?
- Se i compiti non sorvegliati o da svolgere a casa perdono validità perché l'IA è in grado di produrre le risposte, che cosa implica questo per il modo in cui le valutazioni dovrebbero essere progettate — e che cosa potrebbe esserne sacrificato?
- La [[research-methods-aied|ricerca]] citata nella pagina rileva che gli LLM non valutano i saggi nello stesso modo degli esseri umani. Se la correzione automatica è rapida e coerente ma assegna voti in modo diverso, si tratta di un problema di [[bias-mitigation|equità]], di un'opportunità, o di entrambe le cose?
- Che cosa significa un risultato con conseguenze rilevanti (un voto, un credito, l'ammissione) se il lavoro che lo sostiene avrebbe potuto essere prodotto dall'IA? Come progetteresti una valutazione di cui potresti effettivamente fidarti?

## Introduzione

La valutazione sommativa assolve una funzione fondamentalmente diversa dalla valutazione formativa: misura e certifica il risultato raggiunto anziché orientare i passi successivi. Comprende le verifiche di fine unità, gli esami finali, le prove standardizzate e ad alto impatto (ad esempio gli esami di ammissione), le discussioni orali e le valutazioni di performance cumulativa. Poiché gli esiti della valutazione sommativa comportano conseguenze reali (voti, proseguimento degli studi, credenziali, ammissione all'università), essi subiscono pressioni particolari nell'era dell'IA — sia come *bersagli* della correzione automatica, sia come misure *vulnerabili* che gli studenti possono cercare di aggirare mediante l'uso dell'IA generativa.

## Le poste in gioco nell'era dell'IA: validità e integrità

La ricerca della base di conoscenze documenta come l'IA generativa abbia rimodellato radicalmente il panorama della valutazione sommativa in due direzioni: l'IA viene usata per **correggere** gli esami su larga scala, e l'IA può essere usata dagli studenti per **eludere** la misurazione, basata sugli esami, del proprio apprendimento.

- **L'IA come correttore.** La valutazione sommativa fa sempre più affidamento sulla [[automated-assessment|correzione automatica]] di esami, saggi e risposte brevi. La [[llms-do-not-grade-essays-like-humans-2026|ricerca sulla correzione dei saggi tramite LLM]] rileva che gli [[llm|LLM]] non valutano i saggi nello stesso modo degli esseri umani, sollevando questioni di validità e di equità per la correzione automatica ad alto impatto. Gli [[llm-automated-assessment-student-self-explanations|LLM che valutano le autospiegazioni degli studenti]] e la [[cong-confidence-asag-2026|correzione automatica delle risposte brevi]] esplorano l'affidabilità della correzione tramite LLM nei contesti sommativi, mentre i [[psyscore-essay-scoring-zpd-feedback|framework psicometricamente consapevoli]] cercano di mantenere la correzione automatica affidabile e adattiva. Un esame di chimica generale risolto a mano da 296 studenti illustra perché sia necessaria una supervisione selettiva: la concordanza sul punteggio totale tra un LLM multimodale e la correzione dei tutor era alta (R² = 0,91), eppure l'affidabilità a livello di singolo item variava nettamente in base al formato, e i falsi positivi (l'IA che accredita risposte effettivamente errate) tendono a passare inosservati perché gli studenti raramente li contestano — pertanto un correttore IA uniforme che «corregge tutto» non è difendibile per un uso ad alto impatto senza un rinvio all'essere umano basato sulla confidenza ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **La concordanza sugli esiti può sopravvivere a una correzione imprecisa dei singoli item.** Rispetto ai voti ufficiali moderati, un LLM multimodale che correggeva 10.364 pagine manoscritte delle Olimpiadi di Fisica e di esami universitari correlava a r = 0,93–0,96 e recuperava la stessa squadra internazionale di cinque studenti, sebbene la concordanza esatta sulle singole parti di quesito raggiungesse il 70% — un correttore va giudicato dalle decisioni che esso informa ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **L'IA come elusione.** Poiché l'IA generativa è in grado di produrre risposte a domande scritte, i compiti sommativi non sorvegliati e da svolgere a casa perdono validità: [[generative-ai-reduced-study-time-math|misure proctored e senza assistenza sono essenziali]] perché le prestazioni non sorvegliate risultano gonfiate dall'IA, e gli [[generative-ai-guardrails-harm-learning|strumenti con guardrail (suggerimento anziché risposta)]] possono eliminare la penalizzazione d'esame causata dall'IA priva di vincoli. Il quasi-esperimento di [[chirikov-ai-grade-inflation-2026|Chirikov (2026)]] su oltre 500.000 voti rende concreto il meccanismo: dopo il rilascio di ChatGPT, i corsi con una maggiore presenza di compiti esposti all'IA hanno visto la quota di voti A aumentare di 13 punti percentuali, e l'effetto si è concentrato nei **corsi a forte carico di compiti a casa** (ulteriori 16 pp nella stima a triple differenze) — prova diretta del fatto che i compiti a casa non sorvegliati, e non i reali [[learning-gains|guadagni di apprendimento]], sono il punto in cui l'IA gonfia gli esiti sommativi.
- **Esami generati dall'IA.** [[assessing-quality-ai-generated-exams-field-2025|Un ampio studio sul campo]] e la [[ai-vs-human-assessment-efl-tpck-2026|ricerca sulla valutazione in EFL]] esaminano se l'IA possa *generare* esami e compiti di valutazione di alta qualità — un uso emergente dell'IA nella progettazione sommativa.

## Formati sommativi resistenti all'IA

Un tema centrale della base di conoscenze è che il **formato sommativo determina la resistenza all'IA** — quanto più un compito richiede una prestazione dal vivo, in presenza e sondata individualmente, tanto più è difficile per gli studenti sostituire l'IA al proprio apprendimento.

- **Esami orali e valutazioni orali.** [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton (2025)]] sostiene che l'esame orale è un formato sommativo a bassa tecnologia e intrinsecamente resistente all'IA: il suo dialogo interattivo in tempo reale verifica la comprensione, il [[critical-thinking|pensiero critico]] e il ragionamento anziché la memorizzazione, impedisce agli studenti di usare l'IA per generare e memorizzare risposte, e rispecchia la pratica professionale. I [[socratic-tests-conversational-assessment|test socratici]] e i [[code-review-genai-cs1|colloqui di revisione del codice]] estendono questo approccio a una valutazione sommativa dinamica, conversazionale e basata sul colloquio.
- **Misure a libro chiuso, sorvegliate e senza assistenza.** Le [[generative-ai-reduced-study-time-math|prove]] e i [[stromberg-generative-ai-learning-penalty-secondary-2026|dati su larga scala raccolti sul campo]] mostrano che gli esami a libro chiuso e sorvegliati — e non i compiti a casa o le prove da svolgere a domicilio dai risultati gonfiati — costituiscono il segnale affidabile dell'apprendimento effettivo quando gli studenti usano l'IA. I framework di [[responsible-assessment-ai-era-stanford-2026|valutazione responsabile]] inseriscono queste misure senza assistenza all'interno di una riprogettazione guidata dalla validità. Laddove gli esami restano online, il [[remote-proctoring|proctoring remoto]] assume tale ruolo, e le due revisioni del corpus relative al proctoring automatico individuano problemi di privacy e di [[bias-mitigation|equità]] accanto ai guadagni in termini di rilevamento ([[automated-online-exam-proctoring-decade-review-2026]], [[academic-dishonesty-automated-proctoring-ai-2026]]).

- **Abbinare un compito vulnerabile a un gemello confermante.** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]] mantengono un compito vulnerabile alla GenAI per il suo valore formativo, ma lo abbinano a un secondo compito che valuta gli stessi esiti, rendendo il voto interdipendente tramite una soglia di conferma o una ponderazione, di modo che il gemello certifichi il risultato.
## Valutazione sommativa e standardizzata ad alto impatto

La valutazione sommativa ad alto impatto — esami di ammissione, prove standardizzate e certificazioni — comporta conseguenze sproporzionate ed è al centro delle preoccupazioni dell'era dell'IA. [[stromberg-generative-ai-learning-penalty-secondary-2026|Lo studio sulla penalizzazione dell'apprendimento dovuta all'IA generativa]] ha misurato gli esiti sugli esami di ammissione alla scuola superiore (Zhongkao) e all'università (Gaokao), rilevando che i punteggi agli esami di ammissione sono calati del 18–24% dopo un uso prolungato dell'IA. [[brcic-effortless-trap-productive-struggle-2026|The Effortless Trap]] e la [[genai-performance-vs-learning|ricerca su prestazioni e apprendimento]] avvertono che i guadagni sui compiti assistiti dall'IA non si trasferiscono alle misure ad alto impatto condotte senza assistenza.

## Valutazione sommativa e formativa nell'era dell'IA

La letteratura sulla valutazione della base di conoscenze sottolinea costantemente che la [[assessment|valutazione]] è più efficace quando combina le funzioni [[formative-assessment|formativa]] e sommativa — ma l'era dell'IA acuisce la distinzione. Poiché l'IA gonfia le prestazioni sui compiti a basso impatto, non sorvegliati e a processo nascosto, le **misure sommative (in particolare quelle sorvegliate, a libro chiuso o in presenza) diventano il controllo cruciale** per verificare se l'apprendimento si sia effettivamente verificato. Ciò motiva una riprogettazione della valutazione che mantenga compiti sommativi autentici e resistenti all'IA (esami orali, colloqui di revisione del codice, esami sorvegliati, [[eportfolio|portfolio]] basati sul processo) come ancora dell'[[academic-integrity|integrità]], utilizzando al contempo la valutazione formativa per sostenere l'apprendimento lungo il percorso. Si veda [[authentic-assessment]] per la risposta progettuale costruttiva.

## Implicazioni per l'IA nell'istruzione

- **Il formato sommativo è una leva di validità e integrità:** i formati sommativi resistenti all'IA (orale, sorvegliato, a libro chiuso, in presenza) preservano il legame tra prestazione valutata e apprendimento effettivo.
- **Le misure sorvegliate e senza assistenza sono il segnale affidabile:** quando gli studenti usano l'IA, sono gli esami sommativi senza assistenza — e non i compiti a casa — a rivelare l'apprendimento genuino.
- **La correzione automatica richiede un esame psicometrico:** usare gli LLM per correggere esami ad alto impatto richiede una valutazione di affidabilità, equità e validità, e non soltanto di accuratezza.
 Gli errori di correzione sono inoltre dipendenti dal voto: su 32 elaborati di esami di sanità pubblica, gli LLM evitavano gli estremi della scala — nessun E o F compariva in modalità rapida — mentre il modello migliore coincideva esattamente con il voto umano nel 50,0% dei casi e si manteneva entro ±1 voto nel 90,6% ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **L'IA può anche generare esami:** la generazione di esami e compiti assistita dall'IA è un'applicazione emergente nella progettazione sommativa che richiede essa stessa una valutazione della qualità.
- **Riconsiderare lo scopo della valutazione, non solo il formato.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] criticano la valutazione sommativa tradizionale basata sulla norma per aver incoraggiato un apprendimento superficiale e frammentato, aver offerto agli studenti scarso controllo e scarsa trasparenza, aver danneggiato la [[motivation|motivazione]] intrinseca, alimentato lo stress e l'[[well-being|ansia]] e perpetuato le disuguaglianze, valutando in larga misura la rievocazione anziché l'applicazione a problemi reali. Essi propongono la ripetizione della valutazione, la [[mastery-learning|valutazione basata su standard]] e la pratica dell'ungrading come innovazioni incentrati sulla valutazione in grado di attenuare una pratica eccessivamente sommative, pur riconoscendo che queste restano marginali nella formazione manageriale a causa di barriere normative — la distribuzione dei voti a campana, la segnalazione esterna (classifiche, tirocini, accreditamento) e la mentalità strumentale degli studenti — e raccomandano una sperimentazione incrementale con il supporto dell'istituzione.

## Concetti collegati

- [[remote-proctoring]]
- [[assessment]]
- [[formative-assessment]]
- [[authentic-assessment]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-ed-evaluation]]
- [[higher-ed]]
- [[k-12]]

## Articoli collegati
- [[llm-grading-assistants-public-health-2026]] — LLM graders compress the grade scale and avoid the extremes in high-stakes essay assessment

- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering oral exams as authentic, AI-resistant summative assessment
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — The generative AI learning penalty: proctored/closed-book exam evidence
- [[chirikov-ai-grade-inflation-2026]] — AI task displacement as a mechanism of grade inflation; homework-heavy courses (Chirikov 2026)
- [[generative-ai-reduced-study-time-math]] — Faster completion, less learning: proctored measures essential
- [[generative-ai-guardrails-harm-learning]] — Generative AI without guardrails harms learning
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans
- [[llm-automated-assessment-student-self-explanations]] — LLMs for automated assessment of student self-explanations
- [[cong-confidence-asag-2026]] — Automatic short-answer grading
- [[psyscore-essay-scoring-zpd-feedback]] — Psychometrically-aware trait-adaptive essay scoring
- [[socratic-tests-conversational-assessment]] — Socratic tests: dynamic, conversational, multimodal assessment
- [[code-review-genai-cs1]] — Code review interviews in CS1
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[test-driven-ai-assisted-learning]] — Test-driven AI-assisted learning
- [[genai-oop-programming-assessments-2026]] — GenAI performance on object-oriented programming assessments
- [[brcic-effortless-trap-productive-struggle-2026]] — The Effortless Trap: productive struggle and the illusion of learning
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI-generated versus human-developed assessment tasks in EFL
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of GenAI (Roe, Perkins & Giray 2026)
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[mesny-innovative-assessment-grading-management-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
