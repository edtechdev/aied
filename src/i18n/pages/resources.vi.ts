/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const vi: ResourcesStrings = {
  title: 'Tài nguyên',
  h1: 'Công cụ và tài nguyên miễn phí',
  introHtml: [
    'Một tuyển tập <strong>công cụ, bộ sưu tập, công cụ đo và định dạng miễn phí</strong> cho AI trong giáo dục — những thứ bạn có thể dùng ngay hôm nay chứ không phải các nghiên cứu phải đọc trước. Chúng phần lớn do các nhà giáo dục, nhà thiết kế giảng dạy, thủ thư và nhà nghiên cứu tạo ra, và nhiều thứ được xây dựng với sự hỗ trợ của AI bởi những người không phải là lập trình viên chuyên nghiệp.',
    'Không phải mọi thứ ở đây đều có tính tương tác. Bên cạnh các công cụ chạy trên trình duyệt và gia sư AI, bạn sẽ tìm thấy các thư viện prompt và "gem" làm sẵn, các bộ sưu tập hoạt động lớp học, các tài liệu tổng quan và chính sách, các công cụ đánh giá, và các định dạng tệp mở. Mỗi mục là một bản tóm tắt ngắn liên kết đến trang cho biết ai đã tạo ra nó, nó thuộc loại gì, mã nguồn có sẵn hay không, chi phí sử dụng là bao nhiêu, và liên kết của nó được kiểm tra lần cuối khi nào.',
    'Mỗi mục đều liên kết đến một trang web bên ngoài mà cơ sở tri thức này không kiểm soát, và các liên kết được kiểm tra lại định kỳ — mỗi trang đều hiển thị ngày liên kết của nó được xác nhận lần cuối. Nếu một công cụ đã chuyển đi, ngừng hoạt động, hoặc xứng đáng có mặt ở đây nhưng còn thiếu, cách nhanh nhất là mở một issue trên repository.',
  ],
  empty: 'Chưa có tài nguyên.',
  groupLabels: {
    software: 'Phần mềm',
    'ai tutor': 'Gia sư AI',
    'agent skill': 'Kỹ năng cho tác nhân',
    'prompt or gem library': 'Thư viện prompt và gem',
    'collection of tools': 'Bộ sưu tập công cụ',
    'collection of activities': 'Bộ sưu tập hoạt động',
    'assessment instrument': 'Công cụ đánh giá',
    'open format or specification': 'Định dạng và đặc tả mở',
    'ebook or guide': 'Sách điện tử và sổ tay',
    'case study collection': 'Bộ sưu tập nghiên cứu tình huống',
    'dataset or benchmark': 'Tập dữ liệu và bộ chuẩn đánh giá',
  },
};

export default vi;
