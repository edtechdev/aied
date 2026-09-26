---
title: "Effects of ChatGPT-Assisted Teacher Feedback on College Students' Critical Thinking Skills and Perceptions of Argumentative Writing"
created: "2026-09-25T20:37:37-04:00"
updated: "2026-09-25T21:52:24-04:00"
type: article
published: "2026"
foundations: [critical-thinking, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai, human-in-the-loop-ai]
assessment: [feedback, ai-feedback-quality]
methods: [mixed-methods-research]
research_method: [quasi-experiment]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
sources: ['raw/papers/chen-chatgpt-assisted-teacher-feedback-critical-thinking-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** This quasi-experiment with 64 Chinese undergraduates, all pre-service chemistry, physics, or mathematics teachers, compared conventional teacher feedback (n = 32) against ChatGPT-assisted teacher feedback (n = 32) across two argumentative writing tasks in an 18-week course. Both groups began with comparable [[critical-thinking|critical thinking skills]], and only the experimental group improved significantly after the intervention (p < 0.001), with post-test Cohen's d rising from 0.25 to 3.74. The proposed mechanism is revision behavior: the experimental group revised 91.00% (435/478) of feedback-related units against 85.21% (242/284) in the control group, and [[network-analysis|epistemic network analysis]] linked their revisions to analysis, evaluation, and creation more often than to recognition and understanding. All eight interviewees found the feedback comprehensive and reasonable, while six also flagged imprecision and unprofessionalism, which frames ChatGPT as a capable but fallible [[generative-ai|generative]] partner whose output a [[teacher-role|teacher]] still has to curate. Critical thinking was measured with the 34-item California Critical Thinking Skills questionnaire, and revision behavior was coded with Murphy's five-phase framework.

## Key Findings

- **The groups were equivalent before the intervention.** The pretest showed no statistically significant difference in critical thinking skills between the control and experimental groups (p > 0.05).
- **Only ChatGPT-assisted feedback produced a significant gain.** The experimental group improved significantly from pretest to posttest (p < 0.001), which the authors attribute to the hybrid design.
- **The assisted group revised more of what it received.** Revision rates were 91.00% (435 of 478 units) for the experimental group and 85.21% (242 of 284 units) for the control.
- **The conditions delivered different feedback mixes.** The experimental group received more demonstration (33.1% vs. 10.9%) and question-closely (21.5% vs. 6.0%) feedback; the control group more instruction (41.9% vs. 15.3%) and evaluation (39.4% vs. 27.8%).
- **Assisted feedback pushed revisions toward higher-order cognitive phases.** Epistemic network analysis showed stronger co-occurrence of demonstration with analysis (Difference[D-A] = 0.29) and question-closely with analysis (Difference[Q-A] = 0.27) in the experimental group.
- **Teacher-only feedback kept revisions at recognition and understanding.** The control group showed stronger co-occurrence of instruction with recognize (Difference[I-R] = −0.26) and understand (Difference[I-U] = −0.17), plus evaluation with recognize (Difference[Ev-R] = −0.18).
- **Students saw the feedback as comprehensive but imperfect.** All eight interviewees called ChatGPT's output comprehensive and reasonable, while six cited imprecision and six unprofessionalism, such as superficial content or knowledge errors.

## How the intervention was built

The course ran 18 weeks, and the sample comprised 64 sophomores in a compulsory educational technology course (30 female, 34 male, average age 20), randomly assigned to two groups of 32 with no prior argumentative writing or critical thinking training. Critical thinking was measured online at the end of week two with the 34-item California Critical Thinking Skills questionnaire. From weeks three to sixteen they completed two seven-week writing tasks, on narrowing the primary education gap with information technology and on using AI to optimize interdisciplinary instructional design, each allowing three weeks to draft, two weeks for feedback, and two weeks to revise. Drafts and revisions were analyzed sentence by sentence with Murphy's (2004) five-phase framework and a five-type feedback scheme from Dantonio and Beisenherz (2001), and eight experimental-group students were interviewed (Cohen's kappa = 0.78).

## What the feedback looked like

Teachers in the experimental condition treated ChatGPT output as draft material rather than finished [[feedback|feedback]], and the paper reports the roles they took: copying appropriate content at a level similar to their own (28%), expanding it with in-depth input (16%), supplying or revising it (16% and 14%), and discarding it entirely (14%), with a further 9% needing correction. Teachers were advised to evaluate generated content critically and to optimize blank or inaccurate output by replacing vague terms or asking ChatGPT to verify accuracy. That workflow explains the feedback-type profile: the assisted group's feedback leaned toward demonstration and closely questioning, which the coding linked to analyze, evaluate, and create revisions, whereas the teacher-only group's instruction and evaluation feedback predominantly elicited recognize and understand revisions. The authors read this as [[ai-feedback-quality|feedback quality]] that reaches global text concerns, not only local language corrections.

## Why the outcome moved

The significant posttest gain (Cohen's d of 3.74 against 0.25 at pretest) is the headline claim, and the coding data supply the proposed mechanism. Because demonstration feedback models alternative writing and question-closely feedback interrogates the student's reasoning, the assisted group's revisions involved more evaluation, analysis, and creation, the higher phases of Murphy's hierarchy. The interviews qualify the picture: students valued the breadth of perspectives and the examples ChatGPT supplied, yet six of eight reported subjective, broad, superficial, or professionally mistaken content, and one found general output harder to understand than a teacher's explanation. The paper therefore argues for man-machine coordination, with AI handling immediate or repetitive work while the teacher retains judgment.

## What this means for practice

- Treat generative AI output as raw material for a teacher to filter, expand, revise, or discard: 14% of ChatGPT feedback was discarded and 9% needed correction.
- Design feedback for higher-order revision, since demonstration and question-closely prompts accompanied analysis, evaluation, and creation codes, while instruction and evaluation prompts mostly produced recognition and understanding.
- Train teachers in information literacy and encourage deliberate skepticism toward AI output, because the teacher here had to verify, narrow, and rewrite what the model produced.
- Prefer [[human-in-the-loop-ai|hybrid human-AI feedback]] over replacing instructors, and plan for more than two writing tasks: a single semester may be short for durable change.

## Limitations

- The study lasted one semester with only two writing tasks, while developing critical thinking skills may require more than one semester; the authors call for a one-year design.
- The sample of 64 pre-service teachers from one compulsory course is small and homogeneous, limiting generalization to other student groups, proficiency levels, or disciplines.
- Coding relied on two undergraduate coders and one teacher's workflow, with no blinding reported, and ChatGPT's general form may not suit every scenario; the authors suggest custom-trained versions.

## Connected Concepts

[[critical-thinking]], [[feedback]], [[ai-feedback-quality]], [[generative-ai]], [[human-in-the-loop-ai]], [[teacher-role]]

## Connected Articles

- [[ai-feedback-critical-thinking-writing-2026]] — tests AI-generated feedback against critical thinking and writing proficiency, the same outcome pair in a K-12 sample.
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — also uses epistemic network analysis to relate GenAI-supported feedback to argumentation quality.
- [[genai-teacher-feedback-comparison]] — surveys how students judge the usefulness and trustworthiness of generative AI against teacher feedback.

## Citation

Chen, Xinya; Liu, Jingge; Ye, Pingping; Li, Yan; Sun, Hui; Li, Ruwen; Hou, Zhaoyan; Yan, Jingjing. (2026). *[Effects of ChatGPT-Assisted Teacher Feedback on College Students' Critical Thinking Skills and Perceptions of Argumentative Writing](https://doi.org/10.1002/jcal.70315)*. Journal of Computer Assisted Learning, 42, e70315. https://doi.org/10.1002/jcal.70315