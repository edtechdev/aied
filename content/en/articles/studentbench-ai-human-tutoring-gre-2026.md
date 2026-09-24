---
title: "StudentBench: AI and human tutoring yield equivalent GRE learning gains"
created: "2026-09-24T09:11:55-04:00"
updated: "2026-09-24T09:11:55-04:00"
type: article
published: "2026-09-23"
sources: ['raw/papers/studentbench-ai-human-tutoring-gre-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [math education, english education]
level: [higher ed, adult learning]
audience: [instructors, researchers, administrators]
foundations: [teacher-role]
pedagogy: [student-engagement, pedagogy]
technology: [llm, intelligent-tutoring, conversational-ai]
assessment: [learning-gains, educational-measurement]
methods: [rct, benchmark, ai-ed-evaluation]
institutions: []
ethics: [equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** StudentBench is a public platform and evaluation suite testing whether general-purpose [[llm|large language models]] match expert human tutoring on GRE [[quantitative-research|Quantitative]] and Verbal questions. Across 2,469 sessions from 2,383 adults, pooled AI tutoring proved statistically equivalent to human tutoring (p=.015), and both beat a no-tutoring control by about six percentage points. AI tutors were also separated on lesson planning, practice-problem creation, conversational [[pedagogy]], cost, and engagement: one model matched human gains at 918× lower cost per percentage point. The authors present this as the first condition of recursive human self-improvement, not as a case for replacing teachers.

## Key Findings

1. **Equivalence on the main outcome.** Pooled AI tutoring matched expert human tutoring on combined GRE [[learning-gains|learning gains]] (p=.015 at ±0.25-SD bounds; p=.023 at ±0.20-SD), an adjusted difference of −0.58 percentage points (90% CI [−2.18, 1.03]).
2. **Gains over no tutoring.** AI tutoring exceeded the control by 6.86 percentage points in Quantitative (95% CI [4.02, 9.69]) and 5.47 in Verbal ([2.46, 8.47]), about 1.5–2 extra correct answers out of 27.
3. **Scale.** Analysis covers 2,469 sessions from 2,383 adults aged 18–67 (median 21): 13 AI tutors built on 12 models per GRE section, live human tutors, and a video control.
4. **Domain roots.** In five of the seven GRE domains the best AI tutor surpassed the human tutor on average; pooled equivalence held for Quantitative but not Verbal, where human tutors stayed ahead.
5. **Cost of an equivalent gain.** Gemma 4 31B matched expert human tutoring (p=.044) at 918× lower cost per percentage point ($0.0052 versus $4.81), with mean inference cost of $0.067 per session.
6. **Teaching quality.** Fifty-one expert tutors made 2,028 pairwise rubric comparisons of AI lesson plans and practice problems; Anthropic's Opus models were preferred, and conversational behaviors clustered by family.
7. **Latency chain.** In 1,137 Quantitative AI sessions, faster replies tracked with more student messages, more messages with more correct practice, and correct practice with larger gains (all p<.002); no such pattern in Verbal.

## The design behind the equivalence claim

The design isolates tutoring itself. Students took a 27-question Quantitative (47 minutes) or Verbal (41 minutes) pre-test, spent five minutes reviewing graded mistakes, and were randomly assigned to one hour of AI tutoring, live one-to-one human tutoring on video, or GRE-unrelated videos; a post-test followed with matched length and concepts. Questions were newly written by former ETS and Kaplan GRE creators to avoid contamination from published tests, and the two test forms were counterbalanced. Effort filters removed sessions with too few non-blank answers, under ten minutes on task, or pre-test scores outside a 5–24 (Quantitative) or 4–24 (Verbal) band.

The AI condition used two low-guidance prompts and minimal software [[scaffolding]], so the study measured [[intelligent-tutoring]] capability rather than its own [[prompt-engineering|prompt design]]. Equivalence was tested with two one-sided tests against ±0.25 pooled standard deviations (±4.09 percentage points combined). Against a human mean gain of 15.6 percentage points and a control gain of 7.1, pooled AI tutoring gained 13.9 — the first of three conditions the authors define for recursive human self-improvement.

## Three evaluations separate AI tutors on teaching quality

A second study asked whether AI can do teaching's surrounding work. Fifty-one expert tutors completed 2,028 pairwise reviews of lesson plans and their embedded practice problems, generated from 381 student pre-tests, answering five planning and three practice-design questions per pair. The resulting [[benchmark|Bradley–Terry leaderboards]] (9,577 planning ratings, 5,265 practice-design ratings) placed Anthropic's Opus models at the top of both capabilities, with mostly non-overlapping intervals between models.

Conversational pedagogy was scored separately with six fixed transcript rules drawn from [[learning-sciences|the learning sciences]], across 1,971 AI and 135 human transcripts. Models from the same provider clustered together with no overlap between family ranges, which the authors read as evidence that teaching behavior tracks provider-wide training practices rather than individual model tuning. Students could flag disputed answers: GPT-5.4 mini drew the most, roughly 11% of answered Quantitative practice problems, and tutors rated highly on practice design drew fewer disputes (ρ=0.71 Quantitative, 0.77 combined).

## Cost, latency, and the path from replies to learning

Cost and latency are first-class outcomes here. Mean inference cost per session — lesson planning, tutoring, and problem generation — ranged from $0.067 for Gemma 4 31B to $21.24 for GPT-5.5 Pro, against a $75-per-hour human reference. Six of the twelve AI tutors passed individual equivalence tests, and Gemma 4 31B matched human gains (p=.044) at 918× lower cost per percentage point.

Median reply time spanned 1.9 seconds (GPT-5.4 mini) to 31.0 seconds (GPT-5.5 Pro), and lower latency was strongly associated with higher [[student-engagement]] (Spearman ρ=−0.81, p=.0056). That supplied the missing link in an exploratory chain traced through 1,137 Quantitative sessions: faster replies, more student messages, more correct practice, larger learning gains. The authors suggest this helps explain why models that score unremarkably on the teaching-quality leaderboards still reach human-level GRE gains.

## What this means for practice

- **Instructors.** Treat one hour of AI tutoring as a credible substitute for expert human tutoring on test-prep material, but only for the immediate gain that was measured.
- **Administrators.** Compare options in cost per percentage point of learning gain, not cost per hour; the spread across AI tutors was two orders of magnitude ($0.005 to $1.40 per point).
- **Researchers.** Instrument latency and engagement alongside achievement when evaluating [[ai-ed-evaluation|AI tutors]], since latency influenced the primary outcome indirectly.

## Limitations

- **Immediate gains only.** Learning was measured right after single sessions; persistence over months went untested, and the authors call for longitudinal retention studies.
- **Restricted population.** Participants were adults able to read and write English, recruited through Handshake for a paid study, so other languages, devices, and settings went untested.
- **Leaderboards are not learning measures.** The teaching-quality rankings came from expert evaluations of materials and observed conversational behaviors, not from how much students learned.
- **No solo-practice control.** Students were never assigned to work GRE practice problems alone, so the added benefit of an AI tutor over independent practice is not identified.

## Connected Concepts

- [[intelligent-tutoring]]
- [[llm]]
- [[learning-gains]]
- [[rct]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[student-engagement]]
- [[conversational-ai]]
- [[higher-ed]]
- [[educational-measurement]]
- [[equity-in-ai-education]]
- [[teacher-role]]
- [[item-response-theory]]
- [[limitations-in-aied-research]]

## Connected Articles

- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT-generated help produces learning gains equivalent to human tutor-authored help on mathematics skills
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: A Human-AI Approach for Scaling Real-Time Expertise
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[ai-tutor-modality-randomized-field-experiment-2026]] — When AI Tutors Speak: Evidence from a Randomized Field Experiment
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: AI Tutoring with Khanmigo in a Two-Year School Experiment
- [[measuring-llm-tutors-teach-vs-solve]] — Measuring Whether LLM Tutors Teach or Solve: A Diagnostic for Educational Impact
- [[tutoring-effectiveness-index]] — The Tutoring Effectiveness Index: Predicting LLM Math Tutor Quality from Four Conversation Signals
- [[teachbench-llm-teaching-evaluation]] — TeachBench - Evaluating LLM Teaching Ability
- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know

## Citation

Northcutt, C., Hasmani, I., Feng, K., Khangi, T., Plesner, A., & Mueller, J. (2026). [*StudentBench: AI and human tutoring yield equivalent GRE learning gains*](https://arxiv.org/abs/2609.28470). arXiv preprint.