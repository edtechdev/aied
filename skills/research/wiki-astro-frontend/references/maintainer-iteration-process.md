# Working with the maintainer on frontend iterations (2026-09-01)

Lesson from a 3-revert session on the mobile header.

- **Confirm the approach BEFORE committing/pushing.** the maintainer reverted 3 consecutive mobile-header attempts where I committed first, then he corrected course. Iterate fast, but state the plan and get an explicit go-ahead before `git push`. He may interrupt mid-turn with follow-up corrections — re-read those before acting.
- **Debug the structural root cause**, not incremental tweaks. The mobile-header 3-row bug was `flex-wrap: wrap` reflowing (Firefox mobile renders wider than Chrome Android and wraps first), not button width; hiding/shrinking icons failed. Fix = lock layout (CSS grid can't reflow to a 3rd row) + drop `justify-content: space-between` (causes the big brand↔icons gap, pins buttons far right).
- Chrome Android vs Firefox mobile render header width differently — sanity-check both.
- Blume site (useblume.dev/docs) is the maintainer's reference for a compact fixed header.
