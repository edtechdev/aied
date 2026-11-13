---
title: "conText"
created: "2026-11-12T19:22:00-05:00"
updated: "2026-11-13T12:50:00-05:00"
type: resource
summary: "Un tutor gratuito nel browser che legge la foto di un quaderno, un PDF o un testo, poi accompagna lo studente socraticamente in inglese o spagnolo mentre disegna un grafo live delle idee che collega parlando."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
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

conText è la dimostrazione piccola più pulita di una direzione di cui il [[intelligent-tutoring|tutoraggio con IA]] parla molto e che raramente implementa: il modello non risponde alla domanda dello studente, pone la successiva, e le idee dello studente vengono disegnate come un grafo mentre parla. Carica la foto di una pagina di quaderno, un PDF o un testo, e lo strumento dice prima cosa ha capito, poi avvia un dialogo [[socratic-method|socratico]] parlato. Ogni idea che lo studente nomina appare come un nodo in un [[knowledge-graph|grafo della conoscenza]] live; gli archi compaiono man mano che la conversazione li collega, e il pannello riporta quante idee restano non collegate.

## Che cosa puoi farci

Il ciclo è volutamente breve. Il materiale entra (fino a 10 MB, otto pagine PDF o 15.000 caratteri di testo), il tutor lo rilegge, e la conversazione è vocale — il sito dice che il tutor non valuta e non scrive per lo studente. Il grafo è l'artefatto che rende la sessione utile anche dopo: mostra quali idee lo studente ha davvero messo in relazione e quali sono rimaste sciolte, cosa molto più specifica da rivedere di una trascrizione di chat. La sessione può essere esportata come file XML del grafo e ricaricata un altro giorno per continuare, e il pulsante di eliminazione la cancella subito; altrimenti il server la scarta dopo un'ora.

Quella combinazione — un tutor che trattiene la risposta, più un registro visivo del ragionamento — rientra pienamente in ciò che lo [[scaffolding|scaffolding]] e la riflessione [[metacognition|metacognitiva]] cercano di ottenere, e dà al docente qualcosa di concreto su cui fare domande anziché un saggio finito o un numero corretto. La cornice del sito è che un risultato corretto non prova più la comprensione quando l'IA generativa può produrlo, quindi il processo deve essere visibile.

## A chi è rivolto

Studenti che affrontano una lettura o una serie di esercizi e vogliono essere interrogati anziché ricevere risposte, docenti che vogliono un controllo a basso rischio se uno studente sa collegare le idee, e formatori di facoltà in cerca di un esempio concreto di evidenza di processo. I docenti hanno una guida allineata al curriculum in inglese, spagnolo, portoghese e francese; lo strumento stesso funziona in inglese e spagnolo, e il video di presentazione è in spagnolo.

## Note e avvertenze

Per lo strumento rivolto agli studenti non sono pubblicati prezzo né account, mentre la distribuzione istituzionale — cloud, on-premises o ibrida — è offerta tramite proposta su misura e un incontro; considera «gratuito» come lo stato della demo pubblica a novembre 2026, non una garanzia. Testi e immagini vanno a un servizio ospitato basato su Claude, e il sito stesso dice agli utenti di rimuovere nomi, importi, indirizzi e nomi di aziende prima di caricare, il che sposta l'onere dell'anonimizzazione su chi carica anziché sulla piattaforma. Le sessioni si autoeliminano dopo un'ora se non esportate. L'azienda sottostante commercializza anche una piattaforma più ampia di valutazione tramite grafi di ragionamento per le istituzioni, e le sue affermazioni sulla distinzione tra grafi deduttivi, induttivi, abduttivi e analogici provengono da quattro testi di riferimento — il sito la definisce una dimostrazione, con la validazione su larga scala ancora da venire.

## Concetti collegati

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
