---
title: "Critical thinking as a predictor of task functionality and artificial intelligence use among university students. A PLSSEM approach"
created: "2026-11-27T01:33:12-05:00"
updated: "2026-11-27T01:37:00-05:00"
type: article
published: "2026-08-24"
sources: ['raw/papers/sabando-critical-thinking-ai-use-2026.md']
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

> **Synthesis:** Sabando-García and colleagues surveyed 401 students at one Ecuadorian campus and modeled how four dimensions of critical thinking relate to perceived task functionality and reported frequency of artificial intelligence use. The final model gives partial support: epistemic awareness was associated with task functionality, and task functionality was the strongest supported predictor of AI use frequency. Critical reflection and evaluation, active evidence seeking and disposition toward independent thinking showed no stable direct association with either outcome once bootstrap confidence intervals were applied. Because the data were cross-sectional and self-reported, these are predictive associations within one sample, not causal effects and not evidence that frequent AI use reflects stronger critical thinking.

## Key Findings
1. **Four critical-thinking dimensions were modeled separately.** Reflection and evaluation, active evidence seeking, epistemic awareness and independent thinking were entered as distinct antecedents rather than as one higher-order construct.
2. **Only epistemic awareness predicted task functionality.** Students who reported stronger awareness of how knowledge is constructed also rated academic tasks as more meaningful, organized and applicable.
3. **Task functionality was the dominant predictor of AI use.** [[technology-acceptance-model|Perceived usefulness]] and structure of tasks showed the strongest supported association with how often students reported using AI tools.
4. **The other three dimensions were not supported.** Critical reflection, evidence seeking and independent thinking did not show stable direct links to task functionality in the final analysis.
5. **No critical-thinking dimension directly predicted use frequency.** Their paths to AI use failed the bootstrap criterion, so the paper rejects the idea that cognitive disposition alone drives frequent use.
6. **[[generative-ai|ChatGPT]] dominated tool preference.** Most students named it as their preferred academic AI tool, and comparisons across tool groups were treated as descriptive because several groups were very small.
7. **The null results are substantive.** The authors read them as evidence that critical skills need instructional conditions that activate them, rather than as proof that the skills are irrelevant.

## Design and measurement

The study used a [[quantitative-research|quantitative]], non-experimental, cross-sectional and explanatory-predictive design at the Pontifical Catholic [[higher-ed|University]] of Ecuador, Santo Domingo Campus. Participants were 401 students chosen through intentional and voluntary non-probability sampling. The sample was 267 female (66.6%) and 134 male (33.4%), with 179 aged 18 to 19 (44.6%), 188 aged 20 to 25 (46.9%) and 34 older than 25 (8.5%). Mean [[learning-gains|academic performance]] was 42.45 (SD = 4.29) on the institutional scale.

A structured questionnaire administered through Google Forms used a five-point Likert scale from strongly disagree to strongly agree. It covered the four critical-thinking dimensions, task functionality and frequency of AI use. Preferred tools were ChatGPT for 271 students (67.6%), Gemini for 70 (17.5%) and Copilot for 23 (5.7%); Claude, Siri, DeepSeek, Grok, Fireflies and Midjourney had 8 (2.0%), 9 (2.2%), 10 (2.5%), 6 (1.5%), 3 (0.7%) and 1 (0.2%) respectively. The authors caution that these tiny groups make tool comparisons exploratory.

Data processing had three stages: SPSS for screening and descriptives, AMOS only for a preliminary confirmatory factor analysis, and SmartPLS 4 for the final measurement and structural models. Bootstrapping used 2,000 subsamples and 95% confidence intervals. A path was supported only when p < .05 and the interval excluded zero. Internal consistency was above 0.70 and often near 0.95, which the authors flag as possible item redundancy; average variance extracted exceeded 0.50 and heterotrait–monotrait ratios stayed below 0.90, ranging from 0.258 to 0.849.

## Which paths were supported

In the final bootstrap results, epistemic awareness predicted task functionality with B = 0.264, p = .005 and a 95% confidence interval of [0.093, 0.473]. Task functionality predicted frequency of AI use with B = 0.807, p = .009 and interval [0.727, 0.874], the strongest path in the model. All other paths failed the criterion: reflection and evaluation (B = 0.067, p = .588), evidence seeking (B = −0.012, p = .954) and independent thinking (B = 0.027, p = .726) on task functionality, and reflection (B = 0.085, p = .202), evidence seeking (B = −0.104, p = .205), epistemic awareness (B = 0.025, p = .652) and independent thinking (B = 0.122, p = .096) on AI use frequency.

The paper contains a tension in how these paths are reported. An earlier table of initial estimates and one discussion passage describe additional significant effects on AI use frequency, but the bootstrap table and the hypothesis summary base the final decision only on confidence intervals, and these list just two supported paths. A further caution comes from the Fornell–Larcker table, where several off-diagonal associations among critical-thinking dimensions approach or exceed diagonal values even though the heterotrait–monotrait test passes. The article itself calls for refining the instrument.

## What this means for practice
- **Instructors.** Make the purpose and structure of academic tasks explicit, since perceived task functionality was the clearest correlate of reported AI use.
- **Instructors.** Teach how knowledge is constructed and validated, the dimension that tracked perceived task functionality, rather than assuming general critical-thinking instruction transfers automatically.
- **Instructors.** Do not treat frequent AI use as a proxy for strong or weak [[critical-thinking|critical thinking]]; the two were not directly linked in this model.
- **Researchers.** Replicate the model with probabilistic, multi-institutional sampling and balanced groups across AI tools before applying it beyond this campus.

## Limitations
- The design is cross-sectional and non-experimental, so no causal conclusion is available and all paths remain predictive associations.
- Intentional and voluntary non-probability sampling limits representativeness and generalization beyond the analyzed institutional context.
- All constructs came from self-report [[self-report-measures|questionnaires]], leaving responses open to perception, expectation and social-desirability effects.
- Several critical-thinking dimensions are conceptually close, with high reliability coefficients and near-threshold discriminant statistics, which suggests item redundancy and instrument refinement needs.
- Very small subsamples for several AI tools make between-tool comparisons descriptive only, and the paper draws no strong inferential conclusions from them.
- The measurement and structural model has not been replicated in an independent sample.

## Citation
Sabando-García ÁR, Llacsaguache-Calle DMP, Villota-Oyarvide WR, Loor-Ávila BA, Chunga-Palomino SL, Panta-Ipanaqué JM, López-López HL, Martinez-Aberga WA, Lazo-Bravo CS and Moreira-Choez JS (2026) Critical thinking as a predictor of task functionality and artificial intelligence use among university students. A PLSSEM approach. Front. Educ. 11:1898749. doi: 10.3389/feduc.2026.1898749.
