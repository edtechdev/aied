---
title: "The association between generative AI use and university students’ critical thinking: a moderated mediation model of GenAI feedback literacy and reflective thinking"
created: "2026-09-30T10:34:08-04:00"
updated: "2026-09-30T10:34:08-04:00"
type: article
sources: ['raw/papers/10.3389_fpsyg.2026.1939286.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
level: [higher ed, undergraduate]
audience: [instructors, faculty developers, researchers]
foundations: [critical-thinking, ai-education, cognitive-offloading, human-ai-collaboration, limitations-in-aied-research]
pedagogy: [metacognition, self-regulated-learning]
technology: [generative-ai, llm, prompt-engineering]
assessment: [feedback-literacy, self-report-measures, feedback]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Yan, Fang and Zou tested a moderated mediation model linking [[generative-ai|generative AI]] use to critical thinking in a cross-sectional survey of 421 Chinese undergraduates (69.6% female) at universities in mainland China during the 2024–2025 academic year, estimated with partial least squares structural equation modeling (PLS-SEM, 5,000 bootstrap resamples). GenAI use, GenAI [[feedback-literacy]] and [[critical-thinking]] were measured by self-report; the outcome was the eight-item Critical Analytical Skills sub-scale of a Chinese critical-thinking scale, not a performance task. GenAI use was positively associated with critical thinking in the total effect (β = 0.257, p < 0.001), but that direct path dropped to non-significance once feedback literacy entered the model (β = 0.072, p = 0.227), and the indirect effect through feedback literacy (β = 0.185) accounted for 71.98% of the total association. The most important qualification is that the association was conditional and the design was concurrent: at low reflective thinking the direct path was positive (β = 0.177, p = 0.008), at high reflective thinking it was non-significant (β = −0.073, p = 0.245), and because all variables were measured at one time point, no causal direction — including the proposed ordering — is established.

## Key Findings

- **GenAI use was positively associated with self-reported critical thinking overall, but the direct path did not survive the mediator.** The total effect of GenAI use on critical thinking was β = 0.257 (t = 4.864, p < 0.001); with feedback literacy in the model the direct effect fell to β = 0.072 (t = 1.209, p = 0.227).
- **The association ran largely through GenAI feedback literacy.** GenAI use predicted feedback literacy (β = 0.438, t = 8.335, p < 0.001) and feedback literacy predicted critical thinking (β = 0.421, t = 8.309, p < 0.001); the indirect effect was β = 0.185 (bootstrap SD = 0.031, p < 0.001, 95% CI [0.134, 0.254]), a variance accounted for (VAF) of 71.98% (0.185/0.257), which the authors read as near-complete mediation.
- **Reflective thinking moderated both paths, with opposite signs.** The Reflective Thinking × GenAI Use interaction on critical thinking was negative (β = −0.125, t = 3.138, p = 0.002); the Reflective Thinking × Feedback Literacy interaction was positive (β = 0.069, t = 1.986, p = 0.047).
- **The direct GenAI-use path operated only for less reflective students.** At low reflective thinking (M − 1 SD) the slope was significant (β = 0.177, t = 2.678, p = 0.008); at high reflective thinking (M + 1 SD) it was non-significant (β = −0.073, t = 1.162, p = 0.245). The authors state that this does not indicate GenAI "hurts" critical thinking among highly reflective students but is consistent with the association being redistributed into the feedback-literacy pathway.
- **The feedback-literacy path was strongest for the most reflective students.** At high reflective thinking the slope was β = 0.243 (t = 3.704, p < 0.001); at low reflective thinking it was β = 0.105 (t = 1.837, p = 0.066).
- **The indirect effect was conditional on reflective thinking.** At M − 1 SD it was β = 0.046 (95% CI [−0.007, 0.100]), at M β = 0.076 (95% CI [0.030, 0.128]) and at M + 1 SD β = 0.106 (95% CI [0.047, 0.179]). The index of moderated mediation was a × b₃ = 0.438 × 0.069 = 0.030 (95% CI [0.001, 0.135], p = 0.047), meaning the indirect effect rises by 0.030 for each 1 SD increase in reflective thinking.
- **Zero-order correlations were positive throughout, strongest with reflective thinking.** Critical thinking correlated 0.244*** with GenAI use, 0.440*** with feedback literacy and 0.591*** with reflective thinking; GenAI use correlated 0.451*** with feedback literacy (all p < 0.001). Means were 56.55 ± 9.44 (GenAI use), 130.95 ± 18.37 (feedback literacy), 37.60 ± 5.29 (critical thinking) and 56.42 ± 7.44 (reflective thinking).
- **The model explained a substantial share of the outcome.** R² was 0.396 for critical thinking and 0.192 for feedback literacy; effect sizes were f² = 0.238 (GenAI use → feedback literacy, medium), 0.263 (reflective thinking → critical thinking, medium), 0.032 (feedback literacy → critical thinking, small) and 0.004 (GenAI use → critical thinking, negligible). Q²predict was 0.344 for critical thinking and 0.214 for feedback literacy, and SRMR was 0.073.

## What the study measured, and how

- **Design.** A cross-sectional survey using convenience sampling and paper-and-pencil [[self-report-measures|questionnaires]], analyzed in SmartPLS 4.1.1.4 with PLS-SEM and 5,000 bias-corrected bootstrap resamples. Of the 421 retained respondents, 128 (30.4%) were male and 293 (69.6%) female; the year distribution was 116 first-year (27.6%), 101 second-year (24.0%), 164 third-year (39.0%) and 40 fourth-year (9.5%), drawn from a range of disciplines.
- **Instruments.** GenAI use: the 17-item College Students' Generative AI Use Survey (Li et al., 2024), covering course learning, research activities, daily life, and further study and job seeking. Critical thinking: the eight-item Critical Analytical Skills sub-scale of Hou et al.'s (2022) Chinese Critical Thinking Scale, aggregated into three parcels. [[feedback-literacy|GenAI feedback literacy]]: the 39-item Generative AI Student Feedback Literacy Scale (GenAI-SFLS) of Cui et al. (2026), with cognitive, behavioral, affective and ethical dimensions. Reflective thinking: the Reflective Thinking Scale of Kember et al. (2000) in the Chinese-context revision of Fu and Hali (2025), spanning habitual action, understanding, reflection and critical reflection.
- **Measurement quality.** The four-factor model was the best-fitting solution (χ²/df = 2.189; CFI = 0.731; TLI = 0.723; IFI = 0.732; RMSEA = 0.053); the authors attribute the sub-threshold incremental fit indices to model size (80 indicators, 39 from the GenAI-SFLS). Loadings ranged 0.755–0.929, Cronbach's α 0.761–0.894, CR 0.864–0.927, ρA 0.769–0.897 and AVE 0.632–0.761; HTMT ratios were 0.309, 0.514, 0.583, 0.315, 0.715 and 0.546, all below the 0.85 threshold. Harman's single-factor test put the first factor at 21.46% of variance, and adding an unmeasured method factor did not improve fit (CFI 0.699 vs. 0.731; TLI 0.688 vs. 0.723).

## The dual-route reading, and its boundary

The authors frame the pattern as a **dual-route** interpretation: less reflective learners show a small, direct association between GenAI use and self-rated analytical skill that does not pass through systematic feedback engagement, while more reflective learners process AI outputs as material to be inspected, compared and revised, so their GenAI use is tied to feedback literacy instead. They advance this as a theoretically informed reading, not a demonstrated mechanism: the study collected no measure of shallow versus deep engagement and no behavioral trace of how students actually interacted with GenAI. The negative interaction on the direct path is a redistribution of the association, not evidence of harm.

The outcome is also narrower than "critical thinking" as a construct. It is students' perception of their own habitual analytical behavior on a self-report sub-scale, sharing a method with the predictors, so "predicts" throughout the paper means "is associated with higher self-rated analytical skill in a cross-sectional model," not better demonstrated reasoning.

## What this means for practice

- **Instructors and faculty developers.** Treat [[feedback-literacy|GenAI feedback literacy]] as the working surface, not access. In this model, use without feedback engagement carried a negligible direct effect (f² = 0.004), while feedback literacy carried the association. The authors suggest [[prompt-engineering]] instruction, source-checking exercises and structured comparison of multiple AI outputs.
- **Course designers.** Favor multi-stage assignments in which students draft, prompt for feedback, evaluate the response, revise and document their reasoning, rather than one-shot retrieval. The comprehension–evaluation–enaction structure of feedback literacy maps directly onto this loop.
- **Instructors, on reflection.** Because the indirect path strengthened with reflective thinking (index of moderated mediation = 0.030), the authors recommend embedding learning journals, structured debriefs, [[metacognition|metacognitive]] prompts and explicit "think-before-AI" protocols, particularly in early years when AI-use habits are forming.
- **Policy.** The authors argue that usage-volume or access metrics are unlikely on this evidence to be sufficient for critical-thinking gains, and that institutions should measure feedback-literacy and reflection outcomes instead. They offer these as hypotheses for intervention research, not prescriptions.

## Limitations

- **The cross-sectional design precludes causal inference.** All variables were measured concurrently, and the authors state that reverse or reciprocal orderings — for example, students with stronger analytical skills making heavier or more sophisticated GenAI use, or feedback literacy shaping use rather than the reverse — are equally compatible with the data. Longitudinal panel or randomized designs are needed.
- **All measures were self-reported**, and the outcome in particular is self-reported critical analytical skills rather than demonstrated performance; performance-based or process-tracing measures (think-aloud protocols, interaction logs, expert ratings) would strengthen inference.
- **The sample is Chinese and skewed female (69.6%)**, so cross-cultural and gender-balanced replications are needed, and the study did not measure processing depth directly.
- **The outcome was a single analytical-skills sub-scale** of a Chinese instrument; broader operationalizations covering inference, evaluation, explanation and [[self-regulated-learning|self-regulation]], and comparisons across disciplines, remain untested. **The incremental fit indices of the item-level measurement model fell below conventional thresholds**, as the authors note is common with long instruments such as the 39-item GenAI-SFLS.

## Citation

Yan, Z., Fang, Z., & Zou, W. (2026). [The association between generative AI use and university students' critical thinking: a moderated mediation model of GenAI feedback literacy and reflective thinking](https://doi.org/10.3389/fpsyg.2026.1939286). *Frontiers in Psychology*, 17, 1939286.