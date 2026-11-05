---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Åben AI-infrastruktur fra Mark Zuckerbergs og Priscilla Chans uddannelsesinitiativ: en vidensgraf over standarder, undervisningsplaner og data fra læringsvidenskab, evaluatorer til at vurdere LLM-output og modeluafhængige agent skills til lærerarbejdsgange."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**Learning Commons** er Mark Zuckerbergs og Priscilla Chans uddannelsesinitiativ, lanceret i 2025 for at føre Chan Zuckerberg Initiatives arbejde med læringsvidenskab ind i den infrastruktur, som edtech-produkter faktisk bygges på. Dets argument er infrastrukturelt snarere end pædagogisk: forskning findes, akademiske standarder findes, og undervisningsplaner af høj kvalitet findes, men de ligger i adskilte systemer, så udviklere bygger på det, der er lettest at nå. Organisationen publicerer tre åbne værktøjer på GitHub — en Knowledge Graph, et sæt Evaluators og [[agentic-ai|Agent Skills]] — og driver en platform, der tilføjer Curriculum Sync til at indlæse undervisningsplaner i et [[edtech-platform|learning management system]].

## Hvad du kan gøre med det

**Knowledge Graph** modellerer akademiske standarder, undervisningsplaner og læringsvidenskabelig forskning som entiteter og relationer under ét fælles skema, så et værktøj kan tilpasse genereret indhold til en standard uden at bygge sin egen datapipeline. **Evaluators** måler egenskaber ved [[llm|LLM-output]] gennem en læringsvidenskabelig linse — tekstkompleksitet, [[feedback]], overensstemmelse med akademiske standarder og varige kompetencer — og leveres med Python- og TypeScript-SDK'er, udgivet på npm og PyPI, til at score genereret indhold eller sammenligne kandidatmodeller. **Agent Skills** pakker instruktioner, referencer og guardrails til almindelige lærerarbejdsgange i et åbent format, der er uafhængigt af modellen: en forståelseskontrol, niveaudelt undervisningsdifferentiering, standardtilpassede lektionsplaner og lektionsforberedelse. I praksis er grafen det, der gør de to andre troværdige: indholdstilpasning er påstanden, og grafen er den reference, den kontrolleres imod.

## Hvem det er til

Udviklere, der bygger AI-funktioner ind i produkter til [[curriculum-design|undervisningsplaner]] og evaluering, og de curriculum- eller standardteams, der leverer de data, som disse produkter tilpasses til. Undervisere kan bruge agent skills på egen hånd, men repositoriets egen ramme er infrastruktur for folk, der udgiver værktøjer.

## Noter og forbehold

At være åben i [[open-source|kildekode]] gør ikke dataene åbne. Koden i Knowledge Graph er MIT, mens hvert datasæt har sin egen adgangsmærkning — Open, Open + Gated eller Gated — og Gated-indhold er udtrykkeligt ikke omfattet af de åbne licenser, som repositoriet henviser til, så tjek datasætkataloget, før du antager genbrugsrettigheder. Koden i Evaluators er MIT, og promptindholdet er CC BY 4.0, men de annoterede CLEAR- og PERSUADE 2.0-korpora, den bruger, er CC BY-NC-SA 4.0. Platformen og datasættene bag den kræver en konto. Repositorieaktivitet pr. 2026-11-04: 167 stjerner til Knowledge Graph, 88 til Evaluators, 41 til Agent Skills. Initiativet er finansieret af CZI, og dets rammesætning af problemet er finansiørens egen.

## Relaterede begreper

- [[curriculum-design]] — grafen findes for at tilpasse genereret indhold til standarder og undervisningsplaner
- [[open-source]] — MIT- og Apache-2.0-kode med datalicens pr. datasæt
- [[educational-nlp]] — evaluatorerne er et tekstmålingslag oven på LLM-output
- [[agentic-ai]] — skills, der pakker en arbejdsgang, som en model kan udføre
- [[edtech-platform]] — Curriculum Sync indlæser undervisningsplaner i et learning management system
- [[llm]] — målet for evalueringen og forbrugeren af skills
