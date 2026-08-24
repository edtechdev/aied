---
title: "Generative AI-enhanced learning experiences for computational thinking: A systematic scoping review and design guidelines"
created: "2026-08-10T17:08:30-04:00"
updated: "2026-08-24T16:35:00-04:00"
type: article
tags: [generative-ai, higher-ed, computational-thinking, ai-tutoring, systematic-review, design-guidelines, ai-education, cs-education]
sources: ['raw/papers/generative-ai-enhanced-learning-experiences-for-computational-thinking-a-systema.md']
confidence: high
---

> **Synthesis:** Ouaazki, Shibani, Knight, and Holzer conduct a systematic [[meta-analysis-systematic-review|scoping review]] of studies (screened from 1,198 initial results) examining how [[generative-ai|Generative AI]] is used to support the teaching of [[computational-thinking|computational thinking]] (CT), and derive design guidelines. The field is young but rapidly growing: most interventions target undergraduate students on basic programming tasks, often using off-the-shelf tools with limited integration. GenAI typically plays one of four roles — **coder, tutor, debugger, or ideator** — with mixed effects on [[learning-gains|learning outcomes]]. A central challenge is the tension between **overreliance by beginners**, who may offload thinking to GenAI, and **under-utilization by advanced learners** in complex projects. Seven design guidelines distill how to integrate GenAI for CT effectively while minimizing risks.

## Key Findings

- **Young but rapidly growing field.** From 1,198 articles screened in October 2024, the included studies show most GenAI-for-CT interventions focus on undergraduate students and basic programming tasks, frequently using off-the-shelf tools with limited integration into the course.
- **Four recurring GenAI roles.** GenAI is typically used as a **coder**, **tutor**, **debugger**, or **ideator**, with mixed (sometimes null) effects on learning outcomes depending on how the tool is configured and scaffolded.
- **The overreliance–under-utilization tension.** Beginners tend to over-rely on GenAI, offloading their thinking (see [[cognitive-offloading]]), while advanced learners may under-use it in complex projects — a two-sided design problem that no single configuration solves.
- **Coding assistance can support or supplant learning.** Using GenAI to generate or debug code can enhance learning when combined with [[computational-thinking]] concepts in open-ended projects, but can undermine skill acquisition when it bypasses the learner's own algorithmic thinking.
- **Seven design guidelines** (below) provide actionable direction for educators and system designers.

## The seven design guidelines

1. **Guide GenAI use for beginners** — explain the risks and promote tutor-style [[prompt-engineering|prompting]] to support students in using GenAI as-is, while protecting against uncritical acceptance.
2. **Confine GenAI interactions for novice and young learners** — for teenagers and beginners, use GenAI in a controlled, limited manner.
3. **Combine GenAI with CT concepts in open-ended projects** — expand GenAI's role beyond solution generation to include coding, debugging, and ideation within tasks that require students to engage CT concepts themselves.
4. **Explore advanced learning-experience integration** — leverage GenAI in more advanced roles (e.g., as a pair-programmer) to promote higher-order [[student-engagement|engagement]] and [[self-regulated-learning|self-regulated learning]] (e.g., [[socratic-method|Socratic]]-style prompting).
5. **Measure outcomes for reflection** — embed mechanisms that promote both learner and instructor reflection on GenAI use, since the review finds outcome measurement is often weak.
6. **Design learning experiences with digital [[ethics]] and integrity in mind** — address privacy, bias, and [[academic-integrity|academic integrity]] concerns, mitigating issues by design (e.g., privacy-by-design).
7. **Rethink targeted skills for CT** — evaluate which skills students should actually acquire in CT education, balancing instruction between algorithmic thinking and other CT dimensions.

## Implications

This review gives educators and [[ai-education|AI-in-education]] designers a roadmap for using GenAI to teach CT without sacrificing the underlying [[computational-thinking]] skills. The overreliance/under-utilization tension means the same tool needs different [[scaffolding]] for different learner levels — guidance and tutor-style prompting for beginners, richer open-ended integration for advanced learners. The seven guidelines align with the broader shift from seeing [[generative-ai|GenAI]] as an answer-provider to treating it as a scaffolded partner in [[cs-education|CS education]] and CT, and echo the wiki's emphasis on distinguishing genuine [[learning-gains|learning]] from mere performance (see [[genai-performance-vs-learning]]).

## Connected Concepts

- [[generative-ai]] — the technology under review
- [[computational-thinking]] — the skill GenAI is used to teach
- [[ai-education]] — the umbrella field
- [[cs-education]] — CT's disciplinary home
- [[learning-gains]] — the outcome most reviews find mixed
- [[cognitive-offloading]] — the overreliance risk for beginners
- [[self-regulated-learning]] — supported via advanced GenAI roles
- [[academic-integrity]] — an ethical guideline target

## Connected Articles

- [[liang-genai-systematic-review-human-ai-2026]]
- [[learning-by-chatting-genai-impact]]
- [[genai-usage-design-students-survey]]
- [[genai-mindtool-generative-learning]]
- [[computational-thinking-ai-agent-creation]]
- [[astor-computational-thinking-meta-review-2026]]

## Citation

Ouaazki, A., Shibani, A., Knight, S., & Holzer, A. (2026). [*Generative AI-enhanced learning experiences for computational thinking: A systematic scoping review and design guidelines*](https://doi.org/10.1016/j.caeai.2026.100608). *Computers and Education: Artificial Intelligence*, 10, 100608.
