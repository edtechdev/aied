---
title: "Measuring Acceptance of Age-Tiered AI Literacy Guidebooks: A Developmentally Informed Study of K-12 Students and Teachers"
created: "2026-09-13T11:05:00-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
foundations: [ai-literacy, curriculum-design, teacher-role]
technology: [adaptive-learning, generative-ai]
assessment: [educational-measurement]
stakeholders: [technology-acceptance-model]
ethics: [equity-in-ai-education]
connected_faqs: [ai-guidance-children-under-13]
research_method: [instrument development, survey, quantitative, mixed methods]
discipline: [stem education]
audience: [educators, teachers, curriculum designers, researchers, policymakers, learning designers]
level: [elementary, secondary, k 12, teacher training]
page_kind: [framework]
sources: ['raw/papers/age-tiered-ai-literacy-guidebooks-2026.md']
confidence: high
---

> **Synthesis:** Wang, Chuang and Wu (2026) evaluate the reception of an age-tiered AI literacy resource, the AI Learning Application Guidebook, built for Taiwan's K-12 system in two editions: an Elementary edition for learners aged 9 to 12 with scaffolded, platform-based, non-generative activities, and an Advanced edition for learners aged 13 to 18 with authentic applications, ethical reasoning and supervised [[generative-ai]] use. In a single post-exposure survey of 831 participants (794 students and 37 teachers), split-sample factor analysis supports a four-factor [[technology-acceptance-model|acceptance]] structure of Performance Expectancy, Effort Expectancy, Perceived Playfulness and Behavioral Intention, with measurement invariance holding across the two student editions while [[teacher-role|teacher]] data remain exploratory. The Elementary cohort reported significantly higher levels on all four constructs than the Advanced cohort, and perceived playfulness was the strongest correlate of behavioral intention in both groups. The authors are unusually blunt about the limits: the study measures short-term acceptance of [[ai-literacy]] materials after roughly 30 minutes of exposure, not [[learning-gains|learning gains]], ethical competence or actual use.

## Key Findings

1. **A four-factor acceptance structure holds across two age-tiered student editions.** Split-half exploratory and confirmatory factor analyses retained Performance Expectancy (PE), Effort Expectancy (EE), Perceived Playfulness (PP) and Behavioral Intention (BI). The EFA showed acceptable sampling adequacy (KMO = .820; Bartlett's chi-square (153) = 1450.600, p < .001), retained items loading at least .600 on their intended factors, and 67.3% of total variance explained; the student CFA fit was acceptable (chi-square (129) = 257.13, CFI = .943, TLI = .935, RMSEA = .059, SRMR = .059).
2. **Reliability and convergent validity were strong, but playfulness and intention overlap.** Composite reliability ranged from .84 to .90 and average variance extracted from .55 to .68 for students (.87 to .94 and .72 to .78 for teachers). Discriminant validity was mostly acceptable, yet the PP-BI latent correlation was high: HTMT values ran from .680 to .950, and constraining the PP-BI correlation to unity significantly worsened fit (delta chi-square (1) = 49.33, p < .001).
3. **The overlap is partly an item-wording artifact.** Removing two broader PP items that referenced perceived helpfulness and learning-with-AI support (PP1 and PP5) lowered the PP-BI HTMT from .950 to .902. Because the 18-item instrument was theoretically specified, the trimmed model was treated as a sensitivity check, not the primary model.
4. **Younger learners rated the materials higher on every construct.** Latent means were significantly lower in the Advanced group: PE delta M = -0.152 (z = -2.27, p = .023), EE delta M = -0.376 (z = -5.17, p < .001), PP delta M = -0.356 (z = -6.10, p < .001), and BI delta M = -0.264 (z = -3.92, p < .001).
5. **Perceived playfulness carried the largest association with intention in both cohorts, and the coefficients are inflated.** The PP to BI path was the largest in both groups (Elementary beta = 1.090, p < .001; Advanced beta = .894, p < .001), with models explaining about 89.0% of PP variance and 89.1% of BI variance in the Elementary group and 83.8% and 90.5% respectively in the Advanced group. The authors note the standardized coefficient above 1.00 in the Elementary group reflects predictor intercorrelation, construct overlap or suppression, not a simple effect size.
6. **Usefulness mattered for older learners only.** The PE to BI path was statistically significant in the Advanced cohort (beta = .159, p = .004) but nonsignificant in the Elementary cohort (beta = -.031, p = .837); the EE to BI path was nonsignificant in both (Elementary beta = -.131, p = .416; Advanced beta = -.088, p = .297), while PE and EE both fed PP in both groups.
7. **[[qualitative-research|Qualitative]] feedback asks for age-sensitive, bilingual, [[multimodal]] and more explicit ethics.** The four themes teachers and students raised were: alignment with age-related levels (narrative, character-based design valued in elementary; more analytical discussion and inquiry demanded in secondary), inconsistent bilingual terminology and formatting, ethics content that participants wanted made more explicit through reflection questions and real-world scenarios, and a preference for visual and interactive materials such as animations, short case-based tasks and self-assessment quizzes.

## What the Study Actually Built and Measured

The guidebook translates UNESCO's guidance on generative [[ai-education|AI in education]] into classroom materials for Taiwan's K-12 context, aligned with the Ministry of Education's AI Education Action Plan and Digital Learning Enhancement Program and with the structure of the national [[adaptive-learning|Adaptive Learning]] Platform. An editorial committee of in-service teachers from multiple subject areas worked with educational technology and AI education experts over an iterative cycle of expert review, classroom piloting and revision. The Elementary edition introduces human-centered mindsets, digital citizenship and AI ethics through age-appropriate texts and activities that stress safe use, fact-checking, [[bias-mitigation|fairness]] and copyright awareness; the Advanced edition adds critique of data and algorithms, ethical reasoning on real or hypothetical cases, and inquiry or design tasks linking technical understanding with social responsibility.

Implementation followed the policy age threshold rather than random assignment. Elementary students (Grades 3 to 6; 274 participants, 34.5% of the student sample) read the guidebook collectively under teacher guidance, while secondary students (Grades 7 to 12; 520 participants, 65.5%) read individually in computer labs. Each session lasted about 30 minutes and was immediately followed by an online [[self-report-measures|questionnaire]], so the data capture first-exposure perceptions rather than perceptions formed through sustained use. The 37 teachers, spread across elementary, [[k-12|junior high]] and senior high levels, completed the same instrument after facilitating or preparing with the materials, providing an educator perspective and preliminary cross-role checks rather than a fully powered invariance test.

## Interpreting Edition-Linked Differences

Because student age, guidebook edition and facilitation mode were systematically aligned, the authors read the latent-mean pattern as edition-linked cohort differences rather than as developmental change or isolated material effects. Their tentative interpretation is that the Elementary cohort responds well to narrative, visual and curiosity-oriented design, whereas the Advanced cohort evaluates materials more critically against task relevance, cognitive challenge and transparent discussion of AI applications and risks. Supplementary checks found negligible substantive differential item functioning across age groups, with the largest total pseudo-R-squared change at .008, but invariant or low-variation response patterns were more common among Elementary students, and the PE difference weakened once those respondents were excluded.

The high explained variance is treated as a caution rather than a headline. Common method variance could not be ruled out, no marker variable was available, all items were positively keyed, and the PP to BI path is entangled with the construct overlap described above. On the qualitative side, the authors are explicit that participants perceiving ethical themes as visible and discussable is not evidence of gains in [[ethics|ethical]] understanding or reasoning.

## Implications and Limits

Two implications are drawn. First, age-tiered [[ai-literacy]] materials should pair explicit ethical content with developmentally appropriate presentation: concrete scenarios, visual supports and guided prompts for younger learners; complex cases foregrounding task relevance, ethical trade-offs and [[critical-thinking|critical evaluation]] for older ones. Second, acceptance constructs can supply design-relevant feedback for early-stage refinement of materials, but they must not be used to infer [[learning-gains|learning effectiveness]] or implementation success. Suggested refinement priorities are consistent bilingual terminology, age-appropriate ethical scenarios and lightweight multimodal elements that do not add to teachers' instructional burden.

The limitations are substantial and stated plainly: results are embedded in Taiwan's centralized digital learning infrastructure and age-tiered policy context and may not generalize across curricula, [[governance]] arrangements, languages or levels of teacher [[agency|autonomy]]; a single post-exposure questionnaire invites common method and response-style effects; the 37-teacher sample limits cross-role analysis to exploratory checks; and the study measured neither [[ai-literacy]] achievement, learning gains, actual adoption nor sustained use. The authors call for longitudinal and multilevel designs with repeated use, classroom-level variation, validated assessments of ethical reasoning and multiple data sources, including observations, performance tasks, teacher ratings, platform logs and adoption records.

## Connected Concepts

- [[ai-literacy]] — the competence the guidebooks target, measured here only as acceptance
- [[generative-ai]] — the technology whose supervised classroom use the age threshold regulates
- [[k-12]] — the policy context and participant population
- [[technology-acceptance-model]] — the PE, EE, PP and BI construct family operationalized at material level
- [[educational-measurement]] — split-sample EFA and CFA, invariance testing, HTMT and DIF checks
- [[curriculum-design]] — the guidebook as an instructional artifact translating policy into activities
- [[equity-in-ai-education]] — age-tiered safeguarding and equitable access as design priorities
- [[adaptive-learning]] — the national platform through which the materials are distributed
- [[teacher-role]] — teachers as co-designers, facilitators and gatekeepers of classroom use
- [[self-efficacy]] — the effort and performance expectancy constructs neighboring perceived readiness
- [[student-engagement]] — playfulness, multimodality and visual design as engagement signals
- [[assessment]] — the open question of measuring literacy and ethical reasoning rather than perception

## Connected Articles

- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[ai-intuition-ai-literacy-k12-2026]] — From AI Intuition to AI Literacy: A Dual Framework for K-12 Education
- [[rail-ed-genai-literacy-teacher-education]] — Rethinking Generative AI Literacy: An Integrative, Developmental, and Dialectical Framework for K-12 Teacher Education
- [[generative-ai-k12-teaching-learning-systematic-review-2026]] — Generative AI in K-12 Teaching and Learning: A Systematic Review
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — AI Literacy Interventions in Education: A Meta-Analysis of Effects and Moderators
- [[ai-literacy-course-satisfaction-pbl-scale-2026]] — Enhancing AI Literacy Course Satisfaction Through Empowerment in AI Problem-Solving and Ethical Awareness: Development and Validation of an AI Project-Based Learning Scale
- [[eduzone-llm-safety-k12]] — EduZone: A Framework for Evaluating LLM Safety for K-12 Students and Teachers
- [[tam-critical-use-genai-engineering-2026]] — Factors Influencing University Students' Intention to Use and Reliance on Generative AI: An Extended Technology Acceptance Model with Critical Use

## Citation

Wang, L.-J., Chuang, T.-Y., & Wu, Y.-T. (2026). [Measuring Acceptance of Age-Tiered AI Literacy Guidebooks: A Developmentally Informed Study of K-12 Students and Teachers](https://doi.org/10.1016/j.caeai.2026.100661). *Computers and Education: Artificial Intelligence*, 100661.
