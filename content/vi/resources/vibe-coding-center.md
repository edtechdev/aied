---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Cẩm nang thực địa cho nhà giáo dục về việc xây một trang web giáo dục tĩnh với một trợ lý lập trình AI: ba tệp hướng dẫn Markdown về thiết kế, bảo mật và quyền riêng tư của sinh viên, kèm các hướng dẫn dễ đọc và một gói tải xuống được."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**The Vibe-Coding Center** là cẩm nang thực địa miễn phí của Miguel Guhlin dành cho một giáo viên muốn [[vibe-coding|viết bằng vibe coding]] một trang giáo dục tĩnh nhỏ với một trợ lý lập trình AI — một phiếu ra khóa học, một bài kiểm tra, một hồ sơ lớp — mà không gửi kèm một khóa API bị lộ hay dữ liệu sinh viên.

## Bạn có thể làm gì với nó

Ba tệp hướng dẫn mang nội dung chỉ dẫn: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` và `securevcc.md`. Tải chúng vào thư mục gốc của dự án, hoàn thành mẫu tóm tắt dự án, rồi yêu cầu trợ lý đọc và áp dụng cả ba; hướng dẫn nói rõ rằng có mặt không phải là được kích hoạt, nên các tệp phải được nêu tên trong yêu cầu. Các hướng dẫn dễ đọc giải thích từng tệp, gồm một bài đi qua "Ba kiểm tra thiết yếu trước khi bạn chia sẻ": thu thập ít dữ liệu sinh viên hơn, kiểm tra một khóa API bị lộ, và khớp thiết kế của công cụ với nhiệm vụ học tập của nó. Gói đầy đủ bổ sung chính trang web, bộ prompt, phần xem xét khi ra mắt và các script dựng lại, kèm một bản kê SHA-256 cho lượt tải.

Trang [ví dụ EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) đồng hành cho thấy kết quả dưới dạng công cụ tĩnh đang chạy chứ không phải ảnh chụp màn hình: một trình tạo phiếu ra khóa học viết câu hỏi ở một mức SOLO Taxonomy đã chọn, một hồ sơ sinh viên là một tệp HTML duy nhất trên GitHub Pages, và một thư viện tài nguyên phát triển chuyên môn tìm kiếm được, tất cả chạy phía máy khách mà không cần đăng nhập LMS.

## Dành cho ai

Giáo viên và [[learning-design|nhà thiết kế học tập]] ở K-12 và giáo dục đại học, những người có thể mô tả công cụ mình muốn và sẵn sàng kiểm tra điều trợ lý đã tạo ra. Nó cũng phù hợp với một khoa muốn có một danh sách kiểm tra dùng chung trước khi bất kỳ ai xuất bản một công cụ dành cho sinh viên, và với giảng viên dạy [[ai-literacy|năng lực AI]] qua việc xây dựng thay vì qua phê phán.

## Ghi chú và lưu ý

Trung tâm này là hướng dẫn, không phải một sản phẩm tuân thủ: trang không đưa ra tuyên bố tương thích nào cho mục tiêu WCAG 2.2 AA của chính nó, trả lời "không" cho câu hỏi "dùng những tệp này có làm trang của tôi tuân thủ không?", và nói rằng một lần rà soát kỹ thuật không thay thế sự cho phép của nhà trường hay rà soát pháp lý. Kệ bảo mật trỏ tới axe-core, Gitleaks, ZAP và Playwright; đó là tài liệu tham chiếu chứ không phải phần mềm đi kèm, và những công cụ xâm nhập chỉ dành cho một mục tiêu dùng một lần hoặc được cho phép rõ ràng. Việc đọc không cần tài khoản. Dựng lại các trang HTML cần Python và `markdown-it-py`, một phụ thuộc lúc dựng chứ không phải phụ thuộc của người truy cập. Kho mã theo giấy phép MIT, còn hình ảnh của bên thứ ba và các dự án được liên kết giữ điều khoản riêng, ghi trong `CREDITS.md`.

## Khái niệm liên quan

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
