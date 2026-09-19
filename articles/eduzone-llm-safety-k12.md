---
title: "EduZone: A Framework for Evaluating LLM Safety for K-12 Students and Teachers"
created: "2026-08-04T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
technology: [llm]

audience: [software developers]
research_method: [benchmark]
level: [k 12]
sources: ['raw/papers/2608.02024.md']
confidence: high
page_kind: [evaluation]
methods: [benchmark]
institutions: [governance]
ethics: [pedagogical-safety]

---

> **Synthesis:** **EduZone is an automated evaluation framework that generates contextually grounded adversarial interactions to probe [[llm|LLM]] safety in [[k-12|K-12 education]], revealing that models are more vulnerable to education-specific harms and dynamic multi-turn conversations than existing [[guardrails]] address.**

**Junyeong Park, Jieun Han, Haneul Yoo, So-Yeon Ahn, Jinsung Yoon, Alice Oh** — arXiv (cs.CY / cs.AI) preprint, 2026 (KAIST, Google Cloud AI [[research-methods-aied|Research]], NYU).

## Key Findings

EduZone is an automated evaluation framework that probes LLM safety in K-12 education:

- Combines student- and teacher-facing LLM usage contexts with fine-grained [[curriculum-design|curriculum]] concepts and 6 risk categories / 28 subcategories spanning conventional and education-specific harms.
- Builds adversarial interactions in three settings: single-turn requests, static multi-turn conversations, and dynamic multi-turn conversations.
- Evaluates ten LLMs across four safety levels: refusal, safe assistance, risky assistance with safety guidance, and fully risky assistance.
- Results show greater vulnerability to education-specific risks and dynamic multi-turn interactions; existing safety guardrails fail to adequately address these risks — a contribution to [[pedagogical-safety|pedagogical safety]], [[governance]], and [[benchmark|evaluation]] of [[llm|LLMs]] in education.

## What this means for practice

- **Designers.** Stress-test every K-12-facing feature against education-specific harms — academic misconduct, misinformation, privacy misuse — before shipping, because the strongest general-purpose defense reduced attack success by only 18.3 percentage points overall.
- **Designers.** Augment a safety classifier with an education risk taxonomy instead of relying on prompt-level context: taxonomy-augmented classifiers cut attack success by up to 30.1 percentage points, whereas telling the model it is an educational assistant reduced it by only 3.9 percentage points.
- **Instructors.** Evaluate student-facing and teacher-facing uses separately — student-oriented scenarios were most vulnerable to academic misconduct, exceeding an 80 percent attack success rate, while teacher-oriented scenarios were most vulnerable to misinformation.
- **Administrators.** Decide in advance which safety level each use case requires — strict refusal, safe assistance, or risky assistance with guidance — and align deployed behavior to it, since models stayed vulnerable in dynamic multi-turn conversations.

## Limitations

- EduZone is built on U.S. K-12 curricula; the authors state that LLM usage policies and practices vary across countries and grade levels, so the risks measured may not transfer to other educational systems.
- Scenario plausibility was screened by three LLM judges rather than by humans, and the pool was narrowed from 6,188 candidate scenarios to 2,639; human annotation appears only as a reliability check (two annotators, Cohen's κ of 0.82-0.83).
- The defense evaluation used a stratified 10 percent sample of 260 scenarios, not the full scenario set, so the reported attack-success reductions rest on a subset of the framework's interactions.

## Connected Concepts

- [[pedagogical-safety]]
- [[pedagogical-llm-training]]
- [[educational-policy-ai]]
- [[ethics]]
- [[benchmark]]
- [[k-12]]
- [[governance]]
## Connected Articles

- [[hazra-safetutors-pedagogical-safety-2026]] — SafeTutors: Pedagogical Safety in AI Tutoring
- [[vocabulary-difficulty-prediction]] — What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[llm-student-simulation-misconception-faithfulness]] — Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators
- [[drawedumath-vlm-struggling-students-2026]] — Educational VLM Evaluation
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work

## Citation

Junyeong Park, Jieun Han, Haneul Yoo, So-Yeon Ahn, Jinsung Yoon, Alice Oh (2026). [EduZone: A Framework for Evaluating LLM Safety for K-12 Students and Teachers](https://arxiv.org/abs/2608.02024). arXiv (cs.CY / cs.AI) preprint.
