---
name: newsletter-publishing
description: "Use when publishing a newsletter page family on a site."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, astro, content-collections, rss, i18n, static-site]
    related_skills: [newsletter-issue-drafting, site-copy-edit-pass, humanizer, wiki-change-verification]
---

# Publishing a newsletter as a page family

Drafting the issue is one job (see `newsletter-issue-drafting`); making it a first-class part of the
site is another. This skill is the second: where the files live, what the routes render, what the feed
carries, and which consumers have to learn about the new page type before it looks native.

The wire-level recipe (field names, paths, the collection block, the routes, the feed module, the icon
tables, the verification commands) is in `references/astro-newsletter-publishing.md`. Read it before
touching code.

## When to Use

- The user asks for a page that holds the newsletter issues, a `/news` section, or "show the
  newsletters on the journal page and the sidebar".
- Any new recurring page type on a content-collection site (changelog, weekly digest, release notes)
  needs a listing, detail pages, a feed, and a place in the existing navigation.
- An issue that was drafted outside the build has to start rendering on the site.

## Storage moves in two phases

1. **Draft phase.** Issues live at repo-root `newsletters/`, a folder no route reads. Nothing can reach a
   deploy by accident, which is the property the user is buying when they say "draft it but do not
   publish". Keep an editorial README there and say the property out loud in the report.
2. **Published phase.** When the user asks for the page, move the issues into the content tree
   (`<content root>/en/newsletters/<issue-date>.md`), leave the README where it is as the editorial
   guide, and add the collection. Keep `status: draft | ready | published` in the frontmatter and filter
   it in **every** consumer: listing page, detail route, journal, sidebar, feed. That is what lets an
   unfinished issue sit in the worktree without appearing anywhere.

Do not move the files before the user asks. A draft under `content/` publishes itself on the next deploy.

## The issue-as-page contract

The page supplies the heading, so the markdown body must not repeat it. Frontmatter carries `title`,
`issue`, `created` (a full timestamp, like every page in the corpus), `summary` (one sentence, used by
both the listing and the feed item), and the `spotlight:` list. The body carries everything else.

Masthead order the user settled on, and nothing else before the first section:

1. The page's `# ` heading from `title`.
2. One sentence saying what the newsletter is, linking the site, and naming the four audiences it serves.
3. One sentence with the week's additions and running totals, each linked. Omit any collection that had
   no additions and say nothing about its absence.
4. A blockquote of two sentences naming the top findings, each with its numbers and a link.

Then the reader-facing sections, then site notes last. No "this week at a glance" block, no paragraph
explaining how the research divides up, no preview of the sections: a reader who came for the findings
must reach one immediately.

Detail lists are bullets, one per item, using the item's own full title as the link text. A long
comma-separated paragraph of titles cannot be scanned for the one study a reader wants.

Use the Oxford comma in any series of three or more, including author triples. A two-item conjunction
does not take one.

End with the provenance footer in three short paragraphs: link the site again plus the AI disclosure;
the license with a link; "Found an issue? report it on GitHub, or contact the site developer, NAME".
Read every value from `site.config.json` (`url`, `license.url`, `license.name`, `issuesUrl`,
`editor.name`, `editor.contactUrl`) rather than retyping it, so the footer cannot drift from the site's.
Naming the developer in newsletter content is authorized by the user even where the repo otherwise keeps
personal names out of tracked content.

## Wiring checklist

Work through these in order; each is a place the new type stays invisible until it is taught to exist.

1. Collection in the content config, deliberately **not** added to the site's collection-order list.
2. Listing route and detail route, with `getStaticPaths` over the collection and a redirect to the
   listing for an unknown slug.
3. A newsletter-only feed next to the site's existing one, plus a second `<link rel="alternate">` in the
   layout head so readers offer both.
4. Page-type icon: add the kind to the icon module **and** to every local icon map that switches on kind
   (journal, sidebar, badge label). One missing map is a type error that stops the build.
5. Journal listing and the "recently added" sidebar list, both linking the new URLs and skipping locale
   rewriting, since a published issue has one canonical URL.
6. Header or nav entry, with its label as a UI string.

## Verify before reporting

The build is the only proof, and the checks are cheap. Grep the build log for `page(s) built` and the
exit code, then against `dist/` after it finishes: the listing lists the issue; the detail page has
exactly one `h1` and the date line; the feed has one item with the right title and absolute link; the
home page carries the new header icon and the sidebar entry; the journal lists it; **the site's original
feed is unchanged**. Then fetch the pages over the site's own preview server and confirm 200.

## Pitfalls

- **Type errors right after adding a collection.** The generated content types come from `astro sync`.
  Run `npx astro sync` and only then `npx tsc --noEmit`; otherwise every reference to the new collection
  fails with "not assignable to keyof DataEntryMap" and the config looks wrong when it is not.
- **Adding a UI string to one locale module.** The locale checker compares key sets, so a new key in the
  English module turns every locale red at once. Add the same key to **all** locale modules in the same
  pass (English text as a placeholder is fine) and run the locale checker before building.
- **Filtering `status: draft` in one place only.** A draft shows up wherever a consumer forgets the
  filter, and the publication safety property quietly stops holding. Filter in the collection query at
  every consumer, not in the template.
- **Reading `dist/` while the build is still running.** The build writes locale folders before the root
  pages, so `dist/index.html` may not exist yet and a mid-build check reports phantom failures. Wait for
  the `page(s) built` line and the exit code.
- **Judging rendered text with raw substring checks.** The markdown renderer wraps output at its own
  column width, so `"the exact phrase"` fails to match while the same words split across a newline are
  on the page. Normalize whitespace (`re.sub(r"\s+", " ", html)`) before asserting, or you will "fix"
  content that was never broken and report defects that do not exist.
- **Reordering masthead paragraphs by string surgery.** Moving a block by slicing on its first and last
  lines duplicates it when the tail slice still contains the original. Split the head into paragraphs,
  swap the list entries, rejoin, then assert the block occurs exactly once.
- **Nesting a link inside a linked heading.** `[a [b](c)](d)` renders as broken markup. Link the heading
  to the item page and put the concept link in the body.
- **Assuming a header has the control the user is describing.** When asked to "replace the RSS icon in
  the header", check the header markup first: if that icon was removed long ago, add the new one, say
  plainly that nothing was replaced, then offer the two plausible things they may have meant.
- **Dropping the in-page contents list.** An issue written for email keeps its own `## Contents`; on the
  site the right rail already builds a TOC from the headings, so the body list is a duplicate. Ask which
  one to keep rather than silently deleting either.
