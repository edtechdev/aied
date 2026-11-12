---
title: "Moodle-vraagtype AI Text"
created: "2026-11-12T19:26:00-05:00"
updated: "2026-11-12T19:26:00-05:00"
type: resource
summary: "Een open-source Moodle-vraagtype (GPL v3) dat antwoorden in vrije tekst beoordeelt met een groot taalmodel op basis van een prompt per vraag en een optioneel beoordelingsschema, met OpenAI, Azure of een zelfgehost Ollama-model, en dat de AI-feedback aan een menselijke beoordelaar toont."
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
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

De meeste AI-quizintegraties sturen elk antwoord naar één vaste beoordelingsaanroep. Dit Moodle-vraagtype doet het omgekeerde: de docent schrijft de rubriek. Elke vraag bevat een **prompt** die het model vertelt hoe het het antwoord moet beoordelen en een optioneel **beoordelingsschema** dat beschrijft hoe punten worden toegekend, zodat een item 'schrijf een zin in de verleden tijd' tien punten kan geven voor geen fouten, nul voor gebroken grammatica en één punt aftrek per spelfout. Het model geeft een cijfer en [[feedback|feedback]] terug, en een docent kan die feedback naast het antwoord zien bij het handmatig nakijken.

## Wat je ermee kunt doen

Voeg een AIText-vraag toe aan elke Moodle-quiz, schrijf de prompt en het beoordelingsschema, en test prompts met een AJAX-**prompttester** in het bewerkingsformulier in plaats van door voorbeeldpogingen heen te fietsen. De beoordeling loopt via twee bijbehorende vraaggedragingen (direct en uitgesteld) die samen met het vraagtype moeten worden geïnstalleerd, wat AI-beoordeling gescheiden houdt van de kerngedragingen van Moodle; bestaande pogingen die het verouderde gedrag `interactivecountback` gebruikten, migreren bij de upgrade. Als het model onbereikbaar is, degradeert de beoordeling in plaats van een fout te geven, zodat een poging niet verloren gaat. Omdat de vraag een native quiztype is, komen resultaten in het cijferboek terecht zoals elk ander item — precies wat een cursusteam nodig heeft voordat het [[automated-assessment|automatisch beoordelen]] als proef kan behandelen in plaats van als demo.

Het ontwerp zet de rubriek ook waar de [[ai-feedback-quality|kwaliteit van feedback]] wordt bepaald: in de prompt, geschreven door de docent, in plaats van in een standaardwaarde van de leverancier. Dat is het eerlijke gebruik van de tool — criteria die je kunt inspecteren en herzien — al betekent het ook dat het kwaliteitsplafond de rubriek is, en een vage prompt levert vage beoordeling op. Instellingen grijpen ernaar bij de frequente, laagrisicocontroles waarop [[formative-assessment|formatieve toetsing]] steunt, waar anders een mens veertig korte antwoorden per avond zou lezen.

## Voor wie het bedoeld is

Moodle-beheerders en -ontwikkelaars die de site al draaien, docenten die AI-beoordeling willen zonder apart platform of commerciële licentie, en onderzoekers die een controleerbare beoordelingspijplijn nodig hebben om te bestuderen. Het vereist Moodle 4.5 of later en API-toegang tot een model — OpenAI of Azure via het AI-subsysteem van Moodle, of een zelfgehoste Ollama-instantie via Local AI Manager, wat studententekst op lokale infrastructuur houdt. De plugin wordt onderhouden door Marcus Green, staat in de Moodle-pluginsmarktplaats en had 33 sterren en 36 forks toen deze pagina werd geverifieerd.

## Notities en kanttekeningen

Open source onder GPL v3 of later, maar gratis betekent niet gratis om te draaien: iemand betaalt voor de model-API, en de kwaliteit van de beoordeling hangt af van modelkeuze en promptontwerp. Vrije-tekstantwoorden verlaten de Moodleserver wanneer een externe aanbieder wordt gebruikt, dus de dataovereenkomst van de instelling bepaalt wat mag worden verstuurd; de zelfgehoste Ollama-route bestaat voor sites die het werk van studenten niet naar buiten kunnen sturen. De repository vermeldt geen gepubliceerde nauwkeurigheids- of overeenstemmingsstudie, dus de plugin moet niet worden aangenomen in de veronderstelling dat LLM-beoordeling gelijk is aan menselijke beoordeling — [[assessment-validity|validiteit]] moet lokaal tegen menselijke scores worden vastgesteld voordat een cijfer gewicht draagt. De bijbehorende gedragingen zijn een harde afhankelijkheid: alleen het vraagtype installeren laat vragen onbeoordeelbaar.

## Gerelateerde concepten

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
