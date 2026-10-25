# Ingestion to release: step order and the traps that break it

Rules that must hold while a page moves from draft to pushed publish. Each one exists because the
steps can be done in a valid-looking order that the gates reject afterwards.

## Run the inline-link pass BEFORE recording the concept-screen decision

Inserting inline `[[links]]` changes which concept pages have a claim on the article: a phrase that
gets linked becomes a concept candidate, and `check-concept-screen.py` requires a recorded decision
(a name in `integrated:`, or a `no_change` entry) for **every** candidate it sees. So the order is:

1. write the page, 2. run the link scanner and apply or hand-judge its proposals, 3. establish the final
concept set, 4. write the `concept-screen.yaml` entry with a grep-backed reason, 5. re-run
`check-concept-screen.py --changed`.

Doing 4 before 2 fails the gate on concepts the entry never mentions — and the failure names them, so
the fix is to extend the entry rather than to remove the links. Report the decision counts per page
(integrated / no_change) and reconcile them against the candidate list the gate prints.

## Assert the frontmatter still parses after any scripted rebuild

Rebuilding a page as `frontmatter + body` from `split('---', 2)` fragments has one silent failure mode:
the closing delimiter fuses to the first body line (`---**Synthesis:** ...`), and Astro then treats the
whole file as body — the page loses its title, date and facets and drops out of index and journal
generation with no build error.

- Assert before writing: `re.match(r'^---\n.*?\n---\n', raw, re.S)` must match.
- The symptom is not always a broken page: a tool that parses the page by searching for `'\n---\n'`
crashes instead, with a bare `ValueError: substring not found` from `text.index('\n---\n', 4)`. Treat that
crash on a file you just wrote as the fused-delimiter signal, not as a tool bug.
- The repo-wide sweep is cheap and worth running on any batch: parse every page under the collections
with that same regex and repair by inserting `\n\n` after the delimiter.

## House style is US English, and the source's spelling is not the house style

- `check-us-english.py` scans **body prose only**. The frontmatter `title:` is not scanned, so a
respelling pass that fixes the body leaves the title carrying the source's British form while the gate
reports OK — grep the title in the same pass.
- **Draft US forms from the start when the source is British.** A UK or Hong Kong journal writes
"programme" throughout; a first draft assembled from the paper's own vocabulary fails the gate with a
dozen-plus hits and needs a second sweep (and the citation's own wording keeps the published form).
- **Never respell the `## Citation`, a quoted paper title, or quoted participant text** — those
reproduce the published record verbatim.
- Never convert with a generic `-ise` rule; the checker's curated word map is the source of truth.

## Publishing steps that gate each other

- Content edits, then `npm run build`, then the offline artifact rebuild **alone** (the artifact builder
and `astro build` share `dist/`), then the llms dump. See `references/offline-artifact-rebuild.md`.
- Run the gate suite before the commit, never in the same step as it: a gate that fails after the commit
puts a known defect in history and costs a second commit.
- Commit locally, then ask; a push needs explicit per-occurrence approval, and the pre-push review covers
personal information in both the message and the diff content.
- After adding or substantially editing a page, send the preview link proactively in its IP-address form
rather than a hostname, so the reader can open it directly.
