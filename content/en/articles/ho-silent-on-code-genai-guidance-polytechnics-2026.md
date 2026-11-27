---
title: "Silent on Code? A Computing Lens on Generative AI Guidance at Canadian Polytechnics and Research Universities"
created: "2026-11-26T09:18:38-05:00"
updated: "2026-11-26T09:33:00-05:00"
type: article
published: "2026"
sources: ['raw/papers/ho-silent-on-code-genai-guidance-polytechnics-2026.md']
confidence: high
evidence_context: educational
page_kind: [evaluation]
research_method: [policy analysis, thematic analysis]
discipline: [cs education]
level: [higher ed]
audience: [administrators, instructors, curriculum designers]
pedagogy: []
technology: [generative-ai, llm]
assessment: [assessment]
methods: [qualitative-research]
institutions: [educational-policy-ai, governance]
ethics: [ai-use-disclosure]
foundations: [academic-integrity]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Ho and colleagues (2026) analyzed the public [[generative-ai]] guidance of all 13 Polytechnics Canada members and the 15 U15 research [[higher-ed|universities]], and found a consistent pattern: institutions delegate course-level rules to instructors, converge on [[ai-use-disclosure|disclosure]] and [[academic-integrity|academic integrity]] policy, and say almost nothing that is specific to code. The two sectors differ in default posture — polytechnics more often prohibit use unless the instructor permits it (8 of 13 against 4 of 14) — and in framing, with polytechnics substantively linking GenAI to workforce preparation (7 of 13 against 0 of 14) while universities more often address [[assessment|assessment]] redesign (substantive in 8 against 4). Twelve of 27 institutions mention code, but nearly always as one output type among many; almost none names an AI coding assistant, sets conventions for attributing generated code, or offers programming-specific assessment guidance. The contribution is a coded dataset and a short, adoptable template for [[cs-education|computing programs]] rather than a claim about what classrooms actually do.

## Key Findings

1. **Governance converges on delegation.** Both sectors place course-level decisions with instructors, and most institutions expect programs to adapt rules to their discipline rather than writing discipline rules centrally.
2. **The sectors split on default posture.** Polytechnics more often state that GenAI is prohibited unless the instructor permits it (8 of 13 against 4 of 14 universities); universities more often leave the instructor to decide with no default (9 against 4).
3. **Policy instruments are mostly guidelines.** Only 4 polytechnics and 4 universities name AI in a formal policy document; the rest rely on guidelines, so the rules live in lower-commitment text.
4. **Detector guidance has reversed.** Where detectors are addressed, universities mostly discourage them (7 of 14, including one that discontinued Turnitin's [[ai-detection|AI detection]] in 2025), while polytechnics either discourage (3 of 13) or permit them with caution (3 of 13).
5. **Code is mentioned but not addressed.** Twelve of 27 institutions mention code, six in each sector, almost always in a definition or example list; only one provides substantive code use cases.
6. **No institution names a coding assistant or sets code norms.** None of the core documents names an AI coding assistant, sets conventions for attributing generated code, or addresses licensing and provenance of generated code in student work.
7. **Framing differs sharply by sector.** Polytechnics frame GenAI as workforce preparation substantively in 7 of 13 documents, universities in none; universities more often treat assessment redesign substantively (8 against 4).

## What the documents do and do not cover

The corpus is institution-level public guidance, coded against a 27-item codebook spanning governance, integrity and assessment, data and [[legal-issues-and-risks|legal issues]], values, and a computing lens. Disclosure, [[privacy|privacy]], approved tools, accuracy and bias, and student [[ai-literacy|AI literacy]] appear in most documents in both sectors. What does not appear is anything that assumes the student's artifact might be a program: no document sets assistance levels for code completion, says how to attribute AI-assisted code, or asks for a code walkthrough as assessment evidence. Several institutions point to a computing department as the place where such norms are emerging, which is precisely the delegation the paper argues needs a template rather than a pointer.

## A program-level template, and why it is cheap to adopt

The paper's constructive contribution is a five-element table for computing programs: assistance levels for code completion and explanation, code attribution conventions in comments and commit messages, approved tools and data rules, license and security responsibility for submitted generated code, and understanding checks such as a walkthrough with version history. Each element is written as example syllabus wording that a course can adapt. Three low-cost institutional moves follow: state whether editor-integrated coding assistants fall under the published tool approvals, link the dozen existing mentions of code to program-level guidance, and have central teaching units or sector bodies curate shared templates. The AI Assessment Scale adopted by one polytechnic is offered as an existing vehicle these elements can map onto.

## What this means for practice

- **Computing instructors.** Put an assistance level and a code-attribution convention in the syllabus this term. A student cannot comply with a rule that does not exist, and a walkthrough requirement is the cheapest way to make submitted code examine its author.
- **Program directors.** Adopt the five elements as program-level guidance and map them onto whatever assessment scale the institution already uses, rather than drafting a new policy instrument.
- **Administrators.** Audit the published tool-approval list for whether editor-integrated coding assistants are covered. Those tools send code and context to external services, which makes the omission a data question as well as a teaching one.
- **Sector bodies.** Curate and share discipline templates so each program does not start from scratch; the paper's table is a usable starting point.

## Limitations

- The corpus is a snapshot of public institution-level guidance retrieved in October 2026, so an absent item means absent from public guidance, not absent from practice; department pages, course outlines and documents beyond a four-document cap are not captured.
- Zeros rest on reading rather than an automated keyword search, and some extract-based codes are flagged in the dataset as possible undercounts.
- One university's guidance could not be retrieved, so paired counts are reported out of 13 polytechnics and 14 universities.
- Integrity policies were not retrieved systematically, so formal instruments may be undercounted.
- No second human coder recoded institutions independently, which reduces but does not eliminate single-coder bias.
- The sectors differ in size, mission and research intensity, so differences cannot be attributed to the polytechnic model alone.

## Citation
Ho, M., Lin, M. P.-C., Amin, R. R., Chang, D., & Ryoo, J. (2026). [*Silent on Code? A Computing Lens on Generative AI Guidance at Canadian Polytechnics and Research Universities*](https://arxiv.org/abs/2611.34094). arXiv preprint arXiv:2611.34094.
