---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Un server MCP open source che permette a Claude, Cursor, Codex e altri agenti di leggere e agire dentro Canvas LMS — strumenti per studenti, docenti e progettisti didattici, con azioni di scrittura protette e anonimizzazione opzionale dei dati degli studenti."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**Canvas MCP** è un server Model Context Protocol open source di Vishal Sachdev che collega un client di IA a un'istanza di Canvas LMS: l'agente può elencare il lavoro in arrivo di uno studente, leggere i compiti e le consegne di un corso, inviare un messaggio a una classe o verificare l'accessibilità di un corso, tutto tramite gli strumenti che il server espone anziché con uno scraping dello schermo ad hoc.

## Che cosa puoi farci

Il server offre tre famiglie di strumenti. Gli strumenti per studenti rispondono a «che cosa è in scadenza questa settimana», «ho consegnato tutto», «quanti tentativi di quiz mi restano» sugli endpoint `self` di Canvas. Gli strumenti per docenti elencano e creano compiti, leggono le consegne, correggono in blocco, inviano conversazioni ed estraggono analisi sui compiti. Gli strumenti per progettisti didattici coprono i controlli di qualità dei corsi e le scansioni di accessibilità WCAG. Sono disponibili fino a 128 strumenti in totale, anche se il profilo predefinito ne registra meno e gli strumenti con funzioni opzionali alzano il conteggio. Oltre agli strumenti, otto skill per agenti confezionano ricette multi-passo — un piano settimanale, un controllo mattutino dello stato del corso, un albero decisionale per la correzione in blocco, una pipeline di revisione tra pari, un audit del corso prima del semestre — installabili in più di 40 agenti tramite `skills.sh`.

## A chi si rivolge

Docenti che vogliono che un agente gestisca la lettura e la messaggistica di routine attorno a un corso, e [[institutional-ai-infrastructure|team istituzionali]] che valutano che cosa un agente collegato all'LMS possa davvero raggiungere. I progettisti didattici ottengono qui la cosa più vicina a una revisione automatizzata del corso. Il progetto è un esempio concreto di [[agentic-ai|strumenti agentici]] al livello dell'LMS di un singolo istituto anziché di un chatbot generico.

## Note e avvertenze

L'installazione è locale: Python 3.11 o successivo, un token e un URL API di Canvas e un client MCP, con un'estensione avviabile con doppio clic per Claude Desktop. Il server pubblico ospitato è stato ritirato, quindi una distribuzione condivisa significa self-hosting dietro l'autenticazione dell'istituzione. Gli strumenti di scrittura sono protetti: i server HTTP sono in sola lettura a meno che gli strumenti di scrittura non siano esplicitamente consentiti, le eliminazioni richiedono token di conferma e l'esecuzione di codice avviene in una sandbox che in caso di errore nega l'accesso anziché concederlo. I controlli sulla privacy sono opt-in: l'anonimizzazione delle risposte, la mascheratura delle email e il filtraggio dei dati personali devono essere attivati, e il README è attento a precisare che questi possono sostenere gli obblighi FERPA senza stabilire la conformità, che dipende dalla distribuzione e dal fornitore di IA. Non c'è telemetria nel server, ma Canvas e il client scelto mantengono i propri log. Il progetto è con licenza MIT, è sviluppato attivamente, e le sue guide sono l'autorità sui nomi correnti degli strumenti e sulla configurazione.

## Concetti collegati

- [[agentic-ai]]
- [[institutional-ai-infrastructure]]
