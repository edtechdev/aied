# AIEd Research Weekly Update

Editorial guide for the site's weekly newsletter. The English issues live in
`content/en/newsletters/`, one markdown file per issue, as part of the site:

```
content/en/newsletters/2026-11-07.md   ->  /aied/news/2026-11-07/
content/es/newsletters/2026-11-07.md   ->  /aied/es/news/2026-11-07/
content/fr/newsletters/2026-11-07.md   ->  /aied/fr/news/2026-11-07/
```

Spanish and French editions are translated copies of the same issue. The English issue stays
canonical; the localized page is an alternate, not a replacement. This folder holds only this
guide, so nothing here reaches a build.

## Where an issue appears

- `/aied/news/` lists every published English issue, newest first, under the newspaper icon.
- `/aied/news/<issue-date>/` is the issue itself, with previous and next links.
- `/<locale>/news/` and `/<locale>/news/<issue-date>/` serve the translated archive and issue when
  that locale has a translation.
- `/aied/journal/` lists the issue among that day's pages, the way an article is listed.
- The right rail's "Recently Added Pages" list includes it, labeled by issue number.
- `/aied/news/rss.xml` is the English newsletter-only feed and carries each issue in full, in
  `<content:encoded>`, rendered by the same markdown pipeline as the page.
- `/aied/es/news/rss.xml` and `/aied/fr/news/rss.xml` are the localized newsletter feeds. Each
  carries only its locale's translated issues, with localized links and `<language>`.
- `/aied/rss.xml` remains the knowledge base feed, and the localized archives link their own
  newsletter feed rather than the English one.
- An issue page shows the language globe when a translated counterpart exists. The globe links the
  same issue in every locale that has one and falls back to that locale's home page otherwise.
- The header carries a newspaper icon linking to `/aied/news/`.

## Localized editions

A translation lives at `content/<locale>/newsletters/<issue-date>.md` and is read by the separate
`newsletterTranslations` collection. Do not put it in the `translations` collection or widen
`TRANSLATED_COLLECTIONS`: the English newsletter feed and archive must never see a translation as an
issue of its own.

The translation frontmatter keeps the English issue's `title`, `issue`, `created`, `summary`,
`status`, and `spotlight` fields, with reader-facing values translated, and adds:

```yaml
translation_of: "newsletters/2026-11-07"
translation_note: "This is an automatic translation of the English page and has not yet been reviewed by a native speaker."
ai_assist:
  - model: <the model that produced the translation>
    role: translation
    date: "2026-11-07"
    agent: <agent name>
```

Use the locale's established machine-translation notice as the first italic line of the body. Keep
study titles in the long "Also added this week" list in their original language when they link to
English article pages; translate the surrounding prose and headings. Preserve every URL and numeric
claim byte-for-byte, and compute every table-of-contents anchor from the translated headings.

The archive uses the translated title, summary, and link when a translation exists; otherwise it
falls back to the English issue and English URL. Filter `status: draft` in the collection, the
detail route, the archive lookup, and the feed. A draft translation must remain invisible
everywhere.

## Frontmatter

```yaml
---
title: "AIEd Research Weekly Update #3"
issue: 3
created: "2026-11-07T08:00:00-05:00"   # issue date, a full timestamp like every page
summary: "One sentence for the /news listing and the feed item."
status: published                       # draft | ready | published
type: newsletter
spotlight: [reading-education, reflection, automation-bias]
---
```

`status: draft` keeps an issue out of the listing, the journal, the sidebar, and the feed while it
is being written. The file name is the issue date, so the folder and URLs sort chronologically.

`title` carries the issue number: `AIEd Research Weekly Update #1`, `#2`, and so on. Every consumer
prints that title verbatim (page heading, archive entry, journal row, right rail, feed item), so
nothing else appends ", issue 1" and the markdown must not repeat the heading. The issue page prints
the date after the title.

## Masthead

Exactly four parts, in this order, and nothing else:

1. The `# ` heading, which the page renders from `title`.
2. One sentence saying what the newsletter is, linking the knowledge base site, and naming the four
   audiences it is for.
3. One sentence giving what the week added and where the totals now stand: new studies linking the
   journal, then any new concept pages, FAQs, or resources, then the running total for all four
   types, each linked. Say nothing at all about a type that had no additions.
4. A closing practical sentence in the same paragraph: "Search or use AI to chat with the knowledge
   base", with `Search` linked to `/search/` and `use AI` to `/ai/`.

The highlight blockquote is not part of the masthead. The current issue opens with a bullet list in
`Main highlights and questions`, not a blockquote.

## Section structure

The launch issue (#0) introduces the site instead of rounding up a week. It keeps the masthead and
contents list, then covers why the site exists, how it is organized, where to start by role, the
questions it already answers, how to search or chat with it, the languages it is published in, and
what comes next. Never reuse that shape for a weekly issue.

Keep this order in every other issue. The research is grouped by who has to act on it, not by what
was ingested on which day.

1. `## Main highlights and questions`: seven to nine bullets, each opening with a question linked
   to the paper that bears on it, followed by one to three sentences giving the takeaway and its
   numbers. Lead with the implication for practice, not a list of study details. Write the questions
   last, from the items you kept.
2. `## New FAQs`: only when the week added FAQs. Each `###` links the new FAQ, followed by a short
   answer to the question it asks.
3. `## New concepts`: only when the week added concept pages. One `###` per new page, saying what
   the page separates or adds and why a practitioner should care.
4. `## New resources`: only when the week added resources. One `###` per resource, with the source
   page link in the body as well as the heading.
5. `## For instructors`: five to six findings, each with one number and then what to do differently.
6. `## For developers`: build decisions, with the benchmark or evaluation number that supports them.
7. `## For researchers`: measurement, methods, and evidence-base problems.
8. `## For administrators`: policy, procurement, assessment strategy, and staff capability.
9. `## Also added this week`: one bullet per article, each the article's own title as the link text,
   covering everything that did not earn a paragraph, plus a closing sentence pointing at `/journal/`
   for the day-by-day listing.
10. `## Site notes`: translations, copy, tooling, and counts. Internal work always goes last. This
    section also announces the available localized newsletter editions and feeds.
11. `## Follow the update`: the newsletter feed, Blogtrottr, and LinkedIn, with the localized feed
    when the issue is translated.

An item goes in the section of its strongest implication, not in all four. Each featured paper is
used once; a second mention means a second, different implication.

## Link the way the site's own pages link

Every featured item is linked twice: the `###` heading is the article page, and the first mention of
the study in the body is an inline link on a noun phrase ("Chen and colleagues", "the EduWild
dataset", "TutorCaseBench"). Then link the concept terms the sentence is really about, since that is
what the article pages themselves do: `cognitive offloading` on "leaning on it", `self-report
measures` on "survey", `voice-based AI feedback` on the authors. Twenty to thirty concept links
across an issue is right; every other word being blue is not.

Never nest links: a concept link inside a linked heading produces `[a [b](c)](d)` and the renderer
emits broken markup. Link the heading plainly and move the concept link into the body.

End each featured summary with a "See related:" line when a concept or FAQ page would help, and link
the individual study when the prose mentions one ("302-adult experiment", "a study where 193
students rated 3,954 sentences"). The translated issue uses the locale's equivalent label, such as
`Ver también:` in Spanish or `Voir aussi :` in French.

## Editorial note on AI and the Humanizer pass

Issue #3 ends the readability summary with an italic, bracketed editorial note. It says the
newsletter and knowledge base are AI-generated, that the site developer gave extensive editorial
guidance first, and that afterward the AI agent applied the Humanizer skill and a prompt to write
affirmatively and avoid "not X, but Y" phrasing. Link the phrase itself to the article about that
writing habit, not to a separate citation. Translate the note in every localized edition.

## Footer

The issue ends with a rule and three short paragraphs, mirroring the site's own footer:

1. Link the site once more, state the AI disclosure plainly, and say every claim links to the page
   it came from.
2. Name the license with a link: CC0 1.0, no rights reserved.
3. "Found an issue with the content? Report it on GitHub, or contact the site developer, [name]",
   with the issues URL and the developer's contact link.

Take all values from `site.config.json` (`url`, `license.url`, `license.name`, `issuesUrl`,
`editor.name`, `editor.contactUrl`) rather than retyping them. Naming the developer is authorized
for this content even though the repo otherwise keeps personal names out of tracked content.

## House style

The same rules as the site copy: no em dashes or en dashes, sentence-case headings, no bold as
decoration, no opening that announces what the issue will do, and no closing summary of what the
reader just read. Every claim links to the page holding the paper.

Use the Oxford comma in any series of three or more. Author triples follow the same rule, and a
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

4. Read the `The bottom line.` paragraph of every page you mean to feature before writing about it.
   Cite numbers that appear there, not impressions of the title.
5. Internal updates go in the site notes at the bottom: translations, copy changes, tooling, and the
   running counts.

Every count gets a link to the page it describes: new pages to `/journal/`, FAQs to `/faq/`,
resources to `/resources/`, concept totals to the concept index, article totals to `/search/`, and
a locale count to that locale's home. Audit every target before publishing: every `/pages/<slug>/`
needs a built page behind it, and article slugs sometimes carry a `-2026` suffix and sometimes do
not.

## Translating an issue

Translate the final English issue, not an earlier draft. Keep the same heading structure and TOC
anchors, and use the same link gate as the English issue. The localized route and feed are separate
consumers; a translated markdown file without both is invisible to readers.

For a new locale, the pieces are: the `newsletterTranslations` collection, the generic
`src/pages/[locale]/news/[slug].astro` route, the archive lookup in `NewsPage.astro`, a
`src/pages/<locale>/news/rss.xml.ts` feed, the localized `feedsHtml`, and a link from the latest
translated issue's follow section. The `newsletter-localization` and `newsletter-localized-feed`
skills carry the field names, filters, and verification steps.

## Preview before publishing

Render the issue on its own rather than rebuilding the site to look at it:

```
python3 skills/research/newsletter-issue-drafting/scripts/render-newsletter-preview.py \
  content/en/newsletters/2026-11-07.md --outdir /tmp/newsletter-preview
python3 -m http.server 4322 --bind 0.0.0.0 --directory /tmp/newsletter-preview
```

Serve it on a second port: the site's own preview port is the user's window on the live build, and
a rebuild wipes the served directory for minutes.
