---
title: "Developing Feedback Taxonomy for Math: A Synergy of Perspectives through Data Mining Methods"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/lee-feedback-taxonomy-math-data-mining-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [math education]
level: [middle school]
audience: [instructors, researchers, educational technology developers]
pedagogy: [scaffolding]
technology: [edtech-platform, machine-learning]
assessment: [feedback, formative-assessment]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Lee, Baral, Li and colleagues analyze teacher-authored [[feedback]] on open-ended middle school math responses in the [[edtech-platform|ASSISTments]] platform, coding 100 teacher feedback messages with a 19-characteristic codebook applied by three researchers and three mathematics teachers, then combining the six perspectives through correlation, [[machine-learning|factor and cluster analysis]]. The result is a data-driven taxonomy of ten feedback types — Direct Correction, Targeted Affirmation, Hinting, Non-verbal Affirmation, Rhetorical Question, Show Your Work, Generic Comment, Direct Critique, Worked Example, and Non-specific Positivity — grounded in how teachers actually respond to open-ended work. The study also shows that researchers and teachers read the same feedback messages differently, with agreement varying sharply by code and coder background.

## Key Findings

1. **A large authentic corpus.** The full dataset covers 8,307 open-ended mathematics problems, 193,187 total responses from 23,853 different students, and 1,296 contributing teachers; the analytic subset comprises 100 fully coded feedback messages, evaluated and annotated by 57 different teachers and drawn from 97 unique students.
2. **Wide performance spread in the sample.** Approximately 14% of responses received a score of 0, 10% a score of 1, 25% a score of 2, 23% a score of 3, and 28% a score of 4 on the platform's 0-to-4 scale.
3. **Agreement depends on the code.** Combined Fleiss' kappa across the six coders ranged from 0.955 for Emoji and 0.748 for Positive Affect down to 0.253 for Specific, 0.201 for Learning Strategy Suggestion, and 0.133 for Hints.
4. **Teachers and researchers diverge on context-dependent codes.** Teacher experts agreed more than researchers on Negative Affect (0.437 vs –0.020) and Example Response (0.472 vs 0.176), while researchers agreed more on Generic (0.608 vs 0.073) and Question (0.812 vs 0.518).
5. **Twelve factors and ten clusters.** Exploratory factor analysis of 108 non-null variables (from 114 derived by 19 codes across six coders) yielded a 12-factor solution, and K-means clustering of the factor scores produced 10 clusters, with the largest (26 observations) defined by example provision and explanation.
6. **Scaffolding dominates authentic feedback.** Most clusters represent facilitative strategies — Hinting, Rhetorical Question, Show Your Work, Worked Example — rather than bare correctness feedback, with affirmation split into Targeted Affirmation, Non-specific Positivity, and Non-verbal Affirmation.

## An analysis pipeline over authentic teacher feedback

The study draws on ASSISTments, a free web-based learning platform for K-12 mathematics used by more than 20,000 teachers across the United States. Open-ended problems require teachers to manually review student responses and write textual feedback, which they often do through QUICK-Comments, a teacher-augmentation tool that offers a repository of pre-authored comments tailored to common student errors. Teachers also assign each response a score on a 5-point integer scale from 0 to 4.

The researchers randomly sampled 100 student responses and their associated feedback messages in two separate rounds. The first round iteratively developed the coding scheme: one researcher drafted initial codes drawn from an earlier feedback framework (positive and negative affect, criticism, question, correction, explanation, suggestion, statement), and two researchers coded and reconciled to expand the codebook. The final codebook contains 19 feedback characteristics — Personal, Confirmation, Generic, Specific, Positive Affect, Negative Affect, Criticism, Emoji, Explanation, Question, Correction, Mathematical Suggestions, Learning Strategy Suggestion, Hints, Example Response, Follow-up, No Mathematics, Student Explanation, and Other.

Six expert coders then independently coded the second 100-message sample: three researchers and three mathematics teachers with over 20 years of teaching experience each. Coders were deliberately encouraged to apply codes according to their own interpretation of both the messages and the codebook, and Kappa values were used not to validate the scheme but to measure differences in perspective. This design answers three questions: how perceptions vary across backgrounds (RQ1), what underlying factors emerge (RQ2), and what feedback types result (RQ3).

## Researchers and teachers read feedback differently

Agreement varied widely by code. Codes operationally more observable achieved strong agreement across all six coders — Emoji reached combined kappa 0.955 (1.000 among teachers) and Positive Affect 0.748 — while context-dependent codes such as Hints (0.133), Learning Strategy Suggestion (0.201), and Specific (0.253) fell below 0.30. The direction of disagreement was systematic: teacher experts aligned more strongly on Negative Affect (0.437) and Example Response (0.472) than researchers (−0.020 and 0.176), suggesting that professional teaching experience shapes how feedback is perceived, while researchers agreed more on Generic (0.608 vs 0.073) and Question (0.812 vs 0.518).

Spearman rank correlations between codes reveal what co-occurs in practice. Across all six coders, Confirmation correlated with Positive Affect — affirming correctness is often read as emotionally supportive — and Mathematical Suggestions correlated with Hints, indicating that mathematical advice is typically framed as scaffolding. The groups correlated differently: within the researcher group, Specific was strongly correlated with Correction and Explanation, while the teacher group correlated Mathematical Suggestions with Specific and Explanation. Student Explanation associated with Learning Strategy Suggestion for researchers but with Question and No Mathematics for teachers. The authors read the overall pattern as researchers foregrounding the diagnostic function of feedback while teachers foreground its pedagogical design.

## Twelve factors, ten feedback types

Exploratory factor analysis treated each of the 19 codes times six coders as distinct variables (114 total). Six variables with null values throughout — Personal (N=4), Negative (N=1), and Generic (N=1) — were removed, leaving 108. Parallel analysis suggested a 12-factor solution, estimated with Minimum Rank Factor Analysis and Promax rotation. Several factors were defined by single codes with high internal consistency, such as Factor 3 (six Emoji variables loading above 0.8), Factor 4 (Question), Factor 6 (Explanation), and Factor 12 (Other). Factor 9 drew strong loadings from five Criticism variables and three Negative Affect variables, evidence that the two codes overlap in application despite distinct definitions.

K-means clustering of the factor scores, with the cluster number chosen by the silhouette method, produced 10 clusters, each renamed to reflect its defining characteristics: Direct Correction, Targeted Affirmation, Hinting, Non-verbal Affirmation, Rhetorical Question, Show Your Work, Generic Comment, Direct Critique, Worked Example, and Non-specific Positivity. Cluster sizes follow the prevalence of each type in the dataset. The largest, Cluster 9 (26 observations), combined high Factor 11 (Example Provision) and Factor 6 (Explanation), the worked-example pattern exemplified by a message such as "12 is correct. You would get 3/12 + 2/12, which would give you an answer of 5/12." Cluster 10 (16 observations) paired Positive Affirmation with negative Specificity — encouragement without actionable guidance, as in "Great job!" Cluster 4 (four observations) relied on Emoji, Cluster 7 had a single observation, and Cluster 8 had two, all warranting caution in interpretation though possibly representing strategies the codebook under-captures.

The resulting taxonomy sharpens prior frameworks. Unlike Shute's (2008) broad category of elaborated feedback, it separates prompts, hints, and examples as distinct ways of guiding next steps, and unlike Narciss (2013) it splits correctness-related feedback into Direct Correction, Direct Critique, Targeted Affirmation, Non-specific Positivity, and Non-verbal Affirmation rather than treating affirmation as one category. The authors position the taxonomy as an empirically grounded foundation for feedback evaluation, classification, and generation at scale; analysis code and data-sharing instructions are released through the Open Science Framework, and they argue the ten types can guide prompt engineering, fine-tuning objectives, and evaluation criteria for LLM-based feedback systems.

## What this means for practice

- **Instructors.** Recognize that a large share of effective teacher feedback is scaffolding rather than correction: in this corpus the majority of clusters represent facilitative moves — Hinting, Rhetorical Question, Show Your Work, and Worked Example — so feedback that prompts rethinking may serve middle school math students better than answer-focused comments.
- **Educational technology developers.** Use the ten-type taxonomy as a design vocabulary for feedback systems and for LLM-based feedback generation, since the authors show it can structure prompt engineering, fine-tuning objectives, and evaluation criteria around the feedback types teachers actually produce.
- **Researchers.** Do not treat a single coding perspective as the ground truth for feedback content: agreement among six expert coders ranged from 0.955 to 0.133 by code, so multi-perspective coding (or explicit justification of one) is a reporting requirement, not an optional check.
- **Assessment designers.** Distinguish affirmation subtypes in feedback rubrics — Targeted Affirmation, Non-specific Positivity, and Non-verbal Affirmation differ in specificity and modality — and treat "Great job!"-style comments as a real, prevalent feedback type rather than noise.

## Limitations

- The scope is confined to teacher-written feedback in middle school mathematics on a single web-based learning platform, so the authors do not claim the taxonomy generalizes to other subjects, grade levels, or instructional modalities.
- Students did not participate as coders or stakeholders, so the taxonomy captures how teachers and researchers interpret feedback, not how learners perceive or act on it.
- The analytic subset is small (100 feedback messages from 97 unique students and 57 teachers), and three clusters contain four, two, and one observations respectively, making prevalence claims for rarer feedback types tentative.
- The paper proposes the taxonomy as a foundation for automated feedback systems but does not itself generate, deliver, or evaluate any AI feedback.

## Citation

Lee, S. M., Baral, S., Li, H. C., Cheng, L., Zhang, S., Thorp, C. S., St. John, J., Thompson, T., Heffernan, N., & Botelho, A. F. (2025). Developing Feedback Taxonomy for Math: A Synergy of Perspectives through Data Mining Methods. *Journal of Educational Data Mining*, 17(2), 1-23.
