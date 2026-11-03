---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Open-source vydanie agentického doučovacieho rámca DeepTutor: jeden pracovný priestor na doučovanie, tvorbu otázok, precvičovanie osvojenia, výskum a vizualizáciu, s prehľadnou pamäťou študenta."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**DeepTutor** je open-source implementácia doučovacieho rámca hodnoteného v [[intelligent-tutoring|štúdii DeepTutor]] a výrazne prerástla rozsah toho článku do všeobecného učebného pracovného priestoru postaveného na agentoch. Doučovanie, riešenie problémov, tvorba kvízov, precvičovanie osvojenia, výskum a vizualizácia zdieľajú jedno runtime schopností a jeden kontext sedenia, takže profil študenta vytvorený pri riešení úloh podmieňuje vysvetlenia a cvičenia, ktoré nasledujú.

## Čo s tým môžete robiť

Desať režimov — Chat, Kladenie otázok, Kvíz, Výskum, Vizualizácia, Riešenie, Štúdium kurzu, Cesta osvojenia, Ponorené čítanie a Ponorené sledovanie — beží na tom istom runtime a čerpá zo znovupoužiteľných vedomostných báz, kníh, konceptov, notebookov, bánk otázok a person. Vyhľadávanie je zámerne viacmotorové: verzované knižnice RAG nad LlamaIndex, PageIndex, GraphRAG, LightRAG alebo vzdialeným serverom LightRAG, plus samohostovaná báza WeKnora, knižnica Tencent IMA alebo MarginNote či prepojený trezor Obsidian. Pamäť je prehľadná, nie nepriehľadná: stopy L1, povrchové zhrnutia L2 a syntéza L3 sú viditeľné a upraviteľné, pričom Memory Graph spája každé zhrnutie s dôkazmi za ním. Binárka `deeptutor` dáva terminálový REPL a streamuje NDJSON pre každého agenta, ktorý ju chce ovládať ako nástroj, a komunita EduHub distribuuje inštalovateľné zručnosti.

## Pre koho je to určené

Pre vysokoškolských vyučujúcich a výskumníkov, ktorí chcú nasaditeľnú verziu rámca, o ktorom článok referuje, pre vývojárov stavajúcich na zapojiteľnom runtime a pre samostatne sa učiacich, ktorí sú ochotní prevádzkovať vlastnú inštanciu. Dokumentácia je na deeptutor.info.

## Poznámky

Licencia Apache 2.0, vo verzii 1.6.9 k septembru 2026 s približne 40 000 hviezdami na GitHube. Zverejnené hodnotenie za ním — priemerné zlepšenie 10,8 % v personalizovaných metrikách oproti silným základným modelom a o 29,4 % silnejšie všeobecné agentické uvažovanie naprieč piatimi základnými modelmi, na benchmarku TutorBench — je zhrnuté na [[zhao-deeptutor-agentic-personalized-tutoring-2026|stránke článku]], ktorej obmedzenia platia aj tu. Ako pri každom open-source AI zásobníku, kľúče poskytovateľa modelu dodávate vy a nasadenie na desktope alebo serveri očakáva Python 3.11 a Node.

## Prepojené pojmy
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
