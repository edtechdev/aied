---
title: "The impact of risk perception on perceived benefits of generative artificial intelligence users—an empirical study based on university students"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
technology: [generative-ai]
ethics: [hallucination-risk, privacy, trust]
audience: [researchers, instructors, administrators, policymakers]
research_method: [survey, quantitative]
sources: ['raw/papers/10.3389_fpsyg.2026.1866428.md']
confidence: high
level: [higher ed]
page_kind: [framework]
systems: [technology-acceptance-model]
---

> **Synthesis:** Du, Ning, Shi, and Chen (2026) ask not whether university students adopt [[generative-ai|generative AI]] but what they gain from it, integrating Cognitive Appraisal Theory, Protection Motivation Theory, and the [[technology-acceptance-model|TAM/UTAUT2]] framework into a risk–benefit model tested on 814 Chinese university students. Using hierarchical regression and threshold regression, they find that risk perception is dimension-specific and non-monotonic: security risk concern is positively associated with academic assistance and skill development, whereas information risk concern — worry about content accuracy that students struggle to verify — is negatively associated with psychological and emotional support, daily life, and leisure benefits. Beyond a critical level, the sign of these associations flips to significantly positive, suggesting that under the right conditions risk can activate rather than suppress benefit perception.

## Key Findings

- **Risk perception is multidimensional, not uniformly harmful.** Students reported high concern about information, security, and legal risk but relatively low concern about technical and ethical risk. Different dimensions showed markedly different — and even opposite — associations with perceived benefits, so "risk perception" cannot be treated as a single negative force.

- **Security risk concern predicted higher academic and skill benefits.** Because privacy threats can be managed through practices like cautious disclosure and reviewing policies, students appraise this risk as controllable, which triggers deliberate, problem-focused engagement with the tool rather than avoidance.

- **Information risk concern eroded non-academic benefits.** Content-accuracy worries are hard for students to verify, so this risk is low in controllability. Where the stakes are emotional — psychological support, daily life, leisure — such concern fostered anxiety and withdrawal, dampening the benefits students perceived.

- **Longer usage experience amplified benefits across most domains.** Students with over a year of generative AI use reported higher benefits across academic, skill, emotional, and daily-life dimensions than those with less than six months, with leisure being the only dimension where experience made no difference.

- **Risk shows a threshold, activation pattern.** Below a critical level, technical and security risk were weakly or negatively associated with benefits; above it, the associations turned significantly positive. The threshold sits lower for emotional support than for academic assistance, suggesting emotionally invested domains need less arousal to tip benefit perception.

- **Risk perception's role is real but bounded.** Including risk perception did not substantially raise the models' explanatory power, and the findings were robust to trimming and to analyses that excluded control variables.

- **Education level shaped some benefits.** Master's students differed from doctoral students on perceived academic assistance, emotional support, and leisure benefits, while gender and age had no significant effects.

## Study Design & Method

The study used a cross-sectional survey distributed to university students in China. Of the responses collected online, 814 valid questionnaires remained after excluding students who had never used generative AI and responses with implausibly short completion times or logical contradictions. Risk perception was measured across five dimensions — information, security, technical, ethical, and legal — on a 7-point scale, while perceived benefit was measured across five dimensions (academic assistance, skill development, psychological and emotional support, daily life, and leisure and entertainment) on a 5-point frequency scale. Items were adapted from validated instruments, reviewed by subject-matter experts, and piloted with students outside the final sample.

Analysis proceeded through three-layer hierarchical [[research-methods-aied|hierarchical regression]] — demographic controls, then usage duration, then the risk dimensions — which the authors justify as a deliberately prediction-oriented choice rather than the latent-variable testing that structural equation modeling would provide. Non-linear relationships were then probed with [[quantitative-research|threshold regression]] using bootstrap-based estimation, with candidate thresholds anchored theoretically to the risk scale's midpoint.

## Implications

The findings argue against one-size-fits-all AI risk management in [[higher-ed|higher education]]: because risk dimensions diverge, universities should not simply minimize perceived risk. Security risk awareness can be treated as a [[pedagogy|pedagogical]] asset — weaving data-privacy education into [[ai-literacy]] curricula so that concern becomes informed, deliberate engagement rather than passive worry. Information risk calls for a different response: developers should build content transparency through source attribution, fact-checking indicators, and confidence scores to rebuild [[trust]] in emotionally invested domains. For technical risk, the paper proposes a threshold-based, "zone of productive risk" strategy — structured exposure, cognitive reappraisal training, and collaborative skill-building workshops that help students cross the activation threshold without provoking disengagement. Because usage experience predicts benefits across domains, early introductory courses and funded AI-literacy initiatives are recommended, and policymakers should adopt differentiated frameworks for information quality, [[privacy|data protection]], and ethical oversight rather than uniform [[regulation]].

## Limitations

- **Cross-sectional design** precludes causal inference; all relationships are statistical associations, and directionality remains unclear without longitudinal or experimental data.
- **Sample limited to Chinese university students**, restricting generalizability to other populations and cultural contexts.
- **Limited control variables** — AI literacy, digital competence, frequency of use, academic discipline, and prior training were not included as potential confounders.
- **Composite scores treated as observed indicators** rather than latent factors; no confirmatory factor analysis was reported, so measurement error is unmodeled and construct-level validity claims are limited.
- **Common method bias risk** from single-time-point [[self-report-measures|self-report data]]; the single-factor diagnostic used is low in sensitivity, and marker-variable or common latent factor analyses were not performed.

## Connected Concepts

- [[technology-acceptance-model]] — the paper integrates TAM/UTAUT2 with CAT and PMT as its theoretical framework
- [[generative-ai]] — the technology whose perceived risks and benefits are modeled
- [[hallucination-risk]] — the accuracy and reliability concerns constituting the information risk dimension
- [[privacy]] — unauthorized data collection and misuse defining the security risk dimension
- [[trust]] — perceived controllability and trust in AI output shape coping appraisals
- [[self-efficacy]] — coping efficacy is the mechanism converting threat appraisal into adaptive use
- [[higher-ed]] — the setting for the recommended AI risk-management strategies

## Connected Articles

- [[tam-critical-use-genai-engineering-2026]] — extended TAM predicting students' use and reliance on generative AI
- [[student-dependency-on-ai-literacy-self-efficacy-2026]] — AI literacy and self-efficacy as factors in student dependency
- [[guarded-adoption-genai-higher-education-2026]] — how high-achieving students cautiously adopt Gen AI
- [[trust-reliance-ai-education-2026]] — trust and reliance calibration in educational AI use
- [[genai-chatgpt-adoption-ethics-students-2026]] — ethical and behavioral factors in students' ChatGPT adoption

## Citation

Du, W., Ning, S., Shi, Y., & Chen, Y. (2026). [The impact of risk perception on perceived benefits of generative artificial intelligence users—an empirical study based on university students](https://doi.org/10.3389/fpsyg.2026.1866428). *Frontiers in Psychology, 17*, 1866428.
