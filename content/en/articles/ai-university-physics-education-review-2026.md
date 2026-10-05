---
title: "Artificial intelligence in university physics education: a systematic review of empirical studies"
created: "2026-10-05T10:00:00-04:00"
updated: "2026-10-05T10:00:00-04:00"
type: article
sources: ['raw/papers/ai-university-physics-education-review-2026.md']
confidence: high
page_kind: [synthesis]
research_method: [literature review]
discipline: [physics education, science education]
level: [higher ed, undergraduate, teacher education]
audience: [researchers, instructors, curriculum designers]
foundations: [ai-education, ai-literacy, interpreting-and-applying-aied-research, limitations-in-aied-research]
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge, transfer-of-learning]
technology: [generative-ai, conversational-ai, simulation, intelligent-tutoring]
assessment: [feedback, formative-assessment, learning-gains]
methods: [meta-analysis-systematic-review, mixed-methods-research, rct]
ethics: [trust, ai-misuse-learning-harm]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-05"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This [[meta-analysis-systematic-review|systematic review]] synthesizes 11 empirical studies of [[generative-ai]] and related tools in university [[physics-education]], restricted to studies with direct student participation. Across six countries, AI served tutoring and explanation, [[formative-assessment|formative feedback]] and [[scaffolding]], [[collaborative-learning|collaborative problem solving]], [[simulation]] and modeling, [[learning-design|instructional design]], and the development of [[ai-literacy]]. Reported outcomes were mixed and context-dependent. Some studies found favorable short-term gains in [[feedback]] quality, task performance, and simulation activities, while others reported limited transfer to independent performance, variable [[pedagogy|pedagogical]] quality of AI-generated materials, and students' difficulty detecting scientifically inaccurate but fluent responses. Cross-study patterns suggest the educational value of AI depends on instructional structure, alignment between AI-supported activities and assessment, students' [[prior-knowledge]], and opportunities to evaluate AI outputs critically. The review does not support a general conclusion that AI is uniformly effective in [[higher-ed]] physics; rather, its value hinges on how AI is integrated and how responsibility for reasoning, evaluation, and pedagogical decision-making is distributed between learner, instructor, and system. The small, geographically uneven evidence base limits generalizability.

## Key Findings
1. **Small, heterogeneous evidence base.** Eleven empirical studies across six countries met the inclusion criteria; four were conducted in the United States and three in Germany, leaving the evidence geographically uneven and unsuitable for statistical pooling.
2. **AI served six pedagogical functions.** [[conversational-ai|Conversational tutoring]], formative feedback, collaborative problem solving, simulation and modeling, instructional design, and AI-literacy development all appeared, but their value varied by task and structure.
3. **Short-term gains did not endure.** Simulation and personalized-feedback studies raised immediate conceptual scores, yet these advantages did not persist in midterm and final examinations, and gains rarely transferred to independent tasks.
4. **Trust outpaced accuracy.** Across 362 questions, ChatGPT achieved 85% overall accuracy, but students in the high-trust group agreed with responses 100% of the time despite a mean response accuracy of 82%.
5. **Structured access outperformed unrestricted access.** Team-reported growth averaged 8% in the control condition, 17% with unlimited individual access, and 34% and 31% in structured-access conditions, which also preserved more peer discussion.
6. **Disciplinary knowledge sharpened evaluation.** Students with stronger physics knowledge evaluated ChatGPT responses more critically and distinguished problematic AI answers from correct human-prepared answers more successfully than their peers.
7. **Generated materials required [[human-in-the-loop-ai|human review]].** Textbook-supported tasks were clearer and more contextualized than ChatGPT-supported tasks, and improvements in AI-supported instructional design did not carry over to independent performance.

## Where AI entered the physics classroom
Across the 11 included studies, AI filled several distinct pedagogical roles. ChatGPT served as a virtual tutor, and [[intelligent-tutoring|tutoring systems]] provided explanations for conceptual questions, while one study examined how students judged the scientific accuracy and linguistic quality of generated responses. A second cluster concerned formative feedback and scaffolding: GPT-3.5 generated personalized feedback on written conceptual responses, and ChatGPT feedback was embedded in an [[virtual-and-augmented-reality|augmented-reality]] quantum laboratory. AI-generated hints supported [[problem-solving]] in online homework without supplying complete solutions. AI also entered collaborative problem solving and simulation environments, including interactive electric-potential simulations. In [[teacher-education|pre-service physics teacher education]], AI supported physics task development, instructional design, and AI-literacy training. Because the same tool can serve very different functions, "AI in physics education" names a family of integrations whose pedagogical meaning depends on where in the learning activity the tool is placed.

## Mixed and context-dependent outcomes
Reported outcomes diverged sharply. Personalized ChatGPT feedback in an augmented-reality laboratory produced significantly higher learning outcomes, and AI-generated simulations produced higher immediate conceptual-assessment scores than a physical-laboratory condition. Yet the simulation advantage did not persist into later examinations, and AI-generated hints were associated with improved examination performance only when examination questions closely matched the homework content. Feedback studies showed practical feasibility: 68%–78% of GPT-generated feedback messages required only minor or no modification, and the mean instructor rating was 2.06 on a 0–3 scale. But students' [[trust]] in AI outpaced its accuracy, and linguistically convincing responses could still contain conceptual errors. A recurring theme was that [[critical-thinking|critical evaluation]] and [[transfer-of-learning|transfer]] to independent performance were the hardest outcomes to secure, suggesting that short-term task success is a weak proxy for durable learning.

## Design conditions and theoretical interpretation
The reviewers interpret the pattern through scaffolding, formative assessment, self-regulated learning, and cognitive offloading. They argue that AI is most appropriate when it supplements identifiable learning processes rather than replacing students' own reasoning, and that structured access matters more than access itself: unlimited individual ChatGPT access was associated with greater interaction with the tool and less peer discussion, whereas structured conditions produced stronger team-reported growth. This aligns with [[cognitive-offloading]], in which external resources reduce a task's cognitive demands, and with [[self-regulated-learning]], in which learners monitor understanding, select strategies, and adjust actions in response to feedback. The reviewers caution that the studies do not show AI necessarily causes cognitive offloading; they indicate that balancing technological assistance with learner responsibility is the central design problem. For pre-service physics teachers, they argue, AI literacy should extend beyond technical familiarity to critical evaluation, pedagogically appropriate use, and informed decisions about when AI support is or is not suitable.

## What this means for practice

- **Instructors.** Treat AI as a supplement to identifiable learning processes—feedback, hints, and simulation—rather than a replacement for reasoning, and organize access deliberately, since structured use outperformed unrestricted use and preserved more peer discussion.
- **Curriculum designers.** Align AI-supported activities with what is actually assessed; the transfer problem appeared precisely when supported tasks and examination content diverged, and AI-supported design gains did not carry over to independent performance.
- **Instructors.** Build explicit opportunities for students to verify and critique AI outputs, because stronger prior knowledge improved error detection while fluent errors went unnoticed.
- **Researchers.** Prioritize longitudinal and multi-institutional designs, since the 11 included studies were short-term, often single-institution, and geographically uneven.
- **Administrators.** Fund reliable access and AI-literacy training for pre-service teachers, given that infrastructure and instructional guidance were recurring implementation conditions.

## Limitations

- The evidence base comprised only 11 studies and was heterogeneous in design, AI application, participants, physics domain, and outcome measures, precluding statistical pooling.
- Only a subset of studies focused specifically on pre-service physics teachers, and several relied on small samples, single-institution settings, or short interventions.
- The review was restricted to English-language publications and six search sources; Google Scholar screening was capped at the first 300 relevance-ranked results.
- MMAT appraisal found unclear reporting of randomization, blinding, and baseline comparability in several studies, and 8 of 55 criterion-level judgments were rated "Can't tell".
- The geographic distribution was uneven—four studies in the United States and three in Germany—so apparent cross-country differences may reflect [[research-methods-aied|study design]] rather than context.

## Citation
Malikova, Z., Ualikhanova, B., Turmambekov, T., Rakhashev, B., & Berdaliyev, D. (2026). [*Artificial intelligence in university physics education: a systematic review of empirical studies*](https://doi.org/10.3389/feduc.2026.1964629). *Frontiers in Education, 11*, 1964629.