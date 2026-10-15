/**
 * Copy for the 404 page (`/aied/404.html`). The page is otherwise the search
 * page, so the only strings it adds are the heading and the two ways out.
 */
export interface NotFoundStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** First paragraph. May contain inline HTML and links. */
  messageHtml: string;
  /** Second paragraph, pointing at the search form below. */
  searchHtml: string;
}

const vi: NotFoundStrings = {
  title: 'Không tìm thấy trang',
  h1: 'Không tìm thấy trang',
  messageHtml:
    'Chúng tôi không tìm thấy trang bạn yêu cầu. Liên kết đã đưa bạn đến đây có thể đã cũ, hoặc trang có thể đã được đổi tên. Bạn có thể bắt đầu lại từ <a href="/aied/">trang chủ</a>.',
  searchHtml:
    'Hoặc hãy tìm kiếm toàn bộ cơ sở tri thức bên dưới. Mọi bài viết, khái niệm, FAQ và tài nguyên đều được lập chỉ mục, và các bộ lọc giúp thu hẹp tìm kiếm theo lĩnh vực, cấp độ, đối tượng hoặc phương pháp nghiên cứu.',
};

export default vi;
