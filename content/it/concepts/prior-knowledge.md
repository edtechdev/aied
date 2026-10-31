---
title: Conoscenze pregresse
created: "2026-10-14T21:55:00-04:00"
updated: "2026-10-31T07:30:00-04:00"
type: concept
foundations: [learning-design]
pedagogy: [constructivist, learning-theories, metacognition, prior-knowledge, scaffolding]
technology: [personalized-learning, student-modeling]
confidence: high
translation_of: concepts/prior-knowledge
source_updated: "2026-10-28T01:09:26-04:00"
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

> **Conoscenze pregresse** — le conoscenze, abilità, convinzioni e modelli mentali esistenti che uno studente porta con sé in un nuovo compito di apprendimento. Sono il predittore singolo più potente dell'apprendimento successivo: le nuove informazioni vengono interpretate attraverso — e integrate con — ciò che lo studente già conosce, perciò un'istruzione che attiva e costruisce sulle conoscenze pregresse produce un apprendimento più solido e duraturo di un'istruzione che tratta ogni studente come una tabula rasa. Nell'[[ai-education|IA nell'educazione]], le conoscenze pregresse sono centrali per la [[student-modeling|modellazione dello studente]] (adattare l'[[personalized-learning|istruzione]] allo stato attuale dello studente), per il principio [[constructivist|costruttivista]] secondo cui la conoscenza viene attivamente costruita sopra i modelli mentali esistenti, e per il rischio che gli strumenti di IA che precaricano e presentano contenuti bypassino la [[retrieval-spacing-interleaving|pratica di recupero]] che attiva le conoscenze pregresse.

## Domande da considerare

- Cos'hai imparato a fondo e cos'hai faticato a imparare? Quanta parte della differenza dipendeva da ciò che già sapevi quando hai iniziato?
- Avere conoscenze pregresse non basta — devono essere attivamente recuperate e collegate. Quando il ricordare ciò che già sapevi (o il non riuscire a ricordarlo) ha cambiato quanto bene hai imparato qualcosa di nuovo?
- La pagina dice che le conoscenze pregresse possono *interferire* quando sono sbagliate (un misconcepimento). Riesci a pensare a una convinzione che avevi e che ha reso più difficile apprendere informazioni nuove e corrette?
- L'IA generativa che precarica le risposte può bypassare la pratica di recupero che attiva le conoscenze pregresse. Come potrebbe uno strumento progettato per aiutarti a imparare impedirti di fatto di richiamare ciò che sai?
- Se un'IA deve stimare il tuo stato di conoscenze pregresse per personalizzare, cosa succede quando quella stima è sbagliata? Quanto sei sicuro che un sistema possa conoscere accuratamente ciò che già sai?
- In che cosa "attivare le conoscenze pregresse" è diverso dal porre semplicemente una domanda agli studenti prima dell'[[teacher-role|insegnamento]]? Cosa renderebbe quell'attivazione un reale approfondimento dell'apprendimento che segue?

## Introduzione

L'attivazione delle conoscenze pregresse è uno dei risultati più robusti delle [[learning-sciences|scienze dell'apprendimento]]: gli studenti non assorbono nuovo materiale nel vuoto, ma lo mappano sugli schemi esistenti, e la qualità di quella mappatura determina la ritenzione e il [[transfer-of-learning|trasferimento]]. Il concetto è alla base degli organizer espositivi di Ausubel, dell'attivazione delle conoscenze pregresse prima della nuova istruzione, della pratica di recupero come forma di attivazione e rafforzamento di ciò che è noto, e della [[assessment|valutazione]] diagnostica di ciò che gli studenti già sanno. Nell'era dell'IA, le conoscenze pregresse hanno acquisito nuova urgenza perché l'[[generative-ai|IA generativa]] può sia *sostenere* l'attivazione ([[prompt-engineering|stimolare]] gli studenti a richiamare e collegare ciò che sanno) sia *bypassarla* del tutto (fornendo istantaneamente una risposta o contenuti precaricati che lo studente non ha mai dovuto recuperare o integrare).

## Il ruolo delle conoscenze pregresse

- **È il predittore più forte dell'apprendimento.** Decenni di [[research-methods-aied|ricerca]] mostrano che ciò che uno studente già conosce correla con gli [[learning-gains|esiti di apprendimento]] più fortemente di quasi ogni altro fattore, perché le nuove informazioni vengono codificate in relazione ai modelli mentali esistenti. I sistemi di IA che si adattano allo stato di conoscenze pregresse di ciascuno studente detengono quindi una promessa particolare di efficienza e [[transfer-of-learning|trasferimento]].
- **Conta l'attivazione, non solo il possesso.** Avere conoscenze pregresse non basta — devono essere attivamente recuperate e collegate al nuovo materiale. È per questo che "attivare le conoscenze pregresse" è una mossa [[pedagogy|didattica]] standard, e perché la pratica di recupero (richiamare ciò che sai prima di aggiungervi) migliora l'apprendimento oltre la semplice riesposizione.
- **Non sempre predice chi svolge il lavoro che guida l'apprendimento.** In uno studio di cinque giorni sull'apprendimento mediante insegnamento con 23 tutor di scuola media, i punteggi precedenti al test non hanno predetto la quota di risposte di costruzione della conoscenza prodotta da un tutor, e i tutor con conoscenze pregresse basse che costruivano conoscenza hanno concluso a livello statisticamente pari ai compagni con conoscenze pregresse alte ([[knowledge-building-tutor-learning-2026|Ameen et al., 2026]]).
- **Modella l'interpretazione.** Gli studenti interpretano le nuove informazioni attraverso ciò che già credono. Quando quelle convinzioni sono sbagliate ([[misconceptions|misconcepimenti]]), le conoscenze pregresse possono *interferire* con l'apprendimento, ed è per questo che l'istruzione deve portare alla luce e affrontare i misconcepimenti anziché assumere un punto di partenza neutro.
- **Guida la modellazione dello studente.** Per personalizzare, un sistema di IA deve stimare lo stato di conoscenze pregresse dello studente — la base del [[knowledge-tracing|tracciamento della conoscenza]], della modellazione dello studente e dello [[scaffolding|scaffolding]] adattivo. La qualità di queste stime determina se l'adattamento è genuinamente utile o fuorviante.
- **Il contenuto della conoscenza determina quale pratica di processo viene reclutata.** Se l'apprendimento si regge sulla memoria o sull'induzione è stabilito dalla struttura di conoscenze pregresse dell'obiettivo: [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger & Carvalho (2025)]] seguono il framework KLI nel distinguere componenti di conoscenza con condizioni e risposte costanti (fatti, acquisiti attraverso memoria e pratica di recupero) da quelle con condizioni e risposte variabili (abilità, acquisite attraverso induzione e generalizzazione a input nuovi) — ed è per questo che il mix ottimale di esempi svolti e pratica differisce per i contenuti di fatto rispetto ai contenuti di abilità.

## Conoscenze pregresse nell'era dell'IA

L'IA generativa ha reso le conoscenze pregresse una considerazione centrale di design anziché una variabile di sfondo:

- **Il rischio del bypass.** L'[[agentic-ai-pedagogical-best-practice-2026|IA agentiva proattiva]] che precarica e presenta contenuti può bypassare la pratica di recupero che attiva le conoscenze pregresse — lo studente non deve mai richiamare o integrare ciò che sa prima di ricevere una risposta. Questo è uno dei sei rischi pedagogici identificati nel framework di best practice per l'educazione [[agentic-ai|agentiva]], e si collega direttamente al [[cognitive-offloading|sovraccarico affidato alla macchina (Over-Reliance)]] e al principio delle [[desirable-difficulties|difficoltà desiderabili]] secondo cui l'elaborazione faticosa sostiene un apprendimento duraturo.
- **Le conoscenze pregresse modellano il pattern di scaricamento, non solo gli esiti.** In uno studio sulla scrittura per sintesi, il cluster ad alta conoscenza e scaricamento minimo ha prodotto l'80% del proprio saggio contro il 2% del cluster con scaricamento più pesante (media 25,1 prompt), perciò il volume di prompt tracciava le conoscenze pregresse piuttosto che lo sforzo ([[cognitive-offloading-llm-synthesis-writing|Poquet et al. (2026)]]).
- **Il divario di beneficio si amplifica.** Poiché l'uso produttivo dell'IA dipende da ciò che uno studente già conosce, gli studenti con conoscenze pregresse più forti la sfruttano meglio, mentre i novizi sono i più propensi a trattarla come un sostituto — un rischio distributivo che può allargare i divari di risultato anche quando l'accesso è pari ([[lodge-loble-cognitive-offloading-2026|Lodge & Loble (2026)]]).
- **Priming e attivazione come design.** Gli [[genai-mindtool-generative-learning|approcci GenAI come mindtool]] "innescano deliberatamente il compito di apprendimento" attivando conoscenze pregresse e curiosità attraverso domande-stimolo, visuali generate dall'IA e analogie (ad es. "Cosa sai già sugli ecosistemi?") prima di introdurre nuovi contenuti — modellando il percorso recupero-e-integrazione anziché il percorso fornitura-della-risposta.
- **Modellazione dello studente e memoria.** I sistemi di IA modellano sempre più lo stato di conoscenze pregresse degli studenti e la memoria longitudinale (ad es. incorporando lo stato di conoscenze pregresse e le curve dell'oblio nella memoria dei tutor), abilitando la ripetizione dilazionata e il ripasso adattivo che si costruiscono su ciò che ciascuno studente già conosce ([[nie-personavlm-long-term-personalization-2026]]).
- **Una leva di adattamento personalizzato.** Poiché gli studenti differiscono ampiamente nelle conoscenze pregresse, l'adattamento deve essere calibrato sull'individuo — un argomento centrale a favore dell'[[personalized-learning|apprendimento personalizzato]] e dello [[scaffolding|scaffolding]] adattivo che incontrano gli studenti nel loro stato attuale effettivo anziché in un assunto di media di classe.

## Implicazioni per il design dell'IA nell'educazione

1. **Attiva prima di fornire.** Progetta le interazioni con l'IA perché spingano gli studenti a recuperare e articolare ciò che già sanno prima di fornire nuovi contenuti o risposte — preservando la pratica di recupero anziché bypassarla.
2. **Modella lo stato di conoscenze pregresse dello studente.** Costruisci la modellazione dello studente e l'adattamento sulle conoscenze pregresse stimate (e sui loro misconcepimenti), non su un'assunta uniformità, per rendere la personalizzazione genuinamente responsiva.
3. **Porta alla luce e affronta i misconcepimenti.** Quando le conoscenze pregresse sono errate, interferiranno; l'istruzione dovrebbe elicitare e correggere i misconcepimenti anziché aggiungere nuovi contenuti sopra fondamenta difettose.
4. **Pesa il compromesso sull'attrito.** Attivare le conoscenze pregresse aggiunge una difficoltà desiderabile (recupero, integrazione) che le impostazioni predefinite dell'IA di rimozione dell'attrito tendono a cancellare — una tensione da gestire deliberatamente anziché lasciare che l'automazione la risolva per default.

## Idee sbagliate comuni

**«Le conoscenze pregresse predicono chi svolge il lavoro cognitivo.»** Predicono gli esiti più affidabilmente di quanto predicano il comportamento. In uno studio di cinque giorni sull'apprendimento mediante insegnamento con **23 tutor di scuola media**, i punteggi dei test precedenti **non** predicevano la quota di risposte di costruzione della conoscenza prodotta da un tutor, e i tutor con conoscenze pregresse basse lavoravano a costruire conoscenza anziché ripiegare su un impegno minore. Chi si impegna nella lotta produttiva non è semplicemente chi arriva sapendo di più.

**«Lo scaricamento è un tratto stabile dello studente, quindi lo stesso studente scarica la stessa quantità ovunque.»** Segue le conoscenze pregresse dentro il compito. In uno studio sulla scrittura per sintesi, il **cluster ad alta conoscenza e scaricamento minimo ha prodotto l'80% del proprio saggio contro il 2% del cluster con scaricamento più pesante**. Lo scaricamento è quindi in larga misura una risposta a ciò che lo studente già possiede e a ciò che il compito richiede, il che lo rende una variabile di progettazione anziché un tratto di carattere.

**«Gli studenti con meno conoscenze pregresse hanno bisogno di più supporto dall'IA.»** È la direzione più probabile per ampliare il divario, poiché il pattern di scaricamento misurato concentra la perdita di autorialità dove le conoscenze pregresse sono più sottili. Un supporto che fornisce il lavoro allo studente meno attrezzato per rilevare la sostituzione rimuove l'attività che costruirebbe la conoscenza mancante.

**«Le conoscenze pregresse sono un input fisso che il corso non può muovere.»** Sono il fattore più pesantemente ponderato nel nuovo apprendimento, il che rende costruirle il compito a massima leva anziché una condizione di sfondo — la ragione per cui la conoscenza di dominio è l'intervento in sé, non solo la covariata.

## Concetti collegati

- [[learners]] — Learners: l'ombrello per i concetti lato studente
- [[constructivist]]
- [[personalized-learning]]
- [[student-modeling]]
- [[misconceptions]]
- [[icap-framework]]
- [[knowledge-tracing]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[transfer-of-learning]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[desirable-difficulties]]
- [[learning-theories]]
- [[productive-failure]] — Productive Failure
- [[retrieval-spacing-interleaving]] — come ciò che uno studente già conosce determina ciò che la pratica di recupero può fare

## Articoli collegati

- [[agentic-ai-pedagogical-best-practice-2026]] — The tension between automation and learning (prior knowledge activation risk)
- [[genai-mindtool-generative-learning]] — GenAI as a mindtool: priming and activating prior knowledge
- [[nie-personavlm-long-term-personalization-2026]] — LLM student modeling and memory
- [[lodge-loble-cognitive-offloading-2026]] — Lodge & Loble on cognitive offloading
- [[cognitive-offloading-llm-synthesis-writing]] — Cognitive offloading in LLM synthesis writing
- [[bridging-instructional-design-framework-math]] — An instructional-design framework for math
- [[knowledge-building-tutor-learning-2026]] — knowledge-building rather than prior knowledge predicts tutor learning, and low-prior tutors who build knowledge catch up
- [[rachatasumrit-example-problem-ratio-2026]]
