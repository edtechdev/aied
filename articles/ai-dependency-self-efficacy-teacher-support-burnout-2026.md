---
title: "The dark side of AI in education: AI dependency as a mediator linking academic self-efficacy and teacher support to learning burnout among university students"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-16T13:40:00-04:00"
type: article
tags: [ai-misuse-learning-harm, cognitive-offloading, self-efficacy, teacher-role, well-being, higher-ed, student-engagement]
audience: [researchers, educators, administrators, policymakers, instructors]
research_method: [quantitative, survey]
sources: ['raw/papers/10.3389_fpsyg.2026.1889053.md']
confidence: high
---

> **Synthesis:** Among 276 Chinese [[higher-ed|undergraduates]] surveyed cross-sectionally, both [[self-efficacy|academic self-efficacy]] and [[teacher-role|teacher support]] were negatively associated with AI dependency, while AI dependency was positively associated with learning burnout. AI dependency fully mediated both paths at the construct level, with the indirect effect of self-efficacy (−0.239) accounting for 84.2% of its total effect on burnout and the indirect effect of teacher support (−0.143) accounting for 71.5%. The study reframes [[ai-misuse-learning-harm|excessive AI reliance]] as a resource-depletion process linking individual and contextual resources to students' [[well-being|emotional exhaustion]] and disengagement.

## Key Findings

- **Self-efficacy reduces AI dependency.** Academic self-efficacy was significantly and negatively associated with AI dependency (β = −0.424, p < 0.001, 95% CI [−0.603, −0.359]), explaining 18.0% of the variance (R² = 0.180, f² = 0.220).
- **Teacher support reduces AI dependency, but weakly.** Teacher support was negatively associated with AI dependency (β = −0.217, p < 0.001, 95% CI [−0.337, −0.102]), accounting for only 4.7% of the variance (R² = 0.047, f² = 0.049) — a small effect the authors read as evidence the model is a partial explanation only.
- **AI dependency predicts learning burnout.** AI dependency was positively associated with learning burnout (β = 0.451, p < 0.001, 95% CI [0.392, 0.634]), explaining 20.3% of the variance (R² = 0.203, f² = 0.255).
- **Full mediation for both paths.** The indirect effect of academic self-efficacy on learning burnout through AI dependency was −0.239 (95% CI [−0.331, −0.154], 84.2% mediated); for teacher support it was −0.143 (95% CI [−0.221, −0.071], 71.5% mediated). Direct effects became non-significant once AI dependency was included (self-efficacy: B = −0.045, p = 0.559; teacher support: B = −0.089, p = 0.171).
- **Correlations align with the model.** AI dependency correlated negatively with academic self-efficacy (r = −0.42) and teacher support (r = −0.22) and positively with learning burnout (r = 0.45), all p < 0.01; self-efficacy and teacher support were themselves positively correlated (r = 0.51).
- **Reverse models were weaker.** Alternative reverse-mediation models produced significant but substantially smaller indirect effects (−0.094 for self-efficacy, −0.066 for teacher support), consistent with the proposed direction.
- **AI dependency varied by usage frequency, not gender.** It did not differ by gender (t(274) = −1.053, p = 0.293) but differed by academic year with a small effect (F(3,272) = 2.858, p = 0.037, η² = 0.031; seniors higher than juniors) and strongly by AI use frequency (F(4,271) = 14.569, p < 0.001, η² = 0.177). These are group differences, not tested moderation.

## Study Design & Method

A cross-sectional survey design was used. An online structured questionnaire was distributed via Questionnaire Star to undergraduates enrolled in selected courses at several comprehensive universities in Chengdu, China, using convenience sampling; 311 [[self-report-measures|questionnaires]] were returned and 276 valid responses retained (88.75% effective rate). The sample was 55.8% male; juniors made up 66.3%. Most participants used AI tools frequently — 23.55% 1–2 times per day and 32.61% three or more times per day.

Four instruments were used: an eight-item Academic Self-Efficacy Scale adapted from Owen and Froman (α = 0.874), the ten-item Teacher Support Scale from Skinner and Belmont covering Structure, Involvement and [[agency|Autonomy]] Support (α = 0.915), a seven-item AI Dependency Scale adapted from Young's Internet Addiction Test with items reworded for academic AI use (α = 0.864), and a nine-item shortened Learning Burnout Scale from the MBI-SS covering emotional exhaustion, cynicism and diminished academic efficacy (α = 0.934). All items used five-point Likert scales and several self-efficacy items were rewritten to reference learning without AI assistance.

Analysis proceeded through EFA and CFA (KMO = 0.912; Bartlett χ² = 7,521.004, df = 561, p < 0.001; four factors explaining 69.41% of variance; four-factor CFA fit χ²/df = 1.13, RMSEA = 0.04, CFI = 0.99, TLI = 0.98). Reliability and validity were satisfactory (CR 0.874–0.935, AVE 0.538–0.618; Fornell–Larcker criterion met; HTMT 0.18–0.57). Common method bias was assessed via full-collinearity VIF (maximum 1.579), a poorly fitting single-factor CFA (CFI = 0.372, RMSEA = 0.179) and Harman's test (first factor 30.16% of variance). Regression and mediation used SPSS 27 with PROCESS Model 4 and 5,000 bootstrap resamples; post hoc power exceeded 0.80 for all models.

## Implications

The mediation results locate AI dependency as the transmission channel through which both an individual resource (academic self-efficacy) and a contextual resource (teacher support) relate to burnout — reinforcing the Conservation of Resources reading that depleted internal resources push students toward AI as a compensatory external resource, which in turn erodes the cognitive resources needed to sustain engagement. Because direct effects were non-significant once AI dependency entered the model, interventions aimed only at boosting self-efficacy or teacher support may have limited traction on burnout unless they also address how students use AI.

The authors' practical recommendations are threefold: educators should supply timely feedback, personalized guidance and positive teacher–student interaction, and integrate AI meaningfully as a learning aid rather than banning it; institutions should embed AI literacy into general and professional curricula and cultivate [[self-regulated-learning|self-regulated learning]]; and [[stakeholders|policymakers]] should issue clear guidelines on [[ai-literacy|responsible AI use]], [[academic-integrity|academic integrity]] and prevention of over-dependency. Notably, the low explanatory power of teacher support for AI dependency (4.7%) suggests single-factor interventions should be complemented by broader approaches.

## Limitations

- The cross-sectional design cannot establish causality or capture change over time; reciprocal relationships are plausible (burnout may drive dependency), and longitudinal or experimental designs are needed.
- All measures were self-report, inviting social desirability and subjective bias; the adapted AI Dependency Scale showed satisfactory reliability and validity but its content validity was not assessed via expert review or pilot testing.
- The sample was limited to undergraduates at a few comprehensive universities in Chengdu, China, using convenience sampling — limiting external validity, since AI dependency may vary with [[curriculum-design|curriculum]], assessment practices, technology access, institutional [[educational-policy-ai|AI policy]] and teacher–student relationships across contexts.
- PROCESS uses observed composite scores rather than latent variables and does not model measurement error; latent-variable SEM with bootstrapped indirect effects is recommended.
- Other relevant antecedents (self-regulated learning, [[motivation|intrinsic motivation]], [[critical-thinking|critical thinking]], academic engagement) and boundary conditions (AI literacy, digital competence, usage frequency, discipline, personality, achievement) were not modeled; the observed group differences are not formal moderation effects.

## Connected Concepts

- [[ai-misuse-learning-harm]] — AI dependency is framed as maladaptive reliance that shifts AI from learning aid to external regulator of cognition, with burnout as the harm
- [[cognitive-offloading]] — Cognitive Offloading Theory explains why low-confidence students delegate demanding tasks to AI, and why habitual delegation depletes the resources that protect against burnout
- [[self-efficacy]] — academic self-efficacy is the key individual resource that reduces AI dependency, extending self-efficacy from achievement to AI-related behaviour
- [[teacher-role]] — teacher support (Structure, Involvement, Autonomy Support) acts as a contextual resource that guides appropriate AI use and buffers dependency
- [[well-being]] — learning burnout comprises emotional exhaustion, cynicism and diminished academic efficacy, the psychological cost of dependency
- [[higher-ed]] — the study targets university students in AI-assisted learning environments
- [[student-engagement]] — dependency is linked to passive learning, weakened participation and reduced engagement

## Connected Articles

- [[ai-dependence-academic-writing-ipace-2026]] — companion study of AI dependence using the I-PACE model; same construct and population, different theoretical frame (writing courses)
- [[student-dependency-on-ai-literacy-self-efficacy-2026]] — directly overlaps on AI dependency, academic self-efficacy and higher-education students
- [[yan-conversational-ai-engagement-dependence-synthesis-2026]] — review of dependence-related constructs and their psychological correlates, including measurement concerns relevant to the adapted IAT scale
- [[du-yuan-epistemic-dependence-2026]] — theoretical treatment of dependence in AI-mediated learning and why it erodes autonomy
- [[cognitive-offloading-metacognitive-review-2026]] — mechanisms and interventions for cognitive offloading, the process underlying the dependency path tested here

## Citation

Huang, Q., Tu, S., Lin, J., Lu, L., & Lv, C. (2026). [The dark side of AI in education: AI dependency as a mediator linking academic self-efficacy and teacher support to learning burnout among university students](https://doi.org/10.3389/fpsyg.2026.1889053). *Frontiers in Psychology, 17*, 1889053.
