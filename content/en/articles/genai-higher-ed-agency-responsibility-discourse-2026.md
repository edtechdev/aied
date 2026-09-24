---
title: "Who Acts, Who Knows, Who Answers? A Corpus-Assisted Discourse Analysis of Agency, Epistemic Responsibility, and Accountability in Generative AI Higher Education Research"
created: "2026-09-24T09:11:51-04:00"
updated: "2026-09-24T09:11:51-04:00"
type: article
sources: ['raw/papers/genai-higher-ed-agency-responsibility-discourse-2026.md']
confidence: high
page_kind: [framework]
research_method: [secondary analysis]
level: [higher ed]
audience: [instructors, policymakers, researchers]
foundations: [agency, academic-integrity, philosophy-of-ai-in-education, human-ai-collaboration]
pedagogy: [student-ai-interaction]
technology: [generative-ai, conversational-ai]
assessment: [evaluative-judgment]
methods: [qualitative-research, mixed-methods-research]
institutions: [governance, educational-policy-ai]
ethics: [ethics, ai-use-disclosure, trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A corpus-assisted discourse analysis of 366 GenAI-in-higher-education abstracts finds a persistent split between what [[generative-ai]] is said to do and who answers for it. Across 91,405 tokens drawn from 8,734 screened records, AI is the most frequent actor — 2,050 mentions and 447 predicate associations — yet no sentence ever makes a system responsible. Students are attached to knowing, judging, and verifying; obligation lands on educators, institutions, and policy, or vanishes into passives and nominalizations. The field recognizes [[ethics|responsibility]] as a word without articulating the relational [[agency]] that turns recognition into action.

## Key Findings
1. **AI is the loudest actor.** Systems were named 2,050 times and entered 447 strict actor–predicate associations, but action made up 78.7% of them, while knowledge, judgment, and verification together accounted for only 29.
2. **Nothing answers for AI.** Of 166 obligation expressions, none assigned responsibility to a system; AI received zero responsibility predicates, and the one clause linking AI to accountability says AI is not accountable.
3. **Students are positioned as knowers, not doers.** Learners drew 84 knowledge, judgment, and verification predicates against AI's 29, yet only six obligation clauses named them, so verification appears as a desired competency rather than a duty.
4. **Responsibility words rarely name a relationship.** "Responsible AI/GenAI" occurs 83 times across 59 documents and "responsible use" 66 times across 44; "AI responsibility" and "student responsibility" never appear as exact phrases.
5. **Grammatical removal is routine.** The corpus holds 800 passive constructions, 780 of them without any agent reference, alongside 1,152 responsibility-related nominalizations and 241 reporting metonyms such as "the study demonstrates."
6. **Providers nearly vanish.** Developers and vendors appeared 25 times and entered six predicate associations, so choices shaping training data, interfaces, and access read as features of "AI" rather than as anyone's decisions.
7. **Labels do not predict accountability.** Tool records averaged the most AI-action predicates (119.2 per hundred records), and infrastructure discourse the most responsibility nominalizations (about 3.98 per document) with the fewest verification-judgment associations (6.3).

## Building a corpus out of abstracts
Eligibility ran from 1 November 2022 to 14 August 2026, covering English-language journal articles, reviews, and conference papers on GenAI in [[higher-ed]]. Searches across Scopus, Web of Science, IEEE Xplore, and SpringerLink yielded 11,175 exported rows; removing 2,441 duplicates left 8,734 unique records, and screening then excluded false positives plus 48 Springer-only titles lacking abstracts. The frozen corpus holds 366 documents and 91,405 tokens. Five actor dictionaries were crossed with eight strict predicate dictionaries (action, knowledge, judgment, verification, responsibility, attribution, governance, agency); an association required the actor to precede a predicate within six intervening words. Nominal proximity was excluded, so "AI governance" never counted as evidence that AI governs — a rule-based approximation, not a dependency parse.

## Who acts, who knows, who verifies
AI led every actor category at 2,050 mentions, ahead of students at 1,385, institutions at 545, educators at 389, and providers at 25. Its range was narrow: action predicates such as create, support, produce, and assist dominated, while students carried knowing, judging, and verifying on 84 occasions, positioned as able to understand, check, and dispute system output — the capacities [[critical-thinking]] research treats as learner achievements. AI was not absent from verification: eleven references across ten documents described a system or automation layer performing checks or validation. None held the validating system accountable; each presented validation as one more action for students to [[evaluative-judgment|evaluate]].

## Who answers, and who disappears
The corpus contained 166 obligation or answerability expressions, extracted from must, should, need to, require, responsible for, and accountable for. Institutions or policy actors bore 37, institution/educator metonymies 30, educators 20, researchers 18, and students only six; 33 clauses left the bearer unspecified. Twelve clauses constrained how systems ought to be used, and none attached consequences to a system. This is where [[governance]] language works quietly: "governance is needed" does not say who convenes meetings or enforces anything. Policy can appear to act while the administrators who enact it stay invisible — precisely the chain that [[educational-policy-ai]] decisions exist to make explicit.

## Tool, interlocutor, proxy, infrastructure
Classification split the corpus into 239 empirical articles (65.3%), 47 policy or governance analyses (12.8%), 42 reviews (11.5%), and 38 conceptual papers (10.4%), with 61.7% of records in a partially complete 2026. Framing cut across that mix: 146 records centered on the tool concept (39.9%), 126 on infrastructure (34.4%), 48 on interlocutor (13.1%), 46 on proxy (12.6%). Tool records averaged the most AI-action predicates (119.2 per hundred records) against proxy (89.1), interlocutor (87.5), and infrastructure (75.4); verification-judgment combinations peaked in proxy discourse at 26.1 and fell to 6.3 in infrastructure. Dialogue does not automatically displace judgment: students in one longitudinal study reported no loss of personal [[agency]], another documented tool-teammate-deliberate non-use, and a third used AI as a teaching partner while preserving critical evaluation.

## What this means for practice
- **Researchers.** Write responsibility claims as auditable relationships naming the responsible actor, the decision at stake, the required action, the standard, the audience owed justification, and the consequence of failure.
- **Instructors.** Teach verification as a skill — assessing sources, holding domain knowledge, handling uncertainty — instead of assigning it after content has already been produced.
- **Assessment designers.** Judge from the revision process itself: students' defenses of revised work and comparisons between original and revised versions, not disclosure alone.
- **Administrators and policymakers.** Distribute obligation as a function of control — providers for documented system characteristics, institutions for procurement and policy consistency, educators within granted authority, students once trained.

## Limitations
- The dataset covers titles and abstracts only, so it describes public argumentation rather than what full articles do, and title-weighted filtering favors work that names who is responsible.
- Springer coverage was capped at 3,908 records from 16,271 hits, 48 Springer records lacked abstracts, and 61.7% of records come from a partially complete 2026.
- Actor–predicate rules miss pronoun reference and negation, and passive-voice cues can surface oblique constructions; operational and publication-type coding add abstraction over mixed documents.

## Connected Concepts
- [[agency]]
- [[academic-integrity]]
- [[generative-ai]]
- [[governance]]
- [[ethics]]
- [[ai-use-disclosure]]
- [[educational-policy-ai]]
- [[evaluative-judgment]]
- [[philosophy-of-ai-in-education]]
- [[human-ai-collaboration]]
- [[higher-ed]]
- [[ai-literacy]]

## Connected Articles
- [[reclaiming-epistemic-agency-co-agency-2026]] — Reclaiming Epistemic Agency: A Critical Framework for Human-Generative AI Co-Agency in Education
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — Learning with machines: Toward a theory of epistemic co-agency
- [[perrotta-zero-shot-governance-2026]] — Zero-Shot Governance: General-Purpose AI in Policy
- [[qian-governing-genai-higher-ed-policy-2026]] — Governing generative AI in higher education: Emerging policy approaches and support ecosystems at innovative U.S. universities
- [[bozkurt-ghost-students-agentic-ai-2026]] — The Devil is in the Details: AI Agents, Ghost Students, and the Crisis of Verified Presence in an Agentic AI World
- [[walton-bearman-assessment-judgment-2025]] — How university students work on assessment tasks with generative AI
- [[obyrne-co-constructing-ai-boundaries-agency-judgment-2026]] — Co-Constructing AI Boundaries: Agency, Judgment, and Ethical Literacy in AI-Mediated Meaning-Making
- [[wood-moss-ai-arc-agency-responsible-ai-2026]] — Cultivating Agency and Responsible AI Use Through the AI-ARC Framework
- [[still-emerging-genai-use-higher-ed-2026]] — Still Emerging: Understanding Generative AI Use in Higher Education

## Citation
Poudyal (2026). [*Who Acts, Who Knows, Who Answers? A Corpus-Assisted Discourse Analysis of Agency, Epistemic Responsibility, and Accountability in Generative AI Higher Education Research*](https://arxiv.org/abs/2609.27184). arXiv preprint.