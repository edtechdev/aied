---
title: "Misalignment between educators' testing and end users' behavior: what 17,000+ chatbot messages reveal about AI literacy training for teachers"
created: "2026-11-24T09:35:00-05:00"
updated: "2026-11-24T09:35:00-05:00"
type: article
authors: ["Ruiwei Xiao", "Jiayi Wang", "Miina Koyama", "Yue Wang", "Qing Xiao", "Xinying Hou", "Norman Bier", "John Stamper"]
venue: "arXiv preprint (cs.HC)"
evidence_context: educational
foundations: [ai-literacy, teacher-ai-competency]
pedagogy: [scaffolding, professional-training]
technology: [conversational-ai, prompt-engineering]
methods: [mixed-methods-research, qualitative-research]
ethics: [guardrails, privacy]
discipline: [teacher education]
level: [higher ed]
audience: [instructors, faculty developers, educational technology developers, researchers]
page_kind: [evaluation]
research_method: [thematic analysis]
sources: ["raw/papers/xiao-educators-chatbot-testing-end-users-ailiteracy-2026.md"]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Xiao and colleagues (2026) report an instrumented [[ai-literacy]] course, *AI for Learning*, that trained 87 higher-education educators to build, test, and deploy [[conversational-ai|chatbots]] for their own practice. Because the artifacts were real rather than hypothetical, the authors could analyze the 214 resulting bots and the 17,407 messages in 1,740 conversations spanning February 2025 to July 2026. Three patterns stand out: educators specified what bots should do far more often than what they should not; they adopted templated [[prompt-engineering|prompt components]] while rarely using unsupported strategies such as chain-of-thought; and they tested routine use but seldom iterated, leaving 74% of end users' adversarial use untested. Still, 36 bots (17%) reached end users and 63 (29%) were adopted by peers. The study connects [[teacher-ai-competency|teacher AI competency]] to the behavior of the learners who actually meet what teachers build.

*Asynchronous online course with 87 higher-education educators who each authored at least one chatbot (median 1, range 1–13). [[llm]]-assisted coding of system prompts and conversations, validated against a hand-coded 10% sample; inter-rater reliability κ = 0.77–0.93 across learning outcomes.*

## Key Findings

- **Educators specified capabilities more readily than prohibitions.** Prompts described what the bot should do far more often than what it should not; 71.1% addressed at least one limitation, usually by constraining accuracy or scope (57.2%), while only 32.6% instructed the bot to withhold direct answers.
- **The template did the work the course taught, and stopped there.** Role (88%), context (90%), and workflow (87%) were near-universal; style (66%) and guardrails (50%) appeared less often and were frequently left as the stock text supplied by the starter template.
- **Unsupported prompt strategies rarely transferred.** Few-shot prompting appeared in 31% of prompts (33% of builders); chain-of-thought prompting appeared in five prompts (2%).
- **Testing stayed shallow.** Iterative refinement covered 30 bots (14%), limited evaluation 61 (29%), opportunistic exploration 83 (39%), and no testing 40 (19%), leaving 74% of end users' adversarial use untested.
- **[[ethics]] code was sparse.** Only 40.1% of prompts contained any ethics code, almost entirely diversity and inclusion (39.6%); confidentiality appeared in 1.6%, and 34 prompts (18.2%) addressed neither limitations nor ethics.
- **Most bots were student-facing and tutoring-oriented.** 133 bots (62%) were designed for students; tutoring and coaching was the most common purpose (42.8%), followed by content generation (35.3%) and feedback and improvement (32.1%). [[personalized-learning|Personalization]] (2.7%) and [[learning-analytics|analytics]] or prediction (0.5%) were almost absent.

## What the artifacts show

The course is an unusual research instrument because the deliverable is public. Educators had to produce a working bot on a no-code authoring platform, which means the prompt text, the conversation logs, and the deployment record are all observable. That converts a training evaluation from a [[self-report-measures|self-report]] exercise into an artifact review. Where workshop evaluations typically end with confidence scales, this one can ask whether the prompt an educator wrote contains a guardrail, whether they tried an adversarial input, and whether anyone other than the builder ever used the result.

Two successes and two lessons structure the findings. The successes are uptake and reach: nearly every participant shipped a bot, 34% were aimed at education and [[educational-development|faculty development]], and a substantial minority escaped the classroom — 36 reached end users and 63 were used by peers. The lessons concern depth. Prompt components that came pre-scaffolded in a template were reproduced faithfully, sometimes without being understood: among prompts with no educator-authored style instruction, 96% kept the stock line unchanged, 13% still contained unfilled blanks, and 1% of those unfinished bots were released anyway. Strategies that required the educator to generate something new — a worked example for few-shot, a reasoning instruction for chain-of-thought — largely did not appear.

## The gap between testing and use

The most consequential finding is behavioral. Educators tested their bots, but they tested the cases they had in mind, not the cases their users produced. Three quarters of the adversarial inputs that end users actually sent were never exercised during building. In an environment where chatbots configured with [[guardrails|pedagogical guardrails]] have produced [[learning-gains|learning gains]] and unguarded ones have produced losses, that gap decides what students receive. A bot that behaves well under friendly questioning can fail silently under hostile or off-distribution input, and the builder has no evidence either way.

The authors frame this as a misalignment between the testing an educator imagines and the use an end user makes. It also explains why the prompt-level [[privacy]] and ethics numbers matter: confidentiality appeared in 1.6% of prompts, and nearly a fifth addressed neither limitations nor ethics. For [[higher-ed|higher-education]] staff who build tools students will rely on, those omissions are the difference between a contained pilot and an uncontrolled deployment.

## What this means for practice

- **Faculty developers.** Design training around the parts educators skip, not the parts templates provide. Require at least one unsupported strategy and one adversarial test per bot before the activity ends.
- **Instructors.** Treat prompt components as a baseline, not a finished design. Write your own style and guardrail lines, delete unfilled template slots, and try the inputs your students are most likely to send.
- **Educational technology developers.** Build iteration prompts into authoring platforms — side-by-side comparison, adversarial test suggestions, and visible flags for unfilled fields — so that the hardest steps are supported rather than merely taught.
- **Researchers.** Evaluate AI literacy training through artifacts and logs, not only self-report. Artifact-based measures reveal what participants cannot yet do, which is what training needs to target.

## Limitations

- The sample is 87 volunteers from one asynchronous course, most of them in higher education, so the patterns may not describe [[k-12]] teachers or mandatory training.
- The bots were built on a single no-code platform whose starter template strongly shaped the results; a different tool would change which components are scaffolded.
- Conversation logs cover 1.5 years but end-user traffic is thin for most bots, and only 36 bots reached end users at all, so the adversarial-use figures rest on a subset.
- Coding relied on an LLM pipeline validated against human annotation; agreement was lower for some codes, and meta-prompting could not be observed from prompt text at all.
- Deployment was voluntary, so the 17% reach rate reflects motivation as much as design quality.

## Citation

Xiao, R., Wang, J., Koyama, M., Wang, Y., Xiao, Q., Hou, X., Bier, N., & Stamper, J. (2026). [Misalignment between educators' testing and end users' behavior: what 17,000+ chatbot messages reveal about AI literacy training for teachers](https://arxiv.org/abs/2611.28015). *arXiv preprint arXiv:2611.28015.*
