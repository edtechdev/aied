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
}

const vi: FaqStrings = {
  title: 'FAQ',
  h1: 'Câu hỏi thường gặp',
  introHtml:
    'Mục này trả lời những câu hỏi phổ biến về <strong>AI trong giáo dục</strong> — những gì nghiên cứu cho thấy về tác động của AI đối với việc dạy và học, và cách các nhà giáo dục, giảng viên và nhà thiết kế giảng dạy có thể đưa những bằng chứng đó vào thực tiễn. Mỗi câu trả lời chắt lọc các kết quả từ những nghiên cứu được tóm tắt trong cơ sở tri thức này, nối câu hỏi với các khái niệm và bài viết liên quan để đọc sâu hơn.',
  assistantHtml:
    'Có câu hỏi chưa được trả lời ở đây? Hãy hỏi trợ lý AI của riêng bạn bằng trang <a href="/aied/ai">Sử dụng cơ sở tri thức này với trợ lý AI của bạn</a>, trang này hướng dẫn cách trỏ một tác nhân vào toàn bộ danh mục để có câu trả lời dựa trên nguồn và có trích dẫn.',
  empty: 'Chưa có FAQ.',
};

export default vi;
