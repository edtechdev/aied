---
title: Prompt Engineering
created: "2026-07-28T10:44:35-04:00"
updated: "2026-08-24T12:55:00-04:00"
type: concept
tags: [ai-literacy, higher-ed, generative-ai, scaffolding, llm, student-experience, prompt-engineering]
confidence: high
---

> **Prompt engineering** — the practice of designing and refining inputs to large language models to achieve desired outputs. In education, prompt engineering serves dual roles: as a learner skill (students must learn to prompt effectively) and as a system design lever (developers craft prompts that shape [[intelligent-tutoring|AI tutoring]] behavior).

Prompt engineering is central to effective [[generative-ai]] use in education. Unlike traditional programming interfaces, LLMs respond to natural language — but the quality, accuracy, and pedagogical value of those responses depend heavily on prompt design. Research in this wiki reveals that prompting is not a neutral act: it reflects how students think, plan, and allocate cognitive effort.

### How prompt engineering appears in the research

- **Prompting as cognitive trace:** [[misiejuk-cognitive-offloading-prompting-2026|Misiejuk et al.]] show that prompt patterns reveal [[cognitive-offloading|cognitive offloading]] — high-quality work uses context-rich, polite, and instructional prompts; low-quality work shows reactive disagreement without domain grounding
- **Prompting as literacy:** [[tracing-genai-literacy-interaction-patterns|Tracing GenAI literacy]] and [[aaai2026-prompting-literacy-k12|K-12 prompting literacy]] research frame prompting as a core [[ai-literacy]] component
- **Prompting as system design:** [[cotal-formative-assessment-scoring-2026|CoTAL]] uses human-in-the-loop prompt engineering for [[formative-assessment|formative assessment]] scoring; [[choi-anchor-aes-prompting-2025|anchor-based prompting]] improves [[automated-essay-scoring|automated essay scoring]]
- **Adaptive prompt routing:** [[learning-to-prompt-adaptive-tutoring|Learning to Prompt]] treats prompt selection as part of the tutoring system itself — subject-aware prompt routing over 14 pedagogical features, where a stochastic router selects the best prompt per conversation. This shifts prompting from a learner skill into an adaptive system-design lever, improving engagement and efficiency (28.1% vs 19.6% exercise conversion in a real-world A/B test).
- **Prompt modalities:** [[voice-text-prompt-problems-computing-education|Voice vs. text input research]] examines whether prompting modality affects learning outcomes
- **Scaffolded prompting:** [[guided-llm-scaffolding-independent-learning|Guided LLM scaffolding]] and [[scaffolding-critical-engagement-genai-minority-students|critical engagement scaffolding]] teach structured prompting as a learning intervention
- **Prompt privilege and equity:** [[prompt-privilege-equitable-ai-access-2026|Jin et al.]] show prompting expertise is unevenly distributed — users who phrase requests skillfully systematically get better output than those expressing the same intent less adroitly. Their Prompt Equity Transformer shifts prompt optimization from the user to the AI system, arguing that equitable output should be engineered into the model rather than demanded of novices.

### Connections to broader concepts

Prompt engineering connects to [[scaffolding]] — well-designed prompts can scaffold student thinking rather than bypass it. It intersects with [[metacognition]] and [[ai-literacy]], as effective prompting requires understanding both the AI's capabilities and one's own learning goals. The [[cognitive-offloading]] research directly links prompt quality to whether AI use supports or undermines learning.

- **Prompting strategy predicts performance.** An [[isaza-chatgpt-engineering-prompting-2026|empirical study of 128 engineering students]] found that AI Query Efficiency (clear, well-structured prompts) and AI-Driven Problem-Solving (strategic integration of AI output into reasoning) were the strongest predictors of academic success — even after controlling for GPA — indicating prompting is a teachable skill that shapes how effectively students learn with AI.

## Connected Concepts

- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[cognitive-offloading]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[instructional-design]]
- [[cs-education]]
- [[higher-ed]]- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)

## Connected Articles
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+: real-time coaching for educational LLM prompting
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
