---
title: Warning About AI Fallibility Increases Help-Seeking in an Intelligent Tutoring System
created: "2026-06-03T04:33:04-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
pedagogy: [help-seeking]
technology: [intelligent-tutoring, llm]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment]
audience: [learners]
sources: ['raw/papers/2606.03822.md']
confidence: medium
discipline: [math education]
level: [k 12]
---

> **Synthesis:** This study tests whether a simple transparency intervention that warns students an AI [[pedagogical-agent|pedagogical agent]] may make mistakes affects learner behavior in a math [[intelligent-tutoring|intelligent tutoring system]]. In a classroom experiment with 252 school students, those warned about potential AI errors requested significantly more hints than a control group, even though system behavior was identical — showing that lightweight transparency interventions can influence learners' interaction strategies, with implications for [[trust-calibration|trust calibration]] and [[help-seeking]] in AI-supported learning.

## Abstract

Recent work in Technology-Enhanced Learning and [[human-ai-collaboration|Human-Computer Interaction]] highlights the importance of transparency and [[trust-calibration|trust calibration]] in AI-supported learning environments as they pose a risk of [[hallucination-risk|hallucinations]]. In this study, we investigate whether a simple transparency intervention that warns students that a pedagogical agent may make mistakes affects learner behavior in a math [[intelligent-tutoring|intelligent tutoring system]]. We conducted a classroom experiment with 252 school students using two system versions: one including a warning message about potential system errors, and one that does not mention potential errors. Using log data, we analyzed students' [[problem-solving]] performance data, including [[help-seeking|help-seeking behavior]], error rate, and time-on-task. Results show that students who were warned about potential AI errors requested significantly more hints than those in the other condition, even though the actual system behavior was exactly the same. This finding suggests that lightweight transparency interventions can influence learners' interaction strategies without necessarily improving or impairing immediate performance — a contribution to [[student-experience|learner behavior]] and [[llm|AI]] transparency in [[higher-ed|education]].

## What this means for practice

- **Instructors.** Add a short fallibility warning to AI-supported activities even when the deployed system is error-free: hint requests rose significantly in the warned condition (β = −0.33, t(235) = −2.33, p = .02) with identical system behavior.
- **Instructors.** Read the warning as a strategy lever, not a performance fix — error rate and time-on-task did not differ between conditions, so the intervention changed learner behavior rather than immediate outcomes.
- **Learners.** Treat tutor hints as checkable guidance rather than authoritative answers; the study's design assumes a learner who reads the agent's messages thoughtfully and thinks critically about the guidance received.
- **Designers.** Design the wording of uncertainty cues deliberately, since a single popup shown three times at the introduction of new solution methods was enough to shift interaction patterns.

## Limitations

- The final sample is 252 seventh-grade students (aged 12–13) in seven classes at one secondary school in Tokyo, taught by one teacher; 18 students were absent on data-collection days and excluded, from 270 originally recruited.
- Exposure was two 50-minute class periods, and the authors state post-test data are not reported because unexpected class cancellations prevented many students from taking the post-test — so no learning claim is possible.
- The tutor introduced no errors: hints and feedback were rule-based and hard-coded without [[llm|LLMs]], so the study cannot show how learners respond when the system actually makes mistakes.
- Group sizes were unequal (12 students per class assigned to the warning condition) due to a concurrent data collection, which the authors note reduces statistical power.
## Connected Concepts

- [[help-seeking]]
- [[pedagogical-agent]]
- [[hallucination-risk]]
- [[trust-calibration]]
- [[intelligent-tutoring]]
- [[math-education]]

## Connected Articles

- [[llm-student-simulation-misconception-faithfulness]] — Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[prompt-injection-defenses-educational-llm-tutors]] — Evaluating Prompt Injection Defenses for Educational LLM Tutors: Security-Usability-Latency Trade-offs
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Critical AI Tutors: Empower or Enslave?
- [[persistent-ai-agents-academic-research]] — Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study
- [[genai-tutor-engagement-patterns]] — Not All Students Engage Alike: Multi-Institution Patterns in GenAI Tutor Use

## Citation

Nagashima, T., Hladký, M., & Rief, V. (2026). [*Warning About AI Fallibility Increases Help-Seeking in an Intelligent Tutoring System*](https://arxiv.org/abs/2606.03822).
