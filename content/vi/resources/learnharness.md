---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "Ứng dụng máy tính để bàn miễn phí, mã nguồn mở (AGPL-3.0): tác tử AI đo mức hiểu hiện có, lập bản đồ phụ thuộc tới mục tiêu, dạy từng bước lập luận và thích ứng luyện tập, với đồ thị tri thức bền vững."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**LearnHarness** là một ứng dụng máy tính để bàn cho việc học có [[agentic-ai|tác tử hỗ trợ]], tổ chức bài học quanh [[prior-knowledge|điều người học đã hiểu]] thay vì quanh một danh sách chủ đề. Dự án mô tả bốn bước: **đo**, dò những ý niệm mà mục tiêu phụ thuộc vào để tìm nơi sự hiểu biết dừng lại; **lập kế hoạch**, suy ra một bản đồ phụ thuộc tới mục tiêu và hiển thị nó như bản đồ bài học; **dạy**, đi từng bước lập luận một theo nhịp dự đoán–giải thích–kiểm tra để những chỗ nhầm lẫn được sửa trước khi bất cứ điều gì được xây lên trên chúng; và **luyện tập**, một dòng bài tập nhắm vào chính những khó khăn của người học.

## Bạn có thể làm gì với nó

Đầu vào đặc trưng là trường tư duy: người học viết hoặc đọc chính lập luận và sự không chắc chắn của mình thay vì chỉ trả lời, điều mà dự án coi là cách tác tử hình dung lập luận chứ không phải một bản ghi đúng/sai. Nó cũng có thể nghiên cứu câu hỏi ở chế độ nền, tạo lời giải thích trực quan và dựng các minh họa tương tác.

Thứ tích lũy lại là một [[knowledge-graph|đồ thị tri thức]] gồm các mệnh đề và chuỗi lập luận, được nối ngược về phiên nguồn của chúng và được các tác tử dạy và luyện tập sau đó đọc như ngữ cảnh; ghi chú có thể được nhập vào. Dự án nêu rằng đồ thị lưu các ý niệm và kết nối, không lưu xếp hạng năng lực.

## Dành cho ai

Người học độc lập đang làm việc với tài liệu khó, và giảng viên hay nhà phát triển muốn thấy một [[intelligent-tutoring|gia sư AI]] bản địa tác tử trông ra sao khi prompt và trạng thái của nó có thể kiểm tra được. Nó viết bằng TypeScript, chạy từ mã nguồn, và các bài kiểm thử của nó được ghi là tất định, không gọi mô hình.

## Ghi chú và lưu ý

Miễn phí bao gồm phần mềm, không bao gồm suy luận: người học tự mang khóa nhà cung cấp, một gói đăng ký, một CLI Claude Code cục bộ hoặc bất kỳ điểm cuối tương thích OpenAI nào, và trả tiền cho nhà cung cấp mà không bị cộng thêm; một đồng hồ trực tiếp chỉ ước tính các chi phí API đã biết. Bản ghi, cuộc trò chuyện và khóa nằm trên máy dưới dạng tệp thuần, nhưng dự án cảnh báo rằng lưu trữ cục bộ không có nghĩa là xử lý ngoại tuyến, vì các yêu cầu mô hình, việc đọc chính tùy chọn và nghiên cứu web đều chạm tới các dịch vụ bên ngoài. Bộ cài Windows x64 không được ký, nên Windows sẽ cảnh báo. Không có nghiên cứu hiệu quả nào được báo cáo, nên lập luận dựa trên lý lẽ được nêu chứ không phải kết quả đo lường; kho mã có khoảng 4,800 sao khi kiểm tra ngày 2 tháng 11 năm 2026.

## Khái niệm liên quan

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
