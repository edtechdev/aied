---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Et åpent klartekstformat for blokkbaserte e-læringsopplegg, pluss en agentferdighet som skriver opplegg, vurderinger og hele kursbunker i formatet."
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
translation_of: resources/lesson-md
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**LESSON.md** er et åpent format for blokkbasert e-læringsinnhold: en Markdown-fil med YAML-frontmatter og `:::`-direktiver for tekst, bilder og kunnskapssjekker, lesbar for et menneske og tolkbar for ethvert verktøy. Det finnes fordi kursinnhold vanligvis er innelåst i ett forfatterverktøy, og fordi [[llm|store språkmodeller]] bare kan hjelpe med leksjoner de faktisk kan lese.

## Hva du kan gjøre med det
Skrive en leksjon i en hvilken som helst tekstredigerer og importere den til et hvilket som helst verktøy som støtter formatet, uten kopiering og omformatering. Interaktive deler – flervalgssjekker med begrensede forsøk og tilbakemelding per svaralternativ – uttrykkes som enkle egenskaper snarere enn gjennom et grafisk grensesnitt. En tilhørende `ASSESSMENT.md` i roten av en pakke blir emnets poenggivende [[assessment|vurdering]]. Prosjektet leverer også en `lesson-md`-ferdighet som lærer Claude, Codex eller en annen [[agentic-ai|agent]] formatet, slik at det å beskrive et kurs på vanlig språk gir leksjoner, vurderinger og en full pakke tilbake.

## Hvem det er for
Undervisningsdesignere og kursprodusenter som vil at innholdet skal overleve et verktøyskifte, e-læringsleverandører som vil ha et import- og eksportformat brukerne deres allerede forstår, og alle som bygger AI-assistert forfatterskap på toppen av et lesbart format. Bidragsytere omfatter Dan Bashaw i LXD Integral, og formatet har en offentlig endringslogg fram til v1.8.

## Tilknyttede begreper

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
