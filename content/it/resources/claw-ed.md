---
title: "Claw-ED"
created: "2026-10-14T21:58:00-04:00"
type: resource
summary: "Un assistente didattico AI local-first che trasforma il tuo curricolo in bozze di lezione modificabili, materiali per gli studenti e slide usando un modello che scegli tu."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
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
translation_of: "resources/claw-ed"
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---
*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**Claw-ED** è un assistente didattico local-first che redige lezioni a partire dai materiali del tuo curricolo. Un docente importa le proprie fonti, chiede una lezione e ottiene bozze modificabili insieme a materiali per gli studenti e slide, generati con qualunque modello scelga il docente anziché con un fornitore fisso.

## Cosa puoi farci

Il flusso di lavoro va dall'importazione alla bozza, alla revisione e all'esportazione, e le bozze sono trattate come punti di partenza che un docente modifica anziché come dispense finite. I lavori di lezione sono in coda e recuperabili, quindi una generazione lunga che fallisce può essere ripresa anziché ricominciata, e gli artefatti generati possono essere scaricati. Espone inoltre i propri strumenti a un [[agentic-ai|agente]] tramite un server MCP e può connettersi a Google Drive, così che una scuola possa integrarlo nell'archiviazione e nella pianificazione esistenti.

Il progetto è deliberatamente indipendente dal modello. Documenta fianco a fianco i modelli Ollama locali, le rotte OpenRouter economiche e le opioni ospitate, e la sua guida ai modelli è datata, il che rende chiaro che le raccomandazioni sono punti di partenza basati su un catalogo anziché giudizi di qualità valutati dai docenti.

## Note e avvertenze

Il software è gratuito e [[open-source|open source]] sotto licenza MIT per il suo codice originale, sebbene i componenti di terze parti mantengano i propri termini, ed eseguirlo significa pagare la propria inferenza di modello se si usa un modello ospitato. Il progetto si definisce una beta revisionata dai docenti e dichiara chiaramente nel proprio README che superare la sua CI non stabilisce la qualità didattica attraverso i modelli in produzione, il che è il modo giusto di leggere una suite di test verde in questo ambito: verifica il software, non la [[pedagogy|pedagogia]]. È mantenuto da MacxLabs e accetta lezioni campione revisionate dai docenti come contributi.

## Concetti collegati
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
