---
title: Psicologia cognitiva
created: "2026-10-14T21:55:00-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing]
confidence: high
reviewed_by: [editor]
translation_of: concepts/cognitive-psychology
source_updated: "2026-09-26T01:51:49-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> La **psicologia cognitiva / cognitivismo** — la famiglia di teorie che spiega l'apprendimento attraverso i processi mentali interni — attenzione, percezione, memoria, ragionamento e metacognizione — anziché attraverso il solo comportamento osservabile. Nell'[[ai-education|IA nell'educazione]], gli assunti cognitivisti sostengono i contributi più distintivi del campo: i sistemi di [[intelligent-tutoring|intelligent tutoring]] che modellano la conoscenza di chi apprende, il [[knowledge-tracing]] e la [[cognitive-diagnosis|diagnosi cognitiva]] che tracciano ciò che chi apprende sa, le progettazioni di [[feedback|feedback]] fondate sulla diagnosi dell'errore, e l'intera famiglia della [[student-modeling|modellazione dello studente e dell'istruzione adattiva]]. Il cognitivismo è il terreno intermedio tra [[behaviorism|comportamentismo]] (l'apprendimento come cambiamento comportamentale) e [[constructivist|costruttivismo]] (l'apprendimento come costruzione attiva di significato), ed è la lente teorica più strettamente legata alla metafora computazionale della mente che ha animato i primi AIED.

## Domande da considerare

- Quando pensate all'«apprendimento», immaginate un cambiamento in ciò che qualcuno fa, o un cambiamento in ciò che sa e sa richiamare? In che modo questa distinzione potrebbe cambiare il modo in cui giudicate se uno strumento di tutoring basato sull'IA funziona davvero?
- Il tutoring basato sull'IA poggia su una «metafora computazionale» — trattare la mente come un sistema di elaborazione dell'informazione con limiti di memoria. Dove questa metafora vi sembra potente, e dove potrebbe perdere qualcosa di importante sul modo in cui gli esseri umani apprendono?
- Uno strumento di IA rende un compito apparentemente senza sforzo: spiega il passaggio successivo, riduce l'attrito, e chi apprende ottiene risultati brillanti mentre lo usa. Questo conta come un [[teacher-role|insegnamento]] riuscito? Come fareste a sapere se chi apprende è ora in grado di farlo senza lo strumento?
- La teoria del carico cognitivo distingue carico intrinseco, estraneo e pertinente. Se doveste progettare un assistente basato sull'IA, quale tipo di carico cerchereste deliberatamente di ridurre, e quale sareste attenti a NON rimuovere?
- Se chi apprende sa di poter scaricare memoria e ragionamento su un'IA, quando questa è una strategia intelligente e quando è una scorciatoia che silenziosamente impedisce l'apprendimento? Cosa determina la differenza?
- Il cognitivismo assume che la conoscenza possa essere scomposta in componenti e tracciata nel tempo. Cosa potrebbe andare perduto quando riduciamo la comprensione di uno studente a un insieme di componenti di conoscenza tracciabili?

## Introduzione

La psicologia cognitiva è la tradizione teorica dell'apprendimento che tratta l'apprendimento come un cambiamento delle rappresentazioni mentali interne — concetti, schemi e procedure detenuti in memoria — anziché come un cambiamento del comportamento osservabile. Il suo vocabolario di elaborazione dell'informazione (attenzione, codifica, recupero, memoria di lavoro limitata) ha fornito sia il linguaggio diagnostico per la difficoltà di apprendimento sia l'architettura dietro [[intelligent-tutoring|l'intelligent tutoring]] e il [[knowledge-tracing]]: sistemi che inferiscono lo stato interno di chi apprende e vi si adattano. Resta il quadro di riferimento per [[metacognition|la metacognizione]], [[desirable-difficulties|le difficoltà desiderabili]] e [[self-regulated-learning|l'apprendimento autoregolato]] in tutta questa knowledge base.

## Idee fondamentali

- **L'apprendimento è un cambiamento delle rappresentazioni mentali interne.** Il cognitivismo sostiene che l'apprendimento comporti l'acquisizione, l'immagazzinamento e la riorganizzazione della conoscenza in memoria — concetti, schemi e procedure — anziché un mero cambiamento della risposta osservabile. Ciò che chi apprende *sa e sa richiamare* conta, non solo ciò che fa.
- **La metafora dell'elaborazione dell'informazione (computazionale).** La mente è trattata come un sistema di elaborazione dell'informazione dotato di capacità e colli di bottiglia — [[item-response-theory|misurazione]] dell'abilità latente, limiti della memoria di lavoro, codifica e recupero — che è precisamente il modello che ha reso il tutoring basato sull'IA (un programma per computer che modella la cognizione di chi apprende e vi si adatta) una scelta naturale.
- **Attenzione e memoria sono limitate.** La memoria di lavoro ha capacità limitata; l'apprendimento durevole richiede la codifica nella memoria a lungo termine attraverso ripetizione, elaborazione e [[retrieval-spacing-interleaving|pratica di recupero]]. Questo collega il cognitivismo alla [[research-methods-aied|ricerca]] sul [[cognitive-offloading|cognitive offloading]] (delegare memoria ed elaborazione a strumenti esterni) e al «divario tra performance e apprendimento» quando l'IA scavalca recupero e pratica.
- **La metacognizione regola la cognizione.** La [[metacognition|metacognizione]] — monitorare e controllare il proprio pensiero — è un costrutto distintivamente cognitivista, e spiega perché la calibrazione da parte di chi apprende del momento in cui affidarsi all'IA sia rilevante per l'apprendimento (si vedano [[cognitive-offloading|cognitive offloading]] e [[self-regulated-learning|apprendimento autoregolato]]).
- **La conoscenza è decomponibile e tracciabile.** L'AIED cognitivista assume che la conoscenza di chi apprende possa essere rappresentata come componenti e tracciata nel tempo — il fondamento di [[knowledge-tracing|knowledge tracing]], [[cognitive-diagnosis|diagnosi cognitiva]] e [[item-response-theory|teoria della risposta all'item]].

## Cognitivismo e IA nell'educazione

### La discendenza cognitivista dell'AIED

Il cognitivismo è forse la teoria più responsabile dell'esistenza stessa dell'IA nell'educazione. I primi tutor cognitivi (ad esempio i tutor di Anderson basati su ACT-R) [[embodied-learning|incarnavano]] l'assunto che l'apprendimento potesse essere modellato come regole di produzione e che un sistema potesse tracciare quali regole uno studente avesse padroneggiato. Questo ha prodotto l'architettura canonica che definisce tuttora il campo: un modello di dominio, un [[student-modeling|modello dello studente]] che traccia lo stato di conoscenza di chi apprende, e un [[pedagogy|modello pedagogico]] che adatta l'istruzione — tutti di origine cognitivista. Il [[knowledge-tracing|knowledge tracing]] moderno (bayesiano, basato sul deep learning e sull'IRT) e la [[cognitive-diagnosis|diagnosi cognitiva]] proseguono questa tradizione. Lo stesso assunto sorregge [[intelligent-tutoring|l'intelligent tutoring]], [[adaptive-learning|l'apprendimento adattivo]] e [[personalized-learning|l'apprendimento personalizzato]], raggruppati nella knowledge base sotto l'ombrello [[student-modeling|Modellazione dello studente e istruzione adattiva]].

### Carico cognitivo e progettazione dell'istruzione

La teoria del carico cognitivo (CLT) è il quadro cognitivista più ampiamente applicato nel [[learning-design|design didattico]]: distingue carico intrinseco (complessità del compito), carico estraneo (attrito nella presentazione) e carico pertinente (sforzo di costruzione degli schemi). Un'IA ben progettata dovrebbe ridurre il carico estraneo preservando l'elaborazione pertinente; un'IA mal integrata riduce tutti e tre, lasciando compiti completati con apprendimento vuoto. L'inquadratura della memoria di lavoro della CLT è centrale anche nei dibattiti sul [[cognitive-offloading|cognitive offloading]] — se l'IA riduca il carico estraneo dannoso o cortocircuiti l'elaborazione pertinente che produce apprendimento.

La teoria cognitiva dell'apprendimento multimediale di Mayer (CTML) applica gli stessi assunti sulla memoria di lavoro ai materiali stessi, e le sue prescrizioni sono insolitamente concrete: chi apprende ottiene risultati migliori da parole e immagini insieme piuttosto che dalle sole parole, quando il materiale estraneo è escluso, quando una lezione è segmentata e al ritmo dell'utente anziché presentata come un'unità continua, quando parole e immagini corrispondenti appaiono vicine e nello stesso momento, e quando la narrazione è conversazionale e con una voce umana amichevole anziché formale o generata da una macchina.

### Cognitivismo vs. comportamentismo e costruttivismo

- **vs. [[behaviorism|comportamentismo]]:** il comportamentismo spiega l'apprendimento come cambiamento comportamentale osservabile attraverso rinforzo ed esercitazione; il cognitivismo insiste sulle rappresentazioni interne e traccia gli stati mentali. La pratica dell'IA mostra spesso un divario di «costruttivismo a parole, comportamentismo nei fatti», ma le progettazioni cognitiviste (modellazione dello studente, knowledge tracing) sono distinte dalla pura esercitazione comportamentista con feedback perché *rappresentano la conoscenza inferita di chi apprende e vi si adattano*, anziché limitarsi a rinforzare le risposte.
- **vs. [[constructivist|costruttivismo]]:** il costruttivismo sostiene che [[learners|chi apprende]] costruisca attivamente significato attraverso l'esperienza; il cognitivismo enfatizza la codifica accurata di conoscenze e abilità (spesso pre-strutturate). La discendenza cognitivista dell'AIED (domini strutturati, componenti di conoscenza esplicite) è talvolta criticata come troppo comportamentista o troppo orientata alla trasmissione dai costruttivisti, mentre il cognitivismo replica che rappresentare e tracciare la conoscenza è ciò che consente un'istruzione genuinamente adattiva.
- **vs. le [[learning-sciences|scienze dell'apprendimento]]:** il cognitivismo fornisce i meccanismi con cui quel campo progetta — memoria di lavoro, codifica, recupero, componenti di conoscenza decomponibili — ma non è di per sé orientato alla progettazione. Spiega come avvenga l'apprendimento; le scienze dell'apprendimento chiedono come costruire gli ambienti in cui avviene e sottopongono quelle progettazioni a verifica empirica.

### La tensione dell'era dell'IA: il confine del cognitivismo è sotto pressione

La [[generative-ai|IA generativa]] estende e al contempo sfida il cognitivismo. Lo estende rendendo le rappresentazioni della conoscenza più potenti (gli LLM come motori di conoscenza tracciabili tramite [[knowledge-tracing]] e adattabili tramite [[student-modeling]]). Lo sfida complicando il luogo in cui la cognizione «si trova»: quando l'IA svolge ragionamento, memoria e persino funzioni simili alla metacognizione, l'assunto cognitivista che l'apprendimento sia elaborazione interna nella mente individuale è messo in discussione — come argomentano la [[distributed-cognition|cognizione distribuita]], la [[ai-cognitive-partner-co-regulation-learning|co-regolazione]] e le inquadrature post-umane, la cognizione può essere distribuita tra sistemi umani e artificiali. Eppure la domanda cognitivista resta quella centrale del campo: *chi apprende interiorizza la conoscenza, o è lo strumento a trattenerla?* Questa è la domanda sul cognitive offloading e sul divario tra performance e apprendimento nella sua forma più pura.

## Implicazioni per la progettazione e la ricerca

1. **Progettare per l'interiorizzazione, non solo per la performance.** L'AIED cognitivista dovrebbe essere valutato sulla capacità di chi apprende di richiamare e applicare la conoscenza *senza* lo strumento — non sulla performance assistita. Questo è il [[ai-misuse-learning-harm|divario tra performance e apprendimento]] e la ragione per misurare il [[transfer-of-learning|trasferimento]] non assistito.
2. **Rappresentare chi apprende, non solo rispondere.** Associare [[student-modeling|modellazione dello studente]] e [[knowledge-tracing]] strutturati al dialogo con l'IA, affinché il sistema si adatti alla conoscenza inferita anziché rispondere in modo fluido ma alla cieca. ([[educlaw-bench-pedagogical-llm-agents-2026]])
3. **Rispettare i limiti della memoria di lavoro.** Applicare la teoria del carico cognitivo all'esperienza utente dell'IA: ridurre il carico estraneo (attrito, interfacce sovraccariche) preservando l'elaborazione pertinente ([[desirable-difficulties|la lotta produttiva]], la pratica di recupero) anziché minimizzare ogni richiesta cognitiva.
4. **Calibrare la metacognizione.** Poiché la [[metacognition|metacognizione]] governa quando chi apprende sceglie di scaricare, insegnare la calibrazione (sapere ciò che si è effettivamente in grado di fare senza aiuto) è una risposta cognitivista all'eccessiva dipendenza (si veda il [[cognitive-offloading|cognitive offloading]]).

## Concetti collegati

- [[behaviorism]]
- [[constructivist]]
- [[learning-theories]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[knowledge-tracing]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[item-response-theory]]
- [[distributed-cognition]]
- [[icap-framework]]
- [[transfer-of-learning]]
- [[self-regulated-learning]]
- [[ai-education]]
- [[learning-sciences]]
- [[retrieval-spacing-interleaving]] — the retention findings this practice family rests on

## Articoli collegati

- [[cognitive-shift-ai-education]] — The cognitive shift in AI education
- [[cogtax-cognitive-taxonomy]] — A cognitive taxonomy for AI use
- [[educlaw-bench-pedagogical-llm-agents-2026]] — Pedagogical LLM agents grounded in knowledge tracing
- [[nie-personavlm-long-term-personalization-2026]] — LLM student modeling and memory
- [[ai-cognitive-partner-co-regulation-learning]] — AI as a cognitive partner in co-regulated learning
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition: thinking as human–AI interaction
