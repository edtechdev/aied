# Historical concept pages (e.g. History of AI in Education)

Worked example: the maintainer asked "consider if we should add a concept page on the History of AIEd. I sent one pdf article about that" (2026-08-23). Result: created `history-of-aied` + ingested the anchor paper (Mishra et al. 2025, "Control vs. Agency: Exploring the History of AI in Education", TechTrends, DOI 10.1007/s11528-025-01064-2).

## Decision: create, don't enrich
A history-of-X concept is a genuine distinct cluster even if only ONE anchor paper exists, provided:
- No existing concept covers the historical thread (verified none existed).
- The corpus already references the historical figures/eras even without a dedicated page. Confirmed grounding scan: dozens of articles already mention Papert/Anderson/LOGO/cognitive tutors/ITS-history/1990s — so the concept ties together existing threads, not just the one new paper. Check this before proposing the page.

## Reusable structure for a historical concept page
- **From-cybernetics naming story** (contingent decisions shape trajectories — e.g. McCarthy choosing "artificial intelligence" over "cybernetics" in 1955).
- **The enduring tension** (e.g. control vs. agency = Anderson's structured cognitive tutors vs. Papert's constructionism; ITS lineage from 1960s-70s expert systems).
- **A "recent impact" section** — the maintainer explicitly requested this for a historical page: "The history concept page should have a section emphasizing the recent impact of LLMs." When he later corrected "Or Generative AI (broader term than LLMs)", the section title became "The recent impact of generative AI" with the correct hierarchy stated (generative AI = broad family incl. text/image/audio/video; LLMs = its most prominent member driving most classroom impact). So: historical pages should carry a current-era section, and use the BROADER term (generative AI) over the narrower one (LLMs) unless the point is specifically LLMs.
- **"Lessons for the present" / Implications** — how the history guards against chronocentrism (treating the current moment as unprecedented).

## Traps
- Terminology hierarchy: prefer "generative AI" (broad) over "LLMs" (narrow) when discussing the current era of AI in education; say explicitly that LLMs are one (prominent) member.
- Register the new concept in BOTH `src/data/conceptIndex.ts` (pick the right group — put history-of-aied under "Cross-cutting" with ai-education) AND `tooling/concept-index.md` (alphabetical spot, bump total count).
- Enrich connected concepts (ai-education, intelligent-tutoring, constructivist, agency, personalized-learning) with a research bullet + Connected Articles entry + `updated` timestamp bump (see wiki-article-quality Pitfall #0).
- If an article tag references a not-yet-created concept (e.g. tag `history-of-aied`), that's fine — tag and slug match; just ensure Connected Concepts links resolve to real slugs.
