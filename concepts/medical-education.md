---
title: Medical and Health Professions Education
created: "2026-08-16T09:22:41-04:00"
updated: "2026-09-05T12:35:00-04:00"
type: concept
tags: [medical-education, higher-ed, simulation, assessment, adaptive-learning, teacher-role]
discipline: [medical education]
audience: [learners, instructors]
level: [higher ed]
category: [assessment]
confidence: high
---

> **Medical and Health Professions Education (HPE)** — the teaching and training of medical, nursing, pharmacy, and allied health professionals. AI is reshaping this domain through clinical [[simulation]], [[reinforcement-learning|reinforcement learning]] trainers, [[adaptive-learning|adaptive learning]], and the application of foundational learning principles (experiential, situated, and distributed cognition) in health-professions contexts. Because HPE is high-stakes, competency-based, and clinically embedded, it raises distinct questions about AI's role in skill acquisition, patient safety, and the educator's judgment.

## Questions to Consider

- In medicine, AI benefits like scalable practice and adaptive feedback must be balanced against risks like erosion of hands-on clinical skill — where errors carry direct patient consequences. Where would you draw the line between what AI should do and what a trainee must practice for themselves?
- The page argues AI should be used to operationalize age-old learning principles — experiential, situated, distributed cognition — rather than replace the educator's guiding role. What makes the educator's judgment indispensable even when AI can simulate or personalize the practice?
- Reinforcement-learning trainers and [[agentic-ai|agentic AI]] are now used for clinical and procedural skills in residency. If an AI agent trains a resident on a procedure, how would you verify they've actually learned it safely before they do it on a patient?
- Because health-professions education is high-stakes and competency-based, assessment questions carry particular weight. How might AI-assisted assessment both improve and threaten the evaluation of clinical competence?
- Over-reliance on AI is a specific concern in medicine. How do you think training with AI could produce a clinician who is more confident but less able to reason independently — and what could guard against that?

## Introduction

AI in medical and health-professions education is a growing strand of the knowledge base's subject-area coverage. Unlike general [[higher-ed|higher education]], HPE is oriented toward the development of clinical competencies, procedural skills, and professional judgment, which shapes how AI tools are designed and evaluated.

### How AI appears in health-professions education

- **Operationalizing foundational learning principles.** [[fowlin-operationalizing-learning-principles-ai|Fowlin et al.]] (developed at the Medical University of South Carolina) argue that AI should be used to operationalize age-old learning principles — Dewey's [[experiential-learning|experiential learning]], [[situated-learning|situated cognition]], and [[distributed-cognition|distributed cognition]] — rather than replace the educator's guiding role. AI enhances [[personalized-learning|personalized]] and [[adaptive-learning|adaptive]] learning while the teacher remains central to [[student-engagement|student engagement]] and outcomes.
- **Clinical skills and reinforcement learning.** [[residencyrl-clinical-rl-training-2026|ResidencyRL]] uses reinforcement learning to train clinical reasoning and procedural skills in residency, demonstrating AI as a skills-training partner in real clinical workflows.
- **Simulation and agentic AI.** [[hdr-brachytherapy-agentic-ai-simulation-2026|Agentic AI simulation in brachytherapy]] shows how AI agents support hands-on procedural training in medical specialties.
- **Gamification of medical learning.** [[medgame-llm-medical-education-gamification|MedGame]] applies [[game-based-learning|gamification]] and LLMs to engage medical students.
- **Nursing and interdisciplinary education.** [[alrazeeni-transforming-nursing-education-ai-2026|AI transformation of nursing education]] documents how AI reshapes nursing curricula and instruction.
- **AI-powered simulation in nursing.** [[jiang-ai-powered-simulation-nursing-education-2026|Jiang et al. (2026)]]'s [[mixed-methods-research|mixed-methods]] [[meta-analysis-systematic-review|systematic review]] of 19 studies (N = 1,253) finds AI-driven [[simulation|simulations]] (GenAI/LLMs, virtual patients/mannequins, AI-enhanced VR/MR, and [[conversational-ai|chatbots]]) significantly improve cognitive knowledge and [[affective-computing|affective]] outcomes ([[self-efficacy|self-efficacy]], communication confidence) in the strongest designs, but are inconsistent for complex psychomotor skills — one [[rct]] found AI-assisted simulation *inferior* to standardized patients. Their concept of an **"authenticity gap"** — a learner-perceived shortfall in emotional resonance, nonverbal cues, and tactile examination — grounds why AI is best for highly structured objectives (foundational communication, history-taking) and should sit in a **stepped simulation continuum** alongside, not instead of, human-standardized patients and clinical placement. This is a distinctive, evidence-anchored refinement of the domain's [[simulation]] strand and parallels the acceptance-trust finding that learners favor human feedback perceived as "benevolent" over AI seen as merely "competent."
- **Task allocation and the SCAN framework.** [[ai-teammate-task-distribution-medical-training-2026|Tsim et al.]] reframe AI integration from learner "misuse" to *misclassification* — a failure of real-time [[metacognition|metacognitive]] evaluation. Their SCAN framework (Substitute, Complement, Aid, Non-Negotiable), grounded in Vygotsky's [[sociocultural-learning|zone of proximal development]], allocates [[generative-ai|generative AI]] tasks by the individual learner's developmental state and identifies passive engagement within AI-scaffolded tasks as a hidden pathway to mis-skilling that requires re-identification from AI to expert assistance with human [[human-in-the-loop-ai|epistemic auditors]].
- **Human-in-the-loop instructional asset generation.** [[gen-mentor-dental-radiography-2026|Gen-Mentor]] (Dong et al. 2026) integrates a vision-language-model backbone into a dental-radiography workflow: Faster R-CNN localizes four target findings (Filling, Implant, Impacted Tooth, Cavity), a conditional diffusion model generates class-specific synthetic ROI candidates, a VLM produces evidence-linked captions, and an [[llm]] reformats them into case descriptions, comparisons, and quiz prompts — all before structured expert review. Evaluated with 45 dental students (mean SUS 72.7), it demonstrates how [[human-in-the-loop-ai|human-in-the-loop]] review of AI-generated instructional assets can expand case diversity and immediate-feedback support while retaining expert oversight over what students see.
- **[[automated-assessment|AI grading]] of pharmacy exams.** [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik & Thambi (2026)]] evaluated ChatGPT-5 against human faculty grading of a 21-item pharmacy exam (16 students) across multiple-choice, select-all-that-apply, fill-in-the-blank, listing, short-answer, and essay items. The model matched faculty closely on objective items (CCC 0.935–1.000) but was unreliable for listing, short-answer (CCC ≈0), and essay (0.341–0.854) responses, and a structured rubric did not consistently improve agreement — evidence that in high-stakes, competency-based [[assessment]] in health professions, AI suits well-specified items while [[human-in-the-loop-ai|human review]] remains necessary for subjective, open-ended clinical reasoning.
- **GenAI in scenario-based healthcare education.** [[genai-scenario-based-healthcare-education-2026|Neto and colleagues (2026)]] systematically reviewed 23 studies of GenAI across scenario-, case-, problem-, and simulation-based learning in healthcare education (PRISMA 2020). Their central finding is that **[[prompt-engineering|prompt design]] functions as instructional specification** — encoding the cognitive targets and quality criteria implicit in expert authoring — yet only 34.8% of studies aligned generated content with instructional frameworks and only 34.8% reported prompting in enough detail to reproduce. GPT-4 dominated implementations (44.4%), hybrid [[human-ai-collaboration|human-AI collaboration]] outperformed fully automated approaches, and evidence was strongest for higher-order cognitive skills but inconsistent elsewhere. This grounds [[simulation|scenario/simulation-based]] and [[problem-based-learning|problem-based]] [[pedagogy]] in medical education with validation- and integration-quality [[benchmark|benchmarks]].

- **AI scoring of open-ended exam questions.** [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] tested whether [[generative-ai|GPT-4]] could reliably score open-ended questions on pre-clerkship [[assessment|assessments]] at two US medical schools. With faculty iteratively refining scoring rubrics across three rounds of error-pattern analysis, AI–faculty inter-rater reliability reached substantial-to-almost-perfect agreement on three of four questions (weighted kappa up to 0.94) but only moderate on the holistic-rubric item (κw = 0.54); discrepancies traced to both raters (GPT-4 over-scoring multiple-answer or rubric-absent-vocabulary responses; faculty being overly generous) and occasional feedback inaccuracies keep [[human-in-the-loop-ai|humans in the loop]]. The authors argue the case for automated OEQ scoring is strengthened because ~82% of US medical schools grade pre-clerkship work pass/fail, where exact AI score agreement is not always required.

### Why it matters

HPE is a high-stakes, competency-based domain where AI's benefits (scalable practice, adaptive feedback, simulation) must be balanced against risks ([[cognitive-offloading|Over-Reliance]], erosion of hands-on clinical skill, ethical and safety concerns). The knowledge base's general concepts — [[teacher-role]], [[assessment]], [[feedback]], [[equity-in-ai-education]], and [[ethics]] — apply with particular intensity in health professions, where errors carry direct patient consequences.

## Implications for health-professions educators

- **Use AI to operationalize learning principles, not replace the educator.** [[fowlin-operationalizing-learning-principles-ai|Fowlin et al.]] argue AI should operationalize experiential, situated, and distributed-cognition learning while the teacher remains central to engagement and outcomes.
- **Leverage AI for clinical skills training.** [[residencyrl-clinical-rl-training-2026|ResidencyRL]] and [[hdr-brachytherapy-agentic-ai-simulation-2026|agentic simulation]] show AI as a skills-training partner in real clinical workflows — embed it where it adds safe, scalable practice.
- **Balance high-stakes benefits against over-reliance.** HPE is competency-based and high-stakes; guard against AI substituting for hands-on clinical skill and judgment, and apply [[feedback]], [[assessment]], and [[ethics]] considerations with particular care.
- **Adapt gamified and interdisciplinary AI thoughtfully.** [[medgame-llm-medical-education-gamification|Gamified LLM learning]] and [[alrazeeni-transforming-nursing-education-ai-2026|nursing-education transformation]] show promise but need evaluation for safety and skill outcomes.

## Connected Concepts

- [[problem-based-learning]]
- [[higher-ed]]
- [[simulation]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[game-based-learning]]
- [[experiential-learning]]
- [[situated-learning]]
- [[distributed-cognition]]
- [[teacher-role]]
- [[assessment]]
- [[feedback]]
- [[ai-education]]
- [[discipline-specific-aied]]

## Connected Articles
- [[ai-teammate-task-distribution-medical-training-2026]] — SCAN framework: rethinking AI task distribution in medical training (Tsim et al. 2026)

- [[genai-simulate-patient-history-pbl-2026]]
- [[fowlin-operationalizing-learning-principles-ai]] — Operationalizing experiential, situated, and distributed cognition with AI in health-professions education
- [[residencyrl-clinical-rl-training-2026]] — Reinforcement-learning training for clinical skills in residency
- [[medgame-llm-medical-education-gamification]] — Gamified LLM-based learning for medical education
- [[hdr-brachytherapy-agentic-ai-simulation-2026]] — Agentic AI simulation for brachytherapy training
- [[alrazeeni-transforming-nursing-education-ai-2026]] — Transforming nursing education with AI
- [[jiang-ai-powered-simulation-nursing-education-2026]] — AI-powered simulation in nursing: mixed methods systematic review
- [[wang-safety-gap-productive-struggle-2026]] — The Safety Gap: Restoring Productive Struggle
- [[gen-mentor-dental-radiography-2026]] — Gen-Mentor: human-in-the-loop dental radiography instruction (Dong et al. 2026)


- [[genai-scenario-based-healthcare-education-2026]] — Systematic review of GenAI in scenario-based healthcare education (Neto et al. 2026)
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
