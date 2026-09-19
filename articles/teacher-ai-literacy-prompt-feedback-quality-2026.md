---
title: "AI Literacy of Teachers: Prompt Engineering and Model Selection as Predictors of AI-Feedback Quality"
type: article
created: "2026-09-17T09:40:00-04:00"
updated: "2026-09-19T12:04:28-04:00"
foundations: [ai-literacy]
technology: [generative-ai, llm, prompt-engineering]
assessment: [ai-feedback-quality, feedback, feedback-literacy]
stakeholders: [teacher-ai-competency]
sources: ['raw/papers/teacher-ai-literacy-prompt-feedback-quality-2026.md']
confidence: high
research_method: [quasi-experiment, quantitative]
level: [teacher training, higher ed]
audience: [teacher educators, researchers, faculty development]
page_kind: [evaluation, framework]
---

> **Synthesis:** Two quasi-experimental studies with 153 German pre-service teachers tested which aspects of [[prompt-engineering|prompt design]] and which [[llm|language model]] produce high-quality [[ai-feedback-quality|AI feedback]] on the learning goals students had written for their own lesson plans. Across 240 feedbacks in Study 1, model choice alone explained 26.9% of the variance in rated feedback quality and adding prompt design lifted the model to 42.8%; in Study 2, replicating with the best-performing combinations, model alone explained 18.4% and prompt design added a further 5.7%. The sharpest single result is negative in form: removing domain-specific technical language from the prompt significantly lowered feedback quality (β = −0.412), while adding concrete examples and dispensing with chain-of-thought instructions made no significant difference in Study 1. The authors read this as evidence that [[ai-literacy]] for teachers has an instrumental core — knowing what models do well and how to phrase a task so the model can act on subject knowledge — and that prompt engineering belongs in [[teacher-education|teacher education]] as a reflexive competency at the junction of AI literacy and [[feedback-literacy|feedback literacy]], not as a bag of technical tricks.

## Key Findings

1. In Study 1 (N = 240 feedbacks; 20 learning goals per model-and-prompt combination), the language model alone explained 26.9% of the variance in feedback quality, and adding the prompt variants raised the model to 42.8% — a significant additional 15.9%.
2. Model differences were large and consistent: Claude 3 and Gemini Advanced both produced significantly lower-rated feedback than ChatGPT-4 (β = −0.518 and β = −0.519 in Model 2), so model choice functioned as a predictor of quality, not a detail of delivery.
3. Prompt 3 — the baseline prompt with subject-specific terminology and models replaced by everyday-language paraphrases — was significantly negatively associated with quality (β = −0.412), making domain-specific technical language the single prompt feature the study found to matter.
4. Prompt 2 (the baseline plus three concrete examples of good and poor learning goals) and Prompt 4 (the baseline without the explicit step-by-step reasoning instruction) produced no significant differences from the baseline in Study 1 (β = −0.068 and β = 0.012).
5. In Study 2 (153 learning goals, 345 feedbacks), the model alone explained 18.4% of the variance and the prompt a further 5.7%, for 24.1% in total; with both predictors entered, model choice grew stronger (β = −0.89) and Prompt 2 became significantly *positively* associated with quality relative to Prompt 1 (β = 0.52).
6. Prompt characteristics were selected empirically: eleven prompt variants (one per 3K-model category, each adding or omitting one component) were tested against ten strategically chosen learning goals across all three models (N = 330 feedbacks), and two authors independently identified the three features consistently linked to better feedback — domain-specific language, examples and deliberate reasoning — for the main experiment.
7. Feedback quality was rated on nine categories of high-quality feedback (assessment criteria, explanation, subjective perspective, valence, questions, alternatives, explanation of alternatives, specificity, errors), each scored 2/1/0, with three trained coders and interrater reliability between κ = .73 and .93 on a 20% double-coded sample.
8. The authors' explanation for domain specificity is double: technical terms give the model access to relevant regions of its training data, and they implicitly set a professional frame — an effect similar to explicit role prompting — that raises tone and precision.
9. The null result for chain-of-thought is read as task-dependent rather than as evidence against the technique: the literature suggests step-by-step reasoning pays off mainly on complex multi-step tasks and varies by model, and the paper notes that newer models apply such reasoning internally without being asked.
10. Both studies are tied to specific model versions and to feedback on learning goals inside lesson planning, with the linguistic form of each prompt category held constant, and Study 1 rests on only 20 learning goals per condition — limits the authors state rather than smooth over.

## Feedback Quality as the Outcome, AI Literacy as the Input

The study takes as its starting point a practical shortage rather than a technological opportunity: high-quality, individualized [[feedback]] is a central component of teacher education and a well-documented casualty of teacher educators' limited time, and LLM feedback has been shown in individual studies to support diagnostic reasoning and didactic analysis, in some comparisons to surpass expert feedback, and to be rated comprehensible and learning-conducive by pre-service teachers — with the largest effects for learners who bring little [[prior-knowledge|prior knowledge]].

What the field has lacked is a causal account of which input produces which quality. The paper distinguishes an **instrumental** dimension of [[ai-literacy]] (knowledge of how large language models work and how to use them deliberately, including prompt design and model choice) from a critical dimension (evaluation, [[ethics]]), and argues that model selection for teachers is not a technicality but a didactically relevant decision, since models differ systematically in output quality. Its operationalization of prompt engineering is three-layered: a procedural level (design principles such as setting context or giving examples), an epistemic level (translating subject-matter and [[pedagogy|pedagogical]] content knowledge — assessment criteria, [[discipline-specific-aied|domain terminology]] — into the prompt) and a reflexive level (reviewing and revising outputs iteratively). The experiment deliberately targets the procedural level, with the epistemic level showing up in the decisive finding about terminology.

## The 3K Model and the Experimental Variation

The prompt framework is the 3K model (German *Kontext, Kernauftrag, Klarheit* — context, core task, clarity), which reduces technical prompt-engineering strategies into eleven practice-oriented categories a teacher can actually use: role, target audience and target medium under *context*; task instruction, domain specificity and deliberate reasoning (chain of thought) under *core task*; format and constraints, conciseness, logic, examples and emotionality under *clarity*. Each category carries a three-point rubric describing a good (2), average (1) and suboptimal (0) prompt.

The experimental prompts were built on an empirically validated baseline that already satisfied ten of the eleven categories and omitted only examples. Prompt 2 added three concrete examples of good and poor learning goals; Prompt 3 replaced subject-specific terminology and models with everyday paraphrases; Prompt 4 removed the instruction to think through the task step by step. Feedback was generated by ChatGPT-4, Claude 3 and Gemini Advanced, each in separate conversations without history and under a single account per model so that configuration differences could be excluded. Three additional design decisions matter for reading the results: learning goals came from 153 pre-service teachers (mean age 22.53, 78% female) in the fourth semester of a bachelor's program during a four-week school internship in 2024, so the assessed products are authentic novices' work; the goals spanned [[math-education|mathematics]], German, physical education, art and other subjects; and the unit of analysis was the individual feedback, randomly assigned to coders, with no repeated measurement within a condition.

## Results: Models Differ, and Domain Language Decisively

The two hierarchical regressions produce one large effect and one surgical one. The large effect is model choice: it accounts for more than a quarter of the variance in rated feedback quality on its own in Study 1, and the direction is consistent across both studies, with Claude 3 and Gemini Advanced below the ChatGPT-4 reference. The surgical effect is prompt design, and within it a single category dominates — strip the prompt of subject-specific terminology and feedback quality falls significantly, while adding examples or removing the chain-of-thought instruction changes nothing detectable in the first study.

The second study clarifies rather than overturns the first. Running the best-performing combinations at larger scale (153 learning goals, 345 feedbacks), model choice explains 18.4% of the variance and prompt design adds 5.7%; with both in the model, Prompt 2 — the prompt *with* examples — is significantly better than the example-free baseline (β = 0.52), which suggests that examples matter once models of comparable strength and a larger sample are in play. The paper is careful about what model rankings can mean: comparative results of this kind depend on task, version, context and measurement design, so the finding is evidence that model choice is a competency rather than that any system is stably superior — with the practical rule of thumb that teachers should use the most capable current frontier model.

The explanation offered for the terminology result is the interesting one for [[teacher-ai-competency|teacher competency]]. Technical language appears to do two jobs at once: it reaches content the model has seen in contexts where those terms are used, and it frames the request professionally, functioning much as explicit role prompting does. If that reading is right, subject-matter knowledge is not displaced by [[generative-ai|generative AI]] but becomes the mechanism through which a teacher makes the model useful — which is why the study treats prompt engineering as a facet of instrumental AI literacy rather than a workaround for lacking content knowledge.

## From Prompt Engineering to a Reflexive Feedback Cycle

The paper's conceptual move is to place the LLM inside an existing account of [[feedback-literacy|feedback literacy]] rather than beside it. Following Dawson et al., it maps the five areas of feedback literacy — seeking feedback information, making sense of it, using it, providing it, and managing affective reactions — onto interaction with a language model: the teacher decides what feedback is needed, selects a model and writes a prompt; evaluates the response for subject-matter accuracy; revises both the product and the follow-up prompt; gives the model meta-feedback ("too general", "criterion X was not addressed", "how was my prompt?") and prepares the result as feedback for students; and manages the affective side, including frustration at unsuitable output and the deceptive sense of certainty that fluent prose produces.

That cycle also frames the study's forward-looking claim. As models internalize prompting techniques and handle weaker prompts better, the value of prompt engineering shifts from rule-following toward structured problem analysis — a [[metacognition|metacognitive]] strategy rather than a linguistic formula — and the prompt becomes a didactic instrument comparable to a well-designed task. The 3K model is offered as a heuristic guide to that analysis, explicitly not as a template to apply schematically, and the authors recommend integrating prompt engineering into initial and continuing teacher education on the grounds that it is evidence-based, learnable and didactically compatible. The complementary desideratum is measurement: they suggest automated coding of feedback quality with NLP or LLM-based tools, and topic-specific pedagogical [[benchmark|benchmarks]], as the way to scale this kind of study.

## What this means for practice

- **Teacher educators.** Train the two moves with measured leverage — selecting the model and phrasing the task in the subject's own technical language: model choice alone explained 26.9% of the variance in rated feedback quality, and stripping domain-specific terminology from the prompt significantly lowered quality (β = −0.412). Both belong in the competency set teachers are trained for, and the leverage sits in those specific, teachable moves rather than in generic familiarity with the tools: the study frames the [[teacher-role|teacher]] as the one who decides what feedback is for, which model to use, and how to judge the response.
- **Teacher educators.** Require pre-service teachers to name assessment criteria in specialist terms instead of paraphrasing them into everyday words, since the domain-terminology effect was the one prompt feature the study found to matter.
- **Faculty developers.** Drop the assumption that step-by-step reasoning instructions are necessary: removing the chain-of-thought instruction changed nothing detectable in Study 1 (β = 0.012), and the paper notes that newer models apply that reasoning internally without being asked.
- **Faculty developers.** Re-verify any model recommendation against the current version before it enters a training module: the rankings rest on ChatGPT-4, Claude 3 and Gemini Advanced as tested in 2024, and the authors' practical rule is to use the most capable current frontier model.
- **Researchers.** Enter prompt design and model choice into the same model rather than reporting them separately: adding prompt design lifted explained variance from 26.9% to 42.8% in Study 1 and from 18.4% to 24.1% in Study 2.

## Limitations

- The sample is 153 pre-service teachers (mean age 22.53, 78% female) in the fourth semester of a bachelor's program during a four-week 2024 school internship, and the rated product is novices' own learning goals, so the findings speak to initial teacher education and not to in-service practice.
- The outcome is coded feedback quality rather than a learning effect — no student ever received the feedback — and quality was scored by three trained coders with interrater reliability between κ = .73 and .93 on a 20% double-coded sample, leaving four fifths of the feedbacks single-coded.
- Study 1's design allowed only 20 learning goals per prompt-and-model cell with no repeated measurement within a condition, and the eleven prompt variants were selected empirically from 330 pilot feedbacks by two authors identifying the promising features, rather than pre-registered.
- The prompt manipulation held linguistic formulation constant within each category, so the study cannot separate the effect of a prompt category from the wording used to instantiate it, and it covers a single task — feedback on learning goals in lesson planning.

## Connected Concepts

- [[ai-literacy]] — the paper's framing: instrumental (models, prompts) alongside critical dimensions
- [[prompt-engineering]] — operationalized as the 3K model's eleven practice-oriented categories
- [[ai-feedback-quality]] — the dependent variable, rated on nine quality categories
- [[feedback]] — the professional practice the study is trying to make affordable and individualized
- [[feedback-literacy]] — the five-area cycle the paper uses to situate LLM interaction
- [[teacher-ai-competency]] — model selection treated as a didactic decision, not a technicality
- [[teacher-education]] — pre-service teachers and the case for teaching prompting
- [[generative-ai]] — ChatGPT-4, Claude 3 and Gemini Advanced as the studied models
- [[llm]] — model differences as predictors of output quality
- [[discipline-specific-aied]] — subject-specific terminology as the decisive prompt feature
- [[evaluative-judgment]] — the epistemic layer: translating assessment criteria into prompts
- [[self-regulated-learning]] — iterative revision of prompts within the feedback cycle
- [[formative-assessment]] — the function the generated feedback is meant to serve
- [[professional-training]] — continuing education and PD as the delivery route for these skills
- [[benchmark]] — the paper's call for pedagogical benchmarks and automated coding

## Connected Articles

- [[genai-teacher-feedback-comparison]] — Comparing Generative AI and Teacher Feedback: Student Perceptions of Usefulness and Trustworthiness
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-internal-feedback-evaluative-judgments]] — Unravelling Undergraduates' Development of Evaluative Judgments Through AI-Supported Internal Feedback
- [[ai-feedback-enactment-workflow-2026]] — Making AI-Generated Feedback Matter: From Provision to Student Enactment
- [[reddig-maclellan-personalized-feedback-llm-2026]] — Generating In-Context, Personalized Feedback for Intelligent Tutors with Large Language Models
- [[choi-anchor-aes-prompting-2025]] — Anchor Is the Key: Toward Accessible Automated Essay Scoring with Large Language Models Through Prompting
- [[teaching-feedback-classification-benchmark]] — A Durability and Cross-Language Transfer Benchmark for a Validated Teaching-Feedback Classification Protocol
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — Prompts to Practice: A Pedagogical Framework for Human-Centered AI Engagement
- [[wang-teacher-student-centered-agents-physics-2026]] — Comparing Teacher-Centered and Student-Centered Agents Based on Prompt Engineering
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+: A Simulation-Based Study of Real-Time Coaching for Educational LLM Prompting

## Citation

Jacobsen, L. J., Pargmann, J., Rohlmann, J., & Weber, K. E. (2026). [*AI Literacy of Teachers: Prompt Engineering and Model Selection as Predictors of AI-Feedback Quality*](https://osf.io/2jscy/). Psychologie in Erziehung und Unterricht, 73(3), 137–152. DOI 10.2378/peu2026.art10d
