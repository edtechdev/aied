---
title: "Generative AI offers more, but students revise less: comparing the effects of teacher and AI feedback on student essay revisions"
created: "2026-08-23T14:00:00-04:00"
updated: "2026-09-19T08:49:57-04:00"
type: article
pedagogy: [student-ai-interaction]
technology: [generative-ai, prompt-engineering]
assessment: [ai-feedback-quality, assessment, feedback, formative-assessment]
connected_faqs: [ai-feedback-at-scale]
research_method: [experiment]
discipline: [writing education]
level: [higher ed]
sources: ['raw/papers/farrokhnia-genai-feedback-student-revisions-2026.md']
confidence: high
audience: [instructors, assessment designers, educators]
---

> **Synthesis:** Farrokhnia et al. (2026) run a randomized three-group experiment with 70 university students to compare teacher feedback against ChatGPT feedback produced with two prompting techniques — Zero-shot and chain-of-thought (CoT) — for argumentative essay writing in Persian. They find that CoT prompting yields significantly higher-quality feedback than both Zero-shot prompting and a human teacher, but that this quality advantage does not translate into greater essay revision gains. Teacher feedback, rated lower in quality, produces comparable improvement in revised essays. The authors conclude that feedback quality alone is insufficient; students' [[student-engagement|engagement]] with and uptake of feedback are the decisive factors, motivating a hybrid model in which teachers help students interpret and apply [[generative-ai|GenAI]] feedback.

## Core Finding

**Higher-quality AI feedback does not automatically produce better student revisions — what matters is whether and how students engage with and act on the feedback.** In a randomized experiment, chain-of-thought prompting produced objectively higher-quality feedback on argumentative essays than both Zero-shot prompting and an experienced human teacher, yet the CoT group did not revise its essays significantly more than the teacher-feedback group, which saw comparable gains. This decoupling of feedback quality from [[learning-gains|learning gains]] is the paper's central and somewhat counterintuitive result: it challenges the assumption that improving the "quality" of generated feedback is sufficient to improve writing outcomes, and redirects attention to students' active [[feedback|feedback uptake]] and interpretation.

## Prompt Engineering and Feedback Quality

The study directly interrogates [[prompt-engineering]] as a determinant of GenAI feedback quality. The Zero-shot prompt gave ChatGPT a direct instruction to generate feedback from an argumentation rubric, while the CoT prompt guided the model through a step-by-step evaluation with an elaborated example. One-way ANOVA (F(2,67) = 6.09, p = .004, ηp² = 0.15) showed CoT feedback (M=12.90) significantly outperformed both Zero-shot (M=11.25, p=.01) and teacher feedback (M=11.20, p=.008), with no significant difference between Zero-shot and teacher. The authors interpret this as CoT's stepwise reasoning aligning GenAI outputs more closely with the cognitive demands of argumentative writing — and frame prompt design within explainable AI principles. This is a valuable empirical contribution to the knowledge base's [[prompt-engineering]] and [[ai-feedback-quality]] concepts.

## Why Quality Did Not Translate into Revision Gains

The finding that teacher feedback — rated lower in quality — produced comparable revision improvements highlights the critical role of [[feedback-literacy]] and student [[agency]]. The authors note that high-quality feedback should be specific and actionable, but its effect depends on students' willingness and ability to implement it. Notably, GenAI feedback quality was significantly associated with students' initial essay quality, whereas teacher feedback quality showed no such association — meaning GenAI responded differently depending on how strong the initial draft was, while the teacher calibrated more consistently. The study's Persian-language setting also extends GenAI-feedback [[research-methods-aied|research]] beyond [[language-learning|English]]-dominant contexts, testing generalizability in a linguistically underrepresented language.

## Relevance to the Knowledge Base

This is a tightly controlled experimental contribution to the knowledge base's feedback cluster. It provides causal, comparative evidence that links [[ai-feedback-quality]], [[prompt-engineering]], and learning outcomes in [[higher-ed]], and it resonates strongly with the knowledge base's existing coverage of AI-generated feedback, essay scoring, and teacher-vs-AI comparisons. It also gives concrete guidance for [[learning-design]]: prompt technique matters for feedback quality, but [[pedagogy]] (scaffolding uptake) matters for learning.

## What this means for practice

- **Instructors.** Do not treat higher-rated AI feedback as a proxy for better writing: chain-of-thought feedback scored highest (M=12.90 vs. teacher M=11.20) yet produced no significantly greater revision gains.
- Adopt hybrid feedback systems in which teachers scaffold students' interpretation and application of GenAI feedback rather than deploying it standalone, since [[feedback-literacy]] and uptake, not generation quality, are the mechanism the authors identify.
- **Assessment designers.** Reserve teacher time for interpretation and follow-through, where the teacher's advantage lay: teacher feedback quality was calibrated across drafts while GenAI tracked the quality of the initial essay.
- Use chain-of-thought [[prompt-engineering]] when feedback quality itself is the target; it outperformed zero-shot prompting (M=11.25) as well as teacher feedback on rubric quality.

## Limitations

- 70 students from a single Iranian university, mostly female and drawn from educational sciences; the authors note single-site, homogeneous samples reduce generalizability.
- Only one teacher and one essay task were used, so the study cannot separate teacher effects from the feedback condition.
- The feedback-quality rubric covered structural features only, which the authors say may have overstated GenAI feedback quality by ignoring tone, perceived usefulness, and affective dimensions.
- No significant between-group differences in revision performance were found, so the comparative claims rest on feedback quality rather than measured learning outcomes.

## Connected Concepts

- [[feedback]]
- [[ai-feedback-quality]]
- [[generative-ai]]
- [[prompt-engineering]]
- [[writing-education]]
- [[assessment]]
- [[higher-ed]]
- [[formative-assessment]]
- [[student-ai-interaction]]
- [[teacher-role]]
- [[trust]]

## Connected Articles

- [[ai-generated-feedback-higher-ed]]
- [[genai-teacher-feedback-comparison]]
- [[llms-do-not-grade-essays-like-humans-2026]]
- [[ai-assisted-instructor-supervised-grading-feedback]]

## Citation

Farrokhnia, M., Latifi, S., Papadopoulos, P. M., Hogenkamp, L., Gijlers, H., Khosravi, H., & Noroozi, O. (2026). [*Generative AI offers more, but students revise less: comparing the effects of teacher and AI feedback on student essay revisions*](https://doi.org/10.1186/s41239-026-00579-9). *International Journal of Educational Technology in Higher Education*.
