# Source provenance and number grounding

An article page is only as trustworthy as the raw source beside it. These checks are
green-by-omission: they pass loudly when they cannot run at all, so a passing gate list
does not tell you that any number was verified.

## Copy the source before you draft, not after

Copy the PDF and its extracted text into `pdf-sources/<slug>.pdf` and
`raw/papers/<slug>.md` **before** writing the article page that cites them. The page's
`sources:` field points at `raw/papers/<slug>.md`, so until the copy exists the page
carries a dangling reference and every downstream number check is inert.

Mechanism: `verify-number-grounding.py` resolves `sources:` and, finding nothing, prints
`[no raw source found - cannot verify]` and moves on. That line is a SKIP that reads like
a pass. A batch whose copy step was interrupted shipped a page whose only source file was
never written, and the full gate run reported success while zero numbers on that page had
been checked.

Copying first also makes a re-delivered file easy to recognize: hash the incoming PDF
against the stored copy. A re-sent document is usually the same paper, and the hash
comparison is what tells you whether to ingest it or to report it as already present.

## Confirm a grounding pass actually covered the page

- The whole-corpus run is the only mode that reliably checks a committed page. Grep its
  output for the slug.
- `--changed` reports "No article pages changed in the working tree" once the page is
  committed, so it silently checks nothing after a commit.
- The positional-argument form reports `[no raw source found - cannot verify]` even when
  the raw file exists.

A corpus-wide grounding run normally carries a standing background of ungrounded numbers
from older pages. Establish that baseline (how many articles are flagged) and compare
against it rather than expecting a clean run: the signal is whether YOUR slug appears.

## Numbers must be printed, not derived

A figure computed by subtraction, addition or percentage change is not in the source and
is flagged. Citing the difference between two reported means ("gained 0.466") fails; cite
the two means ("moved from 4.239 to 4.705"), which is also clearer to the reader.

Keep every statistic at the paper's own precision and wording. When a rounded restatement
disagrees with the printed value, use the printed value.

## Facet values are section-scoped, and the audience enum is closed

`validate-facets.py` validates each facet value against the registry section it was
declared under. A concept lives in exactly one section, so getting the section wrong is
the error, not the value:

- `design-thinking` is a foundations entry, not pedagogy.
- `trust` is an ethics entry; `authentic-assessment` and `oral-assessment` are assessment.
- An `audience` value must come from the fixed enum (`instructors`, `curriculum designers`,
  `instructional designers`, `researchers`) and rejects near-synonyms such as `teachers`
  or `teacher educators`.

Read the allowed values out of `src/data/facetVocab.ts` (generated from the registry) and
`src/content.config.ts` rather than recalling them; the closed enums catch the intuitive
guess every time.

## House style applies to the body only

New prose is US English: `artefact` to `artifact`, `personalisation` to `personalization`,
`organise`/`organised` to `organize`/`organized`, `programme` to `program`, `behaviour` to
`behavior`, `favoured` to `favored`, `optimisation` to `optimization`, `signalling` to
`signaling`, `generalise` to `generalize`. Never respell the Citation block: journal and
article titles keep their published spelling.

## Concept-page weaves must fit the prose budget

A weave bullet is checked as concept prose: every sentence at most 55 words and every
paragraph at most 150 words. A single bullet enumerating eight models or eight statistics
will exceed 55 words as one sentence, so split it into two sentences while drafting rather
than after the gate complains.

## Record every screen candidate, not just the accepted ones

`check-concept-screen.py` collects candidates itself (facet values, plus slugified
`discipline` and `level` values) and requires a decision for each. Do not screen your own
shortlist: run the gate's candidate function over the new page and record every slug as
either `integrated` or `no_change` with a specific reason. The test is significant AND
distinctive - a paper that merely exercises a mechanism every existing entry already
documents is `no_change`, however relevant it feels. Expect a low acceptance rate; that is
the design, not under-delivery.

Decisions live in `concept-screen.yaml` at the repo root, which is gitignored and stays
local. It is evidence for the gate, not content to ship.

## A weave into a concept page must also list the article

Adding a research bullet to a concept page without adding the article to that page's
Connected Articles list, or the reverse, is a defect the integration gate reports. Do both
in one edit, and bump the concept page's `updated` field, which a separate gate checks.
