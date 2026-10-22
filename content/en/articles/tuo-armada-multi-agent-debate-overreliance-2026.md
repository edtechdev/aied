---
title: "Countering the Risks of AI Overreliance: Leveraging Multi-Agent Debate for Complementary Human–AI Decision-Making in Legal Contexts"
created: "2026-10-16T04:08:00-04:00"
updated: "2026-10-16T13:16:04-04:00"
type: article
foundations: [human-ai-collaboration, critical-thinking, agency, reducing-ai-misuse]
pedagogy: [metacognition, problem-solving, desirable-difficulties]
technology: [llm, generative-ai, human-in-the-loop-ai, conversational-ai]
assessment: [learning-gains, self-report-measures]
methods: [quantitative-research, mixed-methods-research]
ethics: [trust-calibration, explainable-ai, trust, legal-issues-and-risks]
institutions: [governance]
level: [adult learning, higher ed]
audience: [researchers, instructors, software developers, educational technology developers, policymakers]
research_method: [experiment]
page_kind: [framework, evaluation]
sources: ['raw/papers/tuo-armada-multi-agent-debate-overreliance-2026.md']
confidence: high
ai_assist:
  - model: "deepseek/deepseek-v4.1-flash"
    role: drafting
    date: "2026-10-16"
    agent: hermes
contributors: [editor]
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Tuo, Wang, Miller and Demartini (2026) test whether the *single-recommendation* paradigm is itself the source of human-AI [[cognitive-offloading|overreliance]]. In a 3 × 2 between-subjects study with 186 lay participants judging civil cases on the [[llm|LLM]]-supported QCAT platform, replacing "here is the AI's answer" with a [[agentic-ai|multi-agent]] debate whose **system-preferred position is withheld** (ARMADA) cut detrimental switching to an incorrect AI position from 42–60.5% to 5.7–8.2%, but also suppressed beneficial adoption of a correct AI position (22.1–33.3% vs 61.1–72.3%). Complementary team performance — the team beating both human and AI alone — appeared in exactly one condition: when the AI was *less* accurate than humans on challenging cases. The authors' reading is that [[trust-calibration|calibration]] designs treat overreliance as a [[bias-mitigation|bias]] to correct, while withholding a recommendation is **protective** rather than corrective: it defends the human's initial judgment and leaves the correction of error to deliberation the human must perform.

## Key Findings

1. **Complementarity is conditional, not general.** In a 3 × 2 between-subjects experiment in which 186 lay participants decided five civil cases each — six conditions spanning three assistance types (ARMADA, Rec_AI, [[rag]]) and two AI performance levels — human-AI teams significantly outperformed both humans and AI alone in only one setting: the challenging-case condition where the AI's accuracy *underperformed* the human baseline. The authors report that "no consistent team advantage emerged" elsewhere (p = 0.049).
2. **Debate without a recommendation cuts detrimental switching 7–10×.** Participants overrode a correct initial judgment in favor of an incorrect AI position on 5.7% (2/35) and 8.2% (7/85) of ARMADA trials, versus 60.5% and 54.9% under Rec_AI and 50.0% and 42.0% under RAG — overreliance was not merely reduced but largely prevented.
3. **The same mechanism suppresses beneficial adoption.** ARMADA participants accepted a correct AI position only 33.3% and 22.1% of the time, against 71.2% and 65.4% for Rec_AI and 72.3% and 61.1% for RAG; their "stickiness" — retaining the initial answer — reached 84.0% and 82.6% where recommendation conditions sat near 65–70%.
4. **Single recommendations are a double-edged sword.** Recommendation-based assistance significantly improved team performance when the AI was more accurate than the human (Rec_AI p = 0.008; RAG p = 0.003) and significantly harmed it when the AI was less accurate (Rec_AI p = 0.049) — the same interface that scales expertise also transmits error.
5. **Deliberation carries a measurable cost.** Cognitive load on the NASA-TLX was significantly higher under ARMADA than the baselines (p = 0.003), and median decision time roughly doubled against RAG (102.9 s vs 50.8 s, p < 0.001): the protective benefit is purchased with effort, not produced for free.
6. **Credibility cues backfired.** Adding citations and credibility signals in the optimized ARMADA version raised the switch fraction by 112% relative to the base system (31.8% vs 15.0%), and manual checking of the cited cases found some misattributed to irrelevant or fictitious references — polish on an unreliable output increased deference to it.
7. **No learning effect was detected.** Participants showed no significant change in decision quality over time (β = 0.03, p = 0.18 for ARMADA; β = −0.04, p = 0.37 for RAG), so the design changed how people decided within the session without evidence that it improved their unaided judgment.

## Why the recommendation itself is the problem

The study's target is not over-trust in general but the interface move of naming a system-preferred answer. Prior mitigations — [[explainable-ai|explainability]], confidence scores, warnings, and [[trust-calibration]] prompts — "have shown limited effectiveness, as they largely preserve a single-recommendation paradigm that anchors user judgment." An explanation of *why* the system chose an answer still leaves the answer as the reference point a user must actively reject, which is precisely the step that failed in earlier work. ARMADA replaces that anchor with a structured multi-agent argument in which the agents' positions are visible but the aggregation or preference is not revealed, so the participant's own reading of the case remains the starting position and the debate supplies considerations rather than a verdict. The reported numbers make the framing concrete: withholding a recommendation did not teach people to verify better, it removed the mechanism — switching — through which error propagated. The authors therefore distinguish **protective** from **corrective** mitigation: a design can prevent the transmission of bad AI advice while doing nothing to improve the human's underlying competence.

## When complementary performance actually appears

The experiment identifies three prerequisites for teams to exceed both partners alone: the human and the AI must hold **divergent knowledge**, the **human's expertise must exceed the AI's on the task at hand**, and the interaction must follow a paradigm that avoids anchoring bias. The first prerequisite is empirical rather than assumed — disagreement between human and AI judgments reached 94.3% on challenging cases versus 44.2% on easy ones (p = 2.411e−12), and complementarity appeared only where that disagreement existed. The second reverses the usual framing of AI assistance as expertise scaling: when the AI is the more accurate party, a recommendation interface genuinely helps the team, which is why the authors resist reading their results as an argument against AI advice altogether. Their design's own ceiling is honest about the third prerequisite — when participants began with a wrong judgment, recovery was only 30.6% and 24.7%, "significantly below chance for a binary decision" (binomial tests, p < 0.01), meaning the same deliberation that protected correct initial judgments did little to overturn incorrect ones. ARMADA's contribution is therefore "primarily protective rather than corrective": it retained correct initial judgments in 91.8–94.3% of trials when the AI's position was wrong, far more than it repaired wrong ones. One corrective property survives — because one agent argues each side, the correct position is always on the table — and in the rare trials where both the participant and the AI were initially wrong, ARMADA participants recovered in 4 of 14 trials against 0 of 19 under Rec_AI (Fisher's exact, p = 0.024), which the authors treat as suggestive given the small sample.

## Credibility cues and the limits of presentation

The optimized ARMADA condition suggests that the signals conventionally used to make AI outputs trustworthy can act in the opposite direction in this setting. Adding citations raised the fraction of trials on which participants switched toward the AI's position from 15.0% to 31.8% — the authors report this as a 112% increase in switching attributable to credibility and authority cues — while manual checking of those references found cases misattributed to irrelevant cases or fabricated outright. Formatting changes also moved speed without accuracy: decision time improved significantly against the base system (p = 0.044) while decision accuracy did not, an interface effect separate from the epistemic effect. Read together with the [[hallucination-risk|hallucination]] literature, the result is that citation-shaped authority cues are not evidence of correctness and can raise deference to output whose provenance was never verified.

## What this means for practice

- **Instructors and trainers:** treat "the AI's answer" as a teaching hazard, not a teaching aid. If the goal is durable judgment rather than in-session accuracy, structure work so [[learners]] reason before seeing any system-preferred position — first-answer protocols, argument-only outputs, or debate transcripts whose aggregation is withheld — and reserve recommendation interfaces for tasks where the AI is genuinely the more accurate partner. Expect the deliberative version to take roughly twice as long and to feel harder; that cost is the intervention, not friction to be optimized away.
- **Designers and [[educational-technology-developers|educational technology developers]]:** the finding that citations *increased* switching toward an incorrect position is a direct design warning. Credibility cues — citations, confidence scores, authoritative framing — should be separated from correctness signals, and provenance should be checkable at the point of use rather than asserted. Rejecting a recommendation is the step most users fail to perform, so a system that needs users to reject things should not present a single preferred answer as its primary output.
- **Researchers:** the protective/corrective distinction is the paper's most portable contribution. It predicts a dissociation — interventions that stop error transmission without building competence — and it implies that overreliance outcomes should be reported as a pair (detrimental switching and beneficial adoption) rather than as a single reliance rate, since a design that improves the first number can degrade the second.
- **Policymakers and [[governance]]:** "complementary human-AI decision-making" cannot be claimed from the presence of a [[human-in-the-loop-ai|human in the loop]]. The authors' three prerequisites give an auditable test: is the AI's knowledge genuinely divergent, is it less accurate than the human for this task class, and does the interface avoid anchoring? Where those fail, oversight is nominal.

## Limitations

- The participant pool was 186 lay people from a general population sample; the findings speak to lay decision-making under AI advice, not to trained legal professionals whose domain expertise would change both the disagreement rate and the accuracy ordering.
- The study measures decision outcomes within a single session and reports no learning effect; it therefore cannot support claims about [[transfer-of-learning|transfer]], retention, or durable calibration outside the task.
- The complementarity result rests on a single condition with a borderline p-value (p = 0.049), and the authors caution against generalizing the team advantage beyond it.
- The credibility-cue result was examined in the optimized condition rather than as a factorial manipulation, so the 112% switching increase should be read as a design finding rather than as an isolated causal estimate.
- The setting is the Australian civil dispute tribunal QCAT, a bounded adjudication domain with structured facts and defined categories; tasks with open-ended reasoning goals may not behave the same way.

## Citation

Tuo, B., Wang, B., Miller, T., & Demartini, G. (2026). [*Countering the Risks of AI Overreliance: Leveraging Multi-Agent Debate for Complementary Human–AI Decision-Making in Legal Contexts*](https://doi.org/10.1145/3848504). *ACM Transactions on Intelligent Systems and Technology*.
