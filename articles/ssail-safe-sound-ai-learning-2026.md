---
title: "SSAIL: A Design Framework for Safe and Sound AI for Learning"
created: "2026-09-03T09:00:00-04:00"
updated: "2026-09-03T09:00:00-04:00"
type: article
tags: [generative-ai, cognitive-offloading, pedagogical-safety, agency, human-ai-collaboration, learning-analytics, formative-assessment, ai-education]
sources: ['raw/papers/ssail-safe-sound-ai-learning-2026.md']
confidence: high
---

> **Synthesis:** Rahimi (2026) proposes **SSAIL** (Safe and Sound AI for Learning), a conceptual design framework responding to a "learning paradox": [[generative-ai|generative AI]] can help learners produce better work while simultaneously performing the cognitive work those learners need to do to build their own competencies. He argues this creates a learning-safety problem that conventional concerns about accuracy, bias, privacy, or harmful outputs do not capture. SSAIL begins from the competencies humans should develop, maintain, and exercise: **Learning Safety** protects those competencies from foreseeable harm, while **Learning Soundness** supports their intended development. Using evidence-centered design, it operationalizes safety through two coupled questions — whether the learner is developing the intended competencies and whether the environment supports and protects that development — answered via [[formative-assessment|stealth assessment]] of the learner and [[ai-ed-evaluation|AI evaluation]] of the system, informing adaptive decisions about tasks, supports, [[guardrails]], [[agency]], and cognitive responsibility. The goal is not dependence on a well-guarded system but the capacity to regulate AI use through internal guardrails built through guided practice.

## The Learning Paradox Beyond Conventional AI Safety

[[generative-ai|Generative AI]] poses a distinctive design problem that accuracy, bias, privacy, and harmful-output concerns miss: it can not only support human thinking but perform substantial portions of that thinking — formulating arguments, solving problems, interpreting evidence, and revising explanations. In learning contexts, particularly early in development, learners must carry out such cognitive work themselves to form the intended competencies. The central question is therefore whether AI assistance strengthens or undermines long-term learning, not merely whether it boosts immediate performance — a distinction that matters when learning is inferred from performance, since a strong essay or correct solution may reflect cognition supplied by the tool rather than competencies developed by the learner. The paper frames this as an instance of the "deskilling" risk anticipated decades ago: intelligent tools may quietly erode the very skills society wants to retain. Emerging evidence supports the concern — for example, students using an unrestricted AI interface performed worse later without the tool, while learning-oriented safeguards largely mitigated the effect, even though learners using unrestricted AI did not realize they were worse off without it.

## Learning Safety, Learning Soundness, and Adaptive Responsibility

Within SSAIL, the framework names two complementary obligations. **Learning Safety** protects human competencies from foreseeable harm — the cases where AI performs cognition a learner still needs to practice. **Learning Soundness** supports the intended development or maintenance of those competencies. Together they frame the central design problem: determining what learners should do themselves, what AI can support or perform, and how those responsibilities should shift as learners develop. The framework is deliberately competence-first — it starts from the human capabilities a system aims to protect and develop rather than from assumptions about what the AI can or cannot do.

## Operationalizing Safety with Evidence

Because safety claims need evidence, SSAIL borrows **evidence-centered design** to make the framework operational through two coupled evidentiary questions: (a) is the learner developing the intended competencies, and (b) does the AI-powered learning environment support and protect that development? Once implemented:

1. **Stealth assessment** provides evidence about learner competencies as they work, without interrupting the activity.
2. **AI evaluation and verification** provide evidence about system behavior — whether the tool is performing cognition that should stay with the learner.

These two evidence streams jointly inform adaptive decisions about task selection, supports, guardrails, [[agency|learner agency]], and cognitive responsibility. The ultimate objective is not a maximally guarded system the learner depends on, but the development of internal guardrails — the capacity to regulate one's own AI use — achieved through guided practice over time.

## Implications for Designing Human-Development-Centered AI

For [[ai-education|AIED]] designers, SSAIL reframes safety from a property of model outputs to a property of the human-development trajectory a learning environment supports or erodes, aligning with scholarship on [[cognitive-offloading]] and [[desirable-difficulties|productive struggle]]. It positions [[human-ai-collaboration]] design — deciding which cognitive tasks the tool performs versus the learner — as the central safety lever, and it argues that as AI capabilities evolve, safe and sound learning must keep the human competencies it aims to protect at the center. Its evidence-centered pairing of learner and system measurement offers a concrete path for [[learning-analytics]] and assessment communities to evaluate not just what AI produces but what it lets learners become able to do on their own.

## Connected Concepts
- [[generative-ai]]
- [[cognitive-offloading]]
- [[pedagogical-safety]]
- [[agency]]
- [[human-ai-collaboration]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[ai-education]]

## Connected Articles
- [[wang-safety-gap-productive-struggle-2026]] — The Safety Gap: Restoring Productive Struggle Through Pedagogically Aligned Generative AI
- [[seung-basham-cognitive-offloading-swld-2026]] — Cognitive Offloading in the Age of Generative AI and Students With Learning Disabilities
- [[misiejuk-cognitive-offloading-prompting-2026]] — Cognitive Offloading in Student–AI Collaboration: A Longitudinal Analysis of Prompting Strategies
- [[metacognitively-discordant-completion-genai-2026]] — Metacognitively Discordant Completion in Generative AI Learning
- [[eduzone-llm-safety-k12]] — EduZone: A Framework for Evaluating LLM Safety for K-12 Students and Teachers

## Citation
Rahimi, S. (2026). [*SSAIL: A Design Framework for Safe and Sound AI for Learning*](https://osf.io/preprints/edarxiv/xg6e3/). EdArXiv preprint.
