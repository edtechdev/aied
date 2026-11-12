---
title: "Kiểu câu hỏi Văn bản AI của Moodle"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "Kiểu câu hỏi Moodle mã nguồn mở (GPL v3) chấm câu trả lời tự luận bằng mô hình ngôn ngữ lớn theo prompt riêng của từng câu hỏi và thang chấm tùy chọn, dùng OpenAI, Azure hoặc mô hình Ollama tự lưu trữ và hiển thị phản hồi của AI cho người chấm."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
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

Phần lớn tích hợp trắc nghiệm AI gửi mọi câu trả lời tới một lệnh chấm cố định. Kiểu câu hỏi Moodle này làm ngược lại: giảng viên viết tiêu chí chấm. Mỗi câu hỏi mang một **prompt** nói cho mô hình biết đánh giá câu trả lời thế nào và một **thang chấm** tùy chọn mô tả cách trao điểm, nên một mục "viết một câu ở thì quá khứ" có thể quy định mười điểm nếu không có lỗi, không điểm nếu ngữ pháp hỏng, và trừ một điểm mỗi lỗi chính tả. Mô hình trả về điểm và [[feedback|phản hồi]], và giảng viên có thể thấy phản hồi đó bên cạnh câu trả lời khi chấm tay.

## Bạn có thể làm gì với nó

Thêm một câu hỏi AIText vào bất kỳ bài trắc nghiệm Moodle nào, viết prompt và thang chấm, rồi thử prompt bằng một **bộ thử prompt** AJAX trong biểu mẫu chỉnh sửa thay vì lặp qua các lần xem trước. Việc chấm chạy qua hai hành vi câu hỏi đồng hành (tức thời và hoãn lại) phải được cài cùng kiểu câu hỏi, điều này giữ việc chấm bằng AI tách khỏi các hành vi lõi của Moodle; những lần làm bài cũ dùng hành vi `interactivecountback` cũ sẽ được chuyển khi nâng cấp. Nếu không kết nối được mô hình, việc chấm bị giảm chất lượng thay vì báo lỗi, nên không mất lượt làm bài. Vì câu hỏi là kiểu trắc nghiệm gốc, kết quả vào sổ điểm như mọi mục khác — đúng điều một nhóm học phần cần trước khi có thể coi [[automated-assessment|chấm điểm tự động]] là thí điểm thay vì bản demo.

Thiết kế cũng đặt tiêu chí chấm ở nơi [[ai-feedback-quality|chất lượng phản hồi]] được quyết định: trong prompt do giảng viên viết, chứ không phải mặc định của nhà cung cấp. Đó là cách dùng trung thực của công cụ — tiêu chí bạn có thể xem xét và sửa — dù nó cũng có nghĩa trần chất lượng chính là tiêu chí, và một prompt mơ hồ tạo ra cách chấm mơ hồ. Các cơ sở dùng nó cho những lần kiểm tra thường xuyên, ít rủi ro mà [[formative-assessment|đánh giá hình thành]] dựa vào, nơi nếu không thì một người phải đọc bốn mươi câu trả lời ngắn mỗi tối.

## Dành cho ai

Quản trị viên và nhà phát triển Moodle đã vận hành trang, giảng viên muốn chấm bằng AI mà không cần nền tảng riêng hay giấy phép thương mại, và nhà nghiên cứu cần một quy trình chấm có thể kiểm soát để nghiên cứu. Nó yêu cầu Moodle 4.5 trở lên và quyền truy cập API tới một mô hình — OpenAI hoặc Azure qua hệ thống con AI của Moodle, hoặc một phiên bản Ollama tự lưu trữ qua Local AI Manager, cách này giữ văn bản của sinh viên trên hạ tầng cục bộ. Plugin do Marcus Green duy trì, có trên chợ plugin Moodle, và có 33 sao cùng 36 bản fork khi trang này được kiểm chứng.

## Ghi chú và lưu ý

Mã nguồn mở theo GPL v3 trở lên, nhưng miễn phí không có nghĩa miễn phí vận hành: ai đó trả tiền cho API mô hình, và chất lượng chấm phụ thuộc vào lựa chọn mô hình và thiết kế prompt. Câu trả lời tự luận rời máy chủ Moodle khi dùng nhà cung cấp từ xa, nên thỏa thuận dữ liệu của cơ sở quy định được gửi gì; tuyến Ollama tự lưu trữ tồn tại cho các trang không thể gửi bài làm của sinh viên ra ngoài. Kho mã không nêu nghiên cứu độ chính xác hay độ đồng thuận nào được công bố, nên không nên tiếp nhận plugin với giả định rằng chấm bằng LLM tương đương chấm bởi người — [[assessment-validity|độ giá trị]] phải được thiết lập tại chỗ so với điểm của người trước khi bất kỳ điểm nào có trọng lượng. Các hành vi đồng hành là phụ thuộc cứng: chỉ cài kiểu câu hỏi sẽ để lại những câu hỏi không chấm được.

## Khái niệm liên quan

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
