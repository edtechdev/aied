---
title: "MindRouter"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "Cổng suy luận Apache-2.0 của Đại học Idaho, đặt cụm GPU vLLM và Ollama của khuôn viên sau một API tương thích OpenAI, bổ sung lập lịch chia sẻ công bằng, hạn ngạch token theo người dùng, SSO, ghi log kiểm toán và giám sát GPU cùng năng lượng trực tiếp."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
translation_of: resources/mindrouter
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Phần lớn cuộc thảo luận AI trong khuôn viên bắt đầu bằng việc mua mô hình nào và dừng trước câu hỏi khó hơn: nó chạy ở đâu, ai đo đếm nó, và ai xem được log. MindRouter là câu trả lời cho câu hỏi thứ hai đó. Đây là một cổng tự lưu trữ đứng trước một cụm không đồng nhất các máy chủ [[llm|LLM]] — các nút vLLM và Ollama trên GPU do cơ sở sở hữu — và mở ra một API duy nhất nói được các phương ngữ OpenAI, Anthropic và Ollama, dịch giữa chúng để mã khách hiện có tiếp tục chạy.

## Bạn có thể làm gì với nó

Trỏ công cụ vào cổng thay vì vào điểm cuối của nhà cung cấp. Phía sau, MindRouter xử lý những phần một triển khai dùng chung cần: lập lịch chia sẻ công bằng với round robin thâm hụt có trọng số, hạn ngạch token và yêu cầu theo người dùng, truy cập theo vai trò với SSO tùy chọn qua Azure AD/Entra, Google, bất kỳ nhà cung cấp OIDC nào hoặc SAML 2.0, và ghi log kiểm toán đầy đủ cho prompt, câu trả lời và tạo tác. Một tác nhân sidecar GPU báo cáo mức sử dụng, bộ nhớ, nhiệt độ và công suất theo từng nút, để quản trị viên thấy chi phí năng lượng trên mỗi yêu cầu và rút một backend một cách êm ái khi đến kỳ bảo trì. Nó bao quát nhiều hơn trò chuyện — embedding, thị giác, tạo ảnh và video, chuyển văn bản thành giọng nói và giọng nói thành văn bản, OCR tài liệu — và cung cấp máy chủ MCP cùng kỹ năng tác tử cho trợ lý lập trình.

Lý do một trường đại học quan tâm là điều chính dự án nêu tên: [[institutional-ai-infrastructure|chủ quyền AI của cơ sở]]. Prompt và tài liệu ở lại trên hạ tầng cơ sở vận hành thay vì đi qua đám mây của bên thứ ba, điều dễ bảo vệ trước hội đồng giảng viên hay văn phòng [[privacy|quyền riêng tư]] hơn một thỏa thuận xử lý dữ liệu với nhà cung cấp. Lập luận đó có đứng vững hay không tùy vào việc cơ sở có GPU, điện và nhân sự hay không — cổng làm cho việc lưu trữ cục bộ dễ quản lý hơn, không làm nó rẻ đi.

## Dành cho ai

Các nhóm điện toán nghiên cứu và CNTT trung tâm đã có năng lực GPU, các trung tâm dạy và học muốn một nơi duy nhất để đo mức dùng của giảng viên và sinh viên, và quản trị viên đang cân nhắc nền tảng doanh nghiệp được lưu trữ so với tự vận hành suy luận. Đây là triển khai Docker Compose với cấu hình SSO được tài liệu hóa và thương hiệu tùy chỉnh, được duy trì tại Đại học Idaho, nơi tác giả trình bày nó tại PEARC '26; tính đến tháng 11 năm 2026 dự án có 22 sao và 3 bản fork.

## Ghi chú và lưu ý

Miễn phí và mã nguồn mở theo Apache-2.0, nhưng chi phí dịch chuyển chứ không biến mất: phần cứng, điện năng và thời gian nhân sự để vận hành một cụm. Theo chuẩn hạ tầng, phần mềm này còn non — ba người đóng góp, một cơ sở khởi nguồn duy nhất, và các bản phát hành được đánh số tới hàng trăm thẻ — nên một trường đại học nên thí điểm nó bên cạnh một dịch vụ hiện có thay vì coi nó là con đường duy nhất tới một mô hình. Đánh giá công bố về hành vi lập lịch và hạn ngạch dưới tải thực tế của khuôn viên không có trong kho mã; bài báo PEARC là nơi để tìm lời kể của chính các tác giả.

## Khái niệm liên quan

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
