---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Una classifica di modelli per benchmark educativi rivolti ai paesi a basso e medio reddito, che copre pedagogia, alfabetizzazione di base, SEND, matematica visiva e prestazioni multilingui, con colonne per prezzo e pesi aperti."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [benchmark, digital-divide, equity-in-ai-education]
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Fab AI valuta i modelli su task educativi che contano dove budget, larghezza di banda e copertura linguistica sono limitati nei [[global-south|paesi a basso e medio reddito]] per cui il benchmark è costruito, e pubblica i risultati come una classifica ordinabile anziché come un articolo. La tabella principale assegna punteggi a un benchmark di pedagogia insieme a SEND, matematica visiva e ragionamento visivo, con schede separate per pedagogia multilingue, alfabetizzazione di base e valutazione della lettura ad alta voce.

## Cosa puoi farci

Confronta circa 300 modelli su punteggi di pedagogia che attualmente vanno dalla fascia bassa dei novanta fino al 21%, poi ordina in base a ciò che un ministero dell'istruzione deve davvero soppesare: prezzo per milione di token, numero di parametri, pesi aperti e data di rilascio. La dispersione nella fascia bassa è la parte utile. I modelli aperti sub-2B si collocano tra il 21% e il 43% nel benchmark di pedagogia mentre i modelli frontier stanno nella fascia bassa dei novanta, il che trasforma «possiamo eseguirlo offline su hardware economico» in uno scambio quantificato anziché in un'ipotesi.

La scheda di pedagogia [[multilingual-learning|multilingue]] è il motivo per aggiungere la pagina ai segnalibri. La maggior parte dei benchmark educativi è solo in inglese, e la questione se la pedagogia di un modello sopravviva alla traduzione è esattamente la questione a cui un ministero in un sistema multilingue deve avere risposta. I dati sono scaricabili in CSV, quindi i confronti possono essere rieseguiti in locale.

## A chi è rivolto

Responsabili politici e team di approvvigionamento che scelgono modelli per sistemi nazionali, ricercatori che studiano [[digital-divide|il divario di accesso]] nell'istruzione supportata dall'IA e sviluppatori che hanno bisogno di un obiettivo di pedagogia che non sia un esame in lingua inglese.

## Note e avvertenze

Una classifica misura i modelli sui task del benchmark stesso: un punteggio alto in pedagogia è una prova su quegli item, non su un'aula. La colonna del prezzo combina i prezzi dei token di input e output in un rapporto 3:1, che è una scelta di modellazione e non ciò che costerà una particolare implementazione. La copertura delle lingue e dei modelli ospitati localmente cambia man mano che compaiono nuovi modelli, e i punteggi bassi dei modelli piccoli riflettono in parte il formato dei task tanto quanto la capacità. L'inquadramento di Fab AI riguarda esplicitamente i paesi a basso e medio reddito, quindi l'insieme di item del benchmark riflette quel contesto e non va letto come una classifica generale dell'istruzione. Controlla le date di rilascio: diverse voci precedono l'attuale generazione di modelli.
