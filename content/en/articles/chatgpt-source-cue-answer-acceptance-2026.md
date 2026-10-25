---
title: "The ChatGPT Source Cue Shapes Answer Acceptance in a Reasoning Task"
created: "2026-10-25T08:30:00-04:00"
updated: "2026-10-25T08:30:00-04:00"
type: article
published: 2026-10
page_kind: [evaluation]
research_method: [experiment]
discipline: [learning sciences]
level: [higher ed, adult learning]
audience: [instructors, researchers, assessment designers]
foundations: [critical-thinking, ai-literacy, cognitive-surrender]
pedagogy: [metacognition, cognitive-psychology, student-ai-interaction]
technology: [conversational-ai, generative-ai, llm]
assessment: [assessment, evaluative-judgment, self-report-measures]
methods: [quantitative-research, research-methods-aied]
ethics: [trust, ai-sycophancy, equity-in-ai-education]
confidence: high
sources: ['raw/papers/chatgpt-source-cue-answer-acceptance-2026.md']
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Fabio, Rantuccio and Bruno (2026) tested whether a *source label* changes how people judge supplied answers. In a within-subjects study, 103 participants judged 30 pre-generated answers — reflective-correct, intuitive-incorrect, and arithmetic control-correct — under either a "[[generative-ai|ChatGPT]]" or a generic "Computer" attribution, with the two parallel batteries assigned to labels and the trial order randomized. Acceptance was higher under ChatGPT overall (68.0% versus 63.4%, p = 0.002), but the trial-level logistic mixed model showed a source-by-category interaction (p < 0.001): the effect was carried by arithmetic controls (OR = 6.08, 95% CI [2.70, 13.69]), while the source contrasts inside the two Cognitive Reflection Test categories were not significant. Signal-detection analysis found no significant source difference in sensitivity (p = 0.930) or criterion (p = 0.082). The study is about evaluative judgment rather than classroom learning, so it speaks to AI-in-education as evidence about how an AI source cue shapes acceptance and how that acceptance can outrun the ability to verify.

## Key Findings

1. **A ChatGPT label raised acceptance overall.** Overall acceptance was 0.680 under ChatGPT and 0.634 under Computer, a paired difference of 0.046 (95% CI [0.018, 0.074], t(102) = 3.225, p = 0.002) — roughly 4.60 percentage points.
2. **The effect was concentrated in arithmetic controls.** The trial-level logistic mixed model found a source-by-category interaction (likelihood-ratio χ²(2) = 19.68, p < 0.001), with OR = 6.08 (95% CI [2.70, 13.69], p < 0.001) for control-correct answers.
3. **The CRT categories showed no significant source contrast.** Source contrasts were not significant for intuitive-incorrect answers (OR = 1.17, 95% CI [0.92, 1.50], p = 0.207) or reflective-correct answers (OR = 1.17, 95% CI [0.91, 1.50], p = 0.227).
4. **Endorsement is not discrimination.** Mean sensitivity was near zero under both labels (d′ = −0.079 under ChatGPT, −0.071 under Computer; paired difference −0.007, 95% CI [−0.176, 0.161], p = 0.930), and criterion was descriptively more liberal under ChatGPT but not significantly so (c = −0.050 versus 0.033; p = 0.082).
5. **The latency result depends on the analysis.** Raw evaluation times were longer under ChatGPT (12,557.81 ms versus 11,514.69 ms; F(1, 102) = 4.61, p = 0.034), but the source difference was not significant after log transformation (F(1, 102) = 1.82, p = 0.180).
6. **No disposition predicted the source difference.** [[trust|Trust in AI]], positive and negative AI attitudes, and [[critical-thinking]] disposition showed no significant correlation with the ChatGPT-minus-Computer differences in acceptance, accuracy, or latency, and the behavioral difference scores themselves had low internal consistency (α = 0.106 for acceptance, −0.150 for accuracy).

## Design and the source manipulation

The task was a modified Cognitive Reflection Test (CRT; Frederick, 2005) in which participants judged pre-generated answers rather than solving problems themselves. Each of 30 trials paired a problem with one answer carrying either the "ChatGPT" or "Computer" label: 10 reflective-correct, 10 intuitive-incorrect, and 10 control-correct trials, with five trials per label in each category. The two batteries comprised 15 pairs of parallel problems sharing the same reasoning structure but differing in numerical values and context, and the displays were visually matched for layout, size, font, color, spatial position, and response format, differing only in the source label and a small icon. Participants were not required to solve the problems, and all answers were prepared in advance by the researchers rather than produced by live systems.

Battery comparability was checked with an independent unlabeled pretest of 35 participants. Reflective accuracy was 0.510 in the first battery and 0.504 in the second, and intuitive accuracy was 0.620 and 0.650, with neither paired comparison significant (reflective t(34) = 0.073, p = 0.942; intuitive t(34) = −0.362, p = 0.719) and strong cross-battery correlations (r = 0.93 reflective, r = 0.89 intuitive, both p < 0.0001). Control accuracy was 100% in both batteries.

## What the numbers do and do not show

The control-answer contrast is the informative one, because both conditions presented objectively correct arithmetic answers in matched displays, and evaluating them did not require resolving a CRT-style intuitive alternative. The source cue was associated with how readily these answers were endorsed: correct controls were accepted at 0.986 under ChatGPT and 0.924 under Computer, corresponding to rejection rates of 1.4% and 7.6%. That pattern supports a contribution of attributed source identity to answer evaluation within this task, though it does not identify whether participants differed in their expectations about the sources or in their verification of particular answers.

The signal-detection analysis separates sensitivity from response criterion within CRT trials, and here the results are sobering: mean sensitivity was close to zero under both labels and neither comparison reached significance. Greater overall endorsement therefore does not establish improved discrimination, and acceptance of plausible supplied answers without successful verification is one possible interpretation — the measures cannot distinguish it from misunderstanding or inattention. A post-hoc sensitivity analysis excluding the nine participants who incorrectly rejected more than 10% of the ten arithmetic control answers left the overall acceptance difference intact (0.679 versus 0.640, t(93) = 2.571, p = 0.012), but CRT discrimination remained near zero, so the restriction did not resolve the concern.

## How this bears on evaluative judgment around AI

The finding sits alongside evidence pointing the other way. Logg et al. (2019) found algorithm appreciation in comparisons with [[human-in-the-loop-ai|human judgment]], while Dietvorst et al. (2015) found that observing algorithmic errors reduces willingness to use algorithmic forecasts, and Longoni et al. (2022) and Altay and Gilardi (2024) found lower perceived accuracy for AI-attributed news — including headlines that were true or human-created. The direction of a source-label effect therefore depends on [[feedback]], and this study differs from those settings on all three: numerical verification, a ChatGPT-specific label, and a technological comparison source.

That makes the study a direct empirical counterpart to [[trust-calibration]] and to the risks named under [[cognitive-surrender]] and [[ai-sycophancy]]: the skill is matching trust to evidence rather than to a confident, fluent-looking source, and the measured gap between acceptance and sensitivity is exactly where that skill is absent. It also [[assessment]], since a learner who endorses an AI-attributed answer more readily is not thereby better at judging whether it is correct — the distinction the paper draws between accepting a correct answer and rejecting an incorrect one is the same one [[evaluative-judgment|evaluative judgment]] turns on.

## What this means for practice

- **[[teacher-role]]** Make the source cue explicit when students evaluate AI-attributed answers, and separate the two questions the study distinguishes: "is this answer correct?" and "does it matter who or what it says it came from?"
- **Instructors.** Pair AI-sourced answers with a verification demand — an independent check, a worked alternative, or an explanation of why the supplied answer is right or wrong — because the study's near-zero sensitivity shows that fluent endorsement is not the same as discrimination.
- **Assessment designers.** When AI output is part of an assessment, treat source attribution as a variable that may shift acceptance independently of content, and test items under more than one attribution if source identity is not part of the construct being measured.
- **Researchers.** Instrument both acceptance and accuracy, and report sensitivity and criterion alongside overall acceptance, since a single acceptance rate cannot distinguish endorsement from successful verification.

## Limitations

- Convenience recruitment and the sample's [[writing-education|composition]] limit generalization: 103 participants recruited by word of mouth, with 51 university students (49.5%), two doctoral students, 42 reporting other occupations, seven reporting no current occupation, and one retired.
- Five trials per source-by-category cell give a brief assessment, and the behavioral difference scores had low internal consistency (α = 0.106 for acceptance, −0.150 for accuracy), which constrains the exploratory correlations.
- Answer category and objective truth were not fully crossed: reflective and control answers were correct while intuitive answers were incorrect, so the category differences combine answer properties with validity rather than isolating the source cue.
- The source cue was symbolic rather than a live [[conversational-ai|chatbot]] interaction, and the comparison was against a generic "Computer" label that may itself evoke expectations of arithmetic reliability, so the result says nothing about human or unlabeled baselines.
- No source manipulation check, ChatGPT familiarity, or prior CRT exposure was assessed, and salient source cues in a within-subjects task may contribute to demand characteristics; the arithmetic controls were not dedicated attention checks.

## Citation

Fabio, R. A., Rantuccio, E., & Bruno, F. (2026). [The ChatGPT source cue shapes answer acceptance in a reasoning task](https://doi.org/10.3389/fpsyg.2026.1923236). *Frontiers in Psychology*, *17*.
