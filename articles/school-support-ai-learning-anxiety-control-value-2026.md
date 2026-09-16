---
title: "Multidimensional perceived school support and AI learning anxiety among [[higher-ed|university students]]: the mediating roles of control-value appraisals"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-16T13:40:00-04:00"
type: article
tags: [ai-anxiety-and-stress, self-efficacy, motivation, higher-ed, student-experience, technology-acceptance-model, well-being]
audience: [researchers, instructors, administrators]
research_method: [structural equation modeling, survey]
sources: ['raw/papers/10.3389_fpsyg.2026.1951992.md']
confidence: high
---

> **Synthesis:** Using control-value theory (CVT), this SEM study of 547 Chinese university undergraduates found that multidimensional perceived school support was associated with lower [[ai-anxiety-and-stress|AI learning anxiety]], chiefly by strengthening students' [[self-efficacy|AI learning self-efficacy]] and [[technology-acceptance-model|perceived usefulness]] — the [[motivation|control and value appraisals]] central to CVT. The two appraisal paths accounted for 69.5% of the total standardized association, framing AI learning anxiety as an achievement-related emotion shaped by institutional, not just individual, conditions.

## Key Findings

- **Perceived school support directly predicted lower AI learning anxiety** (β = −0.160, p < 0.01), supporting H1, and explained 62.3% (R²) of the variance in anxiety jointly with the two appraisals.
- **Support raised both control-value appraisals:** it predicted higher AI learning self-efficacy (β = 0.469, p < 0.01) and higher AI perceived usefulness (β = 0.223, p < 0.01).
- **Self-efficacy and perceived usefulness both reduced anxiety** (β = −0.408 and β = −0.345, p < 0.01), and self-efficacy positively shaped perceived usefulness (β = 0.587, p < 0.01).
- **Indirect paths dominated the total effect:** the indirect association (−0.364, standardized) accounted for 69.5% of the total (−0.524), versus only 30.5% direct (−0.160).
- **All three specific indirect paths were significant:** through self-efficacy alone (−0.207), through perceived usefulness alone (−0.083), and the sequential self-efficacy → usefulness path (−0.103), all with 95% bias-corrected CIs excluding zero.
- **Support dimensions were not independently driving the effects:** in a first-order model only informational support → self-efficacy retained a significant bootstrap path (β = 0.288, p = 0.020), so support mattered mostly as an overall perceived resource.
- **ANN cross-validation confirmed the appraisals as the drivers:** self-efficacy (relative importance 100.0) and perceived usefulness (63.6) were the most stable predictors of anxiety; among support dimensions informational support led (21.4) but with unstable importance.

## Study Design & Method

Data came from a two-wave online survey (Wenjuanxing) separated by ~6 weeks, yielding 547 valid undergraduates (86.3% effective response rate; 59.6% male, 68.6% STEAM majors; 76.6% frequent or daily AI users). Instruments covered perceived school support (13 items across emotional, informational, instrumental dimensions, adapted from an organizational-support scale), AI learning self-efficacy (5 items), AI perceived usefulness (4 items), and AI learning anxiety (8 items). Analysis used confirmatory factor analysis, structural equation modeling, and bootstrap mediation with 5,000 resamples in AMOS. The measurement model showed excellent fit (χ²/df = 1.432, CFI = 0.980, TLI = 0.978, RMSEA = 0.028); reliability (α = 0.823–0.909) and discriminant validity (HTMT < 0.90) were acceptable, with common-method checks (Harman's single factor 37.1%; CFI = 0.980 CLF model) showing no dominant bias. A supplementary artificial [[machine-learning|neural network]] (5-3-1, tanh, L-BFGS) with repeated 10-fold cross-validation (100 held-out evaluations) tested out-of-sample prediction.

## Implications

- Universities can address AI learning anxiety institutionally — via responsible-use guidelines, technical support, [[ai-literacy|AI literacy]] training, and clear expectations — not only by giving access to tools; perceived support preceded favorable control-value appraisals.
- Initiatives targeting [[self-efficacy|confidence]] and perceived value may be the highest-leverage route, since the two appraisals carried most of the association with lower [[ai-anxiety-and-stress|anxiety]].
- Instructors can embed low-stakes practice, guided [[ai-ed-evaluation|evaluation of AI]] outputs, and feedback-driven revision to build mastery experiences that raise perceived control and value.

## Limitations

- Findings are cross-sectional and cannot establish causal direction, temporal precedence, or causal mediation; multi-wave longitudinal or experimental designs are needed.
- Sample was a Chinese-university convenience sample, all with prior AI experience; results should not be generalized to other countries or to students lacking AI experience.
- AI learning anxiety was generally low with limited variance, possibly attenuating estimated associations.
- Reliance entirely on [[self-report-measures|self-report]] leaves residual risk of response style and common method bias.

## Connected Concepts

- [[ai-anxiety-and-stress]] — the central emotion, modeled as an achievement-related outcome of control-value appraisals
- [[self-efficacy]] — operationalizes the control appraisal (AI learning self-efficacy)
- [[motivation]] — CVT frames anxiety within control and value appraisals tied to task engagement
- [[technology-acceptance-model]] — TAM supplies the perceived-usefulness (value) construct
- [[well-being]] — lower learning anxiety reflects positive emotional adjustment to AI-supported learning
- [[higher-ed]] — the institutional-support context examined

## Connected Articles

- [[zhang-ai-anxiety-academic-motivation-emotion-2026]] — AI learning anxiety linked to academic motivation and emotion
- [[kim-ai-anxiety-comprehensive-analysis]] — comprehensive analysis of AI-related anxiety constructs
- [[self-efficacy-tutoring-learning]] — the self-efficacy mechanism in AI-assisted learning contexts
- [[student-dependency-on-ai-literacy-self-efficacy-2026]] — AI literacy and self-efficacy as levers on student outcomes

## Citation

Jiang, H., Chen, B., & Chen, Q. (2026). [Multidimensional perceived school support and AI learning anxiety among university students: the mediating roles of control-value appraisals](https://doi.org/10.3389/fpsyg.2026.1951992). *Frontiers in Psychology, 17*, 1951992.