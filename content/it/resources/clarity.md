---
title: "Clarity"
created: "2026-10-14T21:57:00-04:00"
type: resource
summary: "Un Agent Skill open source e un editor privato nel browser che trasformano diciotto regole per una scrittura più chiara in modalità di bozza, riscrittura e revisione per la prosa."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
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
translation_of: "resources/clarity"
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---
*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**Clarity** abbina un Agent Skill a un editor nel browser, entrambi costruiti attorno a diciotto regole per una scrittura che "si guadagna il lettore". L'abilità si installa in agent di codifica come Claude Code e Codex con `npx skills add addyosmani/clarity`, e poi funziona in tre modalità: la modalità revisione critica una bozza e lascia il file intatto, la modalità riscrittura modifica una bozza sul posto, e la modalità intervista fa prima domande all'autore e co-scrive a partire dalle risposte. Il [[feedback|feedback]] che uno scrittore riceve è rivolto alla sostanza prima che allo stile. Le regole chiedono per chi è il pezzo e cosa già sa il lettore, spingono ad affermazioni anziché a soggetti e a specifici anziché ad astrazioni, e trattano il riempimento come un problema di non sapere a cosa serve il pezzo piuttosto che come un problema di vocabolario.

L'editor nel browser gira localmente nella pagina e non carica alcuna bozza. Segnala gli indizi della prosa scritta da macchina, la leggibilità e le lacune di sostanza, il che lo rende utile per rivedere il testo che un'[[generative-ai|IA generativa]] ha prodotto prima che raggiunga un lettore. Il progetto afferma esplicitamente che l'obiettivo è una scrittura che resta riconoscibilmente dell'autore stesso, anziché prosa ingegnerizzata per superare il [[ai-literacy|rilevamento dell'IA]], una distinzione che i docenti riconosceranno quando stabiliscono una politica sulla [[writing-education|scrittura]] assistita dall'IA.

## Cosa sapere prima di adottarlo

Il repository pubblica un protocollo di valutazione, campioni prima/dopo in `samples/` e file di riferimento dietro l'abilità, così che un revisore possa ispezionare come si comportano le regole anziché fidarsi di un'affermazione; la pagina qui non riporta alcun risultato misurato. L'autore è Addy Osmani, la licenza è MIT, e il lavoro è indipendente anziché un prodotto di un'istituzione. È giovane e attivo: creato nell'agosto 2026, 54 commit, tre release con l'ultima alla versione 0.2.1 in quel settembre, e circa 250 stelle al controllo del settembre 2026. Tre contributori hanno fatto arrivare modifiche. Le istruzioni dell'abilità si caricano in un agente che il lettore già esegue, quindi valgono le solite avvertenze sul [[prompt-engineering|prompt engineering]]: la qualità della critica dipende dalla bozza che le viene consegnata.

## Concetti collegati
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
