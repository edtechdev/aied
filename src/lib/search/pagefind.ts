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
  /** Canonical page_type value, when the index carries one. */
  type?: string;
  /** A few existing facet values for the result card (discipline, level). */
  meta: Record<string, string[]>;
}

export interface PagefindSearchOutcome {
  total: number;
  unfilteredTotal: number;
  /** Raw result handles; data is hydrated lazily via hydrateResults. */
  results: unknown[];
}

/** One filter value, or a Pagefind compound OR filter for a facet. */
export type PagefindFilterValue = string | { any: string[] };
export type PagefindFilters = Record<string, PagefindFilterValue>;

/** Raw shape of pagefind.search() results in 1.5.x (defensive, typed loosely). */
interface RawSearchResponse {
  results?: RawResult[];
  unfilteredResultCount?: number;
  unfiltered_total_result_count?: number;
}
interface RawResult {
  id?: string;
  data?: () => Promise<RawResultData>;
}
interface RawResultData {
  url?: string;
  excerpt?: string;
  meta?: Record<string, string>;
  filters?: Record<string, string[]>;
}

interface PagefindModule {
  search: (term: string | null, options?: { filters?: PagefindFilters }) => Promise<RawSearchResponse>;
  filters: () => Promise<unknown>;
}

let initPromise: Promise<PagefindModule> | null = null;

/** The available value counts once known: facet -> values (sorted, count-aware). */
export type AvailableFilters = Record<string, string[]>;

function moduleBase(): string {
  return window.__AIED_BASE_PATH__ ?? '';
}

/**
 * Load pagefind.js once (ES module import) and resolve the module surface.
 * A failed import is retry-able: resetPagefindInit() drops the cached
 * promise so Retry can attempt a fresh load.
 */
export function initPagefind(timeoutMs = 20000): Promise<PagefindModule> {
  if (initPromise) return initPromise;
  initPromise = new Promise<PagefindModule>((resolve, reject) => {
    const timer = window.setTimeout(() => {
      resetPagefindInit();
      reject(new Error('Pagefind did not initialize in time'));
    }, timeoutMs);
    import(/* @vite-ignore */ `${moduleBase()}/pagefind/pagefind.js`)
      .then((mod: PagefindModule) => {
        window.clearTimeout(timer);
        resolve(mod);
      })
      .catch((err: unknown) => {
        window.clearTimeout(timer);
        resetPagefindInit();
        reject(err instanceof Error ? err : new Error(String(err)));
      });
  });
  return initPromise;
}

/** Drop a failed init so Retry can try again. */
export function resetPagefindInit(): void {
  initPromise = null;
}

/**
 * Translate the UI state into Pagefind's filter syntax.
 *
 * Pagefind ANDs values supplied as an array, so `{ page_type: ['faq',
 * 'concept'] }` matches pages that are both. The search plan requires OR
 * within a facet and AND across facets, which is the documented `any`
 * compound filter: `{ page_type: { any: ['faq', 'concept'] } }`.
 *
 * Pure (no DOM, no Pagefind import) so it can be unit-tested.
 */
export function toPagefindFilters(filters: Record<string, string[]>): PagefindFilters | undefined {
  const out: PagefindFilters = {};
  for (const [facet, values] of Object.entries(filters)) {
    const clean = [...new Set(values.map((v) => v.trim()).filter(Boolean))];
    if (clean.length === 0) continue;
    out[facet] = clean.length === 1 ? clean[0] : { any: clean };
  }
  return Object.keys(out).length ? out : undefined;
}

/**
 * Run one search. `query` may be null — with active filters that browses
 * the matching subset, which is Pagefind's documented standalone-filter
 * behavior (`search(null, { filters })`).
 */
export async function search(
  query: string | null,
  filters: Record<string, string[]>,
): Promise<PagefindSearchOutcome> {
  const pf = await initPagefind();
  const opts = toPagefindFilters(filters);
  const raw = await pf.search(query, opts ? { filters: opts } : undefined);
  const results = raw.results ?? [];
  return {
    total: results.length,
    unfilteredTotal: raw.unfilteredResultCount ?? raw.unfiltered_total_result_count ?? results.length,
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
  let data: RawResultData = {};
  try { data = (await r.data?.()) ?? {}; } catch { /* keep defaults */ }
  const url = data.url ?? ''; // canonical /aied/... path from the index
  const meta = data.meta ?? {};
  const filters = data.filters ?? {};
  return {
    id: r.id ?? url,
    url,
    title: meta.title ?? url,
    // Pagefind 1.5.2 exposes the highlighted excerpt on data(), NOT as a
    // method on the result handle. Calling result.excerpt() silently
    // produced empty cards in the first implementation.
    excerpt: data.excerpt ?? '',
    type: filters.page_type?.[0],
    meta: {
      discipline: filters.discipline ?? [],
      level: filters.level ?? [],
    },
  };
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
    /** Injected by SearchInterface.astro from Astro's basePath config. */
    __AIED_BASE_PATH__?: string;
  }
}
