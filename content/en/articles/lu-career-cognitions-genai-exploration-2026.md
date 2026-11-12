---
title: "Career-related psychological cognitions and career exploration behavior among Chinese college students: statistical indirect pathways through generative artificial intelligence use"
created: "2026-11-12T08:20:00-05:00"
updated: "2026-11-12T08:20:00-05:00"
published: "2026"
type: article
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
evidence_context: educational
level: [higher ed, undergraduate]
audience: [researchers, administrators, instructors]
sources: ['raw/papers/lu-career-cognitions-genai-exploration-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1934479"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers, links]
pedagogy: [career-development-and-readiness, self-efficacy, student-support-and-success]
technology: [generative-ai, technology-acceptance-model]
assessment: [self-report-measures]
methods: [quantitative-research]
---

> **Synthesis:** A cross-sectional survey of 1,445 third- and fourth-year undergraduates at five universities in eastern China tested whether three career-related appraisals — career insecurity, [[self-efficacy|career self-efficacy]], and perceived usefulness of [[generative-ai|generative AI]] — were associated with [[career-development-and-readiness|career exploration behavior]], and whether generative AI use carried a statistical indirect pathway between them. Perceived usefulness was the strongest correlate of AI use (β = 0.569, p < 0.001) and career self-efficacy the strongest of the three cognitions linked directly to exploration (β = 0.285, p < 0.001); AI use itself was associated with exploration at β = 0.423 (p < 0.001), and the model explained 38.0% of the variance in AI use and 50.5% in exploration. Career insecurity's association did not survive adjustment: a weak positive bivariate correlation with AI use (r = 0.095, p < 0.001) became a null structural path (β = 0.000, p = 0.989). The design is cross-sectional and every variable is self-reported, so the indirect pathways are statistical associations, not evidence of mediation or causal order.

## Key Findings

1. **Perceived usefulness, not confidence, carried AI use.** Perceived usefulness of generative AI predicted generative AI use at β = 0.569 (p < 0.001), while career self-efficacy predicted it at only β = 0.082 (p = 0.027).
2. **AI use tracked career exploration.** Generative AI use was positively associated with career exploration behavior at β = 0.423 (p < 0.001), and the full model explained 50.5% of the variance in exploration.
3. **Self-efficacy was the strongest cognitive predictor of exploration.** Career self-efficacy was associated with career exploration behavior at β = 0.285 (p < 0.001), larger than the direct path from perceived usefulness (β = 0.154, p = 0.005).
4. **Both indirect pathways were significant in the primary model.** The standardized indirect effect was 0.241 (95% BC Bootstrap CI 0.188, 0.299, p < 0.001) for perceived usefulness and 0.035 (95% BC Bootstrap CI 0.005, 0.067, p = 0.023) for career self-efficacy.
5. **The self-efficacy pathway did not survive the sensitivity check.** Re-estimated in Sample B only, the path from career self-efficacy to AI use fell to β = 0.062 (95% BC Bootstrap CI −0.036, 0.166) and the indirect effect to 0.022 (95% BC Bootstrap CI −0.012, 0.055, p = 0.174).
6. **Career insecurity looked relevant only before adjustment.** Its bivariate correlation with AI use was r = 0.095 (p < 0.001), but the adjusted structural path was β = 0.000 (p = 0.989), its path to exploration was β = 0.005 (p = 0.841), and its indirect effect was 0.000 (p = 0.989).
7. **Perceived usefulness drew the highest mean rating.** Perceived usefulness averaged 3.890 (SD = 0.701), ahead of career self-efficacy at 3.585 (SD = 0.819), career exploration at 3.543 (SD = 0.748), AI use at 3.507 (SD = 0.817), and career insecurity at 3.504 (SD = 1.026).

## What the study measured

The paper pairs Social Cognitive Career Theory, linking career cognitions to career action, with the [[technology-acceptance-model|Technology Acceptance Model]], which links perceived usefulness to adoption. It calls "career-related psychological cognitions" a classification label, not a latent variable: three correlated appraisals of risk, capability, and tool value. Career insecurity is worry about future opportunities; career self-efficacy is confidence in career tasks and job-search challenges; perceived usefulness is the judged value of generative AI for information gathering, résumé work, interview preparation, and career decisions.

An online questionnaire was fielded from April to May 2026 through convenience sampling at five universities in eastern China. Of 1,476 questionnaires collected, 1,445 were valid, for a valid response rate of 97.9%; only 31 were excluded. The sample was 1,106 third-year undergraduates (76.54%) and 339 fourth-year undergraduates (23.46%), and 75.57% had begun to learn about or prepare for job searching. A fixed random seed split the file into Sample A (722 participants) for item screening and Sample B (723 participants) for confirmatory factor analysis; the [[quantitative-research|structural model]] was then estimated on the full sample with maximum likelihood and 5,000 bootstrap resamples.

Item screening cut the 42 administered items to 25, five per construct. Reliability was high — Cronbach's α from 0.883 to 0.951 — with standardized loadings from 0.688 to 0.918, composite reliability from 0.886 to 0.951, and AVE from 0.609 to 0.796. Heterotrait–monotrait ratios ranged from 0.058 to 0.648, and the model fit well: χ2 = 850.547, df = 265, χ2/df = 3.210, CFI = 0.982, TLI = 0.979, RMSEA = 0.039, and SRMR = 0.024. Harman's single-factor test extracted five factors, the first accounting for 39.464% of the variance.

## What tracked AI use, and what did not

Two of three cognitions behaved as expected, and magnitude matters more than significance. Students who judged generative AI useful for career preparation used it more (β = 0.569), the largest standardized coefficient in the model. Students who felt capable in career tasks used it more, but the coefficient was small (β = 0.082) and, in the Sample B re-estimation, no longer distinguishable from zero. The authors say this does not support calling self-efficacy a strong predictor of AI use; confidence shows up in exploration itself (β = 0.285).

Career insecurity is the more instructive null. Theoretically it should have reduced AI use. The bivariate correlation ran the other way, weakly and positively (r = 0.095), then collapsed once perceived usefulness entered the model. A supplementary composite-score regression traces the collapse: career insecurity alone gave β = 0.095, adding career self-efficacy raised it to β = 0.123, adding perceived usefulness dropped it to β = −0.007 (p = 0.752), and all three together left β = 0.010 (p = 0.651). The authors attribute the attenuation to overlap between career worry and judgments about AI's value, noting that general career insecurity is not AI-specific replacement anxiety.

Exploration was associated with perceived usefulness directly (β = 0.154), self-efficacy directly (β = 0.285), and AI use (β = 0.423). Bivariately, AI use and exploration correlated at r = 0.588 (p < 0.01), while insecurity and exploration sat at r = 0.045 (p = 0.090).

## The pathway through AI use, and what it cannot show

The framing places AI use between career cognitions and exploration, and the bootstrap results support that for two of three predictors. Perceived usefulness had an indirect effect of 0.241 through AI use; career self-efficacy had 0.035, most of its association being direct. For career insecurity the indirect effect was 0.000 (95% BC Bootstrap CI −0.023, 0.023, p = 0.989).

None of this identifies a mechanism. All variables were measured at one time point in one self-report instrument, so "generative AI use → exploration" fits the data as well as "exploration → AI use," and a third variable such as career decidedness could produce both. The authors call these statistical indirect pathways, not causal mediation. Sensitivity analyses reinforced the caution: restoring all eight career-insecurity items left those paths nonsignificant, excluding one exploration item (CEB2) left the AI-use-to-exploration path at β = 0.407 (95% BC Bootstrap CI 0.323, 0.490), but Sample B removed significance from the self-efficacy path.

## What this means for practice

- **[[student-support-and-success|Career services]] and employability programs.** Teach when, how, and for what purpose to use generative AI in career preparation rather than simply encouraging more use; judged usefulness carried the largest coefficient in the model.
- **Career advisers.** Build in verification: problem formulation, prompt design, output checking against a second source, and discussion of what AI-generated career advice cannot know. The authors warn that students may accept outputs without checking or reflecting.
- **Career counseling.** Keep investing in [[self-efficacy|confidence-building]] activities — job-search training, mock interviews, feedback, and individual counseling — because self-efficacy had the strongest direct association with exploration among the cognitions (β = 0.285), independent of any technology.
- **Support for anxious students.** Do not assume career-worried students are heavier or lighter AI users; the adjusted path was zero. Offer specific job information and concrete next actions instead of treating insecurity as a technology-adoption lever.
- **Institutional researchers.** Measure the quality and verification of AI use, not only its frequency, and report effect sizes alongside p-values; a sample of 1,445 makes small coefficients significant.

## Limitations

- The design is cross-sectional and self-reported, with all variables measured at a single time point between April and May 2026; no temporal ordering or causal claim is possible, and the indirect effects are statistical associations rather than demonstrated mediation.
- Sampling was by convenience at five universities in eastern China, so generalization to other regions, institution types, and academic years is untested; university identifiers were stripped from the analytic file, leaving institutional clustering unexamined.
- Same-source bias cannot be ruled out: all five constructs came from one questionnaire, and although Harman's test (first factor 39.464%) and a method-factor confirmatory factor analysis showed only small fit improvements, the authors state that common method variance may still operate.
- The career self-efficacy pathway was unstable: β = 0.082 in the primary model, β = 0.062 (95% BC Bootstrap CI −0.036, 0.166) in Sample B, with an indirect effect of 0.022 (p = 0.174), so the association should not be treated as established.
- Measurement adaptation was informal: no back-translation, expert content-validity panel, or cognitive interviewing preceded data collection; item screening reduced the 42 administered items to 25, and reliability coefficients were high enough to suggest item overlap. The response-quality thresholds behind the 31 exclusions were not retained, so the screening cannot be reproduced.
- The study measured general career insecurity and overall AI use only; it did not assess AI-specific replacement anxiety, AI literacy, verification skill, quality of use, or coping resources, and it names no specific AI system or version, so nothing can be said about which tools produce these patterns.

## Citation

Lü, Q., Chen, J., Wang, H., Li, X., & Zhang, Y. (2026). [*Career-related psychological cognitions and career exploration behavior among Chinese college students: statistical indirect pathways through generative artificial intelligence use*](https://doi.org/10.3389/fpsyg.2026.1934479). *Frontiers in Psychology, 17*, 1934479. https://doi.org/10.3389/fpsyg.2026.1934479
