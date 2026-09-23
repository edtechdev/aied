---
title: "Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named"
created: "2026-05-28T04:33:04-04:00"
updated: "2026-09-19T07:42:07-04:00"
type: article
foundations: [agentic-ai, ai-literacy]
technology: [generative-ai, llm]
ethics: [equity-in-ai-education, ethics, trust-calibration]
audience: [researchers, instructors]
research_method: [theoretical analysis]
level: [higher ed, k 12]
sources: ['raw/papers/2605.27396.md']
confidence: high
institutions: [educational-policy-ai, governance]
---

> **Synthesis:** Nama (2026) names **agentic literacy debt** — the accumulating societal deficit that grows when [[agentic-ai|agentic AI]] systems are deployed at scale without corresponding [[ai-literacy|literacy infrastructure]]. Existing AI literacy frameworks were built for a world of *tools* where humans evaluate outputs and decide; autonomous AI agents instead *plan, decide, and act* without step-by-step approval, breaking the three assumptions (evaluation, reversibility, control) every current literacy model depends on. The debt compounds through three reinforcing channels (normalization of opaque delegation, multi-agent ecosystem complexity, institutional path dependence), is **incurred by deploying organizations but paid by users, patients, and citizens**, and demands reframing AI literacy from an *evaluative* competency to a *[[governance]]* capability.

## From Tool to Agent: The Assumptions That Break

AI literacy frameworks (Long & Magerko 2020; UNESCO 2024; MAILS; the AI Literacy Heptagon) assume a human who queries, reads, and decides. Agentic AI creates a different human: a **principal who has delegated authority** to a system whose actions may not be observable, reversible, or controllable. When an agent executes action chains across email, calendar, payments, and external services, the user is no longer an evaluator of anything. Three assumptions break at once, and no existing framework addresses any of them:

1. **Evaluation is possible** — the user sees an output and judges it. Agentic systems produce action chains most of which the user never observes.
2. **Reversibility** — a bad decision can be reconsidered before consequence. Agents can transfer money, send messages, and delete records in milliseconds, none of it recoverable by user competence.
3. **Control** — the user remains the agent of action, the AI merely an informant. Agentic systems invert this, acting while the user becomes a principal with authority but without visibility.

## The Three Compounding Channels

Borrowing from software engineering's *technical debt* (and extending Ladson-Billings' "education debt" and Petrozzino's "ethical debt"), the debt compounds through three reinforcing channels:

1. **Normalization of opaque delegation** — each opaque delegation habituates users to granting permissions without scrutiny, lowering the threshold for the next. Permission grants are typically inherited across sessions and rarely revoked, producing a ratchet effect that quietly expands the agent's access surface.
2. **Multi-agent ecosystem complexity** — each new [[agentic-ai|agent]] interacts with previously deployed agents and services, producing multi-agent chains harder to oversee than any individual system.
3. **Institutional path dependence** — organizations that skip literacy infrastructure for one deployment build no capacity to provide it for the next; retrofitting costs grow with each iteration.

Unlike ethical debt (incurred at the point of *design*), agentic literacy debt is incurred at the point of **deployment** and compounds with every user interaction that occurs without adequate literacy infrastructure. Critically, it is **paid by the users, patients, consumers, and citizens the agents act upon** — an asymmetry that makes it an [[ethics|AI-ethics]] problem, not merely an educational one.

## Evidence the Gap Is Already Consequential

- **Security ([[guardrails|prompt injection]]):** The OpenClaw "walletdrain" attacks and the EchoLeak vulnerability (CVE-2025-32711) showed agents manipulated through data channels users never see — no AI literacy [[curriculum-design|curriculum]] teaches users to anticipate, monitor, or contest this. Indirect [[guardrails|prompt injection]] is OWASP's number-one production [[llm]] risk.
- **Healthcare:** [[agentic-ai|Agentic AI]] for triage/scheduling is expanding rapidly (~\$538M market in 2024), yet users systematically overtrust AI medical advice despite low accuracy, and [[trust-calibration|trust calibration]] failures carry higher stakes when agents act rather than advise.
- **Fraud:** [[generative-ai|GenAI]]-enabled banking fraud losses are projected at \$22–40B by 2027; attacks increasingly target the agents acting on users' behalf, bypassing the user entirely.
- **[[digital-divide|Global equity]]:** Populations most exposed to the literacy gap (e.g., lower rural internet access in Asia-Pacific) are also least served by AI literacy [[research-methods-aied|research]] — no AI literacy scale has been tested for cross-cultural validity.

## Structural, Not a Temporary Lag

The gap is structural because deployment speed (product cycles in months) far outpaces institutional learning systems (curriculum updates over 5–7 years). It is also **designed in**: production agents generate action logs built for developer debugging, not user comprehension, and authorization flows are a single "Allow" button with no scope granularity, no explanation, and no visible revocation mechanism.

## The Governance Reframing

The EU AI Act Article 4 creates the world's first binding [[ai-literacy|AI literacy]] obligation, yet its guidance doesn't specify what literacy means in agentic contexts. Nama argues literacy must shift from evaluative to [[governance]] — from "can you spot AI errors?" to "do you understand what you've delegated, and can you contest it?" This requires new **principal-side competencies**:

- **Delegation** — understanding what authority one is granting
- **Oversight** — monitoring and constraining agent actions
- **Accountability attribution** — understanding who is responsible when harm occurs
- **Attack surface awareness** — recognizing agents can be manipulated through the data they process
- **Agent-specific [[privacy|informed consent]]** — knowing when an agent rather than a human is acting
- **[[trust-calibration|Calibrated trust]]** — recognizing when both undertrust and overtrust are failures of informed [[student-engagement|engagement]]

These are structurally new competencies, not refinements. Design defaults are literacy interventions whether or not they are intended as such; transparency-by-design, [[intelligent-tutoring|AI tutoring]] that simulates agentic scenarios, and contextual micro-learning at the point of risk could help close the debt — but only if user literacy is treated as a first-class design objective.

## What this means for practice

- **Researchers.** Add agentic delegation concepts — delegation, oversight, accountability attribution, attack-surface awareness, agent-specific informed consent, calibrated trust — to AI literacy instruments, and test any scale for cross-cultural validity, since none currently has been.
- **Instructors.** Teach learners to interrogate what an agent has been authorized to do and to contest its actions, rather than training only error-spotting on outputs, because production agents act in milliseconds and most actions are never observed.
- **Administrators.** Treat deployment-time literacy infrastructure as a precondition for deploying [[agentic-ai|agents]], not a downstream training task: deploying organizations incur the debt while users, patients, and citizens pay it.
- **Designers.** Ship scope-granular permissions, visible revocation, and contextual micro-learning at the point of risk, because design defaults function as literacy interventions whether or not they are intended as such.

## Limitations

- This is a conceptual position paper with no empirical study of its own; the author states that direct evidence of agentic-specific harms is still emerging, so the supporting evidence from healthcare, fraud, and security is illustrative rather than systematic.
- The three compounding channels (opaque delegation, multi-agent complexity, institutional path dependence) are offered as a theoretical mechanism with no longitudinal data quantifying accumulation or the described ratchet effect.
- The principal-side competencies it proposes are unvalidated: no instrument measures them, and the paper notes that no AI literacy measurement scale has been tested for cross-cultural validity.
- The governance argument rests on the EU AI Act Article 4 obligation as a policy anchor, but the paper evaluates neither whether such mandates change literacy outcomes nor the costs of the design and policy changes it recommends.

## Connected Concepts

- [[ai-literacy]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[governance]]
- [[trust-calibration]]
- [[trust]]
- [[ethics]]
- [[privacy]]
- [[human-in-the-loop-ai]]
- [[k-12]]
- [[higher-ed]]
- [[educational-policy-ai]]

## Connected Articles

- [[genai-minoritized-knowledges-disability]] — Who bears the costs of AI deployment (knowledge/equity framing)
- [[digital-literacy-illusion]] — Students overestimate their AI readiness
- [[student-rationalization-ai-writing]] — Student rationalization of AI use in academic writing
- [[ethical-ai-higher-ed-game-theory]] — Coordination game framework for ethical AI use
- [[beyond-detection-authentic-assessment-ai-2025]] — Redesigning authentic assessment beyond detection
- [[prompt-injection-defenses-educational-llm-tutors]] — Prompt injection defenses for educational LLM tutors

## Citation

Nama, R. (2026). [*Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named*](https://arxiv.org/abs/2605.27396). *AI & Ethics*.
