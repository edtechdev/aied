---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Trợ lý giảng dạy AI ưu tiên cục bộ, biến chương trình giảng dạy của chính bạn thành bản nháp bài học, tài liệu cho sinh viên và slide, dùng mô hình do bạn chọn."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**Claw-ED** là một trợ lý giảng dạy ưu tiên cục bộ, soạn bài học từ chính tài liệu chương trình giảng dạy của bạn. Giáo viên nhập các nguồn của mình, yêu cầu một bài học, và nhận lại những bản nháp có thể sửa cùng tài liệu dành cho sinh viên và slide, được tạo bằng bất kỳ mô hình nào giáo viên chọn chứ không bằng một nhà cung cấp cố định.

## Bạn có thể làm gì với nó

Quy trình chạy từ nhập, qua soạn nháp, rà soát, tới xuất, và các bản nháp được coi là điểm khởi đầu để giáo viên sửa chứ không phải tài liệu phát tay hoàn chỉnh. Các tác vụ soạn bài được xếp hàng và có thể phục hồi, nên một lần tạo dài bị lỗi có thể tiếp tục thay vì phải làm lại, và các sản phẩm được tạo có thể tải xuống. Nó cũng mở các công cụ của mình cho một [[agentic-ai|tác tử]] qua một máy chủ MCP và có thể kết nối với Google Drive, nên một trường có thể nối nó vào hạ tầng lưu trữ và lịch trình sẵn có.

Dự án cố ý không gắn với một mô hình. Nó ghi lại các mô hình Ollama cục bộ, các tuyến tiết kiệm trên OpenRouter, và các lựa chọn lưu trữ sẵn, đặt cạnh nhau, và hướng dẫn chọn mô hình của nó có ghi ngày, điều này cho thấy rõ các khuyến nghị là điểm khởi đầu dựa trên danh mục chứ không phải đánh giá chất lượng do giáo viên chấm.

## Ghi chú và lưu ý

Phần mềm miễn phí và [[open-source|mã nguồn mở]] theo giấy phép MIT cho mã gốc của nó, dù các thành phần bên thứ ba giữ điều khoản riêng, và chạy nó nghĩa là bạn trả tiền cho suy luận của mô hình nếu dùng một mô hình lưu trữ sẵn. Dự án tự gắn nhãn là bản beta có giáo viên rà soát và nói thẳng trong README rằng việc vượt qua CI của nó không xác lập chất lượng giảng dạy trên các mô hình đang chạy, đó cũng là cách đúng để đọc một bộ kiểm thử xanh trong lĩnh vực này: nó kiểm chứng phần mềm, không kiểm chứng [[pedagogy|sư phạm]]. Dự án do MacxLabs duy trì và nhận các bài học mẫu đã được giáo viên rà soát như đóng góp.

## Khái niệm liên quan
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
