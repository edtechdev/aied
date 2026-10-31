---
title: "Code Viva"
created: "2026-10-30T12:00:00-04:00"
type: resource
summary: "Uno strumento browser gratuito che esegue una versione scritta e a tempo di una difesa orale del codice per ogni studente di un corso di programmazione, proponendo punteggi con le prove citate da far approvare al docente."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-24"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
translation_of: resources/code-viva
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---
*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Code Viva esegue una versione scritta e a tempo di una [[oral-assessment|viva]] per ogni studente di un corso
di programmazione, circa quindici-venti minuti ciascuno, senza un docente in aula. Legge il codice consegnato
da uno studente e la cronologia dei commit, scrive da quattro a sei domande sulle funzioni, i nomi e i commit
di quello studente, e dà a ogni studente un link personale da cui rispondere.

## Cosa puoi farci

Le consegne arrivano da un export Gradescope, da uno zip scaricato da Canvas, da uno zip con una cartella per
studente o da GitHub Classroom con un token di lettura. Il docente imposta durata della sessione, numero di
domande e scadenza, segna il tempo prolungato da 1,25x a 3x, e legge, modifica o sostituisce le domande
generate prima di inviare i link. Le domande coprono i casi base della ricorsione, le guardie sui bordi, le
scelte di strutture dati, i nomi di variabili opachi, scala e tracciamento, frasi dalla specifica del compito
e schemi di commit come un unico commit massivo o notturno. Le risposte tornano come codice di risposta, e la
schermata di revisione mostra ogni trascrizione accanto a un punteggio proposto da 0 a 3 con le frasi su cui
si basa, più una coda di segnalazioni ordinata per quanto una conversazione è giustificata. I risultati si
esportano in CSV, e undici corsi demo permettono a un lettore di provare l'intero ciclo su dati inventati.

## A chi è rivolto

Ai docenti di corsi di programmazione che vogliono prove che uno studente sappia spiegare il proprio codice,
e che preferirebbero parlare con una lista breve di studenti anziché con tutti; le domande sui commit ne
fanno una forma di [[process-oriented-assessment]].

## Note e avvertenze

Tutto gira nel browser: il corso sta nello storage locale con un export JSON, le domande viaggiano nella
parte di un link che i browser non inviano ai server, e le risposte tornano solo come codici che gli studenti
scelgono di inviare, quindi nessun dato degli studenti raggiunge una terza parte. Il generatore di domande è
basato su regole anziché guidato da un modello. Per ammissione dello strumento stesso il suo lettore di codice
è euristico, quindi una formattazione o una macro inusuale può nascondere una funzione, e un punteggio può
premiare la conoscenza del vocabolario anziché la comprensione del codice: è per questo che i punteggi sono
proposte che un docente approva e che lo strumento consiglia di tenere basse le poste in gioco. Non sono
pubblicate né una licenza né un repository sorgente, e poiché i link trasportano le domande arrivano a
qualche kilobyte, abbastanza da andare a capo in un riquadro di messaggio di una piattaforma di apprendimento.

## Concetti collegati

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
