---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Bảng xếp hạng mô hình cho các chuẩn đánh giá giáo dục hướng đến các quốc gia thu nhập thấp và trung bình, bao gồm sư phạm, năng lực đọc viết nền tảng, SEND, toán trực quan và hiệu năng đa ngôn ngữ, với các cột giá và trọng số mở."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
contributors: [editor]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Fab AI đánh giá các mô hình trên những nhiệm vụ giáo dục có ý nghĩa ở nơi ngân sách, băng thông và độ phủ ngôn ngữ bị hạn chế, tại các [[global-south|quốc gia thu nhập thấp và trung bình]] mà chuẩn đánh giá này được xây dựng để phục vụ, và công bố kết quả dưới dạng một bảng xếp hạng có thể sắp xếp thay vì một bài báo. Bảng cốt lõi chấm điểm một chuẩn đánh giá sư phạm cùng với SEND, toán trực quan và suy luận trực quan, với các tab riêng cho sư phạm đa ngôn ngữ, năng lực đọc viết nền tảng và đánh giá đọc thành tiếng.

## Bạn có thể làm gì với nó

So sánh khoảng 300 mô hình theo điểm sư phạm hiện dao động từ mức thấp của dải chín mươi phần trăm xuống đến 21%, rồi sắp xếp theo những gì một bộ giáo dục thực sự phải cân nhắc: giá mỗi triệu token, số lượng tham số, trọng số mở và ngày phát hành. Độ phân tán ở đáy mới là phần hữu ích. Các mô hình mở dưới 2B nằm trong khoảng 21% đến 43% trên chuẩn đánh giá sư phạm trong khi các mô hình tiên phong nằm ở mức thấp của dải chín mươi phần trăm, điều này biến câu hỏi "chúng ta có thể chạy nó ngoại tuyến trên phần cứng rẻ tiền không" thành một sự đánh đổi được định lượng thay vì một phỏng đoán.

Tab sư phạm [[multilingual-learning|đa ngôn ngữ]] là lý do để đánh dấu trang này. Hầu hết các chuẩn đánh giá giáo dục chỉ có tiếng Anh, và câu hỏi liệu năng lực sư phạm của một mô hình có được bảo toàn khi dịch sang ngôn ngữ khác hay không chính là câu hỏi mà một bộ giáo dục trong hệ thống đa ngôn ngữ cần được trả lời. Dữ liệu có thể tải xuống dưới dạng CSV, nên các so sánh có thể được chạy lại cục bộ.

## Dành cho ai

Các nhà hoạch định chính sách và đội ngũ mua sắm đang chọn mô hình cho các hệ thống cấp quốc gia, các nhà nghiên cứu khảo sát [[digital-divide|khoảng cách tiếp cận]] trong giáo dục có hỗ trợ của AI, và các nhà phát triển cần một mục tiêu sư phạm không phải là một bài thi tiếng Anh.

## Ghi chú và lưu ý

Một bảng xếp hạng đo lường các mô hình trên chính các nhiệm vụ của chuẩn đánh giá: điểm sư phạm cao là bằng chứng về những câu hỏi đó, không phải về một lớp học. Cột giá pha trộn giá token đầu vào và đầu ra theo tỷ lệ 3:1, đó là một lựa chọn mô hình hóa chứ không phải chi phí của bất kỳ đợt triển khai cụ thể nào. Độ phủ ngôn ngữ và của các mô hình lưu trữ cục bộ thay đổi khi các mô hình mới xuất hiện, và điểm số thấp của các mô hình nhỏ một phần phản ánh định dạng nhiệm vụ ngang với phản ánh năng lực. Cách định khung của Fab AI hướng rõ ràng đến các quốc gia thu nhập thấp và trung bình, nên tập câu hỏi của chuẩn đánh giá phản ánh bối cảnh đó và không nên được đọc như một bảng xếp hạng giáo dục chung. Hãy kiểm tra ngày phát hành: một số mục có trước thế hệ mô hình hiện tại.

## Khái niệm liên quan

- [[benchmark]] — lớp công cụ rộng hơn mà nó thuộc về
- [[digital-divide]] — ràng buộc mà các cột giá và trọng số mở được đưa vào để làm cho hiển hiện
- [[equity-in-ai-education]] — câu hỏi chính sách mà bảng xếp hạng cung cấp căn cứ
