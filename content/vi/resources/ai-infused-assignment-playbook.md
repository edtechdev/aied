---
title: "Sổ tay bài tập lồng ghép AI"
created: "2026-10-10T10:25:00-04:00"
type: resource
summary: "Hướng dẫn 95 trang của Sarah Lewis (CC BY 4.0) giúp thiết kế bài tập để sinh viên dùng AI tạo sinh công khai mà vẫn tự suy nghĩ, kèm 17 mẫu bài tập có rubric và bảng ghi chép."
url: https://zenodo.org/records/23218828
author: "Sarah Lewis"
author_url: https://ror.org/04r1hh402
resource_type: [ebook or guide, collection of activities, assessment instrument]
access: [free]
license: "CC BY 4.0"
last_verified: "2026-10-10"
foundations: [ai-literacy, critical-thinking, cognitive-offloading]
pedagogy: [active-learning, metacognition, productive-failure]
technology: [generative-ai, prompt-engineering]
ethics: [ai-use-disclosure, pedagogical-safety]
assessment: [formative-assessment, authentic-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, student-guide-to-ai, process-feedback, id-toolbox]
translation_of: resources/ai-infused-assignment-playbook
source_updated: "2026-10-10T10:25:00-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**Sổ tay bài tập lồng ghép AI** là một hướng dẫn thực hành của Sarah Lewis (Đại học Barry, ngành công tác xã hội) dành cho giảng viên muốn tích hợp AI tạo sinh một cách có chủ đích thay vì gắn thêm nó vào những bài tập sẵn có. Sổ tay ghép một nền tảng sư phạm — mục tiêu học tập, tư duy phản biện, quyền tự chủ của sinh viên, tính minh bạch và những ranh giới hợp lý cho việc dùng AI — với các mẫu bài tập linh hoạt, khuôn khổ thiết kế, prompt, ví dụ và hướng dẫn triển khai mà giảng viên có thể dùng ở nhiều ngành. Mục tiêu được nêu rõ không phải là quy định một cách tiếp cận AI duy nhất, mà là giúp nhà giáo dục thiết kế những trải nghiệm học tập trong đó việc dùng AI có mục đích, minh bạch và khớp với những gì sinh viên được kỳ vọng học và thể hiện.

## Bạn có thể làm gì với nó

Sổ tay được tổ chức quanh một luận điểm ở Chương 1 rằng học tập là *kiến tạo mạng lưới*, không phải tích lũy thông tin — câu hỏi [[cognitive-offloading|giảm tải nhận thức]] ở trung tâm cuộc tranh luận về [[ai-literacy|năng lực AI]] — nên câu hỏi thực sự là liệu AI có hỗ trợ hay đi vòng qua công việc xây dựng mạng lưới đó. Mỗi bài tập được dựng từ năm nguyên tắc thiết kế [[formative-assessment|đánh giá định hình]]: **prompt có cấu trúc, chứ không phải việc dùng AI mơ hồ** (sinh viên xác định mục đích, các khái niệm liên quan, hiểu biết hiện tại và sự trợ giúp cụ thể mình tìm kiếm *trước khi* được phép đưa prompt); **đánh giá có phê phán đầu ra của AI** (sinh viên ghi lại những gì mình chấp nhận, sửa và loại bỏ, kèm lý do); **ghi chép và minh bạch** (prompt, trích đoạn phản hồi của AI, nhật ký quyết định và lý lẽ khiến việc sử dụng có thể đánh giá được); **phản tư siêu nhận thức**; và **kiểm chứng kiến thức** qua những bài kiểm tra ngắn không mở tài liệu.

Chương 3 cung cấp một bài tập mẫu được triển khai đầy đủ (Viết lặp có AI hỗ trợ) cùng mười sáu mục mẫu rút gọn — Phản tư qua đối thoại với AI, Trợ lý AI cho tổng quan tài liệu, Phát hiện thiên lệch bằng AI, Phản tư với bạn học tập AI, Tự đánh giá có AI hỗ trợ, Đối tác tranh luận AI, Mô phỏng khách hàng bằng AI, Kiểm thử tình huống bằng AI, Dự án nhóm do AI điều phối, Đánh giá đồng đẳng có so sánh với AI, Xây dựng chính sách sử dụng AI chuyên nghiệp, và Hồ sơ tích hợp AI minh bạch. Phụ lục A cung cấp Nhật ký cộng tác AI–Người để ghi lại quá trình. Giảng viên có thể lấy từng bài tập riêng lẻ hoặc chọn một cụm làm xương sống tích hợp AI cho cả học phần.

## Dành cho ai

Giảng viên ở nhiều ngành, đặc biệt trong giáo dục đại học và các chương trình chuyên môn (tác giả viết từ ngành công tác xã hội, còn điều dưỡng và chăm sóc sức khỏe được nêu là những bối cảnh song song), cùng những người phát triển đội ngũ giảng viên và những người đang chuẩn bị bằng chứng kiểm định. Sổ tay giả định sinh viên đã dùng AI và rằng phản ứng có trách nhiệm là đưa việc sử dụng đó ra ánh sáng, cấu trúc hóa nó, và dạy sinh viên dùng AI tốt thay vì hy vọng họ tránh nó.

## Ghi chú và lưu ý

Đây là hướng dẫn thực hành, không phải nghiên cứu thực nghiệm; những tuyên bố về việc sinh viên dùng AI dựa trên các nguồn bên ngoài được trích dẫn (BestColleges, Campbell, Digital Education Council, Flaherty) chứ không phải dữ liệu mới. Khuôn khổ "kiến tạo mạng lưới" và cách đóng khung "ảo tưởng về hiểu biết" được lấy từ tài liệu rộng hơn (Wigmore và cộng sự; Williamson và cộng sự) và được trình bày như lý lẽ sư phạm, không phải kết quả đã kiểm nghiệm của chính sổ tay. Các bài tập là mẫu do tác giả soạn — không bài nào được báo cáo kèm cỡ hiệu ứng, nên cần coi chúng là những thiết kế để điều chỉnh và đánh giá tại chỗ. Xuất bản 2026-10-07, v1, trên Zenodo theo CC BY 4.0; tải miễn phí không cần tài khoản. Tính đến thời điểm thu thập, bản ghi chỉ có khoảng 35 lượt xem và khoảng 14 lượt tải, nên nó chưa được dùng hay bình duyệt nhiều ở bên ngoài.

## Khái niệm liên quan

- [[ai-literacy]]
- [[critical-thinking]]
- [[cognitive-offloading]]
- [[metacognition]]
- [[academic-integrity]]
- [[formative-assessment]]
- [[authentic-assessment]]
- [[curriculum-design]]
- [[ai-use-disclosure]]
- [[prompt-engineering]]
