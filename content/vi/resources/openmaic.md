---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Bản mã nguồn mở của MAIC: lớp học đa tác tử biến một chủ đề hay tài liệu thành slide, trắc nghiệm, mô phỏng tương tác và hoạt động dự án, do giáo viên và bạn học AI trình bày."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
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

**OpenMAIC** là bản mã nguồn mở của lớp học đa tác tử MAIC được mô tả trong [[intelligent-tutoring|nghiên cứu MAIC]]: mô tả một chủ đề hoặc đính kèm tài liệu của bạn và nó tạo ra một bài học đầy đủ — slide, trắc nghiệm, mô phỏng HTML tương tác và hoạt động dựa trên dự án — rồi trình bày bài học đó qua những giáo viên AI và bạn học AI biết nói, vẽ trên bảng trắng và tham gia thảo luận. Đây là mã đứng sau một lớp học có thể chạy được chứ không chỉ đọc về nó.

## Bạn có thể làm gì với nó

Tạo bằng một cú nhấp sinh ra một bài học trong vài phút từ một prompt hoặc một tài liệu, âm thanh hay video được tải lên. Lớp đa tác tử bổ sung thảo luận lớp mà người học có thể tham gia hoặc được gọi vào, tranh biện bàn tròn giữa các persona kèm minh họa trên bảng trắng, và hỏi đáp tự do nơi giáo viên trả lời bằng slide hoặc sơ đồ. Các phiên hỗ trợ bộ slide, trắc nghiệm, mô phỏng tương tác và PBL, và xuất ra `.pptx` sửa được hoặc `.html` tương tác. Phiên bản 1.0.0 (tháng 8 năm 2026) thêm một bàn làm việc tác tử: một không gian ưu tiên trò chuyện lập kế hoạch và chỉnh sửa cả khóa học, các phiên bền vững có máy chủ đứng sau mà bạn có thể hủy, tiếp tục hoặc điều hướng, và 24 skill tích hợp bao quát slide, trắc nghiệm, nội dung tương tác, hình ảnh, video và giọng nói. Một gói `SKILL.md` cho phép một bộ khung tác tử dựng lớp học từ một ứng dụng nhắn tin.

## Dành cho ai

Giảng viên và nhóm khóa học muốn học liệu được tạo ra mà vẫn sửa được, nhà thiết kế giảng dạy đang làm nguyên mẫu các hoạt động đa tác tử, và nhà phát triển cần một lớp học tự vận hành được thay vì một sản phẩm lưu trữ sẵn. Các trường có thể triển khai nó trên Vercel hoặc bằng Docker, và dự án có một bản demo lưu trữ sẵn tại open.maic.chat.

## Ghi chú

Cấp phép MIT, với hướng dẫn sử dụng bằng tiếng Anh và tiếng Trung và một cộng đồng hoạt động trên Discord và Feishu. Nó trung lập về mô hình: bạn cung cấp ít nhất một khóa nhà cung cấp LLM, và các thành phần cục bộ tùy chọn (Lemonade cho mô hình cục bộ, FunASR cho nhận dạng giọng nói) cho phép bạn chạy nhiều phần của bộ công cụ ngoại tuyến hơn — nên “miễn phí” mô tả phần mềm, không mô tả hóa đơn suy luận. Bài báo đứng sau nó xuất hiện trên *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), và kho mã có hơn 38,000 sao tính đến tháng 9 năm 2026.

## Khái niệm liên quan

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
