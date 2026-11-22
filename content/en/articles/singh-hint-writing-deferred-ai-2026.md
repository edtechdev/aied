---
title: "Hint-Writing with Deferred AI Assistance: Fostering Critical Engagement in Data Science Education"
created: "2026-11-11T07:37:32-05:00"
updated: "2026-11-14T11:30:00-05:00"
type: article
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
sources: ['raw/papers/singh-hint-writing-deferred-ai-2026.md']
source_url: "https://arxiv.org/abs/2604.19931"
source_depth: full text
confidence: high
foundations: [ai-literacy]
pedagogy: [scaffolding, metacognition, desirable-difficulties]
technology: [generative-ai, llm]
assessment: [feedback]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Singh and colleagues randomized 97 graduate students in an online data science course to one of three ways of writing hints for incorrect code: alone, with an on-demand GPT-4 hint, or with the AI hint deferred until after a first independent attempt. Deferring produced the highest-quality hints and the best coverage of mistakes; on-demand access fell between deferral and working alone and was only marginally better than working alone. Deferred students spent more than twice as long on the first assignment before the difference disappeared. Post-test scores did not separate, so the case rests on artifact quality and visible [[metacognition|metacognitive]] work rather than test gains. The design makes the timing of [[scaffolding|scaffold]] removal, not the presence of AI, the variable that protects [[cognitive-offloading|effortful processing]].

## Key Findings

1. **Deferring the AI hint produced the best hints.** Students who wrote a first attempt and then saw the model's hint scored higher on hint quality than students working alone, and the on-demand group fell in between, only marginally ahead of working alone.
2. **The advantage sat in finding mistakes.** Deferral was the one condition that reliably beat the baseline on identifying errors and excluding extraneous information; the other comparisons showed no reliable difference.
3. **Many baseline hints named no error at all.** Around 45% of hints written alone failed to identify any of the mistakes in the incorrect solution, against 12.5% under deferral and 25% with on-demand access.
4. **Deferral cost time, then the cost disappeared.** In the first week the deferred group took more than twice as long as either other group; by the second week the three groups were indistinguishable.
5. **Learning outcomes did not separate.** Post-test scores, compared after matching students on prior attainment, showed no reliable difference across the three conditions.
6. **AI hints pulled revisions both ways.** About half of the deferred students improved their hint and roughly a third made at least one revision that lowered quality, mostly by disclosing the solution or adding redundant detail.
7. **Students missed what the AI missed.** When the GPT hint overlooked a mistake, students in both AI conditions tended to overlook it too; in the on-demand group, about a fifth never opened the hint and some who did appeared to disregard it.

## What the study did

The study ran in the September 2023 offering of a four-week online graduate Data Manipulation course at the University of Michigan. Of 101 enrolled students (mean age 30.94, SD = 8.60), 97 completed the first hint-writing activity and 95 the second. Students were randomly assigned to Baseline, AI-assistance or Deferred AI-assistance and completed one activity in Week 1 and one in Week 2, immediately after the deadlines of the second and third programming assignments.

Each activity showed the student a correct solution and an incorrect solution side by side. The correct solution was the student's own submission if it was correct, otherwise the instructor's. The incorrect solution was selected from a repository of 12 and 13 unique wrong submissions from earlier offerings, using a Jaccard similarity over imported [[libraries|libraries]] and built-in functions extracted from each program's abstract syntax tree. The student then wrote a hint that would help someone fix the incorrect program without revealing the answer.

The conditions differed only in when a GPT-4 hint appeared. Baseline students wrote alone. On-demand students could click "Show [[generative-ai|ChatGPT]] Hint" at any point. Deferred students wrote a first hint, then saw the GPT hint, compared it with their own, and revised. Both AI conditions were told the hint could be incorrect or incomplete and that validating it was their responsibility. Hints were generated zero-shot so that quality varied, and 25 GPT hints were produced across the two assignments. Completion alone earned 5% of the course grade.

Hint quality was scored with a two-level [[rubrics|rubric]] covering accuracy, specificity, phrasing, extraneous information and redundancy. Scores ran from -6 to 1 and were mapped to a 1–7 scale; two authors reached 0.78 Cohen's Kappa on a 15% sample before the first author rated the rest. Learning was measured with a ten-item pre-test and a post-test worth 10 points that mixed single-answer and multi-answer items on data manipulation and debugging. The pre- and post-tests were not isomorphic, so the analysis compared post-test scores while controlling for [[prior-knowledge|prior knowledge]].

## Why deferral helped, and where it hurt

The design follows the assistance dilemma: help early enough to prevent frustration, late enough that the learner has to diagnose the problem. In the deferred condition the AI arrived after the student had committed to a reading of the bug, so it functioned as a second opinion to be checked rather than a first draft to be accepted.

The quality difference ran through the whole scale. In a linear mixed-effects model, deferred hints scored 1.096 above the no-AI baseline (SE = 0.37, p = 0.003) and on-demand hints 0.75 above it (SE = 0.34, p = 0.03); the Tukey pairwise tests put deferred against baseline at p = 0.01 and on-demand against baseline at p = 0.08, which is why the on-demand condition reads as a marginal gain rather than a clear one. The rubric's Level 1 score, covering identification of errors and exclusion of extraneous information, separated deferred from baseline (p = 0.03) and nothing else. That is visible in the artifacts: around 45% of baseline hints did not name any of the errors in the incorrect solution, against 12.5% of deferred hints and 25% of on-demand hints.

The time data fit the same reading. Week 1 median time on task was 27.68 minutes in the deferred condition against 11.13 for baseline and 11.60 for on-demand, an ANOVA difference at p = 0.02 — more than the roughly double time that writing two hints would predict. By Week 2 the medians were 12.73, 10.12 and 10.30 and the difference was gone (p = 0.35). The paper reads the extra first-week time as [[desirable-difficulties|productive struggle]] and comparison rather than confusion, though time on task was never entered as a covariate, so the quality advantage and the minutes cannot be fully separated.

The same mandatory comparison appears to have cost something. Deferred students were more likely than on-demand students to absorb the GPT hint's faults (39% against 17%), and the damage was concentrated in communication rather than coverage: revised hints that gave away the solution, repeated the hint, or added unnecessary detail. Around 52% of students in the deferred condition improved their hint, 32% showed no major difference between drafts, and 39% made at least one revision that lowered quality, so the same revision step produced both the gains and the losses. The authors attribute the failures to cognitive load. On-demand students could ignore the hint; deferred students were instructed to revise against it, which made its verbosity harder to resist. The same asymmetry appears in use: about 20% of the on-demand group never opened the hint and 17% appeared to disregard it after viewing.

Learning did not follow. After propensity matching to 55 students with comparable pre-test scores, post-test means were 5.70 for baseline, 4.75 for on-demand and 5.67 for deferred, with an ANOVA p = 0.18. With only 55 students and a post-test completed by 62 of 97, that null is weak evidence either way.

The perception data run against the quality data. Baseline students were the most willing to do the activity again and rated it most useful for practicing debugging, while deferred students rated it least useful for practicing data manipulation. The authors read this as unfamiliarity and effort aversion rather than a verdict on learning, and note that the study ran in 2023, when both the models and students' AI experience were weaker. The paper is an arXiv preprint (2604.19931v1, 21 Apr 2026) and reports no delayed post-test.

## What this means for practice

- **Instructors.** require a first attempt before revealing an AI hint, and make the comparison explicit. The staged version produced better hints than either working alone or opening the hint at will.
- **Designers.** build the reveal as a sequence with stored drafts (write, compare, revise) rather than a single help button, and expect some students to import the model's verbosity into the revision.
- **Researchers.** hint quality is scorable at scale with a rubric, but the learning-outcome question needs a larger sample than the 55 matched students here, and a post-test that students actually complete.
- **Administrators.** the [[personalized-learning|personalization]] pipeline is automatable, since it pairs each student's own solution with a similar wrong one from a stored repository, which makes the activity feasible in courses far larger than 97.

## Limitations

- The study is one course at one institution, with two assignments and a single model generation from 2023, so the treatment includes a particular, now-dated model as well as a timing rule.
- Only 62 of 97 students completed the post-test, and propensity matching left 55, so the null learning result is a power problem as much as a finding.
- Time on task was not modeled as a covariate, which leaves open how much of the hint-quality advantage is design and how much is simply more minutes.
- The quality of the GPT hints was not varied systematically, so the paper cannot say how much of the revision damage came from bad hints versus compliant students.
- Students received no feedback on their hints, and nothing here tests whether the habit of writing a draft before consulting AI persists into other courses.

## Citation

Singh, A., Brooks, C., Li, W., Kim, J., & Wang, X. (2026). [*Hint-Writing with Deferred AI Assistance: Fostering Critical Engagement in Data Science Education*](https://arxiv.org/abs/2604.19931). arXiv preprint.
