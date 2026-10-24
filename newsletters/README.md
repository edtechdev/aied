# AIEd Research Weekly Update

Editorial guide for the site's weekly newsletter. The issues themselves live in
`content/en/newsletters/`, one markdown file per issue, because they are part of the site now:

```
content/en/newsletters/2026-10-24.md   ->  /aied/news/2026-10-24/
```

This folder holds only this guide, so nothing here reaches a build.

## Where an issue appears

- `/aied/news/` lists every published issue, newest first, under the newspaper icon.
- `/aied/news/<issue-date>/` is the issue itself, with previous and next links.
- `/aied/journal/` lists the issue among that day's pages, the way an article is listed.
- The right rail's "Recently Added Pages" list includes it, labelled by issue number.
- `/aied/news/rss.xml` is a newsletter-only feed and carries each issue in full, in
  `<content:encoded>`, rendered by the same markdown pipeline as the page, so a subscriber can read the
  issue without visiting the site; `/aied/rss.xml` stays the knowledge base feed.
- The header carries a newspaper icon linking to `/aied/news/`.

## Frontmatter

```yaml
---
title: "AIEd Research Weekly Update"
issue: 1
created: "2026-10-24T08:00:00-04:00"   # the issue date, a full timestamp like every page
summary: "One sentence for the /news listing and the feed item."
status: published                       # draft | ready | published; a draft stays off the site
spotlight: [language-learning, intelligent-tutoring, self-report-measures, governance]
---
```

`status: draft` keeps an issue out of the listing, the journal, the sidebar and the feed while it is
being written. The file name is the issue date, so the folder and the URLs sort chronologically.

`title` carries the issue number: `AIEd Research Weekly Update #1`, `#2`, and so on. Every consumer prints that
title verbatim (page heading, archive entry, journal row, right rail, feed item), so nothing else appends
", issue 1" to it and the markdown must not repeat the heading in its body. The issue page prints the
date after the title, and the archive entry prints it beside the title, so the heading reads
"AIEd Research Weekly Update #1  October 24, 2026".

## Masthead

Exactly four parts, in this order, and nothing else:

1. The `# ` heading, which the page renders from `title`.
2. One sentence saying what the newsletter is, linking the knowledge base site, and naming the four
   audiences it is for. Those four are the four sections below, so the sentence sets up the structure.
3. One sentence giving what the week added and where the totals now stand: new studies linking the
   journal, then any new concept pages, FAQs or resources, then the running total for all four types,
   each linked. Say nothing at all about a type that had no additions, not even to note its absence:
   the reader came for what is new.
4. The counts sentence ends with a short practical sentence, in the SAME paragraph: "Search or use AI to
   chat with the knowledge base", with `Search` linked to `/search/` and `use AI` to `/ai/`. Give it no
   paragraph of its own: as a standalone paragraph it reads as a second pitch, and the reader who does
   not care about this week's subjects has already stopped.
The highlight quote is NOT part of the masthead any more: it opens the first section, below the
contents, so a reader who scans the contents meets it on the way in.

## Section structure

One issue departs from this: the launch issue (#0), which introduces the site instead of rounding up a
week. It keeps the masthead and the contents list, then covers why the site exists, how it is organized,
where to start by role, the questions it already answers, how to search it, chat with it, or read it
offline, the languages it is published in, and what comes next. Never repeat that shape in a weekly
issue, and never let a weekly issue's structure creep into it.

Keep this order in every other issue. The research is grouped by who has to act on it, not by what got
ingested on which day, because the value of the issue is the implication rather than the digest.

1. `## Main highlights and questions`: a two-sentence blockquote stating the week's most useful or
   surprising implication, each sentence carrying one result, its numbers and a link, and then five to
   seven questions, each on one line, each linked to the paper that bears on it, each followed by a
   half-clause saying what kind of evidence answers it ("A randomized trial...", "Thirteen detectors,
   135,389 document pairs..."). The quote is what a reader who never scrolls gets, so it states what a
   reader should do differently, not what was most downloaded. A question the issue does not answer is a
   broken promise, so write the questions last, from the items you kept.
2. `## For instructors`: three to six findings, each with one number and then what to do differently.
3. `## For developers`: build decisions, with the benchmark or evaluation number that supports them.
4. `## For researchers`: measurement, methods and evidence-base problems.
5. `## For administrators`: policy, procurement, assessment strategy and staff capability.
6. `## Concept spotlight`: two to four concept pages, one per audience where possible, each saying
   what the page now says that it did not say before. Record them in the frontmatter `spotlight:`
   list and do not repeat a page for at least eight issues.
7. `## Also added this week`: one bullet per article, each the article's own title as the link text,
   covering everything that did not earn a paragraph, plus a closing sentence pointing at `/journal/`
   for the day-by-day listing. Bullets, not a comma-separated paragraph: the titles are too long to
   run together, and a reader scanning for one study cannot find it in a paragraph.
8. `## Site notes`: translations, copy, tooling, counts. Internal work always goes last.

An item goes in the section of its strongest implication, not in all four. Each featured paper
is used once; a second mention means a second, different implication.

## Link the way the site's own pages link

Every featured item is linked twice: the `###` heading is the article page, and the first mention of
the study in the body is an inline link on a noun phrase ("Chen and colleagues", "the EduWild dataset",
"TutorCaseBench"). Then link the concept terms the sentence is really about, since that is what the
article pages themselves do: `cognitive offloading` on "leaning on it", `self-report measures` on
"survey", `voice-based AI feedback` on the authors. Twenty-odd concept links across an issue is right;
every other word being blue is not.

Never nest links: a concept link inside a linked heading produces `[a [b](c)](d)` and the renderer
emits broken markup. Link the heading plainly and move the concept link into the body.

## Footer

The issue ends with a rule and three short paragraphs, mirroring the site's own footer so a reader who
knows the knowledge base recognises it:

1. Link the site once more, state the AI disclosure plainly ("which an AI agent generates", "drafted by
   that same AI agent, with editorial guidance from the site developer"), and say every claim links to
   the page it came from.
2. Name the license with a link: CC0 1.0, no rights reserved.
3. "Found an issue with the content? Report it on GitHub, or contact the site developer, [name]", with the
   issues URL and the developer's contact link.

Take all four values from `site.config.json` (`url`, `license.url`, `license.name`, `issuesUrl`,
`editor.name`, `editor.contactUrl`) rather than retyping them, so the footer cannot drift from the site's.
Naming the developer is authorized for this content even though the repo keeps personal names out of
tracked content generally: the newsletter is a publication, and the site footer names him too.

## House style

The same rules as the site copy: no em dashes or en dashes, sentence-case headings, no bold
as decoration, no opening that announces what the issue will do, and no closing summary of
what the reader just read. Every claim links to the page holding the paper.

Use the Oxford comma in any series of three or more: "1,799 article summaries, 220 concept pages,
37 FAQs, and 31 resources". Author triples follow the same rule ("Ren, Raghavan, and Garg"), and a
two-item conjunction does not take one.

## Drafting an issue

1. Fix the window: the seven days ending on the issue date.
2. List what was added, from git rather than from memory:

   ```
   git log --since="<start> 00:00" --diff-filter=A --name-only --format="" -- content/en/articles/
   git log --since="<start> 00:00" --diff-filter=M --name-only --format="" -- content/en/faqs/ content/en/resources/
   ```

3. Decide which role each item belongs to from the page's own frontmatter, not from your sense of
   the topic:

   ```
   grep -m1 '^audience:' content/en/articles/<slug>.md
   ```

   The vocabulary is the site's (`instructors`, `researchers`, `administrators`,
   `educational technology developers`, `instructional designers`, `curriculum designers`,
   `assessment designers`, `faculty developers`, `policymakers`). Section titles stay as the four
   headings above; the extra labels decide which of the four an item lands in.
4. Read the `The bottom line.` paragraph of every page you mean to feature before writing about it.
   Cite numbers that appear there, not impressions of the title.
5. Internal updates go in the site notes at the bottom: translations, copy changes, tooling,
   and the running counts.

Every count gets a link to the page it describes: new pages to `/journal/`, FAQs to `/faq/`,
resources to `/resources/`, concept totals to the map on the home page, article totals to
`/search/`, and a locale count to that locale's home. Most of an issue is links, so audit them
before publishing: every `/pages/<slug>/` needs a built page behind it, and article slugs sometimes
carry a `-2026` suffix and sometimes do not.

## Preview before publishing

Render the issue on its own rather than rebuilding the site to look at it:

```
python3 ~/.hermes/skills/research/newsletter-issue-drafting/scripts/render-newsletter-preview.py \
  content/en/newsletters/2026-10-24.md --outdir ~/.hermes/cache/scratch/newsletter-preview
python3 -m http.server 4322 --bind 0.0.0.0 --directory ~/.hermes/cache/scratch/newsletter-preview
```

Serve it on a second port: the site's own preview port is the user's window on the live build, and a
rebuild wipes the served directory for minutes.
