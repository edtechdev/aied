---
title: "To cheat or not to cheat? Examining undergraduate students' use of generative AI and academic dishonesty"
created: "2026-11-09T09:35:00-05:00"
updated: "2026-11-09T10:20:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey, interviews]
evidence_context: educational
level: [undergraduate, higher ed]
audience: [instructors, administrators, researchers]
sources: ['raw/papers/dai-genai-academic-dishonesty-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1954618"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [academic-integrity, ai-literacy, reducing-ai-misuse]
pedagogy: [self-efficacy, motivation, self-regulated-learning]
methods: [mixed-methods-research]
ethics: [ai-misuse-learning-harm]
---
> **Synthesis:** Dependence, not deficiency, is what tracks [[academic-integrity|academic dishonesty]] with [[generative-ai|generative AI]] in this sample. Dai and colleagues surveyed 1,045 [[higher-ed|undergraduates]] across Chinese universities — 1,160 complete questionnaires minus 115 who gave the same answer to all 41 items — and interviewed seven of them, framing the analysis with the I-PACE model of problematic technology use. Half the sample (50.1%) scored 5 or higher on a three-item dishonesty measure that averaged 4.74 on a 1–7 scale, and AI dependence was its strongest predictor (β = 0.63, R2 = 0.54), itself fed by impulsivity (β = 0.36), fear of missing out (β = 0.17), and trust in AI (β = 0.13). The counterintuitive result matters for practice: a sense of human–AI [[agency|agency]] was essentially uncorrelated with dependence (r = 0.04), did not moderate the dependence–dishonesty association (β = −0.04, p = 0.272), and was itself positively associated with dishonesty (β = +0.09, p = 0.009). Habitual verification behaved differently, predicting lower dependence (β = −0.285) and, through it, less dishonesty.

## Key Findings

1. **Dishonesty was common among intensive users.** The three-item measure averaged 4.74 (SD = 1.22); 50.1% of students scored 5 or higher and 81.2% at or above 4, while 68.1% used GenAI at least daily.
2. **AI dependence was the strongest predictor of dishonesty.** Its standardized path was β = 0.63 (p < 0.001), accounting for most of the variance in dishonesty (R2 = 0.54) and holding at 0.612 to 0.642 across stricter careless-response screens.
3. **Dispositions fed dependence rather than acting on dishonesty directly.** Impulsivity (β = 0.36), fear of missing out (β = 0.17), and trust in AI (β = 0.13, p = 0.037) predicted dependence (R2 = 0.31); trust also retained a direct path to dishonesty (β = 0.19).
4. **Felt agency did not protect integrity.** Agency was distinct from dependence and essentially uncorrelated with it (composite r = 0.04, latent r = 0.01), did not moderate the dependence–dishonesty link (β = −0.04, p = 0.272; ΔR2 = 0.0006), and was weakly positively associated with dishonesty (β = +0.09, p = 0.009).
5. **Matching on agency left the gap intact.** Among 199 students above the 75th percentile of felt agency, bottom- and top-quartile dependence groups sat 0.04 scale points apart on agency (6.82 and 6.78) yet 2.89 points apart on dishonesty (3.64 against 6.53), d = 2.17.
6. **Verification worked upstream, not as a safeguard.** Critical evaluation's direct path to dishonesty was null (β = −0.020, p = 0.742), but it predicted lower dependence (β = −0.285) and lower [[cognitive-offloading|offloading]] (β = −0.170), with an indirect path of −0.175.
7. **Profiles were ordered by dependence, not by agency.** Across the three profiles dependence rose from 3.20 to 4.39 to 5.35 and dishonesty from 4.17 to 4.56 to 5.39, while agency ran 6.08, 4.72, and 5.89.

## One survey, seven interviews

The design is explanatory [[mixed-methods-research|mixed methods]]: the survey establishes the structure, and the interviews explain it. The quantitative strand drew 1,200 submissions through social media from undergraduates across Chinese universities by convenience rather than from a sampling frame, so no response rate is reported. Forty respondents answered no to the GenAI screener and were routed past the Likert blocks, leaving 1,160 complete questionnaires. From those, 115 (9.9%) were removed for answering all 41 items identically: their within-person standard deviation was zero against 1.22 for everyone else, and their median completion time was 106 s against 222 s. Removal was not neutral — 63.5% of the excluded group were men against 49.2% of the retained, and 23 of the 44 lightest users went with them. The reported model uses 39 items across 12 constructs; three dishonesty items index unauthorized substitution, permission-conditioned delegation, and authorship misattribution. Seven students were then interviewed for 20 to 60 minutes, with the codebook double-coded at κ = 0.90 over 46 excerpts.

## The dependence pathway

The structural model fit closely, and dependence carried the argument: β = 0.63 on dishonesty with R2 = 0.54, and β = 0.83 on cognitive offloading. Bias-corrected bootstrapping confirmed that all three dispositions reached dishonesty through it, with standardized indirect effects of 0.11 for fear of missing out, 0.23 for impulsivity, and 0.08 for trust. Trust also had the rare direct route (β = 0.19), which the authors read as a disposition that can bypass the habitual-use pathway when a student believes the tool is accurate enough to delegate to on a single occasion. The dependence coefficient barely moved across eight alternative specifications — 0.622 to 0.644 — including models adding general self-efficacy, teacher support, [[self-regulated-learning|self-regulated learning]], [[ai-literacy|AI literacy]], and perceived usefulness. Discipline did not change the story: measurement invariance held across science and non-science groups (ΔCFI ≤ 0.001), and dependence dominated within each.

## Agency licenses what verification prevents

The paper's target is the assumption behind most AI-literacy advice — that students who feel capable and in control will stay honest. Agency and dependence turned out to be separate dials, not opposite ends of one: a student can be heavily dependent and feel fully in command. The interaction test found nothing, and at three standard deviations above the mean agency the dependence–dishonesty slope still stood at 0.548. The person-centered analysis said the same thing in a different metric, and so did the students. One described becoming "a reviewer" of code the model wrote; another explained that a stronger sense of agency means treating AI as a tool and feeling no guilt — the feeling of command licensed the delegation it was supposed to restrain. Verification, by contrast, is a behavior rather than a self-appraisal, and it acted before delegation rather than after it: habitual checking lowered dependence, and lower dependence carried less dishonesty. The authors are explicit that the direct effect of checking on dishonest work was null, so checking is a brake on reliance, not a filter applied to finished output.

## What this means for practice

- **Instructors.** Stop treating confidence as the goal. Build the checking habit into the task: require the model's output alongside the student's annotated corrections, and give credit for the corrections rather than for the polished text.
- **Administrators.** Put [[reducing-ai-misuse|integrity strategy]] upstream of the submission. Since dependence carries the association, invest in briefs that state permitted AI involvement and in assessment that makes unaided competence visible — oral components, in-class work, process portfolios.
- **Researchers.** Measure dependence and felt agency as separate constructs, and prefer behavioral traces over self-report: self-assessed and observed reliance diverge, so copy-paste records and revision histories are the natural next test.
- **Developers.** Design for friction where it matters: a required step before a task is handed over — stating what the answer should look like, or attempting the first move unaided — matches the point in the process where the data locate the risk.
- **Instructors and advisers.** Treat [[trust-calibration|miscalibrated trust]] as teachable. A short exercise with model output at a known error rate shows students where the tool fails in their own field, which is what a reliance decision needs.

## Limitations

- Cross-sectional, single occasion, single source: nothing establishes that dependence precedes dishonesty rather than accompanying or following it, and the mediation language reflects the theoretical ordering, not temporal precedence.
- Everything rests on self-report of conduct students have reason to conceal: no interaction logs, copy-paste traces, or revision histories were collected, so the prevalence figures are lower bounds.
- Convenience sample with no sampling frame: 74.8% of respondents sat in Shandong and 13.5% in Sichuan, so the estimates describe these respondents, not Chinese undergraduates; 115 invariant responders were also removed after reviewing the data, tilting the sample toward heavier users (daily-or-more use rises from 66.7% to 68.1%).
- Impulsivity, trust in AI, and cognitive offloading were measured with two items each, sampling part of each domain; the dishonesty measure indexes a disposition rather than verified rule breaches, and one item conditions on the absence of a prohibition.
- The qualitative strand is seven interviews; teacher-researchers conducted them, which the authors expect suppressed admissions of shortcutting.
- The survey named DeepSeek, Doubao, Kimi, Ernie Bot, and ChatGPT as examples but recorded no system identity or version, so tool choice could not be tested.

## Citation

Dai, X., Nie, A., Du, P., Liu, Y., & Wang, Z. (2026). [*To cheat or not to cheat? Examining undergraduate students' use of generative AI and academic dishonesty*](https://doi.org/10.3389/fpsyg.2026.1954618). *Frontiers in Psychology*. https://doi.org/10.3389/fpsyg.2026.1954618
