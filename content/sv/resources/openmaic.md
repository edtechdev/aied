---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Den öppna källkodsutgåvan av MAIC: ett multiagentklassrum som gör ett ämne eller dokument till bildspel, quiz, interaktiva simuleringar och projektbaserade aktiviteter, framfört av AI-lärare och AI-klasskamrater."
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
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**OpenMAIC** är den öppna källkodsutgåvan av MAIC-multiagentklassrummet som beskrivs i [[intelligent-tutoring|MAIC-studien]]: beskriv ett ämne eller bifoga egna material och den genererar en hel lektion – bildspel, quiz, interaktiva HTML-simuleringar och projektbaserade aktiviteter – och framför den sedan genom AI-lärare och AI-klasskamrater som talar, ritar på en whiteboard och deltar i diskussion. Det är koden bakom ett klassrum som kan köras snarare än bara läsas om.

## Vad du kan göra med det

Generering med ett klick producerar en lektion på några minuter utifrån en prompt eller ett uppladdat dokument, ljud eller video. Multiagentlagret tillför klassrumsdiskussion som eleven kan delta i eller bli inkallad till, rundabordssamtal mellan personas med whiteboardillustrationer och fri fråga-svar där läraren svarar med bildspel eller diagram. Sessioner stöder bildspel, quiz, interaktiva simuleringar och PBL och exporteras som redigerbar `.pptx` eller interaktiv `.html`. Version 1.0.0 (augusti 2026) tillförde en agentarbetsbänk: en chattförst arbetsyta som planerar och reviderar hela kurser, hållbara serverbaserade sessioner som du kan avbryta, återuppta eller styra, och 24 inbyggda skills som täcker bildspel, quiz, interaktiva element, bilder, video och röster. Ett `SKILL.md`-paket låter en agentsele bygga klassrum från en meddelandeapp.

## Vem det är för

Lärare och kursteam som vill ha genererat material de fortfarande kan redigera, instruktionsdesigners som prototypar multiagentaktiviteter, och utvecklare som behöver ett självhostbart klassrum snarare än en hostad produkt. Skolor kan driftsätta det på Vercel eller med Docker, och projektet levererar en hostad demo på open.maic.chat.

## Anteckningar

Licensierat under MIT, med en användarguide på engelska och kinesiska och en aktiv gemenskap på Discord och Feishu. Det är modellneutralt: du levererar minst en nyckel till en LLM-leverantör, och valfria lokala komponenter (Lemonade för lokala modeller, FunASR för taligenkänning) låter dig köra mer av stacken offline – så ”gratis” beskriver programvaran, inte inferensräkningen. Artikeln bakom publicerades i *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), och förrådet hade mer än 38 000 stjärnor i september 2026.

## Anslutna begrepp

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
