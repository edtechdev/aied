---
title: "Thinking with AI, reasoning without it: Cognitive offloading to generative AI weakens effort regulation"
created: "2026-09-18T15:20:00-04:00"
updated: "2026-09-21T03:40:00-04:00"
type: article
foundations: [cognitive-offloading, critical-thinking]
pedagogy: [metacognition, self-regulated-learning, desirable-difficulties]
technology: [generative-ai, llm, conversational-ai]
methods: [quantitative-research, rct]
research_method: [experiment]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
sources: ['raw/papers/thinking-with-ai-reasoning-without-it-2026.md']
confidence: high
---

> **Synthesis:** Ratajczyk and colleagues ask what most genAI-in-education research dodges: not whether [[generative-ai|ChatGPT]] helps while the window is open, but what is left of a learner's reasoning once it closes. Their preregistered experiment (final N = 193) ran a 15-entity relational network through chunk-based reasoning, a harder network-level task on the same material, and a memory test, with ChatGPT available only in Stage 1 and incentives crossed against it. Access raised Stage 1 accuracy (77.85% vs 72.72%) and lowered perceived difficulty, yet the unaided Stage 2 showed no aggregate gap; item-level modeling, however, linked prior genAI use to roughly 32% lower odds of a correct answer. The starker result was motivational: incentives lengthened time on difficult Stage 2 items for those who had worked alone but not for tool users — [[cognitive-offloading|cognitive offloading]] weakening [[self-regulated-learning|effort regulation]], not reasoning capacity.

## Key Findings

1. **A five-condition preregistered lab experiment, not a classroom study.** 2 (genAI access) × 2 (performance incentive) between subjects plus a control condition on an unrelated network; final sample 193, mean age 25.1 years.
2. **GenAI helped immediately, and the incentives did not.** Stage 1 accuracy was 77.85% with ChatGPT against 72.72% without it, and perceived difficulty fell from 4.71 to 4.17. Incentives added time but no accuracy.
3. **Unassisted reasoning slipped, but only at the item level.** Stage 2 accuracy was 61.6% with no aggregate effect of prior genAI access, yet the exploratory item-level model found roughly 32% lower odds of a correct answer after prior tool use (OR = 0.68).
4. **Effort regulation is where the difference concentrated, and only on hard problems.** Stage 2 time rose with incentives (874.6 s vs 751.5 s) and interacted with prior genAI access: without the tool, incentives stretched completion from 707.4 s to 941.2 s; with prior genAI there was no adjustment. The three-way interaction held only on hard items (126.4 s vs 84.7 s).
5. **Memory showed nothing.** Stage 3 accuracy was 57.5%; the one difference was meta-level, with incentivized tool users rating the memory test harder.
6. **Offloading came in different shapes; neither [[cognitive-psychology|working memory]] nor incentives predicted it.** Of 78 codable conversations, 31 barely used the tool, 28 mostly copied questions and 16 used it exploratorily.

## The three-stage task and what each stage isolates

The stimulus was a 15-entity network — creatures in the main version, celestial bodies in the control — described by 82 logical propositions and deliberately too large for working memory. Stage 1 (chunk-based reasoning) presented chunks of four to eight statements followed by three-option inference questions (yes, no, impossible to determine). Chunking follows cognitive load theory's element interactivity logic, aiming at a structured representation rather than bare answers. Stage 2 (network-level reasoning) supplied 20 information points containing 48 of those propositions and asked 13 integration questions, testing whether relational structure could be reconstructed and applied unaided. Stage 3 was a 10-item memory test with no access to the material.

The control condition is the clever part: a comparable Stage 1 on a different network, with the same demands but no transferable relational knowledge, separating offloading-induced harm to knowledge construction from fatigue or lost practice. Its Stage 2 accuracy was numerically below the no-genAI baseline, but it took significantly longer to finish: those who lacked prior network knowledge compensated with time, a benchmark that makes the genAI group's failure to add time look pointed.

## Assisted performance, then unassisted reasoning: what the results support

Read against the preregistered hypotheses, the headline is negative: H1a and H1b, that prior genAI access would improve or impair Stage 2 accuracy, were unsupported at the aggregate level, as were H3, H6 and H7. What survived was an exploratory item-level effect in the direction of impairment and the preregistered incentive effect on time, which depended on prior genAI access. At the item level, prior tool users had roughly a third lower odds of answering an individual Stage 2 question correctly within the no-incentive condition, and their time on difficult questions did not rise when incentives made success valuable.

Two dissociations support reading that as [[self-regulated-learning|regulation]] rather than ability: Stage 2 difficulty was perceived identically across conditions, so tool users were not overwhelmed, and memory was untouched, suggesting individual facts survived where their relational use did not. The control comparison adds a third: participants who genuinely lacked [[prior-knowledge|prior knowledge]] spent more time, and it did not rescue their accuracy.

Effort was measured three ways: item-level completion time on Stages 1 and 2; the Effort/Importance subscale of the Intrinsic Motivation Inventory, back-translated into Polish; and a seven-point perceived-difficulty rating per stage, with the AIAS-4 scale and [[self-report-measures|self-reported]] usage. The incentives — a bonus for the top-performing third, a European comparison, individual scores on request — bought time, not accuracy, which is why time reads as effort.

## The mechanism: effort withdrawal, calibration, or reliance habit

The paper's preferred reading is a change in effort regulation, with two mechanisms side by side: motivation intensity theory's potential motivation, in which prior genAI success lowered how much effort the task seemed to warrant, so hard questions hit that ceiling sooner; and expected value of control, in which Stage 1 taught an inaccurate contingency between effort and success, leaving participants unable to recalibrate once the tool vanished. The self-report pattern leans slightly toward the first, but no simple effect survived correction, so the authors decline to choose. They rule out one shallow alternative: participants did not forget the incentive instructions, since incentives lengthened Stage 1 time even with the tool present.

This is not the fatigue story (the control condition carried similar load with a different result) or knowledge loss (memory was unaffected). It is closest to Fan et al.'s [[metacognition|metacognitive]] laziness, Liu et al.'s metacognitive decay, and Wu et al.'s motivation drop when genAI is withdrawn. Its distinctive contribution: offloading bites hardest on [[desirable-difficulties|desirable difficulty]], collapsing effort exactly where it is most productive. The usage patterns complicate any simple "offloading is bad" reading: sixteen participants used the tool exploratorily, spending more time on Stage 1 than the question-copiers. As the seung-basham and misiejuk pages show, access is not the same as offloading, and interaction style may matter more than the mere presence of a [[conversational-ai|chatbot]].

## What this means for practice

- **Educators.** Test the unassisted residue: assisted accuracy is not evidence that structure was built, since prior tool use came with roughly 32% lower odds of a correct unaided answer.
- **Educators.** Focus on the hardest items: incentives lengthened time on difficult Stage 2 questions only for students who had worked without the tool (126.4 s vs 84.7 s), so plan the tool's withdrawal and [[scaffolding]] rather than rewards after it.
- **Educators.** Keep generative AI out of the step the task teaches: the harm case was the tool doing the integration that was the learning objective, while exploratory use looked benign or better.
- **Educators.** Do not read a flat class average as safety: the preregistered aggregate test was null while item-level modeling found impairment concentrated on difficult questions.
- **Researchers.** Measure access, extent and type of use separately: nearly 40% of participants with tool access barely used [[conversational-ai|ChatGPT]], diluting any condition-level comparison.

## Limitations

- One laboratory session with 193 adults in Poznań (105 with secondary and 88 with [[higher-ed|higher education]]), where Stage 2 followed Stage 1 immediately on the same network and the memory test spanned both stages.
- The impairment finding is exploratory and level-dependent: aggregate Stage 2 accuracy showed no prior-use effect and only the item-level model produced the association, so it needs replication.
- The manipulation was access rather than measured offloading, and almost 40% of the genAI condition used ChatGPT rarely or never, so condition-level differences understate any real effect; whether unassisted [[retrieval-spacing-interleaving|retrieval practice]] erases the effort signature is unanswered.
- Question difficulty was estimated from this sample's own accuracy, incentives moved time but never accuracy, and completion time is only an indirect measure of effort; the design tested extrinsic motivation only, so nothing follows about interest, [[agency|autonomy]] or [[motivation|intrinsic motivation]].

## Connected Concepts

- [[cognitive-offloading]] — the paper's central construct, and the distinction between offloading access to information and offloading its integration
- [[critical-thinking]] — relational reasoning as inference over a constructed structure rather than recall of propositions
- [[metacognition]] — metacognitive laziness, metacognitive decay, and the mismatch between perceived and actual effort requirements
- [[self-regulated-learning]] — effort regulation as the self-regulatory process that the tool appeared to weaken
- [[desirable-difficulties]] — the finding that effort withdrawal concentrated on the hardest, most productive items
- [[generative-ai]] — ChatGPT (GPT-5.2 Instant) available for Stage 1 only, removed before the unassisted stages
- [[conversational-ai]] — the chat interface, and the four observed use patterns from question copying to exploratory challenge
- [[llm]] — the large language model whose fluent output may inflate perceived competence and reset effort expectations
- [[motivation]] — motivation intensity theory and expected value of control as the competing effort accounts
- [[cognitive-psychology]] — working memory capacity, element interactivity, cognitive load, and the memory test
- [[transfer-of-learning]] — whether a short-term assisted benefit transfers to subsequent independent reasoning
- [[problem-solving]] — Stage 1 and Stage 2 as inference problems over a network too large to hold at once

## Connected Articles

- [[seung-basham-cognitive-offloading-swld-2026]] — What cognitive offloading to genAI means for students with learning disabilities
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Cognitive outsourcing and reallocation in unsupervised assessments
- [[misiejuk-cognitive-offloading-prompting-2026]] — Longitudinal prompting strategies as a window on student–AI offloading
- [[aigc-affordance-student-self-regulation-2026]] — Self-regulation, self-efficacy and motivation in AIGC-supported learning
- [[metacognitively-discordant-completion-genai-2026]] — Metacognitive discord between completing a task and understanding it
- [[absent-cognitive-baseline-2026]] — The missing baseline for AI-native students' self-assessment
- [[critical-thinking-paradox-genai-learning-2026]] — Separating efficiency gains from cognitive depth in genAI learning
- [[polished-artifacts-fragile-engagement-2026]] — Reduced epistemic effort in human–AI knowledge construction
- [[reclaiming-epistemic-agency-co-agency-2026]] — A critical framework for human–genAI co-agency in education
- [[llm-fallacy-misattribution]] — Misattributing competence to LLM output and what it does to learners

## Citation

Ratajczyk, D., Dymarska, A., Matłoka, A., Tomczyk, M., & Wiącek, M. (2026). [*Thinking with AI, reasoning without it: Cognitive offloading to generative AI weakens effort regulation*](https://doi.org/10.31234/osf.io/83jum_v1). PsyArXiv (preprint, not peer reviewed).
