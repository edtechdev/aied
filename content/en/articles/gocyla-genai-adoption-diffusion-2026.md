---
title: "Generative artificial intelligence usage by university students in the light of Diffusion of Innovations theory"
created: "2026-11-10T18:19:20-05:00"
updated: "2026-11-10T18:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [survey, structural equation modeling]
evidence_context: educational
level: [higher ed, undergraduate, graduate]
audience: [instructors, researchers, administrators]
sources: ['raw/papers/gocyla-genai-adoption-diffusion-2026.md']
source_url: "https://link.springer.com/article/10.1007/s44217-026-02296-x"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [theories-and-frameworks]
pedagogy: [student-ai-interaction]
technology: [generative-ai, technology-acceptance-model]
assessment: [self-report-measures]
methods: [quantitative-research]
institutions: []
ethics: []
---

> **Synthesis:** Gocyła and Strzelecki (2026) ask why university students intend to use [[generative-ai|generative AI]], and answer with Rogers' [[technology-acceptance-model|diffusion of innovations]] attributes rather than another TAM variant. In a cross-sectional online survey of 234 students at Polish universities analyzed with PLS-SEM, four of the five attributes related to behavioral intention to use the tools — relative advantage, compatibility, simplicity and observability — while trialability did not (f² = 0.001), and the model explained 48.7% of the variance in intention. That intention precedes [[student-ai-interaction|actual work with AI]], and the authors read the trialability null as a boundary condition for the theory: when free-tier access is near universal, the chance to experiment stops sorting students and becomes a baseline expectation. [[self-report-measures|Self-reported]] intention is not measured use, and a convenient multi-university sample cannot stand for Polish [[higher-ed|higher education]], so the durable contribution is comparative — compatibility is the one attribute that has held across every DOI study of student AI adoption the authors review, including this one.

## Key Findings
1. **Four of five attributes were significant.** Relative advantage, compatibility, simplicity and observability each related positively to behavioral intention to use generative AI; trialability did not, with an effect size of f² = 0.001.
2. **The model explained 48.7% of intention.** That R² sits just under the 0.50 their benchmark calls moderate, alongside SRMR = 0.076 and VIF values from 1.12 to 2.48.
3. **The confirmed paths were small in magnitude.** Every supported hypothesis carried an f² between 0.028 and 0.103, below Cohen's 0.15 threshold for a medium effect, so the attributes order students rather than transform them.
4. **The measurement model cleared its thresholds.** All loadings exceeded 0.70, composite reliability exceeded 0.70, AVE exceeded 0.50 for every construct, and Fornell-Larcker plus HTMT supported discriminant validity.
5. **Trialability's failure is the paper's theoretical claim.** The authors argue that ubiquitous free access turns experimentation into a prerequisite students assume rather than a differentiator, making trialability a scope condition for DOI.
6. **Of 252 responses, 234 were analysable.** Thirty students piloted a five-point instrument adapted from Moore and Benbasat's perceived-attributes scales, with intention items borrowed from UTAUT and administered in Polish after back-translation.

## Why Rogers instead of another TAM
The authors' framing claim is about saturation, not novelty. Research on student generative AI adoption, they write, is largely built on TAM, UTAUT and the theory of planned behavior; DOI-based work on students amounts to three known studies. Those three disagree in instructive ways: compatibility and observability have shown relatively stable effects, while relative advantage, ease of use and trialability vary by study, which the authors attribute to national context, measurement choices and which technology was examined.

That disagreement is the opening. [[quantitative-research|PLS-SEM]] on a parsimonious five-predictor model asks whether Rogers' original attributes still carry information about [[generative-ai|GenAI]] adoption. The authors excluded moderators to test the core framework first, which also limits the design: personal innovativeness, prior experience and disciplinary background are named as the heterogeneity they did not model.

## Four paths, one null
The structural results are a partial confirmation: relative advantage, compatibility, simplicity and observability each related significantly and positively to intention. Simplicity is the paper's version of ease of use, inverted from complexity so that all five attributes point the same way.

Trialability is where the paper earns its place, and the authors resist reading the failure as a measurement problem. Their explanation is diffusion-stage reasoning: early on, the chance to try a tool reduces uncertainty, but when a tool is free and everywhere, students simply assume they can try it. The null then becomes a boundary condition for DOI, and f² = 0.001 supports treating it as flat rather than noisy, though the limitations concede the sample may have been too small to detect an effect.

The comparative reading matters most for anyone weighing adoption theory. Compatibility was the only attribute on which all four studies agreed; relative advantage split, with Luo and Cao finding no direct effect among Chinese students; trialability was significant in the three earlier studies and not here. Construct definition drifts as well, since one study operationalized complexity as ease of use and another added trust as a mediator.

## What 234 self-reports can support
Two features of the design bound every claim above. The data are cross-sectional and self-reported: students rated perceptions and intention at one point in time, so the paths are associations among contemporaneous ratings, not effects of a perception on a later decision. The outcome is intention, not use, and the authors recommend that future work examine actual adoption patterns.

The sample is convenience-based, recruited through university mailing lists and information systems across several Polish institutions, so it cannot represent Polish higher education. Statistically it suits the estimator, and the sensitivity analysis in G*Power put the minimum detectable effect at f² = 0.056, while the confirmed paths ran as low as 0.028; the authors allow that the trialability null may reflect insufficient power.

The paper also declines to look at consequences: whether intent predicts [[critical-thinking|critical thinking]], creativity or [[academic-integrity|academic integrity]] is left to future research, so it describes the spread of a tool without saying what the spread does to learning.

## What this means for practice
- **Instructors.** Make the advantage concrete and course-specific — name the task, the time saved, the quality difference — and stop designing around a first trial. Students have already experimented; spend contact time on judging output.
- **Administrators.** Put resource into ease of use and skill support: prompt practice, output checking, judgment about when the tool is the wrong instrument. Simplicity and observability both moved intention, and both are teachable.
- **Faculty developers.** Build visible peer demonstration into workshops. Observability was significant, which makes a colleague's working example a diffusion mechanism, not just a morale feature.
- **Researchers.** Report effect sizes beside significance in DOI replications. Four significant paths with f² between 0.028 and 0.103 is a different claim from four strong predictors.

## Limitations
- The design is cross-sectional and single-wave, so no causal ordering among the five perceptions and intention can be established.
- The 234 valid responses came from a convenience distribution across several Polish universities, which the authors say limits generalizability to other contexts.
- The dependent variable is behavioral intention, not use; the authors note intention is a strong predictor of behavior but did not measure adoption itself.
- No moderators were modeled, leaving personal innovativeness, prior GenAI experience and disciplinary background as unexamined sources of heterogeneity.
- The paper measured no negative consequences — critical thinking, creativity, academic integrity — so the model carries no claim about learning outcomes.
- With 234 cases and five predictors, the minimum detectable effect was f² = 0.056, and the authors allow that the trialability null may stem from insufficient power.

## Citation
Gocyła, A., & Strzelecki, A. (2026). [*Generative artificial intelligence usage by university students in the light of Diffusion of Innovations theory*](https://link.springer.com/article/10.1007/s44217-026-02296-x). Discover Education, 5, 1310.
