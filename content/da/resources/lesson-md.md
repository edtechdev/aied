---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Et åbent, rentekstformat til blokbaserede eLearning-lektioner plus en agentfærdighed, der skriver lektioner, evalueringer og hele kursuspakker i det format."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**LESSON.md** er et åbent format til blokbaseret eLearning-indhold: en Markdown-fil med YAML-frontmatter og `:::`-direktiver til tekst, billeder og vidensprøver, læsbar for et menneske og parserbar for ethvert værktøj. Det findes, fordi kursusindhold normalt er låst inde i ét forfatterværktøj, og fordi [[llm|store sprogmodeller]] kun kan hjælpe med lektioner, de faktisk kan læse.

## Hvad du kan gøre med det
Skriv en lektion i en hvilken som helst teksteditor og importér den til ethvert værktøj, der understøtter formatet, uden kopiering og omformatering. Interaktive dele — multiple-choice-vidensprøver med begrænsede forsøg og feedback på svar-niveau — udtrykkes som enkle egenskaber snarere end en GUI. En tilhørende `ASSESSMENT.md` i roden af en bundle bliver kursets scorede [[assessment]]. Projektet leverer også en `lesson-md`-færdighed, der lærer Claude, Codex eller en anden [[agentic-ai|agent]] formatet, så en beskrivelse af et kursus i almindeligt sprog giver lektioner, evalueringer og en fuld bundle.

## Hvem det er til
Undervisningsdesignere og kursusproducenter, der vil have deres indhold til at overleve et værktøjsskifte, eLearning-leverandører, der vil have et import- og eksportformat, deres brugere allerede forstår, og alle, der bygger AI-assisteret forfatterskab oven på et læsbart format. Bidragydere omfatter Dan Bashaw fra LXD Integral, og formatet har en offentlig changelog op til v1.8.

## Relaterede begreper

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
