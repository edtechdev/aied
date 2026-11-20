---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Một ứng dụng web để xây dựng các bài tập AI theo từng bước, trong đó giảng viên thiết lập vai trò của mô hình và các giới hạn đối với việc sử dụng của sinh viên, còn danh tính sinh viên được giữ ngoài ngữ cảnh của mô hình."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Một công cụ xây dựng bài tập tích hợp AI, do Joseph Slade tại Oregon State University phát triển và được AI Education Labs, Inc. vận hành. Tiền đề của nó là: thay vì cấm đoán, giải pháp thay cho một chatbot thả nổi là cấu trúc — giảng viên xác định các bước mà sinh viên đi qua, quyết định vai trò của mô hình ở từng bước, và đặt giới hạn mức độ sinh viên có thể dựa vào nó. Bài tập sau đó được xuất bản dưới dạng liên kết tham gia thay vì phân phát như một tài liệu prompt.

## Bạn có thể làm gì với nó

- **Đặt vai trò của mô hình cho từng bài tập.** Công cụ cung cấp các thiết lập sẵn gồm gia sư, người hỏi kiểu Socrates, người phản hồi và trợ lý nghiên cứu, cùng với prompt tùy chỉnh, để trợ lý hành xử đúng như nhiệm vụ yêu cầu.
- **Đặt cổng kiểm soát giữa các bước.** Một bước có thể yêu cầu sinh viên giải thích lập luận của mình trước khi tiến tiếp, và trợ giúp AI có thể bị giới hạn theo từng bước — giao diện hiển thị số lượt còn lại thay vì quyền truy cập không giới hạn.
- **Chọn không gian làm việc.** Sinh viên viết trên trang tài liệu với nhận xét ở lề, kèm các bố cục chat và sổ tay khi chúng phù hợp với nhiệm vụ hơn một trang tài liệu.
- **Xuất bản và theo dõi lập luận, không chỉ kết quả.** Liên kết tham gia ghi danh sinh viên, tiến độ được lưu trong quá trình làm, và giảng viên có thể đọc bản ghi hội thoại của từng sinh viên rồi xuất ra CSV hoặc Markdown.
- **Soạn thảo với AI, rồi tinh chỉnh.** Việc thiết lập có thể bắt đầu từ vài câu hỏi, một bài tập có sẵn được tải lên hoặc một bài tập trước đó, với trợ lý phía giảng viên điền bản nháp đầu tiên.

Các ví dụ đã xuất bản cho thấy phạm vi dự kiến: một nhiệm vụ vật lý về bằng chứng và lời chứng, một bài tập sinh học chẩn đoán lỗi lập luận trong lời giải thích của một thực tập sinh AI, và một nhiệm vụ tâm lý học kiểm tra xem một bản tin có mô tả đúng thiết kế của một nghiên cứu hay không.

## Dành cho ai

Các giảng viên đại học muốn [[learning-design|thiết kế học tập]] gánh vác chính sách AI — nghĩa là muốn ràng buộc cách mô hình được dùng bên trong một nhiệm vụ hơn là giám sát xem nó có được dùng hay không. Các cổng kiểm soát và thiết lập vai trò là sự thể hiện của [[guardrails|hàng rào bảo vệ]] ngay từ khâu thiết kế, và ứng dụng hướng tới bài tập môn học chứ không phải triển khai chat cấp tổ chức.

## Lưu ý và thận trọng

- **Giai đoạn thử nghiệm.** Điều khoản nêu rằng dịch vụ hiện được cung cấp miễn phí cho các chương trình thử nghiệm, các gói trả phí có thể được giới thiệu kèm thông báo, và các tính năng có thể thay đổi hoặc bị rút bỏ. Không có trang giá công khai; bạn chỉ xem được giá sau khi đăng nhập.
- **Tuyên bố về quyền riêng tư mang tính kiến trúc, và đáng đọc kỹ.** Mỗi sinh viên nhận một mã phiên ngẫu nhiên cho mỗi bài tập, ánh xạ từ tài khoản sinh viên sang phiên được giữ trên máy chủ của Repertoire, còn mô hình chỉ nhận phiên ẩn danh, ngữ cảnh bài tập và phần viết của sinh viên. Điểm cần thận trọng nằm ngay trong chính sách: văn bản sinh viên gõ vào mà nhận dạng được họ vẫn được gửi đi như mọi văn bản khác, và giảng viên môn học có thể đọc các bản ghi hội thoại.
- **Suy luận qua bên thứ ba.** Các câu trả lời được tạo qua Claude API của Anthropic, với API của OpenAI làm dự phòng, theo các điều khoản thương mại mà chính sách cho biết loại trừ việc huấn luyện trên dữ liệu đầu vào và đầu ra của API tính đến tháng 9 năm 2026. Cơ sở giáo dục nên xác nhận điều đó qua thỏa thuận của chính mình thay vì qua một trang web.
- **Đây không phải công cụ chấm điểm.** Cả chính sách lẫn điều khoản đều mô tả các phán đoán của trợ lý, chẳng hạn "đã đạt mục tiêu", như công cụ hỗ trợ giảng viên; điểm số và quyết định học thuật vẫn thuộc về giảng viên và cơ sở giáo dục, còn quyết định về việc [[ai-use-disclosure|công khai việc sử dụng AI]] với sinh viên được để cho giảng viên.
- **Lưu trữ tại Mỹ.** Dữ liệu nằm trong Google Cloud Firestore với hạ tầng Vercel, và chính sách đề cập các nghĩa vụ FERPA ở nơi dịch vụ xử lý hồ sơ giáo dục; người dùng ngoài Hoa Kỳ được thông báo rằng dữ liệu của họ được xử lý tại đó.
