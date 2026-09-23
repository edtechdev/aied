---
title: "Edustories: A Collection of Real-world Case Studies from Classroom Practices"
created: "2026-09-18T09:15:00-04:00"
updated: "2026-09-19T06:05:00-04:00"
type: article
technology: [llm, educational-nlp]
pedagogy: [student-engagement, collaborative-learning]
foundations: [teacher-role, teacher-ai-competency]
assessment: [ai-feedback-quality]
methods: [benchmark, quantitative-research]
level: [primary education, secondary]
audience: [researchers, instructors, faculty developers, learners]
sources: ['raw/papers/edustories-classroom-case-studies-2026.md']
confidence: high
---

> **Synthesis:** Štefánik et al. (2026) argue that AI-in-education research has overwhelmingly targeted individualized student assistance while most teaching worldwide still happens in collective classrooms. **Edustories** is their corrective dataset: 1,492 teacher-written case studies from [[k-12|elementary and high-school]] classrooms describing challenging student behavior, the [[pedagogy|pedagogical]] interventions teachers attempted, and what followed. Its first application is diagnostic — [[benchmark|benchmarking]] whether [[llm|language models]] can predict whether a teacher's intervention succeeded — and the answer is a qualified no: the strongest models reached 58% accuracy against 64% for human experts.

## Key Findings

1. **The dataset covers collective classroom practice**, not one-to-one tutoring: authentic situations with disruptive behavior, teacher intervention and outcome, written by practicing teachers.
2. **Current models fall short of human expertise but are not far behind** — best-model accuracy of 58% versus 64% for expert assessors across four language-model [[parents-and-families|families]].
3. **Outcome prediction is framed as a prerequisite capability**, not an end in itself: without reliable prediction, teacher-facing [[ai-feedback-quality|feedback]] cannot be trusted.
4. **The authors position teacher-facing assistance as the under-served direction** of [[ai-education|AI in education]], contrasting it with the volume of work on student-facing tutoring.
5. **Known limitations are stated plainly** — outcome prediction understates the complexity of real deployment, and the contributing teachers were mostly in the final years of their university studies, so the corpus under-represents experienced practitioners.

## Why a classroom-level dataset matters

Individualized tutoring is the tractable case for AI: one learner, one dialogue, measurable progress. Collective teaching is harder — the unit of analysis is a group with its own dynamics, the teacher's action space includes management as well as instruction, and success is often judged by what did *not* happen. Building a corpus around teacher-written narratives gives researchers a substrate for [[teacher-ai-competency|teacher-facing]] systems, and the accuracy gap the authors measure is precisely the kind of baseline that keeps claims about AI as a teaching assistant honest.

## From prediction to assistance

The paper is careful about the distance between predicting an outcome and helping a teacher. Useful assistance would likely require free-form rationales or conversational interfaces rather than a single predicted label, and the authors flag that as future work at the intersection of AI and [[human-ai-collaboration|human-computer interaction]]. Read alongside the wiki's other work on [[teacher-role]] and [[educational-development]], it strengthens the case that the next productive wave of AI-in-education research runs through the teacher's decision rather than the student's answer.

## What this means for practice

- **Teachers.** Write up your classroom interventions in the dataset's five-part structure — situation narrative, student background, the problem, the intervention you applied, and the perceived outcome — so your own cases become comparable practice rather than anecdote.
- **Teacher educators.** Require short- versus long-term outcome to be labeled in collective reflection sessions, because that is the distinction human experts agree on 82.56% of the time (κ = 0.7356) and the one models fail worst, identifying long-term success only 49.88% of the time against 71.97% for human experts.
- **Administrators.** Do not deploy a language model to decide whether an intervention worked: the best evaluated model (Qwen-3-30B, 0.580) only reaches the lower bound of expert accuracy (0.573–0.587), and 5 of 6 models fall below it.
- **Researchers.** Build and test teacher-facing feedback interfaces — free-form rationales or conversational systems — instead of more single-label outcome prediction, which the authors treat as a prerequisite capability rather than the assistive product.

## Limitations

- All 1,492 case studies were written by 241 trainee teachers in the final years of their university study at Czech elementary and high schools (2023–2026), so the corpus under-represents experienced practitioners and their strategies.
- Only six locally run models from the Llama 3, Qwen 3, Mistral v0.3 and Olmo 3 families were evaluated; models above 100 billion parameters and proprietary API services were excluded on computational grounds, so the 0.580 ceiling is not a claim about frontier systems.
- Outcome labels are the teachers' own perceived results, and expert judges agreed on only 82.56% of cases (κ = 0.7356), which bounds how accurately any system can be scored against this ground truth.
- The English free-text is machine-translated Czech, and the authors estimate that 5–10% of stories may contain a typo or "translationese" text that no human proofreader verified.

## Connected Concepts

- [[teacher-role]]
- [[teacher-ai-competency]]
- [[llm]]
- [[educational-nlp]]
- [[benchmark]]
- [[ai-feedback-quality]]
- [[student-engagement]]
- [[collaborative-learning]]
- [[educational-development]]
- [[quantitative-research]]

## Connected Articles

- [[ai-rated-classroom-observation-scores-2026]] — AI-rated classroom observation scores
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — Teacher AI literacy and feedback quality
- [[ai-changing-teaching-workflows]] — How AI changes teaching workflows
- [[activity-theory-teacher-pd-ai-agent-design-2026]] — Teacher professional development for AI agents

## Citation

Štefánik, M., Nehyba, J., Karasova, J., Fico, M., Škarková, L., Košatková, M., & Kosatka, D. (2026). [Edustories: A Collection of Real-world Case Studies from Classroom Practices](https://arxiv.org/abs/2609.20484). arXiv:2609.20484.
