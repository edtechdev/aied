---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Una classifica pubblica per modelli frontier che valutano risposte universitarie STEM realmente scritte a mano rispetto agli item della rubrica selezionati dal docente."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

GradeBench pone una domanda circoscritta e utile sulla [[automated-assessment|valutazione automatizzata]]: data la risposta scritta a mano di uno studente, la rubrica del docente, una soluzione di riferimento e gli item della rubrica effettivamente selezionati dal docente, un modello frontier seleziona gli stessi item? Le etichette gold sono le selezioni di rubrica reali di docenti e assistenti didattici (TA) tratte da esami e quiz, non output di modelli ri-valutati.

## Cosa puoi farci

Leggi la classifica prima di fidarti della dichiarazione di accuratezza di qualsiasi fornitore di correzione, e leggi la costruzione dei task prima di fidarti della classifica. Il [[benchmark]] contiene 464 task tratti da 125 domande in 45 corsi [[higher-ed|universitari]] di oltre dieci istituzioni, limitati a item di esami e quiz a risposta libera revisionati riga per riga da un professore o da un TA, e sbilanciati verso il credito parziale — i task a punteggio pieno e a punteggio zero sono limitati al 5% ciascuno perché i modelli li trovano facili.

La classifica attuale si ferma ben al di sotto dell'accordo tra correttori umani: il modello migliore raggiunge il 57.3% di corrispondenza esatta con la rubrica, e il sito traccia l'accuratezza rispetto al costo per 1,000 risposte, dove un modello indietro di 0.8 punti costa circa un settimo. Quell'asse del costo è la parte praticamente utile, poiché la correzione è un'operazione di volume.

Per un secondo strumento, costruito in modo indipendente, vedi l'[AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) della Learning Design Alliance, impacchettato come repository aperto anziché come classifica ospitata e riassunto nello [[porcaro-ai-grading-benchmark-2026|studio di Porcaro]].

## A chi è rivolto

Docenti che decidono se lasciare che uno strumento di correzione rilasci voti senza revisione, professionisti della valutazione che scrivono requisiti di approvvigionamento e ricercatori che hanno bisogno di un obiettivo a livello di rubrica anziché di una correlazione di punteggio dei saggi.

## Note e avvertenze

GradeBench è pubblicato da Pensive, una piattaforma commerciale di correzione con IA, quindi il benchmark e il prodotto condividono lo stesso proprietario; la costruzione dei task è documentata e difendibile, ma considera l'inquadramento come quello del fornitore. Copre esami STEM con rubriche di almeno quattro item, il che esclude saggi, risposte brevi e post di discussione — i formati in cui avviene la maggior parte della correzione nelle [[humanities-education|discipline umanistiche]]. La corrispondenza esatta con la rubrica è una metrica severa: due correttori possono essere in disaccordo su un item ed entrambi avere ragione sullo studente. I punteggi descrivono versioni di modelli disponibili a novembre 2026 e cambieranno.

## Concetti collegati

- [[automated-assessment]] — la pratica che il benchmark misura
- [[assessment-validity]] — il criterio di cui un punteggio in classifica è un proxy
- [[benchmark]] — la classe più ampia di strumenti a cui appartiene
