---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Định dạng mở, văn bản thuần cho bài học eLearning dựa trên khối, kèm một agent skill viết bài học, bài đánh giá và cả gói học phần theo định dạng này."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**LESSON.md** là một định dạng mở cho nội dung eLearning dựa trên khối: một tệp Markdown với frontmatter YAML và các chỉ thị `:::` cho văn bản, hình ảnh và bài kiểm tra kiến thức, đọc được bởi con người và phân tích được bởi bất kỳ công cụ nào. Nó tồn tại vì nội dung học phần thường bị khóa trong một công cụ soạn thảo, và vì [[llm|mô hình ngôn ngữ lớn]] chỉ có thể giúp với những bài học mà chúng thực sự đọc được.

## Bạn có thể làm gì với nó
Viết một bài học trong bất kỳ trình soạn thảo văn bản nào và nhập nó vào bất kỳ công cụ nào hỗ trợ định dạng, không cần sao chép–dán và định dạng lại. Các phần tương tác — bài kiểm tra kiến thức trắc nghiệm có giới hạn số lần thử và phản hồi ở cấp từng đáp án — được diễn đạt bằng các thuộc tính đơn giản thay vì giao diện đồ họa. Một tệp `ASSESSMENT.md` đồng hành ở gốc gói trở thành [[assessment|bài đánh giá]] có tính điểm của học phần. Dự án cũng cung cấp một skill `lesson-md` dạy định dạng này cho Claude, Codex hoặc một [[agentic-ai|tác tử]] khác, nên việc mô tả một học phần bằng ngôn ngữ thường trả về bài học, bài đánh giá và cả một gói đầy đủ.

## Dành cho ai
Nhà thiết kế giảng dạy và người tạo học phần muốn nội dung của mình sống sót qua một lần đổi công cụ, các nhà cung cấp eLearning muốn một định dạng nhập và xuất mà người dùng của họ đã hiểu, và bất kỳ ai xây việc soạn thảo có AI hỗ trợ trên một định dạng đọc được. Những người đóng góp gồm Dan Bashaw của LXD Integral, và định dạng có một changelog công khai tới v1.8.

## Khái niệm liên quan

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
