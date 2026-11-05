---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Otevřená infrastruktura AI z vzdělávací iniciativy Marka Zuckerberga a Priscilly Chan: znalostní graf standardů, kurikul a dat z vědy o učení, evaluátory pro posuzování výstupu LLM a na modelu nezávislé agentní dovednosti pro učitelské pracovní postupy."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**Learning Commons** je vzdělávací iniciativa Marka Zuckerberga a Priscilly Chan, spuštěná v roce 2025, jejímž cílem je přenést práci Chan Zuckerberg Initiative v oblasti vědy o učení do infrastruktury, na níž se edtech produkty skutečně stavějí. Její argument je infrastrukturní, nikoli pedagogický: výzkum existuje, akademické standardy existují a kvalitní kurikula existují, ale leží v oddělených systémech, takže vývojáři stavějí na tom, co je nejsnáze dostupné. Organizace publikuje tři otevřené nástroje na GitHubu — Knowledge Graph, sadu Evaluators a [[agentic-ai|Agent Skills]] — a provozuje platformu, která přidává Curriculum Sync pro načítání kurikul do [[edtech-platform|systému pro řízení výuky]].

## Co s ním můžete dělat

**Knowledge Graph** modeluje akademické standardy, kurikula a výzkum z vědy o učení jako entity a vztahy pod jedním sdíleným schématem, takže nástroj může sladit generovaný obsah se standardem, aniž by si stavěl vlastní datovou pipeline. **Evaluators** měří vlastnosti [[llm|výstupu LLM]] optikou vědy o učení — složitost textu, [[feedback]], soulad s akademickými standardy a trvalé dovednosti — a dodávají se s Python a TypeScript SDK publikovanými na npm a PyPI pro bodování generovaného obsahu nebo porovnávání kandidátských modelů. **Agent Skills** zabalují instrukce, reference a mantinely pro běžné učitelské pracovní postupy do otevřeného formátu nezávislého na modelu: kontrola porozumění, stupňovaná diferenciace hodiny, plány hodin sladěné se standardy a příprava hodiny. V praxi je graf tím, co dělá ostatní dva uvěřitelnými: sladění obsahu je tvrzení a graf je reference, proti níž se ověřuje.

## Pro koho je určen

Vývojáři, kteří stavějí funkce AI do produktů pro [[curriculum-design|kurikula]] a hodnocení, a týmy pro kurikula či standardy, které dodávají data, k nimž se tyto produkty slaďují. Instruktoři mohou agentní dovednosti používat sami, ale rámování samotného repozitáře je infrastruktura pro lidi, kteří dodávají nástroje.

## Poznámky a upozornění

Otevřenost [[open-source|zdrojového kódu]] nedělá data otevřenými. Kód Knowledge Graph je MIT, zatímco každý dataset nese vlastní označení přístupu — Open, Open + Gated nebo Gated — a obsah Gated výslovně není pokryt otevřenými licencemi, které repozitář uvádí, takže si předpokládané právo na opětovné použití ověřte v katalogu datasetů. Kód Evaluators je MIT a obsah jeho promptů CC BY 4.0, ale anotované korpusy CLEAR a PERSUADE 2.0, které používá, jsou CC BY-NC-SA 4.0. Platforma a datasety za ní vyžadují účet. Aktivita repozitářů ke dni 2026-11-04: 167 hvězd pro Knowledge Graph, 88 pro Evaluators, 41 pro Agent Skills. Iniciativa je financována CZI a její rámování problému je rámováním samotného financujícího subjektu.

## Související pojmy

- [[curriculum-design]] — graf existuje, aby sladil generovaný obsah se standardy a kurikuly
- [[open-source]] — kód MIT a Apache-2.0 s licencováním dat po jednotlivých datasetech
- [[educational-nlp]] — evaluátory jsou vrstvou měření textu nad výstupem LLM
- [[agentic-ai]] — dovednosti, které zabalí pracovní postup, jenž má model provést
- [[edtech-platform]] — Curriculum Sync načítá kurikula do systému pro řízení výuky
- [[llm]] — cíl hodnocení a konzument dovedností
