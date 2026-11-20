---
title: "How Teachers Judge Creativity in Generative AI-Assisted Student Work: A Cross-Cultural Pathway Model for Higher Education Assessment"
created: "2026-11-20T08:52:00-05:00"
updated: "2026-11-20T08:52:00-05:00"
type: article
published: "2026"
discipline: [learning sciences]
foundations: [learning-design, ai-literacy]
pedagogy: [creativity]
technology: [generative-ai, llm]
assessment: [assessment, evaluative-judgment, process-oriented-assessment]
methods: [quantitative-research, mixed-methods-research]
ethics: [differential-effects-across-learner-groups]
research_method: [survey, interviews]
audience: [researchers, instructors, assessment designers]
level: [higher ed]
page_kind: [evaluation]
sources: ['raw/papers/zhang-teachers-judge-creativity-genai-2026.md']
confidence: high
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.1016/j.caeai.2026.100694"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-20"
    agent: hermes-agent
connected_concepts: [creativity, assessment, evaluative-judgment]
connected_articles: []
---

> **Synthesis:** Zhang and colleagues ask how higher-education teachers judge the [[creativity|creativity]] of student work made with [[generative-ai|generative AI]], and whether those judgments differ across two national contexts. A qualitative first study (focus groups, N = 20) surfaced a set of evaluative cues, which a second study tested in a survey of 654 teachers in China (318) and the United States (336) using PLS-SEM, multi-group analysis and an artificial-neural-network robustness check. Four cues — novelty, resolution, aesthetics and affect — predicted perceived creativity in both samples, giving a shared evaluative core. Beyond that core the two samples weighted different cues: diversity and transferability mattered more among Chinese teachers, inspiration and affect more among U.S. teachers. The authors read those differences as context-associated rather than uniquely cultural, and turn the result toward [[assessment|assessment]]: product-level creativity criteria should be paired with process evidence of what the student actually contributed — prompts, revision histories and reflective rationales — and teachers should distinguish judging the artifact from attributing creativity to the student.

## Key Findings

1. **Four cues form a shared core.** Novelty, resolution, aesthetics and affect positively predicted perceived creativity in both the Chinese and the U.S. samples.
2. **The core is weighted differently across contexts.** Chinese teachers gave more weight to diversity, transferability and resolution; U.S. teachers gave more weight to inspiration, affect and novelty.
3. **Two extended cues split by sample.** Diversity and transferability were significant predictors in China but not in the U.S.; inspiration was significant in the U.S. but not in China. Synthesis was non-significant in both.
4. **The model explained most of the judgment.** Perceived creativity was largely explained in both samples, and full measurement invariance supported the cross-group comparison.
5. **Judging the artifact is not attributing the creativity.** The authors argue assessment should combine product criteria with process evidence — prompts, revision decisions, reflective rationales — so a polished artifact is not mistaken for proof of student creative contribution.

## Study 1: how teachers talked about creativity

The first study ran focus groups with 20 higher-education teachers to learn which qualities they actually attend to when they look at a GenAI-assisted artifact. The cues it surfaced became the constructs for the survey. Some were adapted from earlier creativity-assessment work — novelty, resolution, aesthetics, affect, synthesis — and some were new to this context — diversity, transferability, inspiration. The move matters methodologically: rather than importing a general creativity rubric, the authors built the measurement from what teachers said they saw, then tested whether those judgments held at scale.

## Study 2: the cross-cultural survey

The survey drew 654 usable responses — 318 from China (via Sojump) and 336 from the United States (via Amazon Mechanical Turk) — an 89.22% retention rate after excluding 79 invalid cases, with attention checks and a minimum completion time. Eligibility was verified against institutional roles and GenAI teaching use, and the instrument was forward- and back-translated to support conceptual equivalence. Constructs met the usual reliability and validity thresholds (composite reliability above .70, AVE above .50, HTMT below .85), so the model fit cleanly before any comparison.

In the Chinese sample, novelty (β = .207), resolution (.554), aesthetics (.204), affect (.356), diversity (.441) and transferability (.374) all predicted perceived creativity, while synthesis and inspiration did not. In the U.S. sample, novelty (.429), resolution (.201), aesthetics (.458), affect (.683) and inspiration (.687) predicted it, while diversity, transferability and synthesis did not. The multi-group analysis confirmed the differences were statistically significant for most paths; an artificial neural network with ten-fold cross-validation broadly reproduced the ranking, guarding against a purely linear reading.

## Where the two samples diverged

The between-group differences are the paper's main comparative finding. Chinese teachers put more weight on **diversity** and **transferability** — whether the work reached beyond the obvious and moved to another problem — and on **resolution** (whether the artifact solved what it set out to). U.S. teachers put more weight on **inspiration** and **affect**, the felt spark and emotional pull of the work, and on **novelty**. The authors are careful about the interpretation: because the samples differ in more than culture — recruitment platform, discipline mix, the specific GenAI tools in use (Chinese teachers leaned on ERNIE Bot, Kimi and Qwen; U.S. teachers on Gemini, Claude and Stable Diffusion) — they call the differences context-associated rather than a clean cultural effect. That caution is the honest reading of a two-country comparison built on convenience panels.

## What it means for assessment

The practical contribution is a distinction the earlier AI-assessment literature often blurs: judging **the artifact** is not the same as judging **the student's creativity**, and the two can diverge sharply when the artifact is made with GenAI. The authors recommend pairing product-level creativity criteria with process evidence of student contribution — the prompts a student wrote, the revisions they made, the rationale they gave for accepting or rejecting a suggestion. This aligns with the shift in the wider literature from output to [[process-oriented-assessment|process-oriented]] and [[evaluative-judgment|evaluative-judgment]] designs. The cross-cultural result adds a second caution: a rubric tuned to one population's weighting of novelty or inspiration may not transfer cleanly to another, so assessment criteria deserve the same context check as the studies they are meant to judge.

## What this means for practice

- **Instructors.** Judge the artifact and the student's contribution separately; ask for prompts, revision histories or a short reflective rationale so a polished output is not read as proof of creativity.
- **Assessment designers.** Pair product-level creativity criteria with process evidence, and re-check a rubric's cue weighting before applying it across student populations.
- **Program leaders.** Do not assume a rubric tuned in one context transfers cleanly; the same cues carried different weight across the two samples.
- **Researchers.** Treat two-country differences as context-associated until a design can separate culture from recruitment platform, discipline and tool use.

## Limitations

The survey is cross-sectional and correlational: the pathway model describes how cues associate with perceived creativity, not that the cues cause it. The samples are convenience panels (Sojump, MTurk) of teachers who self-selected into GenAI-related teaching, and the two-country design cannot separate culture from platform, discipline or tool use — a point the authors state rather than paper over. The paper is a journal pre-proof, so the typeset version of record may differ in detail. And the model judges teachers' *perceptions* of creativity; it does not test whether those perceptions match independent expert ratings or predict later student outcomes.

## Citation

Zhang, L., Liang, G., Yuan, Y., Fang, C., Wu, Y., Wang, S. J., & Luo, S. (2026). How teachers judge creativity in generative AI-assisted student work: A cross-cultural pathway model for higher education assessment. *Computers and Education: Artificial Intelligence, 100694*. https://doi.org/10.1016/j.caeai.2026.100694
