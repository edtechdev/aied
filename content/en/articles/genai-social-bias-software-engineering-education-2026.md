---
title: "Generative AI May Reinforce Social Biases in Software Engineering Education"
created: "2026-09-25T09:40:00-04:00"
updated: "2026-09-25T09:40:00-04:00"
type: article
sources: ['raw/papers/genai-social-bias-software-engineering-education-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [cs education, engineering education]
level: [higher ed, undergraduate]
audience: [instructors, curriculum designers, researchers]
ethics: [bias-mitigation, equity-in-ai-education, differential-effects-across-learner-groups, inclusive-learning]
assessment: [group-work, assessment]
technology: [generative-ai, llm, multimodal]
foundations: [teacher-role, learner-identity]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Entezami, Lan and Endres ask whether [[generative-ai|generative AI]] used by software engineering [[teacher-role|instructors]] reproduces the field's demographic imbalances. They audit two underexplored tasks: LLM [[group-work|team formation]] from synthetic student personas, and [[multimodal|image generation]] for course slides. Three [[llm|LLMs]] (GPT-4.1, GPT-5.2, DeepSeek V3.2) each produced 11,200 team assignments over 28-student classes, while GPT Image 2 and Imagen 4 produced 500 images from 25 prompts drawn from real course materials. Both tasks show significant bias. Men were at least 80% less likely than women to be assigned to Interface Design rather than Core Development, and nationality shifted assignments as well. Skill-based qualifications pushed 99.2% of assignments onto one of the two valid teams, yet gender still steered the choice between equally appropriate options — a subtle form of bias that looks reasonable case by case. Image models over-represented light-skinned men in single-person images while multi-person images were comparatively balanced. The authors conclude that careful [[prompt-engineering|prompt design]] and domain-specific evaluation should precede adoption in [[equity-in-ai-education|educational settings]].

## Key Findings

1. All three models routed men away from Interface Design: men were at least 80% less likely than women to get that team over Core Development (GPT-5.2 OR < 0.01).
2. Nationality shaped role assignment independently of merit: versus Chinese reference names, Nigerian names were likelier to land in Quality Assurance, South Korean names in Interface Design, and United States names away from Database.
3. Class standing strongly predicted placement. Seniors and juniors went to Core Development while freshmen went to Interface Design (seniors vs. freshmen OR = 0.0004 GPT-4.1, 0.004 GPT-5.2, 0.001 DeepSeek).
4. Supplying skills largely worked: 99.2% of Skill-based assignments matched one of the two ground-truth teams. Yet gender still decided between equally valid options, favoring Core Development over Interface Design for men (OR = 2.53 GPT-4.1, 2.81 GPT-5.2, 1.43 DeepSeek).
5. Single-person images skewed male and light-skinned, with strong effect sizes (gender: GPT Image 2 V = 0.64, Imagen 4 V = 0.65; skin tone: V = 0.57 and V = 0.61). In Database, Debugging and Individual Programming prompts, over 95% were light-skinned.
6. Multi-person images were more balanced. GPT showed no significant preference for men, Imagen 4 showed a significant but far smaller tendency (V = 0.25), and most prompt categories produced groups with diverse skin tones.

## Auditing Team Formation with Synthetic Personas

The team formation study simulates AI-assisted classroom logistics. Four teams come from Software Engineering Body of Knowledge roles — Interface Design, Core Development, Database and Quality Assurance — and each model assigns a class of 28 students, seven per team. Personas carry names signaling gender and nationality indirectly, drawn from seven countries selected via the Open Doors report: India, China, South Korea, Vietnam, Nepal, Nigeria and the United States. Ten male-associated and ten female-associated names per country yield 140 names.

Qualifications varied across three strategies: Plain personas contain only a name, Level-based personas add year in a four-year program, and Skill-based personas add skills distilled from 12 LinkedIn job postings into six profiles aligning each student with two possible teams. Regressions test whether assignment odds depend on gender and nationality, with Core Development, female and China as reference categories.

## Bias Survives Better Qualifications

Added information reduced bias without removing it. Plain personas produced the bluntest disparities: men were pushed toward Core Development and away from Interface Design and Quality Assurance, and nationality alone moved students between teams. Level-based personas reproduced those patterns and added one — the models treated academic year as a proxy for capability, reserving development work for seniors and juniors.

Skill-based personas should have settled the question, since qualifications matched students to two teams. Models complied in 99.2% of cases, yet when both candidate teams were valid, gender decided. The authors call this the hardest bias to catch: every individual assignment looks defensible, and only aggregated statistics reveal the pattern — a concrete instance of [[differential-effects-across-learner-groups|differential effects]] arriving through routine decisions that shape students' [[career-development-and-readiness|career trajectories]].

## Representation in Generated Course Imagery

The visual task draws 25 human-centered prompts from lecture materials in four [[cs-education|software engineering]] courses at three U.S. universities ranked in the top 20 computer science programs. Prompts fell into nine SWEBOK-based categories, and each of two image models generated 10 images per prompt — 250 per model, 500 total.

Single-person images showed the strongest bias. Most depicted individuals were men, and severity varied by category: database and individual programming prompts produced almost entirely male figures, while user-interface prompts produced relatively more women. In the Database, Debugging and Individual Programming categories, over 95% were light-skinned. Multi-person images were markedly more diverse, with both models tending to generate groups mixing skin tones — suggesting the models fall back on learned demographic defaults most heavily when depicting one person, a pattern instructors are unlikely to notice from individual outputs.

## What this means for practice

- **Instructors.** Specify the criteria the model should use when forming teams or generating materials, and strip names or other signals of gender and nationality from the input.
- **Course and program leads.** Audit AI-assisted placement and content generation in aggregate, because individual outputs look reasonable while systematic patterns hide.
- **Tool and model developers.** Build domain-specific fairness evaluations for educational software engineering tasks before release, since general [[benchmark|benchmarks]] miss role-specific and modality-specific disparities.
- **Researchers.** Treat team formation and image generation as distinct bias surfaces: text decisions concentrate in role routing, image models in single-subject depiction.

## Limitations

- The team formation study used synthetic personas rather than real students; gender and nationality were signaled only indirectly through names.
- Only three LLMs and two image generation models were tested, so results may not transfer to other models or later versions.
- Team formation was evaluated at a single class size of 28 students with seven per team, leaving behavior at other class sizes untested.
- The regressions applied no multiple-comparison corrections; the authors interpret effect magnitude and direction rather than isolated significant results.

## Connected Concepts

- [[generative-ai]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[differential-effects-across-learner-groups]]
- [[cs-education]]
- [[group-work]]
- [[multimodal]]
- [[teacher-role]]
- [[inclusive-learning]]
- [[ethics]]
- [[llm]]
- [[career-development-and-readiness]]
- [[prompt-engineering]]

## Connected Articles

- [[bias-representation-text-to-image-education-2026]] — Bias and Representation in AI-Generated Text-to-Image in Education: A Systematic Review
- [[demographic-signals-llm-student-assessment-2026]] — The Role of Implicit and Explicit Demographic Signals in Large Language Model-based Student Assessment
- [[gender-bias-transfer-llm-writing]] — Contaminated Collaboration: Measuring Gender Bias Transfer in LLM-Assisted Student Writing
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — Bridging the Gender Gap in STEM Education with AI: Female-Coded Chatbot as Role Model and Learning Assistant
- [[all-girls-genai-makerspace-gender-equity-2026]] — Beyond "painting in pink": A Critical Case Study of All-Girls Generative AI Workshops in a European Makerspace
- [[zhan-chapman-genai-cs-education-2026]] — Harnessing Generative Artificial Intelligence in Computer Science Education: Pedagogical Innovation, Ethical Responsibility, and the Future of Assessment
- [[assessment-team-problem-solving-computing-education]] — Assessment in Team Problem-Solving Exercises in Computing Education
- [[spritz-ai-disciplinary-mediation-student-teams-2026]] — Exploring AI-Supported Disciplinary Mediation in Student Project Teams' Text-Based Communication

## Citation

Entezami, E., Lan, A., & Endres, M. (2026). [*Generative AI May Reinforce Social Biases in Software Engineering Education*](https://arxiv.org/abs/2609.28483). arXiv preprint.
