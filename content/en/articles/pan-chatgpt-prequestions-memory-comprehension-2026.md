---
title: "Using ChatGPT-generated prequestions to improve memory and text comprehension"
created: "2026-11-12T20:30:00-05:00"
updated: "2026-11-12T20:30:00-05:00"
type: article
sources: ['raw/papers/pan-chatgpt-prequestions-memory-comprehension-2026.md']
source_url: "https://doi.org/10.1037/mac0000254"
source_depth: full text
confidence: high
evidence_context: educational
research_method: [experiment]
page_kind: [evaluation]
level: [adult learning]
audience: [researchers, instructors]
discipline: [learning sciences]
foundations: [ai-literacy]
pedagogy: [retrieval-spacing-interleaving, metacognition, self-regulated-learning]
assessment: [assessment-validity]
technology: [generative-ai, conversational-ai]
ethics: [ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Prequestioning — guessing answers to questions about material one has not yet studied, then reading to find out — improves learning, but it depends on practice questions that instructors rarely provide. Pan, Schweppe, Teo, Indrajaya and Wenzel test whether [[generative-ai|generative AI]] can remove that bottleneck. Across four experiments (final samples of 90, 128, 153 and 157 adults; Experiments 2–4 preregistered), participants answered two ChatGPT-generated prequestions before reading a 675-word text on brakes, then took an open-ended criterial test scored by idea units. AI-generated prequestioning beat reading alone (*d* = 1.12 on practiced questions, *d* = 0.78 on unpracticed ones), matched human-generated prequestions, and beat studying an AI-generated outline — even when the questions came from a one-line prompt.

## The practice-question bottleneck

Prequestioning is a [[cognitive-psychology|cognitive psychology]] intervention: attempt questions about content that has not been taught, then meet the material and discover the answers.

The obstacle is logistics. Practice questions are usually written for students who have already studied the material, the wrong shape for prequestioning. Survey data cited by the authors show undergraduate instructors offering them before instruction as infrequently as 37%, compared with 76% afterward — too late for the method to work, and a May 2025 search of RateMyProfessors.com found at least 300 complaints about insufficient practice questions.

Quality compounds supply. Prequestions must be understandable, memorable, and answerable from the coming text: "conceptual" questions requiring inference were less effective than "factual" ones with verbatim answers, and "isolative" questions targeting one detail were less effective than "integrative" ones spanning several ideas. That separates prequestioning from [[retrieval-spacing-interleaving|retrieval practice]] and makes it hard to self-manage, since a student who has not read the material cannot judge whether a question is any good — a [[metacognition|metacognitive]] problem as much as a supply problem.

## Four experiments on one 675-word text

Every experiment used "Brakes," a 675-word, eleven-paragraph text adapted from the World Book Encyclopedia, with a Flesch–Kincaid grade level of 7.44, a Gunning Fog Index of 9.00, and no diagrams. Participants were Prolific Academic adults aged 21 to 45 with no prior knowledge of vehicle brakes.

The sequence was constant: random assignment, two questions attempted one at a time with a mandatory typed guess, passage reading, a short distractor task, then an open-ended criterial test. Answers were scored against rubrics of 2–3 idea units by raters blind to condition; 53% of Experiment 1 responses were double-scored, giving an intraclass correlation coefficient of 0.84. The [[conversational-ai|chatbot]] was the free version current at the time — GPT-3.5 in Experiments 1–3, GPT-4o in Experiment 4.

Final samples were 90 (45 per group), 128 (64 per group), 153 (51 per group) and 157 (53, 51 and 53), after exclusions for off-task browser activity (19, 40, 21 and 21 participants) and, in Experiment 4, 5 for noncompliance.

## Prequestions beat reading alone, and match human-written questions

Experiment 1 compared AI-generated prequestioning with reading only, and prequestioning won: a main effect of training group, *F*(1, 88) = 32.95, *p* < .001, η²p = .27, with *d* = 1.12 on questions identical to the prequestions, *t*(88) = 5.29, *p* < .001, and *d* = 0.78 on nonidentical questions drawn from a human-generated set, *t*(88) = 3.69, *p* = .0004. Prequestion participants also read longer, 7.22 min versus 5.64 min, a confound later experiments controlled.

Experiment 2 replaced the read-only group with a human-prequestion group, and the sources proved indistinguishable: no main effect of training group, *F*(1, 126) = 0.31, *p* = .58, η²p = .0024, and no pairwise difference on any question type (*ts* ≤ 0.58, *p* ≥ .56, *ds* ≤ 0.10). Distance mattered: performance fell from tested to untested same-source questions (*d* = 0.46) and again to untested different-source questions (*d* = 0.32).

## A one-line prompt works about as well as an engineered one

Experiments 3 and 4 compared prequestioning with a time-matched alternative across three groups: elaborate-prompt, basic-prompt, and AI-outline study. Reading time was fixed at 6 min, each prequestion had 80 s, and the outline had 160 s.

In Experiment 3 the training effect was large, *F*(2, 150) = 56.96, *p* < .0001, η²p = .43, and both prequestioning groups beat the outline group on every question type: elaborate at *ds* ≥ 0.99, basic at *ds* ≥ 1.03. On human-generated questions — the only ones entirely new to both groups — the basic group scored higher, *t*(100) = 2.29, *p* = .024, *d* = 0.45, though Bayesian evidence was weak (*BF*10 = 2.08).

Experiment 4 repeated the design with GPT-4o, comparison-focused questions, and a simpler 160-word outline. The pattern held but attenuated: a main effect of training group, *F*(2, 154) = 19.28, *p* < .0001, η²p = .20, with both prequestion groups above the outline group (elaborate *ds* ≥ 0.34, basic *ds* ≥ 0.46). This time elaborate beat basic on elaborate-generated questions, *t*(156) = 6.04, *p* < .0001, *d* = 0.48, while the two did not differ on human-generated questions, *t*(102) = 0.42, *p* = .67.

## What transfers, and what the generated questions look like

Transfer was consistent but bounded: prequestioning helped on questions that were not identical to the practice questions, including human-written and differently prompted ones. The authors call this near transfer, since every question addressed brakes, and note that idea units overlapped in Experiment 4.

By Bloom's taxonomy, most AI questions sat at remember, understand and apply, while human-generated questions were predominantly at analyze; adding comparison instructions pushed at least three quarters of the AI questions to analyze. AI questions were usually shorter than human ones (11.8 and 13.0 words on average versus 19.0) but no easier to read: every question required at least an eighth- to ninth-grade [[reading-education|reading]] level, above the passage itself.

## Why a wrong guess helps

The paper proposes two sources of the benefit: the initial guess, which may create a distinct episodic memory, generate an error signal, or raise attention and curiosity; and the discovery of the correct answer, which is likely processed more thoroughly and integrated better with prior knowledge than after ordinary reading. Guesses were almost always wrong — 0.056 accuracy in Experiment 1 and 0.14 and 0.15 in Experiment 4 — and the benefit appeared anyway.

Both prequestions and outlines can be treated as [[scaffolding|advance organizers]], but only prequestions require a commitment that can be violated. The authors concede that the outlines did not specify comparisons and that prequestions more closely resembled the criterial test, so part of the advantage may reflect transfer-appropriate processing rather than guessing. For [[learning-design|learning design]], the claim is narrower than "AI improves learning": ChatGPT removed the supply constraint on one well-specified technique.

## Key Findings

1. AI-generated prequestioning beat reading alone in Experiment 1, with *d* = 1.12 on practiced questions and *d* = 0.78 on unpracticed questions across 90 adults.
2. AI-generated and human-generated prequestions were equally effective in Experiment 2, with no main effect of source, *F*(1, 126) = 0.31, *p* = .58, η²p = .0024, and null-favoring Bayes factors of at least 4.53.
3. Transfer declined with distance: tested questions exceeded untested same-source questions (*d* = 0.46), which exceeded untested different-source questions (*d* = 0.32).
4. Both prequestioning groups beat outline study on every question type in Experiment 3 (*ds* ≥ 0.99 and *ds* ≥ 1.03) and Experiment 4 (*ds* ≥ 0.34 and *ds* ≥ 0.46).
5. A one-line prompt was not inferior in Experiment 3: the basic-prompt group scored higher than the elaborate-prompt group on human-generated questions (*p* = .024, *d* = 0.45).
6. Prompt content still shaped output: with GPT-4o and comparison instructions, elaborate-generated questions beat basic-generated ones (*d* = 0.48), and at least three quarters of comparison questions reached Bloom's analyze level.
7. Learners rarely answered the prequestions correctly (0.056 accuracy in Experiment 1; 0.14 and 0.15 in Experiment 4), yet prequestioning still improved test performance.

## What this means for practice

- **Generate prequestions from the text you will assign.** Paste the passage into ChatGPT, ask for two open-ended questions, and check that both are answerable from the text and do not assume it has been read.
- **Skip the prompt engineering.** A one-line request performed as well as an iterated prompt in Experiment 3, so instructors and students without prompt expertise are not disadvantaged.
- **Ask for comparisons when you want higher-order questions.** Default output clustered at remember, understand and apply; asking for comparisons moved most to analyze.
- **Keep the guess ungraded.** Accuracy was near floor and the benefit survived it, so grading the attempt adds stakes without adding learning.
- **Treat the effect as short-term until tested otherwise.** Every criterial test followed a brief distractor task, so do not assume the gain survives to an end-of-term exam.

## Limitations

- The criterial test came after a short retention interval, and the durability of AI-generated prequestioning effects has not been thoroughly tested.
- All four experiments used one 675-word expository passage about brakes; more abstract concepts, other domains, and more differentiated practice and test questions remain untested.
- Results are specific to GPT-3.5 and GPT-4o and to the prompts used, and ChatGPT can hallucinate, though no errors appeared in the questions used here.
- Participants were crowdsourced adults aged 21 to 45, older than typical students, and the protocol used only two prequestions, strict attention checks and instructions that may not transfer offline.
- Criterial questions overlapped in idea units across types, particularly in Experiment 4, and all addressed the same topic, so the transfer shown is near transfer rather than generalization.
- The outline comparison may be tilted toward prequestioning: the outlines did not specify comparisons and prequestions more closely resembled the criterial test, while students generating their own prequestions was untested.

## Citation

Pan, S. C., Schweppe, J., Teo, A. Z. J., Indrajaya, A., & Wenzel, N. (2026). Using ChatGPT-generated prequestions to improve memory and text comprehension. *Journal of Applied Research in Memory and Cognition, 15*(3), 461–478. https://doi.org/10.1037/mac0000254
