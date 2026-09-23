---
title: "Responsible Integration of AI into Pedagogies of Practice in Mathematics Teacher Education"
created: "2026-09-21T04:44:21-04:00"
updated: "2026-09-21T04:44:21-04:00"
type: article
sources: ['raw/papers/bondurant-shaughnessy-ai-pedagogies-practice-2026.md']
confidence: medium
published: "2026"
page_kind: [framework]
research_method: [position paper]
discipline: [math education]
level: [teacher education, higher ed]
audience: [faculty developers, instructors, researchers]
foundations: [teacher-role, teacher-ai-competency, ai-literacy]
pedagogy: [professional-training, scaffolding]
technology: [generative-ai, simulation]
assessment: [feedback]
ethics: [equity-in-ai-education]
reviewed_by: [editor]
---

> **Synthesis:** Bondurant and Shaughnessy take the three pedagogies of practice that organize practice-based teacher education, representations, decompositions and approximations, and ask what generative AI adds to each. Their answer is expansion with conditions: AI can curate cases, flag discourse patterns and staff rehearsal scenarios, but every gain depends on review by a teacher educator who can judge accuracy, equity and cognitive demand. The commentary assembles the evidence base for each pedagogy, from FERPA-compliant case generation and mixed-reality simulations to automated post-rehearsal feedback, and names the recurring failure modes: generated tasks that quietly lower the demand of the mathematics, analyses whose accuracy cannot be assumed, and candidates whose self-assessment diverges from what observers see in their [[teacher-role|teaching]]. It closes with six guiding questions that function as a pre-adoption checklist for mathematics teacher educators, and with the argument that AI should support professional judgment rather than standardize it.

## Key Findings

1. **AI expands each of the three pedagogies, and they work as one cycle.** Generated cases feed representations, discourse analysis supports decompositions, and rehearsal platforms carry approximations, so a candidate can observe a case, analyze it and rehearse the responding move.
2. **Generated mathematics material cannot be trusted on accuracy or demand.** AI-created tasks may reduce the task's cognitive demand or produce inaccurate solution strategies, which puts review of every generated artifact back on the teacher educator.
3. **Analysis of instructional moves is promising and unverified by default.** AI can classify teacher moves by function and flag missed opportunities, but the commentary cites evidence that [[llm|large language models]] are only about 75% accurate, so interpretation needs oversight.
4. **Rehearsal changes questioning practice when feedback is structured.** A chatbot playing virtual student and mentor produced four distinct questioning profiles, and automated post-rehearsal feedback raised candidates' use of probing and exploring questions.
5. **Candidates' self-assessment does not track observed quality.** In the rehearsal studies, preservice teachers' judgments of their own performance diverged from what observers recorded, which is why the authors treat [[scaffolding]] of AI feedback as a design requirement.
6. **Responsible integration is specified as six questions, not a policy.** Purpose and alignment, accuracy and reliability, equity and inclusion, interpretation and scaffolding, privacy and data use, and sustainability and professional judgment frame what to ask before adopting a tool.

## What AI adds to representations

Representations of practice are the artifacts that make teaching visible: video, transcripts, lesson plans, fictional student work samples, planted errors and constructed cases. The commentary traces their pre-AI limits, that they were static and bounded by what a classroom happened to capture, and then the AI extension: a teacher educator can ask a tool to curate cases around a particular pedagogical dilemma or a candidate's own goals. Education-focused platforms that comply with FERPA, such as Colleague AI, are positioned for generating text-based cases and simulated dialogue, while other tools can produce audio, image and video components or serve customizable scenarios at scale. The authors pair each of those possibilities with the equity question that follows it: whose perspectives the generated cases represent, how the data behind them were used, and whether the resulting material reflects the cultural and linguistic diversity of real classrooms. Equity-focused designs already in the literature, such as "In My Shoes" narrated experiences, the CARDS tool and equity vignettes, are named as the templates a generated case should be measured against rather than replaced by.

## What AI adds to decompositions and approximations

Decomposition breaks complex teaching into learnable elements, and the commentary points to AI that classifies teacher moves by function, surfaces missed opportunities for student talk, and could eventually give feedback on a rehearsal as it unfolds. The evidence for that last step is thin, and the accuracy caution applies most sharply here: an analysis that is wrong in a plausible way is harder to notice than a missing one. Approximations of practice are where the empirical work has accumulated. Peer and coached rehearsals, microteaching and tutoring now sit beside digital [[simulation]] platforms such as Teacher Moments and mixed-reality environments where a human in the loop controls the student avatars. The reported outcomes are specific: a chatbot acting as virtual student and mentor yielded four questioning profiles, ChatGPT-assisted question generation plus a custom student bot improved candidates' perceptions as their prompting improved, and automated feedback after repeated rehearsal cycles raised the use of probing questions. Cognitive load and interface constraints recur as design limits.

## What this means for practice

- **Faculty developers.** Adopt the six guiding questions as the intake checklist for any AI tool a methods course wants to use, and require the accuracy answer in writing: who verifies generated mathematics, and against what.
- **Instructors.** Keep a human in the rehearsal loop. The commentary's own evidence shows candidates misread their performance, so schedule time to debrief recorded rehearsals rather than releasing automated feedback on its own.
- **Program leaders.** Fund facilitation, not licenses. The benefits the commentary reports depend on structured guidance and ongoing human facilitation, and the same tools without it produce the cognitive-load and accuracy problems it catalogs.
- **Researchers.** Treat self-assessment divergence as a measurable outcome, not a caveat: it is the most reproducible finding in the rehearsal literature and the least examined.

## Limitations

- This is a research commentary, not an empirical study: the claims about what AI adds to each pedagogy are supported by cited work and by the authors' own teaching, not by new data collected here.
- The accuracy figure quoted for large language models comes from a secondary source rather than a study of the specific teacher education tools discussed, so it bounds the risk without measuring it in this context.
- Named platforms are examples of what is technically possible; the commentary evaluates none of them directly, and several cited rehearsal studies are exploratory or small-scale.

## Connected Concepts

- [[teacher-role]]
- [[teacher-ai-competency]]
- [[teacher-education]]
- [[simulating-students]]
- [[simulation]]
- [[scaffolding]]
- [[feedback]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[math-education]]
- [[professional-training]]

## Connected Articles

- [[hauk-student-avatars-dialogue-teacher-education-2026]] — dialogue quality with AI student avatars in a practice-based teacher education setting
- [[llm-student-simulation-teacher-insights]] — what teachers notice when LLM learners are wrong
- [[simulating-students-llm-review-2026]] — architecture and role of LLM student simulators

## Citation

Bondurant, L., & Shaughnessy, M. (2026). [Responsible integration of artificial intelligence into pedagogies of practice in mathematics teacher education](https://jmtet.net/index.php/Home/article/view/20). *Journal of Mathematics Teacher Education in Texas, 15*(3), 8-16.
