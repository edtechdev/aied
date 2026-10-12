---
title: "Developing Competency in AI Ethics: A training framework"
created: "2026-10-12T09:30:00-04:00"
updated: "2026-10-12T09:30:00-04:00"
type: article
foundations: [ai-literacy]
ethics: [ethics, guardrails, legal-issues-and-risks]
pedagogy: [professional-training, problem-based-learning]
technology: [generative-ai]
audience: [instructors, faculty developers, researchers, administrators, policymakers]
level: [higher ed, graduate, adult learning]
page_kind: [framework]
research_method: [design and evaluation study]
confidence: medium
sources: ['raw/papers/ai-ethics-competency-training-framework-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-12"
    agent: hermes-agent
---

> **Synthesis:** Prégent and Grinbaum start from a familiar gap: knowing that fairness or oversight matters does not tell an engineer what to build, disclose, or do. Their training framework turns operational AI ethics into four linked competencies — identifying ethical issues, mapping them to requirements, selecting measures, and reasoning through tensions between objectives — and supplies the materials to teach them: an Ethics Checklist organized around the seven ALTAI requirements, a Portfolio of Measures, three exercise types, and trainer guides. Eleven pilot sessions with ethics reviewers, AI engineers, students and policymakers shaped the design, and the authors report the [[pedagogy|pedagogical]] choices those pilots forced, including a reduced version for beginners.

## Key Findings
1. **The framework decomposes ethics into four explicit tasks.** Issue identification, requirement mapping, measure selection and tension identification are taught in sequence, with the later tasks deliberately placed after the earlier ones.
2. **An ALTAI-structured checklist anchors issue identification.** The Checklist maps the seven ALTAI requirements to probing questions and is kept deliberately non-exhaustive, a reminder of what not to forget rather than a fixed risk inventory.
3. **Mapping issues to requirements and selecting measures are where learners stall.** Practitioners reported confidence at recognizing ethical concerns but uncertainty about how to address them, so the framework makes requirement mapping explicit and requires justification for each measure chosen.
4. **Tension identification comes last because it is hardest.** Participants struggled to articulate [[ethics]] tensions without prior analysis, so limiting the number of measures (typically eight) pushes them toward trade-offs and makes the tensions surface.
5. **The pilots changed the materials.** Step 0 of the Checklist is omitted on the design path, and a Beginner version drops measure selection entirely to protect beginners' attention and working memory.
6. **Facilitator guidance targets two failure patterns.** Beginners reach quick, polarized conclusions — rejecting a system outright for any bias risk — while technical experts narrow to one salient problem and overlook other ethical dimensions.

## The four competencies and their materials

The first competency is recognizing which features of an AI system or its socio-technical context raise ethical concerns, supported by the Ethics Issue Identification Checklist derived from Aucouturier and Grinbaum's earlier work and structured around ALTAI's seven requirements. The second is mapping those concerns onto requirements, which gives participants a common normative vocabulary and shows that a single issue can move between requirements as the analysis deepens. The third is the operational core: selecting and prioritizing technical or organizational measures from a Portfolio that is explicitly a repertoire rather than a catalogue of correct answers, so participants must argue why one measure is preferable in context. The fourth asks them to recognize and reason through tensions that cannot be fully resolved, such as the trade-off between preserving human control and embedding safety measures in an autonomous vehicle.

## What the pilots showed

The framework was piloted in eleven sessions spanning a wide audience: European Commission ethics appraisal experts (28 and 11 participants), research ethics committee members in France (13), the Caribbean (21) and Europe (28), a group of AI researchers and engineers (15), engineering students in ten groups of 25 and a further class of 27, social science students (11), business administration students (10), and UNESCO/CISTRAT policymakers (18). Sessions followed a three-hour structure of lecture, small-[[group-work|group work]] and plenary discussion, with the reviewer path using mock reviews and the designer path using ethics-by-design exercises. The authors used the pilots as formative tests of [[usability-research|usability]] and coherence without measuring learning outcomes quantitatively, and the recurring operationalization difficulties they observed — the gap between naming an issue and choosing a measure — became the four changes described above. The exercises themselves are close in structure to [[problem-based-learning|problem-based]] ethics teaching: groups work a realistic scenario, justify design choices, and report the trade-offs they could not resolve.

## Why this belongs in an AI-in-education corpus

The framework is aimed partly at students, and its materials are reusable teaching artifacts rather than a research finding about AI. It speaks to how [[ai-literacy]] is taught at the operational end — how to move from principles to measures — which is where surveys report the largest confidence gap among practitioners. The design lessons transfer beyond AI ethics: make intermediate reasoning inspectable, sequence the hardest reasoning after the analysis that supports it, and reduce the workload for novices by cutting a step rather than simplifying every step.

## What this means for practice
- **Instructors.** Sequence ethics teaching so learners identify issues and map them to requirements before they select measures; the pilots showed tensions cannot be discussed until that analysis is done.
- **Faculty developers.** Use a checklist to overcome the "where to begin" problem but keep it non-exhaustive, so learners interpret and extend it rather than ticking boxes.
- **Instructors.** For beginners, drop the measure-selection step rather than simplifying it: navigating a large portfolio while still learning to spot issues overloads novices.
- **Administrators and institutions.** Run ethics training with realistic multi-persona scenarios and require justification for each measure, because the observed failures were polarized conclusions and premature narrowing, not missing knowledge.

## Limitations
- The evidence is eleven formative pilot sessions across heterogeneous audiences; the authors did not measure learning outcomes, and facilitator observations and feedback were kept informal rather than coded.
- The framework is built on ALTAI's seven requirements and a single derived checklist, so its scope and vocabulary are inherited from that instrument rather than independently validated.
- The pilots vary widely in size and setting (10 to 250 participants, in-person and online, across nine countries), so the reported difficulties are illustrative, not a controlled comparison of the materials.
- No follow-up measured whether participants changed their practice after training, so claims about developing competency rest on the sessions themselves.

## Citation

Prégent, A., & Grinbaum, A. (2026). [Developing Competency in AI Ethics: A training framework](https://arxiv.org/abs/2610.13319). *arXiv:2610.13319 (cs.CY)*.
