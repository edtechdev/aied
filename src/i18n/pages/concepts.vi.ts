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
  empty: 'Chưa có trang khái niệm nào.',
};

export default vi;
