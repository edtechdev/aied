---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Un'applicazione web per costruire compiti di IA passo dopo passo, in cui il docente imposta il ruolo del modello e i vincoli sull'uso da parte degli studenti, e l'identità dello studente resta fuori dal contesto del modello."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Un generatore di compiti con IA integrata, creato da Joseph Slade alla Oregon State University e gestito da AI Education Labs, Inc. La premessa è che l'alternativa a un chatbot senza regole non è il divieto ma la struttura: il docente definisce i passaggi attraverso cui lo studente si muove, decide quale ruolo svolge il modello in ogni passaggio e stabilisce quanto lo studente può appoggiarsi a esso. Il compito viene poi pubblicato come link per partecipare anziché distribuito come documento di prompt.

## Che cosa puoi farci

- **Imposta il ruolo del modello per ogni compito.** Il generatore offre preset di tutor, interrogatore socratico, fornitore di feedback e assistente di ricerca, più un prompt personalizzato, così l'assistente si comporta come il compito richiede.
- **Metti vincoli tra i passaggi.** Un passaggio può richiedere allo studente di spiegare il proprio ragionamento prima di avanzare, e l'aiuto dell'IA può essere limitato per passaggio — l'interfaccia mostra un conteggio residuo anziché un accesso illimitato.
- **Scegli la superficie di lavoro.** Gli studenti scrivono su una pagina documento con commenti a margine, con layout di chat e notebook disponibili dove si adattano al compito meglio di una pagina.
- **Pubblica e osserva il ragionamento, non solo l'output.** Un link per partecipare iscrive gli studenti, i progressi si salvano man mano, e il docente può leggere la trascrizione di ogni studente ed esportarla come CSV o Markdown.
- **Bozza con l'IA, poi affina.** La configurazione può partire da poche domande, da un compito esistente caricato o da uno precedente, con un assistente lato docente che compila una prima bozza.

Gli esempi pubblicati suggeriscono la gamma prevista: un compito di fisica su prove e testimonianze, un esercizio di biologia che diagnostica l'errore di ragionamento nella spiegazione di uno stagista IA, e un compito di psicologia che verifica se una notizia descrive il disegno di uno studio.

## A chi si rivolge

Docenti nell'istruzione superiore che vogliono che la [[learning-design|progettazione didattica]] si faccia carico della politica sull'IA — cioè, che preferiscono vincolare come un modello può essere usato dentro un compito anziché sorvegliare se è stato usato. I vincoli e le impostazioni di ruolo sono un'espressione in fase di progettazione dei [[guardrails|guardrail]], e l'app è pensata per il lavoro di corso anziché per un'adozione istituzionale di chat.

## Note e avvertenze

- **Fase pilota.** I termini affermano che il servizio è attualmente fornito gratuitamente per i piloti e che piani a pagamento possono essere introdotti con preavviso, e che le funzionalità possono cambiare o essere ritirate. Non c'è una pagina pubblica dei prezzi; si arriva ai prezzi solo dopo l'accesso.
- **La dichiarazione sulla privacy è architetturale, e vale la pena leggerla da vicino.** Ogni studente riceve un identificatore di sessione casuale per compito, la mappatura dall'account studente alla sessione resta sul server di Repertoire, e il modello riceve la sessione anonima, il contesto del compito e lo scritto dello studente. L'avvertenza è nella policy stessa: il testo che uno studente digita e che lo identifica viene inviato come qualsiasi altro testo, e il docente del corso può leggere le trascrizioni.
- **Inferenza di terze parti.** Le risposte sono generate tramite l'API Claude di Anthropic con l'API di OpenAI come backup, secondo termini commerciali che la policy dice escludano l'addestramento su input e output delle API a partire da settembre 2026. Un'istituzione dovrebbe confermarlo tramite il proprio accordo anziché tramite una pagina web.
- **Non è un valutatore.** La policy e i termini descrivono entrambi i giudizi dell'assistente, come «obiettivo raggiunto», come ausili per il docente; i voti e le decisioni accademiche restano al docente e all'istituzione, e le decisioni sulla [[ai-use-disclosure|dichiarazione dell'uso dell'IA]] agli studenti sono lasciate al docente.
- **Ospitato negli Stati Uniti.** I dati risiedono in Google Cloud Firestore con hosting Vercel, e la policy affronta gli obblighi FERPA dove il servizio gestisce registri educativi; agli utenti fuori dagli Stati Uniti viene detto che i loro dati sono elaborati lì.

## Concetti collegati

- [[learning-design]] — la progettazione strutturata dei compiti come punto in cui la politica sull'IA diventa concreta.
- [[guardrails]] — vincoli di partecipazione e aiuto IA limitato come restrizioni in fase di progettazione.
- [[ai-use-disclosure]] — è il docente, non la piattaforma, a decidere come viene dichiarato l'uso dell'IA agli studenti.
