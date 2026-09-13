---
title: "KAFA: A Knowledge-Augmented Form-Filling Agent for Higher Education Services"
type: article
tags: [agentic-ai, llm, rag, knowledge-graph, higher-ed, human-in-the-loop-ai]
sources: ['raw/papers/kafa-knowledge-augmented-form-filling-agent-2026.md']
confidence: medium
research_method: [system development, benchmark]
discipline: [information technology]
audience: [software developers, administrators, researchers]
level: [higher ed]
category: [framework]
created: "2026-09-13T08:05:15-04:00"
updated: "2026-09-13T08:05:15-04:00"
---

> **Synthesis:** [[higher-ed|Universities]] require students, faculty and staff to complete structured forms across heterogeneous [[governance|institutional]] platforms, and variation in field naming, page layout, validation rules and dynamic interaction logic defeats rule-based automation. The authors present KAFA, a knowledge-augmented form-filling agent that combines a large language model (DeepSeek), Chrome DevTools Protocol based parsing of live web structure, a [[multimodal]] personal knowledge base, tri-source collaborative retrieval, reuse of historical filling trajectories and adaptive error correction. Evaluated on public recruitment forms that share profile-oriented structures with higher-education service forms, KAFA raised the macro-averaged F1 from 0.7125 to 0.9558 and end-to-end accuracy from 0.5755 to 0.9166 while holding precision at 97.79% and lifting recall to 93.59%. The contribution is the demonstration that combining [[rag|retrieval]] over structured, vector and graph stores with [[llm|LLM]] reasoning produces robust filling in education-oriented web services.

## Key Findings
1. The rule-based baseline was precise but brittle: 98.97% overall precision, but recall and accuracy collapsing to 0.4552 on complex forms where fields are generated dynamically and labels are semantically ambiguous.
2. KAFA improved the macro-averaged F1 from 0.7125 to 0.9558 and end-to-end correctness from 0.5755 to 0.9166 across form complexity levels, while keeping precision at 97.79% and raising recall to 93.59%.
3. The architecture is deliberately composite rather than a single prompt: the LLM is paired with CDP-based parsing of the live DOM, a multimodal personal knowledge base, tri-source collaborative retrieval, reuse of past filling trajectories and adaptive error correction.
4. Retrieval spans three knowledge representations — structured, vector and graph — which is what the authors credit for handling field-naming variation and semantic ambiguity that break keyword and XPath matching.
5. Evaluation metrics separate reliability from completeness: precision (correctly filled over fields filled), recall (correctly filled over fields that should be filled), F1, and end-to-end correctness over all fields including missed ones.

## What generalises to student-facing AI services
The paper is a systems contribution, and its most transferable claims are architectural. First, rule-based automation fails predictably at semantic ambiguity, so hybrid designs that keep deterministic matching as a precision anchor and add model-based reasoning for recall are preferable to replacing rules entirely. Second, personal knowledge bases carry the repeated profile information that institutional forms request, which is also the data that raises [[privacy]] questions — the paper positions the personal knowledge base as the substrate that must be governed. Third, the design assumes a [[human-in-the-loop-ai|human in the loop]] at the point of submission rather than full [[agency|autonomy]], since a mis-filled administrative form has consequences for the student.

The claims should be read within their evaluation scope. The experiments use public recruitment forms as proxies, not actual institutional systems; the paper argues these share profile-oriented structure with higher-education service forms, and that framing is an argument rather than a validation on university platforms in production. The system's reliance on DevTools-protocol interaction also constrains it to browser-reachable services.

## Implications for institutions and developers
- Treat administrative workflows as a legitimate AI application area: the failure mode of rule-based automation is well characterised and the fix is architectural.
- Keep the model and the retrieval layer separable, so field-level errors can be traced to either knowledge gaps or reasoning errors.
- Design for verification before submission rather than autonomous submission.
- Consider the privacy surface created by maintaining a personal knowledge base of student profile data across institutions.

## Connected Concepts
- [[agentic-ai]] — an LLM-driven agent acting on live web interfaces
- [[llm]] — DeepSeek as the underlying reasoning model
- [[rag]] — tri-source collaborative retrieval over structured, vector and graph stores
- [[knowledge-graph]] — the graph representation in the knowledge base
- [[higher-ed]] — the institutional service context
- [[privacy]] — personal profile data in the knowledge base

## Connected Articles
- [[modular-educational-llm-agency]] — Modular agency for educational LLMs
- [[agentic-ai-education-scoping-review]] — Agentic AI in education
- [[ai-information-extraction-undergraduate-thesis-2026]] — AI information extraction on academic documents
- [[academiclaw-student-agent-benchmark]] — Benchmarking student-facing agents
- [[agentschool-multi-agent-simulation-education-2026]] — Multi-agent simulation in education

## Citation
Sang, H., Liu, M., Tang, J., Yang, Y., & Chen, Y. (2026). [Knowledge-augmented form-filling agent for higher education services](https://doi.org/10.1186/s41239-026-00612-x). *International Journal of Educational Technology in Higher Education, 23*(1), 36.
