---
title: Tecnologie
created: "2026-10-14T21:57:00-04:00"
type: concept
foundations: [agentic-ai]
technology: [ai-technologies, educational-nlp, educational-robotics, generative-ai, knowledge-graph, llm, multimodal, prompt-engineering, rag, reinforcement-learning, simulation]
confidence: high
reviewed_by: [editor]
translation_of: "concepts/ai-technologies"
source_updated: "2026-10-02T07:32:07-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Tecnologie** — i modelli, le architetture e i metodi che alimentano i sistemi di educazione con IA, e il concetto ombrello per la copertura da parte della knowledge base dello strato tecnico. Laddove [[pedagogy|pedagogia]] e [[learning-theories|teorie dell'apprendimento]] riguardano *come avvengono insegnamento e apprendimento*, e [[ai-ed-evaluation|valutazione dell'AIED]] riguarda *se l'IA funziona*, questa pagina ancora il filone *tecnico*: i sistemi di IA ([[llm|grandi modelli linguistici]], [[generative-ai|IA generativa]], [[multimodal|modelli multimodali]], [[educational-robotics|robot]]) e le tecniche usate per costruirli, controllarli e distribuirli ([[prompt-engineering]], [[rag|retrieval-augmented generation]], [[reinforcement-learning|apprendimento per rinforzo]], [[educational-nlp]], [[knowledge-graph|grafi di conoscenza]], [[agentic-ai|orchestrazione agentica]]).

## Domande da considerare

- Puoi essere un educatore eccellente senza essere in grado di costruire un LLM — ma questa pagina sostiene che le tue scelte tecniche plasmano comunque ciò che l'IA può e non può fare nella tua classe. Qual è un modo in cui la tecnologia sottostante di uno strumento di IA potrebbe cambiare silenziosamente il modo in cui apprendono i tuoi studenti, anche se non vedi mai il codice?
- Un assunto comune è che il modello sia tutta la storia — ma tecniche come la retrieval-augmented generation (RAG) e il prompt engineering esistono precisamente per controllare e fondare l'output degli LLM. Prima di proseguire, quando chiedi a un'IA di "essere più accurata" o "usare questa fonte", che cosa pensi stia realmente accadendo sotto il cofano?
- La RAG è descritta come una tecnica centrale per ridurre le allucinazioni e migliorare la sicurezza. Perché pensi che recuperare conoscenza pertinente per "fondare" la risposta di un'IA conti di più per l'educazione che per, ad esempio, una chiacchierata casual — e che cosa potrebbe andare storto se quel fondamento fallisce?
- La pagina sostiene che le scelte tecniche incarnano assunti pedagogici: un tutor costruito sul prompting socratico ragiona con i discenti, mentre un modello che genera risposte può limitarsi a consegnare soluzioni. Riesci a ricordare uno strumento di IA che hai usato che sembrava "assumere" una particolare filosofia di insegnamento — e si allineava con come volevi realmente insegnare o apprendere?
- Oltre all'accuratezza grezza, questa pagina suggerisce che i sistemi di IA dovrebbero essere valutati su affidabilità, pedagogia ed equità. Quale metrica principale sospetti che la maggior parte delle persone (inclusi molti educatori) adotti per giudicare se uno strumento di IA "funziona", e perché quella metrica potrebbe nascondere più di quanto riveli?
- L'IA agentica è descritta come uno spostamento dell'IA "da uno strumento che risponde ai prompt a un collaboratore proattivo". Come potrebbe un sistema che avvia e orchestra autonomamente flussi di lavoro multi-step cambiare ciò di cui tu, come docente o discente, sei responsabile — e chi lo rende responsabile?

## Introduzione

L'[[ai-education|IA in educazione]] gira su uno stack tecnico specifico, e comprenderlo conta per gli [[teacher-role|educatori]] e i ricercatori anche quando non costruiscono sistemi stessi — perché le scelte tecniche plasmano ciò che l'IA può e non può fare in classe, i rischi che porta, e come valutarla. Questa pagina organizza la copertura dei concetti tecnici della knowledge base: i sistemi di IA, le tecniche che li adattano e controllano, e come lo strato tecnico si collega a pedagogia, valutazione e valutazione dell'AIED.

## Sistemi di IA in educazione

- **Grandi modelli linguistici (LLM).** La spina dorsale computazionale della maggior parte dell'[[ai-education|AIED]] moderna — gli [[llm|LLM]] generano testo simile a umano per tutoraggio, valutazione e generazione di contenuti, e sono la tecnologia più referenziata nella knowledge base. [[llm-training-and-fine-tuning|Addestramento e fine-tuning]] adatta gli LLM generali all'uso educativo.
- **IA generativa.** La categoria più ampia di sistemi che producono testo, codice, immagini e altri contenuti — l'[[generative-ai|IA generativa]] (guidata principalmente dagli LLM) è la tecnologia dietro l'attuale ondata di ricerca sull'[[ai-education|AIED]]. Vedi anche i [[multimodal|modelli multimodali]] (testo, immagine, audio) e la [[simulation|simulazione]].
- **Robot e sistemi incarnati.** I [[educational-robotics|robot in educazione]] aggiungono una presenza incarnata e spesso sociale — kit programmabili per il pensiero computazionale e robot umanoidi/sociali per tutoraggio, narrazione e gioco di ruolo. La robotica è un filone tecnico distinto che si sovrappone all'[[agentic-ai|IA agentica]] e al design [[human-in-the-loop-ai|human-in-the-loop]].
- **Sistemi basati sulla conoscenza.** I [[knowledge-graph|grafi di conoscenza]] e l'[[educational-nlp|NLP educativa]] rappresentano ed elaborano la conoscenza di dominio, sempre più combinati con gli LLM per un tutoraggio fondato e spiegabile.

## Tecniche e metodi

- **Prompt engineering.** Il [[prompt-engineering|prompt engineering]] è il modo in cui educatori e sviluppatori plasmano gli output degli LLM — il meccanismo principale attraverso cui offloading e controllo sono attuati nelle interazioni con gli LLM.
- **Retrieval-augmented generation (RAG).** La [[rag|RAG]] fonda gli output degli LLM nella conoscenza recuperata, riducendo le allucinazioni e migliorando l'accuratezza — una tecnica centrale per una distribuzione educativa [[pedagogical-safety|sicura]].
- **Apprendimento per rinforzo.** Il [[reinforcement-learning|rinforzo]] addestra agenti a ottimizzare il comportamento nel tempo, usato nei sistemi [[adaptive-learning|adattivi]] e nell'[[game-based-learning|apprendimento basato sul gioco]].
- **Orchestrazione agentica.** I sistemi di [[agentic-ai|IA agentica]] pianificano ed eseguono flussi di lavoro multi-step — spesso orchestrando molteplici agenti specializzati (vedi [[agentic-ai|sistemi multi-agente]]) — e stanno rimodellando l'IA da uno strumento che risponde ai prompt a un collaboratore proattivo.
- **Lo stack di agenti educativi è in ritardo sull'avanguardia.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] hanno mappato 474 studi e hanno trovato i modelli serie-GPT e LangChain dominanti mentre l'orchestrazione di strumenti governata, la memoria persistente e la pianificazione a lungo orizzonte erano largamente assenti — e solo 138 su 474 (29%) attingevano a teoria educativa.
- **Addestramento e adattamento dei modelli.** [[llm-training-and-fine-tuning|Addestramento e fine-tuning degli LLM]], [[educational-llm-alignment|allineamento educativo]] e [[cstutorbench-slm-tutors|adattamento di modelli linguistici piccoli]] rendono i modelli generali specifici per l'educazione — sebbene l'evidenza nella knowledge base collochi la [[rag|retrieval]] e il [[prompt-engineering|prompting]] prima dell'addestramento nell'ordine decisionale, poiché un prompt ben fondato è più economico di un modello adattato.

## Come lo strato tecnico si collega al campo

Il filone tecnico è inseparabile dagli altri temi della knowledge base:

- **Pedagogia:** le scelte tecniche incarnano assunti pedagogici — un tutor [[intelligent-tutoring|tutor]] costruito sul [[socratic-method|prompting socratico]] ragiona con i discenti, mentre un modello che genera risposte può tendere per default alla fornitura diretta (vedi [[pedagogy|pedagogie e strategie di insegnamento]]).
- **Valutazione e valutazione dell'AIED:** [[ai-ed-evaluation]] e i [[benchmark|benchmark]] determinano se i sistemi di IA funzionano realmente; la [[assessment|valutazione]] e la [[automated-assessment|valutazione automatizzata]] usano lo stack tecnico per valutare e generare.
- **Uso responsabile:** le tecniche tecniche sono centrali per la [[reducing-ai-misuse|riduzione dell'uso improprio dell'IA]] — il fondamento della [[rag|RAG]], le guardrail, lo [[prompt-engineering]] [[scaffolding]], e la [[human-in-the-loop-ai|supervisione umana]] plasmano se l'IA supporta o mina l'apprendimento ([[cognitive-offloading]], [[hallucination-risk]]).

## Implicazioni per l'IA in educazione

- **L'alfabetizzazione tecnica supporta l'uso critico:** comprendere i modelli e le tecniche sottostanti aiuta educatori e discenti a usare bene l'IA e a valutarla criticamente (vedi [[ai-literacy]]).
- **Scegliere la tecnologia per intento pedagogico:** il sistema e la tecnica di IA dovrebbero seguire la [[pedagogy|strategia di insegnamento]], non il contrario.
- **Valutare lo strato tecnico:** la ricerca su [[ai-ed-evaluation]] e i [[benchmark|benchmark]] valuta i sistemi di IA su affidabilità, pedagogia ed [[equity-in-ai-education|equità]], non solo sull'accuratezza principale.
- **Robot e agenti fanno parte dello stack:** i sistemi [[educational-robotics|incarnati]] e [[agentic-ai|agentici]] estendono il repertorio tecnico oltre il testo — e portano le proprie considerazioni di design e sicurezza.

## Concetti collegati

- [[llm]]
- [[generative-ai]]
- [[multimodal]]
- [[reinforcement-learning]]
- [[educational-nlp]]
- [[knowledge-graph]]
- [[simulation]]
- [[educational-robotics]]
- [[agentic-ai]]
- [[prompt-engineering]]
- [[vibe-coding]]
- [[rag]]
- [[llm-training-and-fine-tuning]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[pedagogy]]
- [[learning-theories]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[personalized-learning]]

## Articoli collegati

- [[agentic-ai-education-scoping-review]] — Revisione di scoping dell'IA agentica in educazione
- [[genai-meta-analysis-programming-learning]] — Meta-analisi dell'effetto della GenAI su produttività e apprendimento nella programmazione
- [[cstutorbench-slm-tutors]] — Benchmark di tutoraggio con modelli linguistici piccoli
- [[educational-llm-alignment]] — Allineare gli LLM per l'educazione
- [[eduguard-safe-rag-llm-tutor]] — Mettere in guardrail i tutor LLM basati su RAG
- [[hazra-safetutors-pedagogical-safety-2026]] — Sicurezza e danni dei tutor di IA
- [[elbench-education-llm-benchmark-2026]] — Benchmark di LLM per l'educazione
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Robot sociale generativo Teachy Mini
- [[benzion-ai-physics-simulations-virtual-lab]] — Simulazioni di fisica generate da LLM per la classe
