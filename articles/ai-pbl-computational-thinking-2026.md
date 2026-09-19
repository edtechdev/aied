---
title: 'AI-Supported Problem-Based Learning for Enhancing Computational Thinking'
created: "2026-08-20T06:50:00-04:00"
updated: "2026-09-19T07:37:16-04:00"
type: article
foundations: [ai-education, computational-thinking]
pedagogy: [problem-based-learning]
technology: [educational-robotics, generative-ai]
research_method: [quasi-experiment]
level: [higher ed, k 12]
sources: ['raw/papers/ai-pbl-computational-thinking-2026.md']
confidence: medium
discipline: [cs education, stem education]
audience: [educators, curriculum designers, instructors]
page_kind: [evaluation]
---

> **Synthesis:** This quasi-experimental study (N = 103 first-year [[higher-ed|undergraduates]] in Nigeria) tested whether AI-supported [[problem-based-learning|Problem-Based Learning]] (AI-PBL) outperforms conventional instruction in building [[computational-thinking|computational thinking]] (CT) and academic [[learning-gains|achievement]] within computer [[educational-robotics|robotics]] programming. Grounded in Vygotsky's Social [[constructivist|Constructivism]], the intervention cast AI tools (ChatGPT and Teachable Machine) as "more capable peers" providing adaptive [[scaffolding]] inside students' [[sociocultural-learning|Zone of Proximal Development]] across a 14-week, project-based robotics [[curriculum-design|curriculum]]. The AI-PBL group significantly outperformed the control group on posttest CT and academic achievement after controlling for pretest scores, while gender did not significantly moderate the gains — evidence that AI-enhanced PBL can be both effective and [[equity-in-ai-education|equitable]] in under-resourced [[stem-education|STEM]] contexts.

## Key Findings
- AI-PBL students significantly outperformed the conventional-PBL control group on posttest computational thinking, controlling for baseline scores — confirming AI-enhanced scaffolding meaningfully strengthens CT acquisition.
- AI-PBL students also achieved significantly higher academic achievement in computer robotics programming, controlling for pretest performance.
- Gender did not significantly moderate the instructional effects: both male and female students benefited roughly equally from the AI-PBL approach, countering persistent concerns about gendered outcomes in STEM.
- The CT instrument captured five dimensions — abstraction/pattern recognition, algorithm design, decomposition, debugging, and critical reasoning/[[metacognition]] — all of which were targeted by AI-scaffolded robotic tasks (e.g., line-following, assistive, recycling, and search-and-rescue robots).
- Grounding AI tools in learners' Zone of Proximal Development (as digital "more capable peers") enabled adaptive [[feedback]], personalized scaffolding, and iterative [[problem-solving]] that traditional lecture-based [[teacher-role|teaching]] could not supply.

## Study Design & Method
- **Design:** Quasi-experimental, pretest–posttest non-equivalent groups (intact classes; coin toss assigned group); 2 × 2 factorial with instructional strategy and age group as factors, gender treated as covariate. Analyzed with ANCOVA (JAMOVI) plus N-Gain descriptive analysis.
- **Participants:** 103 first-year undergraduates (59 female, 44 male; aged 16–25) across two purposively selected public universities in Southeastern Nigeria, in a compulsory *Foundations of Robotics Programming* course.
- **Groups:** Experimental (n = 51) received a 14-week AI-PBL intervention (3 contact hours/week, 42 total hours); control (n = 52) received traditional lecture-based instruction on identical content.
- **AI tools:** ChatGPT (idea generation, code explanation, iterative debugging, decision-logic formulation, reflective writing) and Teachable Machine (training image/color classifiers), embedded with Arduino robotics kits.
- **Authentic robotic tasks:** design a line-following robot navigating a dynamic maze; a service robot assisting visually impaired users (HRI, voice recognition, obstacle avoidance); a recycling-sorting robot (supervised ML classification); and a search-and-rescue robot (computer vision + decision trees).
- **Instruments:** 20-item Computational Thinking in Robotics Scale (CT-RS; α = 0.89) capturing abstraction, algorithm design, decomposition, debugging, and critical reasoning/metacognition; 50-item Computer Robotics Programming Skills Test (CRPST; α = 0.91) across motion control, ML for robotics, human–robot interaction, and computer vision.
- **Limitation noted:** the raw source file truncates before the full statistical results tables, so exact effect sizes and N-Gain values could not be reproduced here.

## What this means for practice

- **Instructors.** Cast the AI as a "more capable peer" inside the learner's Zone of Proximal Development rather than an answer engine, so that explanations and hints carry the abstraction, decomposition, and debugging the task requires.
- Put the AI to work on specific cognitive moves — idea generation, code explanation, iterative debugging, decision-logic formulation, reflective writing — and leave assembly, testing, and revision of the robot with the students.
- **Curriculum designers.** Budget a full semester, not a few sessions: the intervention ran 14 weeks at three contact hours a week (42 hours) on authentic tasks such as line-following, assistive, recycling-sorting, and search-and-rescue robots.
- Choose AI tools that work in low-infrastructure settings — a general chatbot plus a browser-based classifier trainer alongside Arduino kits — because the equity case for AI-PBL rests on contexts where expert facilitators and robotics hardware are scarce.
- Do not read the null gender effect as automatic equity: the authors condition it on equal access to AI tools and call for investment in [[teacher-ai-competency|teacher training]] and context-aware, localized AI-PBL frameworks, with infrastructure and teacher readiness named as the remaining barriers.

## Limitations

- Groups were intact classes assigned by a coin toss, so no participants were randomized and the pretest–posttest comparison is a non-equivalent-groups design rather than a trial.
- The sample is 103 first-year undergraduates at two purposively selected public universities in Southeastern Nigeria, all enrolled in one compulsory *Foundations of Robotics Programming* course, so the finding is bound to a single course and country.
- Both measures are achievement tests given at the end of the 14-week intervention — the 20-item CT-RS, adapted by the authors from prior CT frameworks, and the 50-item CRPST — with no delayed retention or transfer measure.
- The conditions differ by more than AI: the experimental group shared robotics kits and worked in groups while the control group received lectures, so the AI tools are not the only difference between them.

## Connected Concepts
- [[problem-based-learning]]
- [[computational-thinking]]
- [[generative-ai]]
- [[active-learning]]
- [[collaborative-learning]]
- [[k-12]]
- [[metacognition]]
- [[scaffolding]]

## Connected Articles
- [[ai-metacognition-stem-review]]
- [[genai-educational-outcomes-meta-analysis]]
- [[ai-communities-of-inquiry-2026]]
- [[critical-thinking-biological-sciences-ai-2025]]

## Citation
(2026). [*AI-supported problem-based learning for enhancing computational thinking*](https://doi.org/10.1016/j.chbah.2026.100263). *Computers in Human Behavior: Artificial Humans*, 7, 100263.
