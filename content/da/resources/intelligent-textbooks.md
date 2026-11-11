---
title: "At bygge intelligente lærebøger"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Dan McCrearys open source-guide til at bygge intelligente lærebøger med søgning, navigation, ordlister, quizzes og begrebsgrafer i MkDocs Material og generativ AI, med et bibliotek af AI-genererede MicroSims."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking, misconceptions]
pedagogy: [active-learning, constructivist, self-directed-learning]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Sitet **Intelligent Textbooks** er Dan McCrearys trinvise guide til at bygge *intelligente lærebøger* — onlinelærebøger, der går ud over statiske PDF'er ved at tilføje søgning, sitenavigation, en ordliste, en indholdsfortegnelse, quizhåndtering, renderede formler, sociale medie-previews, linkkontrol og en let visualiserbar **begrebsgraf**, der viser alle begreberne i et kursus og deres afhængigheder. Guiden argumenterer for, at mange kurser i dag kan have gavn af onlinelærebøger af høj kvalitet med disse funktioner, og den viser, hvordan man bygger dem med [MkDocs](http://mkdocs.com/)-buildsystemet sammen med Material-temaet og generativ AI til at skabe og vedligeholde indholdet.

Det afgørende træk er, at lærebogen *skrives i Markdown og genereres af AI*, et konkret tilfælde af [[vibe-coding|AI-assisteret forfatterskab]] anvendt på [[curriculum-design|kursusindhold]]: i stedet for at vedligeholde et stort site i hånden beskriver du kurset og lader generativ AI producere og vedligeholde siderne, mens værktøjskæden håndterer navigation, søgning og begrebsgrafen. Et tilhørende [Claude Code Skills](https://dmccreary.github.io/ibook-skills/)-bibliotek hævder at automatisere over 90 % af de opgaver, der kræves for at bygge en niveau-2-lærebog ud fra en kursusbeskrivelse.

## En tilhørende ressource: MicroSims

Den naturlige ledsager til denne guide er McCrearys **MicroSims**-bibliotek på <https://dmccreary.github.io/microsims/> (kilde: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), som leverer de interaktive simulationer, en intelligent lærebog indlejrer. En *MicroSim* (mikrosimulation) er en enkel interaktiv simulation genereret med AI for at hjælpe undervisere med at forklare et begreb, og den kan indlejres i en intelligent lærebog eller ethvert site, der accepterer en `iframe`. MicroSims er særprægede af tre grunde: **AI-assisteret generering** (standardiserede designmønstre gør en naturligsprogsbeskrivelse af en simulation til et delbart aktiv), **universel indlejring** (et enkelt HTML-`iframe`-element placerer en i enhver side) og **gennemsigtig, modificerbar kode** (ingen black box — ét klik åbner simulationen i en webeditor, og en Creative Commons-licens lader de fleste undervisere bruge dem uden licensgebyr). Udtrykket blev opfundet af Valerie Lockhart i 2023, efter hun fandt ud af, at undervisere og studerende kunne bygge simulationer med p5.js-JavaScriptbiblioteket med lidt eller ingen træning.

Projektet offentliggør også et JSON Schema til MicroSim-metadata, så AI-værktøjer kan generere søgbare deskriptorer, med et facetteret MicroSim-register på køreplanen. En forskningsartikel, der beskriver rammen — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — ligger på arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Eksempelsimulationer omfatter Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Eulers formel og et diagram over aktieafkast, hver kørende live på sitet.

## Hvem det er til

Undervisere og undervisningsdesignere, der vil bygge eller vedligeholde en kursuslærebog, især i videregående uddannelse og professionel træning, samt undervisningsudviklere og alle, der bruger generativ AI til at forfatte undervisningsindhold. Det passer til undervisere, der er fortrolige med en Markdown-og-Git-arbejdsgang (eller villige til at lære den), og som vil have AI'en til at håndtere sitets rørføring — søgning, navigation, begrebsgraf — så de kan koncentrere sig om pædagogikken.

## Noter og forbehold

Dette er en praktikers guide og værktøjskæde, ikke et peer-reviewet studie — den præsenterer en arbejdsgang og sin egen pædagogiske begrundelse (»intelligente lærebøger guider studerende gennem begreber på deres søgen efter viden«) snarere end evidens for læringsudbytte. MicroSim-forskningsartiklen er det nærmeste på empirisk belæg, og den er selvudgivet på arXiv. Begge projekter er open source (intelligent-textbooks-repoet angiver en MIT-licens og 38 stjerner; MicroSims angiver en Creative Commons-licens og 13 stjerner) og aktivt vedligeholdt. Begrebsgrafer og ordliste-først-struktur er virkelig nyttige for findbarhed, men guiden forudsætter en temmelig teknisk forfatterarbejdsgang — MkDocs, Git og generativ-AI-værktøjer — hvilket kan være en barriere for nogle undervisere. Ved indlæsningen ligger registeret for MicroSims stadig kun på køreplanen, så at finde en bestemt eksisterende simulation afhænger af sitets egen søgning og navigation.

## Relaterede begreper

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
