---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "Gratis app med öppen källkod (AGPL-3.0) där AI-agenter mäter vad eleven förstår, planerar en beroendekarta till målet, undervisar ett resonemangssteg i taget, anpassar träningen och sparar en bestående kunskapsgraf."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**LearnHarness** är en skrivbordsapplikation för [[agentic-ai|agentstött]] lärande som organiserar en lektion kring [[prior-knowledge|vad en elev redan förstår]] i stället för kring en ämneslista. Projektet beskriver fyra drag: **mäta**, att pröva de idéer målet vilar på för att hitta var förståelsen tar slut; **planera**, att härleda en beroendekarta till målet och visa den som en lektionskarta; **undervisa**, att arbeta ett resonemangssteg i taget genom en rytm av förutsäga–förklara–kontrollera så att missförstånd repareras innan något byggs på dem; och **träna**, ett flöde av problem riktade mot elevens egna svårigheter.

## Vad du kan göra med den

Den särpräglade ingången är tankefältet: elever skriver eller dikterar sitt resonemang och sin osäkerhet i stället för att bara svara, vilket projektet behandlar som sättet agenten föreställer sig resonemang på snarare än som en rätt/fel-registrering. Den kan också undersöka frågor i bakgrunden, generera visuella förklaringar och bygga interaktiva demonstrationer.

Det som ackumuleras är en [[knowledge-graph|kunskapsgraf]] av påståenden och resonemangskedjor, länkade tillbaka till sina källsessioner och lästa av senare undervisnings- och träningsagenter som kontext; anteckningar kan importeras. Projektet uppger att grafen lagrar idéer och kopplingar, inte betyg på förmåga.

## Vem den är för

Självständiga lärar som arbetar med svårt material, och lärare eller utvecklare som vill se hur en agentnativ [[intelligent-tutoring|AI-handledare]] ser ut när dess promptar och tillstånd är inspekterbara. Den är skriven i TypeScript, körs från källkoden och dess tester dokumenteras som deterministiska, utan modellanrop.

## Anteckningar och förbehåll

Gratis täcker programvaran, inte inferensen: elever tar med egna leverantörsnycklar, en prenumeration, en lokal Claude Code CLI eller vilken OpenAI-kompatibel slutpunkt som helst, och betalar leverantören utan påslag; en live-mätare uppskattar bara kända API-kostnader. Poster, chattar och nycklar stannar på maskinen som vanliga filer, men projektet varnar för att lokal lagring inte betyder offlinebehandling, eftersom modellförfrågningar, valfri diktering och webbaserad research alla når externa tjänster. Installationsprogrammet för Windows x64 är osignerat, så Windows varnar. Ingen effektstudie rapporteras, så argumentet vilar på angiven motivering snarare än mätta resultat; förrådet hade ungefär 4 800 stjärnor vid kontroll den 2 november 2026.

## Anslutna begrepp

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
