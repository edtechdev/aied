---
title: "Generative AI-assisted workflows in architectural conceptual design: Performance, creative self-efficacy, and cognitive load"
created: "2026-10-11T08:05:00-04:00"
updated: "2026-10-11T08:05:00-04:00"
type: article
sources: ['raw/papers/caeai-genai-architectural-design-creative-self-efficacy-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [experiment]
discipline: [design education, arts education]
level: [higher ed, undergraduate]
audience: [instructors, educational technology developers, researchers]
pedagogy: [creativity, student-ai-interaction, metacognition]
technology: [generative-ai, llm, multimodal]
assessment: [assessment, self-report-measures]
foundations: [agency, human-ai-collaboration, design-thinking]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-11"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Xiao and colleagues ran a two-phase architectural conceptual design experiment with 36 students to compare two ecologically plausible workflows: [[generative-ai]] image generation with DALL-E 3 in ChatGPT-4, and ArchDaily-based precedent search. Overall, the GenAI workflow produced no significant advantage in design performance, cognitive load, or task-specific [[self-efficacy]]; instead, general creative self-efficacy declined significantly relative to the precedent-search condition. The value of [[student-ai-interaction]] therefore looks conditional rather than uniform, shaped by learner prior competence, [[pedagogy|pedagogical]] framing, and how deliberately students [[prompt-engineering|prompt]] the system. The authors read this as evidence that [[creativity]] support and creative self-belief can decouple, making the protection of learner [[agency]] a pedagogical obligation rather than an afterthought.

## Key Findings

1. Across 36 students, the GenAI and precedent-search workflows showed no significant overall differences in design performance, cognitive load, or task-specific creative self-efficacy after the revision phase.
2. General creative self-efficacy declined significantly under GenAI support (DiD = −0.543, 95% CI [−1.068, −0.017]), even as task-specific confidence held roughly steady in both conditions.
3. An exploratory subgroup analysis suggested novice GenAI users outperformed novice precedent-search users at revision (F(1, 32) = 4.303, p = 0.046, partial η² = 0.118), a pattern the authors treat cautiously.
4. Prompt-level analyses found iterative, task-specific strategies (CD3 and CD6) associated with larger cognitive-load reductions (r = −0.566, p = 0.022; r = −0.518, p = 0.039), though neither survived multiple-comparison correction.
5. Prompt count and word count showed no association with cognitive-load change, indicating that interaction volume mattered less than the iterative nature of engagement with generated outputs.
6. Item-level workload analysis found a significant reduction in physical demand for the GenAI group (DiD = −0.55 SDs, 95% CI [−0.92, −0.17]) alongside a marginal rise in frustration (DiD = 0.76 SDs).
7. GenAI participants produced substantially more text than those searching precedents (110 ± 74.73 versus 9.24 ± 9.63 words, p < 0.001), showing that prompt formulation itself carries a real cognitive cost.

## Two workflows, one null overall result

The study's core contribution is evidence about two complete workflows rather than about GenAI in isolation. Participants first designed independently, then revised using either DALL-E 3 image generation or ArchDaily precedent search, with eight judges rating initial and revised sketches on clarity, complexity, and visual communication. Baseline conditions were comparable: design performance clustered around 2.8 to 2.9 on a five-point scale and cognitive load stayed below 3. Difference-in-differences estimates for design performance (0.583 SDs), cognitive load (−0.069), and task-specific creative self-efficacy (−0.48) all had confidence intervals spanning zero. Because each condition bundled tool function, content source, and interaction mode, the authors caution that no single component can be credited or blamed. The null result is itself informative: adding a [[multimodal]] image generator to a revision task did not, on average, change rated output or perceived effort relative to time-tested precedent study for this sample.

## Where confidence diverged from performance

Task-specific and general creative beliefs moved in opposite directions, and the divergence is the paper's most provocative finding. Task-specific self-efficacy rose modestly in both conditions, consistent with the simple experience of revising a design. General creative self-efficacy — broader beliefs about one's own imagination and idea generation — declined significantly for GenAI users (DiD = −0.543). The authors connect this to authorship and creative ownership: when cognitive effort shifts from generating ideas toward evaluating and curating machine outputs, learners may struggle to attribute design decisions to themselves, weakening confidence as creative agents. The marginal increase in frustration (DiD = 0.76 SDs) suggests technical friction contributed. This decoupling matters because task support and self-belief are not the same outcome, and a task that feels easier to complete does not necessarily leave a student feeling more capable.

## Prompting, cognitive load, and the novice signal

Prompt analysis of 16 GenAI participants showed wide variation — 3 to 26 prompts and 20 to 295 words — with neither volume nor length predicting workload change. What mattered was the type of engagement: CD3 prompts that built iteratively on prior outputs, and CD6 prompts that directed evaluation-driven revision, were each linked to larger cognitive-load reductions, though neither association survived multiple-comparison correction (Bonferroni p = 0.177 and 0.265). GenAI users typed far more than peers searching ArchDaily (110 versus 9.24 words), indicating that composing effective prompts is itself cognitively demanding and may offset any ideation relief. Meanwhile the exploratory competency interaction (F(1, 32) = 4.303, p = 0.046) hinted that GenAI scaffolds novices more than experienced designers, who may treat generic outputs as interference rather than inspiration.

## What this means for practice

- **Instructors.** Sequence AI-mediated and AI-free phases so students can distinguish their own contributions from generated content, protecting creative agency and general self-belief.
- Treat prompt literacy as a teachable competency: model iterative, task-specific prompting rather than assuming students already know how to formulate effective requests.
- Match [[scaffolding]] to competence — position GenAI as ideation support for novices and as a [[critical-thinking|critical evaluation]] tool for more experienced learners.
- Because interaction volume did not reduce load, design activities around the quality of the generate–evaluate–refine cycle rather than around how many prompts students produce.
- Provide structured guidance and explicit evaluation criteria, since unstructured GenAI use may redistribute rather than reduce cognitive effort.

## Limitations

- Thirty-six participants split into subgroups produced small cells; the competency interaction had limited observed power (0.569) and a wide partial η² confidence interval of [0.000, 0.317].
- Inter-rater reliability was low (ICC 0.157 in Phase 1; 0.208 in Phase 2), so performance comparisons are attenuated in magnitude and inflated in uncertainty.
- The Novice and Experienced groups were created by median-splitting Phase 1 ratings of low reliability, so measurement error may have affected subgroup assignment.
- Prompt-category analyses rested on 16 GenAI participants; the CD3 and CD6 associations did not survive correction (Bonferroni p = 0.177 and 0.265; BH-FDR p = 0.133).
- The study was not pre-registered, and the NASA-TLX composite showed low internal consistency (α = 0.243 in Phase 1 and 0.442 in Phase 2).
- The comparison bundled tool function, content source, and interaction mode, so no individual component's isolated effect can be identified.

## Citation


Xiao, Y., Jiang, H., Hurley, R., & Liu, S. (2026). [Generative AI-assisted workflows in architectural conceptual design: Performance, creative self-efficacy, and cognitive load](https://doi.org/10.1016/j.caeai.2026.100682). *Computers and Education: Artificial Intelligence, 11*, 100682.