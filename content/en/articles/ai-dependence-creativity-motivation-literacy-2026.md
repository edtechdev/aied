---
title: "AI Dependence and Self-Reported Creativity Among Chinese College Students: The Roles of Motivation for AI Use and Perceived AI Literacy"
created: "2026-09-30T12:05:55-04:00"
updated: "2026-09-30T12:05:55-04:00"
type: article
sources: ['raw/papers/10.3390_bs16091712.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
level: [higher ed]
audience: [instructors, researchers, faculty developers]
foundations: [cognitive-offloading, ai-literacy, limitations-in-aied-research, ai-education]
pedagogy: [creativity, motivation, self-determination-theory, student-ai-interaction, well-being]
technology: [generative-ai, conversational-ai, llm]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [ai-misuse-learning-harm]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Hou, Huang, Wang, Yao, Zhang and Zhao surveyed 5,764 students at 37 Chinese universities and fitted a moderated parallel mediation model relating AI dependence to [[creativity]]. Four motivations for AI use — escape, social, instrumental and entertainment — served as parallel mediators, and perceived [[ai-literacy|AI literacy]] moderated the first-stage paths and the direct path. AI dependence correlated negatively with self-reported creativity (r = −0.17), with a total effect of β = −0.165 and a direct effect of β = −0.122 once the mediators entered the model. The indirect pathways diverged in sign: escape and social motivation carried negative indirect associations, while instrumental and entertainment motivation carried positive ones. Creativity here is self-reported rather than measured, and the design is cross-sectional, so every path is a statistical association, not a demonstrated mechanism.

## Key Findings

- **AI dependence was negatively associated with self-reported creativity.** The bivariate correlation was r = −0.17 (p < 0.001); the total effect was β = −0.165, Boot SE = 0.013, 95% Boot CI [−0.195, −0.143], and the direct effect after controlling the four mediators was β = −0.122, Boot SE = 0.010, 95% Boot CI [−0.155, −0.089] (both p < 0.001).
- **The four [[motivation|motivational]] pathways diverged in sign in the unconditional mediation model.** Indirect effects were −0.075, 95% Boot CI [−0.103, −0.048] through escape motivation; −0.022, 95% Boot CI [−0.046, −0.0006] through social motivation; 0.012, 95% Boot CI [0.007, 0.018] through instrumental motivation; and 0.038, 95% Boot CI [0.031, 0.046] through entertainment motivation.
- **Perceived AI literacy moderated three of the four first-stage paths.** The AI dependence × AI literacy interaction was significant for escape motivation (b = −0.163, p < 0.001), social motivation (b = −0.135, p < 0.001) and entertainment motivation (b = −0.045, p < 0.001), but not for instrumental motivation (b = 0.014, p = 0.228). The positive associations between AI dependence and escape, social and entertainment motivation grew weaker as perceived AI literacy increased.
- **It did not moderate the direct association between AI dependence and creativity.** The interaction term was b = −0.006, SE = 0.007, t = −0.906, p = 0.365, 95% CI [−0.019, 0.007], so the study reports no evidence that perceived AI literacy buffers or intensifies the direct dependence–creativity link.
- **Two pathways changed sign between models.** Instrumental motivation was positively associated with creativity in the preliminary model but negative and significant at low (−0.006), mean (−0.007) and high (−0.007) AI literacy in the moderated model, with a non-significant index of moderated mediation (−0.0004, 95% Boot CI [−0.0014, 0.0004]). Social motivation ran the other way: negative in the preliminary model (−0.022) but positive and significant at low (0.016), mean (0.013) and high (0.009) AI literacy in the moderated model.
- **Higher AI literacy was itself associated with higher self-reported creativity.** The correlation was r = 0.43 (p < 0.001), and the moderated model explained 21.1% of the variance in creativity, R2 = 0.211, F(7, 5756) = 220.427, p < 0.001.

## How the study was designed and measured

This is a [[quantitative-research|cross-sectional survey]] of full-time undergraduate and graduate students enrolled in the fall semester of 2024, recruited by convenience sampling supplemented with snowball recruitment through classmates, colleagues and campus contacts, using both paper-based and online [[administrator|administration]]. The sample covered 37 universities across regions including Beijing, Shanghai, Zhengzhou and Guiyang. Of 5,916 questionnaires collected, 147 cases with extreme values (|Z| > 4) on completion time, age or scale scores were excluded, along with five cases with data-entry errors, leaving 5,764 participants (97.43% of the initial sample). Participants ranged in age from 16 to 38 years (M = 20.87, SD = 2.44); of the 5,760 with demographic data, 1,668 were male (28.96%) and 4,078 female (70.80%).

AI dependence was measured with a five-item Chinese adaptation of a smartphone addiction scale (McDonald's omega = 0.889), perceived AI literacy with a 12-item scale covering awareness, use, evaluation and [[ethics]] (omega = 0.936), motivation for AI use with a four-dimension scale of three items each (overall omega = 0.879; escape 0.929, social 0.910, instrumental 0.851, entertainment 0.932), and [[self-report-measures|self-reported creativity]] with a 17-item scale covering divergent thinking, intellectual application and personality traits (omega = 0.920). Means on the 4-point dependence and motivation scales were 1.78 (SD = 0.57) for AI dependence, 1.47 (SD = 0.58) for escape, 1.54 (SD = 0.63) for social, 2.77 (SD = 0.80) for instrumental and 2.32 (SD = 0.85) for entertainment motivation; on a 7-point scale, AI literacy averaged 5.15 (SD = 0.86); on a 5-point scale, self-reported creativity averaged 3.59 (SD = 0.58).

Harman's single-factor test extracted nine factors with eigenvalues above one, the first accounting for 24.35% of the variance, below the 40% threshold, and a theoretical 12-factor model fitted far better than a single-factor model (χ2/df = 19.77 against 144.03). Between-university clustering was negligible (ICCs of approximately 0 to 0.019), so single-level regression models were retained. The paper positions the study against mixed prior evidence, noting that experimental work has found AI use can improve the quality or fluency of creative outputs on specific tasks, which addresses a different construct from the self-reported creative tendencies measured here.

## What this means for practice

- **Instructors.** Treat the motivation behind AI use, not its frequency, as the actionable signal. The strongest negative indirect pathway ran through escape motivation (−0.075), so [[metacognition|metacognitive]] prompts, [[process-oriented-assessment|process-based assessment]] and AI-use logs that help students notice when they turn to AI to avoid [[anxiety-and-stress|anxiety]], uncertainty or task difficulty are the paper's suggested response.
- **Faculty developers building AI literacy programs.** Do not assume literacy buffers dependence. The dependence × literacy interaction on creativity was not significant (p = 0.365), the moderating effects were small (incremental R2 = 0.0002–0.028), and literacy significantly weakened only the escape, social and entertainment first-stage paths, not the instrumental one (p = 0.228).
- **Instructors designing assignments.** Ask for process evidence — idea logs and reflection notes — and have students generate initial ideas independently before consulting AI, then document how AI input was evaluated. The paper presents these as proposals that still require systematic testing, not as validated practice.
- **Researchers and assessment designers.** Pair self-report creativity measures with performance-based assessment. The scale used here captures students' perceptions of their own divergent thinking and creative traits, not the originality of what they actually produce; the paper notes it should not be read as a direct measure of behavioral creative performance.

## Limitations

- The cross-sectional design prevents causal conclusions. Although the model was specified with AI dependence preceding motivation, the authors note that motivations may contribute to the development of dependence and that the associations may be reciprocal over time; the indirect paths should not be read as evidence of a temporal or psychological mechanism.
- All measures were self-report. Creativity in particular reflects students' perceptions rather than independently evaluated products, and the design may have inflated the observed associations even though the measurement analyses argued against severe common method bias.
- The AI dependence scale was adapted from a smartphone addiction scale, which may not fully separate maladaptive dependence from intensive but functional academic AI use; the authors call for behavioral indicators of frequency, duration and task context.
- Perceived AI literacy was self-reported and may reflect perceived rather than objective competence; the moderation effects were modest in magnitude, and the paper warns against reading them as evidence that higher perceived AI literacy necessarily buffers the negative correlates of AI dependence.

## Citation

Hou, J., Huang, Y., Wang, Q., Yao, X., Zhang, P., & Zhao, F. (2026). [AI Dependence and Self-Reported Creativity Among Chinese College Students: The Roles of Motivation for AI Use and Perceived AI Literacy](https://doi.org/10.3390/bs16091712). *Behavioral Sciences*, 16(9), 1712.