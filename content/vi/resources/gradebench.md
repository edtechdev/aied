---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Bảng xếp hạng công khai dành cho các mô hình tiên phong chấm điểm những câu trả lời STEM viết tay thực tế của sinh viên đại học dựa trên các mục rubric mà giảng viên đã chọn."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
contributors: [editor]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [automated-assessment, assessment-validity, benchmark]
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

GradeBench đặt ra một câu hỏi hẹp nhưng hữu ích về [[automated-assessment|chấm điểm tự động]]: với một câu trả lời viết tay của sinh viên, rubric của giảng viên, một lời giải tham chiếu và các mục rubric mà giảng viên thực sự đã chọn, liệu một mô hình tiên phong có chọn đúng những mục đó không? Nhãn vàng là các lựa chọn rubric thực tế của giảng viên và trợ giảng từ các bài thi và bài kiểm tra, không phải đầu ra của mô hình được chấm lại.

## Bạn có thể làm gì với nó

Hãy đọc bảng xếp hạng trước khi tin vào tuyên bố độ chính xác của bất kỳ nhà cung cấp công cụ chấm điểm nào, và đọc cách xây dựng nhiệm vụ trước khi tin vào bảng xếp hạng. [[benchmark]] này gồm 464 nhiệm vụ rút ra từ 125 câu hỏi thuộc 45 học phần [[higher-ed|đại học]] tại hơn mười cơ sở giáo dục, chỉ giới hạn ở các câu hỏi thi và kiểm tra dạng tự luận được giáo sư hoặc trợ giảng rà soát từng dòng, và nghiêng về chấm điểm từng phần — các nhiệm vụ điểm tối đa và điểm không bị giới hạn ở mức 5% mỗi loại vì mô hình thấy chúng dễ.

Bảng xếp hạng hiện tại có mức cao nhất thấp hơn nhiều so với độ đồng thuận giữa người với người: mô hình tốt nhất đạt 57.3% khớp rubric chính xác, và trang web vẽ đồ thị độ chính xác theo chi phí cho mỗi 1,000 câu trả lời, trong đó một mô hình kém hơn 0.8 điểm có chi phí chỉ bằng khoảng một phần bảy. Trục chi phí đó là phần hữu ích về mặt thực tiễn, vì chấm điểm là một hoạt động khối lượng lớn.

Để xem một công cụ thứ hai được xây dựng độc lập, hãy tham khảo [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) của Learning Design Alliance, được đóng gói dưới dạng một kho mã nguồn mở thay vì một bảng xếp hạng trực tuyến, và được tóm tắt trong [[porcaro-ai-grading-benchmark-2026|nghiên cứu của Porcaro]].

## Dành cho ai

Giảng viên đang cân nhắc có nên để một công cụ chấm điểm công bố điểm mà không cần rà soát hay không, chuyên gia đánh giá đang viết các yêu cầu mua sắm, và nhà nghiên cứu cần một mục tiêu ở cấp độ rubric thay vì một hệ số tương quan chấm bài luận.

## Ghi chú và lưu ý

GradeBench do Pensive, một nền tảng chấm điểm AI thương mại, công bố, nên chuẩn đánh giá và sản phẩm cùng chung một chủ sở hữu; cách xây dựng nhiệm vụ được ghi chép đầy đủ và có thể bảo vệ được, nhưng hãy coi cách định khung là của nhà cung cấp. Nó bao gồm các bài thi STEM với rubric có ít nhất bốn mục, tức là loại trừ bài luận, câu trả lời ngắn và bài đăng thảo luận — những định dạng mà phần lớn việc chấm điểm [[humanities-education|nhân văn]] diễn ra. Khớp rubric chính xác là một thước đo nghiêm ngặt: hai người chấm có thể bất đồng về một mục và cả hai đều đúng về phía sinh viên. Các điểm số mô tả những phiên bản mô hình hiện có vào tháng mười một năm 2026 và sẽ còn thay đổi.
