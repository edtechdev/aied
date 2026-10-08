---
title: "AI competence raises AI anxiety indirectly, by awakening ethical awareness without a way to act on it"
created: "2026-10-08T10:20:00-04:00"
updated: "2026-10-08T10:20:00-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [anxiety-and-stress, self-efficacy, motivation]
technology: [generative-ai]
ethics: [ethics, equity-in-ai-education, trust-calibration]
methods: [quantitative-research]
research_method: [structural equation modeling, survey]
discipline: [legal education, cs education]
level: [higher ed, undergraduate]
audience: [instructors, researchers, administrators]
page_kind: [evaluation]
sources: ['raw/papers/mu-ai-competence-ethical-awareness-anxiety-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-08"
    agent: hermes-agent
---

> **Synthesis:** Mu, Wu, Xie and Wu surveyed 584 undergraduates — 245 in [[cs-education|computer science]] and 339 in law — at a law-dominant university in western China that offers no AI literacy curriculum, so whatever AI competence and ethical awareness these students have came from self-study. In a two-stage analysis, partial least squares structural equation modeling showed that AI competence did **not** reduce [[anxiety-and-stress|AI anxiety]] directly (β = 0.056, p = .362); instead it raised AI ethical awareness (β = 0.644, p < .001), which in turn raised AI anxiety (β = 0.439, p < .001) — an indirect-only mediation with a specific indirect effect of β = 0.283 (p < .001). The authors had hypothesized the opposite sign for the ethics-to-anxiety path, so the finding that ethical awareness magnifies anxiety rather than buffering it is the study's central result, and they read it as awakening without a coping framework: students recognize algorithmic transparency, privacy and misuse as problems and nobody teaches them how those problems are answered in practice. An artificial [[machine-learning|neural network]] on the same constructs put transparency first among predictors for both learning and job-replacement anxiety, and a multi-group test found no path difference between the law and computer science students.

## Key Findings

1. **Competence does not soothe anxiety by itself.** The direct path from AI competence to AI anxiety was non-significant (β = 0.056, p = .362), so better self-taught AI skills did not make these students calmer about AI.
2. **Competence builds ethical awareness, and that is the operative path.** AI competence strongly predicted AI ethical awareness (β = 0.644, p < .001; R² = .414, so competence explained 41.4% of the variance in ethical awareness).
3. **Ethical awareness amplified anxiety, contrary to the hypothesis.** The ethics-to-anxiety path was positive and significant (β = 0.439, p < .001) where the authors had predicted a negative one, and the indirect effect through it was the only route competence had to anxiety (β = 0.283, p < .001, 5,000 bootstrap resamples) — the pattern classified as indirect-only mediation.
4. **Together the constructs explained a medium share of anxiety variance** (R² = .228), which the authors say leaves room for factors their model does not include.
5. **The neural network ranked transparency first for both anxieties.** Predictor importance in the AI learning anxiety model ran transparency (.387; 98.3% normalized), non-maleficence (.181; 51.0%), privacy (.126; 34.2%), responsibility (.115; 32.3%), task decomposition (.096; 27.7%) and AI foundational knowledge (.096; 25.5%). For job-replacement anxiety the order was transparency (.375; 98.5%), privacy (.210; 58.1%), task decomposition (.121; 33.0%), non-maleficence (.113; 29.4%), foundational knowledge (.097; 26.7%) and responsibility (.084; 22.3%).
6. **The mechanism was identical across disciplines.** Law students (β = 0.627) and computer science students (β = 0.649) did not differ on the competence-to-ethics path, or on any other path: permutation and Henseler multi-group p-values ran from .473 to .735, so the discipline moderation hypothesis was not supported.
7. **The sample is a study of self-study.** 87.16% of respondents used AI tools at least occasionally — 26.71% daily — mostly for information retrieval, assignment writing, code generation and translation, largely with DeepSeek and Doubao, and the university offers no formal AI literacy curriculum.
8. **[[legal-education|Legal education]] is proposed as the missing coping framework.** Because law foregrounds institutional regulation, procedural justice and rights-based remedies rather than individual moral responsibility, the authors argue that embedding AI ethics in existing legal curricula (there is already a compulsory "Ideology, Morality, and Rule of Law" course) turns abstract ethical warnings into analysable governance problems, and does so without new infrastructure.

## The path runs through ethics, not around it

The reversal is the point. Mainstream accounts treat ethical awareness as a component of AI literacy that protects against anxiety; here it behaved as an amplifier, and the authors trace that to the absence of a framework for interpreting what students now notice. They cite Laine et al. (2025) on ethical sensitivity heightening negative affect and Kim et al. (2026) on the need to study AI ethics education separately, and reach a conclusion that runs against the usual literacy logic: raising ethical awareness without teaching governance and coping methods can deepen the very anxiety the intervention was meant to relieve. A three-wave study of 614 [[k-12|middle school]] students (Shen et al., 2026) found [[ethics|ethical considerations]] predicting perceived AI knowledge while the reverse did not, which the authors read as consistent with their own directional claim.

## What the neural network adds to the model

The second stage is what moves the finding from "anxiety is higher" to "here is which concern to teach". A structural model can only report the aggregate effect of a four-dimension construct; the ANN ranked the dimensions, and transparency dominated both outcomes by a wide margin while privacy outranked responsibility for job anxiety and non-maleficence outranked it for learning anxiety. Predictive stability was adequate in both models — average training and testing RMSE were 0.508 and 0.513 for learning anxiety and 0.549 and 0.568 for job-replacement anxiety — and the authors note the small train-test gap as evidence against overfitting. The specific proposal follows the ranking: teach transparency first.

## What this means for practice

- **Instructors and curriculum designers.** Treat ethics content as a coping framework rather than a warning list: pair each concern a student will recognize (transparency, privacy, misuse, responsibility) with how it is addressed institutionally, or the awareness itself becomes the stressor.
- **Administrators in resource-constrained institutions.** The study's setting is the argument for its remedy — using an existing compulsory course or legal-studies capacity costs less than standing up an AI literacy curriculum, which the authors contrast with the mainstream intervention model.
- **Instructors who teach AI skills.** Expect competence training alone to leave anxiety untouched: in this model the competence-to-anxiety path was flat, and the effect arrived only after ethical awareness was raised.
- **Learning designers building AI literacy modules.** Sequence governance before or alongside ethical sensitivity, and design an action students can take on each concern, since the four dimensions ranked by importance are all about how AI is governed rather than how it works.
- **Researchers.** Note the direction problem the authors flag: a cross-sectional survey cannot rule out that anxious students attend more to AI ethics, which is why they call for longitudinal work and interviews.

## Limitations

- **The design cannot establish the causal direction.** The authors state plainly that a cross-sectional survey precludes causal inference, and offer the specific alternative — students who are already more anxious may pay more attention to AI ethical issues.
- **One law-dominant university in western China.** Over 80% of its undergraduates are in law and related non-STEM majors and it teaches no AI literacy, so the authors call for replication before extending the conclusions to other resource-constrained institutions.
- **Single-source [[self-report-measures|self-report]].** Competence, ethical awareness and anxiety were all measured by questionnaire, with 5-point Likert items translated and back-translated into Chinese, and the study captured no teacher or interview data.
- **The headline result was not the hypothesis.** H3 predicted that ethical awareness would lower anxiety; the opposite sign was observed, so it should be read as an unexpected association needing replication rather than a confirmed mechanism.
- **The model explains part of anxiety, and the remedy is untested.** R² = .228 for anxiety leaves most variance unexplained, and the legal-education module is a proposal the study did not implement or evaluate.
- **Fit indices were acceptable rather than strong.** χ²/df = 3.889 (χ² = 1761.940, df = 453), RMSEA = .070, CFI = .932, TLI = .925, SRMR = .078; reliability was good (composite reliability .738 to .954; Cronbach's alpha .733 to .957), but the design remains a correlational snapshot.

## Citation

Mu, Y., Wu, J. G., Xie, W., & Wu, Y. (2026). [Modeling the Relationships Between University Students' AI Competence, AI Ethical Awareness, and AI Anxiety: A Dual-Stage PLS-SEM and ANN Analysis](https://doi.org/10.1016/j.caeai.2026.100687). *Computers and Education: Artificial Intelligence*. Advance online publication.