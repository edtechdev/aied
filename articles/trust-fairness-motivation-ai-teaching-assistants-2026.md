---
title: "How trust prospectively predicts perceived fairness and learning motivation toward AI teaching assistants: a three-wave within-person longitudinal study"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-19T09:08:46-04:00"
type: article
pedagogy: [motivation, self-determination-theory]
technology: [pedagogical-agent]
ethics: [equity-in-ai-education, trust, trust-calibration]
audience: [researchers, instructors, designers, administrators]
research_method: [longitudinal study, structural equation modeling]
sources: ['raw/papers/10.3389_fpsyg.2026.1900061.md']
confidence: high
level: [higher ed]
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

## What this means for practice

- **Instructors.** Spend your effort on the opening weeks: ability trust produced the largest within-person effects on fairness judgments, and the authors identify rigorous pre-deployment accuracy testing, honest error reporting, and reliable performance in the first two to four weeks of interaction as the window where trust is most malleable.
- **Instructors.** Aim onboarding at students who start with low trust in the assistant and measure the result: the authors argue these students are likeliest to show disproportionate within-person gains, while noting the implication rests on indirect support rather than an experimental test.
- **Designers.** Make decision rules visible and consistent through procedural transparency, voice mechanisms, and stable feedback procedures, because procedural justice was the fairness dimension tied to later intrinsic motivation (β = 0.16); the authors frame this as an investment alongside, not instead of, outcome-[[equity-in-ai-education|equity]] messaging, since the selective pattern across motivational subtypes is graded rather than confirmed.
- **Administrators.** Evaluate AI teaching assistants on uncertainty reduction and explicit justice judgments together, and report errors without eroding confidence: perceived fairness carried 34.1% of the within-person trust effect on motivation, with a direct path remaining alongside it.
- **Administrators.** Do not expect fairness messaging to build trust on its own — no fairness-to-trust path reached significance — so invest in demonstrated competence rather than communications alone.

## Limitations


- **Observational design with a bounded window.** Despite within-person estimation, there was no random assignment to AI teaching assistant conditions or experimental manipulation of trust- or fairness-relevant features, so the associations cannot be read as causal; with only two four-week intervals, semester-level compounding of the per-interval effects is an explicitly speculative hypothesis rather than a finding, and the four-week spacing may miss micro-temporal processes better captured by experience sampling.
- **Small-to-medium effects.** The within-person cross-lagged effects are statistically robust and FDR-corrected but bounded in practical import, and the power analysis was calibrated to effects of about that size.
- **Everything measured by self-report, with alternatives left unmodeled.** Temporal separation and statistical remediation for common method variance cannot eliminate it fully, and behavioral indicators were not used; basic psychological need satisfaction, affective responses such as anxiety and frustration, and technology self-efficacy remain unmodeled as alternative mediators.
- **Sample generalizability.** Undergraduates at three Chinese public universities: trust norms, power-distance orientations and responses to authority-like technological systems are culturally patterned, so the findings are scoped to that setting.

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
