---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "En modelltopplista för utbildningsbenchmarks riktade till låg- och medelinkomstländer, som täcker pedagogik, grundläggande litteracitet, SEND, visuell matematik och flerspråkig prestation, med kolumner för pris och öppna vikter."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Fab AI utvärderar modeller på utbildningsuppgifter som spelar roll där budgetar, bandbredd och språktäckning är begränsade i de [[global-south|låg- och medelinkomstländer]] som benchmarket är byggt för, och publicerar resultaten som en sorterbar topplista i stället för en artikel. Kärntabellen poängsätter ett pedagogikbenchmark tillsammans med SEND, visuell matematik och visuellt resonemang, med separata flikar för flerspråkig pedagogik, grundläggande litteracitet och bedömning av högläsning.

## Vad du kan göra med den

Jämför ungefär 300 modeller på pedagogikpoäng som för närvarande löper från strax över 90 % ned till 21 %, och sortera sedan efter vad ett utbildningsministerium faktiskt måste väga: pris per miljon tokens, parameterantal, öppna vikter och releasedatum. Spridningen i botten är den användbara delen. Öppna modeller under 2B ligger mellan 21 % och 43 % på pedagogikbenchmarket medan frontiermodeller ligger strax över 90 %, vilket gör frågan ”kan vi köra detta offline på billig hårdvara” till en kvantifierad avvägning i stället för en gissning.

Fliken för [[multilingual-learning|flerspråkig]] pedagogik är skälet att bokmärka sidan. De flesta utbildningsbenchmarks är enbart engelska, och frågan om en modells pedagogik överlever översättning är exakt den fråga ett ministerium i ett flerspråkigt system behöver få besvarad. Data kan laddas ned som CSV, så jämförelserna kan köras om lokalt.

## Vem den är för

Beslutsfattare och upphandlingsteam som väljer modeller för nationella system, forskare som studerar [[digital-divide|åtkomstklyftan]] i AI-stödd utbildning, och utvecklare som behöver ett pedagogikmål som inte är ett engelskspråkigt prov.

## Anteckningar och förbehåll

En topplista mäter modeller på benchmarkets egna uppgifter: en hög pedagogikpoäng är evidens om de frågorna, inte om ett klassrum. Priskolumnen blandar input- och outputtokenpriser i förhållandet 3:1, vilket är ett modelleringsval och inte vad någon specifik drift kommer att kosta. Täckningen av språk och av lokalt hostade modeller rör sig när nya modeller tillkommer, och de låga poängen för små modeller speglar delvis uppgiftsformat lika mycket som förmåga. Fab AI:s inramning handlar uttryckligen om låg- och medelinkomstländer, så benchmarkets uppsättning frågor speglar det sammanhanget och bör inte läsas som en allmän utbildningsrankning. Kontrollera releasedatum: flera poster föregår den nuvarande modellgenerationen.

## Anslutna begrepp

- [[benchmark]] — den bredare klass av instrument som detta tillhör
- [[digital-divide]] — den begränsning som kolumnerna för pris och öppna vikter finns för att synliggöra
- [[equity-in-ai-education]] — den policyfråga som topplistan informerar
