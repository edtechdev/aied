---
title: "How trust prospectively predicts perceived fairness and learning motivation toward AI teaching assistants: a three-wave within-person longitudinal study"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-16T13:40:00-04:00"
type: article
tags: [trust, trust-calibration, motivation, self-determination-theory, equity-in-ai-education, pedagogical-agent, higher-ed]
audience: [researchers, instructors, designers, administrators]
research_method: [longitudinal survey, structural equation modeling]
sources: ['raw/papers/10.3389_fpsyg.2026.1900061.md']
confidence: high
---

> **Synthesis:** This three-wave prospective longitudinal study (N = 450 [[higher-ed|undergraduates]], three waves at four-week intervals) used a random-intercept cross-lagged panel model (RI-CLPM) to separate stable between-person differences from genuine within-person change in [[trust|trust]], perceived fairness, and learning [[motivation]] toward AI teaching assistants (AITAs). All nine within-person trust→fairness paths were significant (β = 0.09–0.14), with ability trust the strongest antecedent, while fairness→trust reciprocal paths were uniformly non-significant — an asymmetric pattern in which trust change more reliably precedes fairness change than the reverse. Procedural justice predicted subsequent intrinsic motivation (β = 0.16, p < 0.001) alongside a non-significant extrinsic coefficient (β = 0.04), though the direct difference test was inconclusive (p = 0.061), and bias-corrected bootstrapping confirmed partial within-person mediation (indirect β = 0.031, VAF = 34.1%). The authors frame early ability-trust cultivation and procedural transparency as candidate design levers, stressing that an observational design cannot establish that intervening on them would produce the corresponding change.

## Key Findings

- **Trust prospectively predicted fairness at the within-person level.** All nine RI-CLPM cross-lagged paths from trust dimensions at T1 to fairness dimensions at T2 were statistically significant (β = 0.09–0.14, all p ≤ 0.015), after controlling for prior within-person fairness and partitioning out trait-level variance; all nine survived Benjamini–Hochberg FDR correction (adjusted q ≤ 0.030). The T2 → T3 pattern mirrored this in direction and rank order.
- **Ability trust was the strongest trust dimension.** Within-person effects ranked Ability Trust (β = 0.11–0.14; the largest single coefficient was AT → PJ at β = 0.14), then Integrity Trust (β = 0.09–0.11), then Benevolence Trust (β = 0.09–0.12). Trust dimensions collectively explained 14.2–17.6% of within-person fairness variance at T2.
- **Procedural justice showed the strongest fairness→motivation path, but selectivity was not statistically confirmed.** Procedural Justice T2 predicted Intrinsic Motivation T3 (β = 0.16, p < 0.001) while the Extrinsic Motivation coefficient was non-significant (β = 0.04, p = 0.310); the direct difference test was β = 0.12, 95% CI [−0.01, 0.25], z = 1.87, p = 0.061. Distributive justice predicted both motivational forms (β = 0.10 and 0.09, both p < 0.05; difference = 0.01, p = 0.860), and interactional justice showed β = 0.12 for intrinsic (p = 0.003) versus β = 0.07 for extrinsic (p = 0.063). The authors describe a "graded difference in association strength" rather than a confirmed dissociation.
- **Fairness partially mediated the longitudinal trust→motivation association.** In the composite-specification mediation model (5,000 bias-corrected bootstrap resamples), total within-person effect β = 0.091 (p < 0.001), direct effect β = 0.060 (p = 0.024), and total indirect effect via fairness β = 0.031, 95% CI [0.014, 0.052], p = 0.002, VAF = 34.1% (complementary partial mediation). Pathway shares: procedural justice 14.3%, distributive justice 11.0%, interactional justice 8.8%.
- **Reciprocal fairness→trust effects were absent, yielding an asymmetric pattern.** None of the nine within-person fairness T1 → trust T2 paths reached significance (β = 0.03–0.07, all p > 0.10; closest was PJ → IT at β = 0.07, p = 0.089). Constraining trust→fairness paths to zero worsened fit, Δχ²(9) = 24.61, p = 0.003, whereas constraining the reciprocal paths to zero did not, Δχ²(9) = 8.92, p = 0.445.
- **Trait-level variance absorbed a large share of the total, and RI-CLPM estimates were correspondingly smaller than CLPM estimates.** Random intercepts accounted for 38–47% of total variance across the eight constructs (e.g., intrinsic motivation 46.9%, ability trust 44.2%, interactional justice 38.6%), leaving 53–62% for within-person modeling. Standard CLPM cross-lagged coefficients were larger (trust→fairness β = 0.13–0.19; fairness→motivation β = 0.12–0.21) — a roughly 30–40% attenuation consistent with the between-person variance share.
- **Within-person temporal dynamics generalized across AITA types.** In an exploratory multi-group RI-CLPM, [[conversational-ai|conversational AI]] tutors (n = 187) versus [[automated-assessment|automated grading]]/feedback systems (n = 263) did not differ when the 15 cross-lagged paths were constrained to equality, Δχ²(15) = 21.73, p = 0.115.
- **The reversed causal ordering fit worse.** A model specifying fairness T1 → trust T2 → motivation T3 produced inferior fit (AIC = 48,602 vs. 48,114; BIC = 49,378 vs. 48,891) than the hypothesized trust-to-fairness ordering.

## Study Design & Method

Three-wave prospective longitudinal design with measurement at Week 0 (baseline), Week 4, and Week 8 of an 8-week semester window. Participants were undergraduates at three large public universities in eastern China who had used AI teaching assistants for at least one month, recruited via stratified purposive sampling across institutions and disciplines. Of 520 recruited students, 502 consented and completed the T1 survey; 52 cases were removed (28 attention-check failures, 15 careless responders, 9 straight-liners), leaving an analytic N = 450 (Mage = 20.7, SD = 1.8; 54.2% female). Retention was 414 at T2 (8.0% attrition) and 382 at T3 (a further 7.7%); Little's MCAR test supported missing-completely-at-random missingness, χ²(186) = 198.34, p = 0.247, and full information maximum likelihood (FIML) estimation was used. An a priori Monte Carlo power analysis in Mplus 9.0 targeted β = 0.12 within-person cross-lagged effects at ICC = 0.42, giving estimated power of 0.81 at N = 450.

Eight latent constructs were measured at every wave on 5-point Likert scales: three trust dimensions (ability, benevolence, integrity; 5 items each, adapted from Mayer & Davis and McKnight et al.), three perceived-fairness dimensions (distributive, procedural, interactional justice; 4 items each, from Colquitt's organizational justice scale adapted for AITA contexts), and two motivational dimensions (intrinsic, extrinsic; 4 items each, from the Academic Motivation Scale). Controls were gender, academic year, age, prior technology attitude (TAM-adapted) and weekly AITA usage. Measurement models: CFA at each wave confirmed the eight-factor structure (T1 χ²(620) = 1189.42, χ²/df = 1.92, CFI = 0.957, RMSEA = 0.045, SRMR = 0.037); longitudinal measurement invariance held for configural, metric and scalar models (scalar ΔCFI = −0.006, ΔRMSEA = +0.002, within Chen's criteria). Discriminant validity was supported by Fornell–Larcker and HTMT (< 0.85) checks, plus a nested-model test in which a correlated three-factor trust model (χ²(87) = 99.04, CFI = 0.996, RMSEA = 0.018) decisively outperformed a one-factor model (Δχ²(3) = 1933.90, p < 0.001). Common method bias checks included Harman's single-factor test (first unrotated factor 32.1–35.8% of variance), a common latent factor model (weight differences M = 0.010) and an unmeasured method factor model (method factor = 4.8% of indicator variance, structural paths preserved).

Analysis proceeded in five stages in Mplus 9.0 with MLR estimation: CFA; measurement invariance; the RI-CLPM with autoregressive paths, cross-lagged paths and within-wave residual correlations as the primary specification; within-person longitudinal mediation via the product-of-coefficients approach with 5,000 bias-corrected bootstrap resamples; and sensitivity analyses (standard CLPM [[benchmark]], constrained reciprocal model, reversed-direction model, multi-group RI-CLPM). The primary RI-CLPM fit acceptably: χ²(2108) = 4512.18, χ²/df = 2.14, CFI = 0.953, TLI = 0.949, RMSEA = 0.045 [0.042, 0.048], SRMR = 0.043.

## Implications

- **Early-deployment technical competence is the most defensible trust lever identified here.** Because ability trust showed the largest within-person coefficients (AT → PJ β = 0.14), the authors recommend rigorous pre-deployment accuracy testing, transparent error reporting that does not erode confidence, and reliable performance during the first two to four weeks of interaction — the window in which trust trajectories appear most malleable.
- **Procedural transparency plausibly supports autonomous engagement somewhat more than controlled engagement.** Visible decision rules, voice mechanisms and consistent feedback procedures are framed as a worthwhile investment *alongside*, not instead of, outcome-[[equity-in-ai-education|equity]] messaging, given the graded (not confirmed selective) pattern across motivational subtypes.
- **Trait-level differences condition who benefits.** With 38–47% of construct variance residing between persons, students with low dispositional trust are argued to be the likeliest to show disproportionate within-person gains from targeted onboarding — an implication the authors describe as indirectly supported and awaiting experimental test.
- **Theory:** the findings supply the first within-person longitudinal evidence for a trust→fairness→motivation temporal pathway in [[ai-education]] contexts, extending organizational justice theory and offering a qualified test of [[self-determination-theory|self-determination theory]]'s differential-pathway proposition; the asymmetric reciprocal pattern reframes the trust–fairness relation as directionally informative without claiming unidirectional primacy.
- **Design and evaluation:** the dual-process account (a direct trust→motivation path plus a fairness-mediated path) suggests evaluation of AITAs should monitor both uncertainty-reduction effects and explicit justice judgments rather than treating fairness as the sole mechanism.

## Limitations

- **Observational design.** Despite within-person estimation, the absence of random assignment to AITA conditions or experimental manipulation of trust- or fairness-relevant features means the associations cannot establish causal directionality; time-varying confounders (concurrent system updates, course difficulty changes, instructor interventions between waves) remain plausible alternatives. The authors explicitly caution that intervening on the identified levers may not produce the corresponding changes.
- **Small-to-medium effect magnitudes.** Within-person cross-lagged coefficients (β = 0.09–0.16) are statistically robust and FDR-corrected but bounded in practical import; a power analysis calibrated to β = 0.12 at power = 0.81 means several coefficients central to the interpretive claims (including the non-significant PJ → EM β = 0.04 and some significant β = 0.09–0.11) fall at or below the detectable range, so non-significant results are inconclusive rather than confirmed nulls.
- **Interval choice.** The four-week spacing may miss micro-temporal trust–fairness processes occurring between measurement occasions; experience sampling methods with daily or weekly measurement would complement the macro-temporal panel design.
- **All measures [[self-report-measures|self-reported]].** Despite temporal separation and statistical remediation (Harman's test, CLF, UMF), common method variance cannot be fully eliminated; behavioral indicators such as [[learning-analytics]] traces, grades and physiological engagement measures are recommended for future work.
- **Sample generalizability.** Undergraduates at three Chinese public universities; trust norms, power distance orientations and responses to authority-like technological systems are culturally patterned, so the temporal dynamics and design recommendations should not be assumed to transfer to other national or educational settings. Cross-cultural replication (Western individualist vs. East Asian collectivist) is needed.
- **Unmodeled alternative mediators.** Basic psychological need satisfaction ([[agency|autonomy]], competence, relatedness), affective responses (anxiety, confidence, frustration) and technology [[self-efficacy]] remain untested parallel temporal mediators.
- **No cumulative-effect claim.** With only two four-week intervals observed, semester-level compounding of the per-interval effects is flagged as an explicitly speculative hypothesis, not a finding.

## Connected Concepts

- [[trust]] — the antecedent construct, decomposed into ability, benevolence and integrity dimensions.
- [[trust-calibration]] — the paper concerns whether student trust aligns with AITA reliability and how it recalibrates over time.
- [[motivation]] — intrinsic and extrinsic learning motivation is the outcome construct.
- [[self-determination-theory]] — supplies the differential-pathway hypothesis linking procedural fairness to autonomous regulation.
- [[equity-in-ai-education]] — distributive, procedural and interactional justice operationalize fairness toward AITA-allocated support.
- [[pedagogical-agent]] — AI teaching assistants are conversational and adaptive pedagogical agents.
- [[higher-ed]] — the setting and population are undergraduate higher education.
- [[student-ai-interaction]] — trust and fairness are formed through sustained student–AITA interaction.

## Connected Articles

- [[trust-reliance-ai-education-2026]] — trust and reliance on AI in education, with AI literacy and need for cognition as moderators.
- [[trust-calibration-chatbots-design-problem-2026]] — miscalibrated chatbot trust treated as a design problem, complementing the ability-trust design implications here.
- [[human-ai-collaboration-trust-expectations]] — trust and distrust in higher-education human–AI collaboration.
- [[calibrating-trustworthiness-llm-education-2026]] — co-designed metrics for evaluating LLM trustworthiness in education.
- [[liang-ai-learning-motivation-sdt-2026]] — latent transition analysis of students' AI learning motivation within an SDT framing.
- [[student-motivation-need-satisfaction-genai-sdt-2026]] — SDT need satisfaction in GenAI-supported classrooms, the parallel mediator left untested here.
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — pedagogical fairness of LLM tutors across student demographics, the design-side counterpart to perceived-justice measurement.
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]] — an AI teaching assistant system deployment, the same artifact class studied here.
- [[song-genai-learning-partner-srl-over-time-2026]] — GenAI as a learning partner tracked over time, a comparable longitudinal design.

## Citation

Fu, L., Ouyang, Z., & Wu, Q. (2026). [How trust prospectively predicts perceived fairness and learning motivation toward AI teaching assistants: a three-wave within-person longitudinal study](https://doi.org/10.3389/fpsyg.2026.1900061). *Frontiers in Psychology, 17*, 1900061.
