---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Et open source-sæt på elleve Claude Code-færdigheder, der auditerer et kursus mod undervisningsdesignets evidensbase og mærker hver anbefaling med sin evidensklasse."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**idstack** er en open source-samling på elleve færdigheder til evidensbaseret [[learning-design|undervisningsdesign]], distribueret som et Claude Code-plugin med en tilhørende Chrome-sidepaneludvidelse. Færdighederne udkaster ikke et kursus — de auditerer et: de klassificerer læringsmål mod revideret Blooms taksonomi, tjekker konstruktiv sammenhæng mellem mål, aktiviteter og evalueringer, flagger problemer med kognitiv belastning og gennemgår tilgængelighed mod WCAG 2.1 AA og Universal Design for Learning. Hver anbefaling bærer en evidensklasse, fra T1 for metaanalyser og randomiserede forsøg gennem T5 for ekspertvurdering. Projektet oplyser, at dets citater trækker på 108 peer-reviewede studier på tværs af elleve forskningsdomæner; det tal er projektets egen påstand, og dets bibliografi er offentliggjort i Markdown, så en bedømmer kan tjekke det.

Kurser kommer ind via en Canvas API-forbindelse, en IMS Common Cartridge-fil, en SCORM-pakke, en PDF-eksport fra et forfatterværktøj eller indsatte dokumenter. Et fælles projektmanifest husker kurset på tværs af sessioner, og en pipeline-færdighed kæder designfaserne sammen, mens færdigt arbejde springes over. Gennemgange rapporterer mod de otte Quality Matters-standarder og Community of Inquiry-rammen, der adskiller undervisningsmæssig, social og kognitiv tilstedeværelse, og rangerer derefter anbefalingerne efter alvor.

## Det skal du vide, før du tager det i brug

Pluginet kræver Claude Code og en bash-shell at installere; PowerShell og cmd kan ikke køre opsætningsscriptet, og Python 3 anbefales til scoretrends. Kursusdata bliver i projektmappen på læserens egen maskine og forlader den kun gennem en integration, brugeren selv kalder, fx et Canvas API-kald. Chrome-udvidelsens live inferens kræver læserens egen gratis Google AI Studio-API-nøgle, selv om en simulationstilstand demonstrerer den uden. Projektet betegner sig selv som beta i version 3.5.1.0 og advarer om brydende ændringer mellem mindre versioner, og det er udgivet under savvides GitHub-kontoen snarere end af en navngivet forfatter.

## Relaterede begreper
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
