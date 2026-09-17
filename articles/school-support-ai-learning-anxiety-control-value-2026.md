---
title: "Multidimensional perceived school support and AI learning anxiety among university students: the mediating roles of control-value appraisals"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
tags: [ai-anxiety-and-stress, self-efficacy, motivation, higher-ed, student-experience, technology-acceptance-model, well-being]
connected_faqs: [ai-anxiety-wellbeing]
audience: [researchers, instructors, administrators]
research_method: [structural equation modeling, survey]
sources: ['raw/papers/10.3389_fpsyg.2026.1951992.md']
confidence: high
level: [higher ed]
category: [engagement, policy]
---

> **Synthesis:** Drawing on control-value theory (CVT), this structural equation modeling study of 547 Chinese undergraduates found that students who perceived more school support reported less [[ai-anxiety-and-stress|AI learning anxiety]] — largely because that support strengthened two appraisals: their [[self-efficacy|AI learning self-efficacy]] and their [[technology-acceptance-model|perceived usefulness]] of AI for academic work. Both appraisals in turn predicted lower anxiety, and the indirect routes through them carried most of the total association. The study reframes AI learning anxiety as an achievement-related emotion shaped by institutional conditions, not only by individual traits.

## Key Findings

- **More perceived school support went with lower AI learning anxiety.** The direct link held even with the two appraisals in the model, so support was associated with students' emotional experience of AI learning beyond the pathways running through their beliefs about AI.
- **Support strengthened both the control and the value appraisal.** Students who felt more supported by their university reported greater confidence in learning AI, and saw AI as more useful for their academic work.
- **Both appraisals were linked to less anxiety.** AI learning self-efficacy showed the stronger negative association with anxiety, and it also predicted perceived usefulness: students who felt capable of handling AI-related learning tasks were more likely to judge AI valuable.
- **The indirect routes did most of the work.** The paths through self-efficacy and perceived usefulness — including the route from self-efficacy on to usefulness — together carried the bulk of the total association between support and anxiety, leaving only about a third as a direct association.
- **Support operated as an overall perception rather than through distinct dimensions.** When emotional, informational, and instrumental support were modeled separately, only informational support retained a reliable link to self-efficacy; the other dimension-specific paths were not distinguishable from zero.
- **A supplementary neural-network model agreed with the structural one.** Out-of-sample prediction ranked self-efficacy and perceived usefulness as the strongest and most stable predictors of anxiety, while the individual support dimensions contributed far less and with unstable importance. Its predictive edge over ordinary linear benchmarks was modest, which the authors read as the linear associations in SEM already capturing most of the signal.

## Study Design & Method

Participants were 547 undergraduates at Chinese universities, surveyed online in two waves about six weeks apart so that the predictors and the outcome were measured at different times. The sample was AI-experienced and skewed toward STEAM majors. Perceived school support was adapted from a perceived organizational support scale into emotional, informational, and instrumental dimensions; AI learning self-efficacy, AI perceived usefulness, and AI learning anxiety were measured with existing scales, with anxiety taken from a well-known AI anxiety instrument.

Analysis proceeded in two stages. The main model used confirmatory factor analysis and structural equation modeling in AMOS, with the three support dimensions treated as a second-order construct, and mediation tested through bootstrapped confidence intervals. The authors then added a supplementary artificial [[machine-learning|neural network]] as an out-of-sample predictive check, separating the support dimensions to see which of them predicted anxiety on their own. Robustness models controlling for gender, major, and AI-use frequency left the structural pattern unchanged.

## Implications

- Universities can treat AI learning anxiety as an institutional concern, not just a student disposition: responsible-use guidelines, accessible technical support, and [[ai-literacy|AI literacy]] training may matter because perceived support precedes favorable control and value appraisals.
- Initiatives that build [[self-efficacy|confidence]] and demonstrate AI's academic value are the highest-leverage route, since the two appraisals carried most of the association with lower [[ai-anxiety-and-stress|anxiety]].
- Instructors can embed low-stakes practice, guided [[ai-ed-evaluation|evaluation of AI]] outputs, and feedback-driven revision — activities that give students mastery experiences and concrete evidence that AI is worth the effort.

## Limitations

- The design, despite its temporal separation, is cross-sectional and cannot establish causal direction, temporal precedence, or causal mediation.
- The sample was a convenience sample of Chinese undergraduates, all with prior AI experience; results should not be generalized to other countries or to students without AI experience.
- AI learning anxiety was generally low with limited variance, which may have attenuated the estimated associations.
- Reliance entirely on [[self-report-measures|self-report]] leaves residual risk of response style, social desirability, and common method bias.

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
