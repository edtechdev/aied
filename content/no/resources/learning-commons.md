---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Åpen AI-infrastruktur for utdanningsprodukter: en kunnskapsgraf over standarder og læreplaner, evaluatorer for å vurdere LLM-utdata, modellagnostiske agentferdigheter for lærerarbeidsflyter og Curriculum Sync for å laste læreplaner inn i et læringsstyringssystem."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**Learning Commons** publiserer tre åpne verktøy for å legge AI-funksjoner oppå reelt læreplaninnhold — en **[[knowledge-graph|Knowledge Graph]]** over akademiske standarder, læreplaner og læringsvitenskapelig forskning, et bibliotek med **Evaluators** for å vurdere generert tekst, og modellagnostiske **[[agentic-ai|Agent Skills]]** for vanlige lærerarbeidsflyter — og driver en plattform som legger til Curriculum Sync for å laste læreplaner inn i et [[edtech-platform|læringsstyringssystem]].

## Hva du kan gjøre med den

**Tilpass generert innhold til en standard.** Knowledge Graph modellerer standarder, [[curriculum-design|læreplaner]] og forskning som entiteter og relasjoner under ett felles skjema. Et produkt kan slå opp standarden et element skal rettes mot, følge forutsetningsrelasjoner, eller forankre en tutors innhold i læreplanen den skal undervise i, uten å bygge og vedlikeholde sin egen datapipeline.

**Poengsett generert utdata før elevene ser det.** **Evaluators** måler egenskaper ved [[llm|LLM-utdata]] — tekstkompleksitet, [[feedback]], standardtilpasning og varige ferdigheter — og leveres som Python- og TypeScript-SDK-er på npm og PyPI. I praksis fungerer de som en regresjonssjekk når en prompt eller modell endres, som en sammenligning mellom kandidatmodeller, eller som et filter på genererte elementer og forklaringer.

**Pakk en lærerarbeidsflyt.** **Agent Skills** samler instruksjoner, referanser og guardrails i et åpent, modellagnostisk format: en forståelsessjekk, nivådelt differensiering av undervisningsopplegg, en standardtilpasset leksjonsplan og leksjonsforberedelse. De kan settes inn i et agentrammeverk eller leses som gjennomarbeidede maler for hvor mye struktur en pålitelig klasseromsarbeidsflyt trenger.

**Flytt en læreplan inn i et læringsstyringssystem.** Curriculum Sync er plattformtrinnet som gjør et standardkart om til noe et kurs faktisk kan bruke i LMS-et.

## Hvem den er for

Utviklere som bygger AI-funksjoner inn i produkter for læreplan og [[assessment|vurdering]], og læreplans- eller standardteamene som leverer dataene produktene tilpasses etter. [[teacher-role|Undervisere]] kan bruke Agent Skills på egen hånd, men repositoriets egen innramming er infrastruktur for folk som lager verktøy.

## Merknader og forbehold

At noe er åpent i [[open-source|kildekode]], gjør ikke dataene åpne. Koden i Knowledge Graph og Evaluators er MIT og Agent Skills er Apache-2.0, mens hvert datasett har sin egen tilgangsetikett — Open, Open + Gated eller Gated — og Gated-innhold dekkes ikke av de åpne lisensene repositoriet viser til, så sjekk datasettkatalogen før du antar gjenbruksrettigheter. Promptinnholdet i Evaluators er CC BY 4.0, men de annoterte CLEAR- og PERSUADE 2.0-korpusene de bruker, er CC BY-NC-SA 4.0. Plattformen og datasettene bak den krever en konto.

## Tilknyttede begreper

- [[curriculum-design]] — grafen finnes for å tilpasse generert innhold til standarder og læreplaner
- [[open-source]] — MIT- og Apache-2.0-kode med datalisensiering per datasett
- [[educational-nlp]] — evaluatorene er et tekstmålingslag over LLM-utdata
- [[agentic-ai]] — ferdigheter som pakker en arbeidsflyt for at en modell kan utføre den
- [[edtech-platform]] — Curriculum Sync laster læreplaner inn i et læringsstyringssystem
- [[llm]] — målet for evalueringen og forbrukeren av ferdighetene
