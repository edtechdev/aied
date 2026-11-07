// src/lib/search/controller.ts
//
// Coordinator for the search interface: user events, asynchronous requests,
// rendering, history, and sharing. One controller per mounted interface
// (search page, 404 page). It owns the DOM subtree of `.search-interface`
// and the single source of truth for the CURRENT search state; the URL is
// re-derived from the state (see state.ts), never the other way around.
//
// Behavior contract (AIED search implementation plan, Phase 1-2):
//   - debounced typing (~200 ms), Enter submits immediately, filter changes
//     run immediately
//   - monotonically increasing request ids; a stale response can never
//     replace a newer one
//   - hydrate only the first 10 records; "load more" fetches the next 10
//   - no fixed readiness waits: the search runs as soon as Pagefind is ready
//   - replaceState while typing, pushState for committed searches/filters;
//     popstate restores without writing another entry
//   - initialization/fetch failure shows a readable error + Retry
//   - all rendered text goes through textContent; excerpts are sanitized to
//     <mark> only
import type { SearchState } from './state.ts';
import {
  canonicalUrl,
  emptyState,
  hasState,
  normalizeState,
  stateFromSearchParams,
  statesEqual,
} from './state.ts';
import type { AvailableFilters } from './pagefind.ts';
import {
  availableFilters,
  hydrateResults,
  initPagefind,
  type PagefindResultRecord,
  resetPagefindInit,
  search,
} from './pagefind.ts';

export interface SearchChrome {
  /** Visible, permanent labels (unlocalized values fall back to English). */
  labels: Record<string, string>;
  /** Facet name -> localized visible label (Type, Level, ...). */
  facetLabel?: Record<string, string>;
  /** Facet name -> ordered list of group options (mostly translated names). */
  facetOrder: { primary: string[]; more: string[] };
  /** Value display for known enumerations (page_type), else undefined = raw. */
  valueLabels: Record<string, Record<string, string>>;
  /** Concept slug -> title (for topic facet values). */
  conceptTitles: Record<string, string>;
  /** Empty-state starter queries (strings are user-visible suggestions). */
  starterQueries: string[];
  /** Localized index links for the no-JS / empty fallback. */
  indexHrefs: Record<string, string>;
  hideHeaderSearch?: boolean;
}

const HYDRATE_PAGE = 10;
const TYPING_DEBOUNCE_MS = 200;

export class SearchController {
  private root: HTMLElement;
  private chrome: SearchChrome;
  private input: HTMLInputElement;
  private form: HTMLFormElement;
  private statusEl: HTMLElement;
  private summaryEl: HTMLElement;
  private resultsEl: HTMLElement;
  private emptyEl: HTMLElement;
  private errorEl: HTMLElement;
  private loadMoreBtn: HTMLButtonElement;
  private retryBtn: HTMLButtonElement;
  private chipsEl: HTMLElement;
  private clearAllBtn: HTMLButtonElement;
  private moreDetails: HTMLDetailsElement;
  private optionGroups: Record<string, HTMLElement> = {};
  private available: AvailableFilters = {};
  private state: SearchState = emptyState();
  private seq = 0;
  private rawResults: unknown[] = [];
  private currentResults: PagefindResultRecord[] = [];
  private initialized = false;
  private pendingDebounce: number | null = null;
  private lastCommittedUrl = '';

  constructor(root: HTMLElement, chrome: SearchChrome) {
    this.root = root;
    this.chrome = chrome;
    this.input = this.byId<HTMLInputElement>('q');
    this.form = this.byId<HTMLFormElement>('form'); // markup: data-search-form
    this.statusEl = this.byId<HTMLElement>('status');
    this.summaryEl = this.byId<HTMLElement>('summary');
    this.resultsEl = this.byId<HTMLElement>('results');
    this.emptyEl = this.byId<HTMLElement>('empty');
    this.errorEl = this.byId<HTMLElement>('error');
    this.loadMoreBtn = this.byId<HTMLButtonElement>('load-more');
    this.retryBtn = this.byId<HTMLButtonElement>('retry');
    this.chipsEl = this.byId<HTMLElement>('chips');
    this.clearAllBtn = this.byId<HTMLButtonElement>('clear-all');
    this.moreDetails = this.byId<HTMLDetailsElement>('more-filters');
    this.bindControls();
    this.bindRadioGroups();
    this.bindHistory();

    // Parse the URL synchronously and show the state in the controls right
    // away (no 5.5 s wait, no polling). The first search fires only once
    // Pagefind is initialized (boot() below); requests issued before that
    // would otherwise race the failed-init path.
    const parsed = stateFromSearchParams(window.location.search);
    this.state = parsed.state;
    if (parsed.notices.length) {
      this.setStatus(this.chrome.labels.note + parsed.notices.join(' '));
    }
    this.applyStateToControls(this.state);
    this.renderChips();

    // Initialize Pagefind itself; filters become available once it resolves.
    void this.boot();
  }

  private byId<T extends HTMLElement>(id: string): T {
    const el = this.root.querySelector<HTMLElement>(`[data-search-${id}]`);
    if (!el) throw new Error(`search interface missing [data-search-${id}]`);
    return el as T;
  }

  // ---- control wiring -------------------------------------------------

  private cancelPendingDebounce(): void {
    if (this.pendingDebounce !== null) {
      window.clearTimeout(this.pendingDebounce);
      this.pendingDebounce = null;
    }
  }

  private bindControls(): void {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.cancelPendingDebounce();
      this.commitQueryFromInput();
    });
    this.input.addEventListener('input', () => {
      if (this.pendingDebounce !== null) window.clearTimeout(this.pendingDebounce);
      this.pendingDebounce = window.setTimeout(() => {
        this.pendingDebounce = null;
        const q = this.input.value;
        const next = normalizeState({ query: q, filters: this.state.filters });
        this.setState(next, { pushHistory: false });
        this.run(next, { announce: false });
      }, TYPING_DEBOUNCE_MS);
    });
    this.loadMoreBtn.addEventListener('click', () => this.loadMore());
    this.retryBtn.addEventListener('click', () => {
      resetPagefindInit();
      this.initialized = false;
      this.hide(this.errorEl);
      this.setStatus(this.chrome.labels.retrying);
      void this.boot().then(() => this.run(this.state, { announce: true }));
    });
    this.clearAllBtn.addEventListener('click', () => {
      this.cancelPendingDebounce();
      const next = emptyState();
      this.setState(next, { pushHistory: true, forceUrl: true });
      this.input.value = '';
      this.run(next, { announce: true });
    });
    this.byId<HTMLButtonElement>('clear-filters').addEventListener('click', () => {
      // Clearing the filters preserves the query, including a keystroke that
      // has not reached the debounce yet.
      this.cancelPendingDebounce();
      const next = normalizeState({ query: this.input.value, filters: {} });
      this.setState(next, { pushHistory: true });
      this.run(next, { announce: true });
    });
    this.byId<HTMLButtonElement>('clear-query').addEventListener('click', () => {
      // Clearing the query preserves the filters.
      this.cancelPendingDebounce();
      const next = normalizeState({ query: '', filters: this.state.filters });
      this.setState(next, { pushHistory: true });
      this.input.value = '';
      this.run(next, { announce: true });
    });
    this.byId<HTMLButtonElement>('share').addEventListener('click', () => this.share());
  }

  private bindRadioGroups(): void {
    this.root.querySelectorAll<HTMLElement>('[data-filter-group]').forEach((group) => {
      const facet = group.dataset.filterGroup as string;
      this.optionGroups[facet] = group.querySelector<HTMLElement>('[data-filter-options]')!;
      group.addEventListener('change', (e) => {
        const box = (e.target as HTMLElement).closest('input[type="checkbox"]') as HTMLInputElement | null;
        if (!box) return;
        const value = box.value;
        const filters = { ...this.state.filters };
        const vals = new Set(filters[facet] ?? []);
        if (box.checked) vals.add(value);
        else vals.delete(value);
        const nextFilters = { ...filters, [facet]: [...vals] };
        if (nextFilters[facet].length === 0) delete nextFilters[facet];
        // Use the live input value, not the last debounced state: a filter
        // click can arrive inside the 200 ms typing window.
        const next = normalizeState({ query: this.input.value, filters: nextFilters });
        this.setState(next, { pushHistory: true });
        this.run(next, { announce: false });
      });
    });
  }

  private emitStateAnnouncement(message: string): void {
    const region = this.byId<HTMLElement>('a11y-announce');
    region.textContent = message;
  }

  private bindHistory(): void {
    window.addEventListener('popstate', () => {
      const parsed = stateFromSearchParams(window.location.search);
      this.state = parsed.state;
      this.applyStateToControls(this.state);
      this.renderChips();
      this.run(this.state, { announce: true, fromPop: true });
    });
  }

  // ---- state application ----------------------------------------------

  private setState(next: SearchState, opts: { pushHistory?: boolean; forceUrl?: boolean } = {}): void {
    const changed = !statesEqual(this.state, next);
    this.state = next;
    this.applyStateToControls(next);
    this.renderChips();
    if (opts.forceUrl || (!opts.pushHistory && changed)) {
      window.history.replaceState({}, '', canonicalUrl(next));
    }
    // Committed searches/filters create one history entry, not one per keystroke.
    if (opts.pushHistory && changed) {
      window.history.pushState({}, '', canonicalUrl(next));
    }
  }

  private applyStateToControls(state: SearchState): void {
    if (document.activeElement !== this.input) this.input.value = state.query;
    const clearQuery = this.byId<HTMLButtonElement>('clear-query');
    clearQuery.hidden = state.query === '';
    const hasFilters = Object.keys(state.filters).some((k) => state.filters[k].length > 0);
    this.byId<HTMLButtonElement>('clear-filters').hidden = !hasFilters;
    this.byId<HTMLButtonElement>('clear-all').hidden = !hasFilters && state.query === '';
    this.root.querySelectorAll<HTMLInputElement>('input[data-search-filter-option]').forEach((box) => {
      box.checked = (state.filters[box.dataset.searchFilterOption as string] ?? []).includes(box.value);
    });
    // Compact facet summaries show how many values are selected in each group.
    this.root.querySelectorAll<HTMLElement>('[data-filter-group]').forEach((group) => {
      const facet = group.dataset.filterGroup as string;
      const count = (state.filters[facet] ?? []).length;
      const badge = group.querySelector<HTMLElement>('[data-filter-count]');
      if (badge) {
        badge.textContent = count ? String(count) : '';
        badge.hidden = count === 0;
      }
    });
    this.updateEnglishLink(state);
  }

  /**
   * On a non-English search page, keep the "search the English corpus"
   * fallback pointed at the same query. Pagefind serves one language per
   * page, so a partial locale needs an explicit escape hatch.
   */
  private updateEnglishLink(state: SearchState): void {
    const link = this.root.querySelector<HTMLAnchorElement>('[data-search-english]');
    if (!link) return;
    const params = new URLSearchParams();
    if (state.query) params.set('q', state.query);
    for (const [facet, values] of Object.entries(state.filters)) {
      for (const value of values) params.append(facet, value);
    }
    const qs = params.toString();
    link.href = `/aied/search/${qs ? `?${qs}` : ''}`;
  }

  private renderChips(): void {
    this.chipsEl.textContent = '';
    const labels = this.chrome.labels;
    for (const [facet, values] of Object.entries(this.state.filters)) {
      for (const value of values) {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'search-chip';
        chip.setAttribute('aria-label', `${labels.chip_remove} ${this.displayValue(facet, value)}`);
        const facetName = this.chrome.facetLabel?.[facet] ?? labels[facet] ?? facet;
        chip.textContent = `${facetName}: ${this.displayValue(facet, value)} ×`;
        chip.addEventListener('click', () => {
          const filters = { ...this.state.filters };
          const vals = new Set(filters[facet]);
          vals.delete(value);
          const nextFilters = { ...filters, [facet]: [...vals] };
          if (nextFilters[facet].length === 0) delete nextFilters[facet];
          this.cancelPendingDebounce();
          const next = normalizeState({ query: this.input.value, filters: nextFilters });
          this.setState(next, { pushHistory: true });
          this.run(next, { announce: true });
        });
        this.chipsEl.appendChild(chip);
      }
    }
  }

  private displayValue(facet: string, value: string): string {
    return this.chrome.valueLabels[facet]?.[value]
      ?? this.chrome.conceptTitles[value]
      ?? value;
  }

  // ---- search execution ------------------------------------------------

  private commitQueryFromInput(): void {
    const next = normalizeState({ query: this.input.value, filters: this.state.filters });
    this.setState(next, { pushHistory: true });
    this.run(next, { announce: true });
  }

  private async boot(): Promise<void> {
    try {
      await initPagefind();
      this.initialized = true;
      this.available = await availableFilters();
      this.populateFilterOptions();
      // Once ready, execute the latest state (restoration is not gated on
      // input.value !== q anymore; filter-only URLs work).
      this.run(this.state, { announce: false, force: true });
    } catch (err) {
      this.showError(err instanceof Error ? err.message : String(err));
    }
  }

  private populateFilterOptions(): void {
    for (const facet of Object.keys(this.optionGroups)) {
      const values = this.available[facet] ?? [];
      const group = this.optionGroups[facet];
      group.textContent = '';
      for (const value of values) {
        const wrap = document.createElement('label');
        wrap.className = 'search-option';
        const box = document.createElement('input');
        box.type = 'checkbox';
        box.value = value;
        box.dataset.searchFilterOption = facet;
        box.checked = (this.state.filters[facet] ?? []).includes(value);
        const span = document.createElement('span');
        span.textContent = this.displayValue(facet, value);
        wrap.append(box, span);
        group.appendChild(wrap);
      }
      // Selections that exist in the URL but are not in the available set
      // stay visible as chips (removable) - the user is told, not silently
      // widened. The plan requires selected zero-count options to remain
      // removable, which the chip row already provides.
    }
  }

  /**
   * Run a search for `state`. Only the LATEST call renders: `this.seq` is
   * captured per call and every await re-checks it.
   */
  private run(state: SearchState, opts: { announce?: boolean; fromPop?: boolean; force?: boolean } = {}): void {
    // Search can only execute against an initialized index. Every event that
    // leads here (typing, filters, popstate, retry) happens again once init
    // resolves via boot()'s force run on the latest state, so nothing is lost.
    if (!this.initialized && !opts.force) return;
    const id = ++this.seq;
    this.hide(this.errorEl);
    this.hide(this.emptyEl);
    if (!hasState(state)) {
      this.rawResults = [];
      this.currentResults = [];
      this.renderResults([]);
      this.summaryEl.textContent = '';
      this.hide(this.loadMoreBtn);
      this.showEmptySuggestions();
      this.setStatus('');
      return;
    }
    this.resultsEl.setAttribute('aria-busy', 'true');
    this.setStatus(this.chrome.labels.searching);
    void (async () => {
      try {
        // Browse mode: an empty query with active filters uses Pagefind's
        // documented standalone-filter call, search(null, { filters }). An
        // empty string or a single space returns nothing in 1.5.x.
        const term = state.query === '' && Object.keys(state.filters).length ? null : state.query;
        const outcome = await search(term, state.filters);
        if (id !== this.seq) return; // stale response - drop it
        this.rawResults = outcome.results;
        this.currentResults = [];
        const items = await hydrateResults(this.rawResults, 0, HYDRATE_PAGE);
        if (id !== this.seq) return;
        this.currentResults = items;
        this.resultsEl.setAttribute('aria-busy', 'false');
        if (outcome.total === 0) {
          this.renderResults([]);
          this.summaryEl.textContent = state.query
            ? this.chrome.labels.none.replace('{query}', state.query)
            : this.chrome.labels.none_filtered;
          this.showEmptySuggestions({ forceNoHits: true });
        } else {
          this.renderResults(items);
          this.summaryEl.textContent = this.summaryText(outcome.total, items.length);
          this.loadMoreBtn.hidden = items.length >= outcome.total;
          this.hide(this.emptyEl);
        }
        if (opts.announce) this.emitStateAnnouncement(this.summaryEl.textContent ?? '');
        this.setStatus('');
      } catch (err) {
        if (id !== this.seq) return;
        this.resultsEl.setAttribute('aria-busy', 'false');
        this.showError(err instanceof Error ? err.message : String(err));
      }
    })();
  }

  private summaryText(total: number, shown: number): string {
    const tpl = this.chrome.labels.summary;
    return tpl.replace('{total}', String(total)).replace('{shown}', String(shown));
  }

  private async loadMore(): Promise<void> {
    const from = this.currentResults.length;
    const more = await hydrateResults(this.rawResults, from, HYDRATE_PAGE);
    this.currentResults = this.currentResults.concat(more);
    // Append only the newly hydrated batch; passing the full list again would
    // duplicate every previously rendered result.
    this.renderResults(more, { append: true });
    this.loadMoreBtn.hidden = this.currentResults.length >= this.rawResults.length;
    this.summaryEl.textContent = this.summaryText(this.rawResults.length, this.currentResults.length);
  }

  // ---- rendering --------------------------------------------------------

  private renderResults(items: PagefindResultRecord[], opts: { append?: boolean } = {}): void {
    if (!opts.append) this.resultsEl.textContent = '';
    const fragment = document.createDocumentFragment();
    const facetName = (facet: string): string => this.chrome.facetLabel?.[facet] ?? facet;
    for (const item of items) {
      const li = document.createElement('li');
      li.className = 'search-result';

      const head = document.createElement('div');
      head.className = 'search-result-head';
      if (item.type) {
        const badge = document.createElement('span');
        badge.className = 'search-result-type';
        badge.textContent = this.displayValue('page_type', item.type);
        head.appendChild(badge);
      }
      const a = document.createElement('a');
      a.className = 'search-result-link';
      a.href = item.url;
      a.textContent = item.title;
      head.appendChild(a);

      const excerpt = document.createElement('p');
      excerpt.className = 'search-result-excerpt';
      // Excerpts from Pagefind contain highlighting markup; only <mark> is allowed.
      excerpt.innerHTML = sanitizeExcerpt(item.excerpt);

      const metaValues: string[] = [];
      for (const facet of ['discipline', 'level'] as const) {
        const values = item.meta[facet] ?? [];
        if (values.length) {
          metaValues.push(`${facetName(facet)}: ${values.map((v) => this.displayValue(facet, v)).join(', ')}`);
        }
      }
      const meta = document.createElement('div');
      meta.className = 'search-result-meta';
      meta.textContent = metaValues.join(' · ');

      li.append(head);
      if (item.excerpt) li.append(excerpt);
      if (metaValues.length) li.append(meta);
      fragment.appendChild(li);
    }
    this.resultsEl.appendChild(fragment);
  }

  // ---- states -----------------------------------------------------------

  private setStatus(message: string): void {
    this.statusEl.textContent = message;
  }

  private showError(message: string): void {
    this.errorEl.querySelector('[data-error-text]')!.textContent =
      `${this.chrome.labels.error}: ${message}`;
    this.show(this.errorEl);
    this.hide(this.loadMoreBtn);
    this.resultsEl.textContent = '';
  }

  private showEmptySuggestions(opts: { forceNoHits?: boolean } = {}): void {
    const list = this.emptyEl.querySelector('[data-suggestion-queries]');
    if (list) {
      list.textContent = '';
      for (const q of this.chrome.starterQueries) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'search-suggestion-query';
        btn.textContent = q;
        btn.addEventListener('click', () => {
          this.input.value = q;
          this.commitQueryFromInput();
        });
        list.appendChild(btn);
      }
    }
    const emptyHits = this.emptyEl.querySelector<HTMLElement>('[data-empty-hits]');
    if (emptyHits) emptyHits.hidden = !opts.forceNoHits;
    this.show(this.emptyEl);
  }

  private async share(): Promise<void> {
    // The address bar and history use the site-relative canonical form; a
    // shared link must be absolute so it opens from another device or chat.
    const url = new URL(canonicalUrl(this.state), window.location.origin).href;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        this.setStatus(this.chrome.labels.copied);
        return;
      }
      throw new Error('no clipboard');
    } catch {
      const fallback = document.createElement('input');
      fallback.readOnly = true;
      fallback.value = url;
      fallback.className = 'search-share-fallback';
      fallback.setAttribute('aria-label', this.chrome.labels.share_url);
      this.statusEl.after(fallback);
      fallback.select();
      this.setStatus(this.chrome.labels.copy_manually);
    }
  }

  private show(el: HTMLElement): void { el.hidden = false; }
  private hide(el: HTMLElement): void { el.hidden = true; }
}

/**
 * Narrow excerpt sanitizer: every rendered piece of text is escaped and the
 * only markup emitted is <mark>...</mark> (the documented Pagefind
 * highlighting tag). Nothing else survives; attribute content is dropped.
 */
export function sanitizeExcerpt(html: string): string {
  const tpl = document.createElement('template');
  tpl.innerHTML = html;
  const out: string[] = [];
  const esc = (s: string): string =>
    s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);
  const walk = (node: Node, inMark: boolean): void => {
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent ?? '';
        out.push(inMark ? `<mark>${esc(text)}</mark>` : esc(text));
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const el = child as HTMLElement;
        walk(el, inMark || el.tagName.toLowerCase() === 'mark');
      }
    });
  };
  walk(tpl.content, false);
  return out.join('');
}
