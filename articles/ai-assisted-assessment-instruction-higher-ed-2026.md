---
title: "AI-Assisted Assessment and Instruction in Higher Education: Foundations, Applications, and Implications for Exam Design"
created: "2026-09-18T13:40:00-04:00"
updated: "2026-09-18T13:40:00-04:00"
type: article
assessment: [assessment, authentic-assessment, automated-assessment, summative-assessment]
technology: [generative-ai, llm]
institutions: [educational-policy-ai]
foundations: [ai-literacy, academic-integrity]
methods: [research-methods-aied]
research_method: [position paper, theoretical analysis]
level: [higher ed]
audience: [instructors, educators, administrators, assessment designers]
page_kind: [framework]
sources: ['raw/papers/ai-assisted-assessment-instruction-higher-ed-2026.md']
confidence: high
---

> **Synthesis:** Klapproth's preprint argues that [[llm|large language models]] capable of completing conventional academic tasks at or above passing thresholds make the assumption behind much text-based [[assessment]] untenable, and that the response should be principled redesign rather than detection and restriction. It moves in three stages. The foundations set out what LLMs are and what they cannot be relied on for: probabilistic continuation engines that hallucinate, shift with prompt wording, lack embodied understanding of causality, and vary systematically by task type, complexity and domain. The applications review how educators can use the same systems in their own workflow — structured prompting, retrieval-augmented generation, agentic item construction, automated scoring and formative [[feedback]]. The exam-design implications join the two through constructive alignment: assessment should target the competences LLMs perform worst at. The practical upshot is a shift from AI-resistant to AI-robust design, formats that stay valid when AI is available because genuine student competence is required to complete them — practical and experimental tasks, oral and interactive formats, contextually situated assignments, and process documentation — with AI used openly for item generation, scoring support and feedback, and final grading decisions left to a qualified human examiner. The paper states plainly that it is a preprint, not peer reviewed, and discloses that a model was used for language editing only.

## Key Findings

1. **Constructive alignment is the paper's organising frame.** Following Biggs and Tang (2011), [[assessment]] must be consistent with intended learning outcomes and teaching activities; a [[generative-ai|generative AI]] system that can produce a well-structured academic text indistinguishably from a student breaks that consistency, so the problem is one of design rather than detection.
2. **LLM performance falls as cognitive level rises.** Huber and Niklaus (2025) mapped 43 benchmark tasks from the technical reports of leading models onto Bloom's revised taxonomy: GPT-4 scored 0.99 at Remember, 0.89 at Understand, 0.93 at Apply but 0.76 at Analyze; Llama 3 fell from 0.90 to 0.59 across the same range; Claude 3 Haiku from 0.46 to 0.48 at much lower levels.
3. **The higher levels are unmeasured, not merely weak.** No standard benchmark in that analysis contained tasks at the Evaluate or Create levels, and metacognitive knowledge was absent entirely, so what [[llm|LLMs]] can do at higher-order thinking remains empirically uncharted even as those are the levels the paper argues higher education should assess.
4. **Traditional exam formats sit exactly where AI is strongest.** Remembering, understanding and applying are both the levels current models handle most reliably and the levels conventional text-based examinations most commonly target, making those formats substantially susceptible to AI-assisted completion.
5. **Professional licensing exams are already passable.** Mihalache et al. (2024) found recent chatbots reaching passing thresholds on all three stages of the USMLE, with errors concentrated on highly complex, interdisciplinary or specialised items; passable is not equal to reliable.
6. **Interaction quality degrades real-world performance.** Bean et al. (2026) found LLMs identifying at least one relevant condition in 94.9% of standardised diagnostic cases, a figure that dropped substantially when real users rather than researchers posed the queries, because users supplied incomplete information and often failed to extract correct information present in the response.
7. **The design goal is robustness, not resistance.** An AI-robust assessment validly measures intended outcomes even when students have AI access, not because AI cannot help but because genuine competence is necessary to complete it — moving the question from how to prevent AI use to which competences the task should require.
8. **Four format families carry that robustness.** Practical and experimental tasks requiring embodied competence; oral and interactive formats such as viva voce examinations, presentations with examiner questioning and role plays; contextually situated and personalised tasks anchored in the student's own data, placement or institution; and process-oriented [[assessment]] through portfolios, mandated drafts and reflective journals.
9. **Educator-side AI use is real but bounded.** Structured prompting with the P.R.O.M.P.T. framework, retrieval-augmented generation for content validity, low temperature settings, a five-stage agentic item-construction workflow and a five-step scoring framework all appear as practical guidance, alongside limitations: scoring is a black box, LLMs score short undeveloped essays higher and long essays with minor errors lower than human raters do (Mathew et al., 2026), and final [[summative-assessment|summative]] grading remains the responsibility of a human examiner.

### What the evidence says AI can and cannot be relied on for

The technical foundation is stated briskly. LLMs are transformer-based systems trained on next-token prediction over very large corpora: they produce a reasonable continuation of the text so far, calibrated against patterns observed across billions of pages, which the paper takes to mean they are not reasoning systems in any classical sense. The capabilities it credits are substantial — analysing and generating complex academic texts, multi-step problem solving over several hundred pages of context, interpreting tables and figures, processing handwriting, maintaining coherence across long conversations.

The limitations it lists are the ones assessment design has to work around. Probabilistic generation does not guarantee factual accuracy, and hallucination is treated as a structural property rather than a bug to be patched. Outputs are sensitive to prompt structure, so superficially similar queries yield substantially different results. Models lack genuine understanding of physical causality and embodied experience. Most consequentially, performance varies systematically with task type, complexity and domain specificity, which is what makes the cognitive gradient in the benchmark evidence meaningful rather than anecdotal.

### Where AI enters the educator's own workflow

Four applications are reviewed. Prompt engineering is treated as a prerequisite skill rather than an optional refinement: the P.R.O.M.P.T. framework organises a prompt around goal, role, output format, audience, presentation and tone, and is supplemented by retrieval-augmented generation, where uploaded course materials ground [[automated-question-generation|item generation]] in course-specific content instead of generic knowledge, and by low temperature settings (0.1 to 0.3) where consistency matters more than variation.

Automated scoring is presented with its history in automated essay scoring and its advance: LLMs can apply complex multi-dimensional rubrics without task-specific training data, and their main benefit is scalability and timeliness for [[formative-assessment|formative feedback]] on open-ended responses from large cohorts. The stated risks match those documented elsewhere in this wiki — opacity, inexactness, and the legal questions raised by transmitting student work to commercial platforms. Formative [[feedback]] is configured against established criteria from Hattie and Timperley (2007): criterion-referenced, precise, focused on what matters, delivered supportively.

Item construction is where the paper is most concrete. Multiple-choice items remain central to large-cohort examinations, and constructing good ones is demanding technical work: specified objectives, unambiguous stems, exactly one defensible answer, plausible distractors drawn from typical misconceptions, and calibration to a cognitive level. An agentic workflow of five stages — objective analysis, item construction, distractor development, quality self-review, difficulty estimation — is offered as a route to that work at scale, with the explicit condition that subject-matter experts review every generated item before operational use.

### Recommendations for exam design

The recommendations follow from the cognitive gradient. Assessment should be shifted from product-oriented to process-oriented formats that document the writing and thinking behind a submission, through successive drafts, reflective journals on AI use and critical annotations of AI-generated content. It should require personalised, situated and experientially grounded responses — applying a theoretical framework to the student's own professional experience, or analysing data collected in their own institutional context — because these embed a personal knowledge component an LLM cannot supply. Oral and interactive formats retain a validity advantage precisely because they require real-time performance that an examiner can probe, though the paper notes that real-time LLMs delivered through wearable devices are beginning to erode even that advantage. Practical and experimental tasks requiring physical manipulation, observation or hands-on construction remain beyond text-based systems.

Alongside the redesign sits disclosure and transparency: AI is to be used openly in the educator's workflow and documented in the student's, and the paper's framing of the widened competence set is [[ai-literacy|AI literacy]] rather than tool avoidance — students moving from the role of author to the role of editor who evaluates accuracy, identifies logical gaps, adapts texts to disciplinary conventions and exercises judgement about what constitutes a good argument.

### Integrity, validity and legal risks

The paper separates [[academic-integrity|academic integrity]] from detection technology and argues that enhanced detection and penalty is not the appropriate response. The more fundamental question is what authentic intellectual contribution looks like in an AI-saturated environment, and how assessment can credibly evidence it, which it calls an educational question requiring educational answers. Its position is consistent with the institutional drift it describes: the market for online proctoring is projected to grow, yet guidance at many universities is moving toward assessment redesign rather than AI detection, and online proctoring is itself criticised on grounds of data protection, proportionality, algorithmic bias and student rights.

Legally, it flags that AI use for high-stakes grading requires scrutiny under data protection rules and copyright considerations when student work is transmitted to commercial platforms, and that the EU Artificial Intelligence Act, in force since 2024 and phased in over several years, designates certain educational AI applications as high-risk systems subject to enhanced transparency and accountability. Institutionally, most [[higher-ed|higher education]] institutions currently permit AI in assessment only in an advisory or supplementary capacity, with the final grading decision remaining with a qualified human.

### Limitations

The paper is a conceptual review and says so: no new data were collected, and the empirical evidence discussed is cited from other work. Its own stated limitations are that the field moves fast enough to make any systematic account of LLM capabilities potentially outdated within months, since the cited findings reflect specific model versions at specific times; that the practical guidance is illustrative rather than prescriptive and will vary by discipline, institution and pedagogical context; and that evidence on the long-term consequences of AI tool use — for foundational writing skills, critical thinking and academic self-efficacy — remains limited. It also carries a clear provenance caveat: it is a self-described preprint that has not been peer reviewed, and the author discloses that a large language model was used for manuscript preparation including text restructuring, language editing and reference formatting, while the intellectual content and substantive claims are the author's own. Readers should treat the framework as a synthesis of existing evidence with a design argument attached, not as validated by new findings.

## Connected Concepts

- [[assessment]] — the object of the redesign argument and the paper's central term
- [[authentic-assessment]] — the AI-robust direction of travel: contexts, processes and performances AI cannot supply
- [[assessment-validity]] — what is at stake when an AI can complete a task indistinguishably from a student
- [[academic-integrity]] — reframed away from detection and penalty toward what authentic contribution looks like
- [[automated-assessment]] — AI-assisted scoring, its scalability benefit and its black-box risk
- [[summative-assessment]] — high-stakes grading where the paper keeps the human examiner responsible
- [[formative-assessment]] — the case where timeliness of AI feedback is most clearly a pedagogical gain
- [[feedback]] — configured against criterion-referenced feedback principles
- [[llm]] — the technology whose documented limitations structure the whole design argument
- [[generative-ai]] — treated as a condition of assessment rather than an intruder into it
- [[prompt-engineering]] — P.R.O.M.P.T., retrieval-augmented generation and low-temperature settings as prerequisites
- [[remote-proctoring]] — criticised on data protection, proportionality, bias and student-rights grounds

## Connected Articles

- [[beyond-detection-authentic-assessment-ai-2025]] — The move beyond detection toward authentic assessment design
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Oral examinations as an AI-robust assessment format in practice
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Cognitive outsourcing and what GenAI does to assessment evidence
- [[llms-do-not-grade-essays-like-humans-2026]] — The rater-bias finding the paper cites as an automated scoring limitation
- [[assessing-quality-ai-generated-exams-field-2025]] — AI-generated exam items evaluated for quality in a real examination setting
- [[automated-online-exam-proctoring-decade-review-2026]] — A decade of proctoring evidence, the technology the paper treats as contested
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]] — Whether LLMs can judge the quality of assessments themselves
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Keeping a human examiner in the grading loop at national scale
- [[asynchronous-oral-assessment-2026]] — Scaling the oral formats the paper recommends beyond live viva voce
- [[responsible-assessment-ai-era-stanford-2026]] — Institutional framing for responsible assessment in an AI era

## Citation

Klapproth, F. (2026). [*AI-assisted assessment and instruction in higher education: Foundations, applications, and implications for exam design*](https://osf.io/preprints/psyarxiv/uwpfq_v1). *PsyArXiv Preprints* (preprint, not peer reviewed).
