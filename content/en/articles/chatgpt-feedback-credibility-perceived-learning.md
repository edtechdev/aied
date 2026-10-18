---
title: "ChatGPT's feedback credibility and students' perceived learning: the role of agent-related social perceptions"
created: "2026-10-18T08:28:00-04:00"
updated: "2026-10-18T10:37:53-04:00"
type: article
sources: ['raw/papers/chatgpt-feedback-credibility-perceived-learning.md']
confidence: high
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
discipline: [business education]
audience: [instructors, researchers, faculty developers, assessment designers]
level: [higher ed, undergraduate]
foundations: [theories-and-frameworks, human-ai-collaboration]
technology: [generative-ai, llm, conversational-ai]
pedagogy: [motivation]
assessment: [feedback, ai-feedback-quality, self-report-measures, learning-gains, peer-assessment]
ethics: [trust-calibration, ai-use-disclosure]
methods: [quantitative-research]
ai_assist:
  - model: "deepseek/deepseek-v4.1-flash"
    role: drafting
    date: "2026-10-18"
    agent: hermes
contributors: [editor]
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Pérez-López and colleagues (2026) ask why students accept or discount [[feedback|feedback]] produced by [[generative-ai|ChatGPT]], and their answer is that students treat the tool as a social agent. Surveying 230 business and marketing students across two Spanish [[higher-ed|universities]] after an AI-supported essay task, the authors model ChatGPT's perceived warmth and competence as antecedents of its feedback credibility, and credibility in turn as a predictor of [[self-report-measures|perceived learning]]. The key finding is that perceived competence drives credibility directly, while perceived warmth works only through human-like empathy — students do not credit a warm tool unless it also seems to understand them. Credibility then predicts perceived learning, and students who are more sensitive to grade-based rewards discount AI feedback more strongly, suggesting that the same feedback is read differently depending on what a student thinks the [[assessment]] is for.

## Key Findings

1. **Warmth alone does not buy credibility.** The direct path from perceived warmth to feedback credibility was not supported. Warmth's effect was mediated by human-like empathy, meaning a tool must appear both friendly and understanding before students treat its feedback as credible.
2. **Perceived competence works both directly and indirectly.** Competence predicted credibility directly and also indirectly through human-like empathy. Both hypotheses concerning competence were supported, making it the more reliable antecedent of the two social perceptions tested.
3. **Human-like empathy is the mediating construct.** The study's supported mediation path is warmth and competence → human-like empathy → credibility. Empathy carries the effect that warmth cannot deliver on its own, which the authors interpret through anthropomorphism and social-perception theory rather than through [[ai-feedback-quality|feedback quality]].
4. **Credibility predicts perceived learning.** The path from ChatGPT's feedback credibility to students' perceived learning was supported. The reported standardized slopes are 0.733 for the credibility-to-perceived-[[recommender-systems-and-learning-paths|learning path]] and 0.607 and 0.483 on the two mediation paths, with the model explaining a substantial share of variance in perceived learning.
5. **Grade-reward sensitivity moderates negatively.** Students who were more sensitive to grade-based rewards showed a weaker credibility-to-perceived-learning relationship. The authors read this as students evaluating AI feedback against its instrumental payoff — if it will not raise the mark, its credibility matters less.
6. **Quality sensitivity did not moderate.** The hypothesis that students highly sensitive to feedback quality would weight credibility more strongly was not supported. The study reports that quality-sensitivity had no significant moderating effect, which is a null result the authors note without fully explaining.
7. **The design was an authentic classroom task.** 230 students wrote 180–220 word paired essays over 40 minutes in seven course groups, using ChatGPT for idea generation and feedback on structure, argument, grammar and spelling. The survey instrument was completed in English and Spanish, and the constructs were measured with adapted reflective scales on seven-point Likert items.

## Why the social-perception framing changes the question

The study's contribution is to stop asking whether AI feedback is accurate and start asking how students decide whether to treat it as credible. The model imports warmth and competence from the social-perception literature on service robots and applies them to a text-based [[conversational-ai|conversational agent]]. That move has a practical consequence: the levers the study identifies are not accuracy levers. If credibility is built through perceived competence and human-like empathy, then design choices about how feedback is phrased, attributed and explained may matter as much as whether the feedback is correct. It also means that a [[trust-calibration|trust-calibration]] problem can arise without any error in the feedback — students may under-weight a well-calibrated system because it fails the empathy test, or over-weight one that performs well socially.

## The grade-reward finding and the instrumental reading of feedback

The moderation result is the study's most interesting and least comfortable finding. A negative moderation by grade-reward sensitivity means the credibility-perceived learning link weakens precisely among students most focused on marks. The authors suggest these students approach AI feedback as a means to a grade, so when the feedback does not translate into reward they discount it. That reading sits awkwardly beside the broader literature on [[feedback-literacy|feedback literacy]], which treats the disposition to use feedback as something educators cultivate. Here the disposition is measured as sensitivity to rewards, and the finding implies that instrumental orientations to assessment shape how AI feedback is received. The practical implication is that credibility interventions aimed at perceived warmth or competence may have limited reach with reward-focused students, for whom the relevant question is what the feedback will do to the mark.

## What this means for practice

- **Instructors.** Attend to how AI feedback is presented, not only to whether it is accurate. The study's supported paths run through perceived competence and human-like empathy, so a correct comment delivered as a bare judgment may be discounted.
- **Assessment designers.** If your students are strongly grade-focused, pair AI feedback with explicit statements about how it connects to the assessment criteria and to the mark. The moderation finding suggests credibility alone will not move these students.
- **Faculty developers.** Use the warmth–competence–empathy model to frame discussions of AI feedback with teaching staff: the design question is social as well as technical, and the constructs are measurable.
- **Researchers.** Note the design's constraints before generalizing — a single discipline cluster, a paired [[writing-education|writing]] task, and perceived learning as the outcome. Replication with objective learning measures and in other disciplines is needed.

## Limitations

- The outcome is perceived learning, not measured learning. The study models students' beliefs about how much they learned, which is a [[self-report-measures|self-report measure]] and cannot substitute for evidence of [[learning-gains|actual gains]].
- The sample is narrow. 230 students from seven groups in business administration, marketing and market research at two Spanish universities wrote essays on a single topic, so the setting is homogeneous.
- The design is cross-sectional and correlational. Survey data collected after one activity cannot establish the causal ordering the path model assumes, even where the hypotheses are theoretically motivated.
- The moderation finding for quality sensitivity is a null result without a confirmed explanation. The authors offer candidate reasons but do not test them, so it should not be treated as evidence that quality sensitivity is irrelevant.
- The activity was voluntary and the topic fixed. Because the essay topic and instructions were uniform across courses, the study cannot speak to how task variation changes the social-perception paths.

## Citation

Pérez-López, R., González-Vallejo, R., Lucia-Palacios, L., Melero-Polo, I., & Trifu, A. (2026). [*ChatGPT's feedback credibility and students' perceived learning: the role of agent-related social perceptions*](https://doi.org/10.1186/s41239-026-00629-2). *International Journal of Educational Technology in Higher Education*, *23*(1).
