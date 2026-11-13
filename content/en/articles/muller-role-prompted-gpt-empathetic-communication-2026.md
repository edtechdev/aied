---
title: "Training Empathetic Communication Skills in Medical Students With a Role-Prompted GPT-4o Chatbot"
created: "2026-11-10T20:42:58-05:00"
updated: "2026-11-10T20:55:00-05:00"
type: article
pedagogy: [professional-training]
technology: [generative-ai, llm, conversational-ai, simulating-students, simulation]
assessment: [self-assessment, self-report-measures, feedback]
sources: ['raw/papers/muller-role-prompted-gpt-empathetic-communication-2026.md']
source_url: "https://doi.org/10.2196/88092"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [quasi-experiment]
methods: [quantitative-research]
discipline: [medical education]
level: [higher ed]
audience: [medical educators, curriculum designers, instructors]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Müller, Lemberg, Gellert and Zoellick (2026) gave 162 medical students at Charité in Berlin a single conversation with a role-prompted GPT-4o chatbot, in one of four scenarios chosen to exercise [[empathy|empathic communication]]: shared decision-making, motivational interviewing, a sexually transmitted infection consultation, and breaking bad news. Students rated their perceived communication competence before and after, and the mean rose from 5.89 to 6.83 on a 0–10 scale — a difference of 0.94 (95% CI 0.69–1.20, Cohen's d = 0.58) after an average of 13 prompt-response pairs. Students rated the AI [[feedback|feedback]] useful (7.92 out of 10), but the rated adequacy of that feedback did not predict the gain (r = 0.08), and the design had no control group, so the improvement cannot be separated from practice, repetition or expectancy.

**Relevance to [[ai-education|AI in Education]]:** This is a clean example of using a [[conversational-ai|conversational agent]] as a [[simulating-students|simulated patient]] for [[professional-training|professional communication training]] at a scale that standardized patients cannot match — and of the measurement problem that comes with it, since the outcome is self-assessment rather than observed performance.

## Key Findings

- **Self-assessed competence rose after one conversation.** Mean perceived communication competence increased 0.94 points (SD 1.64) from 5.89 to 6.83, d = 0.58, across all four scenarios.
- **The dose was small.** The average conversation was 13 prompt-response pairs (SD 4.8), which the authors describe as a single short interaction rather than sustained practice.
- **Students liked the feedback but its quality did not explain the gain.** Usefulness averaged 7.92 (SD 1.61), while the correlation between feedback adequacy and competence gain was r = 0.08 (p = .32).
- **No control group.** The quasi-experimental pre-post design cannot rule out test-retest effects, novelty, or the general effect of rehearsing a conversation.
- **The tool needs no fine-tuning.** GPT-4o at default settings with scenario-specific system prompts produced the simulated counterpart, in German.

## How the intervention worked

The four scenarios map onto standard German medical curriculum objectives: shared decision-making, motivational interviewing, an STI consultation, and breaking bad news. Each student was matched to a case appropriate to their stage of study and talked to the chatbot through a web interface. The model played the patient; the student practiced the conversation. Afterwards the system generated feedback on the student's communicative behavior, which the student rated for adequacy.

The authors position the tool as a resource-efficient complement to standardized patients and role-play: it is available anytime, costs little per student, scales to a whole cohort at once, and can be extended by writing new system prompts. They also flag its limits — text only, no voice or avatar, and no guarantee that a text conversation transfers to a spoken clinical encounter.

## Reading a pre-post self-report gain

A 0.58 effect on self-assessed competence after a single 13-turn conversation is a large change for a short intervention, which is a reason for caution rather than enthusiasm. Self-efficacy is responsive to mastery experiences, and a completed conversation with a patient who responds coherently is exactly that kind of experience. Whether the student's actual communication improved is a separate question that this design cannot answer.

The feedback result sharpens the point. If the mechanism were the quality of AI feedback, students who rated the feedback as more adequate should have gained more. They did not. That is consistent with the gain coming from the rehearsal itself — or from simply having done something new — rather than from the model's critique.

## What this means for practice

- **Use it as rehearsal, not assessment.** A role-prompted chatbot is a low-cost way to get every student talking before they meet a standardized patient; it is not evidence that they can do it.
- **Pair it with observed performance.** The authors themselves call for randomization, control groups and external assessment, and for spoken interaction or avatars to approximate a real encounter.
- **Do not infer feedback quality from satisfaction.** High usefulness ratings and null associations with gain are a reminder to evaluate feedback by what it changes.
- **Match case to stage.** The study did this deliberately, and it is the main design decision that makes a generic model feel like a curriculum tool.

## Limitations

- No control group and no randomization; the pre-post gain is confounded with practice, novelty and expectancy.
- The outcome is self-assessed competence, not observed or patient-rated communication.
- Selection bias toward students with greater technology affinity, which the authors acknowledge they cannot quantify.
- Text-only interaction in German, with a single model and default settings, so results may not transfer across languages, modalities or model versions.
- Feedback adequacy was rated by the same students whose competence was measured.

## Citation

Müller, Y., Lemberg, H., Gellert, P., & Zoellick, J. C. (2026). [*Training empathetic communication skills in medical students with a role-prompted GPT-4o chatbot: Quasi-experimental intervention study*](https://doi.org/10.2196/88092). JMIR Medical Education, 12, e88092.
