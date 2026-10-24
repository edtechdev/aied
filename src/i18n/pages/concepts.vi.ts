/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the strand headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const vi: ConceptsStrings = {
  title: 'Khái niệm',
  h1: 'Khái niệm',
  introHtml:
    'Tất cả các trang khái niệm trên site, trong cùng những mảng như thanh bên trái. Mỗi trang cho biết một ý tưởng trong AI và giáo dục nghĩa là gì, nghiên cứu đã phát hiện gì về nó, và nó dựa trên những nghiên cứu nào. <a href="/aied/concepts/ai-education/">AI trong giáo dục</a> là chiếc ô bao trùm gắn chúng lại với nhau.',
  browseHtml:
    'Các trang khái niệm cũng có dạng <a href="/aied/aied.epub">EPUB</a> hoặc <a href="/aied/aied.pdf">PDF</a> để đọc ngoại tuyến. Để bắt đầu từ một câu hỏi, một bài báo, một công cụ, một lần tìm kiếm hoặc trợ lý của riêng bạn, hãy xem <a href="/aied/faq">FAQ</a>, <a href="/aied/journal">nhật ký</a>, <a href="/aied/resources">tài nguyên</a>, <a href="/aied/search">tìm kiếm</a> hoặc <a href="/aied/ai">trang AI</a>.',
  countTemplate: '{count} trang khái niệm, chia thành {strands} mảng.',
  strandBlurbs: {
    'Foundations of AI in education':
      'Cái nhìn bao trùm về chính lĩnh vực này: AI trong giáo dục là gì, nó đã phát triển ra sao, và những chủ đề xuyên suốt (hiểu biết về AI, cộng tác giữa người và AI, quyền tự chủ) định hình mọi mảng khác.',
    'Learning and instruction':
      'AI hỗ trợ việc học tập và giảng dạy như thế nào, thông qua các phương pháp sư phạm, lý thuyết học tập và những quá trình hướng tới người học mà AI vận hành bên trong.',
    'Technologies and techniques':
      'Lớp kỹ thuật: các mô hình và phương pháp AI làm nền cho công nghệ giáo dục, cùng những hệ thống mô hình hóa người học và gia sư được xây trên đó.',
    'AI in the disciplines':
      'AI được ứng dụng ra sao trong các môn học và các cấp học: phạm vi bao phủ theo lĩnh vực của ngành.',
    'Assessment and measurement':
      'AI vừa đánh giá người học, vừa định hình lại cách chúng ta đánh giá các hệ thống AI và tác động của chúng.',
    'Equity, ethics, and responsible use':
      'Công bằng, khả năng tiếp cận và trách nhiệm là những điểm cốt lõi của AI trong giáo dục.',
  },
  empty: 'Chưa có trang khái niệm nào.',
};

export default vi;
