---
title: Professions Education
created: "2026-11-16T22:40:00-05:00"
updated: "2026-11-16T22:40:00-05:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, simulation]
assessment: [assessment-validity, authentic-assessment]
level: [higher ed]
confidence: medium
audience: [instructors, administrators, curriculum designers]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
connected_concepts: [discipline-specific-aied, medical-education, nursing-education, legal-education, teacher-education, design-education, libraries, stem-education, social-sciences-education, assessment-validity, authentic-assessment, professional-training]
connected_articles: [llm-turing-test-italian-legal-exams-2026, gutowski-hurley-genai-policy-legal-education-2025, hardie-genai-nursing-scoping-review-2026, sun-llm-nursing-education-professional-identity-2026, dabkowski-nursing-academics-genai-2026, harerimana-remote-proctoring-nursing-scoping-2026, genai-medical-education-transformation-review-2026, virtual-standardized-patients-osce-evaluation-2026, giancotti-data-provenance-health-ai-curricula-2026, zou-is-this-a-trap-student-teachers-genai-2026, shukla-ai-teacher-education-frameworks-review-2026, critsly-design-education-ai-critique-2026, ayinde-ai-academic-libraries-systematic-review-2026]
---

> **Professions education** — the programs that prepare people for licensed or certified practice: medicine, nursing, law, teaching, design and librarianship. Their curricula are ordered by an external gate — accreditation, licensure examinations, supervised practice hours, portfolio review — so AI's first effect lands on the evidence chain rather than on the content. A program has to be able to show that the judgment it certifies was the candidate's, and generative AI makes the artifacts of that judgment cheap to produce. The cluster sits under [[discipline-specific-aied|AI in the disciplines]] beside [[stem-education|STEM education]] and [[social-sciences-education|social science education]], and each profession keeps its own page: [[medical-education|medical education]], [[nursing-education|nursing education]], [[legal-education|legal education]], [[teacher-education|teacher education]], [[design-education|design education]] and [[libraries|libraries]].

## Questions to Consider

- If models can sit bar and notary examinations and be marked against expert standards, what is a licensure gate still certifying — competence, or the ability to reproduce it?
- Nursing programs are drifting toward invigilated assessment as AI use spreads. Is that a defensible response, or an admission that the program cannot see its own developmental work?
- If a virtual patient can rehearse clinical reasoning convincingly, what does the supervised practicum still supply that the simulation cannot?
- Teacher education reports shallow adoption alongside integrity anxiety in the same cohort. Which of the two should shape a certification standard?

## Introduction

Professional education is distinguished less by its subjects than by its gates. A history degree is awarded by a department; a nursing license is issued by a board, a law license by a bar, a teaching credential by a state, and a professional architecture or design program is validated by an accreditor. Those gates demand evidence of supervised practice and of judgment exercised under supervision, which is why professional curricula carry practicum hours, clinical rotations, moot courts, teaching rounds and studio reviews.

That structure determines how generative AI arrives. In a discipline assessed by essays, the tool threatens the essay; in a profession assessed by demonstrated judgment, the tool threatens the chain of evidence that the judgment happened. The studies below are organized around that difference, and [[professional-training|professional training]] is the broader label for the workplace side of the same problem.

## How AI appears across the professions

- **Law: the examination itself is the test case.** [[llm-turing-test-italian-legal-exams-2026|A blind Turing test]] had models sit Italian bar, judges' and notaries' examinations, benchmarked against expert marking, which makes the licensure gate the unit of analysis rather than the seminar. At the program level, [[gutowski-hurley-genai-policy-legal-education-2025|Gutowski & Hurley (2025)]] compare law school generative AI policies on five factors and propose a governance framework, because the case method and Socratic dialogue both assume the student did the preparatory reading.
- **Nursing: measured performance against developmental work.** [[hardie-genai-nursing-scoping-review-2026|Hardie et al. (2026)]] review 103 studies of applications, attitudes and ethics. [[sun-llm-nursing-education-professional-identity-2026|Sun (2026)]] argues that LLMs expose structural gaps in the curriculum and reconstitute professional identity, while [[dabkowski-nursing-academics-genai-2026|Dabkowski (2026)]] documents academics responding to policy ambiguity by drifting toward invigilated assessment. [[harerimana-remote-proctoring-nursing-scoping-2026|Remote proctoring in nursing assessment]] supplies the cost of that drift: surveillance, equity loss and a deterrence case built on trust rather than watching.
- **Medicine: simulation leads, and the curriculum lags.** [[genai-medical-education-transformation-review-2026|A scoping review of 153 medical-education reports]] finds simulation the leading application and leaves durability of learning as the open question. [[virtual-standardized-patients-osce-evaluation-2026|LLM-based virtual standardized patients]] were evaluated with a stratified multi-rater design against OSCE practice, which is the right shape of evidence for a clinical skill. [[giancotti-data-provenance-health-ai-curricula-2026|Giancotti (2026)]] finds health AI curricula teach ethics in 80.6% of cases but data provenance in 22.2%, which is the gap between knowing that models can be wrong and knowing where their claims come from.
- **Teaching: adoption without depth.** [[zou-is-this-a-trap-student-teachers-genai-2026|Zou (2026)]] surveys 85 student teachers and finds shallow adoption, integrity anxiety and weak assessment literacy in the same cohort. [[shukla-ai-teacher-education-frameworks-review-2026|Shukla (2026)]] reviews the frameworks, empirical evidence and ethics that teacher education has produced in response.
- **Design: the critique as the evidence.** [[critsly-design-education-ai-critique-2026|AI critique tools in design education]] are judged by whether they can read process rather than output, which is the studio's own question about what a review is for.
- **Librarianship: the service layer rebuilds itself.** [[ayinde-ai-academic-libraries-systematic-review-2026|Ayinde (2026)]] reviews AI adoption in academic libraries, where the professional's expertise sits in a discovery layer that is being replaced underneath them.

## The certification problem

Every profession here certifies a judgment that cannot be outsourced, and every one now has to prove that the judgment was exercised. Three responses recur. The first is to move the evidence closer to practice: OSCE stations, clinical sign-off, studio review, teaching rounds. The second is to watch the candidate rather than the artifact, which is where remote proctoring and invigilation come in, and which the nursing literature prices in surveillance and equity. The third is to change what the gate asks, following the [[assessment-validity|validity]] argument that a test of the wrong construct is worse than a hard test of the right one.

The professions have an advantage the disciplines lack: an external body that can be asked to redefine the gate. They also have the corresponding risk, which is that the gate moves slower than the tool. The Italian legal-examination study is the clearest case of a profession measuring its own gate against a model rather than arguing about it.

## Implications for professional programs

- **Audit the evidence chain, not the syllabus.** Ask which artifact in your program proves judgment, then ask how hard that artifact is to produce without it.
- **Treat simulation as rehearsal with a validation question.** Virtual patients and AI clinical scenarios need the same multi-rater evidence as any other assessment, and [[authentic-assessment|authentic assessment]] is the standard to hold them to.
- **Price the surveillance.** Invigilation and proctoring buy certainty about authorship and cost trust, equity and sometimes the developmental relationship itself.
- **Use the accreditor.** A program that cannot certify assisted performance has a case to make to its board, and the board is the only body that can change the gate.

## Common Misconceptions

**"Professional programs are protected by their practical assessments."** The practical is protected only where it is observed; the written components around it — case analyses, reflective portfolios, legal memoranda — carry the same exposure as any essay.

**"Simulation is a substitute for the practicum."** Simulation rehearses a defined scenario under controlled conditions, and the reviews find it the leading application precisely because it is bounded. What it does not supply is the unscripted judgment that supervision exists to see.

**"Detecting AI use solves the certification problem."** Detection answers whether a tool was used, not whether the candidate can practice, and the nursing literature already shows programs choosing invigilation because they cannot answer the second question.
