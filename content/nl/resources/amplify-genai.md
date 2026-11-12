---
title: "Amplify GenAI"
created: "2026-11-12T19:20:00-05:00"
updated: "2026-11-12T19:20:00-05:00"
type: resource
summary: "Vanderbilts MIT-gelicenseerde enterpriseplatform voor generatieve AI, uitgerold in het eigen AWS-account van een instelling: aangepaste assistenten op lokale documenten, retrieval-augmented antwoorden, delen binnen de organisatie en kostenadministratie tot op het niveau van het individuele bericht."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
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

Amplify GenAI is de tegenovergestelde gok ten opzichte van een campusbrede licentie op een commerciële assistent: de instelling draait het platform zelf, in haar eigen Amazon Web Services-account, en betaalt voor wat ze gebruikt. Vanderbilt bouwde het voor de eigen gemeenschap, bracht het onder MIT uit in drie repositories en biedt het nu aan andere organisaties aan als alternatief voor enterprisecontracten per zitplaats — het argument is dat het dure deel de modellen zou moeten zijn, niet het aantal zitplaatsen.

## Wat je ermee kunt doen

Gebruikers bouwen aangepaste assistenten door documenten te uploaden of databronnen te koppelen, en de assistenten antwoorden met [[rag|retrieval-augmented generation]] op dat materiaal in plaats van alleen vanuit de algemene training. Assistenten kunnen binnen de organisatie worden gedeeld, in één gesprek aan elkaar worden gekoppeld en voorzien van promptsjablonen; het platform produceert ook PowerPoint- en Word-bestanden, diagrammen en visualisaties. Beheerders krijgen wat een gedeelde dienst nodig heeft: kostenadministratie tot op berichtniveau, limieten per gebruiker, mappen en werkruimten, en SSO, allemaal in een uitrol die de instelling zelf beheert.

De ontwerpbeslissing die er voor een [[higher-ed|college]] het meest toe doet, is het kostenmodel. Vanderbilt meldt dat het bij 1.300 proefgebruikers ongeveer \$3 per gebruiker per maand kostte, inclusief AWS, en dat de helft van die gebruikers minder dan \$1 per maand aan tokens verbruikte — cijfers die de universiteit als casestudy presenteert, niet als geauditeerde benchmark. Facturering op verbruik beloont een campus waar een minderheid van de gebruikers het meeste werk doet, wat de normale vorm van AI-adoptie is, en maakt de vraag van de financiële afdeling ('wat kost dit per student?') beantwoordbaar uit logs in plaats van uit een contract.

## Voor wie het bedoeld is

Centrale IT en CIO-kantoren die al workloads in AWS draaien en een door de gemeenschap gedragen alternatief willen voor een commerciële enterprise-assistent; docenten die assistenten nodig hebben die op cursusmateriaal zijn gebaseerd zonder dat naar het consumentenproduct van een leverancier te sturen; en instellingen die één plek willen om te zien wat mensen met modellen doen. Omdat het in het eigen account van de instelling wordt uitgerold, wordt de vraag naar datalocatie beantwoord door de uitrol en niet door de belofte van een leverancier.

## Notities en kanttekeningen

Gratis om te licenseren, niet gratis om te draaien: de instelling betaalt AWS en de modelaanbieders. Modelkeuze loopt via Amazon Bedrock (Anthropic, Mistral) of OpenAI en Microsoft Azure, en het draaien van eigen lokale modellen is niet geïmplementeerd. Het project zegt ronduit dat het individuele uitrollen niet kan ondersteunen en verwijst organisaties naar commerciële partners — de realistische kosten omvatten dus personeel of een contractor. Het is een uitrol van drie repositories (frontend, backend, infrastructuur) met tientallen sterren in plaats van duizenden, en de kostenvergelijking hierboven is Vanderbilts eigen ervaring, geen gecontroleerd onderzoek. Instellingen die inferentie liever op eigen hardware houden, kunnen naar [MindRouter](/aied/resources/mindrouter/) kijken en de twee samen lezen: Amplify is een applicatielaag boven modellen van leveranciers, MindRouter is een gateway boven je eigen GPU's.

## Gerelateerde concepten

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
