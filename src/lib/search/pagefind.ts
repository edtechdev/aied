// src/lib/search/pagefind.ts
//
// Thin adapter over Pagefind's DOCUMENTED low-level JavaScript API
// (https://pagefind.app/docs/api/, version 1.5.2 as locked in
// package-lock.json). This replaces the previous coupling to
// window.PagefindComponents.getInstanceManager(), which is part of the
// prebuilt web-component bundle, not a documented public surface.
//
// The adapter owns: one import/initialization promise (singleton),
// search calls with the canonical filter mapping (OR within a facet,
// AND across facets), available-filter discovery, and capped result
// hydration (metadata for the first N displayed records only — never all
// matches). All functions here are browser-only.

export interface PagefindResultRecord {
  id: string;
  url: string;
  title: string;
  /** Highlighted excerpt HTML containing ONLY <mark> tags (sanitized by the controller). */
  excerpt: string;
}

export interface PagefindSearchOutcome {
  total: number;
  unfilteredTotal: number;
  /** Raw result handles; data is hydrated lazily via hydrateResults. */
  results: unknown[];
  /** The language index that served this search, when the API exposes it. */
  language?: string;
}

/** Raw shape of pagefind.search() results in 1.5.x (defensive, typed loosely). */
interface RawSearchResponse {
  results?: { id?: string; data?: () => Promise<unknown>; excerpt?: () => Promise<string> }[];
  total_result_count?: number;
  unfiltered_total_result_count?: number;
}
type RawResult = NonNullable<RawSearchResponse['results']>[number];

interface PagefindModule {
  search: (term: string, options?: { filters?: Record<string, string[]> }) => Promise<RawSearchResponse>;
  filters: () => Promise<unknown>;
}

let initPromise: Promise<PagefindModule> | null = null;

/** The available value counts once known: facet -> values (sorted, count-aware). */
export type AvailableFilters = Record<string, string[]>;

/** Load pagefind.js if it is not already present, then resolve window.pagefind. */
export function initPagefind(timeoutMs = 20000): Promise<PagefindModule> {
  if (initPromise) return initPromise;
  initPromise = new Promise<PagefindModule>((resolve, reject) => {
    const deadline = Date.now() + timeoutMs;
    const loadScript = () => {
      if (window.pagefind) { resolve(window.pagefind); return; }
      const existing = document.querySelector<HTMLScriptElement>('script[src$="/pagefind/pagefind.js"]');
      if (!existing) {
        const s = document.createElement('script');
        s.src = `${window.__AIED_BASE_PATH__ ?? ''}/pagefind/pagefind.js`;
        s.async = true;
        s.onerror = () => reject(new Error('Pagefind script failed to load'));
        document.head.appendChild(s);
      }
      const poll = () => {
        if (window.pagefind) { resolve(window.pagefind); return; }
        if (Date.now() > deadline) {
          resetPagefindInit();
          reject(new Error('Pagefind did not initialize in time'));
          return;
        }
        setTimeout(poll, 100);
      };
      poll();
    };
    if (document.readyState === 'complete') loadScript();
    else {
      window.addEventListener('load', loadScript, { once: true });
      // Also try now; pagefind.js may already be executing/loaded.
      const t0 = setTimeout(() => { if (window.pagefind) resolve(window.pagefind); }, 0);
      t0.unref?.();
    }
  });
  return initPromise;
}

/** Drop a failed init so Retry can try again. */
export function resetPagefindInit(): void {
  initPromise = null;
}

/**
 * Run one search. `query` may be empty — with active filters that browses
 * the matching subset, which is the documented behavior of search('', opts).
 */
export async function search(
  query: string,
  filters: Record<string, string[]>,
): Promise<PagefindSearchOutcome> {
  const pf = await initPagefind();
  const opts = Object.keys(filters).length ? { filters } : undefined;
  const raw = await pf.search(query, opts);
  const results = raw.results ?? [];
  return {
    total: raw.total_result_count ?? results.length,
    unfilteredTotal: raw.unfiltered_total_result_count ?? results.length,
    results,
  };
}

/** Hydrate a window of raw result handles into displayable records. */
export async function hydrateResults(
  raw: unknown[],
  from: number,
  count: number,
): Promise<PagefindResultRecord[]> {
  const slice = raw.slice(from, from + count);
  return Promise.all(slice.map(async (r) => hydrateOne(r as RawResult)));
}

async function hydrateOne(r: RawResult): Promise<PagefindResultRecord> {
  let data: { url?: string; meta?: { title?: string } } = {};
  try { data = (await r.data?.()) ?? {}; } catch { /* keep defaults */ }
  let excerpt = '';
  try { excerpt = (await r.excerpt?.()) ?? ''; } catch { /* keep defaults */ }
  const url = data.url ?? ''; // canonical /aied/... path from the index
  return { id: r.id ?? url, url, title: data.meta?.title ?? url, excerpt };
}

/**
 * Discover which facet values exist in the current language index. Pagefind
 * 1.5.x returns counts; we keep the values (sorted) and ignore counts — the
 * UI never fabricates disjunctive counts.
 */
export async function availableFilters(): Promise<AvailableFilters> {
  const pf = await initPagefind();
  const raw = (await pf.filters()) as Record<string, Record<string, number> | undefined>;
  const out: AvailableFilters = {};
  for (const [facet, values] of Object.entries(raw)) {
    if (!values || typeof values !== 'object') continue;
    out[facet] = Object.keys(values).sort();
  }
  return out;
}

declare global {
  interface Window {
    pagefind?: PagefindModule;
    /** Injected by SearchInterface.astro from Astro's basePath config. */
    __AIED_BASE_PATH__?: string;
  }
}
