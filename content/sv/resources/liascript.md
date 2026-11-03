---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "En öppen Markdown-dialekt som förvandlar en vanlig textfil till en interaktiv kurs i webbläsaren, med quiz och körbar kod, plus en multiagentassistent för att bygga kurser med den."
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
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**LiaScript** är en utökad Markdown-dialekt plus en tolk för den. En vanlig textfil blir en interaktiv kurs: samma dokument kan läsas som en berättelse, spelas som bildspel eller arbetas igenom som en kurs, allt i webbläsaren. Inget behöver installeras för att skriva eller läsa en.

## Vad du kan göra med den

Quiz kommer i de former en lärare förväntar sig, bland annat flerval, matrisfrågor, textinmatning, rullistor och lucktexter, skrivna direkt i Markdown. Kodblock kan göras redigerbara och körbara för handledningar i [[cs-education|programmering]], och ett makrosystem lindar in JavaScript-bibliotek i återanvändbara block så att interaktiva diagram inte kräver kod från varje författare. En kurs hostas där författaren redan förvarar text, utan någon tjänst att låsas in i, och allt körs klientsidigt, så en inläst kurs fungerar offline. LiaScript Exporter paketerar en som SCORM för Moodle, ILIAS och andra [[edtech-platform|lärplattformar]].

## Undervisningsagenten för att bygga kurser

Projektet publicerar också en **[undervisningsagent](https://github.com/LiaScript/teaching-agent)** för att författa LiaScript-kurser, licensierad under Boost Software License 1.0. Fyra agenter för undervisning, visuell design, elevgranskning och publicering arbetar kring en enda projektfil som håller kursens tillstånd, med ett arbetsflöde som definierar först: mål, målgrupp och didaktik fastställs innan något material skrivs, och valideringsgrindar följer. Ett utkast kan granskas utifrån en namngiven elevpersona för att kontrollera [[cognitive-offloading|kognitiv belastning]] och förkunskaper som antas. Agenten är redigeraroberoende och genererar konfigurationer för Claude Code, Copilot, Codex, Cursor eller en webbchatt utifrån en specifikation, och förrådet fungerar samtidigt som ett genomarbetat exempel med en kurs i sex enheter om EU:s NIS2-direktiv och ett dokument som beskriver hur den togs fram.

## Anteckningar och förbehåll

LiaScript är gratis, utan betalnivå och utan kontokrav, och utvecklas öppet under BSD-3-Clause, så lärosäten kan självhosta och ändra det. Funktionen Live Classroom förtjänar en titt innan du förlitar dig på den i stor skala, eftersom realtidssynkroniseringen använder en delad tjänst snarare än enbart lokal rendering. Undervisningsagenten är ung och lite använd, så behandla den som en fungerande prototyp snarare än en produktsatt tjänst.

## Anslutna begrepp

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
