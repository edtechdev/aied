---
name: concept-page-practitioner-pass
description: "Use when a concept page must guide practice."
category: research
version: 1.0.0
author: hermes-agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [wiki, concept-pages, editorial, practitioners]
    related_skills: [concept-page-structure-normalization, wiki-concept-narrative, practitioner-summary-writing, humanizer]
---

# Turning a concept page into guidance a practitioner can use

A concept page is read by an instructor, a faculty developer or an administrator who wants to know what
the evidence means for what they do next week. Pages written from inside the corpus drift into commentary
about the corpus instead: they report what "the knowledge base" holds, describe their own structure, and
end without telling anyone what to do. Structure gates do not see any of that.

Run this pass after the content is settled and before the commit. It changes framing, not evidence: every
number and citation stays as it is.

## Procedure

1. **Find the sentences written for the author.** Grep each page for `the corpus`, `this page`, `the page`
   and `knowledge base`. Nearly every hit is a sentence to rewrite, and each rewrite is mechanical:
   - "the knowledge base's literature examines" → "the research examines"
   - "one of the corpus's firmest results" → "one of the firmest results in this literature"
   - "The knowledge base documents that institutional policies lag" → "Most written rules arrive after the
     practice they were meant to govern"
   - "The rest of this page sets out ..." → delete; the reader can see the sections
   - "That is the argument this page now makes" → "The argument is ..."
   - "and the page says so" (about a source) → "and the authors say so"
   A page whose references to itself are gone reads as writing about the subject rather than about the wiki.
2. **Check for `## Implications for Practice`.** A page that prescribes anything needs one. If it is
   missing, write it from evidence already on the page; a practice section that introduces a new claim is
   a research pass wearing an editorial label. Place it before `## Where the evidence is thin` and
   `## Common Misconceptions`, never after them.
3. **Open every item with the actor.** "Instructors can ...", "Faculty developers can ...",
   "Curriculum designers can ...", "Administrators can ...". Five or six items, each naming a decision the
   reader owns. An item anyone could have written for anyone ("consider the implications") is filler.
4. **Rewrite body lists that carry bold labels and colons** into the same actor-led sentences. A label such
   as `**Teach one procedure, two objects.**` decorates a bullet without saying whose job it is;
   `Instructors can teach one procedure against two objects.` does both.
5. **Run the gates and the reading pass**, then build.

## Pitfalls

- **The prose gate compares your new section against the whole page, including lines you did not touch.**
  A practice bullet that restates a body finding at 80-100% overlap fails as `DUPLICATE SENTENCE` even
  though the duplication predates the edit. Restate the action, not the finding: "Programs that built
  pedagogical content knowledge reported large pre-post gains" rather than repeating the study result.
- **US-English applies to the section you add, and the misses are the ordinary ones:** `centres`, `centre`,
  `organisation`, `summarise`, `behaviour`, `randomised`. The checker skips frontmatter, so a verbatim title
  may keep the source's spelling while the body is respelled.
- **Em dashes belong to the connected lists and nowhere else.** `- [[slug]] — gloss` is the corpus
  convention and survives; a dash in body prose should become a colon, comma or full stop. Count them by
  line, not by file.
- **Do not add a practice section for symmetry.** For a page nobody acts on (a construct page that exists to
  be linked from articles), skip it. The test is whether a reader could change a decision after reading,
  not whether sibling pages have one.
- **A concept page is longer than an article on purpose.** Do not trim a thematic section to make room for
  the practice section; it runs 200-260 words and replaces nothing.

## Verification

```bash
cd <WIKI>
python3 tooling/scripts/check-self-reference.py --changed
python3 tooling/scripts/check-concept-prose.py --changed
python3 tooling/scripts/check-us-english.py <every page edited>
python3 tooling/scripts/check_concepts.py | grep -i error
NODE_OPTIONS="--max-old-space-size=8192" systemd-run --user --scope -p MemoryMax=12G npm run build
```

`check-self-reference.py` is the mechanical version of step 1: it fails on "this page", "the page",
"the corpus", "the knowledge base" and "this site" in concept, FAQ, article and resource bodies, and it
allows a study's own "text corpus". Run it without arguments before a push; the corpus should report
zero. One page at a time it is a two-minute pass; across a whole corpus it is a fan-out job, and the
subagent brief has to name the gate and require the zero before the child reports back.

Confirm the rendered section rather than the source line: each edited page's `dist/concepts/<slug>/index.html`
should contain `Implications for Practice`, and the heading order in the HTML should match the canonical
order in `concept-page-structure-normalization`.
