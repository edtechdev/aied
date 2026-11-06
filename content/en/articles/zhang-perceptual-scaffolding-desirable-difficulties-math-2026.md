---
title: "Using Bayesian Knowledge Tracing to Evaluate Perceptual Scaffolding and Desirable Difficulties in a Math Intervention"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/zhang-perceptual-scaffolding-desirable-difficulties-math-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [instructors, educational technology developers, researchers]
level: [k 12]
discipline: [math education]
pedagogy: [desirable-difficulties, scaffolding]
technology: [knowledge-tracing, visualization]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Zhang, Pradhan, Lee, Pei, Sales and Ottmar fit a cue-condition-specific [[knowledge-tracing|Bayesian knowledge tracing]] (BKT) model to an open dataset of 688 U.S. sixth graders solving order-of-operations problems, testing how congruent and incongruent spacing and color cues embedded in the [[visualization|training materials]] shifted guessing, slipping, learning and forgetting. Congruent cues raised guessing and lowered slipping — immediate scaffolding — while incongruent color cues impaired immediate performance yet produced the highest learning rate and the lowest forgetting rate, the signature of a [[desirable-difficulties|desirable difficulty]]. BKT-based classifications of the cues aligned with behavior-based classifications for five of eight cue conditions, supporting the framework as a lens on the assistance dilemma of perceptual [[scaffolding|support]] in math education.

## Key Findings

1. **Sample and data.** Of 1,110 recruited U.S. sixth graders, 688 remained after excluding 413 who did not complete all focal tasks and 9 who entered random answers, contributing 19,952 data points across 29 training problems under nine between-subject cue conditions (congruent, incongruent, or neutral spacing crossed with congruent, incongruent, or neutral color).
2. **Congruent cues scaffolded immediate performance.** Congruent spacing congruent color (CSCC, 95% CI [0.0114, 0.129]) and neutral spacing congruent color (NSCC, 95% CI [0.0918, 0.201]) significantly increased the guessing rate, while CSCC (95% CI [-0.109, -0.0155]), congruent spacing neutral color (CSNC, 95% CI [-0.126, -0.0060]) and NSCC (95% CI [-0.144, -0.0507]) significantly reduced the slipping rate.
3. **Incongruent color acted as a desirable difficulty.** Neutral spacing incongruent color (NSIC) significantly reduced guessing (95% CI [-0.147, -0.0385]) and showed the highest learning rate (0.0379) and the lowest forgetting rate (0.0054) of all nine conditions.
4. **The retention advantage was close to, but not beyond, statistical significance.** The learning (95% CI [-0.0043, 0.0382]) and forgetting (95% CI [-0.0300, 0.0027]) differences between NSIC and the no-cue condition (NSNC) only approached significance.
5. **BKT and behavior agreed on most cues.** Five of the eight cue conditions were classified identically by the BKT-based P(G)-P(T) frame and the behavioral measures; CSNC, NSCC and CSCC were consistently scaffolds, and incongruent spacing only (ISNC) and NSIC were consistently desirable difficulties, while the doubly mixed conditions (CSIC, ISCC, ISIC) disagreed across frames.
6. **Behavioral measures corroborated the BKT pattern.** Mixed-effects regressions outperformed null models for intervention (χ2(9) = 290, p < .001), post-test (χ2(9) = 181.35, p < .001) and delayed post-test accuracy (χ2(9) = 201.76, p < .001), with CSNC the only condition ahead of the no-cue reference at post-test (B = 0.33, p = .011) and delayed post-test (B = 0.30, p = .015).

## Congruent Cues Scaffold the Moment

The intervention embedded spacing and color cues around the operators of three-operator, four-operand expressions so that the visual highlight either matched operation precedence (congruent), mismatched it (incongruent), or was absent (neutral). Students solved all 29 training problems under their assigned condition with immediate correctness feedback and worked examples, and the authors trained a BKT variant whose guess, slip, learn and forget parameters were conditioned on cue condition via StanBKT, using MCMC with 8 chains and 5,000 iterations per chain.

The guessing and slipping results distinguish the two ways congruent cues help. Higher guessing means students who had not mastered the operational rules could still land on the correct high-precedence suboperation from the visual salience of the highlight; lower slipping means students who knew the rules made fewer careless errors. Both moved in the scaffold direction for CSCC, CSNC and NSCC. The model's prediction performance was comparable across conditions — accuracy 0.691 to 0.708, F1-score 0.724 to 0.750, RMSE 0.443 to 0.450 — so the parameter differences sit on models of roughly equal quality.

The behavioral appendix reproduces the same rank order: intervention accuracy rose significantly for NSCC (B = 0.30, p = .006), ISCC (B = 0.27, p = .013), CSNC (B = 0.39, p = .001) and CSCC (B = 0.34, p = .001) relative to the no-cue condition, with pretest accuracy as a covariate and teacher as a random effect.

## Incongruent Color Cues as Desirable Difficulties

The long-term results did not simply mirror the immediate ones. All cue conditions except congruent spacing incongruent color (CSIC) showed a numerically higher learning rate than the no-cue condition (NSNC, 0.0210), but NSIC stood apart with a learning rate of 0.0379 against 0.0341 for CSNC, the second highest. NSIC also showed the lowest forgetting rate in the study (0.0054), roughly a third of the no-cue rate (0.0176), even though its guessing rate was the lowest of all nine conditions (0.190 against 0.429 for NSCC, the highest).

The spacing-versus-color dissociation is the paper's sharpest interpretive claim. Incongruent color only (NSIC) produced the low forgetting rate, while incongruent spacing only (ISNC) produced an elevated forgetting rate (0.0288), suggesting students processed misleading color as a productive challenge but merely found misleading spacing confusing. The authors caution that the NSIC differences, while close, were not statistically significant, and that the desirable-difficulty reading of incongruent color needs replication in a study that manipulates color cues directly.

## Aligning BKT with Behavioral Measures

The second research goal was methodological: can BKT parameters stand in for the behavioral pretest-intervention-posttest cycle? The authors classified each cue condition into one of the assistance-dilemma categories — scaffold, crutch, desirable difficulty, undesirable difficulty — using the BKT parameters and again using intervention, post-test and delayed post-test accuracy, then compared the two classifications. The P(G)-P(T) frame matched the behavioral classification for five of the eight cue conditions, validating that guessing and learning parameters track the two outcomes they are meant to index. The P(S)-P(F) frame compensated for part of the disagreement, correctly classifying ISCC and ISIC as scaffolds, which the P(G)-P(T) frame had missed; the mixed conditions were the ones where the model most needs an account of how learners weight spacing against color. The code and data are shared at osf.io/q8kn6, and the work was supported by NSF Grant No. 2300764.

## What this means for practice

- **Design math materials by the two perceptual levers, not one.** Congruent spacing around high-order operators scaffolded both immediate solving and, in the CSNC condition, later retention (learning rate 0.0341), while incongruent color traded immediate accuracy for the highest learning rate (0.0379) and lowest forgetting rate (0.0054) — a textbook desirable-difficulty profile worth exploiting deliberately in practice sets.
- **Expect an immediate-performance dip when introducing misleading cues.** NSIC's guessing rate fell to 0.190, so teachers and platforms that adopt incongruent color to build retention should expect lower in-intervention scores and should not read that dip as failure of learning (the behavioral post-test model showed learning only in CSNC, B = 0.33, p = .011).
- **Do not treat the retention benefit as established yet.** The learning and forgetting differences behind the desirable-difficulty claim only approached significance, so adoption should be framed as promising design rather than confirmed effect.
- **Treat this as one more reason to check the visual presentation of math in digital tools.** The intervention was fully online (Pavlovia) with feedback and worked examples, and the cue effect showed up in an open dataset — perceptual formatting is a measurable design variable in the same systems that host AI tutoring.

## Limitations

- The analysis is a secondary analysis of an open dataset from a larger randomized study (Ottmar et al., 2025), so the random assignment belongs to the original experiment and the cleaning and modeling decisions here are post hoc; the paper's BKT-specific claims were not preregistered.
- The final sample is 688 students spread across nine conditions, roughly 70-80 per condition, which the authors flag as small for training cue-condition-specific models and insufficient for deploying BKT-based adaptive arithmetic systems.
- The cue-specific BKT model performed only moderately (about 0.7 accuracy per condition), and the mixed incongruent conditions (CSIC, ISCC, ISIC) showed classification disagreement between frames, which the authors attribute to unmodeled individual differences in attending to spacing versus color.
- The BKT model assumes a single knowledge component covering all order-of-operations problems, an intentional simplification that departs from most prior BKT applications.
- The desirable-difficulty finding rests on parameter differences that were close to, but not beyond, conventional significance thresholds, and the RQ2 classification turns continuous estimates into binary higher-or-lower categories relative to one reference condition (NSNC).

## Citation

Zhang, P., Pradhan, S., Lee, M., Pei, Y., Sales, A. C., & Ottmar, E. (2026). Using Bayesian Knowledge Tracing to Evaluate Perceptual Scaffolding and Desirable Difficulties in a Math Intervention. *Journal of Educational Data Mining*, 18(2), 88-114.
