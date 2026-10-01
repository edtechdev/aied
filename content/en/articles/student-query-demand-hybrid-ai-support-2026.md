---
title: "What Students Actually Ask: Demand Structure and Automation Potential in a Hybrid Support System"
created: "2026-10-01T09:12:41-04:00"
updated: "2026-10-01T09:12:41-04:00"
type: article
sources: ['raw/papers/student-query-demand-hybrid-ai-support-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [case study]
level: [higher ed]
audience: [administrators, instructors, educational technology developers, researchers]
pedagogy: [help-seeking, online-teaching-and-learning]
technology: [rag, conversational-ai, human-in-the-loop-ai, learning-analytics]
methods: [quantitative-research, mixed-methods-research]
foundations: [human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Gupta et al. (2026) report a nine-week deployment study of an AI-integrated query resolution platform in a large online internship program, covering 4,093 queries from 1,434 participants between 2 May and 6 July 2026. Queries move across four routes: a retrieval-constrained [[conversational-ai|AI assistant]] answering only from a curated corpus, peer answers, reuse of that corpus, and escalation to administrators. Nearly every query reached a recorded resolution and one in five closed within an hour. The headline is about demand, not technology: reuse of 114 corpus entries absorbed 21.3% of volume, participants self-resolved 12.2%, and 132 participants answered peers at a median of 9 to 15 minutes. Demand was narrow — one process step, certificate submission and the offer letter it triggers, drove 56.8% of corpus-mediated resolutions — and at least 20.4% of queries asked about the status of a pending submission, which a stored answer cannot serve. The authors also treat the resolution record itself as evidence and show where its fields mislead.

## Key Findings

1. Over nine weeks the platform handled 4,093 queries from 1,434 participants; nearly every query reached a recorded resolution and one query in five closed within an hour.
2. Corpus reuse absorbed 21.3% of volume across 114 entries, participants self-resolved 12.2%, and 132 peers answered one another at a median of 9 to 15 minutes.
3. Demand was narrow rather than varied: certificate submission and the offer letter it triggers accounted for 56.8% of corpus-mediated resolutions, and no other entry cluster exceeded 9.0%.
4. At least 20.4% of queries were status inquiries about a pending submission rather than requests for information; the retrieval-bound assistant served only 1.3% of them, since a stored answer cannot report a student's current status.
5. Only 8.0% of queries handled by a person duplicated existing corpus content, suggesting the knowledge base was already well used and that further corpus expansion would yield modest returns.
6. Direct administrative answering was concentrated in one [[administrator]] who handled 72.7% of identifiable human responses and 91.0% of the direct-admin path.
7. Repeat inquiry was rare at 0.6%, and 301 queries (7.4%) carried no closure timestamp, so the resolution record is a censored and partly misattributed account.

## A narrow demand profile

The study's central move is to classify the query text rather than infer demand from how a query was resolved. Read that way, the demand reaching this [[online-teaching-and-learning|online program]] was strikingly narrow. A single onboarding step — submitting an institutional certificate and receiving the offer letter that follows — accounted for 56.8% of all corpus-mediated resolutions, and reuse across entries was concentrated, with a Gini coefficient of 0.586 and a quarter of entries used exactly once. A second, larger class is not a request for knowledge at all: at least 20.4% of queries asked where a pending submission had reached. Because that answer is specific to one participant and changes daily, the [[rag|retrieval-grounded]] [[conversational-ai|assistant]] served just 1.3% of this class while handling procedural questions readily. That gap is the design working as intended, not failing, and it marks a limit of the [[help-seeking]] model that assumes a query is a request for knowledge the asker lacks.

## Dispatch, cost, and the peer layer

Volume and time split sharply by route. Scripted bulk action (31.6%) and direct administrative answering (27.4%) carried most of the load; the [[conversational-ai|assistant]] handled 3.6% and the peer layer 7.0%. But speed inverted the volume picture: 70.3% of peer-answered queries closed within an hour, against 1.9% of direct administrative answers and 14.8% of scripted closures. Peer resolutions came from 132 participants, 101 of whom also raised queries, with a Gini of 0.414 — modest in volume yet broadly shared. Because most administrative closures occur in synchronous bulk events, raw latency conflates routine turnaround with periodic queue clearing; separating the two gives a routine median of 6.1 hours against the 28.9-hour aggregate. The 8.0% duplication figure, falling to 6.3% once status inquiries are set aside, is a conservative floor, since the lexical TF-IDF comparison misses paraphrase.

## Reading the resolution record as evidence

The paper's third contribution is methodological: it treats the operational record as an object to be tested. Three field-level properties qualify any reading. The resolver-email field denotes the author on administrative paths but the approver on peer paths; the acceptance flag encodes only whether the resolver differed from the asker, not quality; and closure timestamps bunch into bulk events. Attribution checks were reassuring in one direction — 99.7% of the top administrator's 1,024 records were direct answers and peer identity is held separately — yet [[human-in-the-loop-ai|human oversight]] here means approval routing, not judgment of answer quality. The authors are explicit that no finding evaluates resolution quality, and that repeat inquiry at 0.6% is too rare to stand in for it. For anyone applying [[learning-analytics|learning analytics]] to support tickets, establishing workflow semantics before interpreting contributor distributions is the transferable lesson.

## What this means for practice

- **Instructors.** Stop treating volume as an answering problem. The largest demand class is "where is my submission?", so surfacing process state to students removes load without anyone writing a better answer.
- **Administrators.** Record authorship and approval in separate fields on every path, as the peer paths already do, so contribution becomes measurable system-wide rather than only where approval routing happens to capture it.
- **[[educational-technology-developers|Educational technology developers]].** Scope a grounded assistant to procedure and route status questions to a live system of record; a retrieval-bound agent cannot answer per-student state, and asking it to try invites unsupported output.
- **Researchers.** Treat support-ticket records as censored and semantically loaded. Check closure-timestamp clustering and what an acceptance field actually encodes before reading contributor or latency figures as evidence.

## Limitations

- The data cover a single program across nine weeks of onboarding, with volume peaking in week 3, so they describe an onboarding period rather than a steady state and the authors claim no generality across programs.
- Demand categories were defined by one author using a rule-based classifier at 75.0% precision with no second coder, so category volumes are lower bounds and the two least precise categories are indicative only.
- The coverage estimate compares query text against a proxy corpus built from corpus-linked queries because the export holds no answer text, so it shows comparable content existed rather than that the assistant would have answered correctly.
- The authors operate the system under study, which gives both direct workflow knowledge and an interest in how the system is described.

## Citation

Gupta, J., Ayinampudi, P., Aditya, B. M. V., Hegade, P., Sharma, R., Sharma, S., et al. (2026). [*What Students Actually Ask: Demand Structure and Automation Potential in a Hybrid Support System*](https://arxiv.org/abs/2609.38967). arXiv preprint.