---
title: "Enabling Multi-Agent Systems as Learning Designers: Applying Learning Sciences to AI Instructional Design"
created: "2026-09-24T02:23:32-04:00"
updated: "2026-09-24T05:17:09-04:00"
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

> **Synthesis:** Wang, Xiao, Hou, and Stamper (2025) treat weak LLM-generated instructional materials as a design problem rather than a prompting problem, moving pedagogical expertise out of the teacher's prompt and into the model's architecture. They embed the Knowledge-Learning-Instruction (KLI) framework in a multi-agent system and compare a single-agent baseline, a role-based system that runs the KLI stages in sequence, and a collaborative system where three agents with different curriculum-design personas draft, critique, and revise before a decision agent selects a final activity. Twenty practicing secondary math and science teachers rated 30 activities against the Quality Matters K-12 standards. Rubric differences were small, but teachers preferred the collaborative system for creativity, real-world context, and classroom readiness at far higher computational cost.

## Key Findings

- **The prompting gap motivates the architecture.** A survey of 2,232 public-school teachers found 60 percent already used AI for teaching tasks, yet unguided prompts produce shallow, misaligned materials that reviewers called "a mile high and an inch deep."
- **Teachers rated the collaborative system highest** on all four Quality Matters criteria and the total score (10.05 against 9.55), but **only active learning reached significance**, F(2, 38) = 4.75, p = .014, and there against only the role-based system.
- **Expert agreement was weak**: Fleiss' kappa was 0.047 and 0.053 on two criteria, -0.030 and -0.043 on the others, and -0.016 pooled, which the authors read as rubrics missing what teachers value.
- **The collaborative system cost far more**: 272 seconds, about 71,638 tokens, and 13 requests per activity against one for the baseline, while the LLM judge separated systems by at most 0.7 points and saturated on alignment and inclusivity.
- **The role-based pipeline scored lowest**, so collaboration between agents, not the presence of agents, mattered.

## The three systems and the KLI framework inside them

Three generators were built for the same task. The baseline appends subject domain, grade level, standard alignment, and learning objective to the phrase "Generate learning activity". The role-based system turns KLI into a five-stage pipeline: a knowledge component agent identifies the facts, concepts, principles, or procedures to be learned, a learning process agent selects the relevant process, an instructional principle agent chooses a method such as spacing or worked examples, a design agent drafts the activity, and a feedback agent checks coherence. The collaborative system gives three agents the curriculum-design personas Behaviorist, Constructivist, and Aesthetic, drawn from a set of teacher personas; each drafts independently, then a conquer and merge discussion has them critique and revise before a decision agent picks the final activity.

The KLI framework (Koedinger, Corbett, and Perfetti 2012) aligns knowledge components, learning processes such as fluency building and sense-making, and instructional principles such as spacing, worked examples, and prompted self-explanation.

## What the rubric missed and the teachers saw

The quantitative and qualitative results diverge: rubric scores clustered tightly, and the total-score ANOVA missed conventional significance even though a non-parametric check, chi-square of 6.24 with p = .044, suggested an overall difference, while written feedback separated the systems. Teachers praised the baseline for relevant topics but found its handouts unfinished, its pacing off, and its outputs needed lots of editing. They credited the role-based system with step-by-step structure and both formative and summative assessments, then faulted it as generic and sometimes unresponsive to a differentiation request. The collaborative system drew the strongest praise, called fantastic, creative, and classroom-ready, for a real-world urban planning theme and a complete package with worksheet, exit ticket, and teacher dialogue, though some lessons were too large for one class period.

## Cost, judges, and the ceiling problem

Time, tokens, and requests rise steeply from the baseline through the sequential system to the collaborative one: the role-based system needed about 77 seconds and 22,497 tokens across 5.4 requests, roughly three times the baseline's time and seven times its tokens. An LLM judge ran over 120 activities spanning four models, with the strongest totals for the collaborative system on the more capable model, and differences stayed small while several dimensions saturated near the maximum. The authors note known weaknesses of automated judging, including bias toward longer outputs and a positivity bias, and conclude that scoring should complement teacher judgment.

## What this means for practice

- **Put the pedagogy in the tool, not the prompt.** A pipeline that carries instructional theory lets the 60 percent of teachers already using AI generate sound activities without the prompt-engineering skill most lack.
- **Judge materials by teacher utility, not only rubric alignment.** Teachers valued complete packages with worksheets, exit tickets, and teacher dialogue; alignment scores did not separate the systems, and the most common critique was that activities were too much for one period.
- **Keep expert teachers in the loop, and budget for cost.** An automated judge missed what teachers named, and the preferred design used about ten times the time and twenty times the tokens of the baseline.
- **Read design quality and teaching quality as separate targets.** The paper implements the principled-AI agenda of augmenting the learning sciences, unlike teaching benchmarks such as TeachBench, which score instructional ability.

## Limitations

- **Designs were evaluated, not implemented.** Activities were rated by teachers and models but never tested with students, leaving no evidence about learning or engagement.
- **Reliability was low and the sample small.** Expert agreement fell below chance when criteria were pooled, and the 20 raters were secondary math and science teachers (11 math, 9 science) in the United States only.
- **One framework, a fixed set of architectures.** The study embeds one pedagogical framework in specific agent workflows, generated with gemini-2.5-flash plus three other Gemini models for the judge comparison, so other theories and designs are untested.

## Connected Concepts

- [[pedagogical-agent]]
- [[curriculum-design]]
- [[learning-design]]
- [[prompt-engineering]]
- [[active-learning]]

## Connected Articles

- [[finkelstein-principled-ai-education-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[agentic-workflows-education]]
- [[multi-agent-llm-social-learning]]
- [[teachbench-llm-teaching-evaluation]]

## Citation

Wang, J., Xiao, R., Hou, X., & Stamper, J. (2025). [*Enabling multi-agent systems as learning designers: applying learning sciences to AI instructional design*](https://arxiv.org/abs/2508.16659). arXiv:2508.16659. https://doi.org/10.48550/arXiv.2508.16659