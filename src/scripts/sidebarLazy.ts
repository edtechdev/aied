    // Lazy left-sidebar taxonomy. The page carries only the ten strand
    // headings and a compact FAQ teaser; expanding a strand or opening the
    // FAQ tab fetches the full localized taxonomy once per locale. The
    // endpoint is cacheable and is never inlined into page HTML.
    interface TaxonomyItem {
      slug: string;
      title: string;
      href: string;
    }
    interface TaxonomyGroup {
      label: string;
      items: TaxonomyItem[];
    }
    interface TaxonomySection {
      anchor: string;
      heading: string;
      groups: TaxonomyGroup[];
    }
    interface TaxonomyData {
      sections?: TaxonomySection[];
      faqs?: TaxonomyItem[];
      faqSections?: FaqSection[];
    }
    interface FaqSection {
      anchor: string;
      label: string;
      items: TaxonomyItem[];
    }
    (() => {
      const nav = document.querySelector<HTMLElement>('[data-taxonomy-url]');
      const url = nav?.getAttribute('data-taxonomy-url');
      if (!nav || !url) return;
      let pending: Promise<TaxonomyData> | null = null;

      const load = (): Promise<TaxonomyData> => {
        if (!pending) {
          pending = fetch(url, { credentials: 'same-origin' })
            .then((response) => {
              if (!response.ok) throw new Error(`taxonomy ${response.status}`);
              return response.json() as Promise<TaxonomyData>;
            })
            .catch((error) => {
              // Do not cache a failed request; a later tab or disclosure can retry.
              pending = null;
              throw error;
            });
        }
        return pending;
      };

      const conceptLink = (item: TaxonomyItem): HTMLAnchorElement => {
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.title;
        return link;
      };

      const renderSection = (section: TaxonomySection): DocumentFragment => {
        const fragment = document.createDocumentFragment();
        for (const group of section.groups || []) {
          const wrap = document.createElement('div');
          wrap.className = 'nav-group';
          const label = document.createElement('div');
          label.className = 'nav-group-label';
          label.textContent = group.label;
          const list = document.createElement('ul');
          list.className = 'nav-list';
          for (const item of group.items || []) {
            const li = document.createElement('li');
            li.append(conceptLink(item));
            list.append(li);
          }
          wrap.append(label, list);
          fragment.append(wrap);
        }
        return fragment;
      };

      const hydrateSection = async (details: HTMLDetailsElement): Promise<void> => {
        if (details.dataset.loaded === 'true' || details.dataset.loading === 'true') return;
        const body = details.querySelector<HTMLElement>('[data-taxonomy-body]');
        if (!body) return;
        const anchor = details.getAttribute('data-taxonomy-section');
        details.dataset.loading = 'true';
        body.setAttribute('aria-busy', 'true');
        try {
          const data = await load();
          const section = (data.sections || []).find((entry) => entry.anchor === anchor);
          if (!section) throw new Error(`taxonomy section ${anchor}`);
          body.insertBefore(renderSection(section), body.firstChild);
          details.dataset.loaded = 'true';
        } catch (error) {
          // The static link to the concepts index remains available.
          details.dataset.loadFailed = 'true';
        } finally {
          delete details.dataset.loading;
          body.removeAttribute('aria-busy');
        }
      };

      document.querySelectorAll<HTMLDetailsElement>('details[data-taxonomy-section]').forEach((details) => {
        if (details.open) void hydrateSection(details);
        details.addEventListener('toggle', () => {
          if (details.open) void hydrateSection(details);
        });
      });

      let faqsPending = false;

      const faqLink = (item: TaxonomyItem): HTMLAnchorElement => {
        const link = document.createElement('a');
        link.className = 'faq-sidebar-link';
        link.href = item.href;
        link.textContent = item.title;
        return link;
      };

      const faqList = (section: FaqSection): HTMLElement => {
        const list = document.createElement('div');
        list.className = 'faq-sidebar-list';
        for (const item of section.items) list.append(faqLink(item));
        return list;
      };

      const loadFaqs = async (): Promise<void> => {
        const list = document.querySelector<HTMLElement>('[data-faq-list]');
        if (!list || list.dataset.loaded === 'true' || faqsPending) return;
        faqsPending = true;
        list.setAttribute('aria-busy', 'true');
        try {
          const data = await load();
          const sections = Array.isArray(data.faqSections)
            ? data.faqSections.filter((section) => (section.items || []).length > 0)
            : [];
          if (sections.length > 0) {
            const groups = document.createElement('div');
            groups.className = 'faq-groups';
            sections.forEach((section, index) => {
              const details = document.createElement('details');
              details.className = 'faq-group';
              details.dataset.faqGroup = section.anchor;
              const summary = document.createElement('summary');
              summary.textContent = section.label;
              const body = document.createElement('div');
              body.className = 'faq-group-body';
              details.append(summary, body);
              const fill = () => {
                if (body.dataset.loaded === 'true') return;
                body.append(faqList(section));
                body.dataset.loaded = 'true';
              };
              details.addEventListener('toggle', () => {
                if (details.open) fill();
              });
              // The first group gives the tab a useful first question instead
              // of a wall of collapsed headings.
              if (index === 0) {
                details.open = true;
                fill();
              }
              groups.append(details);
            });
            list.replaceChildren(groups);
            list.dataset.loaded = 'true';
          } else {
            const fallback = Array.isArray(data.faqs) ? data.faqs : [];
            if (fallback.length > 0) {
              const wrapper = document.createElement('div');
              wrapper.className = 'faq-sidebar-list';
              for (const item of fallback) wrapper.append(faqLink(item));
              list.replaceChildren(wrapper);
              list.dataset.loaded = 'true';
            }
          }
        } catch (error) {
          // Keep the server-rendered compact list and its link to the FAQ index.
          list.dataset.loadFailed = 'true';
        } finally {
          faqsPending = false;
          list.removeAttribute('aria-busy');
        }
      };

      document.addEventListener('aied:load-faqs', () => void loadFaqs());
      // The bundled module runs after the inline tab script has restored the
      // saved tab. If that tab was FAQs, load the full list now rather than
      // waiting for a second click.
      const faqTab = document.querySelector('[data-sidebar-tab="faqs"]');
      if (faqTab?.getAttribute('aria-selected') === 'true') void loadFaqs();
    })();
