---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "En fältguide för lärare till att bygga en statisk undervisningswebbplats med en AI-kodningsassistent: tre Markdown-instruktionsfiler för design, säkerhet och elevers integritet, med läsbara guider och ett nedladdningsbart paket."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**The Vibe-Coding Center** är Miguel Guhlins gratis fältguide för en lärare som vill [[vibe-coding|vibe-koda]] en liten statisk undervisningssajt med en AI-kodningsassistent – en exit ticket, ett quiz, en klassportfolio – utan att skicka med en exponerad API-nyckel eller elevdata på köpet.

## Vad du kan göra med den

Tre instruktionsfiler bär vägledningen: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` och `securevcc.md`. Ladda ner dem till en projektrot, fyll i mallen för projektbrief och be sedan assistenten läsa och tillämpa alla tre; guiden är tydlig med att närvaro inte är aktivering, så filerna måste namnges i förfrågan. Läsbara guider förklarar var och en, inklusive en genomgång av ”tre väsentliga kontroller innan du delar”: samla in mindre elevdata, granska en exponerad API-nyckel och anpassa ett verktygs design till dess lärandeuppgift. Det kompletta paketet lägger till själva sajten, promptpaket, lanseringsgranskning och ombyggnadsskript, med ett SHA-256-manifest för nedladdningen.

Den medföljande sidan [EduSynth Hub-exempel](https://mguhlin.github.io/funquiz/examples.html) visar resultaten som fungerande statiska verktyg i stället för skärmbilder: en generator för exit tickets som skriver en fråga på en vald nivå i SOLO-taxonomin, en studentportfolio som är en enda HTML-fil på GitHub Pages och ett sökbart bibliotek med resurser för kompetensutveckling, allt som körs på klientsidan utan LMS-inloggning.

## Vem den är för

Lärare och [[learning-design|instruktionsdesigners]] i K-12 och högre utbildning som kan beskriva verktyget de vill ha och är villiga att kontrollera vad assistenten producerade. Den passar också en institution som vill ha en gemensam checklista innan någon publicerar ett elevvänt verktyg, och lärare som undervisar i [[ai-literacy|AI-kompetens]] genom att bygga i stället för genom kritik.

## Anteckningar och förbehåll

Centret är vägledning, inte en efterlevnadsprodukt: sajten gör inget anspråk på överensstämmelse med sitt eget WCAG 2.2 AA-mål, svarar nej på frågan ”gör användningen av dessa filer min sajt kompatibel?” och säger att en teknisk granskning inte ersätter skolans godkännande eller juridisk granskning. Säkerhetshyllan pekar på axe-core, Gitleaks, ZAP och Playwright; de är referenser snarare än medföljande programvara, och de invasiva är avsedda för ett tillfälligt eller uttryckligen auktoriserat mål. Läsning kräver inget konto. Att bygga om HTML-sidorna kräver Python och `markdown-it-py`, vilket är ett byggberoende och inte ett beroende för besökaren. Repot är MIT-licensierat, medan tredjepartsbilder och de länkade projekten behåller sina egna villkor, dokumenterade i `CREDITS.md`.

## Anslutna begrepp

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
