---
name: newsletter-highlight-selection
description: "Use when choosing or ordering studies in a newsletter issue."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, curation, editing, prioritization]
    related_skills: [newsletter-issue-drafting, newsletter-educator-editorial-pass, humanizer]
---

# Choosing, ordering and phrasing the studies in an issue

Drafting decides the structure and the window. This skill decides which studies get space, in what order,
at what depth, and how each takeaway is written. Apply it before the humanizer pass and before the preview
goout, and apply it again when the user says an issue reads as repetitive or abstract.

## Priorities

- **Order by potential impact on educational practice and beliefs**, not by novelty or ingest date. A finding
  that changes what a teacher does on Monday outranks one that is merely surprising; a finding that changes
  what a department believes about assessment outranks a tool detail. Within every audience section, the
  strongest claim goes first.
- **One summary per article, at one depth.** A study either leads the issue or gets a section item, never
  both. The lead may pose a question about a paper summarized deeper in the issue, but it carries the
  question and the link only. When a duplicate is removed, backfill with a different study so the issue does
  not thin out.
- **Subject fit beats theoretical appeal.** When the user asks for a conceptual or theoretical pick, it still
  has to concern AI. A theory of feedback, recognition or credentialing that never mentions AI belongs in the
  knowledge base, not in the lead of an AI newsletter.
- **Depth follows consequence.** The three or four studies with the largest practice consequence get a full
  item; the remainder get one line in the tail list. Do not give a full item to a study whose only finding is
  that something did not differ.

## Writing each takeaway

- **The last sentence names the change.** It says what a teacher, developer, researcher or administrator
  should do or believe differently, in words they could act on ("keep the recorded grade with a person",
  "mark the drawings yourself"). A paraphrase of the finding is not an implication.
- **Convert every statistic into a case.** A slope, a spread or an effect size is unreadable alone; give the
  worked version once ("an essay the lecturer gave 50 came back at 66, and one given 80 came back at 67").
  If a number cannot be turned into a case, cut it.
- **No abstract shorthand.** Phrases like "structure left to exhortation", "bounded particular" or "a
  portfolio decision" make the reader reconstruct the argument. Replace each with the concrete situation it
  names, and give concept and resource entries one example rather than a definition.
- **No meta lines about the layout.** "One line each, with the full entry behind the link", "with an
  example", "including the ones not summarized here" describe the format instead of the content. Entries
  start with the finding.

## Scope notes

When the corpus widens beyond its subject, say so in the site notes: name the adjacent non-educational AI
research now covered, link two or three examples, and say how it enters (direct citations from the concept
pages it informs, not claims about teaching).

## Verify before the preview goes out

    python3 scripts/check-newsletter-links.py content/en/newsletters/<date>.md --dist dist

It reports broken internal targets, article slugs that appear more than once, and stray em/en dashes, and
exits 1 on the first two. Two traps it catches:

- A global word sweep rewrites slugs as well as prose. After replacing a spelling across the file, re-run the
  audit and restore any slug the replace changed.
- An older preview server on a previously used port keeps serving its own directory. Check the served title
  and issue date before sharing the link, and move to a free port when the documented one is taken.

## Pitfalls

- **Summarizing the same paper twice.** A lead summary plus a section item reads as padding and consumes a
  slot another study could have used.
- **Keeping the lead and deleting the body.** Removing the section item is the right direction only if the
  lead carries the complete implication; otherwise move the detail up rather than losing it.
- **Filling a removed slot with a weaker study of the same topic.** Backfill with the next strongest study in
  the window, even if it changes subject.
