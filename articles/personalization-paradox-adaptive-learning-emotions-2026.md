---
title: "The personalization paradox: how AI-driven adaptive learning environments are associated with college students'"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-19T06:58:22-04:00"
type: article
foundations: [agency, ai-literacy]
pedagogy: [metacognition, motivation, self-regulated-learning]
technology: [adaptive-learning, personalized-learning]
audience: [researchers, instructors, instructional designers, policymakers, edtech designers]
research_method: [longitudinal survey, structural equation modeling]
sources: ['raw/papers/10.3389_fpsyg.2026.1915839.md']
confidence: high
level: [higher ed]
---

> **Synthesis:** This three-wave longitudinal study of 486 Chinese [[higher-ed|undergraduates]] found that perceiving one's [[adaptive-learning|AI-adaptive learning environment]] as highly personalized was negatively associated with [[self-regulated-learning|self-regulated learning]], evidencing the "[[personalized-learning|personalization]] paradox." Changes in academic emotions—reduced enjoyment and increased anxiety and boredom—mediated more than half of this effect, while [[ai-literacy|AI literacy]] buffered the emotional harm, moderating the first stage of the pathway.

## Key Findings

- **The personalization paradox is empirically supported.** Students who perceived their AI-adaptive environment as more personalized reported weaker self-regulated learning, and this negative association held even after accounting for the emotional pathways.
- **Academic emotions carry much of the mechanism.** Reduced enjoyment together with heightened anxiety and boredom explained more than half of the total effect linking perceived personalization to weaker self-regulation. Because a direct effect remained after accounting for these routes, the mediation is partial rather than full, suggesting other cognitive or motivational mechanisms also contribute.
- **Adaptive environments reshape the emotional profile.** Perceiving greater personalization was tied to less enjoyment and more anxiety and boredom; enjoyment in turn supported self-regulated learning, while anxiety and boredom impaired it.
- **AI literacy is a protective moderator.** The negative emotional associations with adaptive environments were pronounced among students low in AI literacy but weakened substantially—in several cases to statistical non-significance—among those with high AI literacy. This buffering was strongest on the environment-to-emotion links, consistent with the view that literacy shapes how learners appraise the system rather than how they regulate afterward.

## Study Design & Method

A three-wave longitudinal survey was administered across one semester to 486 undergraduates recruited via stratified cluster sampling from 28 classes at four Chinese universities. At T1 (weeks 2–3) students reported their perception of the AI-adaptive environment, their AI literacy, and demographics; at T2 (weeks 9–10) they reported academic emotions (enjoyment, anxiety, boredom) via a Chinese adaptation of the Achievement Emotions Questionnaire; at T3 (weeks 16–17) they reported self-regulated learning using an adaptation of the Self-Regulated Learning Interview Schedule. Retention was high, and the modest attrition appeared random.

Integrating control-value theory and self-regulated learning theory, the researchers estimated a moderated mediation structural equation model with latent interaction terms, cluster-robust standard errors to account for students nested in classes, and full-information maximum likelihood for missing data. AI literacy was modeled as a moderator of only the first-stage (environment → emotion) pathways, since emotions were theorized to influence self-regulated learning largely automatically. Analyses controlled for gender, academic year, discipline, weekly AI use hours, and primary AI tool type.

## Implications

- **For educators:** actively tutor students to use AI tools critically rather than passively, and use reflective activities that help students notice when algorithmic recommendations undermine their own planning and monitoring.
- **For [[stakeholders|instructional designers]] and AI developers:** embed learner autonomy as a design principle—letting students adjust algorithm recommendations—and enhance system transparency about recommendation rationale to sustain agency and [[trust]].
- **For university leaders and policymakers:** integrate AI literacy as a credit-bearing module and a component of digital citizenship and emotional [[well-being]], and provide faculty [[educational-development|professional development]].
- **For researchers:** the study suggests emotional mechanisms are at least as consequential as cognitive ones, highlighting the need to study AI literacy interventions and cross-cultural variation rather than assume AI efficiency automatically benefits learning.

## What this means for practice

- **Instructors.** Turn reflective use into an assessed routine: have students record when an algorithmic recommendation displaced their own plan and tutor them to interrogate recommendations instead of accepting the default path.
- **Instructors.** Read the emotional signal as a design warning: reduced enjoyment and increased anxiety and boredom carried 54.8% of the total association between perceived personalization and weaker self-regulated learning.
- **Designers.** Build learner autonomy into the interface so students can adjust or reject recommendations, and surface the rationale behind a recommendation, because the negative environment-to-emotion paths weakened to statistical non-significance among students high in AI literacy.
- **Administrators.** Fund AI literacy as a credit-bearing component of digital citizenship and emotional well-being rather than a one-off workshop, and pair it with faculty professional development.
- **Researchers.** Put the mechanism to an experimental test: the three waves separate measurement occasions but do not establish causality, so an RCT or cross-lagged panel design is what the emotional pathway claim still needs.

## Limitations

- **Observational design** — despite temporal separation of waves, causal inference is limited; [[rct|RCTs]] or cross-lagged panel designs are needed.
- **Self-reported measures** — potential bias; future work should add behavioral logs, eye-tracking, or physiological indices.
- **Restricted generalizability** — the Chinese undergraduate sample limits cross-cultural conclusions, given that AI acceptance and trust vary by context.
- **Aggregated AI tool measure** — diverse tools were collapsed into a single composite, possibly masking tool-specific effects.
- **Common method bias** — assessed and found minimal, but not fully ruled out without multi-method designs.

## Connected Concepts

- [[self-regulated-learning]] — the key outcome; AI-adaptive environments were negatively associated with it.
- [[adaptive-learning]] — the defining feature of the environments whose personalization is under study.
- [[ai-literacy]] — the moderator buffering negative emotional effects of adaptive environments.
- [[personalized-learning]] — the broader paradigm with the autonomy trade-off central to the paradox.
- [[agency]] — the construct the paper argues algorithmic delegation erodes.
- [[metacognition]] — the planning/monitoring skills theorized to decline when decisions are outsourced.
- [[motivation]] — underpins the emotional-reaction mechanism via control-value appraisals.

## Connected Articles

- [[ai-overreliance-complex-adaptive-system-2026]] — examines overreliance in adaptive AI systems, aligning with the paradox's mechanism.
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]] — SRL in adaptive learning with feedback, complementing the same learner-outcome question.
- [[brunnstrom-ai-interaction-literacy-srl-2026]] — links AI interaction literacy to SRL, echoing AI literacy's protective role here.
- [[song-genai-learning-partner-srl-over-time-2026]] — longitudinal SRL trajectory with a GenAI partner, parallel to this study's SRL erosion.
- [[de-barba-srl-genai-2026]] — conceptualizes SRL in GenAI contexts relevant to adaptive environments.
- [[student-dependency-on-ai-literacy-self-efficacy-2026]] — connects AI dependency and literacy, mirroring the buffering finding.

## Citation

Li, J., Lin, Z., & Qiu, C. (2026). [The personalization paradox: how AI-driven adaptive learning environments are associated with college students' academic emotions and self-regulation learning—a moderated mediation model](https://doi.org/10.3389/fpsyg.2026.1915839). *Frontiers in Psychology, 17*, 1915839.
