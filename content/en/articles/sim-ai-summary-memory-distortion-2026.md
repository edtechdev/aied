---
title: "AI-Enabled Human Memory Manipulation: Misleading AI-Generated Summaries Distort Human Memory"
created: "2026-11-07T12:07:00-05:00"
updated: "2026-11-07T12:07:00-05:00"
published: "2026-09-23"
type: article
evidence_context: non_educational
pedagogy: [cognitive-psychology]
technology: [generative-ai, llm]
assessment: [assessment-validity]
methods: [quantitative-research]
ethics: [hallucination-risk, trust]
research_method: [experiment]
audience: [instructors, instructional designers, educational technology developers, administrators, researchers]
page_kind: [evaluation]
sources: ["raw/papers/sim-ai-summary-memory-distortion-2026.md"]
source_url: https://arxiv.org/abs/2609.28820
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links, quotes]
---

> **Synthesis:** Sim, Eiger and Kohno ask whether errors in an [[generative-ai|AI-generated summary]] can change what a person remembers about the event the summary describes. They first prompted ChatGPT-5.5 and Gemini 2.5 Flash-Lite five times each to summarize two 25-second videos of a car-pedestrian accident, producing 20 summaries, and coded every omission, inaccuracy and addition against 19 central details. All 20 summaries contained mistakes. The summaries omitted 51.6% of central details on average, and 95% left out the collision itself. The authors then ran a human experiment with 328 analyzed participants. Participants watched one video, waited 24 to 48 hours, read a summary that either matched or contradicted the traffic sign in the video, and completed a memory recognition test. Among participants who read a consistent summary, 83.6% correctly identified the sign; among those who read a misleading summary, 44.8% did. The effect held whether the summary was labeled as AI-written or human-written. The study measures memory for a short video, not classroom learning, so its educational value is a warning about source fidelity in AI summaries rather than evidence that students learn less.

## Key Findings

1. **Every AI summary contained errors.** The 20 summaries contained at least seven and at most 21 coded errors each, despite averaging about 305 words and using a prompt that asked for neutral, factual coverage of everything important.
2. **Omission was the dominant failure.** The summaries omitted 51.6% of central details on average. All but one summary, 95%, omitted the car colliding with the pedestrian, and 90% omitted the pedestrian lying on the ground and standing up afterward.
3. **Inaccuracies and hallucinations were also common.** 65% of summaries misdescribed at least one central detail, 6.1% of central details were described inaccurately, and 60% of summaries added at least one detail that was not in the video, with an average of 1.6 additions per summary.
4. **A misleading summary changed recall.** In the human experiment, 83.6% of participants who read a consistent summary answered the critical traffic-sign question correctly, compared with 44.8% of those who read a misleading summary, χ2 = 53.937, p < .001.
5. **The AI or human label did not protect memory.** Misleading summaries produced similar accuracy when labeled AI-written, 46.3%, or human-written, 43.4%, and the label itself had no significant effect. Trust in AI and frequency of AI use did not moderate susceptibility.
6. **Memory for other details remained intact.** 96.6% of participants correctly identified that the accident happened during the day, and participants averaged 91.4% correct on 11 non-critical questions, so the result is a source-specific distortion rather than a blanket failure of memory.

## What the Study Measured

The paper has two parts. The first is a small audit of model output: two videos, two models and five fresh prompts per video and model, for 20 summaries. Three researchers defined 19 central details, then two coders independently classified omissions, critical inaccuracies, non-critical inaccuracies and additions. The second is a conceptual replication of the classic misinformation paradigm. Participants were recruited through Prolific, watched one of two 25-second animated videos, passed an attention check, and returned 24 to 48 hours later to read a 21-sentence summary and answer a 12-item recognition test.

The design crossed two factors. The summary was said to be written by an AI transcription tool or a professional human transcriber, and the traffic-sign detail was either consistent with the video or misleading. In fact, all participants read the same ChatGPT-generated summary apart from the sign detail. Of 360 participants who completed the first part, 331 completed both parts and 328 were analyzed after attention checks: 82 in the AI consistent condition, 80 in the AI misleading condition, 83 in the human consistent condition and 83 in the human misleading condition.

## Errors Were Frequent, Especially Omissions

The audit found that the models could produce fluent summaries while dropping the event that made the video meaningful. A summary could describe a car approaching an intersection and a pedestrian in the road without saying that the car hit the pedestrian. Some summaries omitted the pedestrian entirely. The authors note that the videos were short and simple, which makes the omissions a conservative test: there was less material to lose than in a realistic recording.

The error profile differed by model. ChatGPT produced more additions, while Gemini produced more errors when describing central details. Errors also varied across repeated prompts on the same video, so a user cannot assume that a second generation will preserve the same facts. This matters for any workflow that treats a summary as a stable record rather than as one unreliable rendering of a source.

## Misleading Summaries Changed Recall

The human experiment isolated one critical detail: whether the car stopped at a stop sign or a yield sign. A misleading summary nearly halved accuracy on that question. The effect was present in both video versions and in both source-label conditions. The authors also checked whether participants were simply answering from the summary rather than the video; accuracy on an unmentioned detail, day versus night, was 96.6%, and accuracy across the non-critical questions was 91.4%.

The source-label result is the paper's most consequential finding for AI design. Participants did not become more skeptical when told the summary was AI-generated, and their self-reported trust in AI did not predict who was misled. The authors interpret this cautiously, but it undercuts the assumption that labeling a summary as AI-written, or teaching users that AI makes mistakes, is enough to protect memory.

## Why This May Matter for Education

The educational bridge is the summary, not the traffic sign. Instructors and students increasingly use AI to condense readings, lectures, discussion threads, meeting notes and advising records. If a summary omits a central claim or inserts a plausible detail, a reader may later remember the summary's version as the source. That is a [[assessment-validity|validity]] problem for any assessment or record that depends on what someone says they read or observed, and a [[cognitive-psychology|memory]] problem for study and review.

The study did not test students, course readings or learning outcomes. It used a short animated event and a single manipulated detail, and it measured recognition after 24 to 48 hours. The educational implication is therefore a design and verification hypothesis: summaries used for learning or institutional records should preserve links, quotations and timestamps to the source, and readers should retrieve the original before relying on a summary for a consequential judgment. Whether that intervention protects students' memory is a question for classroom research, not a result of this paper.

## What this means for practice

- **Instructors.** Treat an AI summary of a reading, lecture or discussion as a pointer to the source, not as a substitute for it. Ask students to retrieve and explain the original before they use the summary, and do not use an AI recap as the authoritative record of what was said in class.
- **Instructional designers.** Build summaries that keep source links, timestamps and direct quotations, and visually distinguish the model's paraphrase from the source text. Omission is the common failure, so a summary that reads smoothly can still be missing the central event.
- **Educational technology developers.** Evaluate summarization tools on omission and source fidelity, not only fluency or user satisfaction. A useful test is whether the tool preserves the few details a reader would need to check the summary against the original.
- **Administrators.** Do not treat AI-generated meeting notes, advising records or incident summaries as neutral records. Keep a human-authored record for consequential decisions and give students and staff a way to correct the record against the source.
- **Researchers.** Test whether source links, warnings or a required retrieval step reduce memory distortion among students, using delayed and AI-free measures. The current study supplies the mechanism and the paradigm, not the classroom effect.

## Limitations

- The AI audit used two 25-second animated videos, one prompt and two models, so the error rates describe these materials rather than all summarization.
- The human sample was 328 U.S. adults recruited through Prolific, not students in a course; the study did not measure learning, grades or classroom behavior.
- The experiment manipulated one critical detail in one summary and used a single summary selected and lightly edited by the researchers, so other error types, including omission, were not tested experimentally.
- The source-label manipulation may have been suspected by some participants, although the authors report a perceived-clarity difference that argues the labels were noticed.
- The design measured recognition 24 to 48 hours after the video, not long-term retention or transfer to new material.

## Citation

Sim, M., Eiger, Y., & Kohno, T. (2026). [AI-Enabled Human Memory Manipulation: Misleading AI-Generated Summaries Distort Human Memory](https://arxiv.org/abs/2609.28820). arXiv:2609.28820.
