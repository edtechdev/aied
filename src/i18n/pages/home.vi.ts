/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const vi: HomeStrings = {
  title: 'Trang chủ',
  h1: 'Cơ sở tri thức về AI trong giáo dục',
  introHtml: `Chào mừng bạn đến với Cơ sở tri thức về AI trong giáo dục, một tài nguyên miễn phí thuộc phạm vi công cộng về <a href="/aied/concepts/ai-education/">trí tuệ nhân tạo trong giáo dục</a> dành cho những người dạy, học, thiết kế hoặc quản lý lĩnh vực này. Cơ sở tri thức tóm tắt và tổng hợp các nghiên cứu giáo dục truy cập mở gần đây. Một tác nhân AI viết và cập nhật các trang, dưới sự định hướng biên tập của người phát triển website.`,
  navHeading: 'Điều hướng website',
  navHtml: `Duyệt chỉ mục ở thanh bên trái, được sắp xếp theo từng mảng, hoặc <a href="/aied/search">tìm kiếm</a> một chủ đề. Các trang bài viết chắt lọc một bài báo thành mục đích, phương pháp và kết quả của nó; các trang khái niệm tập hợp những gì nghiên cứu nói về một ý tưởng và liên kết đến các nghiên cứu đứng sau nó. Để bắt đầu từ một câu hỏi, <a href="/aied/faq">FAQ</a> bao quát những câu mà độc giả hỏi đầu tiên, chẳng hạn chính sách AI của môn học hoặc có nên dùng công cụ phát hiện AI hay không. Để bắt đầu từ một công cụ, <a href="/aied/resources">trang tài nguyên</a> liệt kê các công cụ và bộ sưu tập miễn phí, kèm theo ai đã tạo ra từng thứ và chi phí sử dụng. Bản đồ bên trên nhóm lĩnh vực này thành mười hai mảng, với <a href="/aied/concepts/ai-education/">AI trong giáo dục</a> là nút trung tâm.`,
  chatHeading: 'Trò chuyện với cơ sở tri thức',
  chatHtml: `Toàn bộ cơ sở tri thức cũng được xuất bản dưới dạng các tệp máy đọc được, nên bạn có thể trỏ một chatbot hoặc tác nhân AI vào đó và nhận được câu trả lời có trích dẫn các trang. <a href="/aied/ai">Các prompt có ở đây</a>. Các trang mới đi vào <a href="/aied/journal">nhật ký</a>, nơi có <a href="/aied/rss.xml">nguồn cấp RSS</a>. Để đọc ngoại tuyến, hãy tải <a href="/aied/aied.epub">EPUB</a> hoặc <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Điểm khởi đầu được đề xuất theo từng nhóm đối tượng',
  startingIntro: 'Hãy bắt đầu với nhóm phù hợp với vai trò của bạn.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Các khái niệm cốt lõi',
      html: `<a href="/aied/concepts/ai-literacy/">Trình độ AI</a>, <a href="/aied/concepts/misconceptions/">những hiểu lầm về AI</a>, <a href="/aied/concepts/agentic-ai/">AI tác tử</a>, <a href="/aied/concepts/cognitive-offloading/">giảm tải nhận thức</a>, và <a href="/aied/concepts/interpreting-and-applying-aied-research/">cách diễn giải và vận dụng nghiên cứu này</a>, kể cả tại sao một nghiên cứu đơn lẻ hiếm khi giải quyết dứt điểm một câu hỏi.`,
    },
    {
      id: 'instructors',
      heading: 'Giảng viên',
      html: `<a href="/aied/concepts/teacher-role/">Vai trò giảng dạy đang thay đổi</a>, <a href="/aied/concepts/learning-design/">thiết kế học tập</a>, <a href="/aied/concepts/assessment/">đánh giá</a>, <a href="/aied/concepts/feedback/">phản hồi</a>, <a href="/aied/concepts/academic-integrity/">liêm chính học thuật</a>, <a href="/aied/concepts/framing-ai-use-for-students/">cách định hướng việc dùng AI</a> và <a href="/aied/concepts/reducing-ai-misuse/">giảm thiểu lạm dụng</a>. Về công cụ và ví dụ theo từng môn học, hãy xem <a href="/aied/concepts/discipline-specific-aied/">AI trong lĩnh vực của bạn</a>.`,
    },
    {
      id: 'developers',
      heading: 'Nhà phát triển',
      html: `<a href="/aied/concepts/educational-technology-developers/">Xây dựng cho giáo dục</a>, <a href="/aied/concepts/ai-technologies/">các công nghệ nền tảng</a>, <a href="/aied/concepts/intelligent-tutoring/">gia sư thông minh</a>, <a href="/aied/concepts/multimodal/">AI đa phương thức</a>, <a href="/aied/concepts/student-modeling/">mô hình hóa người học</a>, và <a href="/aied/concepts/llm-training-and-fine-tuning/">huấn luyện và điều chỉnh một mô hình cho việc dạy học</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Nhà quản lý',
      html: `<a href="/aied/concepts/administrator/">Vai trò của nhà quản lý</a>, <a href="/aied/concepts/governance/">quản trị AI</a>, <a href="/aied/concepts/educational-policy-ai/">chính sách cấp tổ chức</a>, <a href="/aied/concepts/legal-issues-and-risks/">vấn đề pháp lý và rủi ro</a>, và <a href="/aied/concepts/change-management/">quản lý thay đổi</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Nhà nghiên cứu',
      html: `<a href="/aied/concepts/research-methods-aied/">Phương pháp nghiên cứu trong AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">các lý thuyết và khung lý thuyết</a>, <a href="/aied/concepts/ai-ed-evaluation/">đánh giá một can thiệp AI trong giáo dục</a>, <a href="/aied/concepts/educational-measurement/">đo lường trong giáo dục</a>, <a href="/aied/concepts/learning-gains/">đo lường kết quả học tập</a>, và <a href="/aied/concepts/limitations-in-aied-research/">các giới hạn xuyên suốt của cơ sở bằng chứng này</a>.`,
    },
  ],
  statsHeading: 'Cơ sở tri thức có những gì',
  statsIntro:
    'Mỗi trang đều có ghi ngày tháng, và các con số bên dưới phản ánh những gì đang được công bố ngay lúc này; ngày "cập nhật lần cuối" ở cuối danh sách là lần chỉnh sửa gần nhất.',
  conceptMap: {
    title: 'Bản đồ khái niệm về AI trong giáo dục',
    desc:
      'Bản đồ xuyên tâm với AI trong giáo dục ở trung tâm, kết nối với mười hai khái niệm cấp cao nhất: ' +
      'Mô hình hóa, Học tập, Công bằng, Phản hồi, Trình độ AI, Đánh giá, ' +
      'Lĩnh vực, Sư phạm, Đạo đức, Công nghệ, Đánh giá và Nghiên cứu.',
    navLabel: 'Các khái niệm về AI trong giáo dục',
    center: 'AI trong giáo dục',
    nodes: {
      'student-modeling': 'Mô hình hóa',
      'learning-theories': 'Học tập',
      'equity-in-ai-education': 'Công bằng',
      feedback: 'Phản hồi',
      'ai-literacy': 'Trình độ AI',
      assessment: 'Đánh giá',
      'discipline-specific-aied': 'Lĩnh vực',
      pedagogy: 'Sư phạm',
      ethics: 'Đạo đức',
      'ai-technologies': 'Công nghệ',
      'ai-ed-evaluation': 'Đánh giá',
      'research-methods-aied': 'Nghiên cứu',
    },
  },
  toc: [
    { text: 'Điều hướng website', slug: 'navigating-the-site', depth: 2 },
    { text: 'Trò chuyện với cơ sở tri thức', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Điểm khởi đầu được đề xuất theo từng nhóm đối tượng', slug: 'starting-points', depth: 2 },
    { text: 'Các khái niệm cốt lõi', slug: 'essential-concepts', depth: 3 },
    { text: 'Giảng viên', slug: 'instructors', depth: 3 },
    { text: 'Nhà phát triển', slug: 'developers', depth: 3 },
    { text: 'Nhà quản lý', slug: 'administrators', depth: 3 },
    { text: 'Nhà nghiên cứu', slug: 'researchers', depth: 3 },
    { text: 'Cơ sở tri thức có những gì', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default vi;
