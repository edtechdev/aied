---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "A DeepTutor ügynöki tutorálási keretrendszer nyílt forráskódú kiadása: egy munkaterület a tutoráláshoz, kérdésgeneráláshoz, elsajátítási gyakorláshoz, kutatáshoz és vizualizációhoz, átvizsgálható tanulói memóriával."
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
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

A **DeepTutor** a [[intelligent-tutoring|DeepTutor-tanulmányban]] értékelt tutorálási keretrendszer nyílt forráskódú megvalósítása, amely jóval túlnőtt a cikk hatókörén egy általános, ügynökre épülő tanulási munkaterületté. A tutorálás, a problémamegoldás, a kvízgenerálás, az elsajátítási gyakorlás, a kutatás és a vizualizáció egyetlen képességi futtatókörnyezeten és egyetlen munkamenet-kontextuson osztozik, így a problémák megoldása közben felépülő tanulói profil meghatározza az utána következő magyarázatokat és gyakorlóelemeket.

## Mire használható

Tíz mód – Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading és Immersive Watching – fut ugyanazon a futtatókörnyezeten, újrafelhasználható tudásbázisokra, könyvekre, vázlatokra, jegyzetfüzetekre, kérdésbankokra és személyekre támaszkodva. A visszakeresés szándékosan többmotoros: verziózott RAG-könyvtárak LlamaIndex, PageIndex, GraphRAG, LightRAG vagy távoli LightRAG-szerver fölött, valamint saját hosztolású WeKnora-bázis, Tencent IMA vagy MarginNote könyvtár, vagy kapcsolt Obsidian-tároló. A memória átvizsgálható, nem átláthatatlan: az L1-nyomok, az L2 felszíni összefoglalók és az L3 szintézis látható és szerkeszthető, egy Memory Graph pedig minden összefoglalót a mögötte álló bizonyítékhoz kapcsol. A `deeptutor` bináris terminál-REPL-t ad, és NDJSON-t streamel bármely ügynöknek, amely eszközként akarja vezérelni, az EduHub közösség pedig telepíthető készségeket oszt meg.

## Kinek szól

Felsőoktatási oktatók és kutatók, akik a cikkben bemutatott keretrendszer telepíthető változatát akarják, fejlesztők, akik cserélhető futtatókörnyezetre építenek, és önállóan tanulók, akik hajlandók saját példányt futtatni. A dokumentáció a deeptutor.info oldalon van.

## Megjegyzések

Apache 2.0 licenc, 2026 szeptemberében 1.6.9-es verzió, körülbelül 40 000 GitHub-csillaggal. A mögötte álló publikált értékelést – átlagosan 10,8%-os javulás a személyre szabott mérőszámokon erős alapvonalakhoz képest, és 29,4%-kal erősebb általános ügynöki következtetés öt gerincmodellen, a TutorBench benchmarkon – a [[zhao-deeptutor-agentic-personalized-tutoring-2026|cikkoldal]] foglalja össze, amelynek korlátai itt is érvényesek. Mint minden nyílt forráskódú MI-verem esetében, a modellszolgáltatói kulcsokat Ön adja, az asztali vagy szerveres telepítés pedig Python 3.11-et és Node-ot vár.

## Kapcsolódó fogalmak
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
