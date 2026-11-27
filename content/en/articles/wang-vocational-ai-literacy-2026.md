---
title: "Artificial intelligence literacy among higher vocational students: current status and associated factors"
created: "2026-11-27T01:15:00-05:00"
updated: "2026-11-27T01:15:00-05:00"
type: article
published: "2026-11-13"
sources: ['raw/papers/wang-vocational-ai-literacy-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
discipline: []
level: [higher ed]
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

> **Synthesis:** Wang and Luo surveyed 1,741 higher vocational students at four institutions in one Chinese province using a five-dimensional [[ai-literacy|AI literacy]] framework covering awareness, knowledge, skills, thinking, and ethics. The analytic sample reported a moderately high overall level, but the profile was uneven: ethics and awareness scored highest while practical AI skills were weakest. Students from urban backgrounds and male students scored higher on overall literacy, with gender differences concentrated in knowledge and skills. Hierarchical regression found that on-campus instruction, internships and practical training, and [[teacher-role|teacher]] support were positively associated with AI literacy after covariates were included, while equipment and digital resources were not. The authors argue for practice-based, occupation-specific learning and differentiated support, and describe all results as associations rather than causal effects.

## Key Findings

1. **Overall AI literacy was moderately high.** Students placed themselves above the midpoint of the five-point scale, but not at the top of it.
2. **The dimensional profile was uneven.** Ethics and awareness were strongest, knowledge and thinking were comparable, and practical skills were clearly weakest.
3. **Gender differences were concentrated in knowledge and skills.** Male students scored higher on overall literacy and on those applied dimensions, with no significant difference in ethics.
4. **Urban students outscored rural students across all five dimensions.** The overall gap was statistically reliable and small in magnitude.
5. **[[self-efficacy]] was the dominant individual correlate.** Confidence in mastering [[ai-technologies|AI technologies]] outweighed interest, trust, and tool-use frequency in the regression models.
6. **Practice-based and relational school conditions mattered.** On-campus instruction, internships and practical training, and teacher support were each positively associated with literacy.
7. **Equipment and digital resources were not significant after adjustment.** Their coefficient lost significance once covariates and other school conditions were included.

## What was measured

Data came from a 2025 survey of higher vocational students recruited by convenience sampling from four institutions in a single Chinese province. Programs included business administration, information technology, engineering, and hospitality management. Of 1,800 [[self-report-measures|questionnaires]] distributed, 1,741 were retained after removing implausibly short and patterned responses, a valid response rate of 96.72%. The sample included 799 male students (45.89%) and 942 female students (54.11%), and 1,167 students with rural household registration (67.03%) against 574 with urban registration (32.97%).

The AI literacy instrument was adapted from the [[generative-ai|ChatGPT]] Literacy Scale and comprised 20 items, four for each of the five dimensions. All core scales used a five-point Likert format. Confirmatory factor analysis supported the five-factor structure with RMSEA = 0.054, CFI = 0.962, and TLI = 0.951. The full scale had a Cronbach's alpha of 0.895, each subscale exceeded 0.850, and the school-environment measure had an alpha of 0.87. Harman's single-factor test showed that the first principal component accounted for 34.7% of the variance, below the 50% threshold used to flag common method bias. Analyses were run in STATA 18.0.

## What the scores and models showed

The mean overall AI literacy score was 3.71 (SD = 0.73). [[ethics|AI ethics]] was highest (M = 4.07, SD = 0.85), followed by AI awareness (M = 3.83, SD = 0.78). AI knowledge (M = 3.72, SD = 0.84) and AI thinking (M = 3.72, SD = 0.83) were nearly identical, while AI skills was the weakest dimension (M = 3.18, SD = 1.05). The authors read this as a gap in applying AI in occupation-specific contexts rather than a general deficit in awareness.

Male students reported higher overall literacy (M = 3.77, SD = 0.78) than female students (M = 3.65, SD = 0.68; t = −3.44, p < 0.001). Differences were significant for AI knowledge (t = −4.54, p < 0.001, Cohen's d = 0.22) and AI skills (t = −5.22, p < 0.001, Cohen's d = 0.25), and for AI awareness (t = −2.55, p < 0.05, Cohen's d = 0.12). Female students reported a marginally higher ethics score (M = 4.08) than male students (M = 4.07), a non-significant difference (t = 0.22, p > 0.05). Urban students scored higher overall (M = 3.79, SD = 0.72) than rural students (M = 3.67, SD = 0.73; t = −3.25, p < 0.01), and all five sub-dimension differences were significant.

Hierarchical multiple regression estimated standardized coefficients. The model with controls only explained 63% of variance (R² = 0.63), with AI self-efficacy the strongest covariate (β = 0.44, p < 0.001), followed by interest in AI (β = 0.27, p < 0.001), [[trust|trust in AI]] (β = 0.14, p < 0.001), and frequency of AI-tool use (β = 0.06, p < 0.001). Adding the four school-environment variables raised R² to 0.65, an increment the authors describe as small but significant. In that model, on-campus instruction (β = 0.06, p < 0.05), internships and practical training (β = 0.07, p < 0.01), and teacher support (β = 0.09, p < 0.001) were positively associated with literacy. Equipment and digital resources (β = 0.01, p > 0.05) were not significant. Self-efficacy remained the largest coefficient in the adjusted model (β = 0.37, p < 0.001).

## What this means for practice

- **Instructors.** Embed AI applications in [[discipline-specific-aied|discipline-specific]] projects, internships, and skills competitions so students experience authentic success with tools rather than mere exposure.
- **Instructors.** Normalize AI limitations, encourage verification and revision, and give feedback that builds confidence in mastering AI technologies.
- **Administrators.** Use differentiated digital-compensation strategies, voluntary diagnostic assessments, and heterogeneous collaborative groups instead of assuming universal provision will close urban–rural and gender gaps.
- **Assessment designers.** Consider [[process-oriented-assessment|process-oriented assessment]] reform and AI-use [[eportfolio|portfolios]] that document prompts, evaluation criteria, and revisions.
- **Administrators.** Treat teacher capacity development and psychological empowerment as co-equal with infrastructure investment when allocating resources for [[ai-education|AI education]].

## Limitations

- The cross-sectional design precludes causal inference; every reported relationship is an association within the participating sample.
- The sample came from four institutions in one Chinese province and used convenience sampling, limiting generalization to other vocational systems and regions.
- All variables were student self-reports, which may reflect social desirability or imprecise perceptions of institutional conditions.
- The study calls for [[longitudinal-research|longitudinal]] and quasi-experimental designs, multilevel modeling, and teacher or institutional data to complement self-report and partition individual from institutional effects.

## Citation

Wang, S., & Luo, X. (2026). [Artificial intelligence literacy among higher vocational students: current status and associated factors](https://doi.org/10.3389/feduc.2026.1994161). *Frontiers in Education*, *11*, 1994161.
