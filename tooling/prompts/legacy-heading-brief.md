# Brief: resolving a leftover implications heading

A page arrives here because it has both canonical sections (`## What this means for practice` and `## Limitations`) **and** an older heading such as `## Implications`, `## Implications for AI in Education`, `## Practical Implications` or `## Limits`.

You are not adding sections. You are deciding what that older section is for, and leaving the page with one clear answer.

## The three outcomes

1. **Delete it** when the canonical bullets already make the same points. Nothing is lost, so the older text goes.
2. **Merge, then delete** when the older section holds substance the canonical sections lack. Move the substance into the right canonical section as a bullet first, then remove the old heading. Keep practice at 3-5 bullets and limitations at 2-4: merge by joining related points into one bullet rather than adding a sixth.
3. **Rename it** when the older section is not practice advice or limits at all, but narrative about the paper's contribution, its framing, or a research agenda. Keep every word, and give it a heading that says what it is — `## Research agenda`, `## What the work contributes`, `## Connection to the broader knowledge base`.

A section can also be split: one paragraph merged into limitations, another kept and renamed. Say so in your report if you do that.

## How to work fast enough to finish

This class is slower than adding a section, and workers that read whole sources run out of time. For each page:

- Read the page's two canonical sections and the old section. That is the decision, and it is most of the work.
- Only when you are about to move a claim out of the old section do you need the paper. Then **search** its saved source for the specific number or phrase — `grep -n` or an equivalent — instead of reading the file. Sources here run to 100,000 characters and more.
- Never move a claim you have not found in the source. If the old section makes a claim the source does not support, report it and leave the claim where it is: an unverifiable claim is a finding for the parent, not a line to relocate.

## Limits

- Touch nothing but the sections named here. Not the frontmatter, not the Connected lists, not the Citation, not the body sections.
- Leave the `updated` field alone; the parent bumps it.
- Write nothing outside your assigned pages. No helper scripts, no notes files, no edits to another worker's pages.
- Report per page: which outcome you chose, what you preserved, and any claim you could not verify.

## Turn economy: the time limit is spent thinking, not reading

Tool calls here are instant — reads land in 0.0 s and greps in under a second. The 600-second limit goes on model turns, and a turn takes anywhere from a few seconds to around three minutes depending on load. Ten turns can exhaust the limit on their own.

So do everything one turn can do in that turn:

- Read all five pages in a single turn. Not one page, think, next page.
- Run every search you need in the same turn, one command per page, rather than one command per turn.
- Apply every page's edits in the following turn.
- Never re-read a page or a source to confirm what you already read. If you need a line number, grep for it.

If a page needs a decision you cannot make without more evidence, make the decision you can, note the doubt in your report, and move to the next page. Five pages finished with one flagged beats two pages finished and three untouched when the limit arrives.
