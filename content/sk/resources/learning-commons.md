---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Otvorená AI infraštruktúra zo vzdelávacej iniciatívy Marka Zuckerberga a Priscilly Chan: graf znalostí o štandardoch, vzdelávacích programoch a dátach z vedy o učení, evaluátory na posudzovanie výstupu LLM a agentové zručnosti nezávislé od modelu pre pracovné postupy učiteľov."
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
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**Learning Commons** je vzdelávacia iniciatíva Marka Zuckerberga a Priscilly Chan, spustená v roku 2025, aby preniesla prácu Chan Zuckerberg Initiative v oblasti vedy o učení do infraštruktúry, na ktorej sa edtech produkty skutočne stavajú. Jej argument je infraštruktúrny, nie pedagogický: výskum existuje, akademické štandardy existujú a existujú aj kvalitné vzdelávacie programy, ale sedia v oddelených systémoch, takže vývojári stavajú na tom, čo je najľahšie dostupné. Organizácia publikuje tri otvorené nástroje na GitHube — Knowledge Graph, sadu Evaluators a [[agentic-ai|Agent Skills]] — a prevádzkuje platformu, ktorá pridáva Curriculum Sync na načítanie vzdelávacích programov do [[edtech-platform|systému riadenia učenia]].

## Čo s tým môžete robiť

**Knowledge Graph** modeluje akademické štandardy, vzdelávacie programy a výskum vedy o učení ako entity a vzťahy v jednej spoločnej schéme, takže nástroj môže zladiť generovaný obsah so štandardom bez toho, aby si staval vlastný dátový kanál. **Evaluators** merajú atribúty [[llm|výstupu LLM]] cez optiku vedy o učení — zložitosť textu, [[feedback]], zladenie s akademickými štandardmi a trvalé zručnosti — a dodávajú sa s Python a TypeScript SDK, publikovanými na npm a PyPI, na skórovanie generovaného obsahu alebo porovnávanie kandidátskych modelov. **Agent Skills** balia inštrukcie, referencie a mantinely pre bežné pracovné postupy učiteľov v otvorenom formáte nezávislom od modelu: kontrola porozumenia, viacúrovňová diferenciácia hodín, plány hodín zladené so štandardmi a príprava hodín. V praxi je to graf, čo robí tie druhé dve dôveryhodnými: zladenie obsahu je tvrdenie a graf je referencia, voči ktorej sa overuje.

## Pre koho je to určené

Vývojári, ktorí stavajú AI funkcie do produktov [[curriculum-design|vzdelávacích programov]] a hodnotenia, a tímy pre vzdelávacie programy alebo štandardy, ktoré dodávajú dáta, na ktoré sa tieto produkty zlaďujú. Inštruktori môžu agentové zručnosti používať sami, ale rámovanie samotného repozitára je infraštruktúra pre ľudí, ktorí dodávajú nástroje.

## Poznámky a výhrady

To, že je niečo otvorené v [[open-source|zdrojovom kóde]], nerobí dáta otvorenými. Kód Knowledge Graph je MIT, pričom každá dátová sada nesie vlastný štítok prístupu — Open, Open + Gated alebo Gated — a obsah Gated výslovne nie je pokrytý otvorenými licenciami, na ktoré sa repozitár odvoláva, preto si pred predpokladaním práv na opakované použitie skontrolujte katalóg dátových sád. Kód Evaluators je MIT a jeho obsah promptov CC BY 4.0, ale anotované korpusy CLEAR a PERSUADE 2.0, ktoré používa, sú CC BY-NC-SA 4.0. Platforma a dátové sady za ňou vyžadujú účet. Aktivita repozitára prečítaná 2026-11-04: 167 hviezd pre Knowledge Graph, 88 pre Evaluators, 41 pre Agent Skills. Iniciatívu financuje CZI a jej rámovanie problému je rámovaním financovateľa.

## Prepojené pojmy

- [[curriculum-design]] — graf existuje na zlaďovanie generovaného obsahu so štandardmi a vzdelávacími programami
- [[open-source]] — kód MIT a Apache-2.0 s licencovaním dát podľa dátovej sady
- [[educational-nlp]] — evaluátory sú vrstvou merania textu nad výstupom LLM
- [[agentic-ai]] — zručnosti, ktoré balia pracovný postup na vykonanie modelom
- [[edtech-platform]] — Curriculum Sync načíta vzdelávacie programy do systému riadenia učenia
- [[llm]] — cieľ hodnotenia a konzument zručností
