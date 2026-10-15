/**
 * Search page copy, per locale. The filter-bar labels are translated; the facet
 * values that come from the content (disciplines, levels, concept slugs) are
 * content, not chrome, so they stay as authored on the (English) page they
 * describe — the convention for untranslated content.
 */
export interface SearchStrings {
  title: string;
  h1: string;
  intro: string;
  corpusIntro: string;
  placeholder: string;
  filterLabels: {
    page_type: string;
    discipline: string;
    level: string;
    audience: string;
    research_method: string;
    page_kind: string;
  };
}

const id: SearchStrings = {
  title: 'Cari',
  h1: 'Cari',
  intro: 'Cari di seluruh artikel dan konsep. Gunakan filter untuk mempersempit hasilnya.',
  corpusIntro:
    'Semua yang ada di basis pengetahuan ini dapat dicari — termasuk FAQ dan halaman alat serta sumber daya gratis. Saat ini berisi:',
  placeholder: 'Cari artikel, konsep, dan FAQ...',
  filterLabels: {
    page_type: 'Jenis',
    discipline: 'Disiplin',
    level: 'Tingkat',
    audience: 'Audiensi sasaran',
    research_method: 'Desain studi',
    page_kind: 'Jenis halaman',
  },
};

export default id;
