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

const vi: SearchStrings = {
  title: 'Tìm kiếm',
  h1: 'Tìm kiếm',
  intro: 'Tìm kiếm trên toàn bộ bài viết và khái niệm. Dùng các bộ lọc để thu hẹp kết quả.',
  corpusIntro:
    'Mọi nội dung trong cơ sở tri thức đều có thể tìm kiếm — bao gồm cả các FAQ và các trang công cụ và tài nguyên miễn phí. Hiện tại cơ sở tri thức chứa:',
  placeholder: 'Tìm bài viết, khái niệm và FAQ...',
  filterLabels: {
    page_type: 'Loại',
    discipline: 'Lĩnh vực',
    level: 'Cấp độ',
    audience: 'Đối tượng dự kiến',
    research_method: 'Thiết kế nghiên cứu',
    page_kind: 'Loại trang',
  },
};

export default vi;
