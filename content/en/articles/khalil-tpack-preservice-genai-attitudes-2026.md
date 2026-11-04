---
title: "The Role of Integrated TPACK in Empowering Pre-Service Teachers and Shaping Their Attitudes Toward Generative AI in Teaching"
created: "2026-11-04T12:00:00-05:00"
updated: "2026-11-04T12:00:00-05:00"
type: article
foundations: [tpack, teacher-ai-competency, ai-literacy]
technology: [generative-ai]
methods: [quantitative-research]
research_method: [survey]
level: [teacher education]
audience: [faculty developers, instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/khalil-tpack-preservice-genai-attitudes-2026.md']
source_url: "https://doi.org/10.3390/educsci16111855"
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Can [[tpack|TPACK]] — teacher knowledge as an integration of technology, pedagogy, and content — be specified for [[generative-ai|generative AI]], and does that integrated knowledge travel with pre-service teachers' attitudes? This [[quantitative-research|survey]] of 988 pre-service teachers in Egypt and Oman answers both questions with a four-factor structural model, and the answer is qualified: the model fits acceptably (CFI = 0.952, RMSEA = 0.059) and integrated TPACK predicts a single attitude item at β = 0.75 (R² = 0.563), yet the four knowledge constructs refuse to separate empirically (HTMT = 0.92–0.99). Technological knowledge alone does not predict integrated TPACK (β = -0.10, p = 0.066), while technological pedagogical and content knowledge do, which the authors read as support for [[teacher-ai-competency|teacher AI competency]] built through subject-specific pedagogy. Read it as a measurement caution for [[ai-literacy|AI literacy]] work in [[teacher-education|teacher education]]: near-ceiling self-ratings may reflect one general confidence factor, not four competences.

## Key Findings
1. In a cross-sectional survey of 988 pre-service teachers in Egypt and Oman, the four-factor AI-integrated TPACK model fit acceptably (χ²/df = 4.47, CFI = 0.952, RMSEA = 0.059; loadings 0.65 to 0.87).
2. Technological content knowledge predicted integrated TPACK at β = 0.67 (p < 0.001) and technological pedagogical knowledge at β = 0.41 (p = 0.025); technological knowledge did not (β = -0.10, p = 0.066).
3. Discriminant validity failed: HTMT ratios ran from 0.92 to 0.99, TPK and TCK shared 88.7% of their variance, and VIF reached 10.42 for TPK and 9.49 for TCK.
4. Integrated TPACK was strongly associated with the single attitude item (β = 0.75, p < 0.001; R² = 0.563), explaining over half the variance in the belief that generative AI supports innovative teaching.
5. Correlations with that item barely differed (TK 0.686, TPK 0.700, TCK 0.724, TPACK 0.731), so integrated TPACK was not clearly stronger than TCK in this sample.
6. Self-ratings clustered near the ceiling (means of 4.26 to 4.31 on the scale), and gender differences did not survive Holm correction; only academic year did.

## Summary

The paper asks two questions that TPACK research usually answers separately: whether technological, pedagogical, and content knowledge can be modeled as antecedents of an integrated, generative-AI-specific TPACK, and whether that integrated construct — rather than any component — travels with pre-service teachers' attitudes toward generative AI. Prior work, they argue, studies single applications or lists competencies without modeling their relations. They surveyed 988 pre-service teachers in Egypt and Oman between 25 February and 30 March 2026, analyzing responses with exploratory and confirmatory factor analysis plus structural equation modeling. The result is directional support with a serious measurement caveat: the pathway runs from component knowledge through integrated TPACK to attitude, but the components are so tightly correlated that their separate contributions cannot be trusted. The authors conclude that AI belongs inside pedagogical and subject-content work, not standalone tool training.

## Study Design and Method

The instrument began as a pool of 50 items across seven TPACK domains, lost 11 on expert recommendation and six more as redundant, and ended as 33 items: four demographics plus 32 knowledge items on a five-point Likert scale. Those items were assigned to TK (5), TPK (11), TCK (8), and AI-integrated TPACK (8); attitude was one statement, the belief that generative AI can make one a more innovative and reflective teacher. Every knowledge item is a first-person self-report of the "I can" or "I know" type, measuring perceived confidence rather than demonstrated competence. Sampling adequacy was high (KMO = 0.988). A supplementary check trained five algorithms on the three antecedent composites; linear regression performed best (test R² = 0.884), suggesting linear relationships.

## Where the four domains blur

The most consequential result is a validity failure, not a path coefficient. Although the model fits and every loading is significant, HTMT values of 0.92 to 0.99 exceed the conservative 0.85 threshold, and Fornell–Larcker agrees: squared correlations of 0.71 to 0.89 exceed average variance extracted of 0.69 to 0.75 in every pair. Exploratory factor analysis had already found one eigenvalue of 22.25, roughly 27 times the second, with item correlations above 0.60 and no visible clustering into four groups. The antecedents are nearly collinear (r = 0.87 to 0.94), producing the VIFs above. That explains the sign reversal in which TK, correlated with TPACK at r = 0.84, takes a negative direct path, and why the TPK–TCK ranking shifts by method: a composite regression gives TPK β = 0.51 against TCK 0.43. The authors insist TCK is not demonstrably the strongest predictor.

## From integrated knowledge to attitudes

The attitude path is the paper's cleanest finding and its most limited one. Integrated TPACK predicted the single attitude item at β = 0.75 (p < 0.001), accounting for R² = 0.563 of its variance. The bivariate pattern is less flattering: TK (0.686), TPK (0.700), TCK (0.724), and TPACK (0.731) correlate with attitude within hundredths of one another, and the gap between TPACK and TCK is not significant (p = 0.40), though TPACK does exceed TK and TPK. The authors therefore cannot claim integrated TPACK is uniquely associated with positive beliefs. Group comparisons are modest too: women scored higher on TPK, TCK, and TPACK before correction, but no gender difference survived Holm adjustment, while academic year was associated with all five constructs at small-to-medium effect sizes.

## What this means for practice

- **Instructors.** Build AI tasks into subject-matter methods courses — designing content, generating exercises, evaluating disciplinary output — because the direct path from generic technological knowledge was not significant.
- **Faculty developers.** Stop reporting TPACK subscales as separate competences when HTMT exceeds 0.85; here the four scales behaved as one general factor.
- **Faculty developers.** Supplement self-report inventories with performance tasks such as lesson design or prompt-and-revise exercises, since means of 4.26 to 4.31 describe confidence, not competence.
- **Administrators.** Treat uniformly high self-ratings as a signal to audit the instrument, not as evidence a cohort is ready to teach with AI.
- **Researchers.** Model technological knowledge as partly indirect through TPK and pair structural models with multi-item attitude scales.

## Limitations

- The sample is 92.7% female and 69.3% second-year students, with only 72 men, so gender comparisons rest on a small, imprecise group.
- Attitude was one item, which cannot capture perceived usefulness, trust, or concerns, and no reliability indices could be computed for it.
- With discriminant validity unsupported, individual path coefficients — including the non-significant TK path — reflect small unique portions of shared variance.
- The design is cross-sectional and correlational with a convenience sample from two countries; it cannot support causal claims.

## Citation
Khalil, H., Al Malki, M., Abdel-Maksoud, N. F., & Yousef, A. M. F. (2026). [The Role of Integrated TPACK in Empowering Pre-Service Teachers and Shaping Their Attitudes Toward Generative AI in Teaching](https://doi.org/10.3390/educsci16111855). Education Sciences, 16(11), 1855.
