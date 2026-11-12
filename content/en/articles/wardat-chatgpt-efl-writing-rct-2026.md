---
title: "Structured ChatGPT-Assisted Writing Instruction and Academic Writing Performance Among Jordanian EFL University Students"
created: "2026-11-11T09:10:51-05:00"
updated: "2026-11-12T10:30:00-05:00"
type: article
evidence_context: educational
published: 2026-11-10
page_kind: [evaluation]
research_method: [experiment]
discipline: [language learning, writing education]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
sources: ['raw/papers/wardat-chatgpt-efl-writing-rct-2026.md']
source_url: "https://doi.org/10.3390/educsci16111922"
source_depth: full text
confidence: high
foundations: [critical-thinking]
pedagogy: [self-regulated-learning, motivation]
technology: [generative-ai, llm]
assessment: [feedback]
methods: [rct, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---


> **Synthesis:** The treatment in this trial is structured use, not access. Wardat and Akour randomized 300 Jordanian [[language-learning|EFL]] [[higher-ed|undergraduates]] across four universities into eight weeks of [[writing-education|academic writing]] instruction that either embedded [[generative-ai|ChatGPT]] in guided prompt–[[feedback|feedback]]–revision cycles or ran conventionally, with the same tasks, schedule and assessment in both conditions. The ChatGPT group moved from 59.74 to 71.87 on a 0–100 IELTS-based writing scale; the control group moved from 59.86 to 62.00. An ANCOVA adjusting for baseline put the gap at 9.964 points (partial η2 = 0.545, F(1, 297) = 356.059). A post-intervention PLS-SEM layer links perceived support from the tool to [[critical-thinking|critical thinking]] (β = 0.456), [[self-regulated-learning|self-regulation]] (β = 0.341) and [[motivation|motivation]] (β = 0.270), with the model explaining 36.3% of the variance in writing performance — associations collected after the fact, which the authors decline to read as mechanism. Twenty interviews describe how the tool entered the drafting cycle and where students set their own limits.

## Key Findings

1. **The randomized writing advantage was large.** Post-test means were 71.87 (SD = 6.88) against 62.00 (SD = 6.51), from equivalent baselines (59.74 versus 59.86, p = 0.876), t(298) = 12.775, Cohen's d = 1.475.
2. **Baseline adjustment left most of the gap standing.** ANCOVA put adjusted means at 71.916 and 61.952, a difference of 9.964 points (95% CI [8.925, 11.003]), F(1, 297) = 356.059, partial η2 = 0.545.
3. **Both groups improved, unequally.** Paired comparisons show a 12.13-point gain in the ChatGPT group (t(149) = 30.33) against 2.14 points in the control group (t(149) = 5.30), so conventional instruction was not inert.
4. **Perceived support tracked critical thinking most strongly.** Paths ran at β = 0.456 to critical thinking, 0.341 to self-regulated learning, 0.270 to motivation and 0.237 to writing performance, all p < 0.001.
5. **The practical effect sizes were mostly small.** Only the path from ChatGPT-assisted learning to critical thinking was medium (f² = 0.263); the remaining paths ran from 0.048 to 0.131.
6. **Interviews described a revision cycle, not a submission shortcut.** Nineteen of 20 participants described idea generation, 18 of 20 feedback and revision, and 17 of 20 learning to evaluate suggestions before using them.
7. **Over-reliance was the students' own theme.** Nine of 20 raised dependence, originality or lost independent thinking, which the authors treat as a design constraint rather than an afterthought.

## An eight-week course, not a tool rollout

Three hundred undergraduates were recruited purposively from eight EFL writing classes at four Jordanian universities, two classes and one instructor per university, with proficiency at CEFR B1 or B2. After a pre-test they were allocated by computer-generated individual randomization to the experimental or control condition, 150 each, with allocation concealed in sealed opaque envelopes opened after pre-test data collection. Baseline equivalence was checked and held on gender, age group, academic year, proficiency level and pre-test writing scores (t(298) = −0.156, p = 0.876).

Both conditions ran the same objectives, weekly tasks, schedule and assessment for eight weeks; the experimental group added one structured ChatGPT-4 session per week under instructor supervision, covering idea generation, planning, drafting, language refinement, feedback evaluation and revision. Instructors had attended a training workshop, and treatment fidelity rested on a shared intervention manual, prompt guidelines and assessment procedure. Essays were scored on four IELTS criteria by two trained raters blind to condition and occasion, with inter-rater reliability of ICC = 0.917; scores were rescaled to 0–100. Because the intervention bundled tool use with instructor guidance, prompt training, critical evaluation and reflection, the authors attribute the writing difference to the package rather than to ChatGPT alone.

## What the interviews add to the model

Twenty experimental participants were interviewed for 30–45 minutes, stratified by post-test performance (seven low, seven medium, six high), and four 90-minute classroom observations were scheduled in weeks 2, 4, 6 and 8. Six themes emerged, and their distribution is the useful part: 19 of 20 reported using the tool to generate ideas and organize arguments, 18 of 20 valued immediate [[feedback]] on drafts, 17 of 20 described comparing suggestions against course materials and assignment criteria before accepting them, 15 of 20 described planning and monitoring their own process, and 17 of 20 reported gains in confidence.

Observations converged: students revised drafts repeatedly within a session, rewrote prompts when responses were unsatisfactory, and discussed suggestions with classmates and the instructor. The sixth theme cuts the other way. Nine of 20 worried that dependence would reduce originality and independent thinking, with one participant quoted as saying the tool "should help students think, not think for them" — the concern that makes [[cognitive-offloading|over-reliance]] a design problem rather than a side effect.

## Which claims the design can carry

Two claims live here and they have different warrants. The [[mixed-methods-research|explanatory sequential design]] keeps them apart. The [[rct|randomized comparison]] supports a causal statement about writing scores under these conditions. The structural model does not: critical thinking, self-regulated learning and academic motivation were each measured once, after the intervention, by five [[self-report-measures|self-report]] items, so the paths describe which students reported what at a single moment, and the authors repeatedly refuse the causal reading — indirect effects are labeled "model-based associations."

The construct measuring exposure is also perceptual rather than behavioral. ChatGPT-assisted learning was operationalized as perceived educational usefulness, administered to both groups; control students answered from general impressions while experimental students answered from eight weeks of direct use. A MICOM check did not reject compositional invariance for that construct (c = 0.996, p = 0.381) but was borderline for academic motivation (c = 0.965, p = 0.050), and the paper concedes that compositional invariance is not equivalence of response processes. Predictive performance beat an indicator-average benchmark (p < 0.001) but not a linear-model benchmark (p = 0.081).

The reading these results support is [[constructivist|social-constructivist]] and [[sociocultural-learning|sociocultural]]: the tool acts as [[scaffolding]] inside an instructor-led cycle rather than as a text generator. The trial tests that package; it does not isolate the model.

## What this means for practice

- **Instructors.** Keep the tool inside the writing cycle rather than at its edges: the reported uses were brainstorming, draft feedback, evaluation and revision, and each ran under instructor supervision in the experimental condition.
- **Curriculum designers.** Build the evaluation step into the assignment. Seventeen of 20 interviewees described judging suggestions against criteria, which is the behavior that separated use from delegation here, and it needs a task structure — [[process-oriented-assessment|process evidence]] such as drafts, revision notes and an account of how AI was used — that rewards it.
- **Administrators.** Pair any rollout with [[academic-integrity|integrity]] and authorship guidance, since students raised dependence and originality unprompted and the intervention made student authorship of ideas and final text explicit.
- **Researchers.** Report the experimental and associational strands separately, as this paper does. A post-only self-report mediator cannot carry a mediation claim, whatever the path coefficients show.

## Limitations

- The trial ran eight weeks with no delayed post-test, so persistence of the writing advantage is unknown, and the authors say so directly.
- Critical thinking, self-regulated learning and academic motivation were measured only after the intervention by self-report; SRL's average variance extracted was 0.496, marginally below the 0.50 criterion, and the construct was retained on theoretical grounds.
- Randomization was at the individual level inside eight intact classes taught by four instructors, and the ANCOVA modeled no university, class or instructor clustering, so standard errors may be sensitive to unmodeled dependence.
- The intervention combined ChatGPT with instructor guidance, prompt training, critical evaluation, revision and reflection, so the effect cannot be attributed to the tool alone.
- The ChatGPT-assistance items went to both groups although only the experimental group had used the tool in the intervention, leaving cross-group comparability of that construct unresolved.
- The qualitative strand drew 20 interviewees from the experimental group only and was coded by a single researcher, with peer debriefing but no second coder.

## Citation

Wardat, S., & Akour, M. (2026). [*Structured ChatGPT-Assisted Writing Instruction and Academic Writing Performance Among Jordanian EFL University Students: Experimental Findings and Associations with Critical Thinking, Self-Regulated Learning, and Academic Motivation*](https://doi.org/10.3390/educsci16111922). *Education Sciences*, 16(11), 1922.
