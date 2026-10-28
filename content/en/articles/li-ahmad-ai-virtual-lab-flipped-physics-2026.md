---
title: "AI-supported virtual laboratory for flipped physics learning: effects on middle school students' achievement, motivation, and cognitive load"
published: "2026-10-21"
created: "2026-10-28T12:11:19-04:00"
updated: "2026-10-28T12:11:19-04:00"
type: article
foundations: [ai-education, learning-design]
pedagogy: [experiential-learning, inquiry-based-learning, motivation, scaffolding]
technology: [generative-ai, llm, rag, simulation, virtual-and-augmented-reality]
assessment: [learning-gains, assessment]
methods: [quantitative-research]
research_method: [quasi-experiment]
level: [middle school]
audience: [instructors, instructional designers]
page_kind: [evaluation]
sources: ['raw/papers/li-ahmad-ai-virtual-lab-flipped-physics-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1939220"
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Li and Ahmad (2026) asked whether embedding a conversational AI agent inside a virtual physics laboratory adds anything beyond the virtual laboratory itself, for Grade 9 students in a flipped unit. Ninety students in three intact classes at one middle school in central China spent three weeks on Ohm's law, each class assigned as a unit to the AI-supported virtual laboratory (AI-VL), the same laboratory without AI (VL), or a physical laboratory (PL). Adjusted achievement was 23.45, 20.51, and 16.57 out of 30, F(2, 86) = 113.38, p < 0.001, partial η2 = 0.73, with every pair significant. Because intact classes rather than students were assigned, and each condition had its own teacher, the result describes three classroom arrangements, not the AI agent alone; cognitive load was measured only at posttest.

## Key Findings

1. Adjusted achievement was 23.45 (SE = 0.32) for AI-VL, 20.51 for VL, and 16.57 for PL out of 30, F(2, 86) = 113.38, p < 0.001, partial η2 = 0.73.
2. Overall motivation ordered the same way, adjusted M = 4.67, 4.31, and 3.94, F(2, 86) = 113.37, p < 0.001, partial η2 = 0.73.
3. Intrinsic motivation showed the largest motivational effect, adjusted M = 4.77, 4.02, and 3.41, F(2, 86) = 132.59, p < 0.001, partial η2 = 0.76.
4. Extrinsic motivation did not differ, F(2, 86) = 3.02, p = 0.054, partial η2 = 0.07, adjusted M = 4.57, 4.59, and 4.47.
5. Intrinsic cognitive load fell at every step, M = 1.79 (SD = 0.48), 2.59 (SD = 0.52), and 3.41 (SD = 0.57), F(2, 87) = 72.94, p < 0.001, partial η2 = 0.63.
6. Extraneous cognitive load separated PL (M = 3.17, SD = 0.48) from AI-VL (M = 2.68, SD = 0.44) and VL (M = 2.72, SD = 0.58) but not AI-VL from VL, F(2, 87) = 9.07, p < 0.001, partial η2 = 0.17.
7. Germane cognitive load rose at every step, M = 3.77 (SD = 0.48), 3.31 (SD = 0.44), and 2.67 (SD = 0.47), F(2, 87) = 42.43, p < 0.001, partial η2 = 0.49.

## Three conditions, three classes

Three intact classes drawn from the school's eight Grade 9 classes by one-stage cluster sampling were randomly assigned as classes to conditions, 30 students each (age M = 14.52, SD = 0.50). Randomization therefore operated at class level with three assignment units, hence the quasi-experimental label. Conditions shared objectives, procedures, materials, tasks, and assessment schedule, and each had its own physics teacher with at least eight years of experience. The AI-VL ran on NOBOOK around a text-only, education-tuned DeepSeek model with retrieval over a K-12 science knowledge base, constrained to guide reasoning rather than answer. Usage confirms the manipulation: a mean of 40 calls (range 28 to 56) over 42.35 minutes (range 33.45 to 60.26). Baseline equivalence held for achievement, F(2, 87) = 0.79, p = 0.46; overall motivation differed, F(2, 87) = 3.73, p = 0.03, with PL above AI-VL (p = 0.027), against the treatment group.

## What the AI layer added

The three-group structure separates the virtual environment from the AI layer. Achievement rose from PL to VL, attributed to manipulating variables and reading relationships rather than handling equipment, consistent with prior work on [[virtual-and-augmented-reality|virtual laboratories]], then again from VL to AI-VL, attributed to explanations and question answering during the pre-class stretch when no teacher is present. That mechanism is uncoded: the study logged how often and how long students used the agent, not what they asked or what it said, so the active ingredient is inferred from the condition label. The split by type is sharper: intrinsic motivation moved with the AI layer, extrinsic did not, which the authors read partly as a ceiling, since one school, one topic, and identical requirements left little room on external reasons. Through [[self-determination-theory|self-determination theory]], self-pacing plus on-demand explanation supports autonomy and competence rather than external regulation, fitting an intrinsic-only effect and leaving career or parental motives untouched.

## Load as perception, and what the design cannot separate

Extraneous load fell for both virtual conditions relative to the physical laboratory and did not differ between them, so the AI layer neither added nor removed unnecessary demands once the environment was structured; germane load rose at every step. Intrinsic load fell at every step, the result needing most care, since intrinsic load is conventionally a property of the task and the learner's [[prior-knowledge|prior knowledge]], not the support around it. The authors concede the agent did not change the objective complexity of Ohm's law and describe the difference as perceived complexity, which is all a self-report can deliver; the Leppink instrument was also converted from its 0 to 10 format to a 5-point scale and given once, after the intervention. Teacher and condition also remain confounded, and the topic was chosen because invisible processes favor simulation, so the physical laboratory's disadvantage may shrink where handling apparatus is itself the goal.

## What this means for practice

For instructors, the gain appeared on work students did alone before class, where flipped physics usually loses them. Put a constrained agent in that pre-class window, and still run apparatus where manipulating real equipment is itself the learning. Administrators should read the two comparisons separately: both virtual conditions beat the physical laboratory, and adding AI is a further, separate step. For developers, the null on extraneous load is a design constraint, achieved here with an agent restricted to curriculum content.

## Limitations

- Ninety students in three intact classes at one school in central China, where condition and class coincide; with three assignment units, class composition cannot be separated from treatment, and each class had its own teacher.
- Cognitive load was measured once at posttest with a 5-point adaptation of an 11-point instrument, so the differences are perceptions with no baseline.
- Three weeks, one topic, no delayed posttest, and AI interaction logged only as counts and minutes.

## Citation

Li, Y., & Ahmad, N. J. (2026). [*AI-supported virtual laboratory for flipped physics learning: effects on middle school students' achievement, motivation, and cognitive load*](https://doi.org/10.3389/fpsyg.2026.1939220). *Frontiers in Psychology*, 17, 1939220.
