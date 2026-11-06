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
  label: Record<string, string>;
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
    this.form = this.byId<HTMLFormElement>('search-form');
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
      this.setStatus(this.chrome.label.status_note + parsed.notices.join(' '));
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

  private bindControls(): void {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.commitQueryFromInput();
    });
    this.input.addEventListener('input', () => {
      if (this.pendingDebounce !== null) window.clearTimeout(this.pendingDebounce);
      this.pendingDebounce = window.setTimeout(() => {
        this.pendingDebounce = null;
        const q = this.input.value;
        const next = normalizeState({ query: q, filters: this.state.filters });
        this.setState(next, { pushHistory: false });
      }, TYPING_DEBOUNCE_MS);
    });
    this.loadMoreBtn.addEventListener('click', () => this.loadMore());
    this.retryBtn.addEventListener('click', () => {
      resetPagefindInit();
      this.initialized = false;
      this.hide(this.errorEl);
      this.setStatus(this.chrome.label.status_retrying);
      void this.boot().then(() => this.run(this.state, { announce: true }));
    });
    this.clearAllBtn.addEventListener('click', () => {
      const next = emptyState();
      this.setState(next, { pushHistory: true, forceUrl: true });
      this.input.value = '';
      this.run(next, { announce: true });
    });
    this.byId<HTMLButtonElement>('clear-filters').addEventListener('click', () => {
      // Clearing the filters preserves the query.
      const next = normalizeState({ query: this.state.query, filters: {} });
      this.setState(next, { pushHistory: true });
      this.run(next, { announce: true });
    });
    this.byId<HTMLButtonElement>('clear-query').addEventListener('click', () => {
      // Clearing the query preserves the filters.
      const next = normalizeState({ query: '', filters: this.state.filters });
      this.setState(next, { pushHistory: true });
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
        const next = normalizeState({ query: this.state.query, filters: nextFilters });
        this.setState(next, { pushHistory: true });
        this.run(next, { announce: false });
      });
    });
  }

  private emitStateAnnouncement(): void {
    const region = this.byId<HTMLElement>('a11y-announce');
    region.textContent = this.chrome.label.status_loaded;
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
    this.root.querySelectorAll<HTMLInputElement>('input[data-search-filter-option]').forEach((box) => {
      box.checked = (state.filters[box.dataset.searchFilterOption as string] ?? []).includes(box.value);
    });
  }

  private renderChips(): void {
    this.chipsEl.textContent = '';
    const labels = this.chrome.label;
    for (const [facet, values] of Object.entries(this.state.filters)) {
      for (const value of values) {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'search-chip';
        chip.setAttribute('aria-label', `${labels.chip_remove} ${this.displayValue(facet, value)}`);
        chip.textContent = `${labels[facet] ?? facet}: ${this.displayValue(facet, value)} ×`;
        chip.addEventListener('click', () => {
          const filters = { ...this.state.filters };
          const vals = new Set(filters[facet]);
          vals.delete(value);
          const nextFilters = { ...filters, [facet]: [...vals] };
          if (nextFilters[facet].length === 0) delete nextFilters[facet];
          const next = normalizeState({ query: this.state.query, filters: nextFilters });
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
    this.setStatus(this.chrome.label.status_searching);
    void (async () => {
      try {
        // Browse mode: an empty query with active filters cannot be expressed
        // as an empty term (pagefind.search('') returns zero results in
        // 1.5.x). Search a single space instead - the engine treats it as a
        // non-empty term; if it still returns nothing the empty state shows
        // the filters plus browse links rather than an error.
        const term = state.query === '' && Object.keys(state.filters).length ? ' ' : state.query;
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
          this.summaryEl.textContent = this.chrome.label.none.replace('{query}', state.query);
          this.showEmptySuggestions({ forceNoHits: true });
        } else {
          this.renderResults(items);
          this.summaryEl.textContent = this.summaryText(outcome.total, items.length);
          this.loadMoreBtn.hidden = items.length >= outcome.total;
          this.hide(this.emptyEl);
        }
        if (opts.announce) this.emitStateAnnouncement();
        this.setStatus('');
      } catch (err) {
        if (id !== this.seq) return;
        this.resultsEl.setAttribute('aria-busy', 'false');
        this.showError(err instanceof Error ? err.message : String(err));
      }
    })();
  }

  private summaryText(total: number, shown: number): string {
    const tpl = this.chrome.label.summary;
    return tpl.replace('{total}', String(total)).replace('{shown}', String(shown));
  }

  private async loadMore(): Promise<void> {
    const from = this.currentResults.length;
    const more = await hydrateResults(this.rawResults, from, HYDRATE_PAGE);
    this.currentResults = this.currentResults.concat(more);
    this.renderResults(this.currentResults, { append: true });
    this.loadMoreBtn.hidden = this.currentResults.length >= this.rawResults.length;
    this.summaryEl.textContent = this.summaryText(this.rawResults.length, this.currentResults.length);
  }

  // ---- rendering --------------------------------------------------------

  private renderResults(items: PagefindResultRecord[], opts: { append?: boolean } = {}): void {
    if (!opts.append) this.resultsEl.textContent = '';
    const fragment = document.createDocumentFragment();
    for (const item of items) {
      const li = document.createElement('li');
      li.className = 'search-result';
      const a = document.createElement('a');
      a.className = 'search-result-link';
      a.href = item.url;
      a.textContent = item.title;
      const excerpt = document.createElement('p');
      excerpt.className = 'search-result-excerpt';
      // Excerpts from Pagefind contain highlighting markup; only <mark> is allowed.
      excerpt.innerHTML = sanitizeExcerpt(item.excerpt);
      const meta = document.createElement('div');
      meta.className = 'search-result-meta';
      meta.setAttribute('aria-hidden', 'true');
      li.append(a, excerpt, meta);
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
      `${this.chrome.label.error}: ${message}`;
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
    const url = canonicalUrl(this.state);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        this.setStatus(this.chrome.label.copied);
        return;
      }
      throw new Error('no clipboard');
    } catch {
      const fallback = document.createElement('input');
      fallback.readOnly = true;
      fallback.value = url;
      fallback.className = 'search-share-fallback';
      fallback.setAttribute('aria-label', this.chrome.label.share_url);
      this.statusEl.after(fallback);
      fallback.select();
      this.setStatus(this.chrome.label.copy_manually);
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
