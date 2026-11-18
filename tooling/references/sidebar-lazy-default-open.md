# Default-open sidebar sections over a lazy taxonomy payload

The wiki's left sidebar renders ten strand headings as `<details data-taxonomy-section>` with an empty
`[data-taxonomy-body]`, and `src/scripts/sidebarLazy.ts` fetches `/taxonomy/<locale>.json` on the first
expansion (44 KB for all ten strands, cacheable, shared by every strand). The question that recurs is
whether a strand can open by default for a first-time visitor without paying a payload cost.

## Answer: defer the open, not the payload

Server-rendering `open` on the `<details>` is the wrong shape. The body is empty until JS fetches the
links, so the visitor sees an empty box and then a 27-link jump. Mark the strand instead and let the
script do the reveal after hydration:

```astro
<details class="compact-strand" data-taxonomy-section={anchor}
         data-taxonomy-default-open={anchor === 'foundations-of-ai-in-education' ? 'true' : undefined}>
```

In `sidebarLazy.ts`, on `load` (or immediately when `readyState === 'complete'`):

```ts
void hydrateSection(details).then(() => {
  if (details.dataset.loaded === 'true') details.open = true;   // never open an empty box
});
```

## The three guards, and why each exists

- **Hydrate first, then open.** `hydrateSection` is already idempotent (`data-loaded` / `data-loading`),
  and checking `dataset.loaded` after the promise refuses to open when the fetch failed.
- **Viewport gate.** `matchMedia('(min-width: 64rem)')` means phones never trigger the fetch at all; the
  sidebar is a drawer there and the reveal is irrelevant.
- **Once per visitor.** A `localStorage` flag (`aied:default-strand-revealed`) keeps it to a single visit
  rather than re-fetching on every navigation, and an existing `aied:collapse-state` entry for that strand
  wins over the default — the visitor's own choice is never overridden.

## Verifying it

A static grep of `dist` proves only that the attribute shipped; the behavior needs a browser with the
basePath served (`/aied/...`, not the site root — the taxonomy URL is basePath-prefixed and a root-served
`dist` 404s, which looks like a broken hydration). Check, in order: fresh storage at 1366px opens the
strand with 27 links in three groups and opens nothing else; collapsing it and reloading keeps it closed;
a 390px viewport fetches nothing and opens nothing.
