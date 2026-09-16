---
title: "Learning paths and patterns in learning design: Insights from 500+ courses"
created: "2026-09-13T11:05:00-04:00"
updated: "2026-09-16T14:32:03-04:00"
type: article
tags: [learning-design, learning-analytics, curriculum-design, assessment, active-learning, constructivist, student-engagement, quantitative-research]
research_method: [quantitative, secondary analysis, learning analytics]
discipline: [learning sciences]
audience: [learning designers, instructional designers, curriculum designers, educators, researchers]
level: [higher ed, k 12, adult learning]
category: [instructional design, curriculum design, assessment]
sources: ['raw/papers/learning-paths-patterns-learning-design-2026.md']
confidence: high
---

> **Synthesis:** Divjak, Svetec and Horvat (2026) turn [[learning-analytics]] inward on [[learning-design]] itself: instead of reconstructing what students did from LMS traces, they analyse the designed sequence of 29,064 teaching and learning activities (TLAs) across 554 courses planned in the free Balanced Design Planning (BDP) tool at the University of Zagreb. Markov chains and sequential pattern mining reveal a design grammar in which Acquisition-type activities are the most common entry point and the most common learning type overall, Assessment frequently leads to Discussion, and Practice recurs as a consolidating or closing activity, most visibly in the sequence Acquisition → Practice → Practice → Assessment. Learning type is tied to the level of the intended learning outcome — Acquisition dominates at Bloom level 1 while Production rises at levels 5 and 6 — which the authors read as evidence of constructive alignment in practice. The recurring sequences also resemble flipped classroom, [[inquiry-based-learning|inquiry-based]] and [[project-based-learning|project-based]] designs, though the authors insist that resemblance is not proof of intent.

## Key Findings

1. **Knowledge transmission still dominates designed courses.** Across all 29,064 TLAs analysed, Acquisition was the single largest learning type (above 20% of activities), followed by Practice, Discussion and [[assessment]] (each between 15% and 20%), with Investigation and Production last (around 10% each).
2. **Learning type tracks the cognitive level of the intended outcome.** Acquisition-type TLAs fell from around 50% at Bloom level 1 to around 20% at level 6, while Production-type TLAs rose from 5–10% at levels 1–4 to above 20% at levels 5 and 6; Practice exceeded 20% at levels 3–6 and Discussion peaked at level 4 (above 25%). The authors cite this as supporting constructive alignment between learning outcomes and TLAs.
3. **Intended outcomes themselves cluster low.** The distribution of learning outcome levels was positively skewed, with most TLAs attached to levels 3 (Applying) and 2 (Understanding), followed by 4 (Analysing) — a pattern the authors note also appears in earlier work on [[higher-ed]].
4. **Design elements co-occur in coherent habits.** Spearman and Kendall correlation matrices (majority of correlations significant at p < 0.05) showed a moderate positive correlation between [[feedback]] and [[collaborative-learning|collaboration]] and the strongest associations between synchronous activities and [[teacher-role|teacher]] presence and between collaboration and [[group-work]]. Outcome levels were largely unrelated to other design elements except for a weak correlation with learning types, implying feedback, assessment, group work and collaboration can serve outcomes at any level.
5. **The transition structure is self-reinforcing and Assessment→Discussion is the strongest edge.** The Markov transition matrix gave its highest values to Assessment → Discussion (0.332), Practice → Practice (0.317) and Acquisition → Acquisition (0.292). Discussion had the lowest mean recurrence time (4.72), followed by Practice (4.92), while Production was the most distant to reach and the most sporadic (mean recurrence time 8.64).
6. **Pattern mining isolates one compact design rule and a small set of frequent paths.** The consecutive rule Acquisition → Assessment → Practice → Practice had confidence 0.7432432 (P≈0.74) with support 0.0347881 and lift 1.449508 — 45% more likely than chance — and the single most frequent sequence was Acquisition → Practice → Practice → Assessment (120 occurrences), followed by Discussion → Discussion → Investigation (112).
7. **Familiar [[pedagogy|pedagogies]] are visible, but only as resemblance.** Sequences such as Acquisition → Assessment → Acquisition → Practice → Practice → Assessment match descriptions of the flipped classroom, Discussion → Investigation → Production → Assessment → Discussion matches inquiry-based phases, and the same cycle can be read as project-based work — yet the authors state these similarities "should not be interpreted as evidence" that such approaches were intentionally implemented.

## What 554 Courses Reveal About Learning Types and Bloom Levels

The dataset behind all subsequent analyses is itself a finding about scale. The BDP tool held 2,340 course designs; after requiring owner consent for anonymised research use, at least two learning outcomes, and at least ten TLAs, the analytic sample was 554 courses containing 29,064 TLAs. The filter was deliberate — the tool is free to use and open to anyone, so partially completed or test designs would have blurred the descriptive statistics, and the consent criterion was imposed to meet [[ethics|ethical]] standards. The authors note that the tool has been used by more than 3,000 educators to design more than 3,000 courses, and that the sample spans primary, secondary, higher and [[adult-learning|adult education]], formal and non-formal learning, and both institutions and companies, although they presume most designs come from [[higher-ed]].

Descriptively, the picture is conservative. Acquisition-type TLAs exceeded 20% of all activities; Practice, Discussion and [[assessment]] each accounted for between 15% and 20%; Investigation and Production each sat around 10%. The authors connect the Acquisition share to a persistence of transmission-oriented approaches despite a decade of advocacy for [[active-learning]], and recommend designs more aligned with [[constructivist]] strategies such as [[problem-based-learning]] and [[inquiry-based-learning]].

The relationship between learning type and intended outcome level is the study's clearest alignment signal. Acquisition fell with cognitive level (roughly 50% of TLAs at Bloom level 1 versus around 20% at level 6), Production rose (5–10% at levels 1–4, above 20% at levels 5 and 6), Practice stayed above 20% at levels 3–6, Investigation was present at around and above 15% at levels 3–5, and Discussion fluctuated but peaked at level 4 (above 25%). Assessment-type activities were excluded from this particular breakdown because assessments often examine several outcomes simultaneously and the data format constrains attribution. The intended outcomes themselves were skewed toward lower levels, with most TLAs attached to levels 3 and 2 and then 4 — consistent, the authors observe, with earlier reports that even [[higher-ed]] curricula favour lower and middle outcome levels.

## Correlation, Clustering and the Limits of Alignment

For the second research question the authors ran both Spearman and Kendall tests (in R, with the vcd, vcdExtra, rcompanion, ggcorrplot2 and DescTools packages) and found the two matrices highly comparable, with the majority of correlations statistically significant at p < 0.05. The strongest associations were theoretically expected ones — synchronous activities with teacher presence, and [[collaborative-learning|collaboration]] with [[group-work]] — while [[feedback]] correlated moderately with collaboration and somewhat more weakly with group work. Correlations between learning types and group work, feedback, collaboration and assessment were positive but weak and varied by learning type.

Two practical readings follow. First, feedback clustered with teacher presence and synchronous delivery, which the authors take as a sign that face-to-face classes remain valued; feedback was also positively associated with collaboration and group work, suggesting peer-based modalities create additional [[feedback]] opportunities that learning designers should exploit deliberately. Second, a chi-square test on outcome level against learning type reproduced the mosaic pattern of the descriptive analysis: lower outcome levels associated strongly with Acquisition, shifting toward Practice, Investigation and Production at medium and higher levels.

The counter-intuitive result is a null one. Outcome levels were largely unrelated to the other design elements, with only a weak correlation to learning types — meaning feedback, assessment, group work and collaboration are not the preserve of any particular level of learning outcome, and can be deployed to support outcomes at any cognitive level. The correlation matrices also revealed clustering among design elements (synchronous delivery ↔ teacher presence, collaboration ↔ groups ↔ feedback), which the authors read as evidence that some elements are habitually designed together rather than independently.

## Reachability, Recurrence and What the Patterns Do Not Show

The Markov chain adds a second layer to the transition probabilities: how quickly one learning type can be reached from another (mean first passage time) and how often it returns (mean recurrence time). Discussion and [[assessment]] were the most accessible types, with the lowest first-passage values from every other type, while Production was the most distant and hardest to reach. Read pedagogically, Discussion works as a bridge between activity types and Assessment as a steering activity; Production behaves as a culminating, finalizing type, which the authors associate with [[project-based-learning]]. Recurrence times point the same way: Discussion (4.72) and Practice (4.92) reappear most often across a sequence, while Production (8.64) appears sporadically or at the end.

The authors are explicit that these are pre-implementation designs, not observed behaviour, and that domain matters. A self-transition from Practice to Practice may reflect routine or algorithmic [[problem-solving|problem solving]] in [[stem-education|STEM]] and language courses; Acquisition followed by Discussion may be more typical of [[humanities-education|humanities]] courses; Investigation never appears as an antecedent in any extracted rule, although it co-occurs with Acquisition and Discussion in the most frequent sequences. Two lines of reasoning follow. First, since Acquisition is both the most common type and the most common starting point, transmission-oriented design still structures many courses. Second, since some frequent sequences resemble flipped classroom, [[inquiry-based-learning]] and project-based designs, those approaches are present in the sample as shapes in the data. The authors insist the resemblance is not evidence of intent, and that confirming deliberate implementation would require [[qualitative-research|qualitative]] analysis of the designs and their contexts.

## Recommendations and Limitations

The authors convert the patterns into four recommendations for course teams: move away from transmission-oriented teaching where appropriate; choose learning types that match the intended level of the learning outcomes, with Acquisition for lower levels and Production and other active types for higher ones; protect constructive alignment by pairing innovation with relevant assessment and timely [[feedback]]; and create extra feedback opportunities through [[collaborative-learning|collaboration]], [[group-work]] and face-to-face activity, since feedback clustered with teacher presence and synchronous delivery in the correlation analysis.

The limitations bound how far the numbers travel. The sample is large but comes from a single [[learning-design]] tool, and course level, type and discipline were not included as variables, so more granular context could change the picture. The analysis is confined to the design phase rather than enacted behaviour; [[learning-analytics|LMS trace data]] would be needed to test whether these paths describe what students actually experience. Automating path and pattern analysis inside the tool is left as future work, which the authors suggest is a natural use of AI.

## Connected Concepts

- [[learning-design]] — the object of study: the planned sequence of activities rather than delivered teaching
- [[learning-analytics]] — the method family (Markov chains, pattern mining, correlations) applied to design data
- [[curriculum-design]] — course-level planning decisions the patterns describe
- [[assessment-validity]] — the construct-validity question behind coding activities into learning types
- [[curriculum-design]] — course-level planning decisions the patterns describe
- [[assessment]] — the strongest transition source and a steering activity in the sequences
- [[feedback]] — the design element clustering with collaboration, group work and synchronous delivery
- [[collaborative-learning]] — correlation partner of feedback and a source of peer feedback opportunities
- [[active-learning]] — the pedagogy the authors contrast with the dominance of Acquisition
- [[problem-based-learning]] — strategy recommended for higher-level outcomes
- [[inquiry-based-learning]] — sequence shapes resembling its phases
- [[project-based-learning]] — the culminating, Production-heavy pattern
- [[higher-ed]] — the presumed main context of the sampled course designs
- [[recommender-systems-and-learning-paths]]
## Connected Articles

- [[pishtari-teacher-ai-training-learning-design-2026]] — When Teachers Use AI Chatbots and Are Trained for It: Impact on Learning Design Quality and Cognitive Effort
- [[claassen-learning-analytics-genai-learning-design-2026]] — Understanding the Role of Learning Analytics and Generative Artificial Intelligence on Decision-Making and Learning Design Practice in Higher Education
- [[zhou-constructive-alignment-genai-business-2026]] — From Experimentation to Integration: Embedding GenAI in Business Higher Education through the Lens of Constructive Alignment
- [[luo-ibl-patterns-llm-bloom-2026]] — Inquiry-Based Learning Patterns in Large Language Model-Driven Learning Environments: An Exploratory Study From Bloom's Perspective
- [[learner-ai-interaction-patterns-oop]] — Patterns of Learner-AI Interaction and Academic Performance in an Object-Oriented Programming Course
- [[interactive-learning-dashboards-engagement]] — Interactive learning dashboards: rethinking learning visualisations as engagement tools

## Citation

Divjak, B., Svetec, B., & Horvat, D. (2026). [Learning paths and patterns in learning design: Insights from 500+ courses](https://doi.org/10.1016/j.caeo.2026.100412). *Computers and Education Open, 11*, 100412.
