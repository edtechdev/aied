---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Bảng xếp hạng công khai của các công cụ phát hiện văn bản AI được chấm điểm trên RAID, một chuẩn đánh giá được xây dựng để kiểm tra độ vững trước các mô hình, miền, thiết lập giải mã và tấn công đối kháng."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
contributors: [editor]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

RAID là chuẩn đánh giá đứng sau hầu hết các tuyên bố nghiêm túc về [[ai-detection|phát hiện văn bản AI]], và bảng xếp hạng của nó là nơi để kiểm tra xem độ chính xác được công bố của một công cụ phát hiện có còn đứng vững trước sự thay đổi mô hình, miền, thiết lập giải mã hoặc một cuộc tấn công có chủ đích hay không. Các mục được chấm điểm trên tập kiểm tra và có thể được gửi bởi bất kỳ ai tuân theo quy trình gửi bài của kho mã nguồn.

## Bạn có thể làm gì với nó

Lọc theo miền — tóm tắt, sách, tin tức, thơ, công thức nấu ăn, Reddit, bài đánh giá, wiki — theo chiến lược giải mã (greedy hoặc sampling), theo hình phạt lặp lại, và theo tấn công đối kháng, bao gồm khoảng trắng, ký tự đồng hình, thay thế từ đồng nghĩa, diễn giải lại, khoảng trắng độ rộng bằng không và xóa mạo từ. Sau đó so sánh một công cụ phát hiện qua các thước đo: AUROC, TPR tại tỷ lệ dương tính giả 5%, và TPR tại 1%.

Chính tập bộ lọc đó là điểm mấu chốt. Một công cụ phát hiện đạt điểm gần 1.000 trên tổng thể có thể sụt giảm khi văn bản bị diễn giải lại hoặc mô hình nguồn thay đổi, và bảng xếp hạng cho bạn thấy mức sụt giảm đó trước khi một cơ sở giáo dục lấy nó làm căn cứ cho một vụ [[academic-integrity|vi phạm]]. Cột dương tính giả 1% quan trọng nhất trong giáo dục, vì ở quy mô toàn cơ sở, tỷ lệ lỗi 1% nghĩa là hàng trăm sinh viên bị buộc tội oan.

## Dành cho ai

Các nhà nghiên cứu đang đánh giá các phương pháp phát hiện, các nhà quản lý đang viết chính sách có thể viện dẫn một công cụ phát hiện, và các giảng viên muốn có câu trả lời cụ thể cho câu hỏi "điều này có bị phát hiện không?" trước khi nói như vậy trong đề cương môn học.

## Ghi chú và lưu ý

Chuẩn đánh giá này đo lường việc phát hiện văn bản do máy tạo ra, không phải hành vi vi phạm: một sinh viên dùng AI để lập kế hoạch, lên dàn ý hoặc chỉnh sửa sẽ tạo ra văn bản mà các công cụ phát hiện không được xây dựng để bắt, và một sinh viên [[language-learning|viết bằng ngôn ngữ thứ hai]] là một rủi ro dương tính giả đã biết mà bảng xếp hạng không thể hiện. RAID là một sản phẩm nghiên cứu do một nhóm học thuật duy trì; độ phủ bám theo các mô hình sinh văn bản trong tập kiểm tra của nó, nên các mô hình mới hơn có thể chưa được đại diện đầy đủ cho đến khi chuẩn đánh giá được làm mới. Bảng xếp hạng xếp hạng các công cụ phát hiện, không phải cách xử lý dữ liệu của nhà cung cấp, và AUROC cao không nói gì về việc nộp bài làm của sinh viên cho dịch vụ đó có hợp pháp hay hợp đạo đức trong khu vực tài phán của bạn hay không.

## Khái niệm liên quan

- [[ai-detection]] — nhóm phương pháp mà chuẩn đánh giá này kiểm định
- [[academic-integrity]] — bối cảnh chính sách nơi điểm số của công cụ phát hiện được sử dụng
- [[benchmark]] — lớp công cụ rộng hơn mà nó thuộc về
