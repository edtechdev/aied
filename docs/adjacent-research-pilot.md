# Adjacent research pilot: candidate triage

**Status:** working report for maintainer review. It records provisional decisions, not publication. No candidate below has been ingested as a new article. Identifiers and publication status must be checked against the primary record before any Tier 1 work begins.

The two existing pages are regression cases, not re-ingestions:

- `clark-ai-generated-language-readability-2026` — `evidence_context: non_educational`; article body now separates the linguistic finding from the unmeasured classroom outcome.
- `sycophantic-ai-social-interaction-2026` — `evidence_context: non_educational`; article body now has the canonical Key Findings section and an explicit statement that the studies did not measure learners or classroom outcomes.

## Candidate table

| Candidate | Original setting | Provisional tier | Reason | Public destination |
|---|---|---|---|---|
| Sim, Eiger & Kohno, misleading AI summaries and memory | Human memory experiment; no classroom | Tier 1 candidate | Direct mechanism for lecture notes, study guides and assessment validity; strong experimental result; no existing article | Article, then concept weave if the claim moves |
| Pataranutaporn et al., false information in chatbot conversations | Human experiment; no classroom | Tier 2 | Corroborates the summary-distortion mechanism; useful detail but not a distinct page unless the primary record supports a separate claim | Citation in a concept or a section of the Tier 1 article |
| Shen & Tamkin, AI and novice skill formation | Randomized programming workplace experiment | Tier 1 candidate | Distinguishes assistance from learning; strong design; directly relevant to [[cognitive-offloading]] and [[learning-gains]] | Article, then concept weaves |
| Autor et al., patent-drafting field experiment | Workplace field RCT | Tier 2 | Strong evidence about existing expertise and later independent performance; specialized professional task; corroborates rather than creates a new education concept | Citation in the relevant concept or a section of the skill-formation article |
| Brynjolfsson, Li & Raymond, generative AI at work | Workplace deployment | Tier 2 | Large productivity study with learning-consistent evidence; does not measure student learning | Citation in a concept; avoid a standalone education claim |
| Doshi & Hauser, individual creativity and collective diversity | Controlled storytelling experiment | Tier 1 candidate | Distinct individual-versus-collective outcome; direct design implication for idea generation and writing | Article, then [[creativity]] weave |
| Hofmann et al., dialect-based model decisions | Model evaluation; sociolinguistics | Tier 1 candidate | Direct assessment-validity and equity mechanism; no education sample, so the transfer must be framed as a risk to test | Article, then [[equity-in-ai-education]] and [[assessment-validity]] |
| Liu et al., lost in the middle | Technical evaluation of long-context models | Tier 2 | Established mechanism for document analysis and retrieval workflows; no new education study | Citation in [[rag]] or [[hallucination-risk]] |
| Zhao et al., fabricated references in the literature | Large-scale bibliometric estimate | Tier 2 | Relevant to AI-assisted research and citation checking; preprint estimate, not an education intervention | Citation in [[ai-assisted-educational-research]] or [[hallucination-risk]] |
| Debenedetti et al., AgentDojo prompt injection | Agent security benchmark | Tier 2 | Concrete security mechanism for educational agents; technical benchmark, not a classroom study | Citation in [[agentic-ai]] or [[privacy]] |
| Cheng et al., sycophantic AI and prosocial intentions | Preregistered social psychology experiments | Tier 2 | Strong addition to the existing sycophancy coverage; likely an enrichment of the existing article/concept rather than a new page | Existing [[ai-sycophancy]] page and article |
| Salvi et al., personalized AI persuasion | Preregistered debate experiments | Tier 2 | Relevant to conceptual change and refutation, but the education application requires a new classroom test | Citation in [[misconceptions]] or [[refutation-text]] |
| Costello, Pennycook & Rand, conspiracy-belief dialogues | Online persuasion experiments | Tier 3 for now | Expression of concern and corrected analyses; do not repeat original figures until the correction is verified | Backlog only |
| De Freitas et al.; Fang et al.; Folk & Dunn, AI companionship | Consumer and longitudinal studies; mixed results | Tier 2 or 3 | Relevant to well-being and help-seeking, but the evidence is mixed and the educational transfer is indirect | Citation in [[well-being]] or [[help-seeking]]; no new article yet |

## What the pilot establishes

- The metadata and reader-facing note work for both existing non-educational articles without changing their URLs.
- A Tier 1 candidate can be screened without inventing concept changes; `no_change` remains a valid outcome.
- Tier 2 is a real route: a concept can carry a direct DOI or publisher citation without a fake internal article link.
- Tier 3 is a real outcome: a contested or unverified study stays in the private backlog and is not published.

## Next review

Before Tier 1 drafting, verify each candidate's title, authors, version, DOI/arXiv ID, setting, sample, and correction status against the primary record. Record the final disposition privately, then ingest only the candidates whose four Tier 1 questions can all be answered.
