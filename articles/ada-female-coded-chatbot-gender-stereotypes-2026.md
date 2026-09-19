---
title: "Bridging the Gender Gap in STEM Education with AI: Female-Coded Chatbot as Role Model and Learning Assistant"
created: "2026-09-05T06:04:05-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
pedagogy: [motivation, self-efficacy]
technology: [conversational-ai, intelligent-tutoring]
stakeholders: [student-experience]
ethics: [equity-in-ai-education]
sources: ['raw/papers/ada-female-coded-chatbot-gender-stereotypes-2026.md']
confidence: high
research_method: [quasi-experiment, system development]
discipline: [math education, stem education]
audience: [educators, edtech designers]
level: [secondary, k 12]
---

> **Synthesis:** **Bridging the Gender Gap in [[stem-education|STEM Education]] with AI: Female-Coded Chatbot as Role Model and Learning Assistant** — This quasi-experimental study (*N* = 195 ninth-grade German students) tested whether ADA, a female-coded, [[discipline-specific-aied|domain-specific]] [[conversational-ai|AI chatbot]] built on GPT-4 and purpose-designed as both a digital role model and a [[intelligent-tutoring|learning assistant]], could reduce [[math-education|mathematics]] [[equity-in-ai-education|gender stereotypes]] while sustaining equitable learning outcomes. Compared with printed help cards on the Heron method, the chatbot significantly reduced gender-stereotypical beliefs about mathematical ability and mathematics as a male domain for both genders, with high and gender-neutral technological acceptance. It also raised [[student-engagement|situational interest]] for both genders without introducing gender differences in [[motivation|emotional responses]], cognitive load, or [[learning-gains|academic performance]] — evidence that deliberately gender-coded, systematically designed AI [[student-ai-interaction|chatbots]] can function as scalable [[pedagogy|pedagogical]] tools that simultaneously challenge stereotypes and promote [[self-efficacy|equitable learning efficacy]].

## Key Findings

- **Reduced math gender stereotypes in both genders.** Using a female-coded chatbot modeled on Ada Lovelace's persona, students in the experimental group showed significant group-by-time reductions in beliefs about relative mathematical ability (RMA; females *F*(1,89)=10.63, males *F*(1,102)=14.54) and perceptions of mathematics as a male domain (MMD; females *F*(1,89)=5.85, males *F*(1,102)=11.27), while the control group remained stable. Effect sizes were small but meaningful (η²G = .005–.017), and the effects did **not** differ significantly between genders (RQ2) — important because male peers' stereotypes can suppress female classmates' performance and self-concept.
- **High, gender-neutral technological acceptance (RQ3).** Perceived ease of use, usefulness, competence, and attitudes toward use all scored high and statistically indistinguishable across genders (all *p* > .68), countering prior findings that gendered virtual agents can lower perceived competence. Gender-neutral acceptance is critical because perceived competence is a primary driver of role-model effectiveness in cultivating STEM enthusiasm and self-efficacy.
- **ADA as a dual-function digital role model and tutor.** The chatbot combined a system prompt encoding [[self-efficacy|role-model mechanisms]] (growth mindset, warmth, genuine enthusiasm, gender-inclusive phrasing, [[socratic-method|Socratic questioning]]) with [[rag|retrieval-augmented]] generation (RAG) over a curated, [[curriculum-design|curriculum]]-aligned knowledge base on the Heron method to reduce [[hallucination-risk|hallucination]]. Its persona was deliberately grounded in Ada Lovelace to embody competence and resilience in a male-dominated field while using non-dramatizing, non-categorical gender representation to avoid stereotype-threat backfire.
- **Situational interest rose for both genders with no gender difference.** Medium effect sizes favored the experimental group for both females and males (both *p* < .05), with within-group gender comparisons non-significant — evidence that a custom chatbot can promote interest in mathematics without favoring one gender.
- **Equitable learning performance.** Despite the control group's significant baseline advantage in [[prior-knowledge|prior knowledge]], experimental-group students of both genders reached comparable post-test performance, with no significant group-by-time or gender interactions. Emotional responses trended positive but non-significant, with no gender disparities.
- **No alienation of male students from a female-coded agent.** The gender-stratified design directly tested the open risk that a female-coded agent alienates male learners; results showed male students engaged with the chatbot (comparable message counts across genders) and experienced the same stereotype reduction and learning gains.
- **Short-term, in-class feasibility.** The intervention embedded in three consecutive regular mathematics lessons (GPT-4 via a privacy-compliant, GDPR-aligned school AI platform) illustrates the practical scalability of custom, curriculum-synchronized chatbots for gender-equity goals in authentic classroom settings.

## What this means for practice

- **Instructors.** Run a female-coded, curriculum-synced chatbot for a short block of consecutive lessons rather than a one-off demonstration: three mathematics lessons were sufficient to shift stereotypical beliefs for both genders, and the authors attribute this to embedding the tool inside ordinary instruction.
- **Instructors.** Leave usage unprescribed so students self-serve on demand — engagement in the experimental group ranged from 5 to 53 messages per student, and learning outcomes and emotional responses stayed gender-neutral regardless of how much each student interacted.
- **Designers.** Encode the role-model mechanisms in the system prompt (growth mindset, warmth, effort over perfection, gender-inclusive phrasing, [[socratic-method|Socratic questioning]]) and ground the persona in a real figure such as Ada Lovelace, pairing it with retrieval-augmented generation over a curated knowledge base to keep answers curriculum-aligned and reduce [[hallucination-risk|hallucination]].
- **Designers.** Test a deliberately gender-coded agent with male learners before scaling. Alienating male students from a female-coded character was the field's standing risk, and in this study male students sent comparable numbers of messages and showed the same stereotype reduction and learning gains.
- **Faculty developers.** Prepare teachers to interpret acceptance and interest measures alongside [[learning-gains|achievement]]: the intervention raised [[student-engagement|situational interest]] in both genders without any group difference in performance, so gains will not show up on a test score alone.

## Limitations

- The intervention spanned three consecutive mathematics lessons, so the study measured only immediate effects; the authors state that the brief design precludes any assessment of long-term sustainability through follow-up.
- Allocation was by whole school rather than by student (cluster assignment at school level, chosen around each school's device infrastructure), and the control group outperformed the experimental group on prior knowledge at baseline on every pre-test measure (all *p* < .05), so group equivalence cannot be assumed.
- The sample was *N* = 195 ninth-grade students in German secondary schools within a single learning group, and the non-binary response option on the gender item was selected by no participants, so the gender-stratified analyses compare only female and male students.
- Chat logs could be attributed to only 57 of the 102 experimental-group participants (the rest most likely had an invalid or omitted identification number), so the usage analysis rests on a subsample, and novelty effects cannot be ruled out despite the interest findings.

## Connected Concepts

- [[equity-in-ai-education]]
- [[stem-education]]
- [[math-education]]
- [[self-efficacy]]
- [[conversational-ai]]
- [[student-ai-interaction]]
- [[intelligent-tutoring]]
- [[k-12]]

## Connected Articles

- [[all-girls-genai-makerspace-gender-equity-2026]] — An all-girls GenAI makerspace initiative for gender equity in computing
- [[gender-bias-transfer-llm-writing]] — How LLM-assisted writing can contaminate student work with gender bias
- [[dai-chatbots-problem-posing-primary-2026]] — Custom AI chatbots for problem posing in primary mathematics
- [[mathematics-teachers-chatbot-motivation-2026]] — Chatbots and mathematics teacher motivation
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — How avatar identity shapes epistemic trust in AI-mediated learning
- [[ai-overreliance-complex-adaptive-system-2026]] — Overreliance on AI as a complex adaptive system

## Citation

Rücker, C. R., & Becker-Genschow, S. (2026). [Bridging the Gender Gap in STEM Education with AI: Female-Coded Chatbot as Role Model and Learning Assistant](https://doi.org/10.1016/j.chbah.2026.100392). *Computers in Human Behavior: Artificial Humans*. Advance online publication.
