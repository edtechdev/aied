---
title: "Skills for rigtige ingeniører"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Matt Pococks open source-samling af små, sammensættelige agentfærdigheder, herunder en undervisningsfærdighed over flere sessioner, en ubønhørlig udspørgningsfærdighed og vejledning i at skrive dokumenter, en agent kan følge."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**Skills for Real Engineers** er Matt Pococks offentliggjorte agentfærdighedskatalog: små, sammensættelige instruktionsfiler, der installeres i Claude Code, Codex eller en anden agent, skrevet til at blive tilpasset snarere end overtaget helt. Det meste af samlingen tjener softwarearbejde, men flere færdigheder er undervisningsinstrumenter, der blev bygget til undervisning og udspørgning snarere end til kode.

Det tydeligste eksempel er `teach`, som kører over flere sessioner og behandler arbejdsmappen som et tilstandsfuldt undervisningsarbejdsrum, så en elevs fremskridt og åbne spørgsmål varer ved mellem samtaler i stedet for at starte forfra hver gang. `grill-me` og dens underliggende `grilling`-primitive interviewer brugeren ubønhørligt om en plan, indtil hver gren er afklaret, hvilket er [[socratic-method|sokratisk udspørgning]] som en genanvendelig procedure snarere end en samtalestemning. `wait-what` reagerer i det øjeblik, en besked ikke lander, ved at genformidle den i et enkelt sprog med den manglende kontekst — et træk enhver underviser genkender fra at se en forklaring ramme ved siden af første gang. `writing-for-agents` dækker, hvordan man skriver dokumenter, som en [[prompt-engineering|agent]] kan følge, hvilket nu er den praktiske form for at skrive instruktioner til [[pedagogical-agent|AI]]-kursusmateriale. `to-questionnaire` omdanner en beslutning til et spørgeskema til den, der kan svare på den, `handoff` komprimerer en samtale til et dokument, en anden agent kan fortsætte fra, og `wizard` genererer en interaktiv gennemgang til trin, kun et menneske kan udføre.

## Det skal du vide, før du tager det i brug

Alt er [[open-source|open source]] under MIT og frit at tage som udgangspunkt for lokal [[ai-literacy|AI-kompetence]] eller [[self-directed-learning|selvstændigt studie]]. Udbredelsen er stor og hurtigt bevægelig: omkring 270.000 stjerner og 23.000 forks, da det blev tjekket i september 2026, med det seneste commit 18. september 2026. Forbeholdet er omfanget. Færdighederne forudsætter en [[human-ai-collaboration|ingeniørs]] arbejdskontekst, de er organiseret i bøtterne engineering, productivity, deprecated og in-progress, så nogle poster er udtrykkeligt ufærdige eller pensionerede, og README'et fungerer samtidig som nyhedsbrevstilmelding. Behandl undervisnings- og udspørgningsfærdighederne som den overførbare del, og forvent at skulle omskrive enhver af dem, før du sætter en foran elever.

## Relaterede begreper
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
