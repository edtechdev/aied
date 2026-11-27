---
title: "Development and initial validation of a survey examining critical GenAI literacy in higher education"
created: "2026-11-27T05:41:00-05:00"
updated: "2026-11-27T05:41:00-05:00"
type: article
published: "2026-07-20"
sources: ['raw/papers/chaaban-critical-genai-literacy-survey-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey, instrument development]
discipline: []
level: [undergraduate]
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

> **Synthesis:** Chaaban, Naccache and Qadhi (2026) conceptualized critical [[generative-ai|GenAI]] literacy for [[writing-education|academic writing]] and developed a self-report survey to measure it. An initial pool of statements was refined through expert review, and the administered instrument was given to [[higher-ed|undergraduate]] students at one Qatari university. Responses were split into independent exploratory and confirmatory subsamples. The final 23-item instrument retains four correlated dimensions: Functional Literacy, Agency and Autonomy, Ethical and Responsible Use, and Reflective Use. Reliability was strong, descriptive scores were moderate, and the four-factor model showed acceptable incremental fit but weaker absolute fit. The authors present the instrument as an initially validated tool for gathering students' perspectives, not as a direct test of writing competence.

## Key Findings
1. **Criticality is the organizing idea.** The framework asks not only how students use GenAI for writing but when they should withhold it, and it defines critical judgment as scrutinizing output, verifying claims and monitoring one's own reliance.
2. **The instrument was built in stages.** A pool of 62 statements was reduced through team reflection to 35, then to 33 after four expert reviewers rated clarity and relevance; psychometric refinement left 23 items.
3. **Four dimensions survived refinement.** Functional Literacy, Agency and Autonomy, Ethical and Responsible Use and a narrowed Reflective Use dimension emerged in exploratory analysis and were tested in a separate subsample.
4. **Reflection changed meaning during validation.** Evaluation items cross-loaded or failed to load coherently, so the original Reflection and Evaluation dimension lost most of its evaluation content and was renamed Reflective Use, centering on worry about over-reliance and diminished thinking.
5. **Students reported moderate agreement overall.** Functional Literacy scored highest and Agency and Autonomy lowest, with substantial variation on every dimension.
6. **The dimensions are related but distinct.** All four factors correlated positively, while reflective worry showed the smallest associations with the others.
7. **Validation is preliminary.** Incremental fit indices were acceptable, but absolute fit indices fell short of conventional [[benchmark|benchmarks]], so the structure still needs testing in other samples.

## How the survey was built and tested

The authors define critical GenAI literacy as an holistic construct situated in academic writing. Functional Literacy covers ease and confidence with the tools. Agency and Autonomy covers self-determination, control and non-reliance. Ethical and Responsible Use covers verification, privacy, transparency and disclosure. Reflection and Evaluation initially covered analysis of outputs and implications, but the retained items expressed affective monitoring of risk rather than explicit evaluative acts. The conceptual ground is writing-process theory, [[academic-integrity|academic integrity]], genre theory and multilingual writing; the last matters because most programs at the study site are delivered in Arabic while others use English.

Item generation began with a review of earlier [[ai-literacy|AI literacy]] frameworks. The team assembled 62 statements across the four dimensions, reworded and removed items through internal deliberation until 35 remained, and asked four experts in educational technology and digital [[ethics]] to rate clarity and relevance. Statements were dropped when two reviewers agreed on omission, leaving 33 items on a five-point scale from 1 (strongly disagree) to 5 (strongly agree). Arabic and English versions were produced by back translation, but measurement invariance across languages was not tested. Iterative psychometric work reduced the administered 33 items to the final 23.

The setting was a large public university in Qatar with eleven colleges. Students completed the online survey over a two-month period; 487 valid responses were obtained. Instructors who had attended university workshops shared the link, so the number of students who received the invitation is unknown. The responses were randomly divided for exploratory analysis (n = 214) and confirmatory analysis (n = 273), with listwise treatment of missing data in the confirmatory phase.

Exploratory analysis used Principal Axis Factoring with Promax rotation. Sampling adequacy was supported by KMO = .936 and Bartlett's test, χ2(528) = 7,302.197, p < .001. Four components had eigenvalues greater than 1.0. Items with weak loadings, problematic cross-loadings or conceptual redundancy were removed stepwise; loadings below 0.30 were suppressed. Confirmatory analysis used AMOS 31 with maximum likelihood estimation and 200 bootstrap iterations. One correlated residual within Reflective Use was retained.

## What the validation results show

Internal consistency was high: Cronbach's alpha was .953 for Functional Literacy, .944 for Agency and Autonomy, .940 for Ethical and Responsible Use and .927 for Reflective Use. Standardized loadings ranged from .725 to .998, average variance extracted ranged from .709 to .853, and composite reliability ranged from .941 to .953. Discriminant validity was supported by the Fornell–Larcker criterion and HTMT ratios below the .85 threshold, with ratios in the .269–.764 range.

The confirmatory model was adequate but not clean. The paper reports χ2(223) = 698.684, p < .001, χ2/df = 3.133, CFI = .927, TLI = .917, IFI = .927, RMSEA = .089 [90% CI (.081,.096)], and GFI = .817. The incremental indices support the specified structure relative to a null model, but the RMSEA exceeds the conventional .08 threshold and the GFI falls below the .90 benchmark. The authors therefore call the four-factor structure provisional.

Descriptive results came from the validation subsample. Functional Literacy had the highest mean (M = 3.22, SD = 1.27), followed by Ethical and Responsible Use (M = 3.15, SD = 1.24) and Reflective Use (M = 3.14, SD = 1.43). Agency and Autonomy was lowest (M = 2.66, SD = 1.28). All four correlations were positive and significant (p < .001): Functional Literacy with Agency and Autonomy (r = .726), Functional Literacy with Ethical and Responsible Use (r = .655), Agency and Autonomy with Ethical and Responsible Use (r = .638), and the smaller associations involving Reflective Use (r = .416, r = .426 and r = .278). The authors note that Agency and Autonomy mixes confidence, continued-use intention, exploration, peer modeling, control and non-reliance, so it is a broad composite rather than a pure autonomy measure.

## What this means for practice

- **Instructors.** Use the survey to locate [[self-report-measures|self-reported]] needs before designing instruction; the lowest mean was on Agency and Autonomy, so do not assume that confidence with tools implies independent judgment.
- **Instructors.** Teach verification, bias detection and disclosure explicitly, and make room for students' worries about over-reliance rather than treating tool fluency as the goal.
- **Researchers.** Treat the four-factor structure as provisional; confirm it in independent cultural and institutional settings before treating scores as established measures.
- **Researchers.** Test whether scores correspond to actual performance: the instrument records beliefs and confidence, not demonstrated ability to detect [[hallucination-risk|hallucinations]] or verify claims.
- **Institutions.** When using the Arabic and English forms side by side, test measurement invariance; back translation alone establishes semantic correspondence, not equivalent functioning.

## Limitations

- **Single institution.** The study was conducted at one large public university in Qatar, and the descriptive findings may not transfer to other institutional or cultural contexts.
- **Unknown response denominator.** Instructors shared the survey link, but no record was kept of how many students received it, so nonresponse bias cannot be assessed.
- **Self-report only.** The instrument captures students' perceived literacy, not their actual ability to verify GenAI output, detect bias, judge writing quality or apply disclosure rules.
- **Measurement equivalence untested.** The two language versions were back translated but not formally tested for invariance, and the Agency and Autonomy factor remains conceptually broad.
- **Imperfect fit.** Absolute fit indices were modest, so further testing is needed before the model can be treated as confirmed.

## Citation

Chaaban, Y., Naccache, H., and Qadhi, S. (2026). [Development and initial validation of a survey examining critical GenAI literacy in higher education](https://doi.org/10.3389/feduc.2026.1832507). *Frontiers in Education, 11*, 1832507.
