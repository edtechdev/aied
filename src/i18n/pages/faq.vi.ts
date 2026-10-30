/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const vi: FaqStrings = {
  title: 'FAQ',
  h1: 'Câu hỏi thường gặp',
  introHtml:
    'Mục này trả lời những câu hỏi phổ biến về <strong>AI trong giáo dục</strong> — những gì nghiên cứu cho thấy về tác động của AI đối với việc dạy và học, và cách các nhà giáo dục, giảng viên và nhà thiết kế giảng dạy có thể đưa những bằng chứng đó vào thực tiễn. Mỗi câu trả lời chắt lọc các kết quả từ những nghiên cứu được tóm tắt trong cơ sở tri thức này, nối câu hỏi với các khái niệm và bài viết liên quan để đọc sâu hơn.',
  assistantHtml:
    'Có câu hỏi chưa được trả lời ở đây? Hãy hỏi trợ lý AI của riêng bạn bằng trang <a href="/aied/ai">Sử dụng cơ sở tri thức này với trợ lý AI của bạn</a>, trang này hướng dẫn cách trỏ một tác nhân vào toàn bộ danh mục để có câu trả lời dựa trên nguồn và có trích dẫn.',
  empty: 'Chưa có FAQ.',
  sectionHeadings: {
    "Start here": "Bắt đầu tại đây",
    "Course and institutional policy": "Chính sách môn học và nhà trường",
    "Designing courses and activities": "Thiết kế môn học và hoạt động",
    "Assessment, feedback and integrity": "Đánh giá, phản hồi và liêm chính",
    "How students learn and use AI": "Sinh viên học và dùng AI thế nào",
    "Particular learners, access and wellbeing": "Người học đặc thù, khả năng tiếp cận và sức khỏe tinh thần",
    "Careers and AI literacy": "Sự nghiệp và năng lực AI",
    "Building and evaluating educational AI": "Xây dựng và đánh giá AI giáo dục",
    "Research practice": "Thực hành nghiên cứu",
  },
  sectionBlurbs: {
    "Start here": "Hai câu hỏi rộng nên đọc trước những câu hỏi cụ thể, dù bạn ở vai trò nào.",
    "Course and institutional policy": "Dành cho giảng viên soạn những quy định sinh viên sẽ đọc, và cho cán bộ quản lý cùng người làm phát triển giảng viên đặt ra quy định ở cấp chương trình.",
    "Designing courses and activities": "Dành cho bất kỳ ai quyết định AI đi vào đâu trong một nhiệm vụ, một học kỳ hay một khóa trực tuyến, và cho giảng viên muốn lấy lại thời gian mà AI lẽ ra phải mang lại.",
    "Assessment, feedback and integrity": "Đây là nhóm lớn nhất, vì bằng chứng ở đây rõ nhất và hệ quả rơi thẳng vào hồ sơ học tập của sinh viên.",
    "How students learn and use AI": "Dành cho những câu hỏi về điều sinh viên thực sự nhận được, điều họ có nguy cơ đánh mất, và cách giữ việc học lại với họ.",
    "Particular learners, access and wellbeing": "Dành cho giảng viên và nhân viên hỗ trợ điều chỉnh thiết kế theo những người thực sự có mặt trong lớp, và cho cán bộ quản lý đang nghĩ về những người không có mặt.",
    "Careers and AI literacy": "Dành cho nhà thiết kế chương trình và người phụ trách chương trình trả lời sinh viên khi họ hỏi tất cả những điều này để làm gì.",
    "Building and evaluating educational AI": "Dành cho nhà phát triển, nhà thiết kế giảng dạy và nhà nghiên cứu đưa một gia sư, một mô phỏng hay một nền tảng vào môn học thật.",
    "Research practice": "Dành cho nhà nghiên cứu báo cáo, phản biện hoặc lập kế hoạch công việc trong lĩnh vực này.",
  },
};

export default vi;
