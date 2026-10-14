---
connected_resources: [teacherserver]
title: Generazione automatizzata di domande
created: "2026-10-14T21:55:00-04:00"
type: concept
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
reviewed_by: [editor]
translation_of: concepts/automated-question-generation
source_updated: "2026-09-30T11:35:26-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Generazione automatizzata di domande (AQG)** — l'uso dell'IA, in particolare dell'NLP e dei [[llm|grandi modelli linguistici (LLM)]], per generare automaticamente item di [[assessment|valutazione educativa]] (scelta multipla, risposta breve, completamento, programmazione e domande di prestazione) a partire da materiale di partenza o obiettivi di apprendimento. L'AQG abilita la valutazione su larga scala — producendo quiz [[formative-assessment|formativi]], esercizi adattivi e item di pratica — ma la qualità varia drammaticamente tra i tipi di item e richiede validazione per evitare domande allucinate o mal calibrate. È una componente centrale della [[automated-assessment|valutazione automatizzata]] e un abilitatore chiave dell'[[adaptive-learning|apprendimento adattivo]] e dell'[[personalized-learning|apprendimento personalizzato]].

## Domande da considerare

- La generazione automatizzata di domande produce item di valutazione dal materiale di partenza su larga scala — ma questa pagina avverte che la qualità varia drammaticamente tra i tipi di item. Prima di leggere, quale tipo di item pensi che l'IA generi in modo più affidabile: scelta multipla, risposta breve o codice — e perché?
- La sfida centrale è il controllo di qualità: gli LLM possono generare domande fattualmente errate. Una pipeline ha ridotto l'allucinazione del 62% aggiungendo un ciclo genera-poi-valida-raffina. Perché pensi che chiedere all'IA di validare le proprie domande le migliorerebbe in modo significativo anziché limitarsi a vidimare il proprio output?
- La [[research-methods-aied|ricerca]] mostra che le domande generate possono pendere verso il pensiero di ordine inferiore (richiamo) a meno che non siano esplicitamente progettate per esiti di ordine superiore. Se usassi l'IA per costruire item di pratica, come sapresti se stessero allenando una comprensione genuina o solo la memorizzazione?
- La calibrazione della difficoltà conta: le stime di difficoltà dell'IA correlano fortemente con la prestazione degli studenti, ma la pagina mette in guardia contro l'uso improprio ad alto impatto. Quando una domanda che l'IA giudica "di difficoltà giusta" sarebbe comunque la domanda sbagliata da porre a un particolare discente?
- La generazione consapevole dell'[[accessibility|accessibilità]] costruisce domande sintonizzate per i discenti sordi e con problemi di udito, raffinate in collaborazione con la comunità bersaglio. Cosa suggerisce questo esempio sul perché la generazione di domande non possa essere trattata come un problema puramente tecnico o solo di contenuto?

## Introduzione

La generazione automatizzata di domande conta perché gli item di valutazione sono costosi da creare a mano, e l'IA può produrli rapidamente e su larga scala. Tuttavia, la ricerca della base di conoscenza mostra che gli item generati devono essere validati per correttezza, rilevanza e difficoltà, e che i diversi tipi di item (scelta multipla, risposta breve, codice) variano in quanto affidabilmente possano essere generati. L'AQG si colloca quindi all'intersezione tra [[generative-ai|IA generativa]], [[educational-nlp|NLP educativa]] e [[educational-measurement|misurazione educativa]].

## Approcci alla generazione di domande

La ricerca della base di conoscenza illustra diversi approcci:

- **Pipeline genera-poi-valida:** [[generate-then-validate-question-gen|Generate-Then-Validate]] introduce un ciclo generazione → validazione → raffinamento che riduce l'allucinazione degli LLM del 62% rispetto alla generazione diretta, raggiungendo l'89% di accuratezza sui dataset [[stem-education|STEM]] e un miglioramento del 23% nella rilevanza. La fase di validazione filtra gli item non validi o di bassa qualità, e gli item falliti innescano la rigenerazione con prompt correttivi.
- **Generazione basata sul knowledge tracing:** [[kt4eqg-personalized-question-generation|KT4EQG]] genera domande di esercizio personalizzate guidate dal [[knowledge-tracing|knowledge tracing]], adattando gli item allo stato di conoscenza di ogni discente anziché generare domande generiche.
- **Distrattori legati alle misconcezioni come etichette diagnostiche:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] collega ogni distrattore a un'unica misconcezione minata e marca esattamente un'opzione corretta, quindi un item è generato con i propri bersagli diagnostici incorporati e può poi essere corretto in modo deterministico senza alcuna chiamata [[llm|LLM]] — circa 7,6 secondi e circa \$0,005 per round sul dispiegamento live degli autori, contro circa 32 secondi e \$0,015 per un round di risposta breve corretto da LLM. Il legame è valido solo quanto le etichette di misconcezione dietro di esso, poiché le [[misconceptions|misconcezioni]] minate corrispondevano alle misconcezioni bersaglio a F1 ≈ 0,56, e le sue scelte di item servivano un'abilità genuinamente debole nello 0,72 dei casi.
- **Generazione consapevole della profondità cognitiva:** [[llm-educational-question-cognitive-depth|Valutare la profondità cognitiva delle domande generate dagli LLM]] esamina se gli item generati toccano il [[critical-thinking|pensiero di ordine superiore]] (creazione, valutazione) o solo la memorizzazione, collegandosi alla tassonomia di Bloom e alla [[educational-measurement|misurazione educativa]].
- **Problemi-caso con errori incorporati per la valutazione ripetuta:** [[automated-constructive-assessment-hdr-llm-2026|Takahashi et al. (2026)]] hanno generato nuovi problemi di ragionamento diagnostico gerarchico (HDR) — casi brevi recanti errori deliberatamente incorporati che gli studenti devono trovare e spiegare — e hanno trovato che gli item scritti da GPT-4o eguagliavano quelli scritti da umani per coerenza interna (α di Cronbach = 0,78 per entrambi) e difficoltà, con i test esatti di Fisher che non trovavano differenza significativa nella distribuzione dei punteggi su 100 partecipanti. Il formato abbina una richiesta di [[critical-thinking|pensiero di ordine superiore]] a una risposta vincolata, quindi le risposte convergono e la correzione diventa riproducibile. La motivazione generativa è il riuso degli item: riusare un unico caso invita memoria e riuso delle risposte, mentre casi generati strutturalmente equivalenti ma contestualmente diversi sopprimono il bias dell'item nella rimisurazione.
- **Pipeline [[pedagogy|pedagogiche]]:** [[slidesqaqa-pedagogical-question-generation|Generazione di Q&A da slide]] usa una pipeline multi-stadio per la generazione pedagogicamente solida di domande dai materiali del corso.
- **Generazione consapevole dell'accessibilità:** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]] progettano un sistema di generazione di domande basato su LLM per i discenti [[inclusive-learning|sordi e con problemi di udito]], introducendo strategie di domande Visive ed Emotive che prendono di mira i momenti di difficoltà visiva o emotiva nel video, e raffinando iterativamente le domande con la comunità bersaglio per garantire l'accessibilità linguistica.
- **Sistemi basati su RAG con l'uomo nel ciclo:** [[code-gen|CODE-GEN]] combina la [[rag|generazione aumentata dal recupero]] con la revisione [[human-in-the-loop-ai|human-in-the-loop]] per generare [[automated-assessment|valutazioni a scelta multipla]].
- **[[benchmark|Benchmark]] e valutazione:** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]] fornisce un benchmark di indovinelli scientifici/matematici per valutare i sistemi di generazione di domande e di ragionamento.

## Validazione e qualità

La sfida centrale nell'AQG è il **controllo di qualità**:
- **Valuta il processo di soluzione, non il testo dell'item:** [[proiqa-math-item-quality-assessment-2026|ProIQA]] sostiene che la revisione della qualità degli item dovrebbe seguire ciò che fa un esperto — simulare la soluzione — e costruisce un albero di ragionamento generato da LLM per item, verificato per correttezza matematica al 90,38–97,80%, poi ne codifica la struttura di dipendenza con una rete [[machine-learning|neurale]] a grafo accanto a una vista del solo testo dell'item. Riporta guadagni medi sul secondo miglior metodo del 7,5% nella valutazione dei concetti, del 6,3% nella stima della difficoltà e del 19,5% nella valutazione delle competenze, e la sua analisi degli errori nomina una modalità di fallimento da tenere d'occhio: un albero di ragionamento logicamente corretto ma strutturalmente superficiale fa apparire facile un item difficile.

- **Rischio di allucinazione:** gli LLM possono generare domande fattualmente errate. [[generate-then-validate-question-gen|Generate-Then-Validate]] mostra che una fase di validazione dedicata riduce nettamente questo, e il [[hallucination-risk|rischio di allucinazione]] è una preoccupazione riconosciuta in tutto il campo.
- **Calibrazione della difficoltà:** le domande generate devono essere calibrate a una difficoltà appropriata. La [[llm-difficulty-calibration-programming-exams-2026|ricerca sulla calibrazione della difficoltà]] mostra che le stime di difficoltà dell'IA correlano fortemente con la prestazione degli studenti (es. rho ≈ −0,87), abilitando una migliore selezione degli item — mettendo al contempo in guardia contro l'[[ai-misuse-learning-harm|uso improprio]] ad alto impatto. [[razavi-powers-item-difficulty-llm-2026|Razavi e Powers (2026)]] estendono questo agli item di matematica e lettura K-5 (N = 5.170) calibrati sotto il modello IRT di Rasch: le valutazioni di difficoltà zero-shot di GPT-4o correlavano da moderatamente a fortemente con le difficoltà reali (r = 0,83 matematica, r = 0,81 lettura) ma variavano per classe, mentre un approccio basato sulle caratteristiche — caratteristiche cognitive e linguistiche estratte da LLM immesse in modelli ad albero — raggiungeva correlazioni fino a r = 0,87. L'estrazione strutturata delle caratteristiche dello studio (es. complessità sintattica, [[cognitive-offloading|carico cognitivo]], insidiosità dei distrattori) e il suo workflow pratico in sette passaggi offrono un modello per calibrare gli item generati, mentre il suo risultato di restrizione di range nelle classi iniziali e le cautele di generalizzabilità mettono in guardia contro l'uso ad alto impatto.

- **Le etichette di difficoltà generate possono essere un fallimento di validità di costrutto, non un errore di calibrazione.** Su 378 item generati le etichette Facile/Medio/Difficile del modello tracciavano il livello di Bloom co-generato con esse (ρ = 0,90) e la forma superficiale — lunghezza media del testo dell'item in aumento da 15,9 a 22,1 a 30,2 parole — ma correlavano con la difficoltà empirica degli item solo a ρ = 0,06 su 7.888 risposte di 54 studenti, il caso per calibrare i metadati generati contro i dati delle risposte anziché fidarsi dei tag co-generati ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Validazione psicometrica sul campo su larga scala:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] valida una pipeline AQG a raffinamento iterativo (genera→giudica→rivedi, in stile Self-Refine) in 91 classi universitarie reali (~1.686 studenti). L'analisi [[item-response-theory|IRT]] 2PL bayesiana gerarchica mostra che le domande generate dall'IA performano alla pari degli item di esami standardizzati scritti da esperti — alquanto più facili (β̄ = −0,45 vs. 0,35) ma leggermente più discriminanti (ᾱ = 1,3 vs. 1,2), con una più alta informazione di picco del test (affidabilità 0,79 vs. 0,72) — dimostrando che l'AQG può produrre valutazioni su misura per il corso e psicometricamente solide su larga scala.

- La parità psicometrica media può mascherare carenze a livello di item: una revisione di scopo di 153 report sull'educazione medica ha trovato che la generazione di item tramite IA a volte eguagliava difficoltà e discriminazione umane, eppure in un confronto di fisiologia solo 9 item ChatGPT su 40 soddisfacevano tutti i criteri ideali contro 19 su 40 dei docenti ([[genai-medical-education-transformation-review-2026|Zhao et al. (2026)]]).
- **Riconoscibilità in un esame reale, e ciò che la revisione rimuove davvero:** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt et al. (2026)]] hanno inserito 30 item a scelta multipla generati dall'IA e 30 dell'Esame Nazionale di Abilitazione in un esame valutato su tablet sostenuto da 119 [[medical-education|studenti di medicina]] del quinto anno, con gli item dell'IA redatti dai materiali propri del corso da ChatGPT-4o e Gemini 1.5 Pro attraverso un panel di esperti che ne accettava l'82% e ne eliminava il 18,2% come inutilizzabili. L'attribuzione della fonte da parte degli studenti non differiva tra i due tipi di item, e difficoltà dell'item, distribuzione dei distrattori e allineamento curricolare percepito erano statisticamente indistinguibili — un risultato di *riconoscimento* anziché di qualità, e la ragione per cui gli autori descrivono il beneficio del workflow come spostamento dello sforzo degli educatori dalla redazione alla revisione anziché come sua eliminazione. Una differenza esplorativa sopravviveva: gli item di Gemini erano più difficili di quelli dell'esame di abilitazione (p = 0,028), mentre quelli di ChatGPT no (p = 0,984).
- **Dipendenza dal compito:** l'affidabilità della generazione varia per tipo di item. La [[cong-confidence-asag-2026|correzione delle risposte brevi]] e la [[self-referential-l2-writing-llm-assessment|valutazione analitica della scrittura]] mostrano che gli item a risposta aperta e di scrittura sono più difficili da generare e correggere in modo affidabile degli item strutturati.
- **Qualità cognitiva:** la [[llm-educational-question-cognitive-depth|valutazione della profondità cognitiva]] mostra che gli item generati possono pendere verso il pensiero di ordine inferiore a meno che non siano esplicitamente progettati per esiti di ordine superiore.

- **L'auto-etichettatura del livello cognitivo non si trasferisce agli item generati.** Un classificatore della tassonomia di Bloom addestrato su una banca di item curata collassava sulle domande generate dall'IA — macro F1 da 0,88 in distribuzione a 0,48 e 0,20 fuori — perché gli item generati hanno in media molte più parole (18,2 versus 9,3) e condividono solo il 10,5% mediano dei loro verbi trigger di Bloom con il corpus curato, contro il 35,1% per un insieme più vicino; il riaddestramento su dati etichettati out-of-distribution era il singolo guadagno maggiore, a una soglia di circa N > 1.000 campioni etichettati ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]).

## Ruolo nell'apprendimento adattivo e personalizzato

L'AQG è un abilitatore chiave dell'apprendimento [[adaptive-learning|adattivo]] e [[personalized-learning|personalizzato]]: produce le grandi banche di item da cui attingono i tutor adattivi e — combinata con il [[knowledge-tracing|knowledge tracing]] o la [[student-modeling|modellazione dello studente]] — può generare item adattati agli stati di conoscenza dei singoli discenti ([[kt4eqg-personalized-question-generation|KT4EQG]]). La [[taklif-ai-interest-based-personalized-assignments|personalizzazione basata sugli interessi]] mostra che l'AQG può anche adattare le domande agli interessi degli studenti, non solo alla difficoltà.

## Implicazioni per l'IA nell'educazione

- **Genera poi valida:** abbina sempre la generazione a una fase di validazione/raffinamento per controllare l'allucinazione e garantire la rilevanza.
- **Abbina il tipo di item all'affidabilità:** usa l'AQG per i tipi di item strutturati (scelta multipla, completamento, codice) dove è più affidabile, e applica un'attenta validazione agli item a risposta aperta e di scrittura.
- **Progetta per la profondità cognitiva:** i prompt e le pipeline dovrebbero puntare al pensiero di ordine superiore, non solo al richiamo, per sostenere l'apprendimento genuino.
- **Calibra la difficoltà:** usa le stime di difficoltà dell'IA per selezionare item di sfida appropriata, con una forte validazione prima dell'uso ad alto impatto.
- **Personalizza tramite i modelli del discente:** combina l'AQG con il knowledge tracing e i modelli degli interessi per generare item adattivi e individualizzati.

## Concetti collegati

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[assessment]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[hallucination-risk]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-education]]

## Articoli collegati

- [[genai-medical-education-transformation-review-2026]] — Scoping review of 153 medical-education reports on AI item generation versus faculty item quality

- [[assessing-quality-ai-generated-exams-field-2025]] — Large-scale field validation of AI-generated exam quality via IRT
- [[generate-then-validate-question-gen]] — Generate-Then-Validate question generation
- [[kt4eqg-personalized-question-generation]] — Personalized question generation via knowledge tracing
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM-powered question generation for Deaf and Hard of Hearing learners
- [[llm-educational-question-cognitive-depth]] — Cognitive depth of LLM-generated questions
- [[slidesqaqa-pedagogical-question-generation]] — Slide-deck Q&A pedagogical question generation
- [[code-gen]] — CODE-GEN: RAG-based human-in-the-loop question generation
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles benchmark
- [[taklif-ai-interest-based-personalized-assignments]] — Interest-based personalized assignments
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM-based difficulty calibration
- [[self-referential-l2-writing-llm-assessment]] — Self-referential analytic writing assessment
- [[cross-dataset-bloom-question-classification]] — Cross-dataset Bloom question classification
- [[llm-chatbots-cs-multiple-choice]] — LLM chatbots and CS multiple-choice items
- [[socratic-tests-conversational-assessment]] — Socratic tests: conversational assessment
- [[llm-turing-test-italian-legal-exams-2026]] — LLM Turing test in legal exams
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Process-Based Math Item Quality Assessment
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[automated-constructive-assessment-hdr-llm-2026]] — Automating Constructive Assessment with Large Language Models: Toward Scalable and Repeated Evaluation of Practical Competence
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — Students could not tell AI-generated MCQs from licensing-exam items in a graded exam, and 18.2% of generated items were eliminated in review (Vogt et al. 2026)
