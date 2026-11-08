---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Otvorená AI infraštruktúra pre vzdelávacie produkty: graf znalostí o štandardoch a vzdelávacích programoch, evaluátory na skórovanie výstupu LLM, agentové zručnosti nezávislé od modelu pre pracovné postupy učiteľov a Curriculum Sync na načítanie vzdelávacích programov do systému riadenia učenia."
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
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**Learning Commons** publikuje tri otvorené nástroje na vkladanie AI funkcií nad reálny vzdelávací obsah — **[[knowledge-graph|Knowledge Graph]]** akademických štandardov, vzdelávacích programov a výskumu vedy o učení, knižnicu **Evaluators** na posudzovanie generovaného textu a **[[agentic-ai|Agent Skills]]** nezávislé od modelu pre bežné pracovné postupy učiteľov — a prevádzkuje platformu, ktorá pridáva Curriculum Sync na načítanie vzdelávacích programov do [[edtech-platform|systému riadenia učenia]].

## Čo s tým môžete robiť

**Zlaďte generovaný obsah so štandardom.** Knowledge Graph modeluje štandardy, [[curriculum-design|vzdelávacie programy]] a výskum ako entity a vzťahy v jednej spoločnej schéme. Produkt môže vyhľadať štandard, na ktorý má položka mieriť, prejsť vzťahy predpokladov alebo ukotviť obsah tútora v programe, ktorý má učiť, bez toho, aby si staval a udržiaval vlastný dátový kanál.

**Ohodnoťte generovaný výstup skôr, než ho študenti uvidia.** **Evaluators** merajú atribúty [[llm|výstupu LLM]] — zložitosť textu, [[feedback]], zladenie so štandardmi a trvalé zručnosti — a dodávajú sa ako Python a TypeScript SDK na npm a PyPI. V praxi slúžia ako regresná kontrola pri zmene promptu alebo modelu, ako porovnanie kandidátskych modelov alebo ako filter generovaných položiek a vysvetlení.

**Zabaľte pracovný postup učiteľa.** **Agent Skills** zväzujú inštrukcie, referencie a mantinely v otvorenom formáte nezávislom od modelu: kontrola porozumenia, viacúrovňová diferenciácia hodín, plán hodiny zladený so štandardmi a príprava hodín. Dajú sa vložiť do agentového rámca alebo čítať ako vypracované šablóny toho, koľko štruktúry potrebuje spoľahlivý triedny pracovný postup.

**Presuňte vzdelávací program do systému riadenia učenia.** Curriculum Sync je platformový krok, ktorý mení mapu štandardov na niečo, čo kurz môže v LMS skutočne použiť.

## Pre koho je to určené

Vývojári, ktorí stavajú AI funkcie do produktov vzdelávacích programov a [[assessment|hodnotenia]], a tímy pre vzdelávacie programy alebo štandardy, ktoré dodávajú dáta, na ktoré sa tieto produkty zlaďujú. [[teacher-role|Inštruktori]] môžu Agent Skills používať sami, ale rámovanie samotného repozitára je infraštruktúra pre ľudí, ktorí dodávajú nástroje.

## Poznámky a výhrady

To, že je niečo [[open-source|open source]], nerobí dáta otvorenými. Kód Knowledge Graph a Evaluators je MIT a Agent Skills je Apache-2.0, pričom každá dátová sada nesie vlastný štítok prístupu — Open, Open + Gated alebo Gated — a obsah Gated nie je pokrytý otvorenými licenciami, na ktoré sa repozitár odvoláva, preto si pred predpokladaním práv na opakované použitie skontrolujte katalóg dátových sád. Obsah promptov Evaluators je CC BY 4.0, ale anotované korpusy CLEAR a PERSUADE 2.0, ktoré používa, sú CC BY-NC-SA 4.0. Platforma a dátové sady za ňou vyžadujú účet.

## Prepojené pojmy

- [[curriculum-design]] — graf existuje na zlaďovanie generovaného obsahu so štandardmi a vzdelávacími programami
- [[open-source]] — kód MIT a Apache-2.0 s licencovaním dát podľa dátovej sady
- [[educational-nlp]] — evaluátory sú vrstvou merania textu nad výstupom LLM
- [[agentic-ai]] — zručnosti, ktoré balia pracovný postup na vykonanie modelom
- [[edtech-platform]] — Curriculum Sync načíta vzdelávacie programy do systému riadenia učenia
- [[llm]] — cieľ hodnotenia a konzument zručností
