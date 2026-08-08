# cs.CL + cs.AI Fallback — Validation Notes

Validated: 2026-06-15
Session: Cron daily scan, combined primary sources yielded 1 non-AIED paper across cs.CY keyword search + cs.HC

## When This Fallback Fires

Triggered when `cs.CY + cs.HC` combined produce fewer than 5 potentially relevant papers (per config `arxiv-scan-config.yaml`). The fallback searches:

- `cat:cs.CL` (Computation & Language) — where LLM-pedagogy papers often appear when cross-listed
- `cat:cs.AI` (Artificial Intelligence) — where education-with-AI papers may land

With keywords: `education`, `learning`, `student`, `teacher`, `classroom`, `tutor`, `school`

## Validation Result

YIELD: **1 relevant AIED paper out of 4 returned** (25% precision — acceptable for a fallback):

| arXiv ID | Title | Categories | Relevant? |
|----------|-------|------------|-----------|
| 2606.14459 | MoDiCoL: Modular Diagnostic Continual Learning Dataset for Robust Speech Recognition | cs.CL, cs.AI, cs.SD | ✗ (ASR, no education) |
| 2606.14391 | Learning to Hear Hesitation: Continual Learning for Disfluency-Aware ASR | cs.CL, cs.AI, cs.SD | ✗ (ASR, no education) |
| 2606.14368 | Be My Tutor: On-Policy Co-Distillation for Mutual LLM Improvement via Peer Feedback | cs.LG, cs.CL | ✗ (pure ML, "Tutor" metaphorical) |
| **2606.14113** | **Simulating Students' Java Programming Errors with Large Language Models** | **cs.SE, cs.CL** | **✓** |

**Key lesson**: The paper that got through (2606.14113) was in `cs.SE` (Software Engineering) — a category not scanned by any primary source. The cs.CL+cs.AI fallback was the **only** path that would have caught it. Papers about programming/CS education often appear in cs.SE, cs.CL, or cs.LG rather than cs.CY or cs.HC.

## False Positive Notes

- `2606.14368` has "Tutor" in its title but is a pure ML distillation paper (student/teacher metaphor, not education). Title-scan initial triage flagged it as relevant; abstract scan rejected it. This is acceptable — the abstract-level filter catches it.
- Both ASR papers were rejected because, while ASR could have education applications, the abstracts focused entirely on speech model training without any educational context.

## Recommendations

- If cs.CY + cs.HC remain sparse, consider explicitly adding `cat:cs.SE` to the fallback set — this session's single catch came from there.
- The 25% precision rate is low enough that abstract-level verification is mandatory; don't ingest based on title alone for this fallback.
