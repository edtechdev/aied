---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Hạ tầng AI mở cho sản phẩm giáo dục: một knowledge graph về chuẩn và chương trình giảng dạy, các evaluator để chấm điểm đầu ra LLM, kỹ năng tác tử độc lập với mô hình cho quy trình giáo viên, và Curriculum Sync để nạp chương trình vào hệ thống quản lý học tập."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**Learning Commons** xuất bản ba công cụ mở để đưa tính năng AI lên nội dung chương trình thật — một **[[knowledge-graph|knowledge graph]]** về chuẩn học thuật, chương trình giảng dạy và nghiên cứu khoa học học tập, một thư viện **Evaluators** để đánh giá văn bản được tạo, và **[[agentic-ai|Agent Skills]]** độc lập với mô hình cho các quy trình giáo viên thường gặp — và vận hành một nền tảng có thêm Curriculum Sync để nạp chương trình vào [[edtech-platform|hệ thống quản lý học tập]].

## Bạn có thể làm gì với nó

**Căn chỉnh nội dung được tạo theo chuẩn.** Knowledge Graph mô hình hóa chuẩn, [[curriculum-design|chương trình giảng dạy]] và nghiên cứu thành thực thể và quan hệ dưới một lược đồ chung. Một sản phẩm có thể tra chuẩn mà một mục cần nhắm tới, đi qua các quan hệ tiên quyết, hoặc neo nội dung của một gia sư vào chương trình mà nó phải dạy, mà không phải tự xây và duy trì đường ống dữ liệu.

**Chấm điểm đầu ra được tạo trước khi sinh viên nhìn thấy.** **Evaluators** đo các thuộc tính của [[llm|đầu ra LLM]] — độ phức tạp văn bản, [[feedback]], mức căn chỉnh với chuẩn và kỹ năng bền vững — và được phát hành dưới dạng SDK Python và TypeScript trên npm và PyPI. Trên thực tế chúng hoạt động như một kiểm tra hồi quy khi prompt hoặc mô hình thay đổi, như một phép so sánh giữa các mô hình ứng viên, hoặc như một bộ lọc trên các mục và giải thích được tạo.

**Đóng gói một quy trình giáo viên.** **Agent Skills** đóng gói hướng dẫn, tài liệu tham chiếu và rào chắn ở định dạng mở, độc lập mô hình: kiểm tra hiểu bài, phân hóa bài theo bậc, giáo án theo chuẩn và chuẩn bị bài. Chúng có thể được thả vào một khung tác tử hoặc đọc như những mẫu đã hoàn thiện về lượng cấu trúc mà một quy trình lớp học đáng tin cậy cần.

**Đưa chương trình vào hệ thống quản lý học tập.** Curriculum Sync là bước nền tảng biến một bản đồ chuẩn thành thứ mà một học phần thực sự dùng được trong LMS.

## Dành cho ai

Các nhà phát triển đưa tính năng AI vào sản phẩm chương trình giảng dạy và [[assessment|đánh giá]], cùng các nhóm chương trình hoặc chuẩn cung cấp dữ liệu cho sản phẩm căn theo. [[teacher-role|Giảng viên]] có thể tự dùng kỹ năng tác tử, nhưng kho tự định vị là hạ tầng cho người phát hành công cụ.

## Ghi chú và lưu ý

Mở về [[open-source|mã nguồn]] không làm dữ liệu trở nên mở. Mã Knowledge Graph và Evaluators là MIT, Agent Skills là Apache-2.0, còn mỗi bộ dữ liệu mang nhãn truy cập riêng — Open, Open + Gated hoặc Gated — và nội dung Gated không thuộc các giấy phép mở mà kho viện dẫn, nên xem danh mục bộ dữ liệu trước khi giả định quyền tái sử dụng. Nội dung prompt của evaluator là CC BY 4.0, nhưng kho ngữ liệu có chú giải CLEAR và PERSUADE 2.0 mà nó dùng là CC BY-NC-SA 4.0. Nền tảng và các bộ dữ liệu phía sau cần tài khoản.

## Khái niệm liên quan

- [[curriculum-design]] — đồ thị để căn chỉnh nội dung với chuẩn và chương trình
- [[open-source]] — mã MIT và Apache-2.0, giấy phép dữ liệu theo từng bộ
- [[educational-nlp]] — evaluator là lớp đo văn bản trên đầu ra LLM
- [[agentic-ai]] — kỹ năng đóng gói quy trình để mô hình thực hiện
- [[edtech-platform]] — Curriculum Sync nạp chương trình vào hệ thống quản lý học tập
- [[llm]] — đối tượng đánh giá và bên dùng các kỹ năng