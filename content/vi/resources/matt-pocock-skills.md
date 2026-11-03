---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Bộ sưu tập agent skill mã nguồn mở của Matt Pocock: những tệp hướng dẫn nhỏ, ghép được, gồm một skill dạy học nhiều phiên, một skill chất vấn và hướng dẫn viết tài liệu cho tác tử."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**Skills for Real Engineers** là thư mục agent skill được Matt Pocock công bố: những tệp hướng dẫn nhỏ, ghép được, cài vào Claude Code, Codex hoặc một tác tử khác, được viết để điều chỉnh chứ không phải áp dụng nguyên khối. Phần lớn bộ sưu tập phục vụ công việc phần mềm, nhưng một số skill là công cụ giáo dục được xây cho việc dạy và việc đặt câu hỏi chứ không phải cho mã.

Ví dụ rõ nhất là `teach`, chạy qua nhiều phiên và coi thư mục làm việc như một không gian dạy học có trạng thái, nên tiến độ và những câu hỏi còn mở của người học tồn tại giữa các cuộc trò chuyện thay vì khởi động lại mỗi lần. `grill-me` và nguyên thủy `grilling` đứng sau nó chất vấn người dùng không ngừng về một kế hoạch cho tới khi mọi nhánh được giải quyết, tức là [[socratic-method|đặt câu hỏi kiểu Socrates]] như một thủ tục tái dùng được chứ không phải một tâm trạng trò chuyện. `wait-what` phản hồi ngay khi một thông điệp không tới được người nghe bằng cách trình bày lại nó bằng ngôn ngữ thường kèm ngữ cảnh còn thiếu, một động tác mà bất kỳ giảng viên nào cũng nhận ra khi thấy một lời giải thích trượt ngay lần đầu. `writing-for-agents` bao quát cách viết tài liệu mà một [[prompt-engineering|tác tử]] theo được, hiện là hình thức thực tiễn của việc viết hướng dẫn cho học liệu khóa học do [[pedagogical-agent|AI]] tạo. `to-questionnaire` chuyển một quyết định thành bảng hỏi cho người có thể trả lời nó, `handoff` nén một cuộc trò chuyện thành tài liệu để một tác tử khác tiếp tục, và `wizard` tạo một buổi hướng dẫn tương tác cho những bước chỉ con người làm được.

## Những điều cần biết trước khi áp dụng

Mọi thứ là [[open-source|mã nguồn mở]] theo MIT và miễn phí để lấy làm điểm khởi đầu cho [[ai-literacy|năng lực AI]] cục bộ hoặc [[self-directed-learning|việc tự học]]. Mức độ tiếp nhận lớn và chuyển động nhanh: khoảng 270,000 sao và 23,000 bản fork khi kiểm tra vào tháng 9 năm 2026, với commit gần nhất ngày 18 tháng 9 năm 2026. Lưu ý nằm ở phạm vi. Các skill giả định bối cảnh làm việc của một [[human-ai-collaboration|kỹ sư]], chúng được chia vào các nhóm kỹ thuật, năng suất, ngừng dùng và đang làm dở, nên một số mục rõ ràng chưa hoàn thành hoặc đã bị rút, và README đồng thời là một chỗ đăng ký bản tin. Hãy coi các skill dạy học và đặt câu hỏi là phần chuyển giao được, và dự trù viết lại bất kỳ skill nào trong số đó trước khi đưa nó ra trước sinh viên.

## Khái niệm liên quan
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
