# Metadata & Tagging Audit (whole-corpus)

Validated 2026-08-29 on the AI Ed Wiki: enriched `research_method` for all 945 articles, audited/expanded `audience` (355→502 files), and tagged 62 articles with the 7 newly-added concepts. The pattern generalizes to any bulk metadata pass.

## When to use
- the maintainer asks to "audit the metadata" / "enrich the research methods metadata" / "which articles should be tagged with the new concepts".
- A per-article LLM read of the whole corpus would flood context → delegate to parallel subagents.

## Workflow

### 1. Generate the input slug files FIRST (before dispatching)
```python
# all articles lacking research_method
no_method=[f.split('/')[-1][:-3] for f in glob.glob('articles/*.md') if not re.search(r'^research_method:', open(f).read().split('---')[1], re.M)]
open('/tmp/audit_method_slugs.txt','w').write('\n'.join(no_method))

# all AI-literacy tagged articles
ai=[f.split('/')[-1][:-3] for f in glob.glob('articles/*.md') if 'ai-literacy' in open(f).read().split('---')[1]]
open('/tmp/audit_audience_slugs.txt','w').write('\n'.join(ai))

# per-concept body-keyword candidates (e.g. visualization: hits>=3)
# -> /tmp/cand_<concept>.txt
```
**CRITICAL:** create these BEFORE dispatching. Subagents read them at startup; if missing they flail and try to reconstruct the list themselves (wasted time, drift).

### 2. Dispatch parallel subagents (one per track)
Each brief: read the article BODY (absolute path `<WIKI>/articles/<slug>.md`; use `read_file`/`execute_code` — the subagent shell cwd is often broken), return EXACT structured lines, read-only (NEVER edit files):
- method audit: `<slug>|research_method|method1; method2`
- audience audit: `<slug>|audience|teacher role; student experience` or `<slug>|audience|KEEP`
- new-concept tagging: `<slug>|TAG|visualization` (only where the concept is genuinely CENTRAL)

Tell each subagent the controlled vocabulary for its field (audience = `teacher role`, `faculty development`, `student experience`, `administrator`, `researcher`, `practitioner`; research_method = lowercase phrases like `systematic review`, `mixed methods`, `quasi-experiment`).

### 3. Apply programmatically (execute_code)
Parse each frontmatter, merge the returned values into the target field, dedupe, preserve existing. For audience, the audit is authoritative → replace the field wholesale with the returned values. Verify: 0 non-concept tags in any `tags:`, 0 duplicate metadata-field lines, 0 empty arrays.

### 4. Normalize audience values onto the FINAL consolidated vocabulary (2026-08-29, end-of-session)
the maintainer drove the `audience` field through a full consolidation; the current clean vocabulary is:
**`instructors`** (was `teacher role`), **`learners`** (was `student experience` + merged learner-* variants), **`faculty development`** (was `faculty development` + `faculty development genai`), **`researchers`** (was `research methods aied`), **`administrator`**, and optionally **`software developers`** for technical/system-building articles.
Full merge map: `teacher role`→`instructors`; `student experience`→`learners`; `learner engagement`/`learner satisfaction`/`learner identity`/`learner modeling`/`student simulation`/`student performance prediction`/`student misconceptions conditionals loops taxonomy`→`learners`; `faculty development genai`→`faculty development`; `research methods aied`→`researchers`; `teacher support`/`teacher agency`/`teacher ai collaboration`/`teacher ai teaming`→`instructors`; `stakeholders`/`practitioner`/`researcher` (free-form)→resolved per-file or folded. **Any audience value with ≤2 matching pages must be consolidated/merged or folded into a `miscellaneous` catch-all — the maintainer enforces no tiny orphan audiences** (e.g. the 2 `stakeholders` pages were re-resolved to real audiences, not left as a 2-item bucket). Add `researcher`/`researchers` as inline-link synonyms for `research-methods-aied` in the scanner dict. When tagging technical articles with `software developers`, delegate the judgment to a subagent over a body-keyword/`research_method`-based candidate list (system development/benchmark/user study/dataset tags or ≥2 tech words in the title).

### 5. Handle the multi-line `tags:` block form
Scan for `re.search(r'^tags:\s*$', fm, re.M)` before bulk-applying; normalize those files to single-line `tags: [...]` first (see the SKILL.md pitfall).

### 6. Verify + deploy
`npm run build` (watch for js-yaml frontmatter errors → points at the corrupt file), verify a tagged article's live chips, commit/push/deploy.

## Reusable snippets
- Non-concept-tag check: `for t in re.findall(r'[\w-]+', tags): if t not in concepts: non.add(t)`
- Body-keyword candidate detection: `hits = sum(body.lower().count(k) for k in kws)`; threshold hits≥3 for "substantive".
- The 7 newly-added concepts + their central-topic keywords (2026-08-29): visualization (diagram/chart/graph/infographic/dashboard), machine-learning (model training/prediction), cognitive-load (working memory/intrinsic-extraneous-germane), mastery-learning (spaced/retrieval practice), problem-solving, science-education (physics/chem/bio), change-management (adoption/implementation/reform).
