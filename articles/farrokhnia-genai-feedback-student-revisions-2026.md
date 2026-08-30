---
title: "Generative AI offers more, but students revise less: comparing the effects of teacher and AI feedback on student essay revisions"
created: "2026-08-23T14:00:00-04:00"
updated: "2026-08-23T14:00:00-04:00"
type: article
tags: [feedback, ai-feedback-quality, generative-ai, prompt-engineering, writing-education, assessment, higher-ed, formative-assessment, student-ai-interaction]
research_method: [experiment]
discipline: [writing education]
level: [higher ed]
category: [assessment]
sources: ['raw/papers/farrokhnia-genai-feedback-student-revisions-2026.md']
confidence: high
---

> **Synthesis:** Farrokhnia et al. (2026) run a randomized three-group experiment with 70 university students to compare teacher feedback against ChatGPT feedback produced with two prompting techniques — Zero-shot and chain-of-thought (CoT) — for argumentative essay writing in Persian. They find that CoT prompting yields significantly higher-quality feedback than both Zero-shot prompting and a human teacher, but that this quality advantage does not translate into greater essay revision gains. Teacher feedback, rated lower in quality, produces comparable improvement in revised essays. The authors conclude that feedback quality alone is insufficient; students' [[student-engagement|engagement]] with and uptake of feedback are the decisive factors, motivating a hybrid model in which teachers help students interpret and apply [[generative-ai|GenAI]] feedback.

## Core Finding

**Higher-quality AI feedback does not automatically produce better student revisions — what matters is whether and how students engage with and act on the feedback.** In a randomized experiment, chain-of-thought prompting produced objectively higher-quality feedback on argumentative essays than both Zero-shot prompting and an experienced human teacher, yet the CoT group did not revise its essays significantly more than the teacher-feedback group, which saw comparable gains. This decoupling of feedback quality from [[learning-gains|learning gains]] is the paper's central and somewhat counterintuitive result: it challenges the assumption that improving the "quality" of generated feedback is sufficient to improve writing outcomes, and redirects attention to students' active [[feedback|feedback uptake]] and interpretation.

## Prompt Engineering and Feedback Quality

The study directly interrogates [[prompt-engineering]] as a determinant of GenAI feedback quality. The Zero-shot prompt gave ChatGPT a direct instruction to generate feedback from an argumentation rubric, while the CoT prompt guided the model through a step-by-step evaluation with an elaborated example. One-way ANOVA (F(2,67) = 6.09, p = .004, ηp² = 0.15) showed CoT feedback (M=12.90) significantly outperformed both Zero-shot (M=11.25, p=.01) and teacher feedback (M=11.20, p=.008), with no significant difference between Zero-shot and teacher. The authors interpret this as CoT's stepwise reasoning aligning GenAI outputs more closely with the cognitive demands of argumentative writing — and frame prompt design within explainable AI principles. This is a valuable empirical contribution to the knowledge base's [[prompt-engineering]] and [[ai-feedback-quality]] concepts.

## Why Quality Did Not Translate into Revision Gains

The finding that teacher feedback — rated lower in quality — produced comparable revision improvements highlights the critical role of [[feedback-literacy]] and student [[agency]]. The authors note that high-quality feedback should be specific and actionable, but its effect depends on students' willingness and ability to implement it. Notably, GenAI feedback quality was significantly associated with students' initial essay quality, whereas teacher feedback quality showed no such association — meaning GenAI responded differently depending on how strong the initial draft was, while the teacher calibrated more consistently. The study's Persian-language setting also extends GenAI-feedback research beyond [[language-learning|English]]-dominant contexts, testing generalizability in a linguistically underrepresented language.

## Implications for Practice

The authors advocate for **hybrid intelligent feedback systems** in which teachers [[scaffolding|scaffold]] students' interpretation and application of GenAI feedback, rather than treating AI as a standalone replacement for the instructor. This aligns the paper with the knowledge base's [[human-ai-collaboration]] and [[teacher-role]] concepts, and with [[writing-education]] practice: GenAI can generate rich, structured, scalable feedback, but the human teacher remains essential for helping students engage with it meaningfully. For [[assessment]] and [[formative-assessment]], the result cautions against assuming better AI feedback automatically yields better learning.

## Relevance to the Knowledge Base

This is a tightly controlled experimental contribution to the knowledge base's feedback cluster. It provides causal, comparative evidence that links [[ai-feedback-quality]], [[prompt-engineering]], and learning outcomes in [[higher-ed]], and it resonates strongly with the knowledge base's existing coverage of AI-generated feedback, essay scoring, and teacher-vs-AI comparisons. It also gives concrete guidance for [[instructional-design]]: prompt technique matters for feedback quality, but [[pedagogy]] (scaffolding uptake) matters for learning.

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
