---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Ett gratis webbverktyg som kör en skriftlig, tidsatt variant av ett muntligt kodförsvar för varje student i en programmeringskurs och föreslår poäng med citerade belägg för lärarens godkännande."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
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

Code Viva kör en skriftlig, tidsatt variant av en [[oral-assessment|viva]] för varje student i en programmeringskurs, ungefär femton till tjugo minuter var, utan lärare i rummet. Det läser studentens inlämnade kod och commit-historik, skriver fyra till sex frågor om just den studentens funktioner, namn och commits, och ger varje student en personlig länk att svara från.

## Vad du kan göra med det

Inlämningar kommer från en Gradescope-export, en Canvas-nedladdning som zip, en zip med en mapp per student, eller GitHub Classroom med en läsningstoken. Läraren ställer in sessionens längd, antal frågor och deadline, markerar förlängd tid vid 1,25x till 3x, och läser, redigerar eller ersätter de genererade frågorna innan länkarna skickas. Frågorna täcker basfall i rekursion, kantvakter, val av datastruktur, ogenomskinliga variabelnamn, skala och spårning, meningar ur uppgiftens specifikation samt commit-mönster som en enda bulkcommit eller en sen nattlig commit. Svaren kommer tillbaka som en svarskod, och granskningsvyn visar varje transkript bredvid en föreslagen poäng från 0 till 3 med de meningar den vilar på, plus en kö av flaggor ordnad efter hur mycket ett samtal är motiverat. Resultat exporteras till CSV, och elva demokurser låter en läsare prova hela slingan på påhittade data.

## Vem det är för

Lärare i programmeringskurser som vill ha belägg för att en student kan förklara sin egen kod, och som hellre talar med en kort lista studenter än med alla; commit-frågorna gör det till en form av [[process-oriented-assessment]].

## Anteckningar och förbehåll

Allt körs i webbläsaren: kursen ligger i local storage med en JSON-export, frågor färdas i den del av en länk som webbläsare inte skickar till servrar, och svar kommer bara tillbaka som koder studenterna väljer att skicka, så inga studentdata når en tredje part. Frågegeneratorn är regelbaserad snarare än modelldriven. Enligt verktygets egen beskrivning är dess kodläsare heuristisk, så ovanlig formatering eller makron kan dölja en funktion, och en poäng kan belöna att man kan vokabulären snarare än att man förstår koden, vilket är skälet till att poäng är förslag som en lärare godkänner och till att det råder att hålla insatserna låga. Ingen licens och inget källkodsförråd publiceras, och eftersom länkarna bär frågorna blir de några kilobyte, tillräckligt långa för att radbrytas i en meddelanderuta i ett lärplattformssystem.

## Anslutna begrepp

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
