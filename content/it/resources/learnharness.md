---
title: "LearnHarness"
created: "2026-11-02T15:30:00-05:00"
updated: "2026-11-02T15:30:00-05:00"
type: resource
summary: "Un'app desktop gratuita e open source (AGPL-3.0) in cui agenti IA misurano ciò che chi apprende già comprende, pianificano una mappa delle dipendenze verso l'obiettivo, insegnano un passo di ragionamento alla volta e adattano l'esercizio — con un grafo di conoscenza persistente di proposizioni e catene di ragionamento che le sessioni successive leggono invece di ricominciare da zero."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-02"
    agent: hermes-agent
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---
*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**LearnHarness** è un'applicazione desktop per l'apprendimento [[agentic-ai|assistito da agenti]] che organizza una lezione attorno a [[prior-knowledge|ciò che chi apprende già comprende]] anziché a un elenco di argomenti. Il progetto descrive quattro mosse: **misurare**, sondare le idee da cui dipende l'obiettivo per trovare dove finisce la comprensione; **pianificare**, ricavare una mappa delle dipendenze verso l'obiettivo e mostrarla come mappa della lezione; **insegnare**, procedere un passo di ragionamento alla volta con un ritmo prevedi–spiega–verifica, così che le confusioni vengano riparate prima che qualcosa vi si costruisca sopra; e **esercitare**, un flusso di problemi mirati alle difficoltà specifiche di chi apprende.

## Cosa puoi farci

L'input distintivo è il campo di pensiero: chi apprende scrive o detta il proprio ragionamento e la propria incertezza invece di limitarsi a rispondere, e il progetto lo tratta come il modo in cui l'agente si raffigura il ragionamento, non come un registro giusto/sbagliato. Può anche ricercare domande in background, generare spiegazioni visive e costruire dimostrazioni interattive.

Ciò che si accumula è un [[knowledge-graph|grafo di conoscenza]] di proposizioni e catene di ragionamento, collegato alle sessioni di origine e letto come contesto dagli agenti di insegnamento e di esercizio successivi; le note possono essere importate. Il progetto afferma che il grafo memorizza idee e connessioni, non valutazioni dell'abilità.

## A chi è rivolto

Chi apprende in modo indipendente su materiali difficili, e docenti o sviluppatori che vogliono vedere com'è un [[intelligent-tutoring|tutor IA]] nativo per agenti quando i suoi prompt e il suo stato sono ispezionabili. È scritto in TypeScript, si esegue dal codice sorgente e i suoi test sono documentati come deterministici, senza chiamate ai modelli.

## Note e avvertenze

Gratuito copre il software, non l'inferenza: chi apprende porta le chiavi del provider, un abbonamento, una CLI locale di Claude Code o qualsiasi endpoint compatibile OpenAI, e paga il provider senza ricarichi; un contatore in tempo reale stima solo i costi API noti. Registri, chat e chiavi restano sulla macchina come file semplici, ma il progetto avverte che l'archiviazione locale non significa elaborazione offline, poiché le richieste ai modelli, la dettatura opzionale e la ricerca web raggiungono tutti servizi esterni. L'installer Windows x64 non è firmato, quindi Windows avviserà. Non è riportato alcuno studio di efficacia, quindi il caso si regge sulla motivazione dichiarata anziché su esiti misurati; il repository aveva circa 4.800 stelle al momento della verifica, il 2 novembre 2026.

## Concetti collegati

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
