---
title: "Teachy Mini: Development and Preliminary Evaluation of a Knowledge-Based Generative Social Robot for Higher Education"
created: "2026-08-13T18:49:42-04:00"
updated: "2026-09-19T10:23:54-04:00"
type: article
foundations: [design-thinking]
technology: [educational-robotics, generative-ai, intelligent-tutoring, llm]
research_method: [system development]
level: [higher ed]
sources: ['raw/papers/vonschallen-teachy-mini-gsr-2026.md']
confidence: high
audience: [instructional designers]
---
> **Synthesis:** Vonschallen, Kaufmann, Oberle, Eyssel, and Schmiedel (2026) operationalize knowledge-based design (KBD) requirements for generative social robots (GSRs) by implementing them in the Reachy Mini robot platform through system [[prompt-engineering|prompting]], [[rag|retrieval-augmented]] generation, and stateful prompt orchestration, producing Teachy Mini — a GSR tutoring system for higher education. Recognizing that GSRs powered by LLMs offer personalized tutoring but also risks (misinformation, missing transparency, reinforcing incorrect responses), the authors conducted a preliminary evaluation study in which participants (N = 24) completed a robot-guided learning session about research methodologies, learning with either the robot or another mode.
## Key Findings
- **Generative social robots (GSRs) powered by LLMs offer new possibilities for personalized tutoring in higher education** but introduce risks related to misinformation, missing transparency, and reinforcing incorrect student responses.
- Prior work identified **knowledge-based design (KBD) requirements** defining the informational prerequisites for GSRs to manifest responsible and effective tutoring behavior.
- The authors **operationalized selected KBD requirements in the Reachy Mini robot platform** through system prompting, retrieval-augmented generation, and stateful prompt orchestration, producing **Teachy Mini**.
- A **preliminary evaluation study (N = 24)** had participants complete a robot-guided learning session about research methodologies, learning with either Teachy Mini or an alternative mode.
## Study Design & Method
This is a **system development and preliminary evaluation study**. The [[research-methods-aied|researchers]] operationalized knowledge-based design requirements for generative social robots by implementing them on the Reachy Mini robot platform using system prompting, retrieval-augmented generation (RAG), and stateful prompt orchestration, building the Teachy Mini tutoring system. A preliminary evaluation study with 24 participants had them complete a robot-guided learning session about research methodologies, comparing learning with Teachy Mini against an alternative mode to assess the system's effectiveness and the value of the KBD approach.
## What this means for practice

- **Designers.** Configure what the robot knows about itself, the learner, and the educational context before tuning model behavior, since the knowledge-based condition was rated significantly more aligned with responsible tutoring behavior than the same robot platform and language model run with reduced knowledge.
- **Designers.** Ground tutoring with [[rag|retrieval-augmented]] generation and stateful prompt orchestration rather than a single system prompt, so claims stay tethered to course material and to the student's current state rather than to model priors.
- **Designers.** Implement and validate the full set of knowledge-based requirements, not a subset: this prototype covered learning materials, personalization, educational strategies, role, friendliness, assertiveness, and conscientiousness but omitted long-term progress, schedules, grades, emotion recognition, and awareness of the physical setting.
- **Researchers.** Plan a longitudinal design with a passive control condition, because acceptance, intrinsic motivation, and learning effectiveness were inconclusive in one short session and almost all participants had no prior experience with the robot, making novelty effects likely.

## Limitations
The evaluation is preliminary with a small sample (N = 24), and the specific comparative [[learning-gains|learning outcomes]] are not fully detailed in the abstract. The system is built on the Reachy Mini platform, so generalizability to other robot platforms and to broader disciplinary content requires further study. The focus is on research-methodology tutoring, and longer-term effects and broader responsible-AI risks warrant additional evaluation.
## Connected Concepts
- [[educational-robotics]]
- [[generative-ai]]
- [[llm]]
- [[higher-ed]]
- [[intelligent-tutoring]]

## Connected Articles
- [[knowledge-based-design-generative-social-robots-2026]] — Knowledge-Based Design Requirements for GSRs
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of AI-enhanced embodied robot-assisted language learning
- [[task-context-trust-educational-hri-2026]] — Task Context and Trust in Educational HRI
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
## Citation

Vonschallen, S., Kaufmann, K., Oberle, D., Eyssel, F., & Schmiedel, T. (2026). [*Teachy Mini: Development and preliminary evaluation of a knowledge-based generative social robot for higher education*](https://arxiv.org/abs/2607.22345).
