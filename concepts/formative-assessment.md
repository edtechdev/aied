---
title: Formative Assessment in AI Education
created: 2026-05-07
updated: 2026-05-07
type: concept
tags: [agentic-ai, ai-ed-evaluation, ai-education, assessment, pedagogical-safety]
sources: [raw/papers/duan-code-gen-human-loop-rag-mcq-2026.md, raw/papers/kamalov-agentic-workflows-education-2026.md, raw/papers/zhao-learnlens-curriculum-feedback-2025.md]
confidence: medium
---

# Formative Assessment in AI Education

Assessment designed to inform ongoing instruction and learning, as opposed to summative evaluation. AI systems can generate, validate, and adapt formative assessment items at scale, though quality varies dramatically across assessment types.

## AI-Generated Formative Items

### Multiple-Choice Questions (CODE-GEN)

Duan et al. (2026) demonstrate that agentic AI can reliably generate MCQs for coding comprehension when validated across seven pedagogical dimensions. Success rates reach **98.6%** for concept alignment and **79.9%** for feedback quality—suggesting that AI is strongest on verifiable dimensions and weakest on instructional-judgment dimensions.

### Automated Essay Scoring (MASS)

Kamalov et al. (2026) implement a multi-agent framework (MASS) for essay scoring. Preliminary results show improved consistency over stand-alone LLMs, though interpretability of multi-agent scoring decisions remains an open challenge.

### Curriculum-Grounded Feedback (LearnLens)

Zhao et al. (2025) present **LearnLens**, a modular LLM system for science education feedback that addresses three persistent problems in AI formative assessment:

1. **Error-aware assessment** — captures nuanced reasoning errors rather than surface mistakes
2. **Topic-linked memory chains** — replaces noisy similarity-based RAG with structured curriculum-grounded retrieval
3. **Educator-in-the-loop** — teacher customisation and oversight, not full automation

**Key differentiator:** LearnLens uses a **structured, topic-linked memory chain** rather than traditional RAG similarity search, improving relevance and reducing noise. This connects to the broader tension in [[human-in-the-loop-ai]]: scalable automation with expert validation.

## Design Trade-offs

| Dimension | AI Suitability | Human Requirement |
|-----------|----------------|-------------------|
| Factual correctness | High | Low |
| Concept alignment | High | Medium |
| Distractor quality | Low | High |
| Feedback depth | Low | High |
| Rubric consistency | Medium | Medium |

## Risk: Assessment as Surveillance

Formative assessment systems can shift from learning-support tools to behavior-monitoring infrastructure. The same data streams that enable adaptive tutoring can enable punitive tracking if governance is weak.

## Citation

Wang, A.X.D.F.N.C. & |, C.F. (2026). [*Formative Assessment in AI Education*](https://arxiv.org/abs/2604.03926). Conference on Artificial Intelligence in Education (AIED 2026)

## Related Pages
- [[cotal-formative-assessment-scoring-2026]] — LLM scoring with ECD-aligned rubrics
- [[agentic-ai-pedagogical-best-practice-2026]] — Agent feedback pre-empting self-assessment
- [[authentic-products-authenticated-processes-2026]] — Process transparency and feedback-use evidence
- [[correct-answer-trap-ai-tutor]] — 8 of 8 papers in May 28 scan
- [[rubric-aware-grading-rec-cbm]] — 2 of 8 papers in May 28 scan
- [[llm-sentiment-analysis-education-research]] — 1 of 8 papers in May 28 scan
- [[student-misconceptions-conditionals-loops-taxonomy]] — taxonomy for precise diagnosis within formative assessment cycles
- [[ai-changing-teaching-workflows]]
- [[code-review-genai-cs1]]
- [[clara-collaboration-literacy-dashboard]] — CLARA: An AI-Augmented Analytics Dashboard for Collaboration Literacy
- [[cyberscholar-genai-writing-feedback]] — Generative AI Feedback, English Writing and Teacher Rubrics: A Multiple-Case Study of CyberScholar
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[lata-ferpa-compliant-local-llm-autograder]] — Rapid feedback enabling regrading and expanded TA hours
- [[self-referential-l2-writing-llm-assessment]] — LLMs as complementary weakness detectors alongside teacher strengths
- [[short-answer-scoring-quality-degradation]] — Mid-range degradation threatens nuanced feedback in formative systems
- [[moodle-ai-tutoring-deep-learning]] — Uses formative cycles within LMS to promote deep learning
- [[multimodal-ai-feedback-learning]] — Zhao et al.: AI multimodal feedback as scalable formative assessment matching educator quality
- [[ground-truth-reliability-aied]] — Thomas et al.: formative systems using AI labels need validity evidence beyond inter-rater agreement
- [[sequenced-ai-feedback-learning]] — Cao et al. RCT: sequenced AI feedback harmed learning vs. direct feedback despite better engagement
-
- [[retrieval-augmented-tutoring-algorithm-kite]] — KITE's simulated-student evaluation framework for tutoring feedback
- [[llm-student-misconception-identification]] — Misconception-specific interventions enabled by LLM diagnosis
- [[teacher-authored-prompts-student-ai-dialogue]] — DOK and instructional intent alignment in assessments

- [[llm-feedback-programming-classroom]] — LLM-generated feedback as formative assessment in programming
- [[vismatic-secure-sandbox-cs-education]] — Process-oriented monitoring for formative assessment in AI era
- [[foxglove-writing-feedback-experts-llms]] — Goal-oriented and anchored feedback for formative writing assessment- [[cross-dataset-bloom-question-classification]] -- LLMs with tailored prompting generalize better than supervised models for cross-dataset Bloom taxonomy classification
- [[llm-chatbots-cs-multiple-choice]] -- ChatGPT answers with explanations do not improve student MCQ performance; GPT-4o/5 outperform smaller models
- [[ai-assessment-human-tutors]] -- AI-driven assessment of human tutor training performance correlates with real-li...
- [[learning-to-prompt-adaptive-tutoring]] -- Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring
- [[confidence-aware-student-drawing-assessment]] -- Confidence-Aware Automated Assessment of Student-Drawn Scientific Models
- [[psyscore-essay-scoring-zpd-feedback]] -- PsyScore: A Psychometrically-Aware Framework for Trait-Adaptive Essay Scoring and ZPD-Scaffolded Feedback
- [[correct-answer-trap-misconceptions]] -- Fine-tuned classifiers detect only 57% of hidden student misconceptions, while reasoning models reach 84% but at 8:1 false alarms — a detect-verify-escalate pipeline with diagnostic follow-up questions is proposed.
- [[adaptive-pretesting-retention]] -- Adaptive AI pretesting boosts initial learning, but long-term retention over 7 weeks depends on subsequent retrieval practice — learner-directed AI study underperforms structured retrieval.
- [[machines-misread-pedagogical-quality]] -- Human-machine disagreements in AI pretest evaluation are systematic; rubric revision has a larger alignment effect than rationale-first evaluation, and the two are complementary.
- [[critical-engagement-code-completion]] — measuring critical engagement with AI code completion
- [[cogtax-cognitive-taxonomy]] — formative assessment tools
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated Grading of Linux/Bash Examinations Using Large Language Models
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — From Answer Generators to Reasoning Facilitators: Designing AI Tutors for Mathem
- [[evaluating-interactivity-automated-assessment-ai-generated-explorable-explanations]] — Evaluating Interactivity: Toward Automated Assessment of AI-Generated Explorable
- [[prompt-coach-agentic-tutor-prompt-engineering]] — Self-correction oriented tutoring
- [[aied-unfinished-mission-bypass]] — AIED's Unfinished Mission
- [[llm-design-problems-hot-pjbl]] — HOT assessment method (2026-07-14)
- [[teaching-feedback-classification-benchmark]] — Formative feedback (2026-07-14)
- [[learning-engagement-assistant-lea]] — agentic RAG+KC tutoring system; first real-student classroom deployment (n=8) and cross-course scalability test
- [[mllm-scientific-visualization-literacy]] — assessment instrument for visualization competence
- [[assessment-team-problem-solving-computing-education]] — Assessment in Team Problem-Solving Exercises in Computing Education
- [[automated-formative-assessments-a-level-sciences]] — Automating the marking of handwritten mock exams enables much higher formative-assessment frequency 
- [[llm-psychometric-calibration-cdp]] — CDP framework dramatically improves LLM-simulated examinee alignment with human ...
- [[llm-misconception-difficulty-easy-trap]] — LLMs systematically underestimate misconception-driven item difficulty ('Easy Tr...
- [[icle-plus-plus-essay-scoring]]
- [[socratic-tests-conversational-assessment]]
- [[responsible-assessment-ai-era-stanford-2026]] — Stanford convening on extending formative assessment with AI feedback loops
