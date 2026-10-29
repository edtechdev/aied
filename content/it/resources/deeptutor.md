---
title: "DeepTutor"
created: "2026-10-14T21:55:00-04:00"
type: resource
summary: "Il rilascio open-source del framework di tutoring agentico DeepTutor: un unico spazio di lavoro per tutoring, generazione di domande, pratica sulla padronanza, ricerca e visualizzazione, con una memoria dello studente ispezionabile."
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
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---
*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**DeepTutor** è l'implementazione open-source del framework di tutoring valutato nello [[intelligent-tutoring|studio DeepTutor]], ed è cresciuto ben oltre l'ambito di quell'articolo, fino a diventare uno spazio di lavoro per l'apprendimento nativamente basato su agenti. Tutoring, risoluzione di problemi, generazione di quiz, pratica sulla padronanza, ricerca e visualizzazione condividono un unico runtime delle capacità e un unico contesto di sessione, perciò il profilo dello studente costruito mentre risolve i problemi condiziona le spiegazioni e gli elementi di pratica che seguono.

## Cosa puoi farci

Dieci modalità — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading e Immersive Watching — girano sullo stesso runtime, attingendo a basi di conoscenza riutilizzabili, libri, bozze, taccuini, banche di domande e personae. Il recupero è volutamente multi-motore: librerie RAG versionate su LlamaIndex, PageIndex, GraphRAG, LightRAG o un server LightRAG remoto, più una base WeKnora self-hosted, una libreria Tencent IMA o MarginNote, oppure un vault Obsidian collegato. La memoria è ispezionabile anziché opaca: le tracce L1, i riassunti di superficie L2 e la sintesi L3 sono visibili e modificabili, con un Memory Graph che collega ogni riassunto alle evidenze che stanno dietro di esso. Un binario `deeptutor` fornisce un REPL da terminale e trasmette in streaming NDJSON per qualsiasi agente che voglia usarlo come strumento, e una comunità EduHub distribuisce competenze installabili.

## A chi è rivolto

Docenti e ricercatori dell'istruzione superiore che vogliono una versione distribuibile del framework su cui verte l'articolo, sviluppatori che costruiscono su un runtime estendibile e studenti autodiretti disposti a eseguire una propria istanza. La documentazione si trova su deeptutor.info.

## Note

Con licenza Apache 2.0, alla versione 1.6.9 a settembre 2026 con circa 40.000 stelle su GitHub. La valutazione pubblicata che ne sta alla base — un miglioramento medio del 10,8% sulle metriche personalizzate rispetto a solide baseline e un ragionamento agentico generale più forte del 29,4% su cinque modelli backbone, nel benchmark TutorBench — è riassunta nella [[deeptutor|pagina dell'articolo]], i cui limiti valgono anche qui. Come per qualsiasi stack AI open-source, le chiavi dei provider di modelli le fornisci tu, e una distribuzione desktop o server richiede Python 3.11 e Node.

## Concetti collegati

[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
