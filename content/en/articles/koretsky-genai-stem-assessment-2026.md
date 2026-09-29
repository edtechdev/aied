---
title: "The shifting landscape of assessment in STEM education in the age of generative AI"
created: "2026-09-29T09:21:15-04:00"
updated: "2026-09-29T09:26:59-04:00"
type: article
sources: ['raw/papers/koretsky-genai-stem-assessment-2026.md']
source_url: 'https://doi.org/10.1186/s40594-026-00648-5'
confidence: high
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
pedagogy: [pedagogy, situated-learning]
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [assessment, assessment-validity, authentic-assessment, process-oriented-assessment, oral-assessment, automated-assessment, formative-assessment, summative-assessment, feedback, ai-feedback-quality, evaluative-judgment]
methods: [meta-analysis-systematic-review]
institutions: [educational-policy-ai, governance]
ethics: [equity-in-ai-education, accessibility]
research_method: [literature review]
discipline: [stem education]
level: [higher ed, k 12]
audience: [instructors, assessment designers, administrators, researchers]
page_kind: [synthesis]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-29"
    agent: hermes-agent
---
> **Synthesis:** Koretsky, Ding, Chiu, Hallström, and Li review how [[generative-ai|generative AI]] is reshaping [[stem-education|STEM]] assessment through the assessment triangle: cognition (what is assessed), observation (how evidence of learning is elicited), and interpretation (the inferences drawn from that evidence). Their scoping review of literature from Scopus, Web of Science, and ERIC organizes the field into three themes: AI's entanglement with assessment systems, including [[assessment-validity|validity]], redesign, and policy on acceptable use; AI as assessment infrastructure that analyzes evidence and generates feedback; and the fidelity of AI-generated assessment materials. The core argument is that ubiquitous GenAI turns assessment into a validity, design, and capability-definition problem rather than a cheating problem, and that the three vertices of the triangle must be realigned together rather than patched one at a time. As an editorial opening an article collection, it maps a research agenda rather than reporting a study.

## Key Findings

- **Validity, not cheating, is the frame.** GenAI disrupts the inference that a submitted product is credible evidence of what a student knows; framing this as [[assessment-validity|validity]] rather than cheating asks whether a task supports defensible interpretations.
- **Formats are unevenly vulnerable.** An international survey found educators and students saw the validity threat as most salient for essays, take-home exams, and coding, so credibility depends on the conditions of production.
- **Evidence should move into the process.** Redesign embeds evidence in the solution process — annotated drafts, in-class checkpoints, reflective accounts — alongside [[authentic-assessment|authentic assessment]] and [[oral-assessment|oral exams]] that enrich the observation component.
- **Authenticity can still be gamed.** Authentic tasks gain meaning for students but need process, performance, and interaction data, and they depend on a culture where students value the work rather than on policing AI use.
- **Acceptable use is negotiated, and policy is inconsistent.** What counts as acceptable use is task-dependent, so the same behavior is legitimate in one class and misconduct in another, weakening transferable judgment; [[ai-detection|detection]] is unreliable and disadvantages some populations.
- **AI now sits in the assessment infrastructure.** Tools classify open-ended responses, score essays, and generate [[feedback]], moving from feature-based scoring toward transformer [[llm|large language models]], with the instructor in the loop as the strongest role.
- **AI-generated tasks need a fidelity check.** Simulated dialogues and learner responses show simplified structures, repetitive behavior, unrealistic errors, and weak responsiveness, so they need a human-in-the-loop evaluation before grounding assessment.

## Validity, acceptable use, and the policy gap

The paper's central move is to treat AI-assisted work as an [[assessment-validity|assessment validity]] question. A student may break no articulated rule and still submit work in which AI performed the consequential intellectual work, so the product no longer evidences the targeted cognition. Restrictive anti-cheating controls cut the other way, reducing accessibility, authenticity, and alignment with professional practice. The authors cite an international survey reporting the validity threat as most salient for essays, take-home exams, and coding. Because AI is routine in professional practice, prohibiting it can produce secure evidence for capabilities students will not need.

Accepted use is socially negotiated: students use chatbots for brainstorming, editing, translation, and partial drafting without regarding it as an [[academic-integrity|integrity]] violation, while institutions developed [[educational-policy-ai|policies]] quickly and unevenly. The authors argue effective policy works at the level of the specific task, with examples tied to the learning goal, model statements, and safe ways for students to ask questions, since [[ai-detection|detection]] is unreliable.

## Redesigning assessment around process and authenticity

If chatbots can reproduce answers to decontextualized, single-correct-answer questions, the authors argue, students see little value in mastering them. Redesign distributes evidence across the process: annotated drafts, in-class checkpoints, and reflective accounts reveal how students frame problems, respond to [[feedback]], and exercise [[evaluative-judgment|judgment]]. [[authentic-assessment|Authentic assessment]] — real-world tasks such as troubleshooting, open-ended design, and interpreting noisy data — gives students meaning, but can be gamed unless design also captures process, performance, and interaction data.

[[oral-assessment|Oral exams]] are described as undergoing a renaissance, observing whether students understand key claims, choices, calculations, or code. Practices include sharing rubrics in advance, recording exams for review and calibration, offering rehearsal, and providing exemplar recordings. The paper also frames [[ai-literacy|AI literacy]] as an emerging competency distinct from foundational disciplinary competence and from judging AI-supported work.

## AI in the assessment infrastructure, and the fidelity of AI-generated materials

The second theme is AI as part of the assessment system itself, largely at the interpretation stage. Applications include classifying open-ended responses, scoring essays and constructed responses, and generating [[feedback]], progressing from feature-based scoring toward transformer [[llm|large language models]]. Their value is greatest when analysis is designed around disciplinary reasoning rather than surface similarity, and they describe a shift from summative scoring toward [[formative-assessment|formative]] uses. Automated results still require validation, and the strongest role is the instructor in the loop.

The third theme concerns AI-generated artifacts such as classroom dialogues, teaching cases, and simulated student work. Available evidence reveals simplified interactional structures, repetitive behaviors, unrealistic student errors, and weak responsiveness to individual learners, and tasks optimized for a domain may still carry inaccurate content or inappropriate cognitive demands. The authors catalog candidate fidelity dimensions — content, linguistic, cognitive, behavioral, structural, and pedagogical, with psychological fidelity raised for future work — and conclude that AI-generated materials need a human-in-the-loop evaluation before they ground learning or assessment.

## What this means for practice

- **Instructors.** Test each AI use against the learning objective it serves, and move evidence into the process with annotated drafts, in-class checkpoints, and reflective accounts so a polished product is not the whole record.
- **Assessment designers.** Treat understanding of key claims, choices, and calculations as the target, combine formats rather than replacing flexible assessment wholesale, and validate AI-generated tasks on content, structural, and pedagogical fidelity before use.
- **Administrators and institutions.** Fund and recognize the labor that process checks, authentic tasks, and oral exams require, and renegotiate instructor responsibilities, since detection-based enforcement performs poorly.
- **Researchers.** Examine how GenAI changes each vertex of the assessment triangle and the connections among them, and test whether integrated designs generate valid evidence.

## Limitations

- It is an editorial scoping review with no participants, intervention, or primary data; the three themes are an organizing synthesis of other studies, and the research directions are proposals.
- The literature search is not reported reproducibly — no date range, database query strings, hit counts, or screening criteria — so coverage and study selection cannot be checked or replicated.
- The fidelity dimensions rest on a small set of studies that the authors say present no single comprehensive framework, and variation across them is noted rather than resolved.
- The authors acknowledge the technology and its tools evolve rapidly, so any review captures only a snapshot in time.

## Citation

Koretsky, M. D., Ding, M., Chiu, T. K. F., Hallström, J., & Li, Y. (2026). [The shifting landscape of assessment in STEM education in the age of generative AI](https://doi.org/10.1186/s40594-026-00648-5). *International Journal of STEM Education*, 13, Article 59.
