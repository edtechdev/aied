---
title: "Artificial intelligence in perioperative medicine education: A feasibility test of case-based learning"
created: "2026-11-07T09:26:35-05:00"
updated: "2026-11-07T13:25:00-05:00"
type: article
published: "2026"
source_url: "https://doi.org/10.1177/17504589251346634"
sources: ['raw/papers/trewren-ai-perioperative-case-based-learning-2026.md']
confidence: medium
page_kind: [synthesis]
research_method: [design and evaluation study]
discipline: [medical education]
level: [higher ed]
audience: [instructors, researchers]
pedagogy: [case-based-learning, professional-training, active-learning]
technology: [llm, generative-ai, simulation, human-in-the-loop-ai]
assessment: []
methods: []
institutions: []
ethics: [hallucination-risk]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Trewren and colleagues tested whether a [[llm|large language model]] could carry a [[case-based-learning|case-based]] perioperative medicine tutorial without inventing clinical facts. Five cases on anticoagulation, fluid management, insulin management, prophylactic antibiotics, and nil-by-mouth care with time-critical medications were drafted with Claude 3.7 Sonnet, edited by an intensive care trainee and a medical education consultant, and loaded into a custom platform where GPT-4o answered free-text questions from the case text. Four anesthetic trainees worked each case as a patient assessment, producing 547 question-and-answer pairs. Duplicate review judged 99.3% (543/547) of answers appropriate, found no fabricated content (0/547), and recorded the only four failures as refusals to report information the case contained. That is evidence that a grounded model can hold a case together under interrogation. It is not evidence that learners learn more from the format.

## Key Findings

1. **Accuracy against the case text was high.** Reviewers judged 99.3% (543/547) of the model's answers medically appropriate, the study's primary outcome.
2. **No fabrication was observed.** The rate of problematic [[hallucination-risk|hallucination]] was 0% (0/547), against a background literature in which ChatGPT fabricated references in up to 30% of scientific-writing outputs.
3. **The model did add material.** In 14.4% (79/547) of answers it supplied content absent from the screenplay. Every such addition was judged medically congruent, and in this design the additions were intended.
4. **The four failures were refusals, not inventions.** Each declined to report information the case contained: electrocardiogram results, ketone levels, height and weight, and injuries to parts of the body other than the one requiring surgery.
5. **Two models did two jobs.** Claude 3.7 Sonnet generated the case outlines; GPT-4o delivered them interactively. Clinician editing sat between the two, so the case text rather than the model was the controlled artifact.
6. **The evidence is feasibility evidence.** Five cases and four trainee investigators yielded 547 pairs, a mean of 136.8 questions per investigator and 109.4 per case, with no learning outcome and no comparison condition.

## How the case pipeline was built

The five topics came from medical student curricula on perioperative management: anticoagulation, fluid management, insulin management, prophylactic antibiotics, and nil-by-mouth care for patients taking time-critical medications such as those for Parkinson's disease. Case outlines were generated with Claude 3.7 Sonnet from a structured prompt, then read and edited independently by an intensive care unit trainee and a medical education consultant. Editing covered content that seemed incongruent with practice and content a real evaluation would require, which kept [[human-in-the-loop-ai|human review]] at the point where clinical accuracy is set. The final screenplays are reproduced in the paper's supplementary material, which matters for replication: the case text, not the model, is the stable artifact.

Delivery used a custom online interface that passes the entire screenplay to GPT-4o, in effect a [[simulation|virtual patient]] that answers in text. Learners type free-text questions and the model answers in character, as a patient would to a history question or as a clinician would when asked for an examination finding or a test result. The authors chose GPT-4o for developer familiarity and for its standing on sycophancy trends and public leaderboards at the time. Four anesthetic trainees then worked all five cases independently, with unlimited questions and time, until each felt able to write an assessment and plan. Each had trialed the platform on at least one case beforehand. The 547 resulting pairs average 136.8 questions per investigator and 109.4 per case.

Review was conducted in duplicate by the same trainee and consultant who had edited the screenplays. For each pair they recorded whether the model answered or declined, whether the question fell inside the screenplay, which part of the patient evaluation it addressed, and, where the model answered beyond the screenplay, whether the added content was medically congruent.

## What counted as a hallucination

The paper defines hallucination as unfounded fabrication or factual error, then does something unusual with the definition: it applies it according to the purpose of the system. In a clinical record tool, any content not in the source is fabrication. In a teaching case, a patient who answers a question about diet or smoking with a plausible detail is doing what a patient does. The team therefore allowed the model to add history that did not change the core medical problem, and judged those additions by whether a clinician would find them reasonable.

This is why 14.4% (79/547) of answers containing material absent from the screenplay are not counted as errors. A 20-year smoking history, an insulin regimen of 30 units of glargine at night and 8 units of lispro with meals, and a pain score of 8 out of 10 were all invented and all accepted. Reviewers judged that none altered the anticoagulation, fluid, or glucose problem the case was built around. Read as a fidelity feature, the behavior makes the encounter feel less like an interrogation of a document.

The four failures ran the other way. Each was a refusal to provide information the screenplay did contain. The model said, in effect, that the information was not available. A learner who accepts that reply loses case content and may conclude the workup is complete when it is not. The study's primary outcome captures this, because it counts inappropriate refusals alongside fabrication, but a team monitoring only hallucinations would not see it.

## Why the teaching and clinical settings diverge

The paper is careful about what its zero means. The same generative behavior that improves a tutorial would be unacceptable in documentation, audit, or decision support. Invented diet and exercise advice could distort a prehabilitation triage; invented insulin doses could reach a prescription. The distinguishing variable is intent and use case, which is why the authors argue for use-specific deployment and prompting rather than one accuracy verdict for a model.

The surrounding evidence supports a narrow reading. A pilot in neurology had already shown LLM-supported interactive case-based learning to be workable, and ChatGPT's performance on standardized medical examinations showed high factual concordance under different conditions. Against that, models have been shown to underperform in domains less represented in training corpora, and perioperative medicine is developing enough that its coverage was uncertain. The 0% (0/547) result is a direct check on that specific worry, not a general accuracy claim.

The educational case for the format is separate from the accuracy result. The format is closer to [[active-learning|active learning]] than to reading a case summary, because the learner must generate the questions that unlock the case. For [[professional-training|professional education]], interactive cases can supply unlimited, on-demand deliberate practice, standardize exposure to core scenarios, and extend experiential learning beyond operating room schedules and faculty availability. None of those benefits was measured here. The study establishes that the content can be delivered. It does not establish that the delivery teaches.

## What this means for practice

- **Course directors.** Treat the edited screenplay as the teaching artifact and version it. The model's answers are only as good as the case text it is grounded in, and the reported accuracy is fidelity to that text.
- **Instructors.** Require learners to interrogate in the sequence the study used, moving through history, examination, and investigations, and to commit to an assessment and plan before debriefing, so the interaction exercises clinical reasoning rather than fact retrieval.
- **Faculty developers.** Teach the refusal signal. The only errors here were "not available" replies to questions the case could answer, and learners need a habit of noticing and escalating them.
- **Evaluation leads.** Audit both failure modes and report them separately. A hallucination-only measure would have scored this deployment as perfect.
- **Clinical educators.** Keep the tolerance for plausible invention inside the classroom. The paper's contrast with documentation and prescribing is the boundary to state explicitly.

## Limitations

- Five cases, one custom platform, and two named model versions, Claude 3.7 Sonnet for drafting and GPT-4o for delivery. Other models, interfaces, and case topics are untested.
- The outcome is fidelity to the screenplay, not learning. No students used the system, no comparison condition was run, and no knowledge, reasoning, or transfer measure was collected.
- The four investigators were anesthetic trainees on the study team, and the two raters had written the cases, with no blinding reported. No agreement statistic is reported for the duplicate review.
- Zero events in 547 answers cannot estimate a hallucination rate. The authors note that incidence estimation without an observed event needs larger and more diverse sampling.
- All cases were written and evaluated in English, and the topics were drawn from medical student curricula, so both language and curricular context are narrow.
- The screenplays were model-generated and then clinician-edited, so 99.3% measures agreement with a case text whose own clinical validity was not independently tested.

## Citation

Trewren, T., Fitzgerald, N., Jaensch, S., Nguyen, O., Tsymbal, A., Gao, C., et al. (2026). [*Artificial intelligence in perioperative medicine education: A feasibility test of case-based learning*](https://doi.org/10.1177/17504589251346634). *Journal of Perioperative Practice, 36*(1-2), 50-57.
