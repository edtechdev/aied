---
title: "Modeling Student-Centered Feedback Mechanisms: ChatGPT-Supported Feedback in the Feedback Orientation Scale for Secondary Chinese Reading"
created: "2026-10-16T09:20:00-04:00"
updated: "2026-10-16T09:20:00-04:00"
type: article
sources: ['raw/papers/chatgpt-feedback-orientation-chinese-reading-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [quasi-experiment]
level: [k 12]
audience: [instructors, researchers, curriculum designers]
discipline: [language learning]
pedagogy: [motivation, self-regulated-learning, metacognition, self-efficacy, scaffolding, student-engagement]
technology: [generative-ai, conversational-ai, llm, adaptive-learning, personalized-learning]
assessment: [feedback, feedback-literacy, formative-assessment, ai-feedback-quality, automated-assessment, automated-question-generation, assessment-validity, educational-measurement, self-report-measures, learning-gains]
methods: [quantitative-research]
institutions: []
ethics: []
foundations: [teacher-role, critical-thinking, agency]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-16"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Secondary Chinese reading classrooms in mainland China remain dominated by teacher-centered instruction, and access to transnational [[generative-ai|generative AI]] such as ChatGPT is restricted. Treating the [[feedback-literacy|Feedback Orientation Scale]] as a student-centered model of how external [[feedback]] becomes learning, the study ran a two-month quasi-experiment with 200 seventh-graders (aged 12–13) from four intact classes in Shenzhen: 100 received ChatGPT-supported feedback and 100 conventional human-generated feedback. Multi-group structural equation [[quantitative-research|modeling]] showed the pooled model fit poorly (RMSEA 0.259, SRMR 0.133), while the ChatGPT condition fit nearly perfectly (χ² 4.26, RMSEA 0.000, CFI 1.000) and the conventional condition only acceptably (RMSEA 0.112). The ChatGPT group gained 30.40 points on the feedback measure (dz 4.570) and 17.95 on [[feedback|feedback orientation]] (dz 2.552); the conventional group declined by −7.47 and −3.47. The claim is narrower than "AI feedback is student-centered": the mediating mechanism through feedback orientation held only in the ChatGPT condition.

## Key Findings
1. **The pooled FOS model failed; the ChatGPT condition's fit was excellent.** Pooled fit was poor (χ² 71.83, RMSEA 0.259, SRMR 0.133), while Group 1 fitted closely (χ² 4.26, p = .642, RMSEA 0.000, CFI 1.000) and Group 2 acceptably (RMSEA 0.112, CFI 0.983).
2. **Feedback orientation mediated learning only under ChatGPT support.** The indirect FB → FO → WO effect was significant in Group 1 (β = 0.220, 95% CI [0.134, 0.317], p < .001) but not in Group 2 (β = 0.010, p = .141).
3. **The ChatGPT group's gain on external feedback was very large.** Feedback rose from 85.78 to 116.18 (mean difference 30.40, t(99) = 45.704, dz 4.570); Group 2 fell from 85.57 to 78.10 (mean difference −7.47, dz −1.297).
4. **Feedback orientation moved in opposite directions.** Group 1 rose from 29.28 to 47.23 (mean difference 17.95, t(99) = 25.523, dz 2.552); Group 2 dropped from 29.27 to 25.80 (mean difference −3.47, dz −1.337).
5. **Reading outcomes improved in both conditions, but unequally.** Group 1 moved from 24.87 to 42.54 (mean difference 17.67, dz 3.677), against Group 2's 24.80 to 26.42 (mean difference 1.62, dz 0.883).
6. **Baselines were statistically indistinguishable.** Pre-test ANOVAs were non-significant for feedback (F = 0.033, p = .856) and feedback orientation (F = 0.000, p = .989); all three post-test comparisons came in at p < .001 (df = (1, 198)).
7. **The strongest pathways differed by condition.** Group 1's FB_POST → FO_POST path was 0.845 and FO_POST → WO_POST 0.624; Group 2's fell to 0.273 and 0.111, with FB_POST → WO_POST at -0.053 (p = .270).

## A student-centered model that fit only one condition
Zhu treats the [[feedback-literacy|Feedback Orientation Scale]] as the operational test of student-centeredness itself: if [[feedback]] is genuinely [[personalized-learning|personalized]] and responsive, the structure linking external feedback to outcomes through [[feedback-literacy|feedback orientation]] should hold. In the pooled sample it did not. That model produced χ² 71.83 (df = 5) with RMSEA 0.259 and SRMR 0.133, which signals structural misspecification. Splitting by condition resolved the failure in opposite directions. The ChatGPT-supported group fitted closely — χ² 4.26, p = .642, RMSEA 0.000, CFI 1.000, TLI 1.008, SRMR 0.018 — whereas the human-feedback group fitted acceptably but more loosely (CFI 0.983, TLI 0.967, RMSEA 0.112, SRMR 0.024). The reading offered is that the FOS is context-sensitive rather than a universal yardstick, and that [[teacher-role|teacher-centered]] conventional feedback maps onto it less cleanly than [[adaptive-learning|adaptive]] AI feedback does.

## Feedback orientation as the mediating mechanism
The pathway evidence diverges most sharply here. Under ChatGPT support, prior feedback strongly predicted later feedback (0.782), later feedback strongly predicted [[feedback|feedback orientation]] (0.845), and feedback orientation in turn predicted reading achievement (0.624). Under conventional feedback, stability was high (0.859 for FO_PRE → FO_POST, 0.766 for FB_PRE → FB_POST) but the cross-variable links thinned: FB_POST → FO_POST was only 0.273, FO_POST → WO_POST 0.111 (p = .047), and FB_POST → WO_POST was -0.053 and non-significant. The conventional condition also carried a negative path from earlier feedback to later feedback orientation (-0.148, p = .040). Group 1's indirect effect (0.220) and total effect (0.313) were significant at p < .001, while Group 2's indirect effect (0.010) and total effect (-0.017) were not. Read against the [[self-regulated-learning|self-regulated]] and [[metacognition|metacognitive]] framing the author cites, the mechanism is mediation-dominant: feedback orientation carries the effect, not direct [[ai-feedback-quality|AI feedback quality]].

## Reading gains and what the conventional group lost
Both groups improved on reading outcomes, but unequally. ChatGPT-supported students averaged 42.50 (SD 4.18) at post-test against 26.40 (SD 4.41) for the conventional group, and the three post-test ANOVAs were decisive (feedback F = 774.161, feedback orientation F = 490.154, reading F = 703.039, all p < .001, df = (1, 198)). The declines are the more interesting result: the conventional group's feedback measure dropped to 78.10 and its feedback orientation to 25.80, both below pre-test levels (85.60 and 29.30). Because the study measured perceptions rather than only products, the pattern is consistent with students losing confidence in feedback they receive from a conventionally taught classroom. Zhu attributes it to routines that limit [[student-engagement|engagement]] and [[motivation]] in a context where ChatGPT-like tools are largely absent from prior secondary-level research.

## Instrumentation and measurement quality
Three instruments anchor the results. External feedback was measured with a 31-item Student Feedback Perception Questionnaire on a 5-point Likert scale (31–155); feedback orientation with a 12-item [[feedback-literacy|Feedback Orientation Scale]] covering utility, accountability, social awareness and [[self-efficacy]] (12–60); and Chinese reading with a 50-point framework built on six comprehension processes — Retrieving, Explaining, Summarizing, Elaborating, Evaluating and Creating. Content validity came from three senior scholars in Chinese [[language-learning|language education]] who reached unanimous agreement, and inter-rater reliability was strong (ICC .845 to .956). Measurement was nonetheless uneven over time: post-test SFPQ reliability was acceptable to good, but the pre-test was weak, with Cronbach's α of .505 and .413 for Dimension 2 in Groups 1 and 2 — a calibration problem the author attributes to baseline unfamiliarity.

## What this means for practice
- **Instructors.** Integrate ChatGPT into feedback cycles to complement human feedback rather than replace it, and treat feedback orientation — whether students value, trust and act on feedback — as the thing to check, not just the score.
- **Curriculum designers.** Build reading tasks in which feedback arrives with proficiency-aligned texts and comprehension questions, then verify uptake, because here the gains followed the pathway through feedback orientation rather than the feedback itself.
- **Researchers.** Stop reporting pooled model fit for perception instruments across conditions; this dataset fit poorly when pooled (RMSEA 0.259) and closely when separated, so group-specific estimation should be the default.
- **Administrators.** Expect that a fixed conventional feedback routine can leave feedback-related measures below their starting point (−7.47 and −3.47); treat that as a program-level warning, not a null result.

## Limitations
- 200 seventh-grade students (aged 12–13) from four intact classes at one public [[k-12|secondary school]] in Shenzhen were assigned by class rather than randomization, so causal claims rest on a quasi-experimental design.
- Group 1's Chinese language instructors were replaced by two computer science teachers offering only technical support, while Group 2 kept Chinese teachers with master's degrees and fewer than five years of teaching experience; teacher effects are confounded with the feedback condition.
- The intervention ran for two months (September 2025 to late 2025) with no follow-up measurement, so whether the feedback-orientation gains persist is untested.
- The pre-test SFPQ was psychometrically weak (Cronbach's α of .505 for Group 1 Dimension 2 and .413 for Group 2 Dimension 2), which limits how far baseline comparisons can be trusted.
- Feedback, feedback orientation and perceived feedback quality are [[self-report-measures|self-reported]] on Likert scales, so the stalled pathway could reflect changed response habits rather than changed reading practice.

## Citation
Zhu SiYi, A. (2026). [*Modeling Student-Centered Feedback Mechanisms: ChatGPT-Supported Feedback in the Feedback Orientation Scale for Secondary Chinese Reading*](https://osf.io/sbj95). EdArXiv preprint.
