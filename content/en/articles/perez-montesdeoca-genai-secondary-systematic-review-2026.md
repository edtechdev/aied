---
title: "The integration of generative artificial intelligence in secondary education: A systematic review"
created: "2026-11-15T06:40:00-05:00"
updated: "2026-11-15T06:40:00-05:00"
type: article
sources: ['raw/papers/perez-montesdeoca-genai-secondary-systematic-review-2026.md']
source_url: "https://doi.org/10.30935/cedtech/18746"
published: "2026"
confidence: high
evidence_context: educational
audience: [researchers, instructors]
level: [secondary, k 12]
discipline: [science education, language learning, math education]
page_kind: [synthesis]
research_method: [literature review]
foundations: [critical-thinking, ai-literacy, limitations-in-aied-research]
pedagogy: [scaffolding, icap-framework, self-regulated-learning]
technology: [generative-ai, llm, conversational-ai]
assessment: [feedback, automated-assessment]
methods: [meta-analysis-systematic-review]
ethics: [ai-misuse-learning-harm, equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-15"
    agent: Hermes-Agent
---

> **Synthesis:** Pérez-Montesdeoca, Rodríguez-Rodríguez, and Fernández-Sogorb (2026) searched Scopus and Web of Science on 11 November 2024 and synthesized 33 studies of [[generative-ai|generative AI]] in [[secondary-education|secondary education]] under PRISMA (κ = .89). Only 21 collected original classroom data; MMAT appraisal put that empirical work at moderate to high quality, with small samples the recurring weakness. Twenty-six studies describe how the technology is used — teacher-initiated writing support, STEM problem solving, assessment workflows — and 7 examine what changes for students. The review's argument is conditional: writing, motivation, and [[critical-thinking|critical thinking]] gains appear where teachers mediate the tool and students judge its output, and fade where the tool produces the work.

## Key Findings

1. **Adoption is teacher-led and scattered.** Of the 26 use-focused studies, 7 examined problem solving, 6 assessment, 3 question generation, 3 teacher training, and 2 each for narrative creation, image generation, and language learning — nearly all teacher-initiated and run in isolation.
2. **Accuracy collapses as tasks get harder.** BingChat and Bard reached 92.11% on basic biology questions, yet every tool fell below 20% on higher-order items, and ChatGPT-3.5 dropped from 83.4% to 63.8% as physics content advanced. GPT-4 and GPT-4o solved 82%-87% of mathematics problems; Gemini solved 32%.
3. **Automated grading is close but not substitutable.** LLM agreement with human evaluators reached only 50.8%, and a fine-tuned ChatGPT-3.5 beat BERT by 9.1% in scoring accuracy — useful inside a supervised workflow, not grounds for removing the teacher.
4. **Feedback is the strongest application.** Meyer et al. found LLM feedback improved text revisions and motivation, and Khan et al. reported that immediate, tailored vocabulary feedback nearly doubled scores.
5. **Students who evaluate gain; students who delegate do not.** Lee et al. found full delegation narrowed learning while comparing and rejecting output deepened engagement; Chen and Chang found ChatGPT with game-based learning raised performance (M = 49.06 vs. M = 44.46) and lowered cognitive load (M = 3.24/3.32 vs. 3.74) against the game alone.
6. **Self-reported gains are thinner than the enthusiasm.** In Tamimi et al., 37.4% of students reported better performance and 44.3% reported no significant change in productivity.

## What the corpus contains

The search covered Scopus and Web of Science, limited to peer-reviewed primary research from 2019 to 2024 in English or Spanish. From 3,381 records, deduplication and criteria left 676; screening dropped 322 on title and abstract, 3 for access and 2 as retracted, then 257 with no GenAI focus, 46 without a learning-improvement focus, and 13 outside secondary education — 33 studies. The corpus is young: 2 appeared in 2021, 2 in 2022, 6 in 2023, and 23 in 2024; 8 came from the United States. Twelve were technical evaluations or conceptual discussions with no human participants; the MMAT covered only the 21 involving students, teachers, or classrooms.

## Where schools are using it

Writing and material production dominate. Levine et al. found students using ChatGPT to plan, revise, and translate, treating output as a starting point rather than an answer — though they often accepted or rejected whole suggestions without inspecting them. Bulut and Yildirim-Erbasli and Carrasco generated stories, quizzes, and history materials.

STEM [[problem-solving|problem solving]] is the largest category, with 7 studies, and its pattern is consistent: strong on routine items, confident failure on complex ones. Parra et al. found chatbots could not turn geometry descriptions into visual representations; Polverini and Gregorcic reported ChatGPT at 41.7% correct on kinematics graphs against 47% for students, with correct visual interpretation in only 30.9% of responses.

Assessment follows with 6 studies. Ciampa et al. described five levels of teacher-led integration, only the highest of which asks students to critique the model's output.

## What changes for students

The seven impact studies report gains that are real but conditional. In Chen and Chang's comparison the ChatGPT group reported higher perceived competence (M = 2.63/2.54 vs. 2.21) while intrinsic motivation stayed similar, suggesting the tool acted as [[scaffolding|scaffolding]] rather than as a motivator. Kangasharju et al. found poetry-writing support benefited students equally regardless of prior grades — one of the few results pointing toward [[equity-in-ai-education|equity]].

Critical evaluation does not transfer on its own. Ali et al. found no change in deepfake detection after workshops (M = 54.68 pre-test, M = 53.87 post-test), though students afterward named source verification (53.33%) and sender reliability (46.66%) as credibility criteria. Aprin et al. did find a 57% case-level improvement in judging altered images with AI support, but the effect weakened where little online information existed to check against.

Through the [[icap-framework|ICAP]] lens the authors favor, the corpus sorts by engagement rather than by tool: passive copying and delegation produce little, while arguing with and correcting the model is where gains sit. [[cognitive-offloading|cognitive offloading]] is the failure mode the review keeps circling, and [[teacher-role|teacher mediation]] separates the outcomes.

## What this means for practice

- **Instructors:** Assign GenAI to stages you can inspect — planning notes, revision rationales, comparisons of model answers — not the finished product, since gains appear where students judge output.
- **Instructors:** Budget editing time; every study producing texts, quizzes, or lab procedures reported errors or missing context.
- **Administrators:** Treat [[ai-literacy|AI literacy]] as taught curriculum, not assumption. Deepfake workshops left detection flat, so skepticism must be practiced against real examples.
- **Designers:** Build outputs that invite checking — flag uncertainty, show sources, expose reasoning — because the documented failures are confident errors, not refusals.
- **Researchers:** Measure process alongside post-test scores; the corpus cannot say whether gains persist.

## Limitations

- **No meta-analysis.** Narrative synthesis across 33 heterogeneous studies, with no pooled effect or reporting-bias assessment.
- **Twelve of the 33 studies tested tools, not learners.** They support claims about capability, not evidence about learning.
- **The empirical base is small and short.** Most studies used small samples, exploratory designs, or single-session interventions, with partial MMAT criteria on sampling and validation.
- **The search stops in November 2024**, across two databases, in English and Spanish only; terminology was also inconsistent, forcing case-by-case relevance judgments.

## Citation

Pérez-Montesdeoca, H., Rodríguez-Rodríguez, D., & Fernández-Sogorb, A. (2026). [The integration of generative artificial intelligence in secondary education: A systematic review](https://doi.org/10.30935/cedtech/18746). *Contemporary Educational Technology, 18(3)*, Article ep667.
