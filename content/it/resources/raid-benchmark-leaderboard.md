---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Una classifica pubblica di rilevatori di testo IA valutati su RAID, un benchmark costruito per testare la robustezza rispetto a modelli, domini, impostazioni di decodifica e attacchi avversari."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
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

RAID è il benchmark dietro la maggior parte delle affermazioni serie sul [[ai-detection|rilevamento del testo IA]], e la sua classifica è il posto dove verificare se l'accuratezza pubblicata di un rilevatore sopravvive a un cambio di modello, dominio, impostazione di decodifica o attacco deliberato. Le voci sono valutate sul test set e possono essere inviate da chiunque segua la procedura di invio del repository.

## Cosa puoi farci

Filtra per dominio — abstract, libri, notizie, poesia, ricette, Reddit, recensioni, wiki — per strategia di decodifica (greedy o sampling), per penalità di ripetizione e per attacco avversario, inclusi spazi bianchi, omoglifi, sostituzione di sinonimi, parafrasi, spazi a larghezza zero ed eliminazione di articoli. Poi confronta un rilevatore tra le metriche: AUROC, TPR a un tasso di falsi positivi del 5% e TPR all'1%.

Quell'insieme di filtri è il punto. Un rilevatore che segna vicino a 1.000 in aggregato può crollare una volta che il testo è stato parafrasato o il modello sorgente cambia, e la classifica ti permette di vedere il crollo prima che un'istituzione vi punti sopra un caso di [[academic-integrity|illecito]]. La colonna dei falsi positivi all'1% conta di più nell'istruzione, perché su scala istituzionale un tasso di errore dell'1% significa centinaia di studenti accusati ingiustamente.

## A chi è rivolto

Ricercatori che valutano metodi di rilevamento, amministratori che scrivono politiche che potrebbero fare riferimento a un rilevatore e docenti che vogliono una risposta concreta a «si può rilevare?» prima di dirlo in un syllabus.

## Note e avvertenze

Il benchmark misura il rilevamento di testo generato da macchine, non gli illeciti: uno studente che usa l'IA per pianificare, strutturare o revisionare produce testo che i rilevatori non sono stati costruiti per catturare, e uno studente che [[language-learning|scrive in una seconda lingua]] è un noto rischio di falso positivo che una classifica non può mostrare. RAID è un artefatto di ricerca mantenuto da un team accademico; la copertura segue i modelli generatori nel suo test set, quindi i modelli più recenti possono essere sottorappresentati finché il benchmark non viene aggiornato. La classifica ordina i rilevatori, non le pratiche di gestione dei dati dei loro fornitori, e un AUROC alto non dice nulla sul fatto che inviare il lavoro degli studenti a quel servizio sia lecito o etico nella tua giurisdizione.

## Concetti collegati

- [[ai-detection]] — la famiglia di metodi che il benchmark valuta
- [[academic-integrity]] — il contesto di policy in cui i punteggi dei rilevatori vengono usati
- [[benchmark]] — la classe più ampia di strumenti a cui appartiene
