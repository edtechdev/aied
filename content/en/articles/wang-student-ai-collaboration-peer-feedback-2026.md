---
title: "Student-AI collaboration in peer feedback: Effects on perceived feedback quality, emotional responses, and feedback literacy development"
created: "2026-10-25T00:00:00-04:00"
updated: "2026-10-25T00:00:00-04:00"
type: article
authors: ["Wang, H.", "Guo, K."]
published: "2026-07-21"
venue: "Assessing Writing"
source_url: https://doi.org/10.1016/j.asw.2026.101100
foundations: [human-ai-collaboration, ai-literacy, agency, cognitive-offloading]
pedagogy: [collaborative-learning, scaffolding, student-ai-interaction, student-engagement, motivation, self-determination-theory, anxiety-and-stress]
technology: [generative-ai, conversational-ai, human-in-the-loop-ai, prompt-engineering]
assessment: [feedback-literacy, peer-assessment, ai-feedback-quality, formative-assessment, self-report-measures]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
ethics: [ai-use-disclosure, trust, privacy]
research_method: [quasi-experiment, thematic analysis]
discipline: [english education, language learning, writing education]
level: [higher ed, undergraduate]
audience: [instructors, researchers, assessment designers, curriculum designers]
page_kind: [evaluation]
sources: ['raw/papers/wang-student-ai-collaboration-peer-feedback-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
---

> **Synthesis:** Wang and Guo (2026) report a quasi-experiment in which 60 Chinese undergraduates (30 experimental, 30 control) in a 16-week College English course completed three cycles of argumentative writing and anonymous peer review, with the experimental group using [[generative-ai|generative AI]] (Doubao) to refine their review comments and the control group working unaided. Thematic analysis of 90 student-AI chat histories showed reviewers overwhelmingly sought linguistic help (104 coded instances) and mostly submitted bare comment drafts as prompts (52 of 90 dialogues). Feedback recipients rated the experimental group significantly higher than the control group on four of five quality dimensions by the third cycle, with large effects for constructiveness and affect, and the experimental group also reported significantly higher task enjoyment, lower anxiety, and gains on all four [[feedback-literacy|feedback literacy]] dimensions. The authors frame [[generative-ai|generative AI]] as a [[scaffolding|scaffold]] that lightens the emotional and cognitive load of [[peer-assessment|peer assessment]], while noting the gains were short-term and self-reported.

## Key Findings

### Interaction patterns

- **Language dominated the support requests.** Across the 90 dialogues, 104 coded instances concerned the language of the review comment itself: 77 for accuracy (grammar, vocabulary, punctuation) and 27 for naturalness. Structure and coherence accounted for 71 instances (organization 43, logical coherence 28) and comment content for 38 (appropriateness 13, constructiveness 25).
- **Prompts stayed shallow.** 52 of 90 dialogues contained only the student's comment draft. A further 15 added the peer essay, 14 added the essay evaluation criteria, 6 added the peer feedback criteria, and only 3 dialogues assembled all four components.
- **The instructor deliberately did not model the richer moves.** Training showed prompts for different feedback dimensions but deliberately avoided modeling upload of the peer essay or the criteria, so that simple prompts were a predictable response to the training rather than a deficit.

### Perceived feedback quality

- **No baseline difference, and no first-cycle difference.** Independent-samples t-tests found no significant difference on any of the five dimensions before the intervention (affect, description, identification, justification, constructiveness), and ANCOVA after cycle 1 also found no significant group differences.
- **Divergence appeared in cycle 2.** Significant differences emerged for affect [F(1, 58) = 4.624, p = 0.036, η² = 0.075] and description [F(1, 58) = 4.381, p = 0.041, η² = 0.071], both medium effects.
- **Four of five dimensions separated by cycle 3.** Affect [F(1, 58) = 16.005, p < 0.001, η² = 0.219], description [F(1, 58) = 4.904, p = 0.031, η² = 0.079], justification [F(1, 58) = 14.646, p < 0.001, η² = 0.204], and constructiveness [F(1, 58) = 39.447, p < 0.001, η² = 0.409] all significantly favored the experimental group, with large effects on affect, justification, and constructiveness. Identification was the only dimension that never reached significance [F(1, 58) = 0.687, p = ns].
- **The improvement was staggered.** The authors read this as consistent with skill-acquisition theory: supportive tone and clear description developed first, while justification and constructiveness, which require more reasoning, needed more cycles.

### Emotional responses and feedback literacy

- **Enjoyment rose, anxiety fell.** Controlling for pre-test scores, the experimental group scored higher on task enjoyment [F(1, 58) = 5.931, p = 0.018, η² = 0.094] and lower on [[anxiety-and-stress|task anxiety]] [F(1, 58) = 5.705, p = 0.020, η² = 0.091], both medium effects. Means moved from 16.76 to 20.43 (enjoyment) and 22.26 to 18.70 (anxiety) in the experimental group, against 18.56 to 19.43 and 22.93 to 21.60 in the control group.
- **Every feedback literacy dimension improved.** Feedback-related knowledge and abilities [F(1, 58) = 9.780, p = 0.003, η² = 0.146], willingness to participate [F(1, 58) = 27.434, p < 0.001, η² = 0.325], cooperative learning ability [F(1, 58) = 4.673, p = 0.035, η² = 0.076], and appreciation of peer feedback [F(1, 58) = 7.936, p = 0.007, η² = 0.122] all significantly favored the experimental group, with willingness to participate showing the largest effect.

## Study Design

### Participants and setting

- **Sample:** 60 Chinese undergraduate students (37 male, 23 female) at a comprehensive research-intensive university in eastern China, drawn from two classes of a 16-week College English course, 30 per class. The two classes did not differ in CET-4 score [Class 1 M = 577.66, SD = 49.77; Class 2 M = 575.03, SD = 39.59; t = 0.227, p = 0.821], placing them at roughly CEFR B2.
- **Prior experience:** More than 60% of participants reported limited prior experience with [[peer-assessment|peer feedback]], while nearly all reported having used [[generative-ai|generative AI]] in their studies.

### Design and procedure

- **Quasi-experimental, class as condition.** Class 1 was the experimental group (EG) and Class 2 the control group (CG); the study ran for 11 weeks from week 4 of the course, with a three-week intervention cycle repeated three times (weeks 5 to 13) and post-tests in week 14.
- **Shared training.** Both groups received peer review training in week 4 covering essay evaluation criteria and the five-dimension [[ai-feedback-quality|feedback quality]] framework, then completed a baseline peer review of a GRE 'Analyze an Issue' task, which the recipients rated.
- **EG-specific AI training.** The experimental group was introduced to Doubao and walked through a four-step worksheet: read the peer essay, write a comment draft, seek AI feedback on the draft, revise and submit. The instructor cautioned against over-reliance, defined as asking AI to evaluate the peer essay directly rather than refining one's own comments.
- **The intervention.** Each cycle assigned a new writing task, followed in the next week by anonymous in-class peer review of one randomly assigned essay. The experimental group used the four-step AI-supported worksheet; the control group received a worksheet with only the first two steps and was instructed not to use generative AI. In the third week of each cycle, writers received the feedback, revised their essays, and rated the feedback quality. Writer-reviewer pairings stayed fixed across all three cycles.
- **One responsive adjustment.** In cycle 1, some experimental students independently uploaded the peer essay to the AI. The instructor responded with guidance on privacy and consent, sought and obtained whole-class consent for uploading the assigned essays, and then deliberately stopped adding training in order to preserve the naturalness of the interactions.

### Instruments and analysis

- **TAEQ:** Task enjoyment (5 items) and task anxiety (6 items) on six-point scales, adapted from L2 task emotion questionnaires; Cronbach's alpha 0.85 and 0.83 respectively.
- **PFPLQ:** 14 items from Dong et al.'s Peer Feedback Literacy Scale covering only the provision side, across four dimensions (FKA 5 items, WP 3, CLA 3, APF 3) on a six-point scale; alphas 0.83, 0.83, 0.81, and 0.82 respectively.
- **Analysis:** Thematic open coding of chat histories in NVivo12 by one researcher, with a second researcher coding half the data (kappa = 0.86). RQ2 to RQ4 were analyzed by ANCOVA controlling for pre-test scores. Cohen's (1988) partial eta squared thresholds (0.01 small, 0.06 medium, 0.14 large) were used to interpret effect sizes.
- **Ethics:** Institutional Research Ethics Committee approval, informed consent from all participants, and anonymized peer review throughout.

## What this means for practice

- **Treat linguistic over-focus as the thing to correct.** Students defaulted to using AI as a [[conversational-ai|language editor]] rather than as a feedback partner, which the authors attribute partly to form-related anxiety common among L2 learners and partly to a pre-existing schema of AI as a linguistic aid. Targeted [[ai-literacy|AI literacy]] work, covering capabilities, ethics, and dispositions, is what shifts that perception, since demonstration alone did not.
- **Build in repetition, not a single session.** Nothing measurable appeared after cycle 1; the gains accumulated over three cycles. Plan multi-session, semester-long peer review programs rather than one-off AI-supported tasks.
- **Sequence the skills.** Supportive tone and clear description moved first, justification and constructiveness later. Scaffold the foundational dimensions early and introduce the higher-order ones as students gain experience.
- **Position AI as a non-judgmental intermediary.** The authors argue AI lowers [[anxiety-and-stress|anxiety]] by acting as a neutral third party and reduces [[cognitive-offloading|load]] on a task that is cognitively and emotionally demanding in a second language, with competence gains feeding [[motivation|intrinsic motivation]] and [[motivation|engagement]].
- **Protect evaluative ownership.** Simple prompting worked here, and the authors suggest some students may have deliberately kept content evaluation for themselves. Frame training around AI as a [[scaffolding|scaffold]] rather than a substitute, and keep the boundary between AI-assisted refinement and independent judgment an explicit topic rather than an assumption.

## Limitations

- **Self-reported outcomes.** Task enjoyment, anxiety, and [[feedback-literacy|feedback literacy]] came from questionnaires, which are vulnerable to social desirability and recall bias; no objective measures were collected.
- **Both groups were novices.** Over 60% of participants had little prior peer feedback experience, so the experimental gains reflect AI support plus ordinary skill development together. The design cannot separate AI's effect for novices from its effect for experienced reviewers.
- **Short window and no withdrawal test.** Three structured cycles over nine weeks cannot show whether engagement with AI changes with prolonged use, and because AI support was never withdrawn, the study cannot distinguish durable skill development from temporary reliance on the scaffold. The authors call for longitudinal work with post-scaffolding assessment.
- **No qualitative voice.** The quantitative design left the reasons for the flat first cycle unexplained; interviews, focus groups, or reflective journals would be needed to capture students' perceptions and adaptive strategies during the acclimation phase.
- **Interpretations of restraint are speculative.** The proposed explanations for students' narrow prompting (form-focused anxiety, seeing AI as a language editor, deliberate preservation of [[agency|intellectual ownership]]) are inferences from interaction logs rather than evidence from students themselves.
- **No [[prompt-engineering|prompt engineering]] training and an open boundary.** Students achieved significant gains without systematic prompt training, so the study leaves open whether such training would add anything, and it did not test where students and instructors should draw the line between AI-assisted refinement and independent judgment.

## Citation

Wang, H., & Guo, K. (2026). [Student-AI collaboration in peer feedback: Effects on perceived feedback quality, emotional responses, and feedback literacy development](https://doi.org/10.1016/j.asw.2026.101100). *Assessing Writing*, 70, 101100.
