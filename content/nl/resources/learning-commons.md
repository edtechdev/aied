---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Open AI-infrastructuur voor onderwijsproducten: een knowledge graph van standaarden en curricula, evaluators om LLM-output te beoordelen, modelagnostische agentskills voor leraarsworkflows en Curriculum Sync om curricula in een learning management system te laden."
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
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**Learning Commons** publiceert drie open tools om AI-functies bovenop echte curriculumcontent te zetten — een **[[knowledge-graph|Knowledge Graph]]** van academische standaarden, curricula en leerwetenschappelijk onderzoek, een bibliotheek met **Evaluators** om gegenereerde tekst te beoordelen, en modelagnostische **[[agentic-ai|Agent Skills]]** voor gangbare leraarsworkflows — en beheert een platform dat Curriculum Sync toevoegt om curricula in een [[edtech-platform|learning management system]] te laden.

## Wat u ermee kunt doen

**Lijn gegenereerde content uit op een standaard.** De Knowledge Graph modelleert standaarden, [[curriculum-design|curricula]] en onderzoek als entiteiten en relaties onder één gedeeld schema. Een product kan de standaard opzoeken waarop een item zich moet richten, prerequisite-relaties doorlopen, of de content van een tutor verankeren in het curriculum dat die hoort te onderwijzen, zonder een eigen datapijplijn te bouwen en te onderhouden.

**Scoor gegenereerde output voordat studenten die zien.** De **Evaluators** meten kenmerken van [[llm|LLM-output]] — tekstcomplexiteit, [[feedback]], aansluiting op standaarden en duurzame vaardigheden — en worden geleverd als Python- en TypeScript-SDK's op npm en PyPI. In de praktijk werken ze als regressiecontrole wanneer een prompt of model verandert, als vergelijking tussen kandidaatmodellen, of als filter op gegenereerde items en uitleg.

**Verpak een leraarsworkflow.** **Agent Skills** bundelen instructies, referenties en guardrails in een open, modelagnostisch formaat: een begripscheck, gedifferentieerde lessen in niveaus, een standaardgericht lesplan en lesvoorbereiding. Ze kunnen in een agentframework worden geplaatst of gelezen worden als uitgewerkte templates voor hoeveel structuur een betrouwbare klasworkflow nodig heeft.

**Verplaats een curriculum naar een learning management system.** Curriculum Sync is de platformstap die een standaardenkaart omzet in iets wat een cursus daadwerkelijk in de LMS kan gebruiken.

## Voor wie het is

Ontwikkelaars die AI-functies bouwen in producten voor curriculum en [[assessment|beoordeling]], en de curriculum- of standaardteams die de data leveren waarop die producten aansluiten. [[teacher-role|Docenten]] kunnen de Agent Skills zelfstandig gebruiken, maar de framing van de repository zelf is infrastructuur voor mensen die tools leveren.

## Opmerkingen en kanttekeningen

Open zijn in [[open-source|broncode]] maakt de data niet open. De code van de Knowledge Graph en de Evaluators is MIT en Agent Skills is Apache-2.0, terwijl elke dataset een eigen toegangslabel draagt — Open, Open + Gated of Gated — en Gated-content valt niet onder de open licenties waarnaar de repository verwijst, dus controleer de datasetcatalogus voordat u hergebruikrechten aanneemt. De promptinhoud van de Evaluators is CC BY 4.0, maar de geannoteerde CLEAR- en PERSUADE 2.0-corpora die ze gebruiken zijn CC BY-NC-SA 4.0. Het platform en de datasets erachter vereisen een account.

## Gerelateerde concepten

- [[curriculum-design]] — de graaf bestaat om gegenereerde content aan standaarden en curricula uit te lijnen
- [[open-source]] — MIT- en Apache-2.0-code met datalicenties per dataset
- [[educational-nlp]] — de evaluators zijn een tekstmeetlaag over LLM-output
- [[agentic-ai]] — skills die een workflow verpakken zodat een model die uitvoert
- [[edtech-platform]] — Curriculum Sync laadt curricula in een learning management system
- [[llm]] — het doelwit van de evaluatie en de afnemer van de skills
