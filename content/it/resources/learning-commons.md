---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Infrastruttura IA aperta dell'iniziativa educativa di Mark Zuckerberg e Priscilla Chan: un grafo della conoscenza di standard, curricoli e dati della scienza dell'apprendimento, valutatori per giudicare l'output dei LLM e agent skill indipendenti dal modello per i flussi di lavoro degli insegnanti."
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**Learning Commons** è l'iniziativa educativa di Mark Zuckerberg e Priscilla Chan, lanciata nel 2025 per portare il lavoro sulla scienza dell'apprendimento della Chan Zuckerberg Initiative nell'infrastruttura su cui i prodotti edtech sono effettivamente costruiti. La sua tesi è infrastrutturale più che pedagogica: la ricerca esiste, gli standard accademici esistono e i curricoli di qualità esistono, ma stanno in sistemi separati, così gli sviluppatori costruiscono su ciò che è più facile raggiungere. L'organizzazione pubblica tre strumenti aperti su GitHub — un Knowledge Graph, un insieme di Evaluators e [[agentic-ai|Agent Skills]] — e gestisce una piattaforma che aggiunge Curriculum Sync per caricare i curricoli in un [[edtech-platform|sistema di gestione dell'apprendimento]].

## Cosa si può fare

Il **Knowledge Graph** modella standard accademici, curricoli e ricerca della scienza dell'apprendimento come entità e relazioni sotto un unico schema condiviso, così uno strumento può allineare il contenuto generato a uno standard senza costruire una propria pipeline di dati. Gli **Evaluators** misurano attributi dell'[[llm|output di un LLM]] attraverso la lente della scienza dell'apprendimento — complessità del testo, [[feedback]], allineamento agli standard accademici e competenze durevoli — e sono distribuiti con SDK Python e TypeScript, pubblicati su npm e PyPI, per valutare contenuti generati o confrontare modelli candidati. Gli **Agent Skills** impacchettano istruzioni, riferimenti e barriere di sicurezza per i flussi di lavoro didattici più comuni in un formato aperto e indipendente dal modello: una verifica della comprensione, differenziazione graduata delle lezioni, piani di lezione allineati agli standard e preparazione delle lezioni. In pratica è il grafo a rendere credibili gli altri due: l'allineamento dei contenuti è l'affermazione, e il grafo è il riferimento con cui la si verifica.

## A chi si rivolge

Agli sviluppatori che inseriscono funzioni di IA in prodotti di [[curriculum-design|curricolo]] e valutazione, e ai team dei curricoli o degli standard che forniscono i dati a cui quei prodotti si allineano. Gli insegnanti possono usare le agent skill da soli, ma l'inquadramento del repository stesso è quello di un'infrastruttura per chi rilascia strumenti.

## Note e avvertenze

Che il [[open-source|codice]] sia aperto non rende aperti i dati. Il codice del Knowledge Graph è MIT, mentre ogni dataset porta la propria etichetta di accesso — Open, Open + Gated o Gated — e i contenuti Gated non sono esplicitamente coperti dalle licenze aperte che il repository cita, quindi conviene controllare il catalogo dei dataset prima di dare per acquisito il diritto di riuso. Il codice dei valutatori è MIT e il contenuto dei suoi prompt CC BY 4.0, ma i corpus annotati CLEAR e PERSUADE 2.0 che utilizza sono CC BY-NC-SA 4.0. La piattaforma e i dataset che ne stanno alla base richiedono un account. Attività dei repository al 2026-11-04: 167 stelle per il Knowledge Graph, 88 per Evaluators, 41 per Agent Skills. L'iniziativa è finanziata da CZI, e la sua lettura del problema è quella del finanziatore stesso.

## Concetti collegati

- [[curriculum-design]] — il grafo esiste per allineare i contenuti generati a standard e curricoli
- [[open-source]] — codice MIT e Apache-2.0 con licenza dei dati per singolo dataset
- [[educational-nlp]] — i valutatori sono uno strato di misurazione del testo sull'output dei LLM
- [[agentic-ai]] — skill che impacchettano un flusso di lavoro perché un modello lo esegua
- [[edtech-platform]] — Curriculum Sync carica i curricoli in un sistema di gestione dell'apprendimento
- [[llm]] — il bersaglio della valutazione e il consumatore delle skill
