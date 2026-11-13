---
title: "Using ChatGPT-Generated Prequestions to Improve Memory and Text Comprehension"
created: "2026-11-12T20:30:00-05:00"
updated: "2026-11-13T00:45:00-05:00"
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

> **Synthesis:** Prequestioning — guessing at answers to questions about a text you have not read, then reading to find out — is a well-established way to improve comprehension, but it depends on practice questions that instructors rarely supply. Pan and colleagues tested whether [[generative-ai|generative AI]] could remove that bottleneck. Across four experiments, adults answered two ChatGPT-written questions before reading a short passage and were tested afterward. The generated questions worked about as well as human-written ones, beat reading alone and beat studying an AI-written outline, and a one-line prompt was enough to produce them. The technique is narrow but genuinely useful: it fixes a supply problem for a method that already had good evidence behind it.

## Key Findings

1. **Generated prequestions made the reading work.** Adults who answered two AI-written questions before reading remembered and understood more than adults who only read.
2. **AI questions were as good as human ones.** The two sources produced indistinguishable performance, so the model removes the labor without diluting the technique.
3. **A one-line prompt was enough.** Asking for two questions in plain language worked as well as an iterated, carefully engineered prompt.
4. **Prequestions beat studying an outline.** The advantage was large in both experiments that tested it, which suggests the gain comes from attempted retrieval rather than from previewing content.
5. **Guessing wrong is the mechanism, not a failure.** Participants almost never answered correctly, and the benefit appeared anyway.
6. **Higher-order questions need to be requested.** Default output clustered at recall and application; asking for comparisons pushed most questions toward analysis.

## Why the supply problem mattered

Prequestioning is a [[cognitive-psychology|cognitive psychology]] intervention: attempt questions about content that has not been taught, then meet the material and discover the answers. The obstacle is logistics. Practice questions are usually written for students who have already studied, which is the wrong shape for this method. The authors cite survey data showing instructors offer questions before instruction far less often than after it, and a search of student reviews turning up hundreds of complaints about too few practice questions.

Quality compounds the supply problem. Prequestions have to be understandable, memorable and answerable from the coming text, and the studies the authors review found factual questions with verbatim answers more effective than inferential ones. That also makes prequestioning hard to self-manage: a student who has not read the material cannot judge whether a question is any good, which is a [[metacognition|metacognitive]] limit as much as a supply one.

## Four experiments, one text

Every experiment used the same 675-word passage on brakes, written for a general audience. Participants were adults recruited online, aged 21 to 45, with no prior knowledge of vehicle brakes. The sequence was constant: two questions attempted one at a time with a typed guess, passage reading, a short distractor task, then an open-ended test scored on idea units by raters blind to condition. The chatbot was the free version current at the time, and samples after exclusions ranged from 90 to 157.

## What the comparisons showed

The first experiment compared AI-generated prequestions with reading only, and prequestioning won by a wide margin on practiced and on separate human-written questions; prequestion participants also read longer, a confound the later experiments controlled. The second replaced the read-only group with a human-prequestion group: the sources proved indistinguishable, and performance fell as test questions moved further from the practice questions. The third and fourth compared prequestioning with studying an AI-generated outline, and both prequestioning groups beat the outline on every question type. In the third, the plain one-line prompt matched the elaborate one; in the fourth, with a newer model and comparison-focused questions, the elaborate prompt pulled ahead.



## What the questions looked like

By Bloom's taxonomy, most AI questions sat at remember, understand and apply, and adding comparison instructions pushed at least three quarters of them to analyze. The generated questions were shorter than the human ones but not easier to read: every one required at least an eighth- to ninth-grade [[reading-education|reading]] level, above the passage itself. Transfer was real but bounded — prequestioning helped on questions that were not identical to the practice ones, but every question addressed the same topic, so the authors call this near transfer.

## Why a wrong guess helps

The paper proposes two sources of benefit: the guess itself, which may create a distinct memory or raise attention and curiosity, and discovering the answer, which is then processed more thoroughly than after ordinary reading. Both prequestions and outlines can act as advance organizers, but only prequestions require a commitment that can be violated. The authors concede that prequestions also resembled the test more closely, so part of the advantage may reflect format rather than guessing. For [[learning-design|learning design]], the claim is narrower than "AI improves learning": the chatbot removed the supply constraint on one well-specified technique.

## What this means for practice

- **Instructors:** generate two open-ended questions from the text you are about to assign, give them out before reading, and make clear the answers will be wrong — that is the point.
- **Instructional designers:** build the guess into the task sequence. A typed response before the reading opens, with no grade attached, is enough to reproduce the design.
- **Curriculum designers:** ask for comparison questions when you want analysis rather than recall; the default output does not get there on its own.
- **Administrators:** treat this as a cheap improvement to an existing practice, not as a case for buying a new platform. The model is doing the writing, not the teaching.

## Limitations

- The test came after a short delay, so durability across a term is untested.
- All four experiments used one 675-word expository passage about brakes; other domains and more abstract material remain untested.
- Results are specific to the two models and prompts used, and generated questions can be wrong even though none were here.
- Participants were online adults aged 21 to 45, older than typical students, and the protocol relied on two questions, attention checks and instructions that may not transfer to a classroom.

## Connected Concepts

- [[retrieval-spacing-interleaving]] — attempted retrieval as the active ingredient
- [[metacognition]] — why learners cannot judge question quality before reading
- [[reading-education]] — comprehension outcomes and text difficulty
- [[learning-design]] — sequencing a guess before the material

## Connected Articles

- [[kreijkes-llm-note-taking-reading-comprehension-2026]] — the same reading task where using the chatbot instead of writing lowered learning
- [[gardella-copilot-fast-forgettable-2026]] — assistance that raised performance without producing learning
- [[hall-ai-validation-thought-2026]] — how the model's agreement shapes thinking

## Citation

Pan, S. C., Schweppe, J., Teo, A. Z. J., Indrajaya, A., & Wenzel, N. (2026). Using ChatGPT-Generated Prequestions to Improve Memory and Text Comprehension. *Journal of Applied Research in Memory and Cognition, 15*(3), 461–478. https://doi.org/10.1037/mac0000254
