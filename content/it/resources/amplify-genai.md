---
title: "Amplify GenAI"
created: "2026-11-12T19:20:00-05:00"
updated: "2026-11-12T19:20:00-05:00"
type: resource
summary: "La piattaforma di IA generativa enterprise di Vanderbilt, con licenza MIT, distribuita nell'account AWS dell'istituzione: assistenti personalizzati sui documenti locali, risposte con recupero aumentato, condivisione in tutta l'organizzazione e contabilità dei costi fino al singolo messaggio."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Amplify GenAI è la scommessa opposta a una licenza per tutto il campus di un assistente commerciale: l'istituzione gestisce la piattaforma stessa, dentro il proprio account Amazon Web Services, e paga per ciò che usa. Vanderbilt l'ha costruita per la propria comunità, l'ha rilasciata con licenza MIT su tre repository e ora la offre ad altre organizzazioni come alternativa ai contratti enterprise a postazione — l'argomento è che la parte costosa dovrebbe essere i modelli, non il numero di postazioni.

## Che cosa puoi farci

Gli utenti costruiscono assistenti personalizzati caricando documenti o collegando fonti dati, e gli assistenti rispondono con [[rag|generazione aumentata dal recupero]] su quel materiale anziché solo dall'addestramento generale. Gli assistenti possono essere condivisi in tutta l'organizzazione, concatenati in un'unica conversazione e dotati di modelli di prompt; la piattaforma produce anche file PowerPoint e Word, diagrammi e visualizzazioni. Gli amministratori ottengono ciò che serve a un servizio condiviso: contabilità dei costi fino al livello del messaggio, limiti per utente, cartelle e spazi di lavoro, e SSO, tutto in una distribuzione che l'istituzione controlla.

La decisione di progettazione che conta di più per un [[higher-ed|college]] è il modello di contabilizzazione. Vanderbilt riporta che con 1.300 utenti pilota il costo per utente era di circa \$3 al mese, AWS incluso, e che metà di quegli utenti consumava meno di \$1 al mese in token — cifre che l'università presenta come caso di studio, non come benchmark verificato. La fatturazione a consumo premia un campus in cui una minoranza di utenti fa la maggior parte del lavoro, che è la forma normale dell'adozione dell'IA, e rende la domanda dell'ufficio finanziario («quanto costa per studente?») rispondibile dai log anziché da un contratto.

## A chi è rivolto

Uffici IT centrali e uffici dei CIO che già gestiscono carichi di lavoro in AWS e vogliono un'alternativa sostenuta dalla comunità a un assistente enterprise commerciale; docenti che hanno bisogno di assistenti basati sul materiale del corso senza inviarlo al prodotto consumer di un fornitore; e istituzioni che vogliono un unico posto per vedere cosa fanno le persone con i modelli. Poiché si distribuisce nell'account dell'istituzione, la questione della residenza dei dati è risolta dalla distribuzione anziché dalla promessa di un fornitore.

## Note e avvertenze

La licenza è gratuita, l'esercizio no: l'istituzione paga AWS e i fornitori dei modelli. La scelta del modello passa per Amazon Bedrock (Anthropic, Mistral) o OpenAI e Microsoft Azure, e l'esecuzione di modelli locali propri non è implementata. Il progetto dichiara apertamente di non poter supportare distribuzioni individuali e rimanda le organizzazioni a partner commerciali — quindi il costo realistico include personale o un contraente. È una distribuzione su tre repository (frontend, backend, infrastruttura) con decine di stelle anziché migliaia, e il confronto dei costi sopra è l'esperienza di Vanderbilt, non uno studio controllato. Le istituzioni che preferirebbero tenere l'inferenza su hardware proprio dovrebbero guardare a [MindRouter](/aied/resources/mindrouter/) e leggere i due insieme: Amplify è uno strato applicativo sopra modelli di fornitori, MindRouter è un gateway sopra le tue GPU.

## Concetti collegati

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
