---
title: "AdvisorX: a human-in-the-loop AI-powered chatbot to support academic advising in higher education"
created: "2026-11-24T09:50:00-05:00"
updated: "2026-11-24T10:20:00-05:00"
type: article
authors: ["Wendan Jiang", "Shiyuan Wang", "Hiba Eltigani", "Rukhshan Haroon", "Abdullah Bin Faisal", "Fahad Dogar"]
venue: "arXiv preprint (cs.HC)"
evidence_context: educational
foundations: [human-ai-collaboration]
pedagogy: [student-support-and-success]
technology: [conversational-ai, llm]
methods: [usability-research, qualitative-research]
ethics: [hallucination-risk]
discipline: [learning sciences]
level: [higher ed]
audience: [administrators, instructors, educational technology developers, researchers]
page_kind: [implementation]
research_method: [user study]
sources: ["raw/papers/jiang-advisorx-academic-advising-chatbot-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Jiang and colleagues (2026) introduce AdvisorX, a [[llm|large-language-model]] chatbot aimed at the advisor rather than the student, automating information collection, policy lookup, and response drafting while keeping [[human-in-the-loop-ai|advisors in the loop]]. In a hands-on user study with eight advisors (four staff, four faculty) in a [[cs-education|computer science]] department, most rated the system useful and half said their initial concerns eased after use. Accuracy did not determine willingness to delegate. For direct-answer questions, delegation was high, averaging 4.12 on a 5-point scale. For an indirect question involving possible course failure, delegation fell to 2.88, with advisors preferring to respond personally because the situation called for emotional support rather than a more accurate draft. The study argues that [[student-support-and-success|academic advising]] is relational as well as informational, and that [[hallucination-risk|reliability concerns]] are not the only barrier to delegation.

*Hands-on user study with eight advisors from a [[higher-ed|university]] CS department, using approximately 60-minute semi-structured interviews with recorded audio and screen interaction. Participants reviewed system-generated drafts across four question types and rated accuracy, tone, and willingness to delegate on 5-point scales; analysis was descriptive given the sample size.*

## Key Findings

- **Initial attitudes were cautious.** Seven of eight advisors had used [[generative-ai|generative AI]] [[conversational-ai|chatbots]] before, yet initial ratings of GenAI's usefulness in advising averaged 3.25 (SD 1.39), with five of eight at or below neutral.
- **Hands-on use improved the picture.** Five of eight rated AdvisorX's usefulness as 4 out of 5 and the remaining three as neutral; none gave a negative rating, and half explicitly said their prior concerns had eased.
- **Direct-answer questions were trusted.** Accuracy for direct-answer queries was rated highest and most consistently, averaging 4.38 on the five-point scale with little variation, and every advisor judged responses accurate.
- **Emotionally charged cases were not delegated.** Delegation for the scenario involving possible course failure was lowest, averaging 2.88 on the five-point scale, and style and tone ratings spread widest there, averaging 3.50; half the advisors found the tone inadequate.
- **No-answer and student-specific cases were uneven.** Delegation was 3.88 (SD 0.83) when information was unavailable and 3.62 (SD 1.51) for student-specific queries, the widest spread of the four types.
- **Verification cost matters.** Advisors questioned whether reviewing every response reduced workload, and one argued that if verification is always required, the system "didn't help me at all".

## Designing for the advisor, not the student

Most AI advising systems face the student. AdvisorX reverses that: it collects student information, retrieves [[educational-policy-ai|institutional policy]], and drafts a reply the advisor can edit, so the advisor remains accountable for what goes out. The design bet is that scaling advising capacity means removing the mechanical parts — assembling records, checking prerequisites, phrasing routine answers — without removing the judgment and relationship that define good advising.

The study also surfaces how much of advising is not factual. Participants described students asking "what do I want to do as a career?", situations where generic advice has little value because no two students are the same. That set up the study's central test: would an accurate draft be enough to make advisors hand over a case?

## What determined delegation

The answer was that accuracy was necessary but far from sufficient. For direct-answer questions, backed by institutional sources and requiring no interpretation, advisors were willing to delegate. For the indirect question about possible academic failure, delegation collapsed even though the draft could be judged accurate, because advisors saw the moment as one requiring human engagement — understanding what problems the student had run into, offering support, not just presenting rules. Emotional tone mattered enough that half the advisors found it inadequate, with one describing it as too "flat".

Two further findings qualify the efficiency argument. First, hedging language backfired: advisors read phrases like "may" as incorrect information rather than appropriate caution, and when no information existed they preferred the system to decline rather than answer with flagged uncertainty. Second, the cost of oversight is real and not evenly distributed — research on automation warns that sustained monitoring of a reliable system erodes the scrutiny such oversight depends on. The authors propose allocating review selectively to the straightforward, source-backed queries that dominate frequent advising questions, which prior work classifies as roughly 40% information-based.

## Limits of eight advisors

The study is a small [[qualitative-research|qualitative]] user study in one department, and its numbers are descriptive rather than inferential. The eight participants split into staff and faculty advisors who held genuinely different preferences — faculty wanted brevity while staff wanted detail — so averages conceal two populations. Generalization to undergraduate advising is explicitly uncertain, since the master's-level context described was more standardized and undergraduates are "a bit more personalized". And the concerns that persisted after use — hallucination as fundamental to LLMs, the labor of verification, and the risk of losing the student contact that advising sessions provide — are not solved by better interface design.

## What this means for practice

- **Administrators.** Deploy advisor-facing tools with adjustable verbosity and tone, and let each advisor tailor drafts; a single output style will alienate either faculty or staff users.
- **Advisors.** Hand off routine, source-backed queries first, and keep emotionally sensitive cases personal. Delegation need not be all-or-nothing across a caseload.
- **Educational technology developers.** Make uncertainty explicit and bounded: decline cleanly when information is absent instead of hedging, since hedging reads as error.
- **Researchers.** Study the advisor's workflow, not only the student's experience. Willingness to delegate is shaped by relational judgment, and measures of accuracy alone miss it.

## Limitations

- Eight advisors in one computer science department participated, so the findings are not generalizable to other institutions or advising contexts.
- Analysis was descriptive only, with no significance testing given the sample size.
- Faculty and staff advisors differed systematically in their preferences, which the aggregate ratings conceal.
- The system was evaluated for [[graduate-education|graduate]]-level advising in a relatively standardized context; participants doubted it would transfer unchanged to personalized undergraduate advising.
- Concerns persisting after use — fundamental hallucination risk, verification workload, and loss of human contact — were reported but not resolved.
- The study evaluates a single prototype on four question types, so it cannot separate the effects of interface, model, and institutional knowledge sources.

## Citation

Jiang, W., Wang, S., Eltigani, H., Haroon, R., Bin Faisal, A., & Dogar, F. (2026). [AdvisorX: a human-in-the-loop AI-powered chatbot to support academic advising in higher education](https://arxiv.org/abs/2511.05706). *arXiv preprint arXiv:2511.05706.*
