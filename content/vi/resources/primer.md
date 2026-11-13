---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Một hệ thống tác giả mã nguồn mở từ Wharton Generative AI Labs, biến một cuộc phỏng vấn có cấu trúc với nhà giáo dục thành mô phỏng học tập thích ứng, chạy được, với các tác nhân mentor, luyện tập và phản hồi riêng."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Primer là một [[open-source|hệ thống mã nguồn mở]] để xây dựng một [[simulation|mô phỏng]] giáo dục bằng cách mô tả bài học cho AI thay vì lập trình nó. Phán đoán của nhà giáo dục quyết định mô phỏng dạy điều gì: một cuộc phỏng vấn khơi ra những gì giảng viên biết về bài học và sinh viên, một tài liệu thiết kế làm cho kiến thức đó có thể xem xét được, và không có gì được xây dựng cho đến khi nhà giáo dục phê duyệt.

## Bạn có thể làm gì với nó

Cuộc phỏng vấn hỏi từng câu một: bài học, trình độ và kiến thức nền của sinh viên, những hiểu lầm phổ biến, cách tiếp cận của giảng viên, và cách đánh giá thành công. Nhà giáo dục có thể nói hoặc gõ, và có thể tải lên đề cương, giáo án hoặc rubric. Kết quả trả về là một tài liệu thiết kế bao gồm mục tiêu, dòng chảy kịch bản, nhân vật, mức đặt cược và logic thích ứng, mà nhà giáo dục chỉnh sửa và phê duyệt như với một giáo án. Sau đó năm tác nhân xây dựng nó: Intake, Design, Casting Director, Image Generation và Experience Builder, agent cuối lắp ráp kết quả cho một sinh viên hoặc cả lớp.

Khi chạy, ba tác nhân đối diện với sinh viên. Một mentor kích hoạt kiến thức nền và làm lộ ra những hiểu lầm. Một tác nhân luyện tập đóng vai đối tác nhập vai hoặc một học viên trong teachback, nơi sinh viên giải thích một khái niệm và chỉnh sửa lời giải thích khi bị chất vấn. Một tác nhân phản hồi làm việc từ bản ghi, thảo luận những khoảnh khắc cụ thể và cách việc học tiếp tục vượt ra ngoài kịch bản. Mỗi tác nhân có một nhân vật trong thế giới và một lớp sư phạm theo dõi mục tiêu và thu thập bằng chứng, và nhà giáo dục nhận báo cáo cá nhân và tổng hợp.

## Dành cho ai

Giảng viên, nhà thiết kế giảng dạy và chuyên gia phát triển đội ngũ có thể mô tả một bài học chi tiết mà không muốn viết mã cho nó. Các nhà nghiên cứu về việc tác giả có nhà giáo dục trong vòng lặp hoặc [[agentic-ai|quy trình nhiều tác nhân]] có một hệ thống đang chạy để kiểm tra, và lập trình viên có thể mở rộng nó, vì prompt, mẫu, danh sách kiểm tra, mẫu điều phối và mã TypeScript đều là mã nguồn mở.

## Ghi chú và lưu ý

Các tác giả gọi Primer là một nguyên mẫu thử nghiệm chứ không phải sản phẩm lớp học đã được thẩm định. Nó chưa được đánh giá như một can thiệp học tập trong lớp học, và chưa ai xem xét nó theo FERPA, COPPA, luật quyền riêng tư sinh viên của tiểu bang hay chính sách học khu, nên cơ sở nào dùng nó với sinh viên phải tự chịu trách nhiệm về việc xem xét đó. Phần mềm theo giấy phép MIT và miễn phí, nhưng chạy một mô phỏng cần quyền truy cập mô hình, thứ tốn tiền. Vì nó không phụ thuộc mô hình và chạy trên mô hình cục bộ hoặc trọng số mở, nó có thể được triển khai ở nơi quy định quyền riêng tư chặt hơn. Một sách trắng về kiến trúc và prompt được liên kết từ trang dự án. Kho mã có 98 sao và 16 bản fork khi kiểm tra vào tháng 11 năm 2026.

## Khái niệm liên quan

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
