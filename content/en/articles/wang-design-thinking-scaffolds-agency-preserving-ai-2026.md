---
title: "Design-thinking scaffolds for learner-agency-preserving AI use: effects on creative self-efficacy, cognitive flexibility, and engagement"
created: "2026-11-15T08:45:00-05:00"
updated: "2026-11-15T08:45:00-05:00"
type: article
foundations: [agency, cognitive-offloading, design-thinking]
pedagogy: [scaffolding, project-based-learning, constructivist]
technology: [generative-ai, llm]
assessment: [self-report-measures]
methods: [quantitative-research]
sources: ['raw/papers/wang-design-thinking-scaffolds-agency-preserving-ai-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1948254"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [quasi-experiment]
discipline: [design education]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, researchers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-15"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Wang (2026) tested whether a [[design-thinking|design-thinking]] scaffold could keep [[agency|learner agency]] intact when undergraduates use [[generative-ai|generative AI]] for open-ended project work, separating *substitutional* offloading from agency-preserving [[cognitive-offloading|offloading]] in which the learner keeps responsibility for problem framing, comparison, and revision. In a three-condition, four-wave quasi-experiment, 162 undergraduates in six intact sections worked a four-week educational design task with no AI, ordinary GenAI, or GenAI wrapped in five-stage worksheets. The scaffolded condition reported higher creative [[self-efficacy|self-efficacy]] (adjusted difference 0.33), greater cognitive flexibility (0.35), and stronger [[problem-solving]] [[student-engagement|engagement]] (0.35) than ordinary GenAI use, and its teams' products were rated higher (20.14 against 17.62). Human-coded prompts shifted from answer-completion requests toward comparison, critique, and [[reflection|reflection]], and pre-existing AI over-reliance weakened the engagement contrast.

## Key Findings
1. **[[scaffolding]] beat ordinary GenAI on all three [[self-report-measures|self-reported]] outcomes.** Adjusted differences favored the design-thinking condition over ordinary GenAI: creative self-efficacy 0.33 (*p* = 0.006), cognitive flexibility 0.35 (*p* = 0.003), and engagement 0.35 (*p* = 0.004).
2. **Team products were rated higher under the scaffold.** Independently rated product quality averaged 20.14 in the scaffolded condition, against 17.62 with ordinary GenAI and 16.76 with no AI at all.
3. **The prompts changed, not only the scores.** Human-coded AI-use logs showed fewer answer-completion requests and more comparison, critique, and reflection requests when the worksheets structured the task.
4. **Mediation ran through confidence and flexibility.** Indirect estimates via creative self-efficacy (0.07), cognitive flexibility (0.09), and their sequential pathway (0.04) all had bootstrap confidence intervals excluding zero.
5. **Prior over-reliance was a boundary condition.** Higher pre-intervention AI over-reliance weakened the overall engagement contrast and the two single-mediator pathways, while the moderated sequential index had a confidence interval including zero.
6. **The design cannot separate section from treatment.** With six intact sections assigned by timetable and room availability, condition effects are confounded with unmeasured section context.

## What the scaffold actually constrained

The intervention was not a prompt library or a style guide. Teams received process worksheets that made five decisions explicit and non-delegable: which stakeholder perspective was credible, which problem statement was defensible, which alternative to develop, which feedback warranted revision, and why a revision was made. AI could supply material at every stage, but the worksheet assigned the judgment to the student. That is what the authors mean by agency-preserving offloading, and it explains why the measured shift showed up in the *kind* of prompt students wrote rather than in how much they used the tool. Students in the scaffolded condition asked the model to compare options and critique drafts instead of asking it to complete the answer, which is the behavioral signature the [[cognitive-offloading|offloading]] literature predicts when responsibility stays with the learner.

## Why the distinction matters more than access

Much [[ai-education|AI in education]] research compares AI access with no access and finds mixed or null effects, because "AI use" bundles very different divisions of labor. Wang's three-condition design isolates that: ordinary GenAI already improved rated product quality over no AI (17.62 against 16.76), so access alone did something. The scaffold then added a further gain (20.14) while also lifting the psychological outcomes that access alone did not move as far. For [[learning-design|instructional designers]], the practical implication is that the design variable worth manipulating is the allocation of evaluative responsibility, not the presence of the tool. This aligns with [[productive-failure|productive failure]] and [[desirable-difficulties|desirable difficulties]]: the scaffold protects the difficulty that produces learning rather than removing it.

## Where the evidence stops

Three limits bound the claim. Allocation was by intact class section, six clusters in total, assigned before Time 1 by a teaching office working from timetables and room availability, so unmeasured section differences ride along with the condition; the authors report multilevel and leave-one-section-out checks as sensitivity evidence rather than as stronger causal claims. Outcomes were task-specific self-reports, and neither learner agency nor agency-preserving offloading was measured with a validated scale, so the mechanism is inferred from worksheets and coded prompts rather than observed directly. And the technology was a text-based conversational [[llm]], which the authors explicitly scope: the result says nothing about [[multimodal]] or agentic systems, and nothing about transfer to mathematical proof, programming, or [[writing-education|academic writing]].

## What this means for practice
- **Instructors.** Require students to name the problem, compare alternatives, and justify each revision in writing before they accept an AI suggestion; the gains here came from those checkpoints, not from AI access.
- **Instructional designers.** Put the responsibility split in the worksheet rather than the syllabus — specify which decisions the learner owns at each stage, and assess the process artifacts alongside the final product.
- **Researchers.** Treat AI use as a design variable with a dosage and a division of labor; comparing AI against no-AI without specifying who makes the judgments will keep producing mixed results.

## Limitations
- Allocation was by intact class section (six clusters) assigned on timetable and room availability, so condition is confounded with section context and the multilevel estimates were treated as sensitivity evidence only.
- Outcomes were task-specific self-reports; neither learner agency nor agency-preserving offloading was measured with a validated scale, so the mechanism is inferred from worksheets and coded prompts.
- One instructor, one public university in Anhui Province, and a four-week design task, with no delayed measure of transfer to other domains.
- The AI was a text-based conversational LLM, so the findings do not extend to multimodal or agentic systems.

## Citation

Wang, Y. (2026). [*Design-thinking scaffolds for learner-agency-preserving AI use: Effects on creative self-efficacy, cognitive flexibility, and engagement*](https://doi.org/10.3389/fpsyg.2026.1948254). *Frontiers in Psychology, 17*, 1948254.
