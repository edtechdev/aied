---
title: "Tác tử AI có thể hỗ trợ sinh viên và giảng viên như thế nào?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
updated: "2026-10-29T16:56:06-04:00"
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Một buổi demo của nhà cung cấp kéo dài bốn mươi phút. Tác tử đọc đề cương, soạn bài kiểm tra tuần sau, gắn cờ ba sinh viên chưa mở tài liệu đọc, và đề nghị gửi email cho họ. Hiệu trưởng của bạn muốn có quyết định mua giấy phép trước cuối tháng.

Một [[agentic-ai|tác tử]] lập kế hoạch, gọi công cụ, giữ ngữ cảnh, chia việc thành các nhiệm vụ con và thích ứng qua các lượt, tức là làm nhiều hơn một [[conversational-ai|chatbot]]. Những vai trò phía sinh viên và phía giảng viên mà điều đó mở ra là có thật. Bằng chứng không cho thấy nhiều quyền tự chủ hơn tạo ra nhiều việc học hơn: trong nghiên cứu so sánh trực tiếp duy nhất ở đây, một tác tử và một chatbot hòa nhau. Hãy đặt quyền tự chủ ở nơi có người kiểm tra đầu ra, giữ việc lập kế hoạch với người học, và chấm chất lượng giảng dạy theo rubric của chính bạn.

## Tóm tắt

**1.** Gọi tên công việc trước khi chọn sản phẩm.

**2.** Bắt đầu ở phía giảng viên, nơi đã có một giáo viên kiểm tra công việc.

**3.** Coi quyền tự chủ tăng thêm là một chi phí cho tới khi bằng chứng nói khác.

**4.** Giữ việc lập kế hoạch và việc phán đoán với người học, vì đó là những thứ bài tập tồn tại để xây.

**5.** Chấm tác tử theo rubric của bạn, và lên lịch một bài kiểm tra không có trợ giúp trước khi thí điểm kết thúc.

## Chọn công việc trước khi chọn tác tử

[[agentic-workflows-education|Các quy trình tác tử trong giáo dục]] gọi tên bốn năng lực lặp lại: phản tư, lập kế hoạch, dùng công cụ và cộng tác đa tác tử. Mỗi năng lực thêm một chi phí bên cạnh khả năng mới, ở các mặt [[explainable-ai|khả năng diễn giải]], phối hợp, [[trust-calibration|niềm tin]], độ trễ và giám sát.

Các vai trò phía sinh viên chạy từ dạy kèm [[adaptive-learning|thích ứng]] và lập kế hoạch học tập, qua phản hồi [[formative-assessment|hình thành]], [[problem-solving|giải quyết vấn đề]] có hướng dẫn và việc tạo bài luyện tập, tới các khuyến nghị về kiến thức tiên quyết và [[metacognition|việc nhắc nhở siêu nhận thức]] qua [[prompt-engineering|prompt]] mang tính phản tư. Các vai trò phía giảng viên bao phủ việc phát triển tài liệu, [[automated-question-generation|tạo câu hỏi]] và xác thực, phân loại phản hồi, [[learning-analytics|phân tích]] môn học, thiết kế giảng dạy, truy hồi tài nguyên và điều phối các tác tử con chuyên biệt.

Hai trong số đó an toàn hơn ở giai đoạn đầu, vì cả hai đều tạo ra một sản phẩm mà người ta đọc trước khi sinh viên đọc: một bộ tạo câu hỏi đi kèm một bộ xác thực, và một bản nháp để giáo viên sửa.

## Bắt đầu ở nơi đã có người kiểm tra công việc

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], [[rct|thử nghiệm đối chứng ngẫu nhiên]] đầu tiên về một hệ thống người và AI trong dạy kèm trực tiếp, cung cấp cho gia sư mới vào nghề hướng dẫn theo thời gian thực rút ra từ lý luận của những gia sư giàu kinh nghiệm, trên 900 gia sư và khoảng 1,800 sinh viên. Sinh viên của những gia sư có quyền truy cập có xác suất thành thạo chủ đề cao hơn 4 điểm phần trăm, tăng lên 9 điểm ở những gia sư được đánh giá thấp nhất, những người mà sinh viên đuổi kịp sinh viên của các gia sư được đánh giá tốt hơn trong nhóm đối chứng. Nó tốn khoảng 20 đô la Mỹ mỗi gia sư mỗi năm, và phân tích hơn 550,000 tin nhắn dạy kèm cho thấy các gia sư chuyển từ việc đưa đáp án sang việc đặt câu hỏi dẫn dắt. Đó là AI tăng cường cho [[teacher-role|giáo viên]].

Tác tử không dạy sinh viên. Nó tiếp sức cho một con người giữa cuộc trò chuyện, và con người đó quyết định nói gì. Một người nằm trong vòng lặp và một kết cục gần với công việc là những gì khiến kết quả có thể chuyển sang một môn học khác.

## Đừng giả định nhiều quyền tự chủ hơn mua được nhiều việc học hơn

[[ilieva-agentic-genai-higher-education-2026|Một nghiên cứu với 130 sinh viên trong một môn thương mại điện tử]] phát hiện cả chatbot [[generative-ai|AI sinh tạo]] và tác tử đều được đánh giá cao hơn [[online-teaching-and-learning|học trực tuyến]] truyền thống về việc học và [[personalized-learning|cá nhân hóa]], mà không có khác biệt có ý nghĩa nào giữa chatbot và tác tử. Thêm quyền tự chủ, không thêm giá trị trên những thước đo đó.

Khung của nghiên cứu đó coi tác tử là những đối tác học tập có giới hạn và có con người giám sát, với mục tiêu, điểm kiểm soát và quyết định cuối cùng để cho con người. [[beyond-agent-label-agentic-ai-governance-2026|Vượt ra ngoài nhãn tác tử]] biến điều đó thành một quy tắc [[governance|quản trị]]: quyền tự chủ không nên vượt quá độ chín của bằng chứng hoặc độ mạnh của sự kiểm soát có trách nhiệm của con người, và bằng chứng mạnh nhất ở các kết cục cấp sản phẩm, yếu nhất ở [[learning-gains|việc học]] bền vững và [[equity-in-ai-education|công bằng]].

Rủi ro phía người học chạy theo cùng hướng. Một tác tử lập kế hoạch và giám sát thay cho sinh viên sẽ lấy đi việc luyện tập xây nên [[self-regulated-learning|tự điều chỉnh]] và mời gọi [[cognitive-offloading|giảm tải]]. [[agentic-ai-pedagogical-best-practice-2026|Hướng dẫn thực hành tốt nhất]] yêu cầu ma sát có chủ đích, [[scaffolding|giàn giáo]] mờ dần và [[human-in-the-loop-ai|giám sát của con người]]. [[desirable-difficulties|Ma sát có ích]] có những ví dụ đang vận hành. Các tác tử xung đột kiến tạo, tức là những tác tử tranh luận với một thiết kế yếu, cải thiện kết quả thiết kế trong các nghiên cứu được tổng quan. [[simulating-students|Bạn học được mô phỏng]] hỗ trợ [[collaborative-learning|học cộng tác]] và cách hỏi [[socratic-method|Socratic]], và các [[medical-education|tình huống lâm sàng]] trong [[simulation|mô phỏng]] cho người học tập dượt ở nơi một sai sót thì rẻ.

Phép thử cho bất kỳ cái nào trong số đó: sau phiên, sinh viên làm được gì mà trước đó tác tử đã làm thay? Trao đi phán đoán khiến sinh viên mất đi [[agency|việc luyện tập]] sử dụng nó.

## Kiểm tra tác tử bằng phán đoán của chính bạn

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Tám tác tử giảng dạy AI được triển khai trong một chương trình y khoa]] được xếp hạng khác nhau bởi điểm số do nền tảng tạo ra và bởi một rubric chuyên gia độc lập. Tác tử xếp thứ ba của nền tảng lại đứng cuối về chất lượng giảng dạy. Điểm số nền tảng đánh chỉ số năng lực thực hiện của sinh viên, thứ thay đổi vì những lý do không liên quan gì tới việc giảng dạy.

Hãy hỏi một con số trên bảng điều khiển đếm cái gì, ai viết rubric phía sau nó, và một điểm thấp sẽ trông thế nào trong bài làm của sinh viên. [[pedagogical-safety|An toàn sư phạm]] thuộc cùng một lượt xem xét, vì một chuỗi [[pedagogical-agent|tác tử]] khiến khó nói được thành phần nào chịu trách nhiệm khi một câu trả lời sai.

## Lên kế hoạch cho việc tắt nó đi

Các thử nghiệm ngẫu nhiên cho thấy trợ giúp AI ngắn có thể làm giảm năng lực thực hiện khi không có trợ giúp về sau, và khoảng thời gian sau khi rút bỏ trợ giúp, [[cognitive-washout-ai-skill-decay-2026|rửa trôi nhận thức]], gần như hoàn toàn không được đo. Bản tổng hợp phía sau trang này dựa trên một [[meta-analysis-systematic-review|tổng quan phạm vi]] 474 nghiên cứu và phát hiện công việc tập trung ở [[higher-ed|giáo dục đại học]], [[stem-education|STEM]], các thiết kế ngắn hạn và dạy kèm dựa trên văn bản, với chỉ một thiểu số neo rõ ràng vào lý thuyết giáo dục. Một thí điểm kết thúc khi giấy phép kết thúc đã đo sai khoảng thời gian.

## Nhà quản lý hiểu sai gì về điều này

Một tác tử là một chatbot được nâng cấp, nên việc nâng cấp nên hiện ra trong kết cục. Trong phép so sánh 130 sinh viên, cả hai điều kiện AI đều vượt học trực tuyến và không điều kiện nào vượt điều kiện kia.

Bảng điều khiển xếp hạng chất lượng giảng dạy. Nó xếp hạng năng lực thực hiện của sinh viên, và tám tác tử tạo ra một thứ hạng đảo ngược vị trí thứ ba và vị trí cuối so với một rubric chuyên gia.

Quyền tự chủ là tính năng nên mua. Quy tắc tương xứng chạy theo hướng ngược lại, và bằng chứng mỏng nhất ở nơi quyền tự chủ lớn nhất.

Quyền truy cập thu hẹp khoảng cách công bằng. Quyền truy cập không đồng đều vào các hệ tác tử có năng lực có thể mở rộng khoảng cách đó, và một tác tử tái tạo thiên lệch trong dữ liệu huấn luyện ở quy mô lớn.

## Những gì sẽ quay lại với bạn

**“Sinh viên sẽ để nó làm hết.”** Một số sẽ làm vậy, và kiến trúc quyết định việc đó dễ đến đâu. Những tác tử lập kế hoạch và viết nháp thay sinh viên mời gọi điều đó. Những tác tử yêu cầu một lần thử, rồi đặt một câu hỏi, thì không.

**“Đánh giá của nhà cung cấp nói nó hiệu quả.”** Hãy hỏi con số đó đếm cái gì. Nếu đó là năng lực thực hiện của sinh viên do nền tảng đo, nó đo sinh viên cũng nhiều như đo tác tử.

**“Không ai nói được tác tử nào chịu trách nhiệm trong một chuỗi.”** Đúng với phần lớn các triển khai hiện nay. Hãy chỉ định một người chịu trách nhiệm cho chuỗi, ghi lại thành phần nào tạo ra đầu ra nào, và giữ một điểm kiểm soát của con người trước khi bất cứ thứ gì tới được hồ sơ sinh viên.

## Việc cần làm trong tuần này

**1.** Viết công việc và kết cục bạn sẽ dùng để đánh giá nó, mỗi thứ một câu, trước cuộc gọi tiếp theo với nhà cung cấp.

**2.** Chấm đầu ra của một tác tử theo rubric của bạn trên mười bài làm thật của sinh viên, và giữ lại các điểm số.

**3.** Thêm một nhiệm vụ không có trợ giúp, có ngày và có người chịu trách nhiệm, vào kế hoạch thí điểm.

## Đi tiếp từ đây

[[developing-ai-tutor]] trình bày bản dựng hướng tới sinh viên từ mục tiêu tới thang trợ giúp, và [[evaluating-ai-interventions-methods]] trình bày việc thứ đó có hiệu quả hay không. [[intelligent-tutoring]] và [[ai-literacy]] cung cấp từ vựng thiết kế mà trang này giả định.
