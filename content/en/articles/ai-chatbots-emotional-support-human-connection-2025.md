---
title: "Exploring the Impact of Artificial Intelligence Chatbots on Human Connection and Emotional Support Among Higher Education Students"
created: "2026-10-23T09:40:33-04:00"
updated: "2026-10-23T09:40:33-04:00"
type: article
pedagogy: [student-ai-interaction, well-being, social-emotional-learning, anxiety-and-stress]
technology: [conversational-ai, generative-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
institutions: [educational-policy-ai]
research_method: [survey]
level: [higher ed]
audience: [instructors, instructional designers, administrators, researchers]
page_kind: [evaluation]
sources: ['raw/papers/10.1177_21582440251340615.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-23"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Al-Zahrani (2025) surveyed 819 higher education students in Saudi Arabia about three things at once: whether [[conversational-ai|chatbots]] had thinned their sense of human connection, what they got out of using them, and how satisfied they were. The pattern is the paper's whole contribution — the same respondents rated their concerns about lost connection highest (M = 4.36), their chatbot experiences positively (M = 4.19), and their satisfaction high (M = 4.29). A regression then found that students who reported richer experiences and greater satisfaction also reported more concern, with experiences carrying most of the weight (b = .64 against b = .11). Al-Zahrani reads this as familiarity breeding discernment rather than disenchantment: the more students use these tools, the more clearly they see what a chatbot cannot supply. The claim is worth taking seriously and worth qualifying, because the design is a single [[self-report-measures|self-report]] survey, and a cross-sectional association between two self-rated constructs cannot decide whether use sharpens concern or concern accompanies use.

## Key Findings
1. **Concern about lost connection was the highest-rated construct:** the three concern items averaged M = 4.36 (SD = 0.77), led by "interacting with chatbots has diminished my sense of human connection" at M = 4.42.
2. **The same students rated the tools well:** experiences with chatbots averaged M = 4.19 (SD = 0.84), and access to information and resources drew the strongest single endorsement at M = 4.30.
3. **Satisfaction was high, not grudging:** overall satisfaction averaged M = 4.29 (SD = 0.72), with perceived impact on learning outcomes the top item at M = 4.35.
4. **Demographics predicted nothing:** MANOVA found no significant effect of gender, subjective AI expertise, or usage frequency on any perspective (Wilks' Lambda 0.997, p = 0.551; 0.990, p = 0.295; 0.992, p = 0.706).
5. **Experience and satisfaction jointly predicted concern:** the regression was significant (F = 383.556, p < .001), with standardized coefficients of b = .64 for experiences and b = .11 for satisfaction.
6. **The sample skewed toward heavy use:** 260 students (31.7%) reported daily AI use and 168 (20.5%) weekly, while 252 (30.8%) said they rarely use AI; 406 (49.6%) rated their own expertise low.

## Two constructs pointing in opposite directions

The finding that will travel is the coexistence, not either mean on its own. A reader expecting a simple harm story gets students who praise the tool and mourn the relationship in the same questionnaire. Al-Zahrani's interpretation is developmental: early use is about convenience, and repeated use teaches students where the tool stops — at the empathy, the nuance, the mutual obligation that make a relationship feel like one. That reading is consistent with the data but not forced by it. An equally plausible reading is dispositional: students who already value [[social-emotional-learning|social and emotional]] dimensions of campus life may both use chatbots heavily and notice their absence, with no causal arrow from use to concern. The paper reports a correlation and says so in its limitations, which is the right call; readers should resist upgrading it to a mechanism. What the data do establish is that [[student-ai-interaction|student-chatbot interaction]] is not experienced as a single thing: the same encounters carry both the efficiency gain and the relational deficit.

## What 819 students can and cannot tell us

The instrument is nine items on a 5-point Likert scale, three per construct, reviewed by three experts and internally consistent (Cronbach's alpha = .87; subscales .83, .85, and .72). That is a short scale, and the author concedes no factor analysis was run. Sampling combined random recruitment with snowballing through email and personal networks, which means the effective sample is a convenience one however the first wave was drawn, and the 51.4% female, 48.6% male split says nothing about how representative it is of Saudi higher education. All outcomes are self-reported attitudes measured once, in one country. The study's contribution is therefore descriptive: it maps how a large group of students talk about [[well-being]] and connection in relation to a tool, without measuring either outcome independently. The MANOVA nulls are also worth reading carefully: 819 respondents is ample power, so "no demographic effect" is a real absence rather than an underpowered shrug, but it applies only to gender, self-rated expertise, and self-reported usage frequency.

## Reading the regression honestly

The model regresses concern on experiences and satisfaction, and the paper sometimes writes as though it predicts concern from use. Both predictors are measured in the same sitting as the outcome, so the direction is a modeling choice, not a result. Multicollinearity is likely, since experiences and satisfaction correlate conceptually and the reported coefficients are standardized without the zero-order correlations; the residual mean square of 0.307 against a total of 485.639 implies the model leaves most variance unexplained even as F = 383.556. High F with modest explanatory reach is the signature of a large sample and a tight cluster of related items, not of a strong causal story. The defensible summary is that students who feel more positively about chatbots are also more articulate about what those chatbots cost them — a claim about how students frame [[human-ai-collaboration|human-AI collaboration]], not about what chatbots do to them.

## What this means for practice
- **Instructors.** Keep the relational work human: route routine questions to a chatbot if you like, but hold the office hours, the seminar discussion, and the feedback conversation where students are actually seen.
- **Instructional designers.** Design chatbot interactions that carry social presence — warm openings, acknowledgment of difficulty, an explicit handoff to a person — rather than treating the tool as a lookup service.
- **Administrators.** Write the [[educational-policy-ai|policy]] before the deployment: name which student queries a chatbot may own, which must reach a human adviser or [[student-support-and-success|counselor]], and how a student in distress gets escalated.
- **Researchers.** Measure use with logs and interviews, not only self-rated frequency, and test the direction of the experience–concern link with a longitudinal or experimental design.

## Limitations
- Single cross-sectional online survey of 819 students in Saudi Arabia, so the findings describe that context and cannot be generalized to other systems or cultures.
- All three constructs are self-reported attitudes from a nine-item instrument, with no observation of actual chatbot use or of students' relationships.
- The regression cannot establish direction; the author states that a longitudinal or experimental design would be needed to support causal claims.
- No factor analysis was conducted on the nine-item scale, so its dimensional structure is unverified.
- Sampling mixed random and snowball recruitment through personal networks, and the response rate is not reported.
- The paper reports no measure of student mental health or loneliness, so "emotional support" is inferred from agreement with three statements.

## Citation
Al-Zahrani, A. M. (2025). [*Exploring the Impact of Artificial Intelligence Chatbots on Human Connection and Emotional Support Among Higher Education Students*](https://doi.org/10.1177/21582440251340615). SAGE Open, 15.
