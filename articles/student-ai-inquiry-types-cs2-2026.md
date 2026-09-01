---
title: "Analysis of Types of Inquiries in Student-AI Interaction: A case study of two CS2 tasks"
created: "2026-08-20T02:55:00-04:00"
updated: "2026-08-24T12:00:00-04:00"
type: article
tags: [student-ai-interaction, cs-education, llm, prompt-engineering, higher-ed, student-experience, learning-analytics, generative-ai, intelligent-tutoring, cognitive-offloading, problem-solving]
research_method: [survey, learning analytics]
discipline: [cs education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2608.17919.md']
confidence: high
---

> **Synthesis:** This study analyzes the **types of questions** students ask [[generative-ai|generative AI]] systems during programming problem solving, classifying 830 interactions of CS2 students across two tasks using the Graesser et al. 18-type inquiry taxonomy via a [[llm|few-shot]] classifier. It finds that a small subset of question types — chiefly assertion, verification, and instrumental/procedural prompts — accounts for the majority of student inquiries, and that the types of questions students ask shift substantially as a task progresses, from confusion-reporting toward more directive, procedural use. A second, descriptive finding distinguishes first-generation from continuing-generation students: continuing-generation students treated the AI as an active [[problem-solving]] partner, while first-generation students adopted a more confirmatory, validation-oriented role and asked fewer questions overall. The work connects [[cs-education]], [[prompt-engineering]], and [[learning-analytics]] to the under-explored question of what students actually ask AI, with implications for [[intelligent-tutoring]] design, [[help-seeking]] scaffolds, and the cognitive character of [[cognitive-offloading|over-reliance]] on AI.

## Key Findings

1. **Skewed inquiry distribution**: a small subset of the 18 Graesser question types accounts for most student inquiries — [[student-ai-interaction|student-AI]] conversations are dominated by repeated help-seeking patterns rather than diverse questioning.
2. **Task-dependent evolution**: question types change substantially as a task progresses and differ across the two programming tasks; students shift from assertion/verification (confusion-reporting) toward instrumental/procedural and directive use as tasks grow more conceptually demanding.
3. **First-generation difference**: first-generation students asked fewer questions than continuing-generation students and leaned on [[feedback|verification]] to confirm correctness, while continuing-generation students used the AI more as a task-driving [[pedagogical-agent|assistant]] — the study's primary [[qualitative-research|qualitative]] finding.
4. **[[research-methods-aied|Methodological]] contribution**: a [[llm|few-shot]] classification approach, grounded in the Graesser et al. taxonomy and cross-validated with multiple models and manual review, that makes large-scale analysis of [[student-ai-interaction]] feasible.

## Why Inquiry Type Matters

Despite the importance of questioning in [[learning-analytics|learning]], students rarely ask enough questions in the classroom — yet they interact extensively with generative AI for learning and problem solving. Understanding **what kinds of questions** students pose to AI systems is therefore central to characterizing the actual learning work happening in [[student-ai-interaction]]. The authors leverage the established Graesser et al. taxonomy (18 question types) to move beyond coarse "how much AI do students use" measures toward a fine-grained account of the cognitive and epistemic character of those interactions. Question asking sits at the heart of [[self-regulated-learning]] and productive [[help-seeking]]: the quality and type of a learner's questions reflect underlying cognitive processes, conceptual understanding, and [[metacognition|metacognitive regulation]]. In computing education specifically, help-seeking is strongly tied to students' ability to overcome programming difficulties, so the structure of their AI-directed questions is a window into whether they are engaging the [[computational-thinking]] work or merely delegating it.

The finding that students lean on a small subset of question types, and that this shifts with task progress, has direct design implications: [[intelligent-tutoring]] and AI-learning systems can be built to invite a wider, more productive range of [[inquiry-based-learning|inquiry]], and instructors can [[scaffolding|scaffold]] question-asking to counter a narrow, habitual interaction style. It also informs debates about [[cognitive-offloading]] — whether students are posing deep, well-formed questions or shallow requests that delegate the cognitive work to the model.

## Methodology: Classifying Inquiries

The study was conducted in Fall 2025 in a second-year CS2 course on object-oriented programming in C++ at a large U.S. public university. Students worked in a purpose-built web-based programming environment with an integrated AI chat assistant (a large language model accessed via the OpenAI API), which logged every prompt, response, timestamp, and user identifier. Across two ~60-minute laboratory sessions — the first on foundational concepts (constructors, encapsulation, method implementation) and the second, two weeks later, on the more conceptually demanding inheritance and polymorphism — 72 unique students generated **830 prompts** (432 in Session 1 across 60 students; 398 in Session 2 across 37 students; 25 participated in both).

To categorize these prompts, the authors adapted the Graesser et al. question taxonomy, which classifies questions into 18 categories by cognitive and functional role — verification, disjunctive, concept completion, feature specification, quantification, definition, example, comparison, interpretation, causal antecedent, causal consequence, goal orientation, enablement, instrumental/procedural, expectation, judgment/evaluation, assertion, and request/directive. Because students rarely asked explicit questions — many prompts were assertions of confusion or direct commands — the taxonomy proved well-suited to capturing the real shape of student-AI interaction. Classification used a **few-shot learning** approach: large language models (GPT-5.2 and Claude) were given the 18 category definitions plus programming-context examples and asked to assign each prompt to the single most appropriate category. Empty or non-informative prompts were removed, disagreements between models and two independent reviewers were resolved by discussion against the taxonomy, and resulting classifications fed both aggregate distribution analysis and a state-machine representation of within-session transitions.

## Findings: How Inquiry Evolves

**Assertion dominated both sessions.** Assertions — statements of confusion, lack of understanding, or problem reports without a specific question — were the most frequent category in both sessions (S1 = 86, S2 = 82), reflecting students' tendency to report issues or express uncertainty rather than formulate explicit questions. Instrumental/procedural prompts became the dominant category in Session 2 (S2 = 104; S1 = 79) as tasks grew more complex, while verification (yes/no correctness confirmation) decreased from S1 = 88 to S2 = 66 and request/directive prompts increased (S1 = 41, S2 = 52). Higher-order categories such as comparison, expectational, feature specification, and enablement stayed minimal in both sessions, indicating that students rarely engaged in comparative, predictive, or deeply inferential questioning. A chi-square test showed a near-significant shift toward procedural, task-oriented inquiry in Session 2 (𝜒²(17) = 27.03, 𝑝 = .0576), though it did not reach conventional significance.

**State-machine dynamics.** In Session 1, students most often began with an assertion (prob ≈ 0.48), whereas in Session 2 they most often started with an instrumental/procedural question (prob ≈ 0.43). In both sessions students lingered within assertion, request/directive, and instrumental/procedural states — evidence that a narrow repertoire of recurring help-seeking patterns dominates the conversational flow.

**Generation differences.** First-generation students asked fewer questions overall than continuing-generation students (e.g., in Session 1, 26 first-generation students asked 161 questions vs. 34 continuing-generation students asking 271). Across both sessions continuing-generation students showed higher mean usage in most question types, with the largest advantages in procedural and directive categories (instrumental/procedural Δ = +1.03, 𝑝 = .013 in Session 1, remaining second-largest in Session 2; request/directive Δ = +1.97 in Session 2). By contrast, first-generation students relied more on verification and expectational questions. The authors interpret this as continuing-generation students approaching the AI as an active problem-solving partner while first-generation students used it to check and validate rather than to generate or explore — a distinction replicated across both independent sessions. Although conversational AI may reduce some interpersonal barriers to classroom help-seeking, these inquiry differences persisted, suggesting AI-supported systems may need scaffolds that encourage first-generation students to formulate questions and engage in more active help-seeking.

## Connections to AI in Education

This is a measurement and characterization study in the [[cs-education]] domain. It complements research on [[prompt-engineering]] by studying real student prompts as they naturally occur in CS2 problem solving, and it feeds [[learning-analytics]] pipelines that aim to infer learning behavior from AI interaction logs. It extends prior [[help-seeking]] work in computing education by moving beyond surveys, perceptions, and usage frequency to the sequential structure of authentic conversational interactions, and it responds to calls for [[conversational-ai|conversational tutoring systems]] that support deeper reasoning rather than simple answer generation. For [[teacher-role|instructors]], the taxonomy offers a lens for noticing when students' questioning patterns are narrow or shallow and for designing interventions that broaden inquiry and address [[equity-in-ai-education|equity]] in AI-supported [[higher-ed|higher education]].

## Implications

- **Design AI-supported programming environments for productive help-seeking.** Because a small subset of question types dominates student-AI conversations, systems should encourage reflective, well-formulated inquiry rather than repeated confirmation-seeking or excessive procedural delegation. Interfaces and prompt scaffolds can broaden the repertoire of question types students reach for.
- **Support first-generation students with scaffolding.** The persistent, descriptive difference in questioning behavior — fewer questions and a more confirmatory, validation-oriented stance — suggests AI-based instructional support should proactively prompt these students to formulate questions, model deeper inquiry, and engage as active problem-solvers rather than answer-checkers, helping close the gap in [[help-seeking]] behavior.
- **Sequence scaffolds to task demands.** Since inquiry shifts from assertion/verification early on toward procedural and directive use as tasks grow more conceptually demanding, interventions should be timed to the conceptual difficulty of the material — especially for [[misconceptions|misconception]]-prone topics such as inheritance and polymorphism — rather than applied uniformly.
- **For learning analytics.** Classifying student prompts into a cognitive taxonomy gives [[learning-analytics]] systems a richer signal than raw usage counts, enabling detection of shallow [[cognitive-offloading|over-reliance]] or narrow question repertoires from interaction logs, with the caveat that differences between sessions conflated task topic, complexity, and familiarity with the AI tool.

## Connected Concepts
- [[student-ai-interaction]]
- [[cs-education]]
- [[prompt-engineering]]
- [[llm]]
- [[generative-ai]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[student-experience]]
- [[higher-ed]]
- [[metacognition]]

## Connected Articles
- [[dura-llm-cs2]] — Demystify, Use, Reflect, Assess (DURA): LLM Integration in CS2
- [[student-llm-interaction-taxonomy-review-2026]] — Student-LLM Interaction Taxonomy Review
- [[teacher-authored-prompts-student-ai-dialogue]] — Teacher-Authored Prompts in Student-AI Dialogue
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Constructing Epistemic AI Literacy
- [[icap-cognitive-engagement-llm-agents]] — ICAP Cognitive Engagement with LLM Agents

## Citation

Amoozadeh, M., & Alipour, A. (2026). [*Analysis of Types of Inquiries in Student-AI Interaction: A case study of two CS2 tasks*](https://arxiv.org/abs/2608.17919). [cs.HC, cs.AI].
