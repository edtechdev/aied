---
title: "Augmented accounting education using machine learning and decision-making in higher education"
created: "2026-11-27T01:19:00-05:00"
updated: "2026-11-27T01:19:00-05:00"
type: article
published: "2026-07-16"
sources: ['raw/papers/romero-carazas-accounting-ml-2026.md']
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
    date: "2026-11-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** A cross-sectional questionnaire study of 261 accounting students at the Catholic University of Santa María asks whether augmented accounting education, financial interpretation and digital competencies relate to students' decision-making. The paper does study machine learning in education: its augmented-accounting construct asks students to evaluate learning environments that incorporate intelligent technologies, automated systems and machine learning-based tools, and the introduction and discussion frame that construct as AI-mediated accounting education. It is not a trial of a specific system — the authors state that they did not seek to measure proficiency in particular machine-learning platforms or software. In the fitted structural model, financial interpretation had the strongest link to decision-making, augmented accounting education had a smaller but supported link, and digital competencies were not significant. The conclusion is that technology strengthens accounting learning but analytical interpretation remains the determining factor. Findings come from self-reports at one institution and one time point, and the reported fit statistics are mixed.

## Key Findings
1. **Financial interpretation was the dominant predictor.** It had the largest standardized path to decision-making and was accepted as a hypothesis.
2. **Augmented accounting education also predicted decision-making.** Its effect was positive and supported, but clearly smaller than that of financial interpretation.
3. **Digital competencies showed no significant direct effect.** The corresponding hypothesis was rejected, despite the sample reporting frequent technology use.
4. **The instrument was internally consistent.** All four subscales exceeded the conventional reliability threshold, and the full questionnaire reached a higher overall value.
5. **Respondents were mostly basic or intermediate in AI experience.** Advanced experience was rare, and use of advanced accounting software was limited.
6. **The model fit only partly met the authors' own criteria.** Residuals and parsimony looked acceptable, while incremental fit and close-fit indices did not.
7. **The educational claim is about perception, not measured learning.** The constructs came from students' questionnaire responses, with no performance test or classroom comparison.

## What the study measured and how

The design was [[quantitative-research|quantitative]], applied, non-experimental and cross-sectional, with data collected at one point in time and no manipulation of variables. The population was undergraduate students in accounting-related programs at one Peruvian university. Of 270 students invited, 261 completed the questionnaire, a response rate of 96.66%. Sampling was non-probabilistic, purposive and voluntary. The sample was predominantly young: 147 students (56.3%) were aged 18–20, 156 (59.8%) were women, and 258 (98.9%) were in accounting.

Experience with artificial intelligence or [[machine-learning]] was reported as none by 24 students (9.2%), basic by 108 (41.4%), intermediate by 111 (42.5%) and advanced by 18 (6.9%). On use of accounting software, 90 (34.5%) reported never and 120 (46.0%) occasionally. This matters for interpretation: the augmented-accounting construct measures students' evaluations of environments that incorporate intelligent technologies, automated systems and machine learning-based tools, not demonstrated skill with named platforms. The study therefore does address AI/ML in education, but at the level of perceived educational environments rather than a deployed, evaluated ML intervention.

The structured questionnaire contained 20 items on a five-point Likert scale, divided into four five-item dimensions: augmented accounting education, financial interpretation, decision-making and digital competencies in accounting. It was administered through Google Forms after informed consent. Reliability was reported as Cronbach's α = 0.802 for augmented accounting education, 0.852 for financial interpretation, 0.813 for decision-making, 0.759 for digital competencies and 0.908 for the full instrument. Sampling adequacy was supported by KMO = 0.843 and Bartlett's test of sphericity (χ² = 2,942.978, p < 0.001), with total explained variance of 62.240%. Structural equation modeling in AMOS 24 was used with 2,000 bootstrap samples for confidence intervals.

## What the structural results show

The paper reports several slightly different versions of the same paths. In the figure presenting standardized coefficients, financial interpretation had the largest effect on decision-making (β = 0.545), followed by augmented accounting education (β = 0.163), while digital competencies were low and non-significant (β = 0.056). The narrative discussion of the bootstrap results gives financial interpretation as β = 0.550, p = 0.001, augmented accounting education as β = 0.162, p = 0.002, and digital competencies as β = 0.055, p = 0.453. The hypothesis table gives p = 0.005, p = 0.000 and p = 0.305 for the same three hypotheses respectively, with H1 and H2 accepted and H3 not accepted. The direction of the findings is consistent across these presentations, but the significance values are not.

Model-fit statistics were χ² = 251.97 with 60 degrees of freedom, CMIN/DF = 4.199 (rated acceptable), CFI = 0.865 (below the authors' acceptable threshold), SRMR = 0.073 (excellent), RMSEA = 0.083 (moderate–acceptable) and PClose = 0.000 (unsatisfactory). Discriminant validity was supported by HTMT values below 0.90; the highest was 0.818 between financial interpretation and decision-making. A figure caption reports R² = .478 for digital competencies in accounting, although that construct is modeled as a predictor of decision-making rather than as an outcome in the hypothesis table.

The authors interpret the pattern pedagogically: technology acts as a facilitator whose value depends on students' ability to interpret information, apply professional judgment and contextualize financial evidence. They argue that the educational value of technology lies not in its use per se but in its capacity to support deeper analytical processes in [[business-education]] and accounting practice.

## What this means for practice
- **Instructors.** Pair technology-enhanced accounting activities with explicit teaching of financial interpretation, which was the strongest predictor in the model.
- **Instructors.** Do not treat familiarity with digital tools as evidence of decision quality; the digital-competencies path was not supported.
- **Curriculum designers.** Design assessments that require students to turn financial data into reasoned, evidence-based decisions rather than to operate software alone.
- **Institutions.** Recognize that the reported AI/ML exposure was mostly basic or intermediate, and provide practical experience before expecting advanced use.

## Limitations
- The sample came from one [[higher-ed|higher education]] institution and was homogeneous in age, field and academic level, limiting transfer to other settings.
- Sampling was non-probabilistic and voluntary, and all measures were [[self-report-measures|self-reported]] perceptions rather than performance data.
- The cross-sectional design supports associations but not causal claims about the effect of augmented accounting education on decision-making.
- Several fit indices failed to meet the thresholds the paper itself sets out, most notably CFI and PClose, and RMSEA remained slightly elevated.
- The paper reports inconsistent p-values for the same structural paths across its results sections, and the meaning of the reported R² is unclear given the hypothesized direction.
- The augmented-accounting construct was not tied to a specific machine-learning system, so the study cannot show which tools or [[pedagogy|pedagogical]] uses mattered.

## Citation
Romero-Carazas R, Ticona-Apaza VT, Serruto-Huanca TM, Cheje de Manchego VT, Suclla-Revilla JL, Torres-Sánchez J, Delgado-Talavera JJ and Portilla-Linares MM (2026) Augmented accounting education using machine learning and decision-making in higher education. Front. Educ. 11:1861202. doi: 10.3389/feduc.2026.1861202.
