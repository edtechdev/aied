---
title: "Trust calibration and perceived developmental gains in university students' collaboration with generative AI: an exploratory sequential mixed methods study"
created: "2026-09-27T08:15:00-04:00"
updated: "2026-09-27T08:15:00-04:00"
type: article
sources: ['raw/papers/trust-calibration-genai-collaborative-regulation-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [interviews, structural equation modeling]
discipline: [learning sciences]
level: [higher ed]
audience: [instructors, researchers, learning analytics designers]
foundations: [ai-education, ai-literacy, human-ai-collaboration]
pedagogy: [metacognition, self-regulated-learning, motivation]
technology: [generative-ai, llm]
methods: [mixed-methods-research]
assessment: [self-report-measures]
ethics: [trust, trust-calibration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Bu and Li propose and test a process model linking contextual support, [[trust-calibration|trust calibration]], collaborative regulation, and perceived [[transfer-of-learning|transfer]] gains in students' collaboration with [[generative-ai|generative AI]], using an exploratory sequential [[mixed-methods-research|mixed-methods]] design. In Study 1, semi-structured interviews with [[higher-ed|university]] students were coded to identify the dimensions of the model. In Study 2, a 22-item instrument was piloted and administered to a final analytic sample of 642 students, analyzed with confirmatory factor analysis and structural equation modeling. Contextual support predicted trust calibration and collaborative regulation; trust calibration predicted collaborative regulation and perceived transfer gains; and collaborative regulation showed the strongest association with perceived transfer gains (β = 0.54). The direct path from contextual support to perceived transfer gains was not significant, while the chained indirect pathway through trust calibration and collaborative regulation was. The authors argue that developmental benefits of GenAI collaboration depend on guided, calibrated trust and active regulation rather than on frequency of AI use.

## Key Findings

1. **Contextual support starts the chain but does not directly produce gains.** Contextual support strongly predicted trust calibration (β = 0.56) and moderately predicted collaborative regulation (β = 0.18), but its direct path to perceived transfer gains (β = 0.07) was not statistically significant.
2. **Trust calibration is the bridge from context to action.** Trust calibration predicted collaborative regulation (β = 0.49) and perceived transfer gains (β = 0.22), supporting its role as the process connecting contextual cues to later regulatory choices rather than as a general attitude toward AI.
3. **Collaborative regulation is the proximal driver.** Collaborative regulation showed the strongest association with perceived transfer gains (β = 0.54); the model explained 58% of the variance in perceived transfer gains and 49% of the variance in collaborative regulation.
4. **The indirect pathway is what matters.** The chained indirect effect of contextual support through trust calibration and collaborative regulation was significant, consistent with an indirect process account rather than a simple direct-outcome model.
5. **[[qualitative-research|Qualitative]] accounts distinguish judgment from enactment.** Interviewees separated task-sensitive trust judgments ("if it gives a citation or a technical claim, I will not trust it until I verify it") from enacted checking, comparison, and revision, which were coded as collaborative regulation.
6. **Self-report bounds the outcome.** The outcome was perceived transfer gains, not objective competence; interviews did not independently test whether students' actual ability improved.

## How the model was built and tested

The study began with semi-structured interviews with university students (Study 1), analyzed through open, axial, and selective coding to identify the core dimensions of contextual support, trust calibration, collaborative regulation, and perceived transfer gains, and to inform item development. The authors deliberately positioned trust calibration as distinct from general trust: its theoretical role is to connect contextual cues to students' later regulatory choices, and they describe it as adjusting reliance to task demands and system limitations rather than maintaining uniformly high or low [[trust]].

In Study 2, the resulting 22-item instrument was pilot tested and then administered to university students. Of 680 students who received the questionnaire, 654 returned a response (96.18% initial response rate), and 12 were excluded for completion times under one third of the sample median, long-string responding, failed logic checks, or more than 20% missing data, leaving an analytic sample of 642. The sample averaged 4.8 academic GenAI uses per week and skewed toward STEM (45.9%) and humanities (34.6%) students. The four-factor confirmatory model fit well (CFI = 0.953, RMSEA = 0.046), with Cronbach's alphas from 0.841 to 0.886 and evidence of configural, metric, and scalar invariance across gender and disciplinary area.

## The structural findings

The final structural model showed strong connections along the intended chain. Contextual support predicted trust calibration (β = 0.56, p < 0.001) and collaborative regulation (β = 0.18, p = 0.004); trust calibration predicted collaborative regulation (β = 0.49) and perceived transfer gains (β = 0.22); and collaborative regulation predicted perceived transfer gains (β = 0.54), all at p < 0.001. The direct path from contextual support to perceived transfer gains was not significant (β = 0.07, p = 0.183). Weekly GenAI use had small positive associations with collaborative regulation (β = 0.11) and perceived transfer gains (β = 0.09), while gender, year, and disciplinary area were not significant. Because these data are cross-sectional and the outcome is self-report, the authors emphasize that the findings clarify the interpretive limits of subjective measures rather than establish causal ordering.

## What this means for practice

- **Instructors.** Set explicit boundaries for GenAI use (what AI may help with and what must remain the student's own argument and evidence) so that contextual support can shape calibrated trust rather than leaving students to guess.
- **Instructors.** Teach verification as part of the academic work: model checking, comparing, and rewriting outputs, because collaborative regulation — not AI use itself — was the strongest proximal driver of perceived transfer.
- **[[learning-analytics|Learning analytics]] designers.** Resist equating high AI-use intensity with beneficial learning; the meaningful signal is whether use is accompanied by calibrated trust and active regulation.
- **Researchers.** Report trust calibration and collaborative regulation as separate constructs and treat perceived transfer gains as distinct from measured competence when interpreting survey-based findings.

## Limitations

- The outcome is perceived transfer gains captured through [[self-report-measures|self-report]]; interviews did not independently test whether objective competence improved.
- The data is cross-sectional, so the claimed structural ordering cannot be confirmed as a causal or temporal sequence despite the authors' qualitative accounts of recursiveness.
- Participants were university students in a single national context, and the findings may not generalize to other educational levels or cultural settings.
- The questionnaire was distributed to 680 students, and although non-response bias testing found no early-late differences, individual-level data for the 26 non-respondents were unavailable.

## Citation

Bu, F., & Li, W. (2026). [Trust calibration and perceived developmental gains in university students' collaboration with generative AI: an exploratory sequential mixed methods study](https://doi.org/10.3389/fpsyg.2026.1861072). *Frontiers in Psychology, 17*, 1861072.
