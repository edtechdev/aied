---
title: "Observer Perceptions of GenAI Use and Interpersonal Trust: The Roles of Warmth, Competence, and AI Literacy"
created: "2026-09-30T13:46:55-04:00"
updated: "2026-09-30T13:46:55-04:00"
type: article
sources: ['raw/papers/10.3390_bs16071221.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey]
discipline: [learning sciences]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
foundations: [ai-literacy, human-ai-collaboration, limitations-in-aied-research]
pedagogy: [social-norms-ai-use, student-ai-interaction]
technology: [generative-ai]
assessment: [peer-assessment, self-report-measures]
methods: [quantitative-research]
ethics: [trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Zhang, Geng and Qi surveyed 406 university students in Henan, China, in April 2026, asking each participant to recall a specific classmate who had used [[generative-ai|generative AI]] and then to rate that classmate's GenAI use, perceived AI literacy, warmth and competence, and the participant's own [[trust]] in them. GenAI use was negatively associated with interpersonal trust, and perceived warmth and perceived competence each carried part of that association. Perceived AI literacy moderated only the direct path: the negative association was significant when perceived AI literacy was low and non-significant when it was high, while the indirect paths through warmth and competence were unchanged. The design is a single cross-sectional recall survey, so the reported paths are associations rather than effects, and every rating is one student's perception of a remembered peer rather than a measure of a real working relationship.

## Key Findings

- **GenAI use went with lower interpersonal trust.** GenAI use significantly and negatively predicted interpersonal trust (β = −0.19, t = −3.96, p < 0.001), and the two were negatively correlated (r = −0.19, p < 0.01).
- **Warmth and competence each carried part of the association.** GenAI use predicted lower perceived warmth (β = −0.11, t = −2.19, p < 0.05) and lower perceived competence (β = −0.12, t = −2.27, p < 0.05), while perceived warmth (β = 0.47, t = 9.71, p < 0.001) and perceived competence (β = 0.32, t = 6.68, p < 0.001) both predicted trust. The indirect effect through warmth was −0.05, 95% CI [−0.11, −0.01]; through competence it was −0.04, 95% CI [−0.08, −0.004]. The direct path remained significant but shrank after the mediators entered (β = −0.09, t = −2.19, p < 0.05).
- **Perceived AI literacy buffered the direct path only.** The interaction between GenAI use and perceived AI literacy predicted interpersonal trust (β = 0.13, t = 5.35, p < 0.001, 95% CI [0.08, 0.18]). Simple slopes were β = −0.23 (t = −5.69, p < 0.001) at low perceived AI literacy, β = −0.10 (t = −3.00, p < 0.01) at average, and β = 0.03 (t = 0.55, p = 0.57) at high.
- **It did not moderate the indirect paths.** The interaction did not predict perceived warmth (β = 0.04, t = 1.00, p = 0.32, 95% CI [−0.04, 0.11]) or perceived competence (β = 0.05, t = 1.46, p = 0.15, 95% CI [−0.02, 0.12]), and the index of moderated mediation was 0.02 for each mediator.

## How the study was run

The authors distributed 450 [[self-report-measures|questionnaires]] through the Credamo platform to students at Henan Normal University and Henan Women's Vocational College during April 2026. Forty-four were dropped for failed attention checks or straight-lining, leaving 406 valid responses, an effective response rate of 90.2%. Participants were 17 to 23 years old (M = 19.39, SD = 1.23); 88 were male (21.7%) and 318 were female (78.3%). The independent variable was GenAI use, the mediators were perceived warmth and perceived competence, the moderator was perceived AI literacy, and the dependent variable was interpersonal trust. Gender, grade, age, major and the duration of the relationship with the recalled classmate were entered as controls.

All measures were adapted from established scales, translated into Chinese and back-translated by two bilingual researchers, and administered on a uniform 5-point Likert scale. GenAI use used three adapted items (Cronbach's α = 0.80); perceived AI literacy used the five-item version of the Perceived [[ai-literacy|Artificial Intelligence Literacy]] Questionnaire after one item was deleted (α = 0.80); warmth and competence used the six-item subscales of the Stereotype Content Model (α = 0.92 and 0.91); interpersonal trust used McAllister's 11 items, split into affect-based trust (five items, α = 0.87) and cognition-based trust (six items, α = 0.80). The literacy, warmth, competence and trust scales were all rewritten in the third person, so they capture what the participant perceives about the recalled classmate rather than self-report.

The recall method is the design's distinctive feature: participants named the initials of a classmate who had used AI and then rated that person, a procedure meant to focus attention on a specific individual. Analysis ran in SPSS 27 with the PROCESS macro, using Model 4 for mediation and Model 8 for moderated mediation, with 5,000 bootstrap samples and 95% confidence intervals. A confirmatory factor analysis supported the five-factor structure (CFI = 0.91, TLI = 0.90, RMSEA = 0.07, SRMR = 0.04), with loadings from 0.62 to 0.87, composite reliability from 0.80 to 0.92 and average variance extracted from 0.50 to 0.65. Harman's single-factor test put the first factor at 38.89% of variance, below the conventional 40% threshold.

## Reading the result

The paper's story is that GenAI use is read socially: observers see a heavy user as somewhat less warm and less competent, and those two perceptions are what carry the drop in trust. Both mediators mattered at similar magnitudes, which the authors present as evidence that warmth-related traits such as sincerity and competence-related traits such as intelligence are both at work in peer trust judgments. The moderation result is narrower than it first appears. Perceived AI literacy changed the direct association — at high perceived literacy the negative slope disappeared — but it did not change the warmth or competence routes, and the indices of moderated mediation were not significant. The authors read that pattern as literacy acting as a contextual cue that quiets the "this person relies on AI" inference without altering how the observer reads the user's character. They also flag the high-literacy null as a result that needs replication.

## What this means for practice

- **Treat AI use as a social signal, not only an integrity question.** In this sample, peer trust tracked perceived warmth (β = 0.47) and perceived competence (β = 0.32) more strongly than GenAI use itself, so how a class frames AI use may matter as much as whether it is permitted.
- **Make reasoning about AI visible.** The negative association between use and trust was significant at low perceived AI literacy (β = −0.23) but not at high (β = 0.03, p = 0.57), which suggests work that surfaces how a student evaluates and checks AI output can shape peers' reading of that student.
- **Do not expect a literacy framing to change the character judgment.** Perceived AI literacy did not moderate the warmth or competence paths, so presentations about "responsible AI use" address the direct trust concern, not the impression of the user's warmth.
- **Watch peer-rating contexts.** Because students judge one another partly through AI use, [[peer-assessment]] and [[group-work]] routines that make AI use salient without context risk importing that penalty into evaluations of the person.

## Limitations

- The design is a cross-sectional recall survey, so no causal direction is established, and memory biases are likely: participants may have recalled especially salient classmates, including those with whom they already had positive or negative relationships.
- The sample is a convenience sample of 406 students from two institutions in Henan, recruited online and 78.3% female, so generalizability beyond that setting is limited.
- Every measure is a perception: the study records what an observer believes about a remembered classmate's GenAI use and AI literacy, not measured use or literacy, and the trust rating describes a recalled relationship rather than an observed one.
- Perceived AI literacy moderated only the direct path; the indirect paths and the indices of moderated mediation were not significant, and the authors call for replication before the buffering reading is relied on.

## Citation

Zhang, Z., Geng, J., & Qi, C. (2026). [Observer Perceptions of GenAI Use and Interpersonal Trust: The Roles of Warmth, Competence, and AI Literacy](https://doi.org/10.3390/bs16071221). *Behavioral Sciences*, 16(7), 1221.