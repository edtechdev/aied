---
title: "The Contribution of Generative Artificial Intelligence as a Novice Learner to Students in the Learning by Teaching Model"
created: "2026-09-25T21:06:17-04:00"
updated: "2026-09-25T21:52:24-04:00"
type: article
published: "2026"
foundations: [ai-education, human-ai-collaboration]
pedagogy: [learning-by-teaching, self-efficacy, metacognition]
technology: [generative-ai]
methods: [mixed-methods-research, quantitative-research]
research_method: [quasi-experiment, interviews]
level: [higher ed, teacher education]
audience: [instructors, educational technology developers]
page_kind: [evaluation]
sources: ['raw/papers/wang-genai-novice-learner-learning-by-teaching-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** This quasi-experimental study asks whether [[generative-ai]] is more effective for learning as a novice learner than as a teacher. Sixty-eight preservice teachers at a Chinese teachers' university were divided into an experimental group (n=33) that explained the flipped classroom concept to a GAI novice learner (GAI-NL) built on Baidu's ERNIE 3.5, and a control group (n=35) that asked questions of a GAI teacher (GAI-T). The GAI-NL role used dialogue strategies such as Request for Explanation, Verification Reasoning and Opposing Perspective, sequenced along Bloom's taxonomy and routed by judgment nodes. The experimental group scored significantly higher on defining the flipped classroom (M=4.18 vs 3.29, p<0.001, r=0.474) and on its teaching activities (M=4.91 vs 3.06, p<0.001, r=0.642), and generated more and higher-quality questions. Self-efficacy (p=0.039, Cohen's d=0.57) and perceived usefulness (p=0.032, Cohen's d=0.54) were also higher, but planning and monitoring did not improve. Assigning GAI the student role, the authors argue, operationalizes [[learning-by-teaching]] without the difficulty of finding a suitable peer.

## Key Findings

- The novice-learner role outperformed the teacher role on explanation and application: scores were higher for defining the flipped classroom (M=4.18 vs 3.29, p<0.001, r=0.474) and its teaching activities (M=4.91 vs 3.06, p<0.001, r=0.642).
- Objective questions showed no group difference (M=23.18 vs 21.57, p=0.416), so gains concentrated in explanation and application rather than factual recall.
- Students teaching the AI generated more questions (M=3.67 vs 2.14) and higher-quality questions (M=5.67 vs 3.07), both p<0.001 with r=0.473 and r=0.478.
- [[self-efficacy]] was significantly higher in the experimental group (M=3.85 vs 3.56, p=0.039, Cohen's d=0.57), attributed to mastery experiences from explaining content.
- On [[metacognition]], the experimental group scored higher on metacognitive knowledge and learning strategies (p<0.001, Cohen's d=0.41) but not on planning and monitoring (M=4.01 vs 3.78, p=0.062).
- Perceived usefulness was significantly higher in the novice-learner condition (M=4.02 vs 3.73, p=0.032, Cohen's d=0.54), while perceived ease of use did not differ (p=0.122).

## Designing a novice learner from a large language model

The intervention turns [[learning-by-teaching]] into a human-AI arrangement. Students explain content to a GAI novice learner (GAI-NL) built on Baidu's ERNIE 3.5, a knowledge-enhanced large language model. Four principles specify the role: it is framed as a novice, inquisitive, simple in thinking and appreciative, asks about common misconceptions and student errors, and follows a "one question at a time" rule with concise replies. Eight dialogue strategies operationalize it, among them Request for Explanation, Request for Examples, Verification Reasoning, Opposing Perspective and Confirm Understanding. They are sequenced along Bloom's taxonomy from lower-order to higher-order thinking, with three judgment nodes routing the conversation by response quality and directing dialogue weight to areas a student needs to reinforce.

## Method: a quasi-experiment with preservice teachers

The study used a mixed-methods design with 68 preservice teachers majoring in Political Education in a Modern Educational Technology course in eastern China: 33 in the experimental group and 35 in the control group. Both groups attended the same lecture and five-stage procedure; only the interaction mode differed. The experimental group prepared, explained and responded to GAI-NL questions, while the control group asked questions of a GAI teacher built on the same model. Measurement combined an eight-item knowledge understanding test with a problem-generation task scored out of 19.5 points, a self-efficacy scale (Cronbach's alpha 0.93), a metacognitive strategy questionnaire (alphas 0.66 and 0.89) and semi-structured interviews. Inter-coder reliability was Spearman's rho 0.964 (p<0.001).

## What the experiment found

Group differences appeared consistently on generative tasks: explaining the flipped classroom, its teaching activities, and the number and quality of questions generated all favored the students who taught the AI, while objective questions did not separate the groups. Self-efficacy and metacognitive knowledge were significantly higher, planning and monitoring trended higher without reaching significance, and perceived usefulness was significantly higher.

## Interpreting the role effect

The authors explain the advantage through the mechanics of explanation: preparing to teach forces reorganization, and the AI learner's questions create cognitive conflict that exposes misunderstandings. One student described careless explanations being exposed when "GAI-NL followed my reasoning. The result sounded unreasonable, which forced me to carefully organize my language." The contrast with the teacher role is sharp: some control group students acknowledged that GAI-T provided "more accurate and detailed information" yet also reported that "after using it, I didn't want to think independently." The authors trace the planning and monitoring result to task design rather than the role, since students focused on content accuracy, leaving fewer resources for [[self-regulated-learning]] monitoring.

## What this means for practice

- Teachers can run learning by teaching without matching students by ability: a GAI novice learner supplies a stable "learner to be taught" at any time.
- Dialogue strategies, not the role label alone, carry the effect: embed explanation and example requests, verification reasoning and opposing perspectives.
- Because gains appeared in explanation and question generation but not objective recall, reserve the GAI-NL dialogue for consolidation and transfer tasks.
- To reach planning and monitoring, add explicit metacognitive prompts, learning plan guidance and progress feedback, absent from the design under study.

## Limitations

- The sample was small (68 preservice teachers) and drawn from one course and discipline, which the authors state limits generalizability to other groups or subjects.
- [[metacognition]] was measured by self-report scales subject to social desirability bias and response central tendency, and the metacognitive knowledge and learning strategies sub-dimension had low internal consistency (0.66).
- The intervention produced no significant improvement in planning and monitoring, which the authors attribute to insufficient design support and high cognitive load.
- Outcomes were measured immediately after a short intervention; durability requires longer studies.

## Connected Concepts

- [[learning-by-teaching]]
- [[generative-ai]]
- [[self-efficacy]]
- [[metacognition]]
- [[human-ai-collaboration]]
## Connected Articles

- [[prompting-teachability-novice-personas-lbt-2026]] — specifies novice LLM personas for learning by teaching, the design counterpart to this study's role configuration.
- [[socrates-students-instructors-llms-lbt-2025]] — students act as instructors of a large language model in computer science education, a parallel test of the same role reversal.
- [[chatgpt-teachable-agent-programming-lbt-2024]] — a teachable ChatGPT agent in programming education, an earlier implementation of teaching an AI learner.
- [[teaching-ai-vocabulary-lbt-llms-2026]] — uses an LLM as a student for vocabulary acquisition, extending the novice-learner role into language learning.

## Citation

Wang, Haiyan; Wang, Congyao; Liu, Jiawen; Cao, Mei. (2026). *[The Contribution of Generative Artificial Intelligence as a Novice Learner to Students in the Learning by Teaching Model](https://doi.org/10.1002/jcal.70299)*. Journal of Computer Assisted Learning, 42, e70299. https://doi.org/10.1002/jcal.70299