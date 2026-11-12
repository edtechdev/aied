---
title: "Amplify GenAI"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "Nền tảng AI tạo sinh doanh nghiệp theo giấy phép MIT của Vanderbilt, triển khai trong tài khoản AWS của chính cơ sở: trợ lý tùy chỉnh trên tài liệu nội bộ, câu trả lời tăng cường truy xuất, chia sẻ trong toàn tổ chức và hạch toán chi phí đến từng tin nhắn."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
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

Amplify GenAI là cược ngược lại với giấy phép trợ lý thương mại cho toàn trường: cơ sở tự vận hành nền tảng, bên trong tài khoản Amazon Web Services của chính mình, và trả tiền cho những gì mình dùng. Vanderbilt xây nó cho cộng đồng của mình, phát hành theo MIT trên ba kho mã, và giờ cung cấp cho các tổ chức khác như một lựa chọn thay thế hợp đồng doanh nghiệp theo ghế — lập luận rằng phần đắt tiền phải là mô hình, không phải số ghế.

## Bạn có thể làm gì với nó

Người dùng xây trợ lý tùy chỉnh bằng cách tải tài liệu lên hoặc kết nối nguồn dữ liệu, và trợ lý trả lời bằng [[rag|tạo sinh tăng cường truy xuất]] trên tài liệu đó thay vì chỉ dựa vào huấn luyện chung. Trợ lý có thể được chia sẻ trong toàn tổ chức, nối vào một cuộc trò chuyện, và được gán mẫu prompt; nền tảng cũng tạo tệp PowerPoint và Word, sơ đồ và hình ảnh trực quan. Quản trị viên nhận được những gì một dịch vụ dùng chung cần: hạch toán chi phí đến từng tin nhắn, giới hạn theo người dùng, thư mục và không gian làm việc, và SSO, tất cả trong một triển khai do cơ sở kiểm soát.

Quyết định thiết kế quan trọng nhất với một [[higher-ed|trường đại học]] là mô hình hạch toán. Vanderbilt báo cáo rằng với 1.300 người dùng thí điểm, chi phí mỗi người dùng khoảng \$3 mỗi tháng gồm cả AWS, và một nửa số người dùng đó tiêu dưới \$1 mỗi tháng tiền token — những con số trường đại học trình bày như một nghiên cứu tình huống, không phải chuẩn đối sánh đã kiểm toán. Tính phí theo mức sử dụng thưởng cho một khuôn viên nơi thiểu số người dùng làm phần lớn công việc, đúng hình thái thường thấy của việc tiếp nhận AI, và nó khiến câu hỏi của văn phòng tài chính ("chi phí này là bao nhiêu mỗi sinh viên?") có thể trả lời từ log thay vì từ hợp đồng.

## Dành cho ai

Các văn phòng CNTT trung tâm và CIO đã chạy khối lượng công việc trên AWS và muốn một lựa chọn thay thế được cộng đồng hỗ trợ cho trợ lý doanh nghiệp thương mại; giảng viên cần trợ lý dựa trên tài liệu học phần mà không gửi tài liệu đó cho sản phẩm tiêu dùng của nhà cung cấp; và các cơ sở muốn một nơi duy nhất để thấy mọi người đang làm gì với mô hình. Vì nó triển khai vào tài khoản của chính cơ sở, câu hỏi về nơi lưu trú dữ liệu được trả lời bằng cách triển khai chứ không bằng lời hứa của nhà cung cấp.

## Ghi chú và lưu ý

Miễn phí giấy phép, không miễn phí vận hành: cơ sở trả tiền cho AWS và các nhà cung cấp mô hình. Lựa chọn mô hình đi qua Amazon Bedrock (Anthropic, Mistral) hoặc OpenAI và Microsoft Azure, và việc tự chạy mô hình cục bộ chưa được triển khai. Dự án nói rõ rằng họ không thể hỗ trợ triển khai riêng lẻ và giới thiệu tổ chức đến các đối tác thương mại — nên chi phí thực tế bao gồm nhân sự hoặc nhà thầu. Đây là triển khai ba kho mã (giao diện, máy chủ, hạ tầng) với hàng chục sao chứ không phải hàng nghìn, và so sánh chi phí ở trên là kinh nghiệm của chính Vanderbilt chứ không phải một nghiên cứu có đối chứng. Các cơ sở muốn giữ suy luận trên phần cứng mình sở hữu nên xem [MindRouter](/aied/resources/mindrouter/) và đọc hai bài cùng nhau: Amplify là lớp ứng dụng trên mô hình của nhà cung cấp, MindRouter là cổng trên GPU của chính bạn.

## Khái niệm liên quan

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
