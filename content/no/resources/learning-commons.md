---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Åpen AI-infrastruktur fra Mark Zuckerbergs og Priscilla Chans utdanningsinitiativ: en kunnskapsgraf over standarder, læreplaner og læringsvitenskapelige data, evaluatorer for å vurdere LLM-utdata, og modellagnostiske agentferdigheter for lærerarbeidsflyter."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**Learning Commons** er Mark Zuckerbergs og Priscilla Chans utdanningsinitiativ, lansert i 2025 for å føre Chan Zuckerberg Initiatives arbeid med læringsvitenskap inn i infrastrukturen som edtech-produkter faktisk bygges på. Argumentet er infrastrukturelt snarere enn pedagogisk: forskning finnes, akademiske standarder finnes, og læreplaner av høy kvalitet finnes, men de ligger i separate systemer, så utviklere bygger på det som er lettest å nå. Organisasjonen publiserer tre åpne verktøy på GitHub — en Knowledge Graph, et sett med Evaluators og [[agentic-ai|Agent Skills]] — og driver en plattform som legger til Curriculum Sync for å laste læreplaner inn i et [[edtech-platform|læringsstyringssystem]].

## Hva du kan gjøre med den

**Knowledge Graph** modellerer akademiske standarder, læreplaner og læringsvitenskapelig forskning som entiteter og relasjoner under ett felles skjema, slik at et verktøy kan tilpasse generert innhold til en standard uten å bygge sin egen datapipeline. **Evaluators** måler egenskaper ved [[llm|LLM-utdata]] gjennom en læringsvitenskapelig linse — tekstkompleksitet, [[feedback]], tilpasning til akademiske standarder og varige ferdigheter — og leveres med Python- og TypeScript-SDK-er, publisert på npm og PyPI, for å score generert innhold eller sammenligne kandidatmodeller. **Agent Skills** pakker instruksjoner, referanser og guardrails for vanlige lærerarbeidsflyter i et åpent, modellagnostisk format: en forståelsessjekk, nivådelt differensiering av undervisningsopplegg, standardtilpassede leksjonsplaner og leksjonsforberedelse. I praksis er grafen det som gjør de to andre troverdige: innholdstilpasning er påstanden, og grafen er referansen den kontrolleres mot.

## Hvem den er for

Utviklere som bygger AI-funksjoner inn i [[curriculum-design|læreplan]]- og vurderingsprodukter, og læreplans- eller standardteamene som leverer dataene produktene tilpasses etter. Undervisere kan bruke agentferdighetene på egen hånd, men repositoriets egen innramming er infrastruktur for folk som lager verktøy.

## Merknader og forbehold

At noe er åpent i [[open-source|kildekode]], gjør ikke dataene åpne. Koden i Knowledge Graph er MIT, mens hvert datasett har sin egen tilgangsetikett — Open, Open + Gated eller Gated — og Gated-innhold er uttrykkelig ikke dekket av de åpne lisensene repositoriet viser til, så sjekk datasettkatalogen før du antar gjenbruksrettigheter. Evaluator-koden er MIT og promptinnholdet CC BY 4.0, men de annoterte CLEAR- og PERSUADE 2.0-korpusene den bruker, er CC BY-NC-SA 4.0. Plattformen og datasettene bak den krever en konto. Repositorieaktivitet slik den ble lest 2026-11-04: 167 stjerner for Knowledge Graph, 88 for Evaluators, 41 for Agent Skills. Initiativet er finansiert av CZI, og dets innramming av problemet er finansierens egen.

## Tilknyttede begreper

- [[curriculum-design]] — grafen finnes for å tilpasse generert innhold til standarder og læreplaner
- [[open-source]] — MIT- og Apache-2.0-kode med datalisensiering per datasett
- [[educational-nlp]] — evaluatorene er et tekstmålingslag over LLM-utdata
- [[agentic-ai]] — ferdigheter som pakker en arbeidsflyt for at en modell kan utføre den
- [[edtech-platform]] — Curriculum Sync laster læreplaner inn i et læringsstyringssystem
- [[llm]] — målet for evalueringen og forbrukeren av ferdighetene
