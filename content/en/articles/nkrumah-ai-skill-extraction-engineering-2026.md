---
title: "Comparing AI Approaches for Automated Skill Extraction: From Embeddings to Agentic Systems for Engineering Education"
created: "2026-11-16T09:30:00-04:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Nkrumah, S. K.", "Tucker, S. M.", "Boyle, F.", "Walsh, J."]
published: "2026-08-31"
venue: "ASEE Computers in Education"
source_url: https://doi.org/10.18260/B4B8-9A-80426
foundations: [agentic-ai]
pedagogy: [career-development-and-readiness]
technology: [educational-nlp, llm, machine-learning]
methods: [benchmark, quantitative-research]
ethics: [equity-in-ai-education, hallucination-risk]
research_method: [experiment]
discipline: [engineering education]
level: [higher ed]
audience: [administrators, curriculum designers, researchers, institutions]
sources: ['raw/papers/nkrumah-ai-skill-extraction-engineering-2026.md']
confidence: high
source_depth: full text
evidence_context: educational
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Nkrumah and colleagues (2026) ran 11 configurations of automated skill extraction — two embedding models, eight generative LLM setups, and one [[agentic-ai|agentic]] ReAct system — against an ESCO-annotated [[benchmark|benchmark]] of 926 job-posting samples carrying 1,696 gold-standard skills, and found no single winner. The ReAct agent posted the highest enhanced recall at 89.7%, well above the best generative configuration (83.7%) and far above the best embedding model (49.1%), but its precision was 22.7%, so its F1 (36.3%) trailed a tool-grounded Gemini 2.5 Flash that reached 51.6% enhanced F1 by constraining outputs to valid taxonomy entries. Tool-grounded configurations also led exact matching at 62.8%, the metric that matters when extracted skills must populate a database. The methodological contribution matters as much as the ranking: an eight-layer matching pipeline raised measured recall by 11 to 72 percentage points across every configuration, which means prior exact-match evaluations have understated what [[generative-ai|generative]] systems can do when a prediction is semantically right but lexically different. The practical message for engineering programs is to choose by downstream reviewer: broad agentic coverage where a human advisor will prune, tool-grounded generation where a student sees the output unmediated.

## Key Findings

- **Recall and F1 disagree about which system is best.** ReAct led enhanced recall at 89.7%, a 6–14 percentage-point margin over the generative configurations, but 22.7% precision left it at 36.3% F1, below tool-grounded Gemini 2.5 Flash at 51.6% (79.9% recall, 38.1% precision).
- **Tool grounding bought exact alignment.** Tool-grounded Gemini 2.5 Flash reached 62.8% exact recall, and tool-grounded methods dominated exact precision and recall generally, because their outputs are constrained to valid ESCO entries instead of free-form skill names.
- **Embedding models occupy a speed regime of their own.** SBERT returned results in 11 milliseconds per sample and ModernBERT in 16, with SBERT holding 38.4% enhanced precision — comparable to the top generative systems, since nearest-neighbor retrieval returns canonical taxonomy strings — but only 35.5% enhanced recall.
- **The best embedding recall still trails generative systems by a wide margin.** ModernBERT's 49.1% enhanced recall was the strongest embedding result, against 83.7% for the best generative configuration, a gap the authors attribute to embeddings matching only what is stated rather than reasoning about implied competencies.
- **The matching pipeline, not the model, explains much of the apparent gap.** Enhanced matching improved measured recall by 11–72 percentage points across all 11 configurations; the largest jump was 70.9 points for Gemini 2.5 Pro with chain-of-thought, whose natural-language descriptions matched gold labels semantically but rarely lexically.
- **Few-shot prompting improved precision more than recall.** Gemini 2.5 Flash moved from 22.4% to 36.8% enhanced precision and Llama 3.2 3B from 9.1% to 31.7%, while enhanced recall stayed comparable to zero-shot — examples constrained the output vocabulary rather than broadening coverage.
- **Latency spans four orders of magnitude.** Embedding models answered in 11–16 milliseconds, Gemini configurations in 2.6–7.6 seconds, and the ReAct agent in about 16 seconds per sample, with the locally run Llama 3B tool-grounded configuration at 58,248 milliseconds on consumer hardware.
- **High recall arrived with over-extraction.** On a one-sentence input naming Solidity as the gold skill, ReAct returned 25 candidate items; a zero-shot generative configuration returned 39 for the same input, while tool-grounded Gemini Flash returned the correct ESCO entry plus one near miss.

## How the study was done

The benchmark is the Skill Extraction dataset, an extension of SkillSpan with ESCO annotations: 926 job-posting samples spanning technology, household services, and mixed industries, each carrying one to five gold skills drawn from the 13,939-skill ESCO classification. Unlike a named-entity dataset, it maps text spans to standardized skill identifiers, so a system is scored on taxonomy-grounded extraction rather than mention detection. The authors chose ESCO over O*NET, Lightcast, and the e-Competence Framework for its multilingual coverage, hierarchy, and explicit skill-to-occupation links.

Eleven configurations were tested. Embedding systems were SBERT with the all-MiniLM-L6-v2 checkpoint and ModernBERT-base, both zero-shot, each computing cosine similarity against pre-computed embeddings of every ESCO skill. Generative systems were Gemini 2.5 Flash in zero-shot, ten-example few-shot, and tool-grounded variants, Gemini 2.5 Pro in chain-of-thought and few-shot chain-of-thought variants, and Llama 3.2 3B-Instruct in zero-shot, few-shot, and tool-grounded variants, with Gemini calls at temperature 0 through the cloud API between 9 December 2025 and 1 January 2026. The agentic system was a ReAct agent using Gemini 2.5 Pro as its reasoning backbone with an ESCO lookup tool: state accumulated the text, reasoning trace, tool history, and candidate lists; the action space held `search_esco` and `finish`; the loop ended at finish or a 20-step budget, with most samples terminating after one to three cycles (mean 1.7, median 2 on a 100-sample subset).

Scoring used an eight-layer pipeline applied from strictest to loosest — exact match, substring, three fuzzy ratios at 85, a difflib sequence ratio at 0.85, word-level Jaccard at 0.7, and SBERT cosine similarity at 0.85 — with the first successful layer recorded. Precision, recall, and F1 were reported under both exact and enhanced matching, alongside latency. Recall was designated the primary metric because the target applications are [[curriculum-design|curriculum]] mapping, career advising, and skills-gap analysis, where a missed skill removes an option a student never sees while a surplus candidate is cheap to filter.

## What this means for practice

- **Program administrators commissioning a curriculum-alignment pilot.** Start with the tool-grounded configuration. Its 62.8% exact recall means extracted skills carry valid ESCO identifiers that can go into a committee report or a database without a manual relabeling pass, which is the difference between an analysis and a demo.
- **Career services staff advising individual students.** Use the higher-recall agent and budget the review time. ReAct's 89.7% recall comes with 22.7% precision and outputs three to five times longer than tool-grounded generation, so the advisor's job becomes pruning a candidate list rather than wondering what was missed. The authors frame the same service as an [[equity-in-ai-education|equity]] measure: explicit skill-to-career mapping gives first-generation students the intelligence their peers get informally through professional networks, provided a human stays in the advising loop.
- **Instructors building a skills-gap exercise.** Combine configurations rather than choosing one: a low-cost embedding pass over hundreds of postings to find high-frequency skills, then tool-grounded generation to align the shortlist with taxonomy entries. The authors describe exactly this pipeline for an annual program review.
- **Institutions weighing procurement and infrastructure.** Price latency and API calls against volume. SBERT runs locally at 11 milliseconds with no incremental cost, cloud generation runs seconds per sample with per-request cost, and the agent runs about 16 seconds — which rules the agent out of anything interactive such as live form feedback.
- **Researchers and evaluation designers.** Do not score extraction with string equality. The 11–72 point swing from one matching pipeline is the strongest argument in the paper that an exact-match evaluation measures formatting as much as capability.

## Limitations

- The evaluation rests on a single English-language benchmark of 926 samples and 1,696 skills, which the authors say may not represent the diversity of engineering domains or document types met in practice; multilingual and domain-specific corpora are left to future work.
- Model versions were accessed between December 2025 and January 2026, so results describe that snapshot and later releases may behave differently, though the comparative method transfers.
- A larger Llama variant was not tested because of local GPU memory limits, so Llama 3.2 3B against the Gemini 2.5 family carries a parameter-count difference that the authors ask readers to keep in mind.
- The paper compares systems against each other, not against human expert extraction, so absolute accuracy has no human reference point.
- The eight-layer thresholds were set from preliminary experiments and may not be optimal across skill types, and the ESCO taxonomy itself updates infrequently — only incremental changes since version 1.0 in 2017 — so emerging skills in AI, cybersecurity, and sustainability may fall outside the label space entirely.
- Latency comparisons between locally run Llama and cloud-hosted Gemini reflect infrastructure rather than model efficiency, which the authors state explicitly.

## Citation

Nkrumah, S. K., Tucker, S. M., Boyle, F., & Walsh, J. (2026). [*Comparing AI Approaches for Automated Skill Extraction: From Embeddings to Agentic Systems for Engineering Education*](https://doi.org/10.18260/B4B8-9A-80426). *ASEE Computers in Education, 15*(4), 26–48.
