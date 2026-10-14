---
title: "Costruire libri di testo intelligenti"
created: "2026-10-14T21:55:00-04:00"
type: resource
summary: "La guida open source di Dan McCreary per costruire libri di testo intelligenti — libri di testo online con ricerca, navigazione, glossari, quiz, grafi dei concetti e simulazioni incorporate — usando MkDocs Material e l'IA generativa, con una libreria compagna di MicroSim interattive generate con l'IA."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
reviewed_by: [editor]
translation_of: "resources/intelligent-textbooks"
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---
*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Il sito **Intelligent Textbooks** è la guida passo passo di Dan McCreary per costruire *intelligent textbooks* — libri di testo online che vanno oltre i PDF statici aggiungendo ricerca, navigazione del sito, un glossario dei termini, un indice, gestione dei quiz, formule renderizzate, anteprime per i social media, controllo dei link e un **grafo dei concetti** facile da visualizzare che mostra tutti i concetti di un corso e le loro dipendenze. La guida sostiene che molti corsi oggi possono trarre beneficio da libri di testo online di alta qualità con queste caratteristiche, e mostra come costruirli usando il sistema di build [MkDocs](http://mkdocs.com/) abbinato al tema Material e all'IA generativa per creare e mantenere i contenuti.

La mossa decisiva è che il libro di testo è *scritto in Markdown e generato dall'IA*, un'istanza concreta del pattern di [[vibe-coding|authoring assistito dall'IA]] applicato ai [[curriculum-design|contenuti del corso]]: anziché mantenere a mano un sito di grandi dimensioni, si descrive il corso e si lascia che l'IA generativa produca e mantenga le pagine, mentre la toolchain si occupa di navigazione, ricerca e grafo dei concetti. Una libreria compagna di [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) dichiara di automatizzare oltre il 90% dei compiti necessari per costruire un libro di testo di livello 2 a partire dalla descrizione di un corso.

## Una risorsa collegata: MicroSims

Il compagno naturale di questa guida è la libreria **MicroSims** di McCreary su
<https://dmccreary.github.io/microsims/> (sorgente:
[github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), che fornisce le
simulazioni interattive che un intelligent textbook incorpora. Una *MicroSim* (micro-simulazione) è una semplice
simulazione interattiva generata con l'IA per aiutare i docenti a spiegare un concetto, e può essere incorporata in
un intelligent textbook o in qualsiasi sito che accetti un `iframe`. Le MicroSims si distinguono per tre
motivi: **generazione assistita dall'IA** (pattern di progettazione standardizzati trasformano una descrizione in
linguaggio naturale di una simulazione in una risorsa condivisibile), **incorporamento universale** (un singolo elemento HTML `iframe` la inserisce in qualsiasi pagina) e **codice trasparente e modificabile** (nessuna scatola nera — un clic apre la simulazione in un
editor web, e una licenza Creative Commons permette alla maggior parte dei docenti di usarle senza costi di licenza). Il termine
è stato coniato da Valerie Lockhart nel 2023, dopo che aveva scoperto che docenti e studenti potevano costruire simulazioni
con la libreria JavaScript p5.js con poca o nessuna formazione.

Il progetto pubblica anche uno JSON Schema per i metadati delle MicroSim, così che gli strumenti di IA possano generare
descrittori ricercabili, con un registro di MicroSim a sfaccettature previsto nella roadmap. Un articolo di ricerca che descrive
il framework — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with
Universal Embedding and Adaptive Learning Support* — è su arXiv
([2511.19864](https://arxiv.org/abs/2511.19864)). Tra le simulazioni di esempio ci sono Bouncing Ball,
Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula e un grafico
dei rendimenti del mercato azionario, ciascuna eseguita dal vivo sul sito.

## A chi è destinato

Docenti e progettisti didattici che vogliono costruire o mantenere il libro di testo di un corso, in particolare
nell'istruzione superiore e nella formazione professionale, oltre a chi si occupa di sviluppo della faculty e a chiunque usi l'IA generativa
per scrivere contenuti educativi. È adatto a educatori che si trovano a loro agio con un flusso di lavoro Markdown-e-Git
(o che sono disposti a impararlo) e che vogliono che sia l'IA a occuparsi dell'impiantistica del sito — ricerca, navigazione, grafo
dei concetti — per potersi concentrare sulla pedagogia.

## Note e avvertenze

Questa è la guida e la toolchain di un professionista, non uno studio sottoposto a revisione tra pari — presenta un flusso di lavoro e
la sua propria giustificazione educativa ("gli intelligent textbooks guidano gli studenti attraverso i concetti nella loro
ricerca della conoscenza") anziché evidenze sui risultati di apprendimento. L'articolo di ricerca sulle MicroSim è la cosa
più vicina a un supporto empirico, ed è autopubblicato su arXiv. Entrambi i progetti sono open source (la
repository intelligent-textbooks dichiara una licenza MIT e 38 stelle; MicroSims dichiara una licenza Creative Commons
e 13 stelle) e sono attivamente mantenuti. I grafi dei concetti e la struttura glossario-prima sono
davvero utili per la scopribilità, ma la guida presume un flusso di autore piuttosto tecnico —
MkDocs, Git e strumentazione per l'IA generativa — che può essere una barriera per alcuni docenti. Al momento dell'acquisizione il
registro delle MicroSim è ancora solo in roadmap, quindi trovare una specifica simulazione esistente dipende
dalla ricerca e dalla navigazione del sito stesso.

## Concetti collegati

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
