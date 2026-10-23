---
title: "Analysing Mathematical Communication between Pre-Service Mathematics Teachers and GenAI: A Case Study in Abstract Algebra Course"
created: "2026-10-22T09:29:00-04:00"
updated: "2026-10-22T09:29:00-04:00"
type: article
foundations: [ai-literacy, teacher-ai-competency]
pedagogy: [student-ai-interaction]
technology: [generative-ai, conversational-ai, prompt-engineering]
assessment: [formative-assessment]
methods: [qualitative-research]
research_method: [case study]
discipline: [math education]
level: [higher ed, teacher education]
audience: [faculty developers, instructors, researchers]
sources: ['raw/papers/preservice-math-teachers-genai-communication-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-22"
    agent: hermes-agent
---

> **Synthesis:** Eighteen pre-service mathematics teachers at a public university in Bandung City, Indonesia, spent eight meetings of an Abstract Algebra course solving ring-theory worksheets in dialogue with ChatGPT, and Nurlaelah and colleagues coded the transcripts against seven indicators of mathematical communication on a four-level scale. The design is a qualitative case study of one bounded course, with no comparison group and a single [[prompt-engineering|instructional prompt]] positioning the [[conversational-ai|chatbot]] as a discussion partner that would not hand over solutions. Performance clustered in the developing-to-adequate range but split sharply: 13 of 18 participants reached the adequate level for constructing examples and non-examples, while 14 of 18 sat at the two lowest levels for evaluating the validity of AI responses. The authors read this as a [[teacher-education]] problem rather than a tooling problem — candidates can explore with a [[generative-ai|GenAI]] model but do not yet hold [[agency|epistemic control]] over it — and argue for designs requiring justification, verification, and independent reconstruction of conclusions.

## Key Findings
1. **The cohort landed between developing and adequate, never strong.** Across 18 pre-service teachers and seven indicators, no indicator has a majority at level 4.
2. **Constructing examples was the clearest strength.** Thirteen participants were adequate and one strong on examples, non-examples, and counter-examples, and none needed strengthening.
3. **Validating AI claims was the clearest weakness.** Seven participants needed strengthening and seven were developing on evaluating the validity of mathematical responses; three were adequate and one strong.
4. **Justification and conclusion-writing were also weak.** Twelve of 18 were developing on justifying argument steps and thirteen of 18 on coherent conclusions, with only five and four adequate.
5. **Definitions were stated but not structurally applied.** Ten were developing and eight adequate on interpreting formal definitions, with recurring assumptions that the multiplicative identity is always 1 and the zero element always 0.
6. **Producing evidence and using it came apart.** Participant S2 built a Cayley table, identified 6 as the internal identity, checked zero divisors and found inverses, then accepted ChatGPT's claim that the structure was not a field.

## Design, course, and coding scheme
This is a [[qualitative-research|qualitative case study]] of one bounded course: 18 pre-service mathematics teachers in a [[math-education|department of mathematics education]] at a public university in Bandung City, West Java, Indonesia. There was no comparison group or alternative condition; everyone followed the same sequence and initial prompt. Work ran across eight meetings on ring, subring, field, subfield, ideal, and integral domain, with readings a week ahead and a worksheet driving each dialogue.

The prompt is the study's main instructional lever. Prompt 1 assigns the role: act as a discussion partner, withhold the answer or complete solution, proceed through questions and hints, wait for the student's reply, help them recognize errors without supplying the correction, and continue until they can solve the problem independently. Prompt 2 introduces the task in the same frame; the worked example asks whether H = {0, 2, 4, 6, 8} under addition and multiplication modulo 10 forms a field.

Data were the written transcripts plus completed worksheets, coded against seven indicators on a four-level scale taken from prior work: needing strengthening, developing, adequate, strong. The study describes patterns emerging inside prompted dialogue, not different prompting techniques.

## Where the cohort was strong
Example construction was the standout: 13 adequate and one strong, the authors' most prominent shared strength. Participants reached for numerical examples, Cayley tables, and counter-examples to refute universal statements, often testing numerically before moving to symbols. Terminology and notation came second, with 11 of 18 adequate and none strong; students deployed field, integral domain, prime ideal, maximal ideal, inverse, identity, zero divisor, and subfield alongside symbols and variables, but blurred the line between a structure's internal identity and its parent structure's.

Relationships between algebraic objects and their properties drew 12 adequate and six developing. Participants linked fields to integral domains, inverses to identities, absence of zero divisors to field properties, and prime ideals to quotient rings — evidence, the authors argue, that structures were becoming interconnected systems. The caveat is that examples were generated more reliably than validated against the structure's internal definition.

## Where the cohort was weak
Formal definitions drew ten developing and eight adequate. Participants could recite definitions of fields, integral domains, ideals, subfields, invertible elements, identities, and zero divisors, but several assumed the multiplicative identity is always 1 or the zero element always 0 even under non-standard operations — stating the integral-domain definition correctly, then failing to use the actual additive identity when hunting zero divisors.

Justification was dominated by the developing level: twelve developing, five adequate, one needing strengthening. Answers such as "same", "automatically", "still included", or "continue" marked direction without argument, and ChatGPT often supplied the algebraic expansion and the proof's organization. Validity evaluation was worse: fourteen of the 18 participants were classified as needing strengthening or developing, and some had a correct Cayley table in hand yet accepted a contradictory AI conclusion. Conclusions followed suit — thirteen developing, four adequate — often written or refined by the model. The authors summarize the profile as "strong in exploration, but not yet strong in independent validation and argumentation."

## Six dialogues: control versus delegation
The six transcripts read closely span the range. S3 held its ground when ChatGPT misstated set membership — 4 is even and therefore in the set — and checked internal identities element by element, though the critical stance thinned in longer symbolic proofs. S7 corrected congruence errors, challenged 6 as an identity, and asked whether every element should then have an inverse, yet in a later structure used 0 as the additive identity after 1 had been established.

S16 comes closest to [[scaffolding]] working as intended: ChatGPT sequenced the verification while S16 computed each product, confirmed that 6 preserves every element of H, and derived inverse pairs by modular multiplication. S14 shows the opposite failure — correct internal identities in one structure (additive identity 1, multiplicative identity 0) and no [[transfer-of-learning|transfer]] to the next, where it kept seeking an inverse yielding 1 instead of first establishing the internal identity 6. S2 produced nearly all the evidence for a field and then deferred the verdict to the model. S11 answered "no", "ready", and "continue", leaving strategy and conclusion to ChatGPT; more turns did not mean more mathematical talk.

## What this means for practice
- **Instructors.** Require a justification step before any AI answer is accepted: students name the definition or theorem licensing each line and flag every line the model supplied.
- **Instructors.** Grade the verification trace, not the final answer: the Cayley table, the counter-example attempt, the record of disagreement. S2 shows a correct table coexisting with a wrong accepted conclusion.
- **Instructors.** Have students restate the conclusion and its grounds without the model's wording before the dialogue closes.
- **Researchers.** Code transcripts for epistemic-control events — where a student's own calculation contradicts the model — not turn counts or answer accuracy, which the paper shows are poor proxies.
- **Administrators.** Treat verification and justification as assessable outcomes, not study-skills advice, and fund the redesign that makes them visible.

## Limitations
- The sample is 18 pre-service teachers from one public university in Bandung City, all inside a single Abstract Algebra course, with no comparison group; the authors name this first among transferability limits.
- The paper never names the ChatGPT model or version, and gives no collection window beyond "eight meetings," so every claim is scoped to an unspecified ChatGPT generation.
- No alternative GenAI system was compared, so differences in accuracy and [[pedagogy|pedagogical]] support remain untested.
- The paper's own reporting is inconsistent: the Results call the sixth indicator "Fourteen of the 22 analysis documents" at the two lowest levels while Table 1 and the Discussion give 14 of 18 participants, and the six focal cases are listed as S2, S3, S7, S11, S12, and S14 but narrated as S3, S7, S16, S14, S2, and S11, so S12 has no narrative and S16 is never listed.
- Analysis rests on written dialogue and worksheets only, with no interviews, observations, think-aloud data, or longitudinal follow-up; the authors list all of these as gaps.
- This is version 1, first published 20 October 2026 and marked "awaiting peer review," so no reviewer reports exist; the authors also disclose ChatGPT use for language checking and word-count reduction.

## Citation
Nurlaelah, E., Purniati, T., Bustaren, B. C. R., Suarsana, I. M., Juniantari, M., & Irianto, I. (2026). [*Analysing Mathematical Communication between Pre-Service Mathematics Teachers and GenAI: A Case Study in Abstract Algebra Course*](https://doi.org/10.12688/f1000research.190994.1). F1000Research, 15, 1745.
