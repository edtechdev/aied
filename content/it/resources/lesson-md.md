---
title: "LESSON.md"
created: "2026-10-14T21:55:00-04:00"
type: resource
summary: "Un formato aperto in testo semplice per lezioni di eLearning a blocchi, più una agent skill che scrive lezioni, valutazioni e interi bundle di corso in quel formato."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
reviewed_by: [editor]
translation_of: "resources/lesson-md"
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---
*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**LESSON.md** è un formato aperto per contenuti di eLearning a blocchi: un file Markdown con frontmatter YAML e direttive `:::` per testi, immagini e verifiche delle conoscenze, leggibile da una persona e interpretabile da qualsiasi strumento. Esiste perché i contenuti dei corsi di solito restano rinchiusi dentro un unico strumento di authoring, e perché i [[llm|grandi modelli linguistici]] possono aiutare con le lezioni solo se riescono davvero a leggerle.

## Cosa puoi farci
Scrivere una lezione in qualsiasi editor di testo e importarla in qualsiasi strumento che supporti il formato, senza copia-incolla e riformattazione. Gli elementi interattivi — verifiche delle conoscenze a scelta multipla con limiti di tentativi e feedback a livello di risposta — sono espressi come semplici proprietà anziché tramite un'interfaccia grafica. Un `ASSESSMENT.md` compagna nella radice di un bundle diventa la [[assessment]] valutata del corso. Il progetto fornisce anche una skill `lesson-md` che insegna il formato a Claude, Codex o un altro [[agentic-ai|agente]], così da ottenere lezioni, valutazioni e un bundle completo descrivendo un corso in linguaggio naturale.

## A chi è destinato
Progettisti didattici e creatori di corsi che vogliono che i propri contenuti sopravvivano a un cambio di strumento, fornitori di eLearning che desiderano un formato di importazione ed esportazione che i loro utenti già comprendono, e chiunque costruisca authoring assistito dall'IA sopra un formato leggibile. Tra i contributori c'è Dan Bashaw di LXD Integral, e il formato ha un changelog pubblico fino alla v1.8.

## Concetti collegati

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]

