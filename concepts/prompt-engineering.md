---
title: Prompt Engineering
created: "2026-07-28T10:44:35-04:00"
updated: "2026-09-01T18:30:00-04:00"
type: concept
tags: [ai-literacy, higher-ed, generative-ai, scaffolding, llm, student-experience, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
---

> **Prompt engineering** — the practice of designing and refining inputs to large language models to achieve desired outputs. In education, prompt engineering serves dual roles: as a learner skill (students must learn to prompt effectively) and as a system design lever (developers craft prompts that shape [[intelligent-tutoring|AI tutoring]] behavior).

## Questions to Consider

- You've likely typed a prompt into an AI tool recently. Now consider this: the way you phrased it isn't neutral — it may reveal how you planned, thought, and allocated your effort. What might your own prompting habits say about how you approach problems?
- A study found that users who phrase requests skillfully systematically get better output than those expressing the same intent less adroitly. If you accept that 'prompt privilege' is real, is fair access to AI best fixed by [[teacher-role|teaching]] everyone to prompt better, or by redesigning the system to not demand that skill — and what are the trade-offs of each?
- Is prompting a 'trick' to be memorized, or a genuine intellectual skill? One line of [[research-methods-aied|research]] treats it as professional judgement within a discipline (journalism, law, [[medical-education|medicine]]); another treats it as a core of AI literacy. Which view aligns with your own experience of what actually separates good prompts from bad ones?
- Well-designed prompts can scaffold student thinking, while poorly used ones can encourage cognitive offloading. Can you recall a moment when an AI answer did the thinking for you? What about the prompt — or your intent — made that happen, and could it have been designed to do the opposite?
- Prompting is both a learner skill and a system-design lever: some tutors now automatically route and select prompts for the user. As prompting moves from the user to the system, what do students lose — and what do they gain?
- Set a small goal before you read: after learning about prompt engineering, decide on one concrete way you'll change how you write prompts in your own work, and what result you'll check to know it worked.

## Introduction

Prompt engineering is central to effective [[generative-ai]] use in education. Unlike traditional programming interfaces, LLMs respond to natural language — but the quality, accuracy, and [[pedagogy|pedagogical]] value of those responses depend heavily on prompt design. Research in this knowledge base reveals that prompting is not a neutral act: it reflects how students think, plan, and allocate cognitive effort.

### How prompt engineering appears in the research

- **Prompting as cognitive trace:** [[misiejuk-cognitive-offloading-prompting-2026|Misiejuk et al.]] show that prompt patterns reveal [[cognitive-offloading|cognitive offloading]] — high-quality work uses context-rich, polite, and instructional prompts; low-quality work shows reactive disagreement without domain grounding
- **Prompting as literacy:** [[tracing-genai-literacy-interaction-patterns|Tracing GenAI literacy]] and [[aaai2026-prompting-literacy-k12|K-12 prompting literacy]] research frame prompting as a core [[ai-literacy]] component
- **Prompting as system design:** [[cotal-formative-assessment-scoring-2026|CoTAL]] uses [[human-in-the-loop-ai|human-in-the-loop]] prompt engineering for [[formative-assessment|formative assessment]] scoring; [[choi-anchor-aes-prompting-2025|anchor-based prompting]] improves [[automated-essay-scoring|automated essay scoring]]
- **Adaptive prompt routing:** [[learning-to-prompt-adaptive-tutoring|Learning to Prompt]] treats prompt selection as part of the tutoring system itself — subject-aware prompt routing over 14 pedagogical features, where a stochastic router selects the best prompt per conversation. This shifts prompting from a learner skill into an adaptive system-design lever, improving [[student-engagement|engagement]] and efficiency (28.1% vs 19.6% exercise conversion in a real-world A/B test).
- **Prompt modalities:** [[voice-text-prompt-problems-computing-education|Voice vs. text input research]] examines whether prompting modality affects [[learning-gains|learning outcomes]]
- **Scaffolded prompting:** [[guided-llm-scaffolding-independent-learning|Guided LLM scaffolding]] and [[scaffolding-critical-engagement-genai-minority-students|critical engagement scaffolding]] teach structured prompting as a learning intervention
- **Prompt privilege and equity:** [[prompt-privilege-equitable-ai-access-2026|Jin et al.]] show prompting expertise is unevenly distributed — users who phrase requests skillfully systematically get better output than those expressing the same intent less adroitly. Their Prompt Equity Transformer shifts prompt optimization from the user to the AI system, arguing that [[equity-in-ai-education|equitable]] output should be engineered into the model rather than demanded of novices.

- **Prompting as [[situated-learning|situated]] professional judgement.** Beyond literacy and system design, prompting can be framed as a *disciplinary practice*. The [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026|Dierickx et al. taxonomy]] for journalism treats task definition and prompting as a form of professional judgement exercised within a domain's epistemic and ethical norms — translating journalistic work into explicit tasks (newsgathering → sensemaking → editing → publication/distribution) makes assumptions, priorities, and [[ethics|ethical considerations]] visible, and turns prompting into a pedagogical tool for critical AI literacy. Its logic transfers to other knowledge-intensive professions (law, medicine, public policy).
- **Prompt design as instructional specification.** Neto and colleagues (2026) find in their [[meta-analysis-systematic-review|systematic review]] of GenAI in healthcare education that prompt design functions as a form of instructional specification, encoding the cognitive targets and quality criteria implicit in expert authoring — yet only 34.8% of studies aligned generated content with instructional frameworks and only 34.8% reported prompting in enough detail to reproduce. Looi, Liu, and Sun (2026) further show how prompt architecture can embed pedagogical rules (correctness gates, anti-spoiler boundaries, goodbye gates) to constrain [[llm]] tutoring behavior in procedural domains.
- **Context-aware prompting for assessment.** Context-aware prompting of pre-trained language models automates the coding of [[collaborative-learning|collaborative problem-solving]] skills from process data, modelling dependencies between behaviour codes and fusing cognitive and social abilities. This enables structured CPS analysis at scale and in real time, overcoming the labour intensity of manual coding schemes.

### Connections to broader concepts

Prompt engineering connects to [[scaffolding]] — well-designed prompts can scaffold student thinking rather than bypass it. It intersects with [[metacognition]] and [[ai-literacy]], as effective prompting requires understanding both the AI's capabilities and one's own learning goals. The [[cognitive-offloading]] research directly links prompt quality to whether AI use supports or undermines learning.

- **Prompting strategy predicts performance.** An [[isaza-chatgpt-engineering-prompting-2026|empirical study of 128 engineering students]] found that AI Query Efficiency (clear, well-structured prompts) and AI-Driven [[problem-solving]] (strategic integration of AI output into reasoning) were the strongest predictors of academic success — even after controlling for GPA — indicating prompting is a teachable skill that shapes how effectively students learn with AI.

## Connected Concepts
- [[guardrails]]

- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[cognitive-offloading]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[learning-design]]
- [[cs-education]]
- [[higher-ed]]- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)

## Connected Articles
- [[gpt-item-generation-l2-listening-2026]] — Prompting vs. fine-tuning for GPT-based L2 listening item generation (Aryadoust & Wong 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+: real-time coaching for educational LLM prompting
- [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026]] — Task-based taxonomy of LLM tasks for critical AI literacy in journalism
- [[benali-genai-academic-writing-2026]]
- [[ying-genai-journalism-assessment-2026]]
- [[enright-staff-perspectives-genai-2026]]
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: measuring & mitigating accessibility disparities in LLM access
- [[principal-trait-analysis-human-ai-skills-2026]] — Principal Trait Analysis: data-driven traits of human-AI collaboration
- [[llms-text-linguistics-teaching-2026]] — LLMs in text linguistics teaching
- [[idea-framework-metacognitive-genai-2026]] — The IDEA framework for metacognitively regulated GenAI use
- [[lin-llm-interactive-lesson-generation]] — LLM generation of interactive tutor-training lessons (Lin et al. 2025)

- [[aaai2026-prompting-literacy-k12]]
- [[ai-adoption-training-public-sector]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[choi-anchor-aes-prompting-2025]]
- [[guided-llm-scaffolding-independent-learning]]
- [[learning-to-prompt-adaptive-tutoring]]
- [[llm-intervention-design-cs-review]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[probing-ai-generated-physics-solutions-2026]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[unesco-ai-guidelines-chemical-education-2026]] — UNESCO AI guidelines translated to chemical education; epistemic drift
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: Just-in-Time AI Co-Creation Across Disciplines
- [[student-ai-inquiry-types-cs2-2026]] — Analysis of Types of Inquiries in Student-AI Interaction
- [[learnlm-improving-gemini-learning]] — LearnLM: pedagogical instruction following vs prompt engineering
- [[teachlm-post-training-llms-education]] — TeachLM: prompt engineering as a stopgap

- [[li-dbagent-llm-educational-agent-cs-2026]] — LLM-based educational agent (DBagent) in CS education
- [[pedagogy-ai-mistakes]] — The Pedagogy of AI Mistakes: Fostering Higher-Order Thinking (Hosseini 2026)

- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT solves Qiskit homework; autogradable design
- [[isaza-chatgpt-engineering-prompting-2026]] — Prompting behaviors predict engineering student performance

- [[rule-integrated-llm-tutoring-primary-math-2026]] — Rule-guided vs ad-hoc scaffolding in an LLM tutoring system for primary mathematics (Looi et al. 2026)
- [[genai-scenario-based-healthcare-education-2026]] — Systematic review of GenAI in scenario-based healthcare education (Neto et al. 2026)
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-associated Bloom-level cognitive engagement in student-AI conversations (Chang & Li 2026)
- [[context-aware-prompting-cps-skill-identification-2026]] — Context-aware prompting for automated collaborative problem-solving skill coding
