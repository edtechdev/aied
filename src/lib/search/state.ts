// src/lib/search/state.ts
//
// Pure URL <-> SearchState normalization for the Pagefind search interface.
//
// This module has NO DOM and NO Pagefind imports: it is the single owner of
// how a search state is represented on the URL, so it can be unit-tested in
// isolation and reused by the controller on every mount (search page, 404
// page, and later the header search).
//
// URL contract (see AIED search implementation plan, Phase 1):
//   - Canonical form uses readable repeated parameters:
//       /aied/search/?q=feedback&page_type=faq&level=higher+ed
//   - Legacy links carrying ?q=...&f=<base64 JSON> keep working: they are
//     decoded, validated and normalized into the same state. We never emit f.
//   - New-style values take precedence over legacy f values per facet.
import { FACET_FIELDS } from '../../data/facetVocab.ts';

/** Facets that are reserved search semantics, not topic vocabularies. */
export const QUERY_FACETS = [
  'page_type',
  'discipline',
  'level',
  'audience',
  'research_method',
  'page_kind',
] as const;

/** The seven topic vocabularies from facetVocab.ts (concept-slug values). */
export const TOPIC_FACETS = FACET_FIELDS.map((f) => f.field) as readonly string[];

/** Every key the URL may carry for a filter. */
export const ALLOWED_FACETS: readonly string[] = [...QUERY_FACETS, ...TOPIC_FACETS];

export const LIMITS = {
  /** Max query length, in characters. */
  query: 500,
  /** Legacy f payloads larger than this are dropped as untrusted. */
  legacyPayloadBytes: 16 * 1024,
  /** Max selected values per facet. */
  perFacet: 20,
  /** Max filter selections across all facets. */
  totalSelections: 100,
} as const;

export interface SearchState {
  query: string;
  /** Canonical facet name -> deduplicated values. Facets without values are absent. */
  filters: Record<string, string[]>;
}

export interface ParseResult {
  state: SearchState;
  /** Human-readable (unlocalized) notices about values that were dropped or bounded. */
  notices: string[];
}

export function emptyState(): SearchState {
  return { query: '', filters: {} };
}

export function hasState(s: SearchState): boolean {
  return s.query.trim() !== '' || Object.keys(s.filters).length > 0;
}

/** Normalize an untrusted partial state: trim, bound, dedupe, drop unknown facets. */
export function normalizeState(raw: { query?: string; filters?: Record<string, string[]> }): SearchState {
  const query = (raw.query ?? '').trim().slice(0, LIMITS.query);
  const filters: Record<string, string[]> = {};
  let total = 0;
  for (const [key, vals] of Object.entries(raw.filters ?? {})) {
    if (!ALLOWED_FACETS.includes(key)) continue;
    const list = Array.isArray(vals) ? vals : [vals];
    const uniq = [...new Set(
      list.filter((v): v is string => typeof v === 'string' && v.trim() !== '').map((v) => v.trim()),
    )].slice(0, LIMITS.perFacet);
    if (uniq.length) {
      filters[key] = uniq;
      total += uniq.length;
    }
  }
  // Over-budget selections across facets: keep earlier facets whole, trim the tail.
  if (total > LIMITS.totalSelections) {
    let seen = 0;
    for (const key of Object.keys(filters)) {
      const take = Math.max(0, Math.min(filters[key].length, LIMITS.totalSelections - seen));
      filters[key] = filters[key].slice(0, take);
      seen += take;
      if (filters[key].length === 0) delete filters[key];
    }
  }
  return { query, filters };
}

/** Decode a legacy ?f=<base64 JSON> payload into a validated filter record. */
export function decodeLegacyFilters(payload: string): { filters: Record<string, string[]>; notice?: string } {
  if (!payload) return { filters: {} };
  if (payload.length > LIMITS.legacyPayloadBytes) {
    return { filters: {}, notice: 'legacy filter payload was too large and was ignored' };
  }
  let parsed: unknown;
  try {
    const json = atob(payload);
    parsed = JSON.parse(json);
  } catch {
    return { filters: {}, notice: 'legacy filter payload could not be decoded and was ignored' };
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    return { filters: {}, notice: 'legacy filter payload has an invalid shape and was ignored' };
  }
  const raw: Record<string, string[]> = {};
  for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
    if (!ALLOWED_FACETS.includes(k)) continue;
    if (Array.isArray(v)) raw[k] = v as string[];
    else if (typeof v === 'string' && v !== '') raw[k] = [v];
  }
  return { filters: raw };
}

/**
 * Parse `window.location.search` (a string like `?q=a&page_type=faq`).
 * New-style repeated parameters win over legacy f values facet-by-facet.
 */
export function stateFromSearchParams(search: string): ParseResult {
  const params = new URLSearchParams(search);
  const notices: string[] = [];
  const rawQuery = params.get('q') ?? '';
  const query = rawQuery.slice(0, LIMITS.query);
  if (rawQuery.length > LIMITS.query) notices.push('query was truncated');

  const legacy = decodeLegacyFilters(params.get('f') ?? '');
  if (legacy.notice) notices.push(legacy.notice);

  const filters: Record<string, string[]> = {};
  for (const key of ALLOWED_FACETS) {
    const explicit = params.getAll(key).map((v) => v.trim()).filter((v) => v !== '');
    const source = explicit.length > 0 ? explicit : legacy.filters[key] ?? [];
    if (source.length) filters[key] = source;
  }
  let capped = normalizeState({ query, filters }).filters;
  let total = Object.values(capped).reduce((n, vs) => n + vs.length, 0);
  if (total > LIMITS.totalSelections) notices.push('too many filter selections; some were dropped');
  // per-facet bounds
  for (const key of Object.keys(capped)) {
    if (capped[key].length > LIMITS.perFacet) {
      capped[key] = capped[key].slice(0, LIMITS.perFacet);
      notices.push(`too many values for ${key}`);
    }
  }
  return { state: { query, filters: capped }, notices };
}

/**
 * Serialize state plus preserved unrelated parameters back to a `?query`
 * string. Never emits the legacy f parameter or search-owned keys twice.
 * The hash is the caller's concern (kept untouched in the address bar).
 */
export function stateToSearchParams(state: SearchState, preserve: URLSearchParams): string {
  const params = new URLSearchParams();
  for (const [k, v] of preserve) {
    if (k !== 'q' && k !== 'f' && !ALLOWED_FACETS.includes(k)) params.append(k, v);
  }
  if (state.query) params.set('q', state.query);
  for (const [key, vals] of Object.entries(state.filters)) {
    for (const v of vals) params.append(key, v);
  }
  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

/** The canonical, shareable URL for a state on the current path. */
export function canonicalUrl(state: SearchState): string {
  const preserve = new URLSearchParams(window.location.search);
  const base = window.location.pathname;
  const qs = stateToSearchParams(state, preserve);
  return `${base}${qs}${window.location.hash}`;
}

/** Whether two states are equal for the purposes of URL/history updates. */
export function statesEqual(a: SearchState, b: SearchState): boolean {
  if (a.query !== b.query) return false;
  const ka = Object.keys(a.filters).sort();
  const kb = Object.keys(b.filters).sort();
  if (ka.length !== kb.length) return false;
  for (let i = 0; i < ka.length; i++) {
    if (ka[i] !== kb[i]) return false;
    const va = [...a.filters[ka[i]]].sort();
    const vb = [...b.filters[kb[i]]].sort();
    if (va.length !== vb.length) return false;
    for (let j = 0; j < va.length; j++) if (va[j] !== vb[j]) return false;
  }
  return true;
}
