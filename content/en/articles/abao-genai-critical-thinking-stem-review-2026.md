---
title: "Beyond Prompting: Student–GenAI Interaction and Critical Thinking in STEM Education—A Systematic Literature Review"
created: "2026-11-25T09:14:00-05:00"
updated: "2026-11-25T09:14:00-05:00"
published: "2026-11-24"
type: article
authors: ["Rosiebel A. Abao", "Evelyn B. Ballenas", "Vicente A. Pitogo", "Junrie B. Matias"]
venue: "Education Sciences, 16(12), 2013"
evidence_context: educational
foundations: [critical-thinking, ai-literacy]
pedagogy: [student-ai-interaction, self-regulated-learning, metacognition]
technology: [generative-ai, prompt-engineering, llm]
methods: [meta-analysis-systematic-review, qualitative-research]
discipline: [stem education]
level: [higher ed, secondary]
audience: [instructors, researchers, curriculum designers]
page_kind: [synthesis]
research_method: [literature review, thematic analysis]
sources: ["raw/papers/abao-genai-critical-thinking-stem-review-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Abao and colleagues (2026) review 17 empirical studies, drawn from 204 records across Scopus, Web of Science and IEEE Xplore, on how students interact with [[generative-ai]] in STEM learning and what those interactions have to do with [[critical-thinking]]. Their central finding is a distinction the surrounding literature tends to blur: using GenAI, [[prompt-engineering|prompting]] well, or performing better with AI are not proxies for critical thinking. What varies across the included studies is where [[cognitive-offloading|cognitive responsibility]] sits — which consequential reasoning the learner keeps, shares or hands over during the interaction. From the evidence the authors synthesize six clusters of critical-thinking-related processes, from strategic questioning and task framing through verification and error correction to justification and independent decision-making, and they propose a framework linking interaction patterns, cognitive responsibility and personal, instructional and task factors. They are explicit that methodological heterogeneity and the scarcity of independent critical-thinking outcome measures prevent any conclusion about whether GenAI improves critical thinking.

## Key Findings
- **Prompting skill is not critical thinking.** A technically sophisticated prompt can delegate substantial reasoning, while a simple prompt can start a highly evaluative exchange if the learner questions, verifies and corrects what comes back.
- **Query quality separated more than query frequency.** One included study found query frequency negatively associated with performance while query efficiency and refinement were positively associated; another distinguished naïve copy-paste from iterative debugging.
- **Six clusters of critical-thinking processes recur across the included studies.** Strategic questioning and task framing; interpretation and analytical decomposition; comparison, evaluation and verification; error detection and corrective modification; justification and independent decision-making; and reflection on the interaction itself.
- **The review reframes the question as one of cognitive responsibility.** What matters is the cognitively consequential work learners retain, share or delegate, not how much or how often they use the tool.
- **Acceptance-oriented interaction is the risk pattern.** Studies distinguishing acceptance of AI output from evaluative engagement found the former associated with weaker outcomes, a pattern consistent with work outside the included set.
- **Direct measurement of critical thinking is rare.** Most included studies infer critical thinking from interaction behavior or [[self-report-measures|self-report]], so the review stops short of claiming an effect on ability.

## How the review was conducted

The search followed [[meta-analysis-systematic-review|PRISMA]] 2020 across three databases and returned 204 records, of which 17 empirical studies met the inclusion criteria. Synthesis was narrative and thematic rather than statistical: the studies differ too much in design, population and measure for pooling, and the authors treat that heterogeneity as a finding in its own right. The clusters are described as recurring behaviors or cognitive processes reported across studies, not as measured components of critical-thinking ability, and individual studies may contribute to more than one.

That caution matters for how the review should be used. The six clusters are a vocabulary for designing and observing AI-supported STEM tasks; they are not a scale, and the authors do not propose scoring students against them. The proposed framework linking interaction patterns to cognitive responsibility is offered as an evidence-informed interpretation requiring validation.

## What the evidence says about verification

The most consistent theme across the clusters is that the evaluative steps — comparison, verification, error detection, corrective modification — are where AI use and critical thinking meet or part company. A learner who accepts a generated derivation, a suggested code fix or a numerical result without checking it has performed none of those steps, however fluent the exchange looked. A learner who asks for a hint, attempts the step, compares the result and revises has done the work that the [[critical-thinking]] literature describes, even if the prompt was ordinary.

The review's practical reading is that task design, not model capability, determines which of these happens. Tasks that require the learner to justify a choice, reconcile conflicting sources or detect a deliberately plausible error push the interaction toward evaluation. Tasks that ask for a product push it toward acceptance, and a better model makes that acceptance easier rather than harder to notice.

## Where the evidence stops

Two limits recur. First, methodological heterogeneity: the included studies mix surveys, interaction-log analyses, quasi-experiments and design studies, so a claim about effect size is not available. Second, measurement: critical thinking is mostly inferred from behavior in the interaction or from self-report, and the review's own note is that these are not equivalent to direct measurement of ability. Studies that use independent, performance-based measures are the exception.

The review therefore supports a design claim and not a causal one. It is reasonable to say that the distribution of cognitive responsibility predicts whether an AI-supported STEM task engages critical thinking; it is not yet established that designing for that distribution produces measurable gains in critical-thinking ability, or that it does so more than an alternative.

## What this means for practice

- **Instructors.** Judge an AI-supported task by which reasoning steps the student keeps. If the submission could be produced by accepting the first output, the task has delegated the thinking it was meant to teach.
- **Curriculum designers.** Build verification into the task rather than asking for it. Requiring students to check a deliberately flawed derivation or reconcile two sources creates the comparison and error-detection steps that acceptance skips.
- **Researchers.** Measure critical thinking independently of the interaction that is supposed to produce it. Interaction patterns and self-report cannot separate a student who reasoned from one who complied.
- **Faculty developers.** Treat prompting courses as insufficient on their own. Prompt technique is teachable and useful, but the review's evidence ties outcomes to evaluative engagement after the response, not to prompt sophistication.

## Limitations

- Seventeen included studies from 204 records, synthesized narratively; no pooled effect estimate is possible and the authors do not offer one.
- Critical thinking was mostly inferred from interaction behavior or self-report rather than measured with independent performance tasks.
- The six process clusters were derived thematically and are not a validated instrument or a set of measured components.
- The proposed framework is derived from the reviewed evidence and, in the authors' words, requires further empirical validation.
- Restricting the search to English-language records in three databases, with STEM as the domain, limits what the synthesis can say about other disciplines and languages.

## Citation

Abao, R. A., Ballenas, E. B., Pitogo, V. A., & Matias, J. B. (2026). [Beyond Prompting: Student–GenAI Interaction and Critical Thinking in STEM Education—A Systematic Literature Review](https://doi.org/10.3390/educsci16122013). *Education Sciences, 16*(12), 2013.
