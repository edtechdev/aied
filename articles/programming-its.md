---
title: Programming Intelligent Tutoring Systems
created: "2026-05-08T04:33:04-04:00"
updated: "2026-08-24T12:00:00-04:00"
type: article
tags: [intelligent-tutoring, stem-education, higher-ed, adaptive-learning, formative-assessment, student-misconceptions-conditionals-loops-taxonomy, adaptive-learning-systems, rag, llm]
sources: ['raw/papers/2604.16117.md']
confidence: medium
---

> **Synthesis:** SCRIPT (Step-based Coding for Research and Intelligent Programming Tutoring) is a novel [[intelligent-tutoring]] system for **Python** programming built at Bielefeld University, targeting advanced undergraduate and early postgraduate computer-science students in data science and machine learning courses. It is designed as a dual teaching-and-research platform that records keystroke-level [[learning-analytics]] data, plugs in [[llm]]-based hint mechanisms behind a modular inner/outer-loop pedagogy, and — distinctively — is engineered to conform to the demanding German/EU regulatory environment ([[privacy|GDPR]], the EU AI Act, and the German Research Foundation ethics framework). Because it self-hosts an open-weight model rather than invoking commercial LLM APIs, SCRIPT treats [[governance|regulatory compliance]], [[ethics]], and institutional deployment as first-class design constraints rather than afterthoughts.

## Key Findings

1. Prior ITS for programming rarely support **Python** — most focus on Java, C/C++, or block-based languages and target introductory (often K-12) learners; SCRIPT addresses an advanced-undergraduate, Python/data-science gap.
2. The system adopts a modular **four-models architecture** (Pedagogical, Learner, Domain, and User Interface) with a classic **inner/outer loop**: the outer loop handles next-task selection, the inner loop generates next-step hints.
3. Hint generation is decomposed into a **"Step Generator"** (predicts the next correct program state) and a **"Hint Generator"** (translates that step into a textual hint), both implemented as in-context [[llm]] prompting with prompts available in the open source repository.
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

**Challenges.** Development is driven largely by two PhD students, so workload and keeping pace with fast-moving technologies strain research time; and as work-in-progress software, IT security vulnerabilities are likely (a significant pre-Judge0 code-execution vulnerability was found by students). The authors' honest conclusion is that anyone administering AI education systems in an EU (especially German) context should anticipate the substantial compliance effort.

## Future Work

- **Authoring interface** — a component letting teachers edit tasks directly instead of manually uploading task files.
- **Pedagogical model** — testing different next-task recommendation methods, intervention techniques for struggling learners, and validating variations empirically.
- **Learner Model** — a dashboard surfacing learner-model findings, plus improved explainability and interpretability.
- **Evaluation** — A/B testing with pre/post-tests to compare skill gains across pedagogical models once deployed course-long.
- **Open source** — the alpha-stage code is released at the project's GitLab; the authors do not yet recommend it for deployment, only research use.

## Implications

- **Language-specific scaffolding:** ITS hint strategies must adapt to language idioms (Pythonic vs. Java-esque solutions); Python's dynamic typing and REPL workflow demand different hints than statically-typed languages.
- **Compliance as a design constraint:** satisfying the GDPR, EU AI Act, and research-ethics frameworks is feasible but labor-intensive and can delay deployment by a year; institutions should budget for it.
- **Self-hosted open models:** avoiding commercial LLM APIs is a viable and arguably preferable route for privacy, reproducibility, environmental impact, and data security — even in a research context.
- **Dual teaching-research design:** building consent-gated keystroke data collection into the tool enables rigorous evaluation of tutoring interventions without sacrificing privacy.
- **Scalability:** an ITS can deliver individualized [[feedback]] to large cohorts where human tutors cannot scale, making it a practical response to the [[scaffolding]] demands of practice-intensive programming courses.

## Connected Concepts

- [[formative-assessment]]
- [[intelligent-tutoring]]
- [[cs-education]]
- [[scaffolding]]
- [[adaptive-learning]]
- [[student-modeling]]
## Connected Articles

- [[collaborative-ai-tutoring]]
- [[agentic-workflows-education]]
- [[socraticode-k12-programming-tutor]]
## Citation

Paassen, A.A.D.J.D.B. (2026). [*Programming Intelligent Tutoring Systems*](https://arxiv.org/abs/2604.16117)
