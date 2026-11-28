---
title: "Domain-Grounded versus General-Purpose AI Chatbots: User Experience and Perceived Heritage Learning in Heritage Interpretation"
created: "2026-11-28T03:19:26-05:00"
updated: "2026-11-28T03:19:26-05:00"
type: article
foundations: [human-ai-collaboration]
pedagogy: [situated-learning, experiential-learning, student-experience]
technology: [conversational-ai, generative-ai, rag, llm, multimodal]
assessment: [self-report-measures]
methods: [quantitative-research, usability-research]
ethics: [trust, hallucination-risk]
discipline: [humanities education]
level: [undergraduate]
audience: [instructional designers, educational technology developers, instructors]
page_kind: [evaluation]
research_method: [user study]
evidence_context: educational
sources: ['raw/papers/yan-domain-grounded-heritage-chatbot-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-28"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** **Domain-Grounded versus General-Purpose AI Chatbots** — A within-participant study asked 186 Taiwanese university students to interpret the sugar-industry heritage of Huwei Sugar Town using two [[conversational-ai|conversational AI]] systems, then rate both on 24 matched items across six dimensions. NFU Buddy, a LINE-based chatbot grounded in a curated local landmark database and running on GPT-4o, beat the general-purpose ChatGPT mobile application on five of six dimensions. The gaps were largest where the domain mattered — cultural grounding and credibility (ΔM = 0.65, dz = 0.78), engagement and local interpretation (ΔM = 0.56, dz = 0.77), and heritage learning (ΔM = 0.51, dz = 0.66) — and absent for usability, where the two systems were rated as equally easy to use — which is the paper's main theoretical point: [[rag|domain grounding]] shows up in what users believe about a response, not in how easily they type a question. The authors are explicit that these are ratings of two deployed applications, not a causal estimate of grounding, and that [[self-report-measures|perceived learning]] is not measured knowledge.

## Key Findings

- **Grounding was visible in credibility, not in usability.** NFU Buddy scored 4.44 against ChatGPT's 4.36 on Usability, a difference that was not statistically significant (dz = 0.13).
- **Cultural Grounding and Credibility carried the largest difference.** Mean ratings were 4.46 for the grounded system and 3.81 for ChatGPT (ΔM = 0.65, dz = 0.78) — a large effect under the authors' stated benchmarks.
- **Engagement and Local Interpretation moved almost as much.** 4.38 against 3.82 (ΔM = 0.56, dz = 0.77), covering items on narrative quality, usefulness for cultural-tourism route planning, and similarity to a local guide.
- **Heritage Learning favored the grounded system.** 4.52 against 4.00 (ΔM = 0.51, dz = 0.66), on items about understanding sugar-industry culture, heritage stories, and interest in further cultural learning.
- **Response Quality and Satisfaction differed significantly but more modestly.** Response Quality was 4.45 against 4.16 (ΔM = 0.28, dz = 0.38) and Satisfaction and Behavioral Evaluation 4.45 against 4.11 (ΔM = 0.33, dz = 0.45).
- **The pattern held after a multiple-comparison check.** The five statistically significant dimension differences remained significant under a Bonferroni adjustment for six tests; Usability did not.
- **The sample was AI-experienced and partly local.** 185 participants (99.5%) had used ChatGPT before and 174 (93.5%) had used a specialized chatbot, while 100 (53.7%) reported being somewhat or very familiar with Huwei's sugar-industry heritage — a population that can judge credibility but is not a first-time visitor.

## What the study compared

Huwei Sugar Town in Yunlin County, Taiwan, is a distributed industrial-heritage landscape rather than a single site: an operating sugar factory, narrow-gauge railway infrastructure, administrative and residential buildings, all historically linked through sugar production. That distribution creates the interpretive problem the study targets — a visitor can stand in front of a building without knowing its name, function, or relation to the rest of the town.

NFU Buddy was built to answer that problem. Its knowledge environment is a curated landmark database maintained in Google Sheets and reached through the Sheets API, recording classification, architectural style, structural system, roof type, function, artistic features, materials, opening forms, historical summaries, interview material and reference images. Photographs are processed by a vision–[[llm|language model]] into feature labels that are matched against seven categories (roof type, material, opening form, structural system, architectural style, art, function), with category weights (3.0 for roof type and material down to 0.5 for function) combined with inverse document frequency, so uncommon features count for more. The top candidate is accepted only if its normalized score is at least 0.30 and leads the runner-up by 0.10; otherwise the system asks for another photograph from a different angle. GPT-4o generates the responses and LINE is the interface. ChatGPT served as the general-purpose comparison, used through its own mobile application with no access to the Huwei database.

The 186 participants, all aged 18 or older and drawn from different departments at National Formosa University, used both systems on their own smartphones between 3 and 21 June 2026, always ChatGPT first and NFU Buddy second. They rated each system on the same 24 five-point Likert items, grouped into Usability (3 items), Response Quality (4), Cultural Grounding and Credibility (5), Heritage Learning (3), Engagement and Local Interpretation (5), and Satisfaction and Behavioral Evaluation (4). Analysis was paired-samples t tests with Cohen's dz and 95% confidence intervals; the dimensions were treated as descriptive categories, not validated latent constructs, and the study was not pre-registered. Every dimension mean favored NFU Buddy; the paired comparisons reached p < 0.001 for five dimensions (t = 5.22 to 10.64) and p = 0.089 for Usability (t = 1.71).

## Differences concentrated where the domain mattered

The pattern of results is the argument. If a curated knowledge base simply made a better product, users should have rated it higher across the board, including on how easy it was to ask a question. They did not. Both systems offered ordinary natural-language chat on a phone, and participants rated their usability as equivalent. What separated them was everything that depended on knowing Huwei: whether a response was consistent with local history, whether it was credible, whether the interaction felt like a local guide rather than a search result, and whether the student came away feeling they understood the sugar industry better.

That is a useful correction to the way [[rag|retrieval-augmented generation]] is usually evaluated. Benchmarks measure whether retrieval improves factual accuracy; this study measures whether users notice. The authors' framing is that technical grounding and user experience are related but distinct levels of evaluation, and that a system can be more credible without being easier — which is exactly what happened here. For anyone building [[discipline-specific-aied|discipline-specific AI]], the practical reading is that domain knowledge is part of the [[student-experience|user experience]], not a backend property, and it should be measured with domain-specific items rather than with generic satisfaction scales.

The heritage setting matters to the interpretation. [[situated-learning|Situated]] and [[experiential-learning|experiential]] accounts of learning predict that meaning in a place-based domain comes from relationships — between buildings, historical functions, local narratives and the landscape — rather than from isolated facts. A general model can produce fluent, plausible descriptions of a sugar factory that do not connect to the narrow-gauge railway two streets away. The grounded system's advantage in the Engagement and Local Interpretation dimension is consistent with that account, though the design cannot demonstrate it.

## What perceived learning can and cannot tell you

The Heritage Learning dimension is where the study is most useful and most limited at once. NFU Buddy's advantage there (dz = 0.66) says participants believed the interaction helped them understand Huwei's heritage and increased their interest in cultural learning. It does not say they learned more. Subjective learning judgments are shaped by engaging presentation, response detail and prior local familiarity — and 53.7% of this sample already knew the heritage well — while the study collected no pre–post knowledge test, no delayed retention measure, and no expert audit of whether either system's historical claims were accurate.

The authors are unusually direct about this boundary, and it is the right boundary to draw. A higher [[trust|trust]] rating for a grounded system is a real finding about adoption: users who find responses credible and locally meaningful are more likely to keep asking. But trust is also the outcome most vulnerable to fluent fabrication, which is why the paper closes by calling for expert content checks and objective learning measures alongside perception scales. The same caution applies to the comparison itself: the two systems differed in interface, model configuration, prompting and a fixed exposure order that was not counterbalanced, so no difference here can be attributed to [[rag|domain grounding]] alone.

## What this means for practice

- **Instructional designers.** Choose evaluation items that match the domain. A generic satisfaction or usability scale would have shown almost no difference between these systems; the credibility, local-interpretation and perceived-learning items are what revealed the grounded system's value.
- **Educational technology developers.** Treat the curated knowledge base as a product feature with a user-visible payoff, and expect the payoff to appear in credibility and interpretive depth rather than in ease of use. A grounding project that only promises accuracy benchmarks is underselling — and under-measuring — what it changes.
- **Instructors.** In place-based or site-based tasks, pair the chatbot with an assessment that can actually detect learning. Asking students to rate how much they learned is cheap and informative about engagement, but it cannot separate a genuinely better explanation from a more confident one.
- **Evaluators.** Counterbalance system order and hold model, interface and prompting constant before claiming a grounding effect. The fixed ChatGPT-first sequence in this study leaves practice, novelty and contrast effects as live alternatives.

## Limitations

- **Ratings of two deployed applications, not a controlled experiment.** The systems differed in interface (LINE versus the ChatGPT app), model configuration, prompts, photographs and session length, and every participant used ChatGPT before NFU Buddy, so order effects were not controlled.
- **Self-report only.** Heritage Learning and Cultural Grounding and Credibility reflect perceptions; no pre–post knowledge test, delayed retention measure or expert audit of historical accuracy was collected.
- **The dimensions are descriptive categories.** The six dimensions were not validated as latent constructs, no structural model was estimated, discriminant validity was not established, and the analysis was not pre-registered.
- **A single convenience sample in one heritage context.** 186 students from one Taiwanese university, 53.7% of them already somewhat or very familiar with the local heritage, evaluating one distributed industrial-heritage landscape — not tourists, residents, older visitors, or other heritage typologies.
- **The recognition component is not independently validated.** The landmark-matching thresholds are initial operational settings, formal accuracy validation is ongoing, and the documented scoring procedure is a description of the matching method rather than a fully reproducible specification.

## Citation

Yan, B.-F. (2026). [Domain-Grounded versus General-Purpose AI Chatbots: User Experience and Perceived Heritage Learning in Heritage Interpretation](https://doi.org/10.1016/j.chbah.2026.100436). *Computers in Human Behavior: Artificial Humans*. Advance online publication.
