# Adjacent AI research: inclusion and publication policy

The knowledge base is not a general AI research index. It synthesizes research on AI in education and selected findings from other fields that have a defensible, consequential implication for learning, teaching, educational technology, student success, equity, or well-being. A study conducted outside an educational setting is identified as such. Its direct findings are kept separate from proposed educational applications.

## What counts as adjacent research

Adjacent research is credible work from another field whose mechanism, population, task, or technical result bears on a concrete educational decision. Typical sources are cognitive psychology, psycholinguistics, human-computer interaction, organizational behavior, AI safety, cybersecurity, sociolinguistics, and social psychology.

It does not include general AI capability news, product announcements, opinion pieces, or a paper that mentions education only in its implications section. A study is not adjacent merely because the subject is AI, and a study is not in scope merely because an author says it could matter for education.

## Evidence boundary

Every publication must distinguish three things:

1. **What the paper measured.** The actual population, setting, task, comparison, measures, and results.
2. **What may follow for education.** The proposed mechanism or application, stated as an inference where it was not measured in an educational setting.
3. **What remains untested.** The specific educational outcomes, populations, or settings the source did not study, plus alternative explanations.

A strong non-educational experiment is not automatically strong evidence of a classroom outcome. Do not write that a study measured student learning, teaching effectiveness, or well-being unless it did. Use "may," "could," or "warrants testing" for unverified transfers without weakening the source's actual finding.

## Three publication dispositions

| Disposition | Use when | Publication action |
|---|---|---|
| **Tier 1: article plus selective weave** | The finding is credible, important, distinctive, and has a defensible educational mechanism, with enough source evidence for an accurate summary. | Create or retain a normal article page. Screen concepts and FAQs. Change only the pages whose claims materially move. |
| **Tier 2: synthesis citation only** | The finding is reliable and relevant, corroborates or modestly qualifies an existing explanation, but does not warrant its own summary. | Add a verified direct citation and a concise interpretation to the relevant concept. An FAQ may point to that concept. Do not invent an internal article slug. |
| **Tier 3: backlog or exclude** | The finding is weak, speculative, duplicative, unverified, or only tenuously educational. | Record a reason and a reconsideration trigger in the private backlog, or reject it. Do not publish. |

### The four questions for Tier 1

A candidate qualifies only when all four can be answered convincingly:

1. What connects the mechanism to education?
2. How reliable is the actual study?
3. What new or consequential evidence does it add to the current corpus?
4. What decision, design, or research question could change?

There are no numerical quotas. A study that only adds another example to a claim the corpus already supports is Tier 2 or Tier 3, not Tier 1.

## Screening before acquisition or writing

For a manually supplied paper or a future discovery queue:

1. Resolve title, authors, publication and version status, DOI or arXiv ID, canonical URL, and the setting where the evidence was collected. Check retractions, corrections, and expressions of concern.
2. Deduplicate against the corpus by persistent identifier, verified title, and existing redirects.
3. State the actual finding, sample, task, method, and key limitations from source material; do not infer results from the title or an abstract alone.
4. Name the specific existing concept pages that may be affected, the mechanism connecting the result to education, and whether that connection is direct or speculative.
5. Record a Tier 1, 2, or 3 verdict and a brief reason **before** starting an article-ingestion job.
6. For Tier 1, use the normal full-text and source-provenance requirements. Do not publish a confident summary from an abstract when the article-quality policy requires full text.

The existing concept screen still applies. Enumerate the article's typed facets and inline concept links, decide `integrated` versus `no_change` against the actual concept narrative, and record why a changed page warranted the weave. A back-link is not a narrative integration.

## Tier 1 article requirements

Use the existing canonical article structure and section order: Synthesis, Key Findings, three or four body sections, What this means for practice, Limitations, and Citation last. Within that structure:

- State the original setting, population or model, measures, comparison, and results.
- Add an explicit educational bridge in prose, not only in a practice bullet. Name the decision, design, or research question that the finding bears on.
- State what is not established: educational outcomes or populations the source never studied, alternative explanations, and the validation that would be needed.
- Give practical guidance by role only where the source supports a distinct implication. Do not manufacture a bullet for every audience.
- Keep `confidence` about the claims the page makes, not about the strength of an extrapolation. A high-confidence summary of a rigorous laboratory study can still have a speculative educational bridge.

Set `evidence_context: non_educational` or `mixed` so the page renders the reader-facing note. A direct education study uses `educational`.

## Tier 2 citation route

When a finding merits synthesis but not an article:

- Cite the original publication directly in the concept prose with author, year, title, and a resolvable DOI, publisher, or arXiv link.
- Add the full reference to that concept page's `## Citation` section if the page uses one.
- Qualify the educational transfer in the same sentence or the next one.
- Never create a fake `[[article-slug]]` for a paper that has no article page.
- An FAQ may link to the concept carrying the citation; it should not become the only place the evidence lives.
- Record the source, identifier, decision, and destination in the private candidate registry/backlog so a later ingest can deduplicate it.

## Article-only field

`evidence_context` is a controlled, optional article field:

- `educational`: the study directly investigates educational populations, activities, settings, or learning outcomes.
- `non_educational`: the original evidence comes from another setting or technical evaluation; educational implications are extrapolated.
- `mixed`: the paper actually includes both educational and non-educational investigations.

Absence on a legacy page means **not yet classified**, never `educational`. New articles created on or after the configured `required_since` date must carry the field; the gate is `tooling/scripts/check-evidence-context.py`.

## Reader-facing presentation

An article with `non_educational` or `mixed` shows a concise note above the body: the findings describe the original study, and educational implications are applications rather than measured classroom outcomes unless stated otherwise. The note is informational, not a warning badge. Do not add a new collection, route, or title prefix.

## Review and maintenance

- Tier 1 and Tier 2 publication decisions require human editorial approval unless the maintainer changes that policy.
- A rejected or no-change verdict is a valid outcome, not a pipeline error.
- Keep the private registry distinct from completed ingestions and deduplicate by DOI/arXiv ID.
- Do not broaden a scheduled ingestion job to general AI feeds without explicit approval.
- New concept or FAQ edits may make translated pages stale; report that work rather than treating localization as automatic.

## Current pilot scope

The first pilot used the existing `clark-ai-generated-language-readability-2026` and `sycophantic-ai-social-interaction-2026` pages as metadata and presentation regression cases. They were not re-ingested. The first new Tier 1 ingest is `sim-ai-summary-memory-distortion-2026`, which is also the first test of the full article, note, gate, and concept-weave path. The remaining candidates are screened against the four Tier 1 questions and recorded privately before any further article is written. The provisional candidate triage is in [adjacent-research-pilot.md](adjacent-research-pilot.md); its remaining identifiers and publication statuses still require primary-source verification.
