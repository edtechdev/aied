---
title: "Research on the Impact of Generative Artificial Intelligence Usage Behavior on the Learning Outcomes of Higher Vocational Students"
created: "2026-09-30T12:34:11-04:00"
updated: "2026-09-30T12:34:11-04:00"
type: article
sources: ['raw/papers/10.3390_bs16071166.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, instrument development]
discipline: [vocational education]
level: [higher ed]
audience: [instructors, curriculum designers, administrators, researchers]
foundations: [ai-literacy, cognitive-offloading, academic-integrity, human-ai-collaboration, limitations-in-aied-research]
pedagogy: [metacognition, self-regulated-learning, student-engagement, transfer-of-learning]
technology: [generative-ai, llm, technology-acceptance-model]
assessment: [self-report-measures, learning-gains]
methods: [quantitative-research]
ethics: [ai-misuse-learning-harm]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Song and colleagues surveyed 1110 higher vocational students from 10 Chinese colleges to test how three dimensions of [[generative-ai]] usage behavior — frequency, habits, and contexts — relate to self-reported perceived learning outcomes in knowledge mastery, skill application, and competency development. The team first developed and validated two scales (26 core items, 5-point Likert), then used correlation and multiple linear regression with gender and grade as controls. Usage habits correlated most strongly with perceived outcomes (r = 0.418) and carried the largest regression weight (β = 0.336); usage frequency correlated weakly and negatively (r = 0.137, β = −0.183), while usage contexts sat in between (β = 0.269). The [[vocational-education]] population is the distinguishing feature — the authors argue findings from undergraduates cannot be generalized to this group. The central qualification is the design: this is a single-time-point, self-reported cross-sectional survey, so associations carry no established causal direction.

## Key Findings

- **Usage behavior sat at a moderately high level, with habits strongest and frequency weakest.** The overall GenAI usage mean was 3.75 (SD = 0.67); usage habits had the highest mean (M = 3.95, SD = 0.74), usage contexts M = 3.69 (SD = 0.78), and usage frequency the lowest (M = 3.60, SD = 0.85).
- **Perceived learning outcomes were rated above average, led by competency development.** The overall mean was 4.01 (SD = 0.57); competency development ranked highest (M = 4.03, SD = 0.60), followed by skill application (M = 4.01, SD = 0.59) and knowledge mastery (M = 3.95, SD = 0.64).
- **Habits showed the strongest positive association, and frequency a weak negative one.** Correlation with perceived learning outcomes was r = 0.418 for habits, r = 0.373 for contexts, and r = 0.137 for frequency (all p < 0.01). Regression confirmed the pattern: F = 51.347, p < 0.001, R² = 0.218, adjusted R² = 0.214.
- **In the regression, frequency predicted negatively while habits and contexts predicted positively.** Usage frequency B = −0.122 (β = −0.183, t = −5.368), usage habits B = 0.258 (β = 0.336, t = 9.589), usage contexts B = 0.196 (β = 0.269, t = 6.977). Hypothesis H1 (a positive frequency effect) was therefore not supported; H2, H3, and H4 (habits strongest) were.
- **Group differences were largely absent except by grade and major.** Independent-samples t-test and ANOVA found no significant gender differences in perceived learning outcomes (p > 0.05). Only the skill application dimension differed across grades (p = 0.042), with first-year students scoring higher than second-year students (p = 0.02). All dimensions differed significantly across the 18 major categories surveyed (p < 0.001).

## What the two scales measure

Both instruments were built for the vocational context rather than imported from undergraduate samples. The GenAI Usage Behavior Scale operationalizes usage frequency, habits, and contexts on the basis of the Technology Acceptance Model and UTAUT frameworks. Frequency captures how often and how dependently students use GenAI for academic and daily purposes; habits capture interaction optimization, information screening, and critical adoption — adjusting prompts, comparing tools, and verifying answers; contexts capture the breadth of use across learning, daily life, and development. [[technology-acceptance-model]] supplies the facilitating-conditions logic behind the contexts dimension.

The Higher Vocational Students' Perceived Learning Outcomes Scale splits outcomes into knowledge mastery (core concepts and theories), skill application (applying operational skills to real work tasks), and competency development (communication, time management, and independent [[problem-solving]]). The authors weight these with the Analytic Hierarchy Process, using 15 vocational-education experts, to yield rounded weights of 0.2, 0.4, and 0.4. This is a deliberate departure from exam-score proxies: vocational education, the paper argues, assesses skill proficiency and occupational adaptability, not academic test scores alone.

Reliability was high. Cronbach's α was 0.930 for the usage behavior scale (sub-dimensions all above 0.87) and 0.962 for the perceived learning outcomes scale (sub-dimensions all above 0.9). Exploratory factor analysis retained three factors per scale; KMO was 0.949 and 0.961 respectively. Harman's single-factor test returned a first factor at 43.12% of total variance, below the 50% cutoff. Note that the outcome measures are [[self-report-measures]] throughout — students report their own [[learning-gains]], not measured achievement.

## How to read the frequency finding

The negative frequency coefficient does not, in the authors' account, mean that using GenAI more hurts learning. They read it as a marker of usage quality: frequent use "is often accompanied by problematic learning practices, such as random use without clear learning goals, over-reliance on generated content, and a lack of active processing or in-depth thinking." That interpretation connects the result to [[cognitive-offloading]] and the concern that frictionless task completion can erode the independent thinking and [[metacognition]] that transferable outcomes depend on. The habit advantage points the other way: students who question, verify, and critically examine AI output are the ones whose usage tracks with stronger perceived outcomes, and the paper ties those habits to [[academic-integrity]] as much as to technical competence.

## What this means for practice

- **Instructors.** Treat usage habits as the teachable target. Habits carried the strongest association (r = 0.418, β = 0.336), so prompt adjustment, output verification, and cross-tool comparison are the behaviors to design into assignments rather than assuming students will pick them up.
- **[[curriculum-design|Curriculum]] designers.** Do not equate more AI use with better outcomes. Frequency was the weakest and negatively signed predictor (β = −0.183), so scaffolded, goal-directed use and named appropriate contexts matter more than access or volume.
- **Administrators.** Build context-specific guidance per major. All dimensions differed significantly across major categories (p < 0.001), so a single institution-wide [[educational-policy-ai|AI policy]] is unlikely to serve knowledge-intensive and skill-operation programs equally.
- **Student-facing support.** Develop transfer across contexts. Usage contexts were positively associated with outcomes (β = 0.269), which supports coaching students to apply GenAI deliberately in project work, skill practice, and career preparation rather than only in assignment completion.

## Limitations

- The design is cross-sectional and both constructs were measured by self-report at a single time point, so common method bias cannot be excluded and no causal direction is established; the authors call for multi-source data and multi-wave or longitudinal designs.
- Confirmatory factor analysis was not run, so the theoretical latent structure of both scales was not cross-validated, and the outcome scale covers competency development with relatively few items.
- AHP weights rest on expert judgment and are not objective measurement [[benchmark|benchmarks]]; different panels or algorithms could yield divergent weights.
- The regression includes only gender and grade as controls, omitting prior achievement, socioeconomic status, digital literacy, motivation, [[self-efficacy]], and [[teacher-role|teacher]] or institutional factors; and all participants were Chinese, leaving generalizability untested.

## Citation

Song, Y., Zhao, K., Li, L., & Dong, W. (2026). [Research on the Impact of Generative Artificial Intelligence Usage Behavior on the Learning Outcomes of Higher Vocational Students](https://doi.org/10.3390/bs16071166). *Behavioral Sciences*, 16(7), 1166.