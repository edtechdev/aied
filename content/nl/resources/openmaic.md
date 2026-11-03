---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "De opensource-release van MAIC: een klaslokaal met meerdere agenten dat een onderwerp of document omzet in slides, quizzen, interactieve simulaties en projectactiviteiten, gegeven door AI-docenten en AI-klasgenoten."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**OpenMAIC** is de opensource-release van het MAIC-klaslokaal met meerdere agenten dat in [[intelligent-tutoring|de MAIC-studie]] wordt beschreven: beschrijf een onderwerp of voeg uw eigen materiaal toe en het genereert een volledige les — slides, quizzen, interactieve HTML-simulaties en projectmatige activiteiten — en levert die vervolgens via AI-docenten en AI-klasgenoten die spreken, op een whiteboard tekenen en aan discussie deelnemen. Het is de code achter een klaslokaal dat kan worden gedraaid in plaats van alleen gelezen.

## Wat u ermee kunt doen

Genereren met één klik levert in enkele minuten een les op uit een prompt of een geüpload document, audio of video. De multi-agentlaag voegt klasdiscussie toe waaraan de lerende kan deelnemen of worden opgeroepen, roundtable-debatten tussen persona's met whiteboardillustraties, en vrije vraag-en-antwoord waarbij de docent antwoordt met slides of diagrammen. Sessies ondersteunen slidendecks, quizzen, interactieve simulaties en PBL, en exporteren als bewerkbare `.pptx` of interactieve `.html`. Versie 1.0.0 (augustus 2026) voegde een agentwerkbank toe: een chat-first werkruimte die hele cursussen plant en herziet, duurzame servergesteunde sessies die u kunt annuleren, hervatten of bijsturen, en 24 ingebouwde skills voor slides, quizzen, interactieve onderdelen, afbeeldingen, video en stemmen. Een `SKILL.md`-pakket laat een agentharnas klaslokalen bouwen vanuit een berichtenapp.

## Voor wie het is

Docenten en curusteams die gegenereerd materiaal willen dat ze nog kunnen bewerken, onderwijsontwerpers die activiteiten met meerdere agenten prototypen, en ontwikkelaars die een zelf te hosten klaslokaal nodig hebben in plaats van een gehost product. Scholen kunnen het uitrollen op Vercel of met Docker, en het project levert een gehoste demo op open.maic.chat.

## Opmerkingen

Gelicentieerd onder MIT, met een Engelstalige en een Chineestalige gebruikershandleiding en een actieve gemeenschap op Discord en Feishu. Het is modelneutraal: u levert ten minste één LLM-providersleutel, en optionele lokale componenten (Lemonade voor lokale modellen, FunASR voor spraakherkenning) laten u meer van de stack offline draaien — dus "gratis" beschrijft de software, niet de inferentiefactuur. Het artikel erachter verscheen in het *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), en de repository had in september 2026 meer dan 38.000 sterren.

## Gerelateerde concepten

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
