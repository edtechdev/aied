---
title: "The double-edged sword: Open educational resources in the era of Generative Artificial Intelligence"
published: "2026"
created: "2026-10-28T18:18:15-04:00"
updated: "2026-10-28T18:18:15-04:00"
type: article
technology: [generative-ai, open-source]
ethics: [equity-in-ai-education]
research_method: [position paper]
audience: [policymakers, instructors]
page_kind: [framework]
sources: ['raw/papers/tlili-double-edged-sword-oer-generative-ai-2026.md']
source_url: "https://doi.org/10.37074/jalt.2026.9.1.6"
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Tlili, Farrow, Bozkurt, Amiel, Wiley, and Downes (2026) ask what happens to open educational resources when generative AI becomes part of how they are made, and they answer as a commentary rather than as a study. The method is speculative-critical: for each of five framing questions the authors set a techno-optimist reading against a critical-realist one, and they forgo empirical validation by design. No data were collected, there is no sample, and the only numbers in the text belong to legal citations and to the authors' reading of them. The argument is that the open/closed binary no longer describes the systems OER now pass through, that AI-generated material sits in an unresolved position between public domain and authorship, and that equity in the AI era depends less on producing open content than on stewarding inspectable, white box infrastructure.

## Key Findings
1. The authors treat "open" as a property that varies by component rather than a label a system either earns or does not: training content, training software, model weights, and inference software each carry their own licensing history and can be assessed separately.
2. Citing the U.S. Copyright Office report of January 2025, they note the conclusion that prompts alone do not give users authorship of output (p. 18), which on a strict reading places purely AI-generated resources in the public domain and therefore, awkwardly, inside the [[open-education|OER]] category.
3. They read Bartz v. Anthropic (2025), in which training large language models on copyrighted works was called "quintessentially transformative," as a signal that license terms may not reach training at all, which weakens open licensing as a practical protection for OER authors.
4. Openwashing is the paper's sharpest charge: the maker of ChatGPT is named for openness while ranking among the lowest on indicators such as availability of models, parameters, weights, training data, documentation, and application programming interfaces.
5. On bias, the authors argue that automated translation and localization run along the existing gradient, moving content from richer and more widely spoken languages toward the Global South, while the sophisticated end of adaptation sits behind paid corporate services.
6. On hallucination they hold both directions at once: curated OER can supply ground truth, and placing OER directly in a prompt can help more than fine-tuning, but unvetted or remixed OER can also feed errors back into models.
7. Their prescription is a shift from content creation to stewardship of "white box" or "clear box" technologies, with inspectability, replicability, and transparency as the conditions for calling anything open in an algorithmic age.

## A commentary that argues by provocation

The paper is explicit that it collects nothing. Its method is speculative-critical inquiry, a tradition the authors trace to Bayne and Ross and to an earlier collective reflection on ChatGPT, and they defend it as suited to a technology whose diffusion outruns conventional empirical cycles. In practice the method is a table: five framing questions, each with a favorable and a critical reading set side by side. Does OER have to be human-created? Must it be copyrighted? Is open being misused? Will AI reproduce bias? Will OER reduce hallucination or increase it? The authors then argue each question in turn, invoking the critical pedagogy lineage of Freire, Giroux, and Farrow to justify treating the technology as a political object rather than a neutral aid. The "double-edged sword" figure comes from Selwyn.

The policy scaffolding is the part of the paper with the firmest footing, and it is worth separating from the speculation. The term OER was coined in 2002 at a UNESCO forum on open courseware for developing countries. The 2012 Paris Declaration tied open licensing to the right to education, cultural participation, and lifelong learning. The 2019 Recommendation gave OER the status of an international normative instrument with five pillars: capacity building, policy, access, sustainability, and international cooperation. The authors' point is chronological rather than evaluative: that Recommendation mentions artificial intelligence but was drafted before large language models, so it addresses a landscape of static content.

## Authorship, copyright, and the public domain trap

The legal argument runs through one national jurisdiction and then generalizes. The U.S. Copyright Office concluded in January 2025 that, given current generally available technology, prompts alone do not provide sufficient human control to make a user the author of an output, because prompts convey unprotectible ideas and do not control how the system processes them. Outputs made with little or no human creative involvement are therefore not copyrightable. The authors then draw out the consequence that most unsettles the field. If copyright is unavailable, the work falls immediately into the public domain, and if public domain material counts as open, then every purely machine-generated resource is OER. The alternative reading is that such material is not OER at all, which would require amending definitions that never specified human involvement in the first place.

The counterargument the paper stages against itself is hybrid intelligence: knowledge and resources produced jointly by people and machines, with the machine kept inside the knowledge creation process. Against that sits the objection that human creation is hard to define and that delegating the making of educational material to machines raises a question about what education is for. Copyright also carries a function the paper thinks the debate neglects. It records provenance, supports attribution, and acts as a rough proxy for quality, and no scheme has been proposed for attributing a sentence to the hundreds or thousands of authors whose work formed the model's basis.

## Openwashing and the collapse of a binary

The openness charge is aimed at a specific confusion, between resources that are free of charge and resources that are open in the sense the movement means. Perplexity and ChatGPT in their introductory offerings are gratis. Openness, on the authors' account, concerns whether models, parameters, weights, training data, documentation, and interfaces are available. Judged on those indicators, they write, the highest-profile chatbot is among the least open. Its claim to the word rests on open-source code, which nearly all software uses and which the authors call too low a standard. The Open Source Initiative's definition of open source AI sets a higher bar, requiring enough access for someone else to reconstruct the model in full.

From there the paper argues that the binary itself has to go, and this is its most useful conceptual move. Following Widder, Whittaker, and West, it proposes transparency, reusability, and extensibility as dimensions; following White and colleagues, reproducibility, transparency, and usability. A generative system is a composite of training content, training software, weights, and inference software, and each of those has decades of licensing practice behind it. So the question becomes whether the training content is open content, whether the training software is open-source software, whether the weights are open data, and whether the 5Rs apply to each. The authors concede that whether weights count as data, software, or content is unsettled, and answer that the licensing knowledge exists either way.

## Translation, bias, and the hallucination loop

The equity argument is the one with the longest pedigree in the paper. Most OER content originates in the Global North, and the flexibility that makes OER easy to localize also makes the flow one-directional, from richer and more widely spoken languages to less widely spoken ones and to the Global South. Generative tools for video, image, and software production are largely sold as paid services, so the capacity to adapt sophisticatedly is concentrated where money already is. The authors add a second-order effect that is easy to miss: when prompting for a new resource is cheap, the incentive to find, reuse, and remix an existing one weakens, which works against the commons the movement built.

Hallucination gets the same two-column treatment. OER can reduce fabrication by giving models expert-reviewed content to draw on, and retrieval from a prompt can outperform fine-tuning for accuracy. OER can also make accuracy worse, because outdated, poorly formatted, conflicting, or unvetted material enters training and retrieval alike. The authors' resolution is that the effect depends on curation rather than on openness as such, which is a claim about data practice rather than about licensing.

## What this means for practice

Instructors should start with the distinction the paper spends most of its space establishing, and ask of any tool whether it is gratis or open before asking whether it is good. A free chatbot that trains on student work and discloses nothing about its data is a different proposition from a system whose weights and sources can be inspected, even when both cost nothing to use.

The paper's practical test is whether you can see what happened inside the model: what it was trained on, how it assembled an answer, and whether the sources it cites exist. Where that is unavailable, the authors argue, open content produced by closed tools leaves the institution dependent rather than empowered. The appropriate response is to treat the tool as a vendor relationship with terms to negotiate rather than as infrastructure to rely on. For faculty developers the implication is that AI literacy and open licensing literacy are now the same conversation.

## Limitations

- The paper presents no data of any kind: no case, survey, document analysis, or systematic review of policy. Its five tensions are asserted and illustrated from secondary sources, so the relative severity of the risks is not established, and the text never says what evidence would settle which of the paired readings holds.
- The legal analysis rests on United States material, principally the Copyright Office report and a single district court ruling on fair use, and is then generalized to an international landscape the authors do not survey. Other jurisdictions with different authorship doctrines are not examined.
- Openness rankings for AI systems are taken from other authors rather than measured here, and the paper applies no defined instrument to a defined set of tools, so "among the lowest" is reported rather than demonstrated.
- The "white box" prescription is not operationalized. The paper gives no criteria, thresholds, audit procedures, or worked examples of a compliant system, and no account of who would fund the infrastructure or enforce the transparency.

## Citation

Tlili, A., Farrow, R., Bozkurt, A., Amiel, T., Wiley, D., & Downes, S. (2026). [*The double-edged sword: Open educational resources in the era of Generative Artificial Intelligence*](https://doi.org/10.37074/jalt.2026.9.1.6). *Journal of Applied Learning & Teaching*, 9(1).
