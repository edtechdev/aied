---
title: "Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing"
created: "2026-09-24T09:11:53-04:00"
updated: "2026-09-24T09:11:53-04:00"
type: article
published: "2026-09-23"
sources: ['raw/papers/llm-feedback-focus-adaptivity-student-writing-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [writing education]
level: [higher ed]
audience: [instructors, researchers]
foundations: [teacher-role]
technology: [llm, generative-ai, educational-nlp, prompt-engineering]
assessment: [feedback, ai-feedback-quality, automated-assessment]
methods: [benchmark, ai-ed-evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Most evaluations of [[ai-feedback-quality|AI feedback]] ask whether a comment is accurate or well written; Almousa and colleagues ask what expert teachers focus on and whether models do the same. They refine Narciss's taxonomy into seven feedback focus types and annotate [[teacher-role|teacher]] and [[llm|LLM]] paragraph-level [[feedback]] across three [[higher-ed|university]] writing courses, releasing FEEDTYPE with six models' output under three [[prompt-engineering|prompting strategies]]. Coverage looks healthy, since most models produce nearly every focus type, but their distributions diverge sharply from the teachers'. Only the educationally fine-tuned LearnLM lands close to the teacher distribution, and no model reproduces the teacher's [[adaptive-learning|adaptive]] shifts across draft stages or student performance levels.

## Key Findings

1. **Coverage is not alignment.** Under zero-shot prompting LearnLM, Llama-7B and Mistral-7B covered all seven focus types, while Gemini and Mistral-24B missed Praise and Qwen-70B missed Other, so full coverage said little about proportions.
2. **The best-aligned model was built for teaching.** LearnLM had the lowest Jensen-Shannon divergence from the teacher distribution (0.1344), ahead of Llama-7B (0.1619) and Mistral-24B (0.1780); Mistral-7B was furthest at 0.2695.
3. **Most models over-produce one focus type.** Gemini, Qwen-70B and Mistral-7B assigned more than 50% of their feedback to Elaboration and Llama-7B gave over 60% to Mistakes, while LearnLM and Mistral-24B kept every type below 50%.
4. **Prompting barely closed the gap.** Giving models category names or worked examples increased divergence for most of them; only Mistral-7B improved (0.2695 to 0.2398), leaving the zero-shot baseline closest to teachers.
5. **Teachers adapt across drafts; models mostly do not.** The teacher changed significantly on five focus types between draft stages, the closest model (Mistral-24B) on three, Mistral-7B on none; teacher Praise rose from 26.9% initially to 84.9% in final drafts.
6. **Adapting to student performance is thin and narrow.** The teacher differentiated high and low performers on Task Constraints and Praise; Gemini and Mistral-24B moved on Clarification, LearnLM on Mistakes, Qwen-70B on Elaboration; the two smallest models never moved.
7. **A released [[benchmark]], not only a finding.** FEEDTYPE publishes annotated teacher and LLM feedback across [[writing-education|composition]], ESL composition and fiction courses, with a Gemini 2.0 Flash annotator matching human labels at κ = 0.78.

## Turning feedback focus into seven annotatable types

Feedback focus is what a comment is about, and prior work either conflated it with the feedback's function or reduced it to broad categories. The authors adapt Narciss's content-based taxonomy to written feedback: they retain Task Constraints, Concepts and Mistakes, reinterpret procedural guidance as Elaboration, since writing advice asks students to develop ideas, reinterpret knowledge of the correct response as Clarification, because teachers ask writers to explain their meaning, drop the simple components as suited to closed-ended tasks, and add Praise and Other. Feedback was sampled as paragraph-level comments from three first-year courses drawn from the SEFORA corpus, a form of expert response rarely evaluated. Two authors refined the coding manual over four pilot rounds of 50 comments, reaching Cohen's κ = 0.774, and Gemini 2.0 Flash annotated at scale after passing accuracy, Alt-Test (ω = 0.67) and validity checks.

## Coverage is high, distribution alignment is not

Coverage was measured as the share of teacher focus types a model emits at least once, and alignment as Jensen-Shannon divergence from the aggregated teacher reference. Divergence moves opposite to coverage: the three models covering everything under zero-shot were not the best aligned, and the two that missed a type were among the most divergent. Distribution shape explains why. LearnLM and Mistral-24B spread feedback across types so no single category dominated, staying close to teachers, who distribute feedback fairly evenly. The others collapsed onto one preference, Elaboration or Mistakes, which the authors warn may yield repetitive, narrow [[feedback]] that overlooks other aspects of a draft. Adding definitions or examples did not fix this: it increased divergence for most models and helped only Mistral-7B.

## Adaptivity: teachers shift, models mostly do not

Both adaptivity questions were restricted to the composition course, because the fiction course lacks drafts and the ESL course showed limited variation in teacher focus types. Using Fisher's Exact Test on adjacent draft stages, the teacher changed significantly on five focus types, moving from Task Constraints (29.3% to 6.5%) and Elaboration (23.8% to 1.1%) early toward Praise (26.9% to 84.9%) late, consistent with advice that early drafts deserve content attention. The closest model, Mistral-24B, changed on three types; Llama-7B, Gemini and LearnLM on two or fewer; Qwen-70B on one; Mistral-7B on none. Every adaptive model shifted on Mistakes and Elaboration, the types it produces most often. For [[differential-effects-across-learner-groups|student performance]], a median split on essay grades showed the teacher differentiating high and low performers on Task Constraints and Praise, while each adaptive model moved on one focus type and only large or closed models adapted at all.

## What this means for practice

- **Instructors.** Check the focus mix of [[generative-ai|generative]] feedback before adopting it, because covering every focus type can coexist with a distribution unlike your own commenting.
- **Instructors.** Do not expect prompt tweaks to close the gap: category definitions or examples made most models more divergent from teachers, so treat focus-type instructions as something to test.
- **Instructional designers.** Build checks that feedback actually shifts across drafts and performance levels, since models changed mainly in the focus types they already over-produce.
- **[[educational-technology-developers|Educational technology developers]].** Audit a model's focus distribution against a teacher reference using FEEDTYPE, because distribution similarity is measurable and does not track model size.

## Limitations

- The adaptivity analysis rests on one composition course taught by a single instructor, so the teacher's adaptive pattern is a narrow reference that may not generalize to other instructors or writing contexts.
- Only paragraph-level feedback was studied; holistic essay-level comments, also common in expert practice, were not annotated.
- Three prompting strategies were compared and no fine-tuning was attempted, so fine-tuned or pedagogically instructed models may align differently.
- LLM annotations came from a single model, Gemini 2.0 Flash, validated against human labels.

## Connected Concepts

- [[ai-feedback-quality]] — the evaluation tradition this paper extends by adding focus and adaptivity
- [[automated-assessment]] — machine-generated evaluative commentary on student work
- [[benchmark]] — FEEDTYPE as a released resource for pedagogical alignment studies
- [[educational-nlp]] — the subfield building and evaluating feedback generation systems
- [[feedback]] — the parent construct whose content is here classified into focus types
- [[generative-ai]] — the model class whose pedagogical alignment is under test
- [[llm]] — the six models prompted under three strategies
- [[limitations-in-aied-research]] — the single-course, single-instructor scope of the adaptivity claims
- [[prompt-engineering]] — the intervention that failed to move models toward teacher distributions
- [[teacher-role]] — expert teaching practice as the reference standard
- [[writing-education]] — the disciplinary setting of the study

## Connected Articles

- [[llm-formative-feedback-systematic-review-2026]] — LLM-generated formative feedback in education: A qualitative systematic literature review
- [[teaching-feedback-classification-benchmark]] — A Durability and Cross-Language Transfer Benchmark for a Validated Teaching-Feedback Classification Protocol
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: Examining Linguistic Biases in Personalized Automated Writing Feedback
- [[ai-feedback-adaptivity-children-plans-2026]] — Adaptivity Makes Feedback Effective: Evidence From AI-Generated Feedback on Children's Plans
- [[llm-judged-helpfulness-pedagogy-signal]] — Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models
- [[llm-pedagogical-behavior-ai-tutoring-2026]] — LLM Pedagogical Behavior in AI Tutoring Interactions
- [[repeated-ai-writing-feedback-semester]] — Student Evaluation of Repeated AI Feedback Across a Semester of Writing
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Neuro-symbolic pedagogical alignment (NSPA) for long-horizon classroom discourse analysis: Mitigating dialect bias via counterfactual preference optimization
- [[peer-group-vs-ai-feedback-2026]] — Comparative analysis of peer group and AI-generated feedback in peer assessment: Insights into feedback quality and student perceptions in higher education

## Citation

Almousa, N., Peyghambari Oskoui, S., Coelho, R., Rogers, G., Li, X. L., & Litman, D. (2026). [*Evaluating feedback focus and pedagogical adaptivity in LLM-generated feedback on student writing*](https://arxiv.org/abs/2609.28026). arXiv preprint.