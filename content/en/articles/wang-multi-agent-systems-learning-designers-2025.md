---
title: "Enabling Multi-Agent Systems as Learning Designers: Applying Learning Sciences to AI Instructional Design"
created: "2026-09-24T02:23:32-04:00"
updated: "2026-09-24T02:23:32-04:00"
type: article
sources: ['raw/papers/wang-multi-agent-systems-learning-designers-2025.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
foundations: [curriculum-design, learning-design, human-ai-collaboration, theory-development-aied]
pedagogy: [active-learning, collaborative-learning, creativity, scaffolding]
technology: [generative-ai, llm, pedagogical-agent, prompt-engineering]
ethics: [universal-design-for-learning]
research_method: [system development, user study, thematic analysis]
discipline: [math education, science education]
audience: [researchers, instructors, instructional designers]
level: [k 12]
page_kind: [evaluation]
---

> **Synthesis:** Wang, Xiao, Hou, and Stamper (2025) treat the weakness of LLM-generated instructional materials as a design problem rather than a prompting problem, moving pedagogical expertise out of the teacher's prompt and into the model's architecture. They embed the Knowledge-Learning-Instruction (KLI) framework in a multi-agent system whose agents identify knowledge components, choose a learning process, select an instructional principle, and draft an activity, then compare three generators: a single-agent baseline that mimics a typical teacher request, a role-based system that runs those stages in sequence, and a collaborative system in which three agents holding different curriculum-design personas draft, critique, and revise before a decision agent selects a final activity. Twenty practicing secondary math and science teachers rated 30 activities against the Quality Matters K-12 standards, and an LLM judge scored 120 activities across four models. Rubric differences were small and often not significant, but teachers clearly preferred the collaborative system for creativity, real-world context, and classroom readiness, at a far higher computational cost.

## Key Findings

- **The central move is architectural.** Putting KLI in the agent pipeline rather than in the teacher's prompt answers the prompting gap that limits untrained users.
- **Teachers rated the collaborative system highest** on all four Quality Matters criteria and the total score, with a mean of 10.05 against 9.55 for the baseline.
- **Only active learning reached significance**, F(2, 38) = 4.75, p = .014, where the collaborative system was rated above only the sequential role-based system.
- **Expert agreement was weak**: Fleiss' kappa was 0.047 and 0.053 on two criteria and -0.016 aggregated, which the authors read as evidence that rubrics miss what teachers value.
- **The collaborative system cost far more**: 272 seconds, about 71,638 tokens, and 13 requests per activity, against one request for the baseline.
- **The LLM judge separated systems by at most 0.7 points**, under 7 percent of the scale, and saturated on alignment and inclusivity.

## The three systems and the KLI framework inside them

Three generators were built for the same task. The baseline single-agent system appends subject domain, grade level, standard alignment, and learning objective to the phrase "Generate learning activity". The role-based multi-agent system turns KLI into a five-stage pipeline: a knowledge component agent identifies the facts, concepts, principles, or procedures to be learned, a learning process agent selects the relevant process, an instructional principle agent chooses a method such as spacing or worked examples, a design agent drafts the activity, and a feedback agent checks coherence before deciding whether to iterate. The collaborative system gives three agents different curriculum-design personas, has each draft independently, then runs a conquer and merge discussion in which agents critique and revise before a decision agent selects the final activity, while KLI supplies the reasoning they follow.

## What the rubric missed and the teachers saw

The quantitative and qualitative results diverge, and the authors treat the divergence as a finding. Rubric scores clustered tightly, and the total-score ANOVA did not reach conventional significance even though a non-parametric check suggested an overall difference. Written feedback, by contrast, separated the systems sharply. Teachers praised the baseline for relevant topics but found its handouts unfinished and its pacing off. They credited the role-based system with a step-by-step structure and both formative and summative assessments, then faulted it as generic and occasionally unresponsive to a differentiation request. The collaborative system drew the strongest praise for creativity, a real-world urban planning theme, and a complete package with worksheet, exit ticket, and teacher dialogue, though some lessons were seen as too large for one class period.

## Cost, judges, and the ceiling problem

The paper also reports what the extra quality costs. Generation time, token use, and requests rise steeply from the baseline through the sequential system to the collaborative one, a quality and efficiency trade-off for any tool intended for schools. Automatic evaluation with an LLM judge ran over 120 activities spanning four models, with the strongest totals for the collaborative system on the more capable model. Differences stayed small, and several dimensions saturated near the maximum, which limits how far the rubric can distinguish outputs. The authors also note known weaknesses of automated judging, including a bias toward longer outputs and a positivity bias, and conclude that automated scoring should complement rather than replace expert teacher judgment on a creative design.

## What this means for practice

- **Put the pedagogy in the tool, not the prompt.** A pipeline that carries instructional theory lets teachers generate sound activities without the prompt-engineering skill the study finds most teachers lack.
- **Judge materials by teacher utility, not only rubric alignment.** Teachers valued complete packages with worksheets, exit tickets, and teacher dialogue, and alignment scores did not separate the systems.
- **Keep expert teachers in the loop, and budget for cost.** An automated judge missed the differences teachers named, and the preferred design used about ten times the time and twenty times the tokens of the baseline.
- **Do not assume any multi-agent design helps.** The sequential pipeline scored lowest of the three, so collaboration between agents, not the presence of agents, is what mattered.

## Limitations

- **Designs were evaluated, not implemented.** Activities were rated by teachers and models but never tested with students, leaving no evidence about effects on learning or engagement.
- **Reliability was low and the sample small.** Expert agreement fell below chance when criteria were pooled, and the 20 raters were secondary math and science teachers in the United States only.
- **One framework, a fixed set of architectures.** The study embeds one pedagogical framework in specific agent workflows, leaving other theories and multi-agent designs untested.

## Connected Concepts

- [[pedagogical-agent]]
- [[curriculum-design]]
- [[learning-design]]
- [[generative-ai]]
- [[prompt-engineering]]
- [[active-learning]]

## Connected Articles

- [[multi-agent-instructional-design]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[agentic-workflows-education]]
- [[multi-agent-llm-social-learning]]

## Citation

Wang, J., Xiao, R., Hou, X., & Stamper, J. (2025). [*Enabling multi-agent systems as learning designers: applying learning sciences to AI instructional design*](https://arxiv.org/abs/2508.16659). arXiv:2508.16659. https://doi.org/10.48550/arXiv.2508.16659