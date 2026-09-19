---
title: "LLM-generated formative feedback in education: A qualitative systematic literature review"
created: "2026-08-16T10:55:19-04:00"
updated: "2026-09-19T09:38:08-04:00"
type: article
pedagogy: [self-regulated-learning]
technology: [generative-ai, llm]
assessment: [feedback, feedback-literacy, formative-assessment]
research_method: [systematic review]
sources: ['raw/papers/llm-formative-feedback-systematic-review-2026.md']
confidence: high
audience: [educators, researchers]
level: [higher ed]
page_kind: [synthesis]
---

> **Synthesis:** Maier, Seibold, and Klotz (2026) conduct a [[qualitative-research|qualitative]] systematic [[meta-analysis-systematic-review|literature review]] following PRISMA 2020 guidelines, synthesizing 47 peer-reviewed empirical studies (2023–2026: 3 in 2023, 13 in 2024, 24 in 2025, 7 in 2026) containing 121 distinct research questions on [[generative-ai|LLM-generated formative feedback]]. The search covered ERIC, Scopus, IEEE Xplore, SpringerLink, and ScienceDirect (an initial November 2025 pass yielded 268 unique records; an expanded February 2026 pass produced 638 unique documents, reduced to 429 peer-reviewed journal articles, 69 full texts examined, and 47 retained). Using deductive and inductive qualitative content analysis (Mayring), the review maps three research questions spanning theory, methodology, and empirical findings. The literature is grounded in five broad theoretical families — formative [[feedback]] theory, [[self-regulated-learning]] and motivational–[[affective-computing|affective]] theories, general [[learning-theories]], [[discipline-specific-aied|domain-specific]] frameworks, and technology-acceptance/human–AI frameworks — and is dominated by short-term experiments, quasi-experimental classroom studies, and expert evaluations, mostly in [[higher-ed]]. Most studies use proprietary GPT-3.5/GPT-4 with context-enriched, role-based zero-shot or few-shot prompting; fine-tuned, [[open-source]], and multi-agent approaches are emerging. Empirically, [[llm]] feedback consistently beats no-feedback conditions, improving revision quality, [[motivation]], and short-term learning, sometimes approaching teacher feedback under well-designed prompting — but recurring risks ([[hallucination-risk|hallucinations]], over-positivity, misclassification) call for mitigation via instruction fine-tuning, grounding prompts in student artifacts, and teacher-in-the-loop oversight.

## Key Findings

**Scalable formative feedback.** Since late 2022, instruction-tuned LLMs have enabled scalable generation of elaborated, contextualized [[formative-assessment|formative feedback]] for text-based student assignments across domains, moving beyond correctness-based responses to higher-order, criterion-based guidance.

**Search and selection.** Five databases were searched; after deduplication 638 unique documents were reduced to 429 peer-reviewed journal articles, of which 90 abstracts flagged by Elicit Pro semi-automated screening were manually reviewed and 69 full texts examined; 22 were excluded (lacking empirical feedback data, non-educational domains, synthetic datasets), leaving 47 studies from groups mainly in the USA, China, and Germany.

**Theoretical grounding.** Five theoretical families anchor the field: formative feedback theory (Hattie & Timperley's "Where am I going? / How am I going? / Where to next?" used as an evaluation rubric), SRL and motivational–affective theory ([[self-determination-theory]], expectancy-value, control-value), general learning theories (Vygotsky's ZPD, [[cognitive-offloading|Cognitive Load]] Theory), domain-specific frameworks (SLA and Written Corrective Feedback, Toulmin's argumentation), and technology-acceptance/human–AI frameworks.

**[[research-methods-aied|Methodological]] profile.** Studies are dominated by short-term experiments, quasi-experimental classroom studies, and expert evaluations of feedback quality, mostly in [[higher-ed]]; feedback was examined along three dimensions — feedback quality, feedback processing, and [[learning-gains]].

**Technological trends.** Most studies deploy proprietary, pre-trained GPT-3.5/GPT-4 with context-enriched, role-based zero-shot or few-shot [[prompt-engineering]]; instruction fine-tuning, open-source models, and multi-agent designs are beginning to emerge.

**Empirical findings.** LLM-generated feedback consistently outperforms no-feedback conditions and often improves revision quality, motivation, and short-term learning outcomes, sometimes approaching teacher feedback under well-designed prompting — central to the knowledge base's [[feedback]] and [[ai-feedback-quality]] concepts.

**Recurring risks and mitigations.** Hallucinations, over-positivity, and misclassification of student work recur; emerging evidence indicates that instruction fine-tuning, grounding prompts in student artifacts, and [[human-ai-collaboration|teacher-in-the-loop]] oversight can mitigate these issues.

## What this means for practice

- **Instructors.** Ground the feedback prompt in the student's own submitted artifact rather than the task description alone; the review finds this, together with context-enriched role-based prompting, is what lets LLM feedback approach teacher feedback and is the strongest reported mitigation for [[hallucination-risk|hallucinations]] and misclassification.
- **Instructors.** Design against over-positivity before deploying: LLM feedback consistently beat no-feedback conditions on revision quality, [[motivation]], and short-term outcomes, but the reviewed studies repeatedly report over-positive and inaccurate feedback, so attach explicit criteria and a teacher spot-check.
- **Instructors.** Use Hattie and Timperley's three questions — Where am I going? How am I going? Where to next? — as the rubric for judging generated feedback, since that structure is the most common evaluation framework across the 47 reviewed studies.
- **Researchers.** Report model, version, prompting strategy, and grounding data in full; the field is dominated by proprietary GPT-3.5/GPT-4 zero-shot and few-shot work, with instruction fine-tuning, open-source models, and multi-agent designs only emerging, so technical reporting is the binding constraint on synthesis.
- **Researchers.** Move past short-term quasi-experiments in higher education alone: that design dominates the evidence base, so the field cannot yet support claims about durable learning or transfer beyond short-term revision quality.

## Limitations

- The review retains 47 studies, all English-language peer-reviewed journal articles published 2023–2026 and indexed in five databases (ERIC, Scopus, IEEE Xplore, SpringerLink, ScienceDirect); conference papers and other publication types were excluded, leaving Gray literature and non-English work out of scope.
- Screening of the 638 deduplicated records was semi-automated through Elicit Pro, with manual abstract review of the 90 papers it flagged and 69 full texts examined before 22 were excluded, so the final set depends on one vendor's screening tool.
- Two co-authors independently audited only 30% of extraction entries, leaving the rest single-coded by the lead author, and the synthesis is interpretive Mayring-style content analysis rather than meta-analysis, so no pooled effect size is available across the 121 research questions.

## Connected Concepts

- [[feedback]]
- [[formative-assessment]]
- [[llm]]
- [[feedback-literacy]]
- [[self-regulated-learning]]

## Connected Articles

- [[gpt-human-rater-essay-assessment-2026]] — GPT vs. human raters in essay assessment
- [[aaiwa-ai-authentic-assessment-metacognition-2026]] — AI-mediated authentic assessment
- [[llm-automated-grading-programming-comparison-2026]] — LLM grading in programming education
- [[chatgpt-academic-writing-quality-ownership-2026]] — ChatGPT in academic writing

## Citation

Maier, U., Seibold, M., & Klotz, C. (2026). [*LLM-generated formative feedback in education: A qualitative systematic literature review*](https://doi.org/10.1016/j.caeo.2026.100374). *Computers and Education Open*, 100374. https://doi.org/10.1016/j.caeo.2026.100374
