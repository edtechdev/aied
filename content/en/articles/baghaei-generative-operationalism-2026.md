---
title: "Generative operationalism: when LLM-based item generation displaces construct theory"
created: "2026-11-11T09:55:00-05:00"
updated: "2026-11-11T09:55:00-05:00"
type: article
evidence_context: educational
published: 2026-11-10
page_kind: [framework]
research_method: [position paper]
audience: [researchers, assessment designers, assessment professionals]
sources: ['raw/papers/baghaei-generative-operationalism-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1986571"
source_depth: full text
confidence: high
assessment: [assessment-validity, automated-question-generation, educational-measurement]
technology: [llm, generative-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Item generators can now produce a hundred plausible test questions from a construct label in minutes, and the resulting scale will often look good: items load together, reliability is high, the factor structure is clean. Baghaei and Eryilmaz argue that this appearance is exactly the danger. They name **generative operationalism** — supplying an ordinary-language construct label to a [[generative-ai|generative model]], treating the outputs as the operationalization of that construct, then reading post-hoc psychometric regularity as evidence the construct was measured — and distinguish it from the case where a theory of the construct and its response processes governs generation. Their claim is not that machine-generated items are invalid in principle, but that theory-displacing generation weakens the causal warrant for the inference from response to attribute. The article reports no empirical data: its contribution is a conceptual vocabulary, four failure signatures ([[educational-measurement|measurement]] problems the fit statistics will not show), and conditions developers and test-makers can demand before calling generated items [[assessment-validity|valid]].

## Key Findings

1. **The pattern has a name and a sequence.** Construct label in, items out, psychometric regularity observed, then that regularity cited as evidence the attribute was captured — generative operationalism, as the authors define it.
2. **The distinction that matters is theory-augmenting versus theory-displacing generation.** In the first, construct boundaries, facets, response processes, intended population and construct-irrelevant processes are specified before the model is used; in the second they are supplied by the model implicitly.
3. **Model opacity is an accountability problem, not only a transparency problem.** Human item writers also cannot fully explain every wording choice, but they can be asked and can revise; a generative process cannot be interrogated in the same way.
4. **Semantic homogeneity can raise internal consistency while shrinking coverage.** When items are near-paraphrases in one negative-emotional vocabulary, they correlate for the same reason twice, and an apparently unidimensional scale can underrepresent the construct.
5. **Post-hoc fit cannot carry the claim.** Internal structure, content judgment and external association are each useful, but no single statistic or study establishes a score interpretation — the argument follows Kane's and Messick's evidential requirement.
6. **Four signatures are named.** Semantic redundancy, construct underrepresentation, method variance and residual dependence are the ways generated pools can produce desirable-looking [[item-response-theory|psychometric]] properties without the intended attribute causally driving responses.

## Why a clean factor analysis does not settle it

The paper's central move is to separate the psychometrics of a generated item pool from the causal claim the pool is used to support. A pool can be internally consistent because the items share a linguistic neighborhood rather than because they sample the attribute's facets. Classical evidence — high alpha, a single dominant factor, good fit — is compatible with both accounts, so the observation of good fit does not discriminate between them.

Baghaei and Eryilmaz draw on causal realism to state what would discriminate: an independently defensible account of how the target attribute influences responses to the item, plus response-process evidence or manipulated item features that test it. That standard is higher than most item-generation papers meet, and the authors note it is not a standard human item writers routinely meet either. The asymmetry they identify is not that machines are opaque and people are transparent, but that a human's unstated judgment lives inside a practice that can be challenged and revised.

## What theory-augmenting generation looks like

The constructive half of the argument specifies what has to be in place before a model writes items. Researchers articulate the content boundaries of the construct, its relevant facets, the hypothesized response processes, the intended population and the construct-irrelevant processes that should be minimized. The model is then used to instantiate items inside those constraints, not to discover the construct.

This is why the authors treat [[automated-question-generation]] as a design practice rather than a prompting trick. The question a developer should be able to answer is not "how many items did the model produce" but "which facet of the construct is this item sampling, and what would a respondent with a high level of the attribute do differently on it". Where that cannot be answered, the item's provenance — not just its statistics — is what has gone missing.

## What this means for practice

- **Assessment designers:** Write the construct specification before you prompt. Facets, response processes, population and irrelevant variance belong in the brief; a generated pool that cannot be mapped back to them is a draft lexicon, not an item bank.
- **Assessment designers:** Audit for paraphrase families before trusting reliability. Sort generated items by semantic similarity and read the clusters; a cluster of near-identical stems is coverage lost, however high the coefficient.
- **Researchers:** Report the generation procedure as part of the validity argument. If the model supplied the operationalization, say so, and treat post-hoc psychometrics as description rather than as warrant.
- **Developers:** Expose provenance in the tool. Item generators that show the facet, the construct-irrelevant features the item controls for, and the specification they were given make review possible; those that show only a score do not.

## Limitations

- The article reports no empirical data: there is no sample, no instrument and no test of whether theory-displacing generation is common in practice or how often it produces invalid scales.
- Its examples, such as a model repeatedly generating worry and nervousness items for neuroticism, are illustrative rather than drawn from a systematic review of deployed item banks.
- The proposal is programmatic: it specifies conditions for warranted use without operational criteria for deciding when a construct specification is detailed enough.
- The argument does not weigh the cost of the additional specification work against the labor savings that make generative item development attractive in the first place.

## Citation

Baghaei, P., & Eryilmaz, N. (2026). [*Generative operationalism: when LLM-based item generation displaces construct theory in educational and psychological measurement*](https://doi.org/10.3389/fpsyg.2026.1986571). *Frontiers in Psychology*, 17, 1986571.
