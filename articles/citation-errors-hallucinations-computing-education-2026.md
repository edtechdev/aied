---
title: "Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature"
created: "2026-09-16T09:40:00-04:00"
updated: "2026-09-16T14:48:35-04:00"
type: article
tags: [academic-integrity, hallucination-risk, llm, generative-ai, cs-education, peer-assessment, meta-analysis-systematic-review, quantitative-research]
connected_faqs: [reporting-interpreting-aied-research]
sources: ['raw/papers/citation-errors-hallucinations-computing-education-2026.md']
confidence: high
research_method: [bibliometric, quantitative]
discipline: [cs education]
level: [higher ed]
audience: [researchers, instructors]
category: [synthesis]
---

> **Synthesis:** Denny et al. (2026) audit reference integrity across the entire ACM Digital Library — 723,930 publications and 15,872,533 references — to ask whether [[hallucination-risk|hallucinated references]] have arrived in the [[cs-education|computing education]] literature. Tracing 113,588 references from 5,225 computing education papers published since 2021, they manually verify 828 suspicious records and identify 30 references containing verifiably fabricated bibliographic information across 14 papers, all from 2025 and 2026. At the SIGCSE Technical Symposium alone the count rises from 3 in 2025 to 17 in 2026, appearing in 2.3% of 2026 proceedings papers, and hallucinated references appear across five SIGCSE-sponsored or in-cooperation venues in 2025. The authors stress that most suspicious references turn out to be ACM metadata mismatches or valid variants rather than fabrications, that their count is a deliberate lower bound, and that the burden this places on [[peer-assessment]] cannot be met by reviewers alone — [[academic-integrity]] here becomes a shared responsibility of authors using [[generative-ai]] [[llm|writing tools]], reviewers, and publishers.

## The dataset: the ACM Digital Library at scale

The study rests on a unique corpus obtained with ACM's support on 1 April 2026: 28,269 `.zip` archives that extracted to 1,304,236 metadata XML files spanning 1951 to 2026. After removing non-publication entries and duplicates, the final **Pubs** dataset held **723,930 ACM publications** and the **Refs** dataset **15,872,533 plain-text reference entries** — the largest-scale reference-integrity audit conducted in this field to date. Restricting to the 13 curated CS Ed venues (ACE, CSERC, CompEd, ICER, ITiCSE, Koli Calling, SIGCSE Bulletin, SIGCSE TS, SIGCSE Virtual, TOCE, UKICER, WCCCE, WiPSCE, plus Working Group reports for CompEd, ITiCSE and SIGCSE Virtual) yielded **24,751 CS Ed publications**. Because raw references were stored as highly varied plain text, the authors parsed each one into structured fields with a locally hosted small model (Qwen3.5-4B) in deterministic non-thinking mode, then applied multi-tier fuzzy matching — normalised DOI, then three normalised title variants, then boundary-aware title-substring search — against the Pubs records. This split the analysis set of **113,588 references** (from the **5,225 CS Ed publications dated 2021–2026**) into **SET A (39,620 matched references)** and **SET B (73,968 unmatched references)**. The 2021 start year was chosen to span several years before the widespread adoption of [[ai-technologies|AI tools]] while keeping manual checking feasible.

## Publication and reference trends (RQ1)

Publication volume in CS Ed venues has grown substantially since the mid-1990s, and reference lists have lengthened over the same period; the increase is less pronounced than in the broader ACM corpus but the upward trend is clear. The visible dip around 2010 is an artefact — until 2009, SIGCSE Technical Symposium records appeared both as conference proceedings entries and as SIGCSE Bulletin entries with distinct DOIs and venue records. The authors frame this as a compounding problem: as both publication volumes and reference-list lengths grow, so does the number of citations that authors, [[peer-assessment|reviewers]], and publishers must verify. Rising volume is therefore not just a scale nuisance but the mechanism by which fabricated references become harder to catch.

## A taxonomy of bibliographic errors (RQ2)

To make manual inspection tractable, the authors used an automated author-overlap check (exact surname matching with fuzzy fallback, nearby given names or initials, and special handling for truncated lists such as "et al.") to flag references whose authorship appeared inconsistent with the matched ACM record. This produced **1,278 candidate records**; manual screening removed false positives where the reference had actually cited a URL-only or non-ACM source, leaving **828 records for detailed manual coding** by two coders using an adapted version of Li et al.'s citation-hallucination taxonomy.

The resulting distribution was surprising. The largest category was **not** author fraud but an apparent mismatch between the ACM DL XML reference data and the plain-text reference as printed in the camera-ready PDF (**code S, 229 cases**): a frequent example involved "et al." being omitted or the author list otherwise altered in the XML while the PDF contained a clean, correct reference. Author-field errors — additions, deletions, reordering, or potential fabrication, the category labelled "hallucinated" in the source taxonomy — came second (**code H, 225 cases**), with deletions by far the most common. Valid bibliographic variants accounted for **188 cases (code R)**, Working Group, Task Force and ACM/IEEE [[curriculum-design|curriculum]] reports for **150 (code W)**, and there were only small numbers of minor typos (**code M, 22**) and harmless substitutions for "et al." such as "and al" or ellipses (**code A, 14**).

1. Code S — ACM metadata mismatch, 229 (PDF correct, no evidence of hallucination)
2. Code H — author-field error, 225
3. Code R — real reference, valid bibliographic variant, 188
4. Code W — Working Group, Task Force and ACM/IEEE reports, 150
5. Code M — other typo or apparent human error, 22
6. Code A — alternative substitution for et al., 14

The practical implication is that automated detection is bounded by the quality of the metadata it treats as ground truth. The authors give the example of the author "C. I. Chesñevar" appearing in the XML metadata as "C. I. Ches nevar", a special-character artefact; superficial checks will flag such cases and miss subtler hybrids at the same time.

## Verified hallucinations: shape and scale (RQ3)

Hallucination was defined deliberately conservatively: a reference qualifies only when it contains **verifiably fabricated bibliographic information**. Incomplete references are excluded — omitted authors or missing venue fields are not hallucinations unless the information present is false. Candidates were drawn from SET A entries coded H (**225**) and SET B entries whose parsed titles returned no match against the Semantic Scholar `/paper/search/match` endpoint (**239**), giving **464 candidates**, each manually searched online, with a second reviewer checking every entry that no credible record could be found for. The result: **30 hallucinated references across 14 papers**, all in the most recent part of the dataset.

Thirteen of the 30 appeared to be **entirely fabricated**, with no corresponding publication record found at all. The remaining **17 were hybrid references** combining a real title with fabricated or incorrect authorship, venue, or year. In all 17 hybrid cases at least some author names were fabricated, and in seven at least one listed author was correct. The paper's illustrative examples are instructive because they are not obviously fake: one reference to "[[k-12]] [[teacher-role|Teacher]] Experiences from Online [[educational-development|Professional Development]] for Teaching APCSA" carries a real title and correct venue but lists four authors who did not write it and cites pages 974–980, a range that cannot exist in the SIGCSE 2023 proceedings; another combines a real title, venue and DOI with three prominent scholars who did not author the paper and who have no joint 2023 publication. The authors connect this asymmetry to experimental work showing author fields fail far more often than other citation fields — author names are the least reliable part of an LLM-generated reference, and the most damaging to misattribute.

## Growth at the Technical Symposium: 3 to 17

In 2025 hallucinated references appeared across **five** CS Ed venues: SIGCSE TS, UKICER, CompEd, TOCE and ITiCSE. The largest single source outside SIGCSE TS was one **UKICER 2025 paper containing seven hallucinated references** — a quarter of the whole corpus — including a title ("Exploring the [[motivation|Motivational]] Role of LLMs in Programming Education") for which no record could be found in any online search, despite being attributed to the SIGCSE 2025 proceedings.

SIGCSE TS is the only venue where both the 2025 and 2026 proceedings were present in the snapshot, making it the paper's cleanest year-on-year comparison. Verified hallucinated references rose from **3 in the 2025 proceedings to 17 in the 2026 proceedings**, spread across **seven SIGCSE TS 2026 publications including four full papers in Volume 1**, and appearing in **2.3% of 2026 proceedings papers**. The full venue breakdown is 13 references across 4 papers (SIGCSE TS 2026 Volume 1), 4 across 3 (SIGCSE TS 2026 Volume 2), 1 across 1 and 2 across 2 (SIGCSE TS 2025 Volumes 1 and 2), 7 across 1 (UKICER 2025), and 1 across 1 each for CompEd 2025, TOCE 2025 and ITiCSE 2025 — **30 references in 14 papers**.

Two caveats are load-bearing. The ACM DL snapshot was taken on 1 April 2026, so 2026 coverage is partial — UKICER, ITiCSE and CompEd had not yet run that year, making any 2026 cross-venue comparison invalid. And because the identification criteria were intentionally restrictive, the authors present these counts as a **conservative lower bound**. The framing they draw is that the absolute rate remains small, but hallucinated references "are no longer isolated anomalies": they cross multiple venues and the SIGCSE TS comparison indicates a sharp increase.

## Why detection is hard, and why it may be worse than it looks

Both human and automated checking are difficult for structural reasons. Many initially suspicious references turned out to be ACM metadata mismatches, valid variants, or likely human errors rather than fabrications. Others are superficially plausible — real or legally changed author names attached to realistic titles — and required substantial manual work that goes well beyond what a reviewer can be expected to do. Automated reference checkers inherit the flaws of their ground-truth metadata, while superficial checks miss hybrid hallucinations that partially match real publications.

The authors also argue the published record understates the problem: their analysis covers only papers that survived peer review and publication checks, so given typical acceptance rates the submission stage likely contains a much larger population. This intersects with a documented peer-review capacity crisis, with growing use of [[generative-ai]] in research workflows, and with reports from other fields — an estimated 146,932 hallucinated references in 2025 in one multi-repository analysis, and a rise in NLP conference papers containing hallucinated references from 20 in 2024 to 275 in 2025. Parallel work has begun building targeted detectors, including similarity-matching citation verifiers and [[agentic-ai|multi-agent]] frameworks combining deterministic field matching with LLM adjudication for ambiguous cases.

## Shared responsibility: what the community should do

The response the paper advocates is explicitly collective rather than technological. Authors should verify every cited work — especially when [[llm|generative AI]] has been used during writing — and should not cite sources they have not personally checked, a stance that reframes careless [[ai-misuse-learning-harm|AI-assisted citation]] as a research-conduct issue. Reviewers and program committees should not be expected to audit every reference manually, but venues can adopt targeted checks for high-risk cases and make policies explicit at submission. Publishers should improve metadata quality, reduce discrepancies between publication records and camera-ready PDFs, and support post-publication correction. Institutions and venues are already moving: ACM policy ties content-integrity issues arising from AI use in authorship to possible retraction, arXiv has proposed lengthy bans for authors submitting fabricated references, and some computing education venues now list fabricated references among the grounds for desk rejection. The authors argue any automated tooling should be [[human-in-the-loop-ai|human-in-the-loop]] — highlighting suspicious references, explaining why they were flagged, and returning feedback to authors before review — and offer their error taxonomy as a starting point for such systems.

## Relevance to the knowledge base

This is a field-level integrity audit rather than a study of learning or teaching, and its value for the knowledge base is as a check on the evidentiary substrate of everything else. Research syntheses on [[generative-ai]] in [[cs-education|computing education]], [[meta-analysis-systematic-review|systematic reviews]], and [[peer-assessment]]-mediated evidence all depend on references that can be traced to real publications; a 2.3% rate of fabricated references in a flagship proceedings, concentrated in the very recent, [[llm|LLM]]-era window, means downstream syntheses inherit a small but growing contamination risk. The paper also underscores a design lesson for AI-assisted research workflows already documented in the knowledge base: [[hallucination-risk]] is not a conversational curiosity but a bibliographic one, and the most fragile field — authorship — is exactly the one that carries credit and accountability. It pairs naturally with work on [[academic-integrity]] and [[ai-detection]] in assessment, extending the integrity conversation from student work to the published scholarship that instructors and researchers themselves produce.

## Connected Concepts

- [[academic-integrity]]
- [[hallucination-risk]]
- [[peer-assessment]]
- [[llm]]
- [[generative-ai]]
- [[cs-education]]
- [[meta-analysis-systematic-review]]
- [[limitations-in-aied-research]]
- [[quantitative-research]]
- [[research-methods-aied]]
- [[ai-misuse-learning-harm]]
- [[reducing-ai-misuse]]
- [[ai-detection]]
- [[writing-education]]

## Connected Articles

- [[kumar-genai-computing-education-systematic-review-2026]] — Generative AI in computing education: systematic review and framework for responsible integration
- [[ssaho-ai-academic-integrity-review-2025]] — Reassessing academic integrity in the age of AI
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education
- [[teichmann-detecting-undetectable-misconduct-2026]] — Detecting the undetectable? Reassessing academic misconduct procedures
- [[llm-fallacy-misattribution]] — The LLM fallacy and misattribution of competence
- [[pairr-ai-peer-review-2025]] — Peer and AI review + reflection: a human-centered approach
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — PRISMA-LLM: reporting framework for AI-assisted systematic reviews
- [[ai-ethics-bibliometric-2026]] — From abstract ethics to situated practice: bibliometric analysis of AI ethics
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — Shaping responsible GenAI use in research through AI literacy
- [[kofinas-generative-ai-authentic-assessment-integrity-2025]] — Generative AI and academic integrity of authentic assessments

## Citation

Denny, P., Barbre, G., Blake, M., Hua, Y. C., Leinonen, J., Luxton-Reilly, A., Prather, J., & Reeves, B. N. (2026). [*Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature*](https://arxiv.org/abs/2609.16574). arXiv preprint (accepted, SIGCSE Technical Symposium 2027).
