---
title: "Education Agent Skills"
created: "2026-10-14T21:55:00-04:00"
type: resource
summary: "Una libreria di 165 competenze per agenti fondate sulle evidenze, che coprono pedagogia, scienze dell'apprendimento, curricolo e valutazione, pacchettizzate per Claude, Codex e Hermes."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
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
translation_of: resources/education-agent-skills
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---
*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**Education Agent Skills** è una libreria di 165 competenze per agenti destinata a insegnanti, dirigenti scolastici e persone che costruiscono strumenti per l'educazione. Le competenze sono raggruppate in venti domini che spaziano tra pedagogia, scienze dell'apprendimento, [[curriculum-design|curricolo]], valutazione e rigenerazione, e ognuna è scritta per essere caricata da un [[agentic-ai|agente]] anziché letta come un documento.

## Cosa puoi farci

Le competenze si installano in Claude Code, Codex e Hermes, come plugin oppure copiando le cartelle, così la stessa libreria funziona su diverse superfici per agenti. Un server MCP ospitato espone la raccolta come strumenti per gli agenti che non possono installare competenze in locale, e il repository include sia un registro sia un bundle precompilato, in modo che il server possa servire la raccolta senza leggere i singoli file al momento della distribuzione.

La rivendicazione distintiva del progetto è il suo fondamento sulle evidenze: le competenze citano le evidenze su cui poggiano, e la storia del repository mostra che questa disciplina viene imposta anziché semplicemente asserita, inclusa una correzione integrata che ha rimosso un'attribuzione non supportata e ha corretto la descrizione di una misura di protezione testata in uno studio citato.

## Note e avvertenze

Le competenze didattiche, la documentazione e i materiali curricolari sono rilasciati con licenza CC BY-SA 4.0, quindi il riuso e l'adattamento sono aperti, mentre i derivati devono portare la stessa licenza. Due dettagli operativi contano se lo si distribuisce. L'endpoint MCP ospitato richiede token anziché essere aperto a chiunque, e poiché il server serve un'istantanea consolidata anziché i file SKILL.md, una competenza aggiunta senza ricostruire e consolidare il bundle non comparirà sul server attivo nemmeno dopo una ridistribuzione. La libreria è costruita da Gareth Manning, educatore e progettista curricolare, e i termini di licenza si applicano specificamente al contenuto didattico.

## Concetti collegati

[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]], [[educational-development]]

