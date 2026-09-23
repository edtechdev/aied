---
title: Programming Intelligent Tutoring Systems
created: "2026-05-08T04:33:04-04:00"
updated: "2026-09-20T08:26:22-04:00"
type: article
technology: [adaptive-learning, intelligent-tutoring, llm, rag]
assessment: [formative-assessment]
research_method: [system development]
discipline: [stem education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/2604.16117.md']
confidence: medium
---

> **Synthesis:** SCRIPT (Step-based Coding for [[research-methods-aied|Research]] and Intelligent Programming Tutoring) is a novel [[intelligent-tutoring]] system for **Python** programming built at Bielefeld University, targeting advanced undergraduate and early postgraduate computer-science students in data science and [[reinforcement-learning|machine learning]] courses. It is designed as a dual [[teacher-role|teaching]]-and-research platform that records keystroke-level [[learning-analytics]] data, plugs in [[llm]]-based hint mechanisms behind a modular inner/outer-loop pedagogy, and — distinctively — is engineered to conform to the demanding German/EU [[regulation|regulatory]] environment ([[privacy|GDPR]], the EU AI Act, and the German Research Foundation ethics framework). Because it self-hosts an open-weight model rather than invoking commercial LLM APIs, SCRIPT treats [[governance|regulatory compliance]], [[ethics]], and institutional deployment as first-class design constraints rather than afterthoughts.

## Key Findings

1. Prior ITS for programming rarely support **Python** — most focus on Java, C/C++, or block-based languages and target introductory (often [[k-12]]) learners; SCRIPT addresses an advanced-undergraduate, Python/data-science gap.
2. The system adopts a modular **four-models architecture** ([[pedagogy|Pedagogical]], Learner, Domain, and User Interface) with a classic **inner/outer loop**: the outer loop handles next-task selection, the inner loop generates next-step hints.
3. Hint generation is decomposed into a **"Step Generator"** (predicts the next correct program state) and a **"Hint Generator"** (translates that step into a textual hint), both implemented as in-context [[llm]] [[prompt-engineering|prompting]] with prompts available in the [[open-source|open source]] repository.
4. Regulatory compliance drives the design: IP logs are separated from the ITS, students use pseudonymous usernames, keystroke data is recorded only with explicit consent, and a self-hosted open-weight Llama model replaces commercial LLM interfaces to satisfy the GDPR and EU AI Act.

## System Architecture

SCRIPT is delivered as a Docker-hosted web application on the university's own infrastructure. The Angular-based frontend handles all learner interaction while processing happens server-side: **FastAPI** exposes the backend, **MongoDB** stores Python objects directly as JSON documents, and all user code is executed through **Judge0** to guarantee security, fixed compute-resource allocation, and timeouts.

The four models follow the ITS design tradition ([[student-modeling]]):
- **Domain Model** — tasks plus the knowledge components connecting them (a Q-matrix), managing difficulty and task-to-skill relations.
- **Learner Model** — per-learner competency and mastery of knowledge components, derived from UI actions and a [[knowledge-tracing]] algorithm.
- **Pedagogical Model** — implements the inner/outer-loop distinction: the outer loop selects tasks (baseline is a pre-defined [[curriculum-design|curriculum]]), the inner loop produces step-based [[feedback]].
- **User Interface** — the UI shows task descriptions and displays feedback either on submission or when a hint is requested.

Crucially, the learner and pedagogical models are swappable per course or randomly assigned to users for **A/B testing**, and the platform is designed to test different knowledge-tracing models, task-recommendation policies, and [[feedback]] policies.

## LLM-Based Hint Generation

The inner loop treats next-step hints as the framework for step-based feedback, echoing prior [[scaffolding]] approaches in the ITS literature. Generation is split into two modular sub-components:

- **Step Generator** — predicts the learner's next program state in the direction of the correct solution.
- **Hint Generator** — turns the predicted step into a textual hint that narrows the gap between current and required knowledge without disclosing the complete step.

Both are currently implemented via in-context prompting templates for [[llm]] models, already incorporating contextual task information from the domain model. Future iterations plan to fold in learner-model context, revision steps driven by a certainty metric, and LLM-output confidence to improve feedback reliability.

## Regulatory, Ethical, and Deployment Context

SCRIPT's most distinctive contribution is treating the German/EU regulatory environment as a design requirement. Because the system processes student data that could be tied to individuals (e.g. IP addresses), it falls under the **GDPR** ([[privacy]]); the authors strictly separate IP logs from the ITS and require pseudonymous usernames, storing no e-mail addresses. Because it also functions as a [[design-based-research|research platform]], it records fine-grained keystroke-level data — but only after explicit, additional consent, and teachers were barred from server access during the semester so students never felt pressured to participate.

The upcoming EU AI Act classifies some AI-in-education applications as high risk. To stay prepared, SCRIPT **avoids commercial LLM APIs** and instead self-hosts an open-weight **Llama-70b** model — a choice the authors argue also reduces environmental impact, improves scientific reproducibility (exact model versioning), decreases commercial dependence, and lowers privacy and data-security risk. Complying with these norms proved a substantial cost: a semester-long rollout was postponed a year while suitable committee-approved procedures were found.

## Opportunities and Challenges

**Opportunities.** SCRIPT is in an ongoing improvement cycle of feature integration followed by semester-long real-world testing. Planned rollouts include course-long homework support and use as a training/development tool in study projects where students build new features. As a research platform it supports randomized experiments comparing learner models, outer-loop recommendation policies, and hint-presentation strategies for maximal [[learning-gains]].

**Challenges.** Development is driven largely by two PhD students, so workload and keeping pace with fast-moving [[ai-technologies|technologies]] strain research time; and as work-in-progress software, IT security vulnerabilities are likely (a significant pre-Judge0 code-execution vulnerability was found by students). The authors' honest conclusion is that anyone administering [[ai-education|AI education]] systems in an EU (especially German) context should anticipate the substantial compliance effort.

## Future Work

- **Authoring interface** — a component letting teachers edit tasks directly instead of manually uploading task files.
- **Pedagogical model** — testing different next-task recommendation methods, intervention techniques for struggling learners, and validating variations empirically.
- **Learner Model** — a dashboard surfacing learner-model findings, plus improved explainability and interpretability.
- **Evaluation** — A/B testing with pre/post-tests to compare skill gains across pedagogical models once deployed course-long.
- **Open source** — the alpha-stage code is released at the project's GitLab; the authors do not yet recommend it for deployment, only research use.

## What this means for practice

- **Learners.** Use the hint button before reaching for a complete solution: the Step Generator predicts the next program state and the Hint Generator turns it into a hint that narrows the gap to that step without disclosing it, preserving the effort a copied answer removes and supplying individualized feedback where tutor capacity does not scale.
- Opt in deliberately if you want your work to count as research data: keystroke-level recording is switched on only with explicit, additional consent, and SCRIPT remains usable as a pure teaching tool without it.
- Expect guidance anchored to the task's knowledge components rather than to a generic answer key — the system was built because prior programming ITS rarely support Python, and hint content draws on the domain model's task context in an advanced data-science course.
- Self-host an open-weight model rather than calling commercial LLM APIs: SCRIPT hosts open-weight models through Ollama, which the authors argue satisfies the EU AI Act's high-risk expectations while improving reproducibility through exact model versioning, plus privacy and environmental footprint.
- Budget for compliance before deploying, especially in the EU: the authors' own semester-long rollout was postponed for a year while GDPR, EU AI Act, and research-ethics procedures were found and approved, and they advise anyone administering AI education systems under those rules to anticipate the effort.
## Limitations

- The system is at alpha stage and only part of the architecture in the paper's Figures 3 and 4 is implemented; the authors state plainly that it cannot yet be recommended for deployment and is offered for research use.
- The adaptive outer loop is largely future work: the next-step and feedback modules already use task-contextual information, but learner-model context and revision of generated feedback through a certainty metric are described as planned rather than built.
- Data privacy shaped the design and capped the evidence: the authors could not yet implement the system for mandatory task submissions, because coupling submissions to individual student identities would have raised the privacy risks they set out to avoid.
- It is described only for a narrow setting — advanced undergraduate computer science courses in which Python is a new language, focused on data science — and the paper reports no student evaluation or learning-outcome data.

## Connected Concepts

- [[formative-assessment]]
- [[intelligent-tutoring]]
- [[cs-education]]
- [[scaffolding]]
- [[adaptive-learning]]
- [[student-modeling]]
## Connected Articles

- [[golrang-propact-pair-programming-2026]]
- [[agentic-workflows-education]]
- [[socraticode-k12-programming-tutor]]
## Citation

Deriyeva, A., Dannath, J., & Paaßen, B. (2026). [*Programming Intelligent Tutoring Systems*](https://arxiv.org/abs/2604.16117).
