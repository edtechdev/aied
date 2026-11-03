---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Bộ mười một skill Claude Code mã nguồn mở rà soát một học phần dựa trên bằng chứng về thiết kế giảng dạy, gắn mỗi khuyến nghị với bậc bằng chứng của nó."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**idstack** là một bộ sưu tập mã nguồn mở gồm mười một skill cho [[learning-design|thiết kế giảng dạy]] dựa trên bằng chứng, được phân phối như một plugin Claude Code kèm một tiện ích mở rộng bảng bên của Chrome. Thay vì soạn một học phần, các skill rà soát một học phần: chúng phân loại mục tiêu theo thang Bloom đã sửa đổi, kiểm tra sự khớp kiến tạo giữa mục tiêu, hoạt động và đánh giá, gắn cờ các vấn đề tải nhận thức, và rà soát khả năng tiếp cận theo WCAG 2.1 AA và Thiết kế Phổ quát cho Học tập. Mỗi khuyến nghị mang một bậc bằng chứng, từ T1 cho phân tích tổng hợp và thử nghiệm ngẫu nhiên, qua T5 cho ý kiến chuyên gia. Dự án nêu rằng các trích dẫn của nó dựa trên 108 nghiên cứu đã bình duyệt trong mười một lĩnh vực nghiên cứu; con số đó là tuyên bố của chính dự án, và thư mục tài liệu của nó được công bố dưới dạng Markdown để người rà soát có thể kiểm tra.

Học phần đi vào qua một kết nối API Canvas, một tệp IMS Common Cartridge, một gói SCORM, một bản xuất PDF từ công cụ soạn thảo, hoặc tài liệu dán vào. Một bản kê dự án dùng chung ghi nhớ học phần qua các phiên, và một skill đường ống nối các giai đoạn thiết kế trong khi bỏ qua phần đã hoàn thành. Các bản rà soát báo cáo theo tám tiêu chuẩn Quality Matters và khung Cộng đồng Tìm hiểu, tách biệt hiện diện giảng dạy, xã hội và nhận thức, rồi xếp hạng các khuyến nghị theo mức nghiêm trọng.

## Những điều cần biết trước khi áp dụng

Plugin cần Claude Code và một shell bash để cài; PowerShell và cmd không chạy được script thiết lập, và Python 3 được khuyến nghị cho các xu hướng điểm. Dữ liệu học phần nằm trong thư mục dự án trên chính máy của người đọc, và chỉ rời khỏi đó qua một tích hợp do người dùng gọi, chẳng hạn một lệnh gọi API Canvas. Suy luận trực tiếp của tiện ích Chrome cần khóa API Google AI Studio miễn phí của chính người đọc, dù một chế độ mô phỏng minh họa nó mà không cần khóa. Dự án tự gắn nhãn beta ở phiên bản 3.5.1.0 và cảnh báo về những thay đổi phá vỡ giữa các phiên bản phụ, và nó được công bố dưới tài khoản GitHub savvides chứ không phải bởi một tác giả có tên.

## Khái niệm liên quan
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
