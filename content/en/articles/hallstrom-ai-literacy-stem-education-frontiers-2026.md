---
title: "AI Literacy and STEM Education: Emerging Frontiers and Research Priorities"
created: "2026-10-15T08:15:00-04:00"
updated: "2026-10-16T13:51:50-04:00"
type: article
foundations: [ai-literacy, critical-thinking]
sources: ['raw/papers/10.1186_s40594-026-00653-8.md']
confidence: high
page_kind: [synthesis]
research_method: [literature review, thematic analysis]
discipline: [stem education]
level: [preschool, primary education, k 12, higher ed]
audience: [instructors, researchers, educational technology developers]
technology: [generative-ai, llm, intelligent-tutoring]
pedagogy: [inquiry-based-learning, project-based-learning]
assessment: [formative-assessment]
ethics: [bias-mitigation, privacy]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-15"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Hallström, Chiu, Ding, Koretsky & Li (2026) synthesize the ten most-cited articles (2022–2026) on [[ai-literacy|AI literacy]] in [[stem-education|STEM education]] and conclude the field has a solid baseline of frameworks but an unresolved conceptual core. Their three-dimension analysis — instructional focus (early childhood through higher education), characterization of AI literacy (six competing constructs across the reviewed studies), and STEM disciplinary content (biology and physics dominate; technology as a subject is nearly absent) — shows research is unevenly distributed and findings remain inconclusive on the central question: whether AI literacy transforms STEM learning. Two gaps the review makes salient: research overwhelmingly addresses *students'* AI literacy while almost nothing addresses *teachers'* own AI literacy (only one reviewed study even examined teachers), and the dominant tool in the reviewed classrooms — the chatbot — is exactly where the evidence is weakest, with studies showing confidence gains without computational-thinking gains (Xu et al. 2026) and infallibility cues diminishing critical evaluation (Ding et al. 2023). The paper is an editorial call for context-sensitive, discipline-grounded frameworks rather than more one-size-fits-all competency lists.

## Key Findings
1. The review sampled the ten most-cited articles on AI literacy and STEM education from Scopus (plus one additional Springer Nature Link article), published 2022–2026 as of 25 August 2026, with citation counts ranging from 650 (Casal-Otero et al. 2023) down to 87 (Falebita & Kok 2025).
2. The three organizing dimensions are: (a) AI literacy instructional focus, spanning early childhood (Su & Yang 2024; Yang 2022) through K-12 (Zhang et al. 2023; Casal-Otero et al. 2023; Ng et al. 2022; Park et al. 2023) to higher education (Hornberger et al. 2023; Ding et al. 2023; Falebita & Kok 2025); (b) characterization of AI literacy, where the reviewed studies variously define it through knowledge/skills/attitudes, conceptual-procedural-contextual knowledge, use-communication-evaluation, or domain-specific breakdowns; and (c) STEM disciplinary content, integrated in interdisciplinary projects or taught in individual subjects.
3. Characterizations converge on understanding, use, evaluation, creation, and ethics as core components, but only two reviewed studies (Ng et al. 2022; Stolpe & Hallström 2024) provide complete frameworks; the rest are partial or implicit.
4. AI-as-content dominates K-12 AI literacy research (learning about neural networks, algorithms, prediction), while AI-as-tool is also emphasized; the interaction between the two roles is rarely studied — the review flags "AI as a crutch may undermine the learning of foundational problem-solving skills" as an urgent unresolved question.
5. STEM disciplinary coverage is skewed: biology and physics appear most, mathematics to a lesser degree (e.g., machine-learning algorithms coupled with mathematics), and technology as a disciplinary subject is absent from every reviewed study except Stolpe & Hallström (2024).
6. On the chatbot-as-tutor question the evidence is genuinely mixed: Ding et al. (2023) found ChatGPT tutoring in physics increased confidence and knowledge but requires critical evaluation skills to counter "superhuman and infallible" misconceptions; Xu et al. (2026) found ChatGPT-supported STEM programming improved confidence and knowledge but did *not* improve computational-thinking skills or independent thought.
7. Hornberger et al. (2023) found AI literacy varies considerably across university students, with engineering and computer science students performing best, followed by other STEM disciplines.
8. Falebita & Kok (2025) found attitude toward AI tools — not readiness or self-efficacy — was the strongest determinant of actual AI-tool use among STEM undergraduates.
9. The review identifies a stark asymmetry: research on students' AI literacy is abundant, but "there is a lack of prior research on how AI literacy could be promoted among teachers," a gap the authors call especially salient because teachers must be AI literate themselves to run effective AI literacy interventions.
10. Emerging research needs named by the review: AI feedback literacy for judging AI inferences in assessment, cultural and gender context-dependence, cybersecurity, energy consumption, bias and fairness, data management, ownership and rights, and policy responsiveness of education systems.
11. Frameworks from UNESCO, the European Commission and OECD are widely used but "often lack connection to empirical research or sufficient theoretical underpinning," and few are specific enough for classroom application.
12. The authors' concluding position: future research must move "beyond one-size-fits-all frameworks toward context-sensitive approaches that empower educators and learners to critically and responsibly engage with AI while preserving core STEM learning goals."

## The characterization problem
The review's most useful contribution is making visible how differently the ten studies actually define AI literacy. Casal-Otero et al. (2023) define it broadly as learning about AI, learning how AI works, and lifelong learning with AI. Zhang et al. (2023) split it into technical concepts and processes, ethical and societal implications, and future careers. Stolpe & Hallström (2024) divide it into conceptual, procedural, and contextual technological knowledge for technology education. Ng et al. (2022) use know-and-understand, use-and-apply, evaluate-and-create, and ethics. Hornberger et al. (2023) and Park et al. (2023) follow Long & Magerko's (2020) use–communication–evaluation framing. Su & Yang (2024) use AI knowledge, AI skills, and attitudes toward AI. The overlap is real — understanding, use, evaluation, creation, ethics — but the review is careful to note the constructs are not interchangeable, and only two studies offer complete frameworks. This is the sense in which the field's "conceptual ambiguity" is a finding, not a rhetorical flourish: two studies with different frameworks can both measure "AI literacy" and not be measuring the same thing.

## What the chatbot evidence actually shows
The review reads the chatbot studies against each other rather than treating GenAI tutoring as a settled win. Ding et al. (2023) is the most nuanced: students need critical evaluation to counter the "superhuman and infallible" misconception, which the chatbot's machine-like and persuasive communication cues actively reinforce; anthropomorphism "may foster unwarranted trust in AI responses." Their conclusion — AI literacy education is "first and foremost improving students' critical thinking skills in assessing information" — is the strongest single statement in the reviewed corpus. Xu et al. (2026) supplies the caution: ChatGPT-supported STEM programming raised confidence and knowledge but left computational thinking and independent thought unchanged, which the review reads as evidence that fluency gains can coexist with dependence. Together these connect directly to [[cognitive-offloading]] and [[trust-calibration]] concerns elsewhere in this knowledge base: a tutor that never contradicts the student can produce confident learners who cannot evaluate.

## The teacher-literacy gap
The review's most policy-relevant finding is a silence: across the ten most-cited studies, only Park et al. (2023) examined teachers' experience of an AI literacy intervention, and nothing in the reviewed corpus addresses how to develop teachers' *own* AI literacy. The authors connect this to a practical requirement — "teachers need to be AI literate themselves to carry out effective instructional strategies and successful AI literacy interventions with students" — and note the deficiency persists despite prior literature flagging it (Sperling et al. 2025; Tan & Tang 2025). For [[teacher-role]] and [[educational-development]] practice this means the professional-development literature on AI literacy is largely a gap being filled by assumption rather than evidence. The review also names a specific new literacy for assessment contexts: "AI feedback literacy," the ability to judge AI-generated inferences about learners and decide how to act on them.

## What this means for practice
- **Instructors.** Treat AI literacy as critical evaluation first: the strongest reviewed evidence (Ding et al. 2023) is that fluency with the tool does not produce the evaluative skill, and that chatbots actively promote the superhuman-infallibility misconception you have to counter explicitly.
- **Instructors.** Expect confidence gains without thinking gains: Xu et al. (2026) is the cautionary case for programming-adjacent STEM work — students felt and knew more but did not think better. Design tasks where the AI can be wrong and the student has to catch it.
- **Curriculum designers.** Connect AI literacy to your discipline's own epistemology: the review flags that a solid disciplinary knowledge base is what makes critical thinking applicable, and that biology/physics contexts dominate while technology-as-subject is missing.
- **Administrators.** Teacher AI literacy is the unbudgeted prerequisite: if no reviewed intervention develops teachers' own literacy, a district AI-literacy program aimed only at students rests on an untested assumption.
- **Researchers.** The review's open questions are the agenda: how AI-as-content and AI-as-tool interact, whether chatbot use undermines foundational problem-solving, how cultural context and gender shape development, and how AI literacy intersects with STEM and assessment literacies.

## Limitations
- The sample is ten highly cited articles selected by citation count, which the authors acknowledge oversamples earlier work in the window, amplifies already-cited papers (citation snowball), and may not represent the field — the method is purposive rather than systematic.
- The corpus is skewed toward K-12 and STEM-specific journals; the review explicitly notes technology as a disciplinary subject is nearly absent, so findings about technology education rest on a single study.
- "STEM education" identification required a broad AI-literacy-only Scopus search with manual screening because STEM terms are often absent from titles, abstracts and keywords — some relevant work may have been missed.
- The review synthesizes findings narratively without a formal quality appraisal of the included studies, so effect sizes and designs are compared qualitatively.
- The identified gaps (teacher AI literacy, AI-as-content × AI-as-tool interaction, cultural context) are argued from absence of coverage rather than from a systematic mapping of the full literature.

## Citation

Hallström, J., Chiu, T. K. F., Ding, M., Koretsky, M. D., & Li, Y. (2026). [*AI Literacy and STEM Education: Emerging Frontiers and Research Priorities*](https://doi.org/10.1186/s40594-026-00653-8). *International Journal of STEM Education*, 13, 63.
