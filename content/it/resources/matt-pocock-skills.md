---
title: "Competenze per veri ingegneri"
created: "2026-10-14T22:10:00-04:00"
type: resource
summary: "Matt Pocock's open-source collection of small, composable agent skills, including a multi-session teaching skill, a relentless questioning skill, and guidance on writing documents an agent can follow."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
reviewed_by: [editor]
translation_of: "resources/matt-pocock-skills"
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**Competenze per veri ingegneri** (Skills for Real Engineers) è il catalogo di agent skills pubblicato da Matt Pocock: piccoli file di istruzioni componibili che si installano in Claude Code, Codex o un altro agente, scritti per essere adattati anziché adottati per intero. La maggior parte della raccolta serve al lavoro di sviluppo software, ma diverse skill sono strumenti educativi, costruiti per insegnare e per interrogare anziché per scrivere codice.

L'esempio più evidente è `teach`, che si sviluppa su più sessioni e tratta la directory di lavoro come uno spazio didattico dotato di stato, così i progressi dello studente e le domande ancora aperte persistono tra una conversazione e l'altra invece di azzerarsi ogni volta. `grill-me` e il suo primitivo di base `grilling` sottopongono l'utente a un interrogatorio incessante su un piano finché ogni ramificazione non è risolta: è il [[socratic-method|metodo socratico]] inteso come procedura riutilizzabile anziché come tono conversazionale. `wait-what` interviene nel momento in cui un messaggio non arriva, riformulandolo in linguaggio semplice con il contesto mancante, una mossa che qualsiasi docente riconosce per aver visto una spiegazione non atterrare al primo colpo. `writing-for-agents` tratta di come scrivere documenti che un [[prompt-engineering|agente]] può seguire, che è oggi la forma pratica di scrivere istruzioni per materiale didattico basato sull'[[pedagogical-agent|AI]]. `to-questionnaire` trasforma una decisione in un questionario per chi può rispondere, `handoff` comprime una conversazione in un documento da cui un altro agente può continuare, e `wizard` genera un percorso interattivo per i passaggi che solo una persona può compiere.

## Cosa sapere prima di adottarla

Tutto è [[open-source|open source]] sotto licenza MIT e liberamente utilizzabile come punto di partenza per l'alfabetizzazione sull'[[ai-literacy|AI]] a livello locale o per lo [[self-directed-learning|studio autonomo]]. L'adozione è ampia e in rapida evoluzione: circa 270.000 stelle e 23.000 fork al controllo di settembre 2026, con il commit più recente il 18 settembre 2026. L'avvertenza riguarda l'ambito. Le skill presumono il contesto di lavoro di un [[human-ai-collaboration|ingegnere]], sono organizzate in categorie di ingegneria, produttività, deprecate e in lavorazione, quindi alcune voci sono esplicitamente incomplete o ritirate, e il README funge anche da modulo di iscrizione alla newsletter. Considerate le skill di insegnamento e di interrogatorio come la parte trasferibile, e aspettatevi di dover riscrivere qualsiasi di esse prima di metterla di fronte a studenti.

## Concetti collegati
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
