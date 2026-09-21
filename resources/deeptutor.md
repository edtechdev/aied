---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-09-20T17:30:00-04:00"
type: resource
summary: "The open-source release of the DeepTutor agentic tutoring framework: one workspace for tutoring, question generation, mastery practice, research and visualization, with inspectable learner memory."
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
---

**DeepTutor** is the open-source implementation of the tutoring framework evaluated in [[deeptutor|the DeepTutor study]], and it has grown well past that paper's scope into a general agent-native learning workspace. Tutoring, problem solving, quiz generation, mastery practice, research and visualization share one capability runtime and one session context, so the learner profile built while solving problems conditions the explanations and practice items that follow.

## What you can do with it

Ten modes — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading and Immersive Watching — run on the same runtime, drawing on reusable knowledge bases, books, drafts, notebooks, question banks and personas. Retrieval is deliberately multi-engine: versioned RAG libraries over LlamaIndex, PageIndex, GraphRAG, LightRAG or a remote LightRAG server, plus a self-hosted WeKnora base, a Tencent IMA or MarginNote library, or a linked Obsidian vault. Memory is inspectable rather than opaque: L1 traces, L2 surface summaries and L3 synthesis are visible and editable, with a Memory Graph linking each summary to the evidence behind it. A `deeptutor` binary gives a terminal REPL and streams NDJSON for any agent that wants to drive it as a tool, and an EduHub community distributes installable skills.

## Who it is for

Higher-education instructors and researchers who want a deployable version of the framework the paper reports on, developers building on a pluggable runtime, and self-directed learners willing to run their own instance. Documentation lives at deeptutor.info.

## Notes

Licensed Apache 2.0, at version 1.6.9 as of September 2026 with roughly 40,000 GitHub stars. The published evaluation behind it — 10.8% average improvement on personalized metrics over strong baselines and 29.4% stronger general agentic reasoning across five backbone models, on the TutorBench benchmark — is summarized on [[deeptutor|the article page]], whose limitations apply here too. As with any open-source AI stack, you supply model provider keys, and a desktop or server deployment expects Python 3.11 and Node.

## Connected Concepts
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
