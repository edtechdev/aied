---
title: "Enhancing AI Feedback Systems: Lessons Learned from a RAG Implementation Study"
created: "2026-11-16T09:06:00-05:00"
updated: "2026-11-16T09:06:00-05:00"
type: article
authors: ["Hughes, C.", "Saini, A. K.", "Cope, B.", "Kalantzis, M."]
published: "2026-11-14"
venue: "Journal of University Teaching & Learning Practice"
source_url: https://doi.org/10.53761/9vprqq24
sources: ['raw/papers/hughes-rag-ai-feedback-implementation-2026.md']
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [quasi-experiment, survey]
page_kind: [evaluation]
level: [graduate]
audience: [instructors, instructional designers, educational technology developers, administrators]
foundations: [ai-education]
pedagogy: [student-ai-interaction, self-regulated-learning]
technology: [rag, generative-ai, llm, edtech-platform]
assessment: [feedback, ai-feedback-quality, feedback-literacy, self-report-measures]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
---

> **Synthesis:** Hughes and colleagues compared two successive semesters of the same online graduate [[writing-education|writing course]], before and after [[rag|retrieval-augmented generation]] was added to its AI review tool, and asked students how good, how useful and how easy to act on the [[feedback|feedback]] was. The Spring 2024 cohort rated quality higher (mean 4.12 against 3.75) and usefulness higher (mean 4.03 against 3.41), and both differences survived adjustment for age, gender, location and educational level. Actionability did not move at all (mean 3.71 against 3.77). The authors read the pattern as a limit on what grounding can buy: better-retrieved information made feedback read as more relevant without helping students decide what to revise, which they attribute to the social and dialogic work that [[feedback-literacy|feedback literacy]] requires.

## Key Findings

- **Grounding raised how good the feedback felt.** Quality ratings rose from 3.75 to 4.12 on a five-point item, a difference that survived adjustment for age, gender, location and educational level.
- **Usefulness moved further than quality.** The largest between-cohort difference in the study was on the item asking whether the review helped improve the work against the [[rubrics|rubric]].
- **Actionability did not move at all.** Students rated the feedback no easier to implement after retrieval was added, and cohort membership was not a significant predictor once demographics were controlled.
- **Retrieval changes what the tool can say, not what students can do with it.** A better-grounded comment still has to be interpreted against the student's own intentions, which is the step the study found unchanged.
- **More experienced students rated the feedback more highly.** Educational level predicted all three outcomes, while older students and those outside North America rated feedback harder to act on.
- **The base model stayed constant and retrieval was the only substantive change.** The system drew on 35 million tokens of prior student work and instructor material plus 117,705 peer-reviewed documents, retrieving seven chunks per prompt.


## How the comparison was run

The study is a non-equivalent cohort comparison in a cyber-social learning environment at a Midwestern [[higher-ed|public university]]: 96 students in Fall 2023 without retrieval, 86 in Spring 2024 with it, across seven eight-week online graduate courses. Both cohorts used the same assignments, rubrics, essay workflow, platform and survey, taught by the same team, and chi-square tests found no significant cohort differences in gender, location or educational level.

Each of the three outcome measures was a single five-point survey item asked at the end of the course. The authors defend single items for narrow constructs and report them as such, noting that they cannot support within-construct reliability. Analyses were Welch t-tests plus three exploratory regression models, adjusted but not causal.

## Why quality and usefulness moved together and actionability did not

Retrieval changes what the tool can say. Grounded in course rubrics, prior student submissions and published work, the generated review is more likely to name the criteria the assignment actually used, which is exactly what a reader experiences as specificity and relevance. That accounts for the quality and usefulness gain without requiring any change in how students behave. The inferential results were t(178) = 3.06, p = .003, d = 0.45 for quality and t(177) = 4.51, p < .001, d = 0.67 for usefulness, and in the adjusted models cohort membership added 0.41 points for quality (B = 0.41, p = .003) and 0.61 for usefulness (B = 0.61, p < .001).

Actionability is a different claim: it is about whether a student can convert a comment into a revision decision. The authors' explanation turns on the collaborative rather than the informational side of feedback. A better-worded comment still has to be interpreted against the student's own intentions, and that negotiation is where the work sits. Retrieval improves the material handed to the student; it does not supply the interpretive step.

The educational-level result fits the same reading. Students further through the system rated the feedback as more useful and more actionable, consistent with their having more practice at reading comments against criteria.

The authors also note what they did not measure: hallucination frequency, retrieval quality, revision behavior, instructor judgment and any learning outcome.

## What this means for practice

- **Instructors.** treat retrieval as a specificity upgrade, not a feedback strategy. Expect comments that name the right criteria and still leave students unsure what to change.
- **Instructors.** pair a grounded AI review with a step that forces translation — a revision plan, a short conference, peer discussion — because actionability did not improve on its own.
- **Instructional designers.** budget for [[feedback-literacy|feedback literacy]] work alongside the tool. The students who rated the feedback highest were the ones with the most prior experience of being assessed.
- **Educational technology developers.** measure actionability separately from quality. A retrieval upgrade that moves quality by 0.45 SD and actionability by −0.06 is a system telling you where its next design problem is.
- **Administrators.** check the comparison before citing an effect. This study compares the same course before and after a tool upgrade, which controls more than a vendor case study but still confounds semester, cohort and tool version.

## Limitations

- The design is a non-equivalent cohort comparison across two semesters, so cohort effects, historical differences and unmeasured differences in prior AI experience cannot be ruled out.
- All three outcomes were single five-point [[self-report-measures|self-report]] items; no revision behavior, instructor perception or learning outcome was measured.
- One platform in one institution, seven courses, graduate students only, so transfer to other settings and learner populations is untested.
- Prior feedback literacy, disciplinary background and attitudes toward [[ai-feedback-quality|automated feedback]] were not measured and may have differed between cohorts.
- The effect sizes quoted in the publisher's record differ from those in the article's own tables; the published tables are the ones reported here.

## Citation

Hughes, C., Saini, A. K., Cope, B., & Kalantzis, M. (2026). [*Enhancing AI feedback systems: Lessons learned from a RAG implementation study*](https://doi.org/10.53761/9vprqq24). *Journal of University Teaching & Learning Practice*.
