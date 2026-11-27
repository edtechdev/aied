---
title: "Understanding Behavioral Intention to Use AI Note-Taking Tools in Online Learning: A Self-Determination Theory Perspective"
created: "2026-11-27T13:50:00-05:00"
updated: "2026-11-27T13:50:00-05:00"
type: article
published: "2026-11-11"
sources: ['raw/papers/xia-ai-notetaking-intention-sdt-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
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

> **Synthesis:** Xia and colleagues examined why online learners intend to use AI note-taking tools. In a survey of 380 responses, 308 valid cases were retained after screening, and structural equation modeling tested a model based on [[self-determination-theory|self-determination theory]]. Processing fluency and learning agility were each positively associated with perceived autonomy, competence, and relatedness, and all three needs were positively associated with behavioral intention. However, the indirect associations with intention ran through competence and relatedness, not autonomy. A context-specific cognitive-load measure moderated several first-stage paths; because higher scores reflected more favorable ratings of information presentation and comprehension support, the interactions indicate variation across score levels rather than differences between higher and lower overall load. The study measured intention, not actual tool use or learning outcomes.

## Key Findings
1. **Ease of processing and adaptability both mattered.** Processing fluency and learning agility were each positively associated with perceived autonomy, perceived competence, and perceived relatedness.
2. **Two needs carried the indirect associations.** Intention was linked indirectly to both predictors through competence and relatedness; the autonomy routes were not statistically significant.
3. **Autonomy still had a direct link.** Perceived autonomy was positively associated with behavioral intention, though the indirect route through autonomy was not supported.
4. **Cognitive-load scores changed some paths.** After false-discovery-rate correction, the interaction between learning agility and load scores for autonomy and between processing fluency and load scores for competence remained significant.
5. **The model explained a large share of intention.** The structural model accounted for 68.2% of the variance in behavioral intention.
6. **Discriminant validity was not fully clean.** Four pairs of constructs missed the Fornell–Larcker criterion, although all heterotrait–monotrait ratios stayed below the 0.85 threshold.

## What the study measured

The survey drew 380 responses from undergraduate and [[graduate-education|postgraduate]] students and working professionals in adult self-study [[undergraduate-education|undergraduate education]] at Guangdong University of Technology. Eligibility required prior use of an AI note-taking assistant. Responses completed in less than 40 s (n = 45) or failing an attention check (n = 27) were excluded, leaving 308 valid responses (81.05%). The final group included 125 men and 183 women; 275 were aged 18–25 years (89.29%), 16 were 26–30 years, six were 31–40 years, and 11 were 41 years or older. Participants reported experience with several tools, including Tingnao AI (159, 51.62%), DingTalk (129, 41.88%), NotebookLM (116, 37.66%), Youdao (83, 26.95%), and Tongyi (50, 16.23%); multiple responses were permitted.

Tingnao AI was shown as an example of a tool with real-time transcription, automatic note generation, content structuring, and note export, but participants were not asked to rate one application. All items used a five-point Likert scale. Processing fluency was adapted to the ease of locating and understanding AI-generated note material; learning agility concerned adapting to the tool and to new learning tasks. The cognitive-load items were adapted from cognitive-load research and covered clarity, organization, redundancy, and comprehension support. Because all four items were positively worded and averaged without reverse coding, higher scores meant more favorable responses to those aspects, not higher overall load.

The seven-factor measurement model fit acceptably: χ²/df = 1.522, CFI = 0.962, TLI = 0.952, IFI = 0.962, and RMSEA = 0.041. Cronbach's alpha values ranged from 0.808 to 0.855. The authors report that four construct pairs — cognitive load with processing fluency, processing fluency with relatedness, competence with intention, and relatedness with intention — did not meet the Fornell–Larcker criterion, while heterotrait–monotrait values ranged from 0.441 to 0.791. A seven-factor model fit better than a six-factor model combining fluency and load. The structural model showed χ²/df = 1.998, CFI = 0.936, TLI = 0.928, IFI = 0.937, and RMSEA = 0.057, explaining 48.3% of the variance in perceived autonomy, 43.6% in competence, 60.5% in relatedness, and 68.2% in behavioral intention.

## Which pathways were supported

All nine proposed structural paths were significant. Standardized estimates were 0.499 for learning agility to autonomy, 0.429 to competence, and 0.394 to relatedness; 0.483 for processing fluency to autonomy, 0.502 to competence, and 0.671 to relatedness; and 0.171 for autonomy to intention, 0.445 for competence to intention, and 0.382 for relatedness to intention. Adding direct paths from the two predictors to intention did not improve fit (Δχ²(2) = 2.120, p = 0.346), and neither direct path was significant.

Bootstrap indirect effects confirm the split. The indirect paths through competence were 0.211 for processing fluency and 0.185 for learning agility; through relatedness they were 0.243 and 0.146. Through autonomy, the estimates were 0.078 (95% CI [−0.022, 0.218], p = 0.134) for processing fluency and 0.083 (95% CI [−0.024, 0.226], p = 0.128) for learning agility, both nonsignificant. In separate PROCESS Model 7 analyses, the learning-agility-by-load interaction predicted autonomy (b = −0.163, 95% CI [−0.253, −0.073]), and the fluency-by-load interaction predicted competence (b = −0.202, 95% CI [−0.334, −0.071]); both survived Benjamini–Hochberg correction. Simple slopes for fluency to competence were b = 0.524 at lower load scores and b = 0.251 at higher scores. Moderated mediation was significant for learning agility through autonomy (index = −0.0691, 95% bootstrap CI [−0.1167, −0.0130]) and for fluency through competence (index = −0.0974, 95% bootstrap CI [−0.1621, −0.0178]). The authors caution that marginal adjusted p values of 0.05002 for two other interactions require cautious interpretation.

## What this means for practice
- **Tool developers.** Consider interfaces and tutorials that support users' sense of competent, [[self-directed-learning|self-directed]] use, while recognizing that the paper says their effectiveness still requires evaluation.
- **Instructors.** Consider giving guidance on how to use AI note-taking tools in [[online-teaching-and-learning|online courses]], subject to further empirical evaluation rather than assuming benefit.
- **Tool designers.** Keep generated notes easy to process and clearly structured, since processing fluency was positively associated with competence and relatedness.
- **Researchers.** Treat perceived relatedness with an AI assistant as perceived relational support, not as interpersonal relatedness in the original theoretical sense.
- **Instructors.** Do not read the intention findings as evidence of better learning: the study measured intention, not actual tool use, note quality, or achievement.

## Limitations
- **Convenience sampling.** Many participants came from university-associated networks, most were aged 18–25, and institutional and geographic backgrounds were not collected.
- **Unmeasured usage.** Frequency and duration of AI note-taking use were not assessed, and tool examples varied even though Tingnao AI was shown as an illustration.
- **Measurement caveats.** Four construct pairs failed the Fornell–Larcker criterion; learning-agility and need-satisfaction items were context-specific, and PA4 may reflect control over tool functions more than autonomy.
- **Cognitive-load interpretation.** The positively scored, context-adapted load items did not separately measure intrinsic, extraneous, and germane load, so higher scores cannot be read as higher overall load.
- **Statistical caution.** Some interactions were only marginally significant after false-discovery-rate correction, and the Bollen–Stine bootstrap indicated exact model fit was not supported.
- **Cross-sectional single-source design.** Causal interpretation is limited; common method bias cannot be ruled out, and behavioral intention was not observed as actual use or learning outcomes.

## Citation

Xia T, Zhou M, He X, and Mo X (2026) Understanding Behavioral Intention to Use AI Note-Taking Tools in Online Learning: A Self-Determination Theory Perspective. *Behavioral Sciences*, 16, 2142. https://doi.org/10.3390/bs16112142
