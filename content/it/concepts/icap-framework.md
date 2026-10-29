---
title: Framework ICAP
created: "2026-10-14T21:58:00-04:00"
type: concept
connected_faqs: [designing-ai-into-learning]
foundations: [learning-design]
pedagogy: [active-learning, cognitive-psychology, collaborative-learning, learning-theories]
technology: [educational-nlp, learning-analytics]
confidence: high
translation_of: concepts/icap-framework
source_updated: "2026-09-30T08:05:25-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> Il **Framework ICAP** (Interactive–Constructive–Active–Passive) — una tassonomia del coinvolgimento cognitivo sviluppata da Michelene Chi che classifica il comportamento dello studente in quattro modalità di cambiamento della conoscenza, ordinate dalla meno alla più cognitivamente impegnata: *passiva*, *attiva*, *costruttiva* e *interattiva*. Nell'IA nell'istruzione, ICAP fornisce sia un obiettivo progettuale (costruire strumenti che suscitino coinvolgimento costruttivo e interattivo piuttosto che consumo passivo) sia una lente valutativa (misurare se studenti e sistemi di IA siano effettivamente impegnati nelle modalità superiori). ([[hingle-collaborative-ai-literacy-2025]])([[icap-cognitive-engagement-llm-agents]])

## Domande da considerare

- Pensa all'ultima volta che hai "imparato" qualcosa guardando un video o leggendo. Il framework ICAP lo definirebbe passivo. Cosa trattieni effettivamente dall'esposizione passiva rispetto allo spiegarlo a qualcun altro?
- ICAP ordina il coinvolgimento da passivo ad attivo a costruttivo a interattivo. Dove tendono a mantenere gli studenti gli strumenti di IA che hai usato — e cliccare attraverso una pratica adattiva conta come coinvolgimento reale o solo come attività?
- La pagina sostiene che lo spostamento più consequenziale sia da Attivo a Costruttivo — generare spiegazioni o nuovi artefatti piuttosto che limitarsi ad applicare la conoscenza. Perché produrre qualcosa di nuovo potrebbe essere il passo che cambia davvero la comprensione?
- Uno studio ha rilevato che esperti umani superano di gran lunga i modelli di IA nell'etichettare i livelli di coinvolgimento. Se i sistemi automatizzati sottostimano sistematicamente il coinvolgimento, come dovremmo trattare le metriche di "coinvolgimento" generate dall'IA?
- ICAP mostra che uno strumento che risponde al posto tuo ti mantiene passivo, mentre uno che stimola e interroga ti spinge verso il coinvolgimento costruttivo e interattivo. Quale scelta progettuale faresti per i tuoi studenti?
- Il framework è usato sia come obiettivo progettuale sia come lente valutativa. Come potresti usare ICAP nel tuo insegnamento o nella tua progettazione per capire se gli studenti sono genuinamente coinvolti piuttosto che semplicemente attivi?

## Introduzione

ICAP si fonda sull'assunzione che *ciò che gli studenti fanno* determina quanto e cosa imparano. Il framework di Chi postula che, man mano che il coinvolgimento si sposta da passivo ad attivo a costruttivo a interattivo, la natura del cambiamento della conoscenza si approfondisce — dal conservare, all'attenzione, all'integrare nuove conoscenze con le conoscenze pregresse, al co-creare conoscenza attraverso il dialogo. Questo rende ICAP un potente strumento analitico per l'IA nell'istruzione, dove la domanda progettuale centrale è se l'assistenza dell'IA supporti o soppianti il coinvolgimento cognitivo degli studenti.

## Le quattro modalità

| Modalità | Comportamento dello studente | Natura del cambiamento della conoscenza |
|----------|------------------------------|------------------------------------------|
| **Interattiva** | Dialogo con un altro studente o agente, co-costruendo significato; es. difendere una posizione, la [[collaborative-learning|risoluzione collaborativa di problemi]] | Co-creazione di nuova conoscenza attraverso un'attività congiunta e reciproca |
| **Costruttiva** | Generare un nuovo output oltre ciò che è dato; es. auto-spiegarsi, confrontare, riflettere, disegnare | Integrazione di nuove informazioni con le conoscenze pregresse per produrre una comprensione nuova |
| **Attiva** | Manipolare o agire sul materiale; es. prendere appunti, sottolineare, fermarsi a pensare | Attenzione e conservazione dell'informazione, talvolta senza profonda integrazione |
| **Passiva** | Ricevere informazioni senza azione manifesta; es. ascoltare una lezione, leggere | Conservazione dell'informazione, con ulteriore elaborazione limitata |

## ICAP nell'IA nell'istruzione

### Un obiettivo progettuale per gli strumenti di IA

ICAP riformula la domanda progettuale centrale per l'IA nell'istruzione: uno strumento di IA che *risponde al posto dello* studente lo mantiene nelle modalità passiva/attiva, mentre uno strumento che *stimola, interroga e [[scaffolding|fornisce impalcatura]]* può spingere gli studenti verso il coinvolgimento costruttivo e interattivo. Questo allinea ICAP alla pedagogia [[constructivist|costruttivista]] e alla ricerca sull'[[active-learning|apprendimento attivo]]. ([[multimodal-learning-genai]])([[hingle-collaborative-ai-literacy-2025]])

### Una lente valutativa per gli agenti di IA

ICAP serve anche come framework di misurazione. In uno studio, i ricercatori hanno esteso ICAP a una scala a 7 punti per caratterizzare il coinvolgimento cognitivo nel dialogo collaborativo, poi hanno confrontato annotatori umani addestrati con l'etichettatura basata su LLM (in-context learning, prompting zero-shot e agenti riflessivi). L'affidabilità inter-valutatori umana (kappa = 0,906–0,998) superava di gran lunga l'annotazione LLM (kappa = 0,541–0,609), evidenziando il ruolo — e gli attuali limiti — di ICAP nella misurazione automatizzata del coinvolgimento per le pipeline di [[learning-analytics|learning analytics]]. ([[icap-cognitive-engagement-llm-agents]])

### Guidare la facilitazione del dialogo collaborativo

Poiché il coinvolgimento interattivo è la modalità ICAP più alta, il framework aiuta a localizzare il valore della facilitazione da parte dell'IA nella [[collaborative-learning|discussione collaborativa online]]. La [[llm-facilitation-timing-online-discussions|ricerca sulla tempistica della facilitazione tramite LLM]] mostra che *quando* un'IA interviene in una discussione plasma se questa supporti o interrompa la co-costruzione interattiva della conoscenza — un'avvertenza informata da ICAP sul fatto che gli agenti di moderazione autonoma necessitino di una calibrazione verso una moderazione simile a quella umana piuttosto che verso una facilitazione troppo sollecita.

### ICAP e la progettazione della learning analytics

ICAP è alla base delle critiche alle metriche superficiali di "coinvolgimento": interagire con una dashboard cliccando i filtri è un coinvolgimento *attivo*, non *interattivo*. Le progettazioni di learning analytics efficaci suscitano auto-valutazione e dialogo bidirezionale piuttosto che limitarsi a mostrare dati — un'implicazione tratta direttamente dal framework di Chi. ([[interactive-learning-dashboards-engagement]])

### La transizione Attivo→Costruttivo come passaggio cruciale

Sebbene ICAP descriva una gerarchia, lo spostamento più consequenziale per l'apprendimento è il salto dalle modalità *Attiva* a quella *Costruttiva* (Chi & Boucher, 2023). Il coinvolgimento attivo (applicare la conoscenza a scenari simili ma non identici) prepara gli studenti, ma è il coinvolgimento costruttivo — generare spiegazioni, riassunti o nuovi artefatti — che li mette in grado di creare nuova conoscenza. Questo è il cuore del problema per l'IA nell'istruzione: uno strumento che mantiene gli studenti nella modalità Attiva (es. cliccare attraverso una pratica adattiva) può sembrare produttivo ma non li spinge mai verso la generazione costruttiva che produce una comprensione durevole. Gli interventi collaborativi e focalizzati sull'alfabetizzazione che costruiscono deliberatamente il balzo Attivo→Costruttivo tendono a mostrare i guadagni maggiori. ([[hingle-collaborative-ai-literacy-2025]])

### ICAP come segnale di impalcatura adattiva negli ITS

Le modalità di ICAP possono essere operazionalizzate come *stati obiettivo* tra cui un tutor adattivo sceglie per fornire impalcatura al coinvolgimento cognitivo sulla base di un modello dello studente in evoluzione. In un ITS logico, [[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al.]] sceglievano dinamicamente tra una modalità *Attiva* di esempi svolti "Guidati" e una modalità *Costruttiva* di esempi "Errati". Confrontando il Bayesian Knowledge Tracing (BKT) con il Deep Reinforcement Learning (DRL) e una linea di base non adattiva su 113 studenti, entrambe le politiche adattive miglioravano la prestazione al post-test — ma in modo differenziato: il BKT dava i guadagni maggiori agli studenti con conoscenze pregresse basse (aiutandoli a recuperare), mentre il DRL produceva i punteggi post-test più alti tra gli studenti con conoscenze pregresse alte. Questa è una dimostrazione concreta del fatto che *personalizzare* efficacemente la modalità ICAP di un tutor intelligente dipende dalla modellazione della conoscenza attuale dello studente — e che nessuna singola modalità o metodo adattivo si adatta a ogni studente. Questo collega la gerarchia ICAP direttamente alla progettazione dell'[[adaptive-learning|apprendimento adattivo]] e del [[knowledge-tracing|knowledge tracing]].

### ICAP come modello dello stato cognitivo per generare agenti simili all'umano

Oltre a selezionare le modalità del compito, ICAP è stato incorporato direttamente nel *modello cognitivo* di un agente educativo generativo. [[cogevolution-student-cognitive-evolution-agent-2026|CogEvolution]] costruisce un "percettrone di profondità cognitiva" basato su ICAP che mappa gli input a una distribuzione di probabilità sui quattro livelli ICAP, fondendola con aggiornamenti di stato ispirati all'evoluzione e recupero mnemonico basato sulla teoria della risposta all'item per simulare l'evoluzione cognitiva di uno studente (incluse transizioni come confusione → intuizione). Le ablazioni mostrano che rimuovere il modulo di percezione ICAP fa collassare la capacità dell'agente di distinguere apprendimento superficiale da apprendimento profondo — evidenza che la tassonomia ICAP può servire come misura interna fine del coinvolgimento cognitivo per la [[simulating-students|simulazione degli studenti]], non solo come lente valutativa esterna.

### ICAP come ancoraggio della valutazione dell'interazione riflessiva con la GenAI

L'enfasi di ICAP sul coinvolgimento generativo e a livello di processo è stata adottata dai framework di valutazione che valutano *come* gli studenti imparano con l'IA generativa. [[assessing-student-drive-framework-2025|Il framework DRIVE]] allinea esplicitamente il suo costrutto centrale — l'interazione riflessiva profonda con l'output della GenAI — al tipo di coinvolgimento generativo che ICAP identifica come conducente a un apprendimento più profondo, e lo usa per distinguere il consumo superficiale dalla rielaborazione laboriosa e riflessiva dei contenuti generati dall'IA. Questo posiziona ICAP come ancoraggio teorico per progettare e misurare interazioni di apprendimento significative con la [[generative-ai|GenAI]] piuttosto che limitarsi a tracciare l'uso.

## Implicazioni per la progettazione e la ricerca

1. **Progettare per le modalità superiori.** Gli strumenti di IA dovrebbero spingere gli studenti a generare, spiegare e dialogare — attività costruttiva e interattiva — piuttosto che erogare contenuti passivi o agire come macchine delle risposte. ([[multimodal-learning-genai]])
2. **Coinvolgere gli studenti attraverso le modalità.** L'istruzione efficace sull'[[ai-literacy|alfabetizzazione in IA]] coinvolge gli studenti a livelli ICAP multipli — esposizione passiva, manipolazione attiva, generazione costruttiva e dialogo interattivo — selezionando la modalità che si adatta all'obiettivo di apprendimento. ([[hingle-collaborative-ai-literacy-2025]])
3. **Misurare il coinvolgimento onestamente.** ICAP offre a ricercatori e progettisti un vocabolario comune per distinguere il coinvolgimento cognitivo genuino dalla mera attività — un correttivo al superficiale [[student-engagement|coinvolgimento dello studente]]. ([[icap-cognitive-engagement-llm-agents]])
4. **Attenzione al divario di annotazione umano-LLM.** Se i sistemi automatizzati sono usati per codificare il coinvolgimento, il loro scarto sistematico rispetto agli umani addestrati deve essere tenuto in conto. ([[icap-cognitive-engagement-llm-agents]])

## Concetti collegati

- [[active-learning]]
- [[collaborative-learning]]
- [[student-engagement]]
- [[learning-analytics]]
- [[constructivist]]
- [[learning-design]]
- [[metacognition]]
- [[ai-literacy]]
- [[human-in-the-loop-ai]]
- [[limitations-in-aied-research]]

## Articoli collegati

- [[icap-cognitive-engagement-llm-agents]] — Extended ICAP framework for measuring engagement with human vs. LLM annotation
- [[hingle-collaborative-ai-literacy-2025]] — Collaborative AI literacy across the four ICAP modes
- [[interactive-learning-dashboards-engagement]] — ICAP as a critique of shallow learning-analytics engagement
- [[multimodal-learning-genai]] — ICAP and cognitive engagement in multimodal learning design
- [[llm-facilitation-timing-online-discussions]] — LLM facilitation timing in online collaborative discussions
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[cogevolution-student-cognitive-evolution-agent-2026]] — ICAP cognitive-depth model in a generative student-simulation agent
- [[assessing-student-drive-framework-2025]] — ICAP-anchored assessment of reflective GenAI interaction
