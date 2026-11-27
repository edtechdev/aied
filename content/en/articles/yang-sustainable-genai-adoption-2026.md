---
title: "From effectiveness to sustainable use: understanding university students’ adoption of generative AI for academic writing through an extended UTAUT mixed-methods study"
created: "2026-11-27T01:31:00-05:00"
updated: "2026-11-27T01:31:00-05:00"
type: article
published: "2026-09-04"
sources: ['raw/papers/yang-sustainable-genai-adoption-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey]
discipline: []
level: [higher ed]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Yang and colleagues combined an online survey of 1,084 Chinese [[higher-ed|university]] students with 15 interviews to study not just adoption of [[generative-ai|generative AI]] for [[writing-education|academic writing]] but "sustainable use". In an extended [[technology-acceptance-model|UTAUT]] model, performance expectancy, effort expectancy, social influence, perceived enjoyment and perceived [[creativity]] support were positively associated with behavioral intention, while perceived risk was negatively associated but weak. Facilitating conditions and intention predicted actual use. Perceived trust did not predict intention, the one hypothesis that failed. Interviews identified three dimensions of sustainable use: long-term continuance, balanced and moderate use, and responsible and ethical use. Because the survey was cross-sectional and [[self-report-measures|self-reported]] and the interviews were volunteer, the results describe associations and perceptions rather than durable change.

## Key Findings
1. **Several positive predictors shaped intention.** Performance expectancy, effort expectancy, social influence, enjoyment and creativity support were all positively associated with students' intention to use GenAI for writing.
2. **Perceived risk was a weak constraint.** Risk was negatively associated with intention, but the authors describe the magnitude as small.
3. **Trust did not predict intention.** The perceived-trust path was the sole unsupported hypothesis among the model's tests.
4. **Access and intention predicted actual use.** Both facilitating conditions and behavioral intention were positively associated with reported use behavior.
5. **Student characteristics changed some paths.** Gender, educational level, usage experience and disciplinary background moderated several relationships in the model.
6. **Interviews defined sustainability in three dimensions.** Students described continued use, balanced and moderate use, and responsible and ethical use as interdependent requirements.
7. **Use and sustainable use are different things.** The authors argue that continued adoption must be accompanied by [[critical-thinking|critical evaluation]], cognitive autonomy and responsible engagement.

## Survey sample and measurement

The questionnaire was piloted with 20 students and distributed through the Tencent Questionnaire platform in November 2025 to Chinese university students who reported prior GenAI use for academic writing. Of 1,222 responses, 138 were excluded as invalid, including completions under four minutes and incomplete submissions, leaving 1,084 for analysis. The sample included 603 male respondents (55.63%) and 481 female respondents (44.37%); 708 were undergraduates (65.31%) and 376 postgraduates (34.69%). STEM disciplines accounted for 50.83%, Humanities and [[social-sciences-education|Social Sciences]] for 20.76%, and Economics, Management and Law for 18.73%. DeepSeek was the most frequently used tool (43.54%), followed by ChatGPT (23.06%), Doubao AI (20.11%) and ERNIE Bot (9.96%).

The instrument measured ten constructs with items rated on a five-point Likert scale, from four items for performance expectancy to five for facilitating conditions and behavioral intention. Cronbach's alpha coefficients ranged from 0.824 to 0.893, composite reliability from 0.824 to 0.891, and average variance extracted from 0.539 to 0.644; all heterotrait-monotrait ratios were below 0.85. A Harman single-factor test on 42 items assigned 39.0% of variance to the first factor, below the stated 50% threshold. The follow-up interviews used 10 open-ended questions, continued until thematic saturation, and included 15 volunteers: seven males and eight females, nine undergraduates and six postgraduates. Each lasted approximately 25 minutes, was conducted in Chinese, transcribed and translated for reporting.

## Paths, moderators and qualitative dimensions

Structural equation modeling in R tested 14 hypotheses; 13 were significant at the 95% confidence level. Behavioral intention was predicted by performance expectancy (β = 0.195, p < 0.001), effort expectancy (β = 0.094, p = 0.030), social influence (β = 0.147, p < 0.001), creativity support (β = 0.211, p < 0.001) and enjoyment (β = 0.224, p < 0.001). Perceived risk was negative (β = −0.044, p = 0.019), while perceived trust was not significant (β = 0.009, p = 0.807). Use behavior was predicted by facilitating conditions (β = 0.355, p < 0.001) and intention (β = 0.531, p < 0.001). Model fit was reported as χ²/df = 2.251, CFI = 0.962 and RMSEA = 0.034.

Moderation appeared in several places. The performance-expectancy path was stronger for females (β = 0.239, p = 0.033); the creativity-support path was weaker for postgraduates (β = −0.426, p < 0.001); and the risk path was weaker for students with more than six months of experience (β = 0.089, p = 0.026). Students in fields more relevant to [[cs-education|computer science]] showed stronger paths from effort expectancy to performance expectancy (β = 0.278, p = 0.002) and from enjoyment to effort expectancy (β = 0.309, p < 0.001). In the interviews, participants described GenAI as a [[pedagogical-agent|learning companion]] or "sparring coach" but worried about dependence and [[cognitive-offloading|cognitive offloading]]. They reported verifying references in academic databases, avoiding sensitive data uploads and adapting use to university or journal rules. The authors conclude that sustainable use depends on critical, responsible and autonomous engagement, not acceptance alone.

## What this means for practice
- **Instructors.** Teach verification explicitly: ask students to check AI-generated references against source databases and to identify inaccuracies before incorporating output.
- **Instructors.** Differentiate guidance by stage and discipline, since postgraduates and undergraduates, and CS-relevant and other fields, showed different path strengths.
- **Institutions.** Set clear acceptable-use and disclosure guidelines and support balanced use rather than blanket prohibition, since students said they would adapt to stricter rules.
- **Researchers.** Follow the same cohort longitudinally to test whether intention translates into sustained, critical use rather than a one-time survey association.

## Limitations
- Participants were Chinese university students from a relatively homogeneous population, so transfer to other regions, cultures and education systems is uncertain.
- The survey was cross-sectional and relied primarily on self-reported use, leaving causal direction and actual behavior unverified.
- Interview participants were volunteers, so their views may not represent students who did not opt in.
- Although several moderating effects were reported, the design did not establish why group differences arose, and the authors' explanations are interpretive.
- The three dimensions of sustainable use came from interview accounts; the study did not test a measure of sustainable use or link those dimensions to observed writing behavior.

## Citation
Yang Y, Zhang C, Meng H and Shen J (2026) From effectiveness to sustainable use: understanding university students’ adoption of generative AI for academic writing through an extended UTAUT mixed-methods study. Front. Educ. 11:1920168. doi: 10.3389/feduc.2026.1920168.
