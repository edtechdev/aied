---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "Een gratis opensource-desktopapp (AGPL-3.0) waarin AI-agenten meten wat een lerende al begrijpt, een afhankelijkheidskaart naar het doel plannen, stap voor stap lesgeven en oefening aanpassen, met een blijvende kennisgraaf."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**LearnHarness** is een desktopapplicatie voor [[agentic-ai|agent-ondersteund]] leren die een les organiseert rond [[prior-knowledge|wat een lerende al begrijpt]] in plaats van rond een onderwerpenlijst. Het project beschrijft vier bewegingen: **meten**, peilen naar de ideeën waarvan het doel afhangt om te vinden waar het begrip ophoudt; **plannen**, een afhankelijkheidskaart naar het doel afleiden en die tonen als leskaart; **lesgeven**, één redeneerstap per keer doorwerken in een ritme van voorspellen–uitleggen–controleren, zodat verwarring wordt hersteld voordat er iets op wordt gebouwd; en **oefenen**, een stroom opgaven gericht op de eigen moeilijkheden van de lerende.

## Wat u ermee kunt doen

De onderscheidende invoer is het denkveld: lerenden schrijven of dicteren hun redenering en onzekerheid in plaats van alleen te antwoorden, wat het project behandelt als de manier waarop de agent redeneringen in beeld brengt en niet als een goed/fout-registratie. Het kan ook op de achtergrond vragen onderzoeken, visuele uitleg genereren en interactieve demonstraties bouwen.

Wat zich opstapelt, is een [[knowledge-graph|kennisgraaf]] van proposities en redeneerketens, teruggekoppeld naar de sessies waaruit ze komen en door latere onderwijs- en oefenagenten als context gelezen; notities kunnen worden geïmporteerd. Het project zegt dat de graaf ideeën en verbanden opslaat, geen beoordelingen van bekwaamheid.

## Voor wie het is

Zelfstandig lerenden die met moeilijk materiaal werken, en docenten of ontwikkelaars die willen zien hoe een agent-native [[intelligent-tutoring|AI-tutor]] eruitziet wanneer zijn prompts en toestand inspecteerbaar zijn. Het is TypeScript, draait vanuit de bron, en de tests zijn gedocumenteerd als deterministisch, zonder modelaanroepen.

## Opmerkingen en kanttekeningen

Gratis geldt voor de software, niet voor de inferentie: lerenden nemen hun eigen providersleutels mee, een abonnement, een lokale Claude Code CLI of elk OpenAI-compatibel eindpunt, en betalen de provider zonder opslag; een live meter schat alleen bekende API-kosten. Registraties, chats en sleutels blijven als gewone bestanden op de machine, maar het project waarschuwt dat lokale opslag geen offline verwerking betekent, omdat modelverzoeken, optioneel dicteren en webonderzoek allemaal externe diensten bereiken. De Windows x64-installer is niet ondertekend, dus Windows zal waarschuwen. Er wordt geen effectiviteitsstudie gerapporteerd, dus de zaak rust op de genoemde onderbouwing en niet op gemeten uitkomsten; de repository had ongeveer 4.800 sterren bij controle op 2 november 2026.

## Gerelateerde concepten

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
