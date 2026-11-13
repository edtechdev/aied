---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Ett system med öppen källkod från Wharton Generative AI Labs som förvandlar en strukturerad intervju med en lärare till en körbar, anpassningsbar inlärningssimulering med egna mentor-, övnings- och återkopplingsagenter."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Primer är ett [[open-source|system med öppen källkod]] för att bygga en pedagogisk [[simulation]] genom att beskriva en lektion för en AI i stället för att programmera den. Lärarens omdöme avgör vad simuleringen lär ut: en intervju lockar fram det läraren vet om lektionen och studenterna, ett designdokument gör kunskapen granskningsbar, och ingenting byggs förrän läraren har godkänt det.

## Vad du kan göra med den

Intervjun ställer en fråga i taget: lektionen, studenternas nivå och förkunskaper, vanliga missuppfattningar, lärarens angreppssätt och hur framgång ska bedömas. Lärare kan tala eller skriva och kan ladda upp kursplaner, lektionsplaneringar eller bedömningsmallar. Det som kommer tillbaka är ett designdokument som täcker mål, scenarioförlopp, karaktärer, insatser och anpassningslogik, vilket läraren reviderar och godkänner som de skulle göra med en lektionsplanering. Fem agenter bygger det sedan: Intake, Design, Casting Director, Image Generation och Experience Builder, som sätter ihop resultatet för en student eller en hel klass.

Vid körning möter tre agenter studenten. En mentor aktiverar förkunskaper och synliggör missuppfattningar. En övningsagent spelar en rollspelsmotpart eller en elev i teachback, där studenten förklarar ett begrepp och reviderar förklaringen när den ifrågasätts. En återkopplingsagent arbetar utifrån transkriptet och diskuterar specifika ögonblick och hur lärandet bär vidare utanför scenariot. Varje agent har en karaktär i världen och ett instruktionslager som följer mål och samlar bevis, och läraren får individuella och aggregerade rapporter.

## Vem den är för

Lärare, instruktionsdesigners och fakultetsutvecklare kan beskriva en lektion i detalj utan att vilja skriva kod för den. Forskare som studerar författarskap med läraren i loopen eller [[agentic-ai|multiagentarbetsflöden]] får ett fungerande system att inspektera, och utvecklare kan bygga vidare på det, eftersom promptarna, mallarna, checklistorna, orkestreringsmönstren och TypeScript-koden alla är öppen källkod.

## Anteckningar och förbehåll

Författarna kallar Primer en experimentell prototyp snarare än en granskad klassrumsprodukt. Den har inte utvärderats som en lärande intervention i klassrum, och ingen har granskat den mot FERPA, COPPA, delstatlig studentintegritetslagstiftning eller distriktspolicy, så en institution som använder den med studenter äger den granskningen. Programvaran är MIT-licensierad och gratis, men att köra en simulering kräver modellåtkomst, vilket kostar pengar. Eftersom den är modellagnostisk och körs på lokala eller öppna viktmodeller kan den driftsättas där integritetsreglerna är striktare. En vitbok om arkitekturen och promptarna är länkad från projektsidan. Repositoriet hade 98 stjärnor och 16 forks när det kontrollerades i november 2026.

## Anslutna begrepp

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
