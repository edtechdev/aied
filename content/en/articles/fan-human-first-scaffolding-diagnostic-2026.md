---
title: "Human-first learning: scaffolding reasoning before AI assistance improves diagnostic accuracy"
created: "2026-11-27T05:34:00-05:00"
updated: "2026-11-27T05:34:00-05:00"
type: article
published: "2026-11-19"
sources: ['raw/papers/fan-human-first-scaffolding-diagnostic-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
discipline: []
level: []
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: [quantitative-research, rct]
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Fan and colleagues' Research Square preprint reports a longitudinal [[rct|randomized trial]] in which 496 medical students were assigned to six conditions crossing no support, an answer-providing AI assistant and reasoning-focused [[scaffolding]] that withheld answers. Across an AI-free baseline, two intervention phases and a withdrawal assessment one week later, students who began with scaffolding achieved higher diagnostic accuracy than those given direct answers from the outset: 75.2% versus 66.0% in the subsequent intervention phase and 24.6% versus 14.4% after withdrawal. Scaffold-first groups were the only ones to outperform both unsupported students (24.5–24.7% versus 9.0%) and the frontier-model benchmark (8.6%) once support was removed. The authors call the contrasting pattern contingent-skilling: competence that works with AI but is not converted into support-independent performance. The report is a preprint that has not been peer reviewed, and transfer beyond a one-week withdrawal in a simulated, single-institution setting remains untested.

## Key Findings
1. **A four-phase longitudinal randomized trial.** 496 students were randomized to six conditions and 389 were included after data-quality screening; phases covered an AI-free baseline, two intervention phases and a final assessment with all support withdrawn.
2. **Students began below frontier models and later exceeded them.** Across selected hard cases, average diagnostic accuracy was 39.71% for the language-model benchmark and 31.43% for the unsupported human group, but all five intervention groups exceeded the models in the subsequent intervention phase.
3. **Starting with scaffolding beat starting with direct answers.** Initial scaffold-only groups reached 75.2% accuracy in the subsequent intervention phase versus 66.0% for early direct-answer groups, and retained 24.6% versus 14.4% after withdrawal.
4. **Only scaffold-first groups kept an advantage without AI.** After withdrawal they outperformed unsupported students (24.5–24.7% versus 9.0%) and the model benchmark (8.6%), while the other intervention groups did not differ from either baseline.
5. **The mechanism is metacognitive, not merely easier.** In the scaffold-then-assistant group, intrinsic cognitive load declined and metacognitive evaluation rose when the assistant was introduced, and elevated evaluation persisted after support was withdrawn.
6. **The paper names a distinct failure mode.** Contingent-skilling describes performance that can be expressed with AI support but is not converted into equivalent unaided performance; it is distinguished from de-skilling and never-skilling.

## Design, conditions and measures
Participants were fourth-year medical students at one institution who had completed basic science teaching and were early in clinical training. The task used hard cases from a clinical reasoning case library originally developed by the New England Journal of Medicine, adapted into an interactive environment with a virtual standardized patient and two examination reporters. Students gathered incomplete evidence through open dialogue and submitted a case report with a diagnosis and supporting evidence, scored against an expert-derived reference diagnosis. Case difficulty was confirmed by expert review and a pilot in which 9 language models and 14 medical students showed consistently low accuracy.

The six conditions were no intervention, AI assistant alone, scaffolding alone, scaffolding followed by the assistant, the assistant followed by scaffolding, and both simultaneously. The assistant answered questions with information and diagnostic clues; scaffolding withheld answers and used a deliberate reflection table plus an AI tutor that posed reflective questions. The formal benchmark used seven frontier models — GPT-5, GPT-o3, Claude Opus 4.1, Gemini 2.5 Pro, Grok-4, DeepSeek-R1 and Qwen-3-Max — each completing 10 generations per case. Of 496 randomized participants, 57 were excluded for insufficient interaction and 50 for suspected use of external AI tools, leaving 389 in the analysis across the six groups. Cognitive load was measured with a 7-item scale and [[metacognition|metacognitive]] engagement with a 21-item, five-dimension scale.

## The comparisons behind the sequence claim
At the AI-free baseline there were no differences among the six human groups, and all five intervention groups performed below the model benchmark. In the initial intervention phase the groups converged with both the control group and the benchmark. Divergence appeared in the subsequent intervention phase: the scaffolding-only and scaffolding-then-assistant groups exceeded the unsupported control group, and all five intervention groups exceeded the models.

The theory-driven comparison grouped conditions by their initial support. The scaffold-only category comprised scaffolding alone and scaffolding followed by the assistant; the early direct-answer category comprised the assistant alone, simultaneous support and assistant followed by scaffolding. These categories did not differ at baseline or in the initial intervention phase. By the subsequent phase the scaffold-first category was ahead (75.2% versus 66.0%, OR 1.73, 95% CI 1.12–2.68), and the advantage remained after all support was withdrawn (24.6% versus 14.4%, OR 2.19, 95% CI 1.15–4.14).

At withdrawal, the scaffolding-only and scaffolding-then-assistant groups had higher odds of a correct response than unsupported students (OR 3.77 and 3.87) and than the model benchmark (OR 3.50 and 3.48). Only the scaffold-then-assistant group showed both a decline in intrinsic cognitive load from the initial intervention phase (t(50) = 3.25, pBH = .006, Cohen's dz = 0.46, 95% CI [0.17, 0.75]) and an increase in metacognitive evaluation (t(50) = 3.11, pBH = .019, Cohen's dz = 0.44, 95% CI [0.15, 0.73]). The simultaneous-support group showed reduced cognitive load without a corresponding rise in evaluation or retained diagnostic advantage.

## What this means for practice
- **Instructors.** Give learners a period of reasoning-focused scaffolding before giving them an answer-providing assistant, so evidence gathering and hypothesis evaluation remain the learner's work.
- **Instructors.** Use prompts that ask what information is missing or whether relevant evidence was missed rather than supplying diagnoses, especially on deliberately difficult cases.
- **Assessment designers.** Include an AI-free assessment after support is removed, since performance while the assistant is available does not establish independent diagnostic reasoning.
- **Medical educators.** Treat maintained evaluative metacognition, not just lower cognitive load, as the signal that a learner is prepared to use AI selectively and challenge its recommendations.
- **Researchers.** Test the sequencing claim with dialogue and behavioral process measures, in real clinical settings and over longer retention intervals before applying it broadly.

## Limitations
- **This is a Research Square preprint that has not been peer reviewed**, so the trial and its claims have not undergone the checks of journal review.
- Cognitive load and metacognitive engagement were self-reported at the end of each phase and cannot capture moment-to-moment cognitive or metacognitive processes during interaction.
- Independent performance was assessed one week after withdrawal; durability over longer periods and transfer to other clinical tasks and settings were not established.
- 496 students were randomized but 389 were analyzed after post-randomization exclusions, and the paper notes that sensitivity analyses of that exclusion remain to be done.
- The trial was conducted with medical students from a single institution in a simulated environment, so generalization to other schools, practicing clinicians, real patients and high-stakes workflows requires study.
- Case difficulty was screened but residual variation may have contributed to accuracy fluctuations across phases, and moderators such as prior knowledge, AI literacy and epistemic beliefs were not analyzed.

## Citation
Fan Y, Tang L, Xia M, Xu J, Li Z, Xu M, Zhu T, Xiao L, Li X, Xia O, Lin C, Chen N, Gasevic D, Yan L, Stadler M and Gasevic D (2026) Human-first learning: scaffolding reasoning before AI assistance improves diagnostic accuracy. Research Square preprint, posted 19 November 2026. doi: 10.21203/rs.3.rs-11417031/v1
