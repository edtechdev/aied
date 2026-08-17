---
title: Prompt Engineering
created: "2026-07-28T10:44:35-04:00"
updated: "2026-08-17T09:55:00-04:00"
type: concept
tags: [ai-literacy, higher-ed, generative-ai, scaffolding, llm, student-experience, prompt-engineering]
confidence: high
---

> **Prompt engineering** — the practice of designing and refining inputs to large language models to achieve desired outputs. In education, prompt engineering serves dual roles: as a learner skill (students must learn to prompt effectively) and as a system design lever (developers craft prompts that shape [[ai-tutoring|AI tutoring]] behavior).

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

## Connected Concepts

- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[over-reliance]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[instructional-design]]
- [[cs-education]]
- [[higher-ed]]
## Connected Articles
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
