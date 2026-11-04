---
title: "Active Learning with Generative AI in Introductory Physics: A Multi-Institutional Study of the P-A.I.R. Framework"
created: "2026-11-04T02:40:00-05:00"
updated: "2026-11-04T02:40:00-05:00"
type: article
foundations: [ai-literacy]
pedagogy: [active-learning, icap-framework, self-regulated-learning, scaffolding]
technology: [llm]
methods: [qualitative-research]
research_method: [survey]
discipline: [physics education, stem education]
audience: [learners, instructors]
level: [higher ed]
sources: ['raw/papers/paul-pair-framework-genai-active-learning-physics-2026.md']
source_url: "https://arxiv.org/abs/2611.04148"
confidence: medium
page_kind: [evaluation, framework]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Paul, Chakraborty, Shrestha, Nainabasti & Paul (2026) evaluated the Physics AI-Replication (P-A.I.R.) framework — a four-step cycle of identify a hard problem, get an AI explanation, request similar practice problems, then solve them independently before checking — in 11 introductory [[physics-education|physics]] sections at four U.S. institutions. Of 235 surveyed students, 90.9% reported improved conceptual understanding and 97.7% found the replicated practice helpful (r_s = 0.58 between the two). Post-engagement confidence (µ = 7.18 on a 1–10 scale) tracked those perceived benefits (r_s = 0.37 and 0.35) but was unrelated to how often students used AI (r_s = 0.02) — evidence that the *structure* of [[student-ai-interaction|AI use]], not its frequency, is what students associate with independent problem solving.

## Summary

Generative AI tools have entered how students study physics, but unstructured use can remove the opportunities to struggle that consolidate learning. This paper reports a multi-institutional evaluation of P-A.I.R., a protocol that sequences [[scaffolding|AI assistance]] with independent practice: (1) choose a challenging problem from course materials, (2) obtain a conceptual explanation and step-by-step solution from an AI tool of the student's choice, (3) ask the AI for one or two new similar problems, and (4) attempt those independently before reviewing the AI's solutions.

The design is theoretically anchored in three traditions the paper sets out explicitly. The [[icap-framework|ICAP framework]] ranks reading an AI solution as passive, attempting a novel problem as constructive, and comparing your own reasoning against AI feedback as approaching interactive. Worked-example research in cognitive load theory explains why the AI explanation helps but also why students must study it generatively rather than glance at the final line. [[retrieval-spacing-interleaving|Retrieval practice]] and the generation effect supply the mechanism for the independent-attempt step, and AI-supported [[self-regulated-learning]] supplies the risk: handing regulation to the tool rather than using it to support regulation.

Across four institutions (SUNY Farmingdale State College, Valdosta State University, Penn State Brandywine, Lamar University), 11 sections of algebra- and calculus-based introductory physics used a common protocol and an identical end-of-semester survey, adapting local implementation details but keeping the four steps unchanged. Participation was encouraged but not required, so the study measures what students did with an available structure rather than what a mandated intervention produced.

## Key Findings

- **The two core components drew the strongest endorsement.** 90.9% of respondents (n = 231) reported improved conceptual understanding — 39.4% calling it significant and 51.5% moderate — against 6.1% reporting no change and 3.0% saying AI had made concepts more confusing. 97.7% (n = 213) found the replicated practice problems helpful (41.8% very, 55.9% somewhat).
- **Those two ratings moved together.** Spearman r_s = 0.58, p < 0.001, n = 213 — closely mirroring the original single-institution pilot, which the authors read as evidence the link between perceived conceptual gain and productive practice is not particular to one classroom.
- **Consistency across institutions.** Institutional means for conceptual clarity were 1.51, 1.38, 1.36 and 1.37, and for practice helpfulness 2.47, 2.33, 2.20 and 2.29, with 95% confidence intervals overlapping the pooled means. Post-engagement confidence ranged narrowly from 6.86 to 7.52 across sites (pooled µ = 7.18, σ = 1.62, Mdn = 7.0, n = 217; only 3.7% scored below 5). The dominant qualitative theme appeared at 60.6% to 67.6% at every site.
- **Confidence tracked perceived benefit, not usage dose.** Post-engagement [[self-efficacy|confidence]] correlated with perceived conceptual clarity (r_s = 0.37, n = 216) and practice helpfulness (r_s = 0.35, n = 198), more weakly with prior confidence in using AI (r_s = 0.20, p = 0.004, n = 216), and not at all with AI usage frequency (r_s = 0.02, p = 0.749, n = 216). Frequency was widely distributed in the sample: 34.9% used AI often (2–3 times per week), 36.2% about once a week, 7.7% daily, 17.0% rarely and 3.0% never; ChatGPT led at 68.5%, then Gemini at 43.8% and Copilot at 22.1%.
- **Confidence was unrelated to academic standing.** Self-reported GPA correlated r_s = 0.13 (p = 0.064, n = 202), and a Kruskal–Wallis test across three GPA bands found no difference (H = 3.06, p = 0.217) — favorable confidence was not confined to high achievers.
- **The remaining items were positive but more mixed.** Ease of interaction 83.8%, likelihood of continued use 88.7%, peer recommendation 80.5%, time efficiency 65.9%, and AI reliability and accuracy only 59.7% rated good or excellent with 33.2% choosing fair.
- **Students' own accounts match the design.** Thematic analysis (219 responses to "how did this change your approach"; κ = 0.57, 86.8% initial agreement across 2,585 coding decisions) found conceptual clarification and structured problem solving dominant at 63.0%, ahead of on-demand personalized support (22.4%), practice generation and independent learning (18.7%), verification and [[metacognition|metacognitive engagement]] (16.0%) and efficiency (11.9%); 6.8% described limited or cautious use. The most common improvement request was [[trust-calibration|accuracy and reliability]] (34.2%), then better-calibrated explanations and interactive scaffolding (29.7%), visual or multimodal explanations (13.9%) and alignment with the instructor's methods (10.9%); 22.3% said nothing needed improving.

## Study Design & Method

Multi-institutional, survey-based, descriptive design run during the 2025–2026 academic year, approved by the IRB at each campus. Of 358 students enrolled across 11 sections, 235 completed the survey (65.6% response rate): FSC 39 of 72, VSU 71 of 122, PSU-BW 73 of 100, LU 52 of 64. The instrument had three sections — background (AI use frequency, purposes, prior confidence, GPA range, tools), seven ordinal experience items on 4- and 5-point scales, and a 1–10 confidence rating plus two open-ended prompts. Likert data were analyzed non-parametrically in Python; open responses were coded inductively with an instructor coding their own sections and an independent researcher coding all four institutions against a common codebook, disagreements resolved by discussion. At FSC the survey ran in Qualtrics with IP collection disabled; at the other three institutions it was paper-based in class, with identical content. Grades were submitted before the principal investigator accessed any data.

## What this means for practice

- **Instructors.** If you introduce AI to a physics course, introduce a sequence rather than a permission. The 90.9% vs 97.7% pair suggests students credit the two halves differently: the explanation is the entry point, but the replicated practice is what they find most useful, so protect step 4 — the independent attempt — from being skipped.
- **Instructors.** Do not read heavy AI use as evidence of benefit, or light use as evidence of none. In this sample the frequency–confidence correlation was r_s = 0.02 while perceived structure benefits ran at 0.37 and 0.35, so a policy that tracks how much students use AI is measuring the wrong variable.
- **Instructors.** Supply prompt templates that instruct the model to guide with questions and hints and to follow the course's own notation and solution methods. That answers the second-largest improvement request (29.7% wanted guidance over answers) and the 10.9% who complained the AI's method was not what was taught.
- **Instructors.** Keep verification inside the protocol. With only 59.7% rating AI output good or excellent and 34.2% naming accuracy as their main concern, the checking step is a learning activity, not housekeeping; several students reported that catching AI errors forced closer analysis.
- **Learners and departments.** The replication step does hidden work — students reported having to understand a problem's structure in order to generate a similar one — so make the protocol optional and say why: a minority rejected AI on environmental grounds (four students) or feared cognitive erosion (five), and the authors' own advice is to discuss those costs in class rather than mandate use.

## Limitations

Self-reported perceptions only, with no direct measure of learning — no pre-intervention measure and no comparison group, so perceived gains cannot be attributed to P-A.I.R. with certainty. Survey participation was voluntary, so respondents may differ from non-respondents. Implementation details, course structures and survey mode (online versus paper) varied by institution, and how often individual students actually applied the protocol was not consistently recorded. Some qualitative codes were near-neighbors, which is visible in the modest κ = 0.57. The authors also note that their own prior work on LLM performance in AP Physics, and the P-A.I.R. pilot, are cited as motivating evidence rather than independent replication.

## Citation

Paul, B., Chakraborty, S., Shrestha, S., Nainabasti, B., & Paul, B. (2026). [*Active Learning with Generative AI in Introductory Physics: A Multi-Institutional Study of the P-A.I.R. Framework*](https://arxiv.org/abs/2611.04148). arXiv preprint.
