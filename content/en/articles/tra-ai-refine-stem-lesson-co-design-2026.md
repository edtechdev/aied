---
title: "Developing and validating the AI-REFINE process to support pre-service science teachers in co-designing STEM lesson plans with generative AI"
created: "2026-11-27T07:44:00-05:00"
updated: "2026-11-27T07:44:00-05:00"
type: article
published: "2026"
sources: ['raw/papers/tra-ai-refine-stem-lesson-co-design-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [delphi, quasi-experiment]
discipline: []
level: []
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: [mixed-methods-research]
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

> **Synthesis:** Tra and Linh (2026) developed and content-validated AI-REFINE, a six-step process for guiding pre-service science teachers through co-designing science-integrated STEM lesson plans with [[generative-ai|generative AI]]. The steps are Request & Articulate, Evaluate, Formulate, Iterate, Normalize, and Export, and they position the [[teacher-role|teacher]] as the central decision-maker rather than a copy-paste user. A two-round Delphi study with nine [[science-education|science education]] experts revised an initial draft and reached a scale-level content validity index of 0.97. A six-week pilot then followed 28 third-year natural science pre-service teachers at one Vietnamese [[higher-ed|university]] using a one-group pre-test/post-test design, with two parallel lesson-plan tasks scored by two independent raters. Competency scores rose substantially and every participant scored higher at post-test, with a non-parametric sensitivity analysis agreeing. Because there was no control group, the authors describe the result as preliminary promise rather than effectiveness, and they recommend controlled experimental studies.

## Key Findings
1. **A structured process replaced ad hoc [[prompt-engineering|prompting]].** AI-REFINE turns [[human-in-the-loop-ai|human-in-the-loop]] principles into six named steps that keep scientific and [[pedagogy|pedagogical]] decisions with the pre-service teacher.
2. **Expert review reshaped the process.** Round 1 comments led to merging an idea step into the initial request and splitting a final quality-control step into Normalize and Export.
3. **Content validity was high.** Every item on the Round 2 survey met the a priori item-level threshold, and the scale-level index exceeded the recommended cutoff.
4. **The pilot used authentic design products.** Two parallel lesson-plan tasks were scored with an [[rubrics|analytic rubric]] covering scientific soundness, accuracy and [[ethics]], human pedagogical value, STEM characteristics, and presentation.
5. **Scores improved across the cohort.** Every participant obtained a higher post-test score, and the authors treat the change as consistent across the group rather than driven by a subset.
6. **Assessing AI output remained difficult.** Students reported confusion when trying to detect subtle scientific errors, and iteration took more time than traditional planning or passive copying.
7. **No causal claim is warranted.** With one group, a single instructor, and no randomization, maturation, repeated testing, and instructor effects cannot be separated from the process itself.

## How the process was developed and tested

The initial draft had six steps with different names and was reviewed for comprehensibility by two university lecturers and one experienced lower secondary science teacher. In Round 1 of the Delphi study, nine experts from three Vietnamese teacher-training institutions critiqued the draft in an open-ended questionnaire. Their comments formed three themes: terminology, structure, and step connotations. Experts objected to naming a teacher-performed step "A.I." and argued that Normalize should become a distinct checkpoint before Export. The revised structure was then rated in Round 2 on a 4-point scale across 15 criteria covering naming, sequence, connotation, and feasibility. The consensus criterion was an item-level content validity index of at least 0.78 for a panel of this size, with a scale-level threshold of 0.90. Item indices were 1.00 or 0.89, the scale-level index reached 0.97, and the panel concluded after Round 2.

The six validated steps have distinct roles. Request & Articulate requires learners to state science objectives and context while constructing the initial prompt. Evaluate makes the teacher a filter for scientific accuracy, feasibility, and ethical risk. Formulate asks for selective integration of AI ideas with human pedagogical value. Iterate treats design as non-linear and allows a return to earlier steps. Normalize checks alignment among objectives, activities, and assessment. Export covers formatting and transparent citation of AI contributions.

Phase 2 used a purposive sample of 28 third-year Natural Science Education pre-service teachers, comprising 21 female and 7 male participants with a mean age of 21.07 years; none had prior formal training in AI-assisted lesson design. The six-week intervention ran from October 6 to November 13, 2025. Week 1 introduced the process and administered the pre-test; Weeks 2 to 4 practiced pairs of steps; Week 5 required a complete lesson plan; Week 6 collected final plans and the post-test. Participants used publicly available ChatGPT (GPT-4.5 or GPT-5) or Gemini (2.5 Flash) accounts, and the platform choice was not restricted.

## What the pilot showed

Co-design competency was assessed with two parallel lesson-plan tasks built from the same specification matrix, content-validated by three experts, and piloted on an independent sample of 52 pre-service teachers. Each plan was scored on five criteria from 0 to 2 points, for a maximum composite score of 10, by two independent lecturers. Inter-rater agreement was ICC = 0.83, 95% CI [0.65, 0.91], and internal consistency on the pilot dataset was 0.929. Both test conditions permitted GenAI use, so the measure targeted AI-assisted design competence at each time point.

The mean competency score rose from 5.77 (SD = 1.07) at pre-test to 7.80 (SD = 1.18) at post-test. The paired-samples comparison was t(27) = −18.48, p < 0.001. Two effect-size indices were reported: Cohen's dz was 3.49, which the authors regard as inflated in a within-subject design given the high pre/post correlation, and Cohen's dav was 1.80, adopted as the [[primary-education|primary]] index. A Wilcoxon signed-rank sensitivity test agreed (Z = −4.624, p < 0.001, r = 0.87), with all 28 participants showing positive rank changes and no negative ranks or ties. The Shapiro-Wilk check on difference scores did not indicate a departure from normality (W = 0.961, df = 28, p = 0.372).

[[qualitative-research|Qualitative]] data came from instructor observation notes and design [[eportfolio|portfolios]] containing successive drafts and prompt records. Two difficulties recurred: [[critical-thinking|critical evaluation]] at the Evaluate step, especially detecting subtle errors in in-depth STEM knowledge, and time pressure at the Iterate step, including hesitation about returning to the Request step to optimize prompts. The authors read these difficulties as signs that students were engaging in co-design rather than passive reception, while noting that [[bias-mitigation|algorithmic bias]] appeared sporadically and required ethical sensitivity.

## What this means for practice
- **Instructors.** Have pre-service teachers articulate science objectives and learner context before they write a prompt, so the teacher rather than the tool sets the parameters.
- **Instructors.** Teach evaluation as a distinct step with criteria for scientific accuracy, laboratory feasibility, and ethical risk, and require evidence that an AI error was detected and corrected.
- **Instructors.** Keep successive drafts and prompts as portfolio evidence, and require transparent declaration of AI contributions in the final lesson plan.
- **Institutions.** Pair adoption of the process with [[educational-development|professional development]] in verifying scientific content and with guidelines on [[academic-integrity|academic integrity]].
- **Researchers.** Use controlled designs with larger samples before treating the score gain as an effect of AI-REFINE, and compare platforms and versions separately.

## Limitations
- The Delphi panel of nine experts was drawn entirely from Vietnam, limiting diversity of perspective on global standards and cross-cultural applicability.
- The pilot involved one small cohort at a single institution, with no randomized control group, so maturation, repeated testing, and instructor influence remain plausible explanations.
- The study did not restrict or systematically log the GenAI tools, versions, prompts, or interaction histories, so the human–AI interactions cannot be fully reproduced.
- The competency instrument has content validity and high internal consistency and inter-rater reliability, but [[assessment-validity|construct validity]] has not been examined on larger samples.
- Qualitative evidence rests on observation notes and design portfolios rather than systematic interviews, and findings may not transfer across science disciplines, curricula, or AI platforms.
- The intervention lasted six weeks and lacks evidence on whether co-design competency is sustained after training ends; the source prints an acceptance date but no separate publication date.

## Citation
Tra TL and Linh NQ (2026) Developing and validating the AI-REFINE process to support pre-service science teachers in co-designing STEM lesson plans with generative AI. Discover Education 5:1390. https://doi.org/10.1007/s44217-026-02480-z
