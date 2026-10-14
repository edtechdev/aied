---
title: "Machine–human agreement in marking undergraduate assignments is specific to model, prompt and institution"
created: "2026-10-14T09:30:00-04:00"
updated: "2026-10-14T09:30:00-04:00"
type: article
sources: ['raw/papers/machine-human-marking-agreement-institutions-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
level: [higher ed]
audience: [instructors, researchers]
assessment: [automated-assessment, assessment-validity]
technology: [llm]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-14"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This study tested whether frontier [[llm|large language models]] can mark authentic university coursework by scoring 761 [[higher-ed|undergraduate]] psychology assignments from three UK universities with GPT-5.4, Claude Opus 4.6 and Gemini 3 Flash under a fully crossed 3 × 3 × 3 prompt design. Agreement was only moderate and highly uneven: the strongest method reached a quadratic weighted kappa of 0.616 at Cambridge but only 0.345 at Manchester Met, and no single model or prompt was optimal across institutions. Every model compressed marks toward a common central tendency, overvaluing the weakest assignments and undervaluing the strongest, and because those errors were correlated, combining models did not remove them. Machine marks were also more strongly conditioned than human marks on surface linguistic features. The authors conclude that agreement is a local product of a particular model, prompt and cohort rather than a transferable evaluative capacity, so [[assessment-validity|validating]] a system in one context overstates readiness for [[automated-assessment|deployment]].

## Key Findings

1. Across 761 psychology assignments from the University of Cambridge, Manchester Metropolitan University and the University of Nottingham, the best method's quadratic weighted kappa fell from 0.616 at Cambridge to 0.420 at Nottingham and 0.345 at Manchester Met, with no model dominant everywhere.
2. GPT-5.4 led at Cambridge (QWK = 0.609; ρ = 0.671) but was weakest at Manchester Met on rank and chance-corrected agreement; Claude Opus 4.6 led there and at Nottingham on rank agreement; Gemini 3 Flash was least biased at every institution.
3. Prompt choice moved a single model's calibration error by up to a third of a degree classification: Gemini spanned RMSEs of 8.6 to 11.9 grade points, Claude 10.5 to 11.7 and GPT only 8.8 to 9.5.
4. Combining the three models did not reliably improve accuracy: the inverse-RMSE weighted-mean ensemble was statistically indistinguishable from the best individual model at every institution (∆QWK = −0.002 at Cambridge).
5. Every model compressed the grade scale (regression slopes 0.25 to 0.30), so a 10-point difference between two assignments translated into only 2.5–3 points, and signed error correlated with the human mark at r = −0.79 to −0.83.
6. Errors were shared across three independently trained model families (partial r = 0.74–0.78 after partialling out the human mark; same-direction errors on 63.4% of assignments, 3.4 times the independence expectation).
7. Machine marks showed significant associations with 20 of 33 linguistic features against 5 for human marks, and sentence complexity and readability predicted the ensemble mark (b = 0.34, p < .001) but not the human mark (b = 0.01, p = .954).

## Scoring real coursework rather than public corpora

Before treating any agreement figure as a readiness signal, it is worth being precise about what was marked. The authors collected 934 marked undergraduate psychology assignments from the University of Cambridge (n = 248), Manchester Metropolitan University (n = 461) and the University of Nottingham (n = 225), then excluded 172 short-form items a priori as a different [[assessment|assessment genre]] and one assignment lost to an API error, leaving 761 spanning 50 modules and 87 distinct assignments. Only fixed numbers on the percentage scale are permitted under each institution's scheme (17 permitted marks at Cambridge and Nottingham, 32 at Manchester Met), which makes "exact agreement" a far stricter test than the label suggests. Critically, each assignment carries a single moderated institutional mark, so human–human agreement — the [[benchmark]] against which machine marks are judged — had to be imported from published studies (correlations of 0.47–0.93) rather than measured inside the corpus. The models ran zero-shot through native APIs at temperature 0, matching how staff currently prompt general-purpose systems rather than an [[automated-essay-scoring|automated essay scoring system]] supervised on local exemplars.

## Prompt design is a governance decision, not a settings tweak

The most policy-relevant result is that accuracy was a property of the model–prompt pairing rather than of the marking task. Repeated-measures ANOVA attributed the largest share of variation to model identity (F(2, 290) = 19.9, p = 8 × 10−9, ηp² = .121), and the model × criterion specificity interaction (ηp² = .064) exceeded the main effect of criterion specificity itself (.053): the rubric helped or hurt depending on which model read it. Sensitivities diverged sharply. Gemini was most sensitive to criterion specificity (corrected p = 1 × 10−4, ηp² = .076), Claude to scoring strategy (corrected p = 2 × 10−4, ηp² = .072), and GPT's largest effect did not survive Holm correction. Grade base rates improved Claude and Gemini (both corrected p = .024) but not GPT, whose marks they pushed substantially further downward (signed error −0.90). The full institution rubric worsened Gemini's accuracy by 1.26 points and helped no model, and the explicit [[bias-mitigation|debiasing]] instruction improved none. No optimum transferred across institutions (Spearman ρ: −.61 to +.53, median ≈ 0), so a prompt tuned in one program licenses nothing in another.

## Compression, and the marks that decide degrees

Compression is the finding most likely to reach individual students, and it behaves less like noise than like a fixed offset. Fitted machine-on-human slopes of 0.30 (Claude), 0.27 (Gemini) and 0.25 (GPT) mean the models barely used the ends of the scale, and the resulting error was almost predictable from position alone: signed error correlated with the human mark at r = −0.79 to −0.83, so where an assignment sat explained 62–69% of the error variance. The damage concentrates at the degree-class boundaries that decide outcomes. Assignments awarded 60–64 were scored with little bias (−1.7 points; MAE = 3.8), but marks in the 50s were over-marked by +2.9 points and those awarded 65–69 under-marked by −3.9, while the tails were missed by more than 11 points on average (+11.6 below 50; −11.9 for First-class assignments, with MAE exceeding 11 points at both extremes). A simple additive adjustment can remove the shared offset — transferring a +3.9-point correction raised Claude's pooled QWK from 0.393 to 0.459 while cutting MAE from 7.39 to 6.71 — but the affine rescaling that restores the spread of the marks bought ordinal agreement at the cost of average error, and fixed neither tail.

## Two assessors can agree and still weigh different evidence

Agreement is a population-level statistic; evidence use is not, and the linguistic analysis makes the gap concrete. Human marks correlated reliably with just five of 33 extracted features, concentrated in lexical sophistication, readability and writing error, while the weighted-ensemble machine mark showed significant associations with 20 of the 33. The asymmetry was also context-dependent: the ensemble exceeded human correlations in magnitude for 29 of 33 features at Manchester Met and 27 of 33 at Cambridge, but only 14 of 33 at Nottingham. After principal component analysis retained six components (79.8% of feature variance), assignment length and information density predicted both marks, whereas sentence complexity and readability predicted the ensemble mark (b = 0.34, p < .001) but carried no detectable weight in human marks (b = 0.01, p = .954); components plus institution explained 38.5% of variance in ensemble marks against 11.1% in human marks. Because surface linguistic features covary with language background and educational history, systematically rewarding them [[equity-in-ai-education|redistributes marks]] along lines unrelated to attainment. High consensus among models did not signal correctness either: inter-model agreement was highest at Manchester Met (ICC = 0.92), where accuracy against human markers was weakest.

## What this means for practice

- **Instructors.** Treat a machine mark as a claim to audit per cohort rather than a shortcut: the best-performing model changed by institution and by metric, so no default model can be chosen in advance for your program.
- **Instructors.** Check the tails personally when a mark sits near a degree-class boundary — machine marks over-marked work in the 50s by +2.9 points, under-marked 65–69 work by −3.9 and missed First-class work by −11.9 points on average.
- **Instructors.** Do not treat a second model as independent verification: all three models erred in the same direction on 63.4% of assignments, so panels can entrench a shared compression behind the appearance of corroboration.
- **Researchers.** Design for re-validation rather than one-off validation: the study evaluated specific model versions, and the authors note that vendor updates can alter marking behavior silently.
- **Administrators.** Require local evidence built on your own assessments and marking practices before any deployment, because only around one-eighth of the largest cross-institutional accuracy gap was attributable to grade composition and validation conducted elsewhere licenses nothing locally.

## Limitations

- The corpus is psychology assignments from three UK universities; other disciplines, assessment genres and grading systems may yield different profiles.
- Each assignment carries a single moderated institutional mark rather than multiple independent re-marks, so human–human agreement is estimated from external evidence and criterion noise cannot be fully separated from true machine–human divergence.
- The study evaluated zero-shot marking within a finite, systematically crossed prompt space; fine-tuned or exemplar-calibrated systems may behave differently and merit the same scrutiny.
- Findings attach to the specific model versions accessed at a fixed time in March 2026 (GPT-5.4, Claude Opus 4.6, Gemini 3 Flash), a generation that vendor updates can silently change.
- The feature analysis is correlational: it establishes that machine marks are conditioned on surface properties human marks discount, not the mechanism by which that occurs.

## Citation

Corsi, G., Abo-Tabik, M., Benn, Y., Thorpe Apreutesei, G., Tibon, R., Marcoci, A., & Talmi, D. (2026). [*Machine–human agreement in marking undergraduate assignments is specific to model, prompt and institution*](https://arxiv.org/abs/2610.18019). arXiv preprint arXiv:2610.18019.
