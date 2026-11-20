---
name: newsletter-issue-drafting
description: "Use when drafting a periodic newsletter from a corpus."
version: 1.1.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, curation, static-site, humanizer, wiki]
    related_skills: [site-copy-edit-pass, humanizer, wiki-change-verification, front-door-page-copy]
---

# Drafting a newsletter issue from a knowledge base

The deliverable is one markdown file that says what changed in the corpus over a window, grouped into
reader-facing threads, with the site's own work kept at the bottom, living in a folder that will hold the
next issue, and previewable without publishing. The hard part is not prose; it is deriving the issue from
git rather than from memory, and previewing it without disturbing the live site.

## When to Use

- "Draft a weekly newsletter for this site", "make an attempt at what a newsletter could become".
- The next issue for a new window is due and a previous issue exists in the folder.
- Any periodic "what changed" digest over a corpus that keeps its own history in git.

## Storage: in the content tree, draft only by status

- On this site, issues live at `content/en/newsletters/<issue-date>.md`; they are a real page family
  with a listing, detail route, journal entry, sidebar entry, and feed. The safety property is
  `status: draft`, which every consumer filters, not a folder no route reads.
- One file per issue, ISO date name so the folder sorts (`2026-11-07.md`), with frontmatter
  `title`, `issue`, `created`, `summary`, `status: draft | ready | published`, and `type: newsletter`.
- Ship `docs/newsletters.md`: naming rule, frontmatter, the git commands that pull a window, the
  current section order, the house style, and the line that publishing is a `status` flip after the
  route and feed already exist. Without it the next issue starts as archaeology.
- Branch first (`git switch -c newsletter/<date>-draft`). Do not commit or push unless asked; report
  the branch name and that the issue is still a draft in the content tree.
- A translated issue belongs at `content/<locale>/newsletters/<issue-date>.md`; see the
  `newsletter-localization` and `newsletter-localized-feed` skills for the collection, route, archive,
  and feed work. A translated file alone is invisible.

## Gather the window from git, not from memory

Fix the window (the seven days ending on the issue date) and count both sides of it:

    git log --since="<start> 00:00" --diff-filter=A --name-only --format="" -- content/en/articles/
    git log --since="<start> 00:00" --diff-filter=M --name-only --format="" -- content/en/faqs/ content/en/resources/
    git ls-tree -r --name-only <commit-before-window> -- content/en/articles/ | wc -l

- **Additions and edits are different news.** Report added pages as the week's content; report edited
  pages (a normalization sweep, a mass weave) as site work, in its own section. A week with zero new
  FAQs and 37 edited FAQs is worth saying plainly, not glossing.
- **Internal work needs its own filter**: walk `git log --since=… --format='%h %s'` and keep commits that
  touch paths outside the content tree, then group them (translations, copy, tooling). Locale activity is
  countable: `git log --since=… --diff-filter=AM --name-only --format="" -- "content/*" | grep -v '^content/en/' | cut -d/ -f2 | sort | uniq -c`.
- **Every number in the prose comes from a file you read.** For each article you mean to feature, read the
  summary paragraph the page already carries (`**The bottom line.**` or `> **Synthesis:**`) and take figures
  from it. A take written from a title invents findings; these pages state sample sizes, effect sizes and
  p-values, so use them and cite none you did not see.

## Curate, do not enumerate

- On this site, keep the section order in `docs/newsletters.md`: Main highlights and questions,
  optional New FAQs, New concepts, and New resources, then For instructors, For developers, For
  researchers, For administrators, Also added this week, Site notes, and Follow the update. Grouping
  by audience outranks grouping by ingest date.
- Twenty to twenty-five items get two to three sentences each; the rest get one compact linked list
  plus a link to the day-by-day listing page. An issue that lists everything is a table of contents,
  not a newsletter.
- **Audience sections carry three items each.** For instructors, For developers, For researchers and For
  administrators each take a current study with a takeaway paragraph and a closing related link. Two per
  section reads thin beside the four audience groups; four turns the issue into a second tail.
- **The tail list is 40 to 50 entries, then a link to the journal page.** Recent issues list about
  forty-five and close with "The [journal page](https://edtechdev.github.io/aied/journal/) lists every
  study added this week." A tail of 120 reads as a dump; completeness belongs on the journal page. Choose
  what survives by substance (reviews, frameworks, validation studies, large samples) and keep the
  spread across levels and disciplines.
- **Every audience summary ends with a related link.** The last line of each `###` item is
  `See related: [Title](…/faqs/<slug>/)`, or a concept page when no FAQ fits. Within one section, no two
  items point at the same target. Match on the FAQ's opening scenario, not its title: read the first
  paragraph of that page before committing to the pairing. A survey replication does not belong beside
  the anxiety page, and a validation critique belongs beside the "is it working" page, not the methods page. Read the previous issue's closing lines before writing; this is the
  step most often skipped when drafting from section shapes alone.
- Order items by news value, not by ingest date, and lead the issue with the strongest implication.
- Follow the opening with a short run of teaser questions ("Does the tutor that lifts the homework
  also lift the exam?"), each linked to the paper that bears on it and each trailed by a half-clause
  naming the kind of evidence behind the answer. Write that block last, from the items you kept: a
  question the issue never answers is a broken promise.
- Put the reader-facing research first and the internal notes last, under their own headings
  (translations, copy, tooling, running counts). The user asked for that split; keep it in every issue.
- **Site notes are for changes a reader can see, then a link to the history.** Two or three paragraphs:
  concept restructuring, new media on the pages, a change in how something is presented. Table-of-contents
  ordering, export rebuilds, release plumbing and dependency bumps are trivial to a reader, so end the
  section with "The [commit history](https://github.com/edtechdev/aied/commits/main) records every update."
  instead of listing them.
- A launch issue (#0) may replace the weekly structure with a site introduction: why the site exists,
  how it is organized, where to start by role, questions it already answers, search/chat/offline, the
  available languages, and what comes next. Say so once and do not reuse the shape for a weekly issue.
- `title` in the frontmatter carries the issue number (`AIEd Research Weekly Update #1`); every consumer prints
  it verbatim, so no component appends ", issue N" and the body never repeats the heading.
- Masthead, in this order and nothing else: the heading; one sentence saying what the newsletter is
  with a link to the site; one paragraph holding what the week added, the running totals and a closing
  "Search or use AI to chat with the knowledge base" with `Search` on `/search/` and `use AI` on `/ai/`
  (same paragraph, never its own). The current issue opens with a bullet list in Main highlights and
  questions; do not reintroduce a blockquote unless the maintainer asks.
- Say which weave or edit was a removal when the week retracted something. Honest subtraction reads as
  editorial care and no other section can carry it.

## Style: the house prose rules apply here too

Run the `humanizer` tells over the issue before delivering. For a newsletter the recurring ones are:

- No em dashes or en dashes anywhere, headings in sentence case, no bold used as decoration.
- No opening that announces what the issue will do, and no closing paragraph that summarizes what the
  reader just read.
- Headings must not be restated in their own first sentence: each item opens with the finding or the
  method that produced it, not with its own title.
- **Roster rhythm**: when every item opens with a raw count ("Twenty-three students…", "498 records…"),
  the issue reads as a template. Alternate the openings, or lead with the person or the argument.
- Keep the AI-provenance footer the site uses elsewhere: who drafted it, and where corrections go. Link the site a second time, name the license, give the issues URL, and name the developer with his contact link, all read from `site.config.json` so it cannot drift from the site's own footer.

## Link the way the site's own pages link

The issue is read as a browsing surface, so every feature has to be reachable without hunting.

- Link each `###` item heading to its article page, **and** link the first mention of the study in the
  body on a noun phrase ("Chen and colleagues", "the EduWild dataset", "TutorCaseBench"). A heading
  alone reads as a title; the body link is what tells a reader the summary exists.
- **Put that body link in the FIRST SENTENCE of every article summary.** LinkedIn's editor strips
  links out of `###` headings when the issue is pasted in, so the opening sentence is the only route
  that survives when the heading link disappears. Name the study as the grammatical subject and link
  it: "[Meyer and colleagues](…) randomized 391 students", "[One charter school](…) gave every
  first-grade teacher a tutor". Do not open with a bare author name, an anonymous "A study of 60
  students", or a sentence whose only link is a concept page. Check every featured item: the first
  sentence must carry an `/articles/` link.
- **A resource entry needs that body link too, and LinkedIn is the reason it is not optional.** The
  issue is republished as a LinkedIn newsletter, whose editor strips links out of headings, so an
  entry whose only link sits in its `###` heading arrives in that edition with no way to follow it.
  Open the paragraph by naming the resource as a link ("[Code Viva](…) is a free browser tool that
  …") instead of describing it anonymously, and check the SOURCE page link rather than the resource's
  own site: the reader is being sent to the knowledge base entry, which links onward.
- Then link the concept terms the sentence is actually about, because that is what the article pages
  themselves do: `cognitive offloading` on "leaning on it", `self-report measures` on "survey",
  `assessment validity` on "observability", `teacher AI competency` on "professional development gap".
- **Link every substantive mention, not just the first.** A concept named again in a later sentence or a
  later section gets its own link, because readers dip into sections instead of reading straight through.
  The one brake: never repeat the same target twice inside a single `###` summary block. One link per
  target per section, plain text after that.
- **Link concept terms inside resource blurbs too.** "[Primer](…) lets a teacher describe a role-play or
  [simulation](…) in plain language" is the house pattern; the entry's own page link does not excuse
  the concept link.
- **Sweep for plain-text concepts mechanically.** Strip existing links from the prose, then match every
  concept `title` against what remains. Title matching alone misses inflections and compounds, so read
  the contexts: `student engagement`, `trust`, `governance`, `AI policy`, `benchmark`, `assessment` and
  `generative AI` were all missed by eye. Skip genuine non-concept uses (a sample count of "16,357
  learners", "psychology teaching", the role list in the masthead).
- Never nest links: a concept link inside a linked heading produces `[a [b](c)](d)` and the renderer
  emits broken markup. Link the heading plainly and move the concept link into the body.
- Teaser questions in the intro each link to the paper they name.
- Audit every target before delivering (`dist/pages/<slug>/index.html` must exist), and count the link
  styles in the rendered page: headings linked, inline article links, concept links.

## Preview without touching the live site

Never rebuild the site to look at a draft. The build wipes and regenerates the served directory for
minutes, which breaks the standing preview the user is watching, and the draft is not a route yet anyway.

1. Render the markdown to a standalone page in the same palette as the site:

       python3 <this skill>/scripts/render-newsletter-preview.py content/en/newsletters/2026-10-23.md \
         --outdir <AGENT>/cache/scratch/newsletter-preview

2. **Publish into the standing preview service; do not start a second server.** On this machine
   `hermes-newsletter-preview.service` already serves `<AGENT>/newsletter-preview` on port
   4322 and restarts itself, so killing the process does not free the port and a second `http.server`
   silently loses the race. Render to a scratch dir, keep the previous issue as `index-<date>.html`, copy
   the render over `<AGENT>/newsletter-preview/index.html`, then curl the port and grep for a
   heading or link you just added to prove the copy landed.
3. Health-check before reporting: curl the loopback and the LAN/Tailscale address, expect 200 and the byte
   count, and confirm the heading count. Give the user the **IP-form** URL (`http://<tailscale-ip>:4322/`),
   never the MagicDNS hostname, which they do not read as a link.

**Tables.** The site's global CSS already gives every cell a 1px border but sets no `vertical-align`, so
long rows centre their text. Keep the site (`BaseLayout.astro`, the `th, td` rule) and the preview
renderer in step: `vertical-align: top`, 1px borders, a header background, faint zebra striping, and a
slightly smaller font inside the table. GFM tables cannot set column widths, so the browser splits them
by content; mention that rather than fighting it.

## Verify the links before delivering

The issue is mostly links, and a wrong slug is invisible to the eye. Extract every internal URL from the
issue and require a built page for each before writing the report:

    for each URL path /pages/<slug>/ : assert exists dist/pages/<slug>/index.html

The year-suffix trap is the one that bites: article slugs sometimes end in their publication year and
sometimes do not, so a hand-typed slug resolves for 53 links and 404s for one.

## Report

State what the issue is built from (added counts per collection, baseline totals, edited counts), how the
threads were cut, that nothing is committed and the folder stays out of the build, and the preview URL.
Name the two or three decisions that are genuinely the user's (an opening that states the week vs a
plain dateline, a tail list too dense for an email client) rather than asking whether they liked it.

## Pitfalls

- **Writing the takes before reading the summaries.** Titles flatter and mislead; the page's own bottom
  line carries the numbers.
- **Serving the draft on the site's preview port.** That server is the user's window on the live build;
  a second port keeps both alive and makes "this is not published" obvious.
- **Committing "just in case".** The request is usually draft-only. Branch, write, report; let them ask.
- **Naming what was not added.** A sentence about the collections that got nothing ("and no new concept pages, FAQs, or resources") spends the reader's attention on an absence. Omit the type from the counts sentence entirely and say nothing about it. This overrides the older instinct to report an empty week: the reader came for what is new.
- **Letting the tail list repeat the features.** The compact list exists for everything that did not earn
  a paragraph; overlapping entries make the issue look padded.
- **Trusting the rendered page before the link audit.** Rendering succeeds on every broken slug.
- **Regex-replacing counts.** A pattern like `\d+ studies` also matches findings ("a synthesis of 31
  studies", "a review of 89 studies from 2015 to 2026") and silently rewrites them. Change a count by
  editing the one sentence that carries it, then grep the numbers you touched.
- **Writing the tail before the features.** Promote studies into the audience sections first, then build
  the tail from what is left, or the same article appears twice and the journal link lands on a list
  that already repeated the issue.
