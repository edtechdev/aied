---
title: "Generative artificial intelligence use and interpersonal educational interaction among nursing students: self-regulated learning as a statistical mediator"
published: "2026-10-20"
created: "2026-10-28T12:16:14-04:00"
updated: "2026-10-28T12:16:14-04:00"
type: article
foundations: [ai-education]
pedagogy: [self-regulated-learning, student-ai-interaction]
technology: [generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
research_method: [survey, structural equation modeling]
level: [undergraduate, higher ed]
audience: [instructors, faculty developers]
page_kind: [evaluation]
sources: ['raw/papers/li-nursing-genai-interaction-self-regulated-learning-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1864535"
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

> **Synthesis:** Li and colleagues asked whether nursing students who interact more with generative AI report more educational interaction, and whether self-regulated learning sits between the two. They surveyed 1,020 undergraduates at one medical college in Hunan Province once, in January 2025, with three self-report scales. Correlations ran at r = 0.378 between student-GAI interaction and educational interaction, r = 0.236 between student-GAI interaction and self-regulated learning and r = 0.580 between self-regulated learning and educational interaction, and the model split a total effect of 1.36 into a direct 0.92 and an indirect 0.44 through self-regulated learning, 32.35% of the total. The word statistical is load-bearing: the model is just-identified, so it cannot show that self-regulated learning is the right intermediary rather than a compatible alternative, and one wave cannot order the three variables: this is a pattern of association among three self-assessments, not a mechanism.

## Key Findings

1. Across 1,020 nursing students (83.2% female, mean age 19.09 ± 2.40), mean scores were 14.80 ± 2.27 on student-GAI interaction, 70.90 ± 8.15 on educational interaction and 56.00 ± 7.34 on self-regulated learning, and 98.8% had begun using GAI for coursework by 2024.
2. Correlations were positive (all p < 0.01): student-GAI interaction with educational interaction r = 0.378, student-GAI interaction with self-regulated learning r = 0.236, self-regulated learning with educational interaction r = 0.580.
3. In regression on educational interaction, student-GAI interaction held β = 0.256 (B = 0.919, p < 0.001) and self-regulated learning β = 0.520 (B = 0.577, p < 0.001), with R² = 0.398.
4. Paths ran at β = 0.24 from student-GAI interaction to self-regulated learning, β = 0.52 from self-regulated learning to educational interaction and β = 0.26 direct.
5. Bootstrap results from 5,000 draws gave a total effect of 1.36 (95% CI [1.14, 1.57]), a direct effect of 0.92 (95% CI [0.72, 1.11]) and an indirect effect of 0.44 (95% CI [0.32, 0.57]).
6. The mediated share was 45.41% for student-teacher interaction, 41.54% for student-content and 22.15% for student-student, against absolute indirect effects of 0.17, 0.11 and 0.16.
7. Of 1,573 questionnaires submitted, 553 were dropped for completion under 100 seconds, zero standard deviation across items or cyclic responding, leaving 1,020.

## What one wave of self-report can decompose

The design is a [[quantitative-research|quantitative]] survey distributed through class WeChat groups, with fourth-year interns excluded because they were off campus: first- to third-year students at one institution, 46.0% of them first-year. A cross-sectional mediation estimate partitions one moment's covariance into direct and indirect components: arithmetic on a correlation matrix. Measurement was marginal, with the educational interaction scale at CFI = 0.872 and RMSEA = 0.099 and the interaction scale's average variance extracted at 0.474.

## The mediator holds a position the model never tests

The structural model is just-identified. With χ2 at zero and GFI and CFI at 1.00, the authors state that RMSEA is meaningless and conventional fit indices do not apply. It has as many free parameters as observed covariances, so it reproduces the data by construction and cannot beat an equally parsimonious rival. It cannot distinguish their ordering from the reverse, in which richer [[student-ai-interaction|interaction]] builds self-regulated learning that then shows up as more confident AI use, nor exclude a third variable such as prior achievement. The authors concede that "the directionality of these associations cannot be definitively established," yet their hypotheses say predicts.

## Where the share is largest, the effect is not

Self-regulated learning accounts for 45.41% of the student-teacher association, 41.54% of student-content and 22.15% of student-student. Read as a ranking, self-regulation matters most in the teacher channel. Read against the absolute indirect effects of 0.17, 0.11 and 0.16 and total effects of 0.38, 0.26 and 0.72, the peer channel carries the largest total and direct association (0.72 and 0.56) and the smallest mediated share, because its direct path is large. A proportion is a ratio.

## An interaction scale that counts frequency and norm

The predictor is four items: interaction is becoming more frequent, the student uses GAI to seek answers, asks it for advice on course tasks, and "my classmates are becoming more interested in using GAI tools." The fourth asks about classmates and reads as a descriptive norm; students with no experience were told to mark 1, scoring abstention as strong disagreement. With 98.8% reporting use, the design contrasts degrees of use, not users against non-users, and records no model, task or purpose. The authors note that frequent interaction may signal adaptive trust, overreliance, convenience-seeking or course-mandated use; [[ai-literacy|AI literacy]] went unmeasured. A student who interrogates a model and one who asks it for answers would score alike.

## What this means for practice

Read this as a hypothesis about sequencing, not an effect. Instructors can reasonably design assignments that make students plan, monitor and evaluate their AI use, and the paper's own recommendation is that GAI complement rather than replace unmediated contact. It cannot support the claim that teaching self-regulation raises interaction quality, and 32.35% should not be quoted as a third of a benefit that was never measured. Faculty developers should not move effort away from peer work: that channel carried the largest total association (0.72). For researchers, longitudinal or experimental designs with confounder control are the paper's own remedy, and a log of prompts, revisions and refusals would measure the construct the scale only approximates.

## Limitations

- One institution, a convenience sample from class WeChat groups, 83.2% female, fourth-year interns excluded, and 553 of 1,573 questionnaires dropped, so clinical-year students and other nursing programs are absent.
- A single observation with all three constructs self-reported in one sitting. The Harman test at 33.57% of variance is a weak screen, and with no second source, common method variance and reverse causation remain open.
- Only age, gender, grade and earliest GAI use were controlled; the authors name prior achievement, AI literacy, motivation, digital access, platform type, task complexity, teacher-guided versus self-initiated use and institutional policy as unmeasured.

## Citation

Li, J., Xu, E., Li, L., Huang, L., Pu, Y., & Huang, R. (2026). [*Generative artificial intelligence use and interpersonal educational interaction among nursing students: self-regulated learning as a statistical mediator*](https://doi.org/10.3389/fpsyg.2026.1864535). *Frontiers in Psychology*, 17, 1864535.
