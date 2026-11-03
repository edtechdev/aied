---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "Een opensource-Agent Skill en een privé-editor in de browser die achttien regels voor helderder schrijven omzetten in modi voor schetsen, herschrijven en beoordelen van proza."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**Clarity** combineert een Agent Skill met een editor in de browser, beide gebouwd rond achttien regels voor schrijven dat "zijn lezer verdient". De skill installeert in codeeragenten zoals Claude Code en Codex met `npx skills add addyosmani/clarity` en werkt daarna in drie modi: de beoordelingsmodus bekritiseert een schets en laat het bestand ongemoeid, de herschrijfmodus bewerkt een schets ter plaatse, en de interviewmodus stelt de schrijver eerst vragen en schrijft mee op basis van de antwoorden. De [[feedback]] die een schrijver krijgt, is gericht op inhoud vóór stijl. De regels vragen voor wie het stuk is en wat die lezer al weet, dringen aan op beweringen boven onderwerpen en op concrete dingen boven abstracties, en behandelen opvulling als een probleem van niet weten waarvoor het stuk dient, niet van woordenschat.

De editor in de browser draait lokaal in de pagina en uploadt geen schets. Hij rapporteert de kenmerken van machinaal geschreven proza, de leesbaarheid en hiaten in de inhoud, wat hem bruikbaar maakt om tekst die een [[generative-ai|generatieve AI]] heeft geproduceerd na te kijken voordat die een lezer bereikt. Het project zegt uitdrukkelijk dat het doel schrijven is dat herkenbaar het eigene van de auteur blijft, en geen proza dat is gebouwd om [[ai-detection|AI-detectie]] te omzeilen — een onderscheid dat docenten herkennen wanneer ze beleid maken over AI-ondersteund [[writing-education|schrijfonderwijs]].

## Wat u moet weten voordat u het gebruikt

De repository publiceert een evaluatieprotocol, voor-en-na-voorbeelden in `samples/`, en referentiebestanden achter de skill, zodat een beoordelaar kan nagaan hoe de regels zich gedragen in plaats van een bewering op vertrouwen aan te nemen; de pagina hier herhaalt geen enkel gemeten resultaat. De auteur is Addy Osmani, de licentie is MIT, en het werk is onafhankelijk en geen product van een instelling. Het is jong en actief: gemaakt in augustus 2026, 54 commits, drie releases met de laatste op versie 0.2.1 in die september, en ongeveer 250 sterren bij controle in september 2026. Drie bijdragers hebben wijzigingen binnengebracht. Skill-instructies laden in een agent die de lezer al draait, dus de gebruikelijke kanttekeningen bij [[prompt-engineering|prompt engineering]] gelden: de kwaliteit van de kritiek hangt af van de schets die eraan wordt gegeven.

## Gerelateerde concepten
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
