---
name: wiki-inline-links
description: "Add/fix inline wikilinks in new wiki pages before build."
category: research
version: 1.2.1
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [wiki, wikilinks, research-wiki, editorial, linking]
    related_skills: [research-wiki]
---

# Wiki Inline-Link Pass

Adds and fixes inline `[[wikilinks]]` in the **body narratives** of wiki article and concept pages. Load this skill **after every article/concept page is created or enriched** — whether ingested manually or by a cron job — and **BEFORE any build/commit/push/deploy**. It is a **HARD GATE**: the wiki maintainer expects aggressive linking (not just obvious concept names, but **conceptually-similar terms and phrases** that map to existing concept pages), and a green `npm run build` does NOT substitute for running this pass.

> Pair with `research-wiki` (Phase 1 ingestion + Phase 2 Astro export). This skill is the editorial linking pass that runs on top of every newly created/enriched page.

## When to Use
- A new `articles/<slug>.md` or `concepts/<slug>.md` page has been created (manual or cron)
- An existing page's narrative has been edited and needs its links re-scanned
- The user reports missing inline links, self-links, or links in headings on any page
- **Cron**: every article/concept ingestion must include this linking pass before build/deploy

## Core Rules (what the maintainer expects)

1. **Link every concept mention in body prose** — not just in Connected Concepts/Articles lists.
2. **Narrative-only ADDING.** The inline links you insert go ONLY in the body narrative (between the frontmatter and the `## Connected` sections). **NEVER add or modify links in the `## Connected Concepts` or `## Connected Articles` lists** — those lists are maintained by the back-link/enrichment process (see `research-wiki`), not by this pass. This pass reads the connected lists only to (a) avoid duplicating a link already present and (b) verify them for defects (below), never to edit them.
3. **Link conceptually-similar phrases**, not only exact concept names. Examples:
   - "critical thinking" / "critical analysis" / "critical-thinking skills" → `[[critical-thinking]]`
   - "biological (sciences)" / "biology" → `[[biology-education]]`
   - "human oversight" / "human mentorship" / "human in the loop" → `[[human-in-the-loop-ai]]`
   - "ethical" / "ethical considerations" → `[[ethics]]`
   - "active-learning (methods)" → `[[active-learning]]`
   - "role of educators" / "educators" / "teachers" → `[[teacher-role]]`
4. **Use the most specific slug** matching the mention's meaning; use the umbrella page for generic terms.
5. **Consult `tooling/concept-index.md`** (the canonical manifest) for the absorbed→canonical merge map (e.g. "over-reliance"→`[[cognitive-offloading]]`, "feedback-loop"→`[[feedback]]`, "ai-tutoring"→`[[intelligent-tutoring]]`, "gamification"→`[[game-based-learning]]`). Removed concepts are mentioned as **plain text, never linked**.
6. **Do NOT** create self-links (a page linking to itself), links inside `##` headings, or ugly same-text links `[[slug|slug]]` (→ simplify to `[[slug]]`). Never add links to headers.
7. **Write ordered lists as ONE contiguous block.** Consecutive numbered items MUST NOT be separated by blank lines — `1.` then a blank line then `2.` renders each item as `1.` (CommonMark splits them into separate lists). Keep all items of a list adjacent (no blank lines between them). This applies to Key Findings and any numbered list. Run `scripts/check_list_formatting.py <WIKI> --all` before build to catch violations.

## Step-by-Step Procedure

### Step 0 — ROOT CAUSE of recurring gaps: delegated/subagent pages skip this pass
**The single most common reason inline links are missing is that article pages created by `delegate_task` subagents omit the linking pass entirely** — the subagent's goal is to "create the article," and linking is an editorial step the orchestrator must run afterward. Do NOT assume a subagent-created page has links. **After ANY delegation wave, the orchestrator MUST run this full linking pass on every page the subagents produced** (and re-verify), before build/deploy. Similarly, when *you* create a page by hand, run the pass before moving on — do not defer it.

To make the pass mechanical (not memory-dependent), use a **dictionary-driven scanner script** rather than eyeballing prose. A ready template lives at `scripts/inline_link_scan.py` (this skill). Run it on the batch of new pages, then apply the fixes it surfaces.

**Run `--apply` for automatic linking (the HARD-GATE default).** The scanner ships an `--apply` mode that **auto-inserts** every safe link it finds (first-occurrence, narrative-only, no self/heading links, case-preserving piped links), removing the need to manually apply each suggestion. This closes the recurring gap where links get skipped because an agent failed to manually apply the reporter's output. Use:

```bash
# Auto-link every new/enriched page in the batch (recommended default after any creation/enrichment):
python3 scripts/inline_link_scan.py <WIKI> --all --apply
# ...or limit to specific slugs:
python3 scripts/inline_link_scan.py <WIKI> slug1 slug2 --apply
```

`--apply` only links **high-confidence** terms. A curated `AUTO_APPLY_DENYLIST` in the script keeps genuinely ambiguous generic words (e.g. "reasoning", "transfer", "English", "games", "bias", "assessment", "policy") as **report-only** — they are still shown in default (report) mode for the agent to judge in context, but never auto-linked to avoid wrong targets. After `--apply`, run the default (report) mode once to see any remaining denylisted suggestions and decide manually. The default mode (no `--apply`) still prints all suggestions for review.

**SECOND most common gap (maintainer-flagged): being too conservative.** The maintainer repeatedly catches *unlinked* concept mentions that a conservative pass skipped. When in doubt, **link it**. Specifically:
- **The very first synthesis paragraph is NOT exempt.** Link concept mentions there first (the maintainer checks it directly). E.g. "problem-based learning", "self-regulation", "lifelong learning", "engagement" in a synthesis must all be linked on first mention.
- **Named framework/construct components that map to concepts ARE linkable.** If a paper's framework names a component like "Lifelong Learning", "Engagement", "Reflection", "Active Processing", "Neuro-based Design", and a matching concept page exists (`lifelong-learning`, `student-engagement`, `metacognition`, `active-learning`), link the component name. Do NOT leave it plain just because it's a proper noun.
- **Common terms with dedicated pages** that a conservative pass wrongly skips: "engagement"→`[[student-engagement]]`, "assessment"→`[[assessment]]`, "pedagogy"/"pedagogical"→`[[pedagogy]]`, "feedback"→`[[feedback]]`, "AI in education"→`[[ai-education]]` (but never in a heading), "self-regulation"→`[[self-regulated-learning]]`, "self-directed"→`[[self-directed-learning]]`, "constructivism"→`[[constructivist]]`, "scaffolding"→`[[scaffolding]]`, "agency"→`[[agency]]`, "motivation"→`[[motivation]]`, "metacognitive"→`[[metacognition]]`.
- **Bias toward linking over not linking** within the narrative body. Only skip when (a) the term is in a `##` heading, (b) no matching concept page exists, (c) the word is a false-positive (e.g. human "tutors" meaning faculty, not `intelligent-tutoring`), or (d) it would create a self-link. First-occurrence linking still applies to avoid spam, but make sure the FIRST occurrence of every concept is linked.

### Step 1 — Determine the scope of pages to scan
- Manual single page: scan just that page.
- Cron/batch: scan every newly created article + concept page from this batch, PLUS any concept pages those articles link to (they may need narrative links too).
- **Delegated batch**: scan EVERY page the subagents created, even if they reported "links verified." Verify independently.

### Step 2 — Build the concept-term dictionary
Assemble a regex→slug dictionary covering **all existing concepts**. Include:
- Exact concept names and their inflections/plurals
- Conceptually-similar phrases (critical analysis→critical-thinking, AI tutors→intelligent-tutoring, over-reliance→cognitive-offloading, human oversight→human-in-the-loop-ai, self-directed learning→self-regulated-learning, etc.)
- Only include entries whose slug actually exists: `slug in concepts_set`

Load the concept set fresh: `concepts = {c[:-3] for c in os.listdir('<WIKI>/concepts') if c.endswith('.md')}`.

**Cross-check the dictionary against `tooling/concept-index.md`** before linking. The manifest lists canonical slugs, absorbed→canonical merges, and notes which domain terms have NO dedicated page (e.g. there is no `science-education` page — link "science education" to the specific subfield like `biology-education`/`chemistry-education` instead; `robots`/`social-robots`/`human-robot-interaction` → `educational-robotics`; `systematic review`/`PRISMA`/`meta-analysis` → `meta-analysis-systematic-review`; `plagiarism` → `academic-integrity`; `writing` → `writing-education`). Only include dictionary entries whose resolved slug exists (after applying redirects).

### Step 3 — Scan for unlinked mentions (narrative ONLY)
For each target page:
1. Split off the frontmatter (before `---`) and the `## Connected` sections — **only the body narrative** between them is linkable. Do NOT scan or modify the `## Connected Concepts` / `## Connected Articles` lists.
2. Remove `#`-heading lines from consideration (never link in headings).
3. Skip any mention already inside a `[[...]]` link (check `before.rfind('[[') > before.rfind(']]')`).
4. Skip mentions already linked elsewhere on the page (track linked slugs).
5. Skip self-references (the page's own slug).

### Step 4 — Insert links (prefer automatic via `--apply`)
- **Recommended:** run `python3 scripts/inline_link_scan.py <WIKI> <slug> --apply` (or `--all --apply`) to auto-insert all safe first-occurrence links. Then run the default report mode once and manually add any remaining denylisted-but-appropriate suggestions.
- **Manual fallback:** link the first clean occurrence of each term in the body, not every repetition (avoid spam).
- Use piped links `[[slug|display]]` when the display text differs from the slug (e.g. `[[critical-thinking|critical analysis]]`). Use plain `[[slug]]` when display == slug.
- Preserve original capitalization in the display text.
- **Critical integrity guard**: after writing, verify the frontmatter closing `---` is still on its own line (a multi-line body write can merge `---` with the first body line). If it merged, restore the newline.

### Step 5 — Clean existing problems (fix pass)
Scan all touched pages for:
1. **Self-links** — `[[<own-slug>]]` anywhere. Remove them. Common source: `^[[own-slug]]` footnote-style self-citations at the end of synthesis blockquotes → delete the `^[[...]]`.
2. **Links in headings** — `## [[slug|display]]`. Unlink: keep only the plain display text.
3. **Same-text links** — `[[slug|slug]]` → `[[slug]]`.
4. **Broken links** — any `[[target]]` where target not in concepts ∪ articles (and not a redirect). Fix or remove.
5. **Nested brackets** — `[[...[[]]` → fix.
6. **Unbalanced brackets** — `[[` count != `]]` count.
7. **Frontmatter integrity** — file starts with `---`, closing `---` on its own line.

### Step 6 — Verify (mandatory)
Run a script that checks ALL touched files for: no self-links, no heading links, balanced brackets, no nested brackets, and 0 broken links (all link targets resolve to concepts ∪ articles ∪ redirects). **Verify the connected lists too** (without editing them): confirm the `## Connected Concepts` / `## Connected Articles` sections contain no self-links, no broken-link targets, and no duplicate entries of the same slug. Only proceed to build once all checks pass.

**ALSO run the list-formatting check (recurring maintainer-flagged bug):** numbered/bulleted lists whose consecutive items are separated by a blank line render broken — each item restarts at `1.` (CommonMark splits them into separate lists). Run `python3 scripts/check_list_formatting.py <WIKI> --all` and fix every reported page by removing the blank line between consecutive list items so each list is ONE contiguous block. This is a **HARD GATE before build**: a green build does NOT catch it, and the maintainer flags it repeatedly. Every newly created/enriched page must be list-formatting-clean before deploy.

### Step 7 — Build & deploy
After the linking pass, regenerate llms files + `npm run build`, commit, push, and verify the deploy workflow (see `research-wiki` Phase 2). Bump the page's `updated` timestamp if the body changed.

## Pitfalls
- **Self-citation footnotes**: many ingested article pages end their synthesis blockquote with `^[[own-slug]]` (a self-referencing footnote). These are NOT valid cross-links — remove them.
- **NEVER edit the Connected lists**: the `## Connected Concepts` / `## Connected Articles` sections are the back-link process's territory (see `research-wiki`). This pass adds links only to the narrative. If you find a defect there (self-link, broken link, duplicate slug entry), fix it as a separate cleanup — don't treat it as part of the inline-link insertion.
- **Frontmatter merge**: when you rewrite a body from a multi-line variable, the closing `---` can merge with the first body line (`---\n> Synthesis` → `---> Synthesis`). Always re-split `content.split('---', 2)` and rejoin cleanly, then verify.
- **Headings**: the automated regex pass WILL match words inside `##` headings. Exclude heading lines explicitly or unlink them afterward.
- **Same-text pipes**: a naive `re.subn(pat, '[[slug|disp]]')` with `disp == word` produces `[[slug|slug]]`. Use plain `[[slug]]` when display == slug.
- **Over-linking**: don't link every occurrence of a common term (e.g. "pedagogy" 29× on the pedagogy page). Link the first meaningful occurrence; skip the rest. Never link a page's own slug.
- **Whole-word matching**: for short terms like `LLM`, always use `\b...\b` word boundaries — otherwise `re.IGNORECASE` can match inside other words.
- **List bug is EASILY re-introduced by edits, not just creation**: rewriting a numbered-list section via `patch`/`write_file` frequently inserts blank lines between the numbered items again (observed 2026-08-22 — a `patch` of the Zuo article's Key Findings re-split `1.`/`2.`/`3.`/`4.` with blank lines minutes after the wiki-wide fix). This is the most common re-trigger. **Discipline: after ANY body edit to a page containing a numbered/bulleted list, re-run `python3 scripts/check_list_formatting.py <WIKI> --all` and confirm 0 defects before build — do NOT assume the edit preserved list contiguity.** Write multi-item replacement blocks with items adjacent (no blank lines between them).
- **execute_code vs file tools**: use Python `open()`/`os` for all file I/O inside `execute_code` (not `hermes_tools.read_file`, which returns an incompatible dict). Use `write_file`/`terminal` carefully — the run-the-script-from-/tmp pattern (`write_file` a script then `terminal('python3 /tmp/s.py', workdir='<WIKI>')`) is the most reliable in cron.

## Reference: proven term→slug dictionary (extend as concepts grow)
`critical-thinking`(critical thinking, critical analysis, higher-order thinking, independent thinking, decision-making) · `ai-literacy`(AI literacy, digital literacy, use AI effectively, conscious AI use) · `active-learning` · `collaborative-learning` · `project-based-learning` · `problem-based-learning`(problem-based learning, PBL, problem based learning) · `self-directed-learning`(self-directed, self-directed learning) · `experiential-learning` · `game-based-learning`(games, games and simulations) · `learning-by-teaching` · `self-regulated-learning`(self-directed learning, self-regulation, strategic regulation) · `scaffolding` · `socratic-method`(Socratic questioning) · `higher-ed`(higher education) · `k-12`(secondary, junior high) · `intelligent-tutoring`(AI tutors, intelligent tutoring systems, tutors, Tutor) · `agentic-ai`(agentic AI, AI agents) · `human-in-the-loop-ai`(human oversight, human in the loop, human mentorship) · `adaptive-learning` · `personalized-learning` · `formative-assessment` · `summative-assessment` · `authentic-assessment` · `automated-assessment`(automated scoring/grading, AI-based evaluation tools) · `peer-review`(peer feedback) · `feedback-literacy` · `feedback`(feedback) · `academic-integrity`(scientific integrity, plagiarism, academic dishonesty) · `ai-detection`(plagiarism detection, AI text detection) · `cognitive-offloading`(over-reliance, overreliance, cognitive load, cognitive-load theory) · `reducing-ai-misuse`(reducing AI misuse) · `ai-misuse-learning-harm`(AI misuse) · `generative-ai`(generative AI, AI-generated outputs, GenAI) · `llm`(large language models, LLMs) · `rag`(retrieval-augmented, RAG) · `prompt-engineering` · `multimodal` · `reinforcement-learning`(machine learning, reinforcement learning) · `knowledge-graph` · `simulation`(simulations, virtual laboratories, virtual labs, virtual patient) · `hallucination-risk`(hallucination(s)) · `ethics`(ethical, ethical risks, ethics) · `trust-calibration` · `self-efficacy`(self-confidence) · `motivation` · `self-determination-theory` · `metacognition`(metacognitive) · `transfer-of-learning`(knowledge transfer) · `situated-learning` · `embodied-learning` · `constructivist`(constructivism) · `behaviorism` · `sociocultural-learning`(sociocultural, ZPD) · `desirable-difficulties` · `digital-divide`(digital divide, infrastructure and language gaps) · `equity-in-ai-education`(equity, bias, gender/racial bias) · `ai-education`(AIED, AI in education) · `student-engagement`(engagement) · `student-experience` · `agency`(student agency, learner agency) · `teacher-role`(teachers, educators, role of educators, instructors, teacher) · `teacher-education`(teacher training, teacher-training, teacher education) · `instructional-design` · `curriculum-design`(curriculum) · `pedagogy`(pedagogy, pedagogical, pedagogies) · `governance` · `regulation` · `privacy` · `learning-analytics` · `pedagogical-agent`(pedagogical agents, learning partner, genAI avatar) · `conversational-ai`(chatbots, chatbot, conversational agent, dialogue system) · `meta-analysis-systematic-review`(systematic review, meta-analysis, PRISMA, literature review, scoping review, systematically review) · `stem-education`(STEM, STEM education) · `physics-education` · `math-education` · `chemistry-education` · `biology-education`(biological, biology) · `cs-education`(computer science education, programming education) · `writing-education`(writing, writing instruction, composition, academic writing) · `language-learning`(English, EFL, second language) · `medical-education`(medical school, health professions) · `business-education`(business education, business schools, economics, management) · `eportfolio`(e-portfolio, eportfolio, portfolio assessment) · `educational-robotics`(robots, conversational robots, robotics in education, social-robots→redirect) · `well-being` · `creativity` · `universal-design-for-learning` · `global-south` · `multilingual-learning`(multilingual) · `neurodiversity`

## Support Files
- `scripts/inline_link_scan.py` — Dictionary-driven scanner + auto-applier: given a wiki path and page slug(s) (or `--all`), reports every concept mention in the narrative body that is NOT yet `[[linked]]`, and with `--apply` automatically inserts them as case-preserving first-occurrence piped links. `--apply` skips a curated denylist of ambiguous generic terms (report-only). Use the default mode to review, `--apply` to execute the linking pass mechanically. Requires Python 3 (stdlib only).
- `scripts/check_list_formatting.py` — List-formatting checker: reports every page whose ordered-list items are separated by a blank line (renders as repeated `1.`). Run `--all` before build; fix 0 defects.

## Repository mirror
This skill is mirrored in the AI Ed Wiki repo at `skills/research/wiki-inline-links/` (source of truth: the repo copy, which stays in sync with this installed copy). **After editing any file here, copy it to `skills/research/wiki-inline-links/` in the repo (and vice versa) so the two stay identical.** The repo is where `research-wiki` (ingestion) and `wiki-inline-links` (linking + list-formatting) are shipped for reproducibility.

## Cron integration
Every ingestion cron prompt (daily scan, weekly RSS) must end with the instruction: **"After creating/enriching all article and concept pages, load `wiki-inline-links` and run the full linking pass (aggressive concept-similarity matching + self-link/heading/same-text cleanup + verification) before building and deploying."** Use the scanner script `scripts/inline_link_scan.py` in this skill to surface unlinked concept mentions mechanically rather than eyeballing prose — run `python3 scripts/inline_link_scan.py <WIKI> --all --apply` to **auto-insert** all safe links, then run the default report mode once to review any denylisted-but-appropriate suggestions, and apply those manually. This makes the pass deterministic and complete so no new page ships with missing inline links. See `cron/daily-scan-prompt.md` and `cron/weekly-rss-scan-prompt.md` in the `research-wiki` skill.
