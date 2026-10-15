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
  introHtml: `Chào mừng bạn đến với <strong>Cơ sở tri thức về AI trong giáo dục</strong> — một tài nguyên miễn phí thuộc phạm vi công cộng về <a href="/aied/concepts/ai-education/">trí tuệ nhân tạo trong giáo dục</a>, dành cho những người dạy, học, thiết kế hoặc quản lý lĩnh vực này. Cơ sở tri thức chắt lọc các nghiên cứu truy cập mở gần đây thành những trang ngắn gọn, có cấu trúc mà bạn có thể đọc và vận dụng ngay. Một lưu ý về cách nó được tạo ra: các trang được tạo và cập nhật bởi một tác nhân AI, dưới sự định hướng biên tập của người phát triển website. Mọi khẳng định đều nêu rõ bài báo đứng sau nó, nên nguồn gốc luôn có thể kiểm chứng.`,
  navHeading: 'Điều hướng website',
  navHtml: `Duyệt chỉ mục theo từng mảng ở thanh bên bên trái để xem lĩnh vực này được tổ chức như thế nào, hoặc <a href="/aied/search">tìm kiếm</a> toàn bộ cơ sở tri thức nếu bạn đã có sẵn chủ đề trong đầu. Các trang bài viết chắt lọc một bài báo thành mục đích, phương pháp và kết quả của nó, kèm theo trích dẫn đầy đủ và các liên kết đến công trình liên quan; các trang khái niệm tập hợp những gì nghiên cứu nói về một ý tưởng và liên kết đến các nghiên cứu đứng sau nó. Nếu bạn muốn bắt đầu từ một câu hỏi, <a href="/aied/faq">chỉ mục FAQ</a> tập hợp những câu mà độc giả hỏi đầu tiên, từ chính sách AI của môn học đến việc có nên dùng công cụ phát hiện AI hay không; nếu bạn muốn bắt đầu từ một công cụ, <a href="/aied/resources">trang tài nguyên</a> liệt kê các công cụ, bộ sưu tập và công cụ đo miễn phí mà bạn có thể dùng ngay, mỗi thứ đều nêu rõ ai đã tạo ra nó và chi phí sử dụng. Bản đồ khái niệm bên trên cho thấy điều gì liên hệ với điều gì; <a href="/aied/concepts/ai-education/">AI trong giáo dục</a> là trang bản đồ đứng sau nó, nhóm các khái niệm thành khoảng một chục mảng lớn.`,
  chatHeading: 'Trò chuyện với cơ sở tri thức',
  chatHtml: `Mọi nội dung ở đây cũng được xuất bản dưới dạng các tệp máy đọc được, nên bạn có thể trỏ chatbot hoặc tác nhân AI mà mình ưa thích vào cơ sở tri thức và nhận được câu trả lời có trích dẫn thay vì đoán mò — <a href="/aied/ai">các prompt có ở đây</a>. Các trang mới xuất hiện trong <a href="/aied/journal">nhật ký</a>, trang này có <a href="/aied/rss.xml">nguồn cấp RSS</a> nếu bạn muốn theo dõi. Để đọc ngoại tuyến, hãy tải <a href="/aied/aied.epub">EPUB</a> hoặc <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Điểm khởi đầu được đề xuất theo từng nhóm đối tượng',
  startingIntro: 'Dưới đây là một số khái niệm được đề xuất để bắt đầu trong cơ sở tri thức này.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Các khái niệm cốt lõi',
      html: `<a href="/aied/concepts/ai-literacy/">Trình độ AI</a>, <a href="/aied/concepts/misconceptions/">những hiểu lầm về AI</a>, <a href="/aied/concepts/agentic-ai/">AI tác tử</a>, <a href="/aied/concepts/cognitive-offloading/">giảm tải nhận thức</a>, và <a href="/aied/concepts/interpreting-and-applying-aied-research/">cách diễn giải và vận dụng nghiên cứu này</a>: những kết quả có thể và không thể chứng minh được điều gì, và tại sao một nghiên cứu đơn lẻ hiếm khi giải quyết dứt điểm một câu hỏi.`,
    },
    {
      id: 'instructors',
      heading: 'Giảng viên',
      html: `<a href="/aied/concepts/teacher-role/">Vai trò giảng dạy đang thay đổi</a>, <a href="/aied/concepts/learning-design/">thiết kế học tập</a>, <a href="/aied/concepts/assessment/">đánh giá</a>, <a href="/aied/concepts/feedback/">phản hồi</a>, <a href="/aied/concepts/academic-integrity/">liêm chính học thuật</a>, <a href="/aied/concepts/framing-ai-use-for-students/">cách định hướng việc dùng AI</a> và <a href="/aied/concepts/reducing-ai-misuse/">giảm thiểu lạm dụng</a>. Về công cụ, bằng chứng và ví dụ trong chính lĩnh vực của bạn, hãy xem <a href="/aied/concepts/discipline-specific-aied/">AI trong lĩnh vực của bạn</a>.`,
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
    'Mỗi trang ở đây đều có ghi ngày tháng, và cơ sở tri thức lớn lên khi có các nghiên cứu truy cập mở mới được công bố và thẩm định. Các con số bên dưới được đọc từ nội dung hiện tại; ngày tháng là lần cập nhật trang gần nhất.',
  conceptMap: {
    title: 'Bản đồ khái niệm về AI trong giáo dục',
    desc:
      'Bản đồ xuyên tâm với AI trong giáo dục ở trung tâm, kết nối với mười hai khái niệm cấp cao nhất: ' +
      'Mô hình hóa, Học tập, Công bằng, Phản hồi, Trình độ AI, Đánh giá, ' +
      'Lĩnh vực, Sư phạm, Đạo đức, Công nghệ, Đánh giá và Nghiên cứu. Chọn một nút bất kỳ để mở trang của nó.',
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
