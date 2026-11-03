---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "Agent Skill mã nguồn mở và trình soạn thảo chạy trong trình duyệt, biến mười tám quy tắc viết rõ ràng thành các chế độ nháp, viết lại và rà soát cho văn xuôi."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**Clarity** ghép một Agent Skill với một trình soạn thảo chạy trong trình duyệt, cả hai được dựng quanh mười tám quy tắc cho lối viết "xứng đáng với người đọc". Skill cài vào các tác tử lập trình như Claude Code và Codex bằng `npx skills add addyosmani/clarity`, rồi hoạt động ở ba chế độ: chế độ rà soát phê bình một bản nháp và để nguyên tệp, chế độ viết lại sửa bản nháp tại chỗ, và chế độ phỏng vấn hỏi người viết trước rồi cùng viết từ các câu trả lời. [[feedback|Phản hồi]] mà người viết nhận được nhắm vào nội dung trước tiên, rồi mới tới văn phong. Các quy tắc hỏi bài viết dành cho ai và họ đã biết những gì, thúc đẩy tuyên bố thay cho chủ đề và chi tiết cụ thể thay cho trừu tượng, và coi phần dài dòng là vấn đề không biết bài viết để làm gì chứ không phải vấn đề từ vựng.

Trình soạn thảo trong trình duyệt chạy cục bộ ngay trong trang và không tải bản nháp lên. Nó báo cáo những dấu hiệu của văn xuôi do máy viết, độ dễ đọc, và những lỗ hổng về nội dung, khiến nó hữu ích để rà soát văn bản do [[generative-ai|AI tạo sinh]] tạo ra trước khi văn bản tới tay người đọc. Dự án nói rõ mục tiêu là lối viết vẫn nhận ra được là của chính tác giả, chứ không phải văn xuôi được chế tạo để vượt qua [[ai-detection|khả năng phát hiện AI]], một khác biệt mà giảng viên sẽ nhận ra khi đặt ra chính sách về [[writing-education|việc dạy viết]] có AI hỗ trợ.

## Những điều cần biết trước khi áp dụng

Kho mã công bố một quy trình đánh giá, các mẫu trước–sau trong `samples/`, và những tệp tham chiếu đứng sau skill, nên người rà soát có thể kiểm tra cách các quy tắc hoạt động thay vì tin vào một tuyên bố; trang này không nhắc lại bất kỳ kết quả đo lường nào. Tác giả là Addy Osmani, giấy phép MIT, và công trình mang tính độc lập chứ không phải sản phẩm của một cơ sở nào. Nó còn non và đang hoạt động tích cực: tạo tháng 8 năm 2026, 54 commit, ba bản phát hành với bản mới nhất là phiên bản 0.2.1 vào tháng 9 năm đó, và khoảng 250 sao khi kiểm tra vào tháng 9 năm 2026. Ba người đóng góp đã đưa thay đổi vào. Hướng dẫn của skill được nạp vào một tác tử mà người đọc đã chạy sẵn, nên những lưu ý thông thường về [[prompt-engineering|kỹ thuật prompt]] vẫn áp dụng: chất lượng của phần phê bình phụ thuộc vào bản nháp được đưa cho nó.

## Khái niệm liên quan
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
