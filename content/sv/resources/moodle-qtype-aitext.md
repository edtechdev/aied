---
title: "Moodle-frågetypen AI Text"
created: "2026-11-12T11:32:00-05:00"
updated: "2026-11-12T12:15:00-05:00"
type: resource
summary: "En frågetyp med öppen källkod för Moodle (GPL v3) som betygsätter fritextsvar med en stor språkmodell mot en prompt per fråga och ett valfritt bedömningsschema, med OpenAI, Azure eller en självdriftad Ollama-modell, och visar AI:ns återkoppling för en mänsklig bedömare."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

De flesta AI-integrationer för quiz skickar varje svar till ett fast bedömningsanrop. Den här Moodle-frågetypen gör det motsatta: läraren skriver bedömningskriterierna. Varje fråga bär en **prompt** som talar om för modellen hur svaret ska utvärderas och ett valfritt **bedömningsschema** som beskriver hur poäng ges, så en uppgift som ”skriv en mening i preteritum” kan ange tio poäng för inga fel, noll för trasig grammatik och en poängs avdrag per stavfel. Modellen returnerar en poäng och [[feedback|återkoppling]], och en lärare kan se den återkopplingen bredvid svaret när den bedömer för hand.

## Vad du kan göra med den

Lägg till en AIText-fråga i vilket Moodle-quiz som helst, skriv prompten och bedömningsschemat, och testa promptar med en AJAX-**prompttestare** i redigeringsformuläret i stället för att pröva sig fram genom förhandsgranskningar. Bedömningen körs genom två medföljande frågebeteenden (omedelbart och uppskjutet) som måste installeras tillsammans med frågetypen, vilket håller AI-bedömningen isolerad från Moodles kärnbeteenden; befintliga försök som använde det äldre beteendet `interactivecountback` migreras vid uppgradering. Om modellen inte går att nå degraderar bedömningen i stället för att ge fel, så ett försök går inte förlorat. Eftersom frågan är en inbyggd quiztyp hamnar resultaten i betygsboken som vilken annan post som helst – vilket är vad ett kursteam behöver innan det kan behandla [[automated-assessment|automatisk poängsättning]] som en pilot i stället för en demo.

Designen lägger också bedömningskriterierna där [[ai-feedback-quality|återkopplingskvaliteten]] avgörs: i prompten, skriven av läraren, i stället för i en leverantörsstandard. Det är den ärliga användningen av verktyget – kriterier du kan granska och revidera – men det betyder också att kvalitetstaket är bedömningsschemat, och en vag prompt ger vag bedömning. Institutioner tar till den för de lågrisk-, täta kontroller som [[formative-assessment|formativ bedömning]] bygger på, där en människa annars skulle läsa fyrtio korta svar per kväll.

## Vem den är för

Moodle-administratörer och utvecklare som redan driver sajten, lärare som vill ha AI-bedömning utan en separat plattform eller kommersiell licens, och forskare som behöver en kontrollerbar bedömningspipeline att studera. Den kräver Moodle 4.5 eller senare och API-åtkomst till en modell – antingen OpenAI eller Azure via Moodles AI-undersystem, eller en självdriftad Ollama-instans via Local AI Manager, vilket håller studenttexten på lokal infrastruktur. Insticksmodulen underhålls av Marcus Green, finns på Moodles plugin-marknadsplats och hade 33 stjärnor och 36 forks när den här sidan verifierades.

## Noteringar och förbehåll

Öppen källkod under GPL v3 eller senare, men gratis betyder inte gratis att driva: någon betalar för modellens API, och bedömningens kvalitet beror på modellval och promptdesign. Fritextsvar lämnar Moodle-servern när en extern leverantör används, så institutionens dataavtal styr vad som får skickas; den självdriftade Ollama-vägen finns för sajter som inte kan skicka studentarbete ut. Repot anger ingen publicerad noggrannhets- eller överensstämmelsestudie, så insticksmodulen bör inte införas med antagandet att LLM-bedömning motsvarar mänsklig bedömning – [[assessment-validity|validitet]] måste fastställas lokalt mot mänskliga poäng innan någon betygspoäng väger något. De medföljande beteendena är ett hårt beroende: att installera enbart frågetypen lämnar frågor utan betygsättning.

## Anslutna begrepp

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
