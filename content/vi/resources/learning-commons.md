---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Hạ tầng AI mở từ sáng kiến giáo dục của Mark Zuckerberg và Priscilla Chan: một knowledge graph về chuẩn học thuật, chương trình giảng dạy và dữ liệu khoa học học tập, các evaluator để đánh giá đầu ra của LLM, và kỹ năng tác tử độc lập với mô hình cho quy trình làm việc của giáo viên."
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**Learning Commons** là sáng kiến giáo dục của Mark Zuckerberg và Priscilla Chan, ra mắt năm 2025 nhằm đưa công trình khoa học học tập của Chan Zuckerberg Initiative vào hạ tầng mà sản phẩm edtech thực sự dựa lên. Lập luận của nó là về hạ tầng chứ không phải sư phạm: nghiên cứu, chuẩn học thuật và chương trình tốt đều đã có, nhưng nằm trong hệ thống riêng rẽ, nên nhà phát triển xây trên thứ dễ tiếp cận nhất. Tổ chức công bố ba công cụ mở trên GitHub — Knowledge Graph, bộ Evaluators và [[agentic-ai|Agent Skills]] — và vận hành nền tảng có thêm Curriculum Sync để nạp chương trình vào [[edtech-platform|hệ thống quản lý học tập]].

## Bạn có thể làm gì với nó

**Knowledge Graph** mô hình hóa chuẩn học thuật, chương trình và nghiên cứu khoa học học tập thành thực thể và quan hệ dưới lược đồ chung, để công cụ có thể căn chỉnh nội dung với chuẩn mà không phải tự xây đường ống dữ liệu. **Evaluators** đo thuộc tính của [[llm|đầu ra LLM]] qua lăng kính khoa học học tập — độ phức tạp văn bản, [[feedback]], mức căn chỉnh với chuẩn và kỹ năng bền vững — kèm SDK Python và TypeScript trên npm và PyPI để chấm điểm nội dung hay so sánh mô hình ứng viên. **Agent Skills** đóng gói hướng dẫn, tài liệu tham chiếu và rào chắn cho quy trình giáo viên ở định dạng mở, độc lập mô hình: kiểm tra hiểu bài, phân hóa bài theo bậc, giáo án theo chuẩn và chuẩn bị bài. Thực tế, đồ thị khiến hai công cụ kia đáng tin: căn chỉnh nội dung là tuyên bố, đồ thị là tham chiếu để đối chiếu.

## Dành cho ai

Các nhà phát triển đưa tính năng AI vào sản phẩm [[curriculum-design|chương trình giảng dạy]] và đánh giá, cùng các nhóm chương trình hoặc chuẩn cung cấp dữ liệu cho sản phẩm căn theo. Giảng viên có thể tự dùng kỹ năng tác tử, nhưng kho tự định vị là hạ tầng cho người phát hành công cụ.

## Ghi chú và lưu ý

Mở về [[open-source|mã nguồn]] không làm dữ liệu trở nên mở. Mã Knowledge Graph là MIT, còn mỗi bộ dữ liệu mang nhãn truy cập riêng — Open, Open + Gated hoặc Gated — và nội dung Gated không thuộc các giấy phép mở mà kho viện dẫn, nên xem danh mục bộ dữ liệu trước khi giả định quyền tái sử dụng. Mã evaluator là MIT và nội dung prompt là CC BY 4.0, nhưng kho ngữ liệu có chú giải CLEAR và PERSUADE 2.0 mà nó dùng là CC BY-NC-SA 4.0. Nền tảng và các bộ dữ liệu phía sau cần tài khoản. Hoạt động kho tính đến 2026-11-04: 167 sao cho Knowledge Graph, 88 cho Evaluators, 41 cho Agent Skills. Sáng kiến do CZI tài trợ, và cách định khung vấn đề là của chính nhà tài trợ.

## Khái niệm liên quan

- [[curriculum-design]] — đồ thị để căn chỉnh nội dung với chuẩn và chương trình
- [[open-source]] — mã MIT và Apache-2.0, giấy phép dữ liệu theo từng bộ
- [[educational-nlp]] — evaluator là lớp đo văn bản trên đầu ra LLM
- [[agentic-ai]] — kỹ năng đóng gói quy trình để mô hình thực hiện
- [[edtech-platform]] — Curriculum Sync nạp chương trình vào hệ thống quản lý học tập
- [[llm]] — đối tượng đánh giá và bên dùng các kỹ năng