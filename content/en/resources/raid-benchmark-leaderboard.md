---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "A public leaderboard of AI-text detectors scored on RAID, a benchmark built to test robustness against models, domains, decoding settings and adversarial attacks."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

RAID is the benchmark behind most serious claims about [[ai-detection|AI-text detection]], and its leaderboard is the place to check whether a detector's published accuracy survives a change of model, domain, decoding setting or deliberate attack. Entries are scored on the test set and can be submitted by anyone who follows the repository's submission process.

## What you can do with it

Filter by domain — abstracts, books, news, poetry, recipes, Reddit, reviews, wiki — by decoding strategy (greedy or sampling), by repetition penalty, and by adversarial attack, including whitespace, homoglyph, synonym substitution, paraphrase, zero-width spaces and article deletion. Then compare a detector across metrics: AUROC, TPR at a 5% false-positive rate, and TPR at 1%.

That filter set is the point. A detector that scores near 1.000 on aggregate can fall away once the text has been paraphrased or the source model changes, and the leaderboard lets you see the fall before an institution stakes a [[academic-integrity|misconduct]] case on it. The 1% false-positive column matters most in education, because at institutional scale a 1% error rate means hundreds of wrongly accused students.

## Who it is for

Researchers evaluating detection methods, administrators writing policy that might reference a detector, and instructors who want a concrete answer to "can this be detected?" before saying so in a syllabus.

## Notes and caveats

The benchmark measures detection of machine-generated text, not misconduct: a student who uses AI to plan, outline or revise produces text the detectors were not built to catch, and a student [[language-learning|writing in a second language]] is a known false-positive risk that a leaderboard cannot show. RAID is a research artifact maintained by an academic team; coverage tracks the generator models in its test set, so newer models may be under-represented until the benchmark is refreshed. The leaderboard ranks detectors, not their vendors' data-handling practices, and a high AUROC says nothing about whether submitting student work to that service is lawful or ethical in your jurisdiction.

## Connected Concepts

- [[ai-detection]] — the method family the benchmark evaluates
- [[academic-integrity]] — the policy context where detector scores get used
- [[benchmark]] — the wider class of instruments this belongs to
