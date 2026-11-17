---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Máy chủ MCP mã nguồn mở cho phép Claude, Cursor, Codex và các tác tử khác đọc và hành động bên trong Canvas LMS — công cụ cho sinh viên, giảng viên và nhà thiết kế học tập, với các hành động ghi được kiểm soát và tùy chọn ẩn danh hóa dữ liệu sinh viên."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**Canvas MCP** là một máy chủ Model Context Protocol mã nguồn mở của Vishal Sachdev, kết nối một ứng dụng khách AI với một phiên bản Canvas LMS: tác tử có thể liệt kê việc sắp tới của một sinh viên, đọc bài tập và bài nộp của một học phần, nhắn tin cho cả lớp, hoặc kiểm toán một học phần về khả năng tiếp cận, tất cả qua các công cụ mà máy chủ mở ra thay vì cào màn hình tùy tiện.

## Bạn có thể làm gì với nó

Máy chủ cung cấp ba nhóm công cụ. Công cụ cho sinh viên trả lời "tuần này có gì đến hạn", "tôi đã nộp đủ chưa", "tôi còn bao nhiêu lượt làm bài kiểm tra" dựa trên chính các điểm cuối `self` của Canvas. Công cụ cho giảng viên liệt kê và tạo bài tập, đọc bài nộp, chấm điểm hàng loạt, gửi tin nhắn và lấy phân tích bài tập. Công cụ cho nhà thiết kế học tập bao quát kiểm tra chất lượng học phần và quét khả năng tiếp cận theo WCAG. Tổng cộng có tới 128 công cụ, dù hồ sơ mặc định đăng ký ít hơn và các công cụ được bật theo tính năng làm tăng con số. Trên nền các công cụ đó, tám kỹ năng tác tử đóng gói những công thức nhiều bước — một kế hoạch tuần, một lần kiểm tra sức khỏe học phần buổi sáng, một cây quyết định chấm điểm hàng loạt, một quy trình đánh giá đồng đẳng, một lần kiểm toán học phần trước học kỳ — cài được vào hơn 40 tác tử qua `skills.sh`.

## Dành cho ai

Giảng viên muốn một tác tử xử lý việc đọc và nhắn tin thường ngày quanh một học phần, và [[institutional-ai-infrastructure|các nhóm của cơ sở]] đang đánh giá xem một tác tử nối với LMS thực sự chạm tới được gì. Nhà thiết kế học tập nhận được ở đây thứ gần nhất với một lần rà soát học phần tự động. Dự án là một ví dụ đã làm xong về [[agentic-ai|công cụ tác tử]] ở mức LMS của một cơ sở chứ không phải một chatbot chung.

## Ghi chú và lưu ý

Việc thiết lập diễn ra cục bộ: Python 3.11 trở lên, một token và URL API của Canvas, và một ứng dụng khách MCP, cùng một tiện ích mở rộng nhấp đúp được cho Claude Desktop. Máy chủ công khai có lưu trữ đã bị rút, nên một triển khai dùng chung nghĩa là tự lưu trữ sau lớp xác thực của chính cơ sở. Các công cụ ghi được kiểm soát — máy chủ HTTP chỉ đọc trừ khi công cụ ghi được cho phép rõ ràng, việc xóa cần token xác nhận, và việc thực thi mã chạy trong một hộp cát đóng lại khi gặp lỗi. Kiểm soát quyền riêng tư là tùy chọn bật: ẩn danh hóa câu trả lời, che email và lọc PII phải được bật, và README cẩn trọng rằng những điều này có thể hỗ trợ nghĩa vụ FERPA mà không thiết lập sự tuân thủ, vốn phụ thuộc vào triển khai và nhà cung cấp AI. Máy chủ không tích hợp đo lường từ xa, nhưng Canvas và ứng dụng khách được chọn giữ log riêng của chúng. Dự án theo giấy phép MIT, đang được phát triển tích cực, và các hướng dẫn của chính nó là nguồn có thẩm quyền về tên công cụ và cấu hình hiện hành.

## Khái niệm liên quan

- [[agentic-ai]]
- [[institutional-ai-infrastructure]]
