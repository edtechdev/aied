---
title: Learning by Chatting? Investigating the Impact of Generative AI on Information Seeking and Learning
created: "2026-06-11T04:33:04-04:00"
updated: "2026-09-19T08:58:00-04:00"
type: article
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, llm, pedagogical-agent]
research_method: [experiment]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2606.11669.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** In an 8-day field experiment comparing ChatGPT vs. Google Search for informal learning, participants using ChatGPT experienced diminished agency, offloaded information selection to AI, and suffered greater [[metacognition|meta-cognitive]] load — resulting in worse [[learning-gains|learning outcomes]], particularly for higher-order [[critical-thinking|critical thinking]]. The study identifies two key distortions in ChatGPT-mediated information access: output bias toward solution-oriented artifacts over principled knowledge, and a conversational interaction paradigm that reduces exploration of the broader knowledge space.

## Key Findings

- **8-day field experiment** with between-subjects design (ChatGPT vs. Google Search) using daily diary protocols for in-situ data collection.
- **Diminished agency:** ChatGPT participants offloaded information selection to the AI, reducing their sense of control over the learning process.
- **Higher meta-cognitive load:** The reduced sense of control paradoxically increased cognitive burden, as participants had to monitor and evaluate AI-curated outputs.
- **Two sources of distortion:**
  1. **Output bias** — ChatGPT favors providing solution-oriented artifacts (answers, code, summaries) over principled knowledge (explanations, theory, context).
  2. **Behavioral shift** — The conversational, socially-oriented interaction paradigm reduces exploration of the broader knowledge space.
- **Worse learning outcomes:** ChatGPT group performed worse overall, especially on higher-order critical learning tasks.
- **Core tension:** Offloading information seeking to AI for efficiency inherently conflicts with the depth of processing required for meaningful learning.

## What this means for practice

- **Learners.** Ask for principles rather than products: only 65 of 98 ChatGPT diary entries described extracting fundamental or principle-oriented information, against 136 of 140 Google entries, and the ChatGPT group was significantly less likely to answer the two critical-thinking items correctly (57% vs. 95%, and 21% vs. 57%).
- **Learners.** Keep choosing your own sources: the ChatGPT group offloaded information selection to the model, differentiated and verified information far less often — only 7 entries described verification against 31 in the Google condition, and then carried higher [[metacognition|meta-cognitive]] load monitoring answers it had not selected — [[efficiency-gain-illusion-ai-overreliance|easier access]] was not a [[learning-gains|learning gain]].
- **Designers.** Design tutors that elicit reasoning instead of supplying answers, and preserve exploration [[scaffolding|scaffolds]] that keep [[agency|learner agency]]; the same challenge of designing AI tutors to prompt reasoning rather than solve tasks is documented in [[tutoring-effectiveness-index]].
- **Designers.** Address the two distortions the study identifies — default output bias toward solution-oriented artifacts and reduced exploration of the knowledge space — with homework [[guardrails]], self-regulated-learning support, and interfaces that surface source diversity, the design commitments behind PeteChat/Tutor Not Solver.
- **Researchers.** Test the mechanisms directly rather than inferring them: the study reports aggregate diary patterns and explicitly makes no causal claim linking information-seeking behaviors to learning outcomes, and the misattribution of AI output to one's own understanding hypothesized in [[llm-fallacy-misattribution]] still lacks direct evidence.

## Limitations

- The final sample was 35 participants (14 ChatGPT, 21 Google) from 80 recruited on Prolific in two batches, with attrition attributed to the diary workload; dropout was higher in the ChatGPT condition.
- The headline learning-outcome difference did not reach significance (11.62 vs. 12.86 out of the knowledge test, p = 0.069); the significant results rest on Fisher's exact tests on two multiple-choice items in a small sample.
- The study used one informal topic (nutrition and meal planning), and the authors state the task was not completely self-directed or unstructured; behaviors may differ in high-stakes domains such as healthcare, where credibility checking is more pronounced.
- Diary entries are self-report accounts that may not capture every instance of information seeking, findings are aggregate rather than modeling individual differences, and participants were drawn from a screened pool of moderate GenAI users, so the results should not be read as characterizing all learners or all forms of learning.

## Connected Concepts

- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[ai-literacy]]
- [[metacognition]]
- [[generative-ai]]
- [[agency]]
## Connected Articles

- [[tutoring-effectiveness-index]]
- [[llm-fallacy-misattribution]]
- [[efficiency-gain-illusion-ai-overreliance]]
## Citation

Mittal, S., Blodgett, S. L., & Liao, Q. V. (2026). [Learning by Chatting? Investigating the Impact of Generative AI on Information Seeking and Learning](https://arxiv.org/abs/2606.11669).
