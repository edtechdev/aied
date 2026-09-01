# Umbrella concept pages: frontend/sidebar/concept-map sync (2026-08-19)

When the maintainer asks to create or reorganize **umbrella concept pages** (e.g. `pedagogy`,
`stakeholders`, `ai-technologies`, `summative-assessment`), several frontend artifacts
must stay in sync. This is complementary to the content-side workflow in `research-wiki`.

## 1. Sidebar placement (`src/data/conceptIndex.ts`) — CORRECT topical section

The sidebar is organized into themed groups under section headings. A new umbrella must
go in its **topical** section, NOT a generic catch-all:

- People/audiences umbrella (e.g. `stakeholders`) → **"People: learners, teachers, and institutions"** section, **Learners** group.
- Teaching umbrella (`pedagogy`) → **"Core pedagogies"** group (as the anchor, listed first).
- AI-technologies umbrella (`ai-technologies`) → **"Models and techniques"** group (under "AI systems and techniques" heading).
- Assessment umbrella (`summative-assessment`) → **"Assessment"** group.

**User correction (2026-08-19):** I initially put `stakeholders` in the "Cross-cutting"
group; the maintainer asked why it wasn't in the people section. Match the umbrella to its topical
section, never a catch-all.

## 2. Every concept exactly once in the sidebar

When a concept moves groups (e.g. `educational-robotics` from "AI agents and interactions"
→ "Models and techniques"), remove it from the OLD group or it becomes a duplicate.
After any sidebar edit, run a duplicate check:

```python
from collections import Counter
import re
c = open('src/data/conceptIndex.ts').read()
items = []
for m in re.finditer(r"items: \[([^\]]*)\]", c):
    items += [x.strip().strip("'") for x in m.group(1).split(',') if x.strip()]
dups = [x for x, cnt in Counter(items).items() if cnt > 1]
print(dups)  # must be []
```

## 3. Concept map node sync (`src/components/ConceptMap.astro`)

the maintainer swaps map node topics to match newly-created/renamed umbrella pages. When a node's
topic changes, update BOTH:
1. The node `{ slug, label }` entry in the `inner`/`outer` arrays, AND
2. The SVG `<desc>` accessibility text (and `<title>` if it enumerates nodes).

Established swaps (2026-08-19):
- `instructional-design` → `pedagogy`, label **"Pedagogy"**
- `agentic-ai` → `ai-technologies`, label **"Technologies"**

The mobile fallback `<nav class="concept-map-mobile">` renders from the same `nodes`
array, so it updates automatically — only the static `<desc>` text needs a manual edit.

## 4. Verify links resolve

New umbrella pages reference many existing concept/article slugs. After writing the page,
check every `[[slug]]` resolves (concept OR article OR a redirect key):

```python
import os, re
concepts = {x[:-3] for x in os.listdir('concepts') if x.endswith('.md')}
arts = {x[:-3] for x in os.listdir('articles') if x.endswith('.md')}
red = dict(re.findall(r"'([a-z-]+)': '([a-z-]+)'", open('src/data/conceptRedirects.ts').read()))
allslugs = concepts | arts | set(red.keys())
c = open('concepts/<new-umbrella>.md').read()
missing = [l for l in re.findall(r'\[\[([a-z0-9-]+)(?:\|[^\]]+)?\]\]', c) if l not in allslugs]
print(missing)  # must be []
```

`gamification` → `game-based-learning` and other absorbed slugs are VALID only via the
redirect map. Don't invent slugs like `direct-instruction` or `gov-administrator-perspective`
that don't exist — check before linking.

## 5. Homepage meta page

The `ai-education.md` hub gained a **"How the wiki is organized: the umbrella pages"**
section mapping the umbrella hierarchy (pedagogy, learning-theories, ai-technologies,
assessment strands, stakeholders, evaluation, governance/policy/equity). When creating a
new umbrella, add it to this map and to the hub's Connected Concepts list (alphabetical insert).
