---
title: "Structural Silence: When AI Infrastructure Fails Speakers of Underrepresented Languages"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-08-24T04:54:02-04:00"
type: article
tags: [equity, multilingual-learning, language-learning, digital-divide, global-south, ai-education, inclusive-ai, higher-ed]
sources: ['raw/papers/2608.12278.md']
confidence: high
---

> **Synthesis:** Roy & Roy (2026) argue that the **infrastructure of AI** — training corpora, tokenization, benchmarks, deployment architectures — systematically disadvantages speakers of underrepresented languages *before a model is trained*, reframing dataset scarcity as a structural barrier rather than an isolated technical limitation. Using Bengali as a case in AI-assisted education, they document four interlocking failures: a web-presence gap (<0.5% of global content for ~4% of the population), a 67:1 English↔Bengali training-token deficit, a tokenization penalty from the alphasyllabary script, and connectivity exclusion (36.5% rural vs 71.4% urban internet penetration). They position **offline-first design** as an equity-oriented infrastructure strategy. The work connects to [[equity-in-ai-education]], [[language-learning]], and [[digital-divide]] debates in educational AI.

## Key Findings

1. Underrepresented languages are excluded from AI infrastructure through **structural, design-level decisions** — not explicit policy — and this exclusion compounds across four layers: web presence, training tokens, tokenization, and deployment connectivity.
2. Bengali represents roughly 4% of the global population but less than 0.5% of global web content, while English holds ~49.5% of web content — a web-presence gap that precedes any model training.
3. Major multilingual corpora allocate tokens at a **67:1 English-to-Bengali deficit**, and Bengali's alphasyllabary script compounds the data shortfall by forcing higher **token fertility** under standard Latin-script tokenizers, so equal data volumes still leave a performance gap.
4. Rural learners face a connectivity exclusion (36.5% individual internet penetration vs 71.4% urban) that makes cloud-dependent AI tools functionally inaccessible, turning native-language, **offline-first design** into a prerequisite for educational access rather than a convenience.

## Four Interlocking Infrastructure Failures

The paper identifies four structural barriers that compound to exclude underrepresented languages from AI-assisted education:

- **Web presence gap:** Bengali accounts for under 0.5% of global web content despite representing nearly 4% of the global population, while English commands approximately 49.5%. Because [[llm]] training corpora are largely harvested from web crawls like Common Crawl, a language's digital presence constrains its representation in training data.
- **Training-token deficit:** a 67:1 deficit between English and Bengali in major multilingual corpora. The Sangraha corpus allocates ~30B Bengali tokens against ~2T English tokens in Common Corpus, and inclusion in a multilingual set does not guarantee competence — large models like XGLM and BLOOM can underperform bigram baselines on low-resource perplexity benchmarks.
- **Tokenization penalty:** Bengali's alphasyllabary script compounds the data deficit through higher token fertility. Standard [[llm|large language model]] tokenizers ([[generative-ai|BPE, WordPiece]]) were optimized for Latin scripts, and matras and conjuncts (yuktakshar) fragment into noisy subword clusters that disrupt linguistic units.
- **Connectivity exclusion:** individual internet penetration is 36.5% in rural areas versus 71.4% in urban areas; household access is not individual access, and rising data costs (mobile data duty up from 3% to 23%) price out lower-income rural learners.

These failures reflect longstanding resource-allocation decisions, institutional priorities, and design defaults that did not center underrepresented languages in mainstream AI development. The paper frames this cumulative exclusion as **structural silence**.

## Reframing Scarcity as Structure

The authors argue dataset scarcity should be understood as a **structural barrier** rather than an isolated technical limitation. Treating scarcity purely as a data-volume problem obscures its structural origins in funding patterns, publication incentives, and research priorities that directed resources toward high-resource languages. When researchers build Bengali AI tools, they perform foundational infrastructure work — curating datasets, validating translations, building [[benchmark|evaluation benchmarks]] — that the field has historically declined to fund as primary research. The absence of a Bengali programming-education corpus is not natural scarcity but the cumulative effect of institutional decisions about which outputs deserve recognition. This is a core concern of [[equity-in-ai-education]] and the [[digital-divide]] literature.

## Educational Consequences: The Double Burden

For Bengali-speaking learners using AI-assisted [[cs-education|programming tools]], the four failures converge in a compounded cognitive burden. Learning to program, and especially debugging, is cognitively demanding regardless of first language; when an AI tool delivers explanations in English — as any general-purpose model will, given the training-data distribution — learners with limited English proficiency must process linguistic content and technical content concurrently, frequently exceeding working-memory capacity under cognitive-load theory. Empirical work (e.g. Roussel et al., with 294 higher-education students) shows foreign-language content yields lower outcomes than native-language instruction, and bilingual programming instruction outperforms English-only instruction. Native-language AI explanation is thus a prerequisite for meaningful access in [[multilingual-learning|multilingual]] contexts, not an enhancement — a central tension for [[ai-education]] design in [[global-south|low-resource, global-south settings]].

## Offline-First as Equity Architecture

The authors recommend treating **offline-first design** as an equity-oriented infrastructure strategy for AI-assisted education in low-connectivity environments rather than a secondary technical compromise. Local inference on quantized, parameter-efficient models (e.g. QLoRA, LoRA) has made on-device deployment feasible, extending reach to users excluded by cloud connectivity assumptions. This choice also carries a sustainability dividend — local inference on a quantized 7B-parameter model consumes a fraction of the energy of routing every query through a remote API. Evaluation frameworks that test only high-connectivity performance implicitly validate tools that are inaccessible to large portions of their stated target populations. This reframing connects to [[accessibility]], [[inclusive-learning]], and [[bias-mitigation]]: design choices that assume connectivity are themselves a form of exclusion.

## Implications

- **Recognize low-resource language infrastructure as primary research.** Dataset, corpus, and benchmark construction for underrepresented languages should be credited on equal terms with model or architectural innovation, not treated as preliminary "supporting labor." This is a central recommendation of the paper's engagement with [[educational-nlp]].
- **Treat offline-capable design as a serious access strategy** with its own design requirements and evaluation criteria, appropriate where connectivity cannot be assumed — extending reach to [[global-south|rural, low-connectivity]] learners rather than offering a degraded version of cloud deployment.
- **Give linguistic analysis a central role** in AI development. Linguists can name the tokenization, evaluation, and modeling assumptions — such as why standard BPE fits Bengali's modification structure poorly — that remain invisible when English is treated as the reference standard. This makes [[language-learning]] and linguistic equity a [[equity-in-ai-education|core equity]] concern rather than a peripheral one.
- **For smaller, less-resourced languages the challenges are more severe** — Bengali's demographic scale and literary history foreclose the convenient explanations that "underuse" invites, so the infrastructure-level logic identified here generalizes to even greater effect elsewhere.

## Connected Concepts

- [[equity-in-ai-education]]
- [[language-learning]]
- [[digital-divide]]
- [[ai-education]]
- [[higher-ed]]
- [[privacy]]
- [[inclusive-learning]]
- [[english-education]]

## Connected Articles

- [[ai-scoring-language-bias-physics]]
- [[sec-ai-literacy-narrative-review-2026]]
- [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]]

## Citation

Roy, A., & Roy, P. (2026). [*Structural silence: When AI infrastructure fails speakers of underrepresented languages*](https://arxiv.org/abs/2608.12278). arXiv:2608.12278.
