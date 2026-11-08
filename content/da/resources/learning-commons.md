---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Åben AI-infrastruktur til uddannelsesprodukter: en vidensgraf over standarder og undervisningsplaner, evaluatorer til at score LLM-output, modeluafhængige agent skills til lærerarbejdsgange og Curriculum Sync til at indlæse undervisningsplaner i et learning management system."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**Learning Commons** udgiver tre åbne værktøjer til at lægge AI-funktioner oven på rigtigt undervisningsindhold — en **[[knowledge-graph|vidensgraf]]** over akademiske standarder, undervisningsplaner og forskning i læringsvidenskab, et bibliotek af **Evaluators** til at vurdere genereret tekst og modeluafhængige **[[agentic-ai|agent skills]]** til almindelige lærerarbejdsgange — og driver en platform, der tilføjer Curriculum Sync til at indlæse undervisningsplaner i et [[edtech-platform|learning management system]].

## Hvad du kan gøre med det

**Tilpas genereret indhold til en standard.** Vidensgrafen modellerer standarder, [[curriculum-design|undervisningsplaner]] og forskning som entiteter og relationer under ét fælles skema. Et produkt kan slå den standard op, som et element skal ramme, følge forudsætningsrelationer eller forankre en tutors indhold i den undervisningsplan, den skal undervise efter, uden at bygge og vedligeholde sin egen datapipeline.

**Vurdér genereret output, før eleverne ser det.** **Evaluators** måler egenskaber ved [[llm|LLM-output]] — tekstkompleksitet, [[feedback]], standardoverensstemmelse og varige kompetencer — og leveres som Python- og TypeScript-SDK'er på npm og PyPI. I praksis fungerer de som en regressionskontrol, når en prompt eller model ændres, som en sammenligning på tværs af kandidatmodeller eller som et filter på genererede elementer og forklaringer.

**Pak en lærerarbejdsgang.** **Agent Skills** samler instruktioner, referencer og guardrails i et åbent format, der er uafhængigt af modellen: en forståelseskontrol, niveaudelt undervisningsdifferentiering, en standardtilpasset lektionsplan og lektionsforberedelse. De kan lægges ind i et agentframework eller læses som gennemarbejdede skabeloner for, hvor meget struktur en pålidelig klasseværelsesarbejdsgang kræver.

**Flyt en undervisningsplan ind i et learning management system.** Curriculum Sync er platformstrinnet, der gør et standardkort til noget, et kursus faktisk kan bruge i LMS'et.

## Hvem det er til

Udviklere, der bygger AI-funktioner ind i produkter til undervisningsplaner og [[assessment|evaluering]], og de curriculum- eller standardteams, der leverer de data, som disse produkter tilpasses til. [[teacher-role|Undervisere]] kan bruge agent skills på egen hånd, men repositoriets egen ramme er infrastruktur for folk, der udgiver værktøjer.

## Noter og forbehold

At være åben i [[open-source|kildekode]] gør ikke dataene åbne. Koden i Knowledge Graph og Evaluators er MIT, og Agent Skills er Apache-2.0, mens hvert datasæt har sin egen adgangsmærkning — Open, Open + Gated eller Gated — og Gated-indhold er ikke omfattet af de åbne licenser, som repositoriet henviser til, så tjek datasætkataloget, før du antager genbrugsrettigheder. Promptindholdet i Evaluators er CC BY 4.0, men de annoterede CLEAR- og PERSUADE 2.0-korpora, den bruger, er CC BY-NC-SA 4.0. Platformen og datasættene bag den kræver en konto.

## Relaterede begreper

- [[curriculum-design]] — grafen findes for at tilpasse genereret indhold til standarder og undervisningsplaner
- [[open-source]] — MIT- og Apache-2.0-kode med datalicens pr. datasæt
- [[educational-nlp]] — evaluatorerne er et tekstmålingslag oven på LLM-output
- [[agentic-ai]] — skills, der pakker en arbejdsgang, som en model kan udføre
- [[edtech-platform]] — Curriculum Sync indlæser undervisningsplaner i et learning management system
- [[llm]] — målet for evalueringen og forbrugeren af skills
