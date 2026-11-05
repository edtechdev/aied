---
title: "Declared, Not Detected: A Blockchain-Anchored, Agentic Framework for Academic Integrity in the Generative AI Era"
created: "2026-11-05T15:30:00-05:00"
updated: "2026-11-05T15:30:00-05:00"
type: article
sources: ['raw/papers/rahmeh-declared-not-detected-blockchain-integrity-2026.md']
confidence: medium
page_kind: [synthesis]
research_method: [theoretical analysis, system development]
audience: [researchers, instructors]
level: [higher ed]
technology: [generative-ai]
ethics: [ai-use-disclosure]
assessment: [assessment-validity]
foundations: [ai-education, academic-integrity]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Rahmeh and colleagues propose SCRIBE, a conceptual framework that replaces post hoc [[ai-detection|AI detection]] with a declared, process-anchored account of authorship. Students declare an assistance level and attest to their own authorship; an instrumented editor commits process digests to a permissioned ledger; seven smart contracts encode a due-process procedure; four agents prepare cases that a human panel decides. The authors evaluate the design as mechanism verification on 60,000 synthetic submissions whose behavior classes and probe response rates are stated assumptions. Within a 0.5% false-accusation budget their model refers 30.6% of misdeclarations at 97.1% precision. These are outputs of a specified model, not measured performance with real students.

## Key Findings
1. **The offence is reframed as misdeclaration.** SCRIBE pairs a five-level assistance ladder with a signed attestation of own authorship, so the reportable act is a declaration that does not match how the work was produced rather than the use of a tool.
2. **The procedure is encoded, not promised.** Seven smart contracts bind the declaration to policy versions, deadlines, panel decisions, and appeals; the authors report that all 59 contract tests pass, each procedural guarantee having a named adverse-path test.
3. **Within a 0.5% budget, recall is modest and precision high.** In the synthetic test partition SCRIBE refers 30.6% of misdeclarations at 97.1% precision, with a measured false accusation rate of 0.33% — 73 of 22,131 truthful submissions — whereas a simulated detector refers 0.3% at the same budget.
4. **Process evidence has a hard ceiling.** The process channel's likelihood ratio saturates at 4.29 against prior odds of 0.356, so process evidence alone cannot exceed a posterior of 0.604, below the 0.837 referral threshold; without the oral probe, SCRIBE refers no case at all.
5. **Evasion splits into two very different threats.** Retyping purchased text leaves referral essentially unchanged at 30.7%, but replaying a plausible writing trace cuts it to 7.2%; bypassing the editor unexpectedly raises referral to 36.4%, though under a 20% oral-capacity limit it falls to 22.9%.
6. **The equity gain is real but incomplete.** The simulated detector wrongly accuses 61.7% of the least fluent writers at its default threshold, against 0.71% for SCRIBE and 0.44% under a fluency-aware rubric; the residual between-group ratio is 3.9.

## The design: declaration, ledger, adjudication

The framework starts from a claim the authors defend at length: authorship cannot be established from the text itself, and no classifier improvement will change that. Detector evidence is treated as unreliable by design: accuracy collapses under paraphrase, false positives concentrate on writers of English as an additional language, and evasion reduces accuracy to near chance.

The authoring layer runs on the student's device and divides a session into fixed windows. It computes aggregate statistics per window, never transmits raw keystrokes, assembles window digests into a Merkle tree, and sends only the root to the ledger; contents stay encrypted locally and are released selectively for disputed windows. The declaration layer commits a per-segment assistance level, and the ledger seals artifact, trace head, declaration, and policy version into one bundle.

Adjudication separates preparation from decision. A provenance agent estimates whether a passage was composed in the editor; an advocate constructs the strongest innocent account, including accommodation and offline-drafting explanations; a viva agent probes the student on disputed passages; a chair combines the channels and may abstain. No agent can decide a case. The contract layer bars an account holding the agent role from deciding, requires a committed report before any adverse finding, reverts decisions while the response window is open, and prevents the opener from deciding or the decider from hearing the appeal.

## What the synthetic model shows, and what it cannot

The evaluation is explicitly a mechanism-verification exercise. The cohort is 10,000 simulated students with six tasks each, giving 60,000 submissions and 480,000 segments, split by identity into training, calibration, and test partitions. Seven behavior classes carry fixed prevalences, and five evasion tiers are applied to the concealing classes.

The comparison holds false accusation at or below 0.5%, each system choosing its threshold. SCRIBE recovers 30.6% of misdeclarations; a detector recovers 0.3%. At its default threshold the detector recovers 47.5% but wrongly refers 4,703 truthful submissions, and treating the process score as a verdict recovers 67.5% while wrongly referring 4,854.

Because honest offline drafters are numerous among submissions whose text arrived from outside, the process channel cannot carry a referral on its own — the ceiling of 0.604 sits below the 0.837 threshold. Removing the oral probe drives recall to zero. The oral channel is therefore the load-bearing component, and its parameters are assumptions: recall ranges from 5.0% to 52.3% across the original response-rate grid, and from 0.9% to 54.6% on the wider grid. Extending a probe from two questions to twelve raises recall from 19.1% to 45.9%.

## Where the mechanism fails

The authors report their own weak points with unusual directness. Concealed light editing is recovered at only 9.4%, because assisted revision leaves almost no process signature. Honest offline drafters are referred at 1.8%, and honest students who work outside the editor at 2.01%, roughly six times the cohort rate — the clearest inequity the design produces. The advocate, introduced to protect exactly that group, changes nothing at several probe lengths and depends on threshold placement for its effect.

Replay is the structural threat. A student who synthesizes a personal trace from a writing profile defeats the process channel even at crude fidelity, and no refinement of the instrument restores it. Proxy authorship is worse: a paid writer working inside the student's session produces a genuine trace and a consistent declaration, leaving only the oral probe. The proposed continuous authorship verification channel is described but not implemented or evaluated.

The ledger's contribution is also narrower than the framing suggests. For a single institution, the authors' own comparison finds that a witnessed append-only log matches four of the six procedural guarantees at lower complexity; the permissioned ledger earns its place mainly in multi-institution consortia where no party is trusted to operate the record. Deployment costs 6,237,670 gas, an uncontested submission 789,902 gas, and a contested one run to decision 1,351,928 gas. The binding cost is staffing: 31.4% of submissions are probed at the primary operating point, about 79 staff hours per 1,000 submissions.

## What this means for practice

- **Stop treating detector output as evidence.** The paper's policy argument is that a score cannot support an allegation a student has no way to inspect; institutions should say so in published policy and design assessment around declared assistance instead.
- **Fund oral verification as the primary channel.** Because process evidence cannot exceed a posterior of 0.604 on its own, the probe does the adjudicative work; a 10% to 20% capacity cap captures much of the achievable recall at roughly 25 to 50 staff hours per 1,000 submissions.
- **Watch who absorbs the errors.** The least fluent writers move from a 61.7% false accusation rate under the simulated detector to 0.71%, but a 3.9 ratio remains; rubrics must assess content understanding rather than fluency, and offline workflows need onboarding rather than suspicion.

## Limitations

- This is a conceptual design proposal, not an outcome study: all 60,000 submissions are synthetic, and every reported rate is an output of the authors' stated model rather than measured performance with real students.
- The oral channel is simulated and is the largest source of uncertainty; no published source fixes its response rates, recall spans 5.0% to 52.3% across the grid, and a frozen threshold can breach the false-accusation budget when true author accuracy is lower than assumed.
- The provenance model's near-perfect discrimination is a property of the generator, in which pasting and typing differ by construction; the authors state the figure says nothing about real editor telemetry.
- Proxy authorship is structurally unaddressed, and the proposed keystroke-dynamics channel is neither implemented nor evaluated; a determined essay mill would attack the remaining oral assumption directly.
- The detector baseline is a simulation calibrated to published characteristics rather than a real product, results come from a single generator seed, gas was measured on a local Ethereum Virtual Machine without a public testnet, and the registrar role retains unconstrained authority in the prototype.

## Citation

Rahmeh, O. A., Deebajah, M., Siyam, N., Abdul-Rahman, H. S., & Gdeisat, M. (2026). [*Declared, Not Detected: A Blockchain-Anchored, Agentic Framework for Academic Integrity in the Generative AI Era*](https://doi.org/10.3390/info17111094). *Information*, 17(11), 1094.
