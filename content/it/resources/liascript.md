---
title: "LiaScript"
created: "2026-10-14T21:55:00-04:00"
type: resource
summary: "Un dialetto aperto di Markdown che trasforma un file di testo semplice in un corso interattivo nel browser, con quiz e codice eseguibile, più un assistente multi-agente per costruire corsi con esso."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
reviewed_by: [editor]
translation_of: "resources/liascript"
source_updated: "2026-09-24T04:57:47-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---
*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**LiaScript** è un dialetto esteso di Markdown con un interprete per esso. Un singolo file di testo semplice diventa un corso interattivo: lo stesso documento può essere letto come una narrazione, proiettato come slide o percorso come un corso, tutto nel browser. Non serve installare nulla per scriverne uno né per leggerlo.

## Cosa puoi farci

I quiz assumono le forme che un docente si aspetta, tra cui scelta multipla, domande a matrice, inserimento di testo, menu a tendina e testi con spazi vuoti, scritti direttamente in Markdown. I blocchi di codice possono essere resi modificabili ed eseguibili per i tutorial di [[cs-education|programmazione]], e un sistema di macro avvolge le librerie JavaScript in blocchi riutilizzabili, così che i diagrammi interattivi non richiedono codice a ogni autore. Un corso è ospitato là dove l'autore conserva già il testo, senza un servizio a cui restare vincolati, e tutto gira lato client, quindi un corso caricato funziona anche offline. Il LiaScript Exporter impacchetta un corso come SCORM per Moodle, ILIAS e altri [[edtech-platform|learning management system]].

## L'agente didattico per costruire corsi

Il progetto pubblica anche un **[teaching agent](https://github.com/LiaScript/teaching-agent)** per la scrittura di corsi LiaScript, con licenza Boost Software License 1.0. Quattro agenti — per la didattica, il design visivo, la revisione da parte di chi apprende e la pubblicazione — lavorano intorno a un unico file di progetto che conserva lo stato del corso, con un flusso di lavoro "define-first": obiettivi, pubblico e didattica vengono stabiliti prima che sia scritto qualsiasi materiale, e ad essi seguono porte di validazione. Una bozza può essere revisionata dal punto di vista di una persona che apprende con un nome preciso, per verificare il [[cognitive-offloading|carico cognitivo]] e le conoscenze pregresse presunte. L'agente è agnostico rispetto all'editor, e genera configurazioni per Claude Code, Copilot, Codex, Cursor o una chat web a partire da un'unica specifica; il repository funge anche da esempio svolto, contenendo un corso di sei unità sulla Direttiva NIS2 dell'UE e un documento che descrive come è stato prodotto.

## Note e avvertenze

LiaScript è gratuito, senza livelli a pagamento e senza obbligo di account, ed è sviluppato apertamente sotto licenza BSD-3-Clause, così che le istituzioni possono ospitarlo in autonomia e modificarlo. La funzionalità Live Classroom merita un esame prima di farvi affidamento su larga scala, perché la sincronizzazione in tempo reale usa un servizio condiviso anziché un rendering puramente locale. Il teaching agent è giovane e poco adottato, quindi va trattato come un prototipo funzionante piuttosto che come un prodotto supportato.

## Concetti collegati
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]]
