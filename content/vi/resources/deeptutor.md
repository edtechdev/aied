---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Bản mã nguồn mở của khung dạy kèm tác tử DeepTutor: một không gian làm việc cho dạy kèm, tạo câu hỏi, luyện thành thạo, nghiên cứu và trực quan hóa, với bộ nhớ người học có thể kiểm tra."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**DeepTutor** là bản mã nguồn mở của khung dạy kèm được đánh giá trong [[intelligent-tutoring|nghiên cứu DeepTutor]], và nó đã phát triển vượt xa phạm vi của bài báo đó thành một không gian làm việc học tập tác tử tổng quát. Dạy kèm, giải bài, tạo câu hỏi trắc nghiệm, luyện thành thạo, nghiên cứu và trực quan hóa dùng chung một môi trường thực thi năng lực và một ngữ cảnh phiên, nên hồ sơ người học được dựng lên trong khi giải bài định hình những lời giải thích và các mục luyện tập tiếp theo.

## Bạn có thể làm gì với nó

Mười chế độ — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading và Immersive Watching — chạy trên cùng một môi trường thực thi, dựa vào các cơ sở tri thức, sách, bản nháp, sổ ghi, ngân hàng câu hỏi và persona có thể tái dùng. Việc truy xuất cố ý dùng nhiều công cụ: các thư viện RAG có phiên bản trên LlamaIndex, PageIndex, GraphRAG, LightRAG hoặc một máy chủ LightRAG từ xa, cùng một cơ sở WeKnora tự vận hành, một thư viện Tencent IMA hay MarginNote, hoặc một kho Obsidian được liên kết. Bộ nhớ có thể kiểm tra chứ không mờ đục: các vết L1, tóm tắt bề mặt L2 và phần tổng hợp L3 đều hiển thị và sửa được, với một Đồ thị Bộ nhớ nối mỗi bản tóm tắt với bằng chứng đứng sau nó. Một tệp nhị phân `deeptutor` cung cấp REPL trong terminal và phát NDJSON cho bất kỳ tác tử nào muốn điều khiển nó như một công cụ, và một cộng đồng EduHub phân phối các skill cài đặt được.

## Dành cho ai

Giảng viên và nhà nghiên cứu giáo dục đại học muốn một bản triển khai được của khung mà bài báo báo cáo, các nhà phát triển xây trên một môi trường thực thi cắm ghép được, và những người tự học sẵn lòng vận hành phiên bản của riêng mình. Tài liệu ở deeptutor.info.

## Ghi chú

Cấp phép Apache 2.0, ở phiên bản 1.6.9 tính đến tháng 9 năm 2026 với khoảng 40,000 sao GitHub. Đánh giá đã công bố đứng sau nó — mức cải thiện trung bình 10.8% trên các chỉ số cá nhân hóa so với các đường cơ sở mạnh và lập luận tác tử tổng quát mạnh hơn 29.4% trên năm mô hình nền, trên bộ đánh giá TutorBench — được tóm tắt trong [[zhao-deeptutor-agentic-personalized-tutoring-2026|trang bài viết]], và những hạn chế của trang đó cũng áp dụng ở đây. Như với mọi bộ công cụ AI mã nguồn mở, bạn tự cung cấp khóa nhà cung cấp mô hình, và một bản triển khai trên máy tính để bàn hay máy chủ cần Python 3.11 và Node.

## Khái niệm liên quan
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
