---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Matt Pococks öppna samling av små, sammansättbara agentskills, bland dem en undervisningsskill över flera sessioner, en skill för obevekligt ifrågasättande och vägledning i att skriva dokument en agent kan följa."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**Skills for Real Engineers** är Matt Pococks publicerade katalog av agentskills: små, sammansättbara instruktionsfiler som installeras i Claude Code, Codex eller en annan agent och som är skrivna för att anpassas snarare än antas hela. Merparten av samlingen tjänar programvaruarbete, men flera skills är undervisningsinstrument som byggdes för att undervisa och ifrågasätta snarare än för kod.

Det tydligaste exemplet är `teach`, som löper över flera sessioner och behandlar arbetskatalogen som en tillståndsbärande undervisningsarbetsyta, så att en elevs framsteg och öppna frågor består mellan samtal i stället för att börja om varje gång. `grill-me` och dess underliggande primitiv `grilling` intervjuar användaren obevekligt om en plan tills varje gren är avgjord, vilket är [[socratic-method|sokratiskt ifrågasättande]] som en återanvändbar procedur snarare än ett samtalsläge. `wait-what` svarar i samma stund ett meddelande inte landar genom att lägga fram det igen på klarspråk med den kontext som saknades, ett grepp varje lärare känner igen från att ha sett en förklaring missa första gången. `writing-for-agents` handlar om hur man skriver dokument som en [[prompt-engineering|agent]] kan följa, vilket numera är den praktiska formen av att skriva instruktioner för [[pedagogical-agent|AI]]-kursmaterial. `to-questionnaire` omvandlar ett beslut till ett frågeformulär för den som kan svara, `handoff` komprimerar ett samtal till ett dokument som en annan agent kan fortsätta från, och `wizard` genererar en interaktiv genomgång för steg som bara en människa kan utföra.

## Vad du bör veta innan du inför det

Allt är [[open-source|öppen källkod]] under MIT och gratis att ta som utgångspunkt för lokal [[ai-literacy|AI-kompetens]] eller [[self-directed-learning|självstyrda studier]]. Användningen är stor och snabb: ungefär 270 000 stjärnor och 23 000 forks vid kontroll i september 2026, med den senaste commiten den 18 september 2026. Förbehållet gäller omfånget. Skillarna förutsätter en [[human-ai-collaboration|ingenjörs]] arbetskontext, de är ordnade i hinkarna engineering, productivity, deprecated och in-progress, så en del poster är uttryckligen oavslutade eller avvecklade, och README fungerar samtidigt som nyhetsbrevsanmälan. Behandla undervisnings- och ifrågasättandeskillarna som den överförbara delen, och räkna med att skriva om vilken som helst av dem innan du sätter en framför studenter.

## Anslutna begrepp
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
