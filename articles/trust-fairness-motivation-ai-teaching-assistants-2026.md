---
title: "How trust prospectively predicts perceived fairness and learning motivation toward AI teaching assistants: a three-wave within-person longitudinal study"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
tags: [trust, trust-calibration, motivation, self-determination-theory, equity-in-ai-education, pedagogical-agent, higher-ed]
audience: [researchers, instructors, designers, administrators]
research_method: [longitudinal survey, structural equation modeling]
sources: ['raw/papers/10.3389_fpsyg.2026.1900061.md']
confidence: high
level: [higher ed]
category: [engagement, equity]
---

> **Synthesis:** A three-wave prospective longitudinal study of 450 [[higher-ed|undergraduates]] in China used a random-intercept cross-lagged panel model to separate stable between-person differences from genuine within-person change in [[trust]], perceived fairness and learning [[motivation]] toward AI teaching assistants. Trust change consistently came temporally before fairness change, with ability trust the strongest antecedent, while the reverse fairness-to-trust paths were absent — an asymmetric pattern rather than mutual reinforcement. Perceived fairness in turn carried part of the trust effect through to motivation, and procedural justice was the fairness dimension most closely tied to intrinsic rather than extrinsic motivation, though the authors call this a graded difference rather than a confirmed dissociation. Because the design is observational, the paper offers early ability-trust building and procedural transparency as candidate design levers, not proven interventions.

## Key Findings

- **Trust prospectively predicted perceived fairness at the within-person level.** Once stable trait-level differences were partitioned out, every cross-lagged path from the three trust dimensions to the three fairness dimensions was statistically significant and survived false-discovery-rate correction, and the second measurement interval reproduced the same pattern. The reversed-direction model fit worse than the hypothesized ordering, supporting trust as the temporal leader.
- **Ability trust was the strongest trust dimension.** Demonstrated technical competence showed the largest within-person effects on all three fairness dimensions, ahead of integrity and benevolence trust. The authors read this as evidence that in AI-mediated instruction, whether the system reliably does what it claims weighs more on students' fairness judgments than signals of goodwill or honesty.
- **The reciprocal fairness-to-trust pathway was absent, producing an asymmetric relation.** None of the fairness-to-trust paths reached significance, and constraining them to zero did not harm model fit, whereas constraining the trust-to-fairness paths to zero clearly did. The relation is therefore directionally informative: trust change more reliably precedes fairness change than the reverse, without claiming that fairness never feeds back.
- **Perceived fairness carried part of the trust effect through to motivation.** In the longitudinal mediation model roughly a third of the total within-person effect of trust on motivation ran through fairness, with a direct path remaining. Trust thus appears to shape motivation both by reducing uncertainty about the assistant and by shifting students' justice judgments.
- **Procedural justice tracked intrinsic motivation more closely than extrinsic, but selectivity was not confirmed.** Procedural justice predicted later intrinsic motivation while its association with extrinsic motivation was not significant, yet the formal test of the difference between the two coefficients fell short of significance, and distributive justice related to both motivational forms about equally. The authors describe a graded difference in association strength rather than a confirmed dissociation, and note that the extrinsic-motivation null sits below the study's reliable detection range, so it is inconclusive rather than a confirmed zero.
- **Most variation lived between students rather than within them.** Stable differences between people accounted for close to half the variance in several constructs, leaving the remainder for within-person modeling; standard cross-lagged panel estimates were correspondingly larger than the within-person ones. Students with low dispositional trust are therefore argued to be the likeliest to gain disproportionately from targeted onboarding, an implication the authors describe as indirectly supported and awaiting experimental test.
- **The within-person dynamics generalized across assistant types.** An exploratory multi-group comparison of [[conversational-ai|conversational AI]] tutors against [[automated-assessment|automated grading]] and feedback systems found no difference once the cross-lagged paths were constrained to equality, so the pattern does not appear to be an artifact of one class of AI teaching assistant.

## Study Design & Method

Three-wave prospective longitudinal design spanning an eight-week semester window, with measurement at baseline, Week 4 and Week 8. Participants were undergraduates at three large public universities in eastern China who had used AI teaching assistants for at least one month, recruited through stratified purposive sampling across institutions and disciplines. Of 520 students recruited, 502 consented and completed the baseline survey; after removing cases that failed attention checks, answered carelessly or straight-lined, the analytic sample was 450 (mean age about 21, slightly more than half female). Attrition was modest at both follow-up waves, missingness was consistent with being completely at random, and full-information maximum likelihood estimation retained all cases. An a priori Monte Carlo power analysis in Mplus targeted the small within-person cross-lagged effects the study was designed to detect.

Eight latent constructs were measured at every wave on five-point Likert scales: three trust dimensions (ability, benevolence, integrity, adapted from Mayer and Davis and from McKnight and colleagues), three perceived-fairness dimensions (distributive, procedural and interactional justice, from Colquitt's organizational justice scale adapted to AITA contexts), and intrinsic and extrinsic motivation (from the Academic Motivation Scale). Controls were gender, academic year, age, prior technology attitude and weekly AITA usage. Analysis in Mplus proceeded from confirmatory factor analysis through longitudinal measurement invariance — which held for configural, metric and scalar models — to the random-intercept cross-lagged panel model with autoregressive paths, cross-lagged paths and within-wave residual correlations as the primary specification. Within-person longitudinal mediation used the product-of-coefficients approach with bias-corrected bootstrapping, and sensitivity analyses checked the estimates against a standard cross-lagged panel model, a reciprocal-paths-constrained model, a reversed-direction model and a multi-group model by assistant type. The primary model fit acceptably, and discriminant validity and common method bias were examined through standard comparisons.

## Implications

- **Early-deployment technical competence is the most defensible trust lever identified here.** Because ability trust showed the largest within-person effects, the authors recommend rigorous pre-deployment accuracy testing, transparent error reporting that does not erode confidence, and reliable performance during the first two to four weeks of interaction — the window in which trust trajectories appear most malleable.
- **Procedural transparency plausibly supports autonomous engagement somewhat more than controlled engagement.** Visible decision rules, voice mechanisms and consistent feedback procedures are framed as a worthwhile investment *alongside*, not instead of, outcome-[[equity-in-ai-education|equity]] messaging, given the graded rather than confirmed selective pattern across motivational subtypes.
- **Trait-level differences condition who benefits.** Because a large share of construct variance resides between persons, students with low dispositional trust are argued to be the likeliest to show disproportionate within-person gains from targeted onboarding.
- **Theory:** the findings supply the first within-person longitudinal evidence for a trust-to-fairness-to-motivation temporal pathway in [[ai-education]] contexts, extending organizational justice theory and offering a qualified test of [[self-determination-theory|self-determination theory]]'s differential-pathway proposition; the asymmetric reciprocal pattern reframes the trust-fairness relation as directionally informative without claiming unidirectional primacy.
- **Design and evaluation:** the dual-process account (a direct trust-to-motivation path plus a fairness-mediated path) suggests evaluation of AI teaching assistants should monitor both uncertainty-reduction effects and explicit justice judgments rather than treating fairness as the sole mechanism.

## Limitations

- **Observational design.** Despite within-person estimation, the absence of random assignment to AITA conditions or experimental manipulation of trust- or fairness-relevant features means the associations cannot establish causal directionality; time-varying confounders (concurrent system updates, course difficulty changes, instructor interventions between waves) remain plausible alternatives. The authors explicitly caution that intervening on the identified levers may not produce the corresponding changes.
- **Small-to-medium effect magnitudes.** The within-person cross-lagged effects are statistically robust and FDR-corrected but bounded in practical import, and the power analysis was calibrated to effects of about this size, so several coefficients central to the interpretive claims fall at or below the reliably detectable range — non-significant results are inconclusive rather than confirmed nulls.
- **Interval choice.** The four-week spacing may miss micro-temporal trust-fairness processes occurring between measurement occasions; experience sampling methods with daily or weekly measurement would complement the macro-temporal panel design.
- **All measures [[self-report-measures|self-reported]].** Despite temporal separation and statistical remediation for common method variance, it cannot be fully eliminated; behavioral indicators such as [[learning-analytics]] traces, grades and physiological engagement measures are recommended for future work.
- **Sample generalizability.** Undergraduates at three Chinese public universities; trust norms, power distance orientations and responses to authority-like technological systems are culturally patterned, so the temporal dynamics and design recommendations should not be assumed to transfer to other national or educational settings. Cross-cultural replication (Western individualist vs. East Asian collectivist) is needed.
- **Unmodeled alternative mediators.** Basic psychological need satisfaction (autonomy, competence, relatedness), affective responses (anxiety, confidence, frustration) and technology [[self-efficacy]] remain untested parallel temporal mediators.
- **No cumulative-effect claim.** With only two four-week intervals observed, semester-level compounding of the per-interval effects is flagged as an explicitly speculative hypothesis, not a finding.

## Connected Concepts

- [[trust]] — the antecedent construct, decomposed into ability, benevolence and integrity dimensions.
- [[trust-calibration]] — the paper concerns whether student trust aligns with AITA reliability and how it recalibrates over time.
- [[motivation]] — intrinsic and extrinsic learning motivation is the outcome construct.
- [[self-determination-theory]] — supplies the differential-pathway hypothesis linking procedural fairness to autonomous regulation.
- [[equity-in-ai-education]] — distributive, procedural and interactional justice operationalize fairness toward AITA-allocated support.
- [[pedagogical-agent]] — AI teaching assistants are conversational and adaptive pedagogical agents.
- [[higher-ed]] — the setting and population are undergraduate higher education.
- [[student-ai-interaction]] — trust and fairness are formed through sustained student-AITA interaction.

## Connected Articles

- [[trust-reliance-ai-education-2026]] — trust and reliance on AI in education, with AI literacy and need for cognition as moderators.
- [[trust-calibration-chatbots-design-problem-2026]] — miscalibrated chatbot trust treated as a design problem, complementing the ability-trust design implications here.
- [[human-ai-collaboration-trust-expectations]] — trust and distrust in higher-education human-AI collaboration.
- [[calibrating-trustworthiness-llm-education-2026]] — co-designed metrics for evaluating LLM trustworthiness in education.
- [[liang-ai-learning-motivation-sdt-2026]] — latent transition analysis of students' AI learning motivation within an SDT framing.
- [[student-motivation-need-satisfaction-genai-sdt-2026]] — SDT need satisfaction in GenAI-supported classrooms, the parallel mediator left untested here.
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — pedagogical fairness of LLM tutors across student demographics, the design-side counterpart to perceived-justice measurement.
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]] — an AI teaching assistant system deployment, the same artifact class studied here.
- [[song-genai-learning-partner-srl-over-time-2026]] — GenAI as a learning partner tracked over time, a comparable longitudinal design.

## Citation

Fu, L., Ouyang, Z., & Wu, Q. (2026). [How trust prospectively predicts perceived fairness and learning motivation toward AI teaching assistants: a three-wave within-person longitudinal study](https://doi.org/10.3389/fpsyg.2026.1900061). *Frontiers in Psychology, 17*, 1900061.
