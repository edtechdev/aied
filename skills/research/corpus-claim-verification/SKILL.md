---
name: corpus-claim-verification
description: "Verify corpus facts before asserting coverage or precedent."
category: research
---

# Verifying claims about an existing corpus

Use when you are about to tell the user what a knowledge base already contains: "that concept is already covered", "we folded that into the methods page", "there is no page for X", "N articles discuss Y". These claims are load-bearing — the user acts on them — and they are the ones most often answered from a skill's example list or from memory of an earlier session instead of from the tree.

## Rule

**Check the tree before asserting coverage, absence, or precedent.** One `ls`/`grep` costs seconds; a wrong "we already cover that" sends the user away from work they wanted and forces a correction.

## Procedure

1. **Slug existence.** `ls content/en/concepts | grep <topic>` and `grep -n '<slug>' concepts.registry.yaml`. A page can exist while an older example in a skill still says the topic was folded elsewhere.
2. **Partial coverage.** If a hub page has a section on the topic, check whether a *sibling* topic has its own dedicated page. If one does, the corpus's pattern is hub summary + deep-dive page, and the hub section is not evidence of duplication — the right move is to create the page and rewrite the hub section to link out. A methods hub carrying a paragraph on a design does not mean that design has no page.
3. **Counts.** Report tiered counts, not one keyword total: a raw `grep -ril` counts passing mentions alongside anchor articles. Separate "names the field explicitly" from "substantive framing" (several hits per page) and say which is which.
4. **Anchor viability.** For a proposed page, list the 4-10 articles that would anchor it and confirm each slug resolves before promising the page.

## Pitfalls

- **Skill examples age.** A create-vs-enrich example recorded in a skill reflects the corpus at the time it was written. Verify before quoting it, and if the tree contradicts the skill, fix the skill rather than repeating the claim.
- **A page named after the topic is not proof the topic is covered.** Read the headings: a level page ("early childhood education") or a mechanism page ("cognitive psychology") can sit next to a topic without carrying its account.
- **A title is not a design.** An article with "longitudinal" in its slug may be a design proposal; check the method and the measurements before citing it as evidence of a longitudinal study.
- **Do not convert a corrected claim into a hedge.** Once the tree is checked, state the finding plainly and, if you were wrong, say which claim was wrong and what the tree showed.
