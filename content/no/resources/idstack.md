---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Et sett med elleve ferdigheter for Claude Code med åpen kildekode som reviderer et emne mot evidensgrunnlaget for undervisningsdesign, og merker hver anbefaling med sitt evidensnivå."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**idstack** er en samling med åpen kildekode av elleve ferdigheter for evidensbasert [[learning-design|undervisningsdesign]], distribuert som en Claude Code-plugin med en tilhørende sidepanelutvidelse for Chrome. I stedet for å utkaste et kurs reviderer ferdighetene ett: de klassifiserer læringsmål mot revidert Blooms taksonomi, sjekker konstruktiv sammenheng mellom mål, aktiviteter og vurderinger, flagger problemer med kognitiv belastning og reviderer tilgjengelighet mot WCAG 2.1 AA og Universal Design for Learning. Hver anbefaling bærer et evidensnivå, fra T1 for metaanalyser og randomiserte forsøk til T5 for ekspertvurdering. Prosjektet oppgir at sitatene bygger på 108 fagfellevurderte studier på tvers av elleve forskningsdomener; tallet er prosjektets egen påstand, og bibliografien er publisert i Markdown så en gransker kan kontrollere den.

Emner kommer inn gjennom en Canvas API-tilkobling, en IMS Common Cartridge-fil, en SCORM-pakke, en PDF-eksport fra et forfatterverktøy eller innlimte dokumenter. Et delt prosjektmanifest husker emnet mellom økter, og en pipeline-ferdighet kjeder sammen designfasene mens den hopper over fullført arbeid. Vurderingene rapporterer mot de åtte Quality Matters-standardene og Community of Inquiry-rammeverket, med skille mellom undervisningsmessig, sosial og kognitiv tilstedeværelse, og rangerer deretter anbefalingene etter alvorlighetsgrad.

## Hva du bør vite før du tar den i bruk

Pluginen krever Claude Code og et bash-skall for å installeres; PowerShell og cmd kan ikke kjøre oppsettsskriptet, og Python 3 anbefales for poengtrender. Kursdata blir liggende i prosjektmappen på leserens egen maskin og forlater den bare gjennom en integrasjon brukeren selv kaller opp, for eksempel et Canvas API-kall. Chrome-utvidelsens live-inferens trenger leserens egen gratis API-nøkkel fra Google AI Studio, selv om en simuleringsmodus demonstrerer den uten. Prosjektet kaller seg beta i versjon 3.5.1.0 og advarer om brytende endringer mellom minorversjoner, og det er publisert under GitHub-kontoen savvides snarere enn av en navngitt forfatter.

## Tilknyttede begreper

[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
