---
title: "Developmental, Contextual, and Profile-Based Heterogeneity in K-12 Students’ Artificial Intelligence Literacy"
created: "2026-11-27T13:30:00-05:00"
updated: "2026-11-27T13:30:00-05:00"
type: article
published: "2026-10-27"
sources: ['raw/papers/nan-k12-ai-literacy-heterogeneity-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey, latent profile analysis]
discipline: []
level: [k 12]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Nan and colleagues surveyed 141,988 students in Grades 6, 9, and 11 in Changchun, Northeast China, and found that [[ai-literacy]] was higher in the upper grades, among urban students, and among students from higher-socioeconomic-status families, while gender differences were small and changed direction across grades. Family background, [[learning-gains|academic achievement]], daily routines, and the purposes of mobile phone and gaming use were associated with higher scores, but the amount of time spent on phones or games was not independently associated once other variables were included. A [[latent-profile-analysis|person-centered analysis]] identified four profiles: overall low-level, overall high-level, high-exposure–low-reflection, and low-exposure–high-reflection. The uneven profiles show that frequent exposure can coexist with weak evaluation and ethical awareness, and that cautious reflection can coexist with limited reported use. The authors argue for stage-appropriate, [[inclusive-learning|equitable teaching]] that responds to students' backgrounds and profiles rather than to a single total score.

## Key Findings
1. **Literacy rose with grade level.** Grade 11 students scored above Grade 9 students, who scored above Grade 6 students.
2. **Place and family background mattered.** Urban students outscored rural students in every grade, and scores rose steadily across four family socioeconomic groups.
3. **Gender differences were small and unstable.** Boys scored slightly higher in Grade 6, girls slightly higher in Grade 11, and there was no significant difference in Grade 9.
4. **Patterns of use mattered more than time spent.** Habit and purpose measures were positively associated with literacy, while gaming time and phone use time were not independently associated.
5. **Four distinct profiles emerged.** Two were uniformly high or low, and two combined exposure with reflection in opposing ways.
6. **The uneven profiles challenge a single score.** Students can report high understanding and use but weak ethical awareness, or the reverse.
7. **The profile labels describe self-reports.** They are summaries of response patterns, not objective classifications of competence.

## What the study measured

The data came from the Changchun municipal educational monitoring program. The initial sample included 202,893 students: 75,833 in Grade 6, 74,563 in Grade 9, and 52,497 in Grade 11. After screening for social desirability and response rate, 141,988 students remained (48,651 in Grade 6, 53,717 in Grade 9, and 39,620 in Grade 11). Overall, 60,905 cases, or 30.0% of the initial responses, were excluded; some remaining cases had missing values handled by available-case analysis. Students completed paper-and-pencil assessments at school in clusters, but the dataset lacked school or class identifiers for modeling nesting.

AI literacy was measured with four self-report items, one each for understanding, using, evaluating, and [[ethics|AI ethics]], adapted from a four-part framework. Responses were rescaled to a 0–1 range and averaged. Internal consistency was acceptable (Cronbach's α = 0.708), and exploratory factor analysis extracted one factor explaining 53.943% of the variance, with loadings from 0.659 to 0.786. Academic achievement used standardized subject scores converted to T scores with a mean of 100 and a standard deviation of 15. A common-method check found that the first unrotated factor explained 20.35% of the variance.

## What the comparisons and profiles showed

Grade level, residence, and family socioeconomic status showed the clearest group differences. The grade comparison was significant, F(2, 141,937) = 142.039, p < 0.001, with Grade 11 above both lower grades. In Grade 6, urban students scored 0.520 ± 0.289 and rural students 0.451 ± 0.291; in Grade 11, the corresponding scores were 0.554 ± 0.273 and 0.490 ± 0.275. Across socioeconomic groups in Grade 9, mean scores ranged from 0.458 ± 0.283 in the low group to 0.611 ± 0.269 in the high group. Gender gaps were described by the authors as small even where statistically significant.

Controls for gender, grade, and residence entered first in a hierarchical regression explained 1.4% of the variance (R2 = 0.014). Adding family background, achievement, time use, and digital-use variables raised explained variance to 13.8% (R2 = 0.138, ΔR2 = 0.125). Physical activity habit showed the largest standardized association (β = 0.180), followed by mobile phone usage pattern (β = 0.134). Online gaming time (β = 0.003) and mobile phone use time (β = 0.000) were not significant in that model. Grade moderated the socioeconomic association, but the additional explained variance was below 0.001, so the authors treat the moderation as limited in magnitude.

Four latent profiles were selected over two-, three-, and five-profile solutions on fit, classification, size, and interpretability; entropy was 0.774 and average posterior probabilities ranged from 0.789 to 0.905. The four profile proportions were 0.256, 0.232, 0.273, and 0.239. Students in the high-exposure–low-reflection profile reported relatively high understanding and use but lower ethical awareness, and also reported more gaming and phone time and shorter sleep. Students in the low-exposure–high-reflection profile showed the opposite pattern. Figure 1 reports these indicators for n = 140,130. The authors caution that [[self-assessment|self-evaluation]] may partly explain the latter profile: students with greater knowledge may judge themselves more conservatively.

## What this means for practice
- **Instructors.** Introduce common AI applications early and add data, algorithms, and [[generative-ai|generative AI]] gradually as students move into upper grades.
- **Instructors.** Give students in high-exposure–low-reflection profiles practice in checking AI output, verifying information, and recognizing bias and privacy risks.
- **Curriculum designers.** Build ethics into every stage of AI learning rather than treating it as an extra topic after tool use.
- **Administrators.** Share teaching materials, tools, and [[teacher-role|teacher]] support across schools to reduce the urban–rural and socioeconomic gaps seen here.
- **Researchers.** Pair self-report items with performance tasks before treating any profile as a measure of actual AI competence.

## Limitations
- AI literacy was represented by four self-report items with three response categories, so each dimension rests on a single item.
- The cross-sectional design cannot establish causal relationships or developmental change.
- Students were sampled in schools and classes, but clustering was not modeled because identifiers were unavailable.
- Missing values remained after screening and were handled with available-case analysis, so valid case counts differed across analyses.
- Participants came from one city in Northeast China and only Grades 6, 9, and 11, limiting generalization to other regions and grade levels.
- Profile labels describe [[self-report-measures|self-reported]] patterns and may reflect differences in self-evaluation rather than differences in objective exposure or skill.

## Citation
Nan H, Yan Y and Gai X (2026) Developmental, Contextual, and Profile-Based Heterogeneity in K-12 Students’ Artificial Intelligence Literacy. Behavioral Sciences 16:2017. https://doi.org/10.3390/bs16112017
