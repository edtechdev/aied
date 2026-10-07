---
title: "The impact of professional development programs on K-12 teachers' AI literacy: A systematic review and meta-analysis"
created: "2026-10-07T09:30:00-04:00"
updated: "2026-10-07T09:30:00-04:00"
type: article
foundations: [ai-literacy, teacher-ai-competency, educational-development, teacher-role]
pedagogy: [pedagogy, project-based-learning, problem-based-learning, collaborative-learning, self-efficacy, motivation]
technology: [generative-ai, technology-acceptance-model]
assessment: [self-report-measures]
methods: [meta-analysis-systematic-review, quantitative-research, research-methods-aied]
institutions: [educational-policy-ai]
ethics: [ethics, privacy, equity-in-ai-education, digital-divide]
research_method: [literature review]
discipline: [learning sciences]
level: [k 12, teacher education]
audience: [researchers, instructors, policymakers]
page_kind: [synthesis]
sources: ['raw/papers/teacher-ai-literacy-professional-development-meta-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-07"
    agent: hermes-agent
---

> **Synthesis:** Guo and colleagues synthesize 62 empirical studies (61 records) of [[educational-development|professional development]] designed to raise K–12 teachers' [[ai-literacy|AI literacy]], covering both [[teacher-education|preservice]] and in-service teachers across five continents. Using the Digital Intelligence framework to organize outcomes into knowledge, skills, and attitudes/values, they combine a [[qualitative-research|qualitative]] synthesis of program design with a three-level [[meta-analysis-systematic-review|meta-analysis]]. The primary model, pooling 212 effect sizes from 34 studies, finds a significant positive average effect (g = 0.76). All three dimensions improve, but heterogeneity is substantial (I² = 90.13%), and Bayesian selection-model analysis suggests publication selection inflated the pooled estimate to an adjusted g of roughly 0.49 to 0.51. The authors read the results as support for AI literacy PD while cautioning that programs remain uneven and evidence of lasting change is thin.

## Key Findings
1. The primary meta-analysis pooled 212 effect sizes from 34 studies and found a significant positive average effect, g = 0.76, 95% CI [0.50, 1.02], p < .001.
2. All three dimensions improved: knowledge g = 0.77, skills g = 0.91, and attitudes/values g = 0.61 (all p < .001), with no reliable difference between them, F(2, 15.83) = 2.14, p = .151.
3. Heterogeneity was substantial: total I² = 90.13%, with a 95% prediction interval from −0.87 to 2.38, meaning effects vary widely across programs and contexts.
4. Publication selection likely inflated the headline estimate: the Bayesian adjusted effect was g = 0.49, 95% CrI [0.00, 0.79], the conditional estimate g = 0.51, 95% CrI [0.19, 0.80], and the effect-inclusion Bayes factor was 35.16.
5. No moderator reached significance, including career stage, school level, intervention duration, [[research-methods-aied|research design]], outcome measurement type, gender composition, or MMAT criteria met.
6. Analyzed separately, single-group pre–post studies yielded g = 0.73, 95% CI [0.44, 1.02] (26 studies, 171 effects), and controlled two-group studies g = 0.85, 95% CI [0.11, 1.60], p = .031 (8 studies, 41 effects).
7. Coverage was uneven: knowledge appeared in 51 records, skills in 47, and attitudes/values in 35, while explicit ethical knowledge appeared in only 11.

## Uneven coverage: knowledge first, values last
The review coded every program against three dimensions. Knowledge was addressed in 51 records and usually began with foundational topics such as AI definitions, core features, and key [[ai-technologies|technologies]]; advanced technical mechanisms and ethical knowledge received less attention, with ethics in only 11 records. Skills appeared in 47 records, and the authors note a clear drift from tool operation toward pedagogical orchestration: teachers were trained to embed AI in lesson planning, [[assessment]], [[feedback]], and differentiated instruction rather than merely to operate it. Attitudes and values appeared in 35 records, mostly through proximal indicators such as [[self-efficacy]], confidence, and perceived value. Fewer programs examined trust, behavioral intention, or sustained professional values, and only 25 records addressed all three dimensions at once, which the authors read as limited integrated design across current [[teacher-ai-competency|teacher AI competency]] efforts.

## How effective programs are designed
Three design features recurred across the included programs. The first is temporal flexibility: synchronous sessions demonstrate tools and host discussion, while asynchronous tasks support self-paced practice and reflective journals, connecting learning to classroom constraints. The second is role diversification, where teachers act as co-designers, reflective practitioners, and collaborators rather than recipients — co-designing AI-integrated lessons, exchanging [[peer-assessment|peer feedback]], and iteratively refining designs. The third is contextual orientation, in which [[project-based-learning|project-based]], [[problem-based-learning|problem-based]], and inquiry-based approaches situate AI within authentic teaching scenarios; competency-based and game-based formats scaffold progression and lower technical barriers. The authors argue these features render AI concepts experiential and transferable, though they stress the value lies in coherence across features rather than in any single one. This is a practice-oriented turn shared with much of the [[pedagogy]] literature on [[collaborative-learning|collaborative]] professional learning.

## A positive estimate, tempered by publication selection
The pooled estimate is positive, but the authors test it hard. Heterogeneity was substantial (I² = 90.13%; Level 2 τ² = 0.17, Level 3 τ² = 0.50), and the 95% prediction interval crossed zero, so the average masks programs with null or negative results. A funnel plot suggested asymmetry, and a multilevel Egger-type regression indicated possible small-study effects (b = 9.40, SE = 1.16, p < .001). A Bayesian selection-model analysis favored models with publication selection and returned an attenuated but still positive adjusted effect (g = 0.49, 95% CrI [0.00, 0.79]; conditional g = 0.51, 95% CrI [0.19, 0.80]). The authors therefore read the headline number as an average across heterogeneous programs rather than a uniform intervention effect, and ask readers not to treat nonsignificant moderators as evidence of invariance.

## What the evidence still cannot answer
The review's own gaps are as informative as its estimate. Most effect sizes came from single-group pre–post designs that cannot separate intervention change from maturation, testing, or history, and the controlled evidence base rests on only eight studies with a wide interval. Outcome measures leaned on short-term [[self-report-measures|self-report]], especially for attitudes and values, so the literature says more about perceived readiness than demonstrated classroom competence — a visibility bias the authors name explicitly. Several moderators that might explain the residual heterogeneity (subject discipline, prior AI experience, national [[educational-policy-ai|policy]] context, institutional support) could not be tested because they were inconsistently reported. The authors recommend concurrent [[educational-measurement|measurement]] of knowledge, skills, and values within an integrated framework, and longitudinal designs that trace how AI literacy develops, is retained, and is enacted in [[k-12|schools]].

## What this means for practice
- **Instructors.** Treat AI literacy as more than tool operation: connect conceptual understanding, classroom application, and value judgment in a single sequence rather than teaching isolated features.
- **Instructional designers.** Combine synchronous demonstration with asynchronous practice and reflection, and position teachers as co-designers of AI-integrated lessons rather than recipients of training.
- **Administrators.** Protect participation time and follow-up, and provide clear school- or system-level guidance on privacy, ethics, and [[ethics|responsible AI]] use, which the review flags as organizational conditions for implementation.
- **Policymakers.** Differentiate support so less-resourced schools can rely on low-cost tools, existing infrastructure, and adaptable activities instead of resource-intensive technology and release time.
- **Researchers.** Replace reliance on short-term self-report with knowledge tests, performance tasks, classroom implementation data, and longitudinal follow-up that can show whether gains persist.

## Limitations
- Most effect sizes came from single-group pre–post designs (34 of 61 records, 55.7%), which cannot separate intervention effects from maturation, testing, or history.
- Only eight controlled two-group studies informed the controlled estimate (g = 0.85), and its confidence interval [0.11, 1.60] is wide and imprecise.
- The pooled estimate may be inflated: the funnel plot was asymmetric, the Egger-type test indicated small-study effects (b = 9.40, p < .001), and the adjusted Bayesian estimate fell to about g = 0.49 to 0.51.
- Outcomes relied heavily on short-term self-report indicators, especially for attitudes/values, which were often measured as self-efficacy and perceived value rather than enduring professional values.
- Substantial unexplained heterogeneity remained (I² = 90.13%) and no tested moderator was significant, so the average should not be read as a uniform effect.
- Gray literature was only partially covered, and contextual moderators such as subject discipline, prior AI experience, national policy context, and institutional support could not be analyzed.

## Citation

Guo, J., Sanders, T., Dicke, T., et al. (2026). [The impact of professional development programs on K-12 teachers' AI literacy: A systematic review and meta-analysis](https://osf.io/fka6b). PsyArXiv.