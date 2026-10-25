---
name: newsletter-issue-drafting
description: "Use when drafting a periodic newsletter from a corpus."
version: 1.0.0
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

## Storage: outside the build, named for the date

- Put issues at repo-root `newsletters/`, never under `content/` or `src/content/`. A folder no route
  reads cannot reach a deploy by accident, which is the whole safety property when the user says
  "draft it but do not publish". Say that property out loud in the report.
- One file per issue, ISO date name so the folder sorts (`2026-10-23.md`), with frontmatter
  `title`, `date`, `status: draft | ready | published`, `type: newsletter`.
- Ship `newsletters/README.md`: naming rule, frontmatter, the git commands that pull a window, the house
  style, and the line that publishing needs a route plus a `status` flip in the same commit. Without it
  the next issue starts as archaeology.
- Branch first (`git switch -c newsletter/<date>-draft`). Do not commit or push unless asked; report the
  branch name and that the folder is still untracked.

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

- Group the additions into threads of two to six items that share a question, and write an eight-word
  heading per thread. Twenty to twenty-five items get two to three sentences each; the rest get one
  compact linked list plus a link to the day-by-day listing page. An issue that lists everything is a
  table of contents, not a newsletter.
- Order threads by news value, not by ingest date, and lead the issue with the shape of the week in two
  or three sentences.
- Follow the shape-of-the-week paragraph with a short run of teaser questions ("Does the tutor that lifts
  the homework also lift the exam?"), each linked to the paper that bears on it and each trailed by a
  half-clause naming the kind of evidence behind the answer. Write that block last, from the items you
  kept: a question the issue never answers is a broken promise, and it is the first thing a reader
  notices.
- Put the reader-facing research first and the internal notes last, under their own headings
  (translations, copy, tooling, running counts). The user asked for that split; keep it in every issue.
- A launch issue (#0) may replace the weekly structure with a site introduction: why the site exists,
  how it is organized, where to start by role, questions it already answers, search/chat/offline, the
  available languages, and what comes next. Say so once and do not reuse the shape for a weekly issue.
- `title` in the frontmatter carries the issue number (`AIEd Research Weekly Update #1`); every consumer prints
  it verbatim, so no component appends ", issue N" and the body never repeats the heading.
- Masthead, in this order and nothing else: the heading; one sentence saying what the newsletter is
  with a link to the site; one paragraph holding what the week added, the running totals and a closing
  "Search or use AI to chat with the knowledge base" with `Search` on `/search/` and `use AI` on `/ai/`
  (same paragraph, never its own). The highlight blockquote is not in the masthead: it opens the first
  section, below the contents.
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
- **A resource entry needs that body link too, and LinkedIn is the reason it is not optional.** The
  issue is republished as a LinkedIn newsletter, whose editor strips links out of headings, so an
  entry whose only link sits in its `###` heading arrives in that edition with no way to follow it.
  Open the paragraph by naming the resource as a link ("[Code Viva](…) is a free browser tool that
  …") instead of describing it anonymously, and check the SOURCE page link rather than the resource's
  own site: the reader is being sent to the knowledge base entry, which links onward.
- Then link the concept terms the sentence is actually about, because that is what the article pages
  themselves do: `cognitive offloading` on "leaning on it", `self-report measures` on "survey",
  `assessment validity` on "observability", `teacher AI competency` on "professional development gap".
  Twenty to thirty concept links across an issue is about right.
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

2. Serve it on a **second** port with `terminal(background=True)` (a server never exits, so an un-notified
   background job is correct here), for example `python3 -m http.server 4322 --bind 0.0.0.0 --directory <outdir>`.
3. Health-check before reporting: curl the loopback and the LAN/Tailscale address, expect 200 and the byte
   count, and confirm the heading count. Give the user the **IP-form** URL (`http://<tailscale-ip>:4322/`),
   never the MagicDNS hostname, which they do not read as a link.

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
