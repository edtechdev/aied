---
title: Metacognition
created: 2026-05-07
updated: 2026-05-07
type: concept
tags: [metacognition, self-regulated-learning, formative-assessment, k-12, higher-ed, scaffolding]
confidence: high
sources: [raw/papers/stanford-evidence-base-ai-k12-2026.md, raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md]
---
> 📄 Full text: [Stanford SCALE](https://scale.stanford.edu/sites/default/files/The%20Evidence%20Base%20on%20AI%20in%20K-12%20Report.pdf) · [local](raw/papers/stanford-evidence-base-ai-k12-2026.md) · [Springer](https://link.springer.com/content/pdf/10.1186/s41239-026-00589-7.pdf) · [local](raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md)




# Metacognition

> Metacognition — thinking about one's own thinking — is both a target of AI education research (can AI tools develop students' metacognitive skills?) and a risk factor (AI completing tasks may suppress metacognitive practice).^[[stanford-evidence-base-ai-k12-2026]]^[[scheu-mobile-chatbot-journaling-motivation-2026]]

## Definition

Metacognition in education refers to learners' awareness, monitoring, and regulation of their own cognitive processes:

- **Metacognitive knowledge:** Understanding what one knows, what strategies are available, and when to deploy them
- **Metacognitive regulation:** Planning, monitoring, and evaluating one's own learning in real time

Within [[self-regulated-learning]] frameworks, metacognition is the central mechanism that enables learners to adapt strategies, recognize confusion, and seek help appropriately.^[[scheu-mobile-chatbot-journaling-motivation-2026]]

## How AI Tools Affect Metacognition

### The Suppression Risk (Stanford SCALE, 2026)

When AI completes reasoning tasks for students — solving math problems, writing essays, generating code — the student loses practice in monitoring their own understanding and selecting strategies.^[[stanford-evidence-base-ai-k12-2026]]

Key findings:
- **Kosmyna et al. (2025):** Students who used AI essay assistance were **83% unable to recall quotes** from their own essays, vs. 11% for non-AI users — indicating they did not engage with the content during production.
- **Stadler et al. (2024):** General-purpose AI reduced cognitive load but produced **lower-quality reasoning** vs. traditional search, suggesting metacognitive engagement was displaced.
- **Lehmann et al. (2025):** General AI for programming harmed understanding for low-prior-knowledge students — the students most in need of metacognitive scaffolding received answers instead.

### The Augmentation Opportunity (Scheu et al., 2026)

When AI is designed to support reflection rather than replace it, metacognition can be strengthened:

- **Learning journals** are a classic metacognitive practice: by reflecting on learning processes, students increase awareness of their cognition
- **Structured prompts** that ask students to self-explain, evaluate strategies, or identify knowledge gaps preserve metacognitive demand
- The **example-based course** in Scheu et al.'s chatbot increased **perceived competence** (a metacognitive self-evaluation) even when the LLM assistant alone did not

## The Engagement–Motivation Distinction

Scheu et al. (2026) found a critical split:

| Dimension | LLM Assistant Effect | Course Effect |
|---|---|---|
| **Intrinsic motivation** (willingness to engage) | **No effect** | **Positive** |
| **Behavioral engagement** (amount written) | **Increasing over time** (feedback loop) | **Constant positive** |

This suggests that **metacognitive support and motivation are not identical**. The LLM assistant's scaffolding of journal entries increased how much students wrote (behavioral engagement) but did not make them *want* to write more (intrinsic motivation).^[[scheu-mobile-chatbot-journaling-motivation-2026]]

## Implications for Tool Design

1. **Preserve the "friction" of thinking:** If AI writes the reflection, the student does not build metacognitive skill. Journaling assistants should scaffold, not author.
2. **Model metacognitive language:** The example-based course worked partly because it exposed students to proficient models' metacognitive self-talk.
3. **Separate support for motivation vs. skill:** Metacognitive skill development (course-structured) and productivity enhancement (AI-assisted) may require different design strategies.

## Related Pages
- [[beyond-detection-authentic-assessment-ai-2025]] — Reflective artefacts making thinking visible
- [[critical-genai-use-predictors]] — Need for cognition bridges literacy and critical behaviour
- [[chatgpt-feedback-engagement-genai]] — Metacognitive engagement gap with ChatGPT feedback
- **[[ai-assistance-reduces-persistence]]**: Causal evidence (N=1,222) that brief AI assistance reduces persistence and impairs unassisted performance — rapid emergence of over-reliance effects
- [[cognitive-offloading-speedup-illusion]] — Users fail to accurately predict AI-assisted vs independent task completion times
- [[llm-automated-assessment-student-self-explanations]] — Self-explanation assessment as a window into metacognitive engagement (2026)
- [[xai-education-framework]]
- [[code-review-genai-cs1]]
- [[socraticode-k12-programming-tutor]] — Towards SocratiCode: Designing a Generative AI-Based Programming Tutor for K-12 Students through a 4-Week Participatory Design Study
- [[chatgpt-critical-creative-thinking-review]] — Systematic review: ChatGPT's dual impact on critical and creative thinking in higher education (67 studies)
- [[ai-powered-materials-discovery-ai-literacy]] — Preparing Students for AI-Powered Materials Discovery: A Wor...
- [[cost-of-ethics-crisis-cs-ethics-education]] — Cost-of-Ethics Crisis: Beliefs, Decisions, and Justification...
- [[ai-agents-peer-learning-discourse]] — 7% of AI agent comments show metacognitive reflection patterns
- [[moodle-ai-tutoring-deep-learning]] — Students must recognize surface understanding to benefit from deep scaffolding
- [[ecnuclaw-k12-personalized-companion]] — Five-dimension learner profile includes metacognitive dimension tracking
- [[sequenced-ai-feedback-learning]] — Cao et al. RCT: students felt they learned more with sequenced feedback but actually learned less — calibration failure
- [[llm-student-misconception-identification]] — Surfacing student misconceptions supports metacognitive awareness
- [[awareness-technological-isomorphism]] — Technological Isomorphism as metacognitive awareness of AI operations
- [[regulating-ai-tutor-adolescent-srl]] — Adolescent metacognitive monitoring deficits during AI tutor use- [[learning-by-chatting-genai-impact]] — ChatGPT users experienced higher meta-cognitive load from reduced agency
- [[ai-partner-science-epistemic-vigilance]] -- Epistemic vigilance determines whether AI augments or undermines learning; uniform AI integration risks widening achievement gaps
- [[curiobot-llm-tutoring-exploratory-learning]] -- Curiosity-oriented LLM interventions (novelty, complexity, conflict, uncertainty) increased exploratory learner behaviors up to 2.4x — acting as a partially independent interaction-level mechanism.
- [[epistemic-proactivity-math]] — epistemic proactivity in student-AI math interactions
- [[buggy-genai-code-student-responses]] — When AI Is Wrong on Purpose: How Students Respond to Buggy GenAI Code
- [[aied-unfinished-mission-bypass]] — AIED's Unfinished Mission
- [[student-mental-models-genai]] — Mental models as metacognitive skill (2026-07-14)
- [[informal-learning-everyday-human-llm-interaction]] — Informal Learning Emerges in Everyday Human-LLM Interaction
- [[metacognitive-awareness-experiential-vs-instructional]] — Experiential Versus Instructional Approaches for Eliciting Metacognitive Awarene
- [[student-cheat-sheets-make-or-take]] — Students choose between self-created and instructor-provided cheat sheets based on trust, personaliz
- [[genai-performance-vs-learning]] — GenAI can bypass metacognitive processing- [[llm-reasoning-traces-metacognition]] — LLM reasoning traces impair metacognitive calibration
- [[metacognitive-learning-scenarios-taxonomy]] — Taxonomy of 24 metacognitive professional learning scenarios
- [[codify-socratic-programming-tutor]] — Codify: Socratic ITS for programming education
- [[tracing-genai-literacy-interaction-patterns]]
- [[guided-llm-scaffolding-independent-learning]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-literacy-continuum-higher-education]]
- [[ai-adoption-training-public-sector]]
