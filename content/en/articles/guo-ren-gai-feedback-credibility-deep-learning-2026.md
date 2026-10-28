---
title: "When college students perceive GAI feedback as credible: the role of perceived GAI feedback credibility in promoting deep learning through cognitive engagement"
published: "2026-10-22"
created: "2026-10-28T12:11:19-04:00"
updated: "2026-10-28T12:11:19-04:00"
type: article
foundations: [ai-education]
pedagogy: [student-ai-interaction, student-engagement, metacognition]
technology: [generative-ai, llm]
assessment: [feedback, ai-feedback-quality, self-report-measures]
methods: [quantitative-research]
research_method: [survey, structural equation modeling]
level: [higher ed, undergraduate]
audience: [instructors, assessment designers]
page_kind: [evaluation]
sources: ['raw/papers/guo-ren-gai-feedback-credibility-deep-learning-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1986129"
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

> **Synthesis:** Guo and Ren (2026) asked whether students' judgment that generative AI feedback is credible reaches deeper learning through cognitive engagement. The design is a cross-sectional survey: 506 undergraduates at 10 universities in Jinan, China, completed self-report scales once, and a structural equation model was fitted to that single wave. Credibility predicted engagement at β = 0.428, engagement predicted deep learning at β = 0.394, and a direct path of β = 0.356 remained, with an indirect effect of β = 0.168 (95% CI [0.115, 0.232]) that was 32.1% of a total effect of β = 0.524. The authors concede that the structural model was saturated and that its fit indices do not support the proposed ordering, and both mediator and outcome are self-reports. The study establishes a pattern of association at one moment, not a mechanism or change.

## Key Findings

1. Perceived GAI feedback credibility was positively associated with cognitive engagement, β = 0.428 (p < 0.001), the largest standardized path.
2. Cognitive engagement was positively associated with deep learning, β = 0.394 (p < 0.001).
3. Credibility also retained a direct association with deep learning, β = 0.356 (p < 0.001), so engagement did not absorb the relationship.
4. The bootstrapped indirect effect through engagement was β = 0.168 (p = 0.001, 95% CI [0.115, 0.232]) over 2,000 resamples, 32.1% of the total effect of β = 0.524.
5. The measurement model fit well, χ2(132) = 141.245, χ2/df = 1.070, CFI = 0.998, RMSEA = 0.012, SRMR = 0.028, with Cronbach's alpha of 0.893 for credibility, 0.898 for engagement, and 0.840 for deep learning.
6. Every item mean sat above the scale midpoint, from 3.438 to 3.866; deep learning items were highest (M = 3.714 to 3.866) and continued use of earlier feedback was weakest (M = 3.438).
7. Of 700 questionnaires, 550 were returned (78.57%); 44 invalid responses were removed, leaving 506 (92.00%), of whom 352 (69.6%) had used ChatGPT and 356 (70.4%) had used GAI for feedback on assignments.

## One wave, and a model with nothing left to test

The design is one administration of three new scales to a quota-stratified sample from 10 universities, with no manipulation and no second occasion. Because the structural portion estimated all three paths, the model was saturated: nothing was left to be rejected, and the fit statistics describe the measurement model, not a contest between orderings. The authors say so, noting that the indices should not be read as evidence for the causal ordering and that the analysis concerns associations. A model with the arrows reversed would fit the same data equally well.

## Credibility is a judgment about a source, not a verdict on accuracy

The paper is careful about what its central construct is not. Credibility is students' evaluation of whether a specific piece of GAI feedback is accurate, relevant, reasonable, dependable, convincing, and confidence-inspiring; [[trust]] is willingness to rely on the system as a whole. Neither means being right, and no external standard was used, so calibrated judgment cannot be told apart from confident misjudgment.

The direction of the engagement path is also less settled than the coefficient suggests. The authors raise [[cognitive-offloading|cognitive offloading]] as the competing prediction: a source judged credible can serve as a cue to accept rather than an invitation to elaborate. Their elaboration likelihood framing allows both readings, since high credibility can motivate scrutiny or license peripheral acceptance. One cross-sectional association cannot adjudicate between those two lives of the same number.

## What the deep learning scale actually measures

Every deep learning item is written from the feedback's point of view: GAI feedback helps me understand the underlying meaning, connect concepts, build an overall framework, apply what I learned, transfer it to other situations. The outcome is students' belief that AI feedback helped them learn, not a measure of learning. No grades, drafts, or work samples were collected. Convergent validity for deep learning is weakest, with an average variance extracted of 0.467, below the conventional 0.50 threshold, and the common-method check is Harman's single-factor test, where the first factor took 39.002% of variance, just under the 40% line it treats as a pass.

## The direct path is bigger than the mediated one

On the study's own terms, most of the association does not run through engagement: the direct coefficient of 0.356 is more than twice the indirect 0.168, and correlations are moderate (credibility with engagement r = 0.388, credibility with deep learning r = 0.455, engagement with deep learning r = 0.471). The authors call engagement one important pathway rather than the pathway, and name unmeasured alternatives. The title promises a route through engagement; the data support a partial route beside a larger unexplained one.

## What this means for practice

For instructors the usable implication is narrower than "make AI feedback credible." Because a credible source can be accepted without being processed, the design lever is processing: require students to state which suggestions they adopted, which they rejected, and on what evidence. [[feedback|Feedback]] students find persuasive is not thereby feedback they have thought about. Faculty developers should treat tool-focused training as insufficient without tasks that make student judgment visible, and researchers should read the model as a hypothesis generator for longitudinal or experimental work.

## Limitations

- The sample is 506 undergraduates from 10 universities in one Chinese city, recruited through instructors and student coordinators under gender and year quotas, so it is structured rather than a probability sample.
- All three constructs are self-report, and the deep learning items ask students to credit GAI feedback for their understanding, inviting consistency bias in the direction the model predicts.
- GAI usage frequency and duration were recorded but not entered into the model, leaving exposure an unmodeled candidate moderator, as the authors note.
- The scales were purpose-built and validated on a pilot of 100 plus one analytic sample, with no independent cross-validation, and deep learning's AVE of 0.467 falls short of the usual criterion.

## Citation

Guo, W., & Ren, X. (2026). [*When college students perceive GAI feedback as credible: the role of perceived GAI feedback credibility in promoting deep learning through cognitive engagement*](https://doi.org/10.3389/fpsyg.2026.1986129). *Frontiers in Psychology*, 17, 1986129.
