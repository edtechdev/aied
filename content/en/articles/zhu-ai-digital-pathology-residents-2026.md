---
title: "AI-assisted digital pathology improves diagnostic performance and reduces experience-related performance gaps in pathology residents interpreting prostate biopsies"
published: "2026-11-06"
created: "2026-11-06T09:05:00-05:00"
updated: "2026-11-06T09:05:00-05:00"
type: article
sources: ['raw/papers/zhu-ai-digital-pathology-residents-2026.md']
source_url: "https://doi.org/10.1186/s12909-026-10742-5"
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [medical education]
level: [graduate, higher ed]
audience: [medical educators]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4-flash-0731
    role: drafting
    date: "2026-11-06"
    agent: hermes-agent
source_depth: full text
technology: [machine-learning, human-in-the-loop-ai]
ethics: [explainable-ai]
methods: [quantitative-research]
---
> **Synthesis:** AI decision support is entering [[medical-education|pathology residency training]], yet evidence on its value as a decision-support tool for trainees remains limited. In this prospective within-subject experiment, 15 residents (PGY-1 to PGY-3) reviewed 186 prostate core biopsy whole-slide images (104 adenocarcinomas, 75 benign, 7 atypical small acinar proliferations) unaided, then with AI-assisted review supplying Gleason pattern annotations and tumor region highlighting. Observed accuracy among less experienced residents rose from 62.3% to 75.1% (+12.9 percentage points; 95% CI 7.8 to 18.7) and among experienced residents from 77.9% to 83.0% (+5.1 pp; 95% CI 3.2 to 7.5), narrowing the experience gap between groups. The benefit concentrated on less experienced readers and more difficult slides, illustrating [[differential-effects-across-learner-groups|differential effects across learner groups]] in [[human-in-the-loop-ai|human-in-the-loop]] diagnostic practice; meanwhile, the 3.9% reversal of correct diagnoses flags [[automation-bias|automation bias]] risks, a cost the authors weigh against the 39% of unaided errors corrected by the AI display.

## Key Findings
1. In a prospective within-subject study, 15 pathology residents (PGY-1 to PGY-3) reviewed 186 prostate core biopsy whole-slide images (104 adenocarcinomas, 75 benign, 7 atypical small acinar proliferations) unaided, then with AI-assisted review.
2. The platform provided Gleason pattern annotations and tumor region highlighting; Bayesian hierarchical mixed-effects models were fitted by Markov chain Monte Carlo (MCMC).
3. Less experienced residents' observed accuracy rose from 62.3% to 75.1% (+12.9 percentage points; 95% CI 7.8 to 18.7); experienced residents from 77.9% to 83.0% (+5.1 pp; 95% CI 3.2 to 7.5).
4. AI increased the odds of correct diagnosis (OR 2.39; 95% CrI 1.94 to 2.96), cancer detection (OR 2.55; 1.83 to 3.62), and correct benign classification (OR 2.76; 2.04 to 3.74).
5. The AI-by-experience interaction showed a smaller relative benefit for experienced residents on accuracy (OR 0.65; 0.48 to 0.87) and specificity (OR 0.49; 0.32 to 0.74), but not sensitivity (OR 0.82; 0.51 to 1.37).
6. AI display converted 307 of 786 unaided errors (39%) into correct diagnoses and 75 of 1,913 correct unaided diagnoses (3.9%) into errors.
7. In exploratory analyses, AI benefit was larger on more difficult slides, consistent with ceiling effects on easy slides.

## AI decision support for residents in training

Digital pathology and [[machine-learning|machine learning]] are reshaping practice, but the evidence base centers on practicing pathologists, leaving open whether AI support helps residents and whether its value varies with experience. This within-subject experiment used each resident as their own control. The AI component was an integrated digital pathology platform combining slide management with models for the detection and Gleason grading of prostate cancer, providing real-time [[explainable-ai|annotations and highlighting]] rather than a diagnosis to accept. Residents trained in the platform, then reviewed slides first without AI and then with the AI overlay available.

## A within-subject design with Bayesian analysis

The 15 residents came from United States training programs — five PGY-1, five PGY-2, five PGY-3 — seven less experienced and eight experienced in genitourinary (GU) pathology, with 5,398 resident-slide responses analyzed (2,699 per condition). Bayesian hierarchical mixed-effects models fitted by MCMC modeled residents and slides as random effects, with AI assistance, experience, and their interaction as fixed effects; an ability-weighted difficulty score derived from unaided performance was added in exploratory models. The fixed unaided-then-assisted order means the assisted read is always also a second look.

## Accuracy gains, odds ratios, and error conversion

Across all residents, accuracy rose from 70.9% (1913/2699) to 79.5% (2145/2699); every resident improved. The largest gains belonged to less experienced residents (+12.9 pp accuracy; 95% CI 7.8 to 18.7), and the predicted experience-related sensitivity gap narrowed from 16.0 pp to 7.4 pp, although the credible interval for the reduction included zero. AI raised the odds of correct diagnosis (OR 2.39), cancer detection (OR 2.55), and correct benign classification (OR 2.76); interaction effects (accuracy OR 0.65; specificity OR 0.49) confined the relative benefit to less experienced readers, while sensitivity was uniform (OR 0.82). Transition analysis showed AI corrected 39% of unaided errors but reversed 3.9% of correct diagnoses — the signature of [[automation-bias|automation bias]].

## Decision support versus educational value

The authors draw a line between performance and learning. This study measured diagnostic performance while AI output was displayed; it did not measure whether residents subsequently diagnosed slides unaided more accurately, retained what they encountered, or developed competence faster, so the educational value of AI-assisted review remains a hypothesis for longitudinal, counterbalanced studies. The fixed reading order also confounds AI assistance with second-look effects; the authors regard the estimates as upper bounds. Training programs, they argue, should teach residents to treat AI annotations as a prompt for re-examination rather than as a verdict, and reserve AI support for early training and challenging cases.

## What this means for practice

- **Instructors.** Teach residents to treat AI annotations as a prompt for re-examination rather than a verdict; on the 8 slides where AI output was wrong, 21% of correct unaided diagnoses were abandoned (41% among less experienced residents).
- **Program directors.** Deploy AI decision support where uncertainty is highest: less experienced residents and more difficult slides gained the most, and the specificity gap narrowed from 22.3 to 5.9 percentage points in the difficulty-adjusted model.
- **Researchers.** Test whether AI-assisted review accelerates learning with counterbalanced crossover designs and delayed unaided re-testing; only assisted performance was measured.

## Limitations

- The reading order was fixed, with each slide reviewed unaided 1-2 days before AI-assisted review and no counterbalancing, so AI assistance is confounded with second-look effects and the estimates are upper bounds.
- Only 15 residents from United States training programs, one of whom completed half of the reading rounds, limited the precision of between-group comparisons.
- Learning and retention were not measured; educational value remains a hypothesis for longitudinal, counterbalanced studies.
- Grading accuracy was not an endpoint; residents' Gleason scores were not recorded, so no conclusion about AI-assisted grading follows.
- Only 7 atypical small acinar proliferation slides precluded dedicated assessment of that category, and immunohistochemistry was withheld to standardize interpretation.

## Citation

Zhu, M., Shi, W., Jin, T., et al. (2026). [*AI-assisted digital pathology improves diagnostic performance and reduces experience-related performance gaps in pathology residents interpreting prostate biopsies*](https://doi.org/10.1186/s12909-026-10742-5). BMC Medical Education.
