---
title: 'The Environmental Cost of LLMs in AIED: Reporting and Practices'
created: 2026-06-11
updated: 2026-06-11
type: article
tags: [llm, generative-ai, efficacy-study, policy-maker, privacy]
sources: [raw/papers/2606.11215.md]
confidence: high
---

# The Environmental Cost of LLMs in AIED: Reporting and Practices

**Sabrina C. Eimler, Lukas Erle, Daniel Flood, Aditi Haiman, Luca Häckert, André Helgert, Lachlan McGinness, Büsra Yapici**

## Summary

LLM usage has become pervasive in the [[ai-k12-evidence-base|AIED]] community, but the computational and environmental costs of deploying these models remain almost entirely unreported. This paper systematically reviews the AIED 2025 conference proceedings and finds that while most projects use LLMs, nearly none report computational resources or discuss environmental impacts as an ethical concern.

## Key Findings

- **Widespread usage, invisible costs:** A review of all AIED 2025 conference papers reveals an "LLM adoption without disclosure" pattern — most projects use LLMs, but fewer than a handful report resource consumption or carbon footprint.
- **No standardised reporting:** There is no established procedure in the AIED community for measuring or disclosing the computational expense or environmental cost of LLM-based systems.
- **Open-source methodology proposed:** The paper introduces a standardised, open-source method with two components:
  1. **Software tools** for measuring carbon footprint on both local and cloud hardware.
  2. **An easy-to-use formula** for estimating computational expense of frontier LLMs, even when exact parameter counts are unknown (common with proprietary models).
- **Ethical imperative:** The paper argues that failing to report environmental costs is itself an ethical concern — aligning with broader calls for [[ai-tutor-safety-harms|responsible AI]] and [[principled-ai-education|transparency]] in educational technology.

## Implications for AIED

### For Researchers
- Adopt the proposed measurement tools to include carbon footprint alongside performance metrics in future publications.
- Conferences should consider requiring environmental impact disclosure in review checklists, similar to ethics statements.

### For Developers
- When deploying LLM-based educational tools, quantify and report computational expense so institutions can factor environmental costs into procurement decisions.
- Consider efficiency-accuracy tradeoffs: smaller, fine-tuned models may achieve comparable educational outcomes at a fraction of the environmental cost.

### Connection to Broader AIED Themes
- The lack of reporting parallels the [[ground-truth-reliability-aied|ground truth reliability crisis]] in AIED — in both cases, essential contextual information goes unreported, undermining the field's ability to aggregate evidence and make informed decisions.
- The [[ai-tutor-safety-harms|ethics of AI in education]] must expand beyond bias and privacy to include environmental sustainability.
- Institutional [[ai-k12-evidence-base|adoption decisions]] should weigh environmental costs alongside learning gains and implementation costs.

## Related Pages
- [[ai-tutor-safety-harms]] — Broader ethical concerns in AI tutoring including safety and harms
- [[principled-ai-education]] — Framework for responsible AI deployment in education
- [[ai-k12-evidence-base]] — Evidence base for AI in education, now including sustainability as a dimension
- [[educational-llm-alignment]] — Alignment of LLM behavior with educational goals
- [[ground-truth-reliability-aied]] — Systemic under-reporting of essential methodological details in AIED

## Citation

Eimler, S. C., Erle, L., Flood, D., Haiman, A., Häckert, L., Helgert, A., McGinness, L., & Yapici, B. (2026). [The Environmental Cost of LLMs in AIED: Reporting and Practices](https://arxiv.org/abs/2606.11215). arXiv:2606.11215.
