---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Infrastruttura IA aperta per i prodotti educativi: un grafo della conoscenza di standard e curricoli, valutatori per valutare l'output dei LLM, agent skill indipendenti dal modello per i flussi di lavoro degli insegnanti e Curriculum Sync per caricare i curricoli in un sistema di gestione dell'apprendimento."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**Learning Commons** pubblica tre strumenti aperti per aggiungere funzioni di IA sopra contenuti curricolari reali — un **[[knowledge-graph|Knowledge Graph]]** di standard accademici, curricoli e ricerca della scienza dell'apprendimento, una libreria di **Evaluators** per giudicare il testo generato e **[[agentic-ai|Agent Skills]]** indipendenti dal modello per i flussi di lavoro didattici più comuni — e gestisce una piattaforma che aggiunge Curriculum Sync per caricare i curricoli in un [[edtech-platform|sistema di gestione dell'apprendimento]].

## Cosa si può fare

**Allinea il contenuto generato a uno standard.** Il Knowledge Graph modella standard, [[curriculum-design|curricoli]] e ricerca come entità e relazioni sotto un unico schema condiviso. Un prodotto può cercare lo standard a cui un elemento dovrebbe puntare, percorrere le relazioni di prerequisito o ancorare il contenuto di un tutor al curricolo che dovrebbe insegnare, senza costruire e mantenere una propria pipeline di dati.

**Valuta l'output generato prima che lo vedano gli studenti.** Gli **Evaluators** misurano attributi dell'[[llm|output di un LLM]] — complessità del testo, [[feedback]], allineamento agli standard e competenze durevoli — e sono distribuiti come SDK Python e TypeScript su npm e PyPI. In pratica funzionano come controllo di regressione quando cambia un prompt o un modello, come confronto tra modelli candidati o come filtro su elementi e spiegazioni generati.

**Impacchetta un flusso di lavoro didattico.** Gli **Agent Skills** raggruppano istruzioni, riferimenti e barriere di sicurezza in un formato aperto e indipendente dal modello: una verifica della comprensione, differenziazione graduata delle lezioni, un piano di lezione allineato agli standard e la preparazione delle lezioni. Possono essere inseriti in un framework per agenti o letti come modelli di lavoro su quanta struttura richieda un flusso di lavoro didattico affidabile.

**Sposta un curricolo in un sistema di gestione dell'apprendimento.** Curriculum Sync è il passo di piattaforma che trasforma una mappa degli standard in qualcosa che un corso può davvero usare nell'LMS.

## A chi si rivolge

Agli sviluppatori che inseriscono funzioni di IA in prodotti curricolari e di [[assessment|valutazione]], e ai team dei curricoli o degli standard che forniscono i dati a cui quei prodotti si allineano. Gli [[teacher-role|insegnanti]] possono usare gli Agent Skills da soli, ma l'inquadramento del repository stesso è quello di un'infrastruttura per chi rilascia strumenti.

## Note e avvertenze

Che il [[open-source|codice]] sia aperto non rende aperti i dati. Il codice del Knowledge Graph e degli Evaluators è MIT e gli Agent Skills sono Apache-2.0, mentre ogni dataset porta la propria etichetta di accesso — Open, Open + Gated o Gated — e i contenuti Gated non sono coperti dalle licenze aperte che il repository cita, quindi conviene controllare il catalogo dei dataset prima di dare per acquisito il diritto di riuso. Il contenuto dei prompt degli Evaluators è CC BY 4.0, ma i corpus annotati CLEAR e PERSUADE 2.0 che utilizza sono CC BY-NC-SA 4.0. La piattaforma e i dataset che ne stanno alla base richiedono un account.

## Concetti collegati

- [[curriculum-design]] — il grafo esiste per allineare i contenuti generati a standard e curricoli
- [[open-source]] — codice MIT e Apache-2.0 con licenza dei dati per singolo dataset
- [[educational-nlp]] — i valutatori sono uno strato di misurazione del testo sull'output dei LLM
- [[agentic-ai]] — skill che impacchettano un flusso di lavoro perché un modello lo esegua
- [[edtech-platform]] — Curriculum Sync carica i curricoli in un sistema di gestione dell'apprendimento
- [[llm]] — il bersaglio della valutazione e il consumatore delle skill
