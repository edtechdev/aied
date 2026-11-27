---
title: "Exploring the impact of multimodal generative artificial intelligence on CT dispositions in inquiry-based academic writing: a quasi-experimental analysis in higher education"
created: "2026-11-27T01:32:00-05:00"
updated: "2026-11-27T01:32:00-05:00"
type: article
published: "2026-08-28"
sources: ['raw/papers/he-multimodal-genai-critical-thinking-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: []
level: [higher ed]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
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

> **Synthesis:** He, Niu and Ashari compared three conditions in an inquiry-based academic writing course: multimodal GenAI, text-based GenAI and no GenAI. The study followed 165 first-year undergraduates over eight weeks, with a six-week intervention, and used ANCOVA to compare posttest outcomes while controlling for pretest scores. The multimodal group showed the largest gains in critical thinking (CT) dispositions and academic writing quality, the text-based group fell in between, and the no-GenAI control group showed the smallest gains. Subdimension analyses concentrated the multimodal advantage in openness and analytical thinking, and in evidence use and analytical depth. Because conditions were assigned to intact classes and there was only one posttest, the design supports conditional comparisons rather than a clean individual-level causal claim.

## Key Findings
1. **Three conditions received the same instruction.** Multimodal Qwen3-VL, text-only Qwen3 and no GenAI differed only in tool availability and modality, with the Qwen models sharing prompts and support functions.
2. **The multimodal group gained most on CT dispositions.** Adjusted posttest scores were highest in that condition, followed by text-based GenAI and then the control group.
3. **Text-based GenAI also outpaced the control.** Both GenAI conditions improved more than the no-GenAI condition on the overall disposition measure.
4. **Writing quality followed the same order.** The multimodal group produced the highest-rated essays, the text-based group the next highest and the control group the lowest.
5. **Effects were concentrated, not uniform.** Openness and analytical thinking carried the disposition advantage; evidence use and analytical depth carried the writing advantage.
6. **AI usage volume was comparable.** Logs showed no significant differences between the two GenAI groups in sessions, duration or prompts submitted.
7. **Class-level assignment weakens inference.** With one intact class per condition, class-level characteristics could not be modeled separately from the treatment.

## Design and measures

Three full classes were assigned to the three conditions, all taught by the same instructor with the same prompts and feedback schedule. The 165 participants were first-year undergraduates at a university in southern China, 55 per condition; an a priori power analysis had indicated a minimum of 53 per group for a moderate effect (Cohen's f = 0.25) at 0.80 power and α = 0.05. Pretest and posttest writing samples were timed at 60 minutes on matched inquiry topics, anonymized and scored blind by two trained raters, with a third rater consulted when scores differed by more than one point.

CT dispositions were measured with a shortened Chinese CT Disposition Inventory retaining five dimensions from the original seven: openness, analytical thinking, systematic thinking, confidence in CT and cognitive maturity. Truth-seeking and curiosity were excluded in earlier adaptation work. The revised 15-item instrument used a six-point scale; pilot work with 60 undergraduates produced a content validity index of 0.87, a KMO value of 0.72 and significant Bartlett's test (χ² = 212.48, p < .001). Five factors above eigenvalue 1.0 accounted for 68.4% of variance, with loadings from 0.56 to 0.79. Overall Cronbach's alpha was 0.81 and subscale alphas ranged from 0.70 to 0.79.

Writing quality was scored with a four-dimension rubric — argument structure, evidence use, analytical depth, and coherence and integration — each rated from 1 to 5 for a maximum of 20 points. Raters calibrated on 10 essays; overall intraclass correlation was 0.85, with dimension-level values from 0.78 to 0.89. Baseline checks found no significant group differences on pretest scores, age, gender or prior GenAI experience. Usage logs for the two GenAI groups recorded sessions, minutes and prompts, and independent-samples t-tests found no significant differences: 18.40 versus 19.13 sessions, 412.55 versus 425.18 minutes, and 119.82 versus 124.36 prompts.

## Results by outcome

For CT dispositions, the ANCOVA showed a significant condition effect, F(2, 161) = 44.52, p < .001, partial η² = .356. Mean gains were 7.06 in the multimodal group, 4.61 in the text-based group and 1.91 in the control group. Bonferroni-corrected pairwise comparisons gave d = 0.68 for multimodal versus control, d = 0.34 for multimodal versus text-based, and d = 0.39 for text-based versus control. At the subdimension level, openness (partial η² = .242) and analytical thinking (.164) survived the adjusted threshold; systematic thinking (.081) and CT confidence (.059) did not.

For writing quality, the condition effect was F(2, 161) = 41.12, p < .001, partial η² = .314. Mean gains were 2.83, 1.82 and 0.92 in the multimodal, text-based and control groups respectively. Pairwise effect sizes were d = 0.72 for multimodal versus control, d = 0.46 for multimodal versus text-based and d = 0.38 for text-based versus control. All four rubric dimensions reached the adjusted threshold, but the modality effect was strongest for evidence use (partial η² = .193) and analytical depth (.181), and weaker for argument structure (.103) and coherence and integration (.118). The authors connect this pattern to the Cognitive Theory of Multimedia Learning while acknowledging that they did not measure channel-specific cognitive activity. They also report that the modality difference was larger for writing than for dispositions, but note that a single posttest cannot show the trajectory of change.

## What this means for practice
- **Instructors.** When the goal is deeper evidence use, configure GenAI to present competing viewpoints visually, diagram argument structure and make comparisons of evidence explicit.
- **Instructors.** For narrower goals such as argument structure and coherence, recognize that text-based feedback may be sufficient, as the two GenAI groups performed similarly on those dimensions.
- **Institutions.** Replicate the comparison with multiple classes per condition so class effects can be separated from tool effects before rolling out a specific platform.
- **Researchers.** Add process measures such as think-aloud protocols, eye-tracking or interaction logs to test whether visual channels actually drive the observed gains.

## Limitations
- Conditions were assigned to intact classes, with one class per condition, so pre-existing peer dynamics or instructor rapport could not be modeled and individual randomization was absent.
- The six-week intervention may have been too short to shift slower-moving dispositional dimensions, and there was no follow-up after the single posttest.
- CT dispositions were self-reported and open to social-desirability bias; behavioral indicators of critical engagement were not collected.
- The CTML explanation is inferential because no process-level measure of verbal and visual channel use was taken.
- The setting, student population and specific Qwen tool limit generalization; multimodal outputs also carry higher information density, which was not measured.

## Citation
He Y, Niu T and Ashari ZM (2026) Exploring the impact of multimodal generative artificial intelligence on CT dispositions in inquiry-based academic writing: a quasi-experimental analysis in higher education. Front. Educ. 11:1926173. doi: 10.3389/feduc.2026.1926173.
