---
title: "Teacher Hive"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: resource
summary: "Nền tảng lưu trữ miễn phí sử dụng của Tony Vincent, nơi giáo viên xuất bản các ứng dụng web lớp học do AI tạo, chia sẻ chúng bằng link hoặc mã QR, và duyệt hàng trăm ứng dụng do giáo viên khác làm."
url: https://teacherhive.app/
author: "Tony Vincent"
author_url: https://teacherhive.app/about
resource_type: [software, collection of tools]
access: [freemium]
last_verified: "2026-11-10"
foundations: [teacher-ai-competency]
technology: [generative-ai]
audience: [instructors, instructional designers]
level: [k 12, teacher education]
source_updated: "2026-11-10T19:52:00-05:00"
translation_of: resources/teacher-hive
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**Teacher Hive** là một nền tảng lưu trữ và chia sẻ các ứng dụng lớp học do giáo viên tự làm, được xây dựng bởi Tony Vincent. Luận điểm của nó là phần khó của AI trong lớp học không còn là làm cho một mô hình viết ra một ứng dụng nhỏ, mà là tìm một nơi để nó chạy được trên mạng của trường và dễ mở với học sinh. Giáo viên dán hoặc tải lên một tệp HTML duy nhất do ChatGPT, Claude hoặc Gemini tạo ra, và Teacher Hive phục vụ nó tại một đường link công khai ngắn kèm biểu tượng và mã QR. Duyệt, đánh dấu, theo dõi và xuất bản đều miễn phí; một gói Pro trả phí nâng giới hạn lưu trữ và số ứng dụng.

## Bạn có thể làm gì với nó

**Duyệt** các ứng dụng đã xuất bản theo bộ sưu tập — giải lao trí não, ELA, toán, khoa học, khoa học xã hội, công cụ cho giáo viên — rồi **Xuất bản** một ứng dụng bằng cách dán HTML, thêm tên, mô tả, biểu tượng và ghi công AI. Mỗi ứng dụng có một trang thông tin với nút Khởi chạy và hiển thị QR, và mở ra không có thương hiệu hay đăng nhập học sinh. Một lớp **Superpowers** tùy chọn thêm phản hồi đã lưu, gọi AI, email và lưu trữ tệp, tính theo gói. Với một ứng dụng duy nhất không cần thư viện trưng bày, hai lựa chọn thay thế miễn phí hoạt động bằng kéo thả: [Cloudflare Drop](https://www.cloudflare.com/drop/) xuất bản một thư mục, tệp zip hoặc một tệp HTML duy nhất lên một URL workers.dev mà không cần tài khoản, miễn là triển khai được nhận trong vòng 60 phút, và [Netlify Drop](https://app.netlify.com/drop) xuất bản cùng những đầu vào đó lên một link công khai trong gói miễn phí của nó.

## Dành cho ai

Giáo viên K–12 đã dùng [[generative-ai|AI sinh tạo]] để xây một công cụ nhỏ và cần một nơi đáng tin để lưu trữ là đối tượng chính; nền tảng được thiết kế cho [[vibe-coding]] chứ không phải cho nhà phát triển. Nhà thiết kế giảng dạy và giảng viên đào tạo giáo viên có thể dùng các bộ sưu tập làm ví dụ và như một cách ít rủi ro để xây [[teacher-ai-competency|năng lực AI của giáo viên]].

## Ghi chú và lưu ý

Member và Builder miễn phí (Builder: 50 ứng dụng, 50 MB); Pro là \$10 mỗi tháng hoặc \$60 mỗi năm cho 500 ứng dụng. Truy cập theo mô hình freemium.

Quyền riêng tư là tuyên bố mạnh hơn, nhưng nó chuyển trách nhiệm sang giáo viên. Teacher Hive không tạo tài khoản học sinh, không hỏi học sinh thông tin cá nhân, và không chạy script phân tích hay quảng cáo bên trong các ứng dụng đã xuất bản. Vì ứng dụng công khai theo link, các điều khoản đặt giáo viên chịu trách nhiệm bảo đảm ứng dụng của họ không thu thập tên, email, mã số học sinh hay vị trí. Phạm vi tiếp cận (WCAG 2.2 AA) áp dụng cho các trang của chính Teacher Hive, không áp dụng cho ứng dụng do giáo viên làm, vốn chưa được kiểm thử. Không có giấy phép mã nguồn mở nào được nêu, và thời gian hoạt động cùng việc lưu giữ dữ liệu không được bảo đảm.

## Khái niệm liên quan

- [[teacher-ai-competency]]
- [[generative-ai]]
- [[vibe-coding]]
- [[ai-literacy]]
- [[professional-training]]
