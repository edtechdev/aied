---
title: Motivation
created: "2026-08-10T17:38:45-04:00"
updated: "2026-09-30T09:59:35-04:00"
type: concept
foundations: [ai-education]
pedagogy: [motivation, self-determination-theory, student-engagement]
technology: [affective-computing]
connected_faqs: [ai-anxiety-wellbeing, asynchronous-online-courses-ai]
audience: [learners]
confidence: high
reviewed_by: [editor]
---

> **Motivation** — the psychological processes that initiate, direct, and sustain goal-directed behavior. In [[ai-education|AI in education]], motivation [[research-methods-aied|research]] examines how AI tools affect learners' and teachers' motivation — whether AI [[scaffolding|scaffolds]] or undermines persistence, curiosity, and intrinsic engagement — and how motivational states shape the effectiveness of AI-mediated learning.

## Questions to Consider

- Motivation is often treated as a trait some students 'have' and others lack. The page describes it instead as psychological processes that initiate, direct, and sustain behavior — and as something developmental and socially scaffolded. How does that reframe who is responsible for student motivation?
- AI tools can remove friction and make learning more accessible, but they can also reduce the cognitive effort and struggle that support intrinsic motivation. When has making something 'easier' actually made it less motivating or less satisfying for you?
- Self-determination theory says intrinsic motivation grows from autonomy, competence, and relatedness. If an [[intelligent-tutoring|AI tutor]] does most of the work, which of those three might it threaten — and which might it enhance?
- Research finds distinct motivational profiles among students in an AI [[curriculum-design|curriculum]], and that reaching a self-determined profile predicted the largest AI-literacy gains. What might it take for a learner to move from passively disengaged to genuinely self-determined in using AI?
- The page reports that teacher support drives AI-assisted engagement largely through mastery-approach and performance-approach goals — the 'approach' rather than 'avoidance' orientations. How does the way a teacher frames AI use ('to get it right' vs. 'to avoid looking wrong') shape whether students engage deeply?
- If you're designing for motivation, is the goal to make learning easier, more engaging, or more meaningfully effortful? Where do [[accessibility]] and intrinsic motivation pull in opposite directions?

## Introduction

Motivation is a foundational construct in education research, and the rise of AI in education has made it more consequential: AI tools can remove friction and make learning more accessible, but they can also reduce the cognitive effort and struggle that support intrinsic motivation and deep learning. The articles in this knowledge base explore motivation across learner-facing AI tools, teacher-facing AI systems, and the psychological mechanisms — [[self-determination-theory|self-determination]], [[self-efficacy-tutoring-learning|self-efficacy]], emotions — through which AI shapes motivated behavior.

- **[[lee-wu-gender-motivation-genai-achievement-2026|Lee & Wu]]** show gender and motivation drive differential engagement with GenAI, with distinct [[learning-gains|achievement]] trajectories.

## Key research themes

**AI effects on student motivation** is the most direct line of research. **[[ai-availability-student-motivation]]** examines how the availability of AI assistance affects student motivation and persistence, connecting to [[cognitive-offloading|Over-Reliance]] research on motivation erosion when AI does the work. **[[scheu-mobile-chatbot-journaling-motivation-2026]]** explores mobile [[conversational-ai|chatbot]] journaling as a motivational intervention. **[[ai-learning-tools-engineering-education-needs]]** examines what motivates students to adopt AI learning tools in [[engineering-education|engineering education]].
- **Unreflective use erodes motivation — more so for men.** Thoughtless GenAI use (accepting answers unexamined) predicted lower motivation (β = −0.54) and lower [[self-efficacy]] (β = −0.37) among 487 undergraduates, and the motivation effect was significantly stronger for male students while the self-efficacy effect was stronger for female students ([[genai-thoughtless-use-self-directed-learning-2026|Zhao & Gu, 2026]]).
Why a reader reaches for AI is itself a measurable variable: the AIR scale resolves four motives for GenAI-assisted reading — Task-oriented, Feel-good, Translation and Low-effort — and only Low-effort, using AI when tired or disengaged, was negatively related to need for cognition (r = −.18) ([[air-scale-motivations-ai-reading-2026|Brann, Etgar and Sidi (2026)]]).

**Motivation in AI-mediated engagement** examines how motivational quality (not just quantity) changes with AI. **[[students-engagement-with-generative-ai-in-academic-learning-a-self-determination|Isaeva et al.]]** combined self-determination theory with [[network-analysis|epistemic network analysis]] to study engagement with [[generative-ai|generative AI]]. **[[liang-ai-learning-motivation-sdt-2026|Liang et al. (2026)]]** traced motivation developmentally via latent transition analysis of **2,086 [[k-12|secondary]] students** in a year-long AI curriculum, finding three stable profiles (Disengaged, Developing, Self-Determined) and that reaching the Self-Determined profile predicted the largest [[ai-literacy]] gains. **[[wang-goal-setting-ai-engagement-2026|Wang & Wang (2026)]]** used goal-setting theory with **758 [[higher-ed|university]] English learners**, showing that **teacher support** drives AI-assisted engagement primarily through mastery-approach and performance-approach goals (the approach, not avoidance, goal orientations). Together these studies show that motivation in AI contexts is both developmental and socially scaffolded — it shifts over time and responds to teacher support and goal framing, not just tool design.
Goal orientation also routes how the tool is used: mastery and normative performance goals tend to support elaboration and refinement, whereas appearance performance goals make effort-minimization and protecting perceived competence more likely — so the same assistant scaffolds or substitutes for thinking depending on the motivational climate ([[oby-chatgpt-use-learning-framework-2026|Øby, 2026]]).

A dialogue format can raise motivation without improving overall evaluation: in 222 first-year high-school students, teacher–teacher dialogue raised ARCS motivation more than teacher–student format for learners high in concrete experience (b = 0.162, p < .001) yet scored significantly lower on overall evaluation (b = -0.126, p = .005) ([[tts-dialogue-lessons-learner-characteristics-2026|Watanabe et al. (2026)]]).
Motivation shapes how students frame the tool, and the framing carries the metacognitive payoff: [[cui-motivation-roles-metacognitive-genai-2026|Cui et al. (2026)]] found the collaborator role — 7.5% of logs — was the only one producing a complete metacognitive chain, while extrinsically motivated students used GenAI as a replacement tool in 64.6% of logs and produced no higher-order connections.

**Motivation gains are construct-specific, not general.** [[genai-writing-program-primary-l2-motivation-engagement|Lu et al. (2026)]] found that a nine-week GenAI-supported [[writing-education|writing]] program for 301 Grade 5 and 6 learners raised their ideal L2 writing self and academic buoyancy — the aspirational and the resilience components of motivation — while leaving growth mindset unchanged; the only growth-mindset gain appeared in the control group and did not survive correction for multiple comparisons. Students attributed the shift to seeing fluent text built from vocabulary they already knew, which made successful writing feel attainable. So motivation is not a single dial that AI turns up: what improved was the belief that one *can* write well, not the belief that ability grows with effort. The same construct-specificity appears when GenAI is itself the relevance intervention. [[genai-math-relevance-intervention-2026|Guo, Fryer and Shum (2026)]] had **218 high-school students** spend one hour in semi-structured dialogue with a [[conversational-ai|chatbot]] aimed at personal relevance to [[math-education|math]]; the collective, class-level version raised relevance as identification (F = 4.35, p = .014, η² = 0.04; against the control, F = 11.11, p = .001, η² = 0.073 — a medium effect) and, in the SEM, predicted relevance to a specific lesson one week later (β = 0.18, p < .01), while interest in the math class did not move (F = 0.29, p = .75, η² = 0.003). The authors attribute the decoupling to dose: a single one-hour session is too brief for relevance gains to consolidate into interest in the class.

A utility-value intervention is not uniformly beneficial: a scaffolded version produced no overall gain in pre-service teachers' knowledge integration and *harmed* it for learners who entered with high perceived utility-value, an aptitude-treatment interaction arguing for matching motivational support to learners' starting points ([[utility-value-intervention-teach-responsibly-genai-2026|Boos, Eder & Lachner (2026)]]).
**A feedback message moves interest through its perceived usefulness, not through the learner's dispositions.** [[jansen-argumentative-writing-feedback-receptivity-2026|Jansen et al. (2026)]] gave 1,507 secondary students one standardized automated feedback message after a first draft of an argumentative text: global receptivity was the only receptivity dimension related to situational interest change (about 0.11 points on the observed scale, roughly the 54th versus 46th percentile), and that effect was fully mediated by perceived usefulness (indirect β = 0.09, 95% CI [0.06, 0.13]) with no significant direct path left (β = 0.06, 95% CI [−0.07, 0.16]), so what shifted interest was the felt worth of the message rather than the learner's general stance toward feedback.

**Teacher motivation and persistence** examines motivation among educators. **[[framing-5-percent-problem-teachers-persistence|Framing the 5 Percent Problem]]** studies teacher persistence with AI tools, and **[[teacher-education-ai-literacy-sdt-2026|Chiu et al.]]** found need-supportive [[educational-development|professional development]] fosters sustained behavioral engagement in professional learning communities.

- **Cross-cultural motivation of future teachers:** [[motivation-shape-future-education-ai-switzerland-china|Martínez-Moreno et al. (2026)]] validated the (D)FIT-Choice scale with 416 student teachers in Switzerland and China, finding Swiss teachers report stronger social utility and intrinsic motivation while Chinese teachers show higher perceived digital competence and enthusiasm for integrating AI — highlighting how cultural and systemic factors shape motivation to shape the future of education with AI.

- **Self-efficacy is the root of teachers' enjoyment of GenAI.** In a PLS-SEM study of 434 in-service teachers, self-efficacy was the model's only exogenous variable and its largest effect was on perceived enjoyment (β = 0.805, f² = 1.839), feeding perceived usefulness and ease of use in turn ([[guillen-curriculum-genai-teacher-competence-2026|Guillén-Gámez et al., 2026]]).

**The effort paradox and the vicious cycle of assistance.** [[zohar-bloom-inzlicht-against-frictionless-ai-2026|Zohar, Bloom and Inzlicht (2026)]] argue that motivation is not simply helped or hindered by AI but redistributed: humans generally take the path of least resistance, yet they also seek effort out — the effort paradox — because effort signals that actions matter and because reward attached to process rather than product increases the tendency to strive and persevere. Two claims follow. First, the effort–meaning relationship is an inverted U, so the motivational target is moderate friction, and the risk of frictionless AI is overshooting into too little. Second, a vicious cycle: as AI replaces effort in a domain, the motivational benefits of effort there erode, which makes users more dependent on AI, which erodes motivation further. They also separate supplement from substitute by developmental stage — learners in earlier stages risk bypassing the experiences that build perseverance, while those with established skills can use AI to save time ([[desirable-difficulties]], [[self-efficacy]]).

## Connections to related concepts

Motivation is the parent construct of [[self-determination-theory]], which specifies the psychological needs (autonomy, competence, relatedness) that sustain intrinsic motivation. It connects to [[student-experience]] as the experiential layer of motivated engagement, to [[student-engagement]] as its measurable dimension, and to [[affective-computing]] for the emotional mechanisms that shape motivation. Motivation also connects to [[cognitive-offloading|Over-Reliance]] (AI reducing [[desirable-difficulties|productive struggle]]), [[self-regulated-learning]] (motivated learners self-regulate), and [[teacher-role]] (motivation applies to educators as well as students).

## Connected Concepts

- [[learners]] — Learners: the umbrella for the learner-side concepts
- [[self-directed-learning]]
- [[self-determination-theory]]
- [[student-experience]]
- [[student-engagement]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[teacher-role]]
- [[ai-education]]
- [[framing-ai-use-for-students]]
- [[social-emotional-learning]] — Social-Emotional Learning
## Connected Articles
- [[jansen-argumentative-writing-feedback-receptivity-2026]] — Automated feedback on argumentative writing: The role of secondary students' feedback receptivity and feedback perception
- [[zohar-bloom-inzlicht-against-frictionless-ai-2026]] — The effort paradox and the vicious cycle of frictionless assistance
- [[cui-motivation-roles-metacognitive-genai-2026]] — Motivation and roles in metacognitive GenAI engagement
- [[lee-wu-gender-motivation-genai-achievement-2026]] — Gender, motivation, and GenAI achievement trajectories
- [[oby-chatgpt-use-learning-framework-2026]]
- [[genai-thoughtless-use-self-directed-learning-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[chatgpt-perception-online-learning-engagement-2026]]
- [[genai-student-experiences-uk-he-survey-2026]]
- [[ai-availability-student-motivation]]
- [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination]]
- [[teacher-education-ai-literacy-sdt-2026]]
- [[scheu-mobile-chatbot-journaling-motivation-2026]]
- [[framing-5-percent-problem-teachers-persistence]]
- [[self-efficacy-tutoring-learning]]
- [[guillen-curriculum-genai-teacher-competence-2026]] — Assessing Teacher Digital Competence for GenAI Curriculum Design (Guillén-Gámez 2026)
- [[motivation-shape-future-education-ai-switzerland-china]] — Motivation to shape the future of education with AI
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Learner characteristics × TTS dialogue-format interactions
- [[student-perceptions-ai-study-productivity-2026]] — Students' Perceptions of Artificial Intelligence Tools for Study Productivity and Learning: An Exploratory Survey Study
- [[liang-ai-learning-motivation-sdt-2026]] — SDT latent transition analysis of students' AI learning motivation (2,086 secondary students)
- [[wang-goal-setting-ai-engagement-2026]] — Goal-setting theory: teacher support, achievement goals, and engagement in AI-assisted English learning (758 Chinese students)
- [[utility-value-intervention-teach-responsibly-genai-2026]] — Utility-value intervention effects in learning to teach responsibly with GenAI (Boos, Eder & Lachner 2026)
- [[genai-writing-program-primary-l2-motivation-engagement]] — Construct-specific motivation gains in a primary L2 GenAI writing program (Lu et al. 2026)
- [[air-scale-motivations-ai-reading-2026]] — The AIR Scale: four motive families for reaching for AI while reading
- [[genai-math-relevance-intervention-2026]] — GenAI relevance dialogue raised relevance as identification but left class interest flat
