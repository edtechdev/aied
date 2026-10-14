---
title: "SocraticRepair: Planning-Guided Socratic Tutoring for Program Debugging and Misconception Repair"
created: "2026-10-14T09:30:00-04:00"
updated: "2026-10-14T09:30:00-04:00"
type: article
sources: ['raw/papers/socraticrepair-program-debugging-2026.md']
confidence: high
page_kind: [framework]
research_method: [system development]
discipline: [cs education]
level: [higher ed]
audience: [instructors, educational technology developers]
technology: [intelligent-tutoring, llm-training-and-fine-tuning, conversational-ai]
pedagogy: [socratic-method, scaffolding, misconceptions]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-14"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Kopytskyi, Yang & Seyedebrahimi (2026) build SocraticRepair, a planning-guided [[socratic-method|Socratic tutoring]] framework for program debugging, and instantiate it by [[llm-training-and-fine-tuning|fine-tuning]] Qwen2.5-Coder-7B-Instruct on synthetic multi-turn dialogues drawn from four Python programming datasets. A tutor first generates a [[pedagogy|pedagogical]] plan, then conditions each reply on the learner's state and demonstrated plan objectives, treating the code's functional correctness separately from conceptual progress. Against GPT-4o on 158 matched dialogues, SocraticRepair scored higher on stepwise [[scaffolding]] and debugging question quality and cut premature solution disclosure from 7.43% to 1.88% of tutor turns, though GPT-4o remained stronger on technical correctness and adaptive feedback. The clearest remaining failure is the learned planner itself, which produced technically flawed plans for most held-out cases. The work targets [[higher-ed|higher-education]] [[cs-education|CS education]], where a learner's program may pass its tests while the underlying [[misconceptions|misconception]] survives.

## Key Findings
1. SocraticRepair fine-tunes Qwen2.5-Coder-7B-Instruct on 1,213 accepted synthetic dialogues covering 419 unique programming cases, built from four Python datasets and reduced to 8,183 tutor turns for training.
2. Against GPT-4o, SocraticRepair scored significantly higher on stepwise scaffolding (1.876 vs 1.789) and debugging question quality (1.626 vs 1.446), the two dimensions its fine-tuning objective targeted.
3. GPT-4o scored significantly higher on technical correctness (1.860 vs 1.789) and [[feedback|adaptive feedback]] (1.843 vs 1.792); differences in debugging relevance and guidance progression were not statistically significant.
4. Premature answer disclosure fell sharply, from 59 of 794 GPT-4o turns (7.43%) to 24 of 1,276 SocraticRepair turns (1.88%), and from 33.33% to 12.58% of dialogues.
5. SocraticRepair completed 148 of 159 interactions (93.1%) with a mean of 8.04 rounds, against 152 of 159 (95.6%) and 4.99 rounds for GPT-4o.
6. The learned planner is the weak link: it produced a technically valid plan for only 11 of 53 held-out cases, with errors in 41 of 52 generated plans, while all 53 GPT-4o plans passed the verifier.
7. Adaptive feedback showed no consistent winner across learner states: SocraticRepair predicted four states with 91.9–100% accuracy but matched comprehension only 58.1% of the time, with all 49 errors predicted as correct.

## A plan the tutor has to earn
SocraticRepair adopts the planning-guided formulation of ScaffoldLM and adapts it so that progress depends on both conceptual understanding and the learner's code, with the program's functional state treated as an additional signal. In planning mode the model receives the programming case and correct solution and emits a stepwise pedagogical plan; in tutoring mode it jointly predicts the learner state, decides which unresolved plan objectives the latest utterance demonstrates, and writes the next Socratic reply. A key design choice is that a correct or comprehension state is necessary but not sufficient to mark an objective complete — sufficient evidence must also be present, so the learner state alone cannot advance the interaction. Progress is a set of demonstrated objectives rather than a fixed sequence, since cases with several intertwined bugs can be repaired in different orders. The dialogue ends only when every plan step is demonstrated and the code passes its tests.

## Manufacturing tutoring dialogues
Real multi-turn programming tutoring data are scarce, so the authors construct a verified synthetic corpus. Four Python datasets supply 526 programming cases: PYMETA (300), MULTI_DEBUG (150), QUIXBUGS (40), and INTRO_PROG (36), split so that whole problem groups stay on one side of the train, validation, and test divide — 420, 53, and 53 cases. A pedagogical plan of three to eight objectives is generated per case and checked by a verifier agent, which regenerates inconsistent plans up to three times; each case also gets a student profile with one to five misconceptions. Dialogues are then produced with a student agent and a [[pedagogical-agent|tutor agent]], in three behavioral variants — receptive, uncertain, and persistent — that set different probabilities over learner states and simulate different student behaviors for the same problem. The accepted corpus, 1,213 dialogues and 8,493 tutor turns, is cleaned to 8,183 turn-level examples and used to fine-tune the model with low-rank adaptation.

## What the controlled comparison shows
Evaluation holds the student interactions constant across three tutor variants: the complete SocraticRepair pipeline, SocraticRepair with GPT-4o-generated plans, and a GPT-4o general-purpose tutor. On 158 matched dialogues, the SocraticRepair tutor wins on the two metrics closest to its training objective — stepwise scaffolding and debugging question quality — and roughly halves premature disclosure at both the turn and dialogue level. GPT-4o wins on technical correctness and adaptive feedback, which the authors attribute to stronger general-purpose programming ability, and the learner-state breakdown does not show a consistent GPT-4o advantage where adaptation matters most: GPT-4o edges ahead after incorrect and question states, SocraticRepair after confusion and irrelevant states. The bug-count breakdown shows SocraticRepair's question-quality advantage across all groups and largest for cases with three or more bugs, consistent with explicit planning helping when several objectives must be tracked.

## Where the pipeline still breaks
The paper's most useful negative result is internal: the fine-tuned model has learned to tutor but not to plan. Conditioned on verified plans, its tutoring behavior meets the intended pedagogical profile; asked to generate the plans itself, it produces technically valid output for only 11 of the 53 held-out cases, and inspection finds a technical error in 41 of the 52 plans it does produce. GPT-4o, by contrast, generated 53 plans all accepted by the verifier, 50 on the first attempt. The authors therefore report tutor-quality results under the verified-plan condition and name reliable plan generation as an open challenge, suggesting a stronger base model or separating planning from tutoring into a different agent. For developers, this is the practical warning: a pipeline can look strong end to end while one learned component is quietly unreliable.

## What this means for practice
- **Instructors.** Expect a plan-conditioned tutor to hold the answer back more often — premature disclosure fell to 1.88% of SocraticRepair turns against 7.43% for GPT-4o — but do not assume that restraint equals learning, since neither variant was tested with real learners.
- **Instructors.** Prefer a tutor that leaves the reasoning work to the student: SocraticRepair scored higher on stepwise scaffolding and debugging question quality, the two dimensions tied to eliciting explanation rather than supplying it.
- **Developers.** Separate planning from tutoring when planning quality is inconsistent: the learned planner produced a technically valid plan for only 11 of 53 held-out cases, while the same model tutored well when given verified plans, so the two modes may need different models or agents.
- **Developers.** Score the pedagogy, not just correctness: on this comparison the fine-tuned tutor trailed the general model on technical correctness yet led on the tutoring dimensions, so a single accuracy measure would have picked the wrong system.
- **Researchers.** Do not rely on a single judge: human agreement with the LLM evaluator was lowest for adaptive feedback (Cohen's κ = 0.66) and highest for technical correctness (0.81), so the subjective metrics need more human annotation.

## Limitations
- Training data are synthetic: despite the variability introduced across the receptive, uncertain, and persistent student variants, the dialogues may not reflect how real learners would interact with the tutor.
- The corpus was capped by the API cost of [[agentic-ai|multi-agent]] generation and regeneration: the model was trained on 1,213 accepted dialogues covering 419 programming cases.
- The learned planning mode remained unreliable, with many generated plans containing technical errors — valid plans for only 11 of 53 held-out cases.
- Turn-level tutor quality was primarily assessed by an [[llm|LLM]] judge; human annotation covered only a subset (40 turns), and annotation of all turns by multiple postgraduate raters would be more accurate.
- The comparison tutor was GPT-4o, and the simulated dialogues were generated by GPT-5-mini and verified by a GPT-5.6-luna agent, so the results are tied to those specific model generations.

## Citation
Kopytskyi, M., Yang, J., & Seyedebrahimi, M. (2026). [*SocraticRepair: Planning-Guided Socratic Tutoring for Program Debugging and Misconception Repair*](https://arxiv.org/abs/2610.15204). arXiv preprint arXiv:2610.15204.
