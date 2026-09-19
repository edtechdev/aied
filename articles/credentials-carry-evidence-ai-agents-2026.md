---
title: "Credentials That Carry Their Evidence: Credential design, dynamic tiering, and approved use when AI agents can do the work"
created: "2026-08-24T09:10:00-04:00"
updated: "2026-09-19T09:11:03-04:00"
type: article
foundations: [academic-integrity, agentic-ai]
technology: [generative-ai, edtech-platform]
assessment: [assessment]
research_method: [theoretical analysis]
level: [higher ed]
sources: ['raw/papers/credentials-carry-evidence-ai-agents-2026.md']
confidence: high
audience: [institutions, assessment designers, policymakers]
---

> **Synthesis:** Srivastava (2026) argues that when an [[agentic-ai|AI agent]] can complete an online course on a student's behalf, a credential that says "earned" loses its meaning, and that the standard remedy — proving a human did the work through identity checks and proctoring — is fragile and targets the wrong quantity. The paper proposes that credentials retain value only if they carry **evidence of the reasoning** that produced them, captured while learning happens and inspectable by someone other than the issuing institution. It advances three design elements: the credential as a **claim plus a verifiable receipt** (an inspectable, independently verifiable record of what was observed, hashed against alteration); **dynamic tiering**, in which the same skill is certified as *unaided*, *directed*, or *attested* and can be upgraded or lapse as evidence accrues; and **declarations of approved use**, under which agent use is permitted and measured rather than prohibited and policed. The organizing principle is that a credential's value comes from what can be [[assessment|inspected]], not from who signed it.

The paper opens from reporting that students in 2026 used [[agentic-ai|AI agents]] to log into learning platforms and complete entire online courses in the background. It reframes the reaction from a [[academic-integrity|cheating problem]] to a [[assessment-validity|signaling problem]]: a degree is valuable partly because it signals that a person spent time acquiring hard skills (Spence's signaling), and when an agent can produce the same credential without the human learning, the credential no longer separates those who learned from those who did not — an instance of Akerlof's "lemons" condition in which quality uncertainty drives good products out of the market. [[ai-education|AI-mediated education]] makes this acute at the leading edge of online assessment, but the mechanism is general.

## Why identity verification cannot restore the signal

The natural response is to prove a human did the work: identity checks, [[remote-proctoring|proctoring]], agent watermarks, verifiable agent identities. Some are useful; none restore the signal. First, they are contests the verifier tends to lose over time — a student who wants to pass identity checks while an agent works can arrange to be present. Second and more fundamentally, identity is the wrong quantity: knowing a particular human was at the keyboard tells an employer nothing about whether that human can do what the credential names. The value of the credential was never that a person was present, but that a person learned. Framed through Kane's validity argument, the credential rests on a [[assessment-validity|chain of inferences]] from observed performance to score to domain to capability to the employer's decision; agents break the first link, so repair must target the observation itself rather than the paperwork around it.

Three properties make an observation hold up when agents are available: it is **contemporaneous** (captured while learning happens — predictions made, tests run, explanations given, revisions after being wrong — not inferred afterward from a finished artifact an agent could produce); **inspectable** (every claim traces to specific evidence, and the rule turning evidence into an estimate is published with reference cases so a verifier can reproduce it); and **independently verifiable** (the checking party is not the issuer nor the builder of the learning environment, mirroring the auditor/issuer separation that makes audited financial statements credible). None requires agents to be absent; they require the human's reasoning to be observed and the observation to be checkable.

## A claim plus a receipt

Today a credential is a claim: "this person earned this." The proposal is that a credential become a **claim plus a receipt** — a structured record of what was observed, when, and under what conditions and permissions, with the evidence chain hashed so it cannot be altered after the fact, plus a verifier any third party can run. Evidence and any estimates built on it are kept as separate chains, so a learning environment can produce evidence without producing a score, and different parties can layer their own estimates on the same evidence. The credential stays short and readable; the receipt gives it weight, so an employer, accreditor, or licensing board wanting more than the summary can ask for and check the record.

The analogy is a pilot's logbook rather than a pilot's license: the license says "may fly," but the logbook records hours, aircraft, conditions, maneuvers, and sign-offs, and it is the logbook an insurer or airline actually reads. Education has issued licenses without logbooks; agents make the logbook necessary. Design consequences follow: the evidence schema must be open so receipts from different institutions and environments are readable by the same verifier; the verifier must be open too; the learner must control [[privacy|disclosure]] (the receipt exists to be presented, not harvested); and the receipt should record conditions including which tools were permitted, because a claim without its conditions cannot be interpreted.

## Dynamic tiering

A pass/fail credential forces one answer to a question that now has several honest ones. The proposal is that the same skill be certifiable at three strengths stated on the credential. **Unaided** means reasoning evidence was captured with no external tool or agent permitted and is inspectable — the strongest claim and most expensive to produce. **Directed** means agents or tools were permitted and the evidence shows the human directing them (choosing the approach, checking and correcting output, explaining why); a learner who drives an agent well leaves a different trace from one who is driven. **Attested** means the work was completed with no reasoning evidence captured — what most online credentials are today; naming it honestly lets the market price it rather than discounting everything.

The tiering is dynamic in two directions. A credential can be **upgraded**: a learner holding an attested credential can sit an unaided or directed session later and add stronger evidence to the same record. And a credential can **lapse or be flagged for renewal**: skills not exercised decay, and a receipt recording when evidence was last observed lets an employer weigh recency rather than letting the credential pretend a years-old demonstration is current. This mirrors how professions already handle competence through currency requirements and recertification. Employers need only three words on the credential and the option to look further; institutions need only say which tier they issue.

## Approved use

The instinct to prohibit agents is understandable but will fail, recreating the identity contest under another name. The alternative is to declare, per assessment, which uses are permitted and to make the human's contribution inside that permission the thing that is measured. Approved use is a specification of conditions, not a loophole. Under it, the receipt records the [[educational-policy-ai|policy]] that applied as a consent-and-attestation block in the record itself, along with evidence of the human's work within it, so a verifier can check not only that reasoning happened but that it happened under the declared conditions — did the learner set the goal or accept the agent's, test the output or submit it, notice and correct errors? These observable behaviors distinguish the driver from the passenger more reliably than any attempt to detect whether an agent was present. Where safety is at stake (a licensing examination), the policy says so, the environment enforces it, and the credential is issued at that tier; where a task is better done with tools, the policy and credential say what was measured. The effect is to replace "Was an agent used?" — unanswerable at scale and beside the point — with "What did the human demonstrably do?", which is measurable, disclosable, and worth paying for.

The infrastructure this requires is not exotic: learning environments that emit structured evidence of reasoning as it happens; an open evidence schema and verifier so receipts are portable and checks reproducible; institutional separation between environment, issuer, and verifier; and measurement engines that have themselves been audited against known truth, with audits published whether or not they flatter the engine. The paper also scopes what it does not solve: compromised environments can still defeat evidence capture; contemporaneous evidence is easier in [[simulation]] and interactive learning than in extended written work; observation carries [[equity-in-ai-education|equity]] and [[privacy]] costs (learner-controlled, minimal-by-default disclosure is necessary); tiering can be gamed by weak certification; and standards bodies, not vendors, should own the schema. The [[governance]] and [[ethics]] of such systems, along with the [[assessment-validity|validity arguments]] of Messick, Kane, and others, apply with particular force — including warnings against circular validation in which one model certifies another.

## Key Findings

1. **A credential's value is a signaling quantity, not a presence quantity.** When an [[agentic-ai|agent]] can reproduce a credential without the human learning, the credential can no longer separate those who learned from those who did not, invoking Akerlof's lemons condition. Identity checks and proctoring fail on both counts: they are losing contests and they measure the wrong thing (that a person was present rather than that they learned).
2. **Evidence must be contemporaneous, inspectable, and independently verifiable.** Repair targets the observation of learning itself, not the paperwork around it — capturing predictions, test runs, explanations, and revisions *while* they happen, with published rules and a verifier separate from both issuer and environment builder.
3. **A credential becomes a claim plus a receipt.** The receipt is a hashed, structured record of what was observed, when, and under what conditions, kept as a separate chain from any score so that different parties can layer their own estimates on shared evidence. Analogy: the pilot's logbook, not the pilot's license.
4. **Dynamic tiering prices three honest states.** *Unaided*, *directed*, and *attested* certify increasingly weaker evidence of human reasoning, and tiers can upgrade or lapse as evidence accrues or decays, mirroring recertification in the professions.
5. **Approved use beats prohibition.** Declaring, per assessment, which agent uses are permitted turns "Was an agent used?" (unanswerable) into "What did the human demonstrably do?" (measurable and worth paying for), recorded in the receipt's consent-and-attestation block.

## What this means for practice

- **Institutions.** Issue the credential as a claim plus a hashed, inspectable receipt of what was observed, when, and under what conditions, rather than investing further in identity checks and [[remote-proctoring|proctoring]] that a student can pass while an agent does the work.
- **Assessment designers.** Capture reasoning contemporaneously — predictions, test runs, explanations, and revisions after being wrong — and publish the rule that turns evidence into an estimate, with reference cases, so a verifier can recompute it from the record alone.
- **Institutions.** Separate the environment that produces evidence, the issuer that summarizes it, and the verifier that checks it; the paper argues the developer of a learning system should never be its sole grader.
- **Policymakers.** Declare approved use for each [[assessment|assessment]] and record it as a consent-and-attestation block in the receipt, replacing "was an agent used?" with the measurable question "what did the human demonstrably do?".
- **Institutions.** State the tier on every credential — *unaided*, *directed*, or *attested* — allow learners to upgrade a credential with later evidence, and let a stale tier lapse rather than presenting an old demonstration as current — naming *attested* honestly lets the market price it instead of discounting every credential; keep disclosure learner-controlled and minimal by default, since reasoning traces carry [[privacy]] and [[equity-in-ai-education|equity]] costs.

## Limitations

- The paper is a position statement with no empirical study of its own; the author states that its claims are design arguments rather than findings, so the three design elements are proposals whose effect on credential value is untested.
- The author discloses a conflict of interest as founder of Quantum Learning Machines, which develops measurement infrastructure of the kind proposed, including an open evidence schema and verifier; the argument is advanced by an interested party and cites an audit of the author's own measurement engine.
- Evidence capture can be defeated if the environment itself is compromised — the design raises the cost of fabrication rather than eliminating it — and contemporaneous reasoning evidence is easier to obtain in simulation and interactive learning than in extended written work; tiering can be gamed by institutions that certify everything at the weakest tier, observation of reasoning carries equity and privacy costs that the paper assigns to policy work rather than mechanism, and the question of who owns the schema (standards bodies rather than vendors, the author argues) is left open.

- The paper's own warnings bound the proposal: the credential rests on a [[assessment-validity|chain of inferences]] in which agents break the first link, and it insists the measurement layers must be validated with the same rigor as the assessments they replace, including avoiding circular validation in which one model certifies another.

## Connected Concepts

- [[assessment]]
- [[academic-integrity]]
- [[higher-ed]]
- [[edtech-platform]]
- [[generative-ai]]
- [[agentic-ai]]
- [[governance]]
- [[ai-education]]
- [[automated-assessment]]
- [[ethics]]

## Connected Articles

- [[competency-based-education-genai-production-2026]] — Knowledge, Skills, Attitudes, Production: Competency-Based Education After Generative AI
- [[institutional-governance-ai-universities]] — Policy Fragmentation or Institutional Alignment? Institutional Governance of AI in Universities and Business Schools
- [[detecting-llm-generated-text-latent-prompt]] — Once a Response, Always a Response: Detecting LLM-generated Text via Latent Prompt Restoration
- [[valid-student-simulation-llm-2026]] — Toward Valid Student Simulation with Large Language Models
- [[ai-grading-handwritten-physics-2026]] — Large Scale AI Grading of Handwritten Physics Assessments

## Citation

Srivastava, S. (2026). [*Credentials That Carry Their Evidence: Credential design, dynamic tiering, and approved use when AI agents can do the work*](https://osf.io/preprints/edarxiv/63rea_v1/). EdArXiv preprint.
