---
title: Can LLMs Effectively Simulate Human Learners? Teachers' Insights from Tutoring LLM Students
created: "2026-08-06T04:33:04-04:00"
updated: "2026-09-19T11:14:39-04:00"
type: article
pedagogy: [community-of-inquiry, scaffolding]
technology: [intelligent-tutoring, knowledge-tracing, llm, simulating-students]
research_method: [qualitative, interviews]
audience: [teacher educators, researchers]
level: [teacher training, k 12]
sources: ['raw/papers/llm-student-simulation-teacher-insights.md']
confidence: high
discipline: [math education]
page_kind: [framework, evaluation]
methods: [ai-ed-evaluation]
---

> **Synthesis:** Semi-structured interviews with 12 teachers who tutored [[simulating-students|LLM-simulated students]] (MathDial dataset) reveal key authenticity gaps: overly complex language, lack of emotions, unnatural attentiveness, and logical inconsistency. The study categorizes four real-world student behavior types along scaffolding and presence dimensions, and provides design guidelines for building higher-fidelity LLM student [[simulation|simulations]].

## Methodology

Martynova et al. interviewed 12 teachers who had extensively interacted with [[simulating-students|LLM-simulated students]] during collection of the MathDial [[intelligent-tutoring|dialogue tutoring]] dataset. The study used a mixed-method approach grounded in two frameworks:

- **[[community-of-inquiry|Community of Inquiry]] (CoI)** — capturing social and cognitive presence in learning interactions
- **[[scaffolding|Scaffolding theory]]** — effective [[teacher-role|teaching]] through graduated support

Teachers tutored [[llm|LLM]] students in [[k-12|K-12]] [[math-education|math]] [[problem-solving]] dialogues, then rated realism and described deviations from authentic student behavior.

## Key Findings

### Authenticity Gaps in LLM Students

| Issue | Description |
|---|---|
| Language complexity | Responses too technical, lengthy, and formal for K-12 students |
| Emotional absence | Lack of frustration, fear, embarrassment, or disengagement |
| Unnatural attentiveness | Students too engaged; never lose focus or go silent |
| Logical inconsistency | Knowledge jumps without gradual building; no forgetting |
| No question-asking | Teachers had too much control over discussion flow |

### Four Student Behavior Categories

The study classifies real-world student behaviors along two dimensions:

| | High Scaffolding Needs | Low Scaffolding Needs |
|---|---|---|
| **Social Presence** | Short/simple writing, negative emotions, disengagement | Asking questions, disagreeing with teacher |
| **Cognitive Presence** | Gradual knowledge-building, memory/forgetting | Changing tactics based on feedback |

LLMs captured the bottom-right quadrant reasonably well but failed to represent the other three categories.

## Design Guidelines

1. **Diverse personalities** — model Big Five personality traits to produce varied [[student-engagement|engagement]] levels and emotional responses
2. **Gradual knowledge building** — integrate [[knowledge-tracing|knowledge tracing]] to avoid unrealistic knowledge jumps
3. **Model forgetting** — account for memory decay over time
4. **Promote question-asking** — use context-aware triggers for the LLM student to ask questions
5. **Vary language complexity** — regulate response length, formality, and introduce age-appropriate errors
6. **Allow disengagement** — let simulated students lose focus or stay silent, providing authentic teaching challenges

## Significance

- **[[teacher-education|Teacher training]]**: more realistic [[simulating-students|LLM student simulations]] enable scalable practice for pre-service and in-service teachers
- **Validation gap**: only 3% of studies simulating learners do post-factum validation — this study provides a framework for it
- **MathDial** is the only publicly available dataset of real teacher/LLM-student interactions
- Addresses the growing trend of using unvalidated [[simulating-students|LLM simulations]] in educational contexts

onal contexts

## What this means for practice

- **Teacher educators.** Do not run [[simulating-students|LLM-simulated students]] as authentic rehearsal without checking fidelity first; the 12 tutoring teachers reported overly complex language, missing emotion, unnatural attentiveness, and knowledge jumps, and the simulations only represented the low-scaffolding/high-cognitive-presence quadrant well.
- **Teacher educators.** Screen a simulation against all four real student behavior categories — disengagement and negative emotion, question-asking and disagreement, gradual knowledge building and memory, and tactic change on feedback — and choose prompts that force the three categories the LLM students failed to cover.
- **Researchers.** Validate simulations against teacher judgment after use rather than assuming internal consistency; only 3% of studies simulating learners do any post-factum validation, which is the gap this framework addresses.
- **Teacher educators.** Use the scaffolding-by-presence categorization as a debrief checklist: it tells you how a simulated student should push back or disengage, so a trainee's response can be reviewed against a defined behavior type.
- **Designers.** Build [[knowledge-tracing|knowledge tracing]] and forgetting into the simulated student, and let it go silent or lose focus, so that trainees meet the teaching challenge the design guidelines describe rather than a relentlessly cooperative partner.

## Limitations

- The study interviewed 12 teachers, most based in the UK and the majority female; the authors acknowledge possible gender effects on how personas are perceived and call for larger, more diverse samples.
- All simulations analyzed came from one dataset (MathDial) built with an older GPT-3.5-turbo model, so behavior may differ with other [[llm|LLMs]] — and the authors note more capable models can sometimes simulate less convincingly.
- Scope was limited to [[k-12|K–12]] [[math-education|mathematics]] dialogue; real student behavior varies by subject and was never tested elsewhere.
- Realism judgments are teacher self-report in interviews, with no measured learning outcomes and no comparison against real students.

## Connected Concepts

- [[k-12]]
- [[knowledge-tracing]]
- [[llm]]
- [[scaffolding]]
- [[simulating-students]]
- [[student-modeling]]
- [[teacher-role]]

## Connected Articles

- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring

## Citation

Martynova, D., Macina, J., Daheim, N., Yalçın, Ö. N., Zhang, X., & Sachan, M. (2026). [*Can LLMs Effectively Simulate Human Learners? Teachers' Insights from Tutoring LLM Students*](https://aclanthology.org/2025.bea-1.8).
