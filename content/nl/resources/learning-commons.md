---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Open AI-infrastructuur van het onderwijsinitiatief van Mark Zuckerberg en Priscilla Chan: een knowledge graph van standaarden, curricula en leerwetenschapsdata, evaluators om LLM-output te beoordelen, en modelagnostische agentskills voor leraarsworkflows."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**Learning Commons** is het onderwijsinitiatief van Mark Zuckerberg en Priscilla Chan, in 2025 gestart om het leerwetenschapswerk van de Chan Zuckerberg Initiative naar de infrastructuur te brengen waarop edtech-producten daadwerkelijk worden gebouwd. Het argument is infrastructureel, niet pedagogisch: onderzoek bestaat, academische standaarden bestaan en hoogwaardige curricula bestaan, maar ze zitten in gescheiden systemen, dus ontwikkelaars bouwen op wat het gemakkelijkst bereikbaar is. De organisatie publiceert drie open tools op GitHub — een Knowledge Graph, een set Evaluators en [[agentic-ai|Agent Skills]] — en beheert een platform dat Curriculum Sync toevoegt om curricula in een [[edtech-platform|learning management system]] te laden.

## Wat u ermee kunt doen

De **Knowledge Graph** modelleert academische standaarden, curricula en leerwetenschappelijk onderzoek als entiteiten en relaties onder één gedeeld schema, zodat een tool gegenereerde content aan een standaard kan uitlijnen zonder een eigen datapijplijn te bouwen. De **Evaluators** meten kenmerken van [[llm|LLM-output]] door een leerwetenschappelijke lens — tekstcomplexiteit, [[feedback]], aansluiting op academische standaarden en duurzame vaardigheden — en worden geleverd met Python- en TypeScript-SDK's, gepubliceerd op npm en PyPI, om gegenereerde content te scoren of kandidaatmodellen te vergelijken. **Agent Skills** verpakken instructies, referenties en guardrails voor gangbare leraarsworkflows in een open, modelagnostisch formaat: een begripscheck, gedifferentieerde lessen in niveaus, standaardgerichte lesplannen en lesvoorbereiding. In de praktijk maakt de graaf de andere twee geloofwaardig: contentuitlijning is de claim, en de graaf is de referentie waaraan die wordt getoetst.

## Voor wie het is

Ontwikkelaars die AI-functies bouwen in [[curriculum-design|curriculum]]- en beoordelingsproducten, en de curriculum- of standaardteams die de data leveren waarop die producten aansluiten. Docenten kunnen de agentskills zelfstandig gebruiken, maar de framing van de repository zelf is infrastructuur voor mensen die tools leveren.

## Opmerkingen en kanttekeningen

Open zijn in [[open-source|broncode]] maakt de data niet open. De code van de Knowledge Graph is MIT, terwijl elke dataset een eigen toegangslabel draagt — Open, Open + Gated of Gated — en Gated-content valt expliciet buiten de open licenties waarnaar de repository verwijst, dus controleer de datasetcatalogus voordat u hergebruikrechten aanneemt. De code van de Evaluators is MIT en de promptinhoud CC BY 4.0, maar de geannoteerde CLEAR- en PERSUADE 2.0-corpora die ze gebruiken zijn CC BY-NC-SA 4.0. Het platform en de datasets erachter vereisen een account. Repositoryactiviteit zoals gelezen op 2026-11-04: 167 sterren voor de Knowledge Graph, 88 voor Evaluators, 41 voor Agent Skills. Het initiatief wordt gefinancierd door CZI, en de framing van het probleem is die van de financier zelf.

## Gerelateerde concepten

- [[curriculum-design]] — de graaf bestaat om gegenereerde content aan standaarden en curricula uit te lijnen
- [[open-source]] — MIT- en Apache-2.0-code met datalicenties per dataset
- [[educational-nlp]] — de evaluators zijn een tekstmeetlaag over LLM-output
- [[agentic-ai]] — skills die een workflow verpakken zodat een model die uitvoert
- [[edtech-platform]] — Curriculum Sync laadt curricula in een learning management system
- [[llm]] — het doelwit van de evaluatie en de afnemer van de skills
