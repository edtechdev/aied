---
title: "The AI Writes the Code, the Student Writes the Model: A Theory and Measurement Programme for Learning by Construction with Generative AI"
created: "2026-08-24T05:31:00-04:00"
updated: "2026-09-24T12:30:00-04:00"
type: article
foundations: [computational-thinking, curriculum-design, theory-development-aied]
pedagogy: [constructivist, self-regulated-learning]
technology: [generative-ai]
assessment: [assessment, educational-measurement]
connected_faqs: [verify-ai-output]
sources: ['raw/papers/ai-writes-code-student-writes-model-2026.md']
confidence: medium
discipline: [science education, cs education]
audience: [curriculum designers, assessment designers, instructors]
level: [secondary]
---

> **Synthesis:** This theoretical paper develops **Code-to-Learn with Generative AI (CtL-GenAI)**, a framework for upper-secondary students (roughly fifteen to eighteen) who build software with generative AI and are meant to learn the *subject the software models* ([[physics-education|physics]], [[chemistry-education|chemistry]], a local environmental problem) rather than to learn coding itself. Its organizing claim is that the AI may write the code while the student must write the model. The paper defines a **model authorship** construct (four facets, four ordered levels, observable indicators, a partial-credit measurement model), partitions the outcome space into supported performance, unsupported performance and delayed transfer (defining the **assistance-removal gap**), recasts verification of AI output as signal detection, audits twenty-four studies, and states six hypotheses with designs, measures and falsification criteria. For instructors it yields six design principles and a rubric for judging what the student, not the AI, contributed; for researchers, a measurement model to test.

## Key Findings

1. **The performance–learning dissociation.** Three randomized studies (Bastani et al., 2025; Fan et al., 2025; Liu et al., 2026) found assistance raised performance while available and lowered it once withdrawn.
2. **The unit of analysis is the task, not the tool.** The same tool produces opposite outcomes under different task structures, so task design is predicted to moderate the assistance-removal gap.
3. **The field has measured the wrong outcome.** Of twenty-four audited studies, nearly all measured performance with the AI available; one reported a transfer sub-measure and none measured it after withdrawal.
4. **Model authorship is a measurable construct.** How far a learner, not the system, originates an artifact's domain-level content is scored across four facets and four levels, with refutable assumptions.
5. **Verification is a detection problem.** Separating sensitivity to flawed output from the threshold a learner sets for rejecting it splits over-reliance into two failure modes needing different responses.

## The performance–learning dissociation

**Watch for [[generative-ai]] assistance that raises performance now and lowers it later.** Nearly a thousand Turkish high-school [[math-education|mathematics]] students with a standard GPT interface gained sharply in practice (48%) but scored about 17% worse on an exam without it; a guardrailed version removed the deficit (Bastani et al., 2025). A randomized study of 117 university writers found ChatGPT most improved essay scores while adding no knowledge, a bypassed metacognition named **metacognitive laziness** (Fan et al., 2025). [[rct|RCTs]] with 1,222 participants found in-the-moment performance improved yet people became worse and less persistent once withdrawn (Liu et al., 2026). [[ai-literacy]] asks what students should understand about these systems, not how to arrange the lesson.

## Theoretical foundations

**What to protect.** [[constructivist|Constructionism]] explains why students should write code rather than converse with a [[conversational-ai|chatbot]]. **[[productive-failure|Productive failure]]** places specification before [[prompt-engineering|prompting]]: a meta-analysis of 166 comparisons found [[problem-solving]]-before-instruction beat instruction-first designs (mean d = 0.36; Sinha & Kapur, 2021). [[cognitive-offloading|Cognitive load theory]] gives the rule *delegate the incidental, protect the essential*, while [[self-regulated-learning|self-regulated learning]] and [[metacognition|metacognitive monitoring]] reframe prompting and revising. The [[icap-framework|ICAP model]] ranks [[student-engagement|engagement]] from passive to interactive, and [[scaffolding|scaffolding theory]] (Vygotsky's [[sociocultural-learning|zone of proximal development]]) requires help calibrated and withdrawn.

## Model authorship and the outcome space

**Ask who wrote the model, not who wrote the code.** Model authorship concerns *domain-level* content (code-complete work with no view of the physics scores low) and is a property of a task, not a trait. Four facets (specification, conceptual model, verification, interpretation) score at four ordered levels: delegated, shepherded, co-constructed, authored. Whether a natural-language specification is modeling is answered by moving precision to a validation phase; novices explaining generated code succeeded on only a third of tasks (Nguyen et al., 2025). Competence is read under three regimes (supported, unsupported immediately after, delayed transfer at least two weeks later); the **assistance-removal gap** is their difference, predicted to shrink as model authorship rises.

## Verification, design principles, and the evidence audit

**Design for withdrawal.** Six principles operationalize it: problem or concept first, student as specifier, glass-box prompting, verification against the world (only where [[prior-knowledge|prior knowledge]] lets students tell correct from flawed output apart), [[desirable-difficulties|productive friction]], and scaffold fading with reflection. They run through five phases (Frame, Specify, Co-construct, Validate, Reflect and Share), as in a ninth-grade hydrangea-color [[simulation]] the [[llm|model]] coded. The audit of twenty-four studies (2021–2026, Scopus) is gap-locating, not a [[meta-analysis-systematic-review|systematic review]]; its dominant [[research-methods-aied|research]] question has been the tool: the same setup lowered achievement and [[self-efficacy]] (Yang et al., 2025) while error-reflection modules raised [[critical-thinking|higher-order thinking]] and a [[socratic-method|Socratic]] chatbot beat a no-chatbot control (Zhang et al., 2025; Kholis et al., 2026).

## What this means for practice

- **Instructors.** Move [[assessment]] off the artifact: collect specifications, predict-then-test records, oral defenses, or process [[eportfolio|portfolios]].
- **Instructors.** Require a verifiable specification in the learner's own words before any code, and treat candidate specifications as a dosage variable.
- **Instructors.** Judge artifacts against the domain, not whether they run: a [[benchmark]] had generative AI answering secondary physics items at over 80% accuracy while sounding plausible when wrong.
- **Designers.** Withhold the AI at set moments and shrink its role across the unit; support that never recedes produces dependence, not competence.
- **Administrators.** Fund the role shift, which makes [[inquiry-based-learning|prompt-engineering]] skill a precondition, and confirm students can already tell correct from flawed output.

## Limitations

- The paper is a theoretical proposal: none of its six hypotheses has been tested as stated, and its partial-credit model is specified but not calibrated (two raters, 20% of cases, kappa ≥ 0.70).
- The audit of 24 studies (2021–2026) is gap-locating, not a systematic review: one database (Scopus), conference proceedings excluded, 20% double-screened, no quality appraisal.
- The dissociation rests on three randomized studies (nearly a thousand Turkish mathematics students, Bastani et al., 2025; 117 writers, Fan et al., 2025; 1,222 participants, Liu et al., 2026), none using construction tasks.
- The author's boundary conditions narrow the scope: domains must supply an external criterion (physics, chemistry, ecology and epidemiology do; history, literature and ethics largely do not).

## Connected Concepts

- [[generative-ai]]
- [[constructivist]]
- [[computational-thinking]]
- [[self-regulated-learning]]
- [[assessment]]
- [[educational-measurement]]
- [[curriculum-design]]
- [[scaffolding]]
- [[metacognition]]
- [[theory-development-aied]]
- [[cs-education]]
- [[feedback]]
- [[teacher-role]]

## Connected Articles

- [[competency-based-education-genai-production-2026]] — Knowledge, skills, attitudes, production: competency-based education after generative AI
- [[ai-assessment-scale-reform]] — AI assessment scale reform
- [[agency-gap-ai-writing]] — The agency gap in AI writing
- [[pchl-he-framework-genai-content-creation-2026]] — A framework for generative AI content creation in higher education

## Citation

Gousopoulos, D. (2026). [*The AI writes the code, the student writes the model: A theory and measurement programme for learning by construction with generative AI*](https://doi.org/10.20944/preprints202608.0072.v1). Preprints.org.