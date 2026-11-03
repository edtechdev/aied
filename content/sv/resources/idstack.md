---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "En öppen källkodssamling med elva Claude Code-skills som granskar en kurs mot instruktionsdesignens evidensbas och märker varje rekommendation med sin evidensnivå."
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
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**idstack** är en öppen källkodssamling med elva skills för evidensbaserad [[learning-design|instruktionsdesign]], distribuerad som ett Claude Code-plugin med en medföljande sidopanel i Chrome. I stället för att skriva ett kursutkast granskar skillarna en kurs: de klassificerar mål mot reviderade Blooms taxonomi, kontrollerar konstruktiv samstämmighet mellan mål, aktiviteter och bedömningar, flaggar problem med kognitiv belastning och granskar tillgänglighet mot WCAG 2.1 AA och Universal Design for Learning. Varje rekommendation bär en evidensnivå, från T1 för metaanalyser och randomiserade försök ner till T5 för expertopinion. Projektet uppger att dess citeringar bygger på 108 peer-reviewade studier inom elva forskningsdomäner; den siffran är projektets eget anspråk, och dess bibliografi publiceras i Markdown så att en granskare kan kontrollera den.

Kurser kommer in via en Canvas API-anslutning, en IMS Common Cartridge-fil, ett SCORM-paket, en PDF-export från ett författarverktyg eller inklistrade dokument. Ett delat projektmanifest minns kursen mellan sessioner, och en pipelineskill kedjar designsammanstegen och hoppar över färdigt arbete. Granskningar rapporterar mot de åtta Quality Matters-standarderna och Community of Inquiry-ramverket, med åtskillnad mellan undervisningsnärvaro, social närvaro och kognitiv närvaro, och rangordnar sedan rekommendationerna efter allvarlighetsgrad.

## Vad du bör veta innan du inför det

Pluginet kräver Claude Code och ett bash-skal för att installeras; PowerShell och cmd kan inte köra installationsskriptet, och Python 3 rekommenderas för poängutveckling. Kursdata stannar i projektmappen på läsarens egen maskin och lämnar den bara genom en integration som användaren själv anropar, som ett Canvas API-anrop. Chrometilläggens liveinferens kräver läsarens egen kostnadsfria API-nyckel från Google AI Studio, även om ett simuleringsläge demonstrerar det utan en. Projektet kallar sig beta i version 3.5.1.0 och varnar för brytande ändringar mellan minorversioner, och det publiceras under GitHub-kontot savvides snarare än av en namngiven författare.

## Anslutna begrepp
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
