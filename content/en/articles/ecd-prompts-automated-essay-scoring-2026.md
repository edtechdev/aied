---
title: "Using Evidence-Centered Design to Guide Prompt Engineering in Measurement: An Illustration with Automated Essay Scoring"
created: "2026-10-14T09:30:00-04:00"
updated: "2026-10-14T09:30:00-04:00"
type: article
sources: ['raw/papers/ecd-prompts-automated-essay-scoring-2026.md']
confidence: high
page_kind: [framework]
research_method: [experiment]
discipline: [language learning]
level: [k 12]
audience: [researchers, instructors]
assessment: [automated-essay-scoring, assessment-validity, psychometrically-aware-ai]
technology: [prompt-engineering, llm]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-14"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Many instructors now use a [[generative-ai|generative AI]] model to score student writing, but the score a student receives depends heavily on how the prompt is written. This paper argues that [[prompt-engineering]] should be treated as a design activity with the same rigor as assessment construction, and proposes Evidence-Centered Design (ECD) as the guiding framework. It maps ECD's three core models — the student model, the evidence model, and the task model — onto the parts of a scoring prompt, and derives five design principles: intentionality, traceability, accountability, iteration, and [[equity-in-ai-education|equity]]. In an experiment on narrative essays from Grades 6–8, prompts built through ECD scored student responses more accurately than zero-shot, few-shot, and chain-of-thought baselines, with the largest gains for ECD-guided few-shot prompting. The authors conclude that treating a prompt as an assessment instrument strengthens the validity, reliability, and fairness of [[automated-essay-scoring]], and that this responsibility falls on every educator who prompts a model.

## Key Findings
1. Mapping ECD's student, evidence, and task models onto prompt components gives designers a systematic way to specify what a model should produce and how its output should be judged.
2. Across all six prompt conditions and three grade levels, ECD-guided prompts outperformed their non-ECD counterparts on every scoring metric the authors examined.
3. The strongest condition, ECD-guided few-shot prompting, reached QWK values of 0.814 at Grade 6, 0.845 at Grade 7, and 0.886 at Grade 8.
4. Without ECD guidance, chain-of-thought prompting produced the weakest results, suggesting explicit reasoning steps help less when the model lacks a clear evidential standard to reason toward.
5. All six conditions over-assigned middle scores, but ECD-few-shot produced the most balanced distribution, with the smallest discrepancies from the human benchmark.
6. Five principles — intentionality, traceability, accountability, iteration, and equity — turn prompt writing from an informal craft into a revisable, documented [[design-thinking|design process]].

## Why prompt design is a measurement problem
Instructors who hand a [[llm|large language model]] a scoring task usually judge the result by whether it looks right, and that is exactly the practice this paper calls unsafe. The authors argue that a vague prompt can let a model reward surface features, such as length or grammar, that have nothing to do with the writing construct, while a carefully specified prompt makes those decisions explicit. They name the familiar measurement threats: construct underrepresentation, when the prompt fails to elicit the full range of relevant knowledge and skills, and construct-irrelevant variance, when extraneous factors influence the output. Because small changes in prompt wording or example order can shift a model's scoring behavior, prompt wording itself becomes a source of measurement error and a threat to [[assessment-validity]]. For a [[teacher-role|teacher]] deciding whether to trust an AI-assigned score, the practical message is that reproducibility is a design property, not a model property.

## Reading the ECD mapping
ECD asks designers to build the validity argument before any data are collected, and this paper extends that demand to prompts. The student model becomes the part of the prompt that defines the construct and the dimensions to be scored, telling the model which features fall outside the trait. The evidence model becomes the rubric descriptors and anchor responses: the prompt should require the model to quote the features that match a descriptor before assigning a score. The task model becomes the writing task, source materials, grade level, and response requirements the students received, so the model can interpret a response in context. A transparency point matters for designers: the measurement component, which combines dimension scores into a claim about a student, usually sits outside the prompt. The evidentiary argument is what ties the three models together, and it is what makes a prompt inspectable rather than merely plausible.

## What the scoring experiment showed
The empirical test used a two by three factorial design crossing ECD guidance with three prompting strategies: zero-shot, few-shot, and chain-of-thought. The data came from narrative-writing items on an English Language Arts interim assessment in a southeastern U.S. state, with responses scored on a five-point holistic rubric. ECD-guided prompts beat their non-ECD counterparts in every grade and condition. ECD-guided few-shot prompting reached QWK values of 0.814, 0.845, and 0.886 for Grades 6, 7, and 8, and adjacent agreement exceeded 0.930 at all grades. Without ECD, chain-of-thought was the weakest condition, suggesting that explicit reasoning steps help less when the model has no well-specified standard to reason toward. Every condition over-assigned middle scores; the non-ECD chain-of-thought condition gave approximately 59% of responses a score of 2, against a human benchmark rate of 20%. This central tendency bias was smallest under ECD-guided few-shot.

## Where the design principles bite
The five principles are described as standards rather than rules. Intentionality asks whether every prompt component serves a stated inferential purpose; if a component cannot be linked to an evidential function, it is a candidate for removal. Traceability asks whether a reviewer can trace each component back to a claim, evidence requirement, or task specification. Accountability requires that criteria be fixed before outputs are generated, rather than judged afterward, which protects against confirmation bias. Iteration treats a prompt as a revisable hypothesis about what instructions elicit the intended output from a particular model on a particular task. Equity requires differential-performance checks across learner subgroups, because a prompt that scores one group accurately and another group in a biased way is not valid regardless of its overall accuracy. Together these principles imply that [[ai-literacy|responsible AI use]] in education requires assessment literacy, not just prompting technique.

## What this means for practice
- **Instructors.** Before using an AI score for anything that matters to a student, specify what the score is meant to measure, what evidence in the writing justifies each score point, and what should not count against it — then check the model's stated reasoning against those criteria.
- **Instructors.** Treat prompt wording as part of the measurement procedure: keep a written record of the prompt version, and re-check scores after a model update rather than assuming the same prompt still behaves the same way.
- **Researchers.** Replicate the ECD-versus-baseline comparison on less structured tasks, such as feedback generation and lesson planning, where the paper says the ECD advantage remains an empirical question.
- **Developers.** Build interface support — templates that walk users through domain analysis and evidence specification, and tools that compute agreement against benchmark responses — so that principled design does not depend entirely on individual expertise.

## Limitations
- The empirical demonstration rests on a single model, GPT-OSS-120B, accessed via API with the temperature parameter set to 0.0; the authors note that model capability updates may shift the relative effectiveness of prompting strategies.
- [[automated-assessment|Automated scoring]] is a relatively well-structured task with explicit rubrics and available [[benchmark|benchmarks]], so generalization to open-ended feedback generation or lesson planning is untested.
- The study used narrative-writing items from one English Language Arts interim assessment in one southeastern U.S. state, with a stratified sample of 500 responses per grade compared against a human benchmark.
- The authors acknowledge that the cost and expertise required by the seven-step ECD workflow is a practical barrier, since it demands time, assessment knowledge, and iterative testing that individual teachers may not have.

## Citation
Xiong, J., Tang, C., Jiao, H., & Choi, H. (2026). [*Using Evidence-Centered Design to Guide Prompt Engineering in Measurement: An Illustration with Automated Essay Scoring*](https://arxiv.org/abs/2610.15231). arXiv preprint arXiv:2610.15231.
