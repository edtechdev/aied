---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Un sistema di authoring open source dei Generative AI Labs di Wharton che trasforma un'intervista strutturata con un educatore in una simulazione didattica adattiva ed eseguibile, con agenti propri per mentor, pratica e feedback."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---
*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Primer è un [[open-source|sistema open source]] per costruire una [[simulation|simulazione]] didattica descrivendo una lezione a un'IA invece di programmarla. Il giudizio dell'educatore stabilisce che cosa insegna la simulazione: un'intervista fa emergere ciò che il docente sa della lezione e degli studenti, un documento di progettazione rende quella conoscenza verificabile, e nulla viene costruito finché l'educatore non lo approva.

## Cosa puoi farci

L'intervista procede con una domanda alla volta: la lezione, il livello e le conoscenze pregresse degli studenti, i fraintendimenti comuni, l'approccio del docente e come verrà valutato il successo. Gli educatori possono parlare o scrivere e possono caricare sillabi, piani di lezione o rubriche. Quello che torna indietro è un documento di progettazione che copre obiettivi, flusso dello scenario, personaggi, posta in gioco e logica di adattamento, che l'educatore rivede e approva come farebbe con un piano di lezione. Cinque agenti lo costruiscono poi: Intake, Design, Casting Director, Image Generation ed Experience Builder, che assembla il risultato per un singolo studente o per un'intera classe.

In fase di esecuzione tre agenti si rivolgono allo studente. Un mentor attiva le conoscenze pregresse e porta in superficie i fraintendimenti. Un agente di pratica interpreta una controparte in un roleplay o un allievo a cui lo studente insegna (teachback): lo studente spiega un concetto e rivede la spiegazione quando viene interrogato. Un agente di feedback lavora sulla trascrizione, discutendo momenti specifici e come l'apprendimento si porta oltre lo scenario. Ogni agente ha un personaggio nel mondo della simulazione e uno strato didattico che tiene traccia degli obiettivi e raccoglie prove, e l'educatore riceve report individuali e aggregati.

## A chi è rivolto

Docenti, progettisti didattici e faculty developer possono descrivere una lezione in dettaglio senza voler scrivere codice. I ricercatori che studiano l'authoring con l'educatore nel ciclo o i [[agentic-ai|flussi di lavoro multi-agente]] ottengono un sistema funzionante da ispezionare, e gli sviluppatori possono estenderlo, perché prompt, template, checklist, pattern di orchestrazione e codice TypeScript sono tutti open source.

## Note e avvertenze

Gli autori definiscono Primer un prototipo sperimentale, non un prodotto per la classe già validato. Non è stato valutato come intervento di apprendimento in aula e nessuno lo ha esaminato ai fini di FERPA, COPPA, delle leggi statali sulla privacy degli studenti o delle politiche distrettuali, quindi l'istituzione che lo usa con gli studenti si assume quella revisione. Il software è con licenza MIT e gratuito, ma eseguire una simulazione richiede accesso a un modello, che costa. Poiché è indipendente dal modello e funziona con modelli locali o a pesi aperti, può essere distribuito dove le regole sulla privacy sono più severe. Una white paper sull'architettura e sui prompt è collegata dalla pagina del progetto. Al momento della verifica, nel novembre 2026, il repository aveva 98 stelle e 16 fork.

## Concetti collegati

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
