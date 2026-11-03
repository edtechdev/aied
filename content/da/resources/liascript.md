---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "En åben Markdown-dialekt, der gør en ren tekstfil til et interaktivt kursus i browseren, med quizzes og kørbar kode, plus en multiagentassistent til at bygge kurser med den."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
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

**LiaScript** er en udvidet Markdown-dialekt plus en interpretator til den. Én ren tekstfil bliver et interaktivt kursus: samme dokument kan læses som en fortælling, afspilles som slides eller gennemarbejdes som et kursus, alt sammen i browseren. Intet skal installeres for at skrive eller læse et.

## Hvad du kan gøre med det

Quizzes kommer i de former, en underviser forventer, herunder multiple choice, matrixspørgsmål, tekstinput, dropdowns og tekster med huller, skrevet direkte i Markdown. Kodeblokke kan gøres redigerbare og kørbare til [[cs-education|programmerings]]tutorials, og et makrosystem pakker JavaScript-biblioteker ind i genanvendelige blokke, så interaktive diagrammer ikke kræver kode fra hver forfatter. Et kursus hostes, hvor forfatteren allerede har tekst, uden en tjeneste at låse sig til, og alt kører client-side, så et indlæst kursus virker offline. LiaScript Exporter pakker et som SCORM til Moodle, ILIAS og andre [[edtech-platform|learning management systems]].

## Undervisningsagenten til at bygge kurser

Projektet offentliggør også en **[undervisningsagent](https://github.com/LiaScript/teaching-agent)** til at forfatte LiaScript-kurser, licenseret under Boost Software License 1.0. Fire agenter til undervisning, visuelt design, elevgennemgang og udgivelse arbejder omkring én projektfil, der holder kursets tilstand, med en define-first-arbejdsgang: mål, målgruppe og didaktik fastlægges, før noget materiale skrives, og valideringsgates følger. Et udkast kan gennemgås ud fra en navngivet elevpersona for at tjekke [[cognitive-offloading|kognitiv belastning]] og antaget forhåndsviden. Agenten er editoragnostisk og genererer konfigurationer til Claude Code, Copilot, Codex, Cursor eller en webchat ud fra én specifikation, og repositoriet fungerer selv som gennemarbejdet eksempel med et kursus i seks enheder om EU's NIS2-direktiv og et dokument, der beskriver, hvordan det blev produceret.

## Noter og forbehold

LiaScript er gratis, uden betalt niveau og uden kontokrav, og udvikles åbent under BSD-3-Clause, så institutioner kan selvhoste og modificere det. Funktionen Live Classroom fortjener et kig, før du stoler på den i stor skala, da realtidssynkronisering bruger en delt tjeneste snarere end ren lokal rendering. Undervisningsagenten er ung og lidt brugt, så behandl den som en fungerende prototype snarere end et understøttet produkt.

## Relaterede begreper

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
