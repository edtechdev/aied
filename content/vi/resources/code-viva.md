---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Công cụ trình duyệt miễn phí chạy một buổi vấn đáp mã bằng văn bản, có giới hạn thời gian cho từng sinh viên trong học phần lập trình, đề xuất điểm kèm trích dẫn bằng chứng để giảng viên duyệt."
url: https://code-viva.pisan.me/
author: "Code Viva"
author_url: https://code-viva.pisan.me/
resource_type: [software]
access: [free]
last_verified: "2026-11-04"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-11-04T17:55:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Code Viva chạy một phiên bản viết, có giới hạn thời gian của một buổi [[oral-assessment|vấn đáp]] cho từng sinh viên trong một học phần lập trình, mỗi phiên khoảng mười lăm đến hai mươi phút, không có giảng viên trong phòng. Nó đọc mã và lịch sử commit mà sinh viên đã nộp, viết bốn đến sáu câu hỏi về chính các hàm, tên biến và commit của sinh viên đó, và gửi cho mỗi sinh viên một liên kết riêng để trả lời.

## Bạn có thể làm gì với nó

Bài nộp đến từ một bản xuất Gradescope, một tệp zip tải từ Canvas, một tệp zip mỗi sinh viên một thư mục, hoặc GitHub Classroom với một token đọc. Giảng viên đặt độ dài phiên, số câu hỏi và hạn chót, đánh dấu thời gian gia hạn ở mức 1.25x đến 3x, và đọc, sửa hoặc thay các câu hỏi được tạo trước khi gửi liên kết. Câu hỏi bao quát trường hợp cơ sở của đệ quy, các chốt chặn biên, lựa chọn cấu trúc dữ liệu, những tên biến khó hiểu, quy mô và việc lần theo mã, các câu lấy từ đề bài, và những mẫu commit như một commit gộp lớn hay commit lúc đêm muộn. Câu trả lời quay về dưới dạng mã phản hồi, và màn hình rà soát hiển thị từng bản ghi bên cạnh một điểm đề xuất từ 0 đến 3 kèm những câu làm căn cứ, cùng một hàng đợi gắn cờ được sắp theo mức cần một cuộc trò chuyện. Kết quả xuất ra CSV, và mười một học phần demo cho phép người đọc thử toàn bộ vòng lặp trên dữ liệu hư cấu.

## Dành cho ai

Giảng viên các học phần lập trình muốn có bằng chứng rằng sinh viên giải thích được chính mã của mình, và muốn nói chuyện với một danh sách sinh viên ngắn thay vì với tất cả; các câu hỏi về commit khiến nó trở thành một hình thức [[process-oriented-assessment|đánh giá hướng quá trình]].

## Ghi chú và lưu ý

Mọi thứ chạy trong trình duyệt: học phần nằm trong bộ nhớ cục bộ kèm một bản xuất JSON, câu hỏi đi trong phần của liên kết mà trình duyệt không gửi lên máy chủ, và câu trả lời chỉ quay về dưới dạng mã do sinh viên chọn gửi, nên không có dữ liệu sinh viên nào tới bên thứ ba. Bộ tạo câu hỏi dựa trên quy tắc chứ không do mô hình điều khiển. Theo chính lời công cụ, bộ đọc mã của nó là heuristic, nên định dạng lạ hoặc macro có thể che mất một hàm, và một điểm số có thể thưởng cho việc biết từ vựng thay vì hiểu mã, đó là lý do các điểm chỉ là đề xuất để giảng viên duyệt và lý do nó khuyên giữ mức rủi ro thấp. Không có giấy phép và không có kho mã nguồn nào được công bố, và vì liên kết mang theo các câu hỏi nên chúng dài vài kilobyte, đủ dài để bị xuống dòng trong một ô tin nhắn của hệ thống quản lý học tập.

## Khái niệm liên quan

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
