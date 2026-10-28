---
title: "AI disclosure labels, perceived authenticity, and trust in AI-generated instructional videos"
published: "2026-10-20"
created: "2026-10-28T12:40:58-04:00"
updated: "2026-10-28T12:40:58-04:00"
type: article
foundations: [human-ai-collaboration]
pedagogy: [video-education]
technology: [generative-ai, multimodal]
methods: [quantitative-research]
ethics: [ai-use-disclosure, trust, trust-calibration]
research_method: [experiment]
audience: [instructional designers, educational technology developers]
page_kind: [evaluation]
sources: ['raw/papers/fu-ai-label-authenticity-trust-generated-videos-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1975796"
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

> **Synthesis:** Fu, Zhang and Zhang (2026) asked whether an [[ai-use-disclosure|AI disclosure label]] changes trust in an AI-generated instructional video. The design was a 2 x 2 between-subjects experiment: 617 adults aged 18 to 25, recruited through Credamo, were randomly assigned to label present or absent crossed with high or low video quality, in cells of 154, 154, 154 and 155. All watched the same 5 min and 24 s Sora-generated video on the Pomodoro method, then rated authenticity, processing, trust, risk and intentions. The label lowered perceived authenticity (B = -0.214, p = 0.029; means of 4.92 without and 4.21 with) and directly changed nothing else: trust was B = -0.130, p = 0.216, and risk, adoption and sharing were null. Trust tracked authenticity (B = 0.535) and systematic processing (B = 0.478), with a small indirect path through risk (0.061). Nothing measured is learning: the outcomes are judgments about a video and intentions toward it, taken once after viewing, so the study can say how a labeled video is evaluated, not whether anyone understood it.

## Key Findings

1. The AI label reduced perceived authenticity, B = -0.214, SE = 0.098, 95% CI [-0.406, -0.022], p = 0.029, with ηp2 = 0.008 and condition means of 4.92 without the label and 4.21 with it.
2. The label did not affect trust (B = -0.130, p = 0.216), risk (B = -0.173, p = 0.314), adoption intention (B = 0.091, p = 0.463) or sharing intention (B = -0.035, p = 0.811); no interaction was significant.
3. Video quality had no effect on authenticity (B = 0.096, p = 0.329) or trust (B = 0.080, p = 0.445), but higher quality was associated with less heuristic processing (coef = -0.310, p = 0.034); the check separated the versions (M = 5.547 vs 4.552, Welch t = 9.752, p < 0.001).
4. Systematic processing was positively associated with trust (coef = 0.478, p < 0.001) and heuristic processing negatively associated with it (coef = -0.112, p = 0.003).
5. Perceived authenticity was positively associated with trust (coef = 0.535, p < 0.001) and negatively with risk (coef = -0.330, p < 0.001); risk was negatively associated with trust (coef = -0.186, p < 0.001), and the indirect authenticity to risk to trust path was 0.061, 95% CI [0.038, 0.079].
6. Trust predicted adoption intention (coef = 0.548, p < 0.001, R2 = 0.469) and sharing intention (coef = 0.617, p < 0.001, R2 = 0.502), with risk negative in both (coef = -0.152, -0.130).
7. Literacy moderated two paths only: label by AI literacy on trust (coef = 0.160, p = 0.036), label by media literacy on adoption intention (coef = 0.168, p = 0.024).

## Who judged what, and what the design carries

Participants were an online panel of younger adults, not students in a course, and the task was evaluation, not instruction: watch, then answer. Both factors were assigned between subjects, so each person saw one of four versions, with script, captions and narration held constant and only resolution and compression changed. The label read "AI-Generated Content/Synthetic Video" in the frame corner, about 5 percent of the area.

Twenty-three of 640 responses were dropped before testing, including 8 people who did not correctly identify their condition; the authors acknowledge that a recognition criterion applied after randomization can disturb the design's balance. There is no comprehension check, no retention task and no record of use, so all outcomes are evaluative.

## A label that changed the description and not the verdict

The one experimental effect is small. A coefficient of -0.21 on a seven-point authenticity scale, with ηp2 = 0.008, made the video read as less authentic while leaving trust, risk and both intentions where they were. The authors read this as disclosure acting on provenance rather than confidence, and conclude that transparency policy should aim at accurate judgment rather than trust. Intervals around the null trust effect are wide, so a modest effect either way is not excluded.

Video quality produced no effect anywhere except less heuristic processing at high quality. The design had rested on processing fluency, and they concede it was never measured, so both explanations remain untested.

## The chain is a cross-section, and the two constructs overlap

Every variable between label and intention was measured at one post-exposure moment, so the indirect effects describe association, not sequence, as the authors note. Measurement compounds it. Authenticity and trust were so entangled that the authors re-specified them after inspection, keeping items Auth1, Auth2 and Auth4 and items Trust2 and Trust3, and the resulting heterotrait-monotrait ratio was 0.895 against a 0.90 threshold. A path of 0.535 between constructs that close to one factor is nearly a restatement. Both literacy scales had low average variance extracted, so the moderation results are hypotheses.

## What this means for practice

Instructors should not treat a disclosure label as doing pedagogical work. It tells students about origin and nothing about accuracy, and this study suggests it will not by itself make them more skeptical or more trusting. Pair it with a task that requires evaluating a specific claim, since systematic processing was the construct most associated with trust. For faculty developers and platform designers, the moderation points the same way: the label's effect on trust depended on AI literacy, and on adoption intention on media literacy.

## Limitations

- One stimulus, one topic, one exposure, with every outcome self-reported at a single post-exposure point. A neutral five-minute study-skills video says nothing about repeated viewing, contested content or real sharing, and the cognitive pathway cannot establish order or learning.
- Authenticity and trust were trimmed to three and two items after their overlap became visible, with HTMT at 0.895; both literacy scales had low average variance extracted.
- The 617 respondents were panel members aged 18 to 25, and 8 were excluded for failing to recognize their condition after randomization; section 2.2 also describes a 60-person pretest that limitation seven contradicts.

## Citation

Fu, J., Zhang, Y., & Zhang, S. (2026). [*From AI labels to trust: cognitive pathways linking authenticity judgments, risk perception, and trust in AI-generated videos*](https://doi.org/10.3389/fpsyg.2026.1975796). *Frontiers in Psychology*, 17, 1975796.
