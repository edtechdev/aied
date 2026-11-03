---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "En åpen Markdown-dialekt som gjør en klartekstfil om til et interaktivt kurs i nettleseren, med quizer og kjørbar kode, pluss en multiagentassistent for å bygge kurs med den."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**LiaScript** er en utvidet Markdown-dialekt pluss en tolker for den. Én klartekstfil blir et interaktivt kurs: samme dokument kan leses som en fortelling, spilles av som lysbilder eller arbeides gjennom som et kurs, alt i nettleseren. Ingenting må installeres for å skrive eller lese et.

## Hva du kan gjøre med det

Quizer kommer i de formene en lærer forventer, blant annet flervalg, matrisespørsmål, tekstinndata, nedtrekkslister og fyll-inn-tekster, skrevet direkte i Markdown. Kodeblokker kan gjøres redigerbare og kjørbare for [[cs-education|programmerings]]veiledninger, og et makrosystem pakker JavaScript-biblioteker inn i gjenbrukbare blokker, slik at interaktive diagrammer ikke krever kode fra hver forfatter. Et kurs hostes der forfatteren allerede oppbevarer tekst, uten en tjeneste å bli låst til, og alt kjører på klientsiden, så et lastet kurs virker offline. LiaScript Exporter pakker et kurs som SCORM for Moodle, ILIAS og andre [[edtech-platform|læringsadministrasjonssystemer]].

## Undervisningsagenten for å bygge kurs

Prosjektet publiserer også en **[undervisningsagent](https://github.com/LiaScript/teaching-agent)** for å forfatte LiaScript-kurs, lisensiert under Boost Software License 1.0. Fire agenter for undervisning, visuelt design, lærer gjennomgang og publisering arbeider rundt én prosjektfil som holder kursets tilstand, med en arbeidsflyt som definerer først: mål, målgruppe og didaktikk fastsettes før noe materiale skrives, og valideringsporter følger. Et utkast kan gjennomgås fra en navngitt lærerpersona for å sjekke [[cognitive-offloading|kognitiv belastning]] og forutsatt forkunnskap. Agenten er redigeringsuavhengig og genererer konfigurasjoner for Claude Code, Copilot, Codex, Cursor eller en nettsamtale fra én spesifikasjon, og repoet fungerer samtidig som et gjennomarbeidet eksempel, med et kurs i seks enheter om EUs NIS2-direktiv og et dokument som beskriver hvordan det ble laget.

## Merknader og forbehold

LiaScript er gratis, uten betalt nivå og uten kontokrav, og utvikles åpent under BSD-3-Clause, så institusjoner kan selvhoste og endre det. Funksjonen Live Classroom fortjener et blikk før du stoler på den i skala, siden sanntidssynkronisering bruker en delt tjeneste snarere enn ren lokal rendering. Undervisningsagenten er ung og lite brukt, så behandle den som en fungerende prototype snarere enn et støttet produkt.

## Tilknyttede begreper

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
