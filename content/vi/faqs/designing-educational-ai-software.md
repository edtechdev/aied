---
title: "Các thực hành tốt nhất và mẹo để thiết kế phần mềm AI giáo dục hiệu quả là gì?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
updated: "2026-10-29T16:56:07-04:00"
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Nhóm của bạn đã có một gia sư nguyên mẫu chạy được và một buổi trình diễn cho quận sau ba tuần. Hoặc một trường đối tác đã nhờ bạn gắn một giao diện chat lên trên trình đọc khóa học của họ, và ai đó nói đây là việc hai tuần. Hoặc một người đánh giá mua sắm đã trả lại phần an toàn kèm một dòng: chính xác thì các bạn đã kiểm thử những gì?

Câu trả lời hẹp hơn hầu hết các đặc tả sản phẩm giả định. AI giáo dục vận hành được như một chuyên gia có giới hạn dưới sự giám sát của con người: năng lực bị giới hạn trong một miền xác định, được neo vào nội dung do giảng viên phê duyệt thay vì vào bộ nhớ của mô hình, được đồng thiết kế với những giáo viên và người học sẽ dùng nó, và được đánh giá trên tương tác nhiều lượt kéo dài. Chính mệnh đề cuối là thứ hầu hết các nhóm bỏ qua. Tác hại sư phạm xuất hiện ở mọi mô hình được thử trong chuẩn đánh giá dưới đây, và tỉ lệ thất bại tăng từ 17,7% ở tương tác một lượt lên 77,8% ở hội thoại nhiều lượt.

## Tóm tắt

**1.** Viết ra hệ thống quyết định gì và giáo viên quyết định gì. Ranh giới đó trở thành kiến trúc.

**2.** Đánh giá tương tác nhiều lượt, nhận biết ngành học, trên chương trình học thật, không phải đánh giá từng prompt đơn lẻ theo một rubric an toàn chung.

**3.** Neo câu trả lời vào nội dung được phê duyệt, và giữ thành phần thẩm định tách biệt khỏi thành phần hội thoại.

**4.** Coi mọi bài nộp của sinh viên là đầu vào không đáng tin, kể cả khi hệ thống đang chấm bài đó.

**5.** Xây cổng lần thử, đường leo thang và quyền ghi đè của giáo viên trước khi thí điểm.

**6.** Đưa khả năng tiếp cận và kiểm thử công bằng tách nhóm vào đặc tả thay vì vào danh sách tồn đọng.

## Xác định hệ thống được phép là gì

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Nghiên cứu thiết kế có sự tham gia của Reichert và cộng sự]] với sáu giáo viên trung học chỉnh lại giả định rằng AI giáo dục nên là một tác tử tự trị. Khi được yêu cầu phác thảo [[conversational-ai|chatbot]] lớp học trên giấy, mọi giáo viên đều mô tả một chuyên gia có giới hạn theo hai chiều. Ranh giới thẩm quyền giữ giáo viên trong vị trí kiểm soát, vì trách nhiệm về việc học và sự an toàn của sinh viên không thể ủy thác. Ranh giới chuyên môn phản ánh việc AI thiếu kiến thức ngữ cảnh về từng sinh viên, về động lực lớp học và về chuẩn mực của tổ chức.

Kiến trúc họ phác ra có bốn thành phần (giới hạn phạm vi nội dung, trình bày nội dung, thích ứng với sinh viên, [[teacher-role|giáo viên]] giám sát) trên ba lớp bảo vệ: ranh giới miền giới hạn phạm vi, lọc nội dung cho phép [[personalized-learning|cá nhân hóa]] an toàn, và quyền ghi đè của giáo viên cho những trường hợp mơ hồ. Việc ủy thác có chọn lọc. Khi chiếu lên chín sự kiện giảng dạy của Gagné, giáo viên hoan nghênh AI ở việc trình bày nội dung, cung cấp bài tập luyện và đưa [[formative-assessment|định hình]] [[feedback|phản hồi]], và từ chối nó ở việc đặt mục tiêu hoặc thực hiện [[summative-assessment|đánh giá]] [[assessment|tổng kết]].

Hai mặc định thuộc về cùng bản đặc tả: căn khớp hệ thống với các mục tiêu học tập tường minh, và chỉnh nó theo hướng trả lời tử tế nhưng đúng thay vì đồng ý với bất kỳ ai đang gõ. Một gia sư tán dương một câu trả lời sai đã dạy cho sinh viên rằng câu trả lời đó đúng.

Một chi tiết rẻ bây giờ và đắt về sau: những giáo viên này muốn sự minh bạch về hành vi, những giới hạn nhìn thấy được và các tín hiệu về sự không chắc chắn, hơn là những lời giải thích về lập luận của mô hình. Cả sáu người đều yêu cầu ghi lại toàn bộ hội thoại, cảnh báo theo thời gian thực và khả năng ghi đè, và đặt những yêu cầu đó trong khuôn khổ trách nhiệm nghề nghiệp chứ không phải sự thiếu tin tưởng. Hãy thiết kế cho điều đó ngay từ vòng làm việc đầu tiên, vì việc gắn thêm ghi chép vào một gia sư được xây để trở nên vô hình là một lần viết lại từ đầu.

## Kiểm thử trong hội thoại, không phải trong một lượt

Tổng hợp về [[pedagogical-safety|an toàn sư phạm]] lập luận rằng việc kiểm thử an toàn thông thường là không đủ cho giáo dục. Một hệ thống có thể tránh nội dung độc hại mà vẫn gây hại bằng cách tiết lộ đáp án quá mức, củng cố [[misconceptions|hiểu lầm]], triệt tiêu phản tư, thúc đẩy sự phụ thuộc, hoặc trôi khỏi các mục tiêu giảng dạy.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]], một [[benchmark|chuẩn đánh giá]] như vậy, gắn con số vào điều đó. Trên mọi mô hình được thử, từ các mô hình trọng số mở 3,8 tỷ tham số đến GPT-5-mini, tác hại [[pedagogy|sư phạm]] là phổ quát, quy mô không cải thiện độ an toàn một cách đáng tin cậy, và tỉ lệ thất bại leo thang từ 17,7% ở tương tác một lượt lên 77,8% ở hội thoại nhiều lượt. Các mẫu vi phạm thay đổi theo môn học. Bảng phân loại 11 chiều với 48 rủi ro con của nó bao gồm các nhóm nhận thức, nhận thức luận, [[metacognition|siêu nhận thức]], [[motivation|động lực]] và cảm xúc, phát triển, công bằng và căn khớp giảng dạy, và nó hoạt động như một danh sách kiểm tra thiết kế cũng như một bộ kiểm thử.

Hãy đọc con số leo thang như một phát biểu về kế hoạch kiểm thử của bạn. Một gia sư vượt qua một nghìn phép dò một lượt vẫn có thể thất bại ở bốn trong năm cuộc hội thoại khi sinh viên phản bác hoặc hỏi đến lần thứ ba. Hãy xây bộ khung nhiều lượt trước buổi trình diễn.

## Neo nội dung và tách riêng bộ phận thẩm định

Việc neo nội dung là một quyết định kiến trúc. [[eduguard-safe-rag-llm-tutor|EduGuard]], một gia sư [[rag|tạo sinh tăng cường truy hồi]] an toàn cho [[cs-education|nhập môn lập trình]], ghép việc truy hồi nội dung khóa học đã được giảng viên phê duyệt với một bộ thẩm định khẳng định tách biệt về mặt kiến trúc, kiểm soát [[cognitive-offloading|phụ thuộc quá mức]] một cách tường minh, và một chuẩn đánh giá 600 truy vấn do giảng viên soạn, bao trùm hiểu lầm, gỡ lỗi, truy vấn trộn mã và các prompt đối kháng đòi đáp án trực tiếp. Nó vượt các đường nền gia sư [[socratic-method|Socrates]] dựa trên GPT-4o-mini và Llama.

Phần chuyển được sang là sự tách biệt: các thành phần thẩm định thì không hội thoại, và chuẩn đánh giá bao gồm những prompt được viết để moi đáp án chứ không phải để kiểm tra phép lịch sự. [[hallucination-risk|Rủi ro ảo giác]] bao quát kiểu thất bại mà việc truy hồi được phê duyệt nhằm giới hạn.

## Coi bài làm của sinh viên là đầu vào không đáng tin

Mô hình mối đe dọa mà hầu hết lời khuyên thiết kế bỏ sót nằm ngay bên trong sản phẩm đang được đánh giá. [[humble-prompt-injection-ai-grading-red-team-2026|Đánh giá red-team đối kháng của Humble (2026)]] kiểm tra xem sinh viên có thể thao túng một bộ chấm điểm dựa trên LLM bằng cách chèn prompt trong bài nộp của mình hay không, và việc thao túng đã thành công: những câu chèn nhằm chỉ dẫn, đặt lại khung vấn đề hoặc nhập vai bộ chấm đều làm thay đổi điểm số mà không thay đổi bài làm.

Hãy giữ rubric và các chỉ dẫn ở ngoài cửa sổ ngữ cảnh do sinh viên kiểm soát, loại bỏ hoặc gắn cờ những nội dung giống chỉ dẫn, không bao giờ để một bài nộp tự đặt tiêu chí cho chính nó, và giữ quyết định của con người với mọi điểm số hệ trọng. Một bộ chấm đọc chỉ dẫn của nó từ chính văn bản mà nó đánh giá là đã trao rubric cho thí sinh.

## Làm giàn giáo cho công việc thay vì hoàn thành nó

Một hệ thống trả lời thay sẽ kết thúc việc tư duy mà nó được mua về để hỗ trợ. Hai thứ thuộc về phiếu yêu cầu: một cổng lần thử, để không có đầu ra nào xuất hiện trước khi sinh viên cam kết điều gì đó, và một [[human-in-the-loop-ai|đường leo thang lên con người]] có đích được nêu tên, mà với một sản phẩm cho lớp học thì đích đó là giáo viên, ở dạng một giáo viên có thể hành động được. [[scaffolding|Giàn giáo]] và mẫu [[socratic-method|Socrates]] là phiên bản sản phẩm của những gì một giáo án làm bằng tay; [[developing-ai-tutor|phát triển gia sư AI]] bao quát chẩn đoán, thang gợi ý và phản hồi một cách chi tiết.

## Đưa khả năng tiếp cận và công bằng vào đặc tả

Các yêu cầu về khả năng tiếp cận đủ cụ thể cho một vòng làm việc: thao tác được bằng bàn phím, tương thích với trình đọc màn hình, phụ đề và bản gỡ băng, độ tương phản phù hợp, văn bản thay thế dùng được, và tương thích với các [[ai-technologies|công nghệ]] hỗ trợ. Các tính năng tiếp cận do AI tạo vẫn cần được kiểm tra chất lượng. Xem [[accessibility|khả năng tiếp cận]].

Kiểm thử công bằng nên xem xét toàn bộ đường ống và tách nhóm hành vi theo ngôn ngữ, khuyết tật, văn hóa và các đặc điểm người học liên quan khác thay vì dựa vào độ chính xác gộp. Một hệ thống đạt điểm cao ở mức trung bình và kém với một nhóm là đã giao sản phẩm lỗi cho nhóm đó. Xem [[bias-mitigation|giảm thiểu thiên lệch]] và [[equity-in-ai-education|công bằng]].

## Thiết kế cùng những người sẽ dùng nó

[[ko-hughes-vsd-student-centered-its-2026|Ko và Hughes]] áp dụng thiết kế nhạy cảm với giá trị cho một [[intelligent-tutoring|hệ thống gia sư thông minh]] cùng sinh viên và giảng viên của trường cao đẳng cộng đồng, một nhóm vốn bị bỏ ra ngoài việc thiết kế nền tảng học tập. Họ phát hiện những căng thẳng giá trị cần quản lý chứ không phải giải quyết: minh bạch so với khả năng diễn giải, [[privacy|quyền riêng tư]] so với hiểu biết về giảng dạy, và [[agency|quyền chủ động của sinh viên]] so với [[scaffolding|giàn giáo]] do hệ thống dẫn dắt. Sinh viên thích những lời giải thích cộng tác, có tính người hơn là sự minh bạch thô của mô hình, và nguyên mẫu đã mã hóa 16 tính năng căn khớp với giá trị trên [[explainable-ai|khả năng giải thích]], giám sát của con người và các kiểm soát quyền riêng tư.

[[wang-teacher-ai-co-design-review-2026|Bài tổng quan của Wang, Liu và Islam]] trên 28 nghiên cứu thực nghiệm bổ sung một bộ từ vựng để chọn công cụ. [[generative-ai|AI sinh tạo]] được dùng chủ yếu cho việc lập kế hoạch bài giảng, tạo prompt và phát ý tưởng sáng tạo, với AI đóng vai trò trợ lý hoặc bộ tạo nội dung thường xuyên hơn nhiều so với vai trò đồng thiết kế, cùng bốn khả năng cung cấp là hiệu quả, khả năng đáp ứng, [[creativity|sáng tạo]] và [[equity-in-ai-education|công bằng]], mà giáo viên có thể dùng để xét công cụ nào khớp với vấn đề thiết kế nào.

Cả hai nghiên cứu đều coi thiết kế là sự [[human-in-the-loop-ai|hợp tác có con người trong vòng lặp]], là [[human-ai-collaboration|cộng tác người và AI]], và là [[usability-research|nghiên cứu khả năng sử dụng]] chứ không phải hoạt động tiếp cận cộng đồng. Cả hai đều phát hiện các bên liên quan nêu ra những yêu cầu mà không chuẩn đánh giá độ chính xác nào bắt được, và đó là lập luận thực dụng cho việc chi tiền cho các buổi làm việc: những yêu cầu mà nếu không có chúng, bạn sẽ gặp trong buổi thí điểm.

## Nhóm thiết kế hiểu sai điều gì

An toàn nghĩa là kiểm duyệt nội dung. Tác hại trong một sản phẩm giáo dục thường đến dưới dạng một câu trả lời hữu ích vào sai thời điểm. SafeTutors phát hiện tác hại sư phạm ở mọi mô hình được thử và tỉ lệ thất bại tăng lên 77,8% qua một cuộc hội thoại, một loại vấn đề mà các bộ lọc nội dung không được xây để nhìn thấy.

Một mô hình lớn hơn sẽ sửa được phần sư phạm. Quy mô không cải thiện độ an toàn một cách đáng tin cậy trong khoảng từ các mô hình trọng số mở 3,8 tỷ tham số đến GPT-5-mini.

Một chỉ mục truy hồi tốt nghĩa là nội dung đã được xử lý. EduGuard ghép truy hồi với một bộ thẩm định riêng và kiểm thử các prompt đối kháng đòi đáp án trực tiếp, vì truy hồi được neo vẫn để lại một đường dẫn tới việc tiết lộ quá mức.

Giáo viên là phương án dự phòng. Cả sáu giáo viên trong nghiên cứu thiết kế đều yêu cầu ghi chép, cảnh báo và khả năng ghi đè như một điều kiện của trách nhiệm nghề nghiệp. Một phiếu hỗ trợ không phải là quyền ghi đè.

Khả năng tiếp cận là một phiếu làm sau. Nó nằm trong đặc tả hoặc nó trở thành một lần viết lại, và văn bản thay thế cùng phụ đề do AI tạo vẫn cần con người kiểm tra.

## Những gì sẽ quay lại với bạn

**“Chúng tôi không thể xây bộ khung đánh giá trước khi ra mắt.”** Hãy xây một bộ nhỏ. Khẳng định đầu tiên bạn cần là điều gì xảy ra qua năm lượt. Lấy 40 câu hỏi thật từ chương trình học, chạy mỗi câu như một cuộc hội thoại năm lượt với một sinh viên phản bác gợi ý, và chấm theo 11 chiều. Đó là một phần an toàn bảo vệ được và nó vừa một vòng làm việc.

**“Giáo viên muốn sửa prompt, và chúng tôi không bảo đảm được họ viết gì.”** Vậy thì thu hẹp bề mặt họ được sửa. Prompt hệ thống vẫn là của bạn; mục tiêu, nội dung được phê duyệt, thang gợi ý và người liên hệ khi leo thang là của họ. Kiến trúc chuyên gia có giới hạn tồn tại để việc cấu hình vẫn nằm trong phạm vi bạn kiểm thử được.

**“Điểm chuẩn đánh giá của chúng tôi cao.”** Độ chính xác trên các câu trả lời một lượt không dự báo hành vi qua một cuộc hội thoại, và chuẩn đánh giá đo điều thứ hai đã phát hiện 77,8% thất bại trong bối cảnh nhiều lượt trên mọi mô hình nó thử. Hãy báo cáo cả hai con số, nếu không con số thứ nhất sẽ bị đọc như con số thứ hai.

**“Ghi chép đầy đủ là một vấn đề quyền riêng tư.”** Đúng là vậy, và điều đó đòi hỏi giới hạn mục đích chứ không phải sự vắng mặt. Hãy ghi lại những gì giáo viên cần để hành động, giảm thiểu phần còn lại, hạn chế quyền truy cập, và nói rõ trong sản phẩm những gì được giữ và trong bao lâu.

## Việc cần làm trong tuần này

**1.** Viết ranh giới thẩm quyền trên một trang: hệ thống quyết định gì, giáo viên quyết định gì, và bạn sẽ bảo vệ điều nào trong một buổi đánh giá mua sắm.

**2.** Biến bảng phân loại 11 chiều thành một kế hoạch kiểm thử và chạy nó nhiều lượt trên 40 câu hỏi thật từ một khóa học.

**3.** Tách bộ phận thẩm định khỏi bộ phận tạo sinh trong tài liệu thiết kế, kể cả khi bản dựng đầu tiên chạy chúng trong một tiến trình.

**4.** Thêm cổng lần thử, đích leo thang và quyền ghi đè của giáo viên vào hàng đợi, kèm tên người phụ trách.

**5.** Đưa danh sách khả năng tiếp cận và một yêu cầu tách nhóm vào tiêu chí nghiệm thu của bản phát hành này.

## Đi tiếp từ đây

[[developing-ai-tutor|Phát triển gia sư AI]] bao quát việc xây dựng, và [[designing-ai-into-learning|thiết kế AI vào việc học]] bao quát các mặc định sư phạm quanh nó. Về việc thứ này có vận hành khi đã triển khai hay không, xem [[checking-whether-educational-ai-works|kiểm tra xem AI giáo dục có vận hành không]]; về các khái niệm an toàn đứng sau kế hoạch kiểm thử, xem [[pedagogical-safety|an toàn sư phạm]] và [[hallucination-risk|rủi ro ảo giác]]; về bối cảnh mua sắm, xem [[legal-issues-and-risks|vấn đề pháp lý và rủi ro]].
