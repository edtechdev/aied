---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Open-source vydání agentního doučovacího rámce DeepTutor: jeden pracovní prostor pro doučování, tvorbu otázek, procvičování mastery, výzkum a vizualizaci s prohlédnutelnou pamětí studenta."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**DeepTutor** je open-source implementace doučovacího rámce hodnoceného v [[intelligent-tutoring|studii DeepTutor]] a rozrostla se daleko za rozsah onoho článku v obecný agentní učební pracovní prostor. Doučování, řešení problémů, generování kvízů, procvičování mastery, výzkum a vizualizace sdílejí jeden runtime schopností a jeden kontext sezení, takže profil studenta vytvořený při řešení úloh podmiňuje vysvětlení a cvičení, která následují.

## Co s ním můžete dělat

Deset režimů — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading a Immersive Watching — běží na stejném runtime a čerpá z opakovaně použitelných znalostních bází, knih, konceptů, sešitů, bank otázek a person. Vyhledávání je záměrně vícemotorové: verzované knihovny RAG nad LlamaIndex, PageIndex, GraphRAG, LightRAG nebo vzdáleným serverem LightRAG, dále vlastnoručně hostovaná báze WeKnora, knihovna Tencent IMA nebo MarginNote či propojený trezor Obsidian. Paměť je prohlédnutelná, nikoli neprůhledná: stopy L1, povrchové souhrny L2 a syntéza L3 jsou viditelné a upravitelné, s grafem paměti, který každý souhrn propojuje s důkazy za ním. Binárka `deeptutor` dává terminálový REPL a streamuje NDJSON pro každého agenta, který jej chce ovládat jako nástroj, a komunita EduHub distribuuje instalovatelné dovednosti.

## Pro koho je určen

Pro vyučující a výzkumníky ve vysokém školství, kteří chtějí nasaditelnou verzi rámce, o němž článek referuje, pro vývojáře stavějící na připojitelném runtime a pro samostatně se učící studenty ochotné provozovat vlastní instanci. Dokumentace je na deeptutor.info.

## Poznámky

Licence Apache 2.0, ve verzi 1.6.9 k září 2026 a s přibližně 40 000 hvězdami na GitHubu. Zveřejněné hodnocení, které za ním stojí — průměrné zlepšení 10,8 % v personalizovaných metrikách oproti silným baseline a o 29,4 % silnější obecné agentní uvažování napříč pěti páteřními modely na benchmarku TutorBench — je shrnuto na [[zhao-deeptutor-agentic-personalized-tutoring-2026|stránce článku]], jejíž omezení platí i zde. Jako u každého open-source AI stacku dodáváte klíče k poskytovatelům modelů vy a nasazení na desktopu či serveru očekává Python 3.11 a Node.

## Související pojmy
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
