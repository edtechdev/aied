---
title: "Instructors’ perceptions of a large language model framework for generating automated multiple-choice questions from video transcripts"
created: "2026-11-24T09:10:00-05:00"
updated: "2026-11-27T14:10:00-05:00"
published: "2026-11-24"
type: article
authors: ["Giacomo Cassano", "Daniel Ebbert", "Negin Mirriahi", "Nicoletta Di Blas"]
venue: "Education Tech Research Dev 74:3005–3025"
evidence_context: educational
foundations: [learning-design]
pedagogy: [active-learning]
technology: [generative-ai, llm, educational-nlp, multimodal]
assessment: [automated-question-generation, formative-assessment, assessment-validity, item-response-theory]
methods: [mixed-methods-research, usability-research]
discipline: [engineering education, humanities education]
level: [higher ed]
audience: [instructional designers, instructors, assessment designers, educational technology developers]
page_kind: [evaluation]
research_method: [user study]
sources: ["raw/papers/cassano-llm-mcq-video-transcripts-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]

---

> **Synthesis:** Cassano, Ebbert, Mirriahi and Di Blas (2026) built a pipeline that turns video transcripts into multiple-choice questions, embedding an established item-writing checklist directly in the generation prompt rather than applying it only afterwards. Seven instructors at one Italian [[higher-ed|university]] judged 257 questions derived from 45 [[online-teaching-and-learning|MOOC]] videos they had themselves recorded. Most items met quality guidelines: 84.05% were clear, 86.38% had plausible distractors and 93.39% were answerable directly from the video. The recurring defects were unfocused stems, questions about peripheral examples rather than core content, and overgeneralized wording. In interviews the instructors reported time savings of up to 80% and said they would use the items after light refinement.

*[[mixed-methods-research|Mixed-methods]] expert-judgment study with seven faculty members at Politecnico di Milano and 257 generated MCQs from 45 MOOC videos averaging 7.01 minutes. Each item was rated by its own authoring instructor on three expert-judgment IWF criteria plus four content criteria; twelve formal criteria were checked by the authors. GPT-4o performed concept extraction and [[automated-question-generation|item generation]].*

## Key Findings


1. **Most items passed, but fifteen were simply wrong.** Of the 257 questions, 121 (47.08%) met every criterion and 208 (80.93%) failed at most one, while 15 (5.84%) were rated totally wrong; all traced to errors in the earlier concept-extraction step rather than to question writing.
2. **Clarity held.** 216 items (84.05%) were rated clear; 26 (10.12%) were not, usually because phrasing was too generic, because a supporting example had been mistaken for the main point, or because the model substituted a synonym for the correct technical term.
3. **Distractors were generally plausible.** 222 items (86.38%). Where they were not, difficulty collapsed: 80% of items with implausible distractors were also rated easy.
4. **Relevance was the weak spot.** 133 items (51.75%) were highly relevant, but 49 (19.07%) were low, typically questions about illustrative detail rather than the lesson's central idea.
5. **Difficulty was not controlled.** 59.14% fair, 28.02% easy and only 7.00% difficult, and several instructors said items came out easier than they wanted.
6. **Stems were formally flawed but usable.** An unfocused stem appeared in 31.13% of items, almost always an indefinite article implying more than one right answer. Instructors judged these usable anyway; excluding that criterion, 174 items passed everything and average failures fell from 0.66 to 0.34.
7. **Time saved substantially.** Interviewed instructors estimated up to 80% less preparation time compared with writing items from scratch, and described their role as refining rather than composing.

## How the framework works

The pipeline runs in three steps. Transcripts are segmented by topic. Concepts are extracted and classified as Essential, meaning core ideas central to the learning objectives, Supporting, meaning examples and clarifications, or Organizational, meaning structural transitions. Each concept carries a title, its transcript excerpt, a rewritten standalone explanation, timestamps and its category. Finally the model generates one MCQ per essential concept from a prompt that embeds the Item-Writing Flaws checklist, producing a self-contained stem, one correct answer, three distractors and brief feedback on each option. The checklist is a generation constraint here, not a filter applied afterwards.

Four of the sixteen formal checklist criteria are proactively prevented during generation and need no checking, which is why the authors rather than the instructors verified most structural rules.

## What the defects tell you

The wrong answers are the most informative result. In one worked example, a transcript contrasted descriptive and educational approaches with problematic ones, and the extracted concept flattened that into three equivalent categories. The generated item then asked which two approaches were discussed, and the intended grouping was lost. Every one of the fifteen outright errors originated upstream, in concept extraction or rewriting, not in the question itself.

Two patterns recurred in what instructors rejected. Examples presented as illustration were treated as core content, so questions became technically accurate but misaligned. And nuance was compressed into false definitiveness: a qualified explanation could come back as a stem asking for THE [[primary-education|primary]] characteristic, which narrows the original claim in a way the source never did.

The authors draw a useful line from this. Items targeting declarative, explicitly stated knowledge came out cleanly as single-best-answer questions. Items meant to assess contextual, procedural or inferential knowledge produced ambiguity and overlapping options far more often.

## What this means for practice

- **Instructional designers.** Treat the concept extraction step as the quality bottleneck, not the question writer. Reviewing the concept list before generation catches most of the damage this study found.
- **Assessment designers.** Keep checklist constraints inside the prompt, since that is the paper's contribution, but expect single-best-answer formats to strain against anything situational. Plan different item types where the target knowledge is procedural or inferential.
- **Instructors.** Budget for review rather than composition. The instructors' own estimate of 80% time saving assumes light editing of a mostly usable draft, which is what the accuracy figures support.
- **Learning engineers.** Difficulty was never controlled and came out skewed easy. If you need spread, specify difficulty explicitly rather than letting distractor plausibility set it.
- **Researchers.** Report quality per stage. The gap between 47.08% passing everything and 92.60% failing fewer than three criteria is entirely a function of how strictly you count a formal flaw instructors call acceptable.

## Limitations

- An ideal case by design: 45 short, carefully scripted videos with clean transcripts and no classroom noise, chosen to isolate framework problems before messier lecture recordings.
- One institution and seven instructors, all rating questions drawn from their own courses, so disciplinary breadth is wider than institutional breadth.
- Each item was judged by a single rater, its own author, with no inter-rater reliability estimate.
- The study reports instructor perception of quality, not student performance on the items; nothing here shows whether the questions discriminate or measure what they intend.

## Citation

Cassano, G., Ebbert, D., Mirriahi, N., & Di Blas, N. (2026). [Instructors’ perceptions of a large language model framework for generating automated multiple-choice questions from video transcripts](https://doi.org/10.1007/s11423-026-10646-7). *Education Tech Research Dev*, 74, 3005–3025.
