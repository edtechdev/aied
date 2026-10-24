/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Vietnamese visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
import type { NewsStrings } from './news.en';

const vi: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Bản tin hằng tuần của cơ sở tri thức về AI trong giáo dục: nghiên cứu mới có ý nghĩa gì với giảng viên, nhà phát triển, nhà nghiên cứu và nhà quản lý.',
  introHtml:
    'Bản tóm tắt hằng tuần từ <a href="/aied/">cơ sở tri thức về AI trong giáo dục</a>, về ý nghĩa của nghiên cứu mới công bố trong tuần đối với giảng viên, nhà phát triển, nhà nghiên cứu và nhà quản lý. Mỗi số đều liên kết tới bài báo đứng sau từng luận điểm, và phần việc nội bộ ở cuối theo dõi những gì đã thay đổi trên chính trang web.',
  feedsHtml:
    'Hai nguồn cấp RSS mang nội dung này. <a href="/aied/news/rss.xml">Nguồn cấp của bản tin</a> chỉ chứa các số, mỗi tuần một mục. <a href="/aied/rss.xml">Nguồn cấp của cơ sở tri thức</a> chứa mọi tóm tắt bài viết mới ngay khi được thêm vào, tức cùng nguồn tư liệu mà các số được rút ra, với tần suất cao hơn nhiều.',
  emailHtml:
    'Để nhận từng số qua email, hãy dán nguồn cấp của bản tin vào <a href="https://blogtrottr.com/">Blogtrottr</a>, một dịch vụ miễn phí của bên thứ ba gửi nguồn cấp đến hộp thư của bạn theo lịch bạn chọn. Thư của dịch vụ này có quảng cáo.',
  empty: 'Chưa có số nào được xuất bản.',
  allIssues: 'Tất cả các số',
  otherIssuesAria: 'Các số khác',
  issueLabel: 'Số {issue}',
};

export default vi;
