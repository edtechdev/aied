---
name: wiki-page-rename
description: "Use when a wiki page's slug, title or product name changes."
category: research
---

# Renaming a wiki page

Use when a page's identity changes: a tool rebrands and moves domain, a concept is renamed to match
how the field talks about it, or a title is corrected after publication. The work is not the `git mv`;
it is the reference sweep, the registry/frontmatter agreement, and the redirect that keeps inbound
links alive.

## Decide the shape first

- **Name and URL changed (a rebrand)** — rename the slug and add a redirect. The old URL is what other
  sites and syllabi point at.
- **Wording-only correction** — patch `title:` in place, leave the slug. A slug rename with no redirect
  buys a cleaner URL and breaks every inbound link to save nothing.
- **Merged page** — not this skill; see `wiki-consolidate-duplicate-pages`.

Say which shape you are doing in the reply, because "update the page" reads as the second and the
first is what a domain change actually needs.

## Procedure

1. **Move every copy.** Articles exist only in English; concepts and resources have one file per locale
   (`content/<locale>/<collection>/<slug>.md`). Use `git mv` so history follows, and move all of them in
   the same pass — a locale left at the old slug becomes a second page, not a translation.
2. **Make the page's own `title:` and the registry agree.** For a concept, `check_concepts.py` compares
   the registry block's `title:` with the page frontmatter and fails the whole suite (it is gate 1) on a
   mismatch; the page's title survives a registry-only edit and the failure appears only at the end of a
   long run. Rewrite the registry key, title and aliases in the same edit, and regenerate artifacts:
   `python3 tooling/scripts/gen-concept-artifacts.py`.
3. **Sweep the bare token, not just wikilinks.** The slug is data in places the `[[...]]` sweep never
   sees: `connected_resources: [...]` lists, `connected_faqs`, `resource-wiring.yaml`, the concept
   registry, `concept-screen.yaml`, and each twin's `translation_of: <collection>/<old>`. Grep
   `\b<old-slug>\b` across `content/`, `resource-wiring.yaml` and the registry, and account for every
   hit. A repo with 284 references for one resource is normal — the connected lists alone multiply by
   locale.
4. **Collapse the same-text pipes the sweep creates.** `[[old-slug|old label]]` becomes
   `[[new-slug|old label]]` after the replace, and where the label equalled the slug or the old page
   title it now duplicates the page name; `check-same-text-pipes.py` fails on `[[x|x]]`, and a label like
   "empathy in education" should simply be dropped. Rewrite to the bare `[[new-slug]]`.
5. **Redirect the old URL.** Concept merges/renames go in the registry's `redirects:` block (generated
   into `src/data/conceptRedirects.ts`); article redirects live in `src/data/articleRedirects.ts`;
   resources have no generated file, so add the pair to `redirects:` in `astro.config.mjs` with the site
   base path (`'/resources/edugems': '/aied/resources/eduprompts'`).
6. **Restamp the translations.** A rename is a source change: set the English `updated:`, then in every
   twin set both `source_updated:` (to the English stamp) and its own `updated:`. Leaving old stamps
   makes the whole family read as stale to `check-translation-staleness.py`, and a twin whose
   `source_updated` trails English downgrades the parity gate's errors to warnings.
7. **Verify in this order:** `check_concepts.py`, `check-slug-uniqueness.py`,
   `check-translation-parity.py --changed`, `check-same-text-pipes.py --changed`, then for a resource
   `check-resource-links.py <slug>` and `check-resource-wiring.py <slug>` (the links gate reports a
   redirect when the vendor moved the URL, which is how a missed `url:` update shows up). Full suite
   once, on the committed tree.

## Pitfalls

- **A rename drags previously untouched pages into the changed-page gates.** The sweep marks hundreds of
  files changed, so gates audit pages edited months ago and report drift that has nothing to do with the
  rename — most often a localized host page whose `connected_resources` never received an earlier
  addition (English listed `teacher-hive`, all 32 twins did not). Fix the drift in English order; it is
  real, and parity now checks it.
- **The redirect map is not the same file for each collection.** Concepts regenerate theirs from the
  registry; articles are hand-maintained; resources are Astro config. Writing a resource redirect into
  `articleRedirects.ts` compiles and does nothing.
- **Do not leave the old name only in the body.** If the page says "formerly X" in prose, the summary
  and title must already say Y — the index card is what most readers see, and a card titled Y with a
  summary about X reads as two products.
- **Rebrands usually change more than the name.** A vendor that renames a product often retires a feature
  in the same announcement (Gems to Skills). Check the new site before editing, and if the mechanism
  changed, say in the reply that the body still describes the old one and offer the follow-up — the body
  edit is a 33-file change, not a one-line fix.
- **Stop at the local commit.** Push is per message, never per session; report the SHA and wait.
