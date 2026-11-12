---
title: "Tipo di domanda AI Text per Moodle"
created: "2026-11-12T19:26:00-05:00"
updated: "2026-11-12T19:26:00-05:00"
type: resource
summary: "Un tipo di domanda Moodle open source (GPL v3) che valuta risposte in testo libero con un modello linguistico di grandi dimensioni rispetto a un prompt per domanda e a uno schema di punteggio opzionale, usando OpenAI, Azure o un modello Ollama auto-ospitato e mostrando il feedback dell'IA a un valutatore umano."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
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

La maggior parte delle integrazioni di quiz con IA invia ogni risposta a una chiamata di valutazione fissa. Questo tipo di domanda Moodle fa il contrario: il docente scrive la rubrica. Ogni domanda porta un **prompt** che dice al modello come valutare la risposta e uno **schema di punteggio** opzionale che descrive come vengono assegnati i punti, così una voce «scrivi una frase al passato» può specificare dieci punti per nessun errore, zero per grammatica scorretta e un punto in meno per ogni errore di ortografia. Il modello restituisce un voto e un [[feedback|feedback]], e il docente può vedere quel feedback accanto alla risposta quando corregge a mano.

## Che cosa puoi farci

Aggiungi una domanda AIText a qualsiasi quiz Moodle, scrivi il prompt e lo schema di punteggio, e prova i prompt con un **prompt tester** AJAX nel modulo di modifica anziché passare per tentativi di anteprima. La valutazione passa per due comportamenti della domanda complementari (immediato e differito) che devono essere installati insieme al tipo di domanda, il che tiene la valutazione IA separata dai comportamenti core di Moodle; i tentativi esistenti che usavano il comportamento legacy `interactivecountback` migrano all'aggiornamento. Se il modello non è raggiungibile, la valutazione degrada anziché andare in errore, così un tentativo non va perso. Poiché la domanda è un tipo di quiz nativo, i risultati finiscono nel registro dei voti come qualsiasi altro elemento — che è ciò di cui ha bisogno un team di corso prima di poter trattare la [[automated-assessment|valutazione automatica]] come progetto pilota invece che come demo.

Il design mette anche la rubrica dove si decide la [[ai-feedback-quality|qualità del feedback]]: nel prompt, scritto dal docente, anziché in un valore predefinito del fornitore. Questo è l'uso onesto dello strumento — criteri che puoi ispezionare e rivedere — anche se significa anche che il tetto di qualità è la rubrica, e un prompt vago produce una valutazione vaga. Le istituzioni vi ricorrono per i controlli frequenti a basso rischio da cui dipende la [[formative-assessment|valutazione formativa]], dove altrimenti una persona leggerebbe quaranta risposte brevi a notte.

## A chi è rivolto

Amministratori e sviluppatori Moodle che già gestiscono il sito, docenti che vogliono una valutazione IA senza una piattaforma separata o una licenza commerciale, e ricercatori che hanno bisogno di una pipeline di valutazione controllabile da studiare. Richiede Moodle 4.5 o successivo e accesso API a un modello — OpenAI o Azure tramite il sottosistema IA di Moodle, oppure un'istanza Ollama auto-ospitata tramite Local AI Manager, che tiene il testo degli studenti su infrastruttura locale. Il plugin è mantenuto da Marcus Green, è sul marketplace dei plugin Moodle, e aveva 33 stelle e 36 fork quando questa pagina è stata verificata.

## Note e avvertenze

Open source con GPL v3 o successiva, ma gratuito non significa gratuito da gestire: qualcuno paga l'API del modello, e la qualità della valutazione dipende dalla scelta del modello e dal design del prompt. Le risposte in testo libero lasciano il server Moodle quando si usa un fornitore remoto, quindi l'accordo sui dati dell'istituzione determina cosa può essere inviato; la via Ollama auto-ospitata esiste per i siti che non possono mandare fuori il lavoro degli studenti. Il repository non dichiara alcuno studio pubblicato su accuratezza o concordanza, quindi il plugin non va adottato presumendo che la valutazione LLM equivalga a quella umana — la [[assessment-validity|validità]] va stabilita localmente rispetto ai voti umani prima che qualsiasi voto abbia peso. I comportamenti complementari sono una dipendenza obbligatoria: installare solo il tipo di domanda lascia domande non valutabili.

## Concetti collegati

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
