---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Otevřená infrastruktura AI pro vzdělávací produkty: graf znalostí standardů a kurikul, evaluátory pro skórování výstupu LLM, na modelu nezávislé agentní dovednosti pro učitelské pracovní postupy a Curriculum Sync pro načítání kurikul do systému pro řízení výuky."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**Learning Commons** vydává tři otevřené nástroje pro vrstvení funkcí AI na skutečný obsah kurikula — **[[knowledge-graph|graf znalostí]]** akademických standardů, kurikul a výzkumu vědy o učení, knihovnu **Evaluators** pro posuzování generovaného textu a na modelu nezávislé **[[agentic-ai|agentní dovednosti]]** pro běžné učitelské pracovní postupy — a provozuje platformu, která přidává Curriculum Sync pro načítání kurikul do [[edtech-platform|systému pro řízení výuky]].

## Co s ním můžete dělat

**Slaďte generovaný obsah se standardem.** Graf znalostí modeluje standardy, [[curriculum-design|kurikula]] a výzkum jako entity a vztahy pod jedním sdíleným schématem. Produkt může vyhledat standard, na který má položka cílit, projít vztahy předpokladů nebo ukotvit obsah tutora v kurikulu, které má učit, aniž by si stavěl a udržoval vlastní datovou pipeline.

**Ohodnoťte generovaný výstup, než ho studenti uvidí.** **Evaluators** měří vlastnosti [[llm|výstupu LLM]] — složitost textu, [[feedback]], soulad se standardy a trvalé dovednosti — a dodávají se jako Python a TypeScript SDK na npm a PyPI. V praxi slouží jako regresní kontrola při změně promptu nebo modelu, jako srovnání kandidátských modelů nebo jako filtr generovaných položek a vysvětlení.

**Zabalte učitelský pracovní postup.** **Agent Skills** spojují instrukce, reference a mantinely do otevřeného formátu nezávislého na modelu: kontrola porozumění, stupňovaná diferenciace hodiny, plán hodiny sladěný se standardy a příprava hodiny. Lze je vložit do agentního rámce nebo je číst jako hotové šablony toho, kolik struktury spolehlivý pracovní postup ve třídě potřebuje.

**Přesuňte kurikulum do systému pro řízení výuky.** Curriculum Sync je krok platformy, který mění mapu standardů v něco, co kurz může v LMS skutečně použít.

## Pro koho je určen

Vývojáři, kteří stavějí funkce AI do produktů pro kurikula a [[assessment|hodnocení]], a týmy pro kurikula či standardy, které dodávají data, k nimž se tyto produkty slaďují. [[teacher-role|Instruktoři]] mohou agentní dovednosti používat sami, ale rámování samotného repozitáře je infrastruktura pro lidi, kteří dodávají nástroje.

## Poznámky a upozornění

Otevřenost [[open-source|zdrojového kódu]] nedělá data otevřenými. Kód Knowledge Graph a Evaluators je MIT a Agent Skills pod licencí Apache-2.0, zatímco každý dataset nese vlastní označení přístupu — Open, Open + Gated nebo Gated — a obsah Gated není pokryt otevřenými licencemi, které repozitář uvádí, takže si předpokládané právo na opětovné použití ověřte v katalogu datasetů. Obsah promptů Evaluators je CC BY 4.0, ale anotované korpusy CLEAR a PERSUADE 2.0, které používá, jsou CC BY-NC-SA 4.0. Platforma a datasety za ní vyžadují účet.

## Související pojmy

- [[curriculum-design]] — graf existuje, aby sladil generovaný obsah se standardy a kurikuly
- [[open-source]] — kód MIT a Apache-2.0 s licencováním dat po jednotlivých datasetech
- [[educational-nlp]] — evaluátory jsou vrstvou měření textu nad výstupem LLM
- [[agentic-ai]] — dovednosti, které zabalí pracovní postup, jenž má model provést
- [[edtech-platform]] — Curriculum Sync načítá kurikula do systému pro řízení výuky
- [[llm]] — cíl hodnocení a konzument dovedností
