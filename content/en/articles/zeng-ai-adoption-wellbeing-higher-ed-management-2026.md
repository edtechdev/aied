---
title: "Artificial intelligence adoption and occupational well-being in higher education management: evidence from universities in Guangzhou"
created: "2026-11-23T11:30:00-05:00"
updated: "2026-11-23T11:30:00-05:00"
type: article
published: "2026-11-23"
sources: ['raw/papers/zeng-ai-adoption-wellbeing-higher-ed-management-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1931597"
confidence: high
evidence_context: educational
page_kind: [evaluation]
research_method: [structural equation modeling]
level: [higher ed]
audience: [administrators, researchers, faculty developers]
foundations: [ai-literacy]
pedagogy: [well-being]
technology: [ai-technologies, learning-analytics]
assessment: [self-report-measures]
methods: [quantitative-research]
institutions: [change-management]
ethics: [privacy]
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Zeng and Kasim (2026) surveyed 320 professional administrators and middle managers at [[higher-ed|universities]] in Guangzhou and modeled how their use of AI-enabled tools relates to [[well-being|occupational well-being]]. Grounding the analysis in the Job Demands–Resources model, they tested three associations at once: a direct route from AI adoption to well-being, an indirect route running through technostress, and a boundary condition in which perceived organizational support changes that stress route. Adoption was positively associated with technostress, technostress was negatively associated with well-being, and adoption's indirect route to well-being through technostress was negative and significant at average support. The direct route was not significant, so more AI use is not, by itself, evidence of better occupational outcomes. Perceived organizational support was positively associated with well-being and was linked to a weaker negative stress–well-being association. These are cross-sectional, [[self-report-measures|self-reported]] associations, not causal effects, and most of the variation in well-being sits outside the four-construct model.

## Key Findings

- **Adoption was linked to more technostress.** University managers who reported using AI-enabled tools more in their core administrative duties also reported more stress about learning, monitoring and rechecking those tools' outputs.
- **Technostress went with lower occupational well-being.** At average levels of perceived organizational support, the two were negatively associated.
- **The stress route carried the significant indirect link.** Adoption's indirect association with well-being through technostress was negative and stayed clear of no association at low and average support, becoming uncertain only at the highest support level.
- **The direct benefit hypothesis was not supported.** The straight adoption-to-well-being path ran in the expected positive direction but was not distinguishable from no association, so the study did not establish a direct well-being gain from adopting AI.
- **Perceived support helped directly and softened the stress link.** Support showed a positive main association with well-being, and the negative stress-to-well-being association became weaker as support rose, though at the highest support level it was no longer distinguishable from no association.
- **Most well-being variation lay outside the model.** The four constructs explained about one tenth of well-being variance and roughly one fifth of technostress variance, so the account is constrained rather than comprehensive.
- **Adoption intensity is not a stand-alone success measure.** With the direct path absent, the authors argue that institutions should evaluate the demand-related experience and the perceived support alongside how much AI is used.

## Design, instruments, and estimation

The dataset held 320 complete questionnaire records with 18 measurement items, collected through purposive recruitment across all tertiary institutions in Guangzhou rather than a single university, first contacted over WeChat before the questionnaire was distributed through the Wenjuanxing online platform. Teaching-only staff and students were outside the intended population. All item values were integers from 1 to 5; the authors report no missing cells, out-of-range values, duplicate case identifiers or duplicate complete response patterns, and every record was retained without imputation, exclusion, reordering or reverse coding. Age, gender and position were collected but deliberately left out of the analysis to protect respondent anonymity, and participating universities and their types were not recorded because of ethical restrictions.

Four multi-item blocks carried the model: five items for AI adoption, four for technostress, four for perceived organizational support and five for occupational well-being, each rated on a five-point scale from strongly disagree to strongly agree. Example items cover using AI tools such as analytics dashboards and AI assistants in administrative tasks for adoption, learning, monitoring or rechecking those tools raising workload for technostress, university support for using digital and AI tools effectively for support, and feeling positive and energized at work for well-being. Reliability and convergent validity cleared conventional thresholds, with Cronbach's alpha from 0.8475 to 0.8675, rho-A from 0.8628 to 0.9089, composite reliability from 0.8954 to 0.9059, and average variance extracted from 0.6375 to 0.7065. Every heterotrait-monotrait ratio upper bound stayed below 0.85, the largest estimate being 0.5539 for the adoption-technostress pair, which supports separating the four blocks without showing that shared-method bias is absent.

Estimation used partial least squares structural equation modeling with reflective Mode A measurement and path weighting, run in a Python implementation. A two-stage interaction specification entered the product of standardized technostress and support scores, mean-centered but not divided by its standard deviation. Uncertainty came from 5,000 case-resampling bootstrap samples, with percentile intervals as the [[primary-education|primary]] inferential summary; all resamples converged. Predictive checks used 10-fold cross-validation repeated 10 times with 288 training and 32 test records per fold, and predicted construct scores were mapped back to the original 1–5 units.

## What the results show

The strongest association in the model ran from adoption to technostress. The direct adoption-to-well-being path was 0.0778 with an interval spanning zero, so the first hypothesis failed; the authors read that as ruling out a demonstrated direct benefit rather than proving the association is exactly zero. Technostress was negatively associated with well-being at mean support, with a point estimate of -0.2024, supporting the third hypothesis. Support showed a positive main association with well-being and, on the interaction term, a coefficient of 0.1623, meaning higher support corresponded to a less negative estimated stress slope. That second-stage moderation distinguishes the study from earlier work placing perceived support in mediation structures.

Simple slopes quantified the attenuation. The estimated technostress-to-well-being slope moved from -0.3647 at one standard deviation below the mean in support to -0.2024 at the mean and -0.0401 one standard deviation above; the low-support interval excluded zero while the high-support interval included it, so the finding is an attenuated estimate rather than proof that support eliminates strain. The conditional indirect association followed the same pattern, moving from -0.1751 at low support to -0.0972 at the mean and -0.0193 at high support, with only the high-support interval including zero. An exploratory index of moderated mediation, 0.0779, summarized the change in the indirect association per unit of standardized support.

Explained variance and effect sizes bounded the interpretation. Technostress had an R-squared of 0.2304 and an adjusted value of 0.2280, so most of the stress score remained unexplained; for well-being the R-squared was 0.1069 and the adjusted value 0.0956, and the authors report that approximately 89.31% of the variance stayed outside the model. Effect sizes told the same story: adoption's incremental contribution to well-being was negligible at f-squared 0.0050, and the interaction term contributed 0.0292, small against the conventional 0.02, 0.15 and 0.35 guidelines. Cross-validated prediction improved on ordinary least-squares [[benchmark|benchmarks]] for all nine indicators, but the gains were modest and root mean square error stayed near 1.30 to 1.37 response-scale units.

## Reading the results as an education administrator

The population is distinctive: non-teaching administrators and middle managers, a group the [[administrator|administrator literature]] has left thinly examined while most AI-in-higher-education research addresses teaching and learning. The study's own framing keeps the constructs separate on purpose. AI adoption is the technological exposure, technostress is the perceived demand-related experience, perceived organizational support is a job resource, and occupational well-being is the outcome. Treating adoption itself as evidence of either stress or support would collapse that distinction, and an adoption score cannot show whether the work changed.

For leaders the practical reading is evaluative rather than prescriptive. Because the direct path is absent, adoption or throughput measures should not be used as a proxy for better occupational outcomes, and any monitoring should stay confidential and avoid labeling individual staff given the model's limited predictive accuracy. The support finding is equally bounded: it rests on employees' perceptions rather than experimentally assigned support or measured institutional practices, so the study cannot say whether training, technical assistance, workload adjustment or some other practice produced the pattern.

The design imposes harder limits. All four variables were observed within a single questionnaire matrix, so the analysis cannot establish whether adoption preceded technostress or whether technostress preceded well-being, and prior well-being may shape how demands and support are perceived. Common-source self-reporting can introduce shared response tendencies, and although collinearity diagnostics and a principal-component check found no single dominant component, they cannot demonstrate that method variance is absent. Generalizability is constrained by limited demographic information, kept out of the analysis for ethical reasons, which restricts how far the findings travel to other locations and cultures. The sensitivity calculation itself assumed one incremental regression coefficient: with 320 cases it corresponds to roughly 71.3% power at an effect size of 0.02, and a prospective design would need about 395 usable cases for approximately 80% power, so the sample offers less sensitivity to very small incremental associations.

## What this means for practice

- **Administrators.** Evaluate AI-enabled administration on perceived technostress, perceived support and occupational well-being alongside adoption counts, since the direct path did not hold and usage volume says nothing about whether staff are faring well.
- **Faculty developers.** Treat support as something to be designed rather than assumed: role-specific assistance, time for learning and verification, clear escalation responsibilities and realistic turnaround expectations are the candidates the authors name for evaluation.
- **Institutional leaders.** Pair acceptable-use rules with accessible human assistance, especially where administrative decisions involve student information, and consider how access to these tools is distributed across administrative units.
- **Researchers.** Repeat the design longitudinally and with source separation: repeated measurement of adoption, technostress, support and well-being could test whether earlier adoption predicts later stress changes, and independent workload or tool-use records could complement self-reports.

## Limitations

- Every variable was measured in one questionnaire matrix, so temporal order is unknown and lower well-being may influence how demands and support are perceived; the authors describe the indirect pattern as statistical mediation, not causal mediation.
- Measurement documentation bounds interpretation: satisfactory reliability, average variance extracted and loadings do not establish that each item covers its intended domain, and the four-item technostress block cannot support separate claims about overload, insecurity or uncertainty.
- Common-source self-reporting leaves shared response tendencies possible, and the collinearity and principal-component diagnostics rule out neither severe collinearity's absence nor a dominant component, only showing that neither appeared.
- Generalizability is limited by restricted demographic information and a single-city sample; the authors call for replication across occupational groups and higher-education systems.
- Estimation and sensitivity boundaries matter: no consistent-PLS correction was applied, the interaction uses a centered product of standardized scores, and the sample-size calculation covers one incremental regression association, so the 320 cases offer less sensitivity to very small incremental associations.

## Citation

Zeng, C., & Kasim, R. S. R. (2026). [Artificial intelligence adoption and occupational well-being in higher education management: evidence from universities in Guangzhou](https://doi.org/10.3389/fpsyg.2026.1931597). *Frontiers in Psychology*, 17, 1931597.
