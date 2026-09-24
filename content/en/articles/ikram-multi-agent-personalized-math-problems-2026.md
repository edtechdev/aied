---
title: "A Multi-Agent Approach to Validate and Refine LLM-Generated Personalized Math Problems"
created: "2026-09-24T02:19:48-04:00"
updated: "2026-09-24T02:19:48-04:00"
type: article
sources: ['raw/papers/ikram-multi-agent-personalized-math-problems-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
foundations: [agentic-ai, human-ai-collaboration, limitations-in-aied-research]
pedagogy: [motivation, problem-solving, situated-learning, student-engagement]
technology: [generative-ai, llm, pedagogical-agent, personalized-learning, educational-nlp]
ethics: [hallucination-risk, pedagogical-safety, differential-effects-across-learner-groups]
research_method: [experiment, system development]
discipline: [math education]
audience: [researchers, instructors, curriculum designers]
page_kind: [evaluation]
level: [middle school]
---

> **Synthesis:** Ikram, Ashok Kumar, Lu, McNichols, Walkington, Heffernan, and Lan (2026) treat personalization of math word problems as an iterative generate, validate, and revise process run by cooperating agents rather than as one generation step. A conversion agent rewrites an existing problem against a student interest topic, four validator agents judge solvability, realism, readability, and authenticity, and refinement agents turn that feedback into the next candidate. The authors compare three ways of coordinating that feedback across 600 ASSISTments problems personalized to 20 interest topics: centralized refinement, centralized refinement with planning, and decentralized refinement, in which each validator pairs with its own reviser. Authenticity and realism fail most often in first drafts, yet one refinement iteration removes much of the damage. Which strategy wins depends on the criterion: decentralized refinement converges fastest on realism and readability, planning-based centralization fastest on authenticity. In a study of 45 problems, validator agents agreed fairly with human annotators on realism, less on readability, and only slightly on authenticity.

## Key Findings

- **Personalization is framed as validation and revision, not one-shot generation.** A conversion agent, four independent validators, and refinement agents run in a loop capped at three iterations.
- **Authenticity and realism are the dominant first-draft failures.** Across 600 ASSISTments problems personalized to 20 interest topics, initial outputs most often broke plausible quantities or age-appropriate relatability.
- **Most repair happens in a single iteration.** Failure counts drop sharply after one generate, validate, revise cycle, and solvability failures, rare at the start, approach zero after one pass.
- **Strategy strength is criterion dependent.** Decentralized refinement, where each validator has a dedicated reviser, reaches low realism and readability failure counts fastest, while planning-based centralization converges fastest on authenticity.
- **Validator reliability tracks how objective the criterion is.** Against three annotators on 45 problems, realism agreement was fair, readability accuracy high, and authenticity agreement only slight.
- **Failure patterns vary by topic and curriculum unit.** Media topics such as Twitter and TikTok attracted authenticity failures, while sports, games, and measurement units concentrated realism and readability failures.

## The task and the four validator agents

The system adapts an existing problem to a target topic while holding on to its mathematical structure, its solutions, and its grade-appropriate language. A conversion agent takes the original problem, the topic, and a target grade reading level computed with the Flesch-Kincaid metric, and produces a candidate. Four validators then return a binary pass or fail plus short diagnostic feedback. The solvability agent solves the problem to check consistency with the original. The realism agent asks whether quantities, units, and contextual details are plausible within the topic. The readability agent compares vocabulary and sentence complexity against the original and the grade level. The authenticity agent asks whether the personalized context is age-appropriate and relatable to middle school learners.

## Coordinating feedback: three refinement strategies

Because the four criteria can pull against one another, the paper isolates the coordination question. Centralized Refinement concatenates feedback from every failing validator into one message and has a single refinement agent produce the next candidate. Centralized Refinement with Planning inserts a planning agent that turns that aggregated feedback into a prioritized checklist, putting correctness-preserving fixes such as mathematical consistency ahead of stylistic edits. Decentralized Refinement pairs each validator with a specialist reviser that sees only that validator's feedback, applying revisions sequentially in the fixed order of correctness, realism, authenticity, and readability, so localized edits are not entangled. All strategies run at most three iterations and stop early on a full pass, and all were tested with GPT-5.2 at temperature zero against a Zero-Shot baseline.

## Validator reliability and the trade-offs inside one problem

Three annotators with college-level mathematics backgrounds labeled 45 sampled Zero-Shot problems for realism, readability, and authenticity; solvability was dropped as too rare. The realism validator reached Cohen's kappa of 0.322 and accuracy of 0.667, readability reached accuracy of 0.800 despite a low kappa, and the authenticity validator sat near chance with accuracy of 0.511. Agreement among the human annotators was itself only slight for authenticity, which the authors link to genuine subjectivity and to differing domain knowledge, citing a baseball problem stated in tenths of innings that validators failed and annotators passed. A signed multiplication problem personalized to Led Zeppelin shows the trade-offs: centralized refinement kept the signed operands but added little context, planning built a rich sticker-purchase scenario that turned negative multiplication positive, and decentralized refinement achieved narrative coherence while implying a different product.

## What this means for practice

- Treat generated personalization as a draft to be checked, not a finished item, and budget one validation and revision pass before students see it.
- Match the coordination pattern to the criterion: localized realism and readability fixes respond well to dedicated revisers, while authenticity needs holistic, planned revision.
- Keep mathematical structure and pedagogical intent under review, since a more realistic scenario can silently change what the problem is practicing.
- Ask teachers or students to confirm authenticity, because validators and annotators both struggle to judge relatability without topic familiarity.

## Limitations

- The human evaluation is small, with three annotators and 45 problems, so validator reliability estimates remain coarse.
- No teachers or students participated, and the study measures problem quality rather than any effect on learning outcomes.
- All results come from one model at temperature zero and a fixed set of 20 interest topics.

## Connected Concepts

- [[agentic-ai]]
- [[pedagogical-agent]]
- [[personalized-learning]]
- [[llm]]
- [[human-ai-collaboration]]
- [[problem-solving]]

## Connected Articles

- [[walkington-teachers-multi-agent-personalized-problem-generation-2026]]: Teacher-driven context personalization with large language models
- [[proiqa-math-item-quality-assessment-2026]]: Assessing the quality of generated math items
- [[multi-agent-instructional-design]]: Multi-agent workflows for instructional design
- [[taklif-ai-interest-based-personalized-assignments]]: Personalizing assignments to student interests with AI

## Citation

Ikram, F., Ashok Kumar, N., Lu, J., McNichols, H., Walkington, C., Heffernan, N., & Lan, A. S. (2026). [*A Multi-Agent Approach to Validate and Refine LLM-Generated Personalized Math Problems*](https://arxiv.org/abs/2604.05160). Published in AIED 2026: The 27th International Conference on Artificial Intelligence in Education. arXiv:2604.05160. https://doi.org/10.48550/arXiv.2604.05160